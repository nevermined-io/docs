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
 * envelope the pre-#241 way — unwrapping the signed attribution cookies and
 * re-serialising the objects, which drops the HMAC the middleware put on them.
 * The receiver requires the "v1." prefix and a matching signature, so EVERY
 * docs handoff to nevermined.app arrived and was discarded. Silent in both
 * directions: the click worked, the page loaded, and the attribution simply did
 * not exist. Nobody could see it from either side.
 *
 * So the loader now follows the same pattern the blog already used: the source
 * lives at public/docs-analytics.js in nevermined-io/nevermined.ai-website,
 * served from nevermined.ai, covered by that repo's tests and by the #239
 * consent-gate drift guard. This file holds only the tag.
 *
 * The docs are served from nevermined.ai/docs, so this is same-origin in
 * production and cross-origin only on the raw Mintlify preview host.
 *
 * DO NOT add logic here. The drift guard now fails the build if consent-gate
 * rules reappear in this file — that is the third copy coming back, which is
 * the thing the move removed. Change the loader in the website repo instead;
 * it deploys as an ordinary PR there.
 *
 * See nevermined-io/nevermined.ai-website#288 (requirement 5), #237, #239.
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
  (document.head || document.documentElement).appendChild(s);
})();
