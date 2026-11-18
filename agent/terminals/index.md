# Terminals

> Shell panes of Skribly Agent, the terminal at the bottom of the Code view and SSH machines, with short pointers to resume, broadcast, hand-off and the agent panel.

A terminal in Skribly Agent is a pane that runs a shell or an agent. Terminals live in the app's main process, so switching views or tabs, or reloading the window, does not interrupt them. A reopened pane replays its last output. This page covers the plain shell, the terminal of the Code view and SSH machines; agents and chat are on [Agents and sessions](/agent/sessions/).

## Shell panes

Choose **Terminal** in **New session** for a plain shell. It opens a login shell in the folder of the project or worktree you chose. A split from a pane, `Ctrl+B v` or `Ctrl+B -`, also starts a shell in that pane's folder. A shell pane does not notify you and is not in the [attention inbox](/agent/inbox/). If you start an agent by hand in it, for example `codex`, the app recognises it and gives the pane the agent's avatar and state rules.

Splits, tabs and zoom are on [Workspaces](/agent/workspaces/). Shell panes are saved with the layout; after a restart they start as a fresh shell in the same folder.

## The terminal in the Code view

The Code view has a shell in the project folder in a panel at the bottom. Press ``⌃` `` (Control and the backtick) to open it, or the terminal button in the view. There is one such shell per project, so opening the panel again starts no new one. Its panel header has **New shell** and **Hide panel** buttons, and you can drag its edge to change the height. The session is hidden from the Agents view and lives in memory only. See [Editor and files](/agent/code/).

## SSH machines

An agent can work on a server while its pane stays in Skribly.

<Steps>

1. Open **Settings → Sessions & control**, section **SSH machines**. Enter a name, such as `ci-server`, and an `ssh` target: `user@host` or an alias from `~/.ssh/config`. Press **Add**.

2. In **New session**, choose the machine in the **Machine** field.

</Steps>

The app opens `ssh -t <host>`, changes to the session's folder, or to the home folder if it does not exist on the server, starts a login shell and runs the agent in it. The agent must be installed on the server. After a restart, an SSH session comes back as a new connection with a shell, without resuming the agent. OpenSSH handles the login, with keys in `ssh-agent` or `~/.ssh/config`; the app stores no passwords. A pane on a machine shows the machine in its header.

## Resume after restart

**Settings → Sessions & control → Restore sessions after restart** is on by default. Tabs, splits and panes return, and agents with a native session id continue their conversation. The details and the resume command of each agent are on [Agents and sessions](/agent/sessions/#resume-after-restart). Older sessions are in the [session history](/agent/session-history/).

## Broadcast

Tick the checkbox in the headers of several panes, type once in the field on the tab bar and send the same text to all of them. See [Agents and sessions](/agent/sessions/#broadcast).

## Handing off work

The hand-off button in a pane header passes the work to another agent through `STATE.md` or `handoff.md`. See [Agents and sessions](/agent/sessions/#handing-off-work).

## Agent panel

The panel on the right, `⌘⇧A`, is a conversation with an agent over any view. See [Agents and sessions](/agent/sessions/#the-agent-panel).

<Aside type="tip">
Shortcuts on this site use `⌘`. On Windows and Linux use `Ctrl` instead. `Ctrl+B` never reaches the program in the terminal; if you use tmux in a pane, change its prefix.
</Aside>

## Related pages

<CardGrid>
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="States, chat mode, resume, broadcast and hand-off." />
  <LinkCard title="Workspaces" href="/agent/workspaces/" description="Tabs, splits, zoom and the sidebar." />
  <LinkCard title="Editor and files" href="/agent/code/" description="The Code view with its terminal." />
  <LinkCard title="Settings" href="/agent/settings/" description="Sessions & control and the other sections." />
</CardGrid>
