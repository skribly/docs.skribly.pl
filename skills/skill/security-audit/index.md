# Security audit

> The security-audit skill of agent-skills: audits a codebase or the current diff for security problems, namely leaked secrets, vulnerable dependencies (npm, pnpm, yarn, composer, pip via native audit tools or the OSV database) and dangerous code patterns such as injection, XSS, unsafe deserialization, path traversal, SSRF and missing authorization, and reports each finding with severity, evidence and a concrete fix.

`security-audit` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/security-audit`, `$security-audit` in Codex |
| Group | Audits |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/security-audit/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/security-audit/SKILL.md) |

## What it does

Audits a codebase or the current diff for security problems, namely leaked secrets, vulnerable dependencies (npm, pnpm, yarn, composer, pip via native audit tools or the OSV database) and dangerous code patterns such as injection, XSS, unsafe deserialization, path traversal, SSRF and missing authorization, and reports each finding with severity, evidence and a concrete fix. Read-only.

## When to use it

Ask for it in your own words, for example:

- “security review”
- “is this safe?”
- “check for secrets”
- “audit dependencies”
- Also: before a release or a merge.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/security-audit` |
| Codex CLI | `$security-audit`, or pick it from `/skills` |
| Cursor | `/security-audit` in Agent chat |
| Gemini CLI | `/security-audit` |
| OpenCode | `/security-audit` |
| GitHub Copilot | `/security-audit` in VS Code chat or Copilot CLI |
| Devin | `/security-audit` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `deps.mjs`: `node scripts/deps.mjs [dir] [--osv] [--offline] [--json]`
- `secrets.mjs`: `node scripts/secrets.mjs`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable security-audit` removes it from a project, `project enable security-audit` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 139 | 1596 | 1850 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
