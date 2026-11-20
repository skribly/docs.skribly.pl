# Przejście funkcji w przeglądarce bez interfejsu

> Skill e2e-check z agent-skills: przechodzi gotową funkcję w przeglądarce bez interfejsu tak jak użytkownik: jeden scenariusz na każde kryterium akceptacji, na już działającej aplikacji, z Playwright, gdy projekt go ma.

`e2e-check` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/e2e-check`, `$e2e-check` w Codexie |
| Grupa | Jakość i testy |
| Stosy | `web` |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/e2e-check/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/e2e-check/SKILL.md) |

## Co robi

Przechodzi gotową funkcję w przeglądarce bez interfejsu tak jak użytkownik: jeden scenariusz na każde kryterium akceptacji, na już działającej aplikacji, z Playwright, gdy projekt go ma. Każdy scenariusz zgłasza jako zaliczony albo nie, ze zrzutem po każdym kroku. Nigdy nie otwiera widocznej przeglądarki i nie uruchamia drugiej kopii działającej aplikacji.

## Kiedy go używać

Po `verify`, a przed pull requestem zmiany interfejsu, gdy chcesz przeklikać całą ścieżkę od początku do końca.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/e2e-check` |
| Codex CLI | `$e2e-check` albo wybór z `/skills` |
| Cursor | `/e2e-check` w czacie Agent |
| Gemini CLI | `/e2e-check` |
| OpenCode | `/e2e-check` |
| GitHub Copilot | `/e2e-check` w czacie VS Code albo w Copilot CLI |
| Devin | `/e2e-check` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `e2e-env.mjs`: `node scripts/e2e-env.mjs [--url <http://localhost:port>] [--project <dir>] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `web` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable e2e-check` usuwa go z projektu, a `project enable e2e-check` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 132 | 1081 | 1250 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
