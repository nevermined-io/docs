/**
 * Docs analytics (Growth Analytics epic, nevermined.ai-website#191 docs
 * surface + #188 handoff instrumentation).
 *
 * Mintlify auto-includes any .js in the content directory on every page
 * (no docs.json reference needed). This file carries:
 *
 * 1. RB2B visitor identification — geography/consent-gated (added with
 *    the 2026-08-04 port, decision in website#237: docs is the
 *    highest-intent surface on the property; same account + webhook as
 *    site/blog, fires only for the geo-granted/consented population).
 * 2. PostHog, EU cloud, anonymous mode — loaded as custom JS instead of
 *    Mintlify's native integration because the native one exposes no
 *    config: it can't disable autocapture or set our curated posture
 *    ($pageview + session replay ONLY, no identify, masked inputs),
 *    and proxies events through Mintlify's host. Ingestion is
 *    first-party via the site's /px reverse proxy (website#235) — the
 *    docs are served on nevermined.ai, so the proxy is same-origin.
 * 3. nvm_o outbound-link decorator + app_handoff_click GA event — docs
 *    readers are the highest-intent handoff to nevermined.app. Carries
 *    the anonymous PostHog id as `pid` (website#235 payload contract).
 *
 * Consent model (GEOGRAPHY-AWARE port of website#235, 2026-08-04 —
 * line-for-line from lib/consent-client.ts / webflow-analytics.js,
 * keep in sync): the middleware publishes its geography verdict as the
 * nvm_cg cookie ("1" = protection geography EU/UK/EEA, "0" = outside).
 * Outside it, an undecided visitor counts as granted (no banner will
 * ever ask them); inside it, granted-only fail-closed stands. Explicit
 * deny always wins; GPC browsers never get the geo-grant; CookieYes's
 * out-of-banner auto-grant is routed through the same rules. FULL mode
 * (localStorage + session replay) requires an EXPLICITLY ACTIONED
 * grant everywhere.
 *
 * BANNERLESS BY DESIGN (website#237): this file deliberately does NOT
 * inject the CookieYes script — docs never ask for consent. The gate
 * still READS the cookieyes-consent cookie (same nevermined.ai domain
 * as the site), so an answer given on the marketing site — grant or
 * deny — is honored here. EU docs-only visitors stay in the
 * storage-free floor (memory-mode pageviews, nothing on the device),
 * which is exactly why no banner is required. Docs never asks, always
 * listens.
 *
 * GA4 (moved here 2026-07-21): docs.json integrations.ga4 is REMOVED —
 * Mintlify's native injection gave gtag no consent defaults, so EU
 * visitors got GA cookies pre-consent. This file owns the full GA
 * load: GCM defaults first, then gtag. Do not re-add
 * integrations.ga4 — that would double-init.
 */
(function () {
  "use strict";

  var RB2B_ID = "4N210HQZE26Z";
  var POSTHOG_KEY = "phc_wydoKzXeudS4oNmTTJeeeifyHVQtVg8gUregwFeDfi4k";
  /* First-party ingestion via the /px middleware reverse proxy
     (website#235): the snippet's assets-host derivation no-ops on this
     value, so array.js loads from /px/static/* and the middleware
     relays it. Docs only run on nevermined.ai (host guard below), so
     the absolute origin is safe. */
  var POSTHOG_HOST = "https://nevermined.ai/px";

  var host = window.location.hostname.toLowerCase();
  var isProduction =
    host === "nevermined.ai" || host === "www.nevermined.ai";
  if (!isProduction) return;
  if (window.__nvmDocsAnalytics) return;
  window.__nvmDocsAnalytics = true;

  /* ------------- 0. Google Consent Mode defaults + GA4 ------------- */
  /* Defaults MUST precede gtag. Region list mirrors
     CONSENT_COUNTRY_CODES in the website repo (lib/attribution.ts) -
     keep in sync. Ruling 2026-07-22: protection geography includes
     GDPR-EEA (IS/LI/NO); EEA visitors get denied defaults and no
     banner, staying cookieless-anonymous. The asymmetry is
     deliberate. */

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  // The decorator (and anything else) calls window.gtag — with
  // docs.json's native GA gone, nothing else assigns it globally.
  window.gtag = window.gtag || gtag;
  gtag("consent", "default", { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted", analytics_storage: "granted", functionality_storage: "granted", personalization_storage: "granted", security_storage: "granted" });
  gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied", functionality_storage: "denied", personalization_storage: "denied", security_storage: "granted", wait_for_update: 500, region: ["AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","GB","IS","LI","NO"] });
  gtag("set", "ads_data_redaction", true);

  if (!document.getElementById("ga-gtag")) {
    var ga = document.createElement("script");
    ga.id = "ga-gtag";
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=G-47H9F2MT29";
    document.head.appendChild(ga);
  }
  gtag("js", new Date());
  gtag("config", "G-47H9F2MT29");

  /* -------- consent gate (geography-aware, fail closed) -------- */
  /* Port of website lib/consent-client.ts / webflow-analytics.js -
     KEEP IN SYNC. No CookieYes script on docs (bannerless), so the
     getCkyConsent API branch is normally absent and the cookie
     fallback carries the state; the consent_update listener is kept
     for defense-in-depth should the CMP ever appear on this surface. */

  function consentRequiredByGeo() {
    /* matchAll-equivalent + any-"1"-wins: duplicate nvm_cg cookies
       (host-only vs domain drift) resolve to the protective value
       (PR website#235 review). Lookahead terminator so back-to-back
       duplicates both match; optional whitespace separator. */
    var all = [];
    var re = /(?:^|;\s*)nvm_cg=([01])(?=\s*;|$)/g;
    var m;
    while ((m = re.exec(document.cookie)) !== null) all.push(m[1]);
    return all.length === 0 ? null : all.indexOf("1") !== -1;
  }

  /* True only for a grant made by explicit user action. CookieYes
     AUTO-GRANTS categories outside its banner geography; that must
     never unlock PostHog FULL (localStorage + replay). */
  function explicitlyGranted() {
    try {
      var api = window.getCkyConsent && window.getCkyConsent();
      if (api && api.categories) {
        return api.isUserActionCompleted === true && api.categories.analytics === true;
      }
    } catch (e) { /* fall through to cookie */ }
    var m = document.cookie.match(/(?:^|; )cookieyes-consent=([^;]+)/);
    if (!m) return false;
    var v;
    try { v = decodeURIComponent(m[1]); } catch (e) { v = m[1]; }
    return /(?:^|,)analytics:yes/.test(v) && /(?:^|,)action:yes/.test(v);
  }

  function consentState() {
    try {
      var api = window.getCkyConsent && window.getCkyConsent();
      if (api && api.categories) {
        if (api.categories.analytics === true) return "granted";
        if (api.isUserActionCompleted === true && api.categories.analytics === false) return "denied";
      }
    } catch (e) { /* fall through to cookie */ }
    var m = document.cookie.match(/(?:^|; )cookieyes-consent=([^;]+)/);
    if (!m) return "unknown";
    var v;
    try { v = decodeURIComponent(m[1]); } catch (e) { v = m[1]; }
    if (/(?:^|,)analytics:yes/.test(v)) return "granted";
    if (/(?:^|,)analytics:no/.test(v) && /(?:^|,)action:yes/.test(v)) return "denied";
    return "unknown";
  }

  function effectiveConsentState() {
    var s = consentState();
    /* GPC: a browser sending Global Privacy Control never gets the
       geo-grant - the US-undecided population is exactly who GPC
       protects. */
    var gpc = typeof navigator !== "undefined" && navigator.globalPrivacyControl === true;
    /* A grant WITHOUT user action is CookieYes's out-of-banner
       auto-grant - geography-derived, so it obeys the same rules as
       the geo-grant: outside protection geography only, never past
       GPC. */
    if (s === "granted" && !explicitlyGranted()) {
      return consentRequiredByGeo() === false && !gpc ? "granted" : "unknown";
    }
    if (s === "unknown" && consentRequiredByGeo() === false && !gpc) return "granted";
    return s;
  }

  function whenConsented(fn) {
    var done = false;
    var timer = null;
    function fire() {
      if (done) return;
      done = true;
      document.removeEventListener("cookieyes_consent_update", check);
      if (timer) clearInterval(timer);
      fn();
    }
    function check() {
      if (effectiveConsentState() === "granted") fire();
    }
    document.addEventListener("cookieyes_consent_update", check);
    timer = setInterval(check, 500);
    check();
  }

  /* Capture-on-consent recovery: only meaningful for an EXPLICITLY
     consenting visitor whose capture the middleware deferred (they
     consented on the marketing site, then landed here first on a later
     visit). Geo-granted visitors got their cookies server-side
     already. */
  whenConsented(function consentTouch() {
    if (!explicitlyGranted()) return;
    if (document.cookie.indexOf("nvm_ft=") !== -1) return;
    fetch("/api/consent-touch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        referrer: document.referrer,
        page: window.location.pathname,
        search: window.location.search
      })
    }).catch(function () { /* best effort */ });
  });

  /* ---------------- 1. RB2B (website#237 decision) ---------------- */

  whenConsented(function loadRB2B() {
    if (document.getElementById("rb2b-script")) return;
    var s = document.createElement("script");
    s.id = "rb2b-script";
    s.async = true;
    s.src =
      "https://ddwl4m2hdecbv.cloudfront.net/b/" + RB2B_ID + "/" + RB2B_ID + ".js.gz";
    document.body.appendChild(s);
  });

  /* ------- 2. PostHog (EU, anonymous mode) - geography/consent-gated ------- */

  function loadPostHog(full) {
    if (window.posthog && window.posthog.__loaded) return;
    /* Geography-aware persistence (website#235): localStorage from
       first visit outside the protection geography; memory inside it
       pre-consent and for GPC (both resolve to non-granted effective
       state). Replay unchanged: explicit grants only. */
    var persist = full || effectiveConsentState() === "granted" ? "localStorage" : "memory";
    /* PostHog snippet (current official loader, 2026 method surface,
       assets-host delivery, crossOrigin) */
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Ji Yi init fn mn Ur pn bn cn capture calculateEventProperties Sn register register_once register_for_session unregister unregister_for_session Tn getFeatureFlag getFeatureFlagPayload getFeatureFlagResult getAllFeatureFlags isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Mn identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset shutdown setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty Cn xn createPersonProfile setInternalOrTestUser In hn Pn opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing debug Vr Rt getPageViewId captureTraceFeedback captureTraceMetric an".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    window.posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      /* Dashboard/toolbar links must NOT go through the proxy. */
      ui_host: "https://eu.posthog.com",
      // 2026-05-30 defaults: notably pageview capture on history changes,
      // essential here - Mintlify docs are an SPA and client-side
      // navigations would otherwise be invisible.
      defaults: "2026-05-30",
      autocapture: false,
      capture_pageview: "history_change",
      // Curated set v1: $pageview + replay ONLY (no $pageleave).
      capture_pageleave: false,
      person_profiles: "identified_only",
      persistence: persist,
      disable_session_recording: !full,
      disable_surveys: true,
      session_recording: { maskAllInputs: true }
    });
  }

  /* PostHog consent controller - mirror of the blog loader (keep in
     sync): denied -> never load / opt out; non-granted -> memory-mode
     pageviews only; effective grant -> load with geography-aware
     persistence; FULL (replay) only on an explicitly actioned grant. */
  var phUpgraded = false;
  /* THE replay policy switch - mirror of website lib/consent-client
     REPLAY_REQUIRES_EXPLICIT_GRANT, keep in sync (all three ports flip
     together + privacy-checklist amendment). */
  var REPLAY_REQUIRES_EXPLICIT_GRANT = true;
  function applyPostHogConsent() {
    var s = effectiveConsentState();
    var raw = (REPLAY_REQUIRES_EXPLICIT_GRANT ? explicitlyGranted() : s === "granted")
      ? "granted" : "not-explicit";
    if (s === "denied") {
      if (window.posthog && window.posthog.__loaded && window.posthog.opt_out_capturing) {
        window.posthog.opt_out_capturing();
      }
      return;
    }
    if (!(window.posthog && window.posthog.__loaded)) {
      loadPostHog(raw === "granted");
      phUpgraded = raw === "granted";
      return;
    }
    if (raw === "granted" && !phUpgraded) {
      phUpgraded = true;
      if (window.posthog.has_opted_out_capturing && window.posthog.has_opted_out_capturing() && window.posthog.opt_in_capturing) {
        window.posthog.opt_in_capturing();
      }
      if (window.posthog.set_config) window.posthog.set_config({ persistence: "localStorage" });
      if (window.posthog.startSessionRecording) window.posthog.startSessionRecording();
    }
  }
  document.addEventListener("cookieyes_consent_update", applyPostHogConsent);
  /* The 1 Hz poll is the ONLY change channel on a bannerless surface
     (no CMP script means no consent_update events): it notices a
     consent given on the marketing site in another tab, and the
     nvm_cg cookie on a first navigation. Kept running by design. */
  setInterval(applyPostHogConsent, 1000);
  applyPostHogConsent();

  /* ------- 3. nvm_o decorator + app_handoff_click ------- */

  function readCookie(name) {
    var m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    if (!m) return null;
    try { return decodeURIComponent(m[1]); } catch (e) { return null; }
  }

  function unwrapTouch(value) {
    if (!value) return null;
    if (value.indexOf("v1.") !== 0) return value;
    var parts = value.split(".");
    if (parts.length !== 3) return null;
    try {
      return atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"));
    } catch (e) {
      return null;
    }
  }
  function b64url(s) {
    var bytes = new TextEncoder().encode(s);
    var bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function parseTouch(v) {
    if (!v) return null;
    try {
      var t = JSON.parse(v);
      return t && typeof t === "object" ? t : null;
    } catch (e) {
      return null;
    }
  }
  function isAppHost(h) {
    h = h.toLowerCase();
    return h === "nevermined.app" || h.slice(-15) === ".nevermined.app";
  }
  function decorate(event) {
    var t = event.target;
    var el = t && t.nodeType === 1 ? t : t ? t.parentElement : null;
    var a = el && el.closest ? el.closest("a[href]") : null;
    if (!a) return;
    var url;
    try {
      url = new URL(a.href);
    } catch (e) {
      return;
    }
    if (!isAppHost(url.hostname)) return;
    /* Explicit denial means no attribution forwarding — the nvm_o
       payload stays off the URL. The click event below still fires
       (GCM decides what GA does with it under denial). */
    var lt = null;
    if (consentState() !== "denied") {
      var ft = parseTouch(unwrapTouch(readCookie("nvm_ft")));
      lt = parseTouch(unwrapTouch(readCookie("nvm_lt")));
      var payload = {};
      if (ft) payload.ft = ft;
      if (lt) payload.lt = lt;
      /* pid: anonymous PostHog distinct_id rides the handoff so the
         webapp merges the docs click-session into the product person
         (website#235 payload contract). ANONYMOUS ids only - never an
         email-shaped id (no identify() runs on docs, but the guard is
         part of the contract). */
      try {
        if (window.posthog && window.posthog.__loaded && window.posthog.get_distinct_id) {
          var pid = window.posthog.get_distinct_id();
          if (pid && pid.indexOf("@") === -1) payload.pid = pid.slice(0, 120);
        }
      } catch (e) { /* optional */ }
      url.searchParams.set("nvm_o", b64url(JSON.stringify(payload)));
      a.href = url.toString();
    }
    if (window.gtag) {
      window.gtag("event", "app_handoff_click", {
        link_url: url.hostname + url.pathname,
        channel: lt && lt.ch ? lt.ch : "unknown"
      });
    }
  }
  document.addEventListener("click", decorate, true);
  document.addEventListener("auxclick", decorate, true);
})();
