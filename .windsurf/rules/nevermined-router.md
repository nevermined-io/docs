# Nevermined Router — paying services

Pay x402/MPP services through the Router (to receive: `nevermined-payments`).

Full skill: https://github.com/nevermined-io/docs/tree/main/skills/nevermined-router

**The Router pays on-wire prices per request.** Plan-billed APIs and `401`/`403` need auth.

Env: `NVM_API_URL` (`https://api.{sandbox,live}.nevermined.app`), `NVM_API_KEY`
(`sandbox:…`/`live:…`), `NVM_DELEGATION_ID`. Paths use that URL + bearer key.
**Never send the key to the merchant**; its auth goes in `headers`.

## 1. Delegation

`POST /api/v1/delegation/create`: `provider: "erc4337"` (both stablecoin rails), `currency: "usdc"`,
`spendingLimitCents`, `durationSecs` — all required. Two non-retryable guards:

- `403 BCK.OAUTH.0030` — OAuth key; cannot create Delegations/use Router spend rails. Use a plain
  owner key, or `/router/commerce/route` for a `commerce` grant.
- `412 {"error":"consent_required","outdated":[…]}` — legal consent lapsed; a human must
  accept. ⚠️ `code` is just the generic `BCK.HTTP.412`: branch on `body.error`.

## 2. Fund the wallet

Both rails **pull** from your wallet; Delegation ≠ funds. Read `GET /api/v1/delegation/{id}` →
`providerPaymentMethodId` each time: stale addresses cause `402 BCK.ROUTER.0009`, which does not
echo the checked address.

**Each deployment funds one x402 network: sandbox → `base-sepolia`, live → `base`.** A merchant
on the other chain fails `400 BCK.ROUTER.0001 … no fundable option`.

## 3. Discover

`https://nevermined.app/catalog/ai-catalog.json` — public/no key; filter locally. Catalog REST is
not public (`403`); server search: MCP `search_services` at `mcp.live.nevermined.app/mcp`.

- **Only `protocol` `x402` / `mpp` is routable.**
- **Pay a listed service by `slug`, never by URL** (`409 BCK.ROUTER.0014`). Send
  `endpoint.invokePath ?? endpoint.path` — not `||`: `""` means "append nothing".
- `category` is a closed 13-value enum; typos filter to empty.

## 4. Pay

`POST /api/v1/router/route`, body `{ delegationId*, url|slug*, method, body, requestId* }`.

The Router detects the 402 rail, pays and relays; `status`/`body` are the merchant's.
`paid: false` + no `payment` = free.
Streaming: `ALL /router/proxy` with `X-Router-{Target-Url,Delegation-Id,Request-Id}`.

**`requestId` is idempotency:** one stable id per purchase/retries; fresh id buys again. A fresh
`uuid4()` per attempt double-spends.
`202` (API ≥1.48) = **paid**, still running: poll `GET resultUrl`, never re-buy.

**Money.** Budget uses **whole cents, rounded up**. `settlement.approxCents` is merchant-only;
the always-present `payment.fee.capChargedCents` is reserved, not final (mode-B non-`2xx` releases
the fee). Spend authority:
the Delegation's `amountSpentCents`.

**Quote first:** `POST /api/v1/router/quote` (`commerce` grant, after 1.49: `/router/commerce/quote`),
minus `requestId`/`maxTotalCents`. Charges nothing, but **does** call the service unpaid and spends
its rate budget: once per decision. Pay with `maxTotalCents` = `fee.capChargedCents`.
`503 BCK.ROUTER.0028`: retry w/ backoff.

API 1.55+: 402 quotes add `quoteId`/`expiresAt` (60 s). Send id with unchanged `/route`, binding
request/Delegation/rail/exact total. `BCK.ROUTER.0029` bad id → new quote;
`BCK.ROUTER.0032` expired → re-quote; `BCK.ROUTER.0033` mismatch → unchanged call or requote. `/router/select`
and MCP `route_by_intent` accept exact slugs in `filters.require|prefer|exclude`; `BCK.ROUTER.0031`
means required slug unavailable — inspect `params.reason`, fix it/request, or remove `require` for fallback. All pre-charge.

## Guardrails

- `BCK.ROUTER.0003` (402) — Delegation over cap, expired, exhausted, revoked. **Stop.**
- `BCK.ROUTER.0009` (402) — wallet short on the target network; nothing was signed. **Stop.**
- `BCK.ROUTER.0002` (409) — `requestId` reused; body has the original `paymentId`.
- `BCK.ROUTER.0001` (400) — bad input / no fundable option / non-allowlisted asset; read `details`.
- `BCK.ROUTER.0008` (403) — legacy API key; create a new one.
- `BCK.ROUTER.0010` (500) — internal. **Never blind-retry:** a credential was minted and no record
  written, so `requestId` won't suppress it.
- `BCK.ROUTER.0011` (402) — card rail needs 3-D Secure (human-only). Nothing
  charged; each retry strands a single-use credential. **Don't auto-retry.**
- `BCK.ROUTER.0013` (500) — no EIP-712 domain on our side for that token (our gap).
  Nothing charged; report it.
- `BCK.ROUTER.0018` (402) — `maxTotalCents` below the fee-inclusive rounded reserve.
  No charge/cap debit; may sign. `requiredTotalCents` is in JSON-string `params`.
  Raise only if intended; reuse `requestId`.
- `BCK.ROUTER.0019` (4xx, streaming) — cataloged service rejected it; body withheld, status kept. Fix from Catalog detail; no retry.
- `BCK.ROUTER.0020` (5xx/429, streaming) — upstream errored/429; body+headers withheld; no fee; retry w/ backoff; NEW `requestId` if `X-Router-Payment-Id` returned, else reuse.
- `BCK.ROUTER.0024` (413) — body over ~5 MB. No retry as-is; shrink it.
- `BCK.ROUTER.0025` (502) — oversized reply; charge unknown. Don't retry: same id cannot redeliver; fresh may charge again. Find `paymentId` in JSON `params`, else query `/router/payments` from just before the call and match `requestId` (newest 1000; no filter). `Failed` means delivery failed, not uncharged; non-null `merchantSettlementObservedAt` confirms x402 settlement, but null proves nothing (including MPP).
- Only `BCK.ROUTER.0006` (500, summary read), `0007` (429), `0020` (5xx/429), `0022` (500, selection) and `0028` (503, quote) are **retryable**, with backoff; paying path: `0007`/`0020`.

**Never widen a Delegation, or create a second one, to get past a refusal.**

## Accounting

`GET /api/v1/router/payments` (filterable; `format=csv`) + `/payments/summary`. `amount` is the **merchant leg only** (6dp crypto, 2dp cards); use `assetDecimals` (null ⇒ raw units). `feeStatus` is separate from payment `status`. `Issued` is not an error — the money moved.
