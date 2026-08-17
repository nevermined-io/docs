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

**Only `0006` and `0007` are worth retrying automatically.** The rest are decisions; retrying them
unchanged produces the same answer.

### Two refusals that are not `BCK.ROUTER.*` at all

They guard the *caller* rather than the request, and they can end a run before a single payment is
attempted — so handle them even though neither carries a `BCK.ROUTER.*` code.

| | Code | Status | Applies to | Retry? |
| --- | --- | --- | --- | --- |
| **OAuth-minted key** | `BCK.OAUTH.0030` | 403 | `POST /delegation/create`, `POST /router/payments`, `POST /router/route`, `ALL /router/proxy` | No |
| **Consent lapsed** | `BCK.HTTP.412` (generic — see below) | 412 | Account-wide; `POST /delegation/create` is the one on this path | No |

**`403 BCK.OAUTH.0030`** — the key was minted through an OAuth consent ceremony (today,
`credits_purchase` or `account_access`; the guard keys on the binding, not the consent type, so a
future ceremony type is refused too) and may not touch the Router spend rails or create
Delegations: those routes sign from the account's full wallet, outside the narrow session-key policy
such a credential advertises. The fix is a **plain API key issued by the account owner**. No request
change and no other Router endpoint will work around it — do not retry.

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
so on the paying path, `0007` is the only code worth retrying at all.

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

**One documented exception to that rule:** the [`412 consent_required`](#consent-412) on
`POST /delegation/create` carries only the generic `BCK.HTTP.412`, so `code` identifies the status
but not the cause — `body.error` does. Keep `code` as your primary branch, and treat any
`BCK.HTTP.*` as "uncatalogued, read the body".

Error responses always reflect the **current** API shape; they are not version-pinned. Treat them as
latest-shape diagnostics and tolerate the code set growing over time.
