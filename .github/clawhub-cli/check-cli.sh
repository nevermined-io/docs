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

# The publish step reads `.status` from `clawhub skill publish --json` and
# handles only these values (its `case "$RESULT"`); `would-publish` is the dry
# run's. A CLI that can report another one (0.25 adds `pending-publication` and
# `submitted` for an upload ClawHub holds) would fail that step after the upload
# has landed. So compare the status union the CLI itself declares. When a bump
# fails here, extend the publish step's `case` first, then this list.
HANDLED="published unchanged would-publish"
DTS=node_modules/clawhub/dist/cli/commands/publish.d.ts
DECLARED=''
if [ -f "$DTS" ]; then
  DECLARED=$(awk '/^type SkillPublishResult = \{/ { t = 1 } t && /^ +status: / { print; exit }' "$DTS" |
    grep -oE '"[a-z-]+"' | tr -d '"' | LC_ALL=C sort | xargs) || DECLARED=''
fi
if [ -z "$DECLARED" ]; then
  fail "Cannot read the SkillPublishResult status union from $DTS. Check by hand which statuses \`clawhub skill publish --json\` reports, then update this check."
elif [ "$DECLARED" != "$HANDLED" ]; then
  fail "\`clawhub skill publish --json\` can report: $DECLARED. The publish step handles: $HANDLED. Extend its \`case \"\$RESULT\"\` before merging this CLI."
else
  echo "ok: clawhub skill publish --json statuses: $DECLARED"
fi

exit "$FAILED"
