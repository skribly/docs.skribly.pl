# Dane startowe modułu

> Skill seed z agent-skills: pisze lub rozszerza deterministyczne dane startowe (seedy) modułu w aplikacji zbudowanej z szablonu aplikacji Skribly: seed:minimal i seed:demo, stałe identyfikatory i stały zegar, dane demo po polsku i po angielsku dla organizacji demo, zapisywane w transakcji najemcy, aby działało zabezpieczenie na poziomie wierszy.

`seed` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/seed`, `$seed` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | `skribly-app` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/seed/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/seed/SKILL.md) |

## Co robi

Pisze lub rozszerza deterministyczne dane startowe (seedy) modułu w aplikacji zbudowanej z szablonu aplikacji Skribly: `seed:minimal` i `seed:demo`, stałe identyfikatory i stały zegar, dane demo po polsku i po angielsku dla organizacji demo, zapisywane w transakcji najemcy, aby działało zabezpieczenie na poziomie wierszy. Wzoruje się na seedzie referencyjnym aplikacji, jej tożsamości demo i schemacie modułu, czytanych w chwili uruchomienia, zamiast trzymać ich kopię.

## Kiedy go używać

Gdy moduł aplikacji z szablonu Skribly potrzebuje danych demo albo seedów.

Nie służy do ustawiania ziarna generatora liczb losowych.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/seed` |
| Codex CLI | `$seed` albo wybór z `/skills` |
| Cursor | `/seed` w czacie Agent |
| Gemini CLI | `/seed` |
| OpenCode | `/seed` |
| GitHub Copilot | `/seed` w czacie VS Code albo w Copilot CLI |
| Devin | `/seed` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `seed.mjs`: `node scripts/seed.mjs inspect|write|check [--module <m>] [--rows <file>] [--project <dir>] [--reference <m>]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `skribly-app` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable seed` usuwa go z projektu, a `project enable seed` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 152 | 1232 | 1450 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
