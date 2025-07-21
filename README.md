# Nevermined Documentation

Welcome to the Nevermined Docs — a Mintlify-powered developer hub for AI-native payment infrastructure. This repository contains the complete source for Nevermined’s documentation, covering:

- Agent registration and metadata structure
- Payment plan configuration and pricing models
- Credit metering, redemption, and usage control
- Proxy-based integrations
- API Reference and endpoint examples
- Guides, troubleshooting, and community links

This documentation is built using the [Mintlify Docs Framework](https://www.mintlify.com), with full support for custom components, MDX pages, collapsible accordions, API schemas, and rich developer experiences.

---

## 📦 Local Development

To preview and edit the documentation locally:

1. Install the Mintlify CLI:

```bash
npm install -g mintlify

	2.	At the root of the project (where docs.json lives), run:

mintlify dev

This will spin up a local server with hot reloading so you can edit .mdx files and preview changes live.

⸻

🚀 Deploying Changes

Deployment is automatic via GitHub integration.
	1.	Install the Mintlify GitHub App on your documentation repository.
	2.	Push changes to the main branch (or your default branch).
	3.	Mintlify will auto-deploy your updates to production.

⸻

🛠 Troubleshooting
	•	mintlify dev not starting?
Run: mintlify install to reinstall dependencies.
	•	Seeing a 404 on a page?
Ensure you’re running mintlify dev from a directory that includes a valid docs.json file.

⸻

📂 Key Structure
	•	introduction/ — Welcome, quickstart, high-level overview
	•	guides/ — Step-by-step agent onboarding, plan creation, proxy usage
	•	api-reference/ — Structured API endpoints and usage
	•	components/ — Custom Mintlify UI cards, accordions, and callouts

⸻

📬 Questions?
	•	Need help writing docs? DM the team on Discord
	•	Found a bug? Open an issue or pull request.
	•	Want to contribute? Fork this repo and submit improvements!

⸻

Built with ❤️ by the Nevermined team
https://nevermined.ai