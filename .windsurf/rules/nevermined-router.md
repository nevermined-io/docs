# Nevermined Router — paying external services

Pay an external x402 agent or MPP merchant through the Router (receiving payments:
`nevermined-payments`).

Full skill: https://github.com/nevermined-io/docs/tree/main/skills/nevermined-router

**The Router pays the on-wire price per request.** Plan-billed APIs and `401`/`403` replies need
authentication, not routing.

Environment: `NVM_API_URL` (`https://api.sandbox.nevermined.app` or
`https://api.live.nevermined.app`), `NVM_API_KEY` (`sandbox:…` / `live:…` — **never send it to the
merchant**; its own auth goes in `headers`), and `NVM_DELEGATION_ID`. Calls below: on
`$NVM_API_URL`, bearer `$NVM_API_KEY`.

## 1. Delegation (the budget)

`POST /api/v1/delegation/create` with `provider: "erc4337"` (both stablecoin rails need it),
`currency: "usdc"`, `spendingLimitCents`, `durationSecs` — all four required. Two guards refuse it,
neither retryable:

- `403 BCK.OAUTH.0030` — the key was OAuth-minted; it may not create Delegations or use
  `/router/{payments,route,proxy,svc}`. Use a plain account-owner key — or, for a `commerce` grant,
  `POST /router/commerce/route`.
- `412 {"error":"consent_required","outdated":[…]}` — the account's legal consent lapsed; a human
  must accept. ⚠️ Its only `code` is the generic `BCK.HTTP.412` — branch on `body.error`.

## 2. Fund the buyer wallet

Both rails **pull** from your wallet; a Delegation authorizes, it doesn't fund. Read
`GET /api/v1/delegation/{id}` → `providerPaymentMethodId` each time: a cached address can cause
`402 BCK.ROUTER.0009`, which doesn't name the address checked.

**Each deployment funds one x402 network: sandbox → `base-sepolia`, live → `base`.** A merchant
on the other chain fails `400 BCK.ROUTER.0001 … no fundable option`.

## 3. Discover

`https://nevermined.app/catalog/ai-catalog.json` — public, no key, every service; filter
locally. `/api/v1/catalog/{services,categories}` are **not public** (`403`);
server-side search: Catalog MCP `search_services` (`mcp.live.nevermined.app/mcp`).

- **Only `protocol` `x402` / `mpp` is routable.**
- **Pay a listed service by `slug`, never by URL** (`409 BCK.ROUTER.0014`). Send
  `endpoint.invokePath ?? endpoint.path` — not `||`: `""` means "append nothing".
- `category` is a **closed 13-value enum**; a typo filters to empty, silently. Use the feed's.

## 4. Pay

`POST /api/v1/router/route`, JSON body `{ delegationId, url, method, body, requestId }` — the 1st, 2nd and 5th required.

The Router probes, detects the protocol from the 402, pays and relays; `status`/`body` are the
merchant's; `paid: false` with no `payment` means it was free. Streaming: `ALL /router/proxy`
with `X-Router-{Target-Url,Delegation-Id,Request-Id}`.

**`requestId` is an idempotency key:** one stable id per purchase, reused across its retries (same id →
original payment; fresh id buys again). **A fresh `uuid4()` per attempt is how an agent double-spends.**

**Money.** Budget is debited in **whole cents, rounded up**. `settlement.approxCents` is only the
**merchant** leg; the routing fee rides on top in the always-present `payment.fee`.
`fee.capChargedCents` is what the call **reserved**, not final — a mode-B hop missing `2xx` releases
the fee half. Spend to date: `GET /api/v1/delegation/{id}` → `amountSpentCents`.

## Guardrails — a refusal is the system working

- `BCK.ROUTER.0003` (402) — Delegation over cap, expired, exhausted, revoked. **Stop.**
- `BCK.ROUTER.0009` (402) — wallet short on the target network; nothing was signed. **Stop.**
- `BCK.ROUTER.0002` (409) — `requestId` reused; body has the original `paymentId`.
- `BCK.ROUTER.0001` (400) — bad input / no fundable option / non-allowlisted asset; read `details`.
- `BCK.ROUTER.0008` (403) — legacy API key; create a new one.
- `BCK.ROUTER.0010` (500) — internal. **Never blind-retry:** a credential was minted and no record
  written, so `requestId` won't suppress it.
- `BCK.ROUTER.0011` (402) — card rail needs 3-D Secure (human-only). Nothing
  charged; each retry strands a single-use credential. **Don't auto-retry.**
- `BCK.ROUTER.0013` (500) — we hold no EIP-712 domain for that token: ours, not theirs.
  Nothing charged; report it.
- `BCK.ROUTER.0018` (402) — `maxTotalCents` below the fee-inclusive rounded reserve.
  No charge/cap debit; may sign. `requiredTotalCents` is in JSON `params`.
  Raise only if intended; reuse `requestId`.
- `BCK.ROUTER.0019` (4xx, streaming) — cataloged service rejected it; body withheld, status kept. Fix from Catalog detail; no retry.
- `BCK.ROUTER.0020` (5xx/429, streaming) — upstream errored/429; body+headers withheld; no fee; retry w/ backoff; NEW `requestId` if `X-Router-Payment-Id` returned, else reuse.
- `BCK.ROUTER.0024` (413) — body over ~5 MB. **No retry as-is**; shrink it.
- `BCK.ROUTER.0025` (502) — reply too large; charge unknown. **No retry**: same id → 409 `0002` + original `paymentId`, no reply; fresh id may charge again. `paymentId`: JSON-string `params` (no `X-Router-Payment-Id`), else `/router/payments` with `delegationId` + `from` just pre-call; match `requestId` in the newest 1000 rows (no filter for it). `Failed` ≠ uncharged; non-null `merchantSettlementObservedAt` = x402 settled; null proves nothing (MPP too).
- Only `BCK.ROUTER.0006` (500, summary read), `0007` (429), `0020` (5xx/429), `0022` (500, selection) and `0028` (503, quote) are **retryable**, with backoff; paying path: `0007`/`0020`. Others need a decision.
- `BCK.ROUTER.0028` (503) — a `/router/quote` read failed; nothing charged.

**Never widen a Delegation, or create a second one, to get past a refusal.** The cap is the user's
decision; escaping an exhausted one with a fresh one defeats it.

## Accounting

`GET /api/v1/router/payments` (filters `delegationId`/`from`/`to`/`format=csv`) + `/payments/summary`. `amount` is the **merchant leg only** (6dp crypto, 2dp cards); use `assetDecimals` (null ⇒ raw units). `feeStatus` is separate from payment `status`. `Issued` is not an error — the money moved.
