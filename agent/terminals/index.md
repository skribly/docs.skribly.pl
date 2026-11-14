# Terminals and sessions

> Starting agent sessions in Skribly Agent - terminal and chat mode, the agent panel, resume after restart, SSH machines, broadcast and hand-off.

A session is one agent, or one plain shell, running in a pane. Start one from **Agents → New session**, with `Ctrl+B a`, from the split buttons in a pane header, or from the command palette (**New session: …**).

## New session

| Field | Meaning |
| --- | --- |
| Agent | An agent card or **Terminal** for a plain shell. Agents that are not installed show their install command. |
| Project | The directory the session starts in |
| Working copy | **Main**, an existing worktree or **+ New worktree…** |
| Machine | **This computer** or an SSH machine from settings |
| Name for the CLI and other agents | `[a-z][a-z0-9_-]{0,31}`, for example `reviewer` or `impl-1` |
| Mode | **Terminal** (the interactive agent) or **Chat** (headless) |
| Can modify files | Chat only: whether the agent may edit files |
| First message | Sent right away; `Enter` starts the session |

In terminal mode Skribly opens a login shell (`$SHELL -l`; on Windows `pwsh` or `powershell.exe`) and types the agent command into it with the first message as an argument. Agents that do not take a message as an argument get it typed in after launch. Every session has the environment variable `SKRIBLY_TERMINAL=<id>`.

:::caution
Agent terminals run with your permissions. An agent in a terminal can do whatever you can do in a terminal.
:::

## Chat mode

Chat runs an agent headless: each message is a separate call with the session id from the previous reply, so the agent remembers the conversation while no process runs between messages. The pane shows text, tool calls and errors.

| Key | Action |
| --- | --- |
| `Enter` | Send |
| `Shift+Enter` | New line |
| **Stop** | Interrupt the reply |

| Agent | Can modify files | Read-only |
| --- | --- | --- |
| Claude Code | `--permission-mode acceptEdits` | `--permission-mode plan` |
| Codex | `--full-auto` | `--sandbox read-only` |
| Cursor Agent | `--force` | no flag |
| Gemini CLI | `--approval-mode auto_edit` | no flag |
| Copilot CLI | `--allow-all-tools` | no flag |
| Aider | no flag | `--dry-run` |
| OpenCode | no toggle | no toggle |

Amp, Droid, Qwen Code, Goose and Crush also have a headless mode. Kimi CLI works in the terminal only. Chats are kept in memory and do not come back after a restart; continue the conversation in a terminal, for example with `claude --resume`. The same headless mode powers [pipelines](/agent/features/#pipelines) and the **Agent** button for commit messages.

## Agent panel

The panel on the right opens over any view with `⌘⇧A` (`Ctrl+Shift+A`). Each project keeps its own conversations, and they come back after a restart.

| Tool | What it does |
| --- | --- |
| Agent menu | Chooses the agent, or installs a missing one. Changing agents starts a new conversation. |
| Model | The default model, the agent's list, or any name you type |
| Effort | Claude Code only: `--effort` from low to max |
| `/` | Commands from the agent, the project, your home folder and plugins; `/clear` starts over |
| Plugins | Turns Claude Code plugins on and off for the next message |
| Paperclip | Attaches files; you can also drop files or paste an image |
| Edit / Plan | Whether the agent may change files |
| Remote | Starts a Claude Code session with Remote Control |
| Terminal icon | Continues the same conversation in a terminal |

Under the message box you see the session time, subagents, context and cost, as far as the agent reports them. Agent terminals get the same tools in a bar under the pane; the bar holds back while the agent is asking a question, because text sent then would answer it.

## Resume after restart

**Settings → Sessions & control → Restore sessions after restart** is on by default.

- Tabs, splits and panes come back in their places with the same names, worktrees and tasks.
- Agents with a native session id resume the conversation and get a **resumed** badge:

| Agent | Resume |
| --- | --- |
| Claude Code, Cursor Agent, Droid, Qwen Code | `--resume <id>` |
| Codex | `codex resume <id>` |
| Copilot CLI | `--resume=<id>` |
| OpenCode, Crush, Kimi CLI | `--session <id>` |
| Goose | `goose session --resume --session-id <id>` |
| Custom agent | Resume arguments from its definition (`{id}`) |

- Other panes (shells, Gemini CLI, Aider, Amp, SSH sessions) start as a fresh shell in the same directory, with a hint showing the command that starts the agent again.

Quitting the app ends all terminal processes; there is no background server like tmux has. Continuity comes from the agents' native resume and from state files (`STATE.md`, `handoff.md`).

## SSH machines

An agent can work on a server while its pane stays in Skribly.

1. **Settings → Sessions & control → SSH machines**: enter a name and an `ssh` target, `user@host` or an alias from `~/.ssh/config`, then **Add**.
2. In **New session**, choose the machine in the **Machine** field.

Skribly opens `ssh -t <host>`, changes to the session directory (or the home directory if it does not exist there), starts a login shell and runs the agent. The agent must be installed on the server. Authentication is handled by OpenSSH with keys in `ssh-agent` or `~/.ssh/config`; Skribly stores no passwords.

## Broadcast

Send one prompt to several agents at once, for example "run the tests and describe the failures".

1. Tick the checkbox in the pane headers.
2. Type the text in the field on the tab bar ("To N selected…").
3. Press `Enter`.

The text reaches every running pane as a bracketed paste followed by Enter. Exited panes are skipped.

## Handing off work

The hand-off button in an agent pane's header passes the work to another agent without replaying the conversation.

1. **Send request**: the current agent saves its state (what is done, the next step, decisions, open questions) to `.skribly/tasks/<KEY>/STATE.md` for a task, or `.skribly/handoff.md` otherwise.
2. **Run another agent**: the new agent starts in the same directory and worktree with a prompt to read the state file and `TASK.md`, look at `git status` and `git diff`, summarise in three points and continue.

The new agent starts from a few dozen lines of state instead of a whole transcript.
