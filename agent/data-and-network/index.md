# Data and network

> What Skribly Agent stores and where, every connection it makes, the folders it reads and writes, the local ports it opens, the No network calls switch and what an uninstall leaves.

Skribly Agent works on your computer and needs no account. It sends no telemetry, no crash reports and no identifiers, and it has no server of its own. **Settings → Privacy and network** lists every place where the app itself talks to the network, every folder outside its own data folder that it reads or writes, and every local port it opens, each with what, when and why. The list is data, and a test fails when the code has a call, a folder or a port that it does not name.

![Settings, Privacy and network: the switch No network calls by the app, off, and the list of what the switch does not cover](../../../assets/screens/agent-privacy.webp)

## Open the view

- Open **Settings** and choose **Privacy and network**, or
- switch **No network calls by the app** from the tray or menu bar menu, which stays in step with Settings.

## How to turn the network off

<Steps>

1. Open **Settings → Privacy and network**.

2. Switch on **No network calls by the app**.

3. Every call listed below now ends with a calm "switched off" message before anything is sent. Addresses on `localhost`, `127.0.0.1` and `::1` stay open, because they never leave the computer.

</Steps>

| Option | What it does | Default |
| --- | --- | --- |
| **No network calls by the app** | Stops all calls of the app itself before anything is sent. Also covers redirects: a request to a local address follows only local redirects, at most five. The hidden audit window cancels every request that is not local. | Off |

## What the switch does not cover

- **Agents in panes.** Claude Code, Codex, Cursor and the others are programs you run. They have their own connections, tokens and settings.
- **Agents started in the background.** The commit suggestion, pipelines and tasks started from MCP tools start the same agents without a pane. Their traffic is the agent's.
- **MCP servers and `npx`.** The `claude mcp` and `npx` commands started from the MCP configuration make their own traffic.
- **Terminals and SSH.** The shell, commands and SSH connections in panes work as in an ordinary terminal.
- **The Browser view.** Pages you open are loaded by the browser itself. Text that is not an address goes to the DuckDuckGo search engine.
- **Links.** A link opens in the system browser only after you click it.

## Connections of the app

Every call goes through one small module of the app, and the test checks that no other call exists.

| Connection | To | When | Sends a token |
| --- | --- | --- | --- |
| App updates | The public release home of Skribly Agent on GitHub and the file server it redirects to | 8 seconds after start and every 4 hours while **Update automatically** is on, and when you press **Check for updates** | No |
| Interface translation | `translate.googleapis.com` and `api.mymemory.translated.net` | Only for an interface language that is neither Polish nor English and is not in the cache yet; see [Languages](/agent/languages/) | No |
| Themes from Open VSX | `open-vsx.org` | When you search the theme catalogue or install a theme | No |
| Editor extension | Your editor's marketplace, through the editor's own command | Only when you install an extension in the editor | No |
| Task trackers | The address of each tracker you added | When you open tasks, pick a task, comment, change a status, log time or test the connection | Yes, only to that tracker |
| Git accounts and activity | `api.github.com`, `gitlab.com`, `codeberg.org`, `bitbucket.org`, `dev.azure.com` or your own Git server | When you connect an account, open the repository list or the activity card | Yes, only to that server |
| Cloning a repository | The server of the repository | Only when you clone; a token of a connected account is used only for that clone | Yes, only to that server |
| Push and pull | The server the project's origin points to | Only when you press push or pull; git uses its own keys or credential manager | No |
| Skills repository | `github.com/skribly/agent-skills` or the address from Settings | When you download or sync the skills repository | No |
| Pull requests through `gh` | `github.com`, through the GitHub CLI | When you open the changes of a project whose origin is on GitHub and when you create a pull request | No |
| `gh` and `glab` login | GitHub or the GitLab server you choose | When you open the window that connects a Git account | No |
| Claude Code plugins | The Claude Code plugin marketplace, through `claude` | When you open the plugins list and when you install one | No |
| MCP server test | The address of the MCP server you test | Only when you press the test on a server with an address; a local address also works with the network off | Yes, only to that server |
| Docker images | The registries named in the compose file, through Docker | Only when you start a compose project or pull its images | No |
| Page audit (WCAG and SEO) | The address you give | Only when you run a page audit | No |
| Dependency audit | `api.osv.dev`: package names and versions from lock files, never code | Only when you run the security audit of a project with lock files | No |
| Tool installation | Whatever the shown command contains (`brew`, `winget`, `npm`, `curl`) | Only when you press install or log in for an agent or tool | No |

## Folders outside the data directory

| What | Where | Access |
| --- | --- | --- |
| Agent sessions | `~/.claude/projects`, `~/.codex/sessions`, `~/.copilot/session-state`, or the folders named by `CLAUDE_CONFIG_DIR`, `CODEX_HOME`, `COPILOT_HOME` | Read only: token counts, session history and resume. For the history only the start of each file is read |
| Agent configuration | `~/.claude.json`, `~/.claude/settings.json`, `~/.claude/plugins`, `~/.codex/config.toml`, `~/.cursor/mcp.json`, `~/.gemini/settings.json`, and `.claude`, `.cursor`, `.gemini` in the project | Read; written only after you confirm an MCP change, and a copy of the file is made first when you copy an entry to another agent |
| Agent commands and skills | `.claude/commands`, `.claude/skills`, `.agents/skills`, `~/.claude/skills`, `~/.codex/prompts`, `~/.cursor/commands`, `~/.gemini/commands`, `~/.config/opencode/command` | Read only |
| Project folders | The projects you added and the folder you chose for cloning | Read; written only by what you do: edits, stage, commit, branch changes, clones, `.skribly`, `.cursor/rules` and skills |
| Worktree folders | `~/.skribly/worktrees` or the folder from Settings | Read and write |
| Local API file | `~/.skribly/control.json` | Written at every start while the local API is on; readable by you only |
| `skribly` command | `~/.local/bin/skribly` or `%LOCALAPPDATA%\Skribly\bin` | Written only when you install the command |
| Editor extensions | `~/.vscode/extensions`, `~/.cursor/extensions`, `~/.windsurf/extensions`, `~/.vscode-oss/extensions` | Read only: theme JSON files, no extension code is run |
| Code folders for activity | `~/Developer`, `~/Projects`, `~/code` and folders you add | Read only: commit history |
| Downloads from Claude Design | `~/Downloads/Skribly Design` | Written when you download a file in that tab |
| Update package | The system's temporary folder (`skribly-update-…`) | Written while updating on macOS |
| Tool locations | `PATH`, `~/.local/bin`, `/opt/homebrew/bin`, `/usr/local/bin`, `~/.claude/local`, Docker paths | Read only: checks that programs exist and asks for their version |
| Other tools' files | Herdr and the agents' folders | Read only, only when you open **Import and export** and press preview |
| Export archive and import backups | The archive you choose and the backups folder in the data directory | Read and write, only after you export or import |
| Pane start folder | The project folder, or your home folder | Only where a pane starts; what the program does there is up to it |
| Processes of the panes | The system process list and memory counters | Read only, every 3 seconds, only while the **Resources** view is open and the window is visible |

## Ports

| Port | Default | Bound to | Who can reach it |
| --- | --- | --- | --- |
| Chrome DevTools Protocol | Off; `9333` when browser sharing is on | `127.0.0.1` | Any program on this computer, without authentication. It sees all tabs, including signed-in profiles. It opens at the next start of the app |
| Local control API | On, random free port | `127.0.0.1` | Processes that read the token from `~/.skribly/control.json` |

<Aside type="caution">
Turn on browser sharing only while you work with agents, and turn off the local control API in **Settings → Sessions & control** if you do not use the `skribly` command or the MCP server. See [Browser](/agent/browser/).
</Aside>

## What the app stores

The data directory holds settings, projects, layout, sessions, encrypted tokens, the skills repository, downloaded themes, backups, the Browser's profiles and the `skribly` shims of the panes. **Settings → Updates → Data directory** shows where it is; see [Settings](/agent/settings/#data-directory).

| Data | Where | Protection |
| --- | --- | --- |
| Tracker and Git tokens | `secrets.json` in the data directory | Encrypted with the system password store; see below |
| Tracker accounts | `trackers.json` | Plain JSON, no keys |
| Settings, projects, layout and pipelines | JSON files in the data directory | Plain JSON |
| Disabled MCP servers | `mcp-stash.json` | Plain JSON, and it can hold keys from the server's configuration |
| Sign-ins in browser tabs | Separate browser profiles in the data directory | Browser cookies |
| Task content | `.skribly/tasks/` in the project | Excluded from git |
| Control API token | `~/.skribly/control.json` | Readable only by you; random, new on every start |

## Tokens and the keychain

Tokens are encrypted through the system password store: the Keychain on macOS, the Windows data protection API, and the keyring on Linux (GNOME Keyring or KWallet). Tokens saved by earlier versions still open, and a token is encrypted again when the system rotates its key.

- When the store is unavailable or refuses a call, for example a locked keyring, a new token is kept in memory until the app closes and is offered to the store again on its next use. It is never written to disk as plain text.
- On Linux without GNOME Keyring or KWallet, tokens are only obfuscated. The first save shows one warning that says so and how to install a keyring.
- Agent sessions the app starts receive tracker tokens as environment variables, so skills can fetch tasks. An agent can read them, like any program in your terminal.
- Export and import archives never contain tokens, passwords, API keys or MCP environment values.

## What an uninstall leaves

Your data stays on purpose, and so do the files that belong to your projects and agents.

| System | Removed with the app | Stays |
| --- | --- | --- |
| macOS (drag the app to the Trash) | The app and its link handlers | `~/Library/Application Support/Skribly Agent`, the preferences file, caches, the Keychain item `Skribly Agent Safe Storage`, `~/.local/bin/skribly` (it fails until removed), `~/.skribly` |
| Windows (Settings → Apps) | Program files, shortcuts, the update cache in `%LOCALAPPDATA%\skribly-agent-updater`, the `skribly` command and the `skribly://` handlers | `%APPDATA%\Skribly Agent` and `~/.skribly` |
| Linux `.deb` and `.rpm` | `/opt/Skribly Agent`, the `/usr/bin/skribly-agent` link, the desktop file and icons, the AppArmor profile on Ubuntu 24.04 and later | `~/.config/Skribly Agent`, `~/.cache/skribly-agent-updater`, the keyring item, `~/.local/bin/skribly`, `~/.skribly` |
| Linux AppImage, Windows portable | Delete the file | The same data and `~/.skribly` |

Check `~/.skribly/worktrees` for uncommitted work before you delete `~/.skribly`. To remove everything, delete the data directory, `~/.skribly`, the `skribly` command and the keychain or keyring item.

## How the app protects you

- The window runs in Electron's sandbox with no access to Node.js, calls only a fixed list of methods, shows only its own page and denies every permission request except clipboard writes and full screen.
- Preview and agent tabs run sandboxed, without access to the app, and cannot start on a `file:` address.
- Commands run without a shell, with a time limit and an output limit. The exception is `.cmd` and `.bat` files on Windows.
- Reading, writing, discarding and searching reject paths outside the project directory. Extracting packages rejects paths that escape the target directory.
- Themes are read as JSON, and extension code never runs.

<Aside type="note">
Agent terminals run with your permissions. An agent in a terminal can do whatever you can do in a terminal.
</Aside>

## Tips

- To report a security problem, see [Security](/security/).
- Switch the network off when you work offline: updates, translation and trackers then report that they are switched off instead of failing.

## Related pages

<CardGrid>
  <LinkCard title="Settings" href="/agent/settings/" description="Every section of Settings and its defaults." />
  <LinkCard title="Updates" href="/agent/updates/" description="How the app updates itself." />
  <LinkCard title="Languages" href="/agent/languages/" description="The interface language and online translation." />
  <LinkCard title="The skribly MCP server" href="/agent/skribly-mcp/" description="What agents can read and change through skribly mcp." />
</CardGrid>
