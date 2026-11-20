# Project lessons

> The learn skill of agent-skills: records a confirmed lesson about the current project (a command that works, a convention the team follows, a pitfall that cost time) in .skribly/lessons.md under a scope (All, CI or one module) with the date and the skill it came from, only after the user agrees, so every skill starts smarter next time.

`learn` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/learn`, `$learn` in Codex |
| Group | Meta |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/learn/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/learn/SKILL.md) |

## What it does

Records a confirmed lesson about the current project (a command that works, a convention the team follows, a pitfall that cost time) in `.skribly/lessons.md` under a scope (All, CI or one module) with the date and the skill it came from, only after the user agrees, so every skill starts smarter next time. Also lists, prunes and promotes lessons into `.skribly/project.json`, and prints only the lessons for the files a diff changes. Never stores secrets.

## When to use it

Ask for it in your own words, for example:

- “remember this”
- “note that for next time”
- “what have we learned about this project”
- Also: at the end of task, test-loop, review and debug.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/learn` |
| Codex CLI | `$learn`, or pick it from `/skills` |
| Cursor | `/learn` in Agent chat |
| Gemini CLI | `/learn` |
| OpenCode | `/learn` |
| GitHub Copilot | `/learn` in VS Code chat or Copilot CLI |
| Devin | `/learn` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable learn` removes it from a project, `project enable learn` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 157 | 883 | 1050 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
