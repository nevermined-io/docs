# Bootstrap — API key, Delegation, funded wallet

Three preconditions before any payment. Do them once and reuse.

## 1. The API key

Every Router call carries `Authorization: Bearer $NVM_API_KEY`. Issued from the Nevermined app —
this is the one step that needs a human.

Keys are environment-scoped: `sandbox:…` for sandbox, `live:…` for production. A key from the wrong
environment fails auth, not the Router's own checks.

**A key issued before the Router shipped is refused with `403 BCK.ROUTER.0008`.** It is bound to a
previous account model that cannot sign these payments. The fix is to create a new key — newly
issued keys work. Existing keys keep working for credit-based flows, so nothing else needs rotating.
This is not retryable and not a transient error; do not loop on it.

**Never forward this key to a merchant.** It authenticates you to Nevermined. If the merchant needs
its own credential, pass that separately (`headers` in mode B, `X-Router-Upstream-Authorization` on
`/proxy`) — see `paying.md`.

## 2. The Delegation

Your budget. A hard cap in cents plus an expiry, enforced server-side on **every** payment.

```bash
curl -sX POST "$NVM_API_URL/api/v1/delegation/create" \
  -H "Authorization: Bearer $NVM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"provider":"erc4337","currency":"usdc","spendingLimitCents":500,"durationSecs":604800}'
# → { "delegationId": "5e7481c3-e972-45bd-bdc5-a0b99c4de4a1" }
```

| Field | Required | Notes |
| --- | --- | --- |
| `provider` | **yes** | `erc4337` for both stablecoin rails. No default — omitting it is a 4xx |
| `currency` | **yes** | `usdc` · `eurc` · `usd` · `eur`. No default |
| `spendingLimitCents` | **yes** | Integer ≥ 1. The hard cap, in cents |
| `durationSecs` | **yes** | Integer ≥ 1. `604800` = 7 days |
| `allowedRecipients` | no | Up to 100 `0x…` EVM addresses. **Omit = no restriction** |
| `maxTransactions` | no | Cap on number of charges. Omit = unlimited |

`provider: "erc4337"` is the crypto-funded Delegation both stablecoin rails require. Card-funded
Delegations use a different provider and are refused on those rails (and vice versa) with
`400 BCK.ROUTER.0001`.

### Two ways creation is refused before your fields are even read

Both guard the *caller*, not the request body, so a perfectly valid payload still fails. Neither is
retryable and neither can be fixed from your side alone.

**`403 BCK.OAUTH.0030` — this API key may not create Delegations.** An **OAuth-minted** credential
(one issued through an OAuth consent ceremony — today `credits_purchase` or `account_access`, but the
guard keys on the binding rather than the consent type, so any future ceremony type is refused too)
is refused on
`POST /delegation/create` *and* on all three paying routes — `POST /router/payments`, `POST
/router/route`, `ALL /router/proxy`. Those routes sign from the account's full wallet, outside the
narrow policy such a credential advertises, so the advertised scope would not be the real spend
boundary. The fix is a **plain API key issued by the account owner** from the Nevermined app. Nothing
about the request will make an OAuth-minted key work — do not retry, and do not fall back to a
different Router endpoint.

**`412` with `{"error":"consent_required"}` — the account's legal-document consent has lapsed.**

```json
{ "error": "consent_required", "outdated": ["terms", "privacy"],
  "code": "BCK.HTTP.412", "httpStatus": 412, "category": "validation",
  "retryable": false, "correlationId": "…" }
```

<a id="consent-412"></a>
⚠️ **`code` alone will not identify this one.** It is deliberately *not* an `NVMException`, so it has
no `BCK.LEGAL_DOCS.…` code of its own; the global error filter normalises it and stamps the generic
**`BCK.HTTP.412`**, which restates the status and says nothing about the cause. The cause is in
`body.error === "consent_required"` — branch on that, and read `body.outdated[]` for the document
slugs (`terms`, `privacy`) not yet accepted at their current version. This is the one place the
"branch on `code`" rule in `errors.md` needs a second field.

It applies to the whole account — the same guard gates ten routes across delegation creation, card
enrolment and fiat checkout — so **every** Delegation-creating call fails until it is resolved.
Check it up front with `GET /api/v1/legal-documents/me/consent-status` (same bearer key), which
returns `never` · `outdated` · `current` per slug.

**Accepting is a human's act, not yours.** `POST /api/v1/legal-documents/me/consents` does accept an
API key, so you *can* clear this yourself — and you must not. **Accepting terms is the account
holder agreeing to be bound by them, and that is consent you have no standing to give on their
behalf**; an API key authorises you to spend within a cap, not to enter agreements for the person
who issued it. Calling that endpoint would also erase the only signal that the human never saw the
new document. Report the 412, name the slugs in `outdated[]`, and stop.

This is also why an agent that ran for weeks can fail at step ② one morning having changed nothing:
a document was updated on Nevermined's side.

### Recipient scope is optional, and unset means unrestricted

If `allowedRecipients` is present, the merchant's pay-to address must be on it — checked *before*
the expensive signing step, so a disallowed recipient costs nothing. If it is **absent, there is no
recipient restriction at all**: the Delegation can pay any merchant the Router can reach, and its
cap and expiry are the only limits.

Do not assume a Delegation is address-bound unless you deliberately made it so. Card-funded
Delegations are vendor-agnostic by design and never carry one.

Scoping is worth it when you already know who you are paying — it turns a compromised or confused
agent's blast radius from "anyone" into "these addresses". It is impractical when you are shopping
the catalog, since you do not know the pay-to address until the 402 arrives.

## 3. Read its live state — and the wallet address

```bash
curl -s "$NVM_API_URL/api/v1/delegation/$NVM_DELEGATION_ID" \
  -H "Authorization: Bearer $NVM_API_KEY"
```

```json
{
  "delegationId": "5e7481c3-…",
  "provider": "erc4337",
  "providerPaymentMethodId": "0x8F60b3838e6C121FcDBdBc50e7B150F8560a670E",
  "status": "Active",
  "spendingLimitCents": "500",
  "amountSpentCents": "0",
  "remainingBudgetCents": "500",
  "expiresAt": "2026-08-07T00:00:00Z"
}
```

`status` must be `Active`. `Revoked`, `Expired` and `Exhausted` all refuse with
`402 BCK.ROUTER.0003`.

**Check `expiresAt` before diagnosing anything.** Delegations expire silently — an agent that worked
yesterday and fails today with `0003` has very often just aged out, and that looks identical to a
broken rail until you look.

You can list your Delegations with `GET /api/v1/delegation`, and a single Delegation's charges with
`GET /api/v1/delegation/{id}/transactions`.

## 4. Fund the buyer wallet

**`providerPaymentMethodId` is the custodial wallet address to fund.** Both rails **pull**: the
merchant takes funds from that wallet. The Delegation authorizes the spend; it does not supply the
money. The two are independent — you can be inside your cap and still have an empty wallet.

Send the payment asset to that address **on the network you intend to pay on**.

**Always re-read the address from the live Delegation. Never reuse a cached one.** Funding a stale
address is the most common cause of `402 BCK.ROUTER.0009`, and the error deliberately does not echo
the address it checked — so it cannot tell you that is what happened. This one costs more debugging
time than anything else in this API.

### Which network and asset

Decided by **what the merchant advertises**, not by which Nevermined environment you point at.

| Rail | Networks | Assets |
| --- | --- | --- |
| **x402** | `base` (8453, **mainnet — real funds**), `base-sepolia` (84532, testnet) | `USDC`, `EURC` — 6 decimals |
| **MPP** | Tempo mainnet (4217), Tempo Moderato testnet (42431) | Whatever the operator allowlisted for that chain |

`base` moves real money. Read `settlement.network` on the response if you want certainty about what
just happened.

**Only one x402 network is funded per deployment, and which one is fixed by the environment.** It is
not a per-deployment toggle and you cannot widen it:

| Your `$NVM_API_URL` | x402 network the Router will fund |
| --- | --- |
| `https://api.sandbox.nevermined.app` (sandbox) | `base-sepolia` only |
| `https://api.live.nevermined.app` (live) | `base` only |

The permissive "both networks" pair survives **only on a local dev deployment**. An operator's
`ROUTER_FUNDED_NETWORKS` can now only *narrow* that set, never widen it — sandbox/live is the
real-money firewall, and an env var must not move a box across it.

So **a `base` merchant is unpayable from sandbox and a `base-sepolia` merchant is unpayable from
live** — in both cases with `400 BCK.ROUTER.0001 … no fundable option`, because every advertised
option was on an unfunded network. That reads like a broken merchant and is not: it is the wrong
environment for that service. Point at the other `$NVM_API_URL` (with a key issued for it), or pick a
service on your environment's network. Do not retry, and do not go looking for a different merchant
on the same chain — it will fail identically.

Amounts are in the asset's smallest unit. For 6-decimal stablecoins:

```
1_000_000 atomic units = 1 USDC = 100 cents
    10_000 atomic units = 1 cent
```

Your cap is in **cents**, so every payment is converted and **rounded up** to the next whole cent
before being checked. A 5,000-unit (half-cent) payment reserves 1 cent — a long loop of sub-cent
calls burns a full cent of budget each. `settlement.approxCents` is the **merchant** leg;
`fee.capChargedCents` on the same response is the total this call **reserved** against the cap,
including Nevermined's routing fee. The reserve is not final — a failed mode-B hop releases the fee
half — so read `amountSpentCents` here for spend to date. See `paying.md`.

MPP additionally requires the payment token to be on the operator's per-chain allowlist
(`ROUTER_TEMPO_ASSETS_<chainId>`), which is **fail-closed**: unset rejects everything on that chain
with `400 BCK.ROUTER.0001`. If MPP fails with that code where x402 works fine, an unconfigured
allowlist is the first thing to check — the rails are configured independently.

## Preflight checklist

Before the first payment of a run:

1. `GET /api/v1/delegation/{id}` → `status: "Active"`, `remainingBudgetCents` covers what you plan
   to spend, `expiresAt` is comfortably ahead.
2. `providerPaymentMethodId` read **from that response**, funded on the target network.
3. A `requestId` scheme that is stable per purchase (see `paying.md`).

If any of these fails and you cannot fix it yourself, stop and report. Do not create a second
Delegation to get around an exhausted one.
