# White-label Customer Onboarding

How an **organization** provisions Nevermined accounts for *its own customers* — under its brand, without the customer ever creating a Nevermined login. Companion to **Track A · A8** in `SKILL.md`.

> **Admin-only.** Authenticate with your **organization admin** API key. One endpoint does both member and customer provisioning — the outcome is the `as` field, not a second route.

## The endpoint

```
POST /api/v1/organizations/account
Authorization: Bearer <ORG_ADMIN_API_KEY>
Content-Type: application/json

{ "email": "customer@example.com", "as": "customer" }
```

`as: "customer"` provisions a **customer** (no member seat, recorded in the Customers CRM, returns a usable scoped key). Omit `as` (or `as: "member"`) for the unchanged member-enrolment behaviour.

## Three outcomes (by email provenance)

| The email is… | HTTP | `walletResult` |
|---|---|---|
| **New** | `201` | `{ nvmApiKey, userId, userWallet, isCustomer: true, customerRecorded }` — the **usable** key |
| **Already your customer** (renewal) | `201` | same shape — the scoped key re-issued |
| **An existing account you don't own** | `202` | `{ consentRequired: true }` — **no key, no identity**; a consent email goes to the owner, at most once every 24 hours; its link works for one hour |

The `202` case carries no identity: you can't attach someone else's account to your org, and the response never discloses who owns it. Retry with the same email once the owner approves the emailed challenge.

**Rate limit.** Plan for 120 calls per hour per organization, counted across all of its API keys, with member invites included. Every call that passes authentication and validation counts, including one that then fails, so back off on a 5xx instead of retrying tightly. Past the limit the call returns `429` with `Retry-After` (seconds) and provisions nothing. The hour starts at the first counted call and the whole budget returns when it ends: wait `Retry-After` before retrying, and spread a bulk import over several hours.

**Consent limit.** With `as: "customer"`, a limit of 20 consent emails per hour per organization, one for each existing account you don't own. A repeat call for an email you sent a consent email to in the last 24 hours sends no new email and does not count towards this limit; below the limit it answers `202`. The link in a consent email works for one hour, so an owner who misses it gets a new one only after 24 hours. The limit covers the last 60 minutes, so it frees one email at a time. Past it, onboarding returns `429` with `Retry-After` and issues no key for any email that is neither already your customer nor an owner who approved your consent request, whether or not it has an account. Renewing your customers still works. An owner who approved consent can usually still be onboarded; if one gets a `429`, retry after `Retry-After`. Your concurrent `as: "customer"` calls also count while they wait for an answer, so run an import with a few calls at a time; a call refused for that reason gets `Retry-After: 30`. `message` says which limit was reached.

Through the SDK, a refusal is a `PaymentsError` whose `code` is `BCK.HTTP.429`. The SDK does not expose `Retry-After`: call the REST endpoint if you need the exact wait, or back off for several minutes.

```bash
# New / returning customer → usable key
curl -s -XPOST -H "Authorization: Bearer $ORG_ADMIN_API_KEY" -H "Content-Type: application/json" \
  -d '{"email":"customer@example.com","as":"customer"}' \
  https://api.sandbox.nevermined.app/api/v1/organizations/account
# → 201 { "success": true, "message": "Customer onboarded",
#         "walletResult": { "nvmApiKey": "sandbox:...", "userId": "...", "userWallet": "0x...",
#                           "isCustomer": true, "customerRecorded": true } }

# Existing non-owned account → consent pending (opaque)
# → 202 { "success": true, "message": "Account already exists — a consent email was sent ...",
#         "walletResult": { "consentRequired": true } }
```

## SDK

The SDKs wrap the same call and normalise the two shapes.

```typescript
// TypeScript — @nevermined-io/payments
const result = await payments.organizations.onboardCustomer('customer@example.com')
if (result.consentRequired) {
  // 202: retry once the owner approves the emailed challenge.
} else {
  // result.nvmApiKey is the usable, scoped key. Act for the customer with it:
  const customer = Payments.getInstance({ nvmApiKey: result.nvmApiKey, environment: 'sandbox' })
}
```

```python
# Python — payments_py
result = payments.organizations.onboard_customer("customer@example.com")
if result.consent_required:
    ...  # retry after the owner consents
else:
    customer = Payments.get_instance(
        PaymentOptions(nvm_api_key=result.nvm_api_key, environment="sandbox")
    )
```

## The credential

The key returned for a customer is intentionally **narrow**:

- **Can:** purchase plans + redeem credits (`order`, `burn`) — everything to pay for and use your agents on the customer's behalf (Track A · A4/A5).
- **Cannot:** register agents or mint credits — builder-side capabilities stay with your org's members.
- **Short-lived** (~30 days) and **revocable.** Store it server-side; re-onboard the same email to refresh it. Never expose it to the browser.

## Quick reference

| Step | Method + path | Auth |
|---|---|---|
| Onboard a customer | `POST /organizations/account` body `{ email, as: "customer" }` | Org admin key |
| Act for the customer | re-init the SDK with `walletResult.nvmApiKey`, then A4/A5 | The scoped customer key |

The UI counterpart (embed checkout/enrollment as signed iframes) is `POST /embed/session` — see `references/autonomous-operations.md` §3.
