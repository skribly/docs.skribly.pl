# Guard against a repeated mistake

> The correct skill of agent-skills: turns a mistake that agents keep making in this project into something that stops it for good - a type that makes the wrong call impossible, a lint rule, a test, a check script or a clearer name, instead of one more line of advice.

`correct` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/correct`, `$correct` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/correct/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/correct/SKILL.md) |

## What it does

Turns a mistake that agents keep making in this project into something that stops it for good - a type that makes the wrong call impossible, a lint rule, a test, a check script or a clearer name, instead of one more line of advice. Explains the mistake, proposes the guard, and adds it only after the user agrees. Run only on request.

## When to use it

Ask for it in your own words, for example:

- “agents keep doing X”
- “make this impossible to get wrong”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/correct` |
| Codex CLI | `$correct`, or pick it from `/skills` |
| Cursor | `/correct` in Agent chat |
| Gemini CLI | `/correct` |
| OpenCode | `/correct` |
| GitHub Copilot | `/correct` in VS Code chat or Copilot CLI |
| Devin | `/correct` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable correct` removes it from a project, `project enable correct` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 109 | 388 | 450 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
