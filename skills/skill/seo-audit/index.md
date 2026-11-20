# Technical SEO audit

> The seo-audit skill of agent-skills: audits pages for technical SEO, covering title and meta description, heading outline, canonical, robots meta and robots.txt, sitemap.xml, hreflang, Open Graph, structured data (JSON-LD), image alt text, links and performance basics such as render-blocking resources and layout-shift risks, and returns prioritized, concrete fixes.

`seo-audit` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/seo-audit`, `$seo-audit` in Codex |
| Group | Audits |
| Stacks | `web` |
| Release | agent-skills 0.3.0 |
| Source | [skills/seo-audit/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/seo-audit/SKILL.md) |

## What it does

Audits pages for technical SEO, covering title and meta description, heading outline, canonical, robots meta and `robots.txt`, `sitemap.xml`, hreflang, Open Graph, structured data (JSON-LD), image alt text, links and performance basics such as render-blocking resources and layout-shift risks, and returns prioritized, concrete fixes.

## When to use it

Ask for it in your own words, for example:

- “SEO check”
- “why is this page not indexed”
- “check meta tags, sitemap or schema”
- Also: before launching or migrating pages.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/seo-audit` |
| Codex CLI | `$seo-audit`, or pick it from `/skills` |
| Cursor | `/seo-audit` in Agent chat |
| Gemini CLI | `/seo-audit` |
| OpenCode | `/seo-audit` |
| GitHub Copilot | `/seo-audit` in VS Code chat or Copilot CLI |
| Devin | `/seo-audit` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `seo.mjs`: `node scripts/seo.mjs <url> [more urls] [--no-robots] [--json]`

## Where it fits

It fits projects with the stack tag `web`, and `agent-skills init` installs it only there.
`agent-skills project disable seo-audit` removes it from a project, `project enable seo-audit` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 124 | 733 | 850 | 642 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
