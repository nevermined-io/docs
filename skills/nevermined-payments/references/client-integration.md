# Client-Side Integration (Subscriber Flow)

How to purchase plans, generate x402 tokens, and call payment-protected APIs as a subscriber.

> ⚠️ **Run examples in `sandbox` first.** `orderPlan` charges money in `live`, and `delegationConfig` grants the platform pre-authorized spending up to `spendingLimitCents` for `durationSecs` seconds. Examples below use a small sandbox-friendly budget (`100¢` over `1h`); raise per use-case after explicit review.

## Overview

As a subscriber (consumer of a paid API/agent), you:
1. Order a payment plan
2. Check your credit balance
3. Generate an x402 access token
4. Send requests with the `payment-signature` header
5. Decode the settlement receipt from the `payment-response` header

## Pure-REST purchase (no SDK)

An autonomous agent can complete the whole subscriber flow with plain HTTP — no SDK install. Send `Authorization: Bearer $NVM_API_KEY` on each call.

```bash
# 1. Get an x402 access token (create the delegation first via /delegation/create, then pass its delegationId)
curl -s -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{ "accepted": { "scheme": "nvm:erc4337", "network": "eip155:84532", "planId": "<PLAN_ID>" },
        "delegationConfig": { "delegationId": "<DELEGATION_ID>" } }' \
  https://api.sandbox.nevermined.app/api/v1/x402/permissions
# → { "accessToken": "..." }

# 2. Settle (proof of purchase). For a plan top-up, resource.url is the plan URL.
curl -s -X POST -H "Authorization: Bearer $NVM_API_KEY" -H "Content-Type: application/json" \
  -d '{ "paymentRequired": { "x402Version": 2, "resource": { "url": "<PLAN_OR_RESOURCE_URL>" },
          "accepts": [ { "scheme": "nvm:erc4337", "network": "eip155:84532", "planId": "<PLAN_ID>", "extra": {} } ],
          "extensions": {} },
        "x402AccessToken": "<accessToken>" }' \
  https://api.sandbox.nevermined.app/api/v1/x402/settle
# → { "success": true, "creditsRedeemed": "1", "remainingBalance": "999", "transaction": "0x..." }
```

- **Card payment:** switch `scheme` to `nvm:card-delegation` and `network` to `stripe` (or `braintree`/`visa`) in both calls.
- **Calling a protected agent directly:** skip building `paymentRequired` — send the access token as the `payment-signature` header; the agent settles for you and returns the receipt in the `payment-response` header.
- **Proof of purchase:** `creditsRedeemed > 0` and a `remainingBalance` in the settle response.

Full runbook with API-key retrieval, card enrollment, and status checks: `autonomous-operations.md`.

## Order a Plan and Get a Token

### TypeScript

```typescript
import { Payments } from '@nevermined-io/payments'

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: 'sandbox'
})

// Order the plan
await payments.plans.orderPlan(PLAN_ID)

// Check balance — getPlanBalance returns a PlanBalance object
const planBalance = await payments.plans.getPlanBalance(PLAN_ID)
console.log(`Credits remaining: ${planBalance.balance}`)        // bigint
console.log(`Subscriber: ${planBalance.isSubscriber}`)

// Create the delegation first (provider + currency required), then request the token by delegationId.
const delegation = await payments.delegation.createDelegation({
  provider: 'erc4337', spendingLimitCents: 100, durationSecs: 3600, currency: 'usdc'
})
const { accessToken } = await payments.x402.getX402AccessToken(PLAN_ID, AGENT_ID, {
  delegationConfig: { delegationId: delegation.delegationId }
})
```

### Python

```python
import os
from payments_py import Payments, PaymentOptions
from payments_py.x402 import CreateDelegationPayload, DelegationConfig, X402TokenOptions

payments = Payments.get_instance(
    PaymentOptions(nvm_api_key=os.environ["NVM_API_KEY"], environment="sandbox")
)

# Order the plan
payments.plans.order_plan(plan_id)

# Check balance — get_plan_balance returns a PlanBalance object
plan_balance = payments.plans.get_plan_balance(plan_id)
print(f"Credits remaining: {plan_balance.balance}")
print(f"Subscriber: {plan_balance.is_subscriber}")

# Create the delegation first (provider + currency required), then request the token by delegation_id.
delegation = payments.delegation.create_delegation(
    CreateDelegationPayload(
        provider="erc4337", spending_limit_cents=100, duration_secs=3600, currency="usdc"
    )
)
token_res = payments.x402.get_x402_access_token(
    plan_id, agent_id,
    token_options=X402TokenOptions(
        delegation_config=DelegationConfig(delegation_id=delegation.delegation_id)
    )
)
access_token = token_res["accessToken"]
```

## Automatic Credit Top-Ups

When the access token carries a `delegationConfig`, the facilitator tops up the subscriber's credits automatically — no manual balance-check-then-`orderPlan` loop.

- The top-up fires at **settlement** (when a paid request is consumed), **not** when `getX402AccessToken` is called. Generating the token only pre-authorizes the spend; no credits are bought until the balance is actually short.
- **Crypto (`nvm:erc4337`)**: the facilitator executes an on-chain `order` against the subscriber's smart account.
- **Fiat (`nvm:card-delegation`)**: the facilitator charges the enrolled card off-session — built into the card delegation, no extra parameter.
- Every top-up is bounded by the delegation's `spendingLimitCents`. When that's exhausted or the delegation expires, settlement fails and the request returns `402`.
- Create the delegation first and reuse it by passing `delegationConfig.delegationId` (passing `spendingLimitCents` + `durationSecs` inline still works but is deprecated and emits a runtime warning).
- In A2A pipelines, handle `402`/settlement failures explicitly — surface a clear payment error rather than retrying indefinitely.

Full guide: [Automatic Credit Top-Ups](https://nevermined.ai/docs/integrate/patterns/top-up).

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

    // Step 3: Create the delegation first, then generate the x402 token by delegationId
    const delegation = await payments.delegation.createDelegation({
      provider: 'erc4337', spendingLimitCents: 100, durationSecs: 3600, currency: 'usdc'
    })
    const { accessToken } = await payments.x402.getX402AccessToken(planId, agentId, {
      delegationConfig: { delegationId: delegation.delegationId }
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
from payments_py.x402 import CreateDelegationPayload, DelegationConfig, X402TokenOptions

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

            # Step 3: Create the delegation first, then generate the token by delegation_id
            delegation = payments.delegation.create_delegation(
                CreateDelegationPayload(
                    provider="erc4337", spending_limit_cents=100,
                    duration_secs=3600, currency="usdc"
                )
            )
            token_result = payments.x402.get_x402_access_token(
                plan_id, agent_id,
                token_options=X402TokenOptions(
                    delegation_config=DelegationConfig(
                        delegation_id=delegation.delegation_id
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

const delegation = await payments.delegation.createDelegation({
  provider: 'erc4337', spendingLimitCents: 100, durationSecs: 3600, currency: 'usdc'
})
const { accessToken } = await payments.x402.getX402AccessToken(planId, agentId, {
  delegationConfig: { delegationId: delegation.delegationId }
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
from payments_py.x402 import CreateDelegationPayload, DelegationConfig, X402TokenOptions
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

    # Step 3: Create the delegation first, then get the token by delegation_id
    delegation = payments.delegation.create_delegation(
        CreateDelegationPayload(
            provider="erc4337", spending_limit_cents=100,
            duration_secs=3600, currency="usdc"
        )
    )
    token_response = payments.x402.get_x402_access_token(
        plan_id, agent_id,
        token_options=X402TokenOptions(
            delegation_config=DelegationConfig(
                delegation_id=delegation.delegation_id
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
