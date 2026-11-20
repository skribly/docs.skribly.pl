# CI pipeline setup

> The ci-setup skill of agent-skills: creates or fixes CI pipelines (GitHub Actions or GitLab CI) for the detected stack with lint, type check, tests with real service databases, build, dependency caching, a matrix only where it pays, concurrency, timeouts and secrets hygiene, and reviews existing workflows for script injection, pull_request_target misuse and unpinned actions.

`ci-setup` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/ci-setup`, `$ci-setup` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/ci-setup/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/ci-setup/SKILL.md) |

## What it does

Creates or fixes CI pipelines (GitHub Actions or GitLab CI) for the detected stack with lint, type check, tests with real service databases, build, dependency caching, a matrix only where it pays, concurrency, timeouts and secrets hygiene, and reviews existing workflows for script injection, pull_request_target misuse and unpinned actions.

## When to use it

Ask for it in your own words, for example:

- “set up CI”
- “add GitHub Actions”
- “fix the pipeline”
- “CI is slow”
- “add GitLab CI”
- “secure our workflows”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/ci-setup` |
| Codex CLI | `$ci-setup`, or pick it from `/skills` |
| Cursor | `/ci-setup` in Agent chat |
| Gemini CLI | `/ci-setup` |
| OpenCode | `/ci-setup` |
| GitHub Copilot | `/ci-setup` in VS Code chat or Copilot CLI |
| Devin | `/ci-setup` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `ci-lint.mjs`: `node scripts/ci-lint.mjs [files...] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable ci-setup` removes it from a project, `project enable ci-setup` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 124 | 898 | 1050 | 1578 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
