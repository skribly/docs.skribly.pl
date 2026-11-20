# Proste pisanie dla ludzi

> Skill writing z agent-skills: daje każdemu tekstowi, który agent pisze dla ludzi (treść commitów, opisy pull requestów, komentarze w trackerze, raporty, dokumentacja, teksty interfejsu, notatki do wydań), jeden prosty styl po polsku albo po angielsku: krótkie zdania, konkret przed wyjaśnieniem, słowa czytelnika zamiast żargonu, bez waty, bez reklamy i bez maszynowych zwrotów.

`writing` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/writing`, `$writing` w Codexie |
| Grupa | Dokumentacja |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/writing/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/writing/SKILL.md) |

## Co robi

Daje każdemu tekstowi, który agent pisze dla ludzi (treść commitów, opisy pull requestów, komentarze w trackerze, raporty, dokumentacja, teksty interfejsu, notatki do wydań), jeden prosty styl po polsku albo po angielsku: krótkie zdania, konkret przed wyjaśnieniem, słowa czytelnika zamiast żargonu, bez waty, bez reklamy i bez maszynowych zwrotów. Na prośbę przepisuje podany tekst.

## Kiedy go używać

Gdy tekst ma brzmieć po ludzku i prosto; tego stylu trzymają się też skille dokumentacji i raportów.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/writing` |
| Codex CLI | `$writing` albo wybór z `/skills` |
| Cursor | `/writing` w czacie Agent |
| Gemini CLI | `/writing` |
| OpenCode | `/writing` |
| GitHub Copilot | `/writing` w czacie VS Code albo w Copilot CLI |
| Devin | `/writing` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `check.mjs`: `node scripts/check.mjs <file|-> [--lang en|pl|both] [--json]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable writing` usuwa go z projektu, a `project enable writing` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 134 | 1357 | 1600 | 580 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
