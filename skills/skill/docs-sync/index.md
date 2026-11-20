# Docs move with the code

> The docs-sync skill of agent-skills: checks that a change a user can see updated, in the same change, the Polish and English language files (same keys), the repository's .docs/, CHANGELOG.md and the matching docs.skribly.pl page, by the rule "Docs move with the code" read live from the plan's rules.md.

`docs-sync` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/docs-sync`, `$docs-sync` in Codex |
| Group | Docs |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/docs-sync/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/docs-sync/SKILL.md) |

## What it does

Checks that a change a user can see updated, in the same change, the Polish and English language files (same keys), the repository's `.docs/`, `CHANGELOG.md` and the matching docs.skribly.pl page, by the rule "Docs move with the code" read live from the plan's `rules.md`. Read-only, it reports what is missing and the agent adds it.

## When to use it

Ask for it in your own words, for example:

- “did I update the docs”
- “check docs and translations before merge”
- “docs move with the code”
- “sync the docs with this change”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/docs-sync` |
| Codex CLI | `$docs-sync`, or pick it from `/skills` |
| Cursor | `/docs-sync` in Agent chat |
| Gemini CLI | `/docs-sync` |
| OpenCode | `/docs-sync` |
| GitHub Copilot | `/docs-sync` in VS Code chat or Copilot CLI |
| Devin | `/docs-sync` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `docs-sync.mjs`: `node scripts/docs-sync.mjs rule | check [--base develop] [--repo <dir>] [--visible <regex>]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable docs-sync` removes it from a project, `project enable docs-sync` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 126 | 1088 | 1300 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
