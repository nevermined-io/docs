# Ownership, claiming a listing, and paying with subscription credits

Two things every catalog listing has beyond "is it live": **who owns it**, and **how a buyer
pays it** (a capped Delegation, or Nevermined credits). This file covers both.

## Two ways a listing comes to exist

| | Org-owned | Nevermined-curated (ownerless) |
|---|---|---|
| Created by | A builder lists **their own** service via the API (Phase 2) under their org. | Nevermined lists a **discovered** x402 service so buyers can reach it before the operator has signed up. |
| Owner fields | `orgId` / `agentDid` / `submittedBy` set. | All unset (no org, no agent, no submitter). |
| Claimable? | **No** — it already has an owner. | **Yes** — the real operator can adopt it (below). |

Both kinds are equally discoverable and Router-payable. The difference is only *who controls the
listing*. An ownerless listing is how the Catalog can carry a service the operator hasn't claimed
yet — and the claim flow is how they take it over.

## Claiming a listing (for the real operator)

Public API. The operator proves they control the service's **domain**, then adopts the listing into
their own org. A listing is claimable **only while unowned** — once it has an org, agent, or a prior
claim, `verify` returns `409` "already owned", and the proven domain must match the listing's host.

```bash
# 1. Resolve the slug a buyer sees to its id (+ whether it is already Official/claimed)
curl -s "$NVM_API_URL/api/v1/catalog/claim/by-slug/<slug>" \
  -H "Authorization: Bearer $NVM_API_KEY"               # → { id, slug, title, official }

# 2. Get the DNS TXT / well-known record to publish on your domain
curl -s "$NVM_API_URL/api/v1/catalog/listings/<id>/claim/challenge?domain=<your-domain>" \
  -H "Authorization: Bearer $NVM_API_KEY"

# 3. Publish that record (a DNS TXT record, or a file under /.well-known/), then verify + adopt:
curl -sX POST "$NVM_API_URL/api/v1/catalog/listings/<id>/claim/verify" \
  -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"method":"dns-txt","domain":"<your-domain>","orgId":"<your-org>"}'   # method: dns-txt | well-known
```

A successful `verify` adopts the listing (registers a claim agent under your org) and marks it
**Official**. From then on you edit it with `PATCH /api/v1/catalog/listings/<id>/claim`.

## Paying a listing with Nevermined credits (vs a Delegation)

A buyer can pay a catalog service two ways: from a **capped Delegation** (the Phase-4 flow, works for
any payable listing), or with **Nevermined credits** (free at sign-up, from top-up packs, or from a
Nevermined Subscription). Credits are the simpler path for a buyer who does not want to fund a wallet.

A listing becomes **credit-payable automatically** once it is promoted and meets the eligibility
bar — Nevermined prices each endpoint on a fixed **credit ladder** and keeps it current. A listing is
credit-eligible when it is:

- **listed + live + operational** (promoted — Phase 3), and
- **crypto x402** with a **fixed, on-the-wire price** (a variable or request-dependent price is
  Delegation-only), and
- a **self-contained endpoint** (one whose result the buyer reads back directly — not a job/inbox a
  treasury-funded call would own), and
- **not on the credits exclusion list** (a small, reviewed set of merchants sold by crypto only).

Services that miss the bar stay payable from a Delegation; they just do not show a credit price.
Buyers spend credits through the Router / Commerce MCP exactly like a Delegation call — see the
**`nevermined-router`** skill → credits, and
[nevermined.ai/docs/products/catalog/router/subscription](https://nevermined.ai/docs/products/catalog/router/subscription).

> The pricing itself is run by the Nevermined platform, not by you as the lister — you do not set or
> trigger it. Publish/curate the listing, get it promoted, and an eligible endpoint is priced on the
> next pricing cycle.
