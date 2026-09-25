# Errors and guardrails

The Router signs payments from your wallet in response to instructions written by a merchant nobody
vetted. It is deliberately suspicious.

**A refusal is the system working.** Before you widen a cap or drop an idempotency key to make an
error go away, read what it was protecting you from. An autonomous agent that treats guardrails as
obstacles is exactly the failure mode this design exists to prevent.

## Every Router code

| Code | Status | Meaning | Retry? |
| --- | --- | --- | --- |
| `BCK.ROUTER.0001` | 400 | Bad input: unsupported protocol, malformed/empty challenge, no fundable option, recipient outside the Delegation's scope, non-allowlisted asset, wrong-provider Delegation, missing `delegationId`. **`details` names the specific problem — read it** | No |
| `BCK.ROUTER.0002` | 409 | This `requestId` already minted a payment. The original `paymentId` is in the response | No |
| `BCK.ROUTER.0003` | 402 | Delegation over cap, expired, exhausted, or revoked | No — **stop** |
| `BCK.ROUTER.0004` | 404 | No Router payment with that id belongs to you | No |
| `BCK.ROUTER.0005` | 409 | Payment not settleable. Only `Issued` → `Settled`; same hash is a no-op, a different hash is rejected | No |
| `BCK.ROUTER.0006` | 500 | Transient failure building the payments summary | **Yes** |
| `BCK.ROUTER.0007` | 429 | Too many concurrent routed requests in flight | **Yes**, after backoff |
| `BCK.ROUTER.0008` | 403 | Legacy API key — create a new one | No |
| `BCK.ROUTER.0009` | 402 | Wallet doesn't hold enough of the asset on the target network. **Nothing was signed** | No — **stop** |
| `BCK.ROUTER.0010` | 500 | Internal: the rail reported a charge amount that isn't a non-negative integer, so the Router can't reserve anything against the cap | No — **never blind-retry** |
| `BCK.ROUTER.0011` | 402 | Card rail: the charge needs cardholder 3-D Secure, and an agent has no browser to complete it. Nothing was charged and the seller got no usable credential. | No — **needs a human** |
| `BCK.ROUTER.0012` | 400 | The seller's 402 advertises an EIP-712 domain its own settlement token does not sign under, so the Router refuses to sign. Nothing signed, charged or reserved — an authorization under the wrong domain is unspendable anyway. Seller-side bug | No — **report it, pay elsewhere** |
| `BCK.ROUTER.0013` | 500 | Nevermined holds no EIP-712 signing domain for the token the funding filter selected — a gap in OUR canonical table, not the seller's bug and not your request. Nothing signed, charged or reserved | No — **report it to Nevermined** |
| `BCK.ROUTER.0014` | 409 | The target is a cataloged Nevermined service, whose upstream URL is deliberately hidden. The Router refuses to pay it by raw URL — mode A and a raw mode-B target both put the merchant's host on your wire, defeating the broker. The match is by HOST, so a co-hosted endpoint that is not itself listed is refused too — ask the vendor to list it, or contact Nevermined; hosts with no cataloged service are unaffected. | No — **use the slug**: `POST /router/route` with a `slug`, or `POST /router/svc/<catalog-slug>` |
| `BCK.ROUTER.0018` | 402 | Per-call `maxTotalCents` is below the fee-inclusive, whole-cent cap reserve. No charge or cap reserve, though signing may already have occurred; parse JSON-string `params` for `requiredTotalCents`. | No — raise the ceiling only if this call is intended; reuse the same `requestId` |
| `BCK.ROUTER.0019` | 400 | Streaming surfaces only (`/proxy` · `/svc`; `/route` returns the envelope status with `body: null`). A cataloged service returned a **non-retryable** status — a 4xx client error, or a rare 3xx the Router does not follow (a 402 re-challenge and a 429 are **not** this code). The upstream body is withheld (it can name the merchant host); this typed body preserves the **real** upstream status (on the HTTP status line and in JSON-string `params`). Build a valid request from the service's Catalog detail (`requestExample` / `responseFields`). | No — **fix the request first**, then retry with a fresh `requestId` |
| `BCK.ROUTER.0020` | 502 | Streaming surfaces only (`/proxy` · `/svc`; `/route` returns the envelope status with `body: null`). A cataloged service returned a server error (5xx) or rate-limited (429) — an upstream/transient condition, not your request. Body **and** headers are withheld (host oracle, including `Retry-After`); this typed body preserves the **real** status. The Router charges **no routing fee** for an undelivered call; whether the merchant leg itself charged is reported as `merchantSettlementObservedAt` (x402 only — `null` on a clean settlement and on both MPP rails, so `null` is not proof of no charge; read alongside `status`) on `GET /api/v1/router/payments`. | **Yes**, with backoff — reuse the same `requestId` only if no `X-Router-Payment-Id` came back; if one did, a payment is already recorded, so use a NEW id and reconcile via `GET /router/payments` |
| `BCK.ROUTER.0021` | 400 | The rail this service advertised carries its payment credential in a header you are **already using**. On the MPP rails that header is `Authorization`, which is also where your own merchant auth goes (`headers.Authorization` on `/route`, `X-Router-Upstream-Authorization` on `/proxy` · `/svc`). Rather than silently dropping yours on the paid hop, the Router refuses: **nothing was minted, no cap was reserved and no money moved**. JSON-string `params` names the contested header. | No — **name the header the service documents** for its credential: `credentialHeader` in the `/route` body, or the `X-Router-Credential-Header` request header on `/proxy` · `/svc` (a separate `Payment` header is the common one). If the service documents none, it wants the credential in `Authorization` itself and cannot also take your bearer there: drop your own auth for that call, or pay it over an x402 endpoint (whose credential travels in `PAYMENT-SIGNATURE`). Retrying unchanged fails identically |
| `BCK.ROUTER.0022` | 500 | Server-side service selection is not wired on this deployment (a configuration fault, not your request) — nothing was ranked or charged. Only reachable on a misconfigured deployment; never in a healthy environment. | **Yes**, later — it is a transient/config condition on our side; if it persists, quote `correlationId` when reporting it |
| `BCK.ROUTER.0023` | 502 | On an autoPay `POST /router/select` (or `/router/commerce/select`): the chosen service was paid but the downstream call did not complete cleanly **after** the payment was created, so the charge outcome is **indeterminate** — the merchant leg may or may not have settled. JSON-string `params` carries the `paymentId` when one was created. | No — do **not** retry with a fresh `requestId` (that could double-charge). Reconcile via `GET /api/v1/router/payments`, then reuse the **same** `requestId` to retry safely |
| `BCK.ROUTER.0026` | 415 | Streaming surfaces only (`/proxy` · `/svc`): the request body cannot be forwarded. They forward a body only when it is JSON (`application/json`) or a URL-encoded form (`application/x-www-form-urlencoded`), and never on a `GET` or `HEAD`; anything else — a `multipart/form-data` file upload above all, but also `text/plain`, `application/octet-stream` or a vendor `+json` type — would have reached the service **empty**, so the Router refuses it instead. **Nothing was minted, no budget was reserved and no money moved.** `params.contentType` names the refused type | No — for a body on `GET`/`HEAD`, send none (or use `POST`/`PUT` if the service takes one); otherwise resend the body as JSON or a URL-encoded form if the service accepts one. A service that only takes a file upload cannot be paid through the Router yet. Retrying unchanged fails identically |

**Only `0006`, `0007` and `0020` are worth retrying automatically.** The rest are decisions; retrying them
unchanged produces the same answer.

### Two refusals that are not `BCK.ROUTER.*` at all

They guard the *caller* rather than the request, and they can end a run before a single payment is
attempted — so handle them even though neither carries a `BCK.ROUTER.*` code.

| | Code | Status | Applies to | Retry? |
| --- | --- | --- | --- | --- |
| **OAuth-minted key** | `BCK.OAUTH.0030` | 403 | `POST /delegation/create`, `POST /router/payments`, `POST /router/route`, `ALL /router/proxy`, `ALL /router/svc/<slug>` | No |
| **Consent lapsed** | `BCK.HTTP.412` (generic — see below) | 412 | Account-wide; `POST /delegation/create` is the one on this path | No |

**`403 BCK.OAUTH.0030`** — the key was minted through an OAuth consent ceremony (today
`credits_purchase`, `account_access` or `commerce`; the guard keys on the binding, not the consent
type, so a future ceremony type is refused too) and may not touch the Router spend rails or create
Delegations: those routes sign from the account's full wallet, outside the narrow session-key policy
such a credential advertises. For a `credits_purchase` or `account_access` key the fix is a **plain
API key issued by the account owner** — no request change and no other Router endpoint will work
around it, do not retry. A **`commerce`** key is the one exception: it spends through
`POST /api/v1/router/commerce/route`, which takes no `delegationId` and derives the Delegation from
the grant the user approved (sending one is refused with `400 BCK.OAUTH.0034`).

<a id="consent-412"></a>
**`412 {"error":"consent_required","outdated":[…]}`** — the account's legal-document consent has
lapsed, and `POST /delegation/create` is blocked until a human accepts. ⚠️ **`code` alone will not
identify it.** It is deliberately not an `NVMException`, so it has no `BCK.LEGAL_DOCS.…` code of its
own — the error filter stamps the generic **`BCK.HTTP.412`**, which restates the status and says
nothing about the cause. Branch on **`body.error === "consent_required"`**; `body.outdated[]` names
the document slugs (`terms`, `privacy`). Report it and stop: an endpoint to accept exists and takes
your API key, but **accepting terms is the account holder agreeing to be bound by them — consent you
have no standing to give on their behalf.** Details in `bootstrap.md`.

Note the same normalisation applies to any other bare `HttpException` you might hit (a
`ValidationPipe` 400, for instance): the envelope is there, but `code` reads `BCK.HTTP.<status>`
rather than a catalogued `BCK.ROUTER.*`. **A `BCK.HTTP.*` code means "no catalogued code for this" —
look at the rest of the body.**

### `0011` — the 402 that needs a human, not a retry

Card rail only. The issuer demands **3-D Secure / SCA** before the charge can be used, and the Router
has no human at a browser to complete it. **Nothing was charged, and the seller never received a
usable credential** — the one Stripe created cannot be charged while it awaits authentication.

Do **not** auto-retry. 3DS is often mandated per charge by industry rules, so every attempt
re-demands it and mints another single-use card credential that is then abandoned — each expiring on
its own at `min(the merchant's quoted expiry, your Delegation's expiry, 89 days)`. A later attempt
*may* succeed, since whether authentication is demanded is decided per charge by the issuer, the card
networks and Stripe's risk checks — but treat that as a human decision, not a loop.

It is distinct from both other 402s: `0003` is your cap, `0009` is a card refused for lack of funds.
Here the card is fine; it simply has not been authenticated for this charge.

### `0010` — the 500 you must not retry

`0006` and `0010` are both 500s and behave in opposite ways, so "retry 5xx" is the wrong reflex
here. Note also that `0006` is raised **only by the payments summary read**, never by a payment —
so on the paying path, `0007` and `0020` are the codes worth retrying (with backoff).

`0010` means a payment handler reported a settlement amount in cents that isn't a non-negative
integer, so the routing-fee arithmetic can't compute what to reserve. It deliberately fails rather
than defaulting to zero — reserving nothing would let the payment through free.

What that leaves behind is the important part:

- **No budget was reserved and no payment record was written.**
- **But a payment credential WAS already minted**, because the fee is quoted after the signing step.
- **Therefore your `requestId` cannot protect you.** Idempotency is enforced against the payment
  record, and there is no record — so a retry is treated as a brand-new purchase and mints a
  **fresh** credential.
- The cause is a deterministic defect in that rail's `approxCents` derivation, not a transient
  blip, so the retry fails in exactly the same way.

**How much that actually costs you depends on the rail.** On the crypto rails the credential never
leaves the Router process on this path, so no funds can move and nothing is at risk. On the card
rail it is a Stripe Shared Payment Token that is left **stranded**: there is no revoke path, so it
stands until `min(the merchant challenge's expiry, your Delegation's expiry, 89 days)`. You cannot
clean it up from the outside.

**Seeing `0010` at all is a Nevermined-side regression.** No rail emits a non-numeric amount today,
so this is a bug to report, not a condition to handle. Report it to the human. Do not loop.

Catalog codes: `BCK.CATALOG.0001` (404, unknown slug — case-sensitive), `BCK.CATALOG.0002` (500,
transient, retryable), `BCK.CATALOG.0003` (400, bad `protocol` filter).

## The four rules for an autonomous buyer

**1. `0003` and `0009` are stop conditions.** "Out of budget" and "out of money". Report them to the
human and halt that line of work. They are not transient and they are not negotiable.

**2. Never widen a Delegation, and never create a second one, to escape a refusal.** The cap is the
user's decision; the refusal is that decision taking effect. Minting a fresh Delegation to get past
an exhausted one defeats the entire mechanism — it is the single worst thing you can do with this
API. If more budget is genuinely warranted, that is a question for the human, not a step in your
retry loop.

**3. One `requestId` per logical purchase**, reused across retries of that purchase. A fresh UUID
per HTTP attempt is how an agent double-spends.

**4. Check what you actually spent.** Per call, `fee.capChargedCents` — **not**
`settlement.approxCents`, which is only the merchant leg and excludes Nevermined's routing fee. For
spend to date, `GET /api/v1/delegation/{id}` → `amountSpentCents`, because `capChargedCents` is the
reserve at mint and a failed mode-B hop gives the fee half back. Budget is debited in whole cents
**rounded up**, so a long loop of sub-cent calls burns a cent each — the arithmetic that says "1000
calls at $0.001 = $1.00" is wrong here; it is $10.00. See `paying.md` for the `fee` object.

## Distinguishing the two 402s

They look alike and mean opposite things:

| | `BCK.ROUTER.0003` | `BCK.ROUTER.0009` |
| --- | --- | --- |
| **What failed** | The *authorization* — cap, expiry, status | The *funds* — wallet balance |
| **Fix** | A human decides whether to raise the budget | Fund the wallet on the target network |
| **Check with** | `GET /api/v1/delegation/{id}` → `remainingBudgetCents`, `expiresAt`, `status` | Wallet balance at `providerPaymentMethodId` on that chain |

They are independent: you can be well inside your cap with an empty wallet, or hold plenty of USDC
against an expired Delegation.

**`0009` does not tell you which address it checked.** That is deliberate, and it means a stale
cached address looks identical to an unfunded one. Always re-read `providerPaymentMethodId` from the
live Delegation before concluding anything.

**Delegations expire silently.** An agent that worked yesterday and fails today with `0003` has very
often just aged out. Check `expiresAt` first; it looks exactly like a broken rail until you do.

## Reading a `BCK.ROUTER.0001`

It is the catch-all for "the Router will not pay this", and the **`details`** field names which
check tripped. Common causes, in rough order:

- **No fundable option in the 402.** Every advertised option was on an unfunded network, in an
  unsupported asset, or used a scheme other than `exact`. A mixed-chain 402 is fine as long as *one*
  option survives — this only fires when none does. **Check the environment first:** a deployment
  funds exactly one x402 network — sandbox `base-sepolia`, live `base` — so a `base` merchant is
  simply unpayable from sandbox and vice versa. That is the single most common cause here, and it
  looks like a broken merchant. See `bootstrap.md`.
- **Non-allowlisted MPP asset.** Fail-closed per chain. If MPP fails with `0001` where x402 works,
  check this first — the rails are configured independently. **On a deployment where the MPP rail
  is simply not enabled this is the expected result for _every_ MPP service**, whatever the
  service. It says nothing about the merchant, and no amount of trying other MPP services will
  find one that works. Switch to `protocol=x402`, or ask the operator to enable the rail.
- **Recipient outside the Delegation's scope**, when it carries an `allowedRecipients` list.
- **Wrong Delegation provider** — a card Delegation on a stablecoin rail or vice versa.
- **MPP `splits`** — see below.
- **Missing `delegationId`**, or a missing `X-Router-*` header on `/proxy`.

Retrying does not help. Either fix the input or pick a different service.

## What the Router refuses outright

### Splits

An MPP `charge` can name a primary recipient *and* extra payout recipients. Only the primary is ever
validated against your Delegation, so honouring splits would move real funds to addresses nobody
checked. **Any split-bearing challenge is rejected outright** — unconditionally, whether or not your
Delegation restricts recipients. The Router refuses the whole thing rather than paying the part it
can vouch for.

### Internal targets

The Router makes server-side requests to URLs you supply, so it will not be pointed at
infrastructure you should not reach. Loopback, private (RFC 1918), link-local and cloud-metadata
addresses are blocked — **both literal IPs and public hostnames that resolve to internal
addresses**, so DNS rebinding does not get around it. The connection is then pinned to the address
that was validated, so it cannot be swapped underneath.

Operators can lift this for local development with `ROUTER_ALLOW_PRIVATE_TARGETS=true`. It should
never be on in a shared environment.

### Redirects

**Not followed at all**, and the `location` header is stripped from the relayed response. A merchant
cannot bounce the Router toward an internal target, and cannot hand your client one either. If you
need the redirect target, resolve it yourself and route the final URL.

### Forged payment signals

`X-Router-*` headers are stripped in both directions, so an upstream cannot fabricate a payment
header that makes a free response look paid.

### Signed-vs-approved divergence

After signing an MPP credential the Router decodes what it actually produced and compares it against
the challenge it validated. On any divergence the credential is discarded and never leaves the
process — a merchant cannot get one thing approved and a different thing signed.

## Relay limits (mode B)

| Limit | Default | Env var |
| --- | --- | --- |
| Concurrent routed requests per user | 10 | `ROUTER_MAX_CONCURRENT_PER_USER` |
| Idle time on a streamed response | 30s | `ROUTER_STREAM_IDLE_MS` |
| Total time on a streamed response | 5 min | `ROUTER_STREAM_MAX_MS` |
| Relayed body size | 100 MB | `ROUTER_MAX_RELAY_BYTES` |

Exceeding concurrency gives `429 BCK.ROUTER.0007`, which **is** retryable — let calls finish and
back off. Do not respond by fanning out harder.

The idle timer is re-armed by your client draining the response, so a slow-but-healthy large
transfer will not trip it. An abandoned stream will be, and holds a concurrency slot until it is.

## Error envelope

Errors carry a structured body — branch on `code`, not on message text:

```json
{ "code": "BCK.ROUTER.0003", "category": "business", "httpStatus": 402,
  "message": "Delegation budget exceeded, expired, or inactive",
  "hint": "…", "correlationId": "…" }
```

`hint` is written for a human reading a log. `details`, when present, names the specific check that
tripped — that is the field worth logging on a `0001`.

`params`, when present, is a JSON **string** on the wire: parse it with `JSON.parse` before reading
`requiredTotalCents`. For `0018`, `requiredTotalCents`, `merchantCents`, `feeCents` and the echoed
`maxTotalCents` are decimal strings. A refused quote can follow credential signing: the card rail
may mint an expiring SPT, and Tempo may consume a custodial signature. Do not use `0018` for free
price discovery.

**One documented exception to that rule:** the [`412 consent_required`](#consent-412) on
`POST /delegation/create` carries only the generic `BCK.HTTP.412`, so `code` identifies the status
but not the cause — `body.error` does. Keep `code` as your primary branch, and treat any
`BCK.HTTP.*` as "uncatalogued, read the body".

Error responses always reflect the **current** API shape; they are not version-pinned. Treat them as
latest-shape diagnostics and tolerate the code set growing over time.
