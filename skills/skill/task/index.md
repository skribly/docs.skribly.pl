# Task workflow

> The task skill of agent-skills: runs a development task end to end, from a tracker issue (Redmine, Jira, GitHub, GitLab, Linear, Skribly Tracker) or a plain-text request, through analysis, approval, branch, staged implementation and checks to a local commit made only after the user says OK.

`task` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/task`, `$task` in Codex |
| Group | Workflow |
| Stacks | general |
| Release | agent-skills 0.3.0 |
| Source | [skills/task/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/task/SKILL.md) |

## What it does

Runs a development task end to end, from a tracker issue (Redmine, Jira, GitHub, GitLab, Linear, Skribly Tracker) or a plain-text request, through analysis, approval, branch, staged implementation and checks to a local commit made only after the user says OK. Keeps a `STATE.md` file under `.tasks/` current so any agent can resume.

## When to use it

Ask for it in your own words, for example:

- “start task”
- “take task”
- “resume task”
- “pick up ticket”
- “continue where we left off”
- Also: task extras such as estimate, plan, PR/MR description or tracker comment draft.

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/task 123` |
| Codex CLI | `$task ABC-42`, or pick it from `/skills` |
| Cursor | `/task 123` in Agent chat |
| Gemini CLI | `/task 123` |
| OpenCode | `/task 123` |
| GitHub Copilot | `/task 123` in VS Code chat or Copilot CLI |
| Devin | `/task 123` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`
- `tasks.mjs`: `node scripts/tasks.mjs`

## Where it fits

A general skill: it fits every project, so `agent-skills init` always installs it.
`agent-skills project disable task` removes it from a project, `project enable task` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 136 | 1914 | 2200 | 1790 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
