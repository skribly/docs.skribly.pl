# Settings

> Every section of Settings in Skribly Agent, option by option with its default, from appearance and trackers to sessions, cost, the command guard, Docker and updates.

**Settings** holds everything you can change in Skribly Agent. It has sixteen sections in a list on the left. Settings are saved on this device in the data directory; tokens are encrypted with the system keychain. Nothing is sent anywhere when you change a setting.

![Settings, Appearance and tour, in the night theme: the list of sections on the left, and on the right the theme mode, the text size at 13 px, the interface language, the day and night themes and the app tour](../../../assets/screens/agent-settings.webp)

## Open the view

- Click **Settings** at the bottom of the activity bar on the left (the gear), or
- open the command palette (`⌘K`) and choose **Settings**.

The view remembers the section you used last. Some buttons elsewhere in the app open a section directly. `⌘` is `Ctrl` on Windows and Linux.

## The sections

| Section | What it controls | Details |
| --- | --- | --- |
| **Appearance and tour** | Theme mode, text size, interface language, themes, the app tour | [Below](#appearance-and-tour) |
| **Accessibility** | Text size, display and reading switches | [Accessibility](/agent/accessibility/) |
| **Task trackers** | Accounts of Skribly Tracker, Jira, Redmine, GitHub, GitLab and Linear, and watching for changes | [Below](#task-trackers) |
| **Git accounts** | Sign-ins for commit activity and private repositories, repository folders, commit identities | [Below](#git-accounts) |
| **Agents** | Detection of installed agents, the default agent, custom agents | [Below](#agents) |
| **Cost** | Currency, subscriptions, budgets, model prices | [Below](#cost) |
| **Projects** | Per project: base branch, patterns, checks, dev URL, tracker | [Below](#projects) |
| **Sessions & control** | Restoring sessions, the worktree folder, SSH machines, the control API, the `skribly` command | [Below](#sessions-and-control) |
| **Editor & notifications** | Code editor, notifications, muted agents and projects, interface language | [Below](#editor-and-notifications) |
| **Skills repository** | Where skills are downloaded from | [Below](#skills-repository) |
| **Browser for agents** | Sharing the Skribly browser over the Chrome DevTools Protocol | [Below](#browser-for-agents) |
| **Docker** | Container monitoring, alerts, the Docker context | [Docker](/agent/docker/#settings--docker) |
| **Command guard** | Asking before dangerous commands of agents | [Below](#command-guard) |
| **Privacy and network** | Every connection, folder and port of the app, and the switch that turns the network off | [Data, privacy and network](/agent/data-and-network/) |
| **Updates** | The version, update checks, the data directory | [Below](#updates) |
| **Import and export** | Data archive, import from Herdr, agent files | [Import and export](/agent/import-export/) |

## How to change a setting

<Steps>

1. Open **Settings** and choose the section in the list on the left.

2. Change the option. Switches, lists and buttons take effect at once; a toast confirms it.

3. For text fields (the worktree folder, the repository address, project fields) leave the field or press **Save**. A project form has its own **Save**.

</Steps>

## Appearance and tour

| Option | What it does | Default |
| --- | --- | --- |
| **Theme mode** | **Day**, **Night**, **High contrast** or **Follow the system**. The sun and moon icon on the top bar changes it too | Follow the system |
| **Text size** | The text of the interface, the editor and the terminals, in pixels | 13 px |
| **Interface language** | Polish, English or a language translated from the internet; see [Languages](/agent/languages/) | Polish |
| **Day and night themes** | Opens the Appearance view to choose themes from VS Code, Cursor, Windsurf or Open VSX; see [Themes](/agent/themes/) | Skribly day and Skribly night |
| **App tour** | **Run now** starts the animated tour | Shown once on first launch |
| **Show the tour on next launch** | **Reset tour** shows it again at the next start | |
| **Getting started on the Dashboard** | **Show again** brings back the starter checklist on the Dashboard | |
| **Shortcuts and documentation** | Opens the shortcut list and the Help view | |

## Task trackers

The accounts themselves are described in [Tasks and trackers](/agent/tasks/#how-to-connect-a-tracker). The section also has one switch:

| Option | What it does | Default |
| --- | --- | --- |
| **Watch trackers for changes** | While the window is open, asks the tracker only for tasks changed since the last check, less often when the window has no focus and not at all when it is hidden. A changed task gets a marker and a notification, and an agent gets only the new comments at start | On |

## Git accounts

Accounts for GitHub, GitLab, Bitbucket, Gitea and Azure DevOps are used for the commit activity card of the Dashboard and for cloning private repositories. The section also keeps the **Repository folders** that are scanned for activity and **Your commit identities**, the e-mail addresses your commits are counted under. See [Dashboard](/agent/dashboard/) and [First workspace](/agent/first-workspace/).

## Agents

Skribly looks for agents in the `PATH` of your login shell and in the usual install folders.

| Option | What it does | Default |
| --- | --- | --- |
| **Detect again** | Runs the detection again; the result is cached for five minutes | |
| **Default agent** | The agent suggested for tasks, audits, skills and commit fixes | Claude Code |
| Agent cards | The version and path of an installed agent, an install button for the others, and a link to its documentation. A badge says whether the agent has a headless mode, which chat and pipelines use, or only a terminal | |
| **Custom agents** | Any command-line tool as an agent: a name, a command, optional arguments, an optional resume command in which `{id}` stands for the session id, and a colour. The first message is passed as the last argument | None |

Custom agents appear in **New session** and can be controlled with the [`skribly` command](/agent/cli/) as `custom:<id>`. See also [Supported agents](/agent/agents/).

## Cost

Cost shows what the tokens of your agents would cost next to the token counts. It is an estimate made on this computer from the session files the agents leave and a dated price table. Skribly never blocks anything because of a budget. See [Token use](/agent/usage/).

| Option | What it does | Default |
| --- | --- | --- |
| **Show cost** | One switch for the whole app | On |
| Places | One switch each for the usage board, the token chart, the Dashboard, the session toolbar and the tray menu | On |
| **Currency** | USD, EUR, PLN and other common codes, or any ISO 4217 code | USD |
| **Rate typed by hand** | How much of your currency one USD costs | 1 |
| **Daily ECB rate** | Downloads the reference rates of the European Central Bank, at most every 12 hours; the only network call of Cost | Off |
| **Decimal places** | 0 to 4 digits after the decimal point | 2 |
| **Tiny amounts as "< 0.01"** | Shows that a cost exists instead of a zero | On |
| Subscription per agent | Labels the cost as an API equivalent and shows the plan and its monthly price next to it. Agents: Claude Code, Codex, Copilot CLI | Off |
| **Copilot CLI: premium request price** | Empty means in the plan; a price makes the cost premium requests times that price | Empty |
| Budgets | Daily and monthly limits in total and per agent, shown as a quiet bar on the usage board | None |
| **Notify at 80%**, **Notify at 100%** | One system notification per budget and period | On |
| **Model prices** | The table in force. You can change a price, add a model with the names it has in your session files, and reset one model or all | The shipped table |

## Projects

Open a project in the list and press **Configure**. **Detect** reads the conventions of the repository again.

| Option | What it does | Default |
| --- | --- | --- |
| **Name and colour** | How the project appears in the app | The folder name |
| **Base branch** | The branch worktrees and task branches start from | Detected |
| **Branch pattern** | `{key}` is the task key, `{slug}` the lower-case title with hyphens | `feature/{key}-{slug}` |
| **Commit pattern** | `{type}`, `{scope}`, `{subject}`, `{key}`, for example `{type}({scope}): {subject}` | Empty: taken from the history |
| **Commit language** | **Automatic**, **Polish** or **English** | Automatic |
| **Dev-mode app URL** | Opened by the browser preview and the WCAG and SEO audits | Detected |
| **Project tracker** | The account tasks come from, and the project, repository or team in it | None: all trackers |
| **Checks** | Commands separated by commas that agents run before handing work back | Detected |

Detection works like this:

| Setting | How it is detected |
| --- | --- |
| Base branch | The first existing one of `develop`, `main`, `master`, falling back to the first local branch |
| Checks | `npm run lint`, `typecheck` and `test` when present in `package.json`, `composer test`, `python manage.py test`, and `pytest` when there is only a `pyproject.toml` |
| Dev URL | The port from `--port` in the `dev` or `start` script, otherwise `5173` for Vite and `3000` for everything else |

Skribly never adds a `Co-Authored-By` trailer to a commit. **Remove from the list** takes the project out of Skribly and leaves its files alone.

## Sessions and control

| Option | What it does | Default |
| --- | --- | --- |
| **Restore sessions after restart** | Tabs, splits and panes return. Claude Code and Codex resume their conversation; other panes start a fresh shell in the same folder | On |
| **Worktree directory** | Where worktrees for agents are created. Removing a worktree never deletes its branch | Empty: `~/.skribly/worktrees/<repo>/<branch>` |
| **SSH machines** | A name and `user@host` or an alias from `~/.ssh/config`. Skribly opens `ssh -t` and runs the agent there; it stores no passwords | None |
| **Local control API** | Lets agents and scripts control panes. Listens on `127.0.0.1` only; the badge shows the port | On |
| **skribly command** | **Install** adds the command to your `PATH` | Not installed |
| **"skribly" skill for agents** | **Install** in a chosen project teaches Claude Code and Codex to delegate work | Not installed |

Under the options the section shows copyable configurations for the MCP server of Skribly, in **Read only (default)** or **With writes (--allow-writes)** form. See [The skribly command](/agent/cli/) and [The Skribly MCP server](/agent/skribly-mcp/).

## Editor and notifications

![Settings, Editor and notifications: the code editor list, switches for notifications and their sound, lists of muted agents and projects, and the interface language list](../../../assets/screens/agent-settings-general.webp)

| Option | What it does | Default |
| --- | --- | --- |
| **Code editor** | Opens files from the Code, Audits and Skills views: VS Code, Cursor, Windsurf or **System default app** | VS Code |
| **Notifications** | A system notification when an agent finishes or waits for you | On |
| **Notification sound** | Plays a sound with a notification | Off |
| **Muted agents** | No system notifications from the checked agents; they still reach the attention inbox | None |
| **Muted projects** | The same for projects. Several notifications within a few seconds fold into one | None |
| **Interface language** | Polish, English, **Follow the system**, or a translated language | Polish |

A notification appears only when you are not looking at the session: the window is in the background or its pane is not on screen. See [Attention inbox](/agent/inbox/).

## Skills repository

| Option | What it does | Default |
| --- | --- | --- |
| **Git repository address** | Where skills are downloaded from. Any address `git clone` accepts, HTTPS or SSH; an SSH address needs a key in `ssh-agent` | `https://github.com/skribly/agent-skills.git` |
| **Restore default** | Goes back to the default address | |

After a change, synchronise the repository in the Skills view. See [Skills](/agent/skills/).

## Browser for agents

| Option | What it does | Default |
| --- | --- | --- |
| **Share browser with agents** | Opens the Chrome DevTools Protocol on `127.0.0.1` so agents can use the Skribly browser | Off |
| **Port** | 1024 to 65535. Change it if the port is taken | 9333 |
| **State** | Says whether a restart is needed: the port opens at startup | |
| **MCP configuration** | Copyable setup for Claude Code, Codex, Cursor, Gemini CLI and Playwright MCP | |

<Aside type="caution">
While sharing is on, every program on this computer can connect to the port, and tabs with signed-in accounts are visible. Turn it on when you work with agents. See [Browser](/agent/browser/) and [Troubleshooting](/agent/troubleshooting/#the-browser-port-is-in-use).
</Aside>

## Command guard

The guard makes agents ask before a dangerous command and lets you choose groups of commands each agent may run without asking. It is **off by default**, and until you turn it on and confirm the list of files, Skribly writes nothing into the configuration of any agent. It is a safety net, not a sandbox.

| Option | What it does | Default |
| --- | --- | --- |
| **Turn on the guard** | Previews the files that change, then writes after you confirm. Turning it off removes exactly the entries Skribly added | Off |
| Agents | Claude Code, Codex and OpenCode | None |
| Groups per agent | **Read and search**, **Edit files**, **Git**, **Push**, **Build and tests**, **Everything** | None |
| **Always ask** | A read-only list of what always asks, whatever you tick: deleting files, discarding git changes, rewriting history, wiping databases, removing containers, killing processes, publishing packages, `sudo` and piping a download into a shell | |

To change the groups, change the ticks and press **Preview and apply changes**. The dialog lists every file, whether it is created or extended, and each entry; **Write to the files** saves a copy of each existing file first.

## Updates

| Option | What it does | Default |
| --- | --- | --- |
| **Check for updates** | Checks now and shows the state | |
| **Update automatically** | Checks at startup and every 4 hours, downloads in the background and installs when you quit | On |
| **Data directory** | **Show** opens the folder; the copy button copies its path | |

See [Updates](/agent/updates/).

## Data directory

**Settings → Updates → Data directory → Show** opens the folder that holds settings, projects, tracker accounts with their encrypted keys, the layout, sessions, the skills repository, downloaded themes and the history of pipelines.

## Tips

- A setting you cannot find is often in the view it belongs to: pipelines, audits and the browser keep their options on their own page.
- **Privacy and network** lists what the app does on the network. **No network calls by the app** there also stops update checks and the ECB rate.

## Related pages

<CardGrid>
  <LinkCard title="Themes" href="/agent/themes/" description="Day, night and high contrast, and themes from VS Code and Open VSX." />
  <LinkCard title="Accessibility" href="/agent/accessibility/" description="Text size, contrast, motion and focus options." />
  <LinkCard title="The skribly command" href="/agent/cli/" description="Control the app from a terminal." />
  <LinkCard title="Troubleshooting" href="/agent/troubleshooting/" description="Fixes for the common problems." />
</CardGrid>
