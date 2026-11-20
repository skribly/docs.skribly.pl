# Train the skills for your project

> Fit agent-skills to one project step by step - agent-skills init, the train-skills loop, switching skills on and off, lessons with a scope and small project skills of your own.

:::note[In development]
`agent-skills init`, `project enable` and `disable`, `train-skills` and lessons with a scope ship in the next release. In the released agent-skills 0.3.0, install in project scope as on [Install](/skills/install/#user-scope-or-project-scope) and run the `project` skill.
:::

Training the skills means fitting them to one repository: the right skills for its stack, a checked profile of its commands, and the first lessons the agent proved in it. It takes one command and one conversation, and every step that writes waits for your OK.

## 1. Preview the setup

In the project folder:

```bash
agent-skills init --dry-run
```

It prints what it would do and writes nothing: the stack and commands it found, the skills that fit the stack, the agents it found and the files it would write. Use `--agents claude,codex` (or `--agents all`) when it picks the wrong agents.

## 2. Run init

```bash
agent-skills init
```

It does four things and ends with a short summary:

1. Detects the stack, the commands and the conventions into `.skribly/project.json`. Values you set by hand are kept.
2. Installs, in project scope, only the skills that fit the stack, for every agent you use (one copy per agent).
3. Writes `.tasks/plans/README.md` and `.tasks/specs/README.md`, the conventions of the planning folders.
4. Prints what it found and installed.

A second run changes nothing. Run it again after the stack changes. To undo all of it: `agent-skills uninstall --target all --project .`.

## 3. Ask your agent to train the skills

Open the agent in the project and ask for `/train-skills` (`$train-skills` in Codex). The [`train-skills`](/skills/skill/train-skills/) skill finishes the loop:

1. **Reads the profile** with `AGENTS.md` and the README, and asks you once to confirm the commands and the base branch. Your answer is written into the profile by hand, so it wins over later detection.
2. **Runs the checks once**: install (only with your OK), then lint, typecheck and test, the long ones after asking. For each it notes passed, failed with the first real error line, or missing. It does not fix the project's code here: a failing check is a finding.
3. **Proposes lessons** for the facts it proved, each with a scope and a source, a `file:line` or a commit. At most five, each saved only on your yes.
4. **Proposes project skills** when the project repeats a procedure no installed skill covers.
5. **Reports** in five lines: what init installed, the profile corrections, each check, the lessons saved, the project skills written or proposed.

## 4. Switch skills on and off

```bash
agent-skills project list                 # every skill: its stacks, whether it fits, installed or disabled
agent-skills project disable wcag-audit   # removed for every agent; init leaves it out from then on
agent-skills project enable load-test     # installed even when the stack does not call for it
```

Both switches take `--dry-run` and are kept in `.skribly/agent-skills.json`, so the next `init` respects them. A skill without stacks fits every project; the stacks of each skill are on its page under [All skills](/skills/skill/).

## 5. Keep the lessons

A lesson is one line in `.skribly/lessons.md` under a scope heading: `## [All]`, `## [CI]` or `## [<module>]`, where a module is a folder name, a path or a glob. The agent proposes one at the end of `task`, `test-loop`, `review` and `debug`; [`learn`](/skills/skill/learn/) saves it after your OK, with the date and the skill it came from.

```text
Lesson (pitfall, scope src/cart, src/cart/price.ts:41): prices are integers in cents; never parse them as floats. Save? [y/N]
```

Pick the narrowest scope that is still true: every skill then reads only the lessons for the files it changes. Guesses and one-off facts are not lessons, and anything that looks like a secret is refused. Ask `/learn` to list, prune or promote lessons into the profile.

## 6. Add project skills

When the project has a ritual of its own (a release step, a data refresh, a module scaffold), `train-skills` proposes a small skill for it:

- named `<project>-<topic>` in lowercase, never the name of a library skill;
- one `SKILL.md` in `.agents/skills/<name>/`, with a `name`, a `description` that says when to use it, and at most 40 lines of steps, each citing the file or command it comes from;
- shown to you before it is written, and written only after your OK. Claude Code reads `.claude/skills/`, so the agent asks whether it should go there too.

Later sessions refine it with `learn`. Nothing is installed or published from it: it stays in the repository, for the people who work in it.

## Read next

- [How it works](/skills/how-it-works/): the pipeline, the guardrails, the profile and the lessons.
- [Updates](/skills/updates/): keep the skills current.
- [Troubleshooting](/skills/troubleshooting/): `agent-skills doctor` names each problem with its fix.
