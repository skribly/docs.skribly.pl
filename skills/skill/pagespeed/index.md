# PageSpeed and Web Vitals

> The pagespeed skill of agent-skills: measures and improves Core Web Vitals (LCP, CLS, INP, TBT) with PageSpeed Insights for public URLs or local Lighthouse for localhost, condenses the report to the top opportunities for mobile and desktop, and runs a fix-measure loop with framework-specific fixes for Next.js, Vite, Django and Laravel.

`pagespeed` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/pagespeed`, `$pagespeed` in Codex |
| Group | Audits |
| Stacks | `web` |
| Release | agent-skills 0.3.0 |
| Source | [skills/pagespeed/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/pagespeed/SKILL.md) |

## What it does

Measures and improves Core Web Vitals (LCP, CLS, INP, TBT) with PageSpeed Insights for public URLs or local Lighthouse for localhost, condenses the report to the top opportunities for mobile and desktop, and runs a fix-measure loop with framework-specific fixes for Next.js, Vite, Django and Laravel.

## When to use it

Ask for it in your own words, for example:

- “Lighthouse score”
- “Core Web Vitals”
- “why is the page slow”
- “improve LCP/CLS/INP”
- Also: performance budgets before a release.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/pagespeed` |
| Codex CLI | `$pagespeed`, or pick it from `/skills` |
| Cursor | `/pagespeed` in Agent chat |
| Gemini CLI | `/pagespeed` |
| OpenCode | `/pagespeed` |
| GitHub Copilot | `/pagespeed` in VS Code chat or Copilot CLI |
| Devin | `/pagespeed` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `psi.mjs`: `node scripts/psi.mjs <url> [--strategy mobile|desktop|both] [--local] [--file report.json] [--top 8] [--json]`

## Where it fits

It fits projects with the stack tag `web`, and `agent-skills init` installs it only there.
`agent-skills project disable pagespeed` removes it from a project, `project enable pagespeed` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 118 | 845 | 1000 | 954 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
