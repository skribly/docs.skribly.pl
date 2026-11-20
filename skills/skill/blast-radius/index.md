# What a change breaks outside the diff

> The blast-radius skill of agent-skills: finds what a change can break outside its own diff before it is committed or merged - every caller, importer, route, job, migration and configuration that depends on what changed, the one assumption the change relies on, and a quick proof of that assumption by running code (a test, a script, a query) instead of reading.

`blast-radius` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/blast-radius`, `$blast-radius` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/blast-radius/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/blast-radius/SKILL.md) |

## What it does

Finds what a change can break outside its own diff before it is committed or merged - every caller, importer, route, job, migration and configuration that depends on what changed, the one assumption the change relies on, and a quick proof of that assumption by running code (a test, a script, a query) instead of reading. Reports the risk in a few lines.

## When to use it

Ask for it in your own words, for example:

- “what could this break”
- “is this change safe”
- Also: before a risky commit.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/blast-radius` |
| Codex CLI | `$blast-radius`, or pick it from `/skills` |
| Cursor | `/blast-radius` in Agent chat |
| Gemini CLI | `/blast-radius` |
| OpenCode | `/blast-radius` |
| GitHub Copilot | `/blast-radius` in VS Code chat or Copilot CLI |
| Devin | `/blast-radius` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable blast-radius` removes it from a project, `project enable blast-radius` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 120 | 500 | 600 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
