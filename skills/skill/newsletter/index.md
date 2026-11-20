# Newsletter issue

> The newsletter skill of agent-skills: drafts one issue of the Skribly Newsletter (AI news for developers plus what is new in Skribly) in Polish and English.

`newsletter` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/newsletter`, `$newsletter` in Codex |
| Group | Docs |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/newsletter/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/newsletter/SKILL.md) |

## What it does

Drafts one issue of the Skribly Newsletter (AI news for developers plus what is new in Skribly) in Polish and English. Collects candidate items from a curated list of public feeds, picks the best, opens and checks every item at its primary source, writes `pl.md` and `en.md` in the issue format with a source under every item, adds "From Skribly" from the live public sites and changelogs, validates the folder and saves it as a draft. Never sends and never approves.

## When to use it

Ask for it in your own words, for example:

- “napisz numer newslettera”
- “przygotuj newsletter”
- “write the next newsletter issue”
- “draft newsletter issue 3”
- “collect AI news for the newsletter”

Not for “a sign-up form”, “a subscription checkbox” or “sending to subscribers”.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/newsletter` |
| Codex CLI | `$newsletter`, or pick it from `/skills` |
| Cursor | `/newsletter` in Agent chat |
| Gemini CLI | `/newsletter` |
| OpenCode | `/newsletter` |
| GitHub Copilot | `/newsletter` in VS Code chat or Copilot CLI |
| Devin | `/newsletter` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `check-issue.mjs`: `node scripts/check-issue.mjs <issue folder> [--deny <file>] [--json]`
- `collect.mjs`: `node scripts/collect.mjs [--days 14] [--issues <content/issues>] [--sources <file>] [--topic a,b] [--only id,id]`
- `save-draft.mjs`: `node scripts/save-draft.mjs <issue folder> [--dry-run] [--timeout 20000]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable newsletter` removes it from a project, `project enable newsletter` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 187 | 1980 | 2250 | 1212 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
