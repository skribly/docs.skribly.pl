# Walk a feature in a headless browser

> The e2e-check skill of agent-skills: walks a finished feature through a headless browser the way a user would - one scenario per acceptance criterion, against the app that already runs, with Playwright when the project has it - and reports each scenario as passed or failed with a screenshot per step.

`e2e-check` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/e2e-check`, `$e2e-check` in Codex |
| Group | Quality and tests |
| Stacks | `web` |
| Release | In development, ships in the next release |
| Source | [skills/e2e-check/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/e2e-check/SKILL.md) |

## What it does

Walks a finished feature through a headless browser the way a user would - one scenario per acceptance criterion, against the app that already runs, with Playwright when the project has it - and reports each scenario as passed or failed with a screenshot per step. Never opens a visible browser and never starts a second copy of a running app.

## When to use it

Ask for it in your own words, for example:

- “click through the feature”
- “walk it in the browser”
- “check the flow end to end”
- Also: after verify and before a pull request of a UI change.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/e2e-check` |
| Codex CLI | `$e2e-check`, or pick it from `/skills` |
| Cursor | `/e2e-check` in Agent chat |
| Gemini CLI | `/e2e-check` |
| OpenCode | `/e2e-check` |
| GitHub Copilot | `/e2e-check` in VS Code chat or Copilot CLI |
| Devin | `/e2e-check` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `e2e-env.mjs`: `node scripts/e2e-env.mjs [--url <http://localhost:port>] [--project <dir>] [--json]`

## Where it fits

It fits projects with the stack tag `web`, and `agent-skills init` installs it only there.
`agent-skills project disable e2e-check` removes it from a project, `project enable e2e-check` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 132 | 1081 | 1250 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
