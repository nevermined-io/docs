# Discovery — finding something to buy

The **Agent Services Catalog** is a Nevermined-curated list of external agent services. Discovery is
**public, unauthenticated and free**. Send no `Authorization` header; none is required.

| Surface | Use it for |
| --- | --- |
| `https://nevermined.app/catalog/ai-catalog.json` | **The default.** Every listed service in one JSON document — fetch once, filter locally |
| Catalog MCP at `https://mcp.live.nevermined.app/mcp` | Server-side search: `search_services`, `get_service`, `list_categories` |
| `https://nevermined.app/.well-known/ard.json` | The ARD host document, for registries crawling the Catalog — and per-service health |
| `https://nevermined.app/catalog/llms.txt` | Plain-text entry point for an agent landing cold |
| `https://nevermined.app/catalog/services` | Human browsing |

⚠️ **`/api/v1/catalog/services`, `/api/v1/catalog/services/{slug}` and `/api/v1/catalog/categories`
are not a public integration.** They return `403` on both `api.live` and `api.sandbox`, by design —
not an outage, and not something a key fixes. Do not retry them; read the feed.

The feed lists the **live** Catalog. It is live-only for payment: listed services settle on mainnet,
and a sandbox deployment funds testnets only.

## The feed

```bash
curl -s https://nevermined.app/catalog/ai-catalog.json -o ai-catalog.json
jq '{total, generatedAt}' ai-catalog.json
```

`{ version, catalog, generatedAt, total, count, services: [ … ] }`. It is cached for five minutes
(`Cache-Control: max-age=300`), so re-fetching more often buys nothing. There are no query
parameters and no pagination — `services` is the whole Catalog.

### Fields you will actually use

| Field | Use |
| --- | --- |
| `slug` | Stable id. Case-sensitive — how you address the service through the Router |
| `protocol` | **`x402` or `mpp` = payable through the Router.** See below |
| `endpoints[]` | `{ path, method, description, priceLabel }`, plus `invokePath`, `requestExample`, `responseFields` on some — see [rule 2](#2-pay-by-slug-and-send-invokepath--path) |
| `priceLabel` | Human string like `"$0.001"`. **Indicative only** — the wire price governs |
| `network` / `networks` | Display names (`"Base"`, `"Tempo"`). Not chain ids |
| `category` | One of the **13 curated values** — see [Categories](#categories) |
| `subCategory` | Granular label under `category`. **Absent** (no key, not `null`) for the generic top bucket — in JS test `s.subCategory == null`, not `=== null` |
| `tags[]` | Selection signals |
| `invokeUrl` | The service's Router URL: `…/api/v1/router/svc/<slug>` |
| `invoke` | A ready-made Router call: `method`, `router`, `invokeUrl` and the `X-Router-*` headers |
| `url` | The service's human page in the Catalog |

The feed deliberately omits health status, long descriptions and the merchant's own URL. For health,
read the ARD host document (each entry's `nvm:catalog.healthStatus` and `uptime30d` — see
[below](#the-ard-host-document)); for a request body, use the endpoint's `requestExample` when
present — the Catalog holds no body schema otherwise.

### Filter recipes

All run against the file saved above.

```bash
# Payable on one rail, in one category
jq '[.services[] | select(.protocol == "x402" and .category == "Search & Research") | {slug, title, priceLabel}]' ai-catalog.json

# Free text over title + description, case-insensitive
jq --arg q "crypto" '[.services[]
     | select((.title + " " + .description) | ascii_downcase | contains($q | ascii_downcase))
     | {slug, title, protocol, priceLabel}]' ai-catalog.json

# Exact tag
jq '[.services[] | select(.tags | index("search")) | .slug]' ai-catalog.json

# One service by slug, with the subpath to send for each endpoint
jq '.services[] | select(.slug == "superhighway")
     | {slug, protocol, endpoints: [.endpoints[] | {method, path: (.invokePath // .path), priceLabel}]}' ai-catalog.json
```

A misspelt `category`, `protocol` or slug in a filter returns an **empty result, not an error** —
the feed has no validator. So an empty list means "check the string" before it means "nothing to
buy". Take category values from the feed itself (below), never from memory.

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
the feed only carries listed ones — so in practice today it holds `x402` and `mpp` only. **Filter on
`.protocol` anyway.** Listing is a curation decision that can change, and an explicit filter makes
your agent's assumption visible instead of load-bearing-and-implicit.

**Routable is not the same as payable on *your* deployment.** The two rails are enabled
independently, and the MPP rail is fail-closed: where the operator has not allowlisted a Tempo
payment token, every `mpp` service is refused with `400 BCK.ROUTER.0001 … not allowlisted`. The
catalog lists them regardless — it describes services, not your deployment's configuration — so
read a `0001` on an MPP service as "this rail is off here", not "this service is broken". Trying
another MPP service will fail identically. See `references/errors.md`.

If you ever do hold a non-routable entry, do not call `/route` on it — tell the user that service
needs its own account.

### 2. Pay by slug, and send `invokePath ?? path`

The feed carries **no merchant URL**, on purpose. You address a listed service by its `slug` — the
Router resolves the upstream server-side, and refuses a raw-URL payment to a cataloged host with
`409 BCK.ROUTER.0014`. An unknown slug is `404 BCK.CATALOG.0001`.

For an endpoint, the subpath to send is its **`invokePath` when present, else its `path`**.
`invokePath: ""` is meaningful: the service's base already *is* that endpoint, so the Router must
append nothing.

```
slug=edgar-search
  endpoints[0] = { path: "/edgar-search/search", invokePath: "" }   ← send "", not the path
```

Sending `path` there double-stacks it (`…/edgar-search/search/edgar-search/search`), which 404s —
and if the merchant charges before routing, you paid for it. So use a *nullish* fallback, never a
falsy one:

```js
const subpath = endpoint.invokePath ?? endpoint.path   // NOT `||` — it turns '' back into the path
```

```python
subpath = endpoint["path"] if endpoint.get("invokePath") is None else endpoint["invokePath"]   # NOT `or` — same trap
```

In jq, `.invokePath // .path` is already correct: `//` falls through on `null`/`false` only, and
`""` is truthy there.

Then pay with `POST /api/v1/router/route` and `{ "slug": …, "path": subpath }` — see `paying.md`.

## Categories

`category` is a **closed set of exactly 13 curated values**. Match them **verbatim**, ampersands and
spacing included:

- `Data & Enrichment`
- `Sales & Business Intelligence`
- `Web Scraping & Automation`
- `Search & Research`
- `Crypto & Blockchain`
- `Finance & Markets`
- `AI & Media`
- `Communication & Voice`
- `Social & Creator`
- `Identity & Compliance`
- `Infrastructure & Compute`
- `Weather`
- `Travel`

The obvious guesses are wrong: it is `"Search & Research"`, not `"Search"`. Do not shorten, split on
`&`, or invent one. The list is curated by hand and can grow, so read what is in use from the feed:

```bash
jq '.services | group_by(.category)
     | map({category: .[0].category, count: length, subCategories: (map(.subCategory // empty) | unique)})' ai-catalog.json
```

`subCategory` is the granular label *under* a category (`"Browser automation"`), and unlike
`category` it is free text. A service with no granular label has **no `subCategory` key** — the
generic top bucket — and so appears in no `subCategories[]` list above.

⚠️ **The feed shows what is *populated*, not what is *legal*.** A valid category with no listed
services right now simply does not appear. Treat an absent category as "nothing to buy there today",
**not** as "that value is invalid" — the closed set above is the enum; the feed is the inventory.

## Server-side search: the Catalog MCP

When you would rather not filter locally, the Catalog MCP server searches for you. Its read tools are
free and need no key; each call is one stateless JSON-RPC POST:

```bash
curl -s -H "Content-Type: application/json" \
     -H "Accept: application/json, text/event-stream" \
     -X POST https://mcp.live.nevermined.app/mcp \
     -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"search_services","arguments":{"query":"crypto","protocol":"x402"}}}' \
  | jq -r '.result.content[0].text' | jq .
```

| Tool | Arguments |
| --- | --- |
| `search_services` | `query` (always send one), plus optional `category`, `protocol`, `tag` |
| `get_service` | `slug` — returns the service plus its `requestShape` (each endpoint's `payServiceArgs`) |
| `list_categories` | none — each category with a `count` and its `subCategories[]` |

- **`search_services` result shape depends on the MCP server version.** From v1.48 it ranks by ARD
  hybrid relevance (semantic + lexical): `query` is **required**, `page` / `offset` are gone (a
  `pageSize` replaces them, with no next-page input), and the result is `{ results, pageToken }` —
  ARD records keyed by an `identifier` URN, whose last segment is the slug
  (`urn:air:api.live.nevermined.app:service:superhighway` → `superhighway`). Earlier servers return
  `{ total, page, offset, services }`. So: always send `query`, parse `content[0].text` without
  assuming `services[]`, and **do not build a pager on it** — an unknown `page` is silently dropped
  and you would get the first page forever. To walk everything, use the feed.
- **Errors come back as a tool result with `isError: true`** and a plain-text message, not a
  JSON-RPC error: an unknown slug in `get_service` reads `… returned 404`; a bad `protocol` fails the
  input schema with `MCP error -32602: Input validation error …`. Check `isError` before parsing
  `content[0].text` as JSON.

Full MCP setup, including the paid tools: https://nevermined.ai/docs/products/catalog/mcp

## The ARD host document

```
GET https://nevermined.app/.well-known/ard.json
```

A Google **Agentic Resource Discovery (ARD)** document over the same listed services — one entry
each, with the Router pay-through target and health (`healthStatus`, `uptime30d`) under
`nvm:catalog`. Public and crawlable by any registry.

```json
{ "specVersion": "1.0",
  "host": { "displayName": "Nevermined Agent Services", "identifier": "did:web:…" },
  "entries": [ … ] }
```

Note the key is **`entries`**, not `services` — a parser looking for `services` sees an empty
document and silently concludes the catalog is empty. It also carries one entry that is the registry
itself, not a service.

Prefer `ai-catalog.json` when you are choosing something to buy: it carries the endpoints and the
ready-made `invoke` block in a flat shape. The ARD document is for registries crawling the Catalog.

## Choosing well

1. Fetch `ai-catalog.json` once and filter to `protocol` `x402` or `mpp`.
2. Narrow with free text (title + description), or `category` / `subCategory` / `tags` for
   precision — taking category values from the feed, never from memory. Or let the Catalog MCP's
   `search_services` do it.
3. Read `endpoints[]` — pick the one whose `description` and `method` match your need, and note its
   `priceLabel`.
4. Take the `slug` and the endpoint's `invokePath ?? path`, per rule 2.
5. Pay with `POST /api/v1/router/route` — see `paying.md`.

If nothing matches, say so. Do not fall back to a `rest` entry and do not guess a merchant URL.
