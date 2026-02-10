# Nevermined Payments SDK

You are building an application that integrates Nevermined payments. Follow these patterns.

## SDK Packages

- **TypeScript**: `@nevermined-io/payments` (npm)
- **Python**: `payments-py` (PyPI)

## Environment Variables

Always use these env vars (never hardcode):
- `NVM_API_KEY` — Nevermined API key (`nvm:...`)
- `NVM_ENVIRONMENT` — `sandbox` or `live`
- `NVM_PLAN_ID` — payment plan ID
- `NVM_AGENT_ID` — agent ID (when plans have multiple agents)

## TypeScript Initialization

```typescript
import { Payments } from '@nevermined-io/payments'

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: 'sandbox'
})
```

## Python Initialization

```python
from payments_py import Payments, PaymentOptions

payments = Payments.get_instance(
    PaymentOptions(nvm_api_key=os.environ["NVM_API_KEY"], environment="sandbox")
)
```

## Express.js Middleware (TypeScript)

```typescript
import { paymentMiddleware } from '@nevermined-io/payments/express'

app.use(paymentMiddleware(payments, {
  'POST /ask': { planId: process.env.NVM_PLAN_ID!, credits: 1 }
}))
```

## FastAPI Middleware (Python)

```python
from payments_py.x402.fastapi import PaymentMiddleware

app.add_middleware(
    PaymentMiddleware,
    payments=payments,
    routes={"POST /ask": {"plan_id": os.environ["NVM_PLAN_ID"], "credits": 1}}
)
```

## Strands Agent Decorator (Python)

```python
from payments_py.x402.strands import requires_payment

@tool(context=True)
@requires_payment(payments=payments, plan_id=PLAN_ID, credits=1)
def my_tool(query: str, tool_context=None) -> dict:
    ...
```

## MCP Server (TypeScript)

```typescript
payments.mcp.registerTool(name, config, handler, { credits: 5n })
const { info, stop } = await payments.mcp.start({ port: 3000, agentId, serverName })
```

## x402 Headers

- `payment-signature`: Client sends x402 access token
- `payment-required`: Server sends payment requirements (402 response, base64-encoded)
- `payment-response`: Server sends settlement receipt (200 response, base64-encoded)

## Key Rules

- Use `verifyPermissions` / `settlePermissions` for manual x402 (not deprecated `isValidRequest`)
- Use `buildPaymentRequired()` (TS) or `build_payment_required()` (Python) to generate 402 responses
- Credits are `BigInt` in TypeScript (`1n`), `int` or `str` in Python
- Always settle after processing — middleware does this automatically
- Public routes are those NOT listed in the middleware route config
