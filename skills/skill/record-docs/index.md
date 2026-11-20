# Record how a feature is built

> The record-docs skill of agent-skills: writes or updates the as-built documentation of an important feature or decision after it works - what it does, how it is built (the modules, the data, the flow), the decisions and their reasons, how to run and test it, and its limits, in the project documentation folder, so the next person or agent reads one page instead of the code.

`record-docs` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/record-docs`, `$record-docs` in Codex |
| Group | Docs |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/record-docs/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/record-docs/SKILL.md) |

## What it does

Writes or updates the as-built documentation of an important feature or decision after it works - what it does, how it is built (the modules, the data, the flow), the decisions and their reasons, how to run and test it, and its limits, in the project documentation folder, so the next person or agent reads one page instead of the code. Short, factual, from the code as it is.

## When to use it

Ask for it in your own words, for example:

- “document this feature”
- “write down how this works”
- “record the decisions and how to test it”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/record-docs` |
| Codex CLI | `$record-docs`, or pick it from `/skills` |
| Cursor | `/record-docs` in Agent chat |
| Gemini CLI | `/record-docs` |
| OpenCode | `/record-docs` |
| GitHub Copilot | `/record-docs` in VS Code chat or Copilot CLI |
| Devin | `/record-docs` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable record-docs` removes it from a project, `project enable record-docs` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 132 | 449 | 550 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
