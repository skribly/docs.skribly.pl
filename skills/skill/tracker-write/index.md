# Draft tracker and review texts

> The tracker-write skill of agent-skills: drafts the texts a developer posts to others, for their approval before anything is sent - a new issue, a comment on an issue (progress, a question, an estimate, a hand-off), a pull or merge request description, a review reply.

`tracker-write` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/tracker-write`, `$tracker-write` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/tracker-write/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/tracker-write/SKILL.md) |

## What it does

Drafts the texts a developer posts to others, for their approval before anything is sent - a new issue, a comment on an issue (progress, a question, an estimate, a hand-off), a pull or merge request description, a review reply. Built from the task files, the diff and the checks, short and in the reader's language, with nothing posted until the user says so.

## When to use it

Ask for it in your own words, for example:

- “draft a comment”
- “write the PR description”
- “open an issue for this”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/tracker-write` |
| Codex CLI | `$tracker-write`, or pick it from `/skills` |
| Cursor | `/tracker-write` in Agent chat |
| Gemini CLI | `/tracker-write` |
| OpenCode | `/tracker-write` |
| GitHub Copilot | `/tracker-write` in VS Code chat or Copilot CLI |
| Devin | `/tracker-write` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable tracker-write` removes it from a project, `project enable tracker-write` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 123 | 472 | 550 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
