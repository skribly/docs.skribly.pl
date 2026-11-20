# Agent tooling

> Commands of the agent-skills CLI that make coding agents safer and cheaper - a delete guard, a status line, read-only permission presets, an MCP smoke test and a coding agent job for CI.

:::note[In development]
The commands on this page ship in the next release; the released agent-skills 0.3.0 does not have them yet.
:::

These commands sit next to the skills without being skills. Each is Node with no dependencies, runs on macOS, Linux and Windows, and every one that writes takes `--dry-run`.

| Command | What it does |
| --- | --- |
| `agent-skills hooks install --agent-guard` | a delete guard hook for every agent that has hooks |
| `agent-skills guard "<command>"` | says whether the guard would stop a command |
| `agent-skills statusline [install]` | one short status line: agent, model, branch, task, session tokens |
| `agent-skills permissions [--dry-run]` | allow lists of read-only commands per agent, from `.skribly/project.json` |
| `agent-skills mcp-smoke` | starts each configured MCP server, lists its tools, calls one read-only tool |
| `templates/ci/` | a coding agent in CI on an issue label: plan, code, review, draft pull request |
| `agent-skills init --mcp` | adds the official MCP server of each detected framework to each agent's project MCP file |
| `agent-skills rules [--check]` | the rule dictionary for the files in hand, and its line checks over a project ([Rule dictionary](/skills/rules/)) |
| `templates/nightly/` | a nightly report of a repository: checks, audit, outdated packages, agent branches |
| `deps-update/scripts/dependabot.mjs` | one Dependabot preset for the detected stack |
| `/upgrade` | a major version of a framework or runtime by its migration guide, one area at a time |

## Delete guard

```bash
agent-skills hooks install --agent-guard                 # Claude Code, Codex, Gemini CLI, OpenCode
agent-skills hooks install --agent-guard --agents all    # also Cursor and GitHub Copilot
agent-skills hooks status --agent-guard
agent-skills hooks uninstall --agent-guard
```

The guard reads each shell command an agent is about to run. These make the agent **ask you** instead of running it:

- a recursive or forced delete of the file system root, the home folder or a folder above it, a `.git` folder, anything outside the project or the whole project;
- a delete of 20 or more tracked files at once;
- `git clean --force`, and `rsync --delete` into those places;
- a delete hidden in inline code (`node -e`, `python -c`, `sh -c`, `eval`, PowerShell `-Command`).

Deleting a few files inside the project, or ignored folders such as `node_modules` and `dist`, passes. The guard fails closed: an option it does not know counts as recursive and forced, wrappers such as `sudo`, `env` and `xargs` are looked through, and a path it cannot resolve asks. Install and uninstall touch only the guard's own entries; your own hooks stay.

| Agent | File | Answer |
| --- | --- | --- |
| Claude Code | `.claude/settings.json` | asks you |
| Codex | `.codex/hooks.json` | refuses with the reason, so the agent asks you |
| Gemini CLI | `.gemini/settings.json` | refuses with the reason, so the agent asks you |
| OpenCode | `.opencode/plugins/agent-skills-delete-guard.js` | refuses with the reason |
| Cursor | `.cursor/hooks.json` | asks you |
| GitHub Copilot | `.github/hooks/agent-skills-delete-guard.json` | refuses with the reason |

The guard itself lives in `.agents/hooks/delete-guard.mjs`: commit that folder with the hook files, or run the install once per person. Codex runs hooks only with `codex_hooks = true` under `[features]` in `~/.codex/config.toml`.

## Status line

```bash
agent-skills statusline install            # Claude Code: statusLine in ~/.claude/settings.json
agent-skills statusline --agent codex      # in tmux or a shell prompt
```

One line such as `claude · Model X · feat/cart · task 482 · 42k tok (21%)`: the agent, the model, the git branch, the task of `.tasks/` whose `STATE.md` names that branch, and the tokens of the session. Codex and Gemini CLI have no status line of their own, so for them the line goes into tmux (`status-right "#(agent-skills statusline --agent codex --no-stdin)"`) or a prompt. A `statusLine` that is not ours is kept unless you pass `--force`.

## Permission presets

```bash
agent-skills permissions --dry-run
agent-skills permissions --agents claude,codex
```

Writes allow lists of read-only commands so agents ask less: `git status`, `git diff`, `git log`, `grep`, plus the `test`, `lint` and `typecheck` commands of the profile when each is a plain command. A command with shell operators, quotes or variables, or with a word that writes, pushes, deletes, installs or reaches the network (`--fix`, `--write`, `push`, `rm`, `curl`, `npx`), is listed as `skipped` and never allowed.

| Agent | File |
| --- | --- |
| Claude Code | `.claude/settings.json`, `permissions.allow` |
| Codex | `.codex/rules/agent-skills.rules` |
| Gemini CLI | `.gemini/settings.json`, `tools.allowed` |
| OpenCode | `opencode.json`, `permission.bash` |

Entries are added; your own allow and deny entries stay. Codex, Gemini CLI and OpenCode match by prefix, so keep write flags out of the profile's commands. Cursor, Copilot and Devin keep their allow lists in their own settings, which this command does not write.

## MCP smoke test

```bash
agent-skills mcp-smoke --dry-run          # what would be started
agent-skills mcp-smoke --timeout 15
agent-skills mcp-smoke --server notes --no-call
```

Reads the MCP servers of `.mcp.json`, `.cursor/mcp.json`, `.gemini/settings.json`, `.vscode/mcp.json`, `opencode.json` and `.codex/config.toml`. Each local server is started without a shell, asked for its tools, and when a tool says it is read-only and needs no arguments, that tool is called; then the server is stopped. Remote servers are listed as skipped and never contacted. One line per server (`ok`, `fail`, `skip`), and exit code 1 when one fails. In a repository you did not write, run `--dry-run` first: the command starts the programs the project configures.

## A coding agent in CI

`templates/ci/` in the repository holds a GitHub Actions workflow, a GitLab CI file and `run-agent.mjs`. Adding a label to an issue runs the agent in three phases, plan, code and review, with a budget of turns, minutes and changed files, and ends with a draft pull or merge request. Nothing merges. Secrets come only from the CI secret store, and the issue text never reaches a shell line. The same runner works from a timer on your own server.

## Framework MCP servers

```bash
agent-skills init                 # names the official MCP servers it found
agent-skills init --mcp --dry-run # what would be added
agent-skills init --mcp
```

`init` offers the MCP server that the vendor of each detected framework publishes: Next.js (`next-devtools-mcp`), the Angular CLI, Svelte, Nuxt (remote), Laravel Boost once `laravel/boost` is installed, Dart and Flutter, Go's `gopls` and Terraform. Each command is the one on the vendor's MCP page. `--mcp` adds them to the project MCP file of each chosen agent, in the shape that agent reads: `.mcp.json` (Claude Code), `.cursor/mcp.json`, `.vscode/mcp.json` (Copilot), `.gemini/settings.json` (Gemini CLI and Antigravity) and `.codex/config.toml`. A server you already configured under the same name is never changed, a JSON file keeps a `.bak-agent-skills` copy, and a second run changes nothing. Check the result with `agent-skills mcp-smoke`.

## Nightly report

`templates/nightly/` holds `nightly-report.mjs` (Node with no dependencies) with a systemd user service and timer, and a README with a cron line instead. Each night it runs the checks of `.skribly/nightly.json`, or the plain `test`, `lint`, `typecheck` and `build` commands of `.skribly/project.json`, then `npm audit` or `composer audit` and `npm outdated`, and counts the agent branches and CI agent reports of the last day. It writes `.skribly/reports/nightly-<date>.md` with one line per item: its state, its time and the first error line. Every program starts without a shell and with a timeout; nothing in the repository is installed, fixed, committed or pushed, and nothing is sent anywhere. `--strict` exits 1 on a failure, for a notifier of your own.

## Dependabot preset

```bash
node skills/deps-update/scripts/dependabot.mjs            # print it
node skills/deps-update/scripts/dependabot.mjs --write    # write .github/dependabot.yml
```

The script reads the stack of the repository and writes one entry per ecosystem and folder (npm, bun, composer, pip, uv, bundler, gomod, cargo, maven, gradle, nuget, docker, docker-compose, terraform and GitHub Actions; test fixtures left out). All entries run weekly on the same day and time (`--day`, `--time`, `--timezone`); minor and patch updates are grouped into one pull request per ecosystem, a major comes alone, and security updates are grouped apart so they arrive at once. An existing different file is kept unless you pass `--force`. The `deps-update` skill offers it and writes it only after your OK.

## Major upgrades

`/upgrade` (or `$upgrade` in Codex) moves a project to a new major version of its framework or runtime, such as Next.js 16, Laravel 12 or Django 5. It reads the installed version from the lock file and the migration guide of the target version, and runs the vendor's own tool (`next upgrade`, `ng update`, a codemod, `rector`, `django-upgrade`, `rails app:update`) only after it shows you that tool's plan. The guide is split into areas of one commit each. Every area gets a failing or pinning test first, a bump through the package manager, only the changes the guide names and the checks, and waits for your OK before the next one. An area that stays red is reverted alone. Routine minor and patch bumps stay with `deps-update`.

## Read next

- [Rule dictionary](/skills/rules/): `agent-skills rules` and `rules --check`.
- [How it works](/skills/how-it-works/): the pipeline and its guardrails.
- [Commits without AI trailers](/skills/commits/): the commit-msg hook and the attribution setting.
- [Troubleshooting](/skills/troubleshooting/): `agent-skills doctor`.
