# Seller Operations — status & revenue

How an agent (or its operator) checks the **performance of the plans and agents it sells**: revenue, recurring revenue, usage, customers, and the underlying plan/agent inventory. Companion to **Track A · A7** in `SKILL.md`.

> Verified against the live sandbox API. Send `Authorization: Bearer $NVM_API_KEY` on every call. The `analytics/*` endpoints are served by the platform but are not listed in the public OpenAPI (`docs-json`) — use the paths below directly.

## Two layers

1. **Organization analytics** — aggregated revenue/MRR/usage/customers. **Requires an active Premium organization tier** (`403 BCK.ORGANIZATIONS.0022` otherwise). Needs your `orgId`.
2. **Protocol building blocks** — list your plans/agents and read individual balances. **Any tier**, no `orgId` needed (user-scoped to your API key).

---

## 1. Organization analytics (Premium)

Base: `https://api.sandbox.nevermined.app/api/v1/organizations/<ORG_ID>/analytics`. Date params are ISO-8601; `from` inclusive, `to` exclusive.

### Revenue per agent

```bash
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  "$B/revenue?from=2026-01-01T00:00:00Z&to=2026-06-09T00:00:00Z"
```
```json
{
  "items": [
    { "agentId": "did:nv:...", "agentName": "Weather Agent", "totalRevenue": "125000", "transactionCount": 412 }
  ],
  "totalRevenue": "125000"
}
```
`totalRevenue` is a stringified integer in the plan's smallest currency unit.

### Monthly recurring revenue + active subscriptions

```bash
curl -s -H "Authorization: Bearer $NVM_API_KEY" "$B/mrr?asOf=2026-06-01T00:00:00Z"
# → { "mrr": "48000", "activeSubscriptions": 37 }
```
`asOf` defaults to now.

### Usage (credits burned per plan)

```bash
curl -s -H "Authorization: Bearer $NVM_API_KEY" "$B/usage?from=...&to=...&limit=50"
# → { "items": [ { "planId": "...", "planName": "Starter", "creditsBurned": "9120", "uniqueUsers": 64 } ] }
```

### Top customers

```bash
curl -s -H "Authorization: Bearer $NVM_API_KEY" "$B/customers?limit=20"
# → { "items": [ { "customerId": "...", "userId": "...", "totalSpent": "32000",
#                  "firstSeenAt": "2026-02-...", "lastActiveAt": "2026-06-..." } ],
#      "totalCustomers": 128 }
```

> Finding your `orgId`: it's the `org-...` identifier for your organization in your Nevermined account (the same id used in `…/organizations/<orgId>/agentic-instructions.md`). If you don't operate under an org, use the building blocks below.

---

## 2. Protocol building blocks (any tier)

These are user-scoped to your API key — no `orgId` and no Premium needed.

```bash
# Your published plans (paginated)
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  "https://api.sandbox.nevermined.app/api/v1/protocol/plans?page=1&offset=20"
# → { total, page, offset, plans: [ { planId, planName, pricePerCredit, planType, ... } ] }

# Your published agents
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  "https://api.sandbox.nevermined.app/api/v1/protocol/agents?page=1&offset=20"
# → { total, page, offset, agents: [ { agentId, agentName, description, ... } ] }

# Plans attached to one agent
curl -s "https://api.sandbox.nevermined.app/api/v1/protocol/agents/<AGENT_ID>/plans"

# Credits a specific holder has on one of your plans
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  "https://api.sandbox.nevermined.app/api/v1/protocol/plans/<PLAN_ID>/balance/<HOLDER_ADDRESS>"
```

To approximate revenue without Premium analytics, list your plans, then iterate purchasers' balances and per-request settlement receipts — but the `analytics/*` endpoints are the supported, aggregated source when available.

---

## 3. Per-request observability (optional)

For token-level usage and cost tracking, the SDK integrates with Helicone (`payments.observability`). This complements the aggregated analytics above with per-call LLM usage and cost metadata. See the SDK observability API in `@nevermined-io/payments` / `payments-py`.

---

## Quick reference

| Query | Method + path | Tier |
|---|---|---|
| Revenue per agent | `GET /organizations/{orgId}/analytics/revenue?from&to` | Premium |
| MRR + active subs | `GET /organizations/{orgId}/analytics/mrr?asOf` | Premium |
| Credits burned per plan | `GET /organizations/{orgId}/analytics/usage?from&to&limit` | Premium |
| Top customers | `GET /organizations/{orgId}/analytics/customers?limit` | Premium |
| My plans | `GET /protocol/plans` | Any |
| My agents | `GET /protocol/agents` | Any |
| Plans on an agent | `GET /protocol/agents/{agentId}/plans` | Any |
| Holder balance | `GET /protocol/plans/{planId}/balance/{address}` | Any |
