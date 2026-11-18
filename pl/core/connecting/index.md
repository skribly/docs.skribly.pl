# Jak łączą się aplikacje

> Która aplikacja Skribly rozmawia z którą, przez co i z jakimi poświadczeniami — oraz jak połączyć własną usługę ze Skribly Tracker.

Aplikacje nigdy nie importują się nawzajem. Rozmawiają przez HTTP, a kształty przesyłanych danych są zdefiniowane raz, w `@skribly/core`.

## Połączenia

| Z | Do | Przez co | Poświadczenia |
| --- | --- | --- | --- |
| Skribly Agent | Skribly Tracker | REST API v1 | [Osobisty token dostępu](/pl/tracker/tokens/) z odczytem i zapisem, zapisany zaszyfrowany w systemowym pęku kluczy |
| Skribly Agent | Jira, Redmine, GitHub, GitLab, Linear | Własne API każdego trackera | Token danego trackera, przechowywany w ten sam sposób |
| Skribly Agent | sesje agentów | Zmienne środowiskowe | `SKRIBLY_TRACKER_URL`, `SKRIBLY_TRACKER_TOKEN` oraz zmienne, których agent-skills oczekuje dla innych trackerów |
| Skribly Agent | agent-skills | `git clone`, `skills.json`, CLI agent-skills | Brak dla repozytorium, które możesz czytać |
| agent-skills | projekt | `.skribly/project.json` w schemacie `@skribly/core` oraz `.skribly/lessons.md` | Brak |
| agent-skills | Skribly Tracker i pięć innych trackerów | REST API, tylko do odczytu, chyba że opublikujesz komentarz | Zmienne środowiskowe lub `~/.config/agent-skills/credentials.env` |
| Skribly Tracker | dowolna usługa | [Podpisane webhooki](/pl/tracker/webhooks/) | Osobny sekret dla każdego webhooka |
| Skrypty i agenci | Skribly Agent | Lokalne API sterowania na `127.0.0.1`, CLI `skribly` oraz `skribly mcp` | Losowy token w `~/.skribly/control.json`, nowy przy każdym uruchomieniu |

## Zadanie od początku do końca

1. Tworzysz `WEB-12` w Skribly Tracker.
2. Skribly Agent wyświetla je w sekcji **Zadania** za pomocą `GET /issues?assignee=me&status=open`.
3. **Zacznij z agentem** zapisuje `.skribly/tasks/WEB-12/TASK.md` i `STATE.md`, tworzy gałąź oraz uruchamia agenta ze zmiennymi `SKRIBLY_TRACKER_URL` i `SKRIBLY_TRACKER_TOKEN` w środowisku.
4. W sesji skill `task` z agent-skills może odświeżyć zadanie poleceniem `agent-skills tasks fetch WEB-12`, które wypisuje tylko to, co się zmieniło.
5. Agent pracuje, uruchamia sprawdzenia i po Twoim „ok” robi commit, bez stopek AI.
6. Skribly Agent dodaje komentarz, ustawia status i rejestruje czas przez API.
7. Każda zmiana sprawia, że Tracker wysyła webhooki `comment.created` i `issue.updated` do każdej usługi, która nasłuchuje.

## Połącz własną usługę

Aby czytać lub zmieniać zgłoszenia, użyj REST API z tokenem albo `@skribly/core` w Node.js i przeglądarkach:

```ts

const env = defineEnv(trackerClientEnvSchema)
const tracker = createTrackerClient({ baseUrl: env.SKRIBLY_TRACKER_URL, token: env.SKRIBLY_TRACKER_TOKEN })

for (const issue of (await tracker.mine()).data) console.log(issue.key, issue.title)
```

Aby reagować na zmiany, dodaj webhook i weryfikuj każde dostarczenie:

```ts

app.post('/hooks/skribly', async (c) => {
  const raw = await c.req.text()
  if (!verifyWebhookRequest(raw, c.req.raw.headers, process.env.WEBHOOK_SECRET!)) return c.body(null, 401)
  const delivery = parseWebhookBody(raw)
  queueMicrotask(() => handle(delivery))
  return c.body(null, 204)
})
```

Bez `@skribly/core` zadziała dowolny język: zobacz przykłady weryfikacji podpisu w [Webhooki i podpisywanie](/pl/tracker/webhooks/#weryfikacja-podpisu).

## Planowane

- **Jedno logowanie.** Jedno konto na osobę, z organizacjami i rolami, a aplikacje logują się przez OAuth 2.1.
- **Tokeny aplikacji z ograniczonym zakresem.** Krótkotrwałe tokeny dla aplikacji i agentów, ograniczone do wybranych projektów i działań. Format zakresu jest zdefiniowany w [`@skribly/core`](/pl/core/#tożsamość-i-zakresy); żadna aplikacja nie wydaje jeszcze takich tokenów.
- **Jeden strumień zdarzeń.** Envelope jest zdefiniowany; wysyłanie go przez aplikacje jest planowane. Zobacz [Zdarzenia](/pl/core/events/#wspólny-envelope-zdarzeń).
- **Serwer MCP w Trackerze**, aby każdy agent mógł z niego korzystać bez własnego kodu.
- **Skribly Agent i agent-skills oparte na `@skribly/core`.** Oba rozmawiają dziś z Trackerem własnymi klientami, które trzymają się tego samego API; przeniesienie na wspólny pakiet jest planowane.

Pełna lista jest w [Architektura ekosystemu](/pl/overview/architecture/#planowane-elementy).
