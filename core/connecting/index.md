# How apps connect

> Which Skribly app talks to which, over what, and with which credentials - and how to connect your own service to Skribly Tracker.

Apps never import each other. They talk over HTTP, and the shapes of what they send are defined once in `@skribly/core`.

## The connections

| From | To | Over | Credentials |
| --- | --- | --- | --- |
| Skribly Agent | Skribly Tracker | REST API v1 | A read-write [personal access token](/tracker/tokens/), stored encrypted with the system keychain |
| Skribly Agent | Jira, Redmine, GitHub, GitLab, Linear | Each tracker's own API | That tracker's token, stored the same way |
| Skribly Agent | agent sessions | Environment variables | `SKRIBLY_TRACKER_URL`, `SKRIBLY_TRACKER_TOKEN` and the variables agent-skills expects for other trackers |
| Skribly Agent | agent-skills | `git clone`, `skills.json`, the agent-skills CLI | None for a repository you can read |
| agent-skills | the project | `.skribly/project.json` in the schema of `@skribly/core`, and `.skribly/lessons.md` | None |
| agent-skills | Skribly Tracker and five other trackers | REST APIs, read-only unless you post a comment | Environment or `~/.config/agent-skills/credentials.env` |
| Skribly Tracker | any service | [Signed webhooks](/tracker/webhooks/) | A per-webhook secret |
| Scripts and agents | Skribly Agent | The local control API on `127.0.0.1`, the `skribly` CLI and `skribly mcp` | A random token in `~/.skribly/control.json`, new on every start |

## A task from start to finish

1. You create `WEB-12` in Skribly Tracker.
2. Skribly Agent lists it under **Tasks** through `GET /issues?assignee=me&status=open`.
3. **Start with an agent** writes `.skribly/tasks/WEB-12/TASK.md` and `STATE.md`, creates a branch and starts an agent with `SKRIBLY_TRACKER_URL` and `SKRIBLY_TRACKER_TOKEN` in its environment.
4. Inside the session, the agent-skills `task` skill can refresh the task with `agent-skills tasks fetch WEB-12`, which prints only what changed.
5. The agent works, runs the checks and commits after your OK, with no AI trailers.
6. Skribly Agent posts a comment, sets the status and logs time through the API.
7. Each change makes the Tracker send `comment.created` and `issue.updated` webhooks to any service that listens.

## Connect your own service

To read or change issues, use the REST API with a token, or `@skribly/core` in Node.js and browsers:

```ts

const env = defineEnv(trackerClientEnvSchema)
const tracker = createTrackerClient({ baseUrl: env.SKRIBLY_TRACKER_URL, token: env.SKRIBLY_TRACKER_TOKEN })

for (const issue of (await tracker.mine()).data) console.log(issue.key, issue.title)
```

To react to changes, add a webhook and verify each delivery:

```ts

app.post('/hooks/skribly', async (c) => {
  const raw = await c.req.text()
  if (!verifyWebhookRequest(raw, c.req.raw.headers, process.env.WEBHOOK_SECRET!)) return c.body(null, 401)
  const delivery = parseWebhookBody(raw)
  queueMicrotask(() => handle(delivery))
  return c.body(null, 204)
})
```

Without `@skribly/core`, any language works: see the verification snippets in [Webhooks and signing](/tracker/webhooks/#verify-the-signature).

## Planned

- **One sign-in.** One account per person with organisations and roles, and apps signing in through OAuth 2.1.
- **Scoped app tokens.** Short-lived tokens for apps and agents, limited to chosen projects and actions. The scope format is defined in [`@skribly/core`](/core/#identity-and-scopes); no app issues such tokens yet.
- **One event stream.** The envelope is defined; apps sending it is planned. See [Events](/core/events/#the-shared-event-envelope).
- **An MCP server in the Tracker**, so any agent can use it without custom code.
- **Skribly Agent and agent-skills on `@skribly/core`.** Both talk to the Tracker today with their own clients that follow the same API; moving them onto the shared package is planned.

See [Ecosystem architecture](/overview/architecture/#planned-building-blocks) for the whole list.
