# Run a work package

> The run-step skill of agent-skills: carries out one plan work package (steps/F5.md style) task by task by the step protocol of the plan's agents.md section 23.3 - read the step, one task at a time in order, a short branch from develop per task, run its check, a Conventional Commit with explicit paths, merge into develop with --no-ff, push, tick the box; main only after the audit.

`run-step` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/run-step`, `$run-step` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/run-step/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/run-step/SKILL.md) |

## What it does

Carries out one plan work package (`steps/F5.md` style) task by task by the step protocol of the plan's `agents.md` section 23.3 - read the step, one task at a time in order, a short branch from develop per task, run its check, a Conventional Commit with explicit paths, merge into develop with --no-ff, push, tick the box; main only after the audit. Owner-only actions are recorded as blocked, never attempted.

## When to use it

Ask for it in your own words, for example:

- “run step F5”
- “do the next task of F5”
- “execute this work package”
- “continue the step”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/run-step` |
| Codex CLI | `$run-step`, or pick it from `/skills` |
| Cursor | `/run-step` in Agent chat |
| Gemini CLI | `/run-step` |
| OpenCode | `/run-step` |
| GitHub Copilot | `/run-step` in VS Code chat or Copilot CLI |
| Devin | `/run-step` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `run-step.mjs`: `node scripts/run-step.mjs protocol | tasks <file> | next <file> | branch <type> <slug> | guard [--repo <dir>]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable run-step` removes it from a project, `project enable run-step` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 136 | 1354 | 1600 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
