# Nevermined AI Skill Evaluation Report

**Date:** 2026-02-11
**Skill Version:** As of commit `25dcee7` (Add Nevermined AI Skill for vibe-coding)
**SDK Versions Tested:** `@nevermined-io/payments@1.0.7`, `payments-py@1.1.1`
**CLI Version:** `@nevermined-io/cli@1.0.3`

---

## Executive Summary

The Nevermined AI Skill produces **working code on first iteration** for the core Express.js and FastAPI middleware integrations. All 7 prompts (E1–E4, F1–F3) generated code that compiles/parses, starts a server, and returns proper `402 Payment Required` responses with valid `payment-required` headers.

However, the **CLI E2E workflow is broken** due to a BigInt serialization bug, and there are **significant documentation inconsistencies** across header names, deprecated APIs, and environment naming that would confuse developers piecing together the Skill with CLI docs.

### Overall Score

| Area | Rating | Notes |
|------|--------|-------|
| Express.js middleware code | **A** | Works first try with one caveat (`"type": "module"` required) |
| FastAPI middleware code | **A** | Works first try, all imports valid |
| Dynamic pricing patterns | **A** | Both callback patterns work correctly |
| Lifecycle hooks / Payment context | **A** | TypeScript hooks compile, Python `PaymentContext` imports |
| CLI registration workflow | **F** | `register-credits-plan` broken (BigInt bug) |
| Cross-doc consistency | **D** | 3 header conventions, deprecated APIs in 4+ files |
| Vibe-coding readiness | **B** | SDK integration excellent, but gaps in setup/registration |

---

## Phase 1: Test Agent Setup

Created two third-party-style agents with no Nevermined code:

- **Express.js** (`/tmp/nvm-eval/express-agent/`): OpenAI chat proxy with `POST /chat`, `POST /summarize`, `GET /health`
- **FastAPI** (`/tmp/nvm-eval/fastapi-agent/`): OpenAI wrapper with `POST /generate`, `POST /analyze`, `GET /health`

Both verified clean: TypeScript compiles (`tsc --noEmit`), Python parses (`ast.parse`).

---

## Phase 2: Express.js Evaluation Results

### E1: Basic Middleware Setup

**Prompt:** "Add Nevermined x402 payments to my Express.js API. Protect POST /chat with 1 credit per request."

| Check | Result | Details |
|-------|--------|---------|
| Code compiles (`tsc --noEmit`) | **PASS** | Clean, no errors |
| Server starts | **PASS** | With `"type": "module"` in package.json |
| Returns 402 on unauthenticated `POST /chat` | **PASS** | HTTP 402 with correct body |
| `payment-required` header valid base64 JSON | **PASS** | Contains x402 v2 structure with planId |
| Health endpoint unprotected | **PASS** | `GET /health` returns 200 |

**Finding:** Without `"type": "module"` in `package.json`, the import `@nevermined-io/payments/express` throws `ERR_PACKAGE_PATH_NOT_EXPORTED`. The Skill and reference docs don't mention this ESM requirement.

**Decoded `payment-required` header:**
```json
{
  "x402Version": 2,
  "resource": { "url": "/chat" },
  "accepts": [{
    "scheme": "nvm:erc4337",
    "network": "eip155:84532",
    "planId": "test-plan-123",
    "extra": { "httpVerb": "POST" }
  }],
  "extensions": {}
}
```

### E2: Dynamic Pricing

**Prompt:** "Add dynamic pricing — charge credits based on the model used (gpt-4 = 5 credits, gpt-3.5 = 1 credit)"

| Check | Result |
|-------|--------|
| Compiles | **PASS** |
| Starts | **PASS** |
| Returns 402 | **PASS** |

The `credits: (req, res) => { ... }` callback pattern works as documented.

### E3: Multi-Route Configuration

**Prompt:** "Protect POST /chat (5 credits) and POST /summarize (2 credits) with different costs"

| Check | Result |
|-------|--------|
| Compiles | **PASS** |
| Starts | **PASS** |
| `POST /chat` returns 402 | **PASS** |
| `POST /summarize` returns 402 | **PASS** |
| `GET /health` returns 200 | **PASS** |

Multiple route configuration works correctly.

### E4: Lifecycle Hooks

**Prompt:** "Add payment lifecycle hooks to log verification and settlement events"

| Check | Result |
|-------|--------|
| Compiles | **PASS** |
| Starts | **PASS** |
| Returns 402 | **PASS** |
| Error hook fires | **PASS** — `[Payment] Error: Payment required: missing x402 access token` logged |

Hooks (`onBeforeVerify`, `onAfterVerify`, `onAfterSettle`, `onPaymentError`) compile and the error hook fires on unauthenticated requests.

---

## Phase 3: FastAPI Evaluation Results

### F1: Basic PaymentMiddleware

**Prompt:** "Add Nevermined x402 payments to my FastAPI app. Protect POST /generate with 1 credit."

| Check | Result |
|-------|--------|
| Syntax valid | **PASS** |
| Imports resolve | **PASS** |
| Server starts | **PASS** |
| `POST /generate` returns 402 | **PASS** |
| `GET /health` returns 200 | **PASS** |
| `POST /analyze` (unprotected) returns 200 | **PASS** |
| `payment-required` header valid | **PASS** |

### F2: Dynamic Credits

**Prompt:** "Add dynamic credits based on max_tokens parameter in request body"

| Check | Result |
|-------|--------|
| Syntax valid | **PASS** |
| Server starts | **PASS** |
| Returns 402 | **PASS** |

The `async def calculate_credits(request: Request) -> int` pattern works as documented.

### F3: Payment Context Access

**Prompt:** "Show how to access payment context in route handlers"

| Check | Result |
|-------|--------|
| Syntax valid | **PASS** |
| `PaymentContext` import resolves | **PASS** |
| Server starts | **PASS** |
| Returns 402 | **PASS** |

Note: `PaymentContext` import triggers a warning (`Field name "schema" in "Extension" shadows an attribute in parent "BaseModel"`) — a minor SDK issue, not related to the Skill.

---

## Phase 4: CLI E2E Test Results

### Step 1: Install CLI — PASS

CLI `@nevermined-io/cli@1.0.3` already installed.

### Step 2: Configure — PASS (with caveats)

```bash
nvm config init --api-key "$NVM_API_KEY" --environment staging_sandbox
```

**Finding:** The Skill says environments are `sandbox` and `live`. The CLI uses `staging_sandbox`, `staging`, `production`, and `live`. This mismatch would confuse developers.

### Step 3: Register Credits Plan — FAIL (CLI bug)

```bash
nvm plans register-credits-plan \
  --credits-config '{"durationSecs":0,"minAmount":1,"maxAmount":1,"amount":100}'
```

**Error:** `The creditsConfig.durationSecs must be 0 for credits plans (non-expirable)`

**Root cause:** The SDK validates `creditsConfig.durationSecs !== 0n` (BigInt comparison at `plans-api.js:233`), but the CLI uses `JSON.parse()` which produces regular numbers (`0 !== 0n` is `true` in JavaScript). This makes `register-credits-plan` **permanently broken** — there is no way to pass a BigInt through JSON input.

The CLI has helper commands (`get-fixed-credits-config`) that generate correct objects, but their `--format json` output also fails with `Error: Do not know how to serialize a BigInt`.

### Step 4: Register Agent — BLOCKED

Blocked by Step 3 failure. The `register-agent-and-plan` combined command returned `Invalid Nevermined API Key` — possibly a permissions issue with the test key.

### Step 5-7: Order, Token, Query — BLOCKED

Blocked by Step 3/4 failures.

### CLI Documentation Issues Found

| Issue | Severity | Location |
|-------|----------|----------|
| `nvm plans list` referenced in docs but command is `get-plans` | Medium | `docs/api-reference/cli/plans.md:24` |
| `durationSecs` not mentioned in JSON examples for credits config | High | `docs/api-reference/cli/plans.md:133-141` |
| BigInt serialization bug makes `register-credits-plan` unusable | **Critical** | CLI `base-command.js:154` + SDK `plans-api.js:233` |
| `--format json` on helper commands crashes with BigInt error | High | CLI `get-fixed-credits-config` |
| Header shown as `X-402` in CLI docs vs `payment-signature` in SDK | **Critical** | `docs/api-reference/cli/querying.md:42,63,79` |
| Environment naming: `staging_sandbox` vs `sandbox` | Medium | Skill SKILL.md:37 vs CLI |

---

## Gap Analysis: All Inconsistencies

### P0 — Critical (Code Would Fail)

| # | Issue | File(s) | Line(s) | Impact |
|---|-------|---------|---------|--------|
| 1 | **Header name `X-402` in CLI docs** — SDK middleware uses `payment-signature` | `docs/api-reference/cli/querying.md` | 42, 63, 79, 102, 135, 280, 281, 325, 353, 393, 447, 585 | Requests using `X-402` header would get 402 from middleware expecting `payment-signature` |
| 2 | **Deprecated `payments.requests.isValidRequest()` API** — should be `payments.facilitator.verifyPermissions()` | `docs/getting-started/quickstart.mdx` | 190 | Method may not exist in SDK v1.0.7 |
| 3 | **Deprecated `payments.requests.isValidRequest()` API** | `docs/integrate/patterns/validate-requests.mdx` | 128, 156, 189, 244, 281, 304, 313, 344 | Same as above |
| 4 | **Deprecated `payments.requests.isValidRequest()` API** | `docs/integrate/patterns/charge-credits.mdx` | 16, 333 | Same as above |
| 5 | **Deprecated `payments.requests.isValidRequest()` API** | `docs/integrate/patterns/subscription-access.mdx` | 17, 60, 138, 223, 281, 330, 486, 532 | Same as above |
| 6 | **`Authorization: Bearer` header in quickstart** — should be `payment-signature` | `docs/getting-started/quickstart.mdx` | 176, 183 | Wrong header name |
| 7 | **CLI `register-credits-plan` broken** — BigInt serialization bug | CLI `base-command.js:154` + SDK `plans-api.js:233` | N/A | Cannot register plans via CLI |
| 8 | **ESM requirement not documented** — `"type": "module"` needed in package.json for `@nevermined-io/payments/express` | Skill `express-integration.md`, SKILL.md | Missing | Import fails at runtime without it |

### P1 — Medium (Causes Confusion)

| # | Issue | File(s) | Line(s) |
|---|-------|---------|---------|
| 9 | **Missing `BUILDER_ADDRESS`** in SKILL.md env table | `skills/nevermined-payments/SKILL.md` | 34-39 |
| 10 | **Environment naming mismatch** — Skill says `sandbox`/`live`, CLI has `staging_sandbox`/`staging`/`production`/`live` | SKILL.md:37, CLI | N/A |
| 11 | **`nvm plans list` referenced but doesn't exist** — actual command is `get-plans` | `docs/api-reference/cli/plans.md` | 24, 30, 31 |
| 12 | **CLI helper `--format json` crashes** with BigInt serialization error | CLI `get-fixed-credits-config` | N/A |
| 13 | **No CLI guidance in Skill** — Skill only covers SDK-based registration, not CLI workflow | SKILL.md | Missing section |
| 14 | **SDK environment `staging_sandbox`** accepted by SDK via `sandbox` shorthand, but CLI requires exact `staging_sandbox` | SDK vs CLI | N/A |
| 15 | **Quickstart Step 4** uses old proxy-based validation instead of x402 middleware | `docs/getting-started/quickstart.mdx` | 169-214 |
| 16 | **`verify.json` example** in CLI docs uses wrong property names (`token` vs `x402AccessToken`, `creditsRequired` vs `maxAmount`) | `docs/api-reference/cli/querying.md` | 155-163 |
| 17 | **SDK example in CLI docs** uses `staging_sandbox` environment and wrong `verifyPermissions` parameters | `docs/api-reference/cli/querying.md` | 187-199 |

### P2 — Nice to Have

| # | Issue | File(s) |
|---|-------|---------|
| 18 | Add explicit "Prerequisites" section to Skill mentioning Node.js 18+, `"type": "module"` | SKILL.md |
| 19 | Add `pip install payments-py[fastapi]` note (the `[fastapi]` extra is important) | SKILL.md |
| 20 | Show complete `.env` file example in Skill | SKILL.md |
| 21 | Add MCP server reference to Skill's framework table | SKILL.md — already present, looks good |
| 22 | Pydantic warning about `Extension.schema` field shadowing | SDK `payments_py/x402/types_v2.py:22` |

---

## Detailed Findings by File

### `skills/nevermined-payments/SKILL.md`

**Strengths:**
- Excellent framework decision tree (line 86-96)
- Complete SDK quick reference (lines 98-176)
- Clear x402 headers documentation (lines 178-199)
- Good troubleshooting table (lines 360-367)

**Gaps:**
- Missing `BUILDER_ADDRESS` in env table (line 34-39)
- No `"type": "module"` requirement mentioned for TypeScript
- No CLI-based registration guidance
- Environment values `sandbox`/`live` don't match CLI's `staging_sandbox`/`production`/`live`

### `skills/nevermined-payments/references/express-integration.md`

**Strengths:**
- Working code examples (verified E1-E4)
- Complete middleware options documentation
- Good complete example with OpenAI integration

**Gaps:**
- No mention of `"type": "module"` requirement
- No mention of what Node.js version is required

### `skills/nevermined-payments/references/fastapi-integration.md`

**Strengths:**
- Working code examples (verified F1-F3)
- Dynamic credits pattern works
- PaymentContext access documented correctly

**Gaps:**
- Minor: `pip install payments-py[fastapi]` should be emphasized more (easy to miss the `[fastapi]` extra)

### `docs/api-reference/cli/querying.md`

**Critical issues:**
- Uses `X-402` header throughout (lines 42, 63, 79, etc.) — should be `payment-signature`
- SDK example uses wrong `verifyPermissions` parameter names (line 191-195)
- Uses `staging_sandbox` environment name (line 188)

### `docs/getting-started/quickstart.mdx`

**Critical issues:**
- Step 4 (line 169-214) uses deprecated `payments.requests.isValidRequest()` and `Authorization: Bearer` header
- Should use `paymentMiddleware` or x402 `verifyPermissions`/`settlePermissions`

### `docs/integrate/patterns/validate-requests.mdx`

**Mixed quality:**
- The "Basic validation" section (lines 17-114) correctly uses `verifyPermissions` and `payment-signature` header
- The "Validation with minimum credits" section (line 119+) reverts to deprecated `isValidRequest`

### `docs/integrate/patterns/charge-credits.mdx`

**Mixed quality:**
- TypeScript section (line 16) uses deprecated `isValidRequest`
- Python section (lines 26-48) correctly uses `verify_permissions`/`settle_permissions`

### `docs/integrate/patterns/subscription-access.mdx`

**Issues:**
- Entire file uses deprecated `payments.requests.isValidRequest()`
- Uses `Authorization: Bearer` header pattern

---

## Recommendations Summary

1. **Fix header inconsistency** — Standardize on `payment-signature` across all docs
2. **Replace deprecated API** — `isValidRequest` → `verifyPermissions`/`settlePermissions` in 4 files
3. **Add ESM requirement** — Document `"type": "module"` in Express.js references
4. **Fix CLI BigInt bug** — Use `JSON.parse` with BigInt reviver in `parseJsonInput`
5. **Add CLI guidance to Skill** — Include registration commands and setup prompts
6. **Standardize environment naming** — Clear mapping between `sandbox`/`live` and CLI environments
7. **Add `BUILDER_ADDRESS`** to Skill env table

See `IMPROVEMENTS.md` for the full prioritized list.

---

## Round 2 Re-evaluation (2026-02-11)

**Versions tested:** `@nevermined-io/payments@1.0.8`, `@nevermined-io/cli@1.0.8`, `payments-py@1.1.2`

### Fixes Applied (Round 1)

All 8 P0 issues and most P1/P2 issues were resolved:

- **P0 #1**: `X-402` → `payment-signature` in CLI querying.md ✅ FIXED
- **P0 #2-5**: `isValidRequest()` → `verifyPermissions()`/`settlePermissions()` in quickstart, validate-requests, charge-credits, subscription-access ✅ FIXED
- **P0 #6**: `Authorization: Bearer` → `payment-signature` in quickstart ✅ FIXED
- **P0 #7**: BigInt serialization bug — reviver in CLI `parseJsonInput`, replacer in `output-formatter.ts`, `BigInt()` wrapping in SDK `plans-api.ts` ✅ FIXED
- **P0 #8**: ESM `"type": "module"` documented in SKILL.md ✅ FIXED
- **P1 #9**: `BUILDER_ADDRESS` added to SKILL.md env table ✅ FIXED
- **P1 #10**: Environment naming standardized (docs use `sandbox`/`live` only) ✅ FIXED
- **P1 #11**: `nvm plans list` → `nvm plans get-plans` in plans.md ✅ FIXED (partial — see below)
- **P1 #12**: `--format json` BigInt crash fixed via replacer ✅ FIXED
- **P1 #13**: CLI registration guidance added to SKILL.md ✅ FIXED
- **P1 #15**: Quickstart Step 4 replaced with `paymentMiddleware` ✅ FIXED
- **P1 #16-17**: verify.json and SDK example parameters fixed in querying.md ✅ FIXED
- **P2 #18**: Prerequisites added to SKILL.md ✅ FIXED
- **P2 #19**: `pip install payments-py[fastapi]` documented ✅ FIXED
- **P2 #20**: `.env` template added to SKILL.md ✅ FIXED (Round 2)
- **P2 #22**: Pydantic warning — POSTPONED (non-breaking)

### Remaining Issues Found (Round 2)

| # | Issue | Occurrences | Source Repo |
|---|-------|-------------|-------------|
| R1 | `nvm plans list` still in 5 CLI doc files (index.md, purchases.md, README.md, other-commands.md, getting-started.md, agents.md) | 33 | `payments/cli/docs/` + `docs/` (index.md only) |
| R2 | `X-402` header in README.md | 1 | `payments/cli/docs/README.md` |
| R3 | `staging_sandbox`/`staging_live` in Python environment table | 2 | `payments-py/docs/api/02-initializing-the-library.md` |
| R4 | Missing `.env` template in SKILL.md | 1 | `docs/skills/nevermined-payments/SKILL.md` |

### Updated Scores

| Area | Round 1 | Round 2 | Notes |
|------|---------|---------|-------|
| Express.js middleware code | **A** | **A** | No change — works first try |
| FastAPI middleware code | **A** | **A** | No change — works first try |
| Dynamic pricing patterns | **A** | **A** | No change |
| Lifecycle hooks / Payment context | **A** | **A** | No change |
| CLI registration workflow | **F** | **B** | BigInt fixed; docs still have stale command refs |
| Cross-doc consistency | **D** | **B** | Most issues resolved; 36 straggler occurrences |
| Vibe-coding readiness | **B** | **A-** | SDK integration excellent; remaining issues are doc polish |
