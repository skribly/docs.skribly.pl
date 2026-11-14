# Skills catalog

> All 35 skills of agent-skills, grouped by job, with what each one does, when to use it and how to call it.

Invoke a skill as `/name` in Claude Code, Cursor, Gemini CLI, OpenCode, Windsurf and Copilot, `$name` in Codex, or `@skills:name` in a Devin prompt. You can also just describe what you want: agents pick skills by their description.

The machine-readable list is `skills.json` in the repository, validated against a JSON schema in CI.

## Workflow

| Skill | What it does | Example |
| --- | --- | --- |
| `task` | Takes a ticket or a sentence to an approved commit: fetches the issue with a script, writes a small or large analysis (`SPEC.md` for approval), branches after approval, works in stages with `STATE.md` updated after each, runs the checks and commits after your OK. Extras: `estimate`, `plan`, `pr` (pull request description) and `comment` (tracker comment). | `/task 482` · `$task SHOP-42` · `/task fix the date sorting` · `/task` to resume the current branch's task |
| `project` | Detects the stack, the install, dev, build, test, lint, typecheck and format commands, the commit style and language, the base branch, CI and containers into `.skribly/project.json`, which every skill reads first. Values set by hand are never overwritten, and a value deleted by hand stays deleted. | `/project` · `$project` · "which commands does this repo use?" |
| `commit` | Proposes a message in the project's convention, detected from your own recent commits, and commits the listed files after you approve. Never adds trailers, never pushes. | `/commit` · "commit this as two commits" |
| `handoff` | Writes or reads `.tasks/<id>/STATE.md` so another agent or a fresh session continues without the transcript. | `/handoff` · `$handoff resume 482` |
| `orchestrate` | Splits big work into independent sub-tasks with self-contained briefs and file ownership, runs them in parallel subagents or worktrees, then merges and verifies. | `/orchestrate migrate all forms to the new validation helper` |
| `estimate` | A read-only estimate: deliverables, optimistic, likely and pessimistic hours, a PERT total and range, assumptions, risks and open questions. | `/estimate 482` |
| `plan-step` | Writes or expands a plan work package in the exact shape the plan defines: headings in order, tasks with their files, what to do and a check, owner actions, verification, done-when and risks. Task ids and section references stay stable. It writes a plan; it does not run a step. | `/plan-step` · "write the work package for F9" · "add a task to F5" |
| `run-step` | Carries out one work package task by task by the plan's step protocol: a short branch from `develop` for each task, its check, a Conventional Commit with explicit paths, a merge with `--no-ff`, a push, then the tick. Actions that belong to the owner are recorded as blocked, never attempted. | `/run-step` · "run step F5" · "do the next task of F5" |
| `release` | Walks the plan's release checklist and runs read-only checks before a release: `develop` clean, `package.json` and `VERSION` in step, a `CHANGELOG.md` entry present, the tag still free. It never bumps a version, tags, merges into `main` or publishes. | `/release` · "is this ready to release?" · "run the weekly routine" |

## Quality and tests

| Skill | What it does | Example |
| --- | --- | --- |
| `test-loop` | Runs only the checks affected by the change, fixes in a capped loop of three attempts, condenses logs, never weakens tests. | `/test-loop` · "make CI green" |
| `backend-tests` | Writes and runs backend tests for changed code: pytest with Django and DRF, Laravel PHPUnit or Pest, Node with supertest, Go, Spring. Test database, factories, isolation, mocked HTTP, coverage of changed lines. | `/backend-tests` · "cover the new orders endpoint" |
| `api-tests` | Contract and integration tests for REST and GraphQL from OpenAPI (Schemathesis, Dredd, Hurl, newman), auth flows and error cases. | "check the API against openapi.yaml" |
| `e2e-tests` | Playwright specs for changed user flows; runs only affected specs, keeps traces, fixes flaky tests at the root cause. | `/e2e-tests` · "this spec fails on CI only" |
| `load-test` | k6, autocannon or Locust from smoke to load, stress and spike, with thresholds and condensed results. | `/load-test GET /api/orders at 20 users` |
| `review` | Self-review of the diff before a commit: findings first, with severity, `file:line` and a fix. | `/review` · `/review src/billing` |
| `debug` | Reproduce, narrow down, prove the cause, make the smallest fix, and use the same reproduction as proof. | `/debug totals are wrong after applying a coupon` |
| `refactor` | Behaviour-preserving refactoring: characterisation tests first, then small verified steps. | `/refactor split OrderService` |
| `db-migrations` | Zero-downtime migrations for Django, Laravel, Prisma, Alembic, Flyway and Rails, with a linter for locks and risks. | "is this migration safe?" |
| `i18n` | Missing, empty and unused translation keys, placeholder mismatches, keys used in code but missing, and string extraction. | `/i18n` · "check the locale files" |
| `browser-check` | Headless Chromium screenshots of only the changed element, desktop and mobile, plus console errors. Only with your consent. | `/browser-check the cart badge on /cart` |
| `design-review` | Reviews a page or component against the plan's list of what fails a design review and its cross-site checklist. A script scans for emoji icons, gradients, glass effects, missing alt text, landmarks and heading, title, meta and hreflang rules; the rest is judged on screenshots at phone and desktop width in each theme. Read-only. | `/design-review` · "does this page fail review?" |

## Performance

| Skill | What it does | Example |
| --- | --- | --- |
| `pagespeed` | Core Web Vitals with PageSpeed Insights for public URLs or local Lighthouse for localhost, mobile and desktop, condensed to the top opportunities, with a fix-and-measure loop for Next.js, Vite, Django and Laravel. | `/pagespeed http://localhost:3000/products` |
| `perf-backend` | N+1 detection from query logs, indexes from `EXPLAIN`, caching and profiling, proven with before and after numbers. | `/perf-backend /api/orders is slow` |

## Security and accessibility

| Skill | What it does | Example |
| --- | --- | --- |
| `security-audit` | A masked secret scan, vulnerable dependencies (npm, pnpm, Composer, pip or OSV.dev) and dangerous code patterns, with severity, evidence and fixes. Read-only. | `/security-audit` · `/security-audit full` |
| `wcag-audit` | WCAG 2.2 AA for the changed UI: axe-core through Playwright when available, plus a targeted checklist and concrete fixes. | `/wcag-audit http://localhost:3000/checkout` |

## DevOps

| Skill | What it does | Example |
| --- | --- | --- |
| `docker` | Dockerfile and compose review and fixes: multi-stage builds, pinned images, non-root users, caching, healthchecks, secrets and exposed databases. Uses hadolint when installed. | `/docker` · "make the image smaller" |
| `ci-setup` | Creates or fixes GitHub Actions or GitLab CI for the detected stack, and reviews workflows for injection and unpinned actions. Uses actionlint when installed. | `/ci-setup` · "is our workflow safe?" |
| `deps-update` | Outdated packages grouped by risk, changelogs read for majors, one group at a time with tests and a commit each. | `/deps-update` · "bump all patch versions" |

## Docs and meta

| Skill | What it does | Example |
| --- | --- | --- |
| `project-docs` | A `.docs/` knowledge folder (overview, architecture, modules, data flow, development, decisions) and a short `AGENTS.md` or `CLAUDE.md` that points to it. | `/project-docs` · "slim down our CLAUDE.md" |
| `seo-audit` | Technical SEO: meta tags, headings, canonical, robots and sitemap, hreflang, Open Graph, JSON-LD and performance basics. | `/seo-audit https://example.com/product/1` |
| `release-notes` | Release notes and `CHANGELOG.md` entries from git history in the project's style, without AI trailers. | `/release-notes since v1.4.0` |
| `adr` | Writes an architecture decision record in MADR 4.0.0 with the four fields Skribly requires (confidence, reopen when, exit plan and a confirmation that names its check), numbers it and keeps the index of `.docs/adr`. It refuses to edit an accepted record and supersedes it with a link instead. | `/adr` · "record this decision" · "supersede ADR 0007" |
| `docs-sync` | Checks that a change a user can see updated, in the same change, the Polish and English language files with the same keys, the repository's `.docs/`, `CHANGELOG.md` and the matching page on this site. Read-only: it reports what is missing and the agent adds it. | `/docs-sync` · "did I update the docs?" |
| `learn` | Keeps confirmed project lessons (a command that works, a convention, a pitfall) in `.skribly/lessons.md`, one dated line each with the skill it came from, written only after you agree. Every skill reads the file first. Refuses anything that looks like a secret. | `/learn` · "remember that the e2e suite needs a seeded database" |
| `token-saver` | Working rules for a small context: search before reading, line ranges, condensed logs, scripts instead of the model, `/clear` plus `STATE.md`. | `/token-saver` · "I'm close to the limit" |

## Files the skills leave behind

| File | Written by | What it holds |
| --- | --- | --- |
| `.skribly/project.json` | `project`, project-scope installs, you | The project profile: stack, commands, commit style and language, base branch and, optionally, the Skribly Tracker project. Its schema comes from [`@skribly/core`](/core/) |
| `.skribly/project.detected.json` | `project` | The last detection, so the next run can tell detected values from values you set by hand |
| `.skribly/lessons.md` | `learn`, after your OK | Dated one-line lessons, each with the skill it came from |
| `.tasks/<id>/TASK.md` | `task` | The issue as fetched, refreshed with only the changes on later fetches |
| `.tasks/<id>/SPEC.md` | `task` | The analysis of a larger task, for your approval |
| `.tasks/<id>/STATE.md` | `task`, `handoff` | About 30 lines: goal, what is done, changed files, check results, decisions, one next step |
| `.tasks/<id>/COMMENT.md` | `task` | A draft tracker comment, posted only after your explicit OK |
| `.tasks/workflow.md` | `task` | Project conventions: tracker, base branch, branch and commit patterns, check commands, dev URL |

`.tasks/` is added to `.git/info/exclude`, so fetched tickets never land in a commit and the team's `.gitignore` stays untouched. The `.skribly/` files are meant to be committed with the project, so the whole team and every agent read the same profile and lessons.
