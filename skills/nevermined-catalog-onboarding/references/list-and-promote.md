# Catalog listing & promotion — DTOs, endpoints, monitor internals

All routes are under `$NVM_API_URL` (see SKILL.md → Environment). Source of truth:
`nvm-monorepo/apps/api/src/catalog/`.

## The listing model

A catalog listing (`catalogServices` row) hangs off an **agent your org owns** (`agentDid`).
Trust-sensitive fields are **derived server-side from the agent** and are NOT accepted on the
publish body: `orgId`, `submittedBy`, `provider`, `network`. The payment `protocol` and
`priceLabel` are **detected by the catalog-monitor** from the endpoint, not set by you. What
you control is the endpoint (`targetUrl`) and the presentation.

## Publish — `POST /api/v1/catalog/listings`

Auth: Nevermined API key (`NvmApiHashKeyGuard`) + org membership (`OrganizationMemberGuard`);
the write is scoped to the caller's org.

`PublishCatalogListingDto`:

| Field | Req | Notes |
|---|---|---|
| `agentDid` | ✅ | DID of an agent your org owns. Ownership is enforced. |
| `category` | ✅ | One of the `CATALOG_CATEGORIES` enum. |
| `targetUrl` | ✅ | **The callable endpoint the Router routes buyers to.** `@IsUrl` + `@IsSafePublicUrl` (SSRF guard: no private/loopback/link-local/metadata hosts — the monitor fetches it server-side). Must answer a real HTTP-402 (see Phase 0). |
| `title` | – | Defaults to the agent name (≤120). |
| `shortDescription` | – | ≤280; kept free of verification notes. |
| `longDescription` | – | Markdown, ≤5000; kept free of verification notes. |
| `subCategory` | – | ≤80. |
| `logoUrl` | – | Shown only if its host is unrelated to the service URL; else an initials avatar. |
| `tags` | – | ≤20 strings. |
| `features` | – | ≤20 `{…}` entries. |
| `homepageUrl`, `docsUrl` | – | Public URLs. |

```bash
curl -sX POST "$NVM_API_URL/api/v1/catalog/listings" \
  -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"agentDid":"did:nv:…","category":"Identity & Compliance",
       "targetUrl":"https://HOST/v1/tools/<tool>/call",
       "title":"…","shortDescription":"…","tags":["x402","base","usdc"],
       "docsUrl":"https://…","homepageUrl":"https://…"}'
```

> **orgId gotcha:** the *agent* must be registered under the org (register with `orgId` +
> `X-Current-Org-Id: <org>`). An agent registered with `orgId: null` fails publish with
> `BCK.CATALOG.0004 Agent not found`. Re-register under the org.

## Owner view — `GET /api/v1/catalog/mine`

The **only** place the raw `targetUrl` is visible. The *detail* route
(`GET /catalog/services/<slug>`) is blocked with `403` from outside the deployed envs, and
even where reachable it returns `targetUrl: null` for cataloged services — the Router keeps the
upstream hidden (that's what `BCK.ROUTER.0014` protects). Use `/mine` to see and verify what
you actually stored, and to poll promotion state:

```bash
curl -s "$NVM_API_URL/api/v1/catalog/mine" -H "Authorization: Bearer $NVM_API_KEY" \
  | jq '.[] | {id,slug,targetUrl,protocol,discovery,moderationStatus,isListed,unpayableSince,healthStatus}'
```

## Edit — `PATCH /api/v1/catalog/listings/:id`

`EditCatalogListingDto = PartialType(OmitType(PublishCatalogListingDto, ['agentDid']))` — every
publish field except `agentDid`, all optional. Same guards; ownership re-checked
(`ownedListing` → `404 BCK.CATALOG.0007` if not yours). Blocked by a moderator hold
(`403 BCK.CATALOG.0010`).

**Changing `targetUrl` re-triggers validation:** the listing drops to
`moderationStatus:'pending'`, `isListed:false`, `pendingSince` reset — it must be re-validated
before it goes live again. So repoint deliberately, then re-run Phase 3.

```bash
curl -sX PATCH "$NVM_API_URL/api/v1/catalog/listings/<id>" \
  -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"targetUrl":"https://HOST/v1/tools/<tool>/call"}'
```

## Promotion — how the catalog-monitor makes it live

A fresh listing is **provisional**: `protocol='other'`, `discovery={}`, unlisted. The
catalog-monitor probes `targetUrl`, decides a health colour, and posts a verdict to the ops
API (`/probe-targets`, `/health`); the App promotes on a healthy x402 verdict. Rail detection
runs in three ordered, same-origin, SSRF-guarded layers (skipped for dead/5xx hosts):

1. **Endpoint challenge** — `targetUrl` returns a valid HTTP-402 body
   (`x402Version ∈ {1,2}` + `accepts[]` with `scheme`/`network`/`payTo`/integer amount).
2. **Reviewed fixture** — a body from the `SAFE_PRICED_FIXTURES` allowlist
   `(host, path, "POST")` elicits the 402 (for validate-before-charge services whose 402
   needs a well-formed body). Verdict tag `detected-x402-fixture`.
3. **Discovery manifest** — `{origin}/.well-known/x402.json` then `/.well-known/x402` is a
   valid x402 manifest (version marker + ≥1 valid accept, top-level or `resources[].accepts`).
   Sets `discovery={x402: manifestUrl}`, `quoted_price` from the resource whose URL matches
   `targetUrl`. Verdict tag `detected-x402-manifest`. **Most robust — immune to free-tier
   flakiness**, because the persisted `discovery.x402` is a GET-able 200 manifest thereafter.

Poll for live. The public `GET /catalog/services/<slug>` detail route answers `403` from
outside the deployed envs (public discovery is the ARD surface), so poll the **owner view**
and filter to your slug:

```bash
curl -s "$NVM_API_URL/api/v1/catalog/mine" -H "Authorization: Bearer $NVM_API_KEY" \
  | jq '.[] | select(.slug=="<slug>") | {isListed,moderationStatus,healthStatus,invokeUrl}'
```

Target state: `isListed:true`, `moderationStatus:"live"`, `healthStatus:"operational"`,
`invokeUrl:".../router/svc/<slug>"`.

## Router slug resolution (why the endpoint choice matters downstream)

`/router/route {slug}` and `/router/svc/<slug>` resolve the slug to **`service.targetUrl`**
(`CatalogService.resolveSlugInvoke`), requiring `isListed:true` and `unpayableSince IS NULL`.
So the Router POSTs to exactly the `targetUrl` you stored — if that's an `/mcp` URL, the
Router gets a 200 with no 402 and can't pay. The `path` field on `/route` is **appended** to
the target (not URL-resolved), so it cannot rewrite an `/mcp` base into a REST path — you must
store the REST path as `targetUrl`.

## `BCK.ROUTER.0014` (cataloged host) — what it matches

Raw-URL routing to a host that any listed+payable service uses as its `targetUrl` host is
refused; you must invoke by slug. The match is on **canonical HOST only** (lowercased
hostname, no path/port/query). So repointing `targetUrl` to a **different path on the same
host** keeps the listing cataloged and keeps `0014` firing for raw-URL attempts — slug
invocation continues to work and now routes to the new path.
