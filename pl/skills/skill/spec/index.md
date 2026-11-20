# Specyfikacja gotowa do wdrożenia

> Skill spec z agent-skills: pisze specyfikację jednego zadania gotową do wdrożenia jako .tasks/specs/SPEC-<slug>.md: cel, zakres (co wchodzi, a co nie), pliki i kontrakty, których dotyka, oraz fazy, z których każda zostawia działający projekt i kończy się dokładnym sprawdzeniem.

`spec` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/spec`, `$spec` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/spec/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/spec/SKILL.md) |

## Co robi

Pisze specyfikację jednego zadania gotową do wdrożenia jako `.tasks/specs/SPEC-<slug>.md`: cel, zakres (co wchodzi, a co nie), pliki i kontrakty, których dotyka, oraz fazy, z których każda zostawia działający projekt i kończy się dokładnym sprawdzeniem. Powstaje z zadania planu, zgłoszenia w trackerze albo prośby i czeka na zatwierdzenie. Skill `plan` przekazuje tu swoje zadania, a `task` realizuje zatwierdzoną specyfikację faza po fazie.

## Kiedy go używać

Gdy zadanie jest za duże na pięć wierszy opisu i trzeba dokładnie ustalić, jak je zbudować.

Nie służy do realizacji zatwierdzonej specyfikacji (robi to skill `task`) ani do pisania specyfikacji testu Playwright.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/spec` |
| Codex CLI | `$spec` albo wybór z `/skills` |
| Cursor | `/spec` w czacie Agent |
| Gemini CLI | `/spec` |
| OpenCode | `/spec` |
| GitHub Copilot | `/spec` w czacie VS Code albo w Copilot CLI |
| Devin | `/spec` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `spec.mjs`: `node scripts/spec.mjs new <slug> [--title <text>] [--plan <ref>] [--source <ref>] [--project <dir>]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable spec` usuwa go z projektu, a `project enable spec` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 150 | 1132 | 1300 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
