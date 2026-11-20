# Test guide

> The guide-tests skill of agent-skills: decides what deserves a test and where it goes - the three levels (unit with mocks at the boundary, integration with the real framework and database, end to end against the running app), one folder per domain under tests/, and the switch that turns each level on - read from the tests the project already has by a script that maps them by level and domain.

`guide-tests` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/guide-tests`, `$guide-tests` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/guide-tests/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/guide-tests/SKILL.md) |

## What it does

Decides what deserves a test and where it goes - the three levels (unit with mocks at the boundary, integration with the real framework and database, end to end against the running app), one folder per domain under tests/, and the switch that turns each level on - read from the tests the project already has by a script that maps them by level and domain.

## When to use it

Ask for it in your own words, for example:

- “what should I test”
- “where does this test go”
- “unit or integration”
- “how are tests organised here”
- Also: before writing tests in the task, spec and test-loop skills.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/guide-tests` |
| Codex CLI | `$guide-tests`, or pick it from `/skills` |
| Cursor | `/guide-tests` in Agent chat |
| Gemini CLI | `/guide-tests` |
| OpenCode | `/guide-tests` |
| GitHub Copilot | `/guide-tests` in VS Code chat or Copilot CLI |
| Devin | `/guide-tests` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `test-map.mjs`: `node scripts/test-map.mjs [--project <dir>] [--json]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable guide-tests` removes it from a project, `project enable guide-tests` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 145 | 1245 | 1400 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
