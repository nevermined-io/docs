# Nevermined Router — paying external services

You are writing an agent that must **pay** an external service it has no account with — any x402
agent or MPP merchant. If you are *receiving* payments, use `nevermined-payments`.

Full skill: https://github.com/nevermined-io/docs/tree/main/skills/nevermined-router

**The Router pays a price quoted on the wire for one request.** A SaaS API billed by a plan and a
long-lived key is not routable, nor is anything answering `401`/`403` rather than `402` — that wants
**authentication, not payment**. Say so instead of routing it.

Environment: `NVM_API_URL` (`https://api.sandbox.nevermined.app` or
`https://api.live.nevermined.app`), `NVM_API_KEY` (`sandbox:…` / `live:…` — **never send it to the
merchant**; its own auth goes in `headers`), and `NVM_DELEGATION_ID`.

## 1. Create a Delegation (the budget)

`POST $NVM_API_URL/api/v1/delegation/create`, bearer `$NVM_API_KEY`, body
`{"provider":"erc4337","currency":"usdc","spendingLimitCents":500,"durationSecs":604800}` — all four
required, no defaults; `erc4337` is what both stablecoin rails need. Two guards refuse this call
outright, neither retryable:

- `403 BCK.OAUTH.0030` — the key was OAuth-minted; it may not create Delegations or use
  `/router/{payments,route,proxy,svc}`. Use a plain account-owner key — or, for a `commerce` grant,
  `POST /router/commerce/route`.
- `412 {"error":"consent_required","outdated":[…]}` — the account's legal consent lapsed; a human
  must accept. ⚠️ Its only `code` is the generic `BCK.HTTP.412` — branch on `body.error`.

## 2. Fund the buyer wallet

Both rails **pull** from your own wallet: a Delegation authorizes a spend, it does not
supply funds. Read the address off the live Delegation every time (`GET /api/v1/delegation/{id}` →
`providerPaymentMethodId`) — **never a cached one**, the top cause of `402 BCK.ROUTER.0009`, which
does not name the address it checked.

**One x402 network is funded per deployment, fixed by its environment: sandbox → `base-sepolia`,
live → `base`.** A merchant on the other chain is unpayable from here and fails
`400 BCK.ROUTER.0001 … no fundable option` — which looks like a broken service and is not.

## 3. Discover

`GET $NVM_API_URL/api/v1/catalog/services?protocol=x402&search=web+search` — public, no key.

- **Only `protocol` of `x402` or `mpp` is routable.** Filter for them.
- **`targetUrl` is the default endpoint's COMPLETE URL, not a base** — it may already contain the
  path, so concatenating yields `/search/search`. Use `new URL(endpoint.path, service.targetUrl)`.
- `offset` is the page **size**, not a skip count; ordering is shuffled within each tier, so
  `services[0]` is not stable.
- `category` is a **closed 13-value enum**; read it and the free-text `subCategory` from
  `GET /api/v1/catalog/categories`.

## 4. Pay

`POST $NVM_API_URL/api/v1/router/route`, bearer `$NVM_API_KEY`, JSON body
`{ delegationId, url, method, body, requestId }` — the 1st, 2nd and 5th required.

The Router probes, auto-detects the protocol from the 402, pays and relays; `status`/`body` are the
merchant's own, and `paid: false` with no `payment` means it was free. Streaming: `ALL /router/proxy`
with `X-Router-{Target-Url,Delegation-Id,Request-Id}`.

**`requestId` is an idempotency key, not a request counter.** One stable id per purchase, reused
across its retries: the same id returns the original payment, a fresh id buys again — **a fresh
`uuid4()` per attempt is how an agent double-spends.**

**Money.** Budget is debited in **whole cents, rounded up**. `settlement.approxCents` is only the
**merchant** leg; the routing fee rides on top in
`payment.fee`, always present. `fee.capChargedCents` is
what the call **reserved**, not a final figure — a mode-B hop missing `2xx` releases the fee half
back. For spend to date read `GET /api/v1/delegation/{id}` → `amountSpentCents`.

## Guardrails — a refusal is the system working

- `BCK.ROUTER.0003` (402) — Delegation over cap, expired, exhausted, revoked. **Stop.**
- `BCK.ROUTER.0009` (402) — wallet short on the target network; nothing was signed. **Stop.**
- `BCK.ROUTER.0002` (409) — `requestId` already used; the original `paymentId` is in the body.
- `BCK.ROUTER.0001` (400) — bad input / no fundable option / non-allowlisted asset; read `details`.
- `BCK.ROUTER.0008` (403) — legacy API key; create a new one.
- `BCK.ROUTER.0010` (500) — internal. **Never blind-retry:** a credential was minted and no record
  written, so `requestId` won't suppress it.
- `BCK.ROUTER.0011` (402) — card rail: needs 3-D Secure, which an agent can't complete. Nothing
  charged; each retry strands a single-use credential. **Don't auto-retry.**
- `BCK.ROUTER.0013` (500) — we hold no EIP-712 domain for that token: ours, not theirs.
  Nothing charged; report it.
- `BCK.ROUTER.0018` (402) — `maxTotalCents` is below the fee-inclusive rounded reserve.
  No charge/cap debit; may sign. Parse JSON `params` for `requiredTotalCents`.
  Raise only if intended; reuse `requestId`.
- `BCK.ROUTER.0019` (4xx) — cataloged service rejected the request; body withheld, status preserved. Fix it from Catalog detail. No retry.
- `BCK.ROUTER.0020` (5xx/429) — cataloged upstream errored/429; body+headers withheld; no fee; retry w/ backoff; if `X-Router-Payment-Id` returned use a NEW `requestId`, else reuse it.
- Only `BCK.ROUTER.0006` (500), `0007` (429) and `0020` (5xx/429) are **retryable**; everything
  else is a decision, and retrying it unchanged gives the same answer.

**Never widen a Delegation, and never create a second one, to get past a refusal.** The cap is the
user's decision; a fresh one to escape an exhausted Delegation defeats it.

## Accounting

`GET /api/v1/router/payments` (filters `delegationId`/`from`/`to`/`format=csv`) + `/payments/summary`. `amount` is the **merchant leg only** (6dp crypto, 2dp cards); use `assetDecimals` (null ⇒ raw units). `feeStatus` is separate from payment `status`. `Issued` is not an error — the money moved.
