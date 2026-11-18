#!/usr/bin/env bash
# Installs the locked ClawHub CLI and links ONLY the `clawhub` binary into
# BIN_DIR. publish-skill-clawhub.yml (which holds CLAWHUB_TOKEN) and
# clawhub-cli-check.yml both run this script, so the PR check exercises the
# exact install the publish job runs (nevermined-io/docs#647).
#
# Usage: install.sh <bin-dir>. The caller puts <bin-dir> on PATH.
set -euo pipefail

BIN_DIR=${1:?usage: install.sh <bin-dir>}
cd "$(dirname "$0")"

# 1. Every locked package must come from the npm registry, at the URL its own
#    name and version give. `npm ci` checks a tarball against the lock's
#    integrity hash, but not against the entry's name or version: a lock entry
#    that says "0.56.0" while its `resolved` URL and hash point at 0.55.0, or at
#    another host, installs without complaint. The name and version must also
#    be a plain npm name and a strict semver: a version holding `../` would
#    otherwise make that URL name another package's tarball.
BAD=$(jq -r '
  .packages | to_entries[] | select(.key != "") |
  (.key | sub("^.*node_modules/"; "")) as $name |
  "https://registry.npmjs.org/\($name)/-/\($name | split("/") | last)-\(.value.version).tgz" as $want |
  select(.value.resolved != $want or (.value.integrity // "" | startswith("sha512-") | not)
    or ($name | test("^(@[a-z0-9][a-z0-9._~-]*/)?[a-z0-9][a-z0-9._~-]*$") | not)
    or (.value.version // "" | test("^[0-9]+\\.[0-9]+\\.[0-9]+(-[0-9A-Za-z.-]+)?(\\+[0-9A-Za-z.-]+)?$") | not)) |
  "\(.key): resolved=\(.value.resolved // "none") integrity=\(.value.integrity // "none")"
' package-lock.json)
if [ -n "$BAD" ]; then
  echo "$BAD"
  echo "::error title=ClawHub CLI lockfile::package-lock.json has entries that are not the npm registry tarball of their own name and version (listed above)."
  exit 1
fi

# 2. The locked tree, with dependency install scripts off. `npm ci` fails when
#    package-lock.json does not match package.json (a bumped pin with a stale
#    lock), or when a tarball does not match the lock's integrity hash. The
#    registry is pinned here: a `registry=` in an .npmrc or NPM_CONFIG_REGISTRY
#    would otherwise make npm fetch every checked URL from that host instead
#    (its `replace-registry-host` default). --prefer-online makes npm verify
#    the bytes behind each `resolved` URL: with a warm cache, npm otherwise
#    serves a tarball by its integrity hash alone, so an entry carrying
#    another package's hash would install that package.
npm ci --ignore-scripts --prefer-online --registry=https://registry.npmjs.org/ --replace-registry-host=never

# 3. Link only `clawhub`. node_modules/.bin also holds the other packages'
#    bins (clawdhub, semver, tsc and more), and none of them belongs on PATH.
#    The link must lead into the clawhub package itself, not to whichever
#    package claimed the bin name.
#    readlink -e fails on a dangling link; pwd -P matches its physical path.
TARGET=$(readlink -e node_modules/.bin/clawhub) || TARGET=''
case "$TARGET" in
  "$(pwd -P)/node_modules/clawhub/"*) ;;
  *)
    echo "::error title=ClawHub CLI bin::node_modules/.bin/clawhub resolves to '$TARGET', not into node_modules/clawhub/."
    exit 1 ;;
esac
mkdir -p "$BIN_DIR"
ln -sf "$TARGET" "$BIN_DIR/clawhub"

# 4. `npm ci` accepts a pin widened to a range as long as the lock still
#    satisfies it, so also require the installed CLI to be the pinned one.
PINNED=$(jq -r '.dependencies.clawhub' package.json)
INSTALLED=$("$BIN_DIR/clawhub" --cli-version)
if [ "$INSTALLED" != "$PINNED" ]; then
  echo "::error title=ClawHub CLI version::Installed clawhub '$INSTALLED', but package.json pins '$PINNED'."
  exit 1
fi
echo "clawhub $INSTALLED (locked) at $BIN_DIR/clawhub"
