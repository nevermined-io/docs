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

`base` moves real money, and both networks are enabled by default. Read `settlement.network` on the
response if you want certainty about what just happened.

Amounts are in the asset's smallest unit. For 6-decimal stablecoins:

```
1_000_000 atomic units = 1 USDC = 100 cents
    10_000 atomic units = 1 cent
```

Your cap is in **cents**, so every payment is converted and **rounded up** to the next whole cent
before being checked. A 5,000-unit (half-cent) payment reserves 1 cent — a long loop of sub-cent
calls burns a full cent of budget each. `settlement.approxCents` tells you what was actually
reserved.

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
