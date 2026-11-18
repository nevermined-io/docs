#!/usr/bin/env python3
"""Fail when a published page names an internal environment or the staging host.

Public docs say only `sandbox` and `live` (CLAUDE.md, "Environment names"). The
SDKs still accept the internal `staging_sandbox` / `staging_live`, and the
staging deployments live on `nevermined.dev`; neither may reach a page
(nevermined-io/nvm-monorepo#5182).

Scope is what Mintlify publishes: every tracked `.md` / `.mdx` outside a
dot-directory, minus `.mintignore` and Mintlify's own skips, plus `docs.json`
(its `markdown.instructions` heads `llms.txt`). MDX `{/* */}` and HTML `<!-- -->`
comments are not rendered, so they are stripped first; code blocks are rendered
and are checked.

Usage: check-internal-names.py            scan the repo (run from its root)
       check-internal-names.py --selftest prove the detector on planted text
"""

import re
import subprocess
import sys

FORBIDDEN = re.compile(r"staging_(sandbox|live)|nevermined\.dev", re.I)
COMMENTS = re.compile(r"\{/\*.*?\*/\}|<!--.*?-->", re.S)
MINTLIFY_SKIPS = {"README.md", "LICENSE.md", "CHANGELOG.md", "CONTRIBUTING.md"}

# Generated pages whose fix is at their source repo and lands here with the next
# sync. Remove an entry once its page is clean (the scan says so). Never add a
# hand-written page here: fix the page.
PENDING_SOURCE_FIX = {
    # payments-py docs/api/02-initializing-the-library.md (payments-py PR, #5182)
    "api-reference/python/payments-class.mdx",
    # payments CLI docs: `embed.nevermined.dev` (nevermined-io/payments)
    "api-reference/typescript/cli-card-setup.md",
}


def leaks(text):
    return [m.group(0) for m in FORBIDDEN.finditer(COMMENTS.sub("", text))]


def git_files(*args):
    out = subprocess.run(["git", "ls-files", *args], check=True, capture_output=True, text=True)
    return set(out.stdout.splitlines())


def published_files():
    ignored = git_files("-ci", "--exclude-from=.mintignore")
    for path in sorted(git_files() - ignored):
        parts = path.split("/")
        if any(p.startswith(".") for p in parts[:-1]) or parts[-1] in MINTLIFY_SKIPS:
            continue
        if path == "docs.json" or path.endswith((".md", ".mdx")):
            yield path


def scan():
    failures = 0
    for path in published_files():
        with open(path, encoding="utf-8") as f:
            found = leaks(f.read())
        if path in PENDING_SOURCE_FIX:
            if not found:
                print(f"::notice file={path}::clean now; remove it from PENDING_SOURCE_FIX")
            continue
        for hit in found:
            failures += 1
            print(f"::error file={path}::'{hit}' is internal; public docs say only sandbox and live")
    print(f"{failures} internal name(s) on published pages")
    return 1 if failures else 0


def selftest():
    planted = "`staging_sandbox` and STAGING_LIVE at https://embed.nevermined.dev"
    assert leaks(planted) == ["staging_sandbox", "STAGING_LIVE", "nevermined.dev"], leaks(planted)
    assert leaks("{/* staging_live */} <!--\nnevermined.dev\n--> sandbox live nevermined.app") == []
    # Scope, against real files: unpublished files that name staging stay out, published ones stay in.
    files = set(published_files())
    for unpublished in ("CLAUDE.md", ".mintlify/Assistant.md", "evaluation/IMPROVEMENTS.md"):
        assert unpublished not in files, unpublished
    for published in ("docs.json", "AGENTS.md", "products/catalog/mcp.mdx", *PENDING_SOURCE_FIX):
        assert published in files, published
    print("selftest OK")
    return 0


if __name__ == "__main__":
    sys.exit(selftest() if sys.argv[1:] == ["--selftest"] else scan())
