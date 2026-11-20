# Dopasowanie skilli do projektu

> Skill train-skills z agent-skills: dopasowuje skille do nowego projektu w jednej pętli: uruchamia agent-skills init (stos, polecenia i konwencje do .skribly/project.json, tylko pasujące skille, dla każdego agenta), czyta profil, raz uruchamia sprawdzenia projektu, przez skill learn zapisuje potwierdzone lekcje z zakresem i cytatem file:line albo commitem, po Twojej zgodzie, i proponuje małe skille projektu w .agents/skills, też po Twojej zgodzie.

`train-skills` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/train-skills`, `$train-skills` w Codexie |
| Grupa | Meta |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/train-skills/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/train-skills/SKILL.md) |

## Co robi

Dopasowuje skille do nowego projektu w jednej pętli: uruchamia `agent-skills init` (stos, polecenia i konwencje do `.skribly/project.json`, tylko pasujące skille, dla każdego agenta), czyta profil, raz uruchamia sprawdzenia projektu, przez skill `learn` zapisuje potwierdzone lekcje z zakresem i cytatem `file:line` albo commitem, po Twojej zgodzie, i proponuje małe skille projektu w `.agents/skills`, też po Twojej zgodzie.

## Kiedy go używać

Przy pierwszej sesji w repozytorium bez `.skribly/project.json` albo gdy chcesz dopasować skille do projektu.

Nie służy do trenowania modelu uczenia maszynowego ani do pisania nowego skilla od zera.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/train-skills` |
| Codex CLI | `$train-skills` albo wybór z `/skills` |
| Cursor | `/train-skills` w czacie Agent |
| Gemini CLI | `/train-skills` |
| OpenCode | `/train-skills` |
| GitHub Copilot | `/train-skills` w czacie VS Code albo w Copilot CLI |
| Devin | `/train-skills` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable train-skills` usuwa go z projektu, a `project enable train-skills` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 186 | 1008 | 1150 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
