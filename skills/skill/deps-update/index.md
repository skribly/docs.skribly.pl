# Safe dependency upgrades

> The deps-update skill of agent-skills: upgrades dependencies safely for npm, pnpm, composer, pip, poetry and uv, listing outdated packages grouped by risk, reading changelogs and breaking changes for major bumps, and upgrading one group at a time with tests after each step and a clean commit per group.

`deps-update` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/deps-update`, `$deps-update` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/deps-update/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/deps-update/SKILL.md) |

## What it does

Upgrades dependencies safely for npm, pnpm, composer, pip, poetry and uv, listing outdated packages grouped by risk, reading changelogs and breaking changes for major bumps, and upgrading one group at a time with tests after each step and a clean commit per group.

## When to use it

Ask for it in your own words, for example:

- “update dependencies”
- “upgrade packages”
- “bump Laravel/Django/React”
- “fix outdated packages”
- “dependabot is red”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/deps-update` |
| Codex CLI | `$deps-update`, or pick it from `/skills` |
| Cursor | `/deps-update` in Agent chat |
| Gemini CLI | `/deps-update` |
| OpenCode | `/deps-update` |
| GitHub Copilot | `/deps-update` in VS Code chat or Copilot CLI |
| Devin | `/deps-update` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `dependabot.mjs`: `node scripts/dependabot.mjs [dir] [--day monday] [--time 05:00] [--timezone Europe/Warsaw] [--limit 5] [--write]`
- `outdated.mjs`: `node scripts/outdated.mjs [dir] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable deps-update` removes it from a project, `project enable deps-update` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 109 | 904 | 1000 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
