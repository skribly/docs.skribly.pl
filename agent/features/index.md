# All features at a glance

> One short paragraph for every view and area of Skribly Agent, each with a link to the page that explains it.

Skribly Agent has one view per job, reachable from the activity bar, with `⌘1` to `⌘9` (`Ctrl` on Windows and Linux) or from the command palette `⌘K`. This page names each area in a few lines; the linked page has the details.

## Dashboard

Agents at work, tasks assigned to you, your recent commits and token use in one page, with a Getting started list. See [Dashboard](/agent/dashboard/) and [First run](/agent/first-run/).

## Agents and sessions

Claude Code, Codex, Cursor Agent, Gemini CLI and nine more run side by side in workspaces, tabs, splits and panes, each in a terminal or a chat. The app reads each agent's state, tells you when one waits and resumes sessions after a restart. See [Workspaces](/agent/workspaces/), [Agents and sessions](/agent/sessions/), [Supported agents](/agent/agents/), [Terminals](/agent/terminals/), [Session history](/agent/session-history/) and the [attention inbox](/agent/inbox/).

## Code and changes

A Monaco editor, search, side-by-side diffs and a terminal; changes, commit messages that follow your history with no AI trailers, branches, push and pull requests, a history graph and review notes you send back to the agent. Worktrees keep agents apart. See [Editor and files](/agent/code/), [Changes and commits](/agent/changes/), [Review notes](/agent/review/), [History](/agent/history/) and [Worktrees](/agent/worktrees/).

## Tasks and trackers

Jira, Redmine, GitHub Issues, GitLab, Linear and Skribly Tracker in one list, plus local tasks. **Start with an agent** writes the task to `.skribly/tasks/<KEY>/TASK.md` and `STATE.md`, creates a branch or worktree and launches the agent with a ready prompt. Status, comments, assignment and time logging work without leaving the app where the tracker supports them. See [Tasks and trackers](/agent/tasks/).

## Plan

The Plan view counts the Markdown checkboxes of your plan files and hands an open item to the Code view or to an agent. See [Plan](/agent/plan/).

## Pipelines

A pipeline is several agents, from different vendors if you like, working toward one goal. Stages run in order and the steps of a stage run in parallel; each step is a headless agent that reads the latest part of a shared `handoff.md`, not the previous agent's whole conversation. See [Pipelines](/agent/pipelines/).

![The Pipelines view: built-in pipelines and recent runs on the left, a running Plan, execution and review pipeline on a graph, and its steps on the right](../../../assets/screens/agent-pipelines.webp)

## Skills

Skills from [agent-skills](/skills/) installed with one click in each agent's own format, adapted to the project, with a `.docs/` skeleton generated from the repository. See [Skills](/agent/skills/) and [Token saving](/agent/token-saving/).

## Audits

The **Audits** view checks a project and a running site for security, accessibility (WCAG) and SEO, gives each report a score from 0 to 100 and sends selected findings to an agent as a short task list. See [Audits](/agent/audits/) and [Audit rules](/agent/audit-rules/).

![A security audit with a score of 40 out of 100: eleven findings sorted by severity, the first a leaked GitHub token shown masked, with its fix on the right](../../../assets/screens/agent-audits.webp)

## Token use and resources

A board of token use per agent, project and day, computed locally from the agents' session files, and a view of the memory, processor and ports of every pane. See [Token use](/agent/usage/) and [Resources](/agent/resources/).

## Extensions, plugins and MCP

Prompts, rules, skills, MCP servers and commands you add per project or team; Claude Code plugins; the MCP servers of Claude, Codex, Cursor and Gemini switched on and off with one toggle; and a Claude Design to code bridge. See [Extensions](/agent/extensions/), [Plugins](/agent/plugins/) and [MCP servers](/agent/mcp/).

## Browser, Docker and documents

A preview browser at phone, tablet and laptop sizes with DevTools and a screenshot for the agent, which you can share with agents over the Chrome DevTools Protocol; Docker containers, compose projects and alerts; and the README, changelog and `.docs` folder read safely. See [Browser](/agent/browser/), [Docker](/agent/docker/) and [Documents](/agent/documents/).

## Settings, themes and languages

Themes from your VS Code, Cursor and Windsurf extensions or from Open VSX, separate day and night themes, text size, accessibility settings, interface languages, and import and export of your setup. See [Settings](/agent/settings/), [Themes](/agent/themes/), [Accessibility](/agent/accessibility/), [Languages](/agent/languages/) and [Import and export](/agent/import-export/).

## CLI and MCP

Agents can drive other agents through the `skribly` command and the `skribly mcp` server, over a local control API on `127.0.0.1` with a random token. See [The skribly command](/agent/cli/) and [Skribly MCP](/agent/skribly-mcp/).

## Related pages

<CardGrid>
  <LinkCard title="Overview" href="/agent/" description="What Skribly Agent is and what it needs." />
  <LinkCard title="Install" href="/agent/install/" description="Files for each system." />
  <LinkCard title="Keyboard shortcuts" href="/agent/shortcuts/" description="The Ctrl+B prefix and every global shortcut." />
</CardGrid>
