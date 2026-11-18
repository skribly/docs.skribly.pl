# Kontrakty i klient Trackera

> Schematy Zod API Skribly Tracker v1 w @skribly/core, normalizacja i walidacja danych wejściowych oraz typowany klient Trackera z jego typami błędów.

Kontrakty to schematy Zod 4 wszystkiego, co API Trackera v1 wysyła i przyjmuje. Schematy nazywają się `<Thing>Schema` i mają odpowiadający im typ. Każda nazwa pola jest taka, jaką wysyła API, także w snake_case.

## Schematy

| Grupa | Schematy |
| --- | --- |
| Enumy | `IssueTypeSchema`, `PrioritySchema`, `RoleSchema`, `StatusCategorySchema`, `TimeActivitySchema`, `TokenAbilitySchema`, `LocaleSchema`, `IssueSortSchema`, `WebhookEventSchema` |
| Osoby | `PersonSchema`, `UserRefSchema`, `UserSchema`, `MeSchema` |
| Projekty | `ProjectSchema`, `ProjectLabelSchema`, `StatusSchema`, `TransitionSchema`, `CreateMetaSchema`, `WorkspaceRefSchema` |
| Zgłoszenia | `IssueSchema`, `IssueStatusSchema`, `IssueProjectSchema`, `IssueParentSchema`, `SubtaskSchema`, `IssuePageSchema` |
| Praca nad zgłoszeniami | `CommentSchema`, `AttachmentSchema`, `TimeEntrySchema`, `TimeActivityOptionSchema` |
| Webhooki | `WebhookSchema`, `CreatedWebhookSchema`, `WebhookDeliverySchema` |
| Stronicowanie | `PaginationMetaSchema`, `PaginationLinksSchema` |
| Dane wejściowe | `CreateIssueInputSchema`, `UpdateIssueInputSchema`, `SetStatusInputSchema`, `AssignInputSchema`, `CommentInputSchema`, `LogTimeInputSchema`, `CreateWebhookInputSchema`, `IssueListQuerySchema`, `SearchQuerySchema` |

Eksportowane są też listy wartości, na których opierają się enumy:

| Stała | Wartości |
| --- | --- |
| `ISSUE_TYPES` | `task`, `bug`, `feature` |
| `PRIORITIES` | `lowest`, `low`, `medium`, `high`, `urgent` |
| `ROLES` | `admin`, `member`, `viewer` |
| `STATUS_CATEGORIES` | `todo`, `in_progress`, `done` |
| `TIME_ACTIVITIES` | `development`, `review`, `testing`, `design`, `meeting`, `other` |
| `TOKEN_ABILITIES` | `read`, `write` |
| `LOCALES` | `en`, `pl` |
| `WEBHOOK_EVENTS` | `issue.created`, `issue.updated`, `issue.deleted`, `comment.created` |

Wartości domyślne: priorytet `medium`, czynność we wpisie czasu `development`, sortowanie `-updated`, 25 elementów na stronę.

## Walidacja danych wejściowych na serwerze

```ts

const input = validate(CreateIssueInputSchema, normalizeInput(await request.json()))
```

`normalizeInput` przycina ciągi znaków i zamienia puste ciągi na `null`, tak jak wydany Tracker. `validate` rzuca `ProblemError` ze statusem 422, a jego komunikaty brzmią jak komunikaty samego Trackera. Przekaż `{ translate }`, aby linia taka jak `tracker.errors.bad_date` została przetłumaczona. `toIso8601` formatuje znaczniki czasu z offsetem, tak jak wysyła je API.

## Klient Trackera

```ts

const tracker = createTrackerClient({ baseUrl: 'http://localhost:8100', token })

const me = await tracker.whoami()
const page = await tracker.mine()
await tracker.setStatus('WEB-3', 'Done')
```

Nazwy metod pochodzą od wartości `operationId` z opisu OpenAPI Trackera, a dodatkowo dostępna jest metoda `mine()`. Są to operacje wymienione w [dokumentacji API](/pl/tracker/api/), na przykład `getIssue`, `createIssue`, `updateIssue`, `comment`, `assign`, `logTime` i `search`. Zwracają zawartość `data`, z wyjątkiem:

- `listIssues` i `mine`, które zwracają całą stronę wraz z `links` i `meta`;
- `downloadAttachment`, która zwraca surowy obiekt `Response`.

Każda odpowiedź jest sprawdzana względem schematów, więc klient nigdy nie pracuje z danymi spoza kontraktu.

## Błędy

| Sytuacja | Błąd |
| --- | --- |
| Odpowiedź inna niż 2xx z treścią w formacie Trackera lub RFC 9457 | `ProblemError` ze `status`, `message` i `errors` |
| Odpowiedź niezgodna z kontraktem albo niebędąca JSON-em | `TrackerContractError`; sprawdzanie wyłączysz opcją `validateResponses: false` |
| Błąd sieci lub przekroczenie limitu czasu | Błąd zgłaszany przez `fetch`; domyślny limit czasu to 20 sekund |

```ts
try {
  await tracker.getIssue('WEB-404')
} catch (error) {
  if (error instanceof ProblemError && error.status === 404) console.log('No such issue')
  else throw error
}
```

## Zgodność z API

`@skribly/core` przechowuje kopię opisu OpenAPI Trackera i plików językowych w swoich testach. Testy sprawdzają klienta i schematy względem pliku OpenAPI, a parser plików językowych i podpisy webhooków względem wyników wydanego Trackera. Ta witryna buduje [dokumentację API](/pl/tracker/api/) z tego samego pliku, a jej build kończy się błędem, gdy kopia się rozjedzie.
