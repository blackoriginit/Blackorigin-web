# Branch workflow (project rule)

- `dev` is the integration branch. Merge all work — feature branches, fixes and teammate PRs — into `dev` first.
- Never merge directly into `main`. Ask the user for explicit confirmation before every merge to `main`.
- `main` stays untouched until that confirmation is given.
- Work in `C:\Users\nowri\blackorigin\demo-all-prs` on branch `dev`. Do not push without explicit approval.

---

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
