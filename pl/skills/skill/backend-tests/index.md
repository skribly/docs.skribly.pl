# Testy backendu

> Skill backend-tests z agent-skills: wykrywa stos backendu i pisze lub uruchamia testy zmienionego kodu: pytest z Django lub DRF, Laravel z PHPUnit lub Pest, Node z Vitest lub Jest i supertest, Go oraz Gradle lub Maven.

`backend-tests` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/backend-tests`, `$backend-tests` w Codexie |
| Grupa | Jakość i testy |
| Stosy | `backend` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/backend-tests/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/backend-tests/SKILL.md) |

## Co robi

Wykrywa stos backendu i pisze lub uruchamia testy zmienionego kodu: pytest z Django lub DRF, Laravel z PHPUnit lub Pest, Node z Vitest lub Jest i supertest, Go oraz Gradle lub Maven. Daje osobną bazę testową, fabryki danych, izolację w transakcji, atrapy zewnętrznego HTTP i pokrycie tylko zmienionych wierszy.

## Kiedy go używać

Gdy nowy lub zmieniony kod backendu potrzebuje testów jednostkowych albo integracyjnych, albo trzeba przygotować testową bazę danych.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/backend-tests` |
| Codex CLI | `$backend-tests` albo wybór z `/skills` |
| Cursor | `/backend-tests` w czacie Agent |
| Gemini CLI | `/backend-tests` |
| OpenCode | `/backend-tests` |
| GitHub Copilot | `/backend-tests` w czacie VS Code albo w Copilot CLI |
| Devin | `/backend-tests` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `changed-coverage.mjs`: `node scripts/changed-coverage.mjs <coverage.xml|lcov.info> [--base origin/main] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `backend` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable backend-tests` usuwa go z projektu, a `project enable backend-tests` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 131 | 887 | 1050 | 901 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
