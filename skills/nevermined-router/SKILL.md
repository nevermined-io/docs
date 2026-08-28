---
name: nevermined-router
version: "0.1.3"
lastUpdated: "2026-08-17"
description: >
  Use when an AI agent needs to PAY an external service it does not have an account
  with — any x402 agent or MPP merchant — using the Nevermined Router. Covers
  discovering services in the Agent Services Catalog, creating a spending Delegation
  from an API key, funding the buyer wallet, making paid calls through
  /api/v1/router/route (or the streaming /proxy), reading the payment ledger, and the
  guardrails an autonomous buyer must respect. Complements the nevermined-payments
  skill, which is about RECEIVING payments and buying Nevermined plans.
metadata:
  openclaw:
    primaryEnv: NVM_API_KEY
    requires:
      env:
        - NVM_API_KEY
    envVars:
      - name: NVM_API_KEY
        required: true
        description: >
          Nevermined API key. Format `sandbox:...` for the sandbox environment,
          `live:...` for production. Issued from https://nevermined.app under API
          Keys. Must be a current-generation key — older keys are refused by the
          Router with 403 BCK.ROUTER.0008.
---

# Nevermined Router — buy from any x402 or MPP service

> **Skill version**: 0.1.3 | **Last updated**: 2026-08-17 | **Canonical source (always latest):** https://github.com/nevermined-io/docs/tree/main/skills/nevermined-router
>
> **⚠️ Use the latest version.** If you have a cached copy, check its **Last updated** date against the canonical source and refresh if older.
>
> Human-readable twin of the Router documentation at https://nevermined.ai/docs/products/catalog/router/overview. Same facts, same error codes — if the two ever disagree, the docs site is authoritative and this skill has a bug.

## What this is for

You are an agent that needs something from a service you have **no account with, no API key for, and no billing relationship with**. The Router lets you pay it per request, from a budget a human capped in advance, and puts every spend on one ledger.

It works because a growing set of services quote their price **on the wire**: you call them, they answer `402 Payment Required` with what they want, you pay, you get the resource. The Router does the paying.

| | |
| --- | --- |
| **Use this skill when** | you need to buy a single call from an external x402 / MPP service |
| **Use `nevermined-payments` instead when** | you are *charging* callers, or buying a Nevermined **plan** with credits |

<a id="not-for"></a>
**This skill cannot help you with conventional SaaS APIs.** Exa, Firecrawl, Tavily and similar are billed out of band — a monthly plan, a long-lived key. They never quote a price for one call, so there is nothing on the wire for the Router to pay and no address to pay it to. The Router isn't missing a feature; the transaction it performs does not exist for those services. If a service answers `401` or `403` rather than `402`, it wants **authentication**, not payment — stop, and tell the user it needs an account.

That is not a dead end, just a different rail. Nevermined can still buy from such a provider **out of band** — purchasing API credits up front instead of paying per call. Exa is the worked example: a $7 x402 card-delegation purchase provisions or tops up an Exa API key, fully agent-driven — https://nevermined.ai/docs/integrations/exa. That flow belongs to the `nevermined-payments` skill and the Payments SDK. What you cannot do is put those calls through `/router/route`.

## The buy loop

Six steps. Steps 1–3 happen once; 4–6 repeat per purchase.

```
① API key  ──▶ ② Delegation (budget) ──▶ ③ Fund the buyer wallet
                                              │
                    ┌─────────────────────────┘
                    ▼
   ④ Discover a service ──▶ ⑤ POST /router/route ──▶ ⑥ Read the spend
      (catalog)                (pays + relays)          (ledger)
```

Set your environment once:

```bash
export NVM_API_URL="https://api.sandbox.nevermined.app"   # live: https://api.live.nevermined.app
export NVM_API_KEY="<your-api-key>"
```

Everything is plain HTTP with `Authorization: Bearer $NVM_API_KEY`. There is **no SDK for the Router yet** — that is deliberate here, because it means any agent in any language can drive it with an HTTP client. The one exception is the catalog, which is public and needs no key at all.

<a id="rail-availability"></a>
**The two rails are enabled independently per deployment, and the MPP rail is not on everywhere.** x402 (Base) is available by default. MPP (Tempo) requires the operator to allowlist the payment token for that chain, and the allowlist is **fail-closed** — where it is unset, *every* MPP service is refused with `400 BCK.ROUTER.0001 … not allowlisted`, before anything is signed.

So **a service being in the catalog does not mean your deployment can pay it.** The catalog describes services; it says nothing about how the deployment you are pointed at is configured. If MPP services fail with `0001 … not allowlisted` while x402 services pay fine, the rail is off where you are — that is a deployment setting, not something you can fix from the client, not a fault in the merchant, and not a reason to retry or to go looking for a different MPP service, which will fail identically. Ask the operator of your deployment, or stay on `protocol=x402`. See `references/errors.md`.

**Never send `NVM_API_KEY` to the service you are paying.** It authenticates you to Nevermined and nothing else. If a merchant needs its own auth, pass it in `headers` (mode B) — see `references/paying.md`.

---

## ① Get an API key — *needs a human once*

Issued from the Nevermined app. If you were given one, use it.

A key that predates the Router is refused with **`403 BCK.ROUTER.0008`**. The fix is to create a new key; newly issued keys work. Old keys keep working for credit-based flows, so nothing else needs rotating.

## ② Create a Delegation — *fully programmatic*

A **Delegation** is the budget: a hard cap in cents plus an expiry, enforced server-side on every single payment. Create it once, reuse the id.

```bash
curl -sX POST "$NVM_API_URL/api/v1/delegation/create" \
  -H "Authorization: Bearer $NVM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"provider":"erc4337","currency":"usdc","spendingLimitCents":500,"durationSecs":604800}'
# → { "delegationId": "5e7481c3-e972-45bd-bdc5-a0b99c4de4a1" }
```

That is a $5.00 cap for 7 days. `provider: "erc4337"` is the crypto-funded Delegation both stablecoin rails require — a card-funded Delegation is refused on them.

<a id="never-widen"></a>
**You may create a Delegation. You must never widen one to get past a refusal.** The cap is the human's decision; a refusal is that decision taking effect. See [Guardrails](#guardrails).

Two guards can refuse this call before your fields are read, and **neither is retryable**:

- **`403 BCK.OAUTH.0030`** — the key was minted through an OAuth consent ceremony and may not create Delegations *or* use the paying routes. Use a plain API key issued by the account owner.
- **`412 {"error":"consent_required","outdated":[…]}`** — the account's legal-document consent has lapsed. ⚠️ Its only `code` is the generic **`BCK.HTTP.412`**, which names the status and not the cause, so branch on `body.error === "consent_required"` — the one place "branch on `code`" needs a second field. A human must accept; report it and stop.

Full field list, recipient scoping, both guards in detail, and reading a Delegation's live state: `references/bootstrap.md`.

## ③ Fund the buyer wallet — *may need a human*

Both rails **pull**: the merchant takes funds from your own custodial wallet. The Delegation authorizes the spend; it does not provide the money. Read the wallet address off the Delegation:

```bash
curl -s "$NVM_API_URL/api/v1/delegation/$NVM_DELEGATION_ID" \
  -H "Authorization: Bearer $NVM_API_KEY"
# → { "providerPaymentMethodId": "0x8F60b3838e6C121FcDBdBc50e7B150F8560a670E", ... }
```

`providerPaymentMethodId` is the address to fund, with the payment asset, **on the network you intend to pay on**.

**Your deployment funds exactly one x402 network, fixed by its environment: sandbox → `base-sepolia`, live → `base`.** A merchant on the other chain is unpayable from where you are and fails with `400 BCK.ROUTER.0001 … no fundable option`, which reads like a broken service and is not. Check the environment before blaming the merchant — see `references/bootstrap.md`.

**Always read this address back from the live Delegation — never from a value you cached.** Funding a stale address is the most common cause of `402 BCK.ROUTER.0009`, and the error deliberately does not echo the address it checked, so it cannot tell you that is what happened.

If the wallet is empty and you cannot fund it yourself, that is a **stop condition**: report it to the human. Do not retry.

## ④ Discover a service

The **Agent Services Catalog** is public and unauthenticated — no API key:

```bash
curl -s "$NVM_API_URL/api/v1/catalog/services?protocol=x402&search=web+search&offset=5"
```

```json
{
  "total": 9, "page": 1, "offset": 5,
  "services": [{
    "slug": "superhighway",
    "title": "Superhighway — Web Search for Agents",
    "protocol": "x402",
    "targetUrl": "https://superhighway.walls.sh/search",
    "priceLabel": "$0.001",
    "network": "Base",
    "endpoints": [
      { "path": "/search", "method": "POST", "priceLabel": "$0.001", "description": "Web search" },
      { "path": "/news",   "method": "POST", "priceLabel": "$0.001", "description": "Real-time news search" }
    ],
    "tags": ["search", "web", "news", "markdown"]
  }]
}
```

Two rules that will otherwise cost you a wasted payment:

1. **Only `protocol` of `x402` or `mpp` is payable through the Router.** Filter for them. Anything else in the catalog is listed for discovery, not for routing — see [above](#not-for).

2. **`targetUrl` is the *default endpoint's complete URL*, not a base.** Above it is `…/search`, and `endpoints[0].path` is *also* `/search`. Concatenating gives you `/search/search`. Resolve against the origin instead:

   ```js
   const url = endpoint ? new URL(endpoint.path, service.targetUrl).toString()
                        : service.targetUrl
   // '/news' + 'https://superhighway.walls.sh/search' → 'https://superhighway.walls.sh/news'  ✓
   ```

Filters, the categories endpoint, the per-slug lookup, and the crawlable ARD feed: `references/discovery.md`.

## ⑤ Make the paid call

Hand the Router the request you want made. It probes the service, **auto-detects** the protocol from the 402, pays, and relays the answer — one call, and you never see the 402.

```bash
curl -sX POST "$NVM_API_URL/api/v1/router/route" \
  -H "Authorization: Bearer $NVM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "delegationId": "'"$NVM_DELEGATION_ID"'",
    "url": "https://superhighway.walls.sh/search",
    "method": "POST",
    "body": { "query": "nevermined router" },
    "requestId": "search-nevermined-router-v1"
  }'
```

```json
{
  "status": 200,
  "body": { "…": "the paid resource" },
  "paid": true,
  "payment": {
    "paymentId": "b1f9c2e4-…",
    "settlement": { "amount": "1000", "asset": "USDC", "network": "base", "approxCents": "1" },
    "fee": { "bps": 0, "amount": "0", "cents": "0", "capChargedCents": "1" },
    "txHash": "0xfc8af37b…",
    "status": "Settled"
  }
}
```

`status` and `body` are the merchant's own, unchanged. `paid: false` with no `payment` block means the resource was free — the Router relayed it and charged nothing.

<a id="fee"></a>
**`settlement.approxCents` is the merchant leg, not your bill.** Nevermined charges a routing fee on top, disclosed in the **always-present `fee` object** (zeroed when no fee applied, so never branch on its absence): `fee.capChargedCents` is what this call **reserved** against your Delegation cap — `settlement.approxCents + fee.cents`. Sum `capChargedCents`, not `approxCents`, or your accounting drifts by exactly the fee.

⚠️ It is the **reserve at mint**, not the final figure: if a mode-B hop does not return `2xx` the fee half is given back (the merchant leg stays charged), so a running total over-reports on those calls. **`GET /api/v1/delegation/{id}` is the authority on what you have actually spent** — reconcile against `amountSpentCents` rather than your own sum. Full field list: `references/paying.md`.

<a id="requestid"></a>
**`requestId` is required, and it is an idempotency key — not a request counter.** Use **one stable id per logical purchase** and reuse it across retries of that purchase. Retrying a dropped call with the same id returns `409 BCK.ROUTER.0002` carrying the original `paymentId` — **not the resource** — instead of buying twice; a fresh id buys twice, on purpose. **Never answer that 409 by minting a fresh id**: that is the double-spend the key just prevented. If the purchase genuinely failed, report it. Derive it from the work you are doing (`"search-nevermined-router-v1"`), not from `uuid4()` per HTTP attempt — a fresh UUID on every retry is how an agent double-spends.

Mode A (you call the merchant yourself), the streaming `/proxy` variant, and passing the merchant's own auth: `references/paying.md`.

## ⑥ Read what you spent

```bash
curl -s "$NVM_API_URL/api/v1/router/payments?delegationId=$NVM_DELEGATION_ID" \
  -H "Authorization: Bearer $NVM_API_KEY"
```

Every payment, every protocol, one ledger. Filters, CSV export, and the aggregate summary: `references/ledger.md`.

---

<a id="guardrails"></a>
## Guardrails — read this before writing a retry loop

The Router signs payments from your wallet in response to instructions written by a merchant nobody vetted. It is deliberately suspicious, and **a refusal is the system working**.

**Four rules for an agent that spends without a human watching:**

1. **`402 BCK.ROUTER.0003` (over cap / expired) and `402 BCK.ROUTER.0009` (wallet short) are stop conditions.** They mean "out of budget" and "out of money". Report them to the human. Do not route around them.
2. **Never widen a Delegation, and never create a second one, in response to a refusal.** The cap is the user's decision, not a runtime obstacle. Creating a fresh Delegation to escape an exhausted one defeats the entire mechanism — it is the single worst thing you can do with this API.
3. **One `requestId` per purchase**, reused across retries of that purchase. See [above](#requestid).
4. **Only `0006` (500) and `0007` (429) are retryable.** Everything else is a decision, and retrying it unchanged produces the same answer. Back off on `0007`; it means you have too many routed calls in flight. **The HTTP status does not tell you whether to retry** — `0010` is a 500 you must not retry and `0011` is a 402 you must not retry. Read the code, not the status.

**Check the price before you commit.** `priceLabel` in the catalog is indicative; on the response, `settlement.approxCents` is what the **merchant** charged and [`fee.capChargedCents`](#fee) is what your **cap** reserved — they differ whenever a routing fee applies. Budget is debited in whole cents rounded up, so a run of sub-cent calls still burns a cent each. For spend to date, read the Delegation, not a sum of responses.

**Delegations expire silently.** A long-running agent that worked yesterday and fails today with `0003` has very often just aged out — check `expiresAt` before assuming anything is broken.

| Code | Status | Meaning | Retry? |
| --- | --- | --- | --- |
| `BCK.ROUTER.0001` | 400 | Bad input: unsupported protocol, malformed/empty challenge, no fundable option, recipient outside the Delegation's scope, non-allowlisted asset, wrong-provider Delegation, missing `delegationId`. `details` names the specific problem. | No |
| `BCK.ROUTER.0002` | 409 | This `requestId` already minted a payment. The original `paymentId` is in the response — usually what you wanted. | No |
| `BCK.ROUTER.0003` | 402 | Delegation over cap, expired, exhausted, or revoked. | No — **stop** |
| `BCK.ROUTER.0004` | 404 | No Router payment with that id belongs to you. | No |
| `BCK.ROUTER.0005` | 409 | Payment not in a settleable state. Only `Issued` can be marked `Settled`. | No |
| `BCK.ROUTER.0006` | 500 | Transient failure building the payments summary. | **Yes** |
| `BCK.ROUTER.0007` | 429 | Too many concurrent routed requests in flight. | **Yes**, after backoff |
| `BCK.ROUTER.0008` | 403 | Legacy API key. Create a new one. | No |
| `BCK.ROUTER.0009` | 402 | Wallet doesn't hold enough of the asset on the target network. Nothing was signed. | No — **stop** |
| `BCK.ROUTER.0010` | 500 | Internal: the rail reported a charge amount the Router can't reserve against the cap. | No — **never blind-retry** |
| `BCK.ROUTER.0011` | 402 | Card rail: the charge needs cardholder 3-D Secure, and an agent has no browser to complete it. Nothing was charged and the seller got no usable credential. | No — **needs a human** |
| `BCK.ROUTER.0012` | 400 | The seller's 402 advertises an EIP-712 domain its own settlement token does not sign under, so the Router refuses to sign. Nothing signed, charged or reserved — an authorization under the wrong domain is unspendable anyway. Seller-side bug | No — **report it, pay elsewhere** |
| `BCK.ROUTER.0013` | 500 | Nevermined holds no EIP-712 signing domain for the token the funding filter selected — a gap in OUR canonical table, not the seller's bug and not your request. Nothing signed, charged or reserved | No — **report it to Nevermined** |
| `BCK.OAUTH.0030` | 403 | This API key was OAuth-minted and may not create Delegations or use `/router/{payments,route,proxy}`. Use a plain account-owner key. | No |
| `BCK.HTTP.412` | 412 | `{"error":"consent_required"}` on `POST /delegation/create` — the account's legal-document consent lapsed. The code is generic; branch on `body.error`. | No — **needs a human** |

**`0011` needs a human, not a retry.** The card issuer is demanding 3-D Secure and the Router has no browser to answer it. Nothing was charged. Do **not** loop: 3DS is often mandated per charge, so every attempt re-demands it and mints a fresh single-use card credential that is then abandoned. A later *human-driven* attempt may succeed — that is a decision, not a retry.

**`0010` is the one 500 you must never retry.** A payment credential **was already minted** before it failed — and because no payment record was written, your `requestId` will *not* suppress the retry. So a retry mints a **fresh** credential and then fails identically, because the cause is a deterministic defect in the rail's amount derivation, not a transient blip. Report it to the human.

Note `0006`, the retryable 500, is only ever raised by the payments *summary* read — never by a payment. **On the paying path `0007` is the only code worth retrying at all.** And seeing `0010` at all means a Nevermined-side regression: no rail emits a non-numeric amount today, so it is a bug report, not a condition to handle. (On the card rail the minted credential is a Stripe Shared Payment Token, left stranded with no revoke path until `min(challenge expiry, Delegation expiry, 89 days)`.)

Catalog errors: `BCK.CATALOG.0001` (404, no listed service with that slug — slugs are case-sensitive), `BCK.CATALOG.0002` (500, transient, retryable), `BCK.CATALOG.0003` (400, `protocol` filter must be one of `x402`, `mpp`, `rest`, `a2a`, `other`).

What the Router refuses outright — private/loopback/metadata targets, redirects, MPP `splits`, forged `X-Router-*` headers — and the relay limits: `references/errors.md`.

## Reference files

| You need… | Read |
| --- | --- |
| Catalog filters, categories, per-slug lookup, the ARD feed | `references/discovery.md` |
| Mode A vs mode B, `/proxy` streaming, merchant auth, full payloads | `references/paying.md` |
| Delegation fields, recipient scoping, wallet funding, networks | `references/bootstrap.md` |
| Every guardrail, every code, what is retryable and why | `references/errors.md` |
| Payment records, filters, CSV export, summary, reconciliation | `references/ledger.md` |
