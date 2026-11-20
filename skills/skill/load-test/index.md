# Load testing

> The load-test skill of agent-skills: plans, writes and runs load tests with k6 (or autocannon or Locust) from a short smoke run up to load, stress and spike profiles, with explicit thresholds for latency percentiles and error rate, then reads the results through a condensed summary and points to the bottleneck.

`load-test` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/load-test`, `$load-test` in Codex |
| Group | Quality and tests |
| Stacks | `backend` |
| Release | agent-skills 0.3.0 |
| Source | [skills/load-test/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/load-test/SKILL.md) |

## What it does

Plans, writes and runs load tests with k6 (or autocannon or Locust) from a short smoke run up to load, stress and spike profiles, with explicit thresholds for latency percentiles and error rate, then reads the results through a condensed summary and points to the bottleneck.

## When to use it

Ask for it in your own words, for example:

- “load test this endpoint”
- “how many users can it handle”
- “stress test”
- “k6 script”
- “check performance under load”
- Also: before a launch or after a performance fix.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/load-test` |
| Codex CLI | `$load-test`, or pick it from `/skills` |
| Cursor | `/load-test` in Agent chat |
| Gemini CLI | `/load-test` |
| OpenCode | `/load-test` |
| GitHub Copilot | `/load-test` in VS Code chat or Copilot CLI |
| Devin | `/load-test` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `load-summary.mjs`: `node scripts/load-summary.mjs <summary.json> [--json]`

## Where it fits

It fits projects with the stack tag `backend`, and `agent-skills init` installs it only there.
`agent-skills project disable load-test` removes it from a project, `project enable load-test` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 121 | 807 | 950 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
