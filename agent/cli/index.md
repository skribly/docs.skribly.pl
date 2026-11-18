# The skribly command

> Control panes and agents of Skribly Agent from outside the window with the skribly command - targets, every command, exit codes, recipes for reviewers and parallel worktrees, and safety.

The `skribly` command lets agents, scripts and you control panes from outside the window. An agent can start a reviewer next to itself, wait for it and read the result. The same operations are offered to agents as MCP tools by [the Skribly MCP server](/agent/skribly-mcp/), which is started with `skribly mcp`.

## How it works

- A control API runs inside the app and listens only on `127.0.0.1`, on a random free port.
- The port and a random token are written to `~/.skribly/control.json`, readable only by you. Requests without a valid token get `401`. The `SKRIBLY_CONTROL` variable can point to another file.
- `skribly` is a small script without dependencies. The installed command runs it inside the Skribly app in a mode without a window, so a separate Node.js is not needed.
- It works only while the app is running.
- A call from a Skribly pane passes that pane and its folder, so `current` and the default project mean the pane you are calling from.
- Sessions started this way appear in the **Agents** view like any other.

## How to turn it on

<Steps>

1. Open **Settings → Sessions & control → Local control API**. It is on by default; the badge shows the port.

2. Under **skribly command**, press **Install**. The command goes to `~/.local/bin/skribly` on macOS and Linux and to `%LOCALAPPDATA%\Skribly\bin` on Windows. If that folder is not in your `PATH`, Skribly says what to add, for example `export PATH="$HOME/.local/bin:$PATH"` in `~/.zshrc`.

3. Optionally install the **"skribly" skill for agents** in a project. It teaches Claude Code and Codex when and how to delegate work.

</Steps>

## Targets

Commands that act on an existing pane take a target.

| Target | Example | Notes |
| --- | --- | --- |
| Agent name | `reviewer` | Given at start (lower case, letters, digits, `_` and `-`, up to 32 characters) and shown as an `@name` badge in the pane. `pane rename` gives a name later |
| Pane id | `3f2c9a1e-…` | At least the first 4 characters. From `pane list` or `agent list` |
| `current` | `current` | The pane the command was called from, only inside a Skribly terminal |

`--kind` takes `claude`, `codex`, `cursor`, `gemini`, `opencode`, `copilot`, `aider`, `amp`, `droid`, `qwen`, `goose`, `crush`, `kimi`, or `custom:<id>` for a custom agent from Settings. `--project` takes a project name, id or path. Timeouts are in seconds.

## Commands

| Command | What it does |
| --- | --- |
| `skribly status` | Number of panes and agents, and their states |
| `skribly workspace list` | Projects, their worktrees and the panes in each, with one rolled-up state |
| `skribly pane list` | All panes, shells and agents |
| `skribly pane create [name] [--kind shell\|<agent>] [--project P\|--cwd D] [--title T] [--prompt X] [--worktree BRANCH] [--machine M]` | Opens a new pane |
| `skribly pane run <target> <command…>` | Types a shell command and Enter |
| `skribly pane read <target> [--lines N]` | Reads the screen and the last lines as text |
| `skribly pane wait-output <target> <regex> [--timeout S] [--new]` | Waits until the output matches; `--new` looks only at output after the call |
| `skribly pane rename <target> [name]` | Names a pane for the API |
| `skribly pane close <target>` | Closes a pane |
| `skribly agent list` | Agents and their states: `working`, `blocked`, `done`, `idle`, `exited` |
| `skribly agent start <name> --kind <agent> [--project P\|--cwd D] [--prompt X] [--worktree BRANCH] [--base REF] [--machine M] [--title T]` | Starts a named agent in a new pane; with `--worktree`, in a worktree of that branch |
| `skribly agent prompt <target> <text…> [--wait] [--timeout S] [--lines N]` | Sends a message; with `--wait` it waits for the end of the turn and returns the screen |
| `skribly agent read <target> [--lines N]` | Reads the agent's screen |
| `skribly agent wait <target> [--until done,idle,blocked\|finished] [--timeout S]` | Waits for one of the states; the default is `done,idle,blocked,exited`, and `finished` means the same |
| `skribly agent explain <target>` | Shows why the agent is in its state: the rule, the process and the screen |
| `skribly agent stop <target>` | Closes the agent's pane, which ends the agent |
| `skribly worktree list [--project P]` | Lists a project's worktrees |
| `skribly worktree create <branch> [--base B] [--project P]` | Creates a worktree; an existing branch is checked out, a new one starts from the base or `HEAD` |
| `skribly worktree remove <path\|branch> [--force] [--project P]` | Removes the worktree folder and keeps the branch |
| `skribly notify <title> [body…]` | Sends a system notification |
| `skribly mcp [--allow-writes] [--project P]` | Runs the MCP server on standard input and output; see [the Skribly MCP server](/agent/skribly-mcp/) |
| `skribly --help` | Prints the help |

## Output and exit codes

Every command prints JSON to standard output. `--text` with `read` and `explain` prints plain text. Errors go to standard error as `{"error": "…"}`.

| Code | Meaning |
| --- | --- |
| `0` | Success |
| `1` | Error, such as an unknown target |
| `2` | Bad usage or no connection: Skribly is not running, the API is off or the token is stale |
| `124` | The timeout was exceeded in `wait`, `wait-output` or `prompt --wait` |

## Recipes

### A reviewer next to the implementer

```bash
skribly agent start reviewer --kind claude --prompt "Review the changes from git diff. List issues from most severe, with file:line."
skribly agent wait reviewer --until done --timeout 600
skribly agent read reviewer --lines 60 --text
```

Called from a Skribly pane, the reviewer starts in that pane's project. You see it in the pane next to the implementer and can answer it. For the next turn, one command is enough:

```bash
skribly agent prompt reviewer "Check again after the fixes" --wait --timeout 600 --lines 40
```

### Parallel worktrees

Each agent gets its own folder and branch, so they do not overwrite each other's files.

```bash
skribly agent start impl-api --kind codex --worktree feature/api-export --prompt "Build the CSV export endpoint per SPEC.md"
skribly agent start impl-ui --kind claude --worktree feature/ui-export --prompt "Build the export button per SPEC.md"
skribly agent wait impl-api --until finished --timeout 1800
skribly agent wait impl-ui --until finished --timeout 1800
```

Combine the results with a normal merge, then clean up with `skribly worktree remove feature/api-export`. See [Worktrees](/agent/worktrees/).

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

<Aside type="caution">
Other system users cannot read `control.json`, but any process of your own user can, and with the token it controls your agents. The `skribly` command itself never asks before it acts. If you do not use the API, turn it off with its switch in **Settings**.
</Aside>

The ports the app opens are listed in [Data and network](/agent/data-and-network/#ports).

## Related pages

<CardGrid>
  <LinkCard title="The Skribly MCP server" href="/agent/skribly-mcp/" description="The same control as MCP tools, read-only by default." />
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="Sessions started by the command appear here." />
  <LinkCard title="Worktrees" href="/agent/worktrees/" description="Separate folders and branches for parallel agents." />
  <LinkCard title="Keyboard shortcuts" href="/agent/shortcuts/" description="Pane, app and editor keys." />
</CardGrid>
