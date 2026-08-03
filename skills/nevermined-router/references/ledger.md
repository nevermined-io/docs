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
  "buyer": "0x8D6A5233…"
}
```

| Field | Notes |
| --- | --- |
| `amount` | The asset's **smallest unit** — 6-decimal stablecoins, so `1000` = 0.001 USDC. Not cents |
| `merchantAddress` | Pay-to identifier: a `0x` address on the crypto rails, or a `profile_…` processor id on the card rail |
| `buyer` | Payer identity: the on-chain EOA (`0x…`) on crypto rails, or a `cus_…` customer id on the card rail |
| `txHash` | Settlement reference. **Not always a `0x` hash** — see reconciliation below |
| `requestId` | Your idempotency key, echoed. The join key back to your own records |

**`amount` is not cents.** The cap is in cents, the ledger is in atomic units. Converting needs the
asset's decimals (6 for USDC/EURC). If you want what was charged against the budget, that is
`settlement.approxCents` on the original response — the ledger does not repeat it.

Neither `merchantAddress` nor `buyer` is safely a blockchain address: branch on `network` before
rendering either as an explorer link.

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
