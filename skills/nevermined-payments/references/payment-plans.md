# Payment Plans

How to register agents and create payment plans programmatically using the Nevermined SDK.

## Plan Types

| Type | Description | Use Case |
|---|---|---|
| **Credits-based** | Prepaid credits, deducted per request | Per-request API billing |
| **Time-based** | Access for a fixed duration | Monthly/yearly subscriptions |
| **Pay-as-you-go** | Settle in USDC per request | On-demand, no prepaid balance |
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
    // Agent interface
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

Fiat plans use the `nvm:card-delegation` x402 scheme — subscribers enroll a card via Stripe, Braintree, or the Visa Trusted Agent Protocol, and per-request charges are settled by the configured provider. The active provider per plan is set by the seller's `fiatPaymentProvider` metadata (`'stripe'` | `'braintree'` | `'visa'`).

> **Fiat amount units.** `getFiatPriceConfig` takes the amount in **6-decimal units** (the USDC convention used across the protocol) — `10_000_000n` = $10.00 — **NOT cents**. The server-side minimum is **$1.00** (`1_000_000n`); anything smaller is rejected with `BCK.PROTOCOL.0047`. (This is distinct from `spendingLimitCents` on a *delegation*, which really is in cents.)

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

- **Create the delegation** (`provider` + `currency` required), e.g. for Stripe / Braintree:
  ```ts
  const delegation = await payments.delegation.createDelegation({
    provider: 'stripe', providerPaymentMethodId: 'pm_…', spendingLimitCents: 1000, durationSecs: 86400, currency: 'usd'
  })
  ```
- **Reuse it by `delegationId`** (works for all networks, including Visa):
  ```ts
  delegationConfig: { delegationId: delegation.delegationId }
  ```

The SDK auto-resolves `nvm:card-delegation` from the plan's `priceConfig`. Passing the creation fields inline in `delegationConfig` (a `delegationConfig` without `delegationId`) is **deprecated** and emits a runtime deprecation warning — create the delegation first. For **Visa** plans, only the reuse path works — Visa delegations must be created in the Nevermined webapp (browser-only WebAuthn ceremony) and reused from the SDK by ID. Attempting `create_delegation(provider='visa', ...)` from the SDK is rejected with `BCK.VISA.0014` because the required `consumerPrompt` and `assuranceData` blobs can only be produced in-browser.

## Pay-As-You-Go Plans

PAYG plans grant exactly **one credit per purchase** — every call requires the subscriber to re-order the plan. Use the dedicated helpers:

```typescript
// TypeScript
const paygPriceConfig = await payments.plans.getPayAsYouGoPriceConfig(
  1_000_000n,                    // amount per call (1 USDC, 6 decimals)
  process.env.BUILDER_ADDRESS!,
  USDC_ADDRESS,                  // optional — defaults to native token
)
const paygCreditsConfig = payments.plans.getPayAsYouGoCreditsConfig()

const { planId } = await payments.plans.registerPlan(
  { name: 'PAYG', description: '$1 per call', dateCreated: new Date() },
  paygPriceConfig,
  paygCreditsConfig,
)
```

```python
# Python
payg_price_config = payments.plans.get_pay_as_you_go_price_config(
    1_000_000, os.environ["BUILDER_ADDRESS"], USDC_ADDRESS
)
payg_credits_config = payments.plans.get_pay_as_you_go_credits_config()
```

## Example Plans

| Plan | Price | Credits | Duration | Use Case |
|---|---|---|---|---|
| Starter | $10 USDC | 100 | None | Small-scale API testing |
| Pro | $49 USDC | 1000 | 30 days | Production usage |
| Unlimited | $99 USDC | Unlimited | 30 days | High-volume access |
| Trial | Free | 10 | 7 days | Try before you buy |
| Fiat Starter | $10.00 (Stripe) | 100 | None | Card-paying subscribers |
| PAYG | $1 USDC / call | 1 per purchase | None | Pay-per-call without prepaid balance |
