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

| Field | Notes |
| --- | --- |
| `amount` | The asset's **smallest unit**, not cents — `1000` = 0.001 USDC at 6 decimals. **Merchant leg only**; the fee is not in it |
| `asset` | As persisted at mint, and it differs per rail: a symbol for x402, the token **contract address** for MPP-tempo, an ISO currency code for MPP-stripe. Prefer the two fields below for display |
| `assetSymbol` | Ticker to display for `asset` — `USDC`, `EURC`, `USDC.e`, `pathUSD`. `null` when unrecognised on this row's chain: show the (truncated) `asset` instead, never a guess |
| `assetDecimals` | Decimal scale of `amount`, so you never have to assume one. `null` when unrecognised — then treat `amount` as raw atomic units rather than defaulting to 6, which renders a wrong *number* instead of a wrong label |
| `merchantAddress` | Pay-to identifier: a `0x` address on the crypto rails, or a `profile_…` processor id on the card rail |
| `buyer` | Payer identity: the on-chain EOA (`0x…`) on crypto rails, or a `cus_…` customer id on the card rail |
| `txHash` | Settlement reference for the **merchant** leg. **Not always a `0x` hash** — see reconciliation below |
| `requestId` | Your idempotency key, echoed. The join key back to your own records |

**`amount` is not cents.** The cap is in cents, the ledger is in atomic units; converting needs
`assetDecimals` from the same row. And `amount` is only the **merchant** leg, so the combined cap
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
| `feeCents` | Cents the fee added to the cap reserve |
| `feeStatus` | The fee leg's own lifecycle — **not** the payment `status`. See below |
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

⚠️ **`Failed` does not imply `Released`.** A `Failed` row can still have its reserve charged against
your cap. If you are reconciling budget, key off `Released`, not `Failed`.

**The two legs settle independently — reconcile them separately.** `txHash` anchors the merchant
payment, `feeTxHash` the fee; neither implies the other. A `Settled` fee reconciled on-chain rather
than reported by the facilitator has **no `feeTxHash` at all** — the chain answers "was this
authorization consumed" with a boolean, not a transaction — so `feeNonce` is the audit key for those
rows. A null `feeTxHash` is not evidence the fee did not settle.

**For CSV consumers:** every column added since the original set — the six fee ones, then
`assetSymbol` and `assetDecimals` — was **appended after** it, so a parser reading the original
columns by **index from the left** is unaffected. One that **asserts a header count**, or maps
positionally **from the right**, breaks: the set has grown twice already and `feeNonce` is no longer
the last column. Key off the header names.

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
