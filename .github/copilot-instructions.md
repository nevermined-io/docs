# Nevermined Payments — GitHub Copilot Instructions

This repository contains documentation for Nevermined, an AI payment infrastructure platform. When assisting with code that integrates Nevermined payments, follow these patterns.

## SDK Packages

- **TypeScript**: `@nevermined-io/payments` on npm
- **Python**: `payments-py` on PyPI (with extras: `payments-py[mcp]`, `payments-py[fastapi]`, `payments-py[strands]`)

## Required Environment Variables

- `NVM_API_KEY` — Nevermined API key (format: `sandbox:...` for sandbox, `live:...` for production)
- `NVM_ENVIRONMENT` — `sandbox` or `live`
- `NVM_PLAN_ID` — payment plan ID from Nevermined
- `NVM_AGENT_ID` — agent ID (required when plans have multiple agents)

## Framework Patterns

### Express.js (TypeScript)

```typescript
import { Payments } from '@nevermined-io/payments'
import { paymentMiddleware } from '@nevermined-io/payments/express'

const payments = Payments.getInstance({ nvmApiKey: process.env.NVM_API_KEY!, environment: 'sandbox' })

app.use(paymentMiddleware(payments, {
  'POST /ask': { planId: process.env.NVM_PLAN_ID!, credits: 1 }
}))
```

### FastAPI (Python)

```python
from payments_py import Payments, PaymentOptions
from payments_py.x402.fastapi import PaymentMiddleware

payments = Payments.get_instance(PaymentOptions(nvm_api_key=os.environ["NVM_API_KEY"], environment="sandbox"))

app.add_middleware(PaymentMiddleware, payments=payments, routes={"POST /ask": {"plan_id": PLAN_ID, "credits": 1}})
```

### Strands Agent (Python)

```python
from payments_py.x402.strands import requires_payment

@tool(context=True)
@requires_payment(payments=payments, plan_id=PLAN_ID, credits=1)
def my_tool(query: str, tool_context=None) -> dict:
    ...
```

### MCP Server (TypeScript)

```typescript
payments.mcp.registerTool(name, config, handler, { credits: 5n })
await payments.mcp.start({ port: 3000, agentId, serverName })
```

### Google A2A (TypeScript / Python)

```typescript
const agentCard = payments.a2a.buildPaymentAgentCard(baseCard, { paymentType: "dynamic", credits: 1, planId, agentId })
await payments.a2a.start({ port: 3005, basePath: '/a2a/', agentCard, executor })
```

## x402 Protocol Headers

- `payment-signature` — client sends x402 access token
- `payment-required` — server sends payment requirements (402 response, base64-encoded)
- `payment-response` — server sends settlement receipt (200 response, base64-encoded)

## Important API Notes

- Use `verifyPermissions` / `settlePermissions` (not the deprecated `isValidRequest`)
- Credits use `BigInt` in TypeScript (`1n`) and `int`/`str` in Python
- Middleware handles verify/settle automatically; manual integration requires both calls
- `buildPaymentRequired()` (TS) / `build_payment_required()` (Python) generates the 402 payload

## Autonomous Operations (REST, no SDK)

When an agent must act on its own behalf at runtime (buy a plan, enroll a card, check credits/revenue), use the REST API directly with `Authorization: Bearer $NVM_API_KEY` against `https://api.sandbox.nevermined.app` (sandbox) or `https://api.live.nevermined.app` (live). Buy in two calls:

```bash
# 1. token
POST /api/v1/x402/permissions  { "accepted": { "scheme": "nvm:erc4337", "network": "eip155:84532", "planId": "<id>" }, "delegationConfig": { "delegationId": "<id>" } }  → { accessToken }
# 2. settle (proof of purchase)
POST /api/v1/x402/settle  { "paymentRequired": { "x402Version": 2, "resource": { "url": "<url>" }, "accepts": [ { "scheme": "nvm:erc4337", "network": "eip155:84532", "planId": "<id>", "extra": {} } ], "extensions": {} }, "x402AccessToken": "<token>" }  → { creditsRedeemed, remainingBalance }
```

Card payments: `scheme: "nvm:card-delegation"`, `network: "stripe"`. A human is needed only once (first API key + card enrollment). Full runbook: `skills/nevermined-payments/references/autonomous-operations.md`.

## Full Reference

See `skills/nevermined-payments/SKILL.md` for complete integration patterns (Track A = operate autonomously via REST; Track B = add payments to your code via SDK).
