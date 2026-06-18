# Autonomous Agent Operations (REST runbook)

How an AI agent operates on Nevermined **on its own behalf** using the REST API — get an API key, enroll a card, create a delegation, purchase plans via x402, and check status. Every call here is plain HTTPS; no SDK install is required. This is the heavy-detail companion to **Track A** in `SKILL.md`.

> All bodies and response shapes below are verified against the live sandbox OpenAPI (`https://api.sandbox.nevermined.app/api/v1/rest/docs-json`). Send `Authorization: Bearer $NVM_API_KEY` on every call unless noted.
>
> Also send `Nevermined-Version: <MAJOR.MINOR>` on every call to pin the wire shape across platform releases — discover the supported range with `GET /api/v1/meta/versions` and default to its `current`. Never silently change a key's stored pin.

## Environments

| Environment | API base URL | App | Card enrollment UI | Crypto network | Key prefix |
|---|---|---|---|---|---|
| `sandbox` | `https://api.sandbox.nevermined.app` | `https://nevermined.app` | `https://embed.nevermined.app` | `eip155:84532` (Base Sepolia) | `sandbox:` |
| `live` | `https://api.live.nevermined.app` | `https://nevermined.app` | `https://embed.nevermined.app` | `eip155:8453` (Base Mainnet) | `live:` |

Only `sandbox` and `live` are public. Use the exact base URL — never infer it.

## What needs a human (once) vs. fully programmatic

| Step | Human? |
|---|---|
| Get the first API key | **Yes, once** (browser sign-in) |
| Enroll a card | **Yes, once** (browser; skip entirely for stablecoins) |
| Check payment methods, create delegation, get token, settle, register, status, revenue | No — fully programmatic |

---

## 1. Get a Nevermined API key

You cannot mint the first key yourself.

**Option A — embedded login (key returns automatically).** Host an HTTP server on `127.0.0.1:<port>` with a `/callback` route, then have your human open:

```
https://nevermined.app/auth/cli?callback_url=http://127.0.0.1:<port>/callback
```

After sign-in the browser hits `http://127.0.0.1:<port>/callback?nvm_api_key=<api-key>`. Read `nvm_api_key`, store it, reuse it.

**Option B — manual paste.** Human signs in at [nevermined.app](https://nevermined.app) → Settings → Global NVM API Keys → **+ New API Key**, and pastes it back. Or opens `https://nevermined.app/auth/cli` (no `callback_url`) to read the key on screen.

A `sandbox` key starts with `sandbox`; a `live` key with `live`.

---

## 2. Check your payment methods

```bash
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  https://api.sandbox.nevermined.app/api/v1/payment-methods
```

Response — array of payment methods:

```json
[
  {
    "id": "pm_1Q...",
    "type": "card",
    "brand": "visa",
    "last4": "4242",
    "expMonth": 12,
    "expYear": 2030,
    "alias": "My Card",
    "provider": "stripe",
    "status": "active",
    "allowedApiKeyIds": null
  }
]
```

A **stablecoin** method exists by default (fund it to pay immediately). A **card** method only appears after the one-time enrollment in step 3.

---

## 3. Enroll a card + create a delegation

Only needed to pay with a card. Two parts: enroll the card (browser, one-time), then you have a delegation. The default flow: host a `127.0.0.1` callback, **print the card-setup URL for the human to open in a browser**, they enter the card, and you capture `paymentMethodId` + `delegationId` from the redirect.

> `POST /api/v1/embed/session` is served but **not** listed in the OpenAPI (`docs-json`) — call it directly; don't search the OpenAPI for it.

### 3a. Embedded enrollment (recommended)

```bash
# Mint an embedded session — host a 127.0.0.1 callback first
curl -s -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{ "returnUrl": "http://127.0.0.1:<port>/callback" }' \
  https://api.sandbox.nevermined.app/api/v1/embed/session
```

Response:

```json
{
  "sessionToken": "eyJ...",
  "userId": "user-...",
  "userWallet": "0xabc...",
  "apiKeyHash": "0x...",
  "expiresAt": "2026-06-09T12:34:56.000Z",
  "isReturnUrlAllowed": true
}
```

Have your human open the card-setup page (the card and its delegation attach to **your** account):

```
https://embed.nevermined.app/cards/setup?sessionToken=<sessionToken>&returnUrl=http://127.0.0.1:<port>/callback&state=<random>&provider=stripe
```

On completion the browser redirects to your `returnUrl` with `paymentMethodId` and `delegationId`. **Store the `delegationId`.**

> **Callback security.** Generate `state` as an unguessable random value and reject the callback unless the returned `state` matches it (binds the response to your request — CSRF guard). `paymentMethodId`/`delegationId` here — and `nvm_api_key` in the API-key flow (step 1) — arrive in the **query string**, the most-logged part of a request, so your `127.0.0.1` callback server must not log the request line, and the key belongs in a secret store, never on disk in the clear.

> Can't host a localhost callback? Have your human enroll a card and create a delegation directly at [nevermined.app](https://nevermined.app) (Payment Methods → Enroll card → Delegate), then resume at step 4.

### 3b. Create a delegation explicitly

`provider`, `currency`, `spendingLimitCents`, and `durationSecs` are all **required** (no silent default for `provider` or `currency`). Use `currency: "usdc"` for `erc4337`, `"usd"` for card providers. `providerPaymentMethodId` is the `id` from `GET /payment-methods` (omit it for the default stablecoin smart account). The delegation is **plan-agnostic** unless you pass `planId`.

```bash
# Stablecoin / crypto — fully programmatic, no card, no human.
curl -s -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{ "provider": "erc4337", "spendingLimitCents": 10000, "durationSecs": 604800, "currency": "usdc" }' \
  https://api.sandbox.nevermined.app/api/v1/delegation/create

# Card (set a fresh budget on an already-enrolled card)
curl -s -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{
        "provider": "stripe",
        "providerPaymentMethodId": "pm_1Q...",
        "spendingLimitCents": 10000,
        "durationSecs": 604800,
        "currency": "usd"
      }' \
  https://api.sandbox.nevermined.app/api/v1/delegation/create
```

Response:

```json
{ "delegationId": "del_...", "delegationToken": "eyJ..." }
```

> **Visa needs browser-produced proofs.** `provider: "visa"` *is* accepted by `delegation/create`, but only together with `consumerPrompt` + `assuranceData` from a Visa WebAuthn ceremony; without them it's rejected with `BCK.VISA.0014` ("requires consumerPrompt and assuranceData"). An autonomous agent can't generate `assuranceData`, so create Visa delegations in the webapp and reuse the `delegationId`.

---

## 4. Buy access via x402

Two calls. **x402 is the default buy flow for both rails** — crypto and card are identical except `scheme`/`network`; the facilitator charges the right method (on-chain against your delegation for crypto, the card for fiat).

### 4a. Get an access token

```bash
curl -s -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{
        "accepted": { "scheme": "nvm:erc4337", "network": "eip155:84532", "planId": "<PLAN_ID>" },
        "delegationConfig": { "delegationId": "<YOUR_DELEGATION_ID>" }
      }' \
  https://api.sandbox.nevermined.app/api/v1/x402/permissions
# → { "accessToken": "eyJ..." }
```

- **Card:** `"scheme": "nvm:card-delegation"`, `"network": "stripe"` (or `braintree`/`visa`).
- **Create-first only:** always create the delegation via `/delegation/create` (step 3b) and pass its `delegationId` here. Inline create-on-the-fly (a `delegationConfig` without a `delegationId`) is **deprecated** and emits a runtime deprecation warning.
- **Field rename:** the response field is `accessToken`; pass that value as `x402AccessToken` in `/settle` and `/verify` below.
- **Don't know the plan's scheme?** `GET {API_BASE}/api/v1/protocol/plans/<PLAN_ID>` (public) returns the plan's metadata and pricing.

### 4b. Settle (the proof of purchase)

```bash
curl -s -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{
        "paymentRequired": {
          "x402Version": 2,
          "resource": { "url": "<PLAN_OR_RESOURCE_URL>" },
          "accepts": [ { "scheme": "nvm:erc4337", "network": "eip155:84532", "planId": "<PLAN_ID>", "extra": {} } ],
          "extensions": {}
        },
        "x402AccessToken": "<accessToken>"
      }' \
  https://api.sandbox.nevermined.app/api/v1/x402/settle
```

Response (`X402SettleResponseDto`):

```json
{
  "success": true,
  "payer": "0xabc...",
  "transaction": "0xdef...",
  "network": "eip155:84532",
  "creditsRedeemed": "1",
  "remainingBalance": "999"
}
```

`success: true` with `creditsRedeemed > 0` and a `remainingBalance` is your proof. For a plan top-up with no protected endpoint, set `resource.url` to the plan's own URL — `{API_BASE}/api/v1/protocol/plans/<PLAN_ID>`.

### 4c. Dry-run (optional)

```bash
curl -s -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{ "paymentRequired": { ... same as settle ... }, "x402AccessToken": "<accessToken>" }' \
  https://api.sandbox.nevermined.app/api/v1/x402/verify
# → { "isValid": true }
```

### 4d. Buying from a protected agent (most common)

If you're calling an x402-protected agent/service rather than topping up a plan, you don't build `paymentRequired` yourself:

1. Call the agent's endpoint with no token → it returns `402` with a `payment-required` header (base64 JSON). That decoded object **is** your `paymentRequired`.
2. Get an access token (step 4a) using its `accepts[0]` scheme/network/planId.
3. Retry the request with header `payment-signature: <accessToken>`. The agent verifies and settles for you and returns `200` with a `payment-response` receipt header (base64 JSON of the settle response above).

Common errors (read the message — code semantics differ slightly between the OpenAPI examples and the backend error registry, so recover by the message, not the number alone): `BCK.X402.0001` — can't generate the token: unknown/invalid `planId` or `agentId` (the agent may not exist). `BCK.X402.0002` — plan not found (often the wrong environment). `BCK.X402.0003` — token rejected: it's expired/invalid **or** the plan isn't linked to the agent — regenerate the token, and if it persists verify the plan↔agent association rather than looping on token regeneration.

---

## 5. Check your purchases & credits (buyer)

```bash
# Remaining credits on a plan you hold
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  https://api.sandbox.nevermined.app/api/v1/protocol/plans/<PLAN_ID>/balance/<YOUR_ADDRESS>
# → { planId, planName, planType, isSubscriber, holderAddress, balance, pricePerCredit, creditsContract }

# Your delegations + remaining budget
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  https://api.sandbox.nevermined.app/api/v1/delegation
# → { totalResults, page, offset, delegations: [
#      { delegationId, provider, status, spendingLimitCents, amountSpentCents,
#        remainingBudgetCents, currency, transactionCount, expiresAt, createdAt } ] }
#   `status` is "Active" | "Expired" | "Exhausted".

# One delegation's charges
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  https://api.sandbox.nevermined.app/api/v1/delegation/<DELEGATION_ID>/transactions
# → { totalResults, page, offset, transactions: [ { id, delegationId, providerTransactionId, amountCents, currency, status, createdAt } ] }
```

`YOUR_ADDRESS` is your account wallet: the `id`/address of your `erc4337` payment method from `GET /payment-methods` (crypto path), or the `userWallet` returned by `POST /embed/session`.

---

## 6. Register a plan + agent (seller) — use the SDK

Registration's `priceConfig`/`creditsConfig` are low-level on-chain structures; build them with SDK helpers rather than by hand. See `payment-plans.md`. The REST endpoints are `POST /api/v1/protocol/plans`, `POST /api/v1/protocol/agents`, and `POST /api/v1/protocol/agents/plans` (atomic), but they expect those fully-formed config objects.

---

## 7. Check your agents' status & revenue (seller)

See `seller-operations.md` for the full set of analytics and building-block queries (revenue, MRR, usage, customers, plus the any-tier `/protocol/plans` and `/protocol/agents` lists).

---

## Quick reference — endpoints

| Flow | Method + path | Auth |
|---|---|---|
| List payment methods | `GET /api/v1/payment-methods` | API key |
| Mint embed session | `POST /api/v1/embed/session` | API key |
| Create delegation | `POST /api/v1/delegation/create` | API key |
| List delegations | `GET /api/v1/delegation` | API key |
| Delegation transactions | `GET /api/v1/delegation/{id}/transactions` | API key |
| Get x402 token | `POST /api/v1/x402/permissions` | API key |
| Settle | `POST /api/v1/x402/settle` | API key |
| Verify (dry-run) | `POST /api/v1/x402/verify` | API key |
| Plan balance | `GET /api/v1/protocol/plans/{planId}/balance/{address}` | API key |
| My plans / agents | `GET /api/v1/protocol/plans` · `GET /api/v1/protocol/agents` | API key |
| Register plan / agent / both | `POST /api/v1/protocol/plans` · `/agents` · `/agents/plans` | API key |
| Org analytics | `GET /api/v1/organizations/{orgId}/analytics/{revenue,mrr,usage,customers}` | API key + Premium |
