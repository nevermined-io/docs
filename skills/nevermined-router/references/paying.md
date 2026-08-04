# Paying — mode B, the streaming proxy, and mode A

Three ways to pay. **Default to mode B.** Reach for the others only when its shape does not fit.

| | Endpoint | Use when |
| --- | --- | --- |
| **Mode B — envelope** | `POST /api/v1/router/route` | Almost always. One call, JSON in, JSON out |
| **Mode B — streaming** | `ALL /api/v1/router/proxy` | Large or streamed responses (SSE, downloads) |
| **Mode A — credential** | `POST /api/v1/router/payments` | You must call the merchant yourself |

All three need `Authorization: Bearer $NVM_API_KEY` and an `erc4337` `delegationId`.

---

## Mode B — `POST /api/v1/router/route`

You describe the request; the Router probes the merchant, **auto-detects** the protocol from the
402, pays, and relays the response. You never see the 402 and never handle a credential.

```json
{
  "delegationId": "5e7481c3-e972-45bd-bdc5-a0b99c4de4a1",
  "url": "https://superhighway.walls.sh/search",
  "method": "POST",
  "headers": { "X-Merchant-Api-Key": "…" },
  "body": { "query": "nevermined router" },
  "requestId": "search-nevermined-router-v1"
}
```

| Field | Required | Notes |
| --- | --- | --- |
| `delegationId` | **yes** | UUID. Must be an `erc4337` Delegation |
| `url` | **yes** | Absolute `http(s)` URL |
| `method` | no | `GET` · `POST` · `PUT` · `PATCH` · `DELETE`. Default `GET` |
| `headers` | no | Forwarded to the merchant — put **its** auth here, never your `NVM_API_KEY` |
| `body` | no | JSON, forwarded |
| `protocol` | no | `x402`/`mpp`. **Advisory only** — see below |
| `requestId` | **yes** | Idempotency key. Non-empty, ≤ 256 chars |

### `protocol` is advisory here, and the detected one wins

On mode B the Router determines the protocol from the upstream 402 itself —
`WWW-Authenticate: Payment` → `mpp`; `accepts` / `PAYMENT-REQUIRED` → `x402`. **The detected
protocol is authoritative**: a wrong hint does not change what gets paid, and does not cause a
failure. You can omit it entirely and send the same call for both rails.

### Response

```json
{
  "status": 200,
  "body": { "…": "the paid resource" },
  "paid": true,
  "payment": {
    "paymentId": "b1f9c2e4-…",
    "settlement": {
      "recipient": "0x209693Bc…", "amount": "1000", "asset": "USDC",
      "network": "base", "approxCents": "1", "scheme": "exact"
    },
    "txHash": "0xfc8af37b…",
    "status": "Settled"
  }
}
```

- `status` / `body` are the merchant's own, relayed unchanged. `body` is parsed JSON when the
  merchant returned JSON, otherwise a string.
- `paid: false` and **no `payment` block** means the resource was free — the Router relayed it and
  charged nothing. Handle this; not every URL you route is actually paid.
- `settlement.approxCents` is what was reserved against your cap. Trust this over any catalog
  `priceLabel`.
- `status: "Issued"` (rather than `Settled`) means the hop succeeded and you have your resource, but
  the settlement anchor is still pending. Normal, not a failure — see `ledger.md`.

### `requestId` — the rule that prevents double-spending

Required on mode B **because the Router pays automatically**: a retry after a dropped connection
must not buy the same thing twice. At most one payment is minted per `(caller, requestId)`; a
duplicate returns `409 BCK.ROUTER.0002` carrying the **original** `paymentId`, which is usually what
you actually wanted.

**Use one stable id per logical purchase, reused across retries of that purchase.**

- Same id on retry → returns the original payment. Safe.
- Fresh id on retry → buys again. Also safe, *if that is what you meant*.

Derive it from the work (`"search-nevermined-router-v1"`, a hash of the query, a task id). **A fresh
`uuid4()` per HTTP attempt is how an agent double-spends** — it is the default reflex and it is
wrong here.

---

## Mode B streaming — `ALL /api/v1/router/proxy`

Same engine, transparent transport: method, body and headers pass through and the response
**streams** back. Use it for SSE, large downloads, or anything you do not want buffered into a JSON
envelope. It is deliberately absent from the OpenAPI document — it is a raw any-method proxy driven
by headers, with no fixed schema.

Point your HTTP client at `/api/v1/router/proxy` and drive it with request headers:

| Request header | Required | Purpose |
| --- | --- | --- |
| `X-Router-Target-Url` | **yes** | Absolute upstream URL |
| `X-Router-Delegation-Id` | **yes** | Your `erc4337` Delegation |
| `X-Router-Request-Id` | **yes** | Idempotency key — same rule as mode B |
| `X-Router-Upstream-Authorization` | no | The **merchant's** auth, forwarded as its `Authorization` |

```bash
curl -sN -X POST "$NVM_API_URL/api/v1/router/proxy" \
  -H "Authorization: Bearer $NVM_API_KEY" \
  -H "X-Router-Target-Url: https://service.example/stream" \
  -H "X-Router-Delegation-Id: $NVM_DELEGATION_ID" \
  -H "X-Router-Request-Id: stream-job-42" \
  -H "Content-Type: application/json" \
  -d '{"prompt":"…"}'
```

Payment metadata comes back in **response headers** rather than the body:

| Response header | Meaning |
| --- | --- |
| `X-Router-Payment-Id` | The ledger record id |
| `X-Router-Payment-Status` | `Issued` · `Settled` · `Failed` |
| `X-Router-Tx-Hash` | Settlement hash, when the merchant reported one |

Omitting `X-Router-Target-Url`, `X-Router-Delegation-Id` or `X-Router-Request-Id` is
`400 BCK.ROUTER.0001`.

`X-Router-*` headers are stripped in **both** directions — yours are not forwarded upstream, and any
the merchant returns are removed before you see them. So a merchant cannot forge a payment signal
that makes a free response look paid.

**Drain the response.** The idle timer (30s default) is re-armed by your client consuming the
stream, so a slow-but-healthy large transfer will not trip it — but an abandoned one will be killed,
and the connection held open in the meantime counts against your concurrency limit.

---

## Mode A — `POST /api/v1/router/payments`

The Router mints a signed credential; **you** call the merchant. Use it when the Router cannot be in
the request path — you need the raw connection, an exotic transport, or the merchant rejects a
relayed call.

It is strictly more work: you make the unpaid call, hand over the challenge, attach the credential,
re-send, and then close the ledger record yourself.

### 1 · Provoke the 402

Call the merchant with no payment. It answers `402` with its requirements:

- **x402 v1** — in the JSON body: `{ "x402Version": 1, "accepts": [...] }`
- **x402 v2** — base64 in the `PAYMENT-REQUIRED` **response header** (decode it to an object)
- **MPP** — the raw `WWW-Authenticate: Payment …` header value

### 2 · Mint the credential

```json
{
  "delegationId": "5e7481c3-…",
  "protocol": "x402",
  "resourceUrl": "https://agent.example/paid",
  "requestId": "order-1234",
  "target": { "x402Version": 1, "accepts": [ /* verbatim from the 402 */ ] }
}
```

| Field | Required | Notes |
| --- | --- | --- |
| `delegationId` | **yes** | |
| `protocol` | **yes** | `x402` or `mpp`. **Not auto-detected here** — unlike mode B, you must get this right |
| `target` | **yes** | x402 → `{ accepts, x402Version? }` (defaults to **2**; set `1` for x402-express). MPP → `{ challenge }`, the raw header value |
| `resourceUrl` | no | Absolute URL, recorded on the ledger |
| `requestId` | no | **Optional here**, unlike mode B. Still recommended |

Pass `target` **verbatim** from the 402. Do not normalise, reorder or re-encode it.

The response echoes the negotiated version, and `credential.name` follows from it — the request
above is v1, so this one comes back v1 with the v1 header:

```json
{
  "paymentId": "b1f9c2e4-…",
  "protocol": "x402",
  "x402Version": 1,
  "credential": { "transport": "header", "name": "X-PAYMENT", "value": "eyJ4NDAy…" },
  "settlement": { "recipient": "0x2096…", "amount": "1000", "asset": "USDC",
                  "network": "base", "approxCents": "1" },
  "status": "Issued"
}
```

Had you passed a v2 `target` (the default), the same call would return `"x402Version": 2` and
`"name": "PAYMENT-SIGNATURE"`.

### 3 · Attach it and re-send

Set an HTTP header named **`credential.name`** to **`credential.value`** on your original request
and send it again. The value is opaque — attach it verbatim, do not modify it.

| Protocol | `credential.name` |
| --- | --- |
| x402 v2 | `PAYMENT-SIGNATURE` |
| x402 v1 | `X-PAYMENT` |
| MPP | `Authorization` |

Read the name off the response rather than hardcoding it — that is why the field exists.

### 4 · Close the record

The merchant returns a settlement reference: `PAYMENT-RESPONSE` / `X-PAYMENT-RESPONSE` (x402) or
`Payment-Receipt` (MPP). Report it:

```bash
curl -sX POST "$NVM_API_URL/api/v1/router/payments/$PAYMENT_ID/settled" \
  -H "Authorization: Bearer $NVM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"txHash":"0xfc8af37b…"}'
```

Idempotent: re-reporting the **same** hash is a no-op. A **different** hash, or a record not in
`Issued`, is rejected with `409 BCK.ROUTER.0005`. Not needed in mode B — `/route` and `/proxy` close
the record themselves.

### Mode A caveats

- **Credentials expire.** The signed authorization has a validity window capped by the operator
  (one hour by default). Mint it when you are about to use it — if it lapses, the budget stays
  reserved and the record stays `Issued`.
- **On MPP, prefer mode B.** The Router is not in the request path, so it never sees the
  `Payment-Receipt`; closing the record means decoding the receipt yourself, which needs the MPP
  codec you were trying to avoid.

---

## Passing the merchant's own auth

Some services want payment *and* an account credential. Never put `NVM_API_KEY` in either slot:

- mode B → `headers: { "Authorization": "Bearer <merchant-token>" }`
- `/proxy` → `X-Router-Upstream-Authorization: Bearer <merchant-token>`

Note that a service which answers **`401`/`403` instead of `402`** wants authentication, not
payment. The Router cannot help — that service needs an account. See `discovery.md`.
