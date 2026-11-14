# Ecosystem architecture

> What each Skribly product does, how a task travels from the tracker to a commit, and which parts exist today and which are planned.

Skribly is a local-first workbench for people and coding agents. It gives them one tracker, one look and one honest record of the work, with no account needed to start and nothing leaving your machine unless you send it. Status as of 8 November 2026.

## What makes it different

- **Local first, no account.** Skribly Agent runs on your machine with no account and no telemetry.
- **Every agent.** It works with the coding agents you already use, on your own logins, through open standards.
- **The task lives in your repository.** An issue from Jira, Redmine, GitHub, GitLab, Linear or Skribly Tracker becomes `TASK.md` and `STATE.md` in the repository, so any tool can read it.
- **A tracker built for agents.** In Skribly Tracker an agent works on an issue as a delegate, and a person stays the owner.
- **Your style, your history.** Commits follow the repository's own style and never get AI co-author trailers.
- **Your data can leave.** The plan is that every app exports all its data in open formats, and no feature works only against a hosted Skribly server.

## Products

| Product | What it is | Status |
| --- | --- | --- |
| [Skribly Agent](/agent/) | Desktop app that runs many coding agents side by side, turns issues into task files, and shows which agent is working, waiting for you or done | Available, v1.0.37 |
| [agent-skills](/skills/) | A library of 35 skills and a small installer for eight coding agents, in the shared Agent Skills format | Available to the team, v0.2.14 |
| [Skribly Tracker](/tracker/) | Issue tracker with a REST API and signed webhooks, designed for people and agents together | First release, 0.1; a move to the shared stack is planned |
| [`@skribly/core`](/core/) | Shared contracts, API client, webhook signing, the event envelope, identity and scopes, app manifests, the project profile, errors, config, translations | v0.2.0 |
| [`@skribly/ui`](/ui/) | Design tokens, plain CSS classes and React components for one look everywhere | First version |
| [skribly.pl](https://skribly.pl) | The product site | Live |
| docs.skribly.pl | This documentation | Live |

## The workflow

```text
Skribly Tracker            Skribly Agent                     Coding agents
(or Jira, Redmine,  task   branch or worktree,       runs    Claude Code, Codex,
 GitHub, GitLab,   ──────▶ TASK.md and STATE.md,   ──────▶  Cursor Agent, Gemini CLI
 Linear)                   an agent session                  and nine more
      ▲                                                            │
      │ comment, status, time                       rules          │ changes
      │                                     agent-skills ─────────▶│
      │                                     tests, reviews,        ▼
      └──────────────────────────────────── audits, commits   You review the diff
                                                              and the audit results
```

1. **Plan.** A task starts in Skribly Tracker or arrives from Jira, Redmine, GitHub, GitLab or Linear.
2. **Start.** One action in Skribly Agent creates the branch, saves the task to `.skribly/tasks/<KEY>/TASK.md` and starts an agent with a ready prompt.
3. **Agents work.** Each one can run in its own Git worktree, and the app shows who is working, waiting or done.
4. **Rules apply.** Tests, reviews, audits and commit style come from one skill library, agent-skills.
5. **Review.** You read the changes and the security, WCAG and SEO audit results.
6. **Close.** You accept the commit and add the comment and logged time to the task.

agent-skills needs nothing else to work: it is a standalone library for any repository and any of the eight agents it supports. Skribly Agent works with trackers other than Skribly Tracker, and Skribly Tracker's API works with any HTTP client.

## How the apps connect today

| From | To | How |
| --- | --- | --- |
| Skribly Agent | Skribly Tracker, Jira, Redmine, GitHub, GitLab, Linear | Each tracker's REST API with a token stored in the system keychain. See [Tasks and trackers](/agent/features/#tasks-and-trackers). |
| Skribly Agent | agent-skills | Clones the skills repository, reads `skills.json` and installs skills per project and per agent through the agent-skills CLI. |
| Skribly Agent | coding agents | Starts each agent's own CLI in a terminal or in headless mode, and passes `SKRIBLY_TRACKER_URL` and `SKRIBLY_TRACKER_TOKEN` to the session. |
| agent-skills | Skribly Tracker and five other trackers | `agent-skills tasks fetch` reads issues with a personal token. See [Trackers](/skills/trackers/). |
| agent-skills | `@skribly/core` | `.skribly/project.json` follows the project profile schema of `@skribly/core`, copied into agent-skills so it keeps no runtime dependencies. `agent-skills tasks event` prints the `skills.task.completed` event in the core format; it sends nothing. |
| Skribly Tracker | any service | [Signed webhooks](/tracker/webhooks/) for `issue.created`, `issue.updated`, `issue.deleted` and `comment.created`. |
| Every Node app | `@skribly/core`, `@skribly/ui` | Shared packages for contracts, the Tracker client, webhook signing and the look. See [How apps connect](/core/connecting/). |

Apps never import each other. They talk over HTTP, and the shapes of what they send are defined once in `@skribly/core`.

## Shared packages

- **`@skribly/core` connects everything.** It holds the contracts the apps speak: the Tracker API v1 schemas, the Tracker client, webhook signing and verification, RFC 9457 problem errors, environment config, logging and translations. Since 0.2.0 it also defines the shared building blocks below as schemas and helpers: identity and scopes, the CloudEvents envelope, app manifests, notifications, the audit log and the project profile. The apps do not use most of them yet.
- **`@skribly/ui` gives one look.** Three layers: design tokens, plain CSS classes for any page, and React components built on React Aria for keyboard and screen reader behaviour. A later framework change replaces only the top layer. This site uses the tokens and the plain classes.

## Planned building blocks

These are designs, not features you can use in the apps today. Where `@skribly/core` 0.2.0 already defines the shapes, the status says so; a schema in the shared package is not yet a feature of an app.

| Block | Design | Status |
| --- | --- | --- |
| Identity | One account per person, organisations with the roles `admin`, `member` and `viewer`. Apps sign in through OAuth 2.1. Integrations belong to the organisation, not to whoever installed them. | Planned; users, organisations and memberships are defined in `@skribly/core` |
| Tokens | Personal tokens for people writing scripts. Apps and agents get short-lived tokens limited to chosen projects and actions, and act as a visible bot. | Planned; personal tokens exist in Skribly Tracker today, and `@skribly/core` defines scopes such as `tracker.issues:write` |
| Events | One envelope in the CloudEvents 1.0.2 format, with dot-delimited types such as `issue.updated`, the actor (person, agent or app) and what changed. The same stream feeds webhooks, the inbox, activity feeds, the audit log and search. | The envelope and the event catalogue are in `@skribly/core`; no app sends them yet. See [Events](/core/events/) |
| Webhooks | Signed the Standard Webhooks way: an id, a timestamp and a signature over both, secret rotation without downtime, and retries over about a day. | Planned; HMAC-SHA256 signing exists today |
| App manifests | Each app describes itself in one file: name, address, navigation, commands, widgets, events and permissions. | Planned; a first manifest schema and registry are in `@skribly/core` |
| Command palette | Cmd/Ctrl+K in every app, on by default, with keyboard sequences such as G then I for the inbox. | In Skribly Agent today; planned elsewhere |
| Inbox | One list of what needs you, with a reason on each item. "An agent is waiting for you" comes first. | Planned |
| Agent sessions | An agent works on an issue as a delegate and reports what it is doing: thoughts, actions, questions, answers, errors and a plan. A person stays accountable. | Planned |
| MCP | Skribly Tracker will offer a Model Context Protocol server (revision 2026-07-28) with OAuth, a read-only mode and per-project scope. | Planned; Skribly Agent already has an MCP server for driving its own sessions |
| Feature flags | One switch turns off every AI feature, and each AI feature says what it sends to a model. | Planned |

## Open standards

| Standard | Used for |
| --- | --- |
| [Model Context Protocol](https://modelcontextprotocol.io/specification/versioning), revision 2026-07-28 | Tools for agents |
| [Agent Client Protocol](https://agentclientprotocol.com/overview/introduction) | Talking to local agents in a structured way |
| [Agent Skills](https://agentskills.io/specification) | The format of agent-skills |
| [AGENTS.md](https://agents.md) | Project instructions for agents |
| [llms.txt](https://llmstxt.org/) | Docs that agents can read; this site publishes [`/llms.txt`](https://docs.skribly.pl/llms.txt) |
| [Standard Webhooks](https://www.standardwebhooks.com/) | Signing webhooks (planned) |
| [CloudEvents 1.0.2](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md) | The event envelope in `@skribly/core` |
| [OpenAPI 3.1](https://spec.openapis.org/oas/v3.1.0) | The [REST API reference](/tracker/api/) |
| [Design Tokens (DTCG)](https://www.designtokens.org/tr/2025.10/format/) | Token files of `@skribly/ui` |
| [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/) | The accessibility target |

## Stack

The shared stack planned for every app, checked on 8 November 2026:

| Layer | Choice |
| --- | --- |
| Runtime | Node.js 26 LTS (supported until 30 April 2029), TypeScript 7 |
| Web | React 19, React Router 8, Vite 8, Tailwind CSS 4, React Aria Components |
| Server | Hono 4 |
| Data | PostgreSQL 18, Drizzle ORM, Zod 4, pg-boss for queues |
| Desktop | Electron 45 |
| Docs | Astro 7 with Starlight, Pagefind search |
| Quality | Vitest, Playwright, oxlint, axe |

Skribly Agent already runs on Electron, React and Vite. `@skribly/core`, `@skribly/ui` and this site run on Node.js 26. Skribly Tracker is being rewritten on this stack.

## Principles

1. Local first; an account is a reason to share, never a gate.
2. Open standards over closed plugin systems.
3. A person stays accountable. Agents are always shown as agents, stop when told, and never log time or push code silently.
4. Time from the work, never from watching people.
5. The task lives in the repository.
6. One identity, one shell, one palette, one inbox, one look.
7. Your data can leave in open formats.
8. Public claims are checked and dated.

## Privacy and accessibility

- Skribly Agent sends no telemetry. When an app sends anything, it says what and where. See [Security](/security/).
- Skribly will not offer screenshots, keystroke counts or productivity scores of people.
- The target is WCAG 2.2 AA, and AAA wherever possible. Automated tools cannot prove full conformance, so each statement says what was tested by hand. A statement is not a declaration of conformity. See [Accessibility](/accessibility/).
