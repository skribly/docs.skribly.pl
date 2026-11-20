# Translations and i18n

> The i18n skill of agent-skills: keeps translations complete and correct by finding missing, empty and extra keys per locale, placeholder mismatches and keys used in code but absent from the catalog (JSON, YAML, gettext PO and Laravel lang files), then adds translations in the project's format and extracts hard-coded UI strings.

`i18n` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/i18n`, `$i18n` in Codex |
| Group | Quality and tests |
| Stacks | `web` |
| Release | agent-skills 0.3.0 |
| Source | [skills/i18n/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/i18n/SKILL.md) |

## What it does

Keeps translations complete and correct by finding missing, empty and extra keys per locale, placeholder mismatches and keys used in code but absent from the catalog (JSON, YAML, gettext PO and Laravel lang files), then adds translations in the project's format and extracts hard-coded UI strings.

## When to use it

Ask for it in your own words, for example:

- “missing translations”
- “translate the new strings”
- “add a language”
- “check the locale files”
- “internationalize this component”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/i18n` |
| Codex CLI | `$i18n`, or pick it from `/skills` |
| Cursor | `/i18n` in Agent chat |
| Gemini CLI | `/i18n` |
| OpenCode | `/i18n` |
| GitHub Copilot | `/i18n` in VS Code chat or Copilot CLI |
| Devin | `/i18n` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `i18n-check.mjs`: `node scripts/i18n-check.mjs [dir] [--base en] [--usage] [--json]`

## Where it fits

It fits projects with the stack tag `web`, and `agent-skills init` installs it only there.
`agent-skills project disable i18n` removes it from a project, `project enable i18n` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 115 | 805 | 950 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
