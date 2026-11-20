# Task estimation

> The estimate skill of agent-skills: estimates a task or feature without changing code, breaking it into deliverables with optimistic, likely and pessimistic hours, a PERT total and range, plus assumptions, risks and questions ready to send to whoever asked for the work.

`estimate` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/estimate`, `$estimate` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/estimate/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/estimate/SKILL.md) |

## What it does

Estimates a task or feature without changing code, breaking it into deliverables with optimistic, likely and pessimistic hours, a PERT total and range, plus assumptions, risks and questions ready to send to whoever asked for the work.

## When to use it

Ask for it in your own words, for example:

- “how long will this take”
- “estimate this ticket”
- “ile to zajmie”
- “oszacuj”
- “size this work”
- “how many days”
- Also: sizing work before planning.

Not for making a test suite or a build faster.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/estimate` |
| Codex CLI | `$estimate`, or pick it from `/skills` |
| Cursor | `/estimate` in Agent chat |
| Gemini CLI | `/estimate` |
| OpenCode | `/estimate` |
| GitHub Copilot | `/estimate` in VS Code chat or Copilot CLI |
| Devin | `/estimate` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable estimate` removes it from a project, `project enable estimate` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 117 | 660 | 750 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
