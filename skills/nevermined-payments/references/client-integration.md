# Client-Side Integration (Subscriber Flow)

How to purchase plans, generate x402 tokens, and call payment-protected APIs as a subscriber.

## Overview

As a subscriber (consumer of a paid API/agent), you:
1. Order a payment plan
2. Check your credit balance
3. Generate an x402 access token
4. Send requests with the `payment-signature` header
5. Decode the settlement receipt from the `payment-response` header

## Order a Plan and Get a Token

### TypeScript

```typescript
import { Payments } from '@nevermined-io/payments'

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: 'sandbox'
})

// Order the plan (first purchase only)
await payments.plans.orderPlan(PLAN_ID)

// Generate x402 access token with a delegation
// The facilitator will auto-order credits if balance runs out at settlement
const { accessToken } = await payments.x402.getX402AccessToken(PLAN_ID, AGENT_ID, {
  delegationConfig: { spendingLimitCents: 10000, durationSecs: 604800 }
})
```

### Python

```python
import os
from payments_py import Payments, PaymentOptions
from payments_py.x402 import DelegationConfig, X402TokenOptions

payments = Payments.get_instance(
    PaymentOptions(nvm_api_key=os.environ["NVM_API_KEY"], environment="sandbox")
)

# Order the plan (first purchase only)
payments.plans.order_plan(plan_id)

# Generate x402 access token with a delegation
# The facilitator will auto-order credits if balance runs out at settlement
token_res = payments.x402.get_x402_access_token(
    plan_id,
    agent_id,
    token_options=X402TokenOptions(
        delegation_config=DelegationConfig(spending_limit_cents=10000, duration_secs=604800)
    )
)
access_token = token_res["accessToken"]
```

## Auto-Order

When a delegation is configured, the facilitator can automatically purchase more credits at settlement time if the subscriber's balance is insufficient — no manual balance-check loop needed.

- **Crypto plans (`nvm:erc4337`)**: pass `delegationConfig` with `spendingLimitCents` and `durationSecs`
- **Fiat plans (`nvm:card-delegation`)**: auto-order is built into the card delegation — no extra parameter needed
- **Spending cap**: always controlled by `spendingLimitCents` in the delegation, enforced on-chain
- **When it stops**: delegation exhausted, expired, or wallet has insufficient token balance → request returns 402
- Handle 402 responses in A2A pipelines explicitly — surface a clear payment error rather than retrying indefinitely

## Call a Protected HTTP API

### TypeScript

```typescript
import { Payments } from '@nevermined-io/payments'
import { X402_HEADERS } from '@nevermined-io/payments/express'

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: 'sandbox'
})

async function callProtectedAPI() {
  const SERVER_URL = 'http://localhost:3000'

  // Step 1: Request without token → 402
  const response1 = await fetch(`${SERVER_URL}/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: 'What is 2+2?' })
  })

  if (response1.status === 402) {
    // Step 2: Decode payment requirements
    const paymentRequired = JSON.parse(
      Buffer.from(
        response1.headers.get(X402_HEADERS.PAYMENT_REQUIRED)!,
        'base64'
      ).toString()
    )

    const { planId, extra } = paymentRequired.accepts[0]
    const agentId = extra?.agentId

    // Step 3: Generate x402 token (requires delegationConfig)
    const { accessToken } = await payments.x402.getX402AccessToken(planId, agentId, {
      delegationConfig: { spendingLimitCents: 10000, durationSecs: 604800 }
    })

    // Step 4: Request with token → 200
    const response2 = await fetch(`${SERVER_URL}/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        [X402_HEADERS.PAYMENT_SIGNATURE]: accessToken
      },
      body: JSON.stringify({ query: 'What is 2+2?' })
    })

    const data = await response2.json()
    console.log('Response:', data.response)

    // Step 5: Decode settlement receipt
    const settlement = JSON.parse(
      Buffer.from(
        response2.headers.get(X402_HEADERS.PAYMENT_RESPONSE)!,
        'base64'
      ).toString()
    )
    console.log('Credits used:', settlement.creditsRedeemed)
  }
}
```

### Python

```python
import os
import base64
import json
import httpx
from payments_py import Payments, PaymentOptions
from payments_py.x402 import DelegationConfig, X402TokenOptions

payments = Payments.get_instance(
    PaymentOptions(
        nvm_api_key=os.environ["NVM_API_KEY"],
        environment=os.environ.get("NVM_ENVIRONMENT", "sandbox")
    )
)

def call_protected_api():
    SERVER_URL = "http://localhost:3000"

    with httpx.Client(timeout=60.0) as client:
        # Step 1: Request without token → 402
        response1 = client.post(
            f"{SERVER_URL}/ask",
            json={"query": "What is 2+2?"}
        )

        if response1.status_code == 402:
            # Step 2: Decode payment requirements
            payment_required = json.loads(
                base64.b64decode(
                    response1.headers.get("payment-required")
                ).decode()
            )

            plan_id = payment_required["accepts"][0]["planId"]
            agent_id = payment_required["accepts"][0].get("extra", {}).get("agentId")

            # Step 3: Generate x402 token (requires delegationConfig)
            token_result = payments.x402.get_x402_access_token(
                plan_id, agent_id,
                token_options=X402TokenOptions(
                    delegation_config=DelegationConfig(
                        spending_limit_cents=10000, duration_secs=604800
                    )
                )
            )
            access_token = token_result["accessToken"]

            # Step 4: Request with token → 200
            response2 = client.post(
                f"{SERVER_URL}/ask",
                headers={"payment-signature": access_token},
                json={"query": "What is 2+2?"}
            )

            data = response2.json()
            print(f"Response: {data['response']}")

            # Step 5: Decode settlement receipt
            settlement = json.loads(
                base64.b64decode(
                    response2.headers.get("payment-response")
                ).decode()
            )
            print(f"Credits used: {settlement.get('creditsRedeemed')}")

if __name__ == "__main__":
    call_protected_api()
```

## Connect to a Protected MCP Server

### TypeScript

```typescript
import { Client } from "@modelcontextprotocol/sdk/client"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp"

const { accessToken } = await payments.x402.getX402AccessToken(planId, agentId, {
  delegationConfig: { spendingLimitCents: 10000, durationSecs: 604800 }
})

const transport = new StreamableHTTPClientTransport(
  new URL("http://localhost:3000/mcp"),
  {
    requestInit: {
      headers: { 'payment-signature': accessToken }
    }
  }
)

const client = new Client({ name: "my-client" })
await client.connect(transport)

const result = await client.callTool({
  name: "weather.today",
  arguments: { city: "Madrid" }
})
```

## Call a Protected Strands Agent

### Python

```python
from payments_py.x402 import DelegationConfig, X402TokenOptions
from payments_py.x402.strands import extract_payment_required
from agent import agent, payments

# Step 1: Call without token — triggers PaymentRequired
result = agent("Analyze sales trends")

# Step 2: Extract payment requirements
payment_required = extract_payment_required(agent.messages)

if payment_required:
    chosen_plan = payment_required["accepts"][0]
    plan_id = chosen_plan["planId"]
    agent_id = (chosen_plan.get("extra") or {}).get("agentId")

    # Step 3: Get token (requires delegationConfig)
    token_response = payments.x402.get_x402_access_token(
        plan_id, agent_id,
        token_options=X402TokenOptions(
            delegation_config=DelegationConfig(
                spending_limit_cents=10000, duration_secs=604800
            )
        )
    )
    access_token = token_response["accessToken"]

    # Step 4: Retry with token
    state = {"payment_token": access_token}
    result = agent("Analyze sales trends", invocation_state=state)
```

## Environment Variables

```bash
NVM_API_KEY=sandbox:your-subscriber-api-key
NVM_ENVIRONMENT=sandbox
```
