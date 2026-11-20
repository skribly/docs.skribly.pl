# Release checklist

> The release skill of agent-skills: walks the project's release checklist (changelogs, dependency updates, contract versioning, registry, vendor sync, tags and releases, the weekly routine) and runs read-only repository checks before a release - develop clean, package.json and VERSION in step, CHANGELOG entry present, tag free.

`release` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/release`, `$release` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/release/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/release/SKILL.md) |

## What it does

Walks the project's release checklist (changelogs, dependency updates, contract versioning, registry, vendor sync, tags and releases, the weekly routine) and runs read-only repository checks before a release - develop clean, `package.json` and VERSION in step, CHANGELOG entry present, tag free. It never tags or publishes; the person who cuts the release does.

## When to use it

Ask for it in your own words, for example:

- “prepare the release”
- “release train 0.3”
- “is this ready to release”
- “run the weekly routine”

Not for bumping a version, merging into main or publishing a package.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/release` |
| Codex CLI | `$release`, or pick it from `/skills` |
| Cursor | `/release` in Agent chat |
| Gemini CLI | `/release` |
| OpenCode | `/release` |
| GitHub Copilot | `/release` in VS Code chat or Copilot CLI |
| Devin | `/release` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `release.mjs`: `node scripts/release.mjs checklist | check <version> [--repo <dir>]`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable release` removes it from a project, `project enable release` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 142 | 850 | 1000 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
