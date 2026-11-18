# Agents and sessions

> Start a session in Skribly Agent, read the agent states and Why this state, use the agent panel, toolbar and chat mode, resume after a restart and hand work over.

A session is one agent running in one pane: a terminal with the agent, or a chat. You start it from **New session**, and the app detects what the agent is doing, tells you when it needs you and brings it back after a restart.

![The agent panel open on the right of the Agents view: a Claude Code chat with its message field, model, Edit and Remote controls](../../../assets/screens/agent-panel.webp)

## Open the view

- Click **Agents** in the activity bar, or press `⌘2`, or
- open the command palette (`⌘K`) and choose **Agents**, or **New session: …** for an agent.

Shortcuts on this site use `⌘`. On Windows and Linux use `Ctrl` instead. The `Ctrl+B` prefix is the same on every system.

## How to start a session

<Steps>

1. Press **New session** on the tab bar, or `Ctrl+B a`, or a split button in a pane header.

2. Pick an agent card, or **Terminal** for a plain shell. An agent that is not installed is dimmed and shows **Install …** and the install command.

3. Choose the **Project** and the **Working copy**: the main one, an existing worktree or **+ New worktree…** with a branch, which is created from the project's base branch. Choose the **Machine**: **This computer** or an SSH machine.

4. Optionally fill **Name for the CLI and other agents**, such as `reviewer` (lower case letters, digits, `_` and `-`, up to 32 characters), choose the **Mode**, **Terminal** or **Chat**, and write the **First message (optional)**. In chat mode, tick **can modify files** if the agent may edit.

5. Press **Run**, or `Enter` in the message field (`Shift+Enter` adds a line).

</Steps>

In terminal mode the app opens a login shell (`$SHELL -l`, `pwsh` or `powershell.exe` on Windows) and types the agent's command into it, with the first message as an argument where the agent accepts one. An agent that does not, such as OpenCode or Aider, gets it typed in after it starts. The session has the variable `SKRIBLY_TERMINAL=<id>`.

## Agent states

The state of a session is read from the agent's screen and its output. No plugin or hook in the agent is needed.

| State | What it means |
| --- | --- |
| **starting** | The session has just been created |
| **working** | The agent is working: there is activity in the output |
| **waiting for a decision** | The agent asks for approval or a choice and waits for you |
| **done** | The agent finished its turn and you have not seen the result yet |
| **ready** | You saw the result; the agent waits for the next prompt |
| **finished** | The process has exited; the details have the exit code |

- **The agent's screen.** Each agent has rules for the waiting and working states, for example the "Do you want to…?" question of Claude Code or the approval dialog of Codex. General rules catch `(y/n)`, "Press Enter to continue" and a password prompt. The rules are careful: a false wait is worse than a late one.
- **Output activity.** With no matching rule, output within the last 1.5 seconds means working. After 2.5 seconds of silence the turn ends: done if there was real work and you have not seen it, otherwise ready.
- **Agent recognition.** The app checks the foreground process, so a Terminal pane where you started `codex` by hand gets Codex's avatar and rules.
- **Viewing.** A done pane that is visible in the focused window becomes ready.
- **Process exit.** The session becomes finished.

### Why this state?

Press the state badge in the pane header. The dialog shows the state, the recognised agent, the source of the state (agent screen pattern, output activity, process exited or none), the foreground process, the rule that matched and the last 24 lines of the screen. Look there first when a state seems wrong.

## The agent panel

The panel on the right opens over any view with the button next to the search box or `⌘⇧A`. Each project keeps its own conversations, and they come back after a restart. Drag the left edge to change the width. **New conversation** starts another one and **Close the panel** hides it.

| Tool | What it does |
| --- | --- |
| Agent menu | Chooses the agent, or installs one that is missing. Changing the agent starts a new conversation |
| **Change model** | The default model, the agent's list or any name you type; the refresh button asks the agent again |
| **Effort** | Claude Code only: `--effort` from low to max |
| **Slash commands** | Commands from the agent, the project, your home folder and plugins. `/clear` starts over |
| **Plugins** | Turns Claude Code plugins on and off; the next message uses the change |
| **Attach files** | Attaches files. You can also drop files on the box or paste an image |
| **Edit** or **Plan** | Whether the agent may change files |
| **Remote** | Starts a Claude Code session with Remote Control, to control it from your phone or claude.ai/code |
| **Open in a terminal** | Continues the same conversation in a terminal |

Under the message box you see the session time, the subagents and the context, as far as the agent reports them.

## The toolbar under a pane

An agent pane has the same tools in a bar under it: **Slash commands**, **Change model**, **Effort**, **Plugins**, **Reload plugins**, **Attach files** and **Remote**. They type into the session, so `/model`, `/effort`, `/reload-plugins` and `/remote-control` behave as if you typed them. The bar holds back while the agent is asking a question, because text sent then would answer it. Subagents and context in a terminal come from the Claude Code transcript, so other agents show only the time.

## Chat mode

A chat is an agent run without an interface: each message is a separate run that carries the session id of the last reply, so the agent remembers the conversation and no process runs between messages. The pane shows text, tool calls and errors.

| Key | Action |
| --- | --- |
| `Enter` | Send |
| `Shift+Enter` | New line |
| **Stop** | Interrupt the reply |

Chats are kept in the interface's memory and do not come back after a restart; continue the conversation in a terminal with **Open in a terminal**. Kimi CLI has no chat mode. The agents and their flags are on [Supported agents](/agent/agents/).

## Resume after restart

**Settings → Sessions & control → Restore sessions after restart** is on by default.

- Tabs, splits and panes return to their places with the same ids, names, worktrees and tasks.
- An agent for which the app found a native session id continues the conversation and gets a **resumed** badge. Claude Code, Cursor Agent, Droid and Qwen Code use `--resume <id>`, Codex uses `codex resume <id>`, Copilot CLI `--resume=<id>`, OpenCode, Crush and Kimi CLI `--session <id>` and Goose `goose session --resume --session-id <id>`. A custom agent uses the resume arguments of its definition.
- Other panes, which are shells, agents without a session, Amp, Gemini CLI, Aider and SSH sessions, start as a fresh shell in the same folder with a hint of the command that starts the agent again.

Quitting the app ends all terminal processes; there is no background server. Continuity comes from the agents' native resume and from state files. Panes of earlier sessions, not only the ones open at the last quit, are in the [session history](/agent/session-history/).

## Broadcast

Send one prompt to several agents. Tick the checkbox in the pane headers, type in the field on the tab bar (**Select panels (☑) to send them the same thing**, which reads **To N selected…** once you tick some) and press `Enter` or **Send to the checked panes**. The text is delivered to every running pane as if you pasted it and confirmed it with `Enter`. Exited panes are skipped.

## Handing off work

The hand-off button in a pane header passes the work to another agent without replaying the conversation.

<Steps>

1. Press **Send request**. The current agent saves its state, what is done, the next step, decisions and open questions, in a file: `.skribly/tasks/<KEY>/STATE.md` when the session is about a task, otherwise `.skribly/handoff.md`.

2. Press **Run** and the new agent's name. It starts in the same folder and worktree, next to the previous one, with the prompt to read the state file, run `git status` and `git diff`, summarise in three points and continue.

</Steps>

Do step 2 after step 1. The new agent then starts from a few dozen lines of state instead of the whole transcript.

## The agent overview

Press the grid button on the tab bar or `Ctrl+B o` for the **Agent overview**: a grid of live previews of all sessions, with the ones that need you first. Previews are read only while the overview is on screen.

## Related pages

<CardGrid>
  <LinkCard title="Attention inbox" href="/agent/inbox/" description="The sessions that wait for you, and the notifications." />
  <LinkCard title="Supported agents" href="/agent/agents/" description="The 13 agents and what each supports." />
  <LinkCard title="Terminals" href="/agent/terminals/" description="Shell panes, SSH machines and the Code view terminal." />
  <LinkCard title="Workspaces" href="/agent/workspaces/" description="Tabs, splits and the workspace sidebar." />
</CardGrid>
