# Backend tests

> The backend-tests skill of agent-skills: detects the backend stack and writes or runs tests for the changed code, covering pytest with Django TestCase or DRF APIClient, Laravel PHPUnit or Pest, Node with Vitest or Jest plus supertest, Go test and Gradle or Maven, with an isolated test database, factories, transactional isolation, mocked external HTTP and coverage of the changed lines only.

`backend-tests` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/backend-tests`, `$backend-tests` in Codex |
| Group | Quality and tests |
| Stacks | `backend` |
| Release | agent-skills 0.3.0 |
| Source | [skills/backend-tests/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/backend-tests/SKILL.md) |

## What it does

Detects the backend stack and writes or runs tests for the changed code, covering pytest with Django TestCase or DRF APIClient, Laravel PHPUnit or Pest, Node with Vitest or Jest plus supertest, Go test and Gradle or Maven, with an isolated test database, factories, transactional isolation, mocked external HTTP and coverage of the changed lines only.

## When to use it

Ask for it in your own words, for example:

- “write tests for this”
- “add backend/unit/integration tests”
- “cover this endpoint”
- “set up the test database”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/backend-tests` |
| Codex CLI | `$backend-tests`, or pick it from `/skills` |
| Cursor | `/backend-tests` in Agent chat |
| Gemini CLI | `/backend-tests` |
| OpenCode | `/backend-tests` |
| GitHub Copilot | `/backend-tests` in VS Code chat or Copilot CLI |
| Devin | `/backend-tests` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `changed-coverage.mjs`: `node scripts/changed-coverage.mjs <coverage.xml|lcov.info> [--base origin/main] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Where it fits

It fits projects with the stack tag `backend`, and `agent-skills init` installs it only there.
`agent-skills project disable backend-tests` removes it from a project, `project enable backend-tests` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 131 | 887 | 1050 | 901 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
