# CLAUDE.md

This document provides comprehensive guidelines for AI agents to write and maintain documentation for the Nevermined documentation repository, a Mintlify-based developer hub for AI-native payment infrastructure.

---

## Project Overview

**Nevermined** is building financial rails for AI agents, enabling real-time monetization, access control, and payments. This documentation covers:

- Nevermined product information, and solutions that can be built with it
- Nevermined Payments Library (Agent registration, Payment Plans, etc).
- Payment plan configuration (fixed, usage-based, outcome-based, value-based)
- Payments, Credit metering, redemption, and usage control
- Proxy-based and SDK integrations
- API references and endpoint examples
- Integration guides and troubleshooting

**Key Audience**: AI builders, developers integrating Nevermined SDKs, and enterprises monetizing AI services.

### AI Coding Skill

This repository includes a **Nevermined AI Skill** at `skills/nevermined-payments/SKILL.md` with 7 reference files. This skill provides AI coding assistants (Claude Code, Cursor, Copilot, ChatGPT) with SDK patterns and integration knowledge. When updating SDK code examples, framework integrations, or x402 protocol documentation, also update the corresponding skill reference files in `skills/nevermined-payments/references/` to keep them in sync. IDE-specific files (`.cursorrules`, `.cursor/rules/`, `.github/copilot-instructions.md`) contain condensed versions of the skill and should be updated when core patterns change.

---

## Content Tone & Voice

### Tone Characteristics

- **Conversational yet professional** - Use friendly language without being overly casual
- **Action-oriented** - Focus on what developers can _do_, not just what exists
- **Confident and forward-looking** - Emphasize efficiency gains and modern approaches
- **Problem-aware** - Acknowledge friction points ("instead of hacking Stripe")
- **Practical** - Provide real, actionable examples and code snippets

### Example Tone Patterns

- ✅ "Build agents, not billing systems."
- ✅ "Go live in minutes with a few clicks"
- ✅ "This guide provides a quick path to integrating Nevermined"
- ❌ "This document describes the optional features"

### Voice Principles

- Avoid jargon unless necessary; define technical terms
- Use contractions naturally ("you're", "don't")
- Prefer active voice and strong verbs
- Address the reader directly as "you"
- Compare old vs. new approaches to highlight value

---

## Content Structure & Format

### Document Organization

All content uses Mintlify MDX format with the following standard structure:

```mdx
---
title: "Document Title"
description: "2-3 sentence summary of what this page covers"
icon: "rocket-launch" # Optional: Mintlify icon names
---

## Introduction Paragraph

2-3 sentences setting context for what the developer will learn.

## Main Sections

Use H2 headings (#) for major topics, H3 (#) for subsections.

### Code Examples

[Include working code examples in tabs by language/framework]

### Related Links

[Cross-reference other docs at the end]
```

### Key Sections by Document Type

**Getting Started Pages**

1. What you'll learn
2. Prerequisites (in Steps component)
3. Step-by-step instructions (using `<Steps>` component)
4. Next steps or related guides

**Solutions & Use Case Pages**

1. x402 Agents monetization
2. Static resources monetization and access control
3. MCP integration for tool/plugin payments
4. AI Agents Observability and cost tracking

**Development Guide**

1. Brief description
2. Features
3. Getting Started
4. Register agents and plans
5. Purchase payment plans
6. Query agents
7. Usage examples in TypeScript and Python
8. x402

**Integration Guides**

1. x402
2. Google A2A
3. MCP
4. Buildship
5. Organizations

**Framework Integrations** (for adding payments to your API)

- Express.js (TypeScript/JavaScript) - `docs/integrate/add-to-your-agent/express.mdx`
- FastAPI (Python) - `docs/integrate/add-to-your-agent/fastapi.mdx`
- Strands Agent (Python/AWS) - `docs/integrate/add-to-your-agent/strands.mdx`
- Generic HTTP (any framework) - `docs/integrate/add-to-your-agent/generic-http.mdx`

### Mintlify Components to Use

- **`<Card>` / `<CardGroup>`** - Highlight key concepts, navigation, comparisons
- **`<Steps>` / `<Step>`** - Sequential procedures and onboarding
- **`<Tabs>`** - Show code examples in multiple languages (TypeScript, Python)
- **`<Note>`, `<Warning>`, `<Info>`** - Call out important information
- **`<Accordion>`** - Expandable FAQs and supplementary details
- **Lists** - For simple enumerations and checklists

Example usage:

```mdx
<CardGroup cols={2}>
  <Card title="Feature A" icon="star">
    Description of feature A
  </Card>
  <Card title="Feature B" icon="circle">
    Description of feature B
  </Card>
</CardGroup>

<Note>This is important context about the feature.</Note>

<Steps>
  <Step title="Step 1">Instructions for step 1</Step>
  <Step title="Step 2">Instructions for step 2</Step>
</Steps>
```

---

## Code Examples & Snippets

### Standards

- **Always include working, production-ready code**
- **Show examples in multiple languages** (TypeScript/JavaScript and Python when applicable)
- **Include environment variable setup** (e.g., `NVM_API_KEY`)
- **Use realistic agent names and configurations** (not "TestAgent", use "Legal Assistant", "Data Analyzer")
- **Show both Web App UI flows AND SDK/programmatic approaches** when available
- **Include error handling** in complex examples
- **Environment names**: Only use `sandbox` and `live` in documentation and examples. The internal environment names `staging_sandbox` and `staging_live` are supported by the SDKs and CLI for internal development, but must never appear in public-facing documentation.

### Code Example Template

````mdx
<Tabs>
  <Tab title="TypeScript">
    ```typescript
    import { Payments } from '@nevermined-io/payments'
    
    const payments = Payments.getInstance({
      nvmApiKey: process.env.NVM_API_KEY,
      environment: 'sandbox'
    })
    
    // Your code here
    ```
  </Tab>
  <Tab title="Python">
    ```python
    import os
    from payments_py import Payments
    
    payments = Payments(
      api_key=os.environ.get('NVM_API_KEY'),
      environment='sandbox'
    )
    
    # Your code here
    ```
  </Tab>
</Tabs>
````

### Key Code Patterns

1. **Always initialize the Payments client** with API key and environment
2. **Show real endpoints** (not placeholders) or make it clear when to substitute
3. **Include complete objects** - Don't use `...` shorthand; show full structure
4. **Add inline comments** for non-obvious steps
5. **Reference the OpenAPI spec** for endpoint details

### x402 Protocol (v2) Code Patterns

When writing x402 payment examples, use these patterns:

**Headers (x402 v2 compliant - the ONLY supported format):**
- `payment-signature` - Client sends x402 access token
- `payment-required` - Server sends payment requirements (402 response, base64-encoded JSON)
- `payment-response` - Server sends settlement receipt (200 response, base64-encoded JSON)

**API Methods:**
- TypeScript: `payments.facilitator.verifyPermissions()`, `payments.facilitator.settlePermissions()`
- Python: `payments.facilitator.verify_permissions()`, `payments.facilitator.settle_permissions()`

**Helpers:**
- TypeScript: `buildPaymentRequired()` from `@nevermined-io/payments`
- Python: `build_payment_required()` from `payments_py.x402.helpers`

**Framework Middleware (Recommended):**
- Express.js: `paymentMiddleware` from `@nevermined-io/payments/express`
- FastAPI: `PaymentMiddleware` from `payments_py.x402.fastapi`

**Important:** Do NOT use the older `isValidRequest` API for x402 examples - always use `verifyPermissions`/`settlePermissions` with proper x402 headers.

---

## Key Concepts & Terminology

### Core Terms (Use Consistently)

| Term             | Definition                                                         | Usage Notes                                                     |
| ---------------- | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| **Agent**        | An AI service or application that can accept payments              | Use "agent" (lowercase) in running text; "AI agent" for clarity |
| **Plan**         | A pricing configuration (fixed, usage-based, outcome, value-based) | Not "subscription" or "tier" in Nevermined context              |
| **Credits**      | Internal unit of account for metering and billing                  | Explains "credit metering" and "credit redemption"              |
| **Metering**     | Tracking usage of an agent's API                                   | Related to request counting and cost tracking                   |
| **Redemption**   | The process of consuming credits for access                        | After purchase, users redeem credits                            |
| **Bearer Token** | Authentication credential for accessing paid agents                | Used in HTTP Authorization header                               |
| **A2A**          | Agent-to-Agent payments                                            | Distinct from human-to-agent; enable automated commerce         |
| **MCP**          | Model Context Protocol for agent integration                       | Used for tool/plugin definitions                                |
| **Web App**      | The Nevermined no-code visual interface                            | https://nevermined.app                                          |

### Avoid Confusion

- ❌ **Subscription**: Use "plan" or "pricing plan" instead
- ❌ **Token**: In crypto context, clear it's not an authentication token
- ❌ **User**: Clarify "end user" vs "developer" when ambiguous
- ❌ **Service**: Too generic; use "agent", "API", or "service endpoint"

---

## Document Coverage & Roadmap

Reference the [architecture.md](architecture.md) file for current documentation status. Follow these conventions:

- ✅ Completed and published
- 🚧 In Progress
- ❌ Not Started
- 📝 Planned

When updating documentation, ensure:

1. Mark status in architecture.md
2. Link new pages from docs.json navigation
3. Add cross-references in related documents

---

## Building & Testing Documentation

### Local Development Workflow

#### Prerequisites

- Node.js 16+ (for Mintlify)
- npm or yarn
- Git for version control

#### Setup & Preview

```bash
# 1. Install Mintlify CLI globally
npm install -g mintlify

# 2. Navigate to the docs directory
cd /path/to/docs

# 3. Start local dev server with hot reload
mintlify dev

# 4. Open browser to http://localhost:3000
```

The dev server automatically reloads when you edit `.mdx` files, allowing real-time preview.

### Build Process

#### Local Build

```bash
# Verify documentation builds without errors
mintlify build
```

This generates a static site in the `.mintlify` directory.

#### CI/CD Deployment

- **Trigger**: Push to the main branch
- **Deployment**: Automatic via Mintlify GitHub App integration
- **Preview**: GitHub integrates a preview link in PR checks
- **Production**: https://nevermined.ai/docs

### Content Validation Checklist

Before finalizing any documentation:

- [ ] **Links are valid** - All internal links use the correct docs/ paths
- [ ] **Code examples are tested** - Confirm code snippets run without errors
- [ ] **Frontmatter is complete** - title, description, and icon are set
- [ ] **Format is consistent** - Follows this style guide for tone, structure, components
- [ ] **Cross-references are added** - Related pages are linked at the end
- [ ] **No broken images** - Image paths point to /images/ directory
- [ ] **Both languages shown** - TypeScript AND Python examples when applicable
- [ ] **MDX components are used correctly** - `<Card>`, `<Steps>`, `<Note>` syntax
- [ ] **No placeholder text** - Replace all [EXAMPLE] or TBD sections

### Testing & Preview Workflow

**For New or Updated Content:**

1. **Local test** - Run `mintlify dev` and verify layout and links
2. **Create PR** - Push branch and create pull request
3. **Preview** - Mintlify bot adds a preview deployment link to the PR
4. **Review** - Check the preview for layout, images, and code rendering
5. **Merge** - Upon approval, merge to main and auto-deploy

**Troubleshooting:**

- **Local server not starting**: Run `mintlify install` to reinstall dependencies
- **404 errors**: Ensure you're running `mintlify dev` from the root directory with `docs.json`
- **MDX rendering issues**: Check Mintlify documentation for component syntax
- **Link breaks**: Verify paths match directory structure (e.g., `docs/getting-started/welcome`)

---

## Documentation Categories

### 1. Getting Started

- **Purpose**: Help developers onboard quickly
- **Structure**: Welcome → Quickstart → Core Concepts → Examples
- **Tone**: Encouraging and instructive
- **Examples**: [welcome.mdx](docs/getting-started/welcome.mdx), [quickstart.mdx](docs/getting-started/quickstart.mdx)

### 2. Solutions & Use Cases

- **Purpose**: Show real-world applications and business value
- **Structure**: Problem → Solution → Implementation → Benefits
- **Tone**: Forward-thinking and outcome-focused
- **Examples**: Agent-to-Agent monetization, Access Control, MCP integration
- **Key**: Compare old vs. new approaches

### 3. Development Guide

- **Purpose**: Explanation about how to use the Payments library
- **Structure**: Overview → Core concepts → Getting Started → Examples
- **Tone**: Detailed yet accessible
- **Examples**: Registration, Payment plans, credit engines, payments

### 4. API Reference

- **Purpose**: Document all Payments library methods and endpoints
- **Structure**: Overview → Setup → Method details → Examples → Error handling
- **Tone**: Technical and precise
- **Examples**: [api-reference/introduction.mdx](docs/api-reference/introduction.mdx)

### 5. Integration Guides

- **Purpose**: Help developers integrate Nevermined into existing systems
- **Structure**: Prerequisites → Architecture → Implementation → Testing
- **Tone**: Practical and step-by-step
- **Examples**: SDK integration, proxy-based flows, agent registration

---

## Writing Best Practices

### Opening & Hooks

- Start with a value statement: "This guide helps you X in Y minutes"
- Use second person: "You'll learn how to..."
- Avoid long preambles; get to the point quickly

### Clarity & Accessibility

- One idea per sentence
- Use shorter paragraphs (2-3 sentences max)
- Define acronyms on first use: "Agent-to-Agent (A2A) payments"
- Link to prerequisite knowledge if needed

### Examples & Demos

- Provide complete, copy-paste-ready code
- Show success and failure cases
- Include realistic data (not generic placeholders)
- Comment non-obvious steps

### Navigation & Cross-References

- Link to related pages at the end
- Use breadcrumbs in sidebar navigation via docs.json
- Reference architecture.md for feature status

### Consistency

- Use the same terminology throughout
- Format all code examples the same way
- Use same markdown components for similar content
- Keep section names parallel (e.g., all "Getting Started" sections)

---

## Common Content Patterns

### Pattern: Feature Comparison (The Old Way vs. The Nevermined Way)

```mdx
### The Old Way vs. The Nevermined Way

<CardGroup cols={2}>
  <Card title="The Old Way" icon="x">
    • Hacking Stripe integration • Manual access control setup • Guesswork
    pricing • Missing metering
  </Card>
  <Card title="The Nevermined Way" icon="check">
    • Go live in minutes • Automated access control • Dynamic pricing modes •
    Built-in metering
  </Card>
</CardGroup>
```

### Pattern: Sequential Setup

````mdx
<Steps>
  <Step title="1. Step name">
    Instructions and context.
    <Tabs>
      <Tab title="TypeScript">```typescript // code here ```</Tab>
      <Tab title="Python">```python # code here ```</Tab>
    </Tabs>
  </Step>
  <Step title="2. Next step">More instructions.</Step>
</Steps>
````

### Pattern: Important Notes

```mdx
<Note>This is critical information developers must know.</Note>

<Warning>This describes a potential pitfall or deprecation.</Warning>

<Tip>This is helpful but optional context.</Tip>
```

---

## File Structure & Naming

### File Organization

```
docs/
├── getting-started/          # Onboarding and core concepts
├── solutions/                # Use cases and business scenarios
├── integrations/             # Integration partners and flows
├── integration-guide/        # Step-by-step integration paths
├── development-guide/        # Deep SDK documentation
├── api-reference/            # API method reference
├── products/                 # Product-specific docs (NVM Pay, NVM ID)
└── snippets/                 # Reusable content blocks
```

### Naming Conventions

- Use **kebab-case** for file names: `getting-started.mdx`, `query-agents.mdx`
- Use **descriptive, SEO-friendly names** that match page titles
- Avoid ambiguous names like `guide.mdx` or `integration.mdx`
- Group related files in subdirectories (e.g., `products/nvm-pay/`)

---

## SEO & Metadata

### Frontmatter Requirements

Every `.mdx` file must include:

```yaml
---
title: "Your Page Title"
description: "2-3 sentence summary for search results and social sharing"
icon: "icon-name" # From Mintlify icon library (optional but recommended)
---
```

### Description Best Practices

- Write for search engines: include key terms naturally
- Keep 160 characters max for preview truncation
- Include action words: "Learn how to...", "Build...", "Integrate..."
- Match the page's primary goal

Example:

```yaml
description: "Register AI agents and create payment plans in 5 minutes using the Nevermined Payments API"
```

---

## Reference & Resources

### Key Files in This Repository

- **README.md** - Local development and deployment instructions
- **[architecture.md](architecture.md)** - Documentation status tracker and roadmap
- **[docs.json](docs.json)** - Mintlify configuration and navigation structure
- **[docs/api-reference/openapi.json](docs/api-reference/openapi.json)** - OpenAPI spec for Payments API

### External References

- **Nevermined Website**: https://nevermined.ai
- **Nevermined App**: https://nevermined.app
- **Mintlify Docs**: https://mintlify.com/docs
- **Discord Community**: https://discord.com/invite/GZju2qScKq

### Before You Write

1. Check [architecture.md](architecture.md) to see what's already documented
2. Review related existing pages for tone and format consistency
3. Verify the page path in [docs.json](docs.json) navigation
4. Confirm any external links are current and active

---

## Quick Reference: Do's and Don'ts

### ✅ DO

- Use second person ("you") and direct address
- Provide complete, working code examples
- Show both Web App UI flows and SDK approaches
- Link liberally to related content
- Use Mintlify components (`<Card>`, `<Steps>`, `<Note>`)
- Compare old vs. new approaches for credibility
- Include environment variables and setup steps
- Test code examples before publishing

### ❌ DON'T

- Use passive voice unnecessarily
- Show incomplete code with `...` shorthand
- Assume readers know Nevermined jargon
- Forget to update architecture.md status
- Mix "Agent" capitalization inconsistently
- Create content that can't run without missing steps
- Use outdated API examples
- Link to broken or non-existent pages
- Forget both TypeScript and Python examples
- Write overly long paragraphs

---

## Version Control & Collaboration

### Commit Message Format

```
docs: <brief description of changes>

Example:
docs: add payment plan configuration guide
docs: update API reference for credit metering
docs: fix broken links in getting started
```

### Pull Request Template

When submitting documentation changes:

1. Describe what pages were added/modified
2. Link to the preview deployment
3. Confirm you tested locally with `mintlify dev`
4. Confirm links are not broken with `mintlify broken-links`
5. List any new cross-references added
6. Update architecture.md status if needed

### Review Checklist

- [ ] Follows tone and format of this guide
- [ ] Code examples are tested and working
- [ ] All links are valid
- [ ] Mintlify preview looks correct
- [ ] architecture.md is updated
- [ ] docs.json navigation includes new pages
- [ ] No typos or grammar issues

---

## Contact & Support

For questions about documentation:

- Check the Nevermined Discord (if available)
- Reference the README.md troubleshooting section
- Review existing similar pages for patterns
- Consult the Mintlify documentation for component questions

---

**Last Updated**: January 2026
**Maintained By**: Nevermined Team
