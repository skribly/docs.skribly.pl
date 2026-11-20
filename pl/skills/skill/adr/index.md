# Zapis decyzji architektonicznej

> Skill adr z agent-skills: pisze zapis decyzji architektonicznej w formacie MADR 4.0.0 z czterema polami, których wymaga Skribly (pewność, kiedy wrócić do decyzji, plan wyjścia i potwierdzenie z nazwanym sprawdzeniem), numeruje go i prowadzi indeks folderu .docs/adr.

`adr` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/adr`, `$adr` w Codexie |
| Grupa | Dokumentacja |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/adr/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/adr/SKILL.md) |

## Co robi

Pisze zapis decyzji architektonicznej w formacie MADR 4.0.0 z czterema polami, których wymaga Skribly (pewność, kiedy wrócić do decyzji, plan wyjścia i potwierdzenie z nazwanym sprawdzeniem), numeruje go i prowadzi indeks folderu `.docs/adr`. Nie edytuje przyjętego zapisu: zastępuje go nowym, z linkiem do starego.

## Kiedy go używać

Gdy zespół wybiera jedno rozwiązanie zamiast innego albo zmienia wcześniejszą decyzję, zanim trafi kod, który trudno odwrócić.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/adr` |
| Codex CLI | `$adr` albo wybór z `/skills` |
| Cursor | `/adr` w czacie Agent |
| Gemini CLI | `/adr` |
| OpenCode | `/adr` |
| GitHub Copilot | `/adr` w czacie VS Code albo w Copilot CLI |
| Devin | `/adr` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `adr.mjs`: `node scripts/adr.mjs new "<title>" | supersede <number> "<title>" | guard <file> | check [file...] | index`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable adr` usuwa go z projektu, a `project enable adr` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 116 | 1124 | 1300 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
