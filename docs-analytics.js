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
 * GA4 is loaded separately via docs.json integrations.ga4 — untouched.
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

  /* ---------------- 1. PostHog (EU, anonymous mode) ---------------- */

  if (!(window.posthog && window.posthog.__loaded)) {
    /* PostHog snippet (array.js stub loader), verbatim */
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    window.posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      autocapture: false,
      capture_pageview: true,
      // Curated set v1: $pageview + replay ONLY (no $pageleave).
      capture_pageleave: false,
      person_profiles: "identified_only",
      persistence: "localStorage",
      disable_surveys: true,
      session_recording: { maskAllInputs: true }
    });
  }

  /* ------- 2. nvm_o decorator + app_handoff_click ------- */

  function readCookie(name) {
    var m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : null;
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
    var ft = parseTouch(readCookie("nvm_ft"));
    var lt = parseTouch(readCookie("nvm_lt"));
    var payload = {};
    if (ft) payload.ft = ft;
    if (lt) payload.lt = lt;
    url.searchParams.set("nvm_o", b64url(JSON.stringify(payload)));
    a.href = url.toString();
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
