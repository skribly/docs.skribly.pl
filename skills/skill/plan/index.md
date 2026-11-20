# Plan a large initiative

> The plan skill of agent-skills: turns a large or vague initiative (an epic, a new module, a migration) into a plan file .tasks/plans/SLUG.md with the goal, what is out of scope, the risks, and an ordered list of small tasks, each with what it delivers and how it is checked, so every task can then run through the task skill on its own.

`plan` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/plan`, `$plan` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/plan/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/plan/SKILL.md) |

## What it does

Turns a large or vague initiative (an epic, a new module, a migration) into a plan file `.tasks/plans/SLUG.md` with the goal, what is out of scope, the risks, and an ordered list of small tasks, each with what it delivers and how it is checked, so every task can then run through the task skill on its own. Small tasks skip this.

## When to use it

Ask for it in your own words, for example:

- “plan this feature”
- “break this epic down”
- “how do we approach X”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/plan` |
| Codex CLI | `$plan`, or pick it from `/skills` |
| Cursor | `/plan` in Agent chat |
| Gemini CLI | `/plan` |
| OpenCode | `/plan` |
| GitHub Copilot | `/plan` in VS Code chat or Copilot CLI |
| Devin | `/plan` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable plan` removes it from a project, `project enable plan` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 107 | 630 | 750 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
