# Nevermined Payments SDK

## Purpose

Provide correct patterns for integrating Nevermined payment infrastructure into AI agents, MCP servers, and REST APIs using the x402 protocol.

## Instructions

- **TypeScript SDK**: `@nevermined-io/payments` on npm
- **Python SDK**: `payments-py` on PyPI (with extras: `payments-py[fastapi]`, `payments-py[strands]`)
- Always use environment variables: `NVM_API_KEY`, `NVM_ENVIRONMENT`, `NVM_PLAN_ID`, `NVM_AGENT_ID`
- Use `verifyPermissions` / `settlePermissions` for x402 (not the deprecated `isValidRequest`)
- Use `buildPaymentRequired()` (TS) or `build_payment_required()` (Python) for 402 responses
- Credits are `BigInt` in TypeScript (`1n`) and `int` or `str` in Python
- x402 headers: `payment-signature` (client token), `payment-required` (402 response), `payment-response` (settlement receipt)

## Express.js Pattern

```typescript
import { Payments } from '@nevermined-io/payments'
import { paymentMiddleware } from '@nevermined-io/payments/express'

const payments = Payments.getInstance({ nvmApiKey: process.env.NVM_API_KEY!, environment: 'sandbox' })
app.use(paymentMiddleware(payments, { 'POST /ask': { planId: process.env.NVM_PLAN_ID!, credits: 1 } }))
```

## FastAPI Pattern

```python
from payments_py import Payments, PaymentOptions
from payments_py.x402.fastapi import PaymentMiddleware

payments = Payments.get_instance(PaymentOptions(nvm_api_key=os.environ["NVM_API_KEY"], environment="sandbox"))
app.add_middleware(PaymentMiddleware, payments=payments, routes={"POST /ask": {"plan_id": PLAN_ID, "credits": 1}})
```

## Strands Agent Pattern

```python
from payments_py.x402.strands import requires_payment

@tool(context=True)
@requires_payment(payments=payments, plan_id=PLAN_ID, credits=1)
def my_tool(query: str, tool_context=None) -> dict:
    ...
```

## MCP Server Pattern

```typescript
payments.mcp.registerTool(name, config, handler, { credits: 5n })
await payments.mcp.start({ port: 3000, agentId, serverName })
```

## Priority

High — these patterns ensure correct payment integration and prevent common errors.
