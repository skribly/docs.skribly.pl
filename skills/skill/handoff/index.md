# Handoff and resume

> The handoff skill of agent-skills: saves or restores working state in a .tasks/ STATE.md file so another agent, or a fresh session after /clear, compaction or a usage limit, can continue without the transcript.

`handoff` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/handoff`, `$handoff` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/handoff/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/handoff/SKILL.md) |

## What it does

Saves or restores working state in a `.tasks/` `STATE.md` file so another agent, or a fresh session after /clear, compaction or a usage limit, can continue without the transcript.

## When to use it

Ask for it in your own words, for example:

- “save state”
- “hand this over to Codex/Claude”
- “I'm about to hit the limit”
- “resume”
- “continue from STATE.md”
- “where were we”

Not for “saving settings to a config file”.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/handoff` |
| Codex CLI | `$handoff`, or pick it from `/skills` |
| Cursor | `/handoff` in Agent chat |
| Gemini CLI | `/handoff` |
| OpenCode | `/handoff` |
| GitHub Copilot | `/handoff` in VS Code chat or Copilot CLI |
| Devin | `/handoff` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable handoff` removes it from a project, `project enable handoff` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 98 | 783 | 900 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
