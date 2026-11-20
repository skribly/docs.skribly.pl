# Major upgrade by the migration guide

> The upgrade skill of agent-skills: moves a project to a new major version of its framework or runtime (Next.js, React, Angular, Laravel, Django, Rails, Spring Boot, Node, PHP, Python) with the target version's own migration guide, one area at a time, each with a failing test first and a check with the person before the next area.

`upgrade` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/upgrade`, `$upgrade` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/upgrade/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/upgrade/SKILL.md) |

## What it does

Moves a project to a new major version of its framework or runtime (Next.js, React, Angular, Laravel, Django, Rails, Spring Boot, Node, PHP, Python) with the target version's own migration guide, one area at a time, each with a failing test first and a check with the person before the next area.

## When to use it

Ask for it in your own words, for example:

- “upgrade to Next.js 16”
- “migrate to Laravel 12”
- “move us to Django 5”
- “major version upgrade”
- “follow the migration guide”

Not for routine patch and minor bumps (deps-update).

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/upgrade` |
| Codex CLI | `$upgrade`, or pick it from `/skills` |
| Cursor | `/upgrade` in Agent chat |
| Gemini CLI | `/upgrade` |
| OpenCode | `/upgrade` |
| GitHub Copilot | `/upgrade` in VS Code chat or Copilot CLI |
| Devin | `/upgrade` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable upgrade` removes it from a project, `project enable upgrade` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 130 | 935 | 1100 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
