# Skills

> The Skills view of Skribly Agent fetches the agent-skills repository and installs skills into a project in each agent's own format and folder.

The **Skills** view lists the skills of the agent-skills repository: short procedures for an agent, such as working on a task, committing or reviewing. Skribly keeps a copy of the repository, installs the skills you tick into a project in the format and folder each agent reads, and can match the installed skills to the project's conventions. What the skills themselves do is described in the [agent-skills section](/skills/).

![The Skills view: the agent-skills repository with Sync, Generate .docs and Install selected, category filters and skill cards with the agents each one is installed for](../../../assets/screens/agent-skills.webp)

## Open the view

- Click **Skills** in the activity bar on the left, or press `⌘6`, or
- open the command palette (`⌘K`) and choose **Skills**.

On Windows and Linux use `Ctrl` in place of `⌘`.

## How to fetch the repository

<Steps>

1. Open **Skills**. The first time the view is empty and asks you to download the skills.

2. Press **Fetch the repository**. Skribly clones the repository into its data folder with `git clone --depth 50`.

3. Press **Sync** later to update it. It runs `git pull --ff-only`, so a fork with local commits is never rewritten.

</Steps>

Below the title a line shows the repository address, the short hash of the version and when it was last synchronised. An error from git is shown on the same line. Fetching and syncing are the only network calls of the view, and only when you press the button. The **No network calls by the app** switch blocks them; see [Data and network](/agent/data-and-network/).

## How to install skills in a project

You need a project selected in the app.

<Steps>

1. Find the skills you want. Type in **Search skills** (it looks at the name, title, description and tags) or pick a category under **Category**.

2. Tick the box on each card, or open a card to read the skill and press **Install** there.

3. Press **Install selected**. The button shows how many skills are ticked.

4. Choose the agents. Agents found on this computer have a badge, and agents the skill does not support are greyed out.

5. Press **Install in project**. A log lists what was written and where. Press **Done** to close it.

</Steps>

The files go into the project's repository, so the whole team has the same skills. A skill counts as installed for an agent when any of its paths exists, and the badges on the cards and in the open card show it.

| Agent | Where the skill goes |
| --- | --- |
| Claude Code | `.claude/skills/<name>/SKILL.md` |
| Codex | `.agents/skills/<name>/SKILL.md` |
| Cursor | `.agents/skills/` (the older `.cursor/rules/<name>.mdc` also counts as installed) |
| Gemini CLI | `.agents/skills/` and `.gemini/commands/<name>.toml` |
| OpenCode | `.agents/skills/` and `.opencode/commands/<name>.md` |
| Windsurf | `.agents/skills/` and `.windsurf/workflows/<name>.md` |
| Copilot | `.agents/skills/` (the older `.github/instructions/<name>.instructions.md` also counts as installed) |

Claude Code reads `.claude/skills`. The other agents read the shared `.agents/skills` folder, so a skill is written once for them. The extra command files are made by the repository's own installer.

Skribly runs the repository's installer, `cli/agent-skills.mjs`, in a worker inside the app, so you need no separate Node.js. It runs only when you press **Install in project**. If the installer fails to write a skill, or is missing, Skribly copies the skill folder itself to `.claude/skills/` for Claude Code and to `.agents/skills/` for the others.

## How to match installed skills to the project

<Steps>

1. Install the skills first. The button is greyed out while none is installed.

2. Press **Match installed to the project (Claude)** under the title. The name in brackets is your default agent.

3. An agent opens in the Agents view with a prompt. It reads only the dependency file, the README, the last 30 commits and the linter and test configuration, fills in the project-dependent parts of the skills (check commands, base branch, branch and commit patterns, dev URL), saves them in `.tasks/workflow.md` and lists what it changed. It does not commit and does not change the general procedures.

</Steps>

## How to generate .docs

<Steps>

1. Press **Generate .docs**. It needs a project.

2. Skribly scans the repository without a model and writes the skeleton of the project's `.docs/` folder. A file you edited by hand, without the `skribly:auto` marker, is not overwritten.

3. An agent opens in the Agents view and fills in the architecture, the commands and the dependencies. It proposes a short `AGENTS.md` that points to `.docs/`, and does not save it without your approval.

</Steps>

## What is on the screen

| Part | What it shows or does |
| --- | --- |
| Repository line | Address, version, time of the last sync and any error |
| **Sync** | Updates the repository. It reads **Fetch the repository** until the first download |
| **Generate .docs** | The two steps above |
| **Install selected** | Opens the agent choice for the ticked skills |
| **Match installed to the project** | The prompt described above |
| **Search skills** and **Category** | Filter the cards. The categories come from the repository |
| Skill card | Title, `/name`, three lines of description, category and the agents it supports. A green badge with a number shows for how many agents it is installed |
| Open card | The skill's text, the agents it is installed for, **Show files** (the folder in your file manager), **GitHub** (only for an HTTPS repository) and **Install** |

## Settings → Skills repository

The address is set in **Settings**, section **Skills repository**.

| Option | What it does | Default |
| --- | --- | --- |
| **Git repository URL** | Where Skribly fetches skills from. Any address `git clone` accepts: HTTPS or SSH | `https://github.com/skribly/agent-skills.git` |
| **Save** | Keeps the address. Then press **Sync** in the Skills view | |
| **Restore defaults** | Puts the default address back | |
| **Open repository** | Opens an HTTPS address in the browser | |

Use your own fork or a company repository to give the team a different set of skills. If the repository has a `skills.json`, the catalogue is read from it. Without one, Skribly reads the `skills/<name>/SKILL.md` folders.

## The skribly skill

A separate skill, `skribly`, teaches Claude Code and Codex to hand work to other agents: a reviewer beside them, an implementer in its own worktree, waiting for the result and reading it. It is built into the app and does not come from the repository. Install it in **Settings**, section **Sessions & control**, under **“skribly” skill for agents**: choose the project and press **Install**. It writes `.claude/skills/skribly/SKILL.md` and `.agents/skills/skribly/SKILL.md`. The commands it uses are described in [The skribly command](/agent/cli/).

## Tips

<Aside type="tip">
Install only the skills a project uses. An agent keeps just each skill's name and description in context, but a short list is easier to read. See [Token saving](/agent/token-saving/).
</Aside>

- Commit the installed skill folders, so a new teammate gets them with the clone.
- When a project has the `task` skill, **Start with an agent** in the Tasks view sends `/task <KEY>` to Claude Code and `$task <KEY>` to Codex instead of a long prompt.

## Related pages

<CardGrid>
  <LinkCard title="agent-skills" href="/skills/" description="The skills themselves: what each one does and how to install the set." />
  <LinkCard title="Token saving" href="/agent/token-saving/" description="How the skills keep the text sent to the model small." />
  <LinkCard title="Tasks and trackers" href="/agent/tasks/" description="Start a task with an agent and the task skill." />
  <LinkCard title="Extensions" href="/agent/extensions/" description="Your own prompts, rules and skills, kept apart from the repository." />
</CardGrid>
