# Project knowledge docs

> The project-docs skill of agent-skills: generates or refreshes a .docs/ knowledge folder for a repository (overview, architecture, modules, data flow, how to run and test, decisions) plus a short AGENTS.md and CLAUDE.md that point to it, so agents load project knowledge on demand instead of in every session.

`project-docs` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/project-docs`, `$project-docs` in Codex |
| Group | Docs |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/project-docs/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/project-docs/SKILL.md) |

## What it does

Generates or refreshes a `.docs/` knowledge folder for a repository (overview, architecture, modules, data flow, how to run and test, decisions) plus a short `AGENTS.md` and `CLAUDE.md` that point to it, so agents load project knowledge on demand instead of in every session.

## When to use it

Ask for it in your own words, for example:

- “document this project”
- “write or slim down AGENTS.md / CLAUDE.md”
- “update the docs after these changes”
- Also: onboarding documentation.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/project-docs` |
| Codex CLI | `$project-docs`, or pick it from `/skills` |
| Cursor | `/project-docs` in Agent chat |
| Gemini CLI | `/project-docs` |
| OpenCode | `/project-docs` |
| GitHub Copilot | `/project-docs` in VS Code chat or Copilot CLI |
| Devin | `/project-docs` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `repo-map.mjs`: `node scripts/repo-map.mjs [dir] [--depth 3] [--max-entries 400]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable project-docs` removes it from a project, `project enable project-docs` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 115 | 1301 | 1500 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
