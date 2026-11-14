# Przewodnik po REST API

> Jak używać REST API Skribly Tracker v1 — uwierzytelnianie, konwencje, obiekt zgłoszenia, filtry, przykłady curl dla każdego typowego zadania i mapowanie na klienta trackera w Skribly Agent.

Adres bazowy w stosie Docker to `http://localhost:8100/api/v1`; wszystkie poniższe ścieżki są względem niego. JSON na wejściu i na wyjściu. Każda operacja, parametr i schemat są w wygenerowanej [dokumentacji API](/pl/tracker/api/), zbudowanej z opisu API w OpenAPI 3.1.

```bash
export TRACKER=http://localhost:8100/api/v1
export TOKEN='1|…'
curl -H "Authorization: Bearer $TOKEN" -H "Accept: application/json" "$TRACKER/me"
```

Token utworzysz tak, jak opisano w [Osobiste tokeny dostępu](/pl/tracker/tokens/).

## Uwierzytelnianie

Utwórz osobisty token dostępu w swoim profilu i wysyłaj go jako token typu bearer. Token działa z rolą swojego właściciela: obserwatorzy mogą tylko czytać, członkowie i administratorzy mogą zmieniać zgłoszenia, a webhooki są dla administratorów. Endpointy zmieniające dane wymagają też uprawnienia `write` tokenu.

## Konwencje

- **Klucze zgłoszeń** mają postać `WEB-12`. Nie rozróżniają wielkości liter, początkowy `#` jest ignorowany, a działa też numeryczne `id`.
- **Opcje** są obiektami `{ "id": "…", "name": "…" }`: `type` (`task`, `bug`, `feature`), `priority` (`lowest`, `low`, `medium`, `high`, `urgent`) oraz `activity` wpisu czasu (`development`, `review`, `testing`, `design`, `meeting`, `other`). Id statusów to liczby, w `transitions` wysyłane jako stringi; status można też podać nazwą, na przykład `"Review"`.
- **Kategoria statusu** to `todo`, `in_progress` lub `done`. `status=open` oznacza „nie zrobione”.
- **Markdown**: `description` i `body` komentarza to Markdown, zwracany tak, jak go zapisano. Interfejs WWW renderuje go z zescapowanym surowym HTML.
- **Daty**: znaczniki czasu w ISO 8601 z offsetem; `YYYY-MM-DD` dla `due_date` i `date` wpisu czasu.
- **Stronicowanie**: endpointy list zwracają `data`, `links` i `meta { current_page, last_page, per_page, total }`. `per_page` przyjmuje wartości od 1 do 100 (domyślnie 25), a `page` zaczyna się od 1.
- **Limit żądań**: 240 żądań na minutę na użytkownika.

## Błędy

```json
{ "message": "The title field is required.", "errors": { "title": ["The title field is required."] } }
```

| Status | Znaczenie |
| --- | --- |
| `401` | Brak tokenu albo token jest nieprawidłowy, unieważniony lub wygasł |
| `403` | Rola właściciela lub uprawnienia tokenu nie zezwalają na tę operację |
| `404` | Nie ma takiego zgłoszenia, projektu ani zasobu |
| `422` | Walidacja się nie powiodła; `errors` zawiera nazwy pól |
| `429` | Ponad 240 żądań na minutę |

## Obiekt zgłoszenia

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

`comments` i `attachments` są dołączane tylko do odpowiedzi `GET /issues/{key}`. `labels` zawiera nazwy. Adresy URL załączników wymagają tego samego tokenu bearer.

## Endpointy

| Metoda | Ścieżka | Zastosowanie |
| --- | --- | --- |
| GET | `/me` | Właściciel tokenu i jego uprawnienia |
| GET | `/users` | Osoby, którym można przypisać zgłoszenie |
| GET | `/projects` | Aktywne projekty z `open_issues` |
| GET | `/projects/{key}` | Projekt z jego statusami, etykietami, typami i priorytetami |
| GET | `/projects/{key}/meta` | Z czego można wybierać przy tworzeniu zgłoszenia |
| GET | `/issues` | Filtrowana lista ze stronicowaniem |
| POST | `/issues` | Utworzenie (zapis) |
| GET | `/issues/{key}` | Pojedyncze zgłoszenie z komentarzami i załącznikami |
| PATCH | `/issues/{key}` | Zmiana wybranych pól (zapis) |
| DELETE | `/issues/{key}` | Usunięcie (administrator lub zgłaszający; zapis) |
| GET | `/issues/{key}/transitions` | Statusy projektu z oznaczonym `current` |
| POST | `/issues/{key}/transitions` | Zmiana statusu (zapis) |
| POST | `/issues/{key}/assign` | Przypisanie lub usunięcie przypisania (zapis) |
| GET | `/issues/{key}/comments` | Komentarze, od najstarszego |
| POST | `/issues/{key}/comments` | Dodanie komentarza w Markdown (zapis) |
| GET | `/issues/{key}/time-entries` | Zarejestrowany czas |
| POST | `/issues/{key}/time-entries` | Rejestracja czasu (zapis) |
| POST | `/issues/{key}/attachments` | Przesłanie pliku w polu multipart `file` (zapis) |
| GET | `/attachments/{id}` | Pobranie pliku |
| GET | `/time-activities` | Czynności dla wpisów czasu |
| GET | `/search` | Wyszukiwanie tekstowe; dokładny klucz pojawia się jako pierwszy |
| GET, POST | `/webhooks` | Lista lub dodawanie webhooków (administrator; zapis) |
| DELETE | `/webhooks/{id}` | Usunięcie webhooka (administrator; zapis) |

## Lista i filtrowanie zgłoszeń

```bash
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/issues?assignee=me&status=open&sort=-updated&per_page=100"
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/issues?updated_since=2026-10-29T12:00:00Z&status=all"
```

| Parametr | Wartości |
| --- | --- |
| `assignee` | `me`, `none`, identyfikator użytkownika lub adres e-mail |
| `reporter`, `watching` | `me` |
| `status` | `open` (nieukończone), `closed`, `all`, identyfikator statusu lub nazwa |
| `project` | Klucz lub kilka kluczy rozdzielonych przecinkami (`WEB,AGENT`) |
| `type`, `priority` | Identyfikator opcji lub kilka identyfikatorów rozdzielonych przecinkami |
| `label` | Nazwa etykiety |
| `q` | Tekst w tytule lub opisie albo dokładny klucz |
| `updated_since` | Znacznik czasu ISO 8601, do odpytywania (polling) |
| `sort` | `-updated` (domyślnie), `updated`, `-created`, `created`, `-priority`, `priority`, `key`, `-key`, `due`, `-due` |
| `per_page`, `page` | Stronicowanie |

## Tworzenie zgłoszenia

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

Wymagane są tylko `project` i `title`. Nieznane nazwy etykiet są tworzone w projekcie. Nowe zgłoszenie dostaje kolejny numer w swoim projekcie.

## Aktualizacja zgłoszenia

```bash
curl -X PATCH -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "$TRACKER/issues/WEB-9" -d '{"priority": "high", "labels": ["ui", "api"], "due_date": null}'
```

Akceptuje te same pola co tworzenie, z wyjątkiem `project`. Zmieniają się tylko przesłane pola, a każda zmiana trafia do historii zgłoszenia.

## Zmiana statusu

```bash
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/issues/WEB-3/transitions"
# {"data":[{"id":"1","name":"To do","category":"todo","current":false},
#          {"id":"2","name":"In progress","category":"in_progress","current":false},
#          {"id":"3","name":"Review","category":"in_progress","current":true},
#          {"id":"4","name":"Done","category":"done","current":false}]}

curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "$TRACKER/issues/WEB-3/transitions" -d '{"status": "Done"}'      # or {"status": "4"}
```

## Przypisywanie

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "$TRACKER/issues/WEB-3/assign" -d '{"assignee": "me"}'     # "me", a user id, an e-mail, or null to unassign
```

## Komentarz

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "$TRACKER/issues/WEB-3/comments" -d '{"body": "## Done\n- LCP 1.6 s\n\n## How to check\n1. `npm run build`"}'
```

## Rejestrowanie czasu

```bash
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/time-activities"
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "$TRACKER/issues/WEB-3/time-entries" -d '{"hours": 1.5, "comment": "Profiling", "date": "2026-10-29", "activity": "development"}'
```

`hours` jest wymagane, więcej niż 0 i co najwyżej 24. `date` domyślnie oznacza dzień dzisiejszy, a `activity` to `development`.

## Załączniki

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" -F "file=@screen.png" "$TRACKER/issues/WEB-3/attachments"
curl -H "Authorization: Bearer $TOKEN" -o screen.png "$TRACKER/attachments/3"
```

## Wyszukiwanie

```bash
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/search?q=login&project=WEB&limit=20"
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/search?q=web-3"   # the exact key comes first
```

Wyszukiwanie obejmuje wszystkie statusy; przekaż `status=open`, aby je zawęzić.

## Projekty i metadane tworzenia

```bash
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/projects"
curl -H "Authorization: Bearer $TOKEN" "$TRACKER/projects/WEB/meta"
# {"data":{"types":[{"id":"task","name":"Task"},…],"priorities":[…,{"id":"medium","name":"Medium","current":true},…],
#          "labels":[{"id":"1","name":"backend"},…],"statuses":[…],"members":[{"id":"1","name":"Ada Example"},…]}}
```

## Mapowanie na Skribly Agent

API jest wzorowane na `TrackerClient` Skribly Agent, więc klient mapuje jedną metodę na jedno wywołanie. `@skribly/core` nazywa metody klienta tak samo jak odpowiadające im operacje.

| TrackerClient | Wywołanie | Uwagi |
| --- | --- | --- |
| `whoami()` | `GET /me` | Zwraca `data.name` |
| `mine()` | `GET /issues?assignee=me&status=open&sort=-updated&per_page=100` | |
| `get(key)` | `GET /issues/{key}` | Z komentarzami |
| `comment(key, md)` | `POST /issues/{key}/comments {body}` | Markdown bez zmian |
| `statuses(key)` | `GET /issues/{key}/transitions` | Już w postaci `{id, name, current}` |
| `setStatus(key, id)` | `POST /issues/{key}/transitions {status: id}` | |
| `assign(key, to)` | `POST /issues/{key}/assign {assignee}` | `"me"`, `null` lub identyfikator |
| `projects()` | `GET /projects` | `{id: key, key, name}` |
| `createMeta(project)` | `GET /projects/{key}/meta` | Typy, priorytety, etykiety |
| `create(input)` | `POST /issues {project, title, description, type, priority, labels}` | |
| `logTime(key, entry)` | `POST /issues/{key}/time-entries {hours, comment, date, activity}` | |
| `activities()` | `GET /time-activities` | |
| `search(q, project)` | `GET /search?q=&project=` | |

## OpenAPI

Opis OpenAPI 3.1 jest źródłem [dokumentacji API](/pl/tracker/api/). `@skribly/core` trzyma jego kopię i testuje względem niej klienta oraz schematy, więc kontrakt, klient i ta dokumentacja nie mogą po cichu się rozjechać.
