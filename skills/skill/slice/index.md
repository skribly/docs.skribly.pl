# Vertical slice

> The slice skill of agent-skills: scaffolds a command or query slice, or a whole new module, in an app made from the Skribly app template by deriving it from the app's own reference module at run time (no copied conventions) - plain (input, deps) functions, the input.ts, handler.ts or query.ts, route.ts split, the handler that authorises first and opens one tenant transaction for the organisation it checked, no slice importing another, the outbox for a command, the MCP tool.ts when asked, the seed, and the swap-a-dependency recipe.

`slice` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/slice`, `$slice` in Codex |
| Group | Workflow |
| Stacks | `skribly-app` |
| Release | agent-skills 0.3.0 |
| Source | [skills/slice/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/slice/SKILL.md) |

## What it does

Scaffolds a command or query slice, or a whole new module, in an app made from the Skribly app template by deriving it from the app's own reference module at run time (no copied conventions) - plain (input, deps) functions, the `input.ts`, `handler.ts` or `query.ts`, `route.ts` split, the handler that authorises first and opens one tenant transaction for the organisation it checked, no slice importing another, the outbox for a command, the MCP `tool.ts` when asked, the seed, and the swap-a-dependency recipe.

## When to use it

Ask for it in your own words, for example:

- “add a slice”
- “new command slice”
- “new query”
- “add an endpoint to the module”
- “new module”
- “dodaj slice”
- “nowy moduł”
- “swap a dependency”
- “replace this library”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/slice` |
| Codex CLI | `$slice`, or pick it from `/skills` |
| Cursor | `/slice` in Agent chat |
| Gemini CLI | `/slice` |
| OpenCode | `/slice` |
| GitHub Copilot | `/slice` in VS Code chat or Copilot CLI |
| Devin | `/slice` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `slice.mjs`: `node scripts/slice.mjs conventions|module|new|check [args] [--project <dir>] [--reference <module>]`

## Where it fits

It fits projects with the stack tag `skribly-app`, and `agent-skills init` installs it only there.
`agent-skills project disable slice` removes it from a project, `project enable slice` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 177 | 1527 | 1800 | 804 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
