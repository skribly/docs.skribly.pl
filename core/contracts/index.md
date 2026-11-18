# Contracts and the Tracker client

> The Zod schemas of the Skribly Tracker API v1 in @skribly/core, input normalisation and validation, and the typed Tracker client with its error types.

The contracts are Zod 4 schemas of everything the Tracker API v1 sends and accepts. Schemas are named `<Thing>Schema`, with a matching type. Every field name is the one the API sends, snake case included.

## Schemas

| Group | Schemas |
| --- | --- |
| Enumerations | `IssueTypeSchema`, `PrioritySchema`, `RoleSchema`, `StatusCategorySchema`, `TimeActivitySchema`, `TokenAbilitySchema`, `LocaleSchema`, `IssueSortSchema`, `WebhookEventSchema` |
| People | `PersonSchema`, `UserRefSchema`, `UserSchema`, `MeSchema` |
| Projects | `ProjectSchema`, `ProjectLabelSchema`, `StatusSchema`, `TransitionSchema`, `CreateMetaSchema`, `WorkspaceRefSchema` |
| Issues | `IssueSchema`, `IssueStatusSchema`, `IssueProjectSchema`, `IssueParentSchema`, `SubtaskSchema`, `IssuePageSchema` |
| Work on issues | `CommentSchema`, `AttachmentSchema`, `TimeEntrySchema`, `TimeActivityOptionSchema` |
| Webhooks | `WebhookSchema`, `CreatedWebhookSchema`, `WebhookDeliverySchema` |
| Pagination | `PaginationMetaSchema`, `PaginationLinksSchema` |
| Inputs | `CreateIssueInputSchema`, `UpdateIssueInputSchema`, `SetStatusInputSchema`, `AssignInputSchema`, `CommentInputSchema`, `LogTimeInputSchema`, `CreateWebhookInputSchema`, `IssueListQuerySchema`, `SearchQuerySchema` |

The value lists behind the enumerations are exported too:

| Constant | Values |
| --- | --- |
| `ISSUE_TYPES` | `task`, `bug`, `feature` |
| `PRIORITIES` | `lowest`, `low`, `medium`, `high`, `urgent` |
| `ROLES` | `admin`, `member`, `viewer` |
| `STATUS_CATEGORIES` | `todo`, `in_progress`, `done` |
| `TIME_ACTIVITIES` | `development`, `review`, `testing`, `design`, `meeting`, `other` |
| `TOKEN_ABILITIES` | `read`, `write` |
| `LOCALES` | `en`, `pl` |
| `WEBHOOK_EVENTS` | `issue.created`, `issue.updated`, `issue.deleted`, `comment.created` |

Defaults: priority `medium`, time activity `development`, sort `-updated`, 25 items per page.

## Validating input on a server

```ts

const input = validate(CreateIssueInputSchema, normalizeInput(await request.json()))
```

`normalizeInput` trims strings and turns empty strings into `null`, as the released Tracker does. `validate` throws a `ProblemError` with status 422 whose messages read like the Tracker's own. Pass `{ translate }` so a line such as `tracker.errors.bad_date` is translated. `toIso8601` formats timestamps with an offset, the way the API sends them.

## The Tracker client

```ts

const tracker = createTrackerClient({ baseUrl: 'http://localhost:8100', token })

const me = await tracker.whoami()
const page = await tracker.mine()
await tracker.setStatus('WEB-3', 'Done')
```

Methods are named after the `operationId`s of the Tracker's OpenAPI description, plus `mine()`. They are the operations listed in the [API reference](/tracker/api/), for example `getIssue`, `createIssue`, `updateIssue`, `comment`, `assign`, `logTime` and `search`. They return the content of `data`, except:

- `listIssues` and `mine`, which return the whole page with `links` and `meta`;
- `downloadAttachment`, which returns the raw `Response`.

Every answer is checked against the schemas, so a client never works with data outside the contract.

## Errors

| Failure | Error |
| --- | --- |
| A non-2xx answer with a Tracker or RFC 9457 body | `ProblemError` with `status`, `message` and `errors` |
| An answer outside the contract, or not JSON | `TrackerContractError`; turn the check off with `validateResponses: false` |
| A network failure or timeout | The error `fetch` raises; the default timeout is 20 seconds |

```ts
try {
  await tracker.getIssue('WEB-404')
} catch (error) {
  if (error instanceof ProblemError && error.status === 404) console.log('No such issue')
  else throw error
}
```

## Kept in step with the API

`@skribly/core` keeps a copy of the Tracker's OpenAPI description and language files in its tests. The tests check the client and the schemas against the OpenAPI file, and the language parser and webhook signatures against output from the released Tracker. This site builds its [API reference](/tracker/api/) from the same file, and its build fails when the copy drifts.
