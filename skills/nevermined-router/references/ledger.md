# Ledger — what you actually spent

Every Router payment, across every merchant, protocol and Delegation, lands on one record. This is
how an agent audits its own spending, and how a human audits the agent's.

## List payments

```bash
curl -s "$NVM_API_URL/api/v1/router/payments?delegationId=$NVM_DELEGATION_ID" \
  -H "Authorization: Bearer $NVM_API_KEY"
```

| Param | Notes |
| --- | --- |
| `delegationId` | Only spend against this Delegation |
| `from` / `to` | ISO-8601, **inclusive** on `createdAt`. Invalid → `400 BCK.ROUTER.0001` |
| `format` | `json` (default) or `csv` — a downloadable `router-payments.csv` |

Returns **newest first, capped at 1000 rows**. The cap is silent: 1000 rows back does not mean there
were exactly 1000. Narrow with `from`/`to` and page through by time, or use the summary endpoint for
totals.

### A record

```json
{
  "id": "b1f9c2e4-…",
  "createdAt": "2026-07-01T09:00:55.605Z",
  "status": "Settled",
  "protocol": "x402",
  "network": "base",
  "asset": "USDC",
  "amount": "1000",
  "merchantAddress": "0x209693Bc6afc0C5328bA36FaF03C514EF312287C",
  "txHash": "0xfc8af37b…",
  "delegationId": "5e7481c3-…",
  "requestId": "search-nevermined-router-v1",
  "resourceUrl": "https://agent.example/resource",
  "buyer": "0x8D6A5233…",
  "feeAtomic": "0",
  "feeBps": 0,
  "feeCents": "0",
  "feeStatus": "None",
  "feeTxHash": null,
  "feeNonce": null,
  "assetSymbol": "USDC",
  "assetDecimals": 6
}
```

⚠️ **This sample is from a deployment with no routing fee configured** — that is what `feeBps: 0` /
`feeStatus: "None"` mean here, and it is the shipped default. Do not read it as "an x402 payment
carries no fee": where a rate **is** configured, x402 payments carry one, mode A and mode B alike.
The one exception with a rate set is a fee that rounds below a single atomic unit — it is dropped
rather than reserved, and that row also reads `feeAtomic: "0"` / `feeStatus: "None"`.
See [`paying.md`](./paying.md#mode-a-fee).

| Field | Notes |
| --- | --- |
| `amount` | The settlement asset's **smallest unit** — but **the scale differs per rail**, so read `assetDecimals` and never assume one. **Merchant leg only**; the fee is not in it |
| `asset` | As persisted at mint, and it differs per rail: a symbol for x402, the token **contract address** for MPP-tempo, an ISO currency code (`usd`/`eur`) for MPP-stripe. Prefer the two fields below for display |
| `assetSymbol` | Ticker to render for `asset`. **A value here is not proof we recognised the asset** — see below |
| `assetDecimals` | Decimal scale of `amount` — **this is the recognition signal.** `null` means "we do not know the scale": show raw units, never a guess |
| `merchantAddress` | Pay-to identifier: a `0x` address on the crypto rails, or a `profile_…` processor id on the card rail |
| `buyer` | Payer identity: the on-chain EOA (`0x…`) on crypto rails, or a `cus_…` customer id on the card rail |
| `txHash` | Settlement reference for the **merchant** leg. **Not always a `0x` hash** — see reconciliation below |
| `requestId` | Your idempotency key, echoed. The join key back to your own records |

### Scale: read `assetDecimals`, never assume 6

⚠️ **On the card rail, `amount` IS cents.** MPP-stripe settles in ISO currencies at **scale 2**, so a
$60.00 card payment is `amount: "6000"`. On x402 and MPP-tempo the stablecoins are **6-decimal**, so
`1000` = 0.001 USDC. One rule covers both:

```
displayed = Number(amount) / 10 ** assetDecimals      // and if assetDecimals is null, don't
```

Dividing a card row by 10⁶ because "the ledger is in atomic units" turns $60.00 into `0.00006` — a
plausible-looking **wrong number** that lands in a spend total, which is far worse than a visibly
missing one. That is why the scale is on the row. A card row looks like this:

```json
{ "protocol": "mpp", "network": "stripe", "asset": "usd", "amount": "6000",
  "assetSymbol": "usd", "assetDecimals": 2,
  "merchantAddress": "profile_1S…", "buyer": "cus_T…" }
```

`network: "stripe"` names a rail, not a chain.

`assetDecimals` is `null` whenever the asset is not one we can scale — an unrecognised token on that
row's chain, or a card-rail currency outside the two the mint path admits. Treat it as "cannot render
an amount": show the raw `amount` and the truncated `asset`, and do **not** fall back to 6.

⚠️ **Guard the `null` explicitly.** `Number(amount) / 10 ** null` evaluates to `Infinity`, not an
error — so an unguarded divide does not fail loudly, it produces a figure and puts it in a total.

### `assetSymbol` is not a recognition check

It is `null` on only **two** of the four resolution paths — an empty `asset`, and a hex address that
is not in that chain's table. On the other two — the **card rail**, and an `asset` already stored as
a symbol — it **echoes the persisted value whether or not we recognise it**. So a non-null
`assetSymbol` tells you nothing about whether the row is understood. **Branch on `assetDecimals`.**

The tickers we resolve are `USDC` and `EURC` (Base, Base Sepolia), `USDC.e`, `EURC.e` and
`pathUSD` (Tempo), plus whatever ISO code the card rail persisted.

⚠️ **`pathUSD` is spelled with a different capital per chain** — `pathUSD` on Tempo mainnet, `PathUSD`
on Tempo Moderato — because each chain's token reports its own casing. **Compare tickers
case-insensitively.** Matching one spelling exactly misses every row on the other chain, and the
symptom is a silently short total rather than an error.

### `amount` is not the cap charge

The cap is in cents; `amount` is the merchant leg in the settlement asset's units. The combined cap
charge is not derivable from this resource at all: that is `fee.capChargedCents` on the original
payment response (see `paying.md`), or `amountCents` on
`GET /api/v1/delegation/{id}/transactions` — the ledger does not repeat either.

Neither `merchantAddress` nor `buyer` is safely a blockchain address: branch on `network` before
rendering either as an explorer link.

### The fee columns

Nevermined's routing fee is recorded on every row, on both the JSON rows and the CSV export.

| Field | Notes |
| --- | --- |
| `feeAtomic` | The fee in the asset's **smallest unit**, like `amount`. `"0"` when no fee applied; `null` on rows predating the fee |
| `feeBps` | Rate applied, in basis points over 10,000 (`200` = 2%). `null` on rows predating the fee |
| `feeCents` | Cents the fee added to the cap reserve. `null` on rows predating the fee |
| `feeStatus` | The fee leg's own lifecycle — **not** the payment `status`. `null` on rows predating the fee, so a switch over the six values below needs a `null` branch. See below |
| `feeTxHash` | Settlement reference for the **fee** leg, distinct from `txHash`. Reported verbatim by the facilitator, so third-party text, not a validated `0x` shape. Often `null` — including on some `Settled` rows |
| `feeNonce` | The fee leg's EIP-3009 nonce, recorded on submission. The audit key that ties an on-chain transfer back to this payment. `null` until submitted. Not spendable on its own |

⚠️ **`feeStatus` is a separate lifecycle from the payment `status`, and `Settled` / `Failed` appear
in both.** A row can read `status: "Settled"` with `feeStatus: "Accrued"` — the merchant was paid and
the fee has not moved yet. Never read one as the other, and never infer the payment state from
`feeStatus`.

| `feeStatus` | Meaning |
| --- | --- |
| `None` | No fee applied to this payment |
| `Accrued` | Fee owed and reserved against your cap; nothing submitted anywhere, so nothing can have moved |
| `Submitted` | Handed to the facilitator, outcome not yet known. A fee sits here for the whole round trip; **not** terminal |
| `Settled` | The fee leg landed on-chain |
| `Failed` | Collection provably did not happen. Terminal as an *outcome* — retrying changes nothing — but the row may still advance to `Released` |
| `Released` | The fee's cap reserve was **given back**, because collection reached a terminal not-collected state. Terminal |

⚠️ **`Failed` does not imply `Released`, and a non-2xx hop does not always end at either.** A
`Failed` row can still have its reserve charged; and a fee whose outcome the facilitator could not
adjudicate is **never** released — money may have moved — so it stays at `Submitted`, reserve
charged, pending on-chain reconciliation. Reconciling budget therefore has **three** answers, not
two: `Released` means refunded, `Failed`/`Submitted` mean still charged. Key off `Released`.

**The two legs settle independently — reconcile them separately.** `txHash` anchors the merchant
payment, `feeTxHash` the fee; neither implies the other. A `Settled` fee reconciled on-chain rather
than reported by the facilitator has **no `feeTxHash` at all** — the chain answers "was this
authorization consumed" with a boolean, not a transaction — so `feeNonce` is the audit key for those
rows. A null `feeTxHash` is not evidence the fee did not settle.

**For CSV consumers:** every column added since the original set — the six fee ones, then
`assetSymbol` and `assetDecimals` — was **appended after** it, so a parser reading the original
columns by **index from the left** is unaffected. One that **asserts a header count**, or maps
positionally **from the right**, breaks: the set has grown **three times** already — #2191 added the
first four fee columns, #2840 added `feeTxHash`/`feeNonce`, #2779 added the derived pair — and
`feeNonce` is no longer the last column. Key off the header names.

## Aggregate summary

```bash
curl -s "$NVM_API_URL/api/v1/router/payments/summary?granularity=day" \
  -H "Authorization: Bearer $NVM_API_KEY"
# → { "total": 137, "series": [ { "date": "2026-07-01T00:00:00.000Z", "value": 12 }, … ] }
```

`granularity` is `day` (default), `week` or `month`; an unrecognised value **falls back to `day`
rather than erroring**, so a typo silently changes your bucketing. `from`/`to` behave as above.
Buckets are oldest first. `total` is **uncapped**, unlike the 1000-row list.

**The summary counts payment *requests*, not money.** Use the list endpoint when you need amounts.

## Statuses

| Status | Meaning |
| --- | --- |
| `Issued` | Credential minted and budget reserved. Either still in flight, or it succeeded without a usable settlement reference |
| `Settled` | The merchant accepted the credential and returned a settlement reference, stored as `txHash` |
| `Failed` | The merchant rejected the credential — it answered the paid request with another 402 |

**`Issued` is not an error.** On a paid mode-B call it means you got the resource but the settlement
anchor did not arrive — a missing, oversized or malformed receipt. The Router deliberately will not
fail an already-paid hop over a bad receipt. In mode A it is simply where a record sits until you
report the settlement.

So: **an agent must not retry a payment because its record says `Issued`.** The money moved. Retrying
with a fresh `requestId` buys it again.

## Closing a mode-A record

```bash
curl -sX POST "$NVM_API_URL/api/v1/router/payments/$PAYMENT_ID/settled" \
  -H "Authorization: Bearer $NVM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"txHash":"0xfc8af37b…"}'
# → { "paymentId": "b1f9c2e4-…", "status": "Settled", "txHash": "0xfc8af37b…" }
```

Take the reference from the merchant's `PAYMENT-RESPONSE` / `X-PAYMENT-RESPONSE` (x402) or
`Payment-Receipt` (MPP) header.

- Only an `Issued` payment can be settled. Re-reporting the **same** hash is a harmless no-op; a
  **different** hash, or a non-`Issued` record, is `409 BCK.ROUTER.0005`.
- A payment id that is not yours is `404 BCK.ROUTER.0004`.

Mode B does this for you — one of the better reasons to prefer it.

## Reconciling

The settlement reference is **reported by the merchant and stored unverified**. The Router bounds its
length and character set, but does not confirm on-chain that the transaction exists, paid the
expected recipient, or moved the expected amount.

For anything that matters — accounting, disputes, anomaly detection — treat `txHash` as an **anchor
to verify**, not as proof. Check it against the chain named in `network`.

A non-`0x` reference is legitimate: settlement identifiers are protocol-specific, and non-blockchain
rails return processor references rather than transaction hashes.

## What an agent should do with this

- **Reconcile against your own intent.** You hold the `requestId`s you generated; the ledger echoes
  them. A row whose `requestId` you do not recognise is worth surfacing.
- **Watch the burn rate, not just the cap.** `remainingBudgetCents` on the Delegation tells you where
  you are; the summary series tells you how fast you got there.
- **Report, don't self-heal.** If the ledger disagrees with what you think you bought, that is a
  human's problem to look at — not a reason to re-issue payments.
