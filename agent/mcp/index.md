# MCP servers

> The MCP servers tab of Skribly Agent lists the servers of Claude Code, Codex, Cursor and Gemini, switches them, checks that one answers and copies it.

The **MCP servers** tab, in **Plugins & MCP**, lists the MCP servers that Claude Code, Codex, Cursor and Gemini have configured, for you and for the open project. You can switch a server off without destroying its configuration, add one to several agents at once, check that it really starts and answers, and copy an entry from one agent to another. Nothing runs by itself and no secret is ever shown.

This page is about the servers the agents use. Skribly Agent has an MCP server of its own, `skribly mcp`, which is described in [The Agent's own MCP server](/agent/skribly-mcp/).

![The MCP servers tab: the servers of Claude Code, Codex, Cursor Agent and Gemini CLI with their scope, transport, on and off switches and the check, copy, folder and delete buttons](../../../assets/screens/agent-mcp.webp)

## Open the view

- Click **Plugins & MCP** in the activity bar on the left and choose the **MCP servers** tab, or
- open the command palette (`⌘K`) and choose **Plugins & MCP**.

On Windows and Linux use `Ctrl` in place of `⌘`. The view has no number shortcut: `⌘1` to `⌘9` stay with the first nine views.

## The list

There is one card per agent, with the number of its servers. A row shows the name, the scope, the transport and the command or address. The scope is **everywhere**, **project (repo)** or **project (only me)**. The transport is `stdio` for a program the agent starts, or `http` or `sse` for an address.

| Agent | Read from |
| --- | --- |
| Claude Code | `~/.claude.json` (everywhere, and per project) and `.mcp.json` in the project |
| Codex | `~/.codex/config.toml`, the `[mcp_servers.NAME]` sections |
| Cursor | `~/.cursor/mcp.json` and `.cursor/mcp.json` in the project |
| Gemini CLI | `~/.gemini/settings.json` and `.gemini/settings.json` in the project |

Each row has a switch and four buttons: the check, the copy, **Show file** (it opens the file the entry comes from) and **Delete server**. The agent sees a change in a new session.

## How to switch a server off and on

Press the switch of the row. Agents have no common "disabled" flag, so Skribly handles each format in its own way, and switching on restores exactly the same configuration.

| Server | Switching off |
| --- | --- |
| Codex | `enabled = false` in its section of `config.toml` |
| Claude Code, `.mcp.json` of the project | The name goes to `disabledMcpjsonServers` in `.claude/settings.local.json`. The `.mcp.json` from the repository stays untouched |
| Claude Code, everywhere or only me | The configuration is saved in Skribly's own stash (`mcp-stash.json` in the data folder) and the server is removed with `claude mcp remove`, or from the file when there is no CLI |
| Cursor and Gemini | The same stash, and the entry is removed from the file |

Servers in the stash show on the list as off. Skribly also reads switch-offs made by hand.

## How to add a server

<Steps>

1. Press **Add MCP server**. Pick a preset (Chrome DevTools, Playwright, Context7, Skribly, Skribly with writes, Figma (Dev Mode), Sentry, Atlassian or Linear) or fill the form in yourself.

2. Tick the agents in **To agent**. Choose the scope. Codex always saves to the user configuration, and the dialog says so.

3. Give a **Name** (letters, digits, `.`, `-` and `_`) and choose the **Transport**: `stdio` (a local program), HTTP or SSE.

4. For a program give the command and the **Arguments**. For an address give the address. Add environment variables (`KEY=value`, one per line) or, for an address, headers (`Name: value`, one per line).

5. Save. A message lists the files that were written.

</Steps>

Skribly writes the entry in each agent's own format: `claude mcp add-json` for Claude Code (or the file when there is no CLI), a new `[mcp_servers.<name>]` section for Codex, `mcpServers` in `mcp.json` for Cursor and in `settings.json` for Gemini.

The **Skribly with writes** preset starts `skribly mcp --allow-writes`. Every change it makes then asks you in the app first.

<Aside type="caution">
Prefer a reference to an environment variable over a value typed into the form. A value you type is written into the agent's file as it is. See [Extensions](/agent/extensions/) for entries that keep only the variable's name.
</Aside>

## How to check a server

The check shows what it would do before it does anything.

![The dialog Check server playwright: the command and folder that were started, and the answer in 550 ms with five tools](../../../assets/screens/agent-mcp-test.webp)

<Steps>

1. Press the check button on the row. Switch the server on first: a server that is off is not started.

2. A dialog shows what the test would do. For a program it shows the command with its arguments and the folder it would start in. For an address it shows the address. Environment variables and headers appear by name only, never by value. Nothing has started yet.

3. Press **Run the test**, or `Esc` to cancel. Skribly starts the program as its agent would (or sends the request to the address), does the first handshake (`initialize`), asks for the list of tools (`tools/list`) and stops the program with everything it started.

4. Read the result. The time limit is 20 seconds. A badge stays on the row until you reload the list.

</Steps>

| Result | Meaning |
| --- | --- |
| **running**, **Answered in** N ms with the number of tools and their names | The server started and answered |
| No answer within the time limit | The server took longer than 20 seconds |
| The server ended before it answered | The dialog gives the exit code and the last lines the program printed |
| Something that is not an MCP message | The program prints text that is not JSON-RPC |
| The command was not found | The command is not in `PATH` |
| The server wants a login | An address answered HTTP 401 or 403, or a login or token is needed |

Secrets are hidden everywhere in the dialog: values of variables and headers, `user:password@` in an address, query values, and the value after `--token`, `--api-key` or `--password` appear as `•••`, and the same values are cut out of error text. A server from a project file may use only the variables its own entry declares, so a cloned repository cannot send a variable of yours to an address.

With **No network calls by the app** on, a server with a remote address is not contacted, and the dialog says so. An address on this computer (`localhost`, `127.0.0.1`) is still tested. A program you start with a command is not stopped by the switch, and what that program does on the network is its own traffic. See [Data and network](/agent/data-and-network/).

## How to copy a server to another agent

<Steps>

1. Press the copy button on the row.

2. Choose **To agent** and the **Scope**. Codex has only the user file, Cursor and Gemini have everywhere and project, and only Claude Code has **project (only me)**.

3. Read the dialog. It shows the file that would change, the one entry that would be written in that agent's format with the values of variables and headers hidden, and the name of the backup. A reference such as `${GITHUB_TOKEN}` stays visible and is converted to the other agent's syntax. If the agent has a server of that name already, nothing is changed.

4. Press **Write this entry**. Skribly copies the file next to itself as `NAME.skribly-backup-DATE`, readable only by you, and adds the entry. Other entries stay as they are, and a JSON file that cannot be read is never touched.

</Steps>

## How to delete a server

Press **Delete server** on the row and confirm. The entry is removed from the file (for Codex the whole section) and from Skribly's stash. Delete cannot be undone, so copy the entry first if you may want it back.

## Tips

<Aside type="tip">
Run the check after you add a server. A server that starts but lists no tools, or fails on a login, is easier to spot here than inside an agent session.
</Aside>

- Use the folder button to open the file and see exactly what the agent reads.
- Keep project servers under **project (only me)** while you try them, and move them to **project (repo)** when the team should have them.

## Related pages

<CardGrid>
  <LinkCard title="The Agent's own MCP server" href="/agent/skribly-mcp/" description="skribly mcp: what other agents can read and change in Skribly Agent." />
  <LinkCard title="Extensions" href="/agent/extensions/" description="MCP entries kept per agent or technology, with the names of variables only." />
  <LinkCard title="Plugins and Claude Design" href="/agent/plugins/" description="Claude Code plugins, Claude Design to code and the Cursor tab." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What the no-network switch covers." />
</CardGrid>
