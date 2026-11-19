# Nevermined Router — paying services

Pay x402/MPP services through the Router (to receive: `nevermined-payments`).

Workflow (follow it): https://nevermined.app/catalog/skill.md

**The Router pays on-wire prices per request.** Plan-billed APIs and `401`/`403` need auth.

Env: `NVM_API_URL` = `https://api.live.nevermined.app` (default, real money; a `sandbox:` testnet
key uses `https://api.sandbox.nevermined.app`), `NVM_API_KEY` (`live:…`; works only where issued),
`NVM_DELEGATION_ID`. Paths use that URL + bearer key.
**Never send the key to the merchant**; its auth goes in `headers`.

## 1. Delegation

`POST /api/v1/delegation/create`: `provider: "erc4337"` (both stablecoin rails), `currency: "usdc"`,
`spendingLimitCents`, `durationSecs` — all required. Two non-retryable guards:

- `403 BCK.OAUTH.0030` — OAuth key; cannot create Delegations/use Router spend rails. Use a plain
  owner key, or `/router/commerce/route` for a `commerce` grant.
- `412 {"error":"consent_required","outdated":[…]}` — legal consent lapsed; a human must
  accept. ⚠️ `code` is just the generic `BCK.HTTP.412`: branch on `body.error`.

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
- **Pay a listed service by `slug`, never by URL** (`409 BCK.ROUTER.0014`). Send
  `endpoint.invokePath ?? endpoint.path` — not `||`: `""` means "append nothing".
- `category` is a closed 13-value enum; typos filter to empty.

## 4. Pay

`POST /api/v1/router/route`, body `{ delegationId*, url|slug*, method, body, requestId* }`.
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

**Quote first:** `POST /api/v1/router/quote` (`commerce` grant, after 1.49: `/router/commerce/quote`),
minus `requestId`/`maxTotalCents`. Charges nothing, but **does** call the service unpaid and spends
its rate budget: once per decision. Pay with `maxTotalCents` = `fee.capChargedCents`.
`503 BCK.ROUTER.0028`: retry w/ backoff.

## Guardrails

- `BCK.ROUTER.0003` (402) — Delegation over cap, expired, exhausted, revoked. **Stop.**
- `BCK.ROUTER.0009` (402) — MPP `tempo` wallet short, or card declined; nothing signed. **Stop.** Never on x402/`evm` (§2).
- `BCK.ROUTER.0002` (409) — `requestId` reused; body has the original `paymentId`.
- `BCK.ROUTER.0001` (400) — bad input / no fundable option / non-allowlisted asset; read `details`.
- `BCK.ROUTER.0008` (403) — legacy API key; create a new one.
- `BCK.ROUTER.0010` (500) — internal. **Never blind-retry:** a credential was minted and no record
  written, so `requestId` won't suppress it.
- `BCK.ROUTER.0011` (402) — card rail needs 3-D Secure (human-only). Nothing
  charged; each retry strands a single-use credential. **Don't auto-retry.**
- `BCK.ROUTER.0018` (402) — `maxTotalCents` below the fee-inclusive rounded reserve.
  No charge/cap debit; may sign. `requiredTotalCents` is in JSON-string `params`.
  Raise only if intended; reuse `requestId`.
- `BCK.ROUTER.0019` (4xx, streaming) — cataloged service rejected it; body withheld, status kept. Fix from Catalog detail; no retry.
- `BCK.ROUTER.0020` (5xx/429, streaming) — upstream errored/429; body+headers withheld; no fee; retry w/ backoff; **same** `requestId` (never paid twice; a fresh id buys again); if `X-Router-Payment-Id` returned, look it up by `requestId` first.
- `BCK.ROUTER.0025` (502) — oversized reply; charge unknown. Don't retry: same id cannot redeliver; fresh may charge again. Find `paymentId` in `params`, else look up `/router/payments?requestId=<encoded id>`; after 0025 `absent` = wrong id/account. `Failed` means delivery failed, not uncharged; non-null `merchantSettlementObservedAt` confirms on-chain payment, but null proves nothing.
- Only `BCK.ROUTER.0006` (500, summary read), `0007` (429), `0020` (5xx/429), `0022` (500, capability unavailable: selection/identity; only after operator repair, never loop unchanged), `0028` (503, quote), `0042` (409, closing payment channel), `0043` (503, busy payment channel), `0048` (503, Privy), `0051` (409, match down) and `0052` (503, ranking down) are **retryable**, with backoff, as are `BCK.X402.0052` and `BCK.USER_PROFILE.0006` (503s); paying path: `0007`/`0020`/`0042`/`0043`/`0048`/`0051`/`0052` plus those two.

**Never widen a Delegation, or create a second one, to get past a refusal.**

## Accounting

`GET /api/v1/router/payments` (filterable; `format=csv`) + `/payments/summary`. `amount` is the **merchant leg only** (6dp crypto, 2dp cards); use `assetDecimals` (null ⇒ raw units). `feeStatus` is separate from payment `status`. `Issued` is not an error — the money moved.

## More refusals (none retryable)

- `BCK.ROUTER.0029`/`0032`/`0033` — API 1.55+: 402 quotes add `quoteId`/`expiresAt` (60 s); send
  id with unchanged `/route`, binding request/Delegation/rail/exact total. Bad id (`0029`) → new
  quote; expired (`0032`) → re-quote; mismatch (`0033`) → unchanged call or requote. Pre-charge.
- `BCK.ROUTER.0031` — required slug unavailable (`/router/select`, MCP `route_by_intent` take exact
  slugs in `filters.require|prefer|exclude`): inspect `params.reason`, fix it/request, or remove
  `require` for fallback. Pre-charge.
- `BCK.ROUTER.0024` (413) — body over ~5 MB. Shrink it.
- `BCK.ROUTER.0012` (400) — the seller's 402 names an EIP-712 domain its own settlement token
  does not sign under (seller bug). Nothing signed, charged or reserved; report it, pay elsewhere.
- `BCK.ROUTER.0013` (500) — no EIP-712 domain on our side for that token (our gap).
  Nothing charged; report it.
- `BCK.ROUTER.0014` (409) — raw URL to a cataloged service (§3): use its `slug` on `/router/route` or
  `/router/svc/<slug>` (`commerce` grant: `/router/commerce/route`); re-quote a refused quote by slug,
  never pay it.
- `BCK.ROUTER.0021` (400) — the payment credential would overwrite a header you forward (MPP uses
  `Authorization`). Nothing minted. Name the service's credential header: `credentialHeader` in
  the `/route` body, or `X-Router-Credential-Header` on `/proxy`·`/svc`.
- `BCK.ROUTER.0026` (415) — the streaming surfaces forward only JSON or URL-encoded bodies, and
  none on GET/HEAD. Nothing minted. Resend as JSON or a URL-encoded form.
- `BCK.ROUTER.0027` (413) — body larger than the endpoint's `maxRequestBytes` (service detail /
  MCP `get_service`). Refused before the service is contacted; `params` has `bodyBytes` and
  `maxRequestBytes`. Shrink the body or pick another service.
- `BCK.ROUTER.0034` (502) — a paid request got no response; the payment may have gone through.
  Reconcile via `GET /router/payments/{paymentId}` (`params.paymentId`); never retry with a fresh
  `requestId`.
- `BCK.ROUTER.0035` (422) — the service's challenge asks for no payment (an auth-only wallet
  sign-in) and the Router could not answer it: it signs only on a slug poll of an `auth: "siwx"`
  endpoint after your own wallet paid that service. Nothing charged; pay first, then poll the slug.
- `BCK.ROUTER.0036` (422) — the endpoint is known to outlast the Router's 120 s paid-call limit;
  refused before payment. `params.source` is `declared` (permanent) or `observed` (lifts at
  `params.liftsAt`). Pick another endpoint.
- `BCK.ROUTER.0040` (500) — internal: the Router's MPP session channel state refused an
  inconsistent read or write. Nothing moved. Report it.
- `BCK.ROUTER.0041` (400) — the service's MPP challenge offers only a session, which
  `POST /router/payments` cannot pay for any crypto delegation, even one with
  `allowSessionPayments: false` (other routes may answer `0047`). Use `/router/route`,
  `/router/svc/<slug>` or `/router/proxy`, or pay its x402 offer, if any, with `protocol: "x402"`.
- `BCK.ROUTER.0044` (422) — the Router cannot collect its fee on this MPP session payment;
  `params.cause` is `org-wallet` (pay from your own wallet's delegation) or `network` (pay another
  network's service). Nothing charged.
- `BCK.ROUTER.0045` (409) — the service does not offer the rail pinned by `requireProtocol`
  (`X-Router-Require-Protocol` on `/proxy` · `/svc`; x402 or mpp). Nothing signed, reserved or
  charged. Choose a service on your required rail, or deliberately change the pin; never drop it
  automatically.
- `BCK.ROUTER.0046` (400) — opt-in `validateRequestBody`: the body provably fails the endpoint's published request schema (`params.endpointPath`); nothing signed, reserved or charged; never without the flag. Applies on `/route`, `/commerce/route` (+ `/with-controls`), `/router/subscription/route` and MCP `pay_service`; not streaming `/proxy`·`/svc`. Fix the body (catalog `requestSchema`/`requestExample`, MCP `get_service`) or drop the flag.
- `BCK.ROUTER.0047` (409) — the delegation has `allowSessionPayments: false` and the Router would pay over an MPP session (a refundable deposit leaves the wallet at the first call). Nothing signed, reserved or charged; never from `POST /router/payments` (`0041` there). Use a per-call service, or report to the human, who can deliberately drop a `requireProtocol: "mpp"` pin or create a delegation allowing session payments (an OAuth app: reconnect it in Nevermined with session payments allowed).
- `BCK.ROUTER.0049` (422) — select: no payable match clears the relevance floor; nothing charged, even on autoPay. Rephrase or broaden `intent`, search the catalog, or pin `filters.require` (no floor).

## Retryable refusals (backoff, same `requestId`)

- `BCK.ROUTER.0042` (409) / `0043` (503) — the MPP session payment channel with this service is
  closing / busy; nothing signed or charged. After a close the next call opens a new channel; busy:
  retry after a few seconds.
- `BCK.ROUTER.0048` (503) — MPP `tempo`: Privy did not answer the Router's read of the wallet's
  public key. Nothing signed or charged.
- `BCK.ROUTER.0051` (409) — select: a close enough match is unhealthy or held by moderation; nothing
  charged. Later, or search; rephrasing finds the same service.
- `BCK.ROUTER.0052` (503) — autoPay select while semantic ranking is down; nothing charged (a
  `require` pin still pays). Later, or select without autoPay and pay the pick by slug.
- `BCK.X402.0052` (503) — your account wallet's EIP-7702 upgrade, run before any payment (only
  where EIP-7702 is enabled), did not complete. Nothing paid. Back off a few minutes (sooner
  gets it again); report it if it persists.
- `BCK.USER_PROFILE.0006` (503) — Privy or the chain RPC did not answer the wallet-ownership check.
  Nothing signed or charged. Short backoff.
