# Plan dużej inicjatywy

> Skill plan z agent-skills: zamienia dużą lub niejasną inicjatywę (epik, nowy moduł, migrację) w plik planu .tasks/plans/<slug>.md z celem, tym, co jest poza zakresem, ryzykami i uporządkowaną listą małych zadań, każde z tym, co dostarcza, i sposobem sprawdzenia, aby każde zadanie dało się potem przeprowadzić skillem task.

`plan` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/plan`, `$plan` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/plan/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/plan/SKILL.md) |

## Co robi

Zamienia dużą lub niejasną inicjatywę (epik, nowy moduł, migrację) w plik planu `.tasks/plans/<slug>.md` z celem, tym, co jest poza zakresem, ryzykami i uporządkowaną listą małych zadań, każde z tym, co dostarcza, i sposobem sprawdzenia, aby każde zadanie dało się potem przeprowadzić skillem `task`. Małe zadania pomijają ten krok.

## Kiedy go używać

Gdy praca jest za duża na jedno zadanie i trzeba ją rozbić, zanim ktoś zacznie pisać kod.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/plan` |
| Codex CLI | `$plan` albo wybór z `/skills` |
| Cursor | `/plan` w czacie Agent |
| Gemini CLI | `/plan` |
| OpenCode | `/plan` |
| GitHub Copilot | `/plan` w czacie VS Code albo w Copilot CLI |
| Devin | `/plan` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable plan` usuwa go z projektu, a `project enable plan` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 107 | 630 | 750 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
