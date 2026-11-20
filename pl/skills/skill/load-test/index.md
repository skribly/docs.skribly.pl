# Testy obciążeniowe

> Skill load-test z agent-skills: planuje, pisze i uruchamia testy obciążeniowe w k6 (albo autocannon lub Locust), od krótkiego testu smoke po profile load, stress i spike, z jawnymi progami percentyli opóźnień i odsetka błędów.

`load-test` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/load-test`, `$load-test` w Codexie |
| Grupa | Jakość i testy |
| Stosy | `backend` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/load-test/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/load-test/SKILL.md) |

## Co robi

Planuje, pisze i uruchamia testy obciążeniowe w k6 (albo autocannon lub Locust), od krótkiego testu smoke po profile load, stress i spike, z jawnymi progami percentyli opóźnień i odsetka błędów. Wyniki czyta ze skróconego podsumowania i wskazuje wąskie gardło.

## Kiedy go używać

Przed startem albo po poprawce wydajności, gdy chcesz wiedzieć, ilu użytkowników wytrzyma endpoint.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/load-test` |
| Codex CLI | `$load-test` albo wybór z `/skills` |
| Cursor | `/load-test` w czacie Agent |
| Gemini CLI | `/load-test` |
| OpenCode | `/load-test` |
| GitHub Copilot | `/load-test` w czacie VS Code albo w Copilot CLI |
| Devin | `/load-test` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `load-summary.mjs`: `node scripts/load-summary.mjs <summary.json> [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `backend` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable load-test` usuwa go z projektu, a `project enable load-test` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 121 | 807 | 950 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
