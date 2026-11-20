# Focused test loop

> The test-loop skill of agent-skills: runs only the checks affected by the current change (lint, types, related tests), fixes failures in a capped loop of at most 3 attempts, and reports compact failure summaries instead of full logs.

`test-loop` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/test-loop`, `$test-loop` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/test-loop/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/test-loop/SKILL.md) |

## What it does

Runs only the checks affected by the current change (lint, types, related tests), fixes failures in a capped loop of at most 3 attempts, and reports compact failure summaries instead of full logs. Stops and asks when the same failure repeats, and never edits, skips or weakens tests just to make them pass.

## When to use it

Ask for it in your own words, for example:

- “run the tests”
- “make the checks pass”
- “fix the failing tests”
- “is it green?”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/test-loop` |
| Codex CLI | `$test-loop`, or pick it from `/skills` |
| Cursor | `/test-loop` in Agent chat |
| Gemini CLI | `/test-loop` |
| OpenCode | `/test-loop` |
| GitHub Copilot | `/test-loop` in VS Code chat or Copilot CLI |
| Devin | `/test-loop` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`
- `related.mjs`: `node scripts/related.mjs [--base <branch>] [--json]`
- `squeeze.mjs`: `node scripts/squeeze.mjs [--context 8] [--max 12] -- <command ...>`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable test-loop` removes it from a project, `project enable test-loop` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 109 | 805 | 950 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
