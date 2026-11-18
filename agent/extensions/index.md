# Extensions

> The Extensions tab of Skribly Agent keeps your own prompts, rules, skills, MCP servers and commands per agent or technology, all off until you switch them on.

The **Extensions** tab holds your own additions for an agent or for a technology: prompts, rules, skills, MCP servers and shell commands. Each one is a plain file. You choose who it is for, add it, and switch it on for a project. Nothing runs by itself, everything is off until you switch it on, and no secret is ever stored.

![The Extensions tab: buttons to add a prompt, rule, skill, MCP server or command, and one prompt, one rule and one team skill switched on with their token estimates](../../../assets/screens/agent-extensions.webp)

## Open the view

- Click **Plugins & MCP** in the activity bar on the left and choose the **Extensions** tab, or
- open the command palette (`⌘K`) and choose **Plugins & MCP**.

On Windows and Linux use `Ctrl` in place of `⌘`. The view has no number shortcut: `⌘1` to `⌘9` stay with the first nine views. Select a project in the top bar first: the switches, the detected technologies and the team's additions belong to a project.

## Kinds of addition

| Kind | What it is | What it does |
| --- | --- | --- |
| Prompt | Reusable text | **Send** types it into an agent pane. Choose the pane next to **Send to** at the top of the list |
| Rule | Text for the agent's instructions | Added to `TASK.md` when you start a task from the app, for the agent that starts it |
| Skill | A folder with a `SKILL.md`, chosen from disk | Switching it on copies it into the project's skills folder: `.claude/skills/<name>` for Claude Code, `.agents/skills/<name>` for the other agents. Switching it off removes only that copy |
| MCP server | A stdio command and arguments, or an http or sse address | **Write to the agent…** adds it to the configuration of the agents you tick, with the same code as [MCP servers](/agent/mcp/) |
| Command | A shell command kept as text | **Run…** shows the whole command and, after your click, types it into a new terminal in the project |

Hooks are not part of this version.

Nothing an addition brings runs by itself. A prompt is sent only by your click. A command runs only after you confirm the exact text shown, and the app refuses to run it if the stored text changed since it was shown. An MCP entry is written only after a confirmation. Rules are text, not code. The one thing a switch does is copy a skill into a project.

## For whom an addition is

The list **Show for** picks what you look at, and a new addition is made for it.

| Scope | Meaning |
| --- | --- |
| **All agents** and **All projects** | Applies to every agent and every project. It shows under every other scope too, marked **from a broader scope** |
| An agent | One agent the app knows, such as Claude Code or Codex |
| A technology | A technology found in the open project, or one an addition already names |

The app finds technologies by reading files at the root of the open project, such as `package.json`, `composer.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile`, `pom.xml` and `Dockerfile`. It never runs anything. The tab lists each technology with the file and entry that proved it, for example `package.json: react`.

## How to add an addition

<Steps>

1. Choose the scope in **Show for**.

2. Press the button of the kind under **Add**: **Prompt**, **Rule**, **Skill**, **MCP server** or **Command**.

3. Fill in **Name**, an optional description and the content. For a skill press **Choose the skill folder**. For an MCP server choose stdio or a remote address, then the command and arguments or the address.

4. Under **Where to store it** choose **Mine** (the app's data folder) or **Team** (`.skribly/extensions` in the repository). **Team** is greyed out when the folder is read-only or no project is selected.

5. Tick the box that switches it on for the open project if you want that, and save.

</Steps>

A text is at most 20,000 characters and a command at most 2,000. A skill folder holds at most 200 files, 512 KB each and 2 MB in all. Links are skipped, and `.git` and `node_modules` are not copied.

## Your folder and the team's

| Where | Path | Notes |
| --- | --- | --- |
| Yours | `extensions/` in the app's data folder, with `index.json` and `skills/<id>/` | The data folder is shown in **Settings** |
| Team | `.skribly/extensions/` in the project, with `index.json` and `skills/<id>/` | Shown with a team badge. When the folder cannot be written, the addition is read-only: you can switch it on, not edit or remove it |

To share an addition with the team, save it with **Team**, then commit `.skribly/extensions/`. If the repository ignores `.skribly/`, use `git add -f .skribly/extensions`.

The switches are kept on your side, in your own `index.json`, never in the repository. So a repository you clone cannot hand instructions to an agent by itself.

## Switched off until switched on

Press the switch of an addition to turn it on for the project. The switch is bound to the content you turned on: a SHA-256 of the kind, scope, name, description, text and MCP entry, and for a skill the path and hash of every file.

If that content changes in any way other than an edit in the app, for example a `git pull` or a hand edit of `index.json`, the addition counts as off everywhere. Its rules are not added to `TASK.md`, its command does not run and its MCP entry is not written. The tab marks it **changed since you switched it on**. Read it and switch it on again.

- An edit you save in the app keeps the switch.
- A skill already copied into a project keeps the copy you approved. The tab says the stored skill is newer, and switching it on again replaces the copy.

## Token estimate

Each rule, prompt and skill shows roughly how many tokens it adds: the characters of the text (for a skill, of `SKILL.md`) divided by four, rounded up. MCP servers and commands show none. With a project selected, a line above the list sums the switched-on rules and skills, because those go into every task. Prompts are not counted, as you send them only when you want.

## Check an addition

The shield button on an addition runs a check and changes nothing. It repeats the checks of saving: name, description, scope, limits, the refusal of secrets and a well formed command or http(s) address for an MCP server. For a skill it also checks that `SKILL.md` exists with a name and a description, and the file limits and the secret check on the stored files. It never starts an MCP server and never runs a command.

## Never a secret

An MCP entry never holds a token. It names the environment variable the server reads:

- for a stdio server, **Environment variables the server reads (names only)** is a list of names. Each is written as `${NAME}` and the agent expands it when it starts the server (Cursor gets `${env:NAME}`, Codex gets `env_vars`);
- for a remote server, **Environment variable that holds the Bearer token (name only)** is one name, written as `Authorization: Bearer ${NAME}` (Codex gets `bearer_token_env_var`).

Text, an MCP entry or a skill file that looks like it holds a key, a token or a password is refused, and the error does not repeat the value. A flag and its secret value as two arguments (`--api-key abc…`) is refused too. A reference such as `$GITHUB_TOKEN` is fine.

When you write an MCP server to an agent, a confirmation shows the agents and the scope. The entry has no auto-approve setting, so the agent asks before using a tool as always. The default scope is the open project, and **Everywhere (user configuration)** is a separate choice. Codex reads only the user configuration, so for it the entry always goes there.

## Import and export

- **Export** (top right, or the download button on one addition) writes one JSON file. It holds the text, the MCP entries and the files of each skill. It never holds your per-project switches.
- **Import** reads such a file and first shows what it will add: name, kind, scope, and which ones exist already (they are skipped). Nothing is added until you confirm. Imported additions go to your own additions, all switched off.

A file with a secret anywhere, with a skill path that leaves its folder, or in another format is refused whole. A file can be up to 10 MB.

## What the store refuses

The team folder comes from the repository, so other people write it. The store treats every byte of it as untrusted, and checks your own folder the same way.

- An index entry whose id is not one the store makes (`u-` for yours or `t-` for the team's, then up to 32 letters and digits), or that would not pass the checks of a new addition, is ignored. Ignored entries stay in the file, unused, and the tab says how many there are.
- A symbolic link on the way to the store or inside a skill is refused, in the project's `.claude` and `.agents` folders too. A team folder with a link in it is treated as absent.
- A team skill whose files break the limits or look like they hold a secret is refused when it is switched on and when it is exported.
- An `index.json` that cannot be read, for example with a git conflict left in it, is never overwritten. The team folder with such an index is skipped and read-only, and saving into your own index is refused until you fix the file.

## Tips

<Aside type="caution">
Read a team addition before you switch it on. A rule goes into the instructions of every task, and a command runs in your terminal.
</Aside>

- Keep a rule short: it is added to every task for that agent.
- Put what only one technology needs under that technology, so other projects do not carry it.

## Related pages

<CardGrid>
  <LinkCard title="MCP servers" href="/agent/mcp/" description="The servers of Claude Code, Codex, Cursor and Gemini, and the health check." />
  <LinkCard title="Plugins and Claude Design" href="/agent/plugins/" description="Claude Code plugins, Claude Design to code and the Cursor tab." />
  <LinkCard title="Skills" href="/agent/skills/" description="Skills from the agent-skills repository." />
  <LinkCard title="Tasks and trackers" href="/agent/tasks/" description="Where rules are added to TASK.md." />
</CardGrid>
