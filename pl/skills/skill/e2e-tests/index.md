# Testy end-to-end w Playwright

> Skill e2e-tests z agent-skills: pisze i uruchamia testy end-to-end w Playwright dla zmienionych ścieżek użytkownika: uruchamia tylko dotknięte specyfikacje, przy błędzie zachowuje ślady, skraca raport JSON, a przy niestabilnym teście szuka przyczyny zamiast dodawać opóźnienia i ponowienia.

`e2e-tests` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/e2e-tests`, `$e2e-tests` w Codexie |
| Grupa | Jakość i testy |
| Stosy | `web` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/e2e-tests/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/e2e-tests/SKILL.md) |

## Co robi

Pisze i uruchamia testy end-to-end w Playwright dla zmienionych ścieżek użytkownika: uruchamia tylko dotknięte specyfikacje, przy błędzie zachowuje ślady, skraca raport JSON, a przy niestabilnym teście szuka przyczyny zamiast dodawać opóźnienia i ponowienia.

## Kiedy go używać

Gdy ścieżka użytkownika potrzebuje testu end-to-end albo spec Playwright nie przechodzi lub bywa niestabilny.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/e2e-tests` |
| Codex CLI | `$e2e-tests` albo wybór z `/skills` |
| Cursor | `/e2e-tests` w czacie Agent |
| Gemini CLI | `/e2e-tests` |
| OpenCode | `/e2e-tests` |
| GitHub Copilot | `/e2e-tests` w czacie VS Code albo w Copilot CLI |
| Devin | `/e2e-tests` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `affected-specs.mjs`: `node scripts/affected-specs.mjs [--base origin/main] [--json]`
- `pw-report.mjs`: `node scripts/pw-report.mjs [pw-report.json] [--max 10] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `web` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable e2e-tests` usuwa go z projektu, a `project enable e2e-tests` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 107 | 813 | 950 | 543 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
