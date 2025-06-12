# Nevermined: The Decentralized AI Payments Protocol - Comprehensive Overview

## Table of Contents
1. [Introduction and Motivation](#introduction-and-motivation)
2. [What Nevermined Does](#what-nevermined-does)
3. [How Nevermined Works](#how-nevermined-works)
4. [Architecture](#architecture)
5. [Nevermined V2 Updates](#nevermined-v2-updates)
6. [Competitive Analysis](#competitive-analysis)
7. [Partner Integration](#partner-integration)

## Introduction and Motivation

### The Problem
The evolution of AI-native commerce is inevitable, but current infrastructure is insufficient. Traditional payment systems are designed for human users with physical money, creating significant friction for AI agents that need to:
- Make and receive payments quickly and efficiently
- Transact autonomously without human intervention
- Scale from individual transactions to swarm-based operations

### Current Challenges for AI Builders
AI Builders (from independent professionals to organizations shipping hundreds of agents) face three main challenges:

1. **Inefficient Payment Processing**: Traditional payment methods are inefficient and insecure for AI-to-AI transactions
2. **Limited Functionality Exposure**: No simple method for AI Agents to expose functionalities to subscribers
3. **Variable Cost Complexity**: Difficulty charging subscribers based on usage complexity

Currently, AI Builders must create bespoke solutions for these problems, diverting effort from their core focus of building better AI Agents.

### Nevermined's Solution
Nevermined provides infrastructure that seamlessly evolves from single-agent needs to complex AI economies, eliminating friction and supporting a fully autonomous, composable future for AI-driven commerce.

## What Nevermined Does

Nevermined provides comprehensive tools for AI Builders to create AI Agents with the following capabilities:

### Core Functionality
- **Digital Payments**: Make and receive crypto and fiat payments
- **Flexible Payment Plans**: Configure plans limited by duration or usage
- **Multi-currency Support**: Accept payments in crypto or fiat
- **Access Control**: Restrict AI Agent access to only paid subscribers
- **Automatic Accounting**: Track usage of AI Agents automatically
- **Dynamic Metering**: Adjust pricing based on request complexity
- **Instant Settlement**: Enable immediate payment settlement between humans, agents, and agent-to-agent
- **Revenue Control**: Flexible pricing, metered billing, and margin management out of the box

### Key Design Principles

#### 1. Designed for Agents
- **Human-to-Agent Flows**: Humans can make fiat and crypto payments to query AI Agents
- **Agent-to-Agent**: Agents can make and receive payments from other agents autonomously

#### 2. Flexible
- Payment Plans with time limits (e.g., yearly subscription) or usage limits (e.g., 100 credits)
- Support for any crypto token or fiat via Stripe integration
- Fixed or dynamic charging based on usage
- Multiple configuration options

#### 3. Secure
- Neither AI Agent, Builder, nor Subscriber has full control
- No need to embed wallets into agents - just use API Keys
- Nevermined validates correct usage charging

#### 4. Easy to Use
- Low-code Python and TypeScript libraries
- HTTP REST API available
- Web App for configuration and monitoring
- Comprehensive documentation

## How Nevermined Works

### Payment Plans
Payment Plans are created by AI Builders and define pricing and consumption conditions. Key attributes include:

- **Payment Type**: Crypto (native token or any ERC20) or Fiat
- **Price and Distribution**: Total price and payment distribution to receivers
- **Subscription Type**: 
  - Time-limited (e.g., 1-year subscription)
  - Usage-limited (e.g., 100 credits)
- **Credit System**:
  - Credits received upon plan purchase
  - Credits required per agent query (fixed or variable range)
- **Additional Options**: Redemption permissions, proof requirements

#### Example Payment Plans:
- "AI Trips Advisor": $100/month (Regular) or $900/year (Premium)
- "Code Copilot": 10 USDC for 100 credits, 1 credit per request
- "Legal Assistant": 
  - Silver: 100 xDAI for 500 credits (5-25 credits per request)
  - Gold: 1 ETH for 999 credits (1 credit per request)

### AI Agents
AI Agents in Nevermined:
- Provide API information for subscriber queries
- Display available payment plans
- Include discoverable metadata
- Have unique identifiers (DIDs) for metadata resolution

### Interaction Flows

#### 1. AI Agent & Plan Registration
- Builders register agents and plans via:
  - NVM Libraries (Python/TypeScript)
  - NVM HTTP REST API
  - NVM Web Application
- API Key required for programmatic registration
- Published agents and plans become available for purchase

#### 2. Payment Plan Purchase
- Subscribers purchase plans via libraries, API, or app
- Plans can be associated with multiple AI Agents
- Subscribers receive plan credits upon purchase
- Builders receive instant payment (minus protocol fee)

#### 3. Subscriber Queries

**Direct Integration**:
- Subscriber sends request with "proof of request"
- AI Agent validates request with Nevermined
- Credits redeemed within defined thresholds
- Agent tracks usage and provides proof

**Via Proxy**:
- For agents without Nevermined integration
- NVM Proxy validates subscriber access
- Proxy forwards valid requests to agents
- Proxy handles credit redemption

## Architecture

### High-Level Architecture

#### Blockchain Layer (EVM Compatible)
- **Smart Contracts**: Handle registry, settlement, and agreements
- **Components**:
  - Agents Registry
  - Payment Plans
  - Credits Factories (ERC-1155)
  - Agreements, Templates, and Conditions
  - Governance & Configuration

#### Service Layer
- **Nevermined API**: Management and access to AI Agents, API key generation
- **NVM Proxy**: Grants access to AI Agents for subscribers only
- **Libraries**: Python and TypeScript SDKs

#### Application Layer
- Marketplaces
- AI Apps
- AI Agents

### API Functionality
All Nevermined functionality is exposed via libraries and REST API:
- **Registration**: New plans and agents
- **Discovery**: Search and show capabilities
- **Payment**: Order processing
- **Access**: Query authorization
- **Accounting**: Balance and mint/burn operations

## Nevermined V2 Updates

### Core Protocol Improvements

#### 1. Focused Scope
- **Streamlined**: Protocol now focused solely on payments, access control, and metering/accounting
- **Removed**: Query protocol and different asset types decommissioned
- **Result**: Cleaner, more efficient core functionality

#### 2. Technical Enhancements
- **Simpler**: More straightforward implementation
- **Quicker**: Faster transaction processing
- **More Secure**: Enhanced security measures
- **Single Transaction**: Only requires 1 transaction (vs multiple in legacy)
- **No Off-chain Dependencies**: Eliminated need for Node services for payments and credit receipt
- **Flexible & Extensible**: Easy introduction of new flows (e.g., dynamic payments)

### Payment Plan Flexibility

#### Enhanced Configuration Options
- **Multiple Plans per Agent**: Agents can have different associated plans with varying options
- **Full Flexibility**: Complete control over:
  - Payment type (crypto/fiat)
  - Pricing structure
  - Credit allocation
  - Redemption rules
- **Dynamic Management**: Builders can add/remove plans from agents or transfer them

### Integration Flexibility

#### Query Flow Options
1. **Direct Communication** (New in V2):
   - Subscriber communicates directly with agent
   - No proxy required if agent uses Nevermined libraries
   - Agent authorizes requests directly with Nevermined

2. **Proxy Integration**:
   - For agents without Nevermined integration
   - Proxy handles authorization and credit redemption
   - No agent modification required

#### Credit Protection
- **Redemption Proof System**: Subscribers provide automatic redemption proof when querying
- **Prevents Overcharging**: Ensures correct credit deduction within defined thresholds
- **Protects Subscribers**: Guards against invalid expenditures by AI Builders

### Decentralization & Governance

#### Enhanced Decentralization
- **No Delegated Accounts**: Removed dependency on Nevermined-specific accounts
- **Rotatable Roles**: Roles and permissions can be rotated
- **Smart Contract Control**: Permissions managed by contracts for better security and decentralization

#### Improved Governance Structure
- **MultiSig Control**: Key contract roles controlled by MultiSig wallets
- **Role Separation**:
  - "Owner" role (MultiSig): Controls key permissions
  - "Governor" role (MultiSig): Manages protocol configuration (fees, etc.)
- **No Individual Account Control**: Enhanced security through collective management

#### Deployment & Upgradability
- **MultiSig Wallets**: Used throughout deployment process
- **Automatic Verification**: Smart contracts verified automatically
- **Upgradability Verification**: Ensures safe contract upgrades

## Competitive Analysis

### Nevermined vs Coinbase x402

#### x402 Overview
Coinbase x402 is an open payments standard for managing payment flows between parties. It acts as a communication protocol rather than a complete payment solution.

#### Key Differences

**1. Protocol Type**:
- **x402**: Communication protocol for payment-related interactions
- **Nevermined**: Complete payment processing and settlement protocol

**2. Payment Model**:
- **x402**: Pay-per-query/prompt approach
- **Nevermined**: Flexible plans (time-based, usage-based, dynamic pricing)

**3. Technical Requirements**:
- **x402**: Wallet-based, requires programmatic wallet management
- **Nevermined**: API Key-based, no wallet management needed

**4. Features**:
- **x402 Lacks**:
  - Time-based plans
  - Usage plans with credit systems
  - Dynamic pricing based on complexity
  - Unified settlement layer
  - Payment Plans concept
- **Nevermined Provides**: All above features plus more

**5. Infrastructure**:
- **x402**: No standardized payment infrastructure or API
- **Nevermined**: Complete infrastructure with libraries, APIs, and settlement

#### Strategic Positioning
Nevermined's recommendations:
- Support x402-compatible communication flows in V2
- Focus on web2 developer empowerment (no web3 wallet requirements)
- Leverage Payment Plans for sophisticated consumption models
- Position as complementary but more comprehensive solution

### Nevermined vs Stripe
- Existing comparison available in Nevermined blog
- Focus on AI-native capabilities vs traditional payment processing

## Partner Integration

### Motivation
Partners want to provide Nevermined capabilities without sacrificing user experience:
- Allow users to register agents and plans
- Enable interaction with any Nevermined-registered agent
- Avoid redirecting users to NVM App for onboarding

### Integration Approach
Nevermined provides partners with:
1. **Partner ID**: Unique public identifier
2. **Partner Secret**: Private authentication secret for NVM API

This enables seamless integration while maintaining security and user experience within partner platforms.

## Ecosystem Actors

### AI Builders
Two categories:
1. **"Solo" Builders**: Create stand-alone agents for monetization
2. **"Multi-agent" Builders**: Create complex agents that interact with other external agents

### Subscribers
- End users interacting with AI agents
- Can also be AI Builders providing apps that integrate AI Agents
- May interact directly with agents or through applications

## Summary

Nevermined V2 represents a significant evolution in decentralized AI payments infrastructure, with improvements focused on:
- Streamlined core functionality
- Enhanced security and decentralization
- Greater flexibility in payment plans and integration options
- Reduced complexity (single transaction, no off-chain dependencies)
- Better governance through MultiSig controls
- Direct agent-to-agent and human-to-agent payment capabilities

The protocol positions itself as the comprehensive solution for AI commerce, enabling both web2 and web3 developers to build AI agents that can transact autonomously while maintaining security, flexibility, and ease of use.