#!/usr/bin/env bash
# Runs the "Publish to ClawHub" step of publish-skill-clawhub.yml, read from the
# workflow itself, with the installed CLI against mock-registry.mjs: a local
# mock of the ClawHub API, with a fake token, offline. clawhub-cli-check.yml
# runs it on every PR that changes the CLI or the workflow
# (nevermined-io/docs#655). The publish job does not: it changes nothing a
# real publish needs.
#
# check-cli.sh compares the CLI's declared statuses with the step's `case`
# arms, but not what each status means or which arm it is in, and nothing else
# runs an upload before a skill changes on `main`. So this pins what the step
# relies on, for each scenario in mock-registry.mjs:
#   - each accepted-upload status (`pending-publication`, `published`,
#     `submitted`) is the one the CLI prints, and the step waits until the
#     version is public before it ends green;
#   - `unchanged` content that is the latest public version uploads nothing;
#   - a number held by a blocked version: the step's own grep reads the number
#     out of the CLI's "Version X already exists" error, and the step skips it;
#   - a version ClawHub blocks after the upload fails the step;
#   - the two failures whose message the step words itself: a `submitted`
#     upload with no publication attempt names the CLI's status, and a used
#     upload ticket says that rerunning is safe.
# It needs `clawhub` on PATH (install.sh), node, jq and curl.
set -euo pipefail
cd "$(dirname "$0")"

WORKFLOW=../../.github/workflows/publish-skill-clawhub.yml
WORK=$(mktemp -d)
trap 'rm -rf -- "${WORK:?}"' EXIT

FAILED=0
fail() {
  echo "::error title=ClawHub publish step::$1"
  FAILED=1
}

# The step's `run: |` block: the lines after the first `run: |` that follows
# `id: publish`, up to the first non-blank line indented no deeper than `run:`.
awk '
  /^ +id: publish$/ { step = 1 }
  step && !inrun && /^ +run: \|$/ { inrun = 1; match($0, /^ +/); key = RLENGTH; next }
  inrun {
    if ($0 !~ /^ *$/) { match($0, /^ +/); if (RLENGTH <= key) exit; if (!body) body = RLENGTH }
    print substr($0, body + 1)
  }
' "$WORKFLOW" > "$WORK/step.sh"
if ! grep -q 'case "\$RESULT" in' "$WORK/step.sh"; then
  echo "::error title=ClawHub publish step::Cannot read the run block of the step with 'id: publish' from $WORKFLOW."
  exit 1
fi

# A skill folder like the staged copy the publish job uploads.
mkdir -p "$WORK/skill"
printf -- '---\nname: probe\ndescription: A probe skill for the publish-step check.\n---\n# Probe\n' > "$WORK/skill/SKILL.md"

# run_scenario <scenario>: runs the step once. Sets RC, OUT_VERSION, LOG
# (the step's output) and REQUESTS (the mock's request log).
run_scenario() {
  local dir="$WORK/$1" pid i
  mkdir -p "$dir/tmp"
  : > "$dir/requests"
  node mock-registry.mjs "$1" "$dir/port" "$dir/requests" &
  pid=$!
  for i in $(seq 50); do [ -s "$dir/port" ] && break; sleep 0.1; done
  if [ ! -s "$dir/port" ]; then
    kill "$pid" 2>/dev/null || true
    fail "$1: the mock registry did not start."
    RC=99 OUT_VERSION='' LOG='' REQUESTS=''
    return
  fi
  local api="http://127.0.0.1:$(cat "$dir/port")"
  printf '{"registry":"%s","token":"fake-local-token"}' "$api" > "$dir/config.json"
  : > "$dir/tmp/output"
  RC=0
  env CLAWHUB_CONFIG_PATH="$dir/config.json" CLAWHUB_REGISTRY="$api" CLAWHUB_SITE="$api" \
    RUNNER_TEMP="$dir/tmp" GITHUB_OUTPUT="$dir/tmp/output" \
    PUBLISH_PATH="$WORK/skill" SKILL_PATH=skills/probe OWNER=nevermined-io SLUG=probe \
    SKILL_NAME=Probe SKILL_VERSION='' \
    SOURCE_REPO=nevermined-io/docs SOURCE_COMMIT=0000000000000000000000000000000000000000 \
    SOURCE_REF=refs/heads/main CLAWHUB_TOKEN=fake-local-token CLAWHUB_API="$api/api/v1" \
    MAX_TAKEN=5 TIMEOUT_MINUTES=1 POLL_SECONDS=1 STALE_MINUTES=60 \
    bash -e "$WORK/step.sh" > "$dir/log" 2>&1 || RC=$?
  kill "$pid" 2>/dev/null || true
  wait "$pid" 2>/dev/null || true
  OUT_VERSION=$(sed -n 's/^version=//p' "$dir/tmp/output")
  LOG=$(cat "$dir/log")
  REQUESTS=$(cat "$dir/requests")
  # The log is the CLI's and the mock's text: print it with workflow commands
  # off, so nothing in it can act as an annotation or command.
  local token
  token=$(cat /proc/sys/kernel/random/uuid)
  echo "::group::$1 (exit $RC)"
  echo "::stop-commands::$token"
  printf '%s\n' "$LOG"
  echo
  echo "::$token::"
  echo "::endgroup::"
}

# expect <scenario> <want-exit> <want-version-output> <want-status-or-empty>
expect() {
  local s=$1 want_rc=$2 want_version=$3 want_status=$4
  run_scenario "$s"
  [ "$RC" = 99 ] && return
  if [ "$want_rc" = 0 ] && [ "$RC" != 0 ]; then fail "$s: the step exited $RC, expected success."; fi
  if [ "$want_rc" != 0 ] && [ "$RC" = 0 ]; then fail "$s: the step succeeded, expected it to fail."; fi
  if [ "$OUT_VERSION" != "$want_version" ]; then
    fail "$s: the step output version='$OUT_VERSION', expected '$want_version'."
  fi
  if [ -n "$want_status" ] && ! grep -qE "^ *\"status\": \"$want_status\"," <<<"$LOG"; then
    fail "$s: the CLI did not report status '$want_status'."
  fi
}

# Each accepted upload is green only once the version is public: the mock
# answers the public read with 200 only after two `pending_checks` reads.
for pair in pending:pending-publication published:published submitted:submitted; do
  s=${pair%%:*}
  expect "$s" 0 1.0.1 "${pair#*:}"
  if [ "$RC" = 0 ] && ! grep -q '^GET /api/v1/skills/probe/versions/1.0.1$' <<<"$REQUESTS"; then
    fail "$s: the step ended green without reading the version's public state."
  fi
done

expect unchanged 0 1.0.0 unchanged
if grep -q '^POST /api/v1/skills ' <<<"$REQUESTS"; then
  fail "unchanged: the step uploaded content that is already the latest public version."
fi

# 1.0.1 is taken by a blocked version. The step must read 1.0.1 out of the
# CLI's error text and publish 1.0.2.
expect held 0 1.0.2 pending-publication
if ! grep -q '^POST /api/v1/skills version=1.0.2$' <<<"$REQUESTS"; then
  fail "held: the step did not move past the taken number 1.0.1 (is 'Version X already exists' still in the CLI's error output?)."
fi

expect blocked 1 '' pending-publication

expect orphan 1 '' submitted
if ! grep -qF "probe@1.0.1 (the CLI reported 'submitted'):" <<<"$LOG"; then
  fail "orphan: the step's error does not name the CLI's status."
fi

expect ticket 1 '' ''
if ! grep -qF 'a retried request found its upload tickets already used' <<<"$LOG"; then
  fail "ticket: the step did not explain the used-upload-ticket error."
fi

if [ "$FAILED" = 0 ]; then
  echo "ok: the publish step handles pending-publication, published, submitted, unchanged, a held number, a blocked upload, an upload with no publication attempt and a used upload ticket"
fi
exit "$FAILED"
