# Playwright end-to-end tests

> The e2e-tests skill of agent-skills: writes and runs Playwright end-to-end tests for the changed user flows, running only the affected specs, keeping traces on failure, condensing the JSON report, and triaging flaky specs to a root cause instead of adding sleeps or retries.

`e2e-tests` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/e2e-tests`, `$e2e-tests` in Codex |
| Group | Quality and tests |
| Stacks | `web` |
| Release | agent-skills 0.3.0 |
| Source | [skills/e2e-tests/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/e2e-tests/SKILL.md) |

## What it does

Writes and runs Playwright end-to-end tests for the changed user flows, running only the affected specs, keeping traces on failure, condensing the JSON report, and triaging flaky specs to a root cause instead of adding sleeps or retries.

## When to use it

Ask for it in your own words, for example:

- “write an e2e test”
- “Playwright test for this flow”
- “run the e2e tests”
- “this Playwright test is flaky”
- “fix the failing Playwright spec”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/e2e-tests` |
| Codex CLI | `$e2e-tests`, or pick it from `/skills` |
| Cursor | `/e2e-tests` in Agent chat |
| Gemini CLI | `/e2e-tests` |
| OpenCode | `/e2e-tests` |
| GitHub Copilot | `/e2e-tests` in VS Code chat or Copilot CLI |
| Devin | `/e2e-tests` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `affected-specs.mjs`: `node scripts/affected-specs.mjs [--base origin/main] [--json]`
- `pw-report.mjs`: `node scripts/pw-report.mjs [pw-report.json] [--max 10] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Where it fits

It fits projects with the stack tag `web`, and `agent-skills init` installs it only there.
`agent-skills project disable e2e-tests` removes it from a project, `project enable e2e-tests` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 107 | 813 | 950 | 543 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
