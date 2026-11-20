# Clean machine leftovers from a diff

> The deslop skill of agent-skills: cleans the lines a coding agent added in the current diff of the usual machine-written leftovers - comments that repeat the code, defensive checks for things that cannot happen, needless type escapes, try/catch that swallows errors, wordy log messages, unused helpers, a style different from the rest of the file, and inflated prose in docs.

`deslop` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/deslop`, `$deslop` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/deslop/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/deslop/SKILL.md) |

## What it does

Cleans the lines a coding agent added in the current diff of the usual machine-written leftovers - comments that repeat the code, defensive checks for things that cannot happen, needless type escapes, try/catch that swallows errors, wordy log messages, unused helpers, a style different from the rest of the file, and inflated prose in docs. Fixes them in place, only in added lines, and lists what it changed. Run only on request.

## When to use it

Ask for it in your own words, for example:

- “clean up the AI code”
- “make this look like our code”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/deslop` |
| Codex CLI | `$deslop`, or pick it from `/skills` |
| Cursor | `/deslop` in Agent chat |
| Gemini CLI | `/deslop` |
| OpenCode | `/deslop` |
| GitHub Copilot | `/deslop` in VS Code chat or Copilot CLI |
| Devin | `/deslop` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable deslop` removes it from a project, `project enable deslop` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 131 | 483 | 600 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
