# Domknięcie gałęzi do develop

> Skill merge z agent-skills: domyka gałąź, której praca jest skończona: sprawdza, czy jest czysta i zielona, dociąga najnowszą gałąź integracyjną, scala do niej (domyślnie develop) tak, jak robi to projekt (commit scalający albo squash, gdzie projekt go używa), robi push, a gałąź i jej worktree usuwa lokalnie i zdalnie dopiero po Twojej zgodzie.

`merge` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/merge`, `$merge` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/merge/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/merge/SKILL.md) |

## Co robi

Domyka gałąź, której praca jest skończona: sprawdza, czy jest czysta i zielona, dociąga najnowszą gałąź integracyjną, scala do niej (domyślnie `develop`) tak, jak robi to projekt (commit scalający albo squash, gdzie projekt go używa), robi push, a gałąź i jej worktree usuwa lokalnie i zdalnie dopiero po Twojej zgodzie. Nigdy nie dotyka gałęzi wydań i nigdy nie robi push z wymuszeniem.

## Kiedy go używać

Gdy gałąź jest gotowa i ma trafić do `develop`, a potem zniknąć razem ze swoim worktree.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/merge` |
| Codex CLI | `$merge` albo wybór z `/skills` |
| Cursor | `/merge` w czacie Agent |
| Gemini CLI | `/merge` |
| OpenCode | `/merge` |
| GitHub Copilot | `/merge` w czacie VS Code albo w Copilot CLI |
| Devin | `/merge` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable merge` usuwa go z projektu, a `project enable merge` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 129 | 545 | 650 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
