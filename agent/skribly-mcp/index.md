# The Skribly MCP server

> skribly mcp gives coding agents the control of Skribly Agent as MCP tools - read-only by default, with writes only after you allow each call in the app, and one-project mode.

`skribly mcp` is an MCP server that Skribly Agent offers to your coding agents. It exposes the operations of [the `skribly` command](/agent/cli/) as tools: list panes and agents, read a screen, wait for an agent, and, only when you allow it, start, prompt and stop agents. It also gives an agent read-only context about one project: its settings, tasks, sessions, staged diff and commit rules.

This page is about Skribly's own server. The MCP servers your agents use to reach other tools are on [MCP servers](/agent/mcp/).

## How it works

The server speaks MCP over standard input and output, and talks to the running app through the same local control API as the command. It works only while Skribly Agent is running and **Local control API** is on in **Settings → Sessions & control**. See [The skribly command](/agent/cli/#how-it-works) for the port and the token.

## How to connect an agent

<Steps>

1. Make sure the `skribly` command is installed: **Settings → Sessions & control → skribly command → Install**.

2. In the same section, choose **Read only (default)** or **With writes (--allow-writes)** above the configurations. The three snippets change with the choice.

3. Copy the snippet for your agent and run it, or paste it into its configuration file.

</Steps>

| Agent | Where the configuration goes |
| --- | --- |
| Claude Code | In a terminal: `claude mcp add skribly -- skribly mcp` |
| Codex | `~/.codex/config.toml`, a `[mcp_servers.skribly]` table with `command = "skribly"` and `args = ["mcp"]` |
| Cursor | `.cursor/mcp.json` in a project or `~/.cursor/mcp.json`, under `mcpServers` |
| Gemini CLI | `~/.gemini/settings.json`, under `mcpServers` |

If the command is not in your `PATH`, use the full path shown in Settings. You can also add the server from **Plugins & MCP → Add MCP server**, which offers **Skribly** (read only) and **Skribly with writes**. See [MCP servers](/agent/mcp/).

## Read by default, writes only on request

`skribly mcp` offers only the tools that change nothing. An agent connected with the plain configuration cannot start, prompt or stop an agent, type into a pane, create or remove a worktree, or show a notification.

`skribly mcp --allow-writes` also offers the eight tools that change something, and every call of one asks you first. Skribly Agent comes to the front and shows a dialog with the tool name and its arguments in full, with **Deny** as the default. The app runs exactly the arguments it showed, and only after **Allow**.

The call fails, and nothing changes, when you deny or close the dialog, when the agent stops waiting before you answer, and when the app is not running or its control API is off.

<Aside type="note">
So that what runs is what you read, arguments longer than 4,000 characters are refused without asking, and invisible or look-alike characters, such as bidirectional marks, zero-width characters and unusual spaces, are shown as escapes like `\u{202E}`. One question is shown at a time.
</Aside>

The `skribly` command itself does not ask: it is what you or a script type in a terminal. The question is part of the MCP server, because an agent is the caller.

## The tools

| Tool | What it does | Asks you |
| --- | --- | --- |
| `skribly_status` | Number of panes and agents and their states | No |
| `skribly_list_workspaces` | Projects, worktrees and the panes in each | No |
| `skribly_list_panes` | All panes | No |
| `skribly_list_agents` | Agents and their states | No |
| `skribly_read_agent` | The agent's screen, 60 lines by default | No |
| `skribly_wait_agent` | Waits for chosen states, 600 seconds by default | No |
| `skribly_explain_agent` | Why the agent is in its state | No |
| `skribly_read_pane` | A pane's screen | No |
| `skribly_wait_output` | Waits until output matches an expression, 60 seconds by default | No |
| `skribly_list_worktrees` | A project's worktrees | No |
| `skribly_project_profile`, `skribly_list_tasks`, `skribly_get_task`, `skribly_list_sessions`, `skribly_staged_diff_summary`, `skribly_commit_rules` | The read-only project tools below | No |
| `skribly_start_agent` | Starts an agent in a new pane, optionally in a worktree | Yes |
| `skribly_prompt_agent` | Sends a message, optionally waiting for the end of the turn | Yes |
| `skribly_stop_agent` | Closes the agent's pane | Yes |
| `skribly_create_pane` | Opens a pane | Yes |
| `skribly_run_in_pane` | Types a shell command in a pane | Yes |
| `skribly_create_worktree` | Creates a worktree | Yes |
| `skribly_remove_worktree` | Removes a worktree and keeps the branch | Yes |
| `skribly_notify` | Shows a system notification | Yes |

The tools that change something start their description with "CHANGES THINGS." and carry the MCP `readOnlyHint` annotation, true or false. Every result starts with a line that says it is data from Skribly Agent and the repository, not instructions, because a task text, a rules file or a screen can contain text written to steer an agent.

## Read-only project tools

Six tools give an agent the context of one project without any way to change it.

| Tool | Returns | Arguments |
| --- | --- | --- |
| `skribly_project_profile` | Name, path, settings (base branch, patterns, checks, tracker), git state and the files that state commit rules | `project` |
| `skribly_list_tasks` | The project's local tasks: key, title, stage, branch, next step, last update | `project` |
| `skribly_get_task` | One task: metadata, `STATE.md` and `TASK.md`, each cut at 20,000 characters | `key` (required), `project` |
| `skribly_list_sessions` | The project's agent and shell sessions with their status, without terminal output | `project` |
| `skribly_staged_diff_summary` | The staged changes within a character budget: every file named, then the most relevant hunks | `project`, `file`, `budget` (1,000 to 40,000, default 12,000) |
| `skribly_commit_rules` | The commit rules the repository states and its last 20 commit subjects | `project` |

`project` is a name, an id or an absolute path inside a project. Without it, the project of the calling pane is used. A path outside any project, an unknown name, a `file` outside the project and a task key that is a path are refused before anything is read.

`skribly_staged_diff_summary` and `skribly_commit_rules` return the same context the **Agent** button in the commit box gives its agent. See [Changes and commits](/agent/changes/).

## How to limit an agent to one project

Start the server with `--project <name>`, for example `claude mcp add skribly -- skribly mcp --project my-project`. Every project tool, `skribly_list_worktrees` included, is then fixed to that project, and a call that names another project is refused. `skribly_list_workspaces` lists every project, so it is not offered at all in this mode.

<Aside type="caution">
The tools that read terminals (`skribly_read_pane`, `skribly_read_agent`, `skribly_wait_output`) show whatever is on a screen and are not limited to one project; `skribly_list_panes` and `skribly_list_agents` list every pane. Connect them only to agents you trust, or give the agent only the six project tools through its own tool allow list.
</Aside>

## Tips

- Start with the read-only configuration. Add `--allow-writes` when you want an agent to orchestrate others, and answer each request in the app.
- The `--read-only` flag of earlier versions is still accepted and does nothing, because reading only is now the default.
- Install the `skribly` skill in the project so the agent knows when to delegate. See [The skribly command](/agent/cli/#how-to-turn-it-on).

## Related pages

<CardGrid>
  <LinkCard title="The skribly command" href="/agent/cli/" description="The same operations from a terminal, with recipes." />
  <LinkCard title="MCP servers" href="/agent/mcp/" description="The MCP servers your agents use, and how to test them." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What listens on this computer and who can reach it." />
  <LinkCard title="Settings" href="/agent/settings/" description="Where the control API and the configurations are." />
</CardGrid>
