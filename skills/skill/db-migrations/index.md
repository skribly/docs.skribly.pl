# Safe database migrations

> The db-migrations skill of agent-skills: reviews and writes safe database migrations for Django, Laravel, Prisma, Alembic, Flyway and Rails, catching table locks, NOT NULL without defaults, destructive drops and renames, type changes, unvalidated foreign keys, unbatched backfills and missing rollbacks, and rewrites them into zero-downtime expand and contract steps.

`db-migrations` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/db-migrations`, `$db-migrations` in Codex |
| Group | Quality and tests |
| Stacks | `database` |
| Release | agent-skills 0.3.0 |
| Source | [skills/db-migrations/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/db-migrations/SKILL.md) |

## What it does

Reviews and writes safe database migrations for Django, Laravel, Prisma, Alembic, Flyway and Rails, catching table locks, NOT NULL without defaults, destructive drops and renames, type changes, unvalidated foreign keys, unbatched backfills and missing rollbacks, and rewrites them into zero-downtime expand and contract steps.

## When to use it

Ask for it in your own words, for example:

- “review this migration”
- “is this migration safe”
- “add a column to a big table”
- “zero-downtime migration”
- “rename a column safely”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/db-migrations` |
| Codex CLI | `$db-migrations`, or pick it from `/skills` |
| Cursor | `/db-migrations` in Agent chat |
| Gemini CLI | `/db-migrations` |
| OpenCode | `/db-migrations` |
| GitHub Copilot | `/db-migrations` in VS Code chat or Copilot CLI |
| Devin | `/db-migrations` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `migration-lint.mjs`: `node scripts/migration-lint.mjs [files...] [--base origin/main] [--all] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Where it fits

It fits projects with the stack tag `database`, and `agent-skills init` installs it only there.
`agent-skills project disable db-migrations` removes it from a project, `project enable db-migrations` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 130 | 890 | 1050 | 806 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
