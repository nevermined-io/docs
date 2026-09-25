# Nevermined Router — paying external services

Pay an external x402 agent or MPP merchant through the Router. For receiving payments, use
`nevermined-payments`.

Full skill: https://github.com/nevermined-io/docs/tree/main/skills/nevermined-router

**The Router pays the on-wire price per request.** Plan-billed APIs and `401`/`403` replies need
authentication, not routing.

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

Both rails **pull** from your wallet; a Delegation authorizes spending but supplies no funds.
Read `GET /api/v1/delegation/{id}` → `providerPaymentMethodId` each time. A cached address can
cause `402 BCK.ROUTER.0009`, which does not name the address checked.

**Each deployment funds one x402 network: sandbox → `base-sepolia`, live → `base`.** A merchant
on the other chain fails `400 BCK.ROUTER.0001 … no fundable option`.

## 3. Discover

`https://nevermined.app/catalog/ai-catalog.json` — public, no key, every service; filter
locally. `/api/v1/catalog/services` and `/api/v1/catalog/categories` are **not public** (`403`);
server-side search: Catalog MCP `search_services` (`mcp.live.nevermined.app/mcp`).

- **Only `protocol` of `x402` or `mpp` is routable.** Filter for them.
- **Pay a listed service by `slug`, never by URL** (`409 BCK.ROUTER.0014`). Send
  `endpoint.invokePath ?? endpoint.path` — not `||`: `""` means "append nothing".
- `category` is a **closed 13-value enum**; a typo filters to empty, not an error. Use the
  feed's values.

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
- `BCK.ROUTER.0002` (409) — `requestId` reused; body has the original `paymentId`.
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
- `BCK.ROUTER.0019` (4xx, streaming) — cataloged service rejected the request; body withheld, status preserved. Fix from Catalog detail. No retry.
- `BCK.ROUTER.0020` (5xx/429, streaming) — upstream errored/429; body+headers withheld; no fee; retry w/ backoff; NEW `requestId` if `X-Router-Payment-Id` returned, else reuse.
- `BCK.ROUTER.0024` (413) — body exceeds ~5 MB. **No retry as-is**; reduce it below the limit.
- `BCK.ROUTER.0025` (502) — reply too large; payment unclear. No `X-Router-Payment-Id`; JSON-string `params` may carry `paymentId`. Otherwise, list `GET /api/v1/router/payments` with `delegationId` and `from` just before the call, then match `requestId` in the newest 1000 rows (no `requestId` filter). `status: Failed` means delivery failed, not proof of no charge. Non-null `merchantSettlementObservedAt` confirms x402 settlement; null does not prove no charge, including MPP. Do not retry: the same id returns 409 `BCK.ROUTER.0002` with the original `paymentId` and no reply; a fresh id risks another charge.
- Only `BCK.ROUTER.0006` (500), `BCK.ROUTER.0007` (429), `BCK.ROUTER.0020` (5xx/429) and quote-only `BCK.ROUTER.0028` (503) are **retryable**. Other refusals need a decision.
- `BCK.ROUTER.0028` (503) — `/router/quote` pricing read failed; nothing charged. **Retry w/ backoff**.

**Never widen a Delegation, and never create a second one, to get past a refusal.** The cap is the
user's decision; a fresh one to escape an exhausted Delegation defeats it.

## Accounting

`GET /api/v1/router/payments` (filters `delegationId`/`from`/`to`/`format=csv`) + `/payments/summary`. `amount` is the **merchant leg only** (6dp crypto, 2dp cards); use `assetDecimals` (null ⇒ raw units). `feeStatus` is separate from payment `status`. `Issued` is not an error — the money moved.
