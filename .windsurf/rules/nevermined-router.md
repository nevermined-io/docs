# Nevermined Router — paying services

Pay x402/MPP services through the Router (to receive: `nevermined-payments`).

Workflow: https://nevermined.app/catalog/skill.md

**The Router pays on-wire prices per request.** Plan-billed APIs and `401`/`403` need auth.

Env: `NVM_API_URL` = `https://api.live.nevermined.app` (default, real money; a `sandbox:` testnet
key uses `api.sandbox.nevermined.app` and MCP `mcp.sandbox.nevermined.app/mcp`), `NVM_API_KEY`
(`live:…`; works only where issued), `NVM_DELEGATION_ID`. Paths use that URL + bearer key.
**Never send the key to the merchant**; its auth goes in `headers`.

## 1. Delegation

`POST /api/v1/delegation/create`: `provider: "erc4337"` (both stablecoin rails), `currency: "usdc"`,
`spendingLimitCents`, `durationSecs` (the human's budget) — all required. Two non-retryable guards:

- `403 BCK.OAUTH.0030` — OAuth key; cannot create Delegations/use Router spend rails. Use a plain owner key, or `/router/commerce/route` for a `commerce` grant.
- `412 {"error":"consent_required","outdated":[…]}` — legal consent lapsed; a human must accept. ⚠️ `code` is just the generic `BCK.HTTP.412`: branch on `body.error`.

## 2. Fund the wallet

Both rails **pull** from your wallet; Delegation ≠ funds. Fund `fundingWalletAddress`, read each
time from `GET /api/v1/delegation/{id}?withPayer=true`; **never `providerPaymentMethodId`**. `null`:
re-read; still `null` → stop, tell the human. A stale address underfunds the wallet —
`402 BCK.ROUTER.0009` on MPP `tempo`, a failed settlement on x402/`evm`. MPP `evm` (Base USDC): org wallets only.

**Each deployment funds one x402 network: sandbox → `base-sepolia`, live → `base`.** A merchant
on the other chain fails `400 BCK.ROUTER.0001 … no fundable option`.

## 3. Discover

`https://nevermined.app/catalog/ai-catalog.json` — public/no key; filter locally. Catalog REST is
not public (`403`); server search: MCP `search_services` at `mcp.live.nevermined.app/mcp`.

- **Only `protocol` `x402` / `mpp` is routable.**
- **Pay a listed service by `slug`, never by URL** (`409 BCK.ROUTER.0014`). Send `endpoint.invokePath ?? endpoint.path` — not `||`: `""` means "append nothing".
- `category` is a closed 13-value enum; typos filter to empty.

## 4. Quote, then pay

**Quote first:** `POST /api/v1/router/quote` (`commerce` grant, after 1.49: `/router/commerce/quote`),
minus `requestId`/`maxTotalCents`. Charges nothing, but **does** call the service unpaid and spends
its rate budget: once per decision. Pay with `maxTotalCents` = `fee.capChargedCents`.
`503 BCK.ROUTER.0028`: retry w/ backoff.

`POST /api/v1/router/route`, body `{ delegationId*, slug*|url*, path, method, body, maxTotalCents, requestId* }`.
`/router/svc/<slug>/<invokePath>` (skill's path): **no per-call ceiling**; the cap bounds it.

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

## Guardrails

- `BCK.ROUTER.0003` (402) — Delegation over cap, expired, exhausted, revoked. **Stop.**
- `BCK.ROUTER.0009` (402) — MPP `tempo` wallet short, or card declined; nothing signed. **Stop.** Never on x402/`evm` (§2).
- `BCK.ROUTER.0002` (409) — `requestId` reused; body has the original `paymentId`.
- `BCK.ROUTER.0001` (400) — bad input / no fundable option / non-allowlisted asset; read `details`.
- `BCK.ROUTER.0008` (403) — legacy API key; create a new one.
- `BCK.ROUTER.0010` (500) — internal. **Never blind-retry:** a credential was minted and no record written, so `requestId` won't suppress it.
- `BCK.ROUTER.0011` (402) — card rail needs 3-D Secure (human-only). Nothing charged; each retry strands a single-use credential. **Don't auto-retry.**
- `BCK.ROUTER.0018` (402) — `maxTotalCents` below the fee-inclusive rounded reserve. No charge/cap debit; may sign. `requiredTotalCents` is in JSON-string `params`. Raise only if intended; reuse `requestId`.
- `BCK.ROUTER.0019` (4xx, streaming) — cataloged service rejected it; body withheld, status kept. Fix from Catalog detail; no retry.
- `BCK.ROUTER.0025` (502) — oversized reply; charge unknown. Don't retry: same id cannot redeliver; fresh may charge again. Find `paymentId` in `params`, else look up `/router/payments?requestId=<encoded id>`; after 0025 `absent` = wrong id/account. `Failed` means delivery failed, not uncharged; non-null `merchantSettlementObservedAt` confirms on-chain payment, but null proves nothing.
- Only `BCK.ROUTER.0006` (500, summary read), `0007` (429), `0020` (5xx/429), `0022` (500, capability unavailable: selection/identity; only after operator repair, never loop unchanged), `0028` (503, quote), `0042`/`0043` (409/503, closing/busy payment channel), `0048` (503, Privy), `0051` (409, match down), `0052` (503, ranking down) and `0057` (503, Permit2 approval) are **retryable**, with backoff, as are `BCK.X402.0052` and `BCK.USER_PROFILE.0006` (503s); paying path: `0007`/`0020`/`0042`/`0043`/`0048`/`0051`/`0052`/`0057` plus those two.

**Never widen a Delegation, or create a second one, to get past a refusal.**

## Accounting

`GET /api/v1/router/payments` (filterable; `format=csv`) + `/payments/summary`. `amount` is the **merchant leg only** (6dp crypto, 2dp cards); use `assetDecimals` (null ⇒ raw units). `feeStatus` is separate from payment `status`. `Issued` isn't an error — the money moved.

## More refusals (none retryable)

- API 1.55+: 402 quotes add `quoteId`/`expiresAt` (60 s); send id with unchanged `/route`, binding request/Delegation/rail/exact total. `BCK.ROUTER.0029` bad id → new quote; `BCK.ROUTER.0032` expired → re-quote; `BCK.ROUTER.0033` mismatch → unchanged call or requote. Pre-charge.
- `BCK.ROUTER.0031` — required slug unavailable (`/router/select`, MCP `route_by_intent` take exact slugs in `filters.require|prefer|exclude`): inspect `params.reason`, fix it/request, or remove `require` for fallback. Pre-charge.
- `BCK.ROUTER.0024` (413) — body over ~5 MB. Shrink it.
- `BCK.ROUTER.0012` (400) — the seller's 402 names an EIP-712 domain its own settlement token doesn't sign under (seller bug). Nothing signed, charged or reserved; report it, pay elsewhere.
- `BCK.ROUTER.0013` (500) — no EIP-712 domain on our side for that token. Nothing charged; report it.
- `BCK.ROUTER.0014` (409) — raw URL to a cataloged service (§3): use its `slug` on `/route` or `/svc/<slug>` (`commerce` grant: `/commerce/route`); re-quote a refused quote by slug, never pay it.
- `BCK.ROUTER.0021` (400) — the payment credential would overwrite a header you forward (MPP uses `Authorization`). Nothing minted. Name the service's credential header: `credentialHeader` (`/route` body) or `X-Router-Credential-Header` (`/proxy`·`/svc`).
- `BCK.ROUTER.0026` (415) — streaming (`/proxy`·`/svc`) forwards only JSON or URL-encoded bodies, none on GET/HEAD. Nothing minted. Resend as one; on GET/HEAD send no body.
- `BCK.ROUTER.0027` (413) — body over the endpoint's `maxRequestBytes` (service detail, MCP `get_service`). Refused before contact; `params`: `bodyBytes`, `maxRequestBytes`. Shrink it or pick another service.
- `BCK.ROUTER.0034` (502) — a paid request got no response; it may have been paid. Reconcile via `GET /router/payments/{paymentId}` (`params.paymentId`); never retry with a fresh `requestId`.
- `BCK.ROUTER.0035` (422) — the challenge asks for no payment (a wallet sign-in); the Router signs one only on a slug poll of an `auth: "siwx"` endpoint whose service your own wallet paid. Nothing charged; pay first, then poll the slug.
- `BCK.ROUTER.0036` (422) — the endpoint is known to outlast the 120 s paid-call limit; refused unpaid. `params.source` is `declared` (permanent) or `observed` (lifts at `params.liftsAt`). Pick another endpoint.
- `BCK.ROUTER.0040` (500) — internal: MPP session channel state refused an inconsistent read/write. Nothing moved. Report it.
- `BCK.ROUTER.0041` (400) — the MPP challenge offers only a session, which `POST /router/payments` never pays (other routes may answer `0047`). Use `/route`, `/svc/<slug>`, `/proxy`, or its x402 offer (if any) with `protocol: "x402"`.
- `BCK.ROUTER.0044` (422) — the Router can't collect its fee on this MPP session; `params.cause` is `org-wallet` (pay from your own wallet) or `network` (pay another network's service). Nothing charged.
- `BCK.ROUTER.0045` (409) — the service lacks the rail pinned by `requireProtocol` (`X-Router-Require-Protocol` on `/proxy`·`/svc`; x402 or mpp). Nothing signed, reserved or charged. Pick a service on that rail or change the pin deliberately, never automatically.
- `BCK.ROUTER.0046` (400) — opt-in `validateRequestBody` (`/route`, `/commerce/route` (+ `/with-controls`), `/subscription/route`, MCP `pay_service`; not `/proxy`·`/svc`): the body provably fails the endpoint's published schema (`params.endpointPath`). Nothing signed, reserved or charged. Fix it (catalog `requestSchema`/`requestExample`, MCP `get_service`) or drop the flag.
- `BCK.ROUTER.0047` (409) — `allowSessionPayments: false`, and the Router would pay over an MPP session (a refundable deposit leaves at the first call). Nothing signed, reserved or charged (`/router/payments` says `0041`). Use a per-call service, or tell the human, who can deliberately drop a `requireProtocol: "mpp"` pin or create a delegation (OAuth app: reconnect) allowing sessions.
- `BCK.ROUTER.0049` (422) — select: no payable match clears the relevance floor; nothing charged, even on autoPay. Rephrase or broaden `intent`, search the catalog, or pin `filters.require` (no floor).
- `BCK.ROUTER.0053` (422) — select: close matches, none recorded as returning your `wantedMedia`; nothing charged, even on autoPay. Search, or pin `filters.require` (no media check); name only media you need.
- `BCK.ROUTER.0056` / `BCK.ROUTER.0058` (422) — usage-based (x402 `upto`): only your own upgraded (EIP-7702) wallet pays it (`0056`), on a network collecting its fee (`0058`, our config: report it); quotes too. Nothing signed, reserved or charged. Org wallet: use an existing own-wallet delegation; else a fixed-price service.

## Retryable refusals (backoff, same `requestId`)

- `BCK.ROUTER.0020` (5xx/429, streaming) — upstream errored/429; body+headers withheld; no fee; **same** `requestId` (never paid twice; a fresh id buys again); if `X-Router-Payment-Id` returned, look it up by `requestId` first; the hint's NEW id is a 2nd purchase.
- `BCK.ROUTER.0042` (409) / `BCK.ROUTER.0043` (503) — this service's MPP session channel is closing / busy; nothing signed or charged. After a close the next call opens a new one; busy: retry in a few seconds.
- `BCK.ROUTER.0048` (503) — MPP `tempo`: Privy didn't answer the Router's wallet public-key read. Nothing signed or charged.
- `BCK.ROUTER.0051` (409) — select: a close enough match is unhealthy or held by moderation; nothing charged. Retry later, or search; rephrasing finds the same service.
- `BCK.ROUTER.0052` (503) — autoPay select while semantic ranking is down; nothing charged (a `require` pin still pays). Retry later, or select without autoPay and pay the pick by slug.
- `BCK.ROUTER.0057` / `BCK.X402.0052` (503) — `upto`'s one-time Permit2 approval / your wallet's EIP-7702 upgrade (pre-payment, where enabled) didn't complete. Nothing paid. Back off 5 / a few minutes (sooner gets it again); report it if it persists.
- `BCK.USER_PROFILE.0006` (503) — Privy or the chain RPC didn't answer the wallet-ownership check. Nothing signed or charged. Short backoff.
