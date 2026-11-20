# Refaktoryzacja bez zmiany działania

> Skill refactor z agent-skills: refaktoryzuje kod bez zmiany jego działania: zaczyna od testów charakteryzujących, które utrwalają, co kod robi dziś, potem idzie małymi, sprawdzonymi krokami (wydzielenie, zmiana nazwy, przeniesienie, wchłonięcie, zastąpienie warunków), z testami, typami i przeglądem diffu po każdym kroku, bez domieszki pracy nad nowymi funkcjami.

`refactor` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/refactor`, `$refactor` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/refactor/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/refactor/SKILL.md) |

## Co robi

Refaktoryzuje kod bez zmiany jego działania: zaczyna od testów charakteryzujących, które utrwalają, co kod robi dziś, potem idzie małymi, sprawdzonymi krokami (wydzielenie, zmiana nazwy, przeniesienie, wchłonięcie, zastąpienie warunków), z testami, typami i przeglądem diffu po każdym kroku, bez domieszki pracy nad nowymi funkcjami.

## Kiedy go używać

Gdy kod trzeba uporządkować, podzielić plik lub funkcję, usunąć powtórzenia albo ułatwić testowanie, nie zmieniając tego, co robi.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/refactor` |
| Codex CLI | `$refactor` albo wybór z `/skills` |
| Cursor | `/refactor` w czacie Agent |
| Gemini CLI | `/refactor` |
| OpenCode | `/refactor` |
| GitHub Copilot | `/refactor` w czacie VS Code albo w Copilot CLI |
| Devin | `/refactor` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable refactor` usuwa go z projektu, a `project enable refactor` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 128 | 902 | 1050 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
