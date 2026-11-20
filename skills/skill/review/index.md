# Self-review before commit

> The review skill of agent-skills: reviews your own uncommitted changes or branch diff before committing, looking for bugs, missed edge cases, security slips, dead or debug code, convention breaks and missing tests, and reports findings first, ordered by severity, each with file:line and a concrete fix.

`review` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/review`, `$review` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/review/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/review/SKILL.md) |

## What it does

Reviews your own uncommitted changes or branch diff before committing, looking for bugs, missed edge cases, security slips, dead or debug code, convention breaks and missing tests, and reports findings first, ordered by severity, each with file:line and a concrete fix. A pull request mode reviews a whole branch against develop through every gate and writes a draft review that waits for approval. Read-only unless asked to fix.

## When to use it

Ask for it in your own words, for example:

- “review my changes”
- “check the diff before I commit”
- “self-review”
- “look over what I changed”
- “anything wrong with this?”
- “review the whole branch”
- “review this pull request”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/review` |
| Codex CLI | `$review`, or pick it from `/skills` |
| Cursor | `/review` in Agent chat |
| Gemini CLI | `/review` |
| OpenCode | `/review` |
| GitHub Copilot | `/review` in VS Code chat or Copilot CLI |
| Devin | `/review` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable review` removes it from a project, `project enable review` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 166 | 955 | 1100 | 1098 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
