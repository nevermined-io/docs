/**
 * Deliverable 1 — Registration script
 *
 * Publishes the agent and a "Starter" plan that grants 100 credits for $10 in USDC,
 * then prints the resulting agentId and planId.
 *
 * Run (sandbox):
 *   NVM_API_KEY=sandbox:your-api-key \
 *   BUILDER_ADDRESS=<your-builder-wallet> \
 *   npx tsx scripts/register.ts
 *
 * Source: nevermined-payments SKILL.md §A6 + references/payment-plans.md
 *   (registerAgentAndPlan, getERC20PriceConfig, getFixedCreditsConfig).
 */
import { Payments } from '@nevermined-io/payments'

// USDC on Base Sepolia (sandbox). From references/payment-plans.md.
// For `live`, swap to the Base Mainnet USDC address.
const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e'

// Builder wallet that receives payments. Provided by the developer.
const BUILDER_ADDRESS = process.env.BUILDER_ADDRESS ?? '<your-builder-wallet>'

async function main() {
  if (!process.env.NVM_API_KEY) {
    throw new Error('NVM_API_KEY is required (format: sandbox:your-api-key)')
  }
  if (!BUILDER_ADDRESS.startsWith('0x')) {
    throw new Error('BUILDER_ADDRESS must be set to your builder wallet (0x...)')
  }

  const payments = Payments.getInstance({
    nvmApiKey: process.env.NVM_API_KEY,
    environment: process.env.NVM_ENVIRONMENT === 'live' ? 'live' : 'sandbox',
  })

  const { agentId, planId } = await payments.agents.registerAgentAndPlan(
    // Agent metadata
    {
      name: 'Ask Agent',
      description: 'AI agent exposing POST /ask',
      tags: ['ai', 'ask'],
      dateCreated: new Date(),
    },
    // Agent interface — point at your deployed /ask endpoint.
    // Optional; provide endpoints only if you want platform-side route enforcement.
    {
      endpoints: [{ POST: 'https://your-api.com/ask' }],
    },
    // Plan metadata
    {
      name: 'Starter',
      description: '100 requests for $10',
      dateCreated: new Date(),
    },
    // Price: $10 in USDC. USDC has 6 decimals → 10 USDC = 10_000_000 (smallest unit).
    payments.plans.getERC20PriceConfig(10_000_000n, USDC_ADDRESS, BUILDER_ADDRESS),
    // Credits: 100 total in the plan, 1 credit consumed per request.
    payments.plans.getFixedCreditsConfig(100n, 1n),
  )

  console.log(`agentId: ${agentId}`)
  console.log(`planId:  ${planId}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
