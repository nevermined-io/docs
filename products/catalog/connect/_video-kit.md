# Connect-from-host video kit

Production spec for the per-host "Connect from `<host>`" video. **Not published** (excluded via
`.mintignore`: `/products/catalog/connect/_*`). One recording per host, ~60–90 s, same five beats,
so the videos stay as consistent as the pages. This is a spec, not a recording — see
[Handoff](#handoff): recording and publishing are a human step.

Per-host variables: `HOST_LABEL` (e.g. "Claude", "ChatGPT"), `HOST_SLUG` (e.g. `claude`, `chatgpt`).

## Script — five fixed beats (60–90 s)

Keep the order; keep it to one screen recording with voiceover or captions. Target 70 s.

1. **Add the connector (~15 s).** Open `HOST_LABEL`'s connector settings and add the Catalog MCP
   server (`https://mcp.live.nevermined.app/mcp`, or `sandbox` for a rehearsal). Say there is no API
   key and no account to create with the service.
2. **Consent on nevermined.app (~15 s).** The consent page opens. Point out the **Live** badge, set a
   small **cap** and a short **validity**, and **Grant access**. One line: "this budget is the
   credential — capped, revocable, spent only through the Router."
3. **Ask for a task that needs a paid service (~15 s).** Back in `HOST_LABEL`, give the standard demo
   prompt below — something only a live, paid service can answer.
4. **Show the result and the credits left (~15 s).** The assistant returns the paid result. Then show
   the budget remaining (ask it, or the [Connections](https://nevermined.app/connections) view).
5. **End card (~10 s).** Logo + "Connect the Catalog from `HOST_LABEL`" + the docs URL
   `nevermined.ai/docs/products/catalog/connect/HOST_SLUG`.

## Standard demo prompt

Use the same prompt across hosts so results are comparable. A live-weather call is cheap, visual and
unambiguous:

> Using the Nevermined connector, find a weather service in the catalog and tell me the current
> temperature in Tokyo. Then tell me how much of my budget is left.

Fallback if weather is unavailable: a web-search or page-fetch service for a fact dated today.
Rehearse on **sandbox** first; record the final take on **live** with a small real cap.

## Recording settings

- **Tool:** OBS Studio.
- **Resolution / frame rate:** 1920×1080 (1080p), 30 fps.
- **Canvas & output:** both 1920×1080; downscale filter Lanczos.
- **Capture:** browser window only, no desktop clutter; hide bookmarks and unrelated tabs.
- **Zoom:** browser at 110–125 % so menu labels read on mobile.
- **Audio:** voiceover −16 LUFS, or no audio with on-screen captions.
- **Redact:** real wallet addresses, API keys, email, balances beyond the demo cap.
- **Format:** MP4 (H.264), ~8–12 Mbps.

## Thumbnail template (1280×720)

- **Size:** 1280×720 (16:9), PNG.
- **Left:** `HOST_LABEL` logo + Nevermined logo with a "+" between them.
- **Headline:** "Pay for services from `HOST_LABEL`" — 2 lines max, high contrast.
- **Background:** Nevermined brand gradient; keep text clear of the bottom-right (duration badge).
- **Consistent** type and colour across every host so the playlist reads as a set.

## Captions — EN / ES

- Burned-in captions optional; **upload an SRT** either way for accessibility and search.
- **EN** is the source. **ES** is a full translation (not auto-captions) — Nevermined ships docs and
  videos in both.
- File names: `connect-HOST_SLUG.en.srt`, `connect-HOST_SLUG.es.srt`.
- Publish to the YouTube **"Catalog"** playlist with EN and ES caption tracks attached.

## Derived deliverables

- **GIF for docs.** A silent 8–12 s loop of beats 1–4 (add → consent → ask → result), ≤ 5 MB,
  960px wide, for the per-host page. It drops into the `GIF-FOR-DOCS PLACEHOLDER` marked in
  `products/catalog/connect/HOST_SLUG.mdx`; store at `/images/catalog/connect-HOST_SLUG.gif`.
- **Vertical social cut.** A 1080×1920 (9:16) 20–30 s cut of the same flow for social, with
  burned-in captions (no audio assumed).

## Handoff

**Recording and publishing are a human step — do not automate them from a docs session.** The actual
screen recording, the YouTube upload, and the EN/ES caption publish run through the
`nevermined-publish-videos` skill with Aitor. Hand the recorded files back to Aitor; this kit is the
brief they record against.
