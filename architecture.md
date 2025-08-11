# Nevermined v2 Documentation Architecture

## Current Status: Documentation Implementation Tracker

### Latest Update: 2025-07-21

Major documentation updates completed:

- ✅ NVM Pay product documentation fully implemented
- ✅ Trial plans documentation added (time and credit-based)
- ✅ Fiat payment flow documented (orderFiatPlan)
- ✅ Request tracking module documented
- ✅ A2A (Agent-to-Agent) integration documented
- 🚧 NVM ID basic documentation started
- ❌ MCP integration documented but not published (planned feature)

### Legend

- ✅ Completed
- 🚧 In Progress
- ❌ Not Started
- 📝 Planned

---

## Documentation Structure

### System Documentation

- ❌ System Status & Health Checks
- ❌ Changelog & Release Notes
- ❌ Known Issues & Workarounds

### Getting Started

- ✅ Welcome & Overview (index.mdx)
- ✅ Core Concepts (introduction/core-concepts.mdx)
  - ✅ Payment Plans
  - ✅ AI Agents & Services
  - ✅ Credits System
  - ✅ Access Control (Bearer Token Authentication)
- ✅ Quickstart Guide (introduction/quickstart.mdx)
  - ✅ 5-Minute Tutorial
  - ✅ Hello World Agent
  - ✅ First Payment Plan
- ✅ Example Applications (introduction/example-apps.mdx)
  - ✅ Simple AI Agent (introduction/development/simple-ai-agent.mdx)
  - ✅ Multi-Agent System (introduction/development/multi-agent-system.mdx)
  - ❌ Marketplace Examples
  - ❌ Integration Patterns
- ✅ Development Setup (introduction/development.mdx)
  - ✅ Local Environment
  - ✅ Testing Environment
  - ✅ Required Tools
- ✅ Go-Live Checklist (introduction/go-live-checklist.mdx)

### Use Cases

- ✅ Use Cases Overview (introduction/AI/index.mdx)
- ✅ Integrating with AI (introduction/AI/integrating-nvm-using-ai.mdx)
- 📝 Building AI Agents (Advanced)
  - ✅ Agent Architecture (Metadata, API endpoints, Plans)
  - ✅ Query Protocol (Direct vs Proxy integration)
  - ✅ Request Validation (Bearer Token Authentication)
  - ✅ Response Handling (402 Payment Required pattern)
- 📝 Agent Monetization
  - ✅ Pricing Strategies
  - ✅ Credit Calculation
  - ✅ Dynamic Pricing

### Agent Discovery

- ✅ Agent2Agent (introduction/AI/agent-to-agent.mdx)
- ❌ MCP Server (Planned feature - documentation created but not published)
- ❌ Agent Marketplace

### Integration Guides

- ✅ Integration Guide (introduction/integration-guide.mdx)
  - ✅ Direct Integration Pattern
  - ✅ Proxy Integration Pattern
  - ✅ Middleware Pattern
  - ✅ Bearer Token Authentication
  - ✅ Request Tracking (payments.requests module)
- ✅ Payment Plans (introduction/payment-plans.mdx)
  - ✅ Credits-Based Plans
  - ✅ Time-Based Plans
  - ✅ Hybrid Plans
  - ✅ Multi-Tier Pricing
  - ✅ Trial Plans (registerTimeTrialPlan, registerCreditsTrialPlan)
- ✅ Error Handling (introduction/error-handling.mdx)
- 📝 Third-Party Integrations
  - ✅ Stripe Integration (Fiat payments via getFiatPriceConfig, orderFiatPlan)
  - ❌ OpenAI Integration
  - ❌ CrewAI Integration
  - ❌ Olas Integration
  - 📝 Webhook Handling
  - 📝 Coinbase x402 Compatibility (Communication protocol support)

### Product Documentation

#### NVM_ID (Identity & Access) - 🚧 Basic Documentation Started

- ✅ Overview & Architecture (products/nvm-id/overview.mdx)
- ❌ Account Management
  - ❌ User Profiles
  - ❌ KYC/Compliance
- ❌ Access Tokens
  - ❌ Token Generation
  - ❌ Token Validation
  - ❌ Refresh Patterns
- ❌ SSO Integration

#### NVM_PAY (Payments & Monetization) - ✅ Fully Documented

- ✅ Overview & Architecture (products/nvm-pay/overview.mdx)
- ✅ Payment Plans (products/nvm-pay/payment-plans.mdx)
  - ✅ Time-Based Plans (EXPIRABLE type with duration)
  - ✅ Credit-Based Plans (FIXED type with credit amounts)
  - ✅ Dynamic Pricing Models (DYNAMIC type - documented)
  - ✅ Plan Management (Multiple plans per agent)
  - ✅ Trial Plans (Free time and credit-based trials)
- ✅ Payment Methods (products/nvm-pay/payment-methods.mdx)
  - ✅ Fiat via Stripe (getFiatPriceConfig, orderFiatPlan)
  - ✅ Crypto Payments (Any ERC20 token)
  - ✅ Payment Distribution (Split payments to multiple receivers)
- ✅ Credits Engine (products/nvm-pay/credits-engine.mdx)
  - ✅ Credit Redemption (With min/max thresholds)
  - ✅ Balance Management (getPlanBalance)
  - ✅ Usage Tracking (Request tracking module)
- ✅ Revenue Management (products/nvm-pay/revenue-management.mdx)
  - ✅ Fee Structure (Protocol fees)
  - ✅ Instant Settlement (Direct to builders)
  - ❌ Analytics & Reporting

### Developer Tools

#### Payments Library

- ✅ TypeScript/JavaScript Library (@nevermined-io/payments)
  - ✅ Installation & Setup (npm package)
  - ✅ Core APIs: payments.agents, payments.plans, payments.requests
  - ✅ Payment Configuration (PlanPriceConfig, PlanCreditsConfig)
  - ✅ Usage Examples (Builder & Subscriber scenarios)
- 🚧 Python Library (payments-py)
  - ✅ Installation & Setup
  - ✅ Core APIs matching TypeScript Library
  - 📝 Code Examples
  - 📝 Best Practices
- ❌ React Components
  - ❌ Component Library
  - ❌ Usage Examples
  - ❌ Theming & Customization
- Security & Authentication
  - ✅ API Keys & Authentication
    - ✅ Nevermined API Keys (nvmApiKey for Library initialization)
    - ✅ Access Tokens (Bearer tokens for subscriber queries)
    - ✅ Request Validation (Token-based authentication)
  - ✅ Access Control
    - ✅ Plan-Based Access (Subscribers must have valid plan)
    - ✅ Credit-Based Permissions (Balance validation)
    - ✅ Automatic Credit Deduction (Via proxy or manual)
  - ✅ Best Practices (introduction/best-practices.mdx)

#### APIs

- ✅ REST API Reference (api-reference/)
  - ✅ Introduction (api-reference/introduction.mdx)
  - ✅ Core Methods (create, get, query, delete)
  - ✅ Payment Operations (order, get-plan, get-balance, redeem)
  - 📝 Additional Endpoints (from API-DRAFT.md):
    - 📝 Agent Registration & Discovery
    - 📝 Plan Configuration & Management
    - 📝 Access Validation (isValidRequest)
    - 📝 Credit Redemption with Proof
- ❌ GraphQL API (Mentioned in guide.md)
- ❌ WebSocket Events
- 📝 Rate Limits & Quotas (API Rate Limiting mentioned)

### Starter Kits & Demos - ❌ Not Started

- ❌ Next.js Starter Kit
  - ❌ AI Agent Template
  - ❌ Marketplace Template
  - ❌ SaaS Template
- ❌ Python Flask Starter
- ❌ FastAPI Starter
- ❌ Demo Applications
  - ❌ AI Writing Assistant
  - ❌ Image Generation Service
  - ❌ Multi-Agent Marketplace
  - ❌ Subscription Platform
  - 📝 Example Agents (from guide.md):
    - 📝 AI Trips Advisor ($100/month or $900/year)
    - 📝 Code Copilot (10 USDC for 100 credits)
    - 📝 Legal Assistant (Silver/Gold tiers)
    - 📝 Corporate Swiss Law Assistant

### Monitoring & Analytics - ❌ Not Started

- ❌ Dashboard Overview
- ❌ Usage Metrics
- ❌ Revenue Analytics
- ❌ Performance Monitoring
- ❌ Custom Reports

### Support & Resources

- ✅ Troubleshooting (introduction/troubleshooting.mdx)
- ❌ Common Issues Database
- ❌ Error Codes Reference
- ❌ Debugging Guide
- ❌ Support Channels Documentation
- ❌ FAQ

### Additional Resources - ❌ Not Started

- ❌ Glossary
- ❌ Architecture Diagrams
- ❌ Video Tutorials
- ❌ Community Resources
- ❌ Migration Guides

---

## Key Architectural Components (From Guide & API Docs)

### Core Protocol Architecture

#### Service Layer

- Nevermined API (Management and access control)
- NVM Proxy (Gateway for non-integrated agents)
- Libraries (Python and TypeScript Libraries)

#### Application Layer

- Marketplaces
- AI Applications
- AI Agents (Direct or Proxy integration)

### Payment Flow Architecture

#### 1. Agent & Plan Registration

- Builders use nvmApiKey for authentication
- Register via Library, REST API, or Web App
- Plans support flexible configurations:
  - FIXED_PRICE, EXPIRABLE, DYNAMIC pricing
  - Time-based or credit-based limitations
  - Multi-receiver payment distribution

#### 2. Subscriber Flow

- Order plans via Library/API
- Receive credits on purchase
- Query agents with proof of request
- Automatic credit redemption with thresholds

#### 3. Validation & Security

- Bearer token authentication (Authorization header)
- Balance validation before access
- Automatic credit deduction
- No wallet management required (API key based)

### Integration Patterns

#### Direct Integration

- Agent uses Nevermined Library
- Validates requests with payments.requests.isValidRequest()
- Bearer token validation
- Returns 402 Payment Required with available plans

#### Proxy Integration

- For existing agents without modification
- NVM Proxy handles validation
- Transparent credit management
- No code changes required

### Key Differentiators from V1

- Single transaction (vs multiple in legacy)
- No off-chain dependencies
- Removed query protocol complexity
- Enhanced decentralization (no delegated accounts)
- MultiSig governance structure
- Support for agent-to-agent payments

---

## Priority Implementation Roadmap

### Phase 1: Core Documentation (COMPLETED ✅)

1. ✅ Basic getting started guides
2. ✅ API reference documentation
3. ✅ Integration guides
4. ✅ Core Library documentation (TypeScript focus)

### Phase 2: Developer Experience (IN PROGRESS 🚧)

1. ✅ Complete Library Documentation (TypeScript completed)
2. 🚧 Python Library Documentation (Partial)
3. ❌ Starter Kits & Templates (Next.js, Python frameworks)
4. ❌ Demo Applications (Working examples)
5. ✅ Third-Party Integrations (Stripe integration fully documented)
6. ✅ Code Examples for Common Scenarios:
   - ✅ Agent Registration & Plan Setup
   - ✅ Subscriber Ordering & Querying
   - ✅ Credit Management & Validation
   - ✅ Bearer Token Authentication
   - ✅ Multi-Agent Communication (A2A documented)
   - ✅ Request Tracking & Analytics (payments.requests module)
   - ✅ Trial Plans Implementation
   - ✅ Fiat Payment Flow (orderFiatPlan method)

### Phase 3: Product Features

1. 🚧 NVM_ID Documentation (Basic overview completed)
2. ✅ NVM_PAY Documentation (Fully completed)
3. ❌ Security & Authentication
4. ❌ Advanced AI Agent Development

### Phase 4: Operations & Support

1. ❌ Monitoring & Analytics
2. ❌ Troubleshooting & Support
3. ❌ Video Tutorials
4. ❌ Community Resources

### Phase 5: Growth & Expansion

1. ❌ Industry Solutions
2. ❌ Case Studies
3. ❌ Advanced Use Cases
4. ❌ Partner Integrations