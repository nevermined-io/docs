// A local stand-in for the parts of the ClawHub API that the publish step uses,
// for check-publish-step.sh. It listens on 127.0.0.1 only, never forwards a
// request, and accepts any token. It is our code, not the CLI's.
//
// Usage: node mock-registry.mjs <scenario> <port-file> <request-log>
// It writes the port it listens on to <port-file>, and one line per request
// (`METHOD path`, plus `version=X` for a publish) to <request-log>.
//
// Scenarios. The latest public version is 1.0.0 in all of them, so the CLI
// uploads 1.0.1 unless the step pins another number.
//   pending    the publish answers `publicationStatus: "pending"`
//   published  the publish answers `publicationStatus: "published"`
//   submitted  the publish answers with no publication status
//   unchanged  /resolve reports that this content IS 1.0.0, the latest
//   revert     /resolve reports that this content is 0.9.0, an older version,
//              so the step must publish it again as 1.0.1
//   held       1.0.1 is taken by a version ClawHub blocked: the publish of 1.0.1
//              fails with ClawHub's own "already exists" text, and 1.0.2 goes
//   blocked    the upload is accepted, and ClawHub then blocks it
//   orphan     the publish answers with no publication status, and ClawHub
//              never shows a publication attempt for that version (404)
//   ticket     the publish fails with ClawHub's used-upload-ticket error, as a
//              CLI retry does after a 409 that came after the tickets were used
// A version that is not blocked reads `pending_checks` twice, then `published`.
// Its first public read after that still answers 404 (released, not yet
// readable), and only the next one answers 200.
import { appendFileSync, writeFileSync } from "node:fs";
import http from "node:http";

const [scenario, portFile, logFile] = process.argv.slice(2);
const SCENARIOS = ["pending", "published", "submitted", "unchanged", "revert", "held", "blocked", "orphan", "ticket"];
if (!SCENARIOS.includes(scenario) || !portFile || !logFile) {
  console.error(`usage: node mock-registry.mjs <${SCENARIOS.join("|")}> <port-file> <request-log>`);
  process.exit(2);
}

// The text ClawHub's server answers with, as the CLI printed it in run
// 42853509688 (`text(message, 400)` in convex/httpApiV1/skillsV1.ts).
const alreadyExists = (v) => `Version ${v} already exists. Increment the version number and try again.`;
const blockedVersion = (v) => scenario === "blocked" || (scenario === "held" && v === "1.0.1");
const reads = new Map(); // version -> publication reads so far
const publicReads = new Map(); // version -> public reads since it was released

function stage(v) {
  if (blockedVersion(v)) return "blocked";
  if (scenario === "published") return "published";
  return (reads.get(v) ?? 0) > 2 ? "published" : "pending_checks";
}

const server = http.createServer((req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    const url = new URL(req.url, "http://127.0.0.1");
    const json = (status, value) => {
      res.writeHead(status, { "content-type": "application/json" });
      res.end(JSON.stringify(value));
    };
    let line = `${req.method} ${url.pathname}`;
    let m;
    try {
      if (url.pathname === "/api/v1/resolve") {
        return json(200, {
          match: { unchanged: { version: "1.0.0" }, revert: { version: "0.9.0" } }[scenario] ?? null,
          latestVersion: { version: "1.0.0" },
        });
      }
      if (url.pathname === "/api/v1/whoami") return json(200, { user: { handle: "nevermined-io" } });
      if (url.pathname === "/api/v1/skills/-/upload-url" && req.method === "POST") {
        const port = server.address().port;
        return json(200, { uploadUrl: `http://127.0.0.1:${port}/api/v1/skills/-/upload/t`, uploadTicket: "t" });
      }
      if (url.pathname === "/api/v1/skills/-/upload/t" && req.method === "POST") {
        return json(200, { storageId: "s" });
      }
      if (url.pathname === "/api/v1/skills" && req.method === "POST") {
        const version = JSON.parse(body).version;
        line += ` version=${version}`;
        if (scenario === "held" && version === "1.0.1") {
          res.writeHead(400, { "content-type": "text/plain" });
          return res.end(alreadyExists(version));
        }
        if (scenario === "ticket") {
          // convex/skillPublishUploads.ts
          res.writeHead(400, { "content-type": "text/plain" });
          return res.end("Skill upload ticket is missing, used, or expired");
        }
        const publicationStatus = { pending: "pending", published: "published" }[scenario] ??
          (scenario === "submitted" || scenario === "orphan" ? undefined : "pending");
        return json(200, {
          ok: true,
          skillId: "k",
          versionId: "v",
          ...(publicationStatus ? { publicationStatus } : {}),
        });
      }
      if ((m = url.pathname.match(/^\/api\/v1\/skills\/[^/]+\/versions\/([^/]+)\/publication$/))) {
        if (scenario === "orphan") return json(404, { error: "not found" });
        reads.set(m[1], (reads.get(m[1]) ?? 0) + 1);
        return json(200, {
          publication: { stage: stage(m[1]), retrying: false, updatedAt: Date.now(), checks: {} },
        });
      }
      if ((m = url.pathname.match(/^\/api\/v1\/skills\/[^/]+\/versions\/([^/]+)$/))) {
        if (stage(m[1]) !== "published") return json(404, { error: "not found" });
        publicReads.set(m[1], (publicReads.get(m[1]) ?? 0) + 1);
        return publicReads.get(m[1]) > 1 ? json(200, { version: m[1] }) : json(404, { error: "not found" });
      }
      return json(404, { error: `not mocked: ${req.method} ${url.pathname}` });
    } finally {
      appendFileSync(logFile, `${line}\n`);
    }
  });
});

server.listen(0, "127.0.0.1", () => writeFileSync(portFile, String(server.address().port)));
