# Aktualizacja do nowej wersji głównej

> Skill upgrade z agent-skills: przenosi projekt na nową wersję główną frameworka lub środowiska uruchomieniowego (Next.js, React, Angular, Laravel, Django, Rails, Spring Boot, Node, PHP, Python) według przewodnika migracji wersji docelowej, jeden obszar naraz: każdy zaczyna się od testu, który nie przechodzi, a przed kolejnym obszarem wynik jest sprawdzany z Tobą.

`upgrade` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/upgrade`, `$upgrade` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/upgrade/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/upgrade/SKILL.md) |

## Co robi

Przenosi projekt na nową wersję główną frameworka lub środowiska uruchomieniowego (Next.js, React, Angular, Laravel, Django, Rails, Spring Boot, Node, PHP, Python) według przewodnika migracji wersji docelowej, jeden obszar naraz: każdy zaczyna się od testu, który nie przechodzi, a przed kolejnym obszarem wynik jest sprawdzany z Tobą.

## Kiedy go używać

Gdy projekt ma przejść na nową wersję główną frameworka albo środowiska uruchomieniowego.

Nie służy do rutynowych aktualizacji poprawek i wersji pomocniczych (do tego jest `deps-update`).

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/upgrade` |
| Codex CLI | `$upgrade` albo wybór z `/skills` |
| Cursor | `/upgrade` w czacie Agent |
| Gemini CLI | `/upgrade` |
| OpenCode | `/upgrade` |
| GitHub Copilot | `/upgrade` w czacie VS Code albo w Copilot CLI |
| Devin | `/upgrade` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable upgrade` usuwa go z projektu, a `project enable upgrade` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 130 | 935 | 1100 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
