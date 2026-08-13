# Discovery — finding something to buy

The **Agent Services Catalog** is a Nevermined-curated list of external agent services. It is
**public, unauthenticated, read-only, and cached for 5 minutes**. Send no `Authorization` header;
none is required and none is checked.

Base: `$NVM_API_URL` — `https://api.sandbox.nevermined.app` or `https://api.live.nevermined.app`.

## List services

```
GET /api/v1/catalog/services
```

| Param | Type | Notes |
| --- | --- | --- |
| `search` | string | Free-text over **title and description only** — not tags, not provider |
| `protocol` | enum | `x402` · `mpp` · `rest` · `a2a` · `other`. Anything else → `400 BCK.CATALOG.0003` |
| `category` | string | Exact match. Discover valid values from `/categories` |
| `tag` | string | Exact match against one entry of `tags[]` |
| `page` | int ≥ 1 | Default 1 |
| `offset` | int ≥ 1 | Page **size**, not a skip count. Default 10, capped server-side |
| `sortBy` | enum | Omit for the curated default. Unknown value → 400 |
| `sortOrder` | `asc`/`desc` | |

A repeated param (`?search=a&search=b`) parses as an array and fails validation with a `400` — send
each filter once.

**`offset` is a page size.** It is not an offset in the SQL sense. To walk the catalog, hold
`offset` fixed and increment `page`.

**Default ordering is intentionally not stable.** With no `sortBy`, results come back by curation
tier ascending, then *time-seeded shuffled within each tier* — the rotation changes periodically so
no single service permanently owns the top slot. Never assume `services[0]` is the same service
across two calls; if you need determinism, pass an explicit `sortBy`.

### Response

```json
{ "total": 9, "page": 1, "offset": 10, "services": [ /* CatalogService */ ] }
```

`total` is the count **matching your filters**, not the catalog size.

### Fields you will actually use

| Field | Use |
| --- | --- |
| `slug` | Stable id. Case-sensitive — use it for the per-slug lookup |
| `protocol` | **`x402` or `mpp` = payable through the Router.** See below |
| `targetUrl` | The default endpoint's **complete URL** — see the gotcha below |
| `endpoints[]` | `{ path, method, description, priceLabel, docsUrl }` — the other callable paths |
| `priceLabel` | Human string like `"$0.001"`. **Indicative only** — the wire price governs |
| `network` | Display name (`"Base"`, `"Tempo"`). Not a chain id |
| `tags[]`, `category`, `features[]` | Selection signals |
| `discovery` | Machine-readable pointers: `x402` manifest, `mcp`, `a2a` agent card, `openapi`, `llmsTxt`, `mppRegistry`. `{}` when none |

`isListed` is always `true` on this API — unlisted rows are never exposed, so you cannot use it to
tell payable from unpayable.

## Two rules that cost real money if you get them wrong

### 1. Only `x402` and `mpp` are routable

**The Router cannot pay a `rest`, `a2a` or `other` service.** Its transaction is *read a price quoted
on the wire for this request, sign a payment settling exactly that*. A conventional SaaS API never
quotes a price for one call — it is billed by a monthly plan and a long-lived key, so at call time
there is nothing to pay and no address to pay it to.

Measured across every `rest`/`other` service in the curated set: **none returns a 402, none emits
any payment header, none serves a real x402 manifest.** The ones that respond meaningfully return
`401` or `403` — "authenticate", not "pay".

Curation already protects you from this: those services are deliberately loaded **unlisted**, and
the API only ever exposes listed ones — so in practice today the catalog returns `x402` and `mpp`
only. **Filter with `?protocol=x402` or `?protocol=mpp` anyway.** Listing is a curation decision that
can change, the `protocol` filter accepts values the Router cannot pay, and an explicit filter makes
your agent's assumption visible instead of load-bearing-and-implicit.

**Routable is not the same as payable on *your* deployment.** The two rails are enabled
independently, and the MPP rail is fail-closed: where the operator has not allowlisted a Tempo
payment token, every `mpp` service is refused with `400 BCK.ROUTER.0001 … not allowlisted`. As of
2026-08-13 that is the state of the Nevermined production deployments, where `mpp` rows are the
majority of the catalog. The catalog lists them regardless — it describes services, not your
deployment's configuration — so **prefer `?protocol=x402` unless you know the MPP rail is on**, and
read a `0001` on an MPP service as "this rail is off here", not "this service is broken". Trying
another MPP service will fail identically. See `references/errors.md`.

If you ever do hold a non-routable entry, do not call `/route` on it — tell the user that service
needs its own account.

### 2. `targetUrl` is a full URL, not a base

This is the single easiest way to waste a payment.

```
slug=superhighway
  targetUrl = https://superhighway.walls.sh/search      ← already includes /search
  endpoints = ["/search", "/news", "/images"]

slug=2s
  targetUrl = https://2s.io                             ← bare origin here
  endpoints = ["/api/directory"]
```

`targetUrl` is the **default endpoint's complete URL**. Concatenating `targetUrl + endpoint.path`
gives `https://superhighway.walls.sh/search/news`, which 404s — and if the merchant charges before
routing, you paid for it.

Resolve against the origin instead. Because every `endpoint.path` is absolute (`/…`), plain URL
resolution does exactly the right thing on both shapes above:

```js
const url = endpoint
  ? new URL(endpoint.path, service.targetUrl).toString()
  : service.targetUrl          // default endpoint — use targetUrl verbatim
```

```python
from urllib.parse import urljoin
url = urljoin(service["targetUrl"], endpoint["path"]) if endpoint else service["targetUrl"]
```

## Categories

```
GET /api/v1/catalog/categories
# → [ { "category": "Search", "count": 3 }, … ]
```

Distinct categories over listed services, with counts. Use it to populate a `category` filter rather
than guessing a string.

## One service by slug

```
GET /api/v1/catalog/services/{slug}
```

Returns the same object as a list row. Slugs are **case-sensitive**; no match → `404
BCK.CATALOG.0001`. Unlisted services are not exposed here either.

## The crawlable feed

```
GET /.well-known/agent-services-catalog.json
```

A Google **Agentic Resource Discovery (ARD)** document over the same listed services — one entry
each, with the Router pay-through target and the discovery pointers under `x-nevermined-catalog`.
Public and crawlable by any registry.

```json
{ "specVersion": "1.0",
  "host": { "displayName": "Nevermined Agent Services", "identifier": "did:web:…" },
  "entries": [ … ] }
```

Note the key is **`entries`**, not `services` — a parser looking for `services` sees an empty feed
and silently concludes the catalog is empty.

Prefer `/api/v1/catalog/services` when you are choosing something to buy: the feed is a flat dump
with no filtering or pagination. The feed is for registries crawling you, not for you choosing.

## Choosing well

1. Filter to `protocol=x402` or `protocol=mpp`.
2. Narrow with `search` (title + description) or `category` / `tag` for precision.
3. Read `endpoints[]` — pick the one whose `description` and `method` match your need, and note its
   `priceLabel`.
4. Build the URL per the rule above.
5. Pay with `POST /api/v1/router/route` — see `paying.md`.

If nothing matches, say so. Do not fall back to a `rest` entry and do not invent a `targetUrl`.

## Errors

| Code | Status | Meaning |
| --- | --- | --- |
| `BCK.CATALOG.0001` | 404 | No listed service with that slug. Case-sensitive |
| `BCK.CATALOG.0002` | 500 | Transient read failure — **retryable** |
| `BCK.CATALOG.0003` | 400 | `protocol` must be `x402`, `mpp`, `rest`, `a2a`, or `other` |
