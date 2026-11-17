#!/usr/bin/env bash
# Checks, offline, that the installed ClawHub CLI still fits
# publish-skill-clawhub.yml. That workflow runs it after install.sh and before
# `clawhub login`, and clawhub-cli-check.yml runs it on every PR that changes
# the CLI (nevermined-io/docs#647). It needs no token and reads only the CLI's
# --help output and the package's own type declarations.
#
# It does not run a publish, so it cannot catch a change the CLI makes to the
# server calls behind its options. The first publish run after a bump merges is
# a no-op `unchanged` for every skill and exercises no upload either.
set -euo pipefail
cd "$(dirname "$0")"

FAILED=0
fail() {
  echo "::error title=ClawHub CLI interface::$1"
  FAILED=1
}

# need "<subcommand…>" <entry>: `clawhub <subcommand…> --help` must be that
# command's own help and must list <entry> as the first token of a help line.
# An entry ending in " <" is an option that takes a value; any other "--" entry
# is a flag that takes none; anything else is a subcommand.
need() {
  local cmd="clawhub${1:+ $1}" help re
  # $1 is unquoted on purpose: "skill publish" is two words.
  if ! help=$(clawhub $1 --help); then
    fail "'$cmd --help' failed."
    return
  fi
  # Commander answers `--help` on an unknown subcommand with its parent's help
  # and exit 0, so check whose help this is. Read the first `Usage:` line, not
  # the first line: later CLIs print a banner above it.
  case "$(grep -m 1 '^Usage: ' <<<"$help" || true)" in
    "Usage: $cmd "*) ;;
    *)
      fail "'$cmd --help' did not print the help of '$cmd' (is the command gone?)."
      return ;;
  esac
  case "$2" in
    *" <") re="^  (-[A-Za-z], )?$2" ;;
    --*) re="^  (-[A-Za-z], )?$2( {2,}|$)" ;;
    *) re="^  $2( |$)" ;;
  esac
  if grep -qE -- "$re" <<<"$help"; then
    echo "ok: $cmd $2"
  else
    fail "'$cmd --help' no longer lists '$2' in the form the publish workflow uses."
  fi
}

# Every command and option publish-skill-clawhub.yml passes. Keep this list in
# step with the clawhub calls there.
need "" "--no-input"
need "" "--cli-version"
need "" "login"
need "" "whoami"
need "" "skill"
need "login" "--token <"
need "skill" "publish"
for opt in "--owner <" "--slug <" "--name <" "--version <" "--source-repo <" \
  "--source-commit <" "--source-ref <" "--source-path <" "--dry-run" "--json"; do
  need "skill publish" "$opt"
done

# The publish step reads `.status` from `clawhub skill publish --json`, and its
# `case "$RESULT"` sends any value it has no arm for to `exit 1`, after the
# upload has landed. clawhub 0.25 adds `pending-publication` and `submitted` for
# an upload ClawHub holds. So the statuses the CLI declares must equal the arms
# of that `case` (read from the workflow itself), plus `would-publish`, which
# only the dry run reports. When a bump fails here, add the arms to the `case`.
WORKFLOW=../../.github/workflows/publish-skill-clawhub.yml
DTS=node_modules/clawhub/dist/cli/commands/publish.d.ts
words() { tr '|' '\n' | tr -d ' "' | grep -v '^$' | LC_ALL=C sort -u | xargs; }

# The `case "$RESULT"` arms: lines like `published) …` or `a | b)` between the
# `case` and its `esac`. `*)` is the failure arm, not a handled status.
ARMS=$(awk '/case "\$RESULT" in/ { t = 1; next } t && /^ *esac/ { exit } t' "$WORKFLOW" |
  sed -nE 's/^ *([a-z][a-z |-]*)\).*/\1/p' | words) || ARMS=''
if [[ " $ARMS " == *" published "* && " $ARMS " == *" unchanged "* ]]; then
  # $ARMS is unquoted on purpose: one word per handled status.
  HANDLED=$(printf '%s\n' $ARMS would-publish | words)
else
  HANDLED=''
  fail "Cannot read the arms of \`case \"\$RESULT\"\` in $WORKFLOW (read: '$ARMS')."
fi

# The status union: the single `status:` field of `type SkillPublishResult = {
# … };`, every member a string literal. Any other shape (an object union, a
# type alias, `string`) cannot be compared, so it fails rather than passing on
# the literals it happens to contain.
DECLARED=''
if [ -f "$DTS" ]; then
  BLOCK=$(awk '/^type SkillPublishResult = \{$/ { t = 1; next } t && /^\}/ { print "CLOSE " $0; exit } t' "$DTS")
  RHS=$(sed -nE 's/^ +status: (.*);$/\1/p' <<<"$BLOCK")
  if [ "$(tail -n 1 <<<"$BLOCK")" = "CLOSE };" ] &&
    [ "$(grep -cE '^ +status[?]?:' <<<"$BLOCK")" = 1 ] &&
    [[ $RHS =~ ^\"[^\"]+\"( \| \"[^\"]+\")*$ ]]; then
    DECLARED=$(words <<<"$RHS")
  fi
fi
if [ -z "$DECLARED" ]; then
  fail "Cannot read a union of string literals as SkillPublishResult.status in $DTS. Check by hand which statuses \`clawhub skill publish --json\` reports, then update this check."
elif [ -n "$HANDLED" ] && [ "$DECLARED" != "$HANDLED" ]; then
  fail "\`clawhub skill publish --json\` can report: $DECLARED. The publish step handles: $HANDLED. Add the missing arms to its \`case \"\$RESULT\"\` before merging this CLI."
elif [ -n "$HANDLED" ]; then
  echo "ok: clawhub skill publish --json statuses: $DECLARED (all handled)"
fi

exit "$FAILED"
