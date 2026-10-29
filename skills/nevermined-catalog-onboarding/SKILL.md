---
name: nevermined-catalog-onboarding
version: "1.1.0"
lastUpdated: "2026-10-29"
description: >
  Use to onboard an EXTERNAL builder's x402 service into the Nevermined Agent Services
  Catalog end-to-end: check the service exposes the metadata a listing needs, pick the
  routable endpoint, validate it actually charges and works by paying it directly from a
  wallet (raw EOA + EIP-3009), register the agent, publish + promote the listing, then run
  a real paid e2e THROUGH the Nevermined Router. Also covers an ownerless, Nevermined-curated
  listing the real operator can CLAIM later, and when a listed service becomes payable in
  Nevermined credits (not only from a Delegation). Trigger phrases: "enroll a service in the
  catalog", "onboard an external builder", "a merchant wants to add their x402 service",
  "list and validate an x402 service", "add <service> to the Nevermined Catalog", "claim a
  catalog listing".
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
          Nevermined API key for the target environment (`sandbox:` / `live:`).
          Used to register the agent, publish/patch the listing, and
          drive the Router e2e. Must be a current-generation key (older keys the Router
          refuses with 403 BCK.ROUTER.0008).
      - name: WALLET_PRIVATE_KEY
        required: false
        description: >
          Only for the direct-wallet validation (Phase 1). A raw EOA private key funded
          with the merchant's asset (USDC) on the merchant's network. NEVER echo it. The
          Nevermined SDK/API cannot pay an external merchant — that leg needs a real EOA.
---

# Nevermined Catalog onboarding — enroll & validate an external x402 service

> **Skill version**: 1.1.0 | **Last updated**: 2026-10-29
>
> Companion to two existing skills — **`nevermined-payments`** (register an agent/plan,
> get an API key) and **`nevermined-router`** (the full Router buy loop + error table).
> This skill is the *catalog onboarding workflow*: it decides what to list, proves the
> service works two ways, and gets it live. Reach for those two for the primitives it calls.

## What this is for

An external builder has an **x402-native** service (an agent, an MCP server, a set of
paid REST tools) and wants it in the Nevermined Catalog so Nevermined buyers can discover
and pay it through the Router. Your job: **don't list something that doesn't work.** Prove
it end-to-end, then list it, then prove a buyer can actually reach it through the platform.

Two independent proofs, both required before sign-off:

| Proof | Answers | How |
|---|---|---|
| **Direct wallet** (Phase 1) | "Does the endpoint really charge and return a valid result?" | Pay the merchant yourself from a raw EOA (EIP-3009). No Nevermined in the loop. |
| **Router e2e** (Phase 4) | "Can a Nevermined buyer consume it through the platform?" | Delegation → fund → `POST /router/route` by slug → on-chain settle. |

**Org-owned or curated (claimable).** A listing can be **org-owned** — a builder lists their own
service under their org (Phase 2) — or **Nevermined-curated and ownerless**, so the real operator can
**claim** it later by proving domain control. Both are discoverable and payable. And once a listing is
promoted, an eligible one is payable in **Nevermined credits**, not only from a Delegation. Ownership,
the claim flow, and credits: **`references/claim-and-credits.md`**.

**Not for out-of-band SaaS** (Exa/Firecrawl/Tavily and friends): they bill monthly / by
long-lived key and never quote a price on the wire (401/403, not 402). They cannot be
routed. See `nevermined-router` → "This skill cannot help you with conventional SaaS APIs".

## Environment

```bash
export NVM_API_URL="https://api.live.nevermined.app"   # live (Base mainnet, real money)
# sandbox (Base Sepolia, test money): https://api.sandbox.nevermined.app
export NVM_API_KEY="<key for that env>"
```

The env fixes the payment network for BOTH proofs: **live → Base mainnet (chain 8453)**,
**sandbox → Base Sepolia (84532)**. A merchant priced on the other chain is unpayable from
that environment — match them.

---

## Phase 0 — Intake: is this service listable, and on which URL?

Gather from the builder: **endpoint, docs URL, provider identity, price, network, asset**.
Then find the **one URL to list** — the field `targetUrl`, "the callable endpoint the Router
routes buyers to". This is the single most common thing to get wrong.

**The rule: `targetUrl` must be a URL that answers a real HTTP-status `402`.** Detect the rail:

```bash
HOST="merchant.example"
# (a) x402 discovery manifest — the "bazaar" shape (resources[].accepts[]):
curl -s "https://$HOST/.well-known/x402.json" | jq '.resources[] | {resource, method, accepts:[.accepts[]|{scheme,network,payTo,asset,amount:(.maxAmountRequired//.amount)}]}'
# (b) the endpoint itself — does it 402? (send a well-formed body; see gotcha below)
curl -s -o /dev/null -w 'HTTP %{http_code}\n' -X POST "https://$HOST/v1/tools/<tool>/call" \
  -H 'content-type: application/json' -d '{"input":{ ... }}'
```

Decision tree:

- **REST tool that returns 402** (`POST …/v1/tools/<tool>/call` → `402` with a valid x402
  body) → **list that path.** ✅
- **MCP endpoint (`/mcp`, Streamable-HTTP JSON-RPC)** → it **tunnels the 402 as a JSON-RPC
  result at HTTP 200**. The monitor and the Router key on HTTP-status 402, so `/mcp` is
  **never a valid `targetUrl`.** Find the service's REST `…/call` path (from the manifest)
  and list that instead. `[[catalog-mcp-tunneled-402]]`
- **Only a manifest, no endpoint that 402s** (validate-before-charge services return 400 on
  a bodyless probe, 402 only on a well-formed body) → the endpoint is still the `targetUrl`;
  the monitor's **discovery-manifest fallback** promotes it from `.well-known/x402(.json)`.
- **401/403, never 402** → wants auth, not payment. **Not listable through the Router.** Stop.

Two gotchas that waste a probe:
- **Validate-before-charge:** some services check the request body *before* the payment
  gate, so a bodyless `POST` → **400**, and the `402` fires only on a *well-formed*
  `{"input":{…}}` body. Always probe with a real body.
- **Free tier:** a per-IP free quota (e.g. 3 calls/day) makes the first few probes return
  **200** and later ones **402**. One 200 does not mean "free / unpayable" — see Phase 4.

**Output of Phase 0:** the exact `targetUrl`, the price, the network, and the `accepts`
(scheme / `payTo` / `asset`).

---

## Phase 1 — Direct wallet validation (does it really charge + work?)

Pay the merchant **directly from a raw EOA**, bypassing Nevermined entirely. This is the
honest test that the 402 is real and the result is correct.

> **Why not the SDK?** The Nevermined SDK / API x402 buyer flow (`nvm:erc4337`) settles
> against a **Nevermined plan**, not an arbitrary external merchant. To pay an external
> x402 merchant you sign an **EIP-3009 `transferWithAuthorization`** yourself (the Coinbase
> "exact" scheme, gasless USDC) and send it as the `X-PAYMENT` header. Full runnable payer
> (tested against a live Base-mainnet merchant): **`references/direct-wallet-pay.md`**.

```bash
cd references/c402pay && npm i --silent   # viem
WALLET_PRIVATE_KEY=0x… node pay.mjs dryrun                                   # sign-only self-check
WALLET_PRIVATE_KEY=0x… node pay.mjs pay "https://$HOST/v1/tools/<tool>/call" '{"input":{...}}'
```

Pass = HTTP 200, a `payment-response` receipt, a correct result body, and an on-chain USDC
`Transfer` from your EOA to the merchant's `payTo`. Confirm the tx on the env's network:

```bash
curl -s -X POST https://mainnet.base.org -H 'content-type: application/json' \
 -d '{"jsonrpc":"2.0","id":1,"method":"eth_getTransactionReceipt","params":["0x<txHash>"]}' \
 | jq '{status:.result.status}'   # 0x1 = success
```

---

## Phase 2 — Register the agent + publish the listing

Listings hang off an **agent your org owns**. Two steps.

> This is the **org-owned** path (the builder's own key, via the public API). A listing can instead
> be **curated and ownerless** so its operator claims it later — that path and the claim API are in
> **`references/claim-and-credits.md`**.

**1. Register the agent** (SDK — see `nevermined-payments` A6). Trust-sensitive listing
fields (`orgId`, `provider`, `network`) are derived server-side *from the agent*, so the
agent carries the provider identity + network.

> **orgId gotcha:** register with an explicit `orgId` **and** send `X-Current-Org-Id: <org>`.
> Registering with `orgId: null` produces an agent that later fails listing with
> `BCK.CATALOG.0004 Agent not found`. Re-register under the org if that happens.

**2. Publish the catalog listing** — `POST /api/v1/catalog/listings` (owner API key,
org-scoped). Required: `agentDid`, `category`, **`targetUrl` (the Phase-0 routable URL)**.
`protocol` + `priceLabel` are **detected by the monitor**, not set here.

```bash
curl -sX POST "$NVM_API_URL/api/v1/catalog/listings" \
  -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{
    "agentDid": "did:nv:…",
    "category": "Identity & Compliance",
    "targetUrl": "https://'"$HOST"'/v1/tools/<tool>/call",
    "title": "…", "shortDescription": "…",
    "tags": ["x402","base","usdc"], "docsUrl": "https://…", "homepageUrl": "https://…"
  }'
```

Owner view — the **only** place the raw `targetUrl` shows (the public/authed detail hides it
as `null` for cataloged services):

```bash
curl -s "$NVM_API_URL/api/v1/catalog/mine" -H "Authorization: Bearer $NVM_API_KEY" \
  | jq '.[] | {id,slug,targetUrl,protocol,discovery,moderationStatus,isListed,healthStatus}'
```

Repoint the endpoint later (owner-editable; **resets the listing to `pending`/unlisted until
re-validated**):

```bash
curl -sX PATCH "$NVM_API_URL/api/v1/catalog/listings/<id>" \
  -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"targetUrl":"https://'"$HOST"'/v1/tools/<tool>/call"}'
```

Details, DTO fields, and the promotion internals: **`references/list-and-promote.md`**.

---

## Phase 3 — Promotion (get it to `isListed: true`)

A fresh listing starts **provisional** (`protocol='other'`, `discovery={}`, unlisted). The
**catalog-monitor** probes `targetUrl` and posts a health verdict; the App promotes on a
healthy x402 verdict. The monitor detects the rail in three ordered layers:

1. **endpoint challenge** — the `targetUrl` returns a valid HTTP-402 body, or
2. **reviewed fixture** — a body from the `SAFE_PRICED_FIXTURES` allowlist elicits the 402, or
3. **discovery manifest** — `{origin}/.well-known/x402(.json)` is a valid x402 manifest →
   `discovery={x402: manifestUrl}` (robust; immune to free-tier flakiness).

Poll until live:

```bash
curl -s "$NVM_API_URL/api/v1/catalog/services/<slug>" \
  | jq '{isListed,moderationStatus,healthStatus,displayPriceLabel,invokeUrl}'
# want: isListed:true, moderationStatus:"live", healthStatus:"operational"
```

If it won't promote, the cause is almost always Phase 0: `targetUrl` is an `/mcp` URL, or the
endpoint validates-before-charge with no manifest. Fix the URL (Phase 2 PATCH) or ensure a
`.well-known/x402` manifest exists.

---

## Phase 4 — E2E through the Router (can a buyer actually pay it?)

The real product test. Full loop + the complete error table live in the **`nevermined-router`**
skill; the onboarding-specific slice:

```bash
# 1. Delegation (budget) — erc4337/usdc is required for the stablecoin rail
DID=$(curl -sX POST "$NVM_API_URL/api/v1/delegation/create" \
  -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"provider":"erc4337","currency":"usdc","spendingLimitCents":500,"durationSecs":604800}' \
  | jq -r .delegationId)

# 2. Fund the buyer wallet (read it back LIVE; both rails PULL from it)
WALLET=$(curl -s "$NVM_API_URL/api/v1/delegation/$DID" -H "Authorization: Bearer $NVM_API_KEY" | jq -r .providerPaymentMethodId)
#    → send USDC to $WALLET on the env's network (live → Base mainnet, sandbox → Base Sepolia)

# 3. Pay BY SLUG (raw URL to a cataloged host is refused BCK.ROUTER.0014)
curl -sX POST "$NVM_API_URL/api/v1/router/route" \
  -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"delegationId":"'"$DID"'","slug":"<slug>","method":"POST",
       "body":{"input":{...}},"requestId":"onboard-<slug>-1","maxTotalCents":50}' \
  | jq '{status,paid,txHash:.payment.txHash,settlement:.payment.settlement,fee:.payment.fee}'

# 4. Verify the spend three ways
curl -s "$NVM_API_URL/api/v1/router/payments?delegationId=$DID" -H "Authorization: Bearer $NVM_API_KEY"
curl -s "$NVM_API_URL/api/v1/delegation/$DID" -H "Authorization: Bearer $NVM_API_KEY" | jq '{amountSpentCents,remainingBudgetCents}'
#   + eth_getTransactionReceipt on the txHash → status 0x1, USDC Transfer buyer→payTo
```

Pass = `paid:true`, a merchant result `body`, `settlement` to the merchant's `payTo`, an
on-chain `txHash` that confirms, and `amountSpentCents` rising by the whole-cent cap reserve.

> **Free-tier gotcha (bit me on the Router too):** the first paid call from the Router's
> egress IP that day can hit the merchant's free tier → HTTP 200 → `paid:false`, no charge.
> **Fire a few calls with DISTINCT `requestId`s** to burn the free quota; the next one pays.
> Do NOT reuse a `requestId` to force this — same id returns `409 BCK.ROUTER.0002` (the
> original payment), a different id is a new purchase. One stable id *per logical purchase*.

---

## Credits & claiming (beyond the two proofs)

- **Pay with credits, not just a Delegation.** Once a listing is promoted (operational, crypto x402,
  a **fixed** on-the-wire price, a self-contained endpoint, not on the exclusion list), Nevermined
  prices it on a credit ladder automatically and buyers can pay it in **Nevermined credits**. You do
  not set or trigger that pricing — publish/curate the listing, get it promoted, and an eligible
  endpoint is priced on the next pricing cycle. Variable-priced, non-crypto, or wallet-bound listings
  stay Delegation-only.
- **Claim (ownerless listings).** If Nevermined curated the service before its operator signed up, the
  operator adopts it by proving domain control — `GET …/claim/challenge` → `POST …/claim/verify`. Only
  an **unowned** listing is claimable (one with no org, agent, or prior claim).

Both flows with the exact API calls: **`references/claim-and-credits.md`**.

---

## Phase 5 — Sign-off checklist

- [ ] `targetUrl` answers a real HTTP-402 (or has a valid `.well-known/x402` manifest) — never an `/mcp` URL.
- [ ] **Direct wallet:** paid the merchant from a raw EOA, HTTP 200 + valid result + on-chain USDC transfer to `payTo`.
- [ ] Listing published; `GET /catalog/services/<slug>` shows `isListed:true, moderationStatus:"live", healthStatus:"operational"`.
- [ ] **Router e2e:** `paid:true`, on-chain `txHash` confirmed, `amountSpentCents` moved, ledger has the entry.
- [ ] Price / network in the listing match what both proofs actually charged.
- [ ] Spent from a capped delegation on a throwaway budget; secrets never echoed.
- [ ] (Curated listing) it is **ownerless** — no `orgId` / `agentDid` / claim set — so the operator can claim it; claim flow verified or handed to them.
- [ ] (If credit-eligible) the promoted listing shows a credit price, or you've confirmed why it is Delegation-only.

## Gotchas (consolidated)

| Symptom | Cause | Fix |
|---|---|---|
| Listing never promotes; "service-discovery-only" | `targetUrl` is an `/mcp` URL (402 tunneled at HTTP 200) | List the REST `…/v1/tools/<tool>/call` path |
| Endpoint probe → 400, never 402 | Service validates body *before* the payment gate | Probe with a well-formed `{"input":{…}}` body |
| Probe → 200 (looks free) | Per-IP free tier not yet exhausted | Fire several calls (distinct `requestId` on Router) to burn quota |
| `BCK.CATALOG.0004 Agent not found` on publish | Agent registered with `orgId: null` | Re-register with `orgId` + `X-Current-Org-Id` header |
| `BCK.ROUTER.0014` on Router pay | Raw URL to a cataloged host | Pay by `slug` (`/router/route {slug}` or `/router/svc/<slug>`) |
| Router `paid:false` on a known-paid service | Free tier answering the Router IP | Distinct-`requestId` calls until `paid:true` |
| `targetUrl` is `null` everywhere | Public API hides cataloged upstream by design | `GET /api/v1/catalog/mine` (owner) shows the raw value |
| SDK x402 buyer "can't pay the merchant" | SDK settles a Nevermined *plan*, not external merchants | Direct EOA + EIP-3009 for the merchant leg (`references/direct-wallet-pay.md`) |
| Direct-pay signed fine but → `402 "No matching payment requirements"` | Dual-version x402 merchant: the v1 payload was ALSO sent on the v2 `payment-signature` header | Send the v1 payload on **`X-PAYMENT` only** (`references/direct-wallet-pay.md`) |
| `claim/verify` → `409` "already owned" | The listing is org-owned, not curated/ownerless | Only an **unowned** listing (no `orgId`/`agentDid`/prior claim) is claimable (`references/claim-and-credits.md`) |
| Promoted + live but shows no credit price | Not credit-eligible (variable price / non-crypto / wallet-bound / excluded), or not yet priced | Confirm eligibility; credit pricing runs on the platform's own cycle — you don't trigger it (`references/claim-and-credits.md`) |

## Reference files

| You need… | Read |
|---|---|
| The raw-EOA EIP-3009 payer (runnable) + the direct 402→sign→pay flow | `references/direct-wallet-pay.md` |
| Catalog publish/patch/mine DTOs, monitor promotion internals, moderation | `references/list-and-promote.md` |
| Ownership (org-owned vs curated/ownerless), the claim flow, and when a listing is credit-payable | `references/claim-and-credits.md` |
| The full Router buy loop, every error code, retry rules | the `nevermined-router` skill |
| Register an agent/plan, get an API key, card enrollment | the `nevermined-payments` skill |
