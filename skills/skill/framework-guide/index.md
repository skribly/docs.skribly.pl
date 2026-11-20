# Framework code for the installed version

> The framework-guide skill of agent-skills: writes framework code against the version the project has installed, not the one in the model's memory - reads the installed version and its docs (the AGENTS.md docs index, node_modules or vendor), confirms each API in the installed package before using it, and checks the common errors of that major version (Next.js, React, Vue, Angular, Express, Tailwind, Laravel, Django, Pydantic, SQLAlchemy, Rails, Spring Boot, .NET, Flutter, Kubernetes manifests).

`framework-guide` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/framework-guide`, `$framework-guide` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/framework-guide/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/framework-guide/SKILL.md) |

## What it does

Writes framework code against the version the project has installed, not the one in the model's memory - reads the installed version and its docs (the `AGENTS.md` docs index, node_modules or vendor), confirms each API in the installed package before using it, and checks the common errors of that major version (Next.js, React, Vue, Angular, Express, Tailwind, Laravel, Django, Pydantic, SQLAlchemy, Rails, Spring Boot, .NET, Flutter, Kubernetes manifests).

## When to use it

Ask for it in your own words, for example:

- “which API does our version have”
- “is this the right API for our Next.js”
- “you used an old API”
- “check against the installed version”

Not for moving to a new version (upgrade).

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/framework-guide` |
| Codex CLI | `$framework-guide`, or pick it from `/skills` |
| Cursor | `/framework-guide` in Agent chat |
| Gemini CLI | `/framework-guide` |
| OpenCode | `/framework-guide` |
| GitHub Copilot | `/framework-guide` in VS Code chat or Copilot CLI |
| Devin | `/framework-guide` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable framework-guide` removes it from a project, `project enable framework-guide` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 175 | 783 | 850 | 5793 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
