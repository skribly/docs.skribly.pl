# REST API guide

> How to use the Skribly Tracker REST API v1 - authentication, conventions, the issue object, filters, curl examples for every common task, and the mapping to Skribly Agent's tracker client.

The base URL is `http://localhost:8100/api/v1` on the Docker stack; every path below is relative to it. JSON in, JSON out. Every operation, parameter and schema is in the generated [API reference](/tracker/api/), built from the OpenAPI 3.1 description of the API.

```bash
export TRACKER=http://localhost:8100/api/v1
export TOKEN='1|…'
curl -H "Authorization: Bearer $TOKEN" -H "Accept: application/json" "$TRACKER/me"
```

Create the token as described in [Personal access tokens](/tracker/tokens/).

## Authentication

Create a personal access token in your profile and send it as a bearer token. A token acts with its owner's role: viewers can only read, members and admins can change issues, and webhooks are for admins. Endpoints that change data also need the token's `write` ability.

## Conventions

- **Issue keys** look like `WEB-12`. They are case-insensitive, a leading `#` is ignored, and the numeric `id` works too.
- **Options** are objects `{ "id": "…", "name": "…" }`: `type` (`task`, `bug`, `feature`), `priority` (`lowest`, `low`, `medium`, `high`, `urgent`) and time `activity` (`development`, `review`, `testing`, `design`, `meeting`, `other`). Status ids are numbers, sent as strings in `transitions`; a status may also be given by name, like `"Review"`.
- **Status category** is `todo`, `in_progress` or `done`. `status=open` means "not done".
- **Markdown**: `description` and comment `body` are Markdown, returned as written. The web interface renders them with raw HTML escaped.
- **Dates**: ISO 8601 with an offset for timestamps; `YYYY-MM-DD` for `due_date` and the `date` of a time entry.
- **Pagination**: list endpoints return `data`, `links` and `meta { current_page, last_page, per_page, total }`. `per_page` is 1-100 (25 by default), `page` starts at 1.
- **Rate limit**: 240 requests a minute per user.

## Errors

```json
{ "message": "The title field is required.", "errors": { "title": ["The title field is required."] } }
```

| Status | Meaning |
| --- | --- |
| `401` | No token, or a bad, revoked or expired one |
| `403` | The owner's role or the token's ability does not allow it |
| `404` | No such issue, project or resource |
| `422` | Validation failed; `errors` names the fields |
| `429` | More than 240 requests a minute |

## The issue object

```json
{
  "id": 13,
  "key": "AGENT-1",
  "number": 1,
  "title": "Skribly Tracker as the default tracker",
  "description": "Add a `skribly` TrackerClient…",
  "type": { "id": "feature", "name": "Feature" },
  "status": { "id": 6, "name": "In progress", "category": "in_progress" },
  "priority": { "id": "urgent", "name": "Urgent" },
  "labels": ["trackers"],
  "assignee": { "id": 1, "name": "Ada Example", "email": "ada@example.com" },
  "reporter": { "id": 1, "name": "Ada Example", "email": "ada@example.com" },
  "project": { "id": 2, "key": "AGENT", "name": "Skribly Agent" },
  "parent": null,
  "subtasks": [{ "key": "AGENT-4", "title": "…", "status": "To do" }],
  "estimate_hours": 8,
  "spent_hours": 1.5,
  "due_date": "2026-11-03",
  "url": "http://localhost:8100/issues/AGENT-1",
  "created_at": "2026-10-03T09:12:00+01:00",
  "updated_at": "2026-10-29T20:10:36+01:00",
  "closed_at": null,
  "comments": [
    { "id": 6, "author": { "id": 5, "name": "Skribly Agent" }, "body": "Started on the adapter.",
      "created_at": "…", "updated_at": "…" }
  ],
  "attachments": [
    { "id": 3, "name": "screen.png", "size": 48213, "type": "image/png",
      "url": "http://localhost:8100/api/v1/attachments/3" }
  ]
}
```

`comments` and `attachments` come only with `GET /issues/{key}`. `labels` are names. Attachment URLs need the same bearer token.

## Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/me` | The token's owner and abilities |
| GET | `/users` | People an issue can be assigned to |
| GET | `/projects` | Active projects with `open_issues` |
| GET | `/projects/{key}` | A project with its statuses, labels, types and priorities |
| GET | `/projects/{key}/meta` | What can be chosen when creating an issue |
| GET | `/issues` | A filtered, paginated list |
| POST | `/issues` | Create (write) |
| GET | `/issues/{key}` | One issue with comments and attachments |
| PATCH | `/issues/{key}` | Change some fields (write) |
| DELETE | `/issues/{key}` | Delete (admin or reporter; write) |
| GET | `/issues/{key}/transitions` | The statuses of its project, with `current` marked |
| POST | `/issues/{key}/transitions` | Change the status (write) |
| POST | `/issues/{key}/assign` | Assign or unassign (write) |
| GET | `/issues/{key}/comments` | Comments, oldest first |
| POST | `/issues/{key}/comments` | Add a Markdown comment (write) |
| GET | `/issues/{key}/time-entries` | Logged time |
| POST | `/issues/{key}/time-entries` | Log time (write) |
| POST | `/issues/{key}/attachments` | Upload a file in the multipart field `file` (write) |
| GET | `/attachments/{id}` | Download a file |
| GET | `/time-activities` | Activities for time entries |
| GET | `/search` | Text search; an exact key comes first |
| GET, POST | `/webhooks` | List or add webhooks (admin; write) |
| DELETE | `/webhooks/{id}` | Remove a webhook (admin; write) |

## List and filter issues

```bash
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/issues?assignee=me&status=open&sort=-updated&per_page=100"
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/issues?updated_since=2026-10-29T12:00:00Z&status=all"
```

| Parameter | Values |
| --- | --- |
| `assignee` | `me`, `none`, a user id or an e-mail |
| `reporter`, `watching` | `me` |
| `status` | `open` (not done), `closed`, `all`, a status id or a name |
| `project` | A key, or several separated by commas (`WEB,AGENT`) |
| `type`, `priority` | An option id, or several separated by commas |
| `label` | A label name |
| `q` | Text in the title or description, or an exact key |
| `updated_since` | An ISO 8601 timestamp, for polling |
| `sort` | `-updated` (default), `updated`, `-created`, `created`, `-priority`, `priority`, `key`, `-key`, `due`, `-due` |
| `per_page`, `page` | Pagination |

## Create an issue

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" "$TRACKER/issues" -d '{
  "project": "WEB",
  "title": "Saved filters in the sidebar",
  "description": "Save the list filters under a name.\n\n- [ ] UI\n- [ ] API",
  "type": "feature",
  "priority": "medium",
  "labels": ["ui"],
  "assignee": "me",
  "status": "To do",
  "parent": "WEB-5",
  "estimate_hours": 4,
  "due_date": "2026-11-30"
}'
# 201 {"data": {"key": "WEB-9", …}}
```

Only `project` and `title` are required. Unknown label names are created in the project. The new issue gets the next number of its project.

## Update an issue

```bash
curl -X PATCH -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "$TRACKER/issues/WEB-9" -d '{"priority": "high", "labels": ["ui", "api"], "due_date": null}'
```

It accepts the same fields as create, except `project`. Only the fields present change, and each change is written to the issue's history.

## Change the status

```bash
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/issues/WEB-3/transitions"
# {"data":[{"id":"1","name":"To do","category":"todo","current":false},
#          {"id":"2","name":"In progress","category":"in_progress","current":false},
#          {"id":"3","name":"Review","category":"in_progress","current":true},
#          {"id":"4","name":"Done","category":"done","current":false}]}

curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "$TRACKER/issues/WEB-3/transitions" -d '{"status": "Done"}'      # or {"status": "4"}
```

## Assign

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "$TRACKER/issues/WEB-3/assign" -d '{"assignee": "me"}'     # "me", a user id, an e-mail, or null to unassign
```

## Comment

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "$TRACKER/issues/WEB-3/comments" -d '{"body": "## Done\n- LCP 1.6 s\n\n## How to check\n1. `npm run build`"}'
```

## Log time

```bash
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/time-activities"
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "$TRACKER/issues/WEB-3/time-entries" -d '{"hours": 1.5, "comment": "Profiling", "date": "2026-10-29", "activity": "development"}'
```

`hours` is required, more than 0 and at most 24. `date` defaults to today and `activity` to `development`.

## Attachments

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" -F "file=@screen.png" "$TRACKER/issues/WEB-3/attachments"
curl -H "Authorization: Bearer $TOKEN" -o screen.png "$TRACKER/attachments/3"
```

## Search

```bash
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/search?q=login&project=WEB&limit=20"
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/search?q=web-3"   # the exact key comes first
```

Search covers all statuses; pass `status=open` to narrow it.

## Projects and create metadata

```bash
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/projects"
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/projects/WEB/meta"
# {"data":{"types":[{"id":"task","name":"Task"},…],"priorities":[…,{"id":"medium","name":"Medium","current":true},…],
#          "labels":[{"id":"1","name":"backend"},…],"statuses":[…],"members":[{"id":"1","name":"Ada Example"},…]}}
```

## Skribly Agent mapping

The API is shaped after Skribly Agent's `TrackerClient`, so a client maps one method to one call. `@skribly/core` names its client methods after the same operations.

| TrackerClient | Call | Notes |
| --- | --- | --- |
| `whoami()` | `GET /me` | Returns `data.name` |
| `mine()` | `GET /issues?assignee=me&status=open&sort=-updated&per_page=100` | |
| `get(key)` | `GET /issues/{key}` | Comments included |
| `comment(key, md)` | `POST /issues/{key}/comments {body}` | Markdown as is |
| `statuses(key)` | `GET /issues/{key}/transitions` | Already `{id, name, current}` |
| `setStatus(key, id)` | `POST /issues/{key}/transitions {status: id}` | |
| `assign(key, to)` | `POST /issues/{key}/assign {assignee}` | `"me"`, `null` or an id |
| `projects()` | `GET /projects` | `{id: key, key, name}` |
| `createMeta(project)` | `GET /projects/{key}/meta` | Types, priorities, labels |
| `create(input)` | `POST /issues {project, title, description, type, priority, labels}` | |
| `logTime(key, entry)` | `POST /issues/{key}/time-entries {hours, comment, date, activity}` | |
| `activities()` | `GET /time-activities` | |
| `search(q, project)` | `GET /search?q=&project=` | |

## OpenAPI

The OpenAPI 3.1 description is the source of the [API reference](/tracker/api/). `@skribly/core` keeps a copy and tests its client and schemas against it, so the contract, the client and these docs cannot drift apart silently.
