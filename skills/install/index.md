# Install agent-skills

> Install agent-skills for one or all eight agents, at user or project scope, keep it updated and remove it cleanly.

## Requirements

- `git` and **Node.js 20 or newer** (`node --version`). No npm packages are installed: the CLI and every skill script use only Node's standard library.
- At least one supported agent: Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot or Devin.

:::note[Access]
The repository is private for now, so cloning needs access to the Skribly organisation on GitHub.
:::

## Install in a minute

<Steps>

1. Clone the repository and put the command on your `PATH`:

   ```bash
   git clone https://github.com/skribly/agent-skills.git ~/agent-skills
   cd ~/agent-skills
   npm link
   ```

2. Install every skill for every agent, at user scope:

   ```bash
   agent-skills install --target all
   ```

3. Turn off Claude Code's own attribution and check the result:

   ```bash
   agent-skills config attribution off
   agent-skills doctor
   ```

4. Restart your agent, or open a new chat, so it reads its skills folder again. Then try `/task 123` in Claude Code or `$task 123` in Codex.

</Steps>

On Windows use the same commands in PowerShell with `$HOME\agent-skills`. Folder links are created as junctions, which need no administrator rights. Without `npm link`, run `node cli/agent-skills.mjs …` or `bin\agent-skills.cmd …`.

## User scope or project scope

| | User scope (default) | Project scope |
| --- | --- | --- |
| Command | `agent-skills install --target all` | `agent-skills install --target all --project ~/code/shop` |
| Where | `~/.claude/skills`, `~/.agents/skills`, … | `<project>/.claude/skills`, `<project>/.agents/skills`, … |
| How | Symlinks to the repository | Copies |
| Updates | `git pull`, then `agent-skills sync` | `agent-skills sync` after `git pull` |
| Good for | Your own machine, all projects | Sharing with a team through the project's repository |

A project-scope install also detects the project profile, `.skribly/project.json`; pass `--no-detect` to skip it.

You can mix them: install everything at user scope and commit `task` and `commit` into a team project so colleagues get them too. Choose explicitly with `--scope user|project`, `--link` or `--copy`.

## Choose skills and agents

```bash
agent-skills install --target claude,codex --skills task,commit,handoff,review,test-loop,token-saver
agent-skills list
```

`--target` takes `claude`, `codex`, `cursor`, `gemini`, `opencode`, `windsurf`, `copilot`, `devin` or `all`. `--format rules` writes the classic formats for older agent versions; see [Supported agents](/skills/agents/).

## Recommended setup

```bash
agent-skills config attribution off             # Claude Code: no Co-Authored-By trailer or PR footer
cd ~/code/shop && agent-skills hooks install    # per repository: strip AI trailers from any tool
```

Then configure your tracker as in [Trackers](/skills/trackers/).

## Connect a tracker

```bash
agent-skills tasks check
agent-skills tasks list
agent-skills tasks fetch 482
```

Credentials come from environment variables or `~/.config/agent-skills/credentials.env`, never from the repository. The first fetch writes `.tasks/<id>/TASK.md`, later fetches print only what changed, and `.tasks/` is excluded locally, so fetched tickets stay out of commits.

## Update and remove

```bash
cd ~/agent-skills && git pull && agent-skills sync      # refresh everything that was installed
agent-skills uninstall --target all                     # user scope
agent-skills uninstall --target all --project ~/code/shop
```

Installs are recorded in `~/.config/agent-skills/installs.json` with a hash of each file. `uninstall` removes only what agent-skills installed, keeps files you edited unless you pass `--force`, and deletes folders it leaves empty. A file agent-skills did not write is never overwritten; with `--force` it is moved to `<path>.bak-agent-skills` first.

## CLI reference

| Command | Purpose |
| --- | --- |
| `agent-skills list [--json]` | The catalogue |
| `agent-skills install --target <agents\|all> [--scope user\|project] [--project <dir>] [--skills a,b] [--link\|--copy] [--format skills\|rules] [--dry-run] [--force]` | Install |
| `agent-skills uninstall --target … [--scope] [--project] [--skills]` | Remove only what was installed |
| `agent-skills sync` | Re-apply every recorded install after `git pull` |
| `agent-skills project [--project <dir>] [--dry-run] [--json]` | Detect the project into `.skribly/project.json`, keeping values set by hand |
| `agent-skills agent-files [--project <dir>] [--check] [--force] [--force-mcp] [--skills a,b\|all] [--dry-run] [--json]` | Generate the per-agent files of a repository from its `AGENTS.md`; see [Project instruction files](/skills/agents/#project-instruction-files) |
| `agent-skills doctor [--project <dir>] [--json]` | Agents, installs, trackers, hook, attribution and whether each agent is configured for the repository |
| `agent-skills hooks install\|uninstall\|status [--project <dir>]` | The `commit-msg` hook |
| `agent-skills config attribution off\|on\|status [--project <dir>]` | Claude Code attribution |
| `agent-skills tasks fetch\|attachments\|list\|comment-draft\|event\|detect\|check` | The tracker client; `event` prints the `skills.task.completed` event of a task |
| `agent-skills manifest [--check\|--write]` | Validate skills, sync shared files, regenerate `skills.json` |

## With Skribly Agent

[Skribly Agent](/agent/features/#skills) clones agent-skills, shows the catalogue from `skills.json` (a stable v1 contract with a JSON schema), installs the chosen skills per project and per agent through this CLI, and can ask an agent to adapt them to the project. It runs the CLI with its own runtime, so no separate Node.js is needed there.
