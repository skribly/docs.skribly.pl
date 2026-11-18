# Troubleshooting

> Fixes for the most common Skribly Agent problems - agent detection, terminals, unsigned builds, Linux sandboxing, trackers, worktrees, hooks and audits.

Find the symptom, then follow the steps under it. If nothing here helps, the last section says what to collect before you report the problem.

## An agent is not detected

**Symptom:** in **Settings → Agents** the agent shows "not installed", even though it works in your terminal.

1. Click **Detect again**; the list is cached for five minutes.
2. Check where the agent is: `which claude` (Windows: `where claude`). Skribly searches the `PATH` of your login shell, plus `~/.local/bin`, `/opt/homebrew/bin` and `/usr/local/bin`.
3. If you add the agent's folder to `PATH` only inside a block for interactive shells, or in a file the login shell does not read, move it to `~/.zprofile` or `~/.bash_profile`.
4. A shell that takes more than five seconds to start cannot return its environment in time. Speed it up, or link the agent into `~/.local/bin`.
5. On Windows, Skribly does not read the shell; the agent must be in the system `PATH`. Restart Skribly after an npm install.
6. Restart Skribly after any change to `PATH`; the environment is read once at startup.

## Claude Code only in the VS Code extension

Skribly finds the Claude Code binary from the VS Code, Cursor, Windsurf and VSCodium extensions, from `~/.claude/local`, from `~/.local/bin` and, on macOS, from the Claude app. If it does not, open the editor once after updating the extension so it unpacks the binary, or install the CLI with `npm install -g @anthropic-ai/claude-code`. Claude plugins need a working `claude`.

## A terminal does not open

**Symptom:** **New session** fails with an error about `pty.node`, `node-pty` or `posix_spawnp failed`.

- Check that `$SHELL` points to an existing file. Skribly runs `$SHELL` (by default `/bin/zsh` on macOS, `/bin/bash` on Linux), and `pwsh` or `powershell.exe` on Windows.
- **First characters disappear:** the agent command is typed 400 ms after the shell starts, and a very slow prompt can lose it. Start the agent by hand in the pane, or speed up the shell.

## `Ctrl+B` does not reach the program in the terminal

That is intentional: `Ctrl+B` is the pane prefix. Change the prefix in tmux or the shortcut in your program. See [Keyboard shortcuts](/agent/shortcuts/).

## An agent shows the wrong state

Click the state badge in the pane. **Why this state?** shows the source, the rule and the screen. A program that keeps redrawing, like a clock or a progress bar, shows as *working*.

## macOS: "can't be opened" or "is damaged"

The app is not signed or notarised. Use **System Settings → Privacy & Security → Open Anyway**, or:

```bash
xattr -dr com.apple.quarantine "/Applications/Skribly Agent.app"
```

## Windows: SmartScreen

"Windows protected your PC" → **More info → Run anyway**. Antivirus software can also slow down the first terminal launch.

## Linux: AppImage and sandbox

- **Does not start:** `chmod +x Skribly-*.AppImage`.
- **`libfuse.so.2: cannot open`:** install FUSE 2 (`sudo apt install libfuse2`, or `libfuse2t64` on Ubuntu 24.04), or run `./Skribly-*.AppImage --appimage-extract-and-run`.
- **"The SUID sandbox helper binary was found, but is not configured correctly"**, or a user namespaces error on Ubuntu 23.10+ with AppArmor: install the `.deb` package, or as a workaround run with `--no-sandbox`, which weakens isolation.
- **Tokens do not survive a restart:** there is no keyring (gnome-keyring or KWallet), so Skribly keeps tokens in memory only. Install and unlock a keyring.

## The browser port is in use

**Symptom:** after turning on **Share browser with agents** and restarting, the status bar does not show it, or the agent connects to another Chrome.

1. Find who uses the port: `lsof -i :9333` (macOS, Linux) or `netstat -ano | findstr 9333` (Windows).
2. Change the port in **Settings → Browser for agents → Port**.
3. Restart Skribly and update the address in the agent's MCP configuration.

## A tracker returns 401 or 403

| Tracker | Check |
| --- | --- |
| Skribly Tracker | The token has the `write` ability if you change issues, and it has not expired |
| Jira Cloud | The account e-mail is filled in, and the token is an API token from id.atlassian.com, not a password |
| Jira Server / Data Center | The e-mail is empty, and the token is a Personal Access Token |
| Redmine | The administrator enabled the REST API; the key is from **My account → API access key** |
| GitHub | The fine-grained token has Issues access to the right repositories and the organisation approved it |
| GitLab | The token has the `read_api` scope and has not expired |
| Linear | It is a personal API key, not OAuth |

"Not found (HTTP 404)" usually means a wrong address, such as Redmine with `/issues` at the end, or a GitHub or GitLab key without the repository (`owner/repo#123`).

## Git refuses to remove a worktree

"contains modified or untracked files": the worktree has uncommitted changes, and Skribly asks whether to force it. To keep them, commit or `git stash` first. The branch stays either way. "is locked": run `git worktree unlock <path>`. "is not a working tree": the folder was deleted by hand; `git worktree prune` cleans up.

## The task branch was not created

**Start with an agent** creates a branch only in a clean repository; untracked files do not matter. Commit or stash, then start again. `TASK.md` and `STATE.md` are created anyway.

## The hook without AI trailers does nothing

- The repository uses `core.hooksPath` (husky, lefthook), so git does not read `.git/hooks`. Add the clean-up to your own `commit-msg` hook.
- A commit with `--no-verify` skips hooks.

## The Agent button for commits is disabled

It needs staged files and an agent with a headless mode: Claude Code, Codex, Cursor, Gemini, OpenCode, Copilot or Aider.

## A WCAG or SEO audit says the page did not load within 30 seconds

Start the project's dev server and check the address, which defaults to **Settings → Projects → Dev-mode app URL**. A page behind a login shows the login screen, because the audit runs in a separate, empty session.

## Skills do not download

Check that `git` is in `PATH`, the network, and the address in **Settings → Skills repository**. An SSH address needs a key in `ssh-agent`.

## The skribly command or the MCP server cannot connect

**Symptom:** `skribly` exits with code `2`, or an agent says the Skribly MCP server has no connection.

1. Start Skribly Agent. The command and the server work only while the app runs.
2. Open **Settings → Sessions & control** and check that **Local control API** is on and shows a port.
3. If you moved the control file, check that the `SKRIBLY_CONTROL` variable points to it. By default it is `~/.skribly/control.json`.
4. A tool that changes something fails when you press **Deny** or close the question. That is intended. See [The Skribly MCP server](/agent/skribly-mcp/).

## The command guard writes nothing or an agent still asks

- The guard is off until you turn it on in **Settings → Command guard** and confirm the list of files.
- It supports Claude Code, Codex and OpenCode only.
- Without `node` in the `PATH`, Skribly writes the declarative rules of Claude Code and leaves out the hook; the section says so.
- Some commands always ask, whatever you tick: deleting files, discarding git changes, rewriting history and the other items of **Always ask**.
- A script run from a file, such as `python cleanup.py`, cannot be seen by the guard.

## A cost shows no price or an asterisk

- A model that is not in the price table has no price, and the interface says so instead of guessing. Add the model with the names it has in your session files in **Settings → Cost → Model prices**.
- An amount with an asterisk has some tokens without a price.
- An agent that leaves no token numbers in its session files has no cost.
- With a subscription switched on, the amount is an API equivalent, not what you pay.

## No notifications appear

1. In **Settings → Editor & notifications**, check that **Notifications** is on.
2. A notification appears only when you are not looking at the session: the window is in the background or its pane is not on screen.
3. Check **Muted agents** and **Muted projects**. Muted sessions still reach the attention inbox.
4. Check that the system allows notifications from Skribly Agent.

## Updates are not checked

When **Settings → Privacy and network → No network calls by the app** is on, no check is made and the update page says so. Turn it off, then use **Check for updates** in **Settings → Updates**.

## Still stuck

- Find the data directory in **Settings → Updates → Data directory → Show**.
- Starting the app from a terminal shows errors from the main process. On macOS: `"/Applications/Skribly Agent.app/Contents/MacOS/Skribly Agent"`.
- Report the problem with the version from **Help → About** and your system, as described in [Security](/security/) for anything sensitive.

## Related pages

<CardGrid>
  <LinkCard title="Frequently asked questions" href="/agent/faq/" description="Short answers about the Agent." />
  <LinkCard title="Settings" href="/agent/settings/" description="Every option and its default." />
  <LinkCard title="Install" href="/agent/install/" description="Unsigned builds and the first start on each system." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What the app stores and which connections it makes." />
</CardGrid>
