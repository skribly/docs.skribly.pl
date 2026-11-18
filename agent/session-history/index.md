# Session history

> The session history of Skribly Agent lists past sessions of Claude Code, Codex and Copilot CLI, filters them and resumes one in its own folder.

The session history is one list of the past sessions of the agents whose own session files Skribly can read: Claude Code, Codex and Copilot CLI. For the open project or for all projects it shows the agent, the folder, the branch, when the session started and ended, the first line of what it was about and the tokens it used. Choosing a session reopens it in its folder with that agent's own resume command.

![The Session history dialog: search, agent filter, This project and All projects, and five past sessions of Claude Code, Codex and Copilot CLI with Resume](../../../assets/screens/agent-session-history.webp)

## Open the dialog

- Press **History** in the toolbar of the Agents view, or
- press `Ctrl+B`, then `h`, or
- open the command palette (`⌘K`) and choose **Agent session history and resume**.

The list is read when the dialog opens and when you press **Refresh**. There is no timer, so a closed dialog or a hidden app never reads a file.

## How to find and resume a session

<Steps>

1. Open the dialog. The search box has the focus.

2. Type in **Search the first line, folder, branch or agent…**. The search looks in the first line, the folder, the branch, the project name, the agent name and the session id, and every word has to match.

3. Narrow the list with the agent filter, which offers the agents that have sessions, and with **Scope**: **This project** or **All projects**.

4. Choose a session, or move to it with `↑` and `↓` and press `Enter`. A new pane opens in the session's folder and runs the agent's resume command.

</Steps>

The list is newest first. It holds the sessions of the last 90 days, at most 500, and says when it was cut.

## What resuming runs

| Agent | Command run in the session's folder |
| --- | --- |
| Claude Code | `claude --resume <id>` |
| Codex | `codex resume <id>` |
| Copilot CLI | `copilot --resume=<id>` |

- A session whose folder no longer exists is greyed out and says so. Nothing is started.
- A session of an agent without a resume command opens a new session of that agent in the folder instead. Today all three listed agents have one.
- The command is built from fixed parts and the session id. An id has to be a canonical UUID, the agent has to be one of the three and the session has to be in the list the app just read. Nothing else from a session file reaches a command line.

## What the app reads

Skribly only reads these files and never writes into them.

| Agent | Files |
| --- | --- |
| Claude Code | `<CLAUDE_CONFIG_DIR or ~/.claude>/projects/<folder>/<id>.jsonl` |
| Codex | `<CODEX_HOME or ~/.codex>/sessions/YYYY/MM/DD/rollout-*.jsonl` |
| Copilot CLI | `<COPILOT_HOME or ~/.copilot>/session-state/<id>/events.jsonl` |

- Only the first 256 KB of each file is read, so a huge session costs the same as a small one. From it the app takes the id, the start time, the folder, the branch and the first line of the first message you wrote.
- The end time is the time the file was last changed.
- The first line is cut to one plain line of 140 characters. It is shown only in this dialog; it is not logged, not sent anywhere and not part of any command.
- Tokens come from the same reader as the [usage board](/agent/usage/) and cover the last 14 days. An older session, or one whose files carry no token numbers, shows none, not a zero.
- Files that are broken, empty or not in the layout above are skipped.

## Keyboard

`↑` and `↓` move through the list, `Ctrl+Home` and `Ctrl+End` jump to its ends, `Enter` resumes the marked session and `Esc` closes the dialog. The filters are ordinary controls in the tab order.

<Aside type="tip">
Shortcuts on this site use `⌘`. On Windows and Linux use `Ctrl` instead. The `Ctrl+B` prefix is the same on every system.
</Aside>

## Related pages

<CardGrid>
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="Resume after restart, which brings back the open panes." />
  <LinkCard title="Token use and resources" href="/agent/usage/" description="Where the token numbers of a session come from." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What the app reads and where it connects." />
</CardGrid>
