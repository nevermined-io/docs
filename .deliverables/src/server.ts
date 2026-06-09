/**
 * Deliverable 2 — Payment middleware wiring
 *
 * Gates POST /ask at 1 credit via the x402 protocol, using the Nevermined
 * Express middleware. Your existing /ask handler logic is left intact — the
 * middleware sits in front of it and:
 *   - returns 402 with a `payment-required` header when no token is present,
 *   - verifies the `payment-signature` token via the facilitator,
 *   - burns 1 credit after the handler completes,
 *   - returns a `payment-response` settlement receipt on 200.
 *
 * Reads NVM_API_KEY, NVM_PLAN_ID, NVM_AGENT_ID from the environment.
 *
 * NOTE: package.json must contain `"type": "module"` for the
 *       `@nevermined-io/payments/express` subpath import to resolve.
 *
 * Source: nevermined-payments SKILL.md (Track B "Common Patterns") +
 *         references/express-integration.md.
 */
import express from 'express'
import { Payments } from '@nevermined-io/payments'
import { paymentMiddleware } from '@nevermined-io/payments/express'

const app = express()
app.use(express.json())

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: process.env.NVM_ENVIRONMENT === 'live' ? 'live' : 'sandbox',
})

// Gate POST /ask at 1 credit. `agentId` is included so the plan resolves
// correctly even when it is linked to multiple agents.
app.use(
  paymentMiddleware(payments, {
    'POST /ask': {
      planId: process.env.NVM_PLAN_ID!,
      agentId: process.env.NVM_AGENT_ID!,
      credits: 1,
    },
  }),
)

// --- Existing handler logic — unchanged ---
app.post('/ask', async (req, res) => {
  const { query } = req.body
  const response = await generateAIResponse(query)
  res.json({ response })
})

// Unprotected health check.
app.get('/health', (_req, res) => res.json({ status: 'ok' }))

// Placeholder for your existing agent logic.
async function generateAIResponse(query: string): Promise<string> {
  return `You asked: ${query}`
}

const PORT = Number(process.env.PORT) || 3000
app.listen(PORT, () => console.log(`Agent running on http://localhost:${PORT}`))

export { app }
