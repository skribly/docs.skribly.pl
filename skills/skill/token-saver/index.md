# Token saver

> The token-saver skill of agent-skills: working rules that keep agent context and usage small, such as searching before reading, reading line ranges instead of whole files, condensing logs, delegating mechanical work to scripts, avoiding re-reads, and knowing when to /clear and resume from STATE.md.

`token-saver` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/token-saver`, `$token-saver` in Codex |
| Group | Meta |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/token-saver/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/token-saver/SKILL.md) |

## What it does

Working rules that keep agent context and usage small, such as searching before reading, reading line ranges instead of whole files, condensing logs, delegating mechanical work to scripts, avoiding re-reads, and knowing when to /clear and resume from `STATE.md`.

## When to use it

Ask for it in your own words, for example:

- “save tokens”
- “I'm close to the limit”
- “context is too long”
- “be cheaper”
- Also: when a session grows long.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/token-saver` |
| Codex CLI | `$token-saver`, or pick it from `/skills` |
| Cursor | `/token-saver` in Agent chat |
| Gemini CLI | `/token-saver` |
| OpenCode | `/token-saver` |
| GitHub Copilot | `/token-saver` in VS Code chat or Copilot CLI |
| Devin | `/token-saver` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable token-saver` removes it from a project, `project enable token-saver` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 105 | 772 | 900 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
