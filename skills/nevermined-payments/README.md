# Nevermined Payments

A Claude skill for charging for an AI agent or API with [Nevermined](https://nevermined.ai). It teaches Claude the Nevermined Payments SDKs (`@nevermined-io/payments` for TypeScript, `payments-py` for Python), the x402 protocol, payment plans and credits, and the middleware for Express, FastAPI, Strands, LangChain, MCP and Google A2A. It also covers the buyer side: purchasing a plan, enrolling a card and creating a spending delegation, and checking credits or revenue.

## Install

In Claude Code:

```
/plugin install nevermined-payments --marketplace nevermined-io/docs
```

## What it does

The plugin contains one skill: `SKILL.md` and the reference files in `references/`. It runs no code, starts no MCP server and installs no packages. Everything it contains is instructions and code examples that Claude reads.

When you ask Claude to act on them, the examples call the Nevermined API (`https://api.sandbox.nevermined.app` for testing, `https://api.live.nevermined.app` for real payments) with a Nevermined API key that you supply, and install the Nevermined SDKs in your own project.

## Links

- Documentation: https://nevermined.ai/docs/development-guide/build-using-nvm-skill
- Source: https://github.com/nevermined-io/docs/tree/main/skills/nevermined-payments
- License: MIT-0 (see `LICENSE`)
