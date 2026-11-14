# Token saving

> How agent-skills keeps the text that goes through the model small - loading on demand, scripts for mechanical work, asking before expensive actions, cheap restarts and working rules - with measured numbers.

Usage limits depend on how much text goes through the model. agent-skills keeps that small in five ways. The numbers below were measured on real projects by the agent-skills authors.

## Load on demand

An agent keeps only each skill's name and description in context. The full `SKILL.md` loads when the skill runs, and reference files only when a step needs them. Every `SKILL.md` is at most 110 lines, and a check in CI enforces it.

## Scripts do the mechanical work

Fetching, parsing, counting and filtering are done by scripts that print only what the model needs. Sizes are in bytes, and four bytes are roughly one token.

| Task | Raw input | Script output | Saved |
| --- | ---: | ---: | ---: |
| Lighthouse report | 455,534 | 754 | 99.8% |
| Test log of 86 passing tests | 27,098 | 86 | 99.7% |
| `npm audit --json` on a 300-package app | 20,555 | 2,126 | 90% |
| `git log -60` to learn the commit style | 7,415 | 739 | 90% |
| GitHub issue and comments | 8,178 | 1,018 | 88% |
| SQL log of one request with an N+1 | 4,204 | 490 | 88% |
| `package.json` to find test and lint commands | 2,122 | 275 | 87% |

Fetching a task again prints only new comments and changed fields. Failing test runs print the failing blocks with `file:line` and a summary, never the full log.

## Ask before expensive actions

A screenshot costs about 1,000 to 2,000 tokens, so `browser-check` asks first and captures only the changed element. Local Lighthouse, full test suites and load tests are proposed, not run silently.

## Sessions that restart cheaply

`STATE.md`, about 30 lines long, holds the goal, what was done, changed files, check results, decisions and one concrete next step. After a stage, clear the session and resume from the file. It is cheaper and more precise than dragging a long transcript along.

## Working rules

The `token-saver` skill gives every agent the same habits:

- Search before reading, and read line ranges.
- Never open lockfiles or build output.
- Use short command forms, such as `git status --short`.
- Edit instead of rewriting.
- Put results first in answers.
- Use subagents with narrow briefs for wide searches.

## Read next

- [Skills catalog](/skills/catalog/): all skills.
- [Install agent-skills](/skills/install/): set up the skills.
- [Features](/agent/features/): all views of Skribly Agent, grouped by job.
