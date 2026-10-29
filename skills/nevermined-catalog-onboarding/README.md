# Nevermined Catalog Onboarding

A Claude skill for onboarding an external builder's [x402](https://nevermined.ai/docs) service into the [Nevermined](https://nevermined.ai) Agent Services Catalog, so Nevermined buyers can discover and pay it through the Router. It teaches Claude to pick the one routable endpoint, prove the endpoint really charges and returns a valid result by paying it directly from a raw EOA (EIP-3009), register the agent, publish and promote the listing, and then validate a real paid call end-to-end through the Nevermined Router. It also covers listing ownership and the domain-proof claim flow, and when a promoted listing becomes payable with Nevermined subscription credits.

## Install

In Claude Code:

```
/plugin install nevermined-catalog-onboarding --marketplace nevermined-io/docs
```

## What it does

The plugin contains one skill: `SKILL.md` and the reference files in `references/`. It is instructions and code examples that Claude reads — it starts no MCP server and installs no packages on its own. The one runnable helper, `references/c402pay/pay.mjs`, is a raw-EOA x402 payer you invoke explicitly; it signs an EIP-3009 authorization with `viem` (install it with `npm i` first) and refuses to sign a non-USDC asset or an amount over a configurable cap.

When you ask Claude to act on the skill, the examples call the Nevermined API (`https://api.live.nevermined.app`, or `https://api.sandbox.nevermined.app` for testing) with a Nevermined API key that you supply. The direct-wallet proof spends real money only within the cents-scale cap you fund the throwaway EOA with.

## Links

- Documentation: https://nevermined.ai/docs/products/catalog/overview
- Source: https://github.com/nevermined-io/docs/tree/main/skills/nevermined-catalog-onboarding
- License: MIT-0 (see `LICENSE`)
