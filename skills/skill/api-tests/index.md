# API contract tests

> The api-tests skill of agent-skills: writes and runs contract and integration tests for REST and GraphQL APIs, driven by the OpenAPI spec when there is one (Schemathesis, Dredd, Hurl, Postman with newman) or by the framework's own HTTP test client, covering auth flows, validation and error cases, pagination and idempotency.

`api-tests` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/api-tests`, `$api-tests` in Codex |
| Group | Quality and tests |
| Stacks | `backend` |
| Release | agent-skills 0.3.0 |
| Source | [skills/api-tests/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/api-tests/SKILL.md) |

## What it does

Writes and runs contract and integration tests for REST and GraphQL APIs, driven by the OpenAPI spec when there is one (Schemathesis, Dredd, Hurl, Postman with newman) or by the framework's own HTTP test client, covering auth flows, validation and error cases, pagination and idempotency.

## When to use it

Ask for it in your own words, for example:

- “test the API”
- “contract tests”
- “check the endpoints against the OpenAPI spec”
- “API regression tests”
- Also: GraphQL resolver tests.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/api-tests` |
| Codex CLI | `$api-tests`, or pick it from `/skills` |
| Cursor | `/api-tests` in Agent chat |
| Gemini CLI | `/api-tests` |
| OpenCode | `/api-tests` |
| GitHub Copilot | `/api-tests` in VS Code chat or Copilot CLI |
| Devin | `/api-tests` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `openapi-map.mjs`: `node scripts/openapi-map.mjs <spec.yaml|spec.json|URL> [--grep text] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Where it fits

It fits projects with the stack tag `backend`, and `agent-skills init` installs it only there.
`agent-skills project disable api-tests` removes it from a project, `project enable api-tests` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 116 | 886 | 1050 | 728 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
