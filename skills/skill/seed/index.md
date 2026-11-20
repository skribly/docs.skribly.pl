# Module seeds

> The seed skill of agent-skills: writes or extends the deterministic seeds of a module in an app made from the Skribly app template (seed:minimal and seed:demo, fixed ids and a fixed clock, demo rows in Polish and English for the demo organisations, written through the tenant transaction so row-level security holds), by reading the app's own reference seed, its demo identity and the module's schema at run time instead of carrying a copy.

`seed` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/seed`, `$seed` in Codex |
| Group | Workflow |
| Stacks | `skribly-app` |
| Release | agent-skills 0.3.0 |
| Source | [skills/seed/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/seed/SKILL.md) |

## What it does

Writes or extends the deterministic seeds of a module in an app made from the Skribly app template (seed:minimal and seed:demo, fixed ids and a fixed clock, demo rows in Polish and English for the demo organisations, written through the tenant transaction so row-level security holds), by reading the app's own reference seed, its demo identity and the module's schema at run time instead of carrying a copy.

## When to use it

Ask for it in your own words, for example:

- “seed this module”
- “add demo data”
- “write the seeders”
- “extend the demo seed”
- “dane demo”
- “dodaj seedy”
- “seed:demo”

Not for “seeding a random number generator”.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/seed` |
| Codex CLI | `$seed`, or pick it from `/skills` |
| Cursor | `/seed` in Agent chat |
| Gemini CLI | `/seed` |
| OpenCode | `/seed` |
| GitHub Copilot | `/seed` in VS Code chat or Copilot CLI |
| Devin | `/seed` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `seed.mjs`: `node scripts/seed.mjs inspect|write|check [--module <m>] [--rows <file>] [--project <dir>] [--reference <m>]`

## Where it fits

It fits projects with the stack tag `skribly-app`, and `agent-skills init` installs it only there.
`agent-skills project disable seed` removes it from a project, `project enable seed` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 152 | 1232 | 1450 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
