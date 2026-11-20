# Opis zbudowanej funkcji

> Skill record-docs z agent-skills: pisze lub aktualizuje dokumentację ważnej funkcji albo decyzji, gdy już działa: co robi, jak jest zbudowana (moduły, dane, przepływ), jakie decyzje zapadły i dlaczego, jak ją uruchomić i przetestować oraz jakie ma ograniczenia, w folderze dokumentacji projektu, aby następna osoba lub agent czytali jedną stronę zamiast kodu.

`record-docs` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/record-docs`, `$record-docs` w Codexie |
| Grupa | Dokumentacja |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/record-docs/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/record-docs/SKILL.md) |

## Co robi

Pisze lub aktualizuje dokumentację ważnej funkcji albo decyzji, gdy już działa: co robi, jak jest zbudowana (moduły, dane, przepływ), jakie decyzje zapadły i dlaczego, jak ją uruchomić i przetestować oraz jakie ma ograniczenia, w folderze dokumentacji projektu, aby następna osoba lub agent czytali jedną stronę zamiast kodu. Krótko, rzeczowo, na podstawie kodu takiego, jaki jest.

## Kiedy go używać

Gdy ważna funkcja działa i trzeba opisać, jak jest zbudowana.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/record-docs` |
| Codex CLI | `$record-docs` albo wybór z `/skills` |
| Cursor | `/record-docs` w czacie Agent |
| Gemini CLI | `/record-docs` |
| OpenCode | `/record-docs` |
| GitHub Copilot | `/record-docs` w czacie VS Code albo w Copilot CLI |
| Devin | `/record-docs` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable record-docs` usuwa go z projektu, a `project enable record-docs` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 132 | 449 | 550 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
