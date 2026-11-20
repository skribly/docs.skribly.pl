# Implement-ready spec

> The spec skill of agent-skills: writes an implement-ready spec for one task as .tasks/specs/SPEC-slug.md - goal, scope in and out, the files and contracts it touches, and phases that each leave the project working and end with an exact check - from a plan task, a tracker issue or a request, then waits for approval.

`spec` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/spec`, `$spec` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/spec/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/spec/SKILL.md) |

## What it does

Writes an implement-ready spec for one task as `.tasks/specs/SPEC-slug.md` - goal, scope in and out, the files and contracts it touches, and phases that each leave the project working and end with an exact check - from a plan task, a tracker issue or a request, then waits for approval. The plan skill hands its tasks here and the task skill works an approved spec phase by phase.

## When to use it

Ask for it in your own words, for example:

- “write a spec”
- “spec this task”
- “cut task 2 of the plan into a spec”
- “how exactly do we build this”

Not for “implementing an approved spec” (the task skill does) or “a Playwright spec”.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/spec` |
| Codex CLI | `$spec`, or pick it from `/skills` |
| Cursor | `/spec` in Agent chat |
| Gemini CLI | `/spec` |
| OpenCode | `/spec` |
| GitHub Copilot | `/spec` in VS Code chat or Copilot CLI |
| Devin | `/spec` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `spec.mjs`: `node scripts/spec.mjs new <slug> [--title <text>] [--plan <ref>] [--source <ref>] [--project <dir>]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable spec` removes it from a project, `project enable spec` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 150 | 1132 | 1300 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
