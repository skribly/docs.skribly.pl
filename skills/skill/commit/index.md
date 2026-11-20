# Commit in project style

> The commit skill of agent-skills: proposes a commit message in the project's own convention (read from .tasks/workflow.md or inferred from git log), shows it with the exact file list and commits only after explicit approval.

`commit` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/commit`, `$commit` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/commit/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/commit/SKILL.md) |

## What it does

Proposes a commit message in the project's own convention (read from `.tasks/workflow.md` or inferred from git log), shows it with the exact file list and commits only after explicit approval. Never adds Co-Authored-By, "Generated with" or any other trailer, and never pushes, merges or amends unless asked.

## When to use it

Ask for it in your own words, for example:

- “commit this”
- “commit the changes”
- “write a Conventional Commit”
- “commit message”
- “what should the commit say”
- Also: splitting changes into clean commits.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/commit` |
| Codex CLI | `$commit`, or pick it from `/skills` |
| Cursor | `/commit` in Agent chat |
| Gemini CLI | `/commit` |
| OpenCode | `/commit` |
| GitHub Copilot | `/commit` in VS Code chat or Copilot CLI |
| Devin | `/commit` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `convention.mjs`: `node scripts/convention.mjs [--limit 60] [--json]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable commit` removes it from a project, `project enable commit` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 125 | 771 | 900 | 1494 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
