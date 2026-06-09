/**
 * Deliverable 3 — Payment gate test (sandbox)
 *
 * 1. Calls POST /ask with NO token            → expects 402
 * 2. Acquires a fresh x402 access token, then
 *    retries POST /ask with `payment-signature` → expects 200
 *
 * Runs against the server from Deliverable 2 in `sandbox`. Set:
 *   NVM_API_KEY=sandbox:your-api-key   (a subscriber key with funds/delegation budget)
 *   NVM_PLAN_ID=<planId from register.ts>
 *   NVM_AGENT_ID=<agentId from register.ts>
 *   SERVER_URL=http://localhost:3000   (optional)
 *
 * Source: nevermined-payments references/client-integration.md
 *   (getX402AccessToken + X402_HEADERS subscriber flow).
 */
import { describe, it, expect } from 'vitest'
import { Payments } from '@nevermined-io/payments'
import { X402_HEADERS } from '@nevermined-io/payments/express'

const SERVER_URL = process.env.SERVER_URL ?? 'http://localhost:3000'
const PLAN_ID = process.env.NVM_PLAN_ID!
const AGENT_ID = process.env.NVM_AGENT_ID!

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: 'sandbox',
})

describe('POST /ask payment gate (sandbox)', () => {
  it('returns 402 when no payment token is sent', async () => {
    const res = await fetch(`${SERVER_URL}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: 'What is 2+2?' }),
    })

    expect(res.status).toBe(402)
    // The 402 carries the payment requirements for the client to fulfil.
    expect(res.headers.get(X402_HEADERS.PAYMENT_REQUIRED)).toBeTruthy()
  })

  it('returns 200 with a fresh x402 token', async () => {
    // Acquire a fresh access token. A small sandbox-friendly delegation budget
    // is auto-created (100¢ over 1h); reuse a delegationId in real usage.
    const { accessToken } = await payments.x402.getX402AccessToken(PLAN_ID, AGENT_ID, {
      delegationConfig: { spendingLimitCents: 100, durationSecs: 3600 },
    })

    const res = await fetch(`${SERVER_URL}/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        [X402_HEADERS.PAYMENT_SIGNATURE]: accessToken,
      },
      body: JSON.stringify({ query: 'What is 2+2?' }),
    })

    expect(res.status).toBe(200)

    const data = await res.json()
    expect(data.response).toBeDefined()

    // On 200 the server returns a settlement receipt; 1 credit was burned.
    const receiptHeader = res.headers.get(X402_HEADERS.PAYMENT_RESPONSE)
    expect(receiptHeader).toBeTruthy()
    const settlement = JSON.parse(Buffer.from(receiptHeader!, 'base64').toString())
    expect(settlement.creditsRedeemed).toBe('1')
  })
})
