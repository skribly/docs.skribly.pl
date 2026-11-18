# Tasks and trackers

> The Tasks view of Skribly Agent lists your tasks from Skribly Tracker, Jira, Redmine, GitHub, GitLab and Linear, and starts an agent on one with its file and branch ready.

The **Tasks** view brings the tasks assigned to you from your trackers into one list, next to the tasks you started and tasks you write yourself. From a task you can change its status, assign it, comment, log time and open it in the tracker. **Start with an agent** saves the task to a file in the project, creates a branch or a worktree and starts an agent with a ready prompt, so the agent spends no tokens fetching the ticket.

![The Tasks view: tasks in progress and assigned to me from Jira and Redmine on the left, and a Jira task with Start with an agent, status, Assign to me, Comment, Log time and Open in tracker](../../../assets/screens/agent-tasks.webp)

## Open the view

- Click **Tasks** in the activity bar, or press `⌘3` (on Windows and Linux `Ctrl+3`), or
- open the command palette (`⌘K`) and choose **Tasks**.

Without a tracker account the list is empty and offers **Tracker settings** and **Custom task**. Connect a tracker first: see [How to connect a tracker](#how-to-connect-a-tracker).

## How to connect a tracker

<Steps>

1. Open **Settings**, then **Task trackers**, and press **Add tracker**.

2. Choose the tracker, type a **Name** (for example "Company Jira") and the **Address**. For Jira choose the **Installation type**, and for Jira Cloud type the **Atlassian account email**.

3. Paste the token. **Open tokens page** opens the page where you create it. The table below says which token each tracker needs.

4. Press **Save and test**. The account is saved and the connection is checked. **Test** repeats the check at any time.

</Steps>

You can have several accounts, also several of one tracker. Edit an account with the pencil: leave the token empty to keep the old one. Deleting an account deletes its encrypted token too; task files in projects stay.

For GitHub and GitLab you can limit an account to some repositories or projects (or a whole organisation or group). The limit narrows your tasks, the search and the places offered for new tasks. Empty means everything the token can see.

| Tracker | Address | Token | Permissions | Task key |
| --- | --- | --- | --- | --- |
| **Skribly Tracker** | Your instance; locally `http://localhost:8100` | **Profile → API tokens → create a token** (read and write; it is shown once) | Read and write | `AGENT-12` |
| **Jira Cloud** | `https://your-team.atlassian.net`, plus your account email | id.atlassian.com → Security → API tokens → Create API token | Read the issues of the projects you can see | `PROJ-123` |
| **Jira Server / Data Center** | Your server; leave the email empty | Profile → Personal Access Tokens | The same | `PROJ-123` |
| **Redmine** | The home page address, without `/issues` | My account → API access key → Show | An administrator must enable the REST API: Administration → Settings → API | `2047` |
| **GitHub** | Empty for github.com; Enterprise: `https://github.example.com/api/v3` | Settings → Developer settings → Personal access tokens | Fine-grained, **Issues: Read-only** for the repositories with your tasks | `owner/repo#12` |
| **GitLab** | Empty for gitlab.com, or your own instance | Preferences → Access tokens → Add new token | The `read_api` scope | `group/project#34` |
| **Linear** | Can stay empty: Linear has one API address | Settings → Security & access → Personal API keys → New API key | An account that can see the teams with your tasks | `ENG-56` |

The token is encrypted with the system password store (Keychain on macOS, DPAPI on Windows, libsecret on Linux) through Electron `safeStorage`. It is not shown in the interface and it does not end up in project files. When encryption is not available, for example on Linux without a keyring, the token is kept in memory only until the app closes.

A token with read-only rights is enough to list and open tasks. Changing a status, assigning, commenting, logging time and creating a task need a token that may write.

### What each tracker lists

| Tracker | "Assigned to me" |
| --- | --- |
| Skribly Tracker | Your assigned tasks |
| Jira | Issues with `assignee = currentUser()` that are not done, newest update first, up to 100. Jira Cloud signs in with email and token, Server and Data Center with the token as a bearer header |
| Redmine | Open issues assigned to you, newest update first, up to 100 |
| GitHub | Open issues assigned to you (pull requests left out), up to 100 |
| GitLab | Open issues assigned to you, up to 100 |
| Linear | Issues assigned to you that are not completed or canceled, up to 100 |

### What each tracker can do in the app

| Tracker | Comment | Status | Assign | Create | Search | Log time |
| --- | --- | --- | --- | --- | --- | --- |
| Skribly Tracker | Yes | Yes | Yes | Yes | Yes | Yes |
| Jira | Yes | Yes | Yes | Yes | Yes | Yes |
| Redmine | Yes | Yes | Yes | Yes | Yes | Yes |
| GitHub | Yes | Yes | Yes | Yes | Yes | No |
| GitLab | Yes | Yes | Yes | Yes | Yes | Yes |
| Linear | Yes | Yes | Yes | Yes | Yes | No |

A button the tracker does not support is switched off, and its hint says why. When you create a task, the form also shows the fields the tracker has:

| Tracker | Type | Priority | Labels | Activity (when logging time) |
| --- | --- | --- | --- | --- |
| Skribly Tracker | Yes | Yes | Yes | Yes |
| Jira | Yes | Yes | Yes | No |
| Redmine | Yes | Yes | No | Yes |
| GitHub | No | No | Yes | No |
| GitLab | Yes | No | Yes | No |
| Linear | No | Yes | Yes | No |

### Environment variables for agent-skills

Agents that the app starts get the credentials of your accounts as environment variables of their own session, under the names that the [agent-skills](/skills/) skills read. This way `/task 123` works without a `credentials.env` file. No file is written to disk, and only the process the app started sees them.

| Tracker | Variables |
| --- | --- |
| Skribly Tracker | `SKRIBLY_TRACKER_URL`, `SKRIBLY_TRACKER_TOKEN` |
| Jira Cloud | `JIRA_URL`, `JIRA_EMAIL`, `JIRA_API_TOKEN` |
| Jira Server / Data Center | `JIRA_URL`, `JIRA_PAT` |
| Redmine | `REDMINE_URL`, `REDMINE_API_KEY` |
| GitHub | `GITHUB_TOKEN`, and `GITHUB_API_URL` when the address is not `api.github.com` |
| GitLab | `GITLAB_URL`, `GITLAB_TOKEN` |
| Linear | `LINEAR_API_KEY` |
| All | `AGENT_SKILLS_TRACKER`: the tracker for bare numbers, that of the project's tracker or else of the first account |

With several accounts of one tracker, the account assigned to the project wins, then the first in the list.

To assign a tracker to a project, open **Settings → Projects** and set **Project tracker** and **Project / repository / team in the tracker**. The Tasks view then opens filtered to that tracker, and **Start with an agent** and new tasks use it by default.

## How to find a task

<Steps>

1. Look at **In progress** (tasks you already started in your projects, with their stage) and **Assigned to me** (open tasks of all accounts, most recently updated first).

2. Press an account name to see only that account, or **All**.

3. Type in the search field. It filters the list by key, title and label at once. After a short pause, and at once with `Enter`, it also asks the tracker, and lists the results under **In the tracker**.

4. To open a task that is not on the list, type its number in **Task number** and press `Enter`: for example `2047`, `PROJ-12` or `org/repo#5`. It is looked up in the account selected in the filter, or in the first one.

</Steps>

Click a task to see its details on the right: the tracker, key, status, labels, assignee, the description and the comments.

## How to work on a task

The details have these buttons:

| Button | What it does |
| --- | --- |
| **Start with an agent** | Opens the start dialog, described below |
| Status list | Changes the status; in Jira it runs a workflow transition |
| **Assign to me** | Assigns the task to you; the **Unassign** button next to it takes the assignment away |
| **Comment** | Opens an editor with a Markdown preview. Skribly turns the text into the tracker's format (for example ADF in Jira Cloud). **Send the agent's summary** fills it from `STATE.md` |
| **Log time** | Hours (more than 0 and up to 24), the day (not in the future), an activity where the tracker has them and a comment. GitLab records time without a date |
| **Open in tracker** | Opens the task in the browser |

## How to start a task with an agent

<Steps>

1. Select a task and press **Start with an agent**.

2. Choose the **Project** and the **Agent**. Installed agents are listed, and the default one is chosen.

3. Keep **Create the branch by the project's pattern (clean repository only)** ticked, or tick **In a separate worktree**, which implies a branch.

4. Press **Start**. The app switches to the Agents view, on the new pane.

</Steps>

What the app does:

1. It creates `.skribly/tasks/<KEY>/` in the project and adds `.skribly/` to `.git/info/exclude`, a local ignore file that is not in the repository. Characters of the key outside letters, digits, `_`, `.` and `-` become `-`, so `org/repo#5` is `org-repo-5`.
2. It writes `TASK.md` with the content and the comments, and with the rules of your enabled extensions. The file is overwritten on every start.
3. It creates `STATE.md` from a template only when it does not exist, so progress is never lost.
4. It writes `meta.json` with the key, the title, the address and the account.
5. It prepares the branch. The pattern is the project's **Branch pattern**, `feature/{key}-{slug}` by default; `{slug}` is up to six words of the title, in lower case, without Polish accents, joined by hyphens. For `SKLEP-142` titled "Koszyk: zapis przy wylogowaniu" the branch is `feature/SKLEP-142-koszyk-zapis-przy-wylogowaniu`. An existing branch is switched to, a new one is created. If tracked files have changes, no branch is created and the agent starts on the current one.
6. With **In a separate worktree** it makes a worktree of that branch from the project's **Base branch**, and starts the agent there. Your copy stays untouched. The task folder is linked into the worktree, so the agent finds `TASK.md` at its side. See [Worktrees](/agent/worktrees/).
7. It starts the agent in a terminal titled `<KEY> · <agent>`, with this prompt:
   - Claude Code, when the project has the `task` skill in `.claude/skills/task`: `/task <KEY>`;
   - Codex, with the skill in `.agents/skills/task`: `$task <KEY>`;
   - any other case: a short text that points to `TASK.md` and `STATE.md`, asks the agent to read both and propose a plan (a `SPEC.md` for a large task), to wait for your "ok" before changing code, to update `STATE.md` after each stage, and to commit only after your approval, in the style of the project history and without `Co-Authored-By` trailers.

`STATE.md` holds a stage line, the next step, and lists of what is done, decisions and open questions. The template is written in Polish. The app reads two lines of it: `Etap:` with one of `analiza`, `implementacja`, `weryfikacja` or `gotowe`, and `Następny krok:`. It shows them in **In progress**.

## How to create a task

<Steps>

1. Press the plus in the head of the list (**New tracker task**).

2. Choose the **Tracker account** and the project (for GitHub the repository, for Linear the team). The place of the project settings is chosen, or one marked with a star.

3. Fill **Title** and the description in Markdown. Pick the type, the priority and the labels where the tracker has them.

4. Tick **Start with an agent right away** if you want to continue with the start dialog, then press **Create**.

</Steps>

## How to write a local task

Not every task lives in a tracker.

<Steps>

1. Press the second icon in the head of the list (**Custom task**).

2. Type a title and a description in Markdown: what to do, where to look, acceptance criteria.

3. Press **Next**. The same start dialog opens.

</Steps>

The task gets a key such as `W-10291412` (month, day, hour and minute) and then works like any other: `TASK.md`, `STATE.md`, a branch and an agent. A local task has no tracker buttons.

## Tips

<Aside type="tip">
Commit suggestions use your tasks: when the branch name contains the key of a started task, the title becomes the subject. See [Changes and commits](/agent/changes/).
</Aside>

- Ask the agent to keep `STATE.md` up to date. It is the same file that lets another agent take over the work, and the **Send the agent's summary** button of the comment turns it into a tracker comment.
- If the list shows an error such as a 401 or 403 from the tracker, check the token and its permissions in **Settings → Task trackers** with **Test**.

## Related pages

<CardGrid>
  <LinkCard title="Plan" href="/agent/plan/" description="The open items of the plan files of your project." />
  <LinkCard title="Changes and commits" href="/agent/changes/" description="Commit suggestions that use the task key and title." />
  <LinkCard title="Worktrees" href="/agent/worktrees/" description="The worktree that Start with an agent can create." />
  <LinkCard title="Settings" href="/agent/settings/" description="All the sections of Settings." />
</CardGrid>
