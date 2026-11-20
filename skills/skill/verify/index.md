# Verify a change in the running app

> The verify skill of agent-skills: proves a change works in the running application, not only in unit tests - starts the project the way it really runs (its own dev or Docker command from the profile), waits until it answers, exercises the changed path with a smoke request or a headless browser, runs lint, types and the related tests, and reports pass or fail per step in a few lines.

`verify` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/verify`, `$verify` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/verify/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/verify/SKILL.md) |

## What it does

Proves a change works in the running application, not only in unit tests - starts the project the way it really runs (its own dev or Docker command from the profile), waits until it answers, exercises the changed path with a smoke request or a headless browser, runs lint, types and the related tests, and reports pass or fail per step in a few lines. Never opens a visible browser and never starts a second copy of an app that already runs.

## When to use it

Ask for it in your own words, for example:

- “does it actually work”
- “smoke test this”
- “run the checks”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/verify` |
| Codex CLI | `$verify`, or pick it from `/skills` |
| Cursor | `/verify` in Agent chat |
| Gemini CLI | `/verify` |
| OpenCode | `/verify` |
| GitHub Copilot | `/verify` in VS Code chat or Copilot CLI |
| Devin | `/verify` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `running.mjs`: `node scripts/running.mjs [dir] [--log [lines]] [--json]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable verify` removes it from a project, `project enable verify` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 135 | 669 | 700 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
