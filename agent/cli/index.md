# The skribly command

> Control panes and agents of Skribly Agent from outside the window with the skribly command - commands, exit codes, recipes for reviewers and parallel worktrees, and safety.

The `skribly` command lets agents, scripts and you control panes from outside the window. An agent can start a reviewer next to itself, wait for it and read the result. The MCP server, `skribly mcp`, exposes the same operations to agents as MCP tools; it is described on its own page, which is planned.

## How it works

- A control API runs inside the app and listens only on `127.0.0.1`, on a random free port.
- The port and a random token are written to `~/.skribly/control.json`, readable only by you. Requests without a valid token get `401`.
- `skribly` is a Node script with no dependencies. It works only while the app is running.
- Sessions started this way appear in the **Agents** view like any other.

## Turn it on

1. Open **Settings → Sessions & control → Local control API**. It is on by default.
2. Under **skribly command**, choose **Install** to add the command to your `PATH`.
3. Optionally install the `skribly` skill in a project. It teaches Claude Code and Codex when and how to delegate work.

## Commands

Commands take a target: a session name such as `reviewer`, a pane id, or `current` for the pane you are calling from. Every command prints JSON, and `--text` prints plain text for `read` and `explain`.

| Command | What it does |
| --- | --- |
| `skribly status` | Number of panes and agents, and their states |
| `skribly workspace list` | Projects, worktrees and the panes in each |
| `skribly pane list` | All panes, shells and agents |
| `skribly pane create` | Opens a new pane |
| `skribly pane run` | Types a shell command and Enter |
| `skribly pane read` | Reads the screen as text |
| `skribly pane wait-output` | Waits until output matches a regular expression |
| `skribly pane rename` | Names a pane for the API |
| `skribly pane close` | Closes a pane |
| `skribly agent list` | Agents and their states |
| `skribly agent start` | Starts a named agent in a new pane, optionally in a worktree |
| `skribly agent prompt` | Sends a message, and can wait for the end of the turn |
| `skribly agent read` | Reads the agent's screen |
| `skribly agent wait` | Waits for chosen states |
| `skribly agent explain` | Shows why the agent is in its state |
| `skribly agent stop` | Closes the agent's pane |
| `skribly worktree list` | Lists a project's worktrees |
| `skribly worktree create` | Creates a worktree |
| `skribly worktree remove` | Removes a worktree and keeps the branch |
| `skribly notify` | Sends a system notification |
| `skribly mcp` | Runs the MCP server |

| Code | Meaning |
| --- | --- |
| `0` | Success |
| `1` | Error, such as an unknown target |
| `2` | Bad usage or no connection |
| `124` | Timeout exceeded |

## Recipes

### A reviewer next to the implementer

```bash
skribly agent start reviewer --kind claude --prompt "Review the changes from git diff."
skribly agent wait reviewer --until done --timeout 600
skribly agent read reviewer --lines 60 --text
```

### Parallel worktrees

Each agent gets its own directory and branch, so they do not overwrite each other's files.

```bash
skribly agent start impl-api --kind codex --worktree feature/api-export --prompt "Build the CSV export endpoint per SPEC.md"
skribly agent start impl-ui --kind claude --worktree feature/ui-export --prompt "Build the export button per SPEC.md"
skribly agent wait impl-api --until finished --timeout 1800
skribly agent wait impl-ui --until finished --timeout 1800
```

### Wait, then react

`blocked` means the agent is asking for permission or a choice.

```bash
skribly agent wait impl-api --until done,blocked --timeout 900
skribly agent explain impl-api --text
skribly agent read impl-api --lines 30 --text
skribly agent prompt impl-api "1"
```

### Wait for a shell command

```bash
skribly pane create tests --kind shell
skribly pane run tests npm test
skribly pane wait-output tests "Tests:.*(passed|failed)" --timeout 300 --new
```

## Safety

Other system users cannot read `control.json`, but any process of your own user can. If you do not use the API, turn it off with its switch in **Settings**. The ports the app opens are listed in [Data and network](/agent/data-and-network/#ports).

## Read next

- [Keyboard shortcuts](/agent/shortcuts/): pane, app and editor keys.
- [Data and network](/agent/data-and-network/): what listens and who can reach it.
- [Features](/agent/features/): the CLI in the context of the other views.
