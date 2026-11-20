# Implementation report

> The report skill of agent-skills: writes a report of what was delivered for a task or feature, for the person who asked for it - each requirement of the spec or issue mapped to where it is in the code, how it was checked (the command or test and its result), what is not done and why, and the risks left.

`report` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/report`, `$report` in Codex |
| Group | Docs |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/report/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/report/SKILL.md) |

## What it does

Writes a report of what was delivered for a task or feature, for the person who asked for it - each requirement of the spec or issue mapped to where it is in the code, how it was checked (the command or test and its result), what is not done and why, and the risks left. Built from the actual diff and checks, never from the plan alone.

## When to use it

Ask for it in your own words, for example:

- “write a delivery report”
- “what did we deliver”
- “summary for the PM”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/report` |
| Codex CLI | `$report`, or pick it from `/skills` |
| Cursor | `/report` in Agent chat |
| Gemini CLI | `/report` |
| OpenCode | `/report` |
| GitHub Copilot | `/report` in VS Code chat or Copilot CLI |
| Devin | `/report` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable report` removes it from a project, `project enable report` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 112 | 419 | 500 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
