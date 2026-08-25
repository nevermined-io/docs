# Nevermined Router — paying external services

You are writing an agent that must **pay** an external service it has no account with — any x402
agent or MPP merchant — through the Nevermined Router. If you are *receiving* payments or buying a
Nevermined plan, use the `nevermined-payments` rules instead.

Full skill: https://github.com/nevermined-io/docs/tree/main/skills/nevermined-router
Docs: https://nevermined.ai/docs/products/catalog/router/overview

## When the Router does NOT apply

It pays a price quoted **on the wire** for one request. A conventional SaaS API (Exa, Firecrawl,
Tavily…) is billed out of band by a monthly plan and a long-lived key, so it never quotes a
per-request price — there is nothing to pay and no address to pay it to.

**A service answering `401`/`403` rather than `402` wants authentication, not payment.** Say so;
don't try to route it.

## Environment

- `NVM_API_URL` — `https://api.sandbox.nevermined.app` or `https://api.live.nevermined.app`
- `NVM_API_KEY` — `sandbox:…` / `live:…`. **Never send it to the merchant**; it authenticates you to
  Nevermined only. The merchant's own auth goes in `headers`.
- `NVM_DELEGATION_ID` — the spending Delegation

## 1. Create a Delegation (the budget)

```bash
curl -sX POST "$NVM_API_URL/api/v1/delegation/create" \
  -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{"provider":"erc4337","currency":"usdc","spendingLimitCents":500,"durationSecs":604800}'
```

All four fields are required — no defaults. `erc4337` is the crypto-funded Delegation both
stablecoin rails need. Two guards refuse this call outright, neither retryable:

- `403 BCK.OAUTH.0030` — the key was OAuth-minted. It may not create Delegations or use
  `/router/{payments,route,proxy}`. Use a plain account-owner key.
- `412 {"error":"consent_required","outdated":[…]}` — the account's legal consent lapsed; a human
  must accept. ⚠️ Its only `code` is the generic `BCK.HTTP.412`, so branch on `body.error`.

## 2. Fund the buyer wallet

Both rails **pull** from your own custodial wallet: a Delegation authorizes a spend, it does not
supply funds. Read the address from the live Delegation every time —
`GET /api/v1/delegation/{id}` → `providerPaymentMethodId`.

**Never reuse a cached address.** A stale one is the most common cause of `402 BCK.ROUTER.0009`, and
that error deliberately doesn't echo the address it checked.

**One x402 network is funded per deployment, fixed by its environment: sandbox → `base-sepolia`,
live → `base`.** A merchant on the other chain is unpayable from where you are and fails
`400 BCK.ROUTER.0001 … no fundable option` — which reads like a broken service and is not.

## 3. Discover (public, no API key)

```bash
curl -s "$NVM_API_URL/api/v1/catalog/services?protocol=x402&search=web+search"
```

- **Only `protocol` of `x402` or `mpp` is routable.** Filter for them.
- **`targetUrl` is the default endpoint's COMPLETE URL, not a base** — it may already contain the
  path (`https://host/search` while `endpoints[0].path` is also `/search`), so concatenating yields
  `/search/search`. Resolve instead:

```ts
const url = endpoint ? new URL(endpoint.path, service.targetUrl).toString() : service.targetUrl
```

- `offset` is the page **size**, not a skip count, and default ordering is shuffled within each
  tier — never assume `services[0]` is stable.
- `category` is a **closed 13-value enum** (`"Search & Research"`, not `"Search"`), with a free-text
  `subCategory` under it. Take both from `GET /api/v1/catalog/categories`, which returns
  `{ category, count, subCategories[] }` — never guess the string.

## 4. Pay

```ts
const res = await fetch(`${process.env.NVM_API_URL}/api/v1/router/route`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.NVM_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    delegationId: process.env.NVM_DELEGATION_ID,
    url: 'https://service.example/api/resource',
    method: 'POST',
    body: { query: '…' },
    requestId: 'search-nevermined-router-v1', // stable per PURCHASE, not per attempt
  }),
})
const { status, body, paid, payment } = await res.json()
```

The Router probes, auto-detects the protocol from the 402, pays and relays. `status`/`body` are the
merchant's own; `paid: false` with no `payment` means it was free — handle that. For streaming use
`ALL /api/v1/router/proxy` with `X-Router-Target-Url`, `X-Router-Delegation-Id` and
`X-Router-Request-Id` headers.

### `requestId` is an idempotency key, not a request counter

**A fresh `uuid4()` per HTTP attempt is how an agent double-spends.** Use one stable id per logical
purchase, reused across retries of it: the same id returns the original payment, a fresh id buys
again. Derive it from the work being done.

### Money arithmetic

Budget is debited in **whole cents, rounded up** — 1000 calls at $0.001 costs **$10.00, not $1.00**.
`settlement.approxCents` is only the **merchant** leg; Nevermined's routing fee rides on top in the
always-present `payment.fee` (`{ bps, amount, cents, capChargedCents }`). **`fee.capChargedCents` is
what the call reserved against your cap** — sum that, not `approxCents`, or your accounting
under-reports by exactly the fee. ⚠️ It is the reserve **at mint**: a mode-B hop that does not return
`2xx` releases the fee half back, so a running total over-reports on those calls. For spend to date
read `GET /api/v1/delegation/{id}` → `amountSpentCents`.

## Guardrails — a refusal is the system working

- `BCK.ROUTER.0003` (402) — Delegation over cap, expired, exhausted or revoked. **Stop.**
- `BCK.ROUTER.0009` (402) — wallet short on the target network; nothing was signed. **Stop.**
- `BCK.ROUTER.0002` (409) — `requestId` already used; the original `paymentId` is in the response.
- `BCK.ROUTER.0001` (400) — bad input / no fundable option / non-allowlisted asset; `details` names it.
- `BCK.ROUTER.0008` (403) — legacy API key; create a new one.
- Only `BCK.ROUTER.0006` (500) and `0007` (429, too many concurrent) are **retryable**. Everything
  else is a decision — retrying unchanged gives the same answer.
- `BCK.ROUTER.0010` (500) — internal. **Never blind-retry it:** a credential was already minted and
  no record was written, so `requestId` will not suppress the retry. Report it.
- `BCK.ROUTER.0011` (402) — card rail: needs cardholder 3-D Secure, which an agent can't complete.
  Nothing was charged. **Don't auto-retry** — each attempt re-demands 3DS and strands a fresh
  single-use card credential. Surface it to a human.
- `BCK.ROUTER.0012` (400) — the seller's 402 advertises an EIP-712 domain its own settlement
  token does not sign under. Nothing signed, charged or reserved. It is the seller's bug and a
  retry gives the same answer: report it and pay someone else.
- `BCK.ROUTER.0013` (500) — Nevermined holds no EIP-712 domain for the selected token: OUR
  table is incomplete, not the seller's bug. Nothing signed, charged or reserved. Report it
  to Nevermined; a retry fails identically.

**Never widen a Delegation, and never create a second one, to get past a refusal.** The cap is the
user's decision, not a runtime obstacle; minting a fresh Delegation to escape an exhausted one
defeats the whole mechanism. Report and stop.

## Accounting

`GET /api/v1/router/payments` (filters `delegationId`, `from`, `to`, `format=csv`) and
`/payments/summary`. `amount` is the **merchant leg only**, in the asset's smallest unit — and ⚠️ the
**scale differs per rail**: 6 decimals on the crypto rails, but the card rail (`network: "stripe"`)
is **scale 2, so its `amount` IS cents**. Read `assetDecimals` off the row, never assume 6; `null`
there means unrecognised, so show raw units — and guard that branch, because
`amount / 10 ** null` is `Infinity`, not an error. `assetSymbol` is echoed even when unrecognised, so it
is not a recognition check, and `pathUSD`/`PathUSD` differ in case across the two Tempo chains —
compare tickers case-insensitively. Rows also carry `feeAtomic`, `feeBps`, `feeCents`, `feeStatus`,
`feeTxHash`, `feeNonce`.
`feeStatus` (`None|Accrued|Submitted|Settled|Failed|Released`) is a **separate lifecycle** from the
payment `status`, which shares `Settled`/`Failed` — never read one for the other. A record at
`Issued` is **not** an error — the money moved; do not retry it.
