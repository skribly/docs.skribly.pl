# Pakiety Core

> @skribly/core, wspólny kod aplikacji Skribly: kontrakty i klient API Trackera, tożsamość i zakresy (scopes), envelope zdarzeń, manifesty aplikacji, profil projektu, podpisywanie webhooków, błędy problem+json, konfiguracja środowiska, logi, tłumaczenia i presety.

`@skribly/core` to wspólny kod aplikacji Skribly. Zawiera kontrakty i klienta API Trackera, tożsamość i zakresy, katalog zdarzeń, rejestr aplikacji, powiadomienia, dziennik audytu, profil projektu, podpisywanie webhooków, helpery Hono, błędy problem+json, konfigurację środowiska, logi, tłumaczenia oraz wspólne presety TypeScript, lintowania i tokenów projektowych. Aplikacje nigdy nie importują się nawzajem; to, co sobie wysyłają, jest zdefiniowane raz, tutaj.

| | |
| --- | --- |
| Wersja | 0.2.0 |
| Środowisko uruchomieniowe | Node.js 26; główny punkt wejścia działa też w przeglądarkach |
| Walidacja | Zod 4 |
| Dystrybucja | Prywatny pakiet instalowany z Git, a nie z rejestru npm |

## Instalacja

Aplikacje instalują go przez SSH z prywatnego repozytorium:

```json
{ "dependencies": { "@skribly/core": "git+ssh://git@github.com/skribly/core.git#semver:^0.2.0" } }
```

`dist` nie jest w repozytorium; skrypt `prepare` buduje go podczas instalacji. Lokalnie aplikacja z sąsiedniego folderu może użyć `file:../skriblyCore`; to symlink i nie uruchamia kompilacji.

## Punkty wejścia

| Import | Zawartość | Działa w przeglądarce |
| --- | --- | --- |
| `@skribly/core` | Wszystko, co niżej ma „Tak” | Tak |
| `@skribly/core/contracts` | Schematy Zod i typy API Trackera v1, ładunki webhooków, `toIso8601`, `normalizeInput` | Tak |
| `@skribly/core/client` | `createTrackerClient` | Tak |
| `@skribly/core/problem` | Błędy RFC 9457 (problem+json) i `validate` | Tak |
| `@skribly/core/env` | `defineEnv` i wspólne schematy środowiska | Tak |
| `@skribly/core/i18n` | `createTranslator`, `preferredLocale` | Tak |
| `@skribly/core/i18n/node` | `loadLanguageLines`, `parsePhpLanguageFile` | Nie |
| `@skribly/core/identity` | Użytkownicy, organizacje, członkostwa, osobiste tokeny, zakresy i `hasScope` | Tak |
| `@skribly/core/events` | Envelope CloudEvents 1.0, katalog zdarzeń, `createEvent`, `parseEvent` | Tak |
| `@skribly/core/registry` | Manifesty aplikacji, `createRegistry`, `fetchManifest` | Tak |
| `@skribly/core/notifications` | Schemat powiadomienia i mapowanie na tony `@skribly/ui` | Tak |
| `@skribly/core/audit` | Schemat wpisu dziennika audytu i `diffForAudit` | Tak |
| `@skribly/core/project` | Profil projektu z `.skribly/project.json` | Tak |
| `@skribly/core/schema/project.schema.json` | Profil projektu jako JSON Schema | |
| `@skribly/core/http` | Helpery Hono 4: błędy problem+json, uwierzytelnianie bearer, identyfikatory żądań, trasa manifestu | Wymaga `hono` |
| `@skribly/core/webhooks` | Podpisywanie, weryfikowanie i tworzenie dostarczeń oraz podpisanych zdarzeń | Nie |
| `@skribly/core/logger` | `createLogger` | Nie |
| `@skribly/core/tokens.css` | Tokeny projektowe Tailwind 4 | Tak |
| `@skribly/core/tsconfig/{base,node,react}.json` | Presety TypeScript | |
| `@skribly/core/oxlint/{base,react}.json` | Presety oxlint | |

Główny punkt wejścia pozostaje bezpieczny dla przeglądarki, więc bundle klienta React może importować z niego kontrakty. Moduły tylko dla Node mają własne punkty wejścia.

Moduły ekosystemu (identity, events, registry, notifications, audit, project i http) są dostępne tylko przez własne punkty wejścia, więc ich nazwy nie kolidują z kontraktami Trackera. Ich pola są zapisane w camelCase; kontrakty Trackera zachowują snake_case wysyłane przez API.

## Tożsamość i zakresy

```ts

hasScope(token.scopes, 'tracker.issues:write')
```

Zakres ma postać `<app>.<resource>:<action>`, na przykład `tracker.issues:read`. Działaniem jest `read`, `write` lub `admin`, a wyższy poziom obejmuje niższe. Przyznany zakres może zawierać znaki wieloznaczne, takie jak `tracker.*:write` lub `*:read`; wymagany zakres nigdy ich nie używa. Członkostwo ma rolę `owner`, `admin`, `member` lub `viewer`, a `scopesForRole` przypisuje każdej roli domyślne zakresy.

To są wspólne definicje. Tokeny Skribly Tracker mają dziś uprawnienia `read` i `write`, opisane w [Osobiste tokeny dostępu](/pl/tracker/tokens/).

## Rejestr

Każda aplikacja może opisać się manifestem (z jej identyfikatorem, nazwą, wersją, adresami, możliwościami, zdarzeniami, które emituje i odbiera, oraz linkami) i serwować go pod `/api/manifest`. `fetchManifest` czyta jeden manifest, a `createRegistry` odpowiada, która aplikacja ma daną możliwość, które aplikacje emitują lub odbierają dane zdarzenie i gdzie jest API aplikacji.

## Profil projektu

`.skribly/project.json` opisuje sposób budowania projektu i pracy nad nim: stos technologiczny, menedżera pakietów, polecenia, konwencje commitów oraz opcjonalnie projekt Skribly Tracker. `parseProjectProfile` i `stringifyProjectProfile` czytają go i zapisują, a `schema/project.schema.json` to ten sam profil jako JSON Schema. agent-skills zapisuje i czyta ten plik w skillu [`project`](/pl/skills/catalog/#przepływ-pracy).

## Powiadomienia i dziennik audytu

`NotificationSchema` zawiera `tone` o wartości `success`, `info`, `warning` lub `error`, `title`, opcjonalne `body` i `url` oraz `readAt`; `toUiTone` i `fromUiTone` mapują ton na tony komunikatów `@skribly/ui` i z powrotem. `AuditEntrySchema` zapisuje, kto co zrobił i z jakim obiektem docelowym, z wynikiem i zmianami, a `diffForAudit(before, after)` buduje te zmiany.

## Błędy problem+json

```ts

throw new ProblemError(createProblem({ status: 401, detail: t('tracker.errors.unauthenticated') }))
```

`error.toResponse()` zwraca standardowy obiekt `Response` z typem `application/problem+json`, gotowy do zwrócenia z handlera Hono. Problem trzyma `message` i `errors` obok pól RFC 9457, więc dotychczasowi klienci dalej je czytają. `problemFromBody` czyta zarówno stary, jak i nowy kształt.

## Środowisko

```ts

const env = defineEnv(trackerEnvSchema)
```

Pusty wiersz `KEY=` jest traktowany jak brak wartości. Przy błędzie rzucany jest `EnvError`, który podaje nazwy zmiennych, a nigdy ich wartości. `trackerClientEnvSchema` czyta `SKRIBLY_TRACKER_URL` i `SKRIBLY_TRACKER_TOKEN`, czyli zmienne, które Skribly Agent przekazuje swoim sesjom.

## Logi

```ts

const logger = createLogger({ name: 'tracker', level: env.LOG_LEVEL })
```

Zapisuje JSON przez pino. Tokeny, hasła, sekrety, ciasteczka (cookies) i nagłówki uwierzytelniania są zamazywane.

## Tłumaczenia

```ts

const translator = createTranslator({ lines: await loadLanguageLines('lang'), locale: 'pl' })

translator.t('tracker.board.moved', { key: 'WEB-1', status: 'Done' })
translator.choice('tracker.list.results', 7)
```

`loadLanguageLines` odczytuje folder `lang` aplikacji, zarówno tablice `.php` (parsowane, nigdy nieuruchamiane), jak i grupy `.json`. Obsługiwane są placeholdery, liczba mnoga z `|`, przedziały `{0}` i `[2,*]`, polska reguła liczby mnogiej i język zapasowy.

## Presety

```json
{ "extends": "@skribly/core/tsconfig/node.json" }
```

```json
{ "extends": ["./node_modules/@skribly/core/oxlint/base.json"] }
```

```css
@import "tailwindcss";
@import "@skribly/core/tokens.css";
```

`tsconfig/react.json` wymaga `vite` w aplikacji, bo potrzebuje jego typów `vite/client`. Tokeny nie zawierają linku do czcionki, więc aplikacja dodaje własny. Pełny system projektowy znajduje się w [`@skribly/ui`](/pl/ui/).

## Czytaj dalej

- [Kontrakty](/pl/core/contracts/): schematy i klient Trackera.
- [Zdarzenia](/pl/core/events/): dzisiejsze ładunki webhooków i wspólny envelope zdarzeń.
- [Jak łączą się aplikacje](/pl/core/connecting/): które aplikacje komunikują się ze sobą i w jaki sposób.
