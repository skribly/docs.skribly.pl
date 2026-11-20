# Convention gate

> The gate-convention skill of agent-skills: a review gate for the project's own conventions - collects the rules of AGENTS.md (and nested ones above the changed files), CLAUDE.md and the conventions of .skribly/project.json into a numbered checklist, checks the diff against each rule and reports findings first, each with file line, the rule it breaks and its source, and a concrete fix.

`gate-convention` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/gate-convention`, `$gate-convention` in Codex |
| Group | Quality and tests |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/gate-convention/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/gate-convention/SKILL.md) |

## What it does

A review gate for the project's own conventions - collects the rules of `AGENTS.md` (and nested ones above the changed files), `CLAUDE.md` and the conventions of `.skribly/project.json` into a numbered checklist, checks the diff against each rule and reports findings first, each with file line, the rule it breaks and its source, and a concrete fix. Not a bug hunt (review) or a security pass (security-audit). Read-only unless asked to fix.

## When to use it

Ask for it in your own words, for example:

- “check the conventions”
- “does this follow AGENTS.md”
- “convention gate”
- Also: after each phase of a spec and before a commit.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/gate-convention` |
| Codex CLI | `$gate-convention`, or pick it from `/skills` |
| Cursor | `/gate-convention` in Agent chat |
| Gemini CLI | `/gate-convention` |
| OpenCode | `/gate-convention` |
| GitHub Copilot | `/gate-convention` in VS Code chat or Copilot CLI |
| Devin | `/gate-convention` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`
- `rules.mjs`: `node scripts/rules.mjs [changed path...] [--project <dir>] [--json]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable gate-convention` removes it from a project, `project enable gate-convention` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 156 | 980 | 1150 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
