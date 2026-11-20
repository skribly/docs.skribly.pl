# Behaviour-preserving refactor

> The refactor skill of agent-skills: refactors code without changing behaviour, starting with characterization tests that pin down what the code does today, then moving in small verified steps (extract, rename, move, inline, replace conditionals), with tests, types and a diff review after each step and nothing mixed in from feature work.

`refactor` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/refactor`, `$refactor` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/refactor/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/refactor/SKILL.md) |

## What it does

Refactors code without changing behaviour, starting with characterization tests that pin down what the code does today, then moving in small verified steps (extract, rename, move, inline, replace conditionals), with tests, types and a diff review after each step and nothing mixed in from feature work.

## When to use it

Ask for it in your own words, for example:

- “clean up this code”
- “split this file”
- “split this function”
- “remove duplication”
- “make this testable”
- “restructure this module”
- Also: without changing what it does.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/refactor` |
| Codex CLI | `$refactor`, or pick it from `/skills` |
| Cursor | `/refactor` in Agent chat |
| Gemini CLI | `/refactor` |
| OpenCode | `/refactor` |
| GitHub Copilot | `/refactor` in VS Code chat or Copilot CLI |
| Devin | `/refactor` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable refactor` removes it from a project, `project enable refactor` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 128 | 902 | 1050 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
