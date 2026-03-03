# Nevermined AI Skill — Improvement Recommendations

Prioritized list of improvements based on the evaluation of the Nevermined AI Skill, SDK integration, CLI workflow, and documentation consistency. Each item includes severity, affected files, and suggested fix.

---

## P0 — Fix Now (Code Would Fail)

### 1. Replace `X-402` header with `payment-signature` in CLI docs

**Impact:** Developers following CLI docs would use the wrong header name and get 402 errors from the SDK middleware.

**File:** `docs/api-reference/cli/querying.md`
**Lines:** 42, 63, 79, 102, 135, 280, 281, 325, 353, 393, 447, 585

**Fix:** Find-and-replace all occurrences of `X-402` with `payment-signature` in that file. Update accompanying prose to reference "x402 access token" and the `payment-signature` header.

---

### 2. Replace deprecated `isValidRequest()` in quickstart

**Impact:** Method may not exist in SDK v1.0.7. Developers copying the quickstart would get runtime errors.

**File:** `docs/getting-started/quickstart.mdx`
**Lines:** 190 (and surrounding code block ~169-214)

**Fix:** Replace the Step 4 code block with `paymentMiddleware` usage (Express) or `verifyPermissions`/`settlePermissions` (generic). Also replace the `Authorization: Bearer` header at lines 176, 183 with `payment-signature`.

---

### 3. Replace deprecated `isValidRequest()` in validate-requests pattern

**File:** `docs/integrate/patterns/validate-requests.mdx`
**Lines:** 128, 156, 189, 244, 281, 304, 313, 344

**Fix:** The "Basic validation" section (lines 17-114) is correct — it uses `verifyPermissions`. The "Validation with minimum credits" section (line 119+) needs to be updated to use the same pattern. Replace `payments.requests.isValidRequest()` with `payments.facilitator.verifyPermissions()`.

---

### 4. Replace deprecated `isValidRequest()` in charge-credits pattern

**File:** `docs/integrate/patterns/charge-credits.mdx`
**Lines:** 16, 333

**Fix:** The Python section (lines 26-48) is correct. Update the TypeScript section to use `payments.facilitator.verifyPermissions()` and `payments.facilitator.settlePermissions()`.

---

### 5. Replace deprecated `isValidRequest()` in subscription-access pattern

**File:** `docs/integrate/patterns/subscription-access.mdx`
**Lines:** 17, 60, 138, 223, 281, 330, 486, 532

**Fix:** Entire file uses the deprecated API. Rewrite all code examples to use `verifyPermissions`/`settlePermissions` and `payment-signature` header.

---

### 6. Replace `Authorization: Bearer` header in quickstart

**Impact:** Wrong header name — middleware expects `payment-signature`, not `Authorization: Bearer`.

**File:** `docs/getting-started/quickstart.mdx`
**Lines:** 176, 183

**Fix:** Change to `payment-signature` header with x402 access token.

---

### 7. Fix CLI BigInt serialization bug

**Impact:** `nvm plans register-credits-plan` is permanently broken — no credits plan can be registered via CLI.

**Location:** CLI `base-command.js:154` (`parseJsonInput` uses `JSON.parse()`) + SDK `plans-api.js:233` (compares `creditsConfig.durationSecs !== 0n`)

**Root cause:** `JSON.parse()` produces number `0`, SDK checks against BigInt `0n`. In JavaScript, `0 !== 0n` is `true`.

**Fix (in CLI):** Add a BigInt reviver to `parseJsonInput`:
```javascript
JSON.parse(input, (key, value) => {
  if (key === 'durationSecs' && typeof value === 'number') return BigInt(value)
  return value
})
```

**Fix (in SDK):** Alternatively, use loose comparison `!=` instead of `!==` at `plans-api.js:233`, or convert before comparing.

**Also fix:** `get-fixed-credits-config --format json` crashes with "Do not know how to serialize a BigInt". Add a `BigInt.prototype.toJSON` or use a replacer in `JSON.stringify`.

---

### 8. Document ESM requirement for Express.js

**Impact:** `@nevermined-io/payments/express` import fails with `ERR_PACKAGE_PATH_NOT_EXPORTED` without `"type": "module"` in package.json.

**Files:**
- `skills/nevermined-payments/SKILL.md` — add to Quick Start Checklist
- `skills/nevermined-payments/references/express-integration.md` — add note after installation section

**Fix:** Add a note like:
> **Important:** Your `package.json` must include `"type": "module"` for the `@nevermined-io/payments/express` subpath import to work. Add it if not already present.

---

## P1 — Fix Soon (Causes Confusion)

### 9. Add `BUILDER_ADDRESS` to Skill env table

**Impact:** Developers won't know they need a recipient wallet address for plan registration.

**File:** `skills/nevermined-payments/SKILL.md`
**Lines:** 34-39

**Fix:** Add row:
| `BUILDER_ADDRESS` | For registration | Wallet address to receive payments |

---

### 10. Standardize environment naming

**Impact:** Skill says `sandbox`/`live`, CLI uses `staging_sandbox`/`staging`/`production`/`live`. Developers get confused when switching between SDK and CLI.

**Files:**
- `skills/nevermined-payments/SKILL.md` line 37
- CLI configuration

**Fix:** Add a note to the Skill:
> The SDK accepts `sandbox` and `live`. The CLI uses `staging_sandbox` (maps to SDK's `sandbox`) and `production`/`live`. Use `staging_sandbox` when configuring the CLI for sandbox testing.

---

### 11. Fix `nvm plans list` reference

**Impact:** Command doesn't exist. Actual command is `nvm plans get-plans`.

**File:** `docs/api-reference/cli/plans.md`
**Lines:** 24, 30, 31

**Fix:** Replace `nvm plans list` with `nvm plans get-plans`.

---

### 12. Fix CLI helper `--format json` BigInt crash

**Impact:** `nvm plans get-fixed-credits-config --format json` crashes with "Do not know how to serialize a BigInt".

**Location:** CLI output formatting

**Fix:** Add JSON BigInt serialization support to CLI output commands.

---

### 13. Add CLI registration guidance to Skill

**Impact:** Developers who prefer CLI over SDK have no guidance in the Skill for registering agents/plans.

**File:** `skills/nevermined-payments/SKILL.md`

**Fix:** Add a "CLI Registration" section that covers `nvm config init`, `nvm plans register-credits-plan`, and `nvm agents register-agent`. Include the JSON file formats needed. (Note: currently blocked by P0 #7 BigInt bug.)

---

### 14. Add SDK-to-CLI environment mapping

**File:** `skills/nevermined-payments/SKILL.md`

**Fix:** Add a table:
| SDK Environment | CLI Environment |
|---|---|
| `sandbox` | `staging_sandbox` |
| `live` | `production` or `live` |

---

### 15. Update quickstart Step 4 to use middleware

**Impact:** Step 4 uses old proxy-based validation instead of the modern x402 middleware approach.

**File:** `docs/getting-started/quickstart.mdx`
**Lines:** 169-214

**Fix:** Replace with `paymentMiddleware` (Express) or `PaymentMiddleware` (FastAPI) example. This is the recommended approach in the Skill and SDK docs.

---

### 16. Fix `verify.json` property names in CLI docs

**Impact:** CLI docs show `token` and `creditsRequired` but SDK expects `x402AccessToken` and `maxAmount`.

**File:** `docs/api-reference/cli/querying.md`
**Lines:** 155-163

**Fix:** Update to match SDK API:
```json
{
  "x402AccessToken": "...",
  "maxAmount": "1"
}
```

---

### 17. Fix SDK example parameters in CLI docs

**Impact:** SDK code example uses wrong `verifyPermissions` parameter names.

**File:** `docs/api-reference/cli/querying.md`
**Lines:** 187-199

**Fix:** Update to match current SDK API with correct parameter names and remove `staging_sandbox` hardcoding.

---

## P2 — Enhance (Nice to Have)

### 18. Add Prerequisites section to Skill

**File:** `skills/nevermined-payments/SKILL.md`

**Suggestion:** Add a "Prerequisites" section after the overview:
- Node.js 18+ (for TypeScript)
- Python 3.9+ (for Python)
- `"type": "module"` in package.json for Express.js
- A Nevermined API key from [nevermined.app](https://nevermined.app)

---

### 19. Emphasize `pip install payments-py[fastapi]`

**File:** `skills/nevermined-payments/SKILL.md`

**Suggestion:** Update the Python install command from `pip install payments-py` to `pip install payments-py[fastapi]` when FastAPI is the target framework. The `[fastapi]` extra installs required Starlette dependencies.

---

### 20. Add complete `.env` example to Skill

**File:** `skills/nevermined-payments/SKILL.md`

**Suggestion:** Add a complete `.env` template:
```bash
# Required for all integrations
NVM_API_KEY=nvm:your-api-key
NVM_ENVIRONMENT=sandbox
NVM_PLAN_ID=did:nv:your-plan-id

# Required for MCP servers and multi-agent plans
NVM_AGENT_ID=did:nv:your-agent-id

# Required for plan registration
BUILDER_ADDRESS=0xYourWalletAddress
```

---

### 21. Fix Pydantic warning in Python SDK

**Impact:** `PaymentContext` import triggers: `Field name "schema" in "Extension" shadows an attribute in parent "BaseModel"`

**File:** SDK `payments_py/x402/types_v2.py:22`

**Fix (SDK):** Rename the `schema` field in `Extension` to avoid shadowing Pydantic's `BaseModel.schema`. Use `model_config = ConfigDict(fields={'schema': {'alias': 'schema'}})` or rename to `scheme`.

---

### 22. Add upfront information gathering to Skill

**Impact:** When AI assistants use the Skill, they may ask many follow-up questions (API key, plan details, pricing). Gathering this upfront reduces back-and-forth.

**File:** `skills/nevermined-payments/SKILL.md`

**Suggestion:** Add a section instructing AI assistants to ask the developer for all required information in a single prompt before generating code. See the "CLI Registration" section added separately.

---

## Summary by Priority

| Priority | Count | Key Theme |
|----------|-------|-----------|
| **P0** | 8 | Wrong headers, deprecated APIs, broken CLI, missing ESM docs |
| **P1** | 9 | Environment confusion, missing Skill sections, CLI doc errors |
| **P2** | 5 | Polish: prerequisites, env templates, SDK warnings |
| **Total** | 22 | |

## Files Most Affected

| File | Issues | Priorities |
|------|--------|------------|
| `docs/api-reference/cli/querying.md` | 3 | P0, P1, P1 |
| `docs/getting-started/quickstart.mdx` | 3 | P0, P0, P1 |
| `docs/integrate/patterns/subscription-access.mdx` | 1 | P0 |
| `docs/integrate/patterns/validate-requests.mdx` | 1 | P0 |
| `docs/integrate/patterns/charge-credits.mdx` | 1 | P0 |
| `skills/nevermined-payments/SKILL.md` | 6 | P0, P1, P1, P1, P2, P2 |
| CLI source code | 2 | P0, P1 |

---

## Round 2 Re-evaluation (2026-02-11)

**Versions:** SDK v1.0.8, CLI v1.0.8, Python SDK v1.1.2

### Status of Round 1 Items

| # | Issue | Status |
|---|-------|--------|
| 1 | `X-402` → `payment-signature` in CLI querying.md | ✅ FIXED |
| 2 | Deprecated `isValidRequest()` in quickstart | ✅ FIXED |
| 3 | Deprecated `isValidRequest()` in validate-requests | ✅ FIXED |
| 4 | Deprecated `isValidRequest()` in charge-credits | ✅ FIXED |
| 5 | Deprecated `isValidRequest()` in subscription-access | ✅ FIXED |
| 6 | `Authorization: Bearer` in quickstart | ✅ FIXED |
| 7 | CLI BigInt serialization bug | ✅ FIXED |
| 8 | ESM requirement not documented | ✅ FIXED |
| 9 | Missing `BUILDER_ADDRESS` in SKILL.md | ✅ FIXED |
| 10 | Environment naming mismatch | ✅ FIXED |
| 11 | `nvm plans list` in plans.md | ✅ FIXED (partial) |
| 12 | CLI `--format json` BigInt crash | ✅ FIXED |
| 13 | CLI registration guidance in SKILL.md | ✅ FIXED |
| 14 | SDK-to-CLI environment mapping | ✅ FIXED |
| 15 | Quickstart Step 4 modernized | ✅ FIXED |
| 16 | `verify.json` property names | ✅ FIXED |
| 17 | SDK example parameters | ✅ FIXED |
| 18 | Prerequisites in SKILL.md | ✅ FIXED |
| 19 | `pip install payments-py[fastapi]` note | ✅ FIXED |
| 20 | `.env` template in SKILL.md | ✅ FIXED (Round 2) |
| 21 | Pydantic `schema` field warning | POSTPONED (non-breaking) |
| 22 | Upfront info gathering | ✅ FIXED (CLI guidance section) |

### New Issues Found in Round 2

#### R1. `nvm plans list` still referenced in 6 CLI doc files (33 occurrences)

**Source repo:** `payments/cli/docs/` (5 files) + `docs/docs/api-reference/cli/index.md` (1 file)

| File | Count |
|------|-------|
| `purchases.md` | 11 |
| `README.md` | 8 |
| `index.md` (docs repo) | 6 |
| `other-commands.md` | 5 |
| `getting-started.md` | 2 |
| `agents.md` | 1 |

**Fix:** Global replace `nvm plans list` → `nvm plans get-plans`.

#### R2. `X-402` header in README.md (1 occurrence)

**Source repo:** `payments/cli/docs/README.md` line 230

**Fix:** Replace `X-402: $TOKEN` → `payment-signature: $TOKEN`.

#### R3. `staging_sandbox`/`staging_live` in Python docs (2 occurrences)

**Source repo:** `payments-py/docs/api/02-initializing-the-library.md` lines 140-141

**Fix:** Remove internal environment rows from public documentation table.

#### R4. Missing `.env` template in SKILL.md

**Source repo:** `docs/skills/nevermined-payments/SKILL.md`

**Fix:** Add ready-to-copy `.env` template block.

### Summary

| Priority | Round 1 | Round 2 |
|----------|---------|---------|
| P0 (Critical) | 8 → 0 remaining | All resolved |
| P1 (Medium) | 9 → 1 remaining | R1 (`nvm plans list` in additional files) |
| P2 (Polish) | 5 → 1 remaining | R4 (`.env` template) |
| New (Round 2) | — | R2 (`X-402` in README), R3 (staging in Python docs) |
| **Total remaining** | — | **4 items, 37 occurrences** |
