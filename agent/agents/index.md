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

After installing, choose **Settings → Agents → Detect again**; the list is cached for five minutes.

## Open the view

Choose **Settings** in the activity bar, then **Agents**. Each agent has a card with its vendor and command, its version and path when it is installed, and what it can do: **terminal · chat · pipelines**, or only **terminal** for an agent without a headless mode.

## How to install an agent and log in

<Steps>

1. Open **Settings → Agents**. On the card of a missing agent press **Install** and the agent's name. The app runs the right command in its own terminal, where you can see the progress and type a password if one is asked, then detects the agents again. The raw command is in the details and can be copied.

2. For Claude Code, Codex, Cursor Agent and Gemini CLI, an installed agent's card has a login button that runs the agent's own login in the same way.

3. Choose the **Default agent**. It is suggested for tasks, audits, skills and fixing commits.

</Steps>

A missing agent chip on the Dashboard starts the same installation. **Detect again** reads your `PATH` and the common install places again.

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
- **Chat**: runs headless in chat mode and in [pipelines](/agent/pipelines/).
- **Native resume**: the conversation continues after a restart. See [Resume after restart](/agent/sessions/#resume-after-restart).
- **MCP toggle**: Skribly can switch the agent's MCP servers on and off.
- **Shared browser**: the agent can use the Skribly browser over the Chrome DevTools Protocol.

## Custom agents

Any command-line tool can be an agent, with a pane, a state, notifications and control through the `skribly` command. In **Settings → Agents**, under **Custom agents**, enter a **Name**, a **Command** such as `llm`, **Arguments (optional)**, a resume argument such as `--resume {id}`, where `{id}` stands for the session id, and a colour, then press **Add**. The first message goes in as the last argument. In the CLI a custom agent is `--kind custom:<id>`.

## Skills for each agent

[agent-skills](/skills/agents/) installs skills for Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot and Devin, each in its own format.

## Related pages

<CardGrid>
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="Start a session, read its state and resume it." />
  <LinkCard title="Install" href="/agent/install/" description="Get the app and make your agents visible to it." />
  <LinkCard title="Settings" href="/agent/settings/" description="Every section of Settings." />
</CardGrid>
