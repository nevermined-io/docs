/**
 * Docs analytics (Growth Analytics epic, nevermined.ai-website#191 docs
 * surface + #188 handoff instrumentation).
 *
 * Mintlify auto-includes any .js in the content directory on every page
 * (no docs.json reference needed). This file carries:
 *
 * 1. PostHog, EU cloud, anonymous mode — loaded as custom JS instead of
 *    Mintlify's native integration because the native one exposes no
 *    config: it can't disable autocapture or set our curated posture
 *    ($pageview + session replay ONLY, no identify, masked inputs,
 *    localStorage persistence), and proxies events through Mintlify's
 *    host. Same config as the blog loader (webflow-analytics.js in the
 *    website repo) — one posture everywhere.
 * 2. nvm_o outbound-link decorator + app_handoff_click GA event — docs
 *    readers are the highest-intent handoff to nevermined.app. On the
 *    proxied domain (nevermined.ai/docs) the middleware's nvm_ft/nvm_lt
 *    cookies are present and ride along; on direct docs.nevermined.app
 *    visits they don't exist and the payload is empty — the click event
 *    still counts (it's the blocklist-watch numerator, #195).
 *
 * Deliberately NOT here: RB2B (docs readers are product-led, not
 * outbound targets — decision on record in #191).
 *
 * Consent (added 2026-07-20): this file also injects CookieYes (docs
 * previously had no CMP) and gates PostHog on the authoritative
 * consent state — granted fires, anything else waits, fail closed.
 *
 * GA4 (moved here 2026-07-21): docs.json integrations.ga4 is REMOVED
 * in this change — Mintlify's native injection gave gtag no consent
 * defaults, so EU visitors got GA cookies pre-consent. This file now
 * owns the full GA load: GCM defaults first, then gtag, then
 * CookieYes. Do not re-add integrations.ga4 — that would double-init.
 *
 * The nvm_o decorator attaches attribution only when consent is not
 * explicitly denied; the click event itself still fires (GCM governs
 * what GA does with it).
 */
(function () {
  "use strict";

  var POSTHOG_KEY = "phc_wydoKzXeudS4oNmTTJeeeifyHVQtVg8gUregwFeDfi4k";
  var POSTHOG_HOST = "https://eu.i.posthog.com";

  var host = window.location.hostname.toLowerCase();
  var isProduction =
    host === "nevermined.ai" ||
    host === "www.nevermined.ai" ||
    host === "docs.nevermined.app";
  if (!isProduction) return;
  if (window.__nvmDocsAnalytics) return;
  window.__nvmDocsAnalytics = true;

  /* ------------- 0a. Google Consent Mode defaults + GA4 ------------- */
  /* GA moved here from docs.json integrations.ga4 (2026-07-21): Mintlify
     injected gtag with nothing declaring consent defaults before it, so
     EU docs visitors got GA cookies pre-consent. Defaults MUST precede
     both CookieYes and gtag. Region list mirrors CONSENT_COUNTRY_CODES
     in the website repo (lib/attribution.ts) - keep in sync. */

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  // Review fix: the decorator (and anything else) calls window.gtag —
  // with docs.json's native GA gone, nothing assigned it globally.
  window.gtag = window.gtag || gtag;
  gtag("consent", "default", { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted", analytics_storage: "granted", functionality_storage: "granted", personalization_storage: "granted", security_storage: "granted" });
  gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied", functionality_storage: "denied", personalization_storage: "denied", security_storage: "granted", wait_for_update: 500, region: ["AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","GB"] });
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

  /* ---------------- 0. CookieYes CMP (added 2026-07-20) ---------------- */
  /* Docs previously had NO consent banner - EU docs-only visitors could
     never consent, so under the consent architecture nothing would ever
     fire for them. Same account as site + blog: one shared consent
     state across every nevermined surface. */

  if (!document.getElementById("cookieyes")) {
    var cky = document.createElement("script");
    cky.id = "cookieyes";
    cky.src = "https://cdn-cookieyes.com/client_data/1d897eaaf322a6d6e1a1b9c07f3ba7b8/script.js";
    document.head.appendChild(cky);
  }

  /* ---------------- consent gate (authoritative, fail closed) ---------------- */
  /* Line-for-line port of the site's lib/consent-client and the blog
     loader's gate: granted fires; unknown/denied wait on the
     consent_update event + poll; pre-decision default reads as unknown.
     No timeout inference. */

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
      if (consentState() === "granted") fire();
    }
    document.addEventListener("cookieyes_consent_update", check);
    timer = setInterval(check, 500);
    check();
  }

  /* Capture-on-consent recovery: only on the proxied domain, where
     /api/consent-touch is same-origin and the middleware's deferred
     first-touch can be recovered. Direct docs.nevermined.app visits
     have no middleware cookies either way. */
  if (host === "nevermined.ai" || host === "www.nevermined.ai") {
    whenConsented(function consentTouch() {
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
  }

  /* ---------------- 1. PostHog (EU, anonymous mode) - consent-gated ---------------- */

  function loadPostHog(full) {
    if (window.posthog && window.posthog.__loaded) return;
    /* PostHog snippet (current official loader, 2026 method surface,
       assets-host delivery, crossOrigin) */
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Ji Yi init fn mn Ur pn bn cn capture calculateEventProperties Sn register register_once register_for_session unregister unregister_for_session Tn getFeatureFlag getFeatureFlagPayload getFeatureFlagResult getAllFeatureFlags isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Mn identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset shutdown setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty Cn xn createPersonProfile setInternalOrTestUser In hn Pn opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing debug Vr Rt getPageViewId captureTraceFeedback captureTraceMetric an".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    window.posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      // 2026-05-30 defaults: notably pageview capture on history changes,
      // essential here - Mintlify docs are an SPA and client-side
      // navigations would otherwise be invisible.
      defaults: "2026-05-30",
      autocapture: false,
      capture_pageview: "history_change",
      // Curated set v1: $pageview + replay ONLY (no $pageleave).
      capture_pageleave: false,
      person_profiles: "identified_only",
      persistence: full ? "localStorage" : "memory",
      disable_session_recording: !full,
      disable_surveys: true,
      session_recording: { maskAllInputs: true }
    });
  }

  /* PostHog consent controller (Option B matrix, 2026-07-20):
     denied = never load / opt out; undecided = memory-mode pageviews
     only (no device storage, no replay); granted = full, upgrading a
     limited start in place. Same semantics as the site + blog. */
  var phUpgraded = false;
  var phPoll = null;
  function stopPhPoll() {
    // Review fix: the 1 Hz poll only bridges the window before CookieYes
    // is ready; once a definitive state is handled the consent_update
    // listener alone covers later changes (e.g. revisit-consent).
    if (phPoll) { clearInterval(phPoll); phPoll = null; }
  }
  function applyPostHogConsent() {
    var s = consentState();
    if (s === "denied") {
      stopPhPoll();
      if (window.posthog && window.posthog.__loaded && window.posthog.opt_out_capturing) {
        window.posthog.opt_out_capturing();
      }
      return;
    }
    if (!(window.posthog && window.posthog.__loaded)) {
      loadPostHog(s === "granted");
      phUpgraded = s === "granted";
      return;
    }
    if (s === "granted" && !phUpgraded) {
      phUpgraded = true;
      if (window.posthog.set_config) window.posthog.set_config({ persistence: "localStorage" });
      if (window.posthog.startSessionRecording) window.posthog.startSessionRecording();
    }
    if (s === "granted") stopPhPoll();
  }
  document.addEventListener("cookieyes_consent_update", applyPostHogConsent);
  phPoll = setInterval(applyPostHogConsent, 1000);
  applyPostHogConsent();

  /* ------- 2. nvm_o decorator + app_handoff_click ------- */

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
    // The docs host itself is never a handoff target.
    if (h === "docs.nevermined.app") return false;
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
    // Review fix: explicit denial means no attribution forwarding —
    // the nvm_o payload stays off the URL. The click event below still
    // fires (GCM decides what GA does with it under denial).
    var lt = null;
    if (consentState() !== "denied") {
      var ft = parseTouch(unwrapTouch(readCookie("nvm_ft")));
      lt = parseTouch(unwrapTouch(readCookie("nvm_lt")));
      var payload = {};
      if (ft) payload.ft = ft;
      if (lt) payload.lt = lt;
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
