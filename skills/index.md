# agent-skills

> 35 portable skills that take AI coding agents from a tracker ticket to a reviewed, tested commit - cheap on tokens, safe by default, with no AI co-author trailers.

**agent-skills** is a library of short, tested procedures ("skills") for AI coding agents, plus a zero-dependency installer that puts them where each agent looks. It supports Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot and Devin.

Skills cover the whole loop: pick up a Redmine, Jira, GitHub, GitLab, Linear or Skribly Tracker issue, plan, branch, implement in stages, test, review, audit and commit. They also cover the specialist jobs around it: Core Web Vitals, load tests, safe migrations, Docker, CI, dependency upgrades, translations and release notes. A group of skills also covers the work around the code: writing a plan as work packages and running a work package task by task, decision records, a release checklist, the check that docs and translations move with a change, and the design review of a page.

![The skills catalogue in Skribly Agent: cards for each skill with its command, group and the agents it is installed for](../../../assets/screens/skills-catalog.webp)

## Principles

- **Scripts do the mechanical work.** Small Node scripts hand the model a few lines instead of megabytes: a 455 KB Lighthouse report becomes 754 bytes, a 27 KB test log 86 bytes.
- **Every risky step waits for your OK.** Commits, comments on tracker issues, screenshots and long test runs are proposed, not done silently.
- **Adapts to each project.** The `project` skill detects the stack, the commands and the commit conventions into `.skribly/project.json`, and every skill reads that profile first. Values you set by hand are never overwritten.
- **Learns from the work.** At the end of `task`, `test-loop`, `review` and `debug` the agent proposes one confirmed lesson; with your OK, `learn` keeps it in `.skribly/lessons.md` for the next run. Lessons that look like secrets are refused.
- **Commits look like yours.** Messages follow the project's convention, and no skill adds a `Co-Authored-By` or "Generated with" trailer.
- **Standalone.** It needs nothing else from Skribly and works in any repository. Skribly Agent is one optional place that uses it.

## Facts

| | |
| --- | --- |
| Version | 0.2.14 (11 November 2026) |
| Skills | 35, in the shared [Agent Skills](https://agentskills.io/specification) format |
| Agents | 8: Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot, Devin |
| Trackers | Redmine, Jira Cloud and Server/Data Center, GitHub, GitLab, Linear, Skribly Tracker |
| Requirements | `git` and Node.js 20 or newer |
| Runtime dependencies | None |
| Licence | MIT |

## How a skill is built

Every skill is a folder `skills/<name>/`:

```text
skills/<name>/
  SKILL.md       at most 110 lines, read when the skill runs
  reference/     extra detail, read only when a step needs it
  scripts/       Node scripts with no dependencies that do the mechanical work
  templates/     files the skill fills in
```

An agent keeps only each skill's name and description in its context, one line per skill. The rest loads on demand.

## How it saves tokens

1. **Load on demand.** `SKILL.md` loads when used, `reference/` only when a step needs it. The 110-line limit is enforced in CI.
2. **Scripts instead of the model.** Measured on real projects:

   | Task | Raw input | Script output | Saved |
   | --- | ---: | ---: | ---: |
   | Lighthouse report | 455,534 bytes | 754 bytes | 99.8% |
   | Test run log, 86 tests | 27,098 bytes | 86 bytes | 99.7% |
   | `npm audit --json` on a 300-package app | 20,555 bytes | 2,126 bytes | 90% |
   | `git log -60` to learn the commit style | 7,415 bytes | 739 bytes | 90% |
   | GitHub issue with comments | 8,178 bytes | 1,018 bytes | 88% |

3. **Ask before expensive steps.** Screenshots, Lighthouse runs and full suites need your OK.
4. **Restart instead of dragging transcripts.** `STATE.md` (about 30 lines) holds the goal, what was done and one next step, so you can `/clear` after each stage and resume, in the same or another agent.
5. **Working rules.** The `token-saver` skill gives every agent the same habits: search before reading, read line ranges, never open lock files or build output.

The full measurements are on [Token saving](/agent/token-saving/).

## Read next

- [Install](/skills/install/): user scope or project scope, updates, Windows.
- [Skills catalog](/skills/catalog/): every skill and when to use it.
- [Supported agents](/skills/agents/): where each agent gets the skills, and the files `agent-skills agent-files` generates from `AGENTS.md`.
- [Trackers](/skills/trackers/): credentials for each tracker.
- [Commits without AI trailers](/skills/commits/): the three layers that keep commits yours.
