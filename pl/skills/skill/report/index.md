# Raport z realizacji

> Skill report z agent-skills: pisze raport z tego, co dostarczono w zadaniu lub funkcji, dla osoby, która o nie prosiła: każde wymaganie specyfikacji lub zgłoszenia powiązane z miejscem w kodzie, sposób sprawdzenia (polecenie lub test i jego wynik), to, czego nie zrobiono i dlaczego, oraz pozostałe ryzyka.

`report` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/report`, `$report` w Codexie |
| Grupa | Dokumentacja |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/report/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/report/SKILL.md) |

## Co robi

Pisze raport z tego, co dostarczono w zadaniu lub funkcji, dla osoby, która o nie prosiła: każde wymaganie specyfikacji lub zgłoszenia powiązane z miejscem w kodzie, sposób sprawdzenia (polecenie lub test i jego wynik), to, czego nie zrobiono i dlaczego, oraz pozostałe ryzyka. Powstaje z prawdziwego diffu i sprawdzeń, nigdy z samego planu.

## Kiedy go używać

Gdy praca jest skończona i trzeba ją opisać zlecającemu albo kierownikowi projektu.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/report` |
| Codex CLI | `$report` albo wybór z `/skills` |
| Cursor | `/report` w czacie Agent |
| Gemini CLI | `/report` |
| OpenCode | `/report` |
| GitHub Copilot | `/report` w czacie VS Code albo w Copilot CLI |
| Devin | `/report` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable report` usuwa go z projektu, a `project enable report` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 112 | 419 | 500 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
