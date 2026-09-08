/**
 * Docs analytics loader — STUB ONLY. The logic lives in the website repo.
 *
 * Mintlify auto-includes any .js in the content directory on every page, so
 * this file is how analytics reaches the docs. What it must NOT be is where the
 * analytics is written.
 *
 * It used to carry the whole thing: the geography-aware consent gate, RB2B,
 * PostHog and the nvm_o handoff decorator — a third hand-maintained copy of
 * logic that has to agree with the marketing site (TypeScript) and the blog
 * loader (ES5), kept in line by a "keep in sync" comment. This repo has no
 * package.json and no test runner, so nothing here could check the agreement.
 *
 * It drifted, and the drift was expensive. This file kept building the handoff
 * envelope the pre-website#241 way — unwrapping the signed attribution cookies and
 * re-serialising the objects, which drops the HMAC the middleware put on them.
 * The receiver requires the "v1." prefix and a matching signature, so EVERY
 * docs handoff to nevermined.app arrived and was discarded. Silent in both
 * directions: the click worked, the page loaded, and the attribution simply did
 * not exist. Nobody could see it from either side.
 *
 * So the loader now follows the same pattern the blog already used: the source
 * lives at public/docs-analytics.js in nevermined-io/nevermined.ai-website,
 * served from nevermined.ai, covered by that repo's tests and by the website#239
 * consent-gate drift guard. This file holds only the tag.
 *
 * The docs are served from nevermined.ai/docs, so this is same-origin in
 * production and cross-origin only on the raw Mintlify preview host.
 *
 * DO NOT add logic here. The website repo's website#239 drift guard reads this file
 * from docs `main` and fails THAT build if consent-gate rules reappear - so
 * enforcement is post-merge and out-of-repo: a docs PR re-adding logic goes
 * green here and reddens the next website build. Change the loader in the
 * website repo instead; it deploys as an ordinary PR there.
 *
 * GA4 (kept here deliberately, from the header this replaced): docs.json's
 * `integrations.ga4` is REMOVED and must stay removed. The hosted loader
 * configures GA4 itself, so re-adding it would double-init the tag. That
 * constraint is on docs.json, which stays in THIS repo and is edited by people
 * who will never open the website repo - it is the one piece of the old header
 * that does not describe logic that moved.
 *
 * See nevermined-io/nevermined.ai-website#288 (requirement 5), website#237,
 * website#239.
 */
(function () {
  var SRC = "https://nevermined.ai/docs-analytics.js";
  var ID = "nvm-docs-analytics";
  /* Mintlify re-runs page scripts on client-side navigation; the id check
     keeps that from stacking a second copy of the loader per route change. */
  if (document.getElementById(ID)) return;
  var s = document.createElement("script");
  s.id = ID;
  s.src = SRC;
  s.async = true;
  /* Every failure mode is otherwise indistinguishable from a healthy page: a
     404, a website deploy that drops the file, a CDN 5xx, an offline first
     paint, a blocker matching *-analytics.js, a future script-src CSP. Three
     parties can now break docs analytics and none reports back, where the old
     self-contained file could only be broken from this repo.

     Removing the node matters as much as the warning: the id is set BEFORE the
     append, so without this a failed load leaves the element in place and the
     getElementById guard above returns early for every subsequent SPA
     navigation - one transient blip on first paint would be unrecoverable for
     the whole session. Dropping it lets the next route change retry. */
  s.onerror = function () {
    if (s.parentNode) s.parentNode.removeChild(s);
    if (window.console && console.warn) {
      console.warn("nvm: docs analytics loader failed to load: " + SRC);
    }
  };
  (document.head || document.documentElement).appendChild(s);
})();
