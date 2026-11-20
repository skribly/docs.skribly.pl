# Small improvements, live

> The improve skill of agent-skills: runs a short, interactive session of small improvements after a feature works - the user names what bothers them (spacing, a label, a slow step, an edge case), the agent fixes one item at a time with the smallest change, shows the result and waits for the next note.

`improve` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/improve`, `$improve` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/improve/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/improve/SKILL.md) |

## What it does

Runs a short, interactive session of small improvements after a feature works - the user names what bothers them (spacing, a label, a slow step, an edge case), the agent fixes one item at a time with the smallest change, shows the result and waits for the next note. Nothing outside the named item changes, and every item is checked before the next.

## When to use it

Ask for it in your own words, for example:

- “let us polish this”
- “small fixes”
- “tweak it live”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/improve` |
| Codex CLI | `$improve`, or pick it from `/skills` |
| Cursor | `/improve` in Agent chat |
| Gemini CLI | `/improve` |
| OpenCode | `/improve` |
| GitHub Copilot | `/improve` in VS Code chat or Copilot CLI |
| Devin | `/improve` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable improve` removes it from a project, `project enable improve` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 111 | 432 | 500 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
