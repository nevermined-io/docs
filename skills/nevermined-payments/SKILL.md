---
name: nevermined-payments
version: "0.5.1"
lastUpdated: "2026-06-18"
description: >
  Use when an AI agent must operate on Nevermined autonomously — purchase a payment
  plan via the x402 protocol (crypto or card), enroll a card and create a spending
  delegation, obtain a Nevermined API key, register a payment plan or AI agent, or
  check its credits (as a buyer) or revenue (as a seller) — and when adding x402
  payment protection to a TypeScript or Python agent (Express, FastAPI, MCP, Google
  A2A, Strands). Covers the @nevermined-io/payments and payments-py SDKs and the
  Nevermined REST API.
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
          Nevermined API key used by the SDK, REST API, and CLI. Format
          `sandbox:...` for the sandbox environment, `live:...` for production.
          Issued from https://nevermined.app under API Keys.
---

# Nevermined Payments Integration

> **Skill version**: 0.5.1 | **Last updated**: 2026-06-18 | **Canonical source (always latest):** https://github.com/nevermined-io/docs/tree/main/skills/nevermined-payments
>
> **⚠️ Use the latest version.** This skill changes often. If you have an installed or cached copy, check its **Last updated** date against the canonical source above and **refresh it if older** — an out-of-date copy may be missing whole flows (e.g. the card-enrollment / `embed/session` steps were added after Feb 2026). Unless a specific version is requested, always work from the latest.
>
> Verified against the live sandbox API (`https://api.sandbox.nevermined.app/api/v1/rest/docs-json`); the cited SDK method names are stable from `@nevermined-io/payments@1.4.1` through the current `1.9.0`, and `payments-py@1.15.1`.

## Overview

Nevermined provides financial rails for AI agents — real-time monetization, access control, and payments. This skill covers **two modes**, and most tasks fall cleanly into one:

| Mode | You are… | Lead interface | Use when the goal is… |
|---|---|---|---|
| **🅐 Operate as an autonomous agent** | an agent **acting on its own behalf** at runtime | **REST** (works with no SDK install) | buy a plan, enroll a card + delegation, get an API key, register a plan/agent, check credits (buyer) or revenue (seller) |
| **🅑 Add payments to your code** | a developer **wiring payments into an agent** so it can **receive** payments | **SDK** (TypeScript / Python) | protect Express/FastAPI/MCP/A2A/Strands endpoints behind a plan |

If you are an autonomous agent that needs to **pay, enroll, register, or report**, start at **Track A — Operate as an autonomous agent**. If you are building a service that needs to **charge** callers, jump to **Track B — Add payments to your code**.

### How payments work (x402 in one minute)

Nevermined uses the **x402 protocol** (HTTP `402 Payment Required`). A buyer acquires an **access token** authorizing a spend, then **settles** it — which charges the payment method, mints, and burns credits. The same token can be sent to a protected agent in the `payment-signature` header; the agent verifies and settles for you.

Two payment **schemes** exist:

| Scheme | Pays with | `network` value |
|---|---|---|
| `nvm:erc4337` | Crypto stablecoins (USDC / EURC) via account-abstraction delegation | CAIP-2 chain id — `eip155:84532` (sandbox / Base Sepolia), `eip155:8453` (live / Base Mainnet) |
| `nvm:card-delegation` | A card on file via Stripe / Braintree / Visa delegation | `stripe`, `braintree`, or `visa` |

Three HTTP headers carry x402 data: `payment-signature` (client→server, the token), `payment-required` (server→client on 402, base64 JSON), `payment-response` (server→client on 200, base64 settlement receipt).

---

# Track A — Operate as an autonomous agent

This is a **REST runbook**: every step (A1–A8 below) is a plain HTTPS call you can make with `curl` or any HTTP client — **no SDK install required**. Each flow ends with the equivalent SDK one-liner if you prefer typed calls.

**Where the full detail lives.** Every flow is documented inline below (A1–A8). The complete request/response bodies are in the reference files alongside this skill — read the matching one when you need exact payloads:

| You need… | Read |
|---|---|
| API keys, **card enrollment + embedded session + delegation**, payment methods, x402 buy/settle, buyer status — full REST bodies | `references/autonomous-operations.md` (card flow = **§3**, x402 buy = **§4**) |
| Seller revenue / analytics queries (A7) | `references/seller-operations.md` |
| Plan registration + the plan-type matrix (A6) | `references/payment-plans.md` |
| Subscriber-side SDK patterns | `references/client-integration.md` |

> **Design principle — minimal human interaction.** A human is needed for **at most two one-time setup steps — often just one**:
> 1. **Get your first API key** (a human signs in once) — always required, and
> 2. **Enroll a card** (a human enters card details in a browser — required by PCI) — **only if you pay by card**; the stablecoin path skips this entirely.
>
> **Everything else is fully programmatic** and reusable: checking payment methods, creating delegations, purchasing, settling, registering plans/agents, and reading buyer/seller status. Store the API key and any `delegationId` and reuse them.

## A0 · Environment

Pick the environment and use its **exact base URL** for every call. State it explicitly to yourself — do not infer it from anything else.

| Environment | API base URL | App (human steps) | Card enrollment UI | Network | API key prefix |
|---|---|---|---|---|---|
| **sandbox** (test money) | `https://api.sandbox.nevermined.app` | `https://nevermined.app` | `https://embed.nevermined.app` | Base Sepolia `eip155:84532` | `sandbox:` |
| **live** (real money) | `https://api.live.nevermined.app` | `https://nevermined.app` | `https://embed.nevermined.app` | Base Mainnet `eip155:8453` | `live:` |

- **Auth:** send your key as `Authorization: Bearer <NVM_API_KEY>` on every call (a few read-only endpoints — e.g. `GET /protocol/plans/{id}` and `GET /protocol/agents/{id}/plans` — are public, but the header is harmless there).
- **Never log or persist secrets in the clear:** API keys, `delegationId`, and `paymentMethodId` arrive as query-string params on your `127.0.0.1` callback (see A1/A3). Your callback server must not log the request line, and you should keep the key in a secret store — query strings are the most-logged part of any request (access logs, shell history, process args).
- **Discover the API surface:** `GET {API_BASE}/api/v1/rest/docs-json` returns the OpenAPI JSON. **Heads-up — it is not exhaustive:** several agent-facing endpoints are served but **deliberately omitted from `docs-json`**, notably `POST /embed/session` (card enrollment), the `delegation/*` routes, and `organizations/{orgId}/analytics/*`. Don't conclude an endpoint doesn't exist because it's absent from the OpenAPI — **use the exact paths documented in this skill directly**. (To confirm one is live, send the request: a `401`/`400` means it exists; only `404` means it doesn't.)
- **Default to `sandbox`** unless the human explicitly asks for `live` — `live` moves real money.
- **Pin the API version:** send `Nevermined-Version: <MAJOR.MINOR>` on every direct REST call so platform releases can't change the wire shape under you. Discover the supported range with `GET {API_BASE}/api/v1/meta/versions` (authenticated; returns `current`, `floor`, `gatedVersions`, and the pin of YOUR key) and default to its `current`. Without the header, requests use the key's stored pin (editable by the key owner in the dashboard). The SDKs send the header automatically (`LOCKED_API_VERSION`). **Never silently change a key's stored pin** — pinning is the integration owner's deliberate decision. Changelog: [docs.nevermined.app/docs/development-guide/api-changelog](https://docs.nevermined.app/docs/development-guide/api-changelog).

## A1 · Get a Nevermined API key  *(needs a human once)*

You cannot mint your first key yourself — a human signs in once. **Default flow: drive a one-time browser login and capture the key automatically (Option A).** Host a `127.0.0.1` callback, **print a single sign-in URL for the human to open**, and read the key off the redirect. Do **not** ask the human to copy/paste a key or write it to a file unless Option A is genuinely impossible (no localhost callback) — then use Option B.

**Option A — embedded login (the default; the key returns to you automatically).** Host a tiny callback server on `127.0.0.1` (the login page only redirects to `localhost`/`127.0.0.1` callbacks), then **print this URL and ask your human to open it**:

```
https://nevermined.app/auth/cli?callback_url=http://127.0.0.1:<port>/callback
```

After they sign in, the browser is redirected to `http://127.0.0.1:<port>/callback?nvm_api_key=<api-key>` — read `nvm_api_key` off that request. (Keys for `sandbox` start with `sandbox`; for `live`, `live`.)

**Option B — manual paste (works anywhere).** Ask your human to open [nevermined.app](https://nevermined.app), sign in, create an API Key (Settings → Global NVM API Keys → **+ New API Key**), and paste it back. Or, once signed in, open `https://nevermined.app/auth/cli` with no `callback_url` to see the key on screen.

**Store the key and reuse it.** Never fabricate a key; the placeholder is `sandbox:your-api-key`. Full docs: [Get Your API Key](https://nevermined.ai/docs/getting-started/get-your-api-key).

## A2 · Check your payment methods

```bash
curl -H "Authorization: Bearer $NVM_API_KEY" \
  https://api.sandbox.nevermined.app/api/v1/payment-methods
# → [ { id, type, brand, last4, provider, status, ... } ]
```

- A **stablecoin** payment method (an account-abstraction smart account) exists by default — **fund it** and you can pay immediately, **no human needed**. In `sandbox` it spends test USDC on Base Sepolia; see [stablecoin payments](https://nevermined.ai/docs/integrate/patterns/stablecoin-payments) for funding. Its `id` is your wallet/holder address (used in **A5**).
- A **card** method appears here only after the one-time enrollment in **A3** below.
- **Field shapes:** `status` is **capitalized** (`"Active"`, `"Revoked"`) and the `erc4337` method's `type` is `"crypto_wallet"`. (In A5, delegation cents fields like `spendingLimitCents` come back as **strings**, not numbers.)

SDK: `payments.delegation.listPaymentMethods()` / `payments.delegation.list_payment_methods()`.

## A3 · Enroll a card + create a delegation  *(needs a human once)*

Skip this entirely if you pay with stablecoins. To pay with a card, use the **embedded browser flow** — same shape as the API key in A1: host a `127.0.0.1` callback, **print the card-setup URL for the human to open in a browser**, they sign in and enter the card, and you capture `paymentMethodId` + `delegationId` from the redirect. Open to any agent with an API key (no organization required).

```bash
# 1. Mint an embedded session (host a 127.0.0.1 callback first)
curl -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"returnUrl":"http://127.0.0.1:<port>/callback"}' \
  https://api.sandbox.nevermined.app/api/v1/embed/session
# → { "sessionToken": "...", "userId": "...", "userWallet": "0x...", "expiresAt": "..." }
```

> `POST /api/v1/embed/session` is **served but not listed in `docs-json`** (see A0) — call it directly; don't search the OpenAPI for it. It accepts any valid API key, takes only `{ returnUrl }` (a `localhost`/`127.0.0.1` URL), and returns a `sessionToken`.

2. **Print the card-setup URL and ask your human to open it** in their browser:

```
https://embed.nevermined.app/cards/setup?sessionToken=<sessionToken>&returnUrl=http://127.0.0.1:<port>/callback&state=<random>&provider=stripe
```

3. When they finish, the browser redirects to your `returnUrl` with **`paymentMethodId`** and **`delegationId`** as query params. **Store the `delegationId`** — a delegation authorizes you to spend within a fixed budget and time window, and you reuse it until it is spent or expires. To enforce a **specific** spending cap and duration (e.g. $50 over 30 days), create the delegation explicitly with `POST /delegation/create` (below), passing the callback's `paymentMethodId` as the `providerPaymentMethodId` field.

> Generate `state` as an unguessable random value and **reject the callback unless the returned `state` matches** the one you sent — it binds the response to your request (CSRF guard). And per A0, don't log the callback request line: `paymentMethodId`/`delegationId` ride in the query string.

**Create a delegation explicitly.** `provider` is one of `stripe`, `braintree`, `visa` (card) or `erc4337` (stablecoin). `provider`, `currency`, `spendingLimitCents`, and `durationSecs` are **required** (no silent default for `provider` or `currency`; use `currency: "usdc"` for `erc4337`, `"usd"` for card providers).

```bash
# Stablecoin (crypto) — no card, no human. Uses your default smart-account method.
curl -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"provider":"erc4337","spendingLimitCents":10000,"durationSecs":604800,"currency":"usdc"}' \
  https://api.sandbox.nevermined.app/api/v1/delegation/create

# Card (Stripe). providerPaymentMethodId is the `id` returned by GET /payment-methods.
curl -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"provider":"stripe","providerPaymentMethodId":"pm_...","spendingLimitCents":10000,"durationSecs":604800,"currency":"usd"}' \
  https://api.sandbox.nevermined.app/api/v1/delegation/create
# → { "delegationId": "...", "delegationToken": "..." }
```

SDK: `payments.delegation.createDelegation({ provider: 'erc4337', spendingLimitCents, durationSecs, currency: 'usdc' })`. `provider` and `currency` are **required** (no silent default); the delegation is plan-agnostic unless you pass `planId`.

> **Visa caveat.** `delegation/create` *does* accept `provider: "visa"`, but only together with a browser-produced `consumerPrompt` + `assuranceData` from a Visa WebAuthn ceremony; omitting them is rejected with `BCK.VISA.0014` ("requires consumerPrompt and assuranceData"). An autonomous agent can't generate `assuranceData`, so in practice have your human create the Visa delegation in the webapp and reuse its `delegationId`.

**Full detail:** the complete embedded card-enrollment handshake (session → card-setup redirect → `delegationId`), the localhost-callback rules, and every `delegation/create` field and response are in `references/autonomous-operations.md` §3.

## A4 · Buy access via x402  *(fully programmatic)*

Two calls: get an access token, then settle. **x402 is the default buy flow for both rails — crypto and card work the same way, only `scheme`/`network` differ.** The facilitator charges the right method (on-chain against your delegation for crypto, the card for fiat), mints, and burns.

```bash
# 1. Get an access token (authorizes the spend against your delegation)
curl -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{
        "accepted": { "scheme": "nvm:erc4337", "network": "eip155:84532", "planId": "<PLAN_ID>" },
        "delegationConfig": { "delegationId": "<YOUR_DELEGATION_ID>" }
      }' \
  https://api.sandbox.nevermined.app/api/v1/x402/permissions
# → { "accessToken": "..." }

# 2. Settle — charges the method, mints, and burns; this receipt is your proof of purchase
curl -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
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
# → { "success": true, "creditsRedeemed": "1", "remainingBalance": "999", "transaction": "0x...", "network": "eip155:84532" }
```

- **Pay with a card instead:** set `"scheme": "nvm:card-delegation"` and `"network": "stripe"` (or `braintree`/`visa`) in both `accepted` and `accepts[0]`.
- **`resource.url` for a plan top-up** = the plan's own URL, `{API_BASE}/api/v1/protocol/plans/<PLAN_ID>`.
- **Which scheme does a plan use?** `GET {API_BASE}/api/v1/protocol/plans/<PLAN_ID>` (public) returns the plan's metadata and pricing so you can pick `nvm:erc4337` vs `nvm:card-delegation` before paying. When buying from a protected agent, its `402` tells you instead.
- **Note the field rename:** `/permissions` returns `accessToken`; pass that value as `x402AccessToken` in `/settle` and `/verify`.
- **Dry run first (optional):** `POST /api/v1/x402/verify` with the same `{ paymentRequired, x402AccessToken }` body → `{ "isValid": true }`.
- **Proof of purchase** = `success: true` with `creditsRedeemed` > 0 and a `remainingBalance` (and, for crypto, an on-chain `transaction`).
- **Card budget caveat:** a card settle may not immediately move the delegation's `amountSpentCents`/`remainingBudgetCents` — use the settle receipt + the A5 plan balance as the source of truth for card spend, not the delegation budget.

**Calling a protected agent directly** (the common case): just send the access token as the `payment-signature` header to the agent's endpoint — the agent's own `402` response **is** your `paymentRequired`, and the agent verifies + settles for you. You only call `/settle` yourself when topping up a plan with no protected endpoint to hit.

> A dedicated `orderPlan` / `POST /protocol/plans/{id}/order` endpoint exists for an explicit, upfront stablecoin purchase, but **x402 above is the default for both rails — use `/order` only when specifically requested.**

SDK shortcut for step 1:
```typescript
const { accessToken } = await payments.x402.getX402AccessToken(planId, agentId, {
  delegationConfig: { delegationId }        // create the delegation first via createDelegation, then pass its delegationId
})
```
```python
res = payments.x402.get_x402_access_token(plan_id, agent_id,
    token_options=X402TokenOptions(delegation_config=DelegationConfig(delegation_id=delegation_id)))
```

Full crypto + card walkthroughs with every field: `references/autonomous-operations.md`. Subscriber-side SDK patterns: `references/client-integration.md`.

## A5 · Check your purchases & credits (as a buyer)  *(fully programmatic)*

You query a plan you hold by its `<PLAN_ID>`. There is no "list every plan I've purchased" endpoint, so **retain the plan IDs you buy** — each `/x402/settle` receipt identifies the plan, and the plan URL embeds the id. (`GET /protocol/plans` lists plans **you published as a seller**, not ones you bought.)

```bash
# Credits left on a plan you hold. YOUR_ADDRESS = your wallet: the `id`/address of your
# erc4337 payment method from GET /payment-methods (crypto), or the `userWallet` from POST /embed/session.
curl -H "Authorization: Bearer $NVM_API_KEY" \
  https://api.sandbox.nevermined.app/api/v1/protocol/plans/<PLAN_ID>/balance/<YOUR_ADDRESS>
# → { planId, planName, planType, isSubscriber, balance, pricePerCredit, ... }

# Your delegations and remaining budget
curl -H "Authorization: Bearer $NVM_API_KEY" \
  https://api.sandbox.nevermined.app/api/v1/delegation
# → { totalResults, delegations: [ { delegationId, status, spendingLimitCents, amountSpentCents, remainingBudgetCents, expiresAt } ] }
# `status` is "Active" | "Expired" | "Exhausted" — flag a delegation when status != "Active", or remainingBudgetCents is at/near 0, or expiresAt is near.
# Caveat: a CARD delegation's budget may not reflect a card settle immediately (amountSpentCents can stay 0) — for cards, treat the settle receipt + plan balance as the spend source of truth, not the delegation budget.

# A delegation's individual charges
curl -H "Authorization: Bearer $NVM_API_KEY" \
  https://api.sandbox.nevermined.app/api/v1/delegation/<DELEGATION_ID>/transactions
```

SDK: `payments.plans.getPlanBalance(planId)` (`PlanBalance.balance` is a `bigint` in TS / `int` in Python). The `creditsRedeemed`/`remainingBalance` you get back from `/settle` (or the decoded `payment-response` header) is also a live proof of your balance after a purchase.

## A6 · Register a plan + agent (as a seller)  *(fully programmatic — SDK-first)*

Registration is the one flow where the **SDK is the recommended path**: the price/credits configs are low-level on-chain structures (amounts, receivers, token addresses, redemption type, nonce) that the SDK helpers build for you.

```typescript
const { agentId, planId } = await payments.agents.registerAgentAndPlan(
  { name: 'Weather Agent', description: 'Forecasts on demand', tags: ['weather'], dateCreated: new Date() },
  { endpoints: [{ POST: 'https://your-api.com/query' }] },   // optional; omit for an open agent
  { name: 'Starter Plan', description: '100 requests for $10', dateCreated: new Date() },
  payments.plans.getFiatPriceConfig(10_000_000n, BUILDER_ADDRESS, 'USD'),  // $10.00 — fiat is 6-decimal units, NOT cents. Or getERC20PriceConfig(...) for crypto
  payments.plans.getFixedCreditsConfig(100n, 1n)
)
```

Price helpers: `getERC20PriceConfig`/`getEURCPriceConfig` (crypto), `getFiatPriceConfig` (card). Credits helpers: `getFixedCreditsConfig` (prepaid), `getExpirableDurationConfig` (time-based), `getPayAsYouGoCreditsConfig` (per-call). The raw REST endpoints exist (`POST /api/v1/protocol/plans`, `/api/v1/protocol/agents`, `/api/v1/protocol/agents/plans`) but expect the fully-formed `priceConfig`/`creditsConfig` objects — use the SDK helpers to produce them. Full plan-type matrix and helper reference: `references/payment-plans.md`.

## A7 · Check your agents' status & revenue (as a seller)  *(fully programmatic)*

**Organization analytics** (require an active **Premium** org tier). **Discover your `orgId` from your own records** — every item in `GET /protocol/plans` and `/protocol/agents` carries `.orgId` + `.organizationName`; take the most common non-null `.orgId` across your published items (it's the `org-...` id, also in your `…/organizations/<orgId>/agentic-instructions.md`). Only call analytics with an id matching `^org-[0-9a-f-]+$`. Failure modes to handle (fall back to the any-tier building blocks below on any of them):
- a **foreign / non-admin** org → `403 BCK.AUTH.0004` ("Organisation admin privileges required");
- a **non-Premium** org → `403 BCK.ORGANIZATIONS.0022`;
- a **malformed / placeholder** org id → a **silent `200` of all-zeros** — never report that as real revenue; if you have published plans but analytics returns zeros, treat it as a failure.

```bash
B=https://api.sandbox.nevermined.app/api/v1/organizations/<ORG_ID>/analytics
curl -H "Authorization: Bearer $NVM_API_KEY" "$B/revenue?from=2026-03-20T00:00:00Z&to=2026-06-18T00:00:00Z"
# → { items: [ { agentId, agentName, totalRevenue, transactionCount } ], totalRevenue }
curl -H "Authorization: Bearer $NVM_API_KEY" "$B/mrr"
# → { mrr, activeSubscriptions }
curl -H "Authorization: Bearer $NVM_API_KEY" "$B/usage?from=...&to=..."
# → { items: [ { planId, planName, creditsBurned, uniqueUsers } ] }
curl -H "Authorization: Bearer $NVM_API_KEY" "$B/customers?limit=20"
# → { items: [ { customerId, userId, totalSpent, firstSeenAt, lastActiveAt } ], totalCustomers }
```

> **Reading the analytics rows:** they're labelled `agentId`/`agentName` but are grouped **by plan**; `totalRevenue`/`totalSpent` are stringified integers in 6-decimal token units (divide by 1,000,000 for USD), while `creditsBurned` is a plain count. `mrr` is legitimately `0` when sales were one-off credit purchases rather than recurring subscriptions.

**Any-tier building blocks** (no Premium required) — list what you've published and inspect each:

```bash
curl -H "Authorization: Bearer $NVM_API_KEY" https://api.sandbox.nevermined.app/api/v1/protocol/plans     # your plans
curl -H "Authorization: Bearer $NVM_API_KEY" https://api.sandbox.nevermined.app/api/v1/protocol/agents    # your agents
curl -H "Authorization: Bearer $NVM_API_KEY" https://api.sandbox.nevermined.app/api/v1/protocol/agents/<AGENT_ID>/plans  # plans on an agent
```

These return `{ total, page, offset, plans|agents: [ … ] }`, but each **item is the full record**, not a flat summary: read the name from `metadata.main.name` and price/type from `registry` / `metadata` (the `id` is the plan/agent id). The flat `{ planName, planType, pricePerCredit }` shape is only returned by the **balance** endpoint in A5, not by these list endpoints.

For per-request usage and cost observability (Helicone), see `references/seller-operations.md`, which details every seller query and the response shapes.

## A8 · Receive payments in your own agent

If your goal is to make **your** agent charge its callers (not to buy from others), that is **Track B** below — it shows how to gate Express/FastAPI/MCP/A2A/Strands endpoints behind a plan with `verifyPermissions` / `settlePermissions` or framework middleware.

---

# Track B — Add payments to your code

Use this track to wire Nevermined into an agent or API **so it can receive payments**. This is SDK-first (TypeScript / Python).

## Prerequisite: a Nevermined API Key

All SDK, REST, and CLI calls require an `NVM_API_KEY` (see **A1** for how to obtain one). Set it as an environment variable:

```bash
export NVM_API_KEY="sandbox:your-api-key"
```

> **IMPORTANT for AI agents**: If you are generating code that requires `NVM_API_KEY` and the developer has not provided one, tell them to create one first (see **A1**). Never generate placeholder keys that look real — always use `sandbox:your-api-key` as the placeholder value.

## Environment Setup

| Variable | Required | Description |
|---|---|---|
| `NVM_API_KEY` | Yes | Your Nevermined API key — see [Get Your API Key](https://nevermined.ai/docs/getting-started/get-your-api-key) |
| `NVM_ENVIRONMENT` | Yes | `sandbox` for testing, `live` for production |
| `NVM_PLAN_ID` | Yes | The plan ID from registration |
| `NVM_AGENT_ID` | Sometimes | Required for MCP servers and plans with multiple agents |
| `BUILDER_ADDRESS` | For registration | Wallet address to receive payments |

### `.env` Template

```bash
# Required
NVM_API_KEY=sandbox:your-api-key
NVM_ENVIRONMENT=sandbox
NVM_PLAN_ID=your-plan-id-here

# Required for MCP servers or multi-agent plans
NVM_AGENT_ID=your-agent-id-here

# Required for registration
BUILDER_ADDRESS=0xYourWalletAddress
```

### Prerequisites

- **TypeScript/Express.js**: Node.js 18+. Your `package.json` must include `"type": "module"` for the `@nevermined-io/payments/express` subpath import to work.
- **Python/FastAPI**: Python 3.9+. Install with `pip install payments-py[fastapi]` — the `[fastapi]` extra is required for the middleware.

### TypeScript

```bash
npm install @nevermined-io/payments
```

```typescript
import { Payments } from '@nevermined-io/payments'

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: 'sandbox'
})
```

### Python

```bash
pip install payments-py
```

```python
import os
from payments_py import Payments, PaymentOptions

payments = Payments.get_instance(
    PaymentOptions(
        nvm_api_key=os.environ["NVM_API_KEY"],
        environment="sandbox"
    )
)
```

## Core Workflow (All Integrations)

Every Nevermined payment integration follows this 5-step pattern:

1. **Client sends request** without a payment token
2. **Server returns 402** with `payment-required` header (base64-encoded JSON with plan info)
3. **Client acquires x402 token** via `payments.x402.getX402AccessToken(planId, agentId, { delegationConfig: { delegationId } })` — create the delegation first with `createDelegation` (`provider` + `currency` required), then pass its `delegationId` (inline create-on-the-fly is deprecated)
4. **Client retries** with `payment-signature` header containing the token
5. **Server verifies → executes → settles** (burns credits), returns response with `payment-response` header

## Framework Decision Tree

Choose the integration that matches your stack:

| Framework | Language | Reference | Key Import |
|---|---|---|---|
| **Express.js** | TypeScript/JS | `references/express-integration.md` | `paymentMiddleware` from `@nevermined-io/payments/express` |
| **FastAPI** | Python | `references/fastapi-integration.md` | `PaymentMiddleware` from `payments_py.x402.fastapi` |
| **Strands Agent** | Python | `references/strands-integration.md` | `@requires_payment` from `payments_py.x402.strands` |
| **MCP Server** | TypeScript | `references/mcp-paywall.md` | `payments.mcp.start()` / `payments.mcp.registerTool()` |
| **Google A2A** | TS / Python | `references/a2a-integration.md` | `payments.a2a.start()` / `payments.a2a.buildPaymentAgentCard()` |
| **Any HTTP** | Any | `references/x402-protocol.md` | Manual verify/settle via facilitator API |
| **Client-side** | TS / Python | `references/client-integration.md` | `payments.x402.getX402AccessToken()` with `delegationConfig` |

## SDK Quick Reference

### TypeScript (`@nevermined-io/payments`)

```typescript
// Initialize
const payments = Payments.getInstance({ nvmApiKey, environment })

// Build price + credits configs (pick one helper per axis)
const priceConfig =
  payments.plans.getERC20PriceConfig(10_000_000n, USDC_ADDRESS, builderAddress)
  // or getEURCPriceConfig / getNativeTokenPriceConfig / getFreePriceConfig
  // or getFiatPriceConfig(amount, builderAddress, 'USD') for Stripe/Braintree
  // or await getPayAsYouGoPriceConfig(amount, builderAddress, tokenAddress?)

const creditsConfig =
  payments.plans.getFixedCreditsConfig(100n, 1n)
  // or getDynamicCreditsConfig / getExpirableDurationConfig
  // or getPayAsYouGoCreditsConfig() for PAYG plans

// Register agent + plan
const { agentId, planId } = await payments.agents.registerAgentAndPlan(
  agentMetadata, agentApi, planMetadata, priceConfig, creditsConfig
)

// Subscriber: order plan and get token
await payments.plans.orderPlan(planId)
const planBalance = await payments.plans.getPlanBalance(planId)
console.log(`Credits remaining: ${planBalance.balance}`)  // PlanBalance.balance is bigint

// Create the delegation first (provider + currency required), then request the token by delegationId.
const delegation = await payments.delegation.createDelegation({
  provider: 'erc4337', spendingLimitCents: 100, durationSecs: 3600, currency: 'usdc'
})
const { accessToken } = await payments.x402.getX402AccessToken(planId, agentId, {
  delegationConfig: { delegationId: delegation.delegationId }
})

// Server: verify and settle
const verification = await payments.facilitator.verifyPermissions({
  paymentRequired, x402AccessToken: token, maxAmount: BigInt(credits)
})
const settlement = await payments.facilitator.settlePermissions({
  paymentRequired, x402AccessToken: token, maxAmount: BigInt(creditsUsed)
})

// Helpers
import { buildPaymentRequired } from '@nevermined-io/payments'
import { paymentMiddleware, X402_HEADERS } from '@nevermined-io/payments/express'

// MCP server
payments.mcp.registerTool(name, config, handler, { credits: 5n })
const { info, stop } = await payments.mcp.start({ port, agentId, serverName })

// A2A server
const agentCard = payments.a2a.buildPaymentAgentCard(baseCard, { paymentType, credits, planId, agentId })
const server = await payments.a2a.start({ port, basePath: '/a2a/', agentCard, executor })
// A2A client
const client = payments.a2a.getClient({ agentBaseUrl, agentId, planId })
await client.sendMessage("Hello", accessToken)
```

### Python (`payments-py`)

```python
from payments_py.x402 import CreateDelegationPayload, DelegationConfig, X402TokenOptions

# Initialize
payments = Payments.get_instance(PaymentOptions(nvm_api_key=key, environment="sandbox"))

# Build price + credits configs (helpers exist on payments.plans and as module funcs)
price_config = payments.plans.get_erc20_price_config(10_000_000, USDC_ADDRESS, builder_address)
# or get_eurc_price_config / get_native_token_price_config / get_free_price_config
# or get_fiat_price_config(amount, builder_address, "USD") for Stripe/Braintree
# or payments.plans.get_pay_as_you_go_price_config(...)  (sync; uses cached contract address)
credits_config = payments.plans.get_fixed_credits_config(100, 1)

# Register agent + plan
result = payments.agents.register_agent_and_plan(
    agent_metadata, agent_api, plan_metadata, price_config, credits_config
)

# Subscriber: order plan and get token
payments.plans.order_plan(plan_id)
plan_balance = payments.plans.get_plan_balance(plan_id)
print(f"Credits remaining: {plan_balance.balance}")  # PlanBalance.balance is int
# Create the delegation first (provider + currency required), then request the token by delegation_id.
delegation = payments.delegation.create_delegation(
    CreateDelegationPayload(
        provider="erc4337", spending_limit_cents=100, duration_secs=3600, currency="usdc"
    )
)
token_res = payments.x402.get_x402_access_token(
    plan_id, agent_id,
    token_options=X402TokenOptions(
        delegation_config=DelegationConfig(delegation_id=delegation.delegation_id)
    )
)

# Server: verify and settle
verification = payments.facilitator.verify_permissions(
    payment_required=pr, x402_access_token=token, max_amount=str(credits)
)
settlement = payments.facilitator.settle_permissions(
    payment_required=pr, x402_access_token=token, max_amount=str(credits_used)
)

# Helpers
from payments_py.x402.helpers import build_payment_required
from payments_py.x402.fastapi import PaymentMiddleware
from payments_py.x402.strands import requires_payment

# A2A server
from payments_py.a2a.agent_card import build_payment_agent_card
from payments_py.a2a.server import PaymentsA2AServer
agent_card = build_payment_agent_card(base_card, { ... })
server = PaymentsA2AServer.start(agent_card=agent_card, executor=executor, payments_service=payments, port=3005)
# A2A client
client = payments.a2a.get_client(agent_base_url=url, agent_id=agent_id, plan_id=plan_id)
```

## x402 Payment Headers

All x402 v2 integrations use these three HTTP headers:

| Header | Direction | Description |
|---|---|---|
| `payment-signature` | Client → Server | x402 access token |
| `payment-required` | Server → Client (402) | Base64-encoded JSON with plan requirements |
| `payment-response` | Server → Client (200) | Base64-encoded JSON settlement receipt |

The `payment-required` payload structure:
```json
{
  "x402Version": 2,
  "resource": { "url": "/api/endpoint" },
  "accepts": [{
    "scheme": "nvm:erc4337",
    "network": "eip155:84532",
    "planId": "<plan-id>",
    "extra": { "agentId": "<agent-id>" }
  }],
  "extensions": {}
}
```

### Supported x402 schemes

| Scheme | Network field | Settlement |
|---|---|---|
| `nvm:erc4337` | CAIP-2 chain ID (e.g. `eip155:84532` Base Sepolia, `eip155:8453` Base Mainnet) | Crypto stablecoins (USDC / EURC) via account-abstraction delegation |
| `nvm:card-delegation` | Fiat provider (`stripe`, `braintree`, or `visa`) | Card-on-file via Stripe / Braintree / Visa Agentic Token delegation |

The SDK auto-resolves the scheme from the plan's `priceConfig` metadata. You only need to pass `scheme` explicitly if you want to override it.

## Payment Plan Types

Nevermined supports several plan types:

- **Credits-based**: prepaid balance, deducted per request (most common for APIs). Use `getFixedCreditsConfig` or `getDynamicCreditsConfig`.
- **Time-based**: access for a fixed duration (e.g., 30 days unlimited). Use `getExpirableDurationConfig`.
- **Pay-as-you-go (PAYG)**: one credit granted and burned per purchase — clients re-purchase before each call. Use `getPayAsYouGoPriceConfig` + `getPayAsYouGoCreditsConfig`.
- **Trial**: free limited access, one-time claim per user. Use `getFreePriceConfig`.
- **Hybrid**: combine fixed credits with a time expiry by passing `accessLimit: 'time'` and an expirable duration config.

Each plan can be priced in **crypto** (`getERC20PriceConfig`, `getEURCPriceConfig`, `getNativeTokenPriceConfig`) or **fiat** (`getFiatPriceConfig` — Stripe / Braintree / Visa Trusted Agent). The selected price helper determines the x402 scheme used at runtime.

For fiat plans, the active provider is selected per plan via the `fiatPaymentProvider` metadata field (`'stripe'`, `'braintree'`, or `'visa'`). Sellers using Braintree must connect a Braintree merchant account with at least one child merchant account in the plan's currency. Sellers offering Visa Trusted Agent plans must complete Stripe Connect onboarding (Visa delegations settle through Stripe Connect) — see [`braintree-onboarding`](/docs/products/payments/braintree-onboarding) for the Braintree seller setup and [`card-enrollment`](/docs/products/payments/card-enrollment) for the buyer-side flow.

**Visa caveat for SDK builders.** Visa delegation creation is browser-only — it requires `consumerPrompt` + `assuranceData` produced by an in-browser WebAuthn ceremony embedded by Visa VTS. The SDK can **consume** an existing Visa delegation by passing its `delegationId` to `DelegationConfig`, but calling `createDelegation` / `create_delegation` with `provider: 'visa'` is rejected by the backend (`BCK.VISA.0014`). For any SDK code path that needs a Visa delegation, instruct the user to create it in the Nevermined webapp and pass the resulting ID back to the agent.

See `references/payment-plans.md` for plan registration code.

## Common Patterns

### Express.js — Fixed credits per route

```typescript
import { paymentMiddleware } from '@nevermined-io/payments/express'

app.use(paymentMiddleware(payments, {
  'POST /ask': { planId: PLAN_ID, credits: 1 },
  'POST /generate': { planId: PLAN_ID, credits: 5 }
}))
```

### FastAPI — Fixed credits per route

```python
from payments_py.x402.fastapi import PaymentMiddleware

app.add_middleware(
    PaymentMiddleware,
    payments=payments,
    routes={
        "POST /ask": {"plan_id": PLAN_ID, "credits": 1},
        "POST /generate": {"plan_id": PLAN_ID, "credits": 5}
    }
)
```

### Express.js — Dynamic credits based on response

```typescript
paymentMiddleware(payments, {
  'POST /generate': {
    planId: PLAN_ID,
    credits: (req, res) => {
      const tokens = res.locals.tokenCount || 100
      return Math.ceil(tokens / 100)
    }
  }
})
```

### FastAPI — Dynamic credits based on request

```python
async def calculate_credits(request: Request) -> int:
    body = await request.json()
    max_tokens = body.get("max_tokens", 100)
    return max(1, max_tokens // 100)

app.add_middleware(
    PaymentMiddleware,
    payments=payments,
    routes={"POST /generate": {"plan_id": PLAN_ID, "credits": calculate_credits}}
)
```

### MCP Server — Register tool with paywall

```typescript
payments.mcp.registerTool(
  "weather.today",
  { title: "Today's Weather", inputSchema: z.object({ city: z.string() }) },
  async (args, extra, context) => ({
    content: [{ type: "text", text: `Weather in ${args.city}: Sunny, 25C` }]
  }),
  { credits: 5n }
)

const { info, stop } = await payments.mcp.start({
  port: 3000,
  agentId: process.env.NVM_AGENT_ID!,
  serverName: "my-server"
})
```

### Strands Agent — Decorator-based payment

```python
from strands import Agent, tool
from payments_py.x402.strands import requires_payment

@tool(context=True)
@requires_payment(payments=payments, plan_id=PLAN_ID, credits=1)
def analyze_data(query: str, tool_context=None) -> dict:
    return {"status": "success", "content": [{"text": f"Analysis: {query}"}]}

agent = Agent(tools=[analyze_data])
```

### Google A2A — Agent server with payment extension

#### TypeScript

```typescript
const agentCard = payments.a2a.buildPaymentAgentCard(baseAgentCard, {
  paymentType: "dynamic",
  credits: 1,
  planId: process.env.NVM_PLAN_ID!,
  agentId: process.env.NVM_AGENT_ID!,
})

const server = await payments.a2a.start({
  port: 3005,
  basePath: '/a2a/',
  agentCard,
  executor: new MyExecutor(),
})
```

#### Python

```python
from payments_py.a2a.agent_card import build_payment_agent_card
from payments_py.a2a.server import PaymentsA2AServer

agent_card = build_payment_agent_card(base_agent_card, {
    "paymentType": "dynamic",
    "credits": 1,
    "planId": os.environ["NVM_PLAN_ID"],
    "agentId": os.environ["NVM_AGENT_ID"],
})

server = PaymentsA2AServer.start(
    agent_card=agent_card,
    executor=MyExecutor(),
    payments_service=payments,
    port=3005,
    base_path="/a2a/",
)
```

### Google A2A — Client sending a paid task

```typescript
const client = payments.a2a.getClient({
  agentBaseUrl: 'http://localhost:3005/a2a/',
  agentId: AGENT_ID,
  planId: PLAN_ID,
})

// Create the delegation first (provider + currency required), then request the token by delegationId.
const delegation = await payments.delegation.createDelegation({
  provider: 'erc4337', spendingLimitCents: 100, durationSecs: 3600, currency: 'usdc'
})
const { accessToken } = await payments.x402.getX402AccessToken(PLAN_ID, AGENT_ID, {
  delegationConfig: { delegationId: delegation.delegationId }
})
const response = await client.sendMessage("Analyze this data", accessToken)
```

## Gathering Developer Information Upfront

When a developer asks you to integrate Nevermined payments, gather ALL required information in a single question before generating code. This avoids multiple back-and-forth interactions.

**Ask the developer once for:**

1. **Framework**: Express.js, FastAPI, MCP server, Strands agent, Google A2A, or generic HTTP?
2. **Routes to protect**: Which endpoints need payment protection and how many credits each? (e.g., `POST /chat = 1 credit, POST /generate = 5 credits`)
3. **Pricing model**: Fixed credits per request, or dynamic pricing based on request/response parameters?
4. **Nevermined API Key**: Do they already have an `NVM_API_KEY`? If not, direct them to **A1**
5. **Plan ID**: Do they already have a `NVM_PLAN_ID`? If not, do they need a registration script too?
6. **Environment**: `sandbox` (testing) or `live` (production)?

**If they need plan registration, also ask:**

7. **Plan name and description**: e.g., "Starter Plan — 100 API requests"
8. **Pricing**: How much in USDC? (e.g., 10 USDC for 100 credits)
9. **Credits per plan**: Total credits included (e.g., 100)
10. **Builder wallet address** (`BUILDER_ADDRESS`): The wallet that receives payments

**Example combined prompt to offer the developer:**

> I need to set up Nevermined payments. Here's my info:
> - Framework: Express.js
> - Routes: POST /chat (1 credit), POST /summarize (3 credits)
> - I need a registration script too
> - Plan: "Starter Plan", 100 credits for 10 USDC
> - Environment: sandbox
> - My API key is in the NVM_API_KEY env var
> - My wallet: 0x1234...

With this information, generate both the registration script and the payment-protected server in a single response.

## Agent and Plan Registration

### Using the SDK (Recommended)

Register your agent and plan programmatically — see `references/payment-plans.md` for complete code.

```typescript
// TypeScript
const { agentId, planId } = await payments.agents.registerAgentAndPlan(
  { name: 'My Agent', description: 'AI service', tags: ['ai'], dateCreated: new Date() },
  // endpoints + agentDefinitionUrl are both optional in AgentAPIAttributes.
  // Provide endpoints only when you want the Nevermined platform to enforce
  // route-level Additional Security on top of your library middleware.
  { endpoints: [{ POST: 'https://your-api.com/query' }] },
  { name: 'Starter Plan', description: '100 requests for $10', dateCreated: new Date() },
  payments.plans.getERC20PriceConfig(10_000_000n, USDC_ADDRESS, process.env.BUILDER_ADDRESS!),
  payments.plans.getFixedCreditsConfig(100n, 1n)
)
```

```python
# Python
from payments_py.plans import get_erc20_price_config, get_fixed_credits_config
# (or use the methods on payments.plans.* — both are equivalent)

result = payments.agents.register_agent_and_plan(
    agent_metadata={'name': 'My Agent', 'description': 'AI service', 'tags': ['ai']},
    # agent_api is required, but its `endpoints` and `agent_definition_url`
    # fields are both optional. Omit them for an open agent (no platform-side
    # route enforcement); include `endpoints` for Additional Security.
    agent_api={'endpoints': [{'POST': 'https://your-api.com/query'}]},
    plan_metadata={'name': 'Starter Plan', 'description': '100 requests for $10'},
    price_config=get_erc20_price_config(10_000_000, USDC_ADDRESS, os.environ['BUILDER_ADDRESS']),
    credits_config=get_fixed_credits_config(100, 1)
)
```

### Using the Nevermined App (No-Code)

1. Go to [nevermined.app](https://nevermined.app) and sign in
2. Click "My agents" → register a new agent with metadata and endpoints
3. Create a payment plan: set pricing, credits, and duration
4. Link the plan to your agent and publish
5. Copy the `agentId` and `planId` for your `.env` file

### Using the CLI

```bash
# 1. Install CLI
npm install -g @nevermined-io/cli

# 2. Configure (use sandbox for testing)
nevermined config init --api-key "$NVM_API_KEY" --environment sandbox

# 3. Build the helper-shaped configs and register
#    The --price-config / --credits-config flags expect the JSON shape
#    produced by Plans.getERC20PriceConfig and Plans.getFixedCreditsConfig —
#    the helper subcommands below emit exactly that shape with --format json.
PRICE=$(nevermined plans get-erc20-price-config \
  --amount 10000000 \
  --token-address 0x036CbD53842c5426634e7929541eC2318f3dCF7e \
  --receiver $BUILDER_ADDRESS \
  --format json)
CREDITS=$(nevermined plans get-fixed-credits-config \
  --credits-granted 100 \
  --credits-per-request 1 \
  --format json)

nevermined agents register-agent-and-plan \
  --agent-metadata '{"name":"My Agent","description":"AI service"}' \
  --agent-api '{"endpoints":[{"POST":"https://your-api.com/query"}]}' \
  --plan-metadata '{"name":"Starter Plan","description":"100 requests"}' \
  --price-config "$PRICE" \
  --credits-config "$CREDITS"

# 4. List your plans
nevermined plans get-plans

# 5. As a subscriber: order a plan and get an x402 token
#    For fiat plans, pass --payment-type fiat (defaults to crypto).
nevermined plans order-plan $PLAN_ID
nevermined x402token get-x402-access-token $PLAN_ID \
  --agent-id $AGENT_ID \
  --spending-limit-cents 10000 \
  --delegation-duration-secs 604800

# 6. Test against your running server
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -H "payment-signature: $TOKEN" \
  -d '{"message": "Hello"}'
```

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| HTTP 402 returned | No `payment-signature` header or invalid/expired token | Generate a fresh token via `getX402AccessToken` with `delegationConfig` |
| `401 BCK.AUTH.0002` on a REST call | Missing/expired API key | Send `Authorization: Bearer $NVM_API_KEY`; mint a key per **A1** |
| `403` on analytics — `BCK.ORGANIZATIONS.0022` (not Premium) or `BCK.AUTH.0004` (not an admin of that org) | Wrong tier, not your org, or a malformed `orgId` (which instead returns a **silent 200-of-zeros**) | Discover the real `orgId` from `.orgId` on your plan/agent records; use the any-tier building blocks in **A7**, or upgrade the org |
| `BCK.VISA.0014` creating a delegation | `provider:"visa"` sent without the browser-produced `consumerPrompt` + `assuranceData` | An agent can't produce `assuranceData` — create the Visa delegation in the webapp; reuse the `delegationId` |
| `BCK.X402.0002` Plan not found | Wrong `planId` or wrong environment | Verify the plan ID and that you are calling the matching `sandbox`/`live` base URL |
| MCP error `-32003` | Payment Required — no token, invalid token, or insufficient credits | Check subscriber has purchased plan and has credits remaining |
| MCP error `-32002` | Server misconfiguration | Verify `NVM_API_KEY`, `NVM_PLAN_ID`, and `NVM_AGENT_ID` are set correctly |
| `verification.isValid` is false | Token expired/invalid, wrong plan, **plan not linked to the agent**, or insufficient credits | Regenerate the token; if it persists, verify the plan is associated with the agent and that credits remain (don't just loop on token regeneration) |
| Credits not deducting | Settlement not called after request | Ensure you call `settlePermissions` after processing (middleware does this automatically) |
| `payment-required` header missing | Server not returning 402 properly | Use `buildPaymentRequired()` helper or framework middleware |

## Additional Resources

- **Documentation**: [nevermined.ai/docs](https://nevermined.ai/docs)
- **Autonomous agent purchase guide**: [nevermined.ai/docs/getting-started/ai-agent-purchase](https://nevermined.ai/docs/getting-started/ai-agent-purchase)
- **Card enrollment & delegation**: [nevermined.ai/docs/solutions/card-delegation](https://nevermined.ai/docs/solutions/card-delegation)
- **Nevermined App**: [nevermined.app](https://nevermined.app) — register agents, create plans, manage subscriptions
- **API discovery (per environment)**: `GET {API_BASE}/api/v1/rest/docs-json` (OpenAPI JSON)
- **MCP Search Server**: `https://docs.nevermined.app/mcp` — search Nevermined docs from any MCP client
- **Tutorials**: [github.com/nevermined-io/tutorials](https://github.com/nevermined-io/tutorials)
- **Discord**: [discord.com/invite/GZju2qScKq](https://discord.com/invite/GZju2qScKq)
- **TypeScript SDK**: `@nevermined-io/payments` on npm
- **Python SDK**: `payments-py` on PyPI
