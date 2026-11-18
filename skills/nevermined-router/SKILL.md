---
# Generated from nevermined-io/nvm-monorepo apps/catalog/src/lib/buyer-skill.ts by scripts/generate-buyer-skill.ts. Edit it there: a change here is overwritten.
name: nevermined-router
description: >-
  Use when an agent must pay for a call to an external AI service (data, search,
  enrichment, inference, scraping) it has no account with. Finds the service in the
  Nevermined Agent Services Catalog, prices the call for free, pays per call through
  the Nevermined Router from a budget a human capped, and checks what was spent.
metadata:
  openclaw:
    primaryEnv: NVM_API_KEY
    requires:
      env:
        - NVM_API_KEY
    envVars:
      - name: NVM_API_KEY
        required: true
        description: >-
          Nevermined API key, the whole string: live:... on production, sandbox:... on the
          sandbox. A human creates it at https://nevermined.app under API Keys.
---

# Nevermined Catalog: buy AI services per call

The Catalog lists paid AI services. You call one through the Nevermined Router. The Router
answers the service's `402 Payment Required`, pays from your delegation (a budget a human
capped), relays the response and records the spend. You need no account with the provider and
no payment code.

Every URL below is on the live deployment and spends real money. Each service also has its own
skill file, with a runnable quote and call for every endpoint: `https://nevermined.app/catalog/<slug>/skill.md`.

## When to use it

- You need data or a capability that a cataloged service sells, and you have no account with
  its provider.
- You must stay within a budget a human set.
- Not for a service that wants its own login: a `401` or `403` from the service means
  authentication, not payment. Not for charging for your own agent: that is the
  `nevermined-payments` skill.

## Set up

A human needs a Nevermined account at https://nevermined.app, once.

This skill is for live: real merchants and real money, within the cap the human approves. To
test first, the sandbox (testnet funds) takes a `sandbox:` key and its own hosts: the API at
`https://api.sandbox.nevermined.app` (in place of `https://api.live.nevermined.app` in every URL below,
and as `NVM_API_URL`) and the MCP at `https://mcp.sandbox.nevermined.app/mcp`. A key works only on the deployment
that issued it. The sandbox Router funds testnets only, so of its listings only the two free
testnet test merchants can be paid there.

Then take one of two paths.

### An assistant that speaks MCP

Connect the Nevermined Commerce MCP. Your assistant runs OAuth: the human signs in and approves
a spending cap, and the MCP pays from their wallet. There is no API key or delegation to create.

- Claude Code, and other CLIs that sign in when they connect:
  ```bash
  claude mcp add --transport http --scope user nevermined-catalog https://mcp.api.live.nevermined.app/mcp
  ```
  Then run `/mcp` to sign in. This host asks for sign-in as soon as you connect, which is when
  Claude Code runs OAuth. With an API key instead, add `https://mcp.live.nevermined.app/mcp` with
  `--header "Authorization: Bearer $NVM_API_KEY"`.
- claude.ai connectors, ChatGPT and other hosts: `https://mcp.live.nevermined.app/mcp`.

Which host each assistant needs, and what the consent screen asks: https://nevermined.app/auth.md §6.

### REST, with an API key

1. A human creates a plain API key in the app (https://nevermined.app/auth.md §3) and gives it to you. A key minted
   over OAuth cannot create a delegation.
   ```bash
   export NVM_API_KEY="live:…"   # the whole key, prefix included
   export NVM_API_URL="https://api.live.nevermined.app"   # the reference files' commands use it
   ```
2. You create the delegation, your budget. No human is needed:
   ```bash
   curl -X POST https://api.live.nevermined.app/api/v1/delegation/create \
     -H "Authorization: Bearer $NVM_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"provider":"erc4337","currency":"usdc","spendingLimitCents":500,"durationSecs":86400}'
   export NVM_DELEGATION_ID="<delegationId from the reply>"
   ```
   Set `spendingLimitCents` to the budget the user gave you. It is your spending limit: every price, the Router fee and any retries come out of it. Reuse an
   Active delegation (`GET https://api.live.nevermined.app/api/v1/delegation?accessible=true`) instead of creating one per call.
   If creating the delegation is refused, stop and report the exact error to the user: 403 BCK.OAUTH.0030 means an OAuth-minted key (you need a plain one), 412 consent_required means the account must accept updated terms in the app, and 401 means an invalid or expired key.
3. Fund the wallet the delegation spends from, on the network the service settles on (see
   Funding).

Creating your delegation authorizes spending, and each paid call (or Commerce MCP pay_service tool use) spends real money — so your harness may pause for the operator to approve these before they run. That is expected, not a dead end: make the call and let the operator approve it rather than reporting the step as something only a human can do. Expect one approval per call; never turn your harness’s approvals off wholesale.

## The workflow

1. **Discover.** `GET https://nevermined.app/catalog/llms.txt` lists every service, each linked to its skill
   file. `GET https://nevermined.app/catalog/ai-catalog.json` is the same catalog as JSON. Over MCP:
   `search_services`.
2. **Inspect.** `GET https://nevermined.app/catalog/<slug>/skill.md`, or `https://nevermined.app/catalog/<slug>` with
   `Accept: text/markdown`. It gives the service's rail and network, and for every endpoint its
   method, `invokePath`, price, request schema, an example with its grade, a quote and a paid
   call. Over MCP: `get_service`. In `ai-catalog.json` an endpoint without `invokePath` is
   called at its `path`, and an empty `invokePath` appends nothing. An example's grade says how
   far it was checked:
   - `paid-run`: verified by a paid call.
   - `challenge`: the service accepted the request shape; the response is unverified.
   - `docs`: from the provider's documentation, unverified. Fill the request from the schema,
     and never guess a parameter name.
3. **Quote, for free.** Price the exact request you will pay for:
   ```bash
   curl -X POST https://api.live.nevermined.app/api/v1/router/quote \
     -H "Authorization: Bearer $NVM_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"slug":"<slug>","path":"<invokePath>","method":"POST","body":{}}'
   ```
   Nothing is charged. Add `"search":"a=1&b=2"` for a query string. Read `upstreamStatus`. `402`: the service priced the request, and `fee.capChargedMicros` is what the call takes from your delegation, Router fee included (`capChargedCents` rounds it up to a whole cent). A `2xx`: the service asked no payment for this request, so there is nothing to pay; an endpoint the catalog lists as free returns its answer through `/svc`, any other only its status (the quote already ran it once). `401` or `403`: the service wants its own login, which the Router does not provide. `429` or a `5xx`: try later. Any other `4xx`: the request is wrong as it stands, so fix it before you pay.
4. **Pay.** Send the same request through `/router/svc` (below), with one
   `X-Router-Request-Id` per purchase.
5. **Verify.** A paid reply carries `X-Router-Payment-Id` (`curl -i` shows it).
   `GET https://api.live.nevermined.app/api/v1/router/payments?requestId=<your request id>` finds the payment by your id. Judge
   the result: if it is irrelevant, or the service keeps refusing the call, try the next matching
   service within your budget.

## MCP

The Commerce MCP offers the workflow as tools. `search_services` and `route_by_intent`
discover. `get_service` inspects and `quote_service` prices a request, neither charging
anything. `pay_service` pays and returns the result. `get_budget` and `list_payments` say
what you can still spend and what you spent. Connected over OAuth, it pays within the cap the
human approved. Connected with an API key (`Authorization: Bearer $NVM_API_KEY` on `https://mcp.live.nevermined.app/mcp`),
it pays in the human's Nevermined credits where a service accepts them, and otherwise from a
delegation, which `setup_delegation` creates. Documentation: https://nevermined.ai/docs/products/catalog/mcp.

## REST: `/router/svc`

```text
<METHOD> https://api.live.nevermined.app/api/v1/router/svc/<slug>/<invokePath>[?query]
Authorization: Bearer $NVM_API_KEY
X-Router-Delegation-Id: $NVM_DELEGATION_ID
X-Router-Request-Id: <one id per purchase, reused on every retry>
```

- Use the endpoint's method, its `invokePath`, and its query and JSON body. The Router forwards
  them to the service.
- Send no `X-Router-Target-Slug` header on a `/svc` URL: the Router refuses it
  (`400 BCK.ROUTER.0001`).
- In a shell, keep the key in double quotes: `-H "Authorization: Bearer $NVM_API_KEY"`. Single
  quotes send the literal text `$NVM_API_KEY`, and the call fails `401`.
- `X-Router-Require-Protocol: x402` (or `mpp`) pins a service that offers both rails to one.
- Never send `NVM_API_KEY` to a service directly: it goes to the Router only, which does not
  forward `Authorization`.
- `/svc` takes no per-call price ceiling: the delegation's cap and expiry bound what it can
  spend, so keep the cap small. To refuse a call that costs more than its quote, pay through
  `POST https://api.live.nevermined.app/api/v1/router/route` with `maxTotalCents` (https://raw.githubusercontent.com/nevermined-io/docs/main/skills/nevermined-router/references/paying.md).
- A 4xx refusal that names no paymentId (no X-Router-Payment-Id header, no paymentId in the error's params, no payment in a JSON reply) cost nothing: fix the request and resend.
- Anything else (a 202, any 5xx such as 502 BCK.ROUTER.0034 or 0025, or any answer that names a paymentId) may already have paid the merchant. Before doing anything else, look the purchase up: `GET https://api.live.nevermined.app/api/v1/router/payments?requestId=<your X-Router-Request-Id>`; "absent" means nothing is recorded, so resend with the same id. A 202 is still running: poll its Location and never buy it again. A paid call left Issued, or Failed with no response, is not proof of a charge either way, and its price can stay reserved against your cap. Retry the same purchase only with the same X-Router-Request-Id: the Router never pays one id twice.
- Never create another delegation to get past a cap or budget refusal (402 BCK.ROUTER.0003): report it and stop.

## Funding

The service takes its payment from your own wallet. The delegation authorizes the spend; it
does not provide the money. Read the address to fund off the delegation, every time (a cached
address is the usual cause of an underfunded wallet):

```bash
curl -s "https://api.live.nevermined.app/api/v1/delegation/$NVM_DELEGATION_ID?withPayer=true" -H "Authorization: Bearer $NVM_API_KEY"
# fundingWalletAddress is the wallet to fund (not providerPaymentMethodId)
```

| Rail | Network | Fund the wallet with |
| --- | --- | --- |
| x402 | Base | USDC on Base |
| MPP, `tempo` method | Tempo | the payment token the quote names (`settlement.asset`), on Tempo |
| MPP, `evm` method | Base | USDC on Base |

- Both rails need a stablecoin (`erc4337`) delegation. Balances are per network: each service's
  skill file names its rail and network, so fund that one.
- Only an MPP payment on Tempo checks the balance first: short, it is refused
  `402 BCK.ROUTER.0009` before anything is signed. An x402 payment is not checked and fails when
  the service settles it.
- A deployment can leave the MPP rail off. If every MPP service is refused
  `400 BCK.ROUTER.0001 … not allowlisted` while x402 pays, that is the deployment, not the
  service: pin `X-Router-Require-Protocol: x402` where the service offers x402.
- The Router adds a 2% routing fee to each paid call, from the same delegation and as its own
  transfer from the same wallet. Size the cap and the balance to include it.
- A quote whose `settlement.scheme` is `session` also states `sessionDeposit`: that deposit
  leaves the wallet at the first call, however small, so the wallet needs it too.
- An empty wallet you cannot fund yourself is a stop: report it to the human.
- **Credits.** Many services are also payable with a Nevermined subscription, in credits — an alternative to pay-per-call USDC. Credits are spent only through the Nevermined Commerce MCP (connected with a subscriber API key, or with a commerce OAuth connection that enabled Nevermined-credit spend at consent), or via POST /api/v1/router/subscription/route; a spending delegation always pays USDC, never credits. Credit prices are shown to subscribers only; subscribe or connect with a subscriber API key to see them. The prices here are the pay-per-call USDC prices. The streaming
  `https://api.live.nevermined.app/api/v1/router/subscription/svc/<slug>/<invokePath>` spends them too, and
  `POST https://api.live.nevermined.app/api/v1/router/subscription/quote`, with the body `/router/subscription/route` takes,
  prices a call in credits without charging.
- **Welcome credits.** While the offer is open, a new account receives welcome credits.
  `GET https://api.live.nevermined.app/api/v1/credits/welcome/offer` (no key) says how many, and for how long. They are spent the
  same way as subscription credits.

## Errors

These six are the refusals a buyer meets. Retry says whether resending the same request can work.

| Code | Status | What happened | Retry? |
| --- | --- | --- | --- |
| `BCK.ROUTER.0001` | 400 | The request was refused before anything was charged: a `/svc` call with an `X-Router-Target-Slug` header, a path that still holds a placeholder such as `{id}`, no `X-Router-Request-Id`, a delegation that is not `erc4337`, or no offer this deployment can fund. `details` names the problem. | No: fix the request |
| `BCK.ROUTER.0003` | 402 | The call would exceed the delegation's cap, or the delegation expired, ran out or was revoked. | No: report it to the human; never create another delegation to get past it |
| `BCK.ROUTER.0008` | 403 | The API key is a legacy (v1) key, which the Router cannot pay with. | No: the human creates a new API key |
| `BCK.ROUTER.0009` | 402 | An MPP payment on Tempo: the wallet holds too little of the payment token there. Nothing was signed. | No: fund the wallet on Tempo, then resend |
| `BCK.ROUTER.0034` | 502 | The payment was sent but the service never answered, so it may have charged. | No: look the payment up before anything else |
| `BCK.OAUTH.0030` | 403 | A key minted over OAuth called `/router/svc`, `/router/quote` or another spend route, or `POST /delegation/create`. | No: use a plain API key, or pay through the MCP |

Every Router error, with its fix: https://nevermined.ai/docs/products/catalog/router/guardrails.

## Links

- Catalog: https://nevermined.app/catalog/
- Every service, linked to its skill file: https://nevermined.app/catalog/llms.txt
- The catalog as JSON: https://nevermined.app/catalog/ai-catalog.json
- Authentication and API keys: https://nevermined.app/auth.md
- Router documentation: https://nevermined.ai/docs/products/catalog/router/overview
- Commerce MCP: https://nevermined.ai/docs/products/catalog/mcp
- This skill: https://nevermined.app/catalog/skill.md

In depth, when a step above is not enough:

- Every guardrail and error code, and what is retryable: https://raw.githubusercontent.com/nevermined-io/docs/main/skills/nevermined-router/references/errors.md
- Paying a URL you already have (`/router/route`, `/router/proxy`) and passing a merchant's own
  auth: https://raw.githubusercontent.com/nevermined-io/docs/main/skills/nevermined-router/references/paying.md
- Delegation fields, recipient scoping, funding and networks: https://raw.githubusercontent.com/nevermined-io/docs/main/skills/nevermined-router/references/bootstrap.md
- Catalog filters, categories and the ARD feed: https://raw.githubusercontent.com/nevermined-io/docs/main/skills/nevermined-router/references/discovery.md
- The payment ledger, CSV export and reconciliation: https://raw.githubusercontent.com/nevermined-io/docs/main/skills/nevermined-router/references/ledger.md
