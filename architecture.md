# Nevermined Documentation Architecture

## Current Status: Documentation Implementation Tracker

### Latest Update: 2026-01-06

Major documentation reorganization completed:

- ✅ **3-Tab Navigation Structure** implemented (Documentation, Integrate, API Reference)
- ✅ **Products Section** reorganized with correct products (x402 Facilitator, Nevermined App, Payment Libraries)
- ✅ **Integrate Tab** with framework-specific guides and copy-paste patterns
- ✅ **API Reference** reorganized by SDK (TypeScript, Python, REST)
- ✅ **Solutions Section** with use case documentation
- ✅ Orphaned files cleaned up (old nvm-pay, nvm-id, integration-guide directories removed)

### Legend

- ✅ Completed
- 🚧 In Progress
- ❌ Not Started
- 📝 Planned

---

## Documentation Structure

### Tab 1: Documentation (Learning Path)

#### Getting Started
- ✅ Welcome & Overview (`docs/getting-started/welcome.mdx`)
- ✅ How It Works (`docs/getting-started/how-it-works.mdx`)
- ✅ Core Concepts (`docs/getting-started/core-concepts.mdx`)
- ✅ AI Agents: Buy Access Autonomously (`docs/getting-started/ai-agent-purchase.mdx`)

#### Agents Guide (Learn → Agents Guide)
- ✅ Overview (`docs/agents-guide/overview.mdx`)
- ✅ Buy Access — flow 1 (reuses `docs/getting-started/ai-agent-purchase.mdx`)
- ✅ Enroll a Card & Delegate (`docs/agents-guide/enroll-card.mdx`)
- ✅ Get a Nevermined API Key (`docs/agents-guide/get-api-key.mdx`)
- ✅ Add Payments to Your Agent (`docs/agents-guide/add-payments.mdx`)
- ✅ Register a Plan & AI Agent (`docs/agents-guide/register-plan-and-agent.mdx`)
- ✅ Check Your Credits — Buyer (`docs/agents-guide/check-credits.mdx`)
- ✅ Check Your Revenue — Seller (`docs/agents-guide/check-revenue.mdx`)
- 🚧 "See it in action" videos — `VIDEO_ID` placeholders pending recording

#### Solutions (Use Cases)
- ✅ Agent-to-Agent Monetization (`docs/solutions/agent-to-agent-monetization.mdx`)
- ✅ Access Control & Static Resources (`docs/solutions/access-control-monetization-static-resources.mdx`)
- ✅ MCP Point of Sales (`docs/solutions/mcp-point-of-sales.mdx`)
- ✅ AI Agents Observability (`docs/solutions/ai-agents-observability.mdx`)

##### Organizations (sub-section)
- ✅ Overview + demo video (`docs/solutions/organizations/overview.mdx`)
- ✅ Workspaces & Members (`docs/solutions/organizations/workspaces-and-members.mdx`)
- ✅ Plans & Billing (`docs/solutions/organizations/plans-and-billing.mdx`)
- ✅ Customers — Enterprise CRM (`docs/solutions/organizations/customers.mdx`)
- ✅ Analytics (`docs/solutions/organizations/analytics.mdx`)
- ✅ Activity & Events (`docs/solutions/organizations/activity-and-events.mdx`)
- ✅ Platform Partners (`docs/integrations/organizations.mdx`)

#### Agents Catalog
- ✅ Overview — what the catalog is + benefits (`docs/agents-catalog/overview.mdx`)
- ✅ Programmatic access — read API, ARD feed, Router usage (`docs/agents-catalog/programmatic-access.mdx`)
- ✅ Agent instructions — machine-readable playbook (`docs/agents-catalog/agent-instructions.md`)
- ✅ Embed Widgets (`docs/integrations/organization-widgets.mdx`)
- ✅ SDK & Workspaces (`docs/integrate/patterns/organizations.mdx`)

#### Products

##### x402 Facilitator
- ✅ Overview (`docs/products/x402-facilitator/overview.mdx`)
- ✅ How It Works (`docs/products/x402-facilitator/how-it-works.mdx`)
- ✅ Payment Models (`docs/products/x402-facilitator/payment-models.mdx`)

##### Nevermined App
- ✅ Overview (`docs/products/nevermined-app/overview.mdx`)
- ✅ Register Agents (`docs/products/nevermined-app/register-agents.mdx`)
- ✅ Manage Plans (`docs/products/nevermined-app/manage-plans.mdx`)

##### Payments
- ✅ Overview (`docs/products/payments/overview.mdx`)
- ✅ Card Enrollment (`docs/products/payments/card-enrollment.mdx`)
- ✅ Braintree Onboarding (`docs/products/payments/braintree-onboarding.mdx`)
- ✅ Delegations (`docs/products/payments/mandates.mdx`)
- ✅ Delegation Selection (`docs/products/payments/mandate-selection.mdx`)
- ✅ FAQ (`docs/products/payments/faq.mdx`) — file lives here; surfaced under **Guides > Learn** in `docs.json`
- ✅ Certifications (`docs/products/payments/certifications.mdx`) — file lives here; surfaced under **Guides > Learn** in `docs.json`

##### Payment Libraries
- ✅ Overview (`docs/products/payment-libraries/overview.mdx`)
- ✅ TypeScript SDK (`docs/products/payment-libraries/typescript.mdx`)
- ✅ Python SDK (`docs/products/payment-libraries/python.mdx`)

---

### Tab 2: Integrate (Action-Oriented)

#### Quick Start
- ✅ 5-Minute Setup (`docs/integrate/quickstart/5-minute-setup.mdx`)
- ✅ TypeScript Quick Start (`docs/integrate/quickstart/typescript.mdx`)
- ✅ Python Quick Start (`docs/integrate/quickstart/python.mdx`)

#### Add to Your Agent (Framework-Specific)
- ✅ Express.js (`docs/integrate/add-to-your-agent/express.mdx`)
- ✅ FastAPI (`docs/integrate/add-to-your-agent/fastapi.mdx`)
- ✅ Next.js (`docs/integrate/add-to-your-agent/nextjs.mdx`)
- ✅ Generic HTTP (`docs/integrate/add-to-your-agent/generic-http.mdx`)

#### Payment Patterns (Copy-Paste Ready)
- ✅ Validate Requests (`docs/integrate/patterns/validate-requests.mdx`)
- ✅ Charge Credits (`docs/integrate/patterns/charge-credits.mdx`)
- ✅ Subscription Access (`docs/integrate/patterns/subscription-access.mdx`)
- ✅ Dynamic Pricing (`docs/integrate/patterns/dynamic-pricing.mdx`)

#### Platform Integrations (Symlinks to existing content)
- ✅ x402 Protocol (`docs/integrate/platforms/x402-protocol.mdx`)
- ✅ Google A2A (`docs/integrate/platforms/google-a2a.mdx`)
- ✅ MCP Integration (`docs/integrate/platforms/mcp.mdx`)
- ✅ BuildShip (`docs/integrate/platforms/buildship.mdx`)
- ✅ Organizations (`docs/integrate/platforms/organizations.mdx`)

---

### Tab 3: API Reference (Technical Reference)

#### Overview
- ✅ Introduction (`docs/api-reference/introduction.mdx`)

#### TypeScript SDK
- ✅ Installation (`docs/api-reference/typescript/installation.mdx`)
- ✅ Payments Class (`docs/api-reference/typescript/payments-class.mdx`)
- ✅ Agents Module (`docs/api-reference/typescript/agents-module.mdx`)
- ✅ Plans Module (`docs/api-reference/typescript/plans-module.mdx`)
- ✅ Requests Module (`docs/api-reference/typescript/requests-module.mdx`)

#### Python SDK
- ✅ Installation (`docs/api-reference/python/installation.mdx`)
- ✅ Payments Class (`docs/api-reference/python/payments-class.mdx`)
- ✅ Agents Module (`docs/api-reference/python/agents-module.mdx`)
- ✅ Plans Module (`docs/api-reference/python/plans-module.mdx`)
- ✅ Requests Module (`docs/api-reference/python/requests-module.mdx`)

#### REST API (OpenAPI Generated)
- ✅ Create (`docs/api-reference/endpoint/create.mdx`)
- ✅ Get (`docs/api-reference/endpoint/get.mdx`)
- ✅ Delete (`docs/api-reference/endpoint/delete.mdx`)
- ✅ Get Plan (`docs/api-reference/endpoint/get-plan.mdx`)
- ✅ Order (`docs/api-reference/endpoint/order.mdx`)
- ✅ Get Balance (`docs/api-reference/endpoint/get-balance.mdx`)
- ✅ Query (`docs/api-reference/endpoint/query.mdx`)
- ✅ Redeem (`docs/api-reference/endpoint/redeem.mdx`)

---

## Legacy Content (Preserved but not in navigation)

These files contain useful reference content but are not part of the main navigation:

### Development Guide (Reference)
Located in `docs/development-guide/`:
- `index.mdx` - Development guide overview
- `features.mdx` - Feature documentation
- `getting-started.mdx` - Legacy getting started
- `registration.mdx` - Agent registration details
- `order-plans.mdx` - Plan ordering details
- `query-agents.mdx` - Query agent details
- `process-requests.mdx` - Request processing
- `observability.mdx` - Observability features
- `nevermined-x402.mdx` - x402 protocol details (symlinked from integrate/platforms)
- `build-using-nvm-mcp.mdx` - MCP building guide
- `faq.mdx` - Frequently asked questions
- `integration-faq.mdx` - Integration FAQ

### Integrations (Reference)
Located in `docs/integrations/`:
- `index.mdx` - Integrations overview
- `google-a2a.mdx` - Google A2A (symlinked from integrate/platforms)
- `mcp.mdx` - MCP integration (symlinked from integrate/platforms)
- `buildship-integration.mdx` - BuildShip (symlinked from integrate/platforms)
- `organizations.mdx` - Organizations (symlinked from integrate/platforms)
- `agent-integration.mdx` - Agent integration patterns
- `examples.mdx` - Integration examples
- `nevermined-x402-ap2.mdx` - x402 AP2 details

---

## Key Architectural Decisions

### 1. Three-Tab Navigation
- **Documentation**: Learning path for understanding Nevermined
- **Integrate**: Action-oriented guides for adding payments to existing agents
- **API Reference**: Technical reference organized by SDK/language

### 2. AI Coding Tool Optimization
The documentation is structured to be easily consumed by AI coding tools:
- Framework-specific guides with copy-paste code
- Consistent naming patterns for searchability
- Complete, working code examples
- Clear module organization

### 3. Product Organization
Products are now correctly organized as:
- **x402 Facilitator**: The payment protocol and verification service
- **Nevermined App**: The web application for no-code setup
- **Payment Libraries**: The TypeScript and Python SDKs

### 4. Symlinks for Platform Integrations
Platform integrations use symlinks to avoid content duplication while maintaining a clean navigation structure.

---

## File Structure

```
docs/
├── getting-started/          # Tab 1: Learning path
│   ├── welcome.mdx
│   ├── how-it-works.mdx
│   └── core-concepts.mdx
├── solutions/                # Tab 1: Use cases
│   ├── agent-to-agent-monetization.mdx
│   ├── access-control-monetization-static-resources.mdx
│   ├── mcp-point-of-sales.mdx
│   └── ai-agents-observability.mdx
├── products/                 # Tab 1: Product docs
│   ├── x402-facilitator/
│   ├── nevermined-app/
│   └── payment-libraries/
├── integrate/                # Tab 2: Integration guides
│   ├── quickstart/
│   ├── add-to-your-agent/
│   ├── patterns/
│   └── platforms/            # Symlinks
├── api-reference/            # Tab 3: API docs
│   ├── typescript/
│   ├── python/
│   └── endpoint/             # REST API
├── development-guide/        # Legacy reference
├── integrations/             # Legacy reference (source for symlinks)
└── snippets/                 # Reusable content
```

---

## Priority Implementation Roadmap

### Phase 1: Core Restructure (COMPLETED ✅)
1. ✅ Three-tab navigation implementation
2. ✅ Products reorganization
3. ✅ Quick start guides
4. ✅ Framework-specific integration guides
5. ✅ Payment patterns documentation
6. ✅ SDK-specific API reference

### AI Coding Tool Integration
- ✅ Nevermined AI Skill (`skills/nevermined-payments/SKILL.md`) — cross-platform skill for AI coding assistants
- ✅ Cursor rules (`.cursor/rules/nevermined-payments.mdc`, `.cursorrules`)
- ✅ GitHub Copilot instructions (`.github/copilot-instructions.md`)
- ✅ Skill documentation page (`docs/development-guide/build-using-nvm-skill.mdx`)

### Phase 2: Content Enhancement (IN PROGRESS 🚧)
1. 📝 Add more code examples to patterns
2. 📝 Expand x402 Facilitator documentation
3. 📝 Add error handling patterns
4. 📝 Add testing guides

### Phase 3: Advanced Features
1. ❌ Video tutorials
2. ❌ Interactive examples
3. ❌ Starter kit templates
4. ❌ Case studies

---

## Contact & Support

- **Documentation Issues**: [GitHub Issues](https://github.com/nevermined-io/docs_mintlify/issues)
- **Discord**: [Nevermined Discord](https://discord.com/invite/GZju2qScKq)
- **Email**: info@nevermined.ai

---

**Last Updated**: January 2026
**Maintained By**: Nevermined Team
