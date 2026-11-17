#!/usr/bin/env bash
# Fails when any package in package-lock.json was published less than
# MIN_AGE_DAYS ago. clawhub-cli-check.yml runs it on every PR that changes the
# lock (nevermined-io/docs#647). The publish job does not run it (Rodolphe,
# 2026-11-17): a lock merged while this is red still runs next to
# CLAWHUB_TOKEN, so the 14-day rule holds only as far as reviewers honour it.
#
# Dependabot's version updates pass their cooldown to npm as
# `--min-release-age=14`, but its security updates pass `--min-release-age=0`
# and can lock packages of any age (its first undici fix proposed clawhub
# 0.26.0, then four days old). This applies the 14-day rule to every package,
# whoever wrote the lock. To satisfy it, re-resolve the whole lock as of two
# weeks ago.
# Delete it first: with a lock present, `npm install --before` keeps every
# locked version that still satisfies its range.
#   rm package-lock.json
#   npm install --ignore-scripts --package-lock-only --before=<date 14 days ago>
# Then review the regenerated lock: resolving from scratch can move other
# packages too.
set -euo pipefail
cd "$(dirname "$0")"

MIN_AGE_DAYS=${MIN_AGE_DAYS:-14}
if ! [[ $MIN_AGE_DAYS =~ ^[0-9]+$ ]]; then
  echo "::error title=ClawHub CLI lockfile age::MIN_AGE_DAYS must be a whole number of days, not '$MIN_AGE_DAYS'."
  exit 1
fi
NOW=$(date -u +%s)
FAILED=0
CHECKED=0
ENTRIES=$(jq -r '.packages | to_entries[] | select(.key != "") | "\(.key | sub("^.*node_modules/"; "")) \(.value.version)"' package-lock.json)
if [ -z "$ENTRIES" ]; then
  echo "::error title=ClawHub CLI lockfile age::package-lock.json lists no packages."
  exit 1
fi
while read -r name version; do
  published=$(npm view "$name" time --json --registry=https://registry.npmjs.org/ </dev/null | jq -r --arg v "$version" '.[$v] // empty') || published=''
  if [ -z "$published" ]; then
    echo "::error title=ClawHub CLI lockfile age::Cannot read the publish date of $name@$version from the npm registry."
    FAILED=1
    continue
  fi
  # On its own line: a failed $(date) inside $(( )) is an arithmetic error,
  # which abandons the whole loop without tripping `set -e`.
  if ! ts=$(date -u -d "$published" +%s 2>/dev/null) || ! [[ $ts =~ ^[0-9]+$ ]]; then
    echo "::error title=ClawHub CLI lockfile age::Cannot parse the publish date '$published' of $name@$version."
    FAILED=1
    continue
  fi
  CHECKED=$((CHECKED + 1))
  age=$(( (NOW - ts) / 86400 ))
  if [ "$age" -lt "$MIN_AGE_DAYS" ]; then
    echo "::error title=ClawHub CLI lockfile age::$name@$version was published $age days ago ($published), under the $MIN_AGE_DAYS-day minimum."
    FAILED=1
  else
    echo "ok: $name@$version, $age days old"
  fi
done <<<"$ENTRIES"
# Every entry must have been judged, so that an early exit from the loop can
# never read as a pass.
TOTAL=$(grep -c . <<<"$ENTRIES")
if [ "$FAILED" = 0 ] && [ "$CHECKED" != "$TOTAL" ]; then
  echo "::error title=ClawHub CLI lockfile age::Checked $CHECKED of $TOTAL locked packages."
  FAILED=1
fi
echo "$CHECKED of $TOTAL locked packages checked."
exit "$FAILED"
