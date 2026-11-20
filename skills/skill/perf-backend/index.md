# Backend performance

> The perf-backend skill of agent-skills: finds and fixes backend performance problems with evidence, covering N+1 queries (Django assertNumQueries or debug toolbar, Laravel query log or preventLazyLoading, ORM query logging), missing or wrong indexes read from EXPLAIN, repeated work that needs caching, and CPU hot spots found with a profiler, then proves the gain with a before and after measurement.

`perf-backend` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/perf-backend`, `$perf-backend` in Codex |
| Group | Quality and tests |
| Stacks | `backend` |
| Release | agent-skills 0.3.0 |
| Source | [skills/perf-backend/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/perf-backend/SKILL.md) |

## What it does

Finds and fixes backend performance problems with evidence, covering N+1 queries (Django assertNumQueries or debug toolbar, Laravel query log or preventLazyLoading, ORM query logging), missing or wrong indexes read from EXPLAIN, repeated work that needs caching, and CPU hot spots found with a profiler, then proves the gain with a before and after measurement.

## When to use it

Ask for it in your own words, for example:

- “this endpoint is slow”
- “too many queries”
- “N+1”
- “add an index”
- “optimise the API”
- “profile the backend”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/perf-backend` |
| Codex CLI | `$perf-backend`, or pick it from `/skills` |
| Cursor | `/perf-backend` in Agent chat |
| Gemini CLI | `/perf-backend` |
| OpenCode | `/perf-backend` |
| GitHub Copilot | `/perf-backend` in VS Code chat or Copilot CLI |
| Devin | `/perf-backend` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `query-log.mjs`: `node scripts/query-log.mjs [log-file] [--min 5] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Where it fits

It fits projects with the stack tag `backend`, and `agent-skills init` installs it only there.
`agent-skills project disable perf-backend` removes it from a project, `project enable perf-backend` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 132 | 928 | 1100 | 805 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
