# Headless browser check

> The browser-check skill of agent-skills: verifies a UI change in a real headless browser (Playwright Chromium), loading the page and screenshotting only the changed element at desktop and mobile widths, and reporting console errors and failed requests.

`browser-check` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/browser-check`, `$browser-check` in Codex |
| Group | Quality and tests |
| Stacks | `web` |
| Release | agent-skills 0.3.0 |
| Source | [skills/browser-check/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/browser-check/SKILL.md) |

## What it does

Verifies a UI change in a real headless browser (Playwright Chromium), loading the page and screenshotting only the changed element at desktop and mobile widths, and reporting console errors and failed requests. Runs only after the user agrees, because images cost tokens.

## When to use it

Ask for it in your own words, for example:

- “check it in the browser”
- “screenshot the ...”
- “does it look right on mobile”
- Also: after a visible UI change when the user says yes.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/browser-check` |
| Codex CLI | `$browser-check`, or pick it from `/skills` |
| Cursor | `/browser-check` in Agent chat |
| Gemini CLI | `/browser-check` |
| OpenCode | `/browser-check` |
| GitHub Copilot | `/browser-check` in VS Code chat or Copilot CLI |
| Devin | `/browser-check` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `shot.mjs`: `node scripts/shot.mjs <url> [--selector "<css>"] [--out dir] [--only desktop|mobile] [--wait ms]`

## Where it fits

It fits projects with the stack tag `web`, and `agent-skills init` installs it only there.
`agent-skills project disable browser-check` removes it from a project, `project enable browser-check` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 116 | 668 | 800 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
