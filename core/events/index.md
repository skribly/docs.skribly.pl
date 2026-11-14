# Events

> The events Skribly apps send today as signed webhooks, how @skribly/core builds and verifies them, and the shared CloudEvents envelope it defines.

## Today: Tracker webhook deliveries

Skribly Tracker sends four events as [signed webhooks](/tracker/webhooks/). Their payloads are defined once in `@skribly/core`, as `WebhookDeliverySchema`, a union keyed by `event`:

```ts
type WebhookDelivery =
  | { id: string; event: 'issue.created'; sent_at: string; data: { issue: Issue } }
  | { id: string; event: 'issue.updated'; sent_at: string; data: { issue: Issue } }
  | { id: string; event: 'issue.deleted'; sent_at: string; data: { issue: { key: string; title: string }; actor: string | null } }
  | { id: string; event: 'comment.created'; sent_at: string; data: { issue: Issue; comment: { id: number; author: string | null; body: string } } }
```

`id` is a UUID per delivery and `sent_at` an ISO 8601 timestamp with an offset.

## Building and verifying deliveries

```ts

const { body, headers } = buildWebhookRequest({ event: 'issue.updated', data: { issue }, secret, timeZone: 'Europe/Warsaw' })
await fetch(hook.url, { method: 'POST', headers, body })

if (verifyWebhookRequest(rawBody, request.headers, secret)) {
  const delivery = parseWebhookBody(rawBody)
}
```

| Export | What it does |
| --- | --- |
| `buildWebhookRequest` | The body, byte for byte as the released Tracker encodes it, and the headers: `X-Skribly-Event`, `X-Skribly-Signature` and the older `X-Skryba-*` pair |
| `signWebhookBody` | `sha256=<hex HMAC-SHA256 of the raw body>` |
| `verifyWebhookSignature`, `verifyWebhookRequest` | Constant-time check of a body against a signature or a request's headers |
| `webhookEventOf` | The event name from either header |
| `parseWebhookBody` | Parses and validates a delivery |
| `WEBHOOK_DELIVERY_POLICY` | 3 tries, a 10 and 60 second backoff, and a 5 second timeout |

Verify against the raw body, never a re-serialised object. Queueing the deliveries belongs to the app that sends them.

## The shared event envelope

`@skribly/core` 0.2.0 defines one envelope for every event in the ecosystem, in the [CloudEvents 1.0](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md) format, with dot-delimited types named `<app>.<noun>.<verb>`.

:::note[Status]
The envelope and the catalogue are in the shared package, but no app sends them yet. Skribly Tracker still sends the deliveries above. agent-skills can print the `skills.task.completed` event of a task with `agent-skills tasks event <id>`; it sends nothing itself.
:::

```ts

const event = createEvent({
  type: 'agent.session.finished',
  source: 'https://agent.example.com',
  subject: 'session-42',
  data: { sessionId: 'session-42', outcome: 'completed', durationSeconds: 310, finishedAt: new Date().toISOString() }
})
```

Every event has `specversion`, `id`, `source`, `type`, `time`, an optional `subject` and `data`. `createEvent` fills in the id and an ISO 8601 time with an offset, and checks the data against the catalogue:

| Type | Data |
| --- | --- |
| `tracker.issue.created`, `tracker.issue.updated` | `{ issue }`, as in today's deliveries |
| `tracker.issue.deleted` | `{ issue: { key, title }, actor }` |
| `tracker.comment.created` | `{ issue, comment }` |
| `agent.session.started` | `sessionId`, `startedAt`, and optionally `projectId`, `issueKey`, `model` and `userId` |
| `agent.session.finished` | `sessionId`, `outcome` (`completed`, `failed` or `cancelled`), `durationSeconds`, `finishedAt`, and optionally `summary` |
| `skills.task.completed` | `taskId`, `skill`, `outcome` (`success`, `failure` or `skipped`), and optionally `summary` and `durationSeconds` |
| `time.entry.created` | `{ entry }` with `minutes`, `activity`, `date` and the issue key |

`eventFromWebhookDelivery` lifts a delivery of today's format into an envelope, and `CloudEventSchema` reads any envelope, including types this package does not know yet.

### Sending an event as a webhook

```ts

const { body, headers } = buildEventRequest({ event, secret })
await fetch(hook.url, { method: 'POST', headers, body })

if (verifyWebhookRequest(rawBody, request.headers, secret)) {
  const event = parseAnyWebhookBody(rawBody, 'https://tracker.example.com')
}
```

The body is sent as `application/cloudevents+json` and signed with the same `X-Skribly-Signature` as today's deliveries. `parseAnyWebhookBody` reads both formats and always returns an envelope, so a receiver built on it keeps working when an app moves to the new format.

## Planned

- Apps sending the envelope: the Tracker for its issue and comment events, Skribly Agent for its sessions.
- Signing in the Standard Webhooks style, with a timestamp in the signature and secret rotation.
- One stream that feeds webhooks, an inbox, activity feeds, the audit log and search.
