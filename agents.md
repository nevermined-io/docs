# agents.md

> **Purpose**: This file provides complete context for AI coding assistants (Claude, Cursor, GitHub Copilot, etc.) to help developers integrate Nevermined into their applications. It contains the essential patterns, code examples, and API knowledge needed to monetize AI agents, MCP tools, and protected resources.

---

## Quick Reference

| What you're building       | Integration pattern                | Key SDK methods                                          |
| -------------------------- | ---------------------------------- | -------------------------------------------------------- |
| HTTP API / Agent endpoint  | Validate requests + redeem credits | `requests.startProcessing()`, `requests.redeemCredits()` |
| MCP Tool / Server          | Use `withPaywall` wrapper          | `mcp.configure()`, `mcp.withPaywall()`                   |
| Protected file / resource  | Validate before serving            | `requests.validateAccessToken()`                         |
| Agent calling other agents | A2A payments                       | `agents.getAgentAccessToken()`                           |
| x402 payment handshake     | Facilitator integration            | `facilitator.verify()`, `facilitator.settle()`           |

---

## Part 1: SDK Setup

### Installation

**TypeScript:**

```bash
npm install @nevermined-io/payments
```

**Python:**

```bash
pip install payments-py
```

### Initialization

**TypeScript:**

```typescript
import { Payments } from "@nevermined-io/payments";

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: "sandbox", // Use 'live' for production
});
```

**Python:**

```python
import os
from payments_py import Payments

payments = Payments(
    nvm_api_key=os.environ["NVM_API_KEY"],
    environment="sandbox"  # Use "live" for production
)
```

### Environment Variables

| Variable          | Description                                                           | Required                |
| ----------------- | --------------------------------------------------------------------- | ----------------------- |
| `NVM_API_KEY`     | Your Nevermined API key from [nevermined.app](https://nevermined.app) | Yes                     |
| `NVM_AGENT_ID`    | The DID of your registered agent/service                              | For protected endpoints |
| `NVM_PLAN_ID`     | The DID of your payment plan                                          | For client-side access  |
| `BUILDER_ADDRESS` | Your wallet address for receiving payments                            | For registration        |

---

## Part 2: Registration (Builder Side)

### Register an Agent + Payment Plan

This creates a monetizable service and attaches a payment plan in one call.

**TypeScript:**

```typescript
import {
  Payments,
  getERC20PriceConfig,
  getFixedCreditsConfig,
} from "@nevermined-io/payments";

const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e"; // Base Sepolia

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: "sandbox",
});

const { agentId, planId } = await payments.agents.registerAgentAndPlan(
  // Agent metadata
  {
    name: "Legal Research Assistant",
    description: "AI-powered legal document analysis",
    tags: ["legal", "ai", "research"],
    dateCreated: new Date(),
  },
  // Service endpoints
  {
    endpoints: [{ POST: "https://api.example.com/analyze" }],
  },
  // Plan metadata
  {
    name: "Professional Plan",
    description: "500 requests for $25",
    dateCreated: new Date(),
  },
  // Price: 25 USDC
  getERC20PriceConfig(
    25_000_000n, // 25 USDC (6 decimals)
    USDC_ADDRESS,
    process.env.BUILDER_ADDRESS!,
  ),
  // Credits: 500 requests, 1 credit per request
  getFixedCreditsConfig(500n, 1n),
  "credits",
);

console.log(`Agent ID: ${agentId}`);
console.log(`Plan ID: ${planId}`);
```

**Python:**

```python
from payments_py import Payments
from payments_py.utils import get_erc20_price_config, get_fixed_credits_config
import os

USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e"  # Base Sepolia

payments = Payments(
    nvm_api_key=os.environ["NVM_API_KEY"],
    environment="sandbox"
)

result = payments.agents.register_agent_and_plan(
    # Agent metadata
    agent_metadata={
        "name": "Legal Research Assistant",
        "description": "AI-powered legal document analysis",
        "tags": ["legal", "ai", "research"],
    },
    # Service endpoints
    service_metadata={
        "endpoints": [{"POST": "https://api.example.com/analyze"}]
    },
    # Plan metadata
    plan_metadata={
        "name": "Professional Plan",
        "description": "500 requests for $25",
    },
    # Price: 25 USDC
    price_config=get_erc20_price_config(
        amount=25_000_000,
        token_address=USDC_ADDRESS,
        receiver=os.environ["BUILDER_ADDRESS"]
    ),
    # Credits configuration
    credits_config=get_fixed_credits_config(credits=500, cost_per_request=1),
    plan_type="credits"
)

print(f"Agent ID: {result['agentId']}")
print(f"Plan ID: {result['planId']}")
```

### Plan Types

| Type      | Use Case                      | Configuration                                            |
| --------- | ----------------------------- | -------------------------------------------------------- |
| `credits` | Usage-based (pay per request) | `getFixedCreditsConfig(totalCredits, creditsPerRequest)` |
| `time`    | Subscription (pay per period) | Duration in days/months                                  |
| `both`    | Hybrid (credits that expire)  | Credits + expiration time                                |

### Price Helpers

```typescript
// ERC-20 token payment (USDC, etc.)
getERC20PriceConfig(amount, tokenAddress, receiverAddress);

// Native token payment (ETH, MATIC, etc.)
getNativeTokenPriceConfig(amount, receiverAddress);

// Fiat payment via Stripe
getFiatPriceConfig(amountInCents, currency, receiverAddress);
```

---

## Part 3: Access Validation (Server Side)

### Pattern A: Manual Validation (Express/FastAPI)

Use this when you want full control over the validation flow.

**TypeScript (Express):**

```typescript
import express from "express";
import { Payments } from "@nevermined-io/payments";

const app = express();
const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: "sandbox",
});

app.post("/query", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing authorization token" });
  }
  const accessToken = authHeader.slice(7);

  try {
    // 1. Start processing - validates token and reserves request
    const { requestId } = await payments.requests.startProcessing(
      accessToken,
      process.env.NVM_AGENT_ID!,
      { POST: "/query" },
    );

    // 2. Execute your business logic
    const result = await yourBusinessLogic(req.body);

    // 3. Redeem credits (charge the user)
    await payments.requests.redeemCredits(requestId, 1n);

    return res.json(result);
  } catch (error) {
    return res
      .status(402)
      .json({ error: "Payment required or insufficient credits" });
  }
});
```

**Python (FastAPI):**

```python
from fastapi import FastAPI, Header, HTTPException
from payments_py import Payments
import os

app = FastAPI()
payments = Payments(
    nvm_api_key=os.environ["NVM_API_KEY"],
    environment="sandbox"
)

@app.post("/query")
async def query(request: dict, authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing authorization token")

    access_token = authorization[7:]

    try:
        # 1. Start processing
        result = payments.requests.start_processing(
            access_token=access_token,
            agent_id=os.environ["NVM_AGENT_ID"],
            endpoint={"POST": "/query"}
        )
        request_id = result["requestId"]

        # 2. Execute business logic
        response = await your_business_logic(request)

        # 3. Redeem credits
        payments.requests.redeem_credits(request_id, 1)

        return response
    except Exception as e:
        raise HTTPException(status_code=402, detail="Payment required")
```

### Pattern B: MCP Paywall Wrapper

Use this for MCP tool/server integrations. The wrapper handles validation automatically.

**TypeScript:**

```typescript
import { Payments } from "@nevermined-io/payments";
import { McpServer } from "@modelcontextprotocol/sdk/server";

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: "sandbox",
});

// Configure MCP integration
payments.mcp.configure({
  agentId: process.env.NVM_AGENT_ID!,
  serverName: "my-mcp-server",
});

// Your business logic handler
async function weatherHandler(args: { city: string }) {
  return {
    content: [{ type: "text", text: `Weather in ${args.city}: Sunny, 22°C` }],
  };
}

// Wrap with paywall
const protectedHandler = payments.mcp.withPaywall(weatherHandler, {
  kind: "tool",
  name: "get-weather",
  credits: 1n,
});

// Register with MCP server
const server = new McpServer({ name: "my-mcp-server", version: "1.0.0" });
server.tool("get-weather", { city: { type: "string" } }, protectedHandler);
```

**Python:**

```python
from payments_py import Payments
from fastmcp import FastMCP
import os

payments = Payments(
    nvm_api_key=os.environ["NVM_API_KEY"],
    environment="sandbox"
)

mcp = FastMCP(name="my-mcp-server")

# Configure with FastMCP context
payments.mcp.configure({
    "agentId": os.environ["NVM_AGENT_ID"],
    "serverName": "my-mcp-server",
    "getContext": mcp.get_context  # Required for FastMCP
})

# Your business logic
async def weather_handler(args: dict) -> dict:
    city = args.get("city", "Unknown")
    return {"content": [{"type": "text", "text": f"Weather in {city}: Sunny, 22°C"}]}

# Wrap with paywall
protected_handler = payments.mcp.with_paywall(weather_handler, {
    "kind": "tool",
    "name": "get-weather",
    "credits": 1
})

# Register tool
@mcp.tool()
async def get_weather(city: str):
    return await protected_handler({"city": city})
```

### Dynamic Credit Calculation

Charge variable amounts based on request complexity:

**TypeScript:**

```typescript
const protectedHandler = payments.mcp.withPaywall(handler, {
  kind: "tool",
  name: "analyze-document",
  credits: (ctx) => {
    const wordCount = ctx.args.text?.split(" ").length || 0;
    // 1 credit per 100 words, minimum 1
    return BigInt(Math.max(1, Math.ceil(wordCount / 100)));
  },
});
```

**Python:**

```python
def calculate_credits(ctx: dict) -> int:
    text = ctx.get("args", {}).get("text", "")
    word_count = len(text.split())
    # 1 credit per 100 words, minimum 1
    return max(1, (word_count + 99) // 100)

protected_handler = payments.mcp.with_paywall(handler, {
    "kind": "tool",
    "name": "analyze-document",
    "credits": calculate_credits
})
```

---

## Part 4: Client Access (Subscriber Side)

### Get an Access Token

Subscribers need to purchase a plan first (via nevermined.app or SDK), then get an access token.

**TypeScript:**

```typescript
import { Payments } from "@nevermined-io/payments";

const payments = Payments.getInstance({
  nvmApiKey: process.env.SUBSCRIBER_API_KEY!, // Subscriber's own key
  environment: "sandbox",
});

// Get access token for a specific agent + plan
const { accessToken } = await payments.agents.getAgentAccessToken(
  process.env.PLAN_ID!,
  process.env.AGENT_ID!,
);

// Use token in requests
const response = await fetch("https://api.example.com/query", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: "Analyze this document..." }),
});
```

**Python:**

```python
from payments_py import Payments
import requests
import os

payments = Payments(
    nvm_api_key=os.environ["SUBSCRIBER_API_KEY"],
    environment="sandbox"
)

# Get access token
creds = payments.agents.get_agent_access_token(
    plan_id=os.environ["PLAN_ID"],
    agent_id=os.environ["AGENT_ID"]
)
access_token = creds["accessToken"]

# Use token in requests
response = requests.post(
    "https://api.example.com/query",
    headers={"Authorization": f"Bearer {access_token}"},
    json={"query": "Analyze this document..."}
)
```

### Check Balance

```typescript
const balance = await payments.plans.getPlanBalance(planId);
console.log(`Remaining credits: ${balance.balance}`);
console.log(`Is active: ${balance.isSubscriptor}`);
```

```python
balance = payments.plans.get_plan_balance(plan_id)
print(f"Remaining credits: {balance['balance']}")
print(f"Is active: {balance['isSubscriptor']}")
```

---

## Part 5: x402 Protocol Integration

x402 is a standard payment handshake for HTTP APIs. When a client makes a request without payment, the server returns `402 Payment Required` with payment details.

### Server: Return 402 with Payment Requirements

```typescript
import { Payments } from "@nevermined-io/payments";

app.post("/premium-api", async (req, res) => {
  const paymentHeader = req.headers["x-payment"];

  if (!paymentHeader) {
    // Return 402 with payment requirements
    const requirements = await payments.facilitator.getPaymentRequirements({
      price: 100000n, // 0.10 USDC
      tokenAddress: USDC_ADDRESS,
      receiver: process.env.BUILDER_ADDRESS!,
    });

    return res
      .status(402)
      .set("X-Payment-Requirements", JSON.stringify(requirements))
      .json({ error: "Payment required" });
  }

  // Verify payment
  const verification = await payments.facilitator.verify(paymentHeader);
  if (!verification.valid) {
    return res.status(402).json({ error: "Invalid payment" });
  }

  // Execute request
  const result = await yourBusinessLogic(req.body);

  // Settle payment
  await payments.facilitator.settle(verification.paymentId);

  return res.json(result);
});
```

### Client: Handle 402 Response

```typescript
async function callPremiumAPI(data: any) {
  // First attempt without payment
  let response = await fetch("https://api.example.com/premium-api", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.status === 402) {
    // Get payment requirements
    const requirements = JSON.parse(
      response.headers.get("X-Payment-Requirements")!,
    );

    // Create payment proof
    const paymentProof = await payments.x402.createPaymentProof(requirements);

    // Retry with payment
    response = await fetch("https://api.example.com/premium-api", {
      method: "POST",
      headers: { "X-Payment": paymentProof },
      body: JSON.stringify(data),
    });
  }

  return response.json();
}
```

---

## Part 6: Agent-to-Agent (A2A) Payments

When your agent needs to call and pay for another agent's services.

```typescript
import { Payments } from "@nevermined-io/payments";

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: "sandbox",
});

// Your agent calling another paid agent
async function callExternalAgent(query: string) {
  const EXTERNAL_AGENT_ID = "did:nv:external-agent-id";
  const EXTERNAL_PLAN_ID = "did:nv:external-plan-id";

  // 1. Get access token for the external agent
  const { accessToken } = await payments.agents.getAgentAccessToken(
    EXTERNAL_PLAN_ID,
    EXTERNAL_AGENT_ID,
  );

  // 2. Call the external agent with the token
  const response = await fetch("https://external-agent.com/api/query", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  return response.json();
}
```

---

## Part 7: Common Patterns

### Error Handling

```typescript
try {
  await payments.requests.startProcessing(token, agentId, endpoint);
} catch (error) {
  if (error.code === "INVALID_TOKEN") {
    // Token expired or invalid - client should get new token
  } else if (error.code === "INSUFFICIENT_CREDITS") {
    // User needs to purchase more credits
  } else if (error.code === "PLAN_EXPIRED") {
    // Time-based plan has expired
  }
}
```

### Middleware Pattern (Express)

```typescript
function nevermindedAuth(creditsPerRequest = 1n) {
  return async (req, res, next) => {
    const token = req.headers.authorization?.slice(7);
    if (!token) return res.status(401).json({ error: "No token" });

    try {
      const { requestId } = await payments.requests.startProcessing(
        token,
        process.env.NVM_AGENT_ID!,
        { [req.method]: req.path },
      );
      req.nevermined = { requestId };

      // Redeem credits after response
      res.on("finish", async () => {
        if (res.statusCode < 400) {
          await payments.requests.redeemCredits(requestId, creditsPerRequest);
        }
      });

      next();
    } catch (error) {
      return res.status(402).json({ error: "Payment required" });
    }
  };
}

// Usage
app.post("/api/*", nevermindedAuth(1n), (req, res) => {
  // Your handler - credits automatically redeemed on success
});
```

### Decorator Pattern (Python/FastAPI)

```python
from functools import wraps

def nevermined_auth(credits_per_request: int = 1):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, authorization: str = Header(None), **kwargs):
            if not authorization:
                raise HTTPException(401, "No token")

            token = authorization.replace("Bearer ", "")
            result = payments.requests.start_processing(
                access_token=token,
                agent_id=os.environ["NVM_AGENT_ID"],
                endpoint={"POST": "/api"}
            )

            try:
                response = await func(*args, **kwargs)
                payments.requests.redeem_credits(
                    result["requestId"],
                    credits_per_request
                )
                return response
            except Exception as e:
                raise
        return wrapper
    return decorator

# Usage
@app.post("/api/query")
@nevermined_auth(credits_per_request=1)
async def query(request: QueryRequest):
    return await process_query(request)
```

---

## Part 8: API Reference Summary

### Payments Modules

| Module                 | Methods                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| `payments.agents`      | `registerAgent()`, `registerAgentAndPlan()`, `getAgent()`, `updateAgent()`, `getAgentAccessToken()` |
| `payments.plans`       | `registerPlan()`, `getPlan()`, `getPlanBalance()`, `orderPlan()`                                    |
| `payments.requests`    | `startProcessing()`, `redeemCredits()`, `validateAccessToken()`                                     |
| `payments.mcp`         | `configure()`, `withPaywall()`, `attach()`                                                          |
| `payments.facilitator` | `verify()`, `settle()`, `getPaymentRequirements()`                                                  |
| `payments.x402`        | `createPaymentProof()`, `parsePaymentRequirements()`                                                |

### Key Types

```typescript
interface AgentMetadata {
  name: string;
  description: string;
  tags?: string[];
  dateCreated?: Date;
}

interface PlanMetadata {
  name: string;
  description: string;
  dateCreated?: Date;
}

interface AccessCredentials {
  accessToken: string;
  expiresAt: number;
}

interface RequestResult {
  requestId: string;
  status: "started" | "completed" | "failed";
}
```

---

## Part 9: Troubleshooting

| Error                     | Cause                         | Solution                                     |
| ------------------------- | ----------------------------- | -------------------------------------------- |
| `INVALID_API_KEY`         | API key is wrong or expired   | Generate new key at nevermined.app           |
| `AGENT_NOT_FOUND`         | Agent ID doesn't exist        | Check agent registration                     |
| `PLAN_NOT_FOUND`          | Plan ID doesn't exist         | Check plan is linked to agent                |
| `INVALID_TOKEN`           | Access token expired/invalid  | Get fresh token with `getAgentAccessToken()` |
| `INSUFFICIENT_CREDITS`    | User has no credits left      | User needs to purchase plan                  |
| `ENDPOINT_NOT_REGISTERED` | Calling unregistered endpoint | Register endpoint in agent config            |

---

## Part 10: Links & Resources

- **Nevermined App**: [nevermined.app](https://nevermined.app)
- **Documentation**: [docs.nevermined.io](https://docs.nevermined.io)
- **TypeScript SDK**: [npm @nevermined-io/payments](https://www.npmjs.com/package/@nevermined-io/payments)
- **Python SDK**: [PyPI payments-py](https://pypi.org/project/payments-py/)
- **x402 Spec**: [docs.nevermined.io/docs/specs/introduction](https://docs.nevermined.io/docs/specs/introduction)
- **GitHub Examples**: [github.com/nevermined-io](https://github.com/nevermined-io)

---

## Version

This document covers:

- `@nevermined-io/payments` v0.x (TypeScript)
- `payments-py` v0.x (Python)

Last updated: January 2026
