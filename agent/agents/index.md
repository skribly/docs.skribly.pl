# Supported agents

> The 13 coding agents Skribly Agent detects and runs, how to install each one, and what each supports in panes, chat, resume, MCP and the shared browser.

Skribly runs the coding agents you already have, with their own logins and API keys. It looks for them in your `PATH` and in common install locations, and shows the install command for the missing ones in **Settings → Agents**, where each command can be copied with one click.

## Install commands

| Agent | Command | Install |
| --- | --- | --- |
| Claude Code | `claude` | `npm install -g @anthropic-ai/claude-code` |
| Codex CLI | `codex` | `npm install -g @openai/codex` |
| Cursor Agent | `cursor-agent` | `curl https://cursor.com/install -fsS \| bash` |
| Gemini CLI | `gemini` | `npm install -g @google/gemini-cli` |
| OpenCode | `opencode` | `npm install -g opencode-ai` |
| Copilot CLI | `copilot` | `npm install -g @github/copilot` |
| Aider | `aider` | `python -m pip install aider-install && aider-install` |
| Amp | `amp` | `npm install -g @ampcode/cli` |
| Factory Droid | `droid` | `curl -fsSL https://app.factory.ai/cli \| sh` |
| Qwen Code | `qwen` | `npm install -g @qwen-code/qwen-code` |
| Goose | `goose` | `curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh \| bash` |
| Crush | `crush` | `brew install charmbracelet/tap/crush` |
| Kimi CLI | `kimi` | `npm install -g @moonshot-ai/kimi-code` |

After installing, click **Settings → Agents → Detect again**; the list is cached for five minutes.

Skribly also finds Claude Code when it is installed only as a VS Code, Cursor, Windsurf or VSCodium extension, in `~/.claude/local`, in `~/.local/bin` or, on macOS, bundled with the Claude app.

## What each agent supports

| Agent | Panes | Chat | Native resume | MCP toggle | Shared browser |
| --- | --- | --- | --- | --- | --- |
| Claude Code | Yes | Yes | Yes | Yes | Yes |
| Codex CLI | Yes | Yes | Yes | Yes | Yes |
| Cursor Agent | Yes | Yes | Yes | Yes | Yes |
| Gemini CLI | Yes | Yes | No | Yes | Yes |
| OpenCode | Yes | Yes | Yes | No | No |
| Copilot CLI | Yes | Yes | Yes | No | No |
| Aider | Yes | Yes | No | No | No |
| Amp | Yes | Yes | No | No | No |
| Factory Droid | Yes | Yes | Yes | No | No |
| Qwen Code | Yes | Yes | Yes | No | No |
| Goose | Yes | Yes | Yes | No | No |
| Crush | Yes | Yes | Yes | No | No |
| Kimi CLI | Yes | No | Yes | No | No |

- **Panes**: runs interactively in a terminal pane with state detection.
- **Chat**: runs headless in chat mode and in [pipelines](/agent/features/#pipelines).
- **Native resume**: the conversation continues after a restart. See [Resume after restart](/agent/terminals/#resume-after-restart).
- **MCP toggle**: Skribly can switch the agent's MCP servers on and off.
- **Shared browser**: the agent can use the Skribly browser over the Chrome DevTools Protocol.

## Custom agents

Add your own command in **Settings → Agents**, with its arguments and, if it has one, the argument that resumes a session (`{id}`). In the CLI a custom agent is `--kind custom:<id>`.

## Skills for each agent

[agent-skills](/skills/agents/) installs skills for Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot and Devin, each in its own format.
