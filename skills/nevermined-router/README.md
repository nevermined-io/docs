# Nevermined Router

A Claude skill for letting an AI agent pay external services it has no account with, through the [Nevermined](https://nevermined.ai) Router. It teaches Claude to discover services in the Agent Services Catalog, create a spending Delegation with a cap, price a call before making it, pay any x402 or MPP endpoint through the Router, read the payment ledger, and respect the guardrails an autonomous buyer needs.

## Install

In Claude Code:

```
/plugin install nevermined-router --marketplace nevermined-io/docs
```

## What it does

The plugin contains one skill: `SKILL.md` and the reference files in `references/`. It runs no code, starts no MCP server and installs no packages. Everything it contains is instructions and code examples that Claude reads.

When you ask Claude to act on them, the examples call the Nevermined API (`https://api.live.nevermined.app`, or `https://api.sandbox.nevermined.app` for testing) and the Nevermined Catalog MCP (`https://mcp.live.nevermined.app/mcp`) with a Nevermined API key that you supply. Paid calls spend real money only within the spending cap you set on the Delegation.

## Links

- Documentation: https://nevermined.ai/docs/products/catalog/router/overview
- Source: https://github.com/nevermined-io/docs/tree/main/skills/nevermined-router
- License: MIT-0 (see `LICENSE`)
