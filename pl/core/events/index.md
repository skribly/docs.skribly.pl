# Zdarzenia

> Zdarzenia, które aplikacje Skribly wysyłają dziś jako podpisane webhooki, ich budowanie i weryfikacja przez @skribly/core oraz wspólny envelope CloudEvents, który ten pakiet definiuje.

## Dziś: dostarczenia webhooków Trackera

Skribly Tracker wysyła cztery zdarzenia jako [podpisane webhooki](/pl/tracker/webhooks/). Ich ładunki są zdefiniowane raz w `@skribly/core` jako `WebhookDeliverySchema`, unia rozróżniana polem `event`:

```ts
type WebhookDelivery =
  | { id: string; event: 'issue.created'; sent_at: string; data: { issue: Issue } }
  | { id: string; event: 'issue.updated'; sent_at: string; data: { issue: Issue } }
  | { id: string; event: 'issue.deleted'; sent_at: string; data: { issue: { key: string; title: string }; actor: string | null } }
  | { id: string; event: 'comment.created'; sent_at: string; data: { issue: Issue; comment: { id: number; author: string | null; body: string } } }
```

`id` to UUID dostarczenia, a `sent_at` to znacznik czasu ISO 8601 z offsetem.

## Tworzenie i weryfikowanie dostarczeń

```ts

const { body, headers } = buildWebhookRequest({ event: 'issue.updated', data: { issue }, secret, timeZone: 'Europe/Warsaw' })
await fetch(hook.url, { method: 'POST', headers, body })

if (verifyWebhookRequest(rawBody, request.headers, secret)) {
  const delivery = parseWebhookBody(rawBody)
}
```

| Eksport | Działanie |
| --- | --- |
| `buildWebhookRequest` | Treść, bajt w bajt tak, jak koduje ją wydany Tracker, oraz nagłówki: `X-Skribly-Event`, `X-Skribly-Signature` i starsza para `X-Skryba-*` |
| `signWebhookBody` | `sha256=<hex HMAC-SHA256 of the raw body>` |
| `verifyWebhookSignature`, `verifyWebhookRequest` | Sprawdzenie w stałym czasie treści względem podpisu albo nagłówków żądania |
| `webhookEventOf` | Nazwa zdarzenia z jednego z nagłówków |
| `parseWebhookBody` | Parsuje i waliduje dostarczenie |
| `WEBHOOK_DELIVERY_POLICY` | 3 próby, odstępy (backoff) 10 i 60 sekund oraz limit czasu 5 sekund |

Weryfikuj surową treść, nigdy ponownie zserializowany obiekt. Kolejkowanie dostarczeń należy do aplikacji, która je wysyła.

## Wspólny envelope zdarzeń

`@skribly/core` 0.2.0 definiuje jeden envelope dla każdego zdarzenia w ekosystemie, w formacie [CloudEvents 1.0](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md), z typami rozdzielonymi kropkami i nazwanymi `<app>.<noun>.<verb>`.

:::note[Status]
Envelope i katalog są we wspólnym pakiecie, ale żadna aplikacja jeszcze ich nie wysyła. Skribly Tracker nadal wysyła opisane wyżej dostarczenia. agent-skills potrafi wypisać zdarzenie `skills.task.completed` zadania poleceniem `agent-skills tasks event <id>`; samo niczego nie wysyła.
:::

```ts

const event = createEvent({
  type: 'agent.session.finished',
  source: 'https://agent.example.com',
  subject: 'session-42',
  data: { sessionId: 'session-42', outcome: 'completed', durationSeconds: 310, finishedAt: new Date().toISOString() }
})
```

Każde zdarzenie ma pola `specversion`, `id`, `source`, `type`, `time`, opcjonalne `subject` oraz `data`. `createEvent` uzupełnia identyfikator i czas ISO 8601 z offsetem oraz sprawdza dane względem katalogu:

| Typ | Dane |
| --- | --- |
| `tracker.issue.created`, `tracker.issue.updated` | `{ issue }`, jak w dzisiejszych dostarczeniach |
| `tracker.issue.deleted` | `{ issue: { key, title }, actor }` |
| `tracker.comment.created` | `{ issue, comment }` |
| `agent.session.started` | `sessionId`, `startedAt` oraz opcjonalnie `projectId`, `issueKey`, `model` i `userId` |
| `agent.session.finished` | `sessionId`, `outcome` (`completed`, `failed` lub `cancelled`), `durationSeconds`, `finishedAt` oraz opcjonalnie `summary` |
| `skills.task.completed` | `taskId`, `skill`, `outcome` (`success`, `failure` lub `skipped`) oraz opcjonalnie `summary` i `durationSeconds` |
| `time.entry.created` | `{ entry }` z polami `minutes`, `activity`, `date` i kluczem zgłoszenia |

`eventFromWebhookDelivery` zamienia dostarczenie w dzisiejszym formacie na envelope, a `CloudEventSchema` czyta każdy envelope, także o typach, których ten pakiet jeszcze nie zna.

### Wysyłanie zdarzenia jako webhooka

```ts

const { body, headers } = buildEventRequest({ event, secret })
await fetch(hook.url, { method: 'POST', headers, body })

if (verifyWebhookRequest(rawBody, request.headers, secret)) {
  const event = parseAnyWebhookBody(rawBody, 'https://tracker.example.com')
}
```

Treść jest wysyłana jako `application/cloudevents+json` i podpisywana tym samym `X-Skribly-Signature` co dzisiejsze dostarczenia. `parseAnyWebhookBody` czyta oba formaty i zawsze zwraca envelope, więc odbiornik oparty na nim działa dalej, gdy aplikacja przejdzie na nowy format.

## Planowane

- Aplikacje wysyłające envelope: Tracker dla zdarzeń zgłoszeń i komentarzy, Skribly Agent dla sesji.
- Podpisywanie w stylu Standard Webhooks, ze znacznikiem czasu w podpisie i rotacją sekretu.
- Jeden strumień, który zasila webhooki, skrzynkę odbiorczą, kanały aktywności, dziennik audytu i wyszukiwanie.
