# Data and network

> What Skribly Agent, Skribly Tracker and agent-skills store, which destinations they connect to, which ports Skribly Agent opens and how the apps protect you.

What the Skribly apps store, where it goes and which ports they open. Skribly Agent sends no telemetry and has no server of its own.

## What Skribly Agent stores

| Data | Where | Protection |
| --- | --- | --- |
| Tracker tokens | `secrets.json` in the data directory | Encrypted with the system password store. If that is not available, they stay in memory only |
| Tracker accounts | `trackers.json` | Plain JSON, no keys |
| Settings, projects, layout and pipelines | JSON files in the data directory | Plain JSON |
| Disabled MCP servers | `mcp-stash.json` | Plain JSON, which can include keys from the server's configuration |
| Sign-ins in browser tabs | Separate browser profiles | Browser cookies |
| Task content | `.skribly/tasks/` in the project | Excluded from git |
| Control API token | `~/.skribly/control.json` | Readable only by you, and new on every startup |

:::note
Agent sessions started by the app receive tracker tokens as environment variables, so skills can fetch tasks. An agent can read them, like any program in your terminal.
:::

The data directory opens from **Settings → Updates → Data directory → Show**; see [Settings](/agent/settings/#data-directory).

## Where Skribly Agent connects

It sends no statistics, crash reports or identifiers. It connects only to these destinations:

| Destination | When | What is sent |
| --- | --- | --- |
| Your trackers | Task list, details, connection test | Token and task queries |
| `api.osv.dev` | Security audit with lockfiles | Package names and versions |
| `open-vsx.org` | Searching and downloading themes | Search query |
| `github.com` | Update checks, which you can turn off | Standard update requests |
| Skills repository | Download repository or Sync | `git clone` and `git pull` |
| The audited site | Accessibility or SEO audit | Ordinary page requests |
| Pages in the Browser | When you open them | As in any browser |
| Machine translation | Only for an interface language that is not cached | Interface text to translate |

Programs the app runs at your request make their own connections: agents, `git push`, `ssh` and `npx` from MCP settings.

## Ports

| Port | Default | Bound to | Who can reach it |
| --- | --- | --- | --- |
| Chrome DevTools Protocol | Off, `9333` when enabled | `127.0.0.1` | Any program on this computer, without authentication. It sees all tabs, including signed-in profiles |
| Control API | On, random free port | `127.0.0.1` | Processes that read the token from `control.json` |

:::note
Turn on browser sharing only while you work with agents. Turn off the control API if you do not use it.
:::

## How the app protects you

- The interface has no access to Node.js and can call only a fixed list of methods.
- Preview and agent tabs run without any access to the app.
- Commands run without a shell, with a time limit and an output limit. The exception is `.cmd` and `.bat` files on Windows.
- Reading, writing, discarding and searching reject paths outside the project directory.
- Extracting packages rejects paths that escape the target directory.
- Themes are read as JSON, and extension code never runs.

:::note
Agent terminals run with your permissions. An agent in a terminal can do whatever you can do in a terminal.
:::

## Skribly Tracker

- Markdown is rendered with raw HTML escaped and unsafe links dropped.
- Attachments stay on a private disk and are served only through authorised routes.
- Webhook secrets and API tokens are shown once and never logged.
- A viewer's token never changes data.

## agent-skills

- The command line talks only to your tracker, and to OSV.dev or PageSpeed Insights when you run those audits. Your package manager reaches its own registries.
- Tokens are sent only to the tracker's own host. Redirects to another host carry no credentials.
- The tracker command is read-only by default, and the same text is never posted twice.

## Read next

- [Security](/security/): how to report a vulnerability.
- [Features](/agent/features/): all views of Skribly Agent, grouped by job.
