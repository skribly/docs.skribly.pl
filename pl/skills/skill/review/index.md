# Samodzielny przegląd przed commitem

> Skill review z agent-skills: przegląda Twoje niezatwierdzone zmiany albo diff gałęzi przed commitem: szuka błędów, pominiętych przypadków brzegowych, wpadek bezpieczeństwa, martwego kodu i kodu do debugowania, złamanych konwencji i brakujących testów.

`review` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/review`, `$review` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/review/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/review/SKILL.md) |

## Co robi

Przegląda Twoje niezatwierdzone zmiany albo diff gałęzi przed commitem: szuka błędów, pominiętych przypadków brzegowych, wpadek bezpieczeństwa, martwego kodu i kodu do debugowania, złamanych konwencji i brakujących testów. Zaczyna od znalezisk uporządkowanych według wagi, każde z `file:line` i konkretną poprawką. Tryb pull requesta przegląda całą gałąź względem `develop` przez wszystkie bramki i pisze szkic przeglądu, który czeka na zatwierdzenie. Tylko do odczytu, chyba że poprosisz o poprawki.

## Kiedy go używać

Przed każdym commitem, a w trybie `review pr` przed scaleniem całej gałęzi albo przy przeglądzie pull requesta.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/review` |
| Codex CLI | `$review` albo wybór z `/skills` |
| Cursor | `/review` w czacie Agent |
| Gemini CLI | `/review` |
| OpenCode | `/review` |
| GitHub Copilot | `/review` w czacie VS Code albo w Copilot CLI |
| Devin | `/review` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable review` usuwa go z projektu, a `project enable review` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 166 | 955 | 1100 | 1098 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
