# Skribly Tracker

> The issue tracker of the Skribly ecosystem - workspaces, projects, issues, workflows, roles, boards, comments and time logs, with a REST API designed for coding agents.

**Skribly Tracker** plans the work that the rest of Skribly carries out: projects, issues with keys like `AGENT-12`, Kanban boards, comments and time logs. It runs in the browser, and its REST API is designed for coding agents as much as for people.

![The Kanban board of a sample project with four columns: To do, In progress, Review and Done](../../../assets/screens/tracker-board.webp)

:::note[Status]
First release, 0.1. The browser interface, the REST API v1 with personal access tokens, signed webhooks, the Docker stack and the agent-skills `skribly` tracker work today. The released version runs on PHP 8.4 and Laravel 12 with MySQL 8.4; moving it to the shared Node.js stack is planned and would keep the same API.
:::

## Concepts

| Concept | What it is |
| --- | --- |
| **Workspace** | The top level that holds projects and people |
| **Project** | A set of issues with a short key such as `AGENT` or `WEB`, its own workflow, labels and members |
| **Issue** | A unit of work with a key made of the project key and a number, like `AGENT-12`. It has a type, status, priority, labels, assignee, reporter, estimate, due date, parent and subtasks. |
| **Issue type** | `task`, `bug` or `feature` |
| **Priority** | `lowest`, `low`, `medium`, `high` or `urgent` |
| **Status** | A column of the project's workflow. *To do, In progress, Review, Done* by default. |
| **Status category** | Each status belongs to `todo`, `in_progress` or `done`. "Open" means not done. |
| **Comment** | Markdown text on an issue |
| **Time entry** | Hours logged on an issue with a date, a comment and an activity: `development`, `review`, `testing`, `design`, `meeting` or `other` |
| **Watcher** | A person who follows an issue without being assigned |
| **Attachment** | A file on an issue, up to 10 MB by default |
| **Activity log** | Every change to an issue, with who made it and when |

## Workflow

Each project has its own workflow in **Project → Settings → Workflow**. Admins can rename, reorder and add statuses, and give each one a category. Any status of the issue's project can be set; there are no fixed transitions.

## Roles

| Role | What it can do |
| --- | --- |
| **Admin** | Everything, plus projects, workflows, people and webhooks |
| **Member** | Create and work on issues: edit, comment, assign, change status, log time |
| **Viewer** | Read only |

API tokens act with their owner's role, and can be made read-only on top of it. See [Personal access tokens](/tracker/tokens/).

## Views

| View | What it shows |
| --- | --- |
| **Dashboard** | Your open issues, watched issues, projects and recent activity |
| **Board** | A Kanban board with drag and drop between the columns of the project's workflow. With a keyboard, open an issue and change its status there. |
| **List** | Filters, search and sorting, shared with the API |
| **Issue** | Markdown description, subtasks, comments, time log, attachments and history |
| **Profile** | Language, theme and API tokens |

The interface is in Polish and English, with light and dark themes that follow the system and switch from the top bar, and an accessibility panel on every page for text size, contrast, fonts and motion. WCAG 2.2 AA is the target.

## Connect the other tools

### Skribly Agent

Skribly Tracker is the default tracker of Skribly Agent. Add a Skribly Tracker account with the address and a read-write token. Tasks assigned to you appear in the app, which can comment, change status, assign and log time. See [Personal access tokens](/tracker/tokens/).

### agent-skills

The `task` skill reads this tracker like any other. Put the address and token in `~/.config/agent-skills/credentials.env`:

```bash
SKRIBLY_TRACKER_URL=http://localhost:8100
SKRIBLY_TRACKER_TOKEN=...
```

Then run `agent-skills tasks check`, and `/task AGENT-12` in your agent. See [Trackers](/skills/trackers/#skribly-tracker).

## Built for agents

- The REST API maps one call to one method of Skribly Agent's tracker client, and to the agent-skills `task` skill. See the [mapping](/tracker/rest-api/#skribly-agent-mapping).
- Issue keys are case-insensitive and a leading `#` is ignored, so an agent can paste what it reads.
- Descriptions and comments are Markdown, returned exactly as written.
- `updated_since` lets a client poll for changes cheaply.
- Signed [webhooks](/tracker/webhooks/) tell any service when issues change.

## Read next

- [Self-hosting with Docker](/tracker/self-hosting/)
- [Configuration](/tracker/configuration/)
- [Personal access tokens](/tracker/tokens/)
- [REST API guide](/tracker/rest-api/) and the generated [API reference](/tracker/api/)
- [Webhooks and signing](/tracker/webhooks/)
