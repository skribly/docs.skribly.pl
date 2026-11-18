# Getting started

> Pick the Skribly tools you need, install them and go from a tracker task to your first commit made with an agent.

Each Skribly tool works on its own, and they work best together. This page takes you through the whole loop in about fifteen minutes. If you only want one tool, jump to its page:

- [Skribly Agent](/agent/install/) if you want a desktop app that runs your coding agents side by side.
- [agent-skills](/skills/install/) if you already use Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot or Devin and want them to follow one workflow.
- [Skribly Tracker](/tracker/self-hosting/) if you want an issue tracker whose API is designed for agents.

:::note[Access]
The repositories are private for now, so cloning and downloading need access to the Skribly organisation on GitHub. Public downloads are planned for when the repositories open.
:::

## What you need

| What | Why |
| --- | --- |
| `git` in your `PATH` | Branches, worktrees, commits and downloading skills |
| At least one coding agent, for example `npm install -g @anthropic-ai/claude-code` | Skribly runs the agents you already have, with their own logins |
| Node.js 20 or newer | Only for agent-skills without Skribly Agent; the desktop app brings its own runtime |
| Docker | Only to host Skribly Tracker yourself |

## The whole loop

<Steps>

1. **Start a tracker (optional).** Run Skribly Tracker with Docker, as in [Self-hosting](/tracker/self-hosting/), and create a personal access token on **Profile → API tokens**. You can skip this step and use Jira, Redmine, GitHub, GitLab or Linear instead.

2. **Install Skribly Agent.** Download the file for your system and install it, as in [Install Skribly Agent](/agent/install/). The first launch opens a short tour; you can replay it from **Help**.

3. **Add a project.** Open the project switcher in the top bar and choose **Add project…**. Skribly detects the base branch, the check commands and the dev URL of the repository.

4. **Connect a tracker.** Go to **Settings → Task trackers → Add tracker**, choose the tracker, paste the URL and the token, then **Save and check**. Skribly Tracker is the default; locally its URL is `http://localhost:8100`.

5. **Install skills.** Open **Skills**, download the agent-skills repository and install the skills you want for each agent in the project. Without the app, use the CLI as in [Install agent-skills](/skills/install/).

6. **Start a task.** Open **Tasks**, pick a task and click **Start with an agent**. Skribly writes the task to `.skribly/tasks/<KEY>/TASK.md`, creates `STATE.md` and a branch from your pattern (or a worktree), and starts the agent with a ready prompt. The agent reads the task, proposes a plan and waits for your "ok".

7. **Review and commit.** Open **Code & git**, stage the files, click **Suggest** and then **Commit**. The message follows your repository's history and never gets AI trailers.

8. **Close the task.** Add a comment, change the status and log the time from the task panel, without leaving the app.

</Steps>

## Without the desktop app

The same loop works in any agent's own terminal with agent-skills:

```bash
git clone https://github.com/skribly/agent-skills.git ~/agent-skills
cd ~/agent-skills && npm link
agent-skills install --target all
agent-skills config attribution off
agent-skills doctor
```

Then, in a project, run `/task 123` in Claude Code, `$task 123` in Codex or `/task 123` in the other agents. The `task` skill fetches the issue, writes `.tasks/123/TASK.md`, plans, branches after your approval, implements in stages and commits after your OK.

## See it in action

Every page has the same search and the same way around: <kbd>Ctrl</kbd> <kbd>K</kbd> or <kbd>/</kbd> opens search, the header leads to each tool, the sidebar to its pages and **On this page** to its sections.

<Clip id="docs-search" />

<Clip id="docs-navigation" />

## Next steps

- [Skribly Agent features](/agent/features/): pipelines, audits, the preview browser and the CLI.
- [Skills catalog](/skills/catalog/): every skill and when to use it.
- [Tracker REST API](/tracker/rest-api/): drive the tracker from your own scripts.
