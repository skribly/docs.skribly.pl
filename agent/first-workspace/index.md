# Your first workspace

> Add a project to Skribly Agent from a folder or a link, see what the app detects, connect a task tracker and switch between projects.

A project is a folder, usually a git repository. Agents, git, audits and skills work in the folder of the project you select at the top of the window. Add one before you start an agent.

![The Code & git view before a project is chosen: Select a project, with Add project and Clone from a link](../../../assets/screens/agent-no-project.webp)

## How to add a project

<Steps>

1. Click the project switcher in the top bar and choose **Add project…**. The same action is in **Settings → Projects**, on the Dashboard and in the command palette (`⌘K`).

2. Pick the folder. The app adds it, selects it and detects the conventions of the repository.

3. Open **Settings → Projects**, press **Configure** on the project, check the values and press **Save**.

</Steps>

Adding a folder that is already a project selects the existing one. Removing a project from the list with **Remove from list** does not touch any file on disk; you can add it again at any time.

## How to clone a repository

<Steps>

1. Choose **Clone from a link…** in the project switcher, in the palette (**Clone a repository from a link…**) or with **Clone from a link** in **Settings → Projects**.

2. Paste the **Repository link**: a browser link, an `https://` or `ssh://` address, `git@host:owner/name.git` or `owner/name` for GitHub. A link that points at a branch, such as `…/tree/develop`, fills the branch.

3. Press **Choose** next to **Destination folder**. The line below says which folder will be created, `<folder>/<name>`.

4. Fill **Branch (optional)** if you want a branch other than the default one.

5. Press **Clone and add project**. The dialog shows the progress and **Stop** ends it.

</Steps>

Private repositories use an account from **Settings → Git accounts**, your `gh` login or an SSH key. A link with a user name or password is refused: never put one in the link.

## What is detected

Detection only suggests values. Press **Detect** in the project's settings to run it again; your edits are never applied without **Save**.

| Setting | How it is detected |
| --- | --- |
| **Base branch** | The first existing of `develop`, `main`, `master`; otherwise the first local branch |
| **Checks (comma separated)** | `npm run lint`, `npm run typecheck` and `npm run test` for the scripts the `package.json` has; `composer test` when there is a `composer.json`; `python manage.py test` when there is a `manage.py`; `pytest` when there is only a `pyproject.toml` |
| **Dev-mode app URL** | The port after `--port` in the `dev` or `start` script; otherwise `5173` when the script uses Vite and `3000` for everything else; set only when a `package.json` exists |
| **Branch pattern** | `feature/{key}-{slug}` |
| **Commit template** | Empty: the commit message follows the repository's history |
| **Commit language** | Automatic |

The same section lets you set the project's name and colour, a **Project tracker** and the **Project / repository / team in the tracker**, so the task list of that project shows only its own tasks.

## How to connect a tracker

<Steps>

1. Open **Settings → Task trackers** and press **Add tracker**.

2. Choose the tracker and enter the URL and the token.

3. Press **Save and check**. The app saves the account, encrypts the token and tests the connection.

</Steps>

URLs, token permissions and starting a task with an agent are on [Tasks and trackers](/agent/tasks/).

## How to switch projects

Click the project switcher in the top bar and choose a project from the list. The current one has a coloured dot and its name on the button. Agents, git, audits and skills now work in the new folder. Panes that already run stay where they are; the Agents view groups them by project, as described on [Workspaces](/agent/workspaces/).

<Aside type="tip">
Shortcuts on this site use `⌘`. On Windows and Linux use `Ctrl` instead.
</Aside>

## Related pages

<CardGrid>
  <LinkCard title="Your first session" href="/agent/first-session/" description="Start an agent in the new project." />
  <LinkCard title="Tasks and trackers" href="/agent/tasks/" description="Tasks from your tracker, started with an agent." />
  <LinkCard title="Workspaces" href="/agent/workspaces/" description="Tabs, splits and the workspace sidebar." />
  <LinkCard title="Settings" href="/agent/settings/" description="Every section of Settings." />
</CardGrid>
