# Architecture decision record

> The adr skill of agent-skills: writes an architecture decision record in MADR 4.0.0 with the four fields Skribly requires (Confidence, Reopen when, Exit plan, Confirmation naming its fitness function), numbers it, keeps the index of the repository's .docs/adr folder, refuses to edit an accepted ADR and supersedes it with a link instead.

`adr` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/adr`, `$adr` in Codex |
| Group | Docs |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/adr/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/adr/SKILL.md) |

## What it does

Writes an architecture decision record in MADR 4.0.0 with the four fields Skribly requires (Confidence, Reopen when, Exit plan, Confirmation naming its fitness function), numbers it, keeps the index of the repository's `.docs/adr` folder, refuses to edit an accepted ADR and supersedes it with a link instead.

## When to use it

Ask for it in your own words, for example:

- “write an ADR”
- “record this decision”
- “we chose X over Y”
- “supersede ADR 0007”
- Also: before code that is costly to reverse lands.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/adr` |
| Codex CLI | `$adr`, or pick it from `/skills` |
| Cursor | `/adr` in Agent chat |
| Gemini CLI | `/adr` |
| OpenCode | `/adr` |
| GitHub Copilot | `/adr` in VS Code chat or Copilot CLI |
| Devin | `/adr` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `adr.mjs`: `node scripts/adr.mjs new "<title>" | supersede <number> "<title>" | guard <file> | check [file...] | index`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable adr` removes it from a project, `project enable adr` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 116 | 1124 | 1300 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
