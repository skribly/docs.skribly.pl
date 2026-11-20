# Plan a work package

> The plan-step skill of agent-skills: writes or expands a plan work package (steps/F5.md style) in the exact shape of the plan's agents.md section 23.6 - the headings in order, tasks with Files, Do and Check, Owner actions, Verification, Done when, Risks and fallbacks - and keeps task ids and section-number references stable so later waves are expanded in one consistent shape.

`plan-step` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/plan-step`, `$plan-step` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/plan-step/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/plan-step/SKILL.md) |

## What it does

Writes or expands a plan work package (`steps/F5.md` style) in the exact shape of the plan's `agents.md` section 23.6 - the headings in order, tasks with Files, Do and Check, Owner actions, Verification, Done when, Risks and fallbacks - and keeps task ids and section-number references stable so later waves are expanded in one consistent shape. It writes a plan; it does not run a step.

## When to use it

Ask for it in your own words, for example:

- “write the work package for F9”
- “expand wave W3 into tasks”
- “add a task to F5”
- “plan this step”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/plan-step` |
| Codex CLI | `$plan-step`, or pick it from `/skills` |
| Cursor | `/plan-step` in Agent chat |
| Gemini CLI | `/plan-step` |
| OpenCode | `/plan-step` |
| GitHub Copilot | `/plan-step` in VS Code chat or Copilot CLI |
| Devin | `/plan-step` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `plan-step.mjs`: `node scripts/plan-step.mjs template <id> "<name>" [--out <file>] | add-task <file> <plan|build|review|mech> "<title>"`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable plan-step` removes it from a project, `project enable plan-step` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 133 | 1147 | 1350 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
