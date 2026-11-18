# Plugins and Claude Design

> Plugins & MCP in Skribly Agent installs and switches Claude Code plugins, hands a Claude Design package to an agent and manages the Cursor tab.

The **Plugins & MCP** view has five tabs. This page covers three of them: **Claude Plugins** (the Claude Code plugin catalogue), **Claude Design** (from a design to code, with shortcuts to claude.ai) and **Cursor**. The **MCP servers** tab is described in [MCP servers](/agent/mcp/) and **Extensions** in [Extensions](/agent/extensions/).

![The Claude Plugins tab: five installed Claude Code plugins with their scope and switches, and the catalogue with search, categories and Install buttons](../../../assets/screens/agent-plugins.webp)

## Open the view

- Click **Plugins & MCP** in the activity bar on the left, or
- open the command palette (`⌘K`) and choose **Plugins & MCP**.

On Windows and Linux use `Ctrl` in place of `⌘`. The view has no number shortcut: `⌘1` to `⌘9` stay with the first nine views. The tabs are the switch at the top right of the view.

## Claude Code plugins

The **Claude Plugins** tab lists the plugins Claude Code has installed and the catalogue you can add from. Skribly runs `claude plugin …`, so Claude Code itself takes care of the file format and locking.

### How to install a plugin

<Steps>

1. Choose where it applies in **Install and enable for**.

2. Find the plugin. The catalogue opens on **Recommended**. Use the filters **Design**, **Code and review**, **Documents**, **Integrations** or **All**, or type in the search field, which searches the whole catalogue.

3. Press **Install** on the card. Each card shows where the plugin works: Claude Code, Cowork or claude.ai.

4. Start a new Claude Code session. A change takes effect from the next one.

</Steps>

| Scope in the interface | Settings file |
| --- | --- |
| **everywhere** | `~/.claude/settings.json` |
| **project (repo)** | `<project>/.claude/settings.json`, shared with the team |
| **project (only me)** | `<project>/.claude/settings.local.json` |

The two project scopes need a project selected in the top bar.

### How to switch off or remove a plugin

Each row of **Installed** has a switch, its scope as a badge, a button to the plugin's repository and **Uninstall**. The switch turns the plugin off without removing it. **Uninstall** removes it from that scope.

### What the tab needs

A badge shows **Claude Code CLI detected** or **without Claude Code CLI**. Without the CLI the catalogue comes from Claude Code's local copy, `~/.claude/plugins/plugin-directory-cache-v2.json`, and the switch edits the `enabledPlugins` key of the settings file. Installing and uninstalling need the CLI. The catalogue is cached for ten minutes, and **Refresh** reloads it at once. Listing and installing plugins are network calls, so the **No network calls by the app** switch blocks them; see [Data and network](/agent/data-and-network/).

## Claude Design to code

![The Claude Design tab of Plugins & MCP: Open Claude Design, Choose package, the agent that will implement it, and two imported design packages with Implement buttons](../../../assets/screens/agent-claude-design.webp)

You design in Claude Design, and an agent builds the design in your project with its own components and tokens.

### How to implement a design

<Steps>

1. Open the **Claude Design** tab and select a project in the top bar.

2. Press **Open Claude Design**. A Claude tab opens in the [Browser](/agent/browser/), in its own profile, and you sign in once.

3. In Claude Design export the design as a `.zip` or as standalone HTML. The file is saved in `Skribly Design` in your Downloads folder and appears under **Imported from Claude**.

4. Choose the agent that will build it next to **Will implement**.

5. Press **Implement** next to the package. To use a package that is not on the list press **Choose package…** (`.zip`, `.html`, `.htm` or `.md`; on macOS also a folder).

</Steps>

What happens next:

- The package is extracted to `.skribly/design/<name>-<date>/` in the project. `__MACOSX`, `.DS_Store`, `node_modules` and `.git` are left out, a single folder inside the archive is flattened, and paths that leave the folder are refused. The folder is excluded from git locally.
- Skribly looks for an entry file: `handoff*.md`, `readme*.md`, `claude*.md` or `prompt*.md`, then `index.html`, then any `.html`.
- The agent opens in the Agents view with a prompt. It reviews the package and the existing code, lists a plan and waits for your "ok". It keeps the colours, typography, spacing, texts and assets, builds from the project's components instead of copying the HTML, then checks the result in the preview at desktop and phone size and checks accessibility. It commits only after you agree, without `Co-Authored-By` lines.

### Claude in Skribly

At the bottom of the tab are shortcuts to claude.ai. A click opens the page in the Claude tab of the Browser. The button with the arrow, **Open in system browser**, opens it in your browser instead.

| Shortcut | Address |
| --- | --- |
| **Claude Design** | `https://claude.ai/design` |
| **Artifacts** | `https://claude.ai/artifacts` |
| **Claude Code on the web** | `https://claude.ai/code` |
| **Scheduled** | `https://claude.ai/scheduled` |
| **Customize** | `https://claude.ai/customize` |

## The Cursor tab

The **Cursor** tab shows what is on this computer and edits the project's Cursor rules.

| Part | What it does |
| --- | --- |
| **Cursor app** | Shows where the app is, or **Download Cursor** when it is not found |
| The `cursor` command | Shown when it is in your `PATH`. It is needed to open files and install extensions. In Cursor run the command palette entry `Shell Command: Install 'cursor' command in PATH` |
| `cursor-agent` | The Cursor agent in a terminal. **Install cursor-agent** installs it, and when it is there you can sign in and press **Run** to start it in the Agents view |
| **Skribly editor** | **Set Cursor as the editor** makes files from the Code, Audits and Skills views open in Cursor |
| **Open the project in Cursor** | Opens the selected project in the Cursor app. It needs a project |
| **Cursor MCP servers** | Goes to the **MCP servers** tab |
| **Cursor themes and extensions** | Goes to the Appearance view |

### How to write a Cursor rule

Cursor rules are files in `.cursor/rules` of the project.

<Steps>

1. Select a project, then press **New rule** under **Project rules**.

2. Fill in the **File name (without .mdc)**, a description, the **File patterns (globs, comma separated)** and the **Rule text (Markdown)**.

3. Tick **Always apply (alwaysApply)** if the rule should always go into the context. Save.

</Steps>

Each rule in the list shows how it applies: **always**, **for files**, **by description** or **manually**. The row has a switch for always applying, and buttons to edit, to open the file in the editor and to delete. The tab reads rules up to three folders deep.

## Tips

<Aside type="tip">
Install a plugin for **project (repo)** only when the whole team should have it. Use **project (only me)** to try one first.
</Aside>

- Plugins you add are code from a third party. Read what a plugin does before you switch it on.
- A Claude Design package can be large. The agent works from the extracted folder, so you can delete `.skribly/design/<name>-<date>/` when the work is done.

## Related pages

<CardGrid>
  <LinkCard title="MCP servers" href="/agent/mcp/" description="The servers of Claude Code, Codex, Cursor and Gemini." />
  <LinkCard title="Extensions" href="/agent/extensions/" description="Your own prompts, rules, skills, servers and commands." />
  <LinkCard title="Browser" href="/agent/browser/" description="Where Claude Design opens, in its own profile." />
  <LinkCard title="Skills" href="/agent/skills/" description="Skills for each agent from the agent-skills repository." />
</CardGrid>
