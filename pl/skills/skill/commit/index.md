# Commit w stylu projektu

> Skill commit z agent-skills: proponuje wiadomość commita w konwencji projektu (z .tasks/workflow.md albo wykrytej z historii git), pokazuje ją z dokładną listą plików i robi commit dopiero po Twojej wyraźnej zgodzie.

`commit` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/commit`, `$commit` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/commit/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/commit/SKILL.md) |

## Co robi

Proponuje wiadomość commita w konwencji projektu (z `.tasks/workflow.md` albo wykrytej z historii git), pokazuje ją z dokładną listą plików i robi commit dopiero po Twojej wyraźnej zgodzie. Nigdy nie dodaje `Co-Authored-By`, „Generated with” ani innej stopki i nie robi push, scalenia ani poprawki commita, jeśli o to nie prosisz.

## Kiedy go używać

Gdy zmiany są gotowe do commita, potrzebujesz treści wiadomości albo chcesz podzielić zmiany na czyste commity.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/commit` |
| Codex CLI | `$commit` albo wybór z `/skills` |
| Cursor | `/commit` w czacie Agent |
| Gemini CLI | `/commit` |
| OpenCode | `/commit` |
| GitHub Copilot | `/commit` w czacie VS Code albo w Copilot CLI |
| Devin | `/commit` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `convention.mjs`: `node scripts/convention.mjs [--limit 60] [--json]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable commit` usuwa go z projektu, a `project enable commit` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 125 | 771 | 900 | 1494 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
