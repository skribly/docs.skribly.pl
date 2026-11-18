# Frequently asked questions

> Short answers about Skribly Agent - systems, accounts, data, agents, worktrees, trackers, cost, languages, updates and accessibility - each with a link to the page that explains it.

Short answers, each with the page that explains the topic. If you do not find your question, try [Troubleshooting](/agent/troubleshooting/) or [All features at a glance](/agent/features/).

## The app

### What is Skribly Agent?

A desktop app that runs coding agents such as Claude Code, Codex, Cursor Agent and Gemini side by side in terminal panes, with your tracker tasks, git, pipelines, skills and audits in the same window. See [Overview](/agent/) and [All features at a glance](/agent/features/).

### Which systems does it run on?

macOS, Windows and Linux. The download page offers installers for each. See [Install](/agent/install/).

### Why does my system warn me when I open it?

The builds are not signed or notarised yet, so macOS and Windows show a warning the first time. [Install](/agent/install/) shows how to open the app on each system.

### Does it need an account?

No. The app works on your computer, has no server of its own and sends no telemetry. See [Data and network](/agent/data-and-network/).

## Agents

### Which agents does it run?

Thirteen: Claude Code, Codex, Cursor Agent, Gemini CLI, OpenCode, Copilot CLI, Aider, Amp, Droid, Qwen Code, Goose, Crush and Kimi CLI, and any command-line tool you add as a custom agent. See [Supported agents](/agent/agents/).

### Does it include the agents?

No. Skribly starts the agents installed on your computer, finds them in your `PATH` and can offer their install commands. Signing in and the terms of use stay with each agent's provider.

### Can several agents work on one repository at once?

Yes. Give each its own worktree, a separate folder with its own branch, so they do not overwrite each other's files. See [Worktrees](/agent/worktrees/) and [The skribly command](/agent/cli/#parallel-worktrees).

### Can an agent start another agent?

Yes, through [the `skribly` command](/agent/cli/) or [the Skribly MCP server](/agent/skribly-mcp/). The MCP server is read-only by default, and every change it can make asks you in the app first.

### Will an agent run dangerous commands without asking?

That depends on the agent's own permission settings. The optional [command guard](/agent/settings/#command-guard) makes Claude Code, Codex and OpenCode ask before the dangerous ones. It is off by default and is a safety net, not a sandbox.

## Your data

### Does my code leave my computer?

Skribly itself does not upload it. The agents you run talk to their providers as they always do. The list of every connection the app makes is in **Settings → Privacy and network**. See [Data and network](/agent/data-and-network/).

### Can I turn the network off?

Yes. **Settings → Privacy and network → No network calls by the app** stops every connection the app itself makes, including update checks. See [Data and network](/agent/data-and-network/#how-to-turn-the-network-off).

### Where are my settings and tokens?

Settings are in the data directory, which **Settings → Updates → Data directory → Show** opens. Tracker tokens are encrypted with the system keychain. See [Settings](/agent/settings/#data-directory).

### How do I move to another computer?

Export your data and import it there. See [Import and export](/agent/import-export/).

## Tasks, cost and quality

### Which trackers can I connect?

Skribly Tracker, Jira Cloud and Server, Redmine, GitHub, GitLab and Linear. See [Tasks and trackers](/agent/tasks/).

### Is the cost the same as my bill?

No, it is an estimate worked out on your computer from the session files of the agents and a dated price table. A subscription is shown as an API equivalent. Some things that change a bill are not visible in the files. See [Settings → Cost](/agent/settings/#cost).

### Does a budget stop an agent?

No. A budget draws a bar and can send a notification at 80% and at 100%. Nothing is blocked.

### Which audits are there?

Three: **Security**, **Accessibility (WCAG)** and **SEO**, run from the Audits view. See [Audits](/agent/audits/).

## Interface

### Can I use it in Polish?

Yes. Polish and English are built in, and **Follow the system** picks one of them. Other languages are translated from the internet and saved for offline use. See [Languages](/agent/languages/).

### Is it accessible?

Skribly Agent is built to WCAG 2.2 AA as a target. It has a high-contrast theme, text size, reduced motion, underlined links and a strong focus indicator. See [Accessibility](/agent/accessibility/).

### How do I update it?

Updates download in the background and install when you quit the app. **Settings → Updates** checks on demand. See [Updates](/agent/updates/).

## Related pages

<CardGrid>
  <LinkCard title="Troubleshooting" href="/agent/troubleshooting/" description="Fixes for the common problems." />
  <LinkCard title="Settings" href="/agent/settings/" description="Every option and its default." />
  <LinkCard title="Keyboard shortcuts" href="/agent/shortcuts/" description="Pane, app and editor keys." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What is stored and which connections are made." />
</CardGrid>
