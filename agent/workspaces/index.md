# Workspaces and panes

> How the Agents view of Skribly Agent is organised: workspaces, tabs, splits and panes, the workspace sidebar, zoom, dragging, the Herdr tab and a worktree per agent.

The **Agents** view works like a terminal multiplexer built for agents: workspaces, then tabs, then splits, then panes. Each pane is a terminal or a chat with an agent. You use it to run several agents side by side and to see at a glance which one needs you.

![The Agents view: the workspace sidebar with three projects and their worktrees, and a Claude Code pane that reviews a diff and lists accessibility issues](../../../assets/screens/agent-agents.webp)

## Open the view

- Click **Agents** in the activity bar on the left, or press `⌘2`, or
- open the command palette (`⌘K`) and choose **Agents**.

Shortcuts on this site use `⌘`. On Windows and Linux use `Ctrl` instead. The pane shortcuts start with the prefix `Ctrl+B` on every system.

## The layout model

| Level | What it is | Where it comes from |
| --- | --- | --- |
| **Workspace** | A project folder or one of its worktrees | A pane belongs to the workspace whose path matches its folder best. Sessions outside any project land in **Other directories**. |
| **Tab** | A set of panes in one workspace | **+** on the tab bar, `Ctrl+B c` or `⌘T`. Double-click a tab to rename it. |
| **Split** | A tree of horizontal and vertical splits | **New session to the right** and **New session below** in a pane header, `Ctrl+B v` and `Ctrl+B -`, or `⌘D` and `⌘⇧D` on macOS. |
| **Pane** | An agent terminal, a shell or a chat | **New session**, the split buttons, the `skribly` command, pipelines or tasks. |

Terminals live in the app's main process, so switching views or tabs, or reloading the window, does not interrupt them. A reopened pane replays its last output. The layout, with its tabs, splits, sizes and active workspace, is saved continuously.

When a new session has no place given, it goes to the active tab of its workspace. Once a tab has three panes, the next session opens in a new tab so the panes do not get too narrow. Sessions started from outside, by the `skribly` command, pipelines or tasks, also get a place, and the panes of closed sessions disappear by themselves.

## The workspace sidebar

The **Workspaces** sidebar sits on the left of the view. Hide it with its button or `Ctrl+B b`; the button **Show areas** brings it back.

- One group per project, with its colour dot, collapsible with a click. In it, a **main** row and one row per worktree, named by its branch.
- Under each workspace, its sessions: the agent's avatar, its name and its state. Click one to go to its pane; hover to peek at it.
- Next to a workspace, a dot with the most important state of its sessions and their number. The most important state is, in this order: waiting for a decision, done, working, starting, ready, finished.
- In the header, a button with the number of sessions waiting for you; it jumps to the next one (`Ctrl+B j`).
- **New worktree** (the **+** that appears on hover) next to a project, and the trash icon next to a worktree, which removes it and keeps its branch.

## How to work in tabs and splits

<Steps>

1. Press **+** on the tab bar, or `Ctrl+B c`, for a new tab in the current workspace. Switch with a click, `Ctrl+B n` and `Ctrl+B p`, or `Ctrl+B` and the tab number.

2. Split a pane with the split buttons in its header or `Ctrl+B v` and `Ctrl+B -`. A new split starts a shell in the pane's folder; **New session** next to it starts an agent.

3. Drag a divider between panes to resize them. A pane keeps at least 8 percent of its split.

4. Zoom the active pane with the maximize button or `Ctrl+B z`. The same shortcut restores it.

5. Move between panes with `Ctrl+B` and the arrow keys. Close the active pane with `Ctrl+B x`; for an agent that is working or waiting, the app asks first.

</Steps>

Closing a tab closes all of its sessions, after a confirmation that says how many still work. The full list of prefix keys is on [Keyboard shortcuts](/agent/shortcuts/).

## What is in a pane header

| Element | Action |
| --- | --- |
| Checkbox | Selects the pane for [broadcast](/agent/terminals/#broadcast) |
| Avatar and title | Double-click to rename (`Enter` saves, `Esc` cancels) |
| `@name` | The session's name for the `skribly` command and MCP |
| Branch | The session works in a separate worktree |
| Machine | The session runs on an SSH machine |
| **resumed** | The pane was restored after a restart |
| State badge | Opens **Why this state?**, described on [Agents and sessions](/agent/sessions/#why-this-state) |
| Hand-off | [Hands the work to another agent](/agent/terminals/#handing-off-work) |
| New session to the right, below | Opens **New session** next to this pane |
| Maximize | The same as `Ctrl+B z` |
| Close | Asks first when the agent is working or waiting |

## The Herdr tab

If you also use [Herdr](https://herdr.dev), the **Herdr** button in the tab bar shows its workspaces and the agents in them, each with its state: working, waiting for a person, done or ready. A button on a workspace or an agent shows it in Herdr, and the field under an agent, **Send a prompt to the agent…**, sends it a prompt.

![The Herdr tab of the Agents view: two Herdr workspaces with their agents, states and a prompt field for each agent](../../../assets/screens/agent-herdr.webp)

The panel reads Herdr through its command line every few seconds, only while it is open and the window is visible. It never starts, stops or attaches a Herdr server. When the `herdr` command is missing, its server is not running, it has no workspaces or its answer cannot be read, the panel says so in a short empty state. Herdr refuses a prompt for an agent that waits for a decision, and the message is shown as it comes. Herdr sessions are not in the [attention inbox](/agent/inbox/).

## A worktree per agent

A worktree is a separate folder with the same git history, so two agents in two worktrees do not overwrite each other's files. Choose **+ New worktree…** as the **Working copy** of **New session**, or press **New worktree** next to a project in the sidebar, then give a branch and a base. The worktree appears as its own workspace. Creating, listing and removing worktrees is on [Worktrees](/agent/worktrees/).

## Tips

<Aside type="tip">
`Ctrl+B` never reaches the program in the terminal. If you use tmux in a pane, or a `Ctrl+B` shortcut in your shell, change the prefix in that program.
</Aside>

- The prefix stays active for 2 seconds, and a **Ctrl+B…** badge pulses on the tab bar. Press `Ctrl+B` again to cancel it. Pane shortcuts do not work while a dialog or the palette is open.
- Press `Ctrl+B o` for the **Agent overview**, a grid of previews of all sessions with the ones that need you first.

## Related pages

<CardGrid>
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="New session, states, the agent panel and chat mode." />
  <LinkCard title="Terminals" href="/agent/terminals/" description="Shell panes, the Code view terminal and SSH machines." />
  <LinkCard title="Worktrees" href="/agent/worktrees/" description="All worktrees of your projects and their state." />
  <LinkCard title="Keyboard shortcuts" href="/agent/shortcuts/" description="The Ctrl+B prefix and every global shortcut." />
</CardGrid>
