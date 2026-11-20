# Train the skills for a project

> The train-skills skill of agent-skills: fits the skills to a new project in one loop - runs agent-skills init (stack, commands and conventions into .skribly/project.json, only the skills that fit, for every agent), reads the profile, runs the project's checks once, records the lessons it confirmed with a scope and a file-line or commit citation through the learn skill after the person's OK, and proposes small project-specific skills under .agents/skills with the person's OK.

`train-skills` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/train-skills`, `$train-skills` in Codex |
| Group | Meta |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/train-skills/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/train-skills/SKILL.md) |

## What it does

Fits the skills to a new project in one loop - runs agent-skills init (stack, commands and conventions into `.skribly/project.json`, only the skills that fit, for every agent), reads the profile, runs the project's checks once, records the lessons it confirmed with a scope and a file-line or commit citation through the learn skill after the person's OK, and proposes small project-specific skills under `.agents/skills` with the person's OK.

## When to use it

Ask for it in your own words, for example:

- “train the skills for this project”
- “set up agent-skills here”
- “fit the skills to this repo”
- Also: on the first session in a repository without `.skribly/project.json`.

Not for “training a machine learning model” or “writing a new skill from scratch”.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/train-skills` |
| Codex CLI | `$train-skills`, or pick it from `/skills` |
| Cursor | `/train-skills` in Agent chat |
| Gemini CLI | `/train-skills` |
| OpenCode | `/train-skills` |
| GitHub Copilot | `/train-skills` in VS Code chat or Copilot CLI |
| Devin | `/train-skills` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable train-skills` removes it from a project, `project enable train-skills` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 186 | 1008 | 1150 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
