# Changelog

> What changed in Skribly Agent, Skribly Tracker, agent-skills and this documentation, in plain words, newest first.

What changed in each tool, rewritten in plain words from the release notes. Releases with no visible change are left out. Every push to `main` of a product repository publishes a GitHub Release with notes grouped from its commits.

## November 2026

### Documentation, 14 November: pages moved from skribly.pl

- The move is complete: the Skribly Agent, Skribly Tracker and agent-skills guides now live only in these docs. The agent-skills [Install](/skills/install/) page gained the tracker steps and the [overview](/skills/) links to the measured token saving.

- Four new pages in the Skribly Agent section: [The skribly command](/agent/cli/), [Audit rules](/agent/audits/), [Token saving](/agent/token-saving/) and [Data and network](/agent/data-and-network/). The MCP server of Skribly Agent is described on its own page, which is planned.
- [Keyboard shortcuts](/agent/shortcuts/) now lists the agent overview, the jump to the next waiting agent, go to line, close tab and the bottom terminal. [Skribly Tracker](/tracker/) and the [REST API guide](/tracker/rest-api/) gained the steps to connect the other tools and a short section on authentication.

### Documentation, 11 November: search on the home page

- The home page opens with a search field that suggests pages as you type, the tools as tabs, the quick-start command with a Copy button and the newest entries of this list.
- Without JavaScript the search form opens the page All pages (`/all-pages/`), every page of the documentation grouped as in the sidebar. Your query stays on this site.
- The Authors page gives the author cards a heading.

### Documentation, 11 November: one page layout

- Every page now opens the same way as on skribly.pl and ui.skribly.pl: the breadcrumbs, then the page title with its one-sentence summary under it, then the page.

### Documentation, 11 November: licences and language switch

- Every page now links a Licences page from the footer, listing the packages and fonts the site uses with their licences: `/licenses/` in English and `/pl/licencje/` in Polish.
- The language switch is now in the header of every page that exists in both languages, and in the page list on narrow screens. It marks the current language and leads to the same page in the other one.
- The short recordings on the Polish pages now show the Polish interface and have Polish captions.

### agent-skills 0.2.13 and 0.2.14, 11 November

- Six new skills, 35 in total: `adr`, `plan-step`, `run-step`, `release`, `docs-sync` and `design-review`. See [Skills catalog](/skills/catalog/).
- New command `agent-skills agent-files`: it generates `CLAUDE.md`, `GEMINI.md`, the Cursor rule, the Copilot instructions, the project skill folders and a read-only `.mcp.json` from a repository's `AGENTS.md`, never replaces a file it did not write unless forced, and `--check` fails when something is missing or out of date. `agent-skills doctor` now reports whether each agent is configured for the repository. See [Project instruction files](/skills/agents/#project-instruction-files).
- New target `devin`: Devin is the eighth supported agent. It reads the shared `.agents/skills` folder and `AGENTS.md`. See [Supported agents](/skills/agents/).
- Finished work leaves the TODO: `run-step` has a `tidy` check and `docs-sync` checks the same rule.
- `agent-files` writes, backs up and removes only inside the repository and follows only links that stay inside it.

### Documentation, 11 November: figures brought up to date

- The overview pages, the skills pages, the install page and the FAQ now agree with the released versions: 35 skills, eight agents, agent-skills 0.2.14. The catalogue describes the six new skills, and the Supported agents page describes Devin and the files `agent-skills agent-files` generates.
- The release date of Skribly Agent 1.0.37 on its overview page is now 6 November.
- This list gains the Skribly Agent releases 1.0.33 to 1.0.37 and agent-skills 0.2.11 that it was missing.

### Documentation, 11 November: Polish version

- Every page of the documentation is now also available in Polish under `/pl/`. The language is chosen in the header; the header, footer, search and accessibility panel follow it, and each page links to its twin for search engines.

### Documentation, 8 November: one look with the other sites

- The site now uses the site kit of `@skribly/ui`: the same header with the Skribly products switcher, theme switch, accessibility panel, search, footer, breadcrumb trail and 404 page as the other Skribly sites.
- The theme and the accessibility settings hold on every Skribly site. **Auto** is now called **System**.
- Search opens with <kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>⌘</kbd>+<kbd>K</kbd> or <kbd>/</kbd> in the same dialog as on the other sites.
- Pages change with a view transition, and the home page lists the tools with their logos. All motion stops under reduced motion.
- The [UI](/ui/) page links to the live component gallery at [ui.skribly.pl](https://ui.skribly.pl).

### Documentation, 8 November

- docs.skribly.pl goes live, with guides for every tool, a REST API reference generated from the OpenAPI description, search, `llms.txt`, and light, dark and high contrast themes.

### agent-skills 0.2.11, 8 November

- The `project` skill keeps a `$schema` reference that you set by hand in `.skribly/project.json`.

### agent-skills 0.2.10, 8 November

- New `project` skill and `agent-skills project`: the stack, the commands and the commit conventions are detected into `.skribly/project.json`, and values set by hand are never overwritten. Project-scope installs detect it too.
- New `learn` skill: confirmed lessons about a project are kept in `.skribly/lessons.md` after your OK, for 29 skills in total.
- Every skill reads the project profile and the lessons first.
- `agent-skills tasks event` prints the `skills.task.completed` event of a task. See [Skills catalog](/skills/catalog/).

### Skribly Agent 1.0.37, 6 November

Versions 1.0.33 to 1.0.37 came out the same evening.

- A live overview of all agents, a peek at a session and a jump to the agents that are waiting for you.
- Chats come back after a restart.
- A panel on the right with session tools, and cloning a project from a link. See [Agent panel](/agent/terminals/#agent-panel).
- The tray icons are now shipped with packaged builds.

### Skribly Agent 1.0.32, 6 November

- New **Accessibility** section in Settings: interface text size, high contrast, reduced motion, underlined links, a strong focus indicator and a reset. See [Accessibility in Skribly Agent](/agent/accessibility/).

### Skribly Tracker 0.1.20, 6 November

- Every page gets an accessibility panel for text size, contrast, fonts and motion.

### Skribly Agent 1.0.30, 4 November

- The app takes the name Skribly Agent. Existing installs keep their settings, tokens, sessions and sign-ins. See [Upgrading from the former name](/agent/updates/#upgrading-from-the-former-name).
- All interface text is updated in Polish and English.

### Skribly Tracker 0.1.16, 4 November

- The interface and logos take the Skribly name.
- Webhooks send `X-Skribly` headers next to the older ones, so existing receivers keep working.

### agent-skills 0.2.5, 4 November

- The tracker id becomes `skribly`, with `SKRIBLY_TRACKER_URL` and `SKRIBLY_TRACKER_TOKEN`. Older names and credentials keep working.

## October 2026

### Skribly Agent 1.0.27, 29 October

- Skribly Tracker becomes the default tracker.

### Skribly Agent 1.0.26

- New tray and window icons with the app's own accent colour.

### Skribly Agent 1.0.23

- The interface can be translated into any language, online, and stays available offline.
- Sign in to GitHub, GitLab, Bitbucket, Gitea or Azure DevOps to see real commit activity.
- Pipeline nodes can be resized and expanded.
- Installs show a progress bar, the elapsed time and the latest output line.

### Skribly Agent 1.0.19

- Docker monitoring, one-click installs, Cursor and GitHub pull request integration, and onboarding.
- The Code side panel can be resized.

### Skribly Agent 1.0.15

- Unsigned macOS builds update in place.

### Skribly Agent 1.0.7

- The packaged app starts correctly.
- Claude Code's first-run menus are detected as waiting for a decision.

### Skribly Agent 1.0.4

- First release: dashboard, agents, tasks, code and git, pipelines, skills and audits.
- Workspaces, tabs and split panes with agent states read from the screen.
- Session restore, a control API, and a command line with MCP.
- Tracker tasks managed from the app: comments, status, assignment, creation, time logging and search.
- A browser with per-agent profiles, Claude plugins and MCP servers.
- Custom agents, SSH machines, worktrees, appearance settings and help.

### Skribly Tracker 0.1.9

- REST API v1 is documented with curl examples and OpenAPI 3.1.

### Skribly Tracker 0.1.8

- The tracker gets the family logo and a sky-blue accent.

### Skribly Tracker 0.1.7

- Tests cover the API, permissions and browser flows.

### Skribly Tracker 0.1.5

- The tracker runs in Docker.

### Skribly Tracker 0.1.3

- Browser interface: dashboard, Kanban board, list and issue pages.
- A demo workspace, with commands for tokens and sample data.

### Skribly Tracker 0.1.2

- First version.

### agent-skills 0.2.2

- The `task` skill can read Skribly Tracker.

### agent-skills 0.2.0

- 13 new skills, for 27 in total: performance, backend, API, end-to-end and load tests, migrations, Docker, CI, upgrades, refactoring, translations and release notes.
- New scripts condense tool output for the model: Lighthouse, changed-line coverage, OpenAPI maps, Playwright reports, load test summaries, migration and Dockerfile linters, and more.
- New guides for getting started, skills, trackers, token saving and the commit hook.

### agent-skills 0.1.0

- First release: 14 skills and a command-line installer for seven agents.
- Tracker support for Redmine, Jira, GitHub, GitLab and Linear, read-only by default.
- A `commit-msg` hook that strips AI co-author trailers.

## Shared packages

### `@skribly/core` 0.2.0

- Identity and scopes, the CloudEvents event envelope and catalogue, app manifests and the registry, notifications, the audit log, the project profile with its JSON Schema, signed events, and Hono helpers. See [Core](/core/) and [Events](/core/events/).

### `@skribly/core` 0.1.0

- First version: Tracker API contracts and client, webhook signing, problem errors, environment config, logging, translations, design tokens and presets. See [Core](/core/).

### `@skribly/ui`, first version

- Design tokens in three themes, plain CSS classes, and the `Logo`, `Button`, `IconButton`, `TextField`, `Card`, `Badge` and `Alert` components. See [UI](/ui/).
- Since then, on the main branch: component groups for theme, actions, forms, feedback, overlays, navigation, surfaces, data, the app shell, search, content, conversation, onboarding, charts, media, the tracker, code and auth pages.
