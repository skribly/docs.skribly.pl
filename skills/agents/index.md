# Supported agents

> Where agent-skills installs skills for Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot and Devin, and how you call them in each. Also the per-agent files that `agent-skills agent-files` generates from `AGENTS.md`.

Every supported agent reads native **Agent Skills** folders: `<name>/SKILL.md` with `name` and `description` front matter, and optional `reference/`, `scripts/` and `templates/`. Seven of them read the same shared folder, `.agents/skills`, so one copy serves Codex, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot and Devin. Claude Code reads only `.claude/skills`. Locations were checked against each vendor's documentation on 29 October 2026, and those for Devin and for the project instruction files on 11 November 2026.

## Default format: `--format skills`

| Agent | Target | Project scope (copy) | User scope (symlink) | Invoke |
| --- | --- | --- | --- | --- |
| Claude Code | `claude` | `.claude/skills/<name>/` | `~/.claude/skills/<name>` | `/task 123` |
| Codex CLI | `codex` | `.agents/skills/<name>/` | `~/.agents/skills/<name>` | `$task 123`, or pick from `/skills` |
| Cursor | `cursor` | `.agents/skills/<name>/` | `~/.agents/skills/<name>` | `/task 123` in Agent chat |
| Gemini CLI | `gemini` | `.agents/skills/<name>/` + `.gemini/commands/<name>.toml` | `~/.agents/skills/<name>` + `~/.gemini/commands/<name>.toml` | `/task 123` |
| OpenCode | `opencode` | `.agents/skills/<name>/` + `.opencode/commands/<name>.md` | `~/.agents/skills/<name>` + `~/.config/opencode/commands/<name>.md` | `/task 123` |
| Windsurf | `windsurf` | `.agents/skills/<name>/` + `.windsurf/workflows/<name>.md` | `~/.agents/skills/<name>` + `~/.codeium/windsurf/global_workflows/<name>.md` | `/task 123` or `@task` |
| GitHub Copilot | `copilot` | `.agents/skills/<name>/` | `~/.agents/skills/<name>` | `/task 123` in VS Code chat or Copilot CLI |
| Devin | `devin` | `.agents/skills/<name>/` | `~/.agents/skills/<name>`; the Devin CLI also reads `~/.config/devin/skills` (on Windows `%APPDATA%\devin\skills`) | `@skills:task` in a prompt |

Gemini CLI, OpenCode and Windsurf load skills through a tool or an `@mention` rather than a slash command, so the installer also writes a thin command of a few lines: "use the `<name>` skill with these arguments". It never duplicates the skill text, so `git pull` and `agent-skills sync` are enough to update.

## Classic format: `--format rules`

For older agent versions:

| Target | Written | Notes |
| --- | --- | --- |
| `cursor` | `.cursor/rules/<name>.mdc` ("Agent Requested") | Project scope only |
| `windsurf` | `.windsurf/rules/<name>.md` (`trigger: model_decision`) | Project scope only; the 12,000-character limit per file is checked |
| `copilot` | `.github/instructions/<name>.instructions.md`; user scope `~/.copilot/instructions/` | No `applyTo`, so it is not attached to every request |
| `gemini` | `.gemini/commands/<name>.toml` with the whole skill inlined | `@{` and `!{` are neutralised so Gemini never injects files or runs commands from skill text |
| `opencode` | `.opencode/commands/<name>.md` with the whole skill inlined | |
| `claude`, `codex`, `devin` | Same as `skills` | They have no other format |

## Known overlaps

- Cursor, OpenCode and Copilot also read `.claude/skills` at project scope. With Claude and one of those in the same project, a skill may show twice. Install Claude at user scope and the others at project scope, or the reverse.
- Codex still loads the deprecated `~/.codex/skills`. agent-skills never writes there, and `agent-skills doctor` warns when old copies shadow the new ones.

## Not fully verified

- **Windsurf** now prefers `.devin/{rules,workflows,skills}` and reads `.windsurf/*` as a fallback. agent-skills writes `.windsurf/*`, which works in both the old and the renamed app, and the shared `.agents/skills`.
- **Gemini CLI** restricts file tools to workspace folders. Skills linked at user scope are activated through `activate_skill`, which grants access to the skill folder.

## Project instruction files

A repository keeps its instructions for coding agents in one file, `AGENTS.md`. Codex, OpenCode and Devin read it themselves. Claude Code, Gemini CLI, Cursor and Copilot need a small file of their own, and `agent-skills agent-files` generates those files from `AGENTS.md`, so you never write them by hand:

```bash
cd ~/code/shop                      # a repository with an AGENTS.md
agent-skills agent-files            # write what is missing or out of date
agent-skills agent-files --check    # write nothing, exit 1 when a generated file is missing or differs
agent-skills doctor                 # each agent: configured or not for this repository
```

Run it again after a `git pull` of agent-skills (new skill versions) or after a change to the structure of `AGENTS.md`. The pointer files contain no instructions, so editing `AGENTS.md` itself needs no re-run. The generator covers seven agents: Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, GitHub Copilot and Devin. Windsurf reads `.agents/skills` and `AGENTS.md` too, so a generated repository works there without an extra file.

| File | For | Contents |
| --- | --- | --- |
| `CLAUDE.md` | Claude Code | A marker comment, then the one line `@AGENTS.md` |
| `GEMINI.md` | Gemini CLI | A marker comment, then `@./AGENTS.md` |
| `.cursor/rules/agents.mdc` | Cursor | An always-applied rule that references `@AGENTS.md` |
| `.github/copilot-instructions.md` | GitHub Copilot | A marker comment and a link to `../AGENTS.md` |
| `.claude/skills/<name>/` | Claude Code | The skills, copied |
| `.agents/skills/<name>/` | Codex, Cursor, Gemini CLI, OpenCode, Copilot, Devin (and Windsurf) | The same skills, once for all |
| `.mcp.json` | Claude Code | `{ "mcpServers": {} }`: read-only defaults and an empty server list |
| `.skribly/agent-files.json` | The command | What was generated; commit it with the other files |

Every text file starts with a comment that says it was generated by `agent-skills agent-files`. Claude Code strips that comment before it reads `CLAUDE.md`, so the agent still sees the single import line. `.mcp.json` never contains a token or a URL with credentials; servers are added by a person.

The command is safe to run again and again:

- **Twice is the same.** A second run changes nothing and prints `0 change(s)`; line endings do not matter.
- **Hand-written files are kept.** A `CLAUDE.md`, `GEMINI.md`, rule, instruction file or skill folder without the marker is reported and left alone, and the command exits 1. Move its content into `AGENTS.md` and delete it, or pass `--force`: the old file is saved as `<path>.bak-agent-skills` first.
- **Your own `.mcp.json` servers are kept.** `--force` leaves such a file alone; only `--force-mcp` replaces it, saving the old one as `.mcp.json.bak-agent-skills`. That backup may hold an `env` block with tokens, so delete it or ignore it before `git add`.
- **Your own skills are never touched.** Only folders named like an agent-skills skill are managed.
- **Everything stays inside the repository.** A link that points outside it is refused, reported and skipped; the command exits 1.
- **`--check` and `--dry-run` write nothing.** `--check` exits 1 when a generated file is missing, differs or has no marker, and is the gate to use in CI. `--skills a,b` limits which skills are copied, and `--json` prints a machine-readable report.

`agent-skills doctor` lists each of the seven agents as `configured` or `not configured` for the current repository, with the reason, for example `CLAUDE.md missing`. It reports; it does not change anything.

The generated files do not yet include the guard hook of each agent or the subagent roles of `.claude/agents/`.

## Agents in Skribly Agent

Skribly Agent runs 13 agents, more than agent-skills supports. Aider, Amp, Factory Droid, Qwen Code, Goose, Crush and Kimi CLI run in Skribly but have no skill target. See [Supported agents in Skribly Agent](/agent/agents/).
