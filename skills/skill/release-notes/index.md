# Release notes

> The release-notes skill of agent-skills: drafts release notes and CHANGELOG entries from git history since the last tag, grouped into breaking changes, features, fixes, performance and other, written for users rather than developers, in the project's existing changelog style, with issue and PR references and never any AI attribution or trailers.

`release-notes` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/release-notes`, `$release-notes` in Codex |
| Group | Docs |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/release-notes/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/release-notes/SKILL.md) |

## What it does

Drafts release notes and CHANGELOG entries from git history since the last tag, grouped into breaking changes, features, fixes, performance and other, written for users rather than developers, in the project's existing changelog style, with issue and PR references and never any AI attribution or trailers.

## When to use it

Ask for it in your own words, for example:

- “write the changelog”
- “release notes for v2.3”
- “what changed since the last release”
- “update CHANGELOG.md”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/release-notes` |
| Codex CLI | `$release-notes`, or pick it from `/skills` |
| Cursor | `/release-notes` in Agent chat |
| Gemini CLI | `/release-notes` |
| OpenCode | `/release-notes` |
| GitHub Copilot | `/release-notes` in VS Code chat or Copilot CLI |
| Devin | `/release-notes` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `changes.mjs`: `node scripts/changes.mjs [--since v1.2.0] [--to HEAD] [--all] [--json]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable release-notes` removes it from a project, `project enable release-notes` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 119 | 730 | 850 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
