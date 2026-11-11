# Payment Plans

How to register agents and create payment plans programmatically using the Nevermined SDK.

## Plan Types

| Type | Description | Use Case |
|---|---|---|
| **Credits-based** | Prepaid credits, deducted per request | Per-request API billing |
| **Time-based** | Access for a fixed duration | Monthly/yearly subscriptions |
| **Pay-as-you-go** | Charged on every request, in crypto or by card ([recipes](#pay-as-you-go-plans)) | On-demand, no prepaid balance |
| **Trial** | Free limited access, one-time claim | Let users try your service |
| **Hybrid** | Credits with time expiry | e.g., 1000 credits valid for 30 days |

## Register Agent + Plan (Combined)

### TypeScript

```typescript
import { Payments } from '@nevermined-io/payments'

const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e'

async function main() {
  const payments = Payments.getInstance({
    nvmApiKey: process.env.NVM_API_KEY!,
    environment: 'sandbox'
  })

  const { agentId, planId } = await payments.agents.registerAgentAndPlan(
    // Agent metadata
    {
      name: 'My AI Assistant',
      description: 'A paid AI service',
      tags: ['ai', 'payments'],
      dateCreated: new Date()
    },
    // Agent interface — endpoints and agentDefinitionUrl are both optional.
    // Provide endpoints only when you want the Nevermined platform to enforce
    // route-level Additional Security on top of your library middleware.
    {
      endpoints: [{ POST: 'https://your-api.com/query' }]
    },
    // Plan metadata
    {
      name: 'Starter Plan',
      description: '100 requests for $10',
      dateCreated: new Date()
    },
    // Price: 10 USDC (6 decimals)
    payments.plans.getERC20PriceConfig(
      10_000_000n,
      USDC_ADDRESS,
      process.env.BUILDER_ADDRESS!
    ),
    // Credits: 100 requests, 1 credit each
    payments.plans.getFixedCreditsConfig(100n, 1n)
  )

  console.log(`Agent ID: ${agentId}`)
  console.log(`Plan ID: ${planId}`)
}

main().catch(console.error)
```

### Python

```python
import os
from payments_py import Payments, PaymentOptions
from payments_py.plans import get_erc20_price_config, get_fixed_credits_config

USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e'

def main():
    payments = Payments.get_instance(
        PaymentOptions(
            nvm_api_key=os.environ['NVM_API_KEY'],
            environment='sandbox'
        )
    )

    result = payments.agents.register_agent_and_plan(
        agent_metadata={
            'name': 'My AI Assistant',
            'description': 'A paid AI service',
            'tags': ['ai', 'payments']
        },
        # agent_api is required, but its `endpoints` and `agent_definition_url`
        # fields are optional: omit them for an open agent (no platform-side
        # route enforcement); include `endpoints` for Additional Security.
        agent_api={
            'endpoints': [{'POST': 'https://your-api.com/query'}]
        },
        plan_metadata={
            'name': 'Starter Plan',
            'description': '100 requests for $10'
        },
        price_config=get_erc20_price_config(
            10_000_000,
            USDC_ADDRESS,
            os.environ['BUILDER_ADDRESS']
        ),
        credits_config=get_fixed_credits_config(100, 1),
        access_limit='credits'
    )

    print(f"Agent ID: {result['agentId']}")
    print(f"Plan ID: {result['planId']}")

if __name__ == '__main__':
    main()
```

## Using the Nevermined App (No-Code)

You can also register agents and create plans through the [Nevermined App](https://nevermined.app) UI:

1. Go to [nevermined.app](https://nevermined.app) and sign in
2. Click "My agents" to register a new agent
3. Fill in metadata: name, description, tags
4. Register API endpoints (HTTP URLs for APIs, logical MCP URLs for MCP servers)
5. Create a payment plan: set pricing, credits, and duration
6. Link the plan to your agent and publish
7. Copy the `agentId` and `planId` for your integration

## Plan Configuration Details

### Credits Config

```typescript
// TypeScript
payments.plans.getFixedCreditsConfig(
  100n,  // Total credits in the plan
  1n     // Credits consumed per request
)
```

```python
# Python — both call sites work
payments.plans.get_fixed_credits_config(100, 1)
# or:
from payments_py.plans import get_fixed_credits_config
get_fixed_credits_config(
    100,  # Total credits in the plan
    1     # Credits consumed per request
)
```

### Variable Credits (Dynamic Pricing)

When using dynamic credits (a function instead of fixed value), configure the plan with a price range:

- Enable "Want to set a price range per request?" in the App
- Set min and max price per request
- If your code calculates credits outside the range, it gets capped to the configured limits

### Price Config

```typescript
// ERC-20 token payment (USDC on Base Sepolia)
payments.plans.getERC20PriceConfig(
  10_000_000n,           // Price in token smallest unit (10 USDC = 10 * 10^6)
  USDC_ADDRESS,          // Token contract address
  process.env.BUILDER_ADDRESS!  // Recipient wallet
)

// EURC stablecoin (defaults to Base Mainnet EURC if address omitted)
payments.plans.getEURCPriceConfig(10_000_000n, BUILDER_ADDRESS)

// Native token (e.g. ETH on Base)
payments.plans.getNativeTokenPriceConfig(10_000_000n, BUILDER_ADDRESS)

// Free plan (used for trials)
payments.plans.getFreePriceConfig()
```

## Fiat Plans (Stripe / Braintree / Visa)

Fiat plans use the `nvm:card-delegation` x402 scheme — subscribers enroll a card through the credit/debit card form (VGS) or as a Visa Agentic Token, and per-request charges are settled by the plan's provider. The active provider per plan is set by the seller's `fiatPaymentProvider` metadata (`'stripe'` | `'braintree'`).

> **Fiat amount units.** `getFiatPriceConfig` takes the amount in **6-decimal units** (the USDC convention used across the protocol) — `10_000_000n` = 10.00 USD — **NOT cents**. The server-side minimum is **$1.00** (`1_000_000n`); anything smaller is rejected with `BCK.PROTOCOL.0047`. (This is distinct from `spendingLimitCents` on a *delegation*, which really is in cents.)

```typescript
// TypeScript — $10.00 fiat, paid into the builder's wallet/account
const fiatPriceConfig = payments.plans.getFiatPriceConfig(
  10_000_000n,        // $10.00 — 6-decimal units (the USDC convention), NOT cents
  process.env.BUILDER_ADDRESS!,
  'USD'               // any ISO 4217 code Stripe accepts (USD, EUR, ...)
)

const { planId } = await payments.plans.registerPlan(
  { name: 'Fiat Starter', description: '100 requests for $10', dateCreated: new Date() },
  fiatPriceConfig,
  payments.plans.getFixedCreditsConfig(100n, 1n),
)
```

```python
# Python
fiat_price_config = payments.plans.get_fiat_price_config(
    10_000_000,  # $10.00 — 6-decimal units, NOT cents
    os.environ["BUILDER_ADDRESS"],
    "USD",
)
```

When subscribers fetch an x402 token for a fiat plan, the supported flow is **create-first**: create the delegation, then reuse it by `delegationId`.

- **Create the delegation** (`provider` + `currency` required), e.g. for a card enrolled through the Nevermined App's credit/debit card form (Stripe- or Braintree-priced plans alike; the plan picks the PSP at charge time):
  ```ts
  const delegation = await payments.delegation.createDelegation({
    provider: 'vgs', providerPaymentMethodId: 'CRD…', spendingLimitCents: 1000, durationSecs: 86400, currency: 'usd'
  })
  ```
  `providerPaymentMethodId` is the enrolled card's `CRD…` id: its `id` in `payments.delegation.listPaymentMethods()` (filter with `{ provider: 'vgs' }`).
- **Reuse it by `delegationId`** (works for all networks, including Visa):
  ```ts
  delegationConfig: { delegationId: delegation.delegationId }
  ```

The SDK auto-resolves `nvm:card-delegation` from the plan's `priceConfig`. Passing the creation fields inline in `delegationConfig` (a `delegationConfig` without `delegationId`) is **deprecated** and emits a runtime deprecation warning — create the delegation first. For **Visa** plans, only the reuse path works — Visa delegations must be created in the Nevermined webapp (browser-only WebAuthn ceremony) and reused from the SDK by ID. Attempting `create_delegation(provider='visa', ...)` from the SDK is rejected with `BCK.VISA.0014` because the required `consumerPrompt` and `assuranceData` blobs can only be produced in-browser.

## Pay-As-You-Go Plans

A pay-as-you-go plan charges the subscriber on every request instead of selling a balance of credits up front. Its price config decides **how** the subscriber pays, so pick it by rail:

| Rail | Price config | Credits config |
|---|---|---|
| Crypto | `await payments.plans.getPayAsYouGoPriceConfig(amount, receiver[, tokenAddress])` | `payments.plans.getPayAsYouGoCreditsConfig()` |
| Card | `await payments.plans.getFiatPayAsYouGoPriceConfig(amount, receiver[, currency])` (1.15.0+), or the manual `{ ...payments.plans.getFiatPriceConfig(amount, receiver[, currency]), templateAddress: await payments.contracts.getPayAsYouGoTemplateAddress() }` | `payments.plans.getPayAsYouGoCreditsConfig()` |

> **`getPayAsYouGoPriceConfig` always builds a crypto price** (`isCrypto: true`), whatever token you pass. Do not use it for a plan that subscribers pay by card. The same holds for Python's `get_pay_as_you_go_price_config`.

What makes either plan pay-as-you-go is the **PayAsYouGoTemplate** address in its price config: the API reports `billingModel: 'pay-as-you-go'` only for a plan registered on that template. `getPayAsYouGoPriceConfig` (crypto) and `getFiatPayAsYouGoPriceConfig` (card) set it for you; a plain `getFiatPriceConfig` does not, so the manual card recipe adds it.

### Crypto pay-as-you-go

```typescript
// TypeScript — async: fetches the PayAsYouGoTemplate address from the API for you
const paygPriceConfig = await payments.plans.getPayAsYouGoPriceConfig(
  1_000_000n,                    // amount per request (1 USDC, 6 decimals); the API adds its fees at registration
  process.env.BUILDER_ADDRESS!,
  USDC_ADDRESS,                  // optional — defaults to the native token
)
const paygCreditsConfig = payments.plans.getPayAsYouGoCreditsConfig()

const { planId } = await payments.plans.registerPlan(
  { name: 'PAYG (USDC)', description: '1 USDC per call', dateCreated: new Date() },
  paygPriceConfig,
  paygCreditsConfig,
)
```

```python
# Python — sync; fetches (and caches) the PayAsYouGoTemplate address for you
payg_price_config = payments.plans.get_pay_as_you_go_price_config(
    1_000_000, os.environ["BUILDER_ADDRESS"], USDC_ADDRESS
)
payg_credits_config = payments.plans.get_pay_as_you_go_credits_config()
```

### Card pay-as-you-go

One call builds the card price: a fiat price on the PayAsYouGoTemplate, whose address it fetches for you (`@nevermined-io/payments` 1.15.0+, `payments-py` 1.20.0+).

```typescript
// TypeScript — isCrypto: false: the subscriber's card is charged on every request
const paygCardPriceConfig = await payments.plans.getFiatPayAsYouGoPriceConfig(
  1_000_000n,                    // $1.00 per request — 6-decimal units, NOT cents
  process.env.BUILDER_ADDRESS!,
)
const paygCreditsConfig = payments.plans.getPayAsYouGoCreditsConfig()

const { planId } = await payments.plans.registerPlan(
  { name: 'PAYG (card)', description: '$1 per call', dateCreated: new Date() },
  paygCardPriceConfig,
  paygCreditsConfig,
)
```

```python
# Python — is_crypto=False: the subscriber's card is charged on every request
payg_card_price_config = payments.plans.get_fiat_pay_as_you_go_price_config(
    1_000_000,  # $1.00 per request — 6-decimal units, NOT cents
    os.environ["BUILDER_ADDRESS"],
)
payg_credits_config = payments.plans.get_pay_as_you_go_credits_config()
```

The same price config by hand, for an older SDK or when you already hold the template address:

```typescript
// TypeScript (any version)
const paygCardPriceConfig = {
  ...payments.plans.getFiatPriceConfig(1_000_000n, process.env.BUILDER_ADDRESS!),
  // The PayAsYouGoTemplate is what makes this fiat price pay-as-you-go
  templateAddress: await payments.contracts.getPayAsYouGoTemplateAddress(),
}
```

```python
# Python (payments-py 1.19.0+; on older versions the template address is
# payments.contracts_api.contracts.pay_as_you_go_template)
payg_card_price_config = payments.plans.get_fiat_price_config(
    1_000_000,  # $1.00 per request — 6-decimal units, NOT cents
    os.environ["BUILDER_ADDRESS"],
).model_copy(
    # The PayAsYouGoTemplate is what makes this fiat price pay-as-you-go
    update={"template_address": payments.contracts.get_pay_as_you_go_template_address()}
)
```

A card pay-as-you-go plan:

- is paid **per request through an x402 card delegation** (`nvm:card-delegation`): each settle charges the card the plan price and reports `billingModel: 'pay-as-you-go'` with the charge in `orderTx`;
- is **not sold through checkout**, by design: there is no balance to buy up front, so `orderFiatPlan` fails with `BCK.STRIPE.0041` (`BCK.BRAINTREE.0019` on Braintree checkout);
- keeps the fiat price floor: the per-request price must be at least **$1.00** (`1_000_000n`), otherwise registration fails with `BCK.PROTOCOL.0047`.

> **`getFiatPriceConfig` + `getPayAsYouGoCreditsConfig` alone is NOT a pay-as-you-go plan.** Without the template address it registers a one-credit **credits** plan: it reports `billingModel: 'credits'`, and each purchase buys a single credit.

## Example Plans

| Plan | Price | Credits | Duration | Use Case |
|---|---|---|---|---|
| Starter | $10 USDC | 100 | None | Small-scale API testing |
| Pro | $49 USDC | 1000 | 30 days | Production usage |
| Unlimited | $99 USDC | Unlimited | 30 days | High-volume access |
| Trial | Free | 10 | 7 days | Try before you buy |
| Fiat Starter | $10.00 (Stripe) | 100 | None | Card-paying subscribers |
| PAYG (crypto) | $1 USDC / call | No balance: charged per call | None | Pay-per-call in stablecoins |
| PAYG (card) | $1.00 / call (card) | No balance: charged per call | None | Pay-per-call by card, no checkout |
