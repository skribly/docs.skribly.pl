# WCAG 2.2 AA audit

> The wcag-audit skill of agent-skills: reviews changed UI against WCAG 2.2 level AA, running axe-core through Playwright when available and otherwise a targeted manual checklist, and returns concrete code fixes per issue (element, success criterion, fix).

`wcag-audit` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/wcag-audit`, `$wcag-audit` in Codex |
| Group | Audits |
| Stacks | `web` |
| Release | agent-skills 0.3.0 |
| Source | [skills/wcag-audit/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/wcag-audit/SKILL.md) |

## What it does

Reviews changed UI against WCAG 2.2 level AA, running axe-core through Playwright when available and otherwise a targeted manual checklist, and returns concrete code fixes per issue (element, success criterion, fix).

## When to use it

Ask for it in your own words, for example:

- “accessibility check”
- “a11y review”
- “check contrast, keyboard or screen reader support”
- Also: on components, templates or pages.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/wcag-audit` |
| Codex CLI | `$wcag-audit`, or pick it from `/skills` |
| Cursor | `/wcag-audit` in Agent chat |
| Gemini CLI | `/wcag-audit` |
| OpenCode | `/wcag-audit` |
| GitHub Copilot | `/wcag-audit` in VS Code chat or Copilot CLI |
| Devin | `/wcag-audit` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `axe.mjs`: `node scripts/axe.mjs <url> [--selector "<css>"] [--mobile] [--storage auth.json] [--wait ms] [--json]`

## Where it fits

It fits projects with the stack tag `web`, and `agent-skills init` installs it only there.
`agent-skills project disable wcag-audit` removes it from a project, `project enable wcag-audit` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 104 | 716 | 850 | 1281 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
