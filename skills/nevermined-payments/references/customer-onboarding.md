# White-label Customer Onboarding

How an **organization** provisions Nevermined accounts for *its own customers* — under its brand, without the customer ever creating a Nevermined login. Companion to **Track A · A8** in `SKILL.md`. Reflects the shipped contract (backend nvm-monorepo#2421; SDKs `payments`#413 / `payments-py`#253).

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
| **An existing account you don't own** | `202` | `{ consentRequired: true }` — **no key, no identity**; a consent email was sent to the owner |

The `202` case is deliberately opaque: you can't attach someone else's account to your org, and the response never reveals whether/who the account belongs to (no enumeration oracle). Retry with the same email once the owner approves the emailed challenge.

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
