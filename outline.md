# Nevermined Documentation Repository Structure

## Overview
This is a Mintlify-powered documentation site for Nevermined, an AI-native payment infrastructure protocol. The documentation serves developers integrating Nevermined's payment infrastructure.

### Legend
- [DONE] Completed and Published
- [REVIEW] Ready for Review
- [WIP] In Progress
- [TODO] Not Started
- [PLAN] Planned

---

## Docs Structure

### Getting Started
- [DONE] Welcome & Overview (index.mdx) - Feedback
- [PENDING] Quickstart Guide (introduction/quickstart.mdx)
  - [PENDING] 5-Minute Tutorial (Separation between builder flow and Subscriber Flow)
  - [TODO] Hello World Agent
  - [TODO] First Payment Plan
- [PENDING] Core Concepts (introduction/core-concepts.mdx)
  - [PENDING] Payment Plans
  - [PENDING] AI Agents & Services
  - [PENDING] Credits System
  - [PENDING] Access Control (Bearer Token Authentication)
- [PENDING] Example Applications (introduction/example-apps.mdx)
  - [PENDING] Simple AI Agent (introduction/development/simple-ai-agent.mdx)
  - [PENDING] Multi-Agent System (introduction/development/multi-agent-system.mdx)
  - [TODO] Marketplace Examples
  - [TODO] Integration Patterns
- [PENDING] Development Setup (introduction/development.mdx)
  - [PENDING] Local Environment
  - [PENDING] Testing Environment
  - [PENDING] Required Tools
- [PENDING] Go-Live Checklist (introduction/go-live-checklist.mdx)

### Integration Guide (`/integration-guide/`) - [REVIEW] Comprehensive New Section
- [REVIEW] `index.mdx` - Complete integration guide with setup, initialization, and navigation
- [REVIEW] `what-can-you-do.mdx` - Capabilities and features of Payment Libraries
- [REVIEW] `getting-started.mdx` - Quick setup and initialization guide (may be redundant with index.mdx)
- [REVIEW] `registration.mdx` - How to register Payment Plans and Agents
- [REVIEW] `order-plans.mdx` - How users can purchase Payment Plans
- [REVIEW] `query-agents.mdx` - How to query AI Agents after purchasing access
- [REVIEW] `process-requests.mdx` - How AI Agents can accept and validate paid requests

### Development Examples (`/introduction/development/`)
- [TODO] `simple-ai-agent.mdx` - Step-by-step guide for basic AI agent monetization
- [TODO] `multi-agent-system.mdx` - Multi-agent collaboration and inter-agent payments

### AI Services (`/introduction/AI/`)
- [TODO] `index.mdx` - AI-specific features and capabilities overview
- [TODO] `integrating-nvm-using-ai.mdx` - AI-focused integration patterns
- [TODO] `ai-use-cases.mdx` - Real-world examples (LLM, computer vision, etc.)
- [TODO] `agent-to-agent.mdx` - Autonomous agent-to-agent payments
- [TODO] `mcp-integration.mdx` - Model Context Protocol integration (planned feature)

### Product Documentation

#### NVM Pay (`/products/nvm-pay/`) - [TODO] Fully Documented
- [TODO] `overview.mdx` - Payment and monetization layer architecture
- [TODO] `payment-plans.mdx` - Time-based, credit-based, dynamic pricing models
- [TODO] `payment-methods.mdx` - Fiat via Stripe, crypto payments, payment distribution
- [TODO] `credits-engine.mdx` - Credit redemption, balance management, usage tracking
- [TODO] `revenue-management.mdx` - Fee structure, instant settlement, protocol fees

#### NVM ID (`/products/nvm-id/`) - [WIP] Basic Documentation Started
- [DONE] `overview.mdx` - Identity and access management system overview
- [TODO] Account Management
  - [TODO] User Profiles
  - [TODO] KYC/Compliance
- [TODO] Access Tokens
  - [TODO] Token Generation
  - [TODO] Token Validation
  - [TODO] Refresh Patterns
- [TODO] SSO Integration

### API Reference (`/api-reference/`)
- [DONE] `introduction.mdx` - TypeScript-first API overview, setup, authentication
- [DONE] `openapi.json` - OpenAPI 3.1.0 specification for REST endpoints

#### Core Methods (`/api-reference/endpoint/`)
- [DONE] `create.mdx` - Register Agent and Plan (`POST /agent`)
- [DONE] `get.mdx` - Retrieve agent information
- [DONE] `query.mdx` - Query agents with access validation
- [DONE] `delete.mdx` - Delete agents or plans

#### Payment Operations (`/api-reference/endpoint/`)
- [DONE] `order.mdx` - Purchase payment plans (`POST /plan/{planId}/order`)
- [DONE] `get-plan.mdx` - Retrieve payment plan details
- [DONE] `get-balance.mdx` - Check subscriber credit balance
- [DONE] `redeem.mdx` - Redeem credits for usage

### Assets and Resources
#### Images (`/images/`)
- [DONE] `checks-passed.png` - Status check visualization
- [DONE] `hero-dark.png` - Dark mode hero image
- [DONE] `hero-light.png` - Light mode hero image

#### Logos (`/logo/`)
- [DONE] `dark.svg` - Dark mode logo
- [DONE] `light.svg` - Light mode logo

#### Content Components (`/snippets/`)
- [DONE] `snippet-intro.mdx` - Reusable MDX components and content blocks

#### Reference Materials (`/reference-docs/`)
- [DONE] `API_DRAFT.md` - Draft API documentation
- [DONE] `ASSETS_REGISTRATIONS.md` - Asset registration reference
- [DONE] `GETTING_STARTED.md` - Getting started reference
- [DONE] `ORDER_PLANS.md` - Plan ordering reference
- [DONE] `QUERY_AGENTS.md` - Agent querying reference
- [DONE] `WHAT_YOU_CAN_DO.md` - Capabilities overview

---

## Missing/Planned Documentation

### Starter Kits & Demos - [TODO] Not Started
- [TODO] Next.js Starter Kit
  - [TODO] AI Agent Template
  - [TODO] Marketplace Template
  - [TODO] SaaS Template
- [TODO] Python Flask Starter
- [TODO] FastAPI Starter
- [TODO] Demo Applications
  - [TODO] AI Writing Assistant
  - [TODO] Image Generation Service
  - [TODO] Multi-Agent Marketplace
  - [TODO] Subscription Platform

### Developer Tools - [WIP] Partial
- [DONE] TypeScript/JavaScript Library Documentation
- [WIP] Python Library Documentation (basic coverage)
- [TODO] React Components
- [TODO] GraphQL API
- [TODO] WebSocket Events

### System Documentation - [TODO] Not Started
- [TODO] System Status & Health Checks
- [TODO] Changelog & Release Notes
- [TODO] Known Issues & Workarounds

### Monitoring & Analytics - [TODO] Not Started
- [TODO] Dashboard Overview
- [TODO] Usage Metrics
- [TODO] Revenue Analytics
- [TODO] Performance Monitoring
- [TODO] Custom Reports

### Additional Resources - [TODO] Not Started
- [TODO] Glossary
- [TODO] Architecture Diagrams
- [TODO] Video Tutorials
- [TODO] Community Resources
- [TODO] Migration Guides

---

## Documentation Architecture

### Technical Stack
- **Framework**: Mintlify with Maple theme
- **Format**: MDX with required frontmatter (title, description, icon)
- **Components**: CardGroup, Card, Tabs, AccordionGroup, Steps
- **Languages**: TypeScript and Python code examples
- **Integration**: OpenAPI auto-generation for API docs

### Navigation Structure
- **Documentation Tab**: Getting Started, Integration, AI Services, Resources, Products
- **API Reference Tab**: Core Methods, Payment Operations, Management
- **External Links**: GitHub, Discord, Twitter

### Target Audience
- **Primary**: Developers integrating AI payment infrastructure
- **Secondary**: AI builders monetizing services, subscribers accessing AI agents
- **Use Cases**: Simple AI services, complex multi-agent systems, AI marketplaces