# Settings

> What each section of Settings in Skribly Agent controls, from appearance and accessibility to trackers, agents, sessions, the browser, Docker and updates.

Open **Settings** from the sidebar or the command palette. Settings are saved on this device in the app's data directory; tokens are encrypted with the system keychain.

| Section | What it controls |
| --- | --- |
| **Appearance and tour** | Mode (system, day, night), the day and night themes, text size, and the app tour |
| **Accessibility** | Interface text size, high contrast, reduced motion, underlined links, a strong focus indicator. See [Accessibility](/agent/accessibility/). |
| **Task trackers** | Accounts for Skribly Tracker, Jira, Redmine, GitHub, GitLab and Linear: URL, token, **Save and check**, **Test** |
| **Git accounts** | GitHub, GitLab, Bitbucket, Gitea and Azure DevOps sign-ins, used for commit activity and private clones |
| **Agents** | Detection of installed agents, install commands, the default agent and custom agents |
| **Projects** | Per project: base branch, check commands, dev URL, branch pattern, commit pattern and language; **Detect** runs detection again |
| **Sessions & control** | Restore sessions after restart, the worktree directory, SSH machines, the local control API, the `skribly` command and the `skribly` skill for agents |
| **Editor & notifications** | Editor options, system notifications and the interface language |
| **Skills repository** | The agent-skills repository address, `github.com/skribly/agent-skills` by default, or your own fork |
| **Browser for agents** | Sharing the Skribly browser over the Chrome DevTools Protocol, and its port (1024-65535, `9333` by default) |
| **Docker** | Container monitoring, alerts and the Docker context |
| **Updates** | The version, system and architecture, **Check for updates**, **Update automatically** and the data directory |

## Projects in detail

When you add a project, Skribly detects its conventions:

| Setting | How it is detected |
| --- | --- |
| Base branch | The first existing one of `develop`, `main`, `master`, falling back to the first local branch |
| Checks | `npm run lint`, `typecheck` and `test` when present in `package.json`, `composer test`, `python manage.py test`, and `pytest` when there is only a `pyproject.toml` |
| Dev URL | The port from `--port` in the `dev` or `start` script, otherwise `5173` for Vite and `3000` for everything else |
| Branch pattern | `feature/{key}-{slug}` |
| Commit pattern and language | Empty and automatic, which means detected from the history on every suggestion |

Removing a project from the list does not touch its files.

## Tracker accounts

You can have several accounts, including several of the same type. Editing an account without entering a token keeps the old one. Deleting an account also deletes its encrypted token; task files in projects stay.

| Tracker | Address | Token |
| --- | --- | --- |
| Skribly Tracker | Your instance, locally `http://localhost:8100` | **Profile → API tokens**, read and write |
| Jira Cloud | `https://your-team.atlassian.net` and your account e-mail | id.atlassian.com → Security → API tokens |
| Jira Server / Data Center | Your server, with the e-mail field empty | Profile → Personal Access Tokens |
| Redmine | The home page address, without `/issues` | My account → API access key; the REST API must be enabled |
| GitHub | Empty for github.com; Enterprise: `https://github.example.com/api/v3` | A fine-grained token with Issues access |
| GitLab | Empty for gitlab.com, or your instance | A token with the `read_api` scope |
| Linear | Can stay empty | Settings → Security & access → Personal API keys |

## Data directory

**Settings → Updates → Data directory → Show** opens the folder that holds settings, the layout, sessions, encrypted secrets and downloaded themes. An install upgraded from the former name **Skryba Agent Workflow** keeps using its old folder, so nothing is lost.
