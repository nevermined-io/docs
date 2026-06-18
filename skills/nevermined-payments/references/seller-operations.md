# Seller Operations — status & revenue

How an agent (or its operator) checks the **performance of the plans and agents it sells**: revenue, recurring revenue, usage, customers, and the underlying plan/agent inventory. Companion to **Track A · A7** in `SKILL.md`.

> Verified against the live sandbox API. Send `Authorization: Bearer $NVM_API_KEY` on every call. The `analytics/*` endpoints are served by the platform but are **not** discoverable in the live `docs-json` (it lists only `agentic-instructions.md` / `llms.txt` under `organizations`), so use the paths below directly.

## Two layers

1. **Organization analytics** — aggregated revenue/MRR/usage/customers. **Requires an active Premium organization tier.** Needs your `orgId` (discover it from `.orgId` on your plan/agent records — see §2). Failure modes: `403 BCK.ORGANIZATIONS.0022` (not Premium), `403 BCK.AUTH.0004` (not an admin of that org), or a **silent `200`-of-zeros** for a malformed/placeholder `orgId`.
2. **Protocol building blocks** — list your plans/agents and read individual balances. **Any tier**, no `orgId` needed (user-scoped to your API key).

---

## 1. Organization analytics (Premium)

Set the analytics base once — the `curl`s below reuse `$B` in the same shell session. Date params are ISO-8601; `from` inclusive, `to` exclusive.

```bash
B="https://api.sandbox.nevermined.app/api/v1/organizations/<ORG_ID>/analytics"
```

### Revenue per agent

```bash
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  "$B/revenue?from=2026-03-20T00:00:00Z&to=2026-06-18T00:00:00Z"
```
```json
{
  "items": [
    { "agentId": "did:nv:...", "agentName": "Weather Agent", "totalRevenue": "125000", "transactionCount": 412 }
  ],
  "totalRevenue": "125000"
}
```
`totalRevenue` is a stringified integer in 6-decimal token units (divide by 1,000,000 for USD). Rows are keyed by `agentId`/`agentName` but are actually grouped **by plan**.

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

> **Finding your `orgId`:** discover it from your own records — every item in `GET /protocol/plans` and `/protocol/agents` (§2) carries `.orgId` + `.organizationName`; take the most common non-null `.orgId` (it's the `org-...` id, also used in `…/organizations/<orgId>/agentic-instructions.md`). Only call analytics with an id matching `^org-[0-9a-f-]+$` — a malformed one returns a deceptive `200`-of-zeros. If you don't operate under an org, use the building blocks below.

---

## 2. Protocol building blocks (any tier)

These are user-scoped to your API key — no `orgId` and no Premium needed.

```bash
# Your published plans (paginated)
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  "https://api.sandbox.nevermined.app/api/v1/protocol/plans?page=1&offset=20"
# → { total, page, offset, plans: [ <full plan record> ] }
#   Each item is the entity, not a flat summary: name at metadata.main.name,
#   price/type in registry/metadata, id at .id (no flat planName/pricePerCredit/planType here —
#   that flat shape is only on the balance endpoint).

# Your published agents
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  "https://api.sandbox.nevermined.app/api/v1/protocol/agents?page=1&offset=20"
# → { total, page, offset, agents: [ <full agent record> ] }
#   Each item is the entity: name at metadata.main.name, id at .id (no flat agentName/description).

# Plans attached to one agent
curl -s -H "Authorization: Bearer $NVM_API_KEY" \
  "https://api.sandbox.nevermined.app/api/v1/protocol/agents/<AGENT_ID>/plans"

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
