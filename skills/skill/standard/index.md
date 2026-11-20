# Repository standard

> The standard skill of agent-skills: checks a repository against the Skribly standard and guides the repair.

`standard` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/standard`, `$standard` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/standard/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/standard/SKILL.md) |

## What it does

Checks a repository against the Skribly standard and guides the repair. One read-only script runs the checks the repository ships in its own `.tools/` (standard, headers, licences, build output, wording, TODO sync, the source commit of the tools), the per-agent files through the agent-skills CLI, and checks of its own for the uniform npm script names and the git hooks path, then prints one line per check.

## When to use it

Ask for it in your own words, for example:

- “check the standard”
- “is this repository on the standard”
- “bring this repository to the standard”
- “sprawdź standard repozytorium”
- “doprowadź repozytorium do standardu”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/standard` |
| Codex CLI | `$standard`, or pick it from `/skills` |
| Cursor | `/standard` in Agent chat |
| Gemini CLI | `/standard` |
| OpenCode | `/standard` |
| GitHub Copilot | `/standard` in VS Code chat or Copilot CLI |
| Devin | `/standard` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`
- `standard.mjs`: `node scripts/standard.mjs [--project <dir>] [--build <dir>] [--json]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable standard` removes it from a project, `project enable standard` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 156 | 1332 | 1550 | 1762 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
