# MCP Server Paywall

Protect Model Context Protocol (MCP) servers with Nevermined payments. The library handles MCP server creation, OAuth 2.1 endpoints, paywall protection, and credit billing.

## Installation

```bash
npm install @nevermined-io/payments zod
```

## Quick Start — Complete MCP Server

```typescript
import { Payments } from "@nevermined-io/payments"
import { z } from "zod"

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: "sandbox"
})

// Register tools with built-in paywall
payments.mcp.registerTool(
  "weather.today",
  {
    title: "Today's Weather",
    description: "Get weather for a city",
    inputSchema: z.object({
      city: z.string().min(2).max(80).describe("City name")
    })
  },
  async (args, extra, context) => {
    console.log(`Request ID: ${context?.agentRequest?.agentRequestId}`)
    console.log(`Credits charged: ${context?.credits}`)

    const weather = await fetchWeather(args.city)
    return {
      content: [{
        type: "text",
        text: `Weather in ${args.city}: ${weather.description}, ${weather.temp}°C`
      }]
    }
  },
  { credits: 5n }
)

// Start everything (MCP Server + Express + OAuth)
const { info, stop } = await payments.mcp.start({
  port: 3000,
  planId: process.env.NVM_PLAN_ID!,    // required — the plan every paywalled tool charges against
  agentId: process.env.NVM_AGENT_ID,   // optional, informational
  serverName: "my-weather-server",
  version: "1.0.0",
  description: "Weather MCP server with OAuth authentication"
})

console.log(`Server running at ${info.baseUrl}/mcp`)

process.on("SIGINT", async () => {
  await stop()
  process.exit(0)
})
```

## What `payments.mcp.start()` Does

This single call handles:
1. **Express Server Setup** — creates and configures the Express.js application
2. **OAuth Endpoints** — auto-generates RFC-compliant discovery endpoints:
   - `/.well-known/oauth-authorization-server`
   - `/.well-known/oauth-protected-resource`
   - `/.well-known/openid-configuration`
   - `/register` (Dynamic Client Registration — RFC 7591)
3. **MCP Transport** — HTTP transport endpoints (POST/GET/DELETE `/mcp`)
4. **Session Management** — SSE streaming and session lifecycle
5. **CORS & Middleware** — CORS, JSON parsing, HTTP logging
6. **Graceful Shutdown** — returns a `stop()` function

## Dynamic Credits

Calculate credits based on the handler's result instead of using a fixed value:

```typescript
import type { CreditsContext } from "@nevermined-io/payments"

const dynamicCredits = (ctx: CreditsContext): bigint => {
  const result = ctx.result as { content: Array<{ text: string }> }
  const text = result.content[0]?.text || ""
  return BigInt(Math.ceil(text.length / 100))
}

payments.mcp.registerTool(
  "weather.today",
  config,
  handler,
  { credits: dynamicCredits }
)
```

- **Fixed credits** (`credits: 5n`): calculated BEFORE handler execution
- **Dynamic credits** (function): calculated AFTER handler execution, based on `ctx.result`

## Handler Options

| Option | Type | Description |
|--------|------|-------------|
| `credits` | `bigint` or `function` | Credits to consume per call |
| `planId` | `string` | Per-tool plan ID (otherwise the server-level `planId` from `start()` / `configure()`) |
| `maxAmount` | `bigint` | Max credits to verify during authentication (default: `1n`) |
| `onRedeemError` | `string` | `'ignore'` (default) returns the in-band payment error when settlement fails; `'propagate'` throws a `-32002` error instead. Either way the tool's content is not returned |

## Response Metadata (`_meta`)

After a paywall-protected call settles, the SDK adds two keys to the result's `_meta`: the x402 settlement receipt under `x402/payment-response`, and a Nevermined summary under `nevermined/credits`:

```typescript
{
  content: [{ type: 'text', text: 'result' }],
  _meta: {
    'x402/payment-response': { success: true, transaction: '0xabc...', network: 'eip155:84532', /* ...full settle receipt */ },
    'nevermined/credits': {
      success: true,
      billingModel: 'credits',
      txHash: '0xabc...',
      creditsRedeemed: '5',
      remainingBalance: '95',
      planId: 'plan-123',
      subscriberAddress: '0x123...',
    },
  },
}
```

If settlement fails after the tool ran, the tool's content is **not** returned: the call comes back as an error tool result (`isError: true`, the `PaymentRequired` object in `structuredContent`), so a paid result is never delivered unpaid.

Fields of `_meta['nevermined/credits']`:

| Field | Type | Description |
|-------|------|-------------|
| `success` | `boolean` | Whether settlement succeeded (`true` for calls that settle nothing) |
| `billingModel` | `string` | `credits` or `pay-as-you-go`. **Read this before either credit field.** Absent on a deployment predating it; treat that as `credits`. |
| `txHash` | `string` | Settlement transaction reference (when present) |
| `creditsRedeemed` | `string` | Number of credits burned — **always `'0'` on a pay-as-you-go plan, including a successful charge**. Omitted when the settle reported no figure |
| `remainingBalance` | `string` | Credits remaining after redemption (also always `'0'` on pay-as-you-go) |
| `orderTx` | `string` | Charge reference on pay-as-you-go plans (when present) |
| `planId` | `string` | Plan used for the operation |
| `subscriberAddress` | `string` | Subscriber's wallet address |

## Client Usage

### Get Access Token

```typescript
const delegation = await paymentsClient.delegation.createDelegation({
  provider: 'erc4337', spendingLimitCents: 100, durationSecs: 3600, currency: 'usdc'
})
const { accessToken } = await paymentsClient.x402.getX402AccessToken(planId, agentId, {
  delegationConfig: { delegationId: delegation.delegationId }
})
```

### Connect with MCP Client

```typescript
import { Client } from "@modelcontextprotocol/sdk/client"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp"
import { decodeAccessToken } from "@nevermined-io/payments"

// Nevermined MCP servers do not read the `payment-signature` header. The `/mcp`
// endpoint requires `Authorization: Bearer <accessToken>`; the paywall prefers the
// in-band `_meta["x402/payment"]` payload (below) when present.
const transport = new StreamableHTTPClientTransport(
  new URL("http://localhost:3000/mcp"),
  {
    requestInit: {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  }
)

const client = new Client({ name: "my-client" })
await client.connect(transport)

const result = await client.callTool({
  name: "weather.today",
  arguments: { city: "Madrid" },
  _meta: { "x402/payment": decodeAccessToken(accessToken) },
})
```

### Claude Desktop Configuration

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

```json
{
  "mcpServers": {
    "weather": {
      "url": "http://localhost:3000/mcp",
      "type": "http"
    }
  }
}
```

OAuth authentication is handled automatically by the server.

## Advanced: Low-Level APIs

`withPaywall` and `attach` need a resolvable plan ID when a handler is registered — configure it server-wide first or pass `planId` per handler; otherwise registration throws `Server misconfiguration: missing planId`.

### `withPaywall` for Custom Servers

```typescript
payments.mcp.configure({ planId: process.env.NVM_PLAN_ID!, serverName: "my-server" })

const protectedHandler = payments.mcp.withPaywall(
  myHandler,
  {
    kind: "tool",
    name: "my.tool",
    credits: 5n
  }
)
```

### `attach` for Declarative Registration

```typescript
const server = new McpServer({ name: "my-server", version: "1.0.0" })
const registrar = payments.mcp.attach(server)

registrar.registerTool(
  "weather.today",
  config,
  handler,
  { credits: 1n }
)
```

## MCP Error Codes

For **tools**, Payment Required (no token, invalid token, insufficient credits, or settlement failed after execution) is not a JSON-RPC error: it comes back in band as a tool result with `isError: true` and the `PaymentRequired` object in `structuredContent` (x402 v2 MCP transport). Resources and prompts have no tool-result channel, so there it surfaces as a JSON-RPC error.

| Error Code | Description |
|---|---|
| `-32003` | Payment Required — resources and prompts only (see above for tools); the MCP SDK may forward only the message, not the code |
| `-32002` | Misconfiguration — server setup error |
| `-32603` | Internal Error — handler execution failed |

## Logical MCP URLs

Nevermined identifies protected methods by logical URL:
`mcp://<serverName>/<typeName>/<methodName>`

- `mcp://weather-mcp/tools/weather.today`
- `mcp://weather-mcp/resources/weather.ensureCity`
- `mcp://weather-mcp/meta/initialize`

For dynamic URIs, use placeholders: `mcp://weather-mcp/resources/weather.today?city={city}`

## Environment Variables

```bash
NVM_API_KEY=sandbox:your-api-key
NVM_ENVIRONMENT=sandbox
NVM_PLAN_ID=your-plan-id
NVM_AGENT_ID=your-agent-id          # Optional
```

## Tutorial

Production-ready example: [github.com/nevermined-io/tutorials/tree/main/mcp-examples/weather-mcp](https://github.com/nevermined-io/tutorials/tree/main/mcp-examples/weather-mcp)
