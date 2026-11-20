# Plain writing for people

> The writing skill of agent-skills: gives every text an agent writes for people (commit bodies, pull request descriptions, tracker comments, reports, docs, interface strings, release notes) one plain style in Polish or English - short sentences, the concrete fact before the explanation, the reader's words instead of jargon, no filler, no hype and no machine-sounding phrases.

`writing` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/writing`, `$writing` in Codex |
| Group | Docs |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/writing/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/writing/SKILL.md) |

## What it does

Gives every text an agent writes for people (commit bodies, pull request descriptions, tracker comments, reports, docs, interface strings, release notes) one plain style in Polish or English - short sentences, the concrete fact before the explanation, the reader's words instead of jargon, no filler, no hype and no machine-sounding phrases. Rewrites a given text on request.

## When to use it

Ask for it in your own words, for example:

- “make this sound human”
- “rewrite this plainly”
- “popraw ten tekst”
- Also: as the style the docs and report skills follow.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/writing` |
| Codex CLI | `$writing`, or pick it from `/skills` |
| Cursor | `/writing` in Agent chat |
| Gemini CLI | `/writing` |
| OpenCode | `/writing` |
| GitHub Copilot | `/writing` in VS Code chat or Copilot CLI |
| Devin | `/writing` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `check.mjs`: `node scripts/check.mjs <file|-> [--lang en|pl|both] [--json]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable writing` removes it from a project, `project enable writing` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 134 | 1357 | 1600 | 580 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
