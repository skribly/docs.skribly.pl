# Skribly Agent

> A desktop IDE built around AI coding agents, not around files. What it does, what it needs and where to read more.

**Skribly Agent** is an IDE built around AI agents, not around files. It puts Claude Code, Codex, Cursor Agent, Gemini CLI and nine more side by side like a terminal multiplexer, with tracker tasks, git, pipelines, skills, audits and a preview browser in one window. It runs locally on macOS, Windows and Linux.

It replaces five terminals, task descriptions copy-pasted from a tracker into a chat, and one agent's output pasted into another. It never adds a `Co-Authored-By` trailer nobody asked for.

![The Agents view: a workspace sidebar with three projects and their worktrees, and a Claude Code pane reviewing a diff](../../../assets/screens/agent-agents.webp)

## In short

- **Agents work side by side** in tabs and split panes and tell you themselves when they are waiting for you.
- **Tasks come from your tracker as files**, not through copy-paste: `TASK.md` and `STATE.md` per task.
- **Agents hand work to each other** through state files and pipelines instead of through you.
- **Commits follow your repository's style** and never get AI trailers, including commits made by agents.
- **Everything runs locally.** No account, no telemetry; your agents use their own logins and API keys.

## Facts

| | |
| --- | --- |
| Version | 1.0.37 (6 November 2026); every push to `main` builds a new `1.0.<build>` release |
| Systems | macOS 12+ (Apple Silicon and Intel), Windows 10 and 11 (x64 and ARM64), Linux x64 (AppImage, `.deb`, `.rpm`) |
| Stack | Electron 45, React 19, TypeScript 7, Vite 8 |
| Interface languages | Polish and English, plus any other language through online machine translation that is cached for offline use |
| Telemetry | None |
| Licence | MIT |

## Requirements

- `git` in your `PATH`. Without it you can preview files but not see changes.
- At least one coding agent, for example `npm install -g @anthropic-ai/claude-code`. Skribly detects installed agents and shows the install command for missing ones.
- No separate Node.js. The app runs its helpers with its own runtime.
- `ssh` (OpenSSH) only if you want to run agents on remote machines.

## Read next

| Page | What it covers |
| --- | --- |
| [Install](/agent/install/) | Files for each system, first launch, unsigned builds |
| [Features](/agent/features/) | Code and git, tasks, pipelines, skills, audits, browser, Docker, CLI and MCP |
| [Workspaces and panes](/agent/workspaces/) | Workspaces, tabs, splits, agent states, notifications, worktrees |
| [Terminals and sessions](/agent/terminals/) | New sessions, chat mode, resume after restart, SSH, broadcast, hand-off |
| [Supported agents](/agent/agents/) | The 13 agents, how to install them and what each one supports |
| [Keyboard shortcuts](/agent/shortcuts/) | The `Ctrl+B` prefix and every global shortcut |
| [Settings](/agent/settings/) | Every section of **Settings** |
| [Accessibility](/agent/accessibility/) | Text size, high contrast, reduced motion, underlined links, focus |
| [The skribly command](/agent/cli/) | Control panes and agents from scripts and other agents |
| [Audit rules](/agent/audits/) | What the security, accessibility and SEO audits look for |
| [Token saving](/agent/token-saving/) | How agent-skills keeps the text sent to the model small |
| [Data and network](/agent/data-and-network/) | What is stored, where the app connects, which ports it opens |
| [Updates](/agent/updates/) | Auto-update, versions and release files |
| [Troubleshooting](/agent/troubleshooting/) | Common problems and their fixes |
