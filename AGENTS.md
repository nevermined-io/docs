# Nevermined — Payments SDK and Router

This repository contains documentation for Nevermined, an AI payment infrastructure platform. It covers two halves: **receiving** payments (the SDK and REST patterns below) and **spending** at external x402 / MPP services through the **Nevermined Router** (last section). When assisting with code that integrates Nevermined, follow these patterns.

## SDK Packages

- **TypeScript**: `@nevermined-io/payments` on npm
- **Python**: `payments-py` on PyPI (extras: `payments-py[mcp]`, `payments-py[fastapi]`, `payments-py[strands]`)

## Required Environment Variables

- `NVM_API_KEY` — Nevermined API key (format: `sandbox:...` for sandbox, `live:...` for production)
- `NVM_ENVIRONMENT` — `sandbox` or `live`
- `NVM_PLAN_ID` — payment plan ID from Nevermined
- `NVM_AGENT_ID` — agent ID (required when plans have multiple agents)

## Framework Patterns

### Express.js (TypeScript)

```typescript
import { Payments } from '@nevermined-io/payments'
import { paymentMiddleware } from '@nevermined-io/payments/express'

const payments = Payments.getInstance({ nvmApiKey: process.env.NVM_API_KEY!, environment: 'sandbox' })

app.use(paymentMiddleware(payments, {
  'POST /ask': { planId: process.env.NVM_PLAN_ID!, credits: 1 }
}))
```

### FastAPI (Python)

```python
from payments_py import Payments, PaymentOptions
from payments_py.x402.fastapi import PaymentMiddleware

payments = Payments.get_instance(PaymentOptions(nvm_api_key=os.environ["NVM_API_KEY"], environment="sandbox"))

app.add_middleware(PaymentMiddleware, payments=payments, routes={"POST /ask": {"plan_id": PLAN_ID, "credits": 1}})
```

### Strands Agent (Python)

```python
from payments_py.x402.strands import requires_payment

@tool(context=True)
@requires_payment(payments=payments, plan_id=PLAN_ID, credits=1)
def my_tool(query: str, tool_context=None) -> dict:
    ...
```

### MCP Server (TypeScript)

```typescript
payments.mcp.registerTool(name, config, handler, { credits: 5n })
await payments.mcp.start({ port: 3000, agentId, serverName })
```

### Google A2A (TypeScript / Python)

```typescript
const agentCard = payments.a2a.buildPaymentAgentCard(baseCard, { paymentType: "dynamic", credits: 1, planId, agentId })
await payments.a2a.start({ port: 3005, basePath: '/a2a/', agentCard, executor })
```

## x402 Protocol Headers

- `payment-signature` — client sends x402 access token
- `payment-required` — server sends payment requirements (402 response, base64-encoded)
- `payment-response` — server sends settlement receipt (200 response, base64-encoded)

## Important API Notes

- Use `verifyPermissions` / `settlePermissions` (not the deprecated `isValidRequest`)
- Credits use `BigInt` in TypeScript (`1n`) and `int`/`str` in Python
- `buildPaymentRequired()` (TS) / `build_payment_required()` (Python) generates the 402 payload
- Middleware handles verify/settle automatically; manual integration requires both calls

## Autonomous Operations (REST, no SDK)

When an agent must act on its own behalf at runtime (buy a plan, enroll a card, check credits/revenue), call the REST API directly with `Authorization: Bearer $NVM_API_KEY` against `https://api.sandbox.nevermined.app` (sandbox) or `https://api.live.nevermined.app` (live). Buy in two calls — `POST /api/v1/x402/permissions` (→ `accessToken`) then `POST /api/v1/x402/settle` (→ `billingModel`, `creditsRedeemed`, `remainingBalance`, `orderTx`; on `pay-as-you-go` the two credit fields are always `"0"` even on a successful charge, so the proof is `success` + a non-empty `orderTx`/`transaction`). Crypto uses `scheme: "nvm:erc4337"` / `network: "eip155:84532"`; cards use `scheme: "nvm:card-delegation"` / `network: "stripe"`. A human is needed only for one-time setup — the first API key, plus card enrollment if paying by card (the stablecoin path needs neither). Full runbook: `skills/nevermined-payments/references/autonomous-operations.md`.

## Nevermined Router — paying external services
{/* Keep this Router section in sync with the identical one in .github/copilot-instructions.md (and vice-versa). MDX comment syntax is deliberate — Mintlify parses this file and rejects HTML comments. */}

Use the Router when the agent must **pay** a service it has no account with — any x402 agent or MPP merchant. Everything above is the other half: *receiving* payments and buying Nevermined plans. Plain HTTP, no SDK: `Authorization: Bearer $NVM_API_KEY` against `$NVM_API_URL` (`https://api.sandbox.nevermined.app` sandbox, `https://api.live.nevermined.app` live). **Never send `NVM_API_KEY` to the merchant** — it authenticates you to Nevermined only; the merchant's own auth goes in `headers`. The Router pays a price quoted **on the wire**, so a service answering `401`/`403` rather than `402` wants authentication, not payment — say so, don't route it.

### 1. Create a Delegation (the budget)

```bash
curl -sX POST "$NVM_API_URL/api/v1/delegation/create" \
  -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"provider":"erc4337","currency":"usdc","spendingLimitCents":500,"durationSecs":604800}'
# → { "delegationId": "5e7481c3-…" }
```

All four fields are required — no defaults. `erc4337` is the crypto-funded Delegation both stablecoin rails need. Create it once and reuse the id. `allowedRecipients` is optional and **omitting it means no recipient restriction at all** — the budget can pay any merchant the Router can reach, bounded only by the cap and expiry.

Two guards refuse this call before your fields are read, and neither is retryable:

- **`403 BCK.OAUTH.0030`** — the key was minted through an OAuth consent ceremony (`credits_purchase` / `account_access` / `commerce`). Such a key may not create Delegations *or* use `POST /router/payments`, `POST /router/route`, `ALL /router/proxy` and `ALL /router/svc/<slug>`: those routes sign from the account's full wallet, outside the narrow policy the credential advertises. Use a plain API key issued by the account owner — or, for a `commerce` grant, spend through `POST /api/v1/router/commerce/route`, which derives the Delegation from the grant.
- **`412 {"error":"consent_required","outdated":[…]}`** — the account's legal-document consent has lapsed. ⚠️ **It is deliberately not an `NVMException`, so it has no `BCK.LEGAL_DOCS.…` code of its own** — the error filter stamps the generic `BCK.HTTP.412`, which names the status and not the cause. Branch on `body.error === "consent_required"` and read `body.outdated[]` for the document slugs (`terms`, `privacy`). Diagnose with `GET /api/v1/legal-documents/me/consent-status`. A human must accept; report it and stop rather than accepting terms on their behalf.

### 2. Fund the buyer wallet

Both rails **pull** from your own wallet: a Delegation authorizes a spend, it does not supply funds. Read the address off the live Delegation every time — `GET /api/v1/delegation/{id}` → `providerPaymentMethodId` — and fund it with the payment asset on the network you intend to pay on. **Never reuse a cached address**: a stale one is the most common cause of `402 BCK.ROUTER.0009`, and that error deliberately does not echo the address it checked.

**A deployment funds exactly one x402 network, fixed by its environment: sandbox → `base-sepolia`, live → `base`.** The permissive both-networks pair survives only on a local dev deployment, and an operator's `ROUTER_FUNDED_NETWORKS` can only narrow that set, never widen it. So a `base` merchant is simply unpayable from sandbox, and vice versa, failing with `400 BCK.ROUTER.0001 … no fundable option` — which reads like a broken merchant and is not. Check the environment before blaming the service; another merchant on the same chain will fail identically.

### 3. Discover a service (public catalog, no API key)

```bash
curl -s https://nevermined.app/catalog/ai-catalog.json \
  | jq '[.services[] | select(.protocol == "x402" and .category == "Search & Research") | {slug, title, priceLabel}]'
```

One JSON feed of every listed service — filter it locally. `/api/v1/catalog/services` and `/api/v1/catalog/categories` are **not a public API**: they return `403` by design. For server-side search, use the Catalog MCP (`search_services`, `get_service`, `list_categories`) at `https://mcp.live.nevermined.app/mcp` — free, no key. Only `protocol` of `x402` or `mpp` is routable — filter for them. **Pay a listed service by its `slug`, never by URL** — the feed has no merchant URL, and a raw-URL payment to a cataloged host is refused (`409 BCK.ROUTER.0014`). The subpath to send is the endpoint's `invokePath` when present — even `""`, which means "append nothing" — else its `path`:

```ts
const subpath = endpoint.invokePath ?? endpoint.path // NOT || — '' must stay '' or the path double-stacks
```

`category` is a **closed 13-value enum** — `"Search & Research"`, not `"Search"` — with a free-text `subCategory` under it. A misspelt one filters to an empty list, not an error, so read the values in use from the feed (`group_by(.category)`) and never guess the string.

### 4. Pay

```bash
curl -sX POST "$NVM_API_URL/api/v1/router/route" \
  -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"delegationId":"'"$NVM_DELEGATION_ID"'","url":"https://service.example/api/resource",
       "method":"POST","body":{"query":"…"},"requestId":"search-nevermined-router-v1"}'
# → { "status": 200, "body": {…}, "paid": true,
#     "payment": { "paymentId": "…", "settlement": { "approxCents": "1" },
#                  "fee": { "bps": 0, "amount": "0", "cents": "0", "capChargedCents": "1" },
#                  "status": "Settled" } }
```

The Router probes the merchant, auto-detects the protocol from the 402, pays and relays. `status`/`body` are the merchant's own; `paid: false` with no `payment` block means the resource was free — handle that. For streaming use `ALL /api/v1/router/proxy` with `X-Router-Target-Url`, `X-Router-Delegation-Id` and `X-Router-Request-Id` headers.

- **`requestId` is an idempotency key, not a request counter.** Use one stable id per logical purchase, reused across retries of that purchase. **A fresh `uuid4()` per HTTP attempt is how an agent double-spends.** Note what a same-id retry actually returns: `409 BCK.ROUTER.0002` carrying the original `paymentId` — **not the resource**. That is the protection working. **Never answer that 409 by minting a fresh id**, which is exactly the double-spend you avoided a moment ago; if the purchase genuinely failed, report it.
- Budget is debited in **whole cents, rounded up** — 1000 calls at $0.001 costs $10.00, not $1.00. `settlement.approxCents` is only the **merchant** leg: Nevermined's routing fee is reserved on top, disclosed in the **always-present `payment.fee`** object (`{ bps, amount, cents, capChargedCents }`, zeroed when no fee applied — never branch on its absence). **`fee.capChargedCents` is what the call reserved against your cap**, i.e. `approxCents + fee.cents`; summing `approxCents` instead under-reports spend by exactly the fee. ⚠️ It is the reserve **at mint** — a mode-B hop that does not return `2xx` releases the fee half back (the merchant leg stays charged), so a running total over-reports on those calls. **`GET /api/v1/delegation/{id}` → `amountSpentCents` is the authority on spend to date.** Trust any of these over a catalog `priceLabel`.

### 5. Read what you spent

`GET /api/v1/router/payments` (filters `delegationId`, `from`, `to`, `format=csv`) and `/api/v1/router/payments/summary`. `amount` is the **merchant leg only**, in the settlement asset's smallest unit — and ⚠️ **the scale differs per rail**: 6 decimals on the crypto rails, but the card rail (`network: "stripe"`) is **scale 2, so its `amount` IS cents**. Read `assetDecimals` off the row and never assume 6 — dividing a $60.00 card row by 10⁶ yields `0.00006`, a plausible wrong *number* in a spend total. `null` there means the asset is unrecognised: show raw units, and guard that branch explicitly, because `amount / 10 ** null` silently returns the raw atomic amount as a number. `assetSymbol` is echoed even when unrecognised (it is `null` on only two of four resolution paths), so it is **not** a recognition check — and `pathUSD` is capitalised differently on the two Tempo chains (`pathUSD` / `PathUSD`), so compare tickers case-insensitively. The fee is broken out into `feeAtomic`, `feeBps`, `feeCents`, `feeStatus`, `feeTxHash`, `feeNonce` and `feeFailureReason`, on the JSON rows and the CSV export alike; every column added since the original set — those six, then `assetSymbol`/`assetDecimals`, then `feeFailureReason` — was appended after it, so parsing by index from the left is safe while header-count assertions and right-anchored offsets are not. `feeFailureReason` says why the fee did not collect — or, on a `feeStatus: "None"` row, `fee-not-quoted: <why>` when a rate was configured and no fee was quoted at all. Human-facing diagnostic text, never a contract: branch on `feeStatus`. ⚠️ **`feeStatus` (`None|Accrued|Submitted|Settled|Failed|Released`) is a separate lifecycle from the payment `status`**, and they share `Settled`/`Failed` — never read one for the other. `Failed` does not imply `Released`: a `Failed` fee may still hold its cap reserve. A record at `Issued` is **not** an error — the money moved; do not retry it.

### Guardrails — a refusal is the system working

| Code | Status | Meaning | Retry? |
| --- | --- | --- | --- |
| `BCK.ROUTER.0001` | 400 | Bad input / no fundable option / non-allowlisted asset; `details` names it | No |
| `BCK.ROUTER.0002` | 409 | `requestId` already used; the original `paymentId` is in the response | No |
| `BCK.ROUTER.0003` | 402 | Delegation over cap, expired, exhausted or revoked | No — **stop** |
| `BCK.ROUTER.0006` | 500 | Transient failure building the payments summary | **Yes** |
| `BCK.ROUTER.0007` | 429 | Too many concurrent routed requests in flight | **Yes**, after backoff |
| `BCK.ROUTER.0008` | 403 | Legacy API key — create a new one | No |
| `BCK.ROUTER.0009` | 402 | Wallet short on the target network; nothing was signed | No — **stop** |
| `BCK.ROUTER.0010` | 500 | Internal: the rail reported an unusable charge amount | **No — never blind-retry** |
| `BCK.ROUTER.0011` | 402 | Card rail: needs cardholder 3-D Secure, which an agent can't complete. Nothing charged, no usable credential | No — **needs a human** |
| `BCK.ROUTER.0012` | 400 | The seller's 402 advertises an EIP-712 domain its own settlement token does not sign under, so the Router refuses to sign. Nothing signed, charged or reserved — an authorization under the wrong domain is unspendable anyway. Seller-side bug | No — **report it, pay elsewhere** |
| `BCK.ROUTER.0013` | 500 | Nevermined holds no EIP-712 signing domain for the token the funding filter selected — a gap in OUR canonical table, not the seller's bug and not your request. Nothing signed, charged or reserved | No — **report it to Nevermined** |
| `BCK.ROUTER.0014` | 409 | The target is a cataloged Nevermined service, whose upstream URL is deliberately hidden. The Router refuses to pay it by raw URL — mode A and a raw mode-B target both put the merchant's host on your wire, defeating the broker. The match is by HOST, so a co-hosted endpoint that is not itself listed is refused too — ask the vendor to list it, or contact Nevermined; hosts with no cataloged service are unaffected. | No — **use the slug**: `POST /router/route` with a `slug`, or `POST /router/svc/<catalog-slug>` |
| `BCK.ROUTER.0018` | 402 | Per-call `maxTotalCents` is below the fee-inclusive, whole-cent cap reserve. No charge or cap reserve, though signing may already have occurred; parse JSON-string `params` for `requiredTotalCents`. | No — raise the ceiling only if this call is intended; reuse the same `requestId` |
| `BCK.ROUTER.0019` | 400 | Streaming surfaces only (`/proxy` · `/svc`; `/route` returns the envelope status with `body: null`). A cataloged service returned a **non-retryable** status — a 4xx client error, or a rare 3xx the Router does not follow (a 402 re-challenge and a 429 are **not** this code). The upstream body is withheld (it can name the merchant host); this typed body preserves the **real** upstream status (on the HTTP status line and in JSON-string `params`). Build a valid request from the service's Catalog detail (`requestExample` / `responseFields`). | No — **fix the request first**, then retry with a fresh `requestId` |
| `BCK.ROUTER.0020` | 502 | Streaming surfaces only (`/proxy` · `/svc`; `/route` returns the envelope status with `body: null`). A cataloged service returned a server error (5xx) or rate-limited (429) — an upstream/transient condition, not your request. Body **and** headers are withheld (host oracle, including `Retry-After`); this typed body preserves the **real** status. The Router charges **no routing fee** for an undelivered call; whether the merchant leg itself charged is reported as `merchantSettlementObservedAt` (x402 only — `null` on a clean settlement and on both MPP rails, so `null` is not proof of no charge; read alongside `status`) on `GET /api/v1/router/payments`. | **Yes**, with backoff — reuse the same `requestId` only if no `X-Router-Payment-Id` came back; if one did, a payment is already recorded, so use a NEW id and reconcile via `GET /router/payments` |
| `BCK.ROUTER.0021` | 400 | The rail this service advertised carries its payment credential in a header you are **already using**. On the MPP rails that header is `Authorization`, which is also where your own merchant auth goes (`headers.Authorization` on `/route`, `X-Router-Upstream-Authorization` on `/proxy` · `/svc`). Rather than silently dropping yours on the paid hop, the Router refuses: **nothing was minted, no cap was reserved and no money moved**. JSON-string `params` names the contested header. | No — **name the header the service documents** for its credential: `credentialHeader` in the `/route` body, or the `X-Router-Credential-Header` request header on `/proxy` · `/svc` (a separate `Payment` header is the common one). If the service documents none, it wants the credential in `Authorization` itself and cannot also take your bearer there: drop your own auth for that call, or pay it over an x402 endpoint (whose credential travels in `PAYMENT-SIGNATURE`). Retrying unchanged fails identically |
| `BCK.ROUTER.0024` | 413 | The request body exceeds the Router's size limit (about 5 MB). | No — reduce the request body before trying again |
| `BCK.ROUTER.0025` | 502 | The upstream reply was too large to deliver after a paid request. The payment outcome is indeterminate; it may have gone through. | No — reconcile with `GET /api/v1/router/payments`; do **not** retry with a fresh `requestId` |
| `BCK.ROUTER.0026` | 415 | The Router cannot forward this request body. The streaming surfaces (`/router/svc/:slug`, `/router/proxy`) forward only JSON (`application/json`) or URL-encoded (`application/x-www-form-urlencoded`) bodies; any other type — `multipart/form-data` above all, but also `text/plain`, `application/octet-stream` or a vendor `+json` — and any body on GET/HEAD is refused. No payment was minted and no money moved. JSON-string `params` names the refused `contentType` (null when none was sent). | No — resend the body as JSON or a URL-encoded form the service accepts; a service that only takes a file upload cannot be paid through the Router yet, and retrying unchanged fails identically |
| `BCK.ROUTER.0028` | 503 | `POST /router/quote` could not price the call because a read it depends on failed (for example the settlement-token details on the payment network). Nothing is signed, minted or charged on the quote path. | **Yes**, with backoff — a quote never charges, so nothing needs unwinding. The same condition would also fail a payment, so do not route the call meanwhile; if it persists, quote `correlationId` |
| `BCK.OAUTH.0030` | 403 | The API key was OAuth-minted; it may not create Delegations or use `/router/{payments,route,proxy,svc}`. Use a plain account-owner key — or, for a `commerce` grant, `POST /router/commerce/route` | No |
| `BCK.HTTP.412` | 412 | `{"error":"consent_required"}` on `POST /delegation/create` — the account's legal consent lapsed. The code is generic; branch on `body.error` | No — **needs a human** |

**Neither `0010` nor `0011` may be auto-retried, and the HTTP status won't tell you that** — one is a 500, the other a 402 that reads like a routine payment error. Read the code, not the status.

**`0011`** means the card issuer wants 3-D Secure and the agent has no browser to answer it. Nothing was charged. Don't loop: 3DS is often mandated per charge, so each attempt re-demands it and strands a fresh single-use card credential. Surface it to a human.

**`0010` is the one 500 you must not retry.** A payment credential **was already minted** before it failed, and because no payment record was written your `requestId` will *not* suppress a retry — so retrying re-mints a fresh credential and fails identically. Report it instead. (`0006`, the retryable 500, is only ever raised by the payments *summary* read — never by a payment. On the paying path `0007` and `0020` (an upstream 5xx/429) are worth retrying.)

**Never widen a Delegation, and never create a second one, to get past a refusal.** The cap is the user's decision, not a runtime obstacle; minting a fresh Delegation to escape an exhausted one defeats the whole mechanism. Report and stop. **On the paying path `0007` and `0020` are the retryable codes** — `0006` can only come from the summary read, and `0010` (a 500 that already minted a credential) must never be retried; anything else is a decision, not a retry. Everything else is a decision, and retrying it unchanged gives the same answer. Delegations also expire silently, so check `expiresAt` before diagnosing a `0003` as anything else.

## Full Reference

See `skills/nevermined-payments/SKILL.md` for complete integration patterns (Track A = operate autonomously via REST; Track B = add payments to your code via SDK) and its reference files.

See `skills/nevermined-router/SKILL.md` and its `references/` for the Router half — discovery, mode A vs mode B, the ledger, and every guardrail.
