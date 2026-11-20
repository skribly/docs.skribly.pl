# Lista kontrolna wydania

> Skill release z agent-skills: przechodzi listę kontrolną wydania projektu (listy zmian, aktualizacje zależności, wersjonowanie kontraktów, rejestr, synchronizacja kopii, tagi i wydania, cotygodniowa rutyna) i uruchamia sprawdzenia tylko do odczytu przed wydaniem: develop czysty, package.json i VERSION zgodne, wpis w CHANGELOG.md obecny, tag wolny.

`release` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/release`, `$release` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/release/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/release/SKILL.md) |

## Co robi

Przechodzi listę kontrolną wydania projektu (listy zmian, aktualizacje zależności, wersjonowanie kontraktów, rejestr, synchronizacja kopii, tagi i wydania, cotygodniowa rutyna) i uruchamia sprawdzenia tylko do odczytu przed wydaniem: `develop` czysty, `package.json` i `VERSION` zgodne, wpis w `CHANGELOG.md` obecny, tag wolny. Nigdy nie tworzy tagów i niczego nie publikuje; robi to osoba, która przygotowuje wydanie.

## Kiedy go używać

Przed wydaniem, gdy chcesz wiedzieć, czy repozytorium jest gotowe, i przy cotygodniowej rutynie.

Nie służy do podnoszenia wersji, scalania do `main` ani publikowania pakietu.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/release` |
| Codex CLI | `$release` albo wybór z `/skills` |
| Cursor | `/release` w czacie Agent |
| Gemini CLI | `/release` |
| OpenCode | `/release` |
| GitHub Copilot | `/release` w czacie VS Code albo w Copilot CLI |
| Devin | `/release` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `release.mjs`: `node scripts/release.mjs checklist | check <version> [--repo <dir>]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable release` usuwa go z projektu, a `project enable release` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 142 | 850 | 1000 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
