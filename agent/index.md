# Skribly Agent

> A desktop IDE built around AI coding agents, not around files. What it does, what it needs and a map of every area of the user guide.

**Skribly Agent** is an IDE built around AI agents, not around files. It puts Claude Code, Codex, Cursor Agent, Gemini CLI and nine more side by side like a terminal multiplexer, with tracker tasks, git, pipelines, skills, audits and a preview browser in one window. It runs locally on macOS, Windows and Linux.

It replaces five terminals, task descriptions copy-pasted from a tracker into a chat, and one agent's output pasted into another. It never adds a `Co-Authored-By` trailer nobody asked for.

![The Agents view: the workspace sidebar with three projects and their worktrees, and a Claude Code pane that reviews a diff and lists accessibility issues](../../../assets/screens/agent-agents.webp)

## In short

- **Agents work side by side** in tabs and split panes and tell you themselves when they are waiting for you.
- **Tasks come from your tracker as files**, not through copy-paste: `TASK.md` and `STATE.md` per task.
- **Agents hand work to each other** through state files and pipelines instead of through you.
- **Commits follow your repository's style** and never get AI trailers, including commits made by agents.
- **Everything runs locally.** No account, no telemetry; your agents use their own logins and API keys.

## Facts

| | |
| --- | --- |
| Version | 1.0.37 (6 November 2026) is the latest release; the next one is in development |
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

## The guide

Start with [Install](/agent/install/). Each area below has its own pages.

### Getting started

<CardGrid>
  <LinkCard title="Install" href="/agent/install/" description="Files for each system and unsigned builds." />
  <LinkCard title="First run" href="/agent/first-run/" description="The tour, the Getting started list and the tray icon." />
  <LinkCard title="Your first workspace" href="/agent/first-workspace/" description="Add a project and connect a tracker." />
  <LinkCard title="Your first session" href="/agent/first-session/" description="Start an agent and commit its work." />
  <LinkCard title="All features at a glance" href="/agent/features/" description="One paragraph for every area." />
</CardGrid>

### Agents and workspaces

<CardGrid>
  <LinkCard title="Workspaces" href="/agent/workspaces/" description="Tabs, splits, zoom and the sidebar." />
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="States, the agent panel, chat and hand-off." />
  <LinkCard title="Supported agents" href="/agent/agents/" description="The 13 agents and how to install them." />
  <LinkCard title="Terminals" href="/agent/terminals/" description="Shell panes and SSH machines." />
  <LinkCard title="Session history" href="/agent/session-history/" description="Past sessions and resume." />
  <LinkCard title="Attention inbox" href="/agent/inbox/" description="The sessions that wait for you." />
  <LinkCard title="Dashboard" href="/agent/dashboard/" description="Counters, activity and projects." />
</CardGrid>

### Code and changes

<CardGrid>
  <LinkCard title="Editor and files" href="/agent/code/" description="The Code view." />
  <LinkCard title="Changes and commits" href="/agent/changes/" description="Stage, suggest and commit." />
  <LinkCard title="Review notes" href="/agent/review/" description="Notes on a diff, sent to the agent." />
  <LinkCard title="History" href="/agent/history/" description="The graph of all branches." />
  <LinkCard title="Worktrees" href="/agent/worktrees/" description="All worktrees of your projects." />
</CardGrid>

### Plan and tasks

<CardGrid>
  <LinkCard title="Tasks and trackers" href="/agent/tasks/" description="Tasks started with an agent." />
  <LinkCard title="Plan" href="/agent/plan/" description="The checkboxes of your plan files." />
  <LinkCard title="Pipelines" href="/agent/pipelines/" description="Several agents toward one goal." />
</CardGrid>

### Quality and usage

<CardGrid>
  <LinkCard title="Audits" href="/agent/audits/" description="Security, accessibility and SEO." />
  <LinkCard title="Audit rules" href="/agent/audit-rules/" description="What each audit looks for." />
  <LinkCard title="Token use" href="/agent/usage/" description="Tokens per agent, project and day." />
  <LinkCard title="Resources" href="/agent/resources/" description="Memory, processor and ports of each pane." />
</CardGrid>

### Skills and integrations

<CardGrid>
  <LinkCard title="Skills" href="/agent/skills/" description="Skills from agent-skills for every agent." />
  <LinkCard title="Token saving" href="/agent/token-saving/" description="How the text sent to the model stays small." />
  <LinkCard title="Extensions" href="/agent/extensions/" description="Prompts, rules, skills, MCP servers and commands." />
  <LinkCard title="Plugins" href="/agent/plugins/" description="Claude Code plugins and Claude Design." />
  <LinkCard title="MCP servers" href="/agent/mcp/" description="The MCP servers of your agents." />
  <LinkCard title="Browser" href="/agent/browser/" description="The preview browser." />
  <LinkCard title="Docker" href="/agent/docker/" description="Containers and alerts." />
  <LinkCard title="Documents" href="/agent/documents/" description="README, changelog and .docs." />
</CardGrid>

### Settings and look

<CardGrid>
  <LinkCard title="Settings" href="/agent/settings/" description="Every section of Settings." />
  <LinkCard title="Themes" href="/agent/themes/" description="Day and night themes." />
  <LinkCard title="Accessibility" href="/agent/accessibility/" description="Text size, contrast and motion." />
  <LinkCard title="Languages" href="/agent/languages/" description="The interface languages." />
  <LinkCard title="Import and export" href="/agent/import-export/" description="Move your setup." />
</CardGrid>

### Reference

<CardGrid>
  <LinkCard title="Keyboard shortcuts" href="/agent/shortcuts/" description="The Ctrl+B prefix and every global shortcut." />
  <LinkCard title="The skribly command" href="/agent/cli/" description="Control panes and agents from scripts." />
  <LinkCard title="Skribly MCP" href="/agent/skribly-mcp/" description="The MCP server of the app." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What is stored and where the app connects." />
  <LinkCard title="Updates" href="/agent/updates/" description="Auto-update and release files." />
  <LinkCard title="Troubleshooting" href="/agent/troubleshooting/" description="Common problems and fixes." />
  <LinkCard title="FAQ" href="/agent/faq/" description="Short answers." />
</CardGrid>
