# Rule dictionary

> The rules of agent-skills as data - one sentence, a severity and a public source per rule - listed for the files in hand and checked line by line with agent-skills rules --check.

:::note[In development]
The rule dictionary and the commands on this page ship in the next release; the released agent-skills 0.3.0 does not have them yet.
:::

The rule dictionary holds the common mistakes of each technology as data, one file per rule: Node, PHP, Python, Go, Java, databases and migrations, mobile, Docker, CI, infrastructure, data and ML, security, testing and docs, and the frameworks Next.js, React, Vue, Angular, Express, Tailwind CSS, Laravel, Django, Pydantic, SQLAlchemy, Ruby on Rails, Spring Boot, .NET, Kubernetes and Flutter. The `framework-guide` skill reads the rules of the framework at hand; the commands below read them without a skill.

Every rule has:

| Field | What it holds |
| --- | --- |
| Id | a stable name such as `nextjs/async-request-apis` |
| Rule | one sentence |
| Severity | `critical`, `high`, `medium` or `low` |
| Versions | the framework versions it is for, such as `15+` (optional) |
| Applies to | the files it is for, written like `.gitignore` patterns |
| Source | the title and address of a public page that says so |
| Why, fix, examples | a short reason, the fix, and a bad and a good example |
| Check | a one-line pattern that finds the bad case, or the reason why a line cannot show it |

## List the rules

```bash
agent-skills rules --tech docker
agent-skills rules --files src/app/page.tsx,Dockerfile --severity high
agent-skills rules --tech go --json
```

One line per rule: the id, the severity, the rule and its source. `--tech` keeps the given technologies, `--files` the rules that apply to those files, and `--severity` that level and above, most severe first.

## Check a project

```bash
agent-skills rules --check
agent-skills rules --check --project ../shop --tech nextjs,react
agent-skills rules --check --files src/app/page.tsx --json
```

`--check` runs the rules that carry a line pattern over the project, or over the given files, and prints one line per finding: `file:line rule-id (severity, versions): rule source-address`. The exit code is 1 when there is a finding, so the command fits a CI step. A pattern is at most 200 characters and must match the bad example of its rule and not the good one; some patterns run only in files that import the framework, so code of another library is not reported.

The command reads only text: it skips files over 1 MB, binary files, lines past 1,000 characters, dependency and build folders such as `node_modules`, `vendor`, `dist` and `.venv`, and paths outside the project, and it stops at 20,000 files and 1,000 findings. Nothing in the project is changed.

A rule whose bad case is something missing, spans several lines or depends on history (a missing `USER` in a Dockerfile, an `await` before a use of `context`, a migration that already ran) has no pattern. It says why in its data, and the last line of the report counts these review-only rules: read them with `agent-skills rules`.

## Read next

- [All rules](/skills/all-rules/): every rule by technology, with its severity and source.
- [Agent tooling](/skills/tooling/): the other commands of the CLI.
- [`framework-guide`](/skills/skill/framework-guide/): the skill that reads these rules, also in the next release.
