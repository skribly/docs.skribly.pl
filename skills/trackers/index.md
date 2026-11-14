# Trackers

> Connect agent-skills to Redmine, Jira, GitHub, GitLab, Linear or Skribly Tracker, and use the tasks commands that the task skill runs.

The `task` skill fetches issues with a script (`agent-skills tasks`), so the model spends no tokens on HTTP, pagination or re-reading. The first fetch writes `.tasks/<id>/TASK.md`; later fetches print only what changed: new comments, status, a changed description, new attachments.

## Credentials

Put them in environment variables or in `~/.config/agent-skills/credentials.env` (Windows: `%USERPROFILE%\.config\agent-skills\credentials.env`). Environment variables win over the file. Start from the template in the repository:

```bash
mkdir -p ~/.config/agent-skills
cp templates/credentials.env.example ~/.config/agent-skills/credentials.env
chmod 600 ~/.config/agent-skills/credentials.env     # doctor warns if others can read it
agent-skills tasks check                             # who am I, per configured tracker
```

Never put tokens in a repository, in `.tasks/` or in a chat. Point at another file with `AGENT_SKILLS_CREDENTIALS`. Inside [Skribly Agent](/agent/features/#tasks-and-trackers), sessions receive these variables from the app, so no file is needed.

## Skribly Tracker

```bash
SKRIBLY_TRACKER_URL=http://localhost:8100   # base URL of the instance
SKRIBLY_TRACKER_TOKEN=...                   # Profile -> API tokens
```

Ids: `ABC-12` or an `/issues/ABC-12` URL on the `SKRIBLY_TRACKER_URL` host. The client uses [REST API v1](/tracker/rest-api/); descriptions and comments are already Markdown, and attachments are downloaded with the same token. "My open tasks" is `assignee=me&status=open&sort=-updated`.

Older setups keep working: `skryba` is an alias of the `skribly` tracker id, and `SKRYBA_TRACKER_URL` and `SKRYBA_TRACKER_TOKEN` are read when the matching `SKRIBLY_TRACKER_*` variable is not set.

## Redmine

```bash
REDMINE_URL=https://redmine.example.com
REDMINE_API_KEY=...        # My account -> API access key (an admin must enable the REST API)
```

Ids: `123`, `#123` or an `/issues/123` URL. Comments are journal notes.

## Jira Cloud

```bash
JIRA_URL=https://your-team.atlassian.net
JIRA_EMAIL=you@example.com
JIRA_API_TOKEN=...         # id.atlassian.com -> Security -> API tokens
```

## Jira Server / Data Center

```bash
JIRA_URL=https://jira.example.com
JIRA_PAT=...               # Profile -> Personal Access Tokens
```

Ids: `ABC-123` or a `/browse/ABC-123` URL. Wiki markup is converted to Markdown.

## GitHub

```bash
GITHUB_TOKEN=...           # fine-grained token: Issues read (write only to post comments)
GITHUB_API_URL=https://github.example.com/api/v3   # GitHub Enterprise Server only
```

Without a token, a signed-in GitHub CLI (`gh auth login`) is used, and public issues work anonymously at 60 requests an hour. Ids: `7` (the repository of the `origin` remote), `owner/repo#7` or an issue URL.

## GitLab

```bash
GITLAB_TOKEN=...           # read_api (api to post comments)
GITLAB_URL=https://gitlab.example.com   # default https://gitlab.com
```

Ids: `7`, `group/sub/project#7` or a `/-/issues/7` URL. System notes are skipped.

## Linear

```bash
LINEAR_API_KEY=lin_api_...  # Settings -> Security & access -> Personal API keys
```

Ids: `ENG-12` or a `linear.app/.../issue/ENG-12/...` URL.

## Which tracker does an id mean?

In order: `--tracker`, the `Tracker:` line in `.tasks/workflow.md`, `AGENT_SKILLS_TRACKER`, then whichever tracker is configured. A configured Redmine wins for plain numbers; GitHub or GitLab when the `origin` remote points there. `ABC-12` can be Jira, Linear or Skribly Tracker: the same three settings decide, otherwise the only configured one is used, and with several you are asked. A task fetched once remembers its tracker.

## Commands

```bash
agent-skills tasks fetch 123                 # TASK.md; on re-fetch only the changes
agent-skills tasks attachments 123 [name]    # images by default, --all for every file
agent-skills tasks list                      # my open issues in every configured tracker (--json)
agent-skills tasks list --local              # tasks in .tasks/ with status, branch and next step
agent-skills tasks comment-draft 123         # create or show .tasks/123/COMMENT.md
agent-skills tasks comment-draft 123 --post --yes    # publish, only after your explicit OK
agent-skills tasks detect                    # git facts used to write .tasks/workflow.md
agent-skills tasks check                     # configuration and token test
```

## Safety

- Read-only by default. Writing needs `--post --yes`, and the same text is never posted twice.
- Tokens are sent only to the tracker's own host. Redirects to another host, such as a CDN serving an attachment, are followed without credentials.
- Behind a corporate proxy with TLS errors, point `NODE_EXTRA_CA_CERTS` at the proxy's CA certificate.
