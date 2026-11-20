# Finish a branch into develop

> The merge skill of agent-skills: finishes a branch whose work is done - checks it is clean and green, brings in the latest integration branch, merges it into the integration branch (develop by default) the way the project does it (a merge commit, or a squash where the project squashes), pushes, and removes the branch and its worktree, local and remote, only after the user agrees.

`merge` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/merge`, `$merge` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | In development, ships in the next release |
| Source | [skills/merge/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/merge/SKILL.md) |

## What it does

Finishes a branch whose work is done - checks it is clean and green, brings in the latest integration branch, merges it into the integration branch (develop by default) the way the project does it (a merge commit, or a squash where the project squashes), pushes, and removes the branch and its worktree, local and remote, only after the user agrees. Never touches the release branch and never force pushes.

## When to use it

Ask for it in your own words, for example:

- “merge this into develop”
- “finish the branch”
- “clean up the worktree”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/merge` |
| Codex CLI | `$merge`, or pick it from `/skills` |
| Cursor | `/merge` in Agent chat |
| Gemini CLI | `/merge` |
| OpenCode | `/merge` |
| GitHub Copilot | `/merge` in VS Code chat or Copilot CLI |
| Devin | `/merge` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

None: the skill is instructions only, and the agent runs the project’s own commands.

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable merge` removes it from a project, `project enable merge` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 129 | 545 | 650 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
