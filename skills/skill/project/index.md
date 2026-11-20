# Project profile

> The project skill of agent-skills: detects how the current project is built and worked on (stack, languages, frameworks, package manager, install, dev, build, test, lint, typecheck and format commands, commit style and language, base branch, CI and containers) and keeps it in .skribly/project.json, the Skribly project profile every other skill reads first.

`project` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/project`, `$project` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/project/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/project/SKILL.md) |

## What it does

Detects how the current project is built and worked on (stack, languages, frameworks, package manager, install, dev, build, test, lint, typecheck and format commands, commit style and language, base branch, CI and containers) and keeps it in `.skribly/project.json`, the Skribly project profile every other skill reads first. Never overwrites values a person set by hand.

## When to use it

Ask for it in your own words, for example:

- “detect the project”
- “set up the project profile”
- “which commands does this repo use”
- Also: when another skill finds no `.skribly/project.json`.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/project` |
| Codex CLI | `$project`, or pick it from `/skills` |
| Cursor | `/project` in Agent chat |
| Gemini CLI | `/project` |
| OpenCode | `/project` |
| GitHub Copilot | `/project` in VS Code chat or Copilot CLI |
| Devin | `/project` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `project.mjs`: `node scripts/project.mjs [dir] [--dry-run] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`
- `tasks-folders.mjs`: `node scripts/tasks-folders.mjs [--project <dir>] [--dry-run]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable project` removes it from a project, `project enable project` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 138 | 771 | 900 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
