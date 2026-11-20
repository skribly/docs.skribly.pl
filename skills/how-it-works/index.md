# How it works

> How the agent-skills skills work together - one pipeline from a plan to a merged branch, read-only guardrails along it, the project profile every skill reads first, and lessons with a scope.

:::note[In development]
This page describes the version in development, which ships in the next release. The released agent-skills 0.3.0 has the profile, lessons without scopes and most of the steps; the steps marked "next" on [All skills](/skills/skill/) come with the next release.
:::

Every step of the work is a skill. Each one reads the project profile (`.skribly/project.json`) and the lessons (`.skribly/lessons.md`) first, keeps its working files under `.tasks/` (out of git), and waits for you at the points marked **OK**.

## The pipeline

One path from an idea to a merged branch:

```text
plan -> spec -> task -> verify -> e2e-check -> improve -> commit -> merge
         \___ review · gate-convention · blast-radius · security-audit · design-review · deslop ___/
```

Small work skips the early steps: a one-file fix starts at `task`, a task that fits in one sitting needs no `plan`, and a task `task` can describe in five lines needs no `spec`.

| Step | Skill | Writes | Waits for |
| --- | --- | --- | --- |
| 1 | [`plan`](/skills/skill/plan/) | `.tasks/plans/<slug>.md` | **OK** on the plan |
| 2 | [`spec`](/skills/skill/spec/) | `.tasks/specs/SPEC-<slug>.md` | **OK**, then `Status: approved` |
| 3 | [`task`](/skills/skill/task/) | a branch, code in phases, `.tasks/<id>/STATE.md` | **OK** before the branch |
| 4 | [`verify`](/skills/skill/verify/) | nothing: a pass or fail per step | - |
| 5 | [`e2e-check`](/skills/skill/e2e-check/) | screenshots under the test output folder | **OK** to spend tokens on screenshots |
| 6 | [`improve`](/skills/skill/improve/) | one small fix per note | your next note |
| 7 | [`commit`](/skills/skill/commit/) | a local commit, no trailers | **OK** on the message and files |
| 8 | [`merge`](/skills/skill/merge/) | the merge into `develop`, a push | **OK** before the push and the cleanup |

The `project` skill writes the conventions of the two planning folders into the project: `.tasks/plans/README.md` and `.tasks/specs/README.md`, with the naming, what each file holds and the life cycle `draft -> approved -> done -> archived`.

## The guardrails

The guardrails are read-only reviews. Each reports its findings first, with `file:line` and a fix, and changes code only when you accept a finding.

| Guardrail | Asks | Called from |
| --- | --- | --- |
| [`review`](/skills/skill/review/) | does the change do what it claims, for every input? | `task` before each commit; `review pr` before `merge` |
| [`gate-convention`](/skills/skill/gate-convention/) | does it follow what the project wrote in `AGENTS.md` and the profile? | after each phase of a spec; `task` before a commit |
| [`blast-radius`](/skills/skill/blast-radius/) | what outside the diff relies on what changed? | `task` when an export, route, schema, config or shared module changes |
| [`security-audit`](/skills/skill/security-audit/) | secrets, injection, authorization, vulnerable dependencies? | `task` when auth, input handling or dependencies change; `deps-update` |
| [`design-review`](/skills/skill/design-review/) | does a page pass the design checklist? | `task` for a visible UI change |
| [`deslop`](/skills/skill/deslop/) | machine-written noise in the added lines? | `task` before a commit |

`review pr` is the one place where every guardrail runs on the same diff: the whole branch against `develop`, written as a draft review that is posted only after you approve it.

## The project profile

`.skribly/project.json` holds the stack, the commands (install, dev, build, test, lint, typecheck, format), the commit style and language, the base branch, CI and containers. The [`project`](/skills/skill/project/) skill or `agent-skills init` detects it from `package.json` and lock files, `pyproject.toml`, `composer.json`, `go.mod`, `Cargo.toml`, Dockerfiles, CI files, the README and your commit history.

- **Read first, everywhere.** Every skill starts from the profile and falls back to its own detection only when the profile is missing.
- **Your edits win.** A value you set by hand is never overwritten by a later detection, and a value you delete stays deleted.
- **Safe commands.** A package folder goes into a command such as `cd web && npm test` only when its path is made of plain segments; any other folder is left out and reported as `skipped`. In a repository you did not write, every skill shows you the profile's commands before running them.
- **Only the skills that fit.** The profile becomes stack tags (`node`, `php`, `python` and the other runtimes, plus `web`, `backend`, `database`, `docker`, `data`, `skribly-app`). A skill without stacks fits every project; a skill with stacks is installed only where they match. See [Train the skills for your project](/skills/train/).

## Lessons with scopes

At the end of `task`, `test-loop`, `review` and `debug` the agent proposes one lesson it confirmed: a command that works, a convention the code does not show, a pitfall that cost time. With your OK, [`learn`](/skills/skill/learn/) writes it to `.skribly/lessons.md` with the date and the skill it came from. Anything that looks like a secret is refused.

Each lesson sits under a scope heading, so a skill reads only the lessons for the files it changes:

| Scope | Covers |
| --- | --- |
| `## [All]` | any change; lines above the first heading count as `All` |
| `## [CI]` | the pipeline files (`.github/workflows/`, `.gitlab-ci.yml`, `Jenkinsfile` and their like) |
| `## [<module>]` | a folder name (`cart` matches any `cart/` folder), a path (`src/cart`) or a glob (`*.sql`) |

`lessons.mjs for-diff --base <branch>` prints only the lessons whose scope matches the changed files. A lesson that proves itself can be promoted into the profile.

## What feeds every step

- [`project`](/skills/skill/project/): the profile and the work folders.
- [`learn`](/skills/skill/learn/): the lessons, each with its scope.
- [`guide-tests`](/skills/skill/guide-tests/): what deserves a test and at which level, used by `task`, `spec` and `test-loop`.
- [`writing`](/skills/skill/writing/): the style of every text for people, from commit bodies to reports.
- [`handoff`](/skills/skill/handoff/): `STATE.md`, so any agent can resume at any step after `/clear` or a usage limit.

## Cheap on tokens

An agent keeps only each skill's name and description in context. `SKILL.md` loads when the skill runs, its other references only when a step needs them, and small scripts hand the model a few lines instead of raw output. Every skill has a measured size and a budget the repository's check enforces: [Token cost](/skills/token-cost/).

## Read next

- [Train the skills for your project](/skills/train/): `init`, `train-skills`, switches, lessons and project skills, step by step.
- [Agent tooling](/skills/tooling/): the delete guard, the status line, permissions, the MCP smoke test and the CI job.
- [All skills](/skills/skill/): every skill on its own page.
