# Parallel subagents

> The orchestrate skill of agent-skills: splits a large job into independent sub-tasks and runs them in parallel with subagents (Claude Code Agent/Task tool, Codex, Cursor or OpenCode agents, or separate sessions) using self-contained briefs and explicit file ownership so they never edit the same files, then merges and verifies the results.

`orchestrate` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/orchestrate`, `$orchestrate` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/orchestrate/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/orchestrate/SKILL.md) |

## What it does

Splits a large job into independent sub-tasks and runs them in parallel with subagents (Claude Code Agent/Task tool, Codex, Cursor or OpenCode agents, or separate sessions) using self-contained briefs and explicit file ownership so they never edit the same files, then merges and verifies the results.

## When to use it

Ask for it in your own words, for example:

- “parallelize this”
- “split it into subtasks”
- “use subagents”
- “do it in parallel”
- “audits of many pages”
- Also: jobs spanning many independent areas such as multi-module migrations, bulk refactors or audits of many pages.

Not for “running tests in parallel”.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/orchestrate` |
| Codex CLI | `$orchestrate`, or pick it from `/skills` |
| Cursor | `/orchestrate` in Agent chat |
| Gemini CLI | `/orchestrate` |
| OpenCode | `/orchestrate` |
| GitHub Copilot | `/orchestrate` in VS Code chat or Copilot CLI |
| Devin | `/orchestrate` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable orchestrate` removes it from a project, `project enable orchestrate` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 153 | 1216 | 1400 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
