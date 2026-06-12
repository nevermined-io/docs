# LangChain & LangGraph Integration

Add x402 payment protection to LangChain tools and LangGraph ReAct agents. Python uses the `@requires_payment` decorator + helpers from `payments_py.x402.langchain`; TypeScript uses the matching `requiresPayment` wrapper + helpers from `@nevermined-io/payments/langchain` (see [TypeScript](#typescript-nevermined-iopayments) below). The sections below are Python unless noted.

## Installation

```bash
pip install payments-py[langchain] langgraph langchain-openai
```

The `[langchain]` extra installs `langchain-core`. `langgraph` and `langchain-openai` are optional — needed only for the LangGraph agent helper.

## Quick Start — protect a tool

Decorator order is `@tool` **outside**, `@requires_payment` **inside**. The tool function **must** accept a `config: RunnableConfig` parameter — that is how the decorator reads the payment token at call time.

```python
import os
from dotenv import load_dotenv
from langchain_core.runnables import RunnableConfig
from langchain_core.tools import tool
from payments_py import Payments, PaymentOptions
from payments_py.x402.langchain import requires_payment

load_dotenv()

payments = Payments.get_instance(
    PaymentOptions(
        nvm_api_key=os.environ["NVM_API_KEY"],
        environment=os.environ.get("NVM_ENVIRONMENT", "sandbox"),
    )
)

PLAN_ID = os.environ["NVM_PLAN_ID"]

@tool
@requires_payment(payments=payments, plan_id=PLAN_ID, credits=1)
def get_market_insight(topic: str, config: RunnableConfig = None) -> str:
    """Return a short market insight. Costs 1 credit per call."""
    return f"Market insight for '{topic}': demand is up 12% QoQ."
```

The decorator automatically:
- Raises `PaymentRequiredError` when no token is in `config["configurable"]["payment_token"]`
- Verifies the x402 token via the Nevermined facilitator
- Executes the tool function on successful verification
- Burns credits after successful execution

## Payment Error Flow — discovery-first

`@requires_payment` raises `PaymentRequiredError` with the full `X402PaymentRequired` payload attached. The buyer learns scheme / network / plan_id from the exception and uses them to acquire a token — no upfront configuration needed beyond an API key.

```python
from payments_py.x402.langchain import PaymentRequiredError
from payments_py.x402.types import (
    CreateDelegationPayload,
    DelegationConfig,
    X402TokenOptions,
)

# Step 1: call the agent without a token to discover requirements
try:
    agent.invoke({"messages": [("human", QUERY)]}, config={"configurable": {}})
except PaymentRequiredError as err:
    accept = err.payment_required.accepts[0]
    # accept.scheme    → "nvm:erc4337" or "nvm:card-delegation"
    # accept.network   → CAIP-2 chain or provider name (stripe, braintree, visa)
    # accept.plan_id   → which plan to acquire a token against

# Step 2: pick a payment method matching the discovered network and create a
# delegation once (provider + currency required); reuse its delegation_id later.
pm = next(
    m for m in payments.delegation.list_payment_methods()
    if m.provider == accept.network
)
delegation = payments.delegation.create_delegation(
    CreateDelegationPayload(
        provider=pm.provider,
        provider_payment_method_id=pm.id,
        spending_limit_cents=10000,  # $100 cap per delegation
        duration_secs=3600,          # 1 hour TTL
        currency="usd",
    )
)

# Step 3: acquire a token against the discovered plan by delegation_id
token = payments.x402.get_x402_access_token(
    accept.plan_id,
    token_options=X402TokenOptions(
        scheme=accept.scheme,
        delegation_config=DelegationConfig(
            delegation_id=delegation.delegation_id,
        ),
    ),
)["accessToken"]

# Step 4: retry with the token
result = agent.invoke(
    {"messages": [("human", QUERY)]},
    config={"configurable": {"payment_token": token}},
)
```

## LangGraph agent — `create_paid_react_agent`

LangGraph's default `ToolNode` catches `PaymentRequiredError` and stringifies it into a `ToolMessage` for the LLM, **losing the `X402PaymentRequired` payload**. Use `create_paid_react_agent` instead — it builds the ToolNode with `handle_tool_errors=False` so the exception propagates intact to the outer caller.

```python
from langchain_openai import ChatOpenAI
from payments_py.x402.langchain import create_paid_react_agent

agent = create_paid_react_agent(
    ChatOpenAI(model="gpt-4o-mini", temperature=0),
    [get_market_insight],
    prompt="You are a market data assistant. Always call get_market_insight.",
)
```

All `create_react_agent` kwargs (`prompt`, `state_schema`, `checkpointer`, …) are forwarded.

## Reading the settlement receipt — `last_settlement`

After a successful agent call, recover the receipt with `last_settlement()`. LangGraph copies `RunnableConfig.configurable` per node, so the SDK's in-place write of `payment_settlement` isn't visible to the outer caller — `last_settlement()` reads from a module-level slot the decorator updates on every settle.

```python
from payments_py.x402.langchain import last_settlement

result = agent.invoke(
    {"messages": [("human", QUERY)]},
    config={"configurable": {"payment_token": token}},
)

receipt = last_settlement()
if receipt:
    print(f"credits redeemed:  {receipt.credits_redeemed}")
    print(f"remaining balance: {receipt.remaining_balance}")
    print(f"transaction:       {receipt.transaction}")
```

**Single-tenant only.** The slot is process-global — in multi-tenant servers (concurrent settlements), the value reflects whichever invocation settled most recently. Use a callback or observability layer for multi-tenant scenarios.

## Observability with LangSmith — `payments-py[langsmith]`

Install the optional extra (`pip install "payments-py[langchain,langsmith]"`) and set `LANGSMITH_TRACING=true` + `LANGSMITH_API_KEY` (+ `LANGSMITH_ENDPOINT=https://eu.api.smith.langchain.com` for non-US accounts). `@requires_payment` then automatically emits two dedicated child spans nested under the active tool span — `nvm:verify` and `nvm:settlement` — each carrying `nvm.*` metadata for audit and reconciliation. No code changes required.

```text
LangGraph
└── tools
    └── get_market_insight
        ├── nvm:verify      attrs: nvm.plan_ids, nvm.scheme, nvm.network, nvm.payer, nvm.agent_request_id, nvm.payment_token (abbrev), nvm.verify.duration_ms
        └── nvm:settlement  attrs: nvm.credits_redeemed, nvm.balance.after, nvm.tx_hash, nvm.payer, nvm.payment_token (abbrev), nvm.settle.duration_ms
```

The same `nvm.*` metadata is also attached to the parent tool span. Failed discovery probes (no `payment_token` in config) still produce an `nvm:verify` span with the static attrs, marked failed by the raised `PaymentRequiredError` — so observability survives the first invocation of the discovery-first flow.

**Token redaction.** LangChain auto-captures every key in `config["configurable"]` into the parent tool span's metadata, which child spans inherit. The decorator strips `payment_token` from the parent span before opening any `nvm:*` child, so the full credential never reaches a Nevermined-emitted attribute. The abbreviated `nvm.payment_token` (`<first 16>…<last 4>`) remains for correlation. To cover non-configurable channels (custom callbacks, tool args, etc.) set `LANGSMITH_HIDE_INPUTS=true` for blanket coverage.

Observability failures are silently logged and dropped — the payment flow itself is never interrupted, and `last_settlement()` continues to return the on-chain receipt even if span emission fails.

## Decorator Configuration

### Single plan

```python
@tool
@requires_payment(payments=payments, plan_id="plan-123", credits=1)
def my_tool(query: str, config: RunnableConfig = None) -> str: ...
```

### Multiple plans

```python
@tool
@requires_payment(
    payments=payments,
    plan_ids=["plan-basic", "plan-premium"],
    credits=1,
)
def my_tool(query: str, config: RunnableConfig = None) -> str: ...
```

### Dynamic credits

```python
@tool
@requires_payment(
    payments=payments,
    plan_id=PLAN_ID,
    credits=lambda ctx: max(1, len(ctx["result"]) // 100),
)
def summarize(text: str, config: RunnableConfig = None) -> str:
    """Cost scales with output length."""
    return f"Summary of: {text}..."
```

The `ctx` dict passed to the credits callable is `{"args": <tool kwargs>, "result": <tool return>}`. Resolved **after** execution so the result is available.

### With agent ID

```python
@tool
@requires_payment(
    payments=payments,
    plan_id=PLAN_ID,
    credits=1,
    agent_id=os.environ.get("NVM_AGENT_ID"),
)
def my_tool(query: str, config: RunnableConfig = None) -> str: ...
```

## Credits semantics — fixed vs. range plans

The `credits` argument is sent to the facilitator as `max_amount`. The amount actually redeemed depends on the plan's server-side credit config:

- **Fixed plans** (where `plan.credits.minAmount == plan.credits.maxAmount`) always burn `plan.credits.maxAmount`. The decorator's `credits=N` is effectively a no-op (per [nvm-monorepo#1568](https://github.com/nevermined-io/nvm-monorepo/issues/1568)).
- **Range plans** clamp the value into `[plan.credits.minAmount, plan.credits.maxAmount]`.

Configure the plan as fixed if you want predictable per-call cost; the decorator value is then a client-side declaration.

## TypeScript (`@nevermined-io/payments`)

The TypeScript SDK ships the same primitives under the `@nevermined-io/payments/langchain` sub-path export. The shapes match the Python API one-to-one; only the casing and idioms differ (`requiresPayment` is a higher-order **wrapper** around the tool implementation, not a decorator).

```bash
pnpm add @nevermined-io/payments @langchain/core @langchain/langgraph @langchain/openai
```

`@langchain/core` is the only LangChain peer the wrapper needs; `@langchain/langgraph` and `@langchain/openai` are optional — required only for `createPaidReactAgent`. `createPaidReactAgent` imports `@langchain/langgraph` lazily, so it is **async** (`await`).

### Protect a tool

```typescript
import { tool } from '@langchain/core/tools'
import { z } from 'zod'
import { Payments } from '@nevermined-io/payments'
import { requiresPayment } from '@nevermined-io/payments/langchain'

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY!,
  environment: process.env.NVM_ENVIRONMENT ?? 'sandbox',
})

const PLAN_ID = process.env.NVM_PLAN_ID!

const getMarketInsight = tool(
  requiresPayment(
    (args) => `Market insight for '${args.topic}': demand is up 12% QoQ.`,
    { payments, planId: PLAN_ID, credits: 1 },
  ),
  {
    name: 'get_market_insight',
    description: 'Return a short market insight. Costs 1 credit per call.',
    schema: z.object({ topic: z.string() }),
  },
)
```

The wrapper extracts the token from `config.configurable.payment_token` (the second arg LangChain threads into the tool impl), verifies via the facilitator, runs the tool, then settles. Missing/invalid token → `PaymentRequiredError` carrying the `X402PaymentRequired` payload.

### LangGraph agent + discovery-first flow

`createPaidReactAgent` builds the underlying `ToolNode` with `handleToolErrors: false` so `PaymentRequiredError` reaches `agent.invoke()`'s caller with its payload intact (the default `ToolNode` would stringify it into a `ToolMessage` and lose the payload).

```typescript
import { ChatOpenAI } from '@langchain/openai'
import {
  PaymentRequiredError,
  createPaidReactAgent,
  lastSettlement,
} from '@nevermined-io/payments/langchain'

const agent = await createPaidReactAgent(
  new ChatOpenAI({ model: 'gpt-4o-mini', temperature: 0 }),
  [getMarketInsight],
  { prompt: 'You are a market data assistant.' },
)

// 1. Discover by invoking without a token.
let accept
try {
  await agent.invoke(
    { messages: [{ role: 'human', content: QUERY }] },
    { configurable: {} },
  )
} catch (err) {
  if (!(err instanceof PaymentRequiredError)) throw err
  accept = err.paymentRequired!.accepts[0] // .scheme / .network / .planId
}

// 2. Pick a payment method matching the discovered network and create a
//    delegation once (provider + currency required); reuse its delegationId.
const methods = await payments.delegation.listPaymentMethods()
const pm = methods.find((m) => m.provider === accept.network)!
const delegation = await payments.delegation.createDelegation({
  provider: pm.provider!,
  providerPaymentMethodId: pm.id,
  spendingLimitCents: 10000, // $100 cap per delegation
  durationSecs: 3600, // 1 hour TTL
  currency: 'usd',
})

// 3. Acquire a token against the discovered plan by delegationId.
const { accessToken } = await payments.x402.getX402AccessToken(
  accept.planId,
  undefined,
  {
    scheme: accept.scheme,
    delegationConfig: { delegationId: delegation.delegationId },
  },
)

// 4. Retry with the token, then read the receipt.
await agent.invoke(
  { messages: [{ role: 'human', content: QUERY }] },
  { configurable: { payment_token: accessToken } },
)
const receipt = lastSettlement()
if (receipt) {
  console.log(`credits redeemed:  ${receipt.creditsRedeemed}`)
  console.log(`remaining balance: ${receipt.remainingBalance}`)
  console.log(`transaction:       ${receipt.transaction}`)
}
```

All extra `createReactAgent` options (`prompt`, `stateSchema`, `checkpointer`, …) are forwarded. `lastSettlement()` reads from a process-global module slot with the same **single-tenant** caveat as Python: in multi-tenant servers the value reflects whichever invocation settled most recently.

### Dynamic credits

`credits` accepts a static number or a callback `(ctx) => number`, where `ctx` is `{ args, result }` resolved **after** execution.

```typescript
const summarize = tool(
  requiresPayment((args) => `Summary of: ${args.text}...`, {
    payments,
    planId: PLAN_ID,
    credits: (ctx) => Math.max(1, Math.floor(String(ctx.result).length / 100)),
  }),
  { name: 'summarize', description: 'Cost scales with output length.', schema: z.object({ text: z.string() }) },
)
```

The fixed-vs-range credits semantics ([above](#credits-semantics--fixed-vs-range-plans)) apply identically — `credits` is sent as `maxAmount`.

**Observability is Python-only for now.** LangSmith span tracing for the TypeScript SDK (the `nvm:verify` / `nvm:settlement` spans) is not yet shipped — it lands in a follow-up (`@nevermined-io/payments/langsmith`, [nvm-monorepo#1709](https://github.com/nevermined-io/nvm-monorepo/issues/1709)).

## Alternative: HTTP middleware

For serving the agent over HTTP, use `payments_py.x402.fastapi.PaymentMiddleware` instead of the decorator. Tools become plain functions; payment is enforced at the HTTP boundary via the `payment-signature` header.

```python
from fastapi import FastAPI
from payments_py.x402.fastapi import PaymentMiddleware

app = FastAPI()
app.add_middleware(
    PaymentMiddleware,
    payments=payments,
    routes={"POST /ask": {"plan_id": PLAN_ID, "credits": 1}},
)
```

See [`fastapi-integration.md`](./fastapi-integration.md) for the full FastAPI pattern.

## Environment Variables

```bash
NVM_API_KEY=nvm:your-api-key
NVM_ENVIRONMENT=sandbox             # or 'live'
NVM_PLAN_ID=your-plan-id
NVM_AGENT_ID=your-agent-id          # Optional
OPENAI_API_KEY=sk-your-openai-key   # Or your preferred model provider
```

## Tutorial

Complete working example: [github.com/nevermined-io/tutorials/tree/main/langchain-paid-agent-py](https://github.com/nevermined-io/tutorials/tree/main/langchain-paid-agent-py)
