# Nevermined Payments (@nevermined-io/payments) - Complete Documentation

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Core Concepts](#core-concepts)
4. [Getting Started](#getting-started)
5. [API Reference](#api-reference)
6. [Configuration Options](#configuration-options)
7. [Payment Plans](#payment-plans)
8. [Agent Management](#agent-management)
9. [Access Control & Security](#access-control--security)
10. [Credit System](#credit-system)
11. [Integration Patterns](#integration-patterns)
12. [Examples](#examples)
13. [Error Handling](#error-handling)
14. [Best Practices](#best-practices)
15. [Troubleshooting](#troubleshooting)

---

## Overview

**Nevermined Payments** is a TypeScript-first SDK that enables AI builders to monetize their agents through a decentralized payments protocol. It provides seamless integration for:

- **AI Agent Monetization**: Register and monetize AI services with flexible payment models
- **Dual Payment Support**: Accept both cryptocurrency (ERC-20 tokens) and fiat payments (via Stripe)
- **Credit-Based Billing**: Implement usage-based pricing with tokenized credits
- **Access Control**: Secure agent endpoints with subscription-based access
- **Real-time Settlement**: Instant payment processing and credit redemption
- **Agent-to-Agent Transactions**: Enable autonomous AI-to-AI commerce

### Key Benefits

- **No Web3 Wallet Required**: Simplified onboarding for traditional developers
- **Flexible Pricing Models**: Time-based, usage-based, or hybrid payment plans
- **Built-in Security**: Cryptographic proof validation and access control
- **High Performance**: Optimized for high-frequency, real-time authorization
- **Composable**: Works with existing infrastructure and proxy services

---

## Installation

```bash
# Using npm
npm install @nevermined-io/payments

# Using yarn
yarn add @nevermined-io/payments

# Using pnpm
pnpm add @nevermined-io/payments
```

### Requirements

- **Node.js**: 16.x or higher
- **TypeScript**: 4.5+ (recommended)
- **Environment**: Browser and Node.js compatible

---

## Core Concepts

### 1. Payments Client
The central interface for all operations, configured with environment and API credentials.

### 2. AI Agents
Registered services with metadata, endpoints, and associated payment plans.

### 3. Payment Plans
Configurable pricing structures that define cost, credits, and access terms.

### 4. Credits System
Tokenized units that represent usage allowance, redeemed when services are consumed.

### 5. Access Control
Signature-based validation ensuring only paying subscribers can access services.

---

## Getting Started

### Basic Setup

```typescript
import { Payments } from '@nevermined-io/payments'

// Initialize the payments client
const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY,
  environment: 'production' // 'local' | 'testing' | 'production' | 'custom'
})
```

### Environment Configuration

| Environment | Network | Description |
|------------|---------|-------------|
| `local` | Local development | For testing during development |
| `testing` | Base Sepolia | Testnet for staging and testing |
| `production` | Base Mainnet | Live production environment |
| `custom` | Custom EVM | Any EVM-compatible network |

### API Key Generation

1. Visit the [Nevermined App](https://app.nevermined.io)
2. Create an account or sign in
3. Navigate to API Keys section
4. Generate a new API key for your project
5. Store securely in environment variables

---

## API Reference

### Core Methods

#### `Payments.getInstance(config)`
Initialize the payments client with configuration.

```typescript
interface PaymentsConfig {
  nvmApiKey: string
  environment: 'local' | 'testing' | 'production' | 'custom'
  customConfig?: CustomNetworkConfig
}

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY,
  environment: 'production'
})
```

#### `registerAgentAndPlan(metadata, api, price, credits)`
Register an AI agent with an associated payment plan in a single transaction.

```typescript
interface AgentMetadata {
  name: string
  tags: string[]
  dateCreated: Date
  description?: string
  image?: string
}

interface AgentApi {
  endpoints: Array<{ [method: string]: string }>
  openEndpoints?: string[]
}

const { agentId, planId } = await payments.registerAgentAndPlan(
  agentMetadata,
  agentApi,
  priceConfig,
  creditsConfig
)
```

#### `registerAgent(metadata, api, planIds)`
Register an agent and associate it with existing payment plans.

```typescript
const { agentId } = await payments.registerAgent(
  agentMetadata,
  agentApi,
  [planId1, planId2]
)
```

#### `registerTimePlan(price, credits)` / `registerCreditsPlan(price, credits)`
Create payment plans with different billing models.

```typescript
// Time-based plan
const { planId } = await payments.registerTimePlan(
  priceConfig,
  expirableCreditsConfig
)

// Usage-based plan
const { planId } = await payments.registerCreditsPlan(
  priceConfig,
  fixedCreditsConfig
)
```

### Query and Access Methods

#### `getAgent(agentId)`
Retrieve agent information including metadata and associated plans.

```typescript
interface Agent {
  agentId: string
  metadata: AgentMetadata
  plans: PaymentPlan[]
}

const agent = await payments.getAgent(agentId)
```

#### `getPlan(planId)`
Get detailed information about a specific payment plan.

```typescript
const plan = await payments.getPlan(planId)
```

#### `orderPlan(planId)`
Purchase a payment plan (creates subscription).

```typescript
const orderResult = await payments.orderPlan(planId)
```

#### `getPlanBalance(planId, userAddress?)`
Check credit balance for a payment plan.

```typescript
const balance = await payments.getPlanBalance(planId)
// Or for a specific user
const userBalance = await payments.getPlanBalance(planId, userAddress)
```

### Access Control Methods

#### `isValidRequest(planId, agentId, subscriberAddress, signature)`
Validate if a request is authorized.

```typescript
const isValid = await payments.isValidRequest(
  planId,
  agentId,
  subscriberAddress,
  request.headers['x-nvm-query-signature']
)

if (!isValid) {
  const paymentCard = await payments.getAgentPaymentCard(agentId)
  return response.status(402).send(paymentCard)
}
```

#### `getAgentHTTPOptions(planId, agentId)`
Get HTTP options for querying an agent.

```typescript
const options = await payments.getAgentHTTPOptions(planId, agentId)
// Returns: { accessToken: string, neverminedProxyUri: string }
```

#### `query(agentId, credentials, payload?)`
Query an agent through the Nevermined proxy.

```typescript
const result = await payments.query(agentId, credentials, {
  prompt: "Your query here"
})
```

### Credit Management

#### `redeemCredits(planId, amount, proof)`
Redeem credits after processing a request.

```typescript
await payments.redeemCredits(planId, 5n, proof)
```

#### `getAgentPaymentCard(agentId)`
Get payment card information for unauthorized access.

```typescript
const paymentCard = await payments.getAgentPaymentCard(agentId)
```

---

## Configuration Options

### Price Configuration

#### ERC-20 Token Pricing
```typescript
import { getERC20PriceConfig } from '@nevermined-io/payments'

const priceConfig = getERC20PriceConfig(
  10_000_000n, // 10 USDC (6 decimals)
  '0xA0b86a33E6441c41F4F2B8Bf4F2B0f1B0F1C1C1C', // USDC address
  builderAddress // Recipient address
)
```

#### Fiat Pricing (Stripe)
```typescript
import { getFiatPriceConfig } from '@nevermined-io/payments'

const priceConfig = getFiatPriceConfig(
  50_000_000n, // $50 USD
  builderAddress
)
```

### Credits Configuration

#### Fixed Credits
```typescript
import { getFixedCreditsConfig } from '@nevermined-io/payments'

const creditsConfig = getFixedCreditsConfig(
  100n, // Total credits granted
  5n    // Credits per request
)
```

#### Time-based Credits
```typescript
import { getExpirablePlanCreditsConfig } from '@nevermined-io/payments'

const creditsConfig = getExpirablePlanCreditsConfig(
  86400n * 30n // 30 days in seconds
)
```

#### Dynamic Credits
```typescript
const creditsConfig = {
  creditsType: 'DYNAMIC',
  minCreditsPerRequest: 1n,
  maxCreditsPerRequest: 10n,
  amount: 100n
}
```

---

## Payment Plans

Payment plans define the commercial terms for accessing AI agents. They consist of two main components:

### 1. Price Configuration
Defines the cost and payment distribution:

```typescript
interface PriceConfig {
  priceType: 'FIXED_PRICE' | 'DYNAMIC_PRICE'
  tokenAddress: string // ERC-20 token or '0x0' for native token
  amounts: bigint[]
  receivers: string[]
}
```

### 2. Credits Configuration
Defines what subscribers receive:

```typescript
interface CreditsConfig {
  creditsType: 'FIXED' | 'EXPIRABLE' | 'DYNAMIC'
  amount: bigint
  creditsPerRequest?: bigint
  minCreditsPerRequest?: bigint
  maxCreditsPerRequest?: bigint
  durationOfThePlan?: bigint
}
```

### Plan Types

#### Subscription Plans (Time-based)
- Monthly: `getExpirablePlanCreditsConfig(86400n * 30n)`
- Annual: `getExpirablePlanCreditsConfig(86400n * 365n)`
- Custom: `getExpirablePlanCreditsConfig(customDuration)`

#### Usage Plans (Credit-based)
- Pay-per-use: `getFixedCreditsConfig(credits, creditsPerRequest)`
- Bulk credits: `getFixedCreditsConfig(largeAmount, 1n)`

#### Hybrid Plans
Combine time limits with usage limits for flexible pricing.

---

## Agent Management

### Agent Registration

```typescript
const agentMetadata: AgentMetadata = {
  name: 'AI Legal Assistant',
  tags: ['legal', 'ai', 'assistant'],
  dateCreated: new Date(),
  description: 'Specialized AI for legal document analysis',
  image: 'https://example.com/agent-avatar.png'
}

const agentApi: AgentApi = {
  endpoints: [
    { POST: 'https://api.example.com/legal/analyze' },
    { GET: 'https://api.example.com/legal/status' }
  ],
  openEndpoints: ['https://api.example.com/health'] // Public endpoints
}
```

### Multi-Plan Agents

Agents can have multiple payment plans for different tiers:

```typescript
// Create different plans
const basicPlan = await payments.registerCreditsPlan(basicPrice, basicCredits)
const premiumPlan = await payments.registerCreditsPlan(premiumPrice, premiumCredits)

// Register agent with multiple plans
const { agentId } = await payments.registerAgent(
  agentMetadata,
  agentApi,
  [basicPlan.planId, premiumPlan.planId]
)
```

### Agent Discovery

```typescript
// Get agent details
const agent = await payments.getAgent(agentId)

// Check available plans
agent.plans.forEach(plan => {
  console.log(`Plan: ${plan.metadata.name}`)
  console.log(`Price: ${plan.price.amounts[0]}`)
  console.log(`Credits: ${plan.credits.amount}`)
})
```

---

## Access Control & Security

### Request Validation Flow

```typescript
// 1. Validate incoming request
const isValid = await payments.isValidRequest(
  planId,
  agentId,
  subscriberAddress,
  signature
)

if (!isValid) {
  // 2. Return payment required response
  const paymentCard = await payments.getAgentPaymentCard(agentId)
  return response.status(402).json(paymentCard)
}

// 3. Process the request
const result = await processAIRequest(requestData)

// 4. Redeem credits
await payments.redeemCredits(planId, creditsUsed, proof)

return response.json(result)
```

### Signature Verification

The SDK automatically handles cryptographic signature verification:

1. **Request Signing**: Subscribers generate signatures using their private keys
2. **Signature Validation**: The `isValidRequest` method verifies signatures
3. **Replay Protection**: Nonces prevent replay attacks
4. **Time-based Validation**: Signatures expire after a set time

### Proxy Integration

For agents that cannot integrate directly:

```typescript
// Agent runs behind Nevermined Proxy
// Proxy handles all validation and credit redemption
// No changes needed to existing agent code

const proxyEndpoint = 'https://proxy.nevermined.app/agent/' + agentId
```

---

## Credit System

### Credit Types

#### Fixed Credits
- Predefined amount per request
- Predictable billing
- Simple implementation

```typescript
const fixedCredits = getFixedCreditsConfig(100n, 5n) // 100 credits, 5 per request
```

#### Dynamic Credits
- Variable amount based on request complexity
- Flexible pricing
- Requires usage proof

```typescript
const dynamicCredits = {
  creditsType: 'DYNAMIC',
  minCreditsPerRequest: 1n,
  maxCreditsPerRequest: 25n,
  amount: 500n
}
```

#### Time-based Credits
- Access for a specific duration
- Subscription model
- Automatic expiration

```typescript
const timeCredits = getExpirablePlanCreditsConfig(86400n * 30n) // 30 days
```

### Credit Redemption

```typescript
// Calculate credits based on request complexity
const creditsToRedeem = calculateCreditsNeeded(request)

// Redeem credits with proof
const proof = generateUsageProof(request, response)
await payments.redeemCredits(planId, creditsToRedeem, proof)
```

### Balance Management

```typescript
// Check subscriber balance
const balance = await payments.getPlanBalance(planId, subscriberAddress)

if (!balance.isSubscriber) {
  throw new Error('Not a subscriber')
}

if (balance.credits < requiredCredits) {
  throw new Error('Insufficient credits')
}
```

---

## Integration Patterns

### 1. Direct Integration

Integrate Nevermined directly into your agent:

```typescript
import express from 'express'
import { Payments } from '@nevermined-io/payments'

const app = express()
const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY,
  environment: 'production'
})

app.post('/api/query', async (req, res) => {
  // Validate access
  const isValid = await payments.isValidRequest(
    req.body.planId,
    req.body.agentId,
    req.body.subscriberAddress,
    req.headers['x-nvm-query-signature']
  )

  if (!isValid) {
    const paymentCard = await payments.getAgentPaymentCard(req.body.agentId)
    return res.status(402).json(paymentCard)
  }

  // Process request
  const result = await processAIQuery(req.body.prompt)

  // Redeem credits
  await payments.redeemCredits(req.body.planId, 5n, generateProof(req, result))

  res.json(result)
})
```

### 2. Proxy Integration

Use Nevermined Proxy for existing agents:

```typescript
// No changes to existing agent code
// Proxy handles validation and billing

// Subscribers query through proxy
const options = await payments.getAgentHTTPOptions(planId, agentId)
const response = await fetch(options.neverminedProxyUri, {
  method: 'POST',
  headers: options.headers,
  body: JSON.stringify({ prompt: 'Your query' })
})
```

### 3. Middleware Integration

Create reusable middleware:

```typescript
function neverminedAuth(planId: string, agentId: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const isValid = await payments.isValidRequest(
      planId,
      agentId,
      req.body.subscriberAddress,
      req.headers['x-nvm-query-signature']
    )

    if (!isValid) {
      const paymentCard = await payments.getAgentPaymentCard(agentId)
      return res.status(402).json(paymentCard)
    }

    next()
  }
}

// Use middleware
app.post('/api/query', neverminedAuth(planId, agentId), handleQuery)
```

---

## Examples

### Complete Agent Setup

```typescript
import { 
  Payments, 
  getERC20PriceConfig, 
  getFixedCreditsConfig 
} from '@nevermined-io/payments'

async function setupAIAgent() {
  // 1. Initialize payments
  const payments = Payments.getInstance({
    nvmApiKey: process.env.NVM_API_KEY,
    environment: 'production'
  })

  // 2. Define agent metadata
  const agentMetadata = {
    name: 'Code Review Assistant',
    tags: ['development', 'code-review', 'ai'],
    dateCreated: new Date(),
    description: 'AI-powered code review and suggestions'
  }

  // 3. Define API endpoints
  const agentApi = {
    endpoints: [
      { POST: 'https://api.codeassistant.com/review' },
      { GET: 'https://api.codeassistant.com/status' }
    ]
  }

  // 4. Configure pricing (10 USDC)
  const priceConfig = getERC20PriceConfig(
    10_000_000n, // 10 USDC
    '0xA0b86a33E6441c41F4F2B8Bf4F2B0f1B0F1C1C1C', // USDC address
    process.env.BUILDER_ADDRESS
  )

  // 5. Configure credits (100 credits, 1 per request)
  const creditsConfig = getFixedCreditsConfig(100n, 1n)

  // 6. Register agent and plan
  const { agentId, planId } = await payments.registerAgentAndPlan(
    agentMetadata,
    agentApi,
    priceConfig,
    creditsConfig
  )

  console.log(`Agent registered: ${agentId}`)
  console.log(`Plan created: ${planId}`)

  return { agentId, planId }
}
```

### Subscriber Workflow

```typescript
async function subscribeAndQuery() {
  const payments = Payments.getInstance({
    nvmApiKey: process.env.NVM_API_KEY,
    environment: 'production'
  })

  // 1. Discover agent
  const agent = await payments.getAgent(agentId)
  console.log(`Found agent: ${agent.metadata.name}`)

  // 2. Check available plans
  const plan = agent.plans[0]
  console.log(`Plan price: ${plan.price.amounts[0]} tokens`)

  // 3. Purchase plan
  await payments.orderPlan(plan.planId)
  console.log('Plan purchased successfully')

  // 4. Get access credentials
  const credentials = await payments.getAgentHTTPOptions(plan.planId, agentId)

  // 5. Query the agent
  const result = await payments.query(agentId, credentials, {
    code: 'function hello() { console.log("Hello World") }',
    language: 'javascript'
  })

  console.log('Review result:', result)
}
```

### Multi-Tier Pricing

```typescript
async function createTieredAgent() {
  const payments = Payments.getInstance({
    nvmApiKey: process.env.NVM_API_KEY,
    environment: 'production'
  })

  // Basic plan - 5 USDC, 50 credits
  const basicPrice = getERC20PriceConfig(5_000_000n, USDC_ADDRESS, builderAddress)
  const basicCredits = getFixedCreditsConfig(50n, 1n)
  const { planId: basicPlanId } = await payments.registerCreditsPlan(basicPrice, basicCredits)

  // Premium plan - 20 USDC, 250 credits
  const premiumPrice = getERC20PriceConfig(20_000_000n, USDC_ADDRESS, builderAddress)
  const premiumCredits = getFixedCreditsConfig(250n, 1n)
  const { planId: premiumPlanId } = await payments.registerCreditsPlan(premiumPrice, premiumCredits)

  // Enterprise plan - 100 USDC, unlimited for 30 days
  const enterprisePrice = getERC20PriceConfig(100_000_000n, USDC_ADDRESS, builderAddress)
  const enterpriseCredits = getExpirablePlanCreditsConfig(86400n * 30n)
  const { planId: enterprisePlanId } = await payments.registerTimePlan(enterprisePrice, enterpriseCredits)

  // Register agent with all plans
  const { agentId } = await payments.registerAgent(
    agentMetadata,
    agentApi,
    [basicPlanId, premiumPlanId, enterprisePlanId]
  )

  return { agentId, plans: [basicPlanId, premiumPlanId, enterprisePlanId] }
}
```

### Dynamic Pricing Agent

```typescript
async function createDynamicPricingAgent() {
  const payments = Payments.getInstance({
    nvmApiKey: process.env.NVM_API_KEY,
    environment: 'production'
  })

  // Dynamic pricing based on request complexity
  const priceConfig = getERC20PriceConfig(50_000_000n, USDC_ADDRESS, builderAddress)
  const dynamicCredits = {
    creditsType: 'DYNAMIC',
    minCreditsPerRequest: 1n,
    maxCreditsPerRequest: 50n,
    amount: 1000n
  }

  const { agentId, planId } = await payments.registerAgentAndPlan(
    agentMetadata,
    agentApi,
    priceConfig,
    dynamicCredits
  )

  // In your agent endpoint
  app.post('/api/analyze', async (req, res) => {
    // Validate access
    const isValid = await payments.isValidRequest(
      planId,
      agentId,
      req.body.subscriberAddress,
      req.headers['x-nvm-query-signature']
    )

    if (!isValid) {
      return res.status(402).json(await payments.getAgentPaymentCard(agentId))
    }

    // Process request and calculate complexity
    const result = await processComplexAnalysis(req.body.data)
    const complexity = calculateComplexity(req.body.data, result)
    
    // Redeem credits based on complexity
    const creditsUsed = Math.min(Math.max(complexity, 1), 50)
    await payments.redeemCredits(planId, BigInt(creditsUsed), generateProof(req, result))

    res.json({ result, creditsUsed })
  })
}
```

---

## Error Handling

### Common Error Scenarios

```typescript
import { PaymentsError } from '@nevermined-io/payments'

try {
  const result = await payments.registerAgentAndPlan(metadata, api, price, credits)
} catch (error) {
  if (error instanceof PaymentsError) {
    switch (error.code) {
      case 'INVALID_API_KEY':
        console.error('Invalid API key provided')
        break
      case 'INSUFFICIENT_BALANCE':
        console.error('Insufficient balance for transaction')
        break
      case 'INVALID_PLAN_CONFIG':
        console.error('Invalid payment plan configuration')
        break
      case 'NETWORK_ERROR':
        console.error('Network connection failed')
        break
      default:
        console.error('Unknown payments error:', error.message)
    }
  } else {
    console.error('Unexpected error:', error)
  }
}
```

### Validation Errors

```typescript
// Handle validation failures gracefully
const isValid = await payments.isValidRequest(planId, agentId, subscriber, signature)
  .catch(error => {
    console.error('Validation error:', error)
    return false // Fail closed for security
  })

if (!isValid) {
  // Always provide payment card for unauthorized requests
  const paymentCard = await payments.getAgentPaymentCard(agentId)
  return response.status(402).json({
    error: 'Payment required',
    paymentCard
  })
}
```

### Retry Logic

```typescript
async function withRetry<T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      if (attempt === maxRetries) throw error
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt - 1)))
    }
  }
  throw new Error('Max retries exceeded')
}

// Usage
const result = await withRetry(() => payments.redeemCredits(planId, credits, proof))
```

---

## Best Practices

### 1. Security

```typescript
// Always validate requests before processing
const isValid = await payments.isValidRequest(planId, agentId, subscriber, signature)
if (!isValid) {
  return response.status(402).json(await payments.getAgentPaymentCard(agentId))
}

// Use environment variables for sensitive data
const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY, // Never hardcode
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'testing'
})

// Implement rate limiting
const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use('/api/', limiter)
```

### 2. Performance

```typescript
// Cache agent and plan data
const cache = new Map()

async function getCachedAgent(agentId: string) {
  if (!cache.has(agentId)) {
    const agent = await payments.getAgent(agentId)
    cache.set(agentId, agent)
    // Set TTL for cache invalidation
    setTimeout(() => cache.delete(agentId), 5 * 60 * 1000) // 5 minutes
  }
  return cache.get(agentId)
}

// Batch operations when possible
const agents = await Promise.all([
  payments.getAgent(agentId1),
  payments.getAgent(agentId2),
  payments.getAgent(agentId3)
])
```

### 3. Monitoring

```typescript
// Log important events
console.log(`Agent registered: ${agentId}`)
console.log(`Plan purchased: ${planId} by ${subscriberAddress}`)
console.log(`Credits redeemed: ${credits} for plan ${planId}`)

// Monitor credit usage
const balance = await payments.getPlanBalance(planId, subscriberAddress)
if (balance.credits < 10) {
  // Send low balance notification
  notifyLowBalance(subscriberAddress, balance.credits)
}

// Track revenue
const planDetails = await payments.getPlan(planId)
console.log(`Revenue generated: ${planDetails.price.amounts[0]} tokens`)
```

### 4. User Experience

```typescript
// Provide clear error messages
if (!isValid) {
  const paymentCard = await payments.getAgentPaymentCard(agentId)
  return response.status(402).json({
    error: 'Payment required to access this service',
    message: 'Please purchase a plan to continue',
    paymentCard,
    availablePlans: agent.plans.map(p => ({
      name: p.metadata.name,
      price: p.price.amounts[0],
      credits: p.credits.amount
    }))
  })
}

// Show usage information
const balance = await payments.getPlanBalance(planId, subscriberAddress)
response.setHeader('X-Credits-Remaining', balance.credits.toString())
response.setHeader('X-Credits-Used', (balance.totalCredits - balance.credits).toString())
```

### 5. Testing

```typescript
// Use testing environment for development
const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_TEST_API_KEY,
  environment: 'testing' // Use Base Sepolia testnet
})

// Mock payments for unit tests
jest.mock('@nevermined-io/payments', () => ({
  Payments: {
    getInstance: jest.fn().mockReturnValue({
      isValidRequest: jest.fn().mockResolvedValue(true),
      redeemCredits: jest.fn().mockResolvedValue(true),
      getAgentPaymentCard: jest.fn().mockResolvedValue({ /* mock data */ })
    })
  }
}))
```

---

## Troubleshooting

### Common Issues

#### 1. Invalid API Key
```
Error: Invalid API key provided
```
**Solution**: Verify your API key is correct and has not expired. Generate a new one from the Nevermined App.

#### 2. Network Connection Issues
```
Error: Network request failed
```
**Solution**: Check your internet connection and ensure the Nevermined services are accessible. Try switching environments.

#### 3. Insufficient Credits
```
Error: Insufficient credits for redemption
```
**Solution**: Check the subscriber's credit balance and ensure they have enough credits for the operation.

#### 4. Invalid Signature
```
Error: Invalid request signature
```
**Solution**: Ensure the signature is properly generated and the subscriber address matches the signer.

### Debug Mode

```typescript
// Enable debug logging
const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY,
  environment: 'testing',
  debug: true // Enable detailed logging
})

// Check service status
const status = await payments.getServiceStatus()
console.log('Service status:', status)
```

### Support Resources

- **Documentation**: [https://docs.nevermined.io](https://docs.nevermined.io)
- **Discord Community**: [https://discord.gg/nevermined](https://discord.gg/nevermined)
- **GitHub Issues**: [https://github.com/nevermined-io/payments/issues](https://github.com/nevermined-io/payments/issues)
- **Email Support**: info@nevermined.io

---

## Conclusion

The Nevermined Payments SDK provides a comprehensive solution for monetizing AI agents with minimal integration effort. Its flexible architecture supports various pricing models, secure access control, and seamless payment processing across crypto and fiat currencies.

Key takeaways:
- **Simple Integration**: Get started with just a few lines of code
- **Flexible Pricing**: Support multiple business models
- **Secure by Default**: Built-in cryptographic validation
- **Production Ready**: Optimized for high-frequency usage
- **Future Proof**: Designed for the AI-native economy

Start building your monetized AI agents today with Nevermined Payments!
