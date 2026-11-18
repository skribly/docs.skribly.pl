# Attention inbox

> The attention inbox of Skribly Agent lists the sessions that wait for you, with its keys, system notifications, quiet notifications and the tray menu items.

The attention inbox lists every agent session that needs you, newest first, so you do not have to look through your panes. Three things put a session in it: it is waiting for an answer, it ended with an error, or it is done and you have not looked at the result yet.

![The attention inbox, Waiting for you (3): a Codex session waiting for an answer, a Claude session that is done and a Cursor session that ended with an error](../../../assets/screens/agent-inbox.webp)

## Open the view

- Press **Inbox** in the tab bar of the Agents view, or
- press `Ctrl+B`, then `i`, or
- press `⌘⇧U` from any view, or
- open the command palette (`⌘K`) and choose **Inbox: sessions waiting for you**.

Shortcuts on this site use `⌘`. On Windows and Linux use `Ctrl` instead; `⌘⇧U` is then `Ctrl+Shift+U`. The `Ctrl+B` prefix is the same on every system.

## What a row shows

Each row has the agent, the session name, its state (**waiting for an answer**, **ended with an error** or **done**), the project, the task key if the session has one, the last meaningful line from the screen and how long it has waited. For a question, that line is the question. The heading counts the unseen rows: **Waiting for you (3)**.

## How to go through the inbox

<Steps>

1. Open the inbox. Each of the first nine rows has a digit.

2. Press a row, `Enter` or its digit. The Agents view jumps to that pane with the cursor in it.

3. For a result or an error you do not need to open, press **Seen** on the row, or `S`. **Mark everything as seen** does it for all of them.

4. Press `Esc` or **Back to the panes** to return. Focus goes back to the **Inbox** button.

</Steps>

| Key | What it does |
| --- | --- |
| `↑` `↓`, `Home`, `End` | Move between rows |
| `Enter` or `1` to `9` | Open the pane of the row |
| `S` | Mark a result or an error as seen; a question cannot be marked |
| `Esc` | Back to the panes |

A result or an error leaves the list once you have seen it: opening the pane counts, and so does marking it. A question stays listed until the agent works again, because it still waits for you. Once you have seen it, with its pane on screen in the focused window, it moves below the unseen rows, is marked **seen, still waiting** and is no longer counted in the badges, the Dock and the announcement. The seen state is kept across restarts. The list uses the same state detection as the pane headers and updates from its events; it does not poll.

The same number appears as a badge on the **Agents** icon, in the Dock icon (macOS, Linux), in the tray, in the status bar and as a polite announcement for screen readers. `Ctrl+B j` jumps to the next agent that waits for you.

## System notifications

A system notification is raised when an agent asks for a decision, or finishes a turn after at least 15 seconds of work, and you cannot see it: the window is in the background, or the session's pane is not on screen. Clicking the notification of one session shows the window and the pane. On macOS the Dock icon also bounces. Plain shells do not notify.

An agent in a pane you cannot see also raises an in-app message when it asks for a decision or finishes a turn.

## Quiet notifications

Notifications are quiet by default. These settings are in **Settings → Editor & notifications**.

| Setting | What it does | Default |
| --- | --- | --- |
| **Notifications** | Turns system notifications on and off | On |
| **Notification sound** | A notification plays a sound only when this is on | Off |
| **Muted agents** | Sessions of the ticked agents, custom agents included, raise no system notification | None |
| **Muted projects** | Sessions of the ticked projects raise no system notification | None |

- A muted agent or project still appears in the inbox and in the counts.
- A session you are looking at, with its pane on screen in the focused window, never notifies.
- Several notifications within four seconds fold into one, "N sessions are waiting for you", that opens the inbox.

## The tray menu

The inbox is also in the menu of the menu bar or tray icon: the **Attention inbox** section lists its five newest items, each as `Waiting`, `Failed` or `Done` with the session name, and the first line of the menu counts the agents that work, wait and are done. Choosing an item shows the window on that agent. The menu has two switches: **Quiet notifications (no sound)**, which is the opposite of **Notification sound**, and **No network calls by the app**. The whole menu is described on [First run](/agent/first-run/#the-menu-bar-and-tray-icon).

<Aside type="note">
Sessions in Herdr are not in the inbox. Their states are read only while the Herdr tab is open.
</Aside>

## Related pages

<CardGrid>
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="The states that put a session in the inbox." />
  <LinkCard title="Workspaces" href="/agent/workspaces/" description="The sidebar badge and the Herdr tab." />
  <LinkCard title="First run" href="/agent/first-run/" description="The tray menu in full." />
  <LinkCard title="Keyboard shortcuts" href="/agent/shortcuts/" description="Every global and prefix shortcut." />
</CardGrid>
