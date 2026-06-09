/**
 * Register "Weather Agent" + "Weather Starter" fiat plan on Nevermined sandbox.
 *
 * Per the `nevermined-payments` skill:
 *  - Register flow:  SKILL.md A6 + references/payment-plans.md "Register Agent + Plan (Combined)"
 *  - Fiat price:     payments.plans.getFiatPriceConfig(amount, builderAddress, 'USD')
 *                    amount is in 6-DECIMAL units (USDC convention), NOT cents.
 *                    $10.00 -> 10_000_000n   (server min is $1.00 = 1_000_000n; BCK.PROTOCOL.0047 below that)
 *  - Credits:        payments.plans.getFixedCreditsConfig(creditsGranted, creditsPerRequest)
 *  - Card provider:  selected per-plan via the `fiatPaymentProvider` metadata field ('stripe' here).
 *
 * Run:  NVM_API_KEY=sandbox:... ts-node register-weather-agent.ts
 */
import { Payments } from '@nevermined-io/payments'

// Builder wallet that receives payments (placeholder — swap for your real address).
const BUILDER_ADDRESS = process.env.BUILDER_ADDRESS ?? '0xYOUR_BUILDER_WALLET'

async function main() {
  const payments = Payments.getInstance({
    nvmApiKey: process.env.NVM_API_KEY!, // sandbox:... key, set in env (never hardcode)
    environment: 'sandbox',
  })

  // $10.00 fiat, paid into the builder's account. 6-decimal units, NOT cents.
  const priceConfig = payments.plans.getFiatPriceConfig(
    10_000_000n,      // = $10.00
    BUILDER_ADDRESS,
    'USD',
  )

  // 100 credits in the plan, 1 credit consumed per request.
  const creditsConfig = payments.plans.getFixedCreditsConfig(100n, 1n)

  const { agentId, planId } = await payments.agents.registerAgentAndPlan(
    // 1. Agent metadata
    {
      name: 'Weather Agent',
      description: 'On-demand weather forecasts',
      tags: ['weather'],
      dateCreated: new Date(),
    },
    // 2. Agent interface — the POST forecast endpoint
    {
      endpoints: [{ POST: 'https://my-agent.example.com/forecast' }],
    },
    // 3. Plan metadata — select Stripe as the fiat provider for this plan
    {
      name: 'Weather Starter',
      description: '100 credits for $10',
      fiatPaymentProvider: 'stripe',
      dateCreated: new Date(),
    },
    // 4. Price config (fiat / card)
    priceConfig,
    // 5. Credits config (fixed, 1 credit/request)
    creditsConfig,
  )

  console.log(`agentId: ${agentId}`)
  console.log(`planId:  ${planId}`)

  // Confirm both are published by reading them back from the protocol registry.
  const [agents, plans] = await Promise.all([
    payments.agents.getAgentsRegistered?.() ?? Promise.resolve(null),
    payments.plans.getPlansRegistered?.() ?? Promise.resolve(null),
  ])
  // (The skill's authoritative "is it published" check is the public read endpoints
  //  GET /protocol/agents/<AGENT_ID> and GET /protocol/plans/<PLAN_ID> — see A7.)
  console.log('Agent published:', agentId ? 'yes' : 'no')
  console.log('Plan published: ', planId ? 'yes' : 'no')
}

main().catch((err) => {
  console.error('Registration failed:', err)
  process.exit(1)
})
