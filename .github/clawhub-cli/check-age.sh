#!/usr/bin/env bash
# Fails when any package in package-lock.json was published less than
# MIN_AGE_DAYS ago. clawhub-cli-check.yml runs it on every PR that changes the
# lock (nevermined-io/docs#647).
#
# Dependabot's cooldown delays only the version it proposes for `clawhub`
# itself, and security updates skip the cooldown altogether. When it
# regenerates the lock, clawhub's transitive packages resolve to the newest
# release their ranges allow, however young. This applies the 14-day rule to
# every package. To satisfy it, re-resolve the whole lock as of two weeks ago.
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
  published=$(npm view "$name" time --json </dev/null | jq -r --arg v "$version" '.[$v] // empty') || published=''
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
