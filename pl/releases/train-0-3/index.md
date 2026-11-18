# Pociąg wydań 0.3

> Pierwszy pociąg wydań Skribly: @skribly/core 0.3.0 i agent-skills 0.3.0, a @skribly/ui dołącza w późniejszym pociągu, co każdy z nich wnosi i jak zaktualizować.

Wspólne pakiety Skribly wychodzą teraz jako pociąg wydań: jeden pociąg na wersję minor, więc pakiety z tego samego pociągu na pewno ze sobą działają. Pociąg 0.3 jest pierwszy. Poprawka w ramach pociągu podnosi tylko pakiet, który poprawia, jako 0.3.1, 0.3.2 i tak dalej.

| Pakiet | Wersja | Wcześniej |
| --- | --- | --- |
| `@skribly/core` | 0.3.0 | 0.2.0 |
| agent-skills | 0.3.0 | 0.2.14 |
| `@skribly/ui` | dołącza w późniejszym pociągu (zostaje 0.1.0) | 0.1.0 |

`@skribly/ui` nie jedzie tym pociągiem: jego następna wersja czeka na prace nad kierunkiem projektu i komponentami panelu administracyjnego i dołączy do późniejszego pociągu. Do tego czasu z core 0.3.0 idzie ui 0.1.0, a strony zachowują swoją kopię zestawu dla stron.

Które wersje należą do którego pociągu, zapisuje `compat.json` w repozytorium core: wersje pociągu, pakiety, które dołączą później, commit ui, którego używa każda strona, najstarsze Skribly Agent i Skribly Tracker działające z pociągiem oraz wersje Node.js, Astro, React i Next.js, na których go przetestowano.

## Dodane

### Core

- **Zestaw serwerowy**: osiem punktów wejścia pod `@skribly/core/server/` z kodem, którego każdy serwer Skribly potrzebuje od pierwszego dnia. `db` otwiera Postgres (w testach PGlite) i wykonuje każde żądanie w transakcji jego organizacji pod zabezpieczeniem na poziomie wierszy. `events` zapisuje zdarzenia w skrzynce nadawczej w tej samej transakcji i uruchamia zadania w tle. `seed` wypełnia bazę danymi minimalnymi lub demonstracyjnymi. `app` łączy moduły aplikacji. `http` dodaje wspólne middleware Hono: błędy jako problem details, limit rozmiaru treści, klucze idempotencji, które nigdy nie wykonują zapisu dwa razy, i limity żądań. `mcp` udostępnia akcje aplikacji jako narzędzia MCP pod `/mcp`, a zapisy potwierdza człowiek. `testing` daje testy izolacji i testy między organizacjami. `telemetry` wysyła ślady OpenTelemetry.
- **Kontrakty**: konwencje API (wersja w ścieżce, stronicowanie kursorem), porty z atrapami do testów, Standard Schema, Standard Webhooks, katalog zdarzeń każdego produktu, tożsamość z przestrzeniami roboczymi i instalacjami, API administracyjne Skribly ID (eksperymentalne), manifest v2, rejestr i katalog produktów, flagi funkcji (eksperymentalne) oraz więcej operacji Skribly Tracker w kontraktach i kliencie.
- **Pliki generowane**: plik JSON Schema dla każdego schematu i pliki OpenAPI 3.1 dla Skribly Tracker i Skribly ID.
- **Presety**: wspólna konfiguracja Prettier jako `@skribly/core/prettier` i preset oxlint dla aplikacji Next.js.

### agent-skills

- Cztery nowe umiejętności: `newsletter`, `slice`, `seed` i `standard`. Zobacz [Katalog umiejętności](/pl/skills/catalog/).

## Zmienione

- Core: żądanie może otworzyć tylko transakcję organizacji, do której jest zalogowane (401 bez logowania, 403 dla innej organizacji). Każde sprawdzenie dostępu wskazuje organizację. Daty, adresy webhooków i linki są sprawdzane dokładniej.
- agent-skills: wydania idą teraz z pociągiem. Wydanie powstaje tylko dla tagu wersji, na przykład `v0.3.0`; wydania numerowane kolejnymi budowaniami (`v0.2.1` do `v0.2.14`) kończą się tutaj.
- agent-skills: `agent-skills agent-files` domyślnie zapisuje tylko `CLAUDE.md` i wskaźnik dla Copilota, a `--prune` usuwa to, co zapisały starsze wersje. Skrypty umiejętności nigdy nie uruchamiają programu znalezionego w repozytorium, w którym pracujesz. Zobacz [Obsługiwani agenci](/pl/skills/agents/).

## Poprawione

- Core: nagłówki limitu żądań ustawione przez handler zostają zachowane, a każde ustalenie listopadowego przeglądu zestawu serwerowego jest zamknięte.
- agent-skills: `agent-files` nie wychodzi poza repozytorium, w którym działa, i nie zastępuje już Twojego `.mcp.json`.

## Aktualizacja

1. `@skribly/core` 0.3.0 nie jest jeszcze w GitHub Packages: publikację wykonuje workflow wydania, który przyjdzie później. Do tego czasu aplikacje instalują core z paczki w swoim folderze `vendor/`; spakuj ją na nowo z tagu `v0.3.0` poleceniem `node .tools/pack-libs.mjs <aplikacja>` w core. `@skribly/ui` zostaje przy paczce 0.1.0.
2. Gdy core zostanie opublikowany, aplikacja kopiuje szablon `.npmrc` z repozytorium core (`.tools/npmrc.template`), ustawia token z prawem odczytu pakietów jako `NODE_AUTH_TOKEN`, przypina dokładnie `"@skribly/core": "0.3.0"` i używa wspólnej konfiguracji Prettier przez `"prettier": "@skribly/core/prettier"` w `package.json` zamiast własnego `.prettierrc.json`.
3. Przed migracją bazy uruchom ponownie konfigurację bazy z zestawu serwerowego: dodaje rolę, której potrzebują nowe migracje.
4. Kod, który otwierał transakcję dla pracy poza organizacją, na przykład logowania, przechodzi na `db.identity`. Sprawdzenia dostępu przekazują organizację.
5. Uruchom ponownie `agent-skills install`, a potem raz `agent-skills agent-files --prune` w każdym repozytorium.
