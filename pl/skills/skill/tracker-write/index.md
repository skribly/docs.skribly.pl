# Szkice tekstów do trackera i przeglądu

> Skill tracker-write z agent-skills: przygotowuje teksty, które programista wysyła innym, do Twojego zatwierdzenia, zanim cokolwiek zostanie wysłane: nowe zgłoszenie, komentarz do zgłoszenia (postęp, pytanie, oszacowanie, przekazanie pracy), opis pull albo merge requesta, odpowiedź w przeglądzie.

`tracker-write` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/tracker-write`, `$tracker-write` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/tracker-write/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/tracker-write/SKILL.md) |

## Co robi

Przygotowuje teksty, które programista wysyła innym, do Twojego zatwierdzenia, zanim cokolwiek zostanie wysłane: nowe zgłoszenie, komentarz do zgłoszenia (postęp, pytanie, oszacowanie, przekazanie pracy), opis pull albo merge requesta, odpowiedź w przeglądzie. Powstają z plików zadania, diffu i sprawdzeń, krótko i w języku czytelnika; nic nie trafia do trackera, dopóki nie powiesz.

## Kiedy go używać

Gdy trzeba napisać komentarz do zgłoszenia, opis pull requesta albo nowe zgłoszenie.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/tracker-write` |
| Codex CLI | `$tracker-write` albo wybór z `/skills` |
| Cursor | `/tracker-write` w czacie Agent |
| Gemini CLI | `/tracker-write` |
| OpenCode | `/tracker-write` |
| GitHub Copilot | `/tracker-write` w czacie VS Code albo w Copilot CLI |
| Devin | `/tracker-write` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable tracker-write` usuwa go z projektu, a `project enable tracker-write` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 123 | 472 | 550 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
