# Root-cause debugging

> The debug skill of agent-skills: finds the root cause of a bug before changing code by reproducing it, narrowing it down with targeted logs, bisecting or a minimal case, confirming the cause with evidence, then applying the smallest fix and proving it with the same reproduction.

`debug` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/debug`, `$debug` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/debug/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/debug/SKILL.md) |

## What it does

Finds the root cause of a bug before changing code by reproducing it, narrowing it down with targeted logs, bisecting or a minimal case, confirming the cause with evidence, then applying the smallest fix and proving it with the same reproduction.

## When to use it

Ask for it in your own words, for example:

- “why does this happen”
- “this is broken”
- “find the bug”
- “it worked yesterday”
- “find the root cause”
- “this test is flaky on CI”
- Also: stack traces or regressions.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/debug` |
| Codex CLI | `$debug`, or pick it from `/skills` |
| Cursor | `/debug` in Agent chat |
| Gemini CLI | `/debug` |
| OpenCode | `/debug` |
| GitHub Copilot | `/debug` in VS Code chat or Copilot CLI |
| Devin | `/debug` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`
- `repro-loop.mjs`: `node scripts/repro-loop.mjs run|watch [--name n] [--confirm "question"] [--timeout s] [--max-runs n] -- <cmd> [args]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable debug` removes it from a project, `project enable debug` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 111 | 819 | 950 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
