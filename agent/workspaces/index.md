# Workspaces and panes

> How the Agents view of Skribly Agent is organised - workspaces, tabs, splits and panes - and how agent states and notifications work.

The **Agents** view works like a terminal multiplexer built for agents: workspaces → tabs → splits → panes. Each pane is a terminal or a chat with an agent, with state detection, notifications and resume after restart.

## Layout model

| Level | What it is | Where it comes from |
| --- | --- | --- |
| **Workspace** | A project directory or one of its worktrees | A pane belongs to the workspace whose path matches its directory best. Sessions outside any project land in **Other directories**. |
| **Tab** | A set of panes in one workspace | **+** on the tab bar, `Ctrl+B c` or `⌘T`. Double-click a tab to rename it. |
| **Split** | A tree of horizontal and vertical splits | Drag the dividers with the mouse. |
| **Pane** | An agent terminal, a shell or a chat | **New session**, split shortcuts, the CLI, pipelines or tasks. |

Terminals live in the app's main process, so switching views or tabs, or reloading the window, does not interrupt them. A reopened pane replays its last output. The layout is saved continuously.

When a tab has three panes, Skribly opens the next session in a new tab so panes do not get too narrow. Sessions started from outside, by the CLI, pipelines or tasks, also get a place in the layout.

## Workspace sidebar

The **Workspaces** sidebar on the left (toggle with its button or `Ctrl+B b`) shows:

- one group per project, with a **main** row and one row per worktree (the branch name);
- under each workspace, its sessions with the agent's avatar, its `@name` and its state; click one to go to its pane;
- a badge in the header with the number of sessions waiting for you;
- **+** next to a project to create a worktree, and a trash icon next to a worktree to remove it.

The state of a tab, workspace or project is the most important state among its panes, in this order: *waiting for a decision* → *done* → *working* → *starting* → *ready* → *finished*.

## Pane header

| Element | Action |
| --- | --- |
| Checkbox | Selects the pane for [broadcast](/agent/terminals/#broadcast) |
| Avatar and title | Double-click to rename (`Enter` saves, `Esc` cancels) |
| `@name` | The session's name for the CLI and MCP |
| Branch | The session works in a separate worktree |
| Machine | The session runs on an SSH machine |
| **resumed** | The pane was restored after a restart |
| State badge | Opens [Why this state?](#why-this-state) |
| Hand-off | [Hands the work to another agent](/agent/terminals/#handing-off-work) |
| Split right, split down | Opens **New session** next to this pane |
| Maximise | Same as `Ctrl+B z` |
| Close | Asks first when the agent is working or waiting |

## Agent states

| State | Label | Meaning |
| --- | --- | --- |
| `starting` | starting | The session has just been created |
| `working` | working | The agent is working: there is activity in its output |
| `blocked` | waiting for a decision | The agent asks for approval or a choice and waits for you |
| `done` | done | The agent finished its turn and you have not seen the result yet |
| `idle` | ready | Result seen; the agent waits for the next prompt |
| `exited` | finished | The process has exited |

States come from what the agent shows, with no plugins or hooks in the agent:

- **The agent's screen.** Each terminal has an invisible twin that renders the same stream, so Skribly reads the rendered screen rather than raw escape codes. Each agent has rules for *waiting for a decision* and *working*, such as Claude Code's "Do you want to…?" question or Codex's approval dialog. Generic rules catch `(y/n)`, "Press Enter to continue" and password prompts. The rules are conservative: a false *waiting for a decision* is worse than a late one.
- **Output activity.** With no matching rule, output in the last 1.5 seconds means *working*. After 2.5 seconds of silence the turn ends: *done* if there was real work you have not seen, otherwise *ready*.
- **Agent recognition.** Skribly checks the foreground process and the screen, so a plain terminal pane where you start `codex` by hand gets Codex's avatar and rules.
- **Viewing.** A visible *done* pane in a focused window becomes *ready*.
- **Process exit.** The session becomes *finished*.

### Why this state?

Click the state badge in a pane header. The dialog shows the state, the recognised agent, the source (screen pattern, output activity or process exit), the foreground process, the rule that matched and the last 24 lines of the screen. A program that keeps redrawing something, like a clock or a progress bar, shows as *working*.

## Notifications

| Where | When |
| --- | --- |
| Badge on the **Agents** icon | The number of sessions waiting, or working when nothing waits |
| Status bar | "N working · M waiting" |
| In-app message | An agent you cannot see asks for a decision or finished its turn |
| System notification | An agent asks for a decision, or finished a turn after at least 15 seconds of work, while no Skribly window has focus. Clicking it opens the pane. Plain shells do not notify. |
| `skribly notify` | An agent or a script sends one itself |

Turn system notifications off in **Settings → Editor & notifications → Notifications**.

The agent overview shows every agent's screen at once. Arrow keys pick a session, and `Enter` or a number opens it.

## Worktrees for agents

A worktree is a separate directory with the same git history, so two agents in two worktrees never overwrite each other's files.

1. In the workspace sidebar, hover over a project and click **+**, or choose **+ New worktree…** in **New session**.
2. Enter the branch and the base. An existing branch is checked out; a new one is created from the base, by default the project's base branch.
3. Click **Create**. The worktree appears as its own workspace.

| Detail | Value |
| --- | --- |
| Directory | `~/.skribly/worktrees/<repo>/<branch>`, or the folder set in **Settings → Sessions & control → Worktree directory** |
| Removal | The trash icon runs `git worktree remove` and `git worktree prune`. **The branch is kept.** With uncommitted changes, Skribly asks before forcing it. |
| Refresh | Every 30 seconds, so worktrees created in a terminal show up too |
