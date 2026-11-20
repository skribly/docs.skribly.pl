# Design review of a page

> The design-review skill of agent-skills: reviews a site page or component against the plan's fails-review list (design.md section 10.5) and the cross-site checklist (section 12), both read live.

`design-review` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/design-review`, `$design-review` in Codex |
| Group | Quality and tests |
| Stacks | `web` |
| Release | agent-skills 0.3.0 |
| Source | [skills/design-review/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/design-review/SKILL.md) |

## What it does

Reviews a site page or component against the plan's fails-review list (`design.md` section 10.5) and the cross-site checklist (section 12), both read live. A script scans the files for emoji icons, purple and blue gradients, glass effects, stock illustrations, missing alt, landmarks and the single h1, title, meta and hreflang rules, third-party scripts and wording bans; the rest is judged by eye on screenshots at 360 and 1440 px in each theme. Read-only.

## When to use it

Ask for it in your own words, for example:

- “review this page's design”
- “does this page fail review”
- “run the cross-site checklist on this page”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/design-review` |
| Codex CLI | `$design-review`, or pick it from `/skills` |
| Cursor | `/design-review` in Agent chat |
| Gemini CLI | `/design-review` |
| OpenCode | `/design-review` |
| GitHub Copilot | `/design-review` in VS Code chat or Copilot CLI |
| Devin | `/design-review` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `design-review.mjs`: `node scripts/design-review.mjs rules | scan <file|dir>... [--page]`

## Where it fits

It fits projects with the stack tag `web`, and `agent-skills init` installs it only there.
`agent-skills project disable design-review` removes it from a project, `project enable design-review` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 155 | 888 | 1050 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
