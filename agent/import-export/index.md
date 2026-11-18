# Import and export

> Settings, Import and export in Skribly Agent writes your data to one zip without secrets, previews an import before it changes anything and reads other tools read only.

**Settings**, section **Import and export**, does two things. It writes your own data into one archive you can take to another computer. And it reads what you already built in other tools, Herdr and the rules, commands, skills and MCP entries of your agents, and offers to bring it in. Every import shows a preview first. Nothing is changed until you tick it, and nothing leaves your computer.

![Settings, Import and export: an archive preview with projects, pipelines, extensions and app settings to tick, and Import from other tools with Herdr and agent files](../../../assets/screens/agent-import-export.webp)

## Open the view

- Click **Settings** in the activity bar on the left and choose **Import and export**, or
- open the command palette (`⌘K`) and choose **Settings**.

On Windows and Linux use `Ctrl` in place of `⌘`. Everything on the page is a native checkbox, list or button: `Tab` moves, `Space` ticks and `Enter` presses.

## How to export your data

<Steps>

1. Under **Export your data**, tick what goes into the archive. Each line shows how many items it holds.

2. Press **Export…** and choose where the `.zip` is saved.

3. Press **Show in folder** to find the file.

</Steps>

| Section | What is in it |
| --- | --- |
| **Projects and their settings** | Name, folder, colour, pin and the settings of each project |
| **Pipelines with their layout** | The pipelines you saved, with the layout of their steps. Nothing if you use only the built-in ones |
| **Extensions: rules, prompts, skills, MCP with their switches** | Your rules, prompts, skills, MCP entries and commands, with their scope and the project switches |
| **App settings** | The settings of the app |
| **Task list** | The local tasks of your projects: `meta.json` and `STATE.md` of each folder in `.skribly/tasks` |
| **Usage numbers** | The numbers of the activity heat map, a count per day. No commit messages, no e-mail addresses, no repository names |

What is never in an archive: tokens, passwords and API keys (tracker keys stay in the system keychain and are not read), the values of the environment variables of MCP entries (an entry keeps only the names), and anything from the agents' own session logs. On top of that every string of every file is checked, and one that looks like a secret, or sits under a key named like one (`token`, `password`, `apiKey` and so on), is replaced by `••••••`.

### What is inside the archive

An archive is a plain zip, deflate and no encryption, so you can open it and read it. It holds `manifest.json` and one JSON file for each section you ticked: `projects.json`, `pipelines.json`, `extensions.json`, `settings.json`, `tasks.json` and `usage.json`. The manifest names the format (`skribly-export`), its version, the app version, the date and the platform. An archive made by a newer version of the app is refused.

## How to import an archive

<Steps>

1. Under **Import from an archive**, press **Choose an archive…** and pick the file.

2. Read the preview. It shows the app version and date of the archive, then each section line by line, with its status.

3. Tick what to take. New lines are ticked for you. For a line that is **different from yours**, tick it and choose what to do: **Keep mine** or **Take theirs (a backup of mine is kept)**.

4. Press **Import selected**. The result says how many items were imported and skipped, and names the backup.

</Steps>

| Status | Meaning |
| --- | --- |
| new | Not on this computer. Ticked by default |
| different from yours | Exists here and differs. Tick it and choose **Keep mine** or **Take theirs** |
| same | Already identical. Nothing to do |
| skipped, information | Shown with the reason. It cannot be ticked |

The import keeps these rules:

- Nothing is written until you press **Import selected**. A line that differs is replaced only when it is ticked and set to **Take theirs**.
- Everything that is replaced is first copied to `backups/import-<time>/` in the app's data folder, one JSON file for each replaced item.
- Extensions come in switched off. The project switches in the archive are listed but never applied: an extension changes what an agent does, so you switch it on yourself. See [Extensions](/agent/extensions/).
- Some settings are never taken from an archive, because they start programs, open a port or point at another machine: `controlApi`, `customAgents`, `machines`, `shareBrowserWithAgents` and `cdpPort`.
- A task is written only into a project that is on this computer. Take the project first, then import again.
- The usage numbers stay in the archive as a record. The app counts them again from your repositories.
- A broken file skips only its own section. A file that is not an archive, or is damaged, too large or has a name that would leave the folder, is refused with a message.

## How to import from other tools

Under **Import from other tools** each source shows what was found. The app only reads the other tool's files, only inside your home folder (a link that leads out of it is refused), and changes nothing in them. It sends nothing.

<Steps>

1. Press **Preview** next to a source. The button is greyed out when nothing was found.

2. Read the list. Each item names its **Source** file. Warnings are shown above it.

3. Tick the items to take and press **Import selected**. Only something the preview showed can be taken.

</Steps>

| Source | Read from | Becomes |
| --- | --- | --- |
| Herdr (app) | `~/.local/state/herdr-core/*/docs.json` and `terminals.json`, `~/.config/herdr-core`, `~/.config/herdr-app/shared.json` | A project per space, a session layout per space and per template, a layout per agent in its launcher menu |
| Herdr (terminal) | `~/.config/herdr/session.json` | A project per workspace and a session layout from its tabs and pane labels |
| Agents: rules, commands, skills, MCP | See below | [Extensions](/agent/extensions/) scoped to the agent, with the source file named |

The Herdr formats were learned from the files Herdr writes on a computer. No public format description was used, so a newer version is read as far as it is understood, and the preview says so.

A session layout keeps for each pane its tab, a title, the folder and the program (`claude`, `codex` and so on, or `shell`). Arguments are dropped, because they can hold a task text or a token. The layouts appear under **Imported session layouts**, where you can remove them. A folder outside your home folder is shown as skipped. Add it by hand in the project list.

### What is read from the agents

| Agent | Rules | Commands (as prompts) | Skills | MCP entries |
| --- | --- | --- | --- | --- |
| Claude Code | `~/.claude/CLAUDE.md` | `~/.claude/commands/*.md` | `~/.claude/skills/*/SKILL.md` | `mcpServers` in `~/.claude.json` |
| Codex | `~/.codex/AGENTS.md` | `~/.codex/prompts/*.md` | `~/.codex/skills/*/SKILL.md` | `[mcp_servers.*]` in `~/.codex/config.toml` |
| Cursor | `~/.cursor/rules/*.mdc` and `*.md` | `~/.cursor/commands/*.md` | | `mcpServers` in `~/.cursor/mcp.json` |
| Gemini CLI | `~/.gemini/GEMINI.md` | `~/.gemini/commands/*.toml` | | `mcpServers` in `~/.gemini/settings.json` |
| OpenCode | `~/.config/opencode/AGENTS.md` | `~/.config/opencode/command/*.md` | `~/.config/opencode/skill/*` | `mcp` in `~/.config/opencode/opencode.json` |
| Copilot | `~/.copilot/copilot-instructions.md` | | | `mcpServers` in `~/.copilot/mcp-config.json` |

A file that is not there is skipped, so the list follows what is installed. Only your home folder is read.

Secrets are not imported:

- A rule, prompt or skill whose text looks like a secret is shown as `••••••` and marked skipped. It is never stored.
- An MCP entry keeps the names of its environment variables. The values are not read into the preview. A header is kept only as a `Bearer ${NAME}` reference, and any other header is dropped, which the preview says. A command or an address that carries a credential is skipped.

## Tips

<Aside type="tip">
Export before you reinstall or change computers. Then on the new one import the archive first, take the projects, and import again to take the tasks.
</Aside>

- If you take theirs for a line, a copy of yours stays in `backups/`, so you can go back.
- The privacy sheet lists reading other tools' files, writing an archive and keeping a backup. See [Data and network](/agent/data-and-network/).

## Related pages

<CardGrid>
  <LinkCard title="Extensions" href="/agent/extensions/" description="What imported rules, prompts, skills and MCP entries become." />
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="Sessions and their panes." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What the app reads, writes and contacts." />
  <LinkCard title="Settings" href="/agent/settings/" description="All the settings of Skribly Agent." />
</CardGrid>
