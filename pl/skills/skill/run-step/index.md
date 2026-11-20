# Wykonanie pakietu pracy

> Skill run-step z agent-skills: wykonuje jeden pakiet pracy planu (w stylu steps/F5.md) zadanie po zadaniu według protokołu etapów planu: przeczytaj etap, jedno zadanie naraz w kolejności, krótka gałąź z develop dla każdego zadania, jego sprawdzenie, Conventional Commit z jawnymi ścieżkami, scalenie do develop z --no-ff, push i odhaczenie; main dopiero po audycie.

`run-step` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/run-step`, `$run-step` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/run-step/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/run-step/SKILL.md) |

## Co robi

Wykonuje jeden pakiet pracy planu (w stylu `steps/F5.md`) zadanie po zadaniu według protokołu etapów planu: przeczytaj etap, jedno zadanie naraz w kolejności, krótka gałąź z `develop` dla każdego zadania, jego sprawdzenie, Conventional Commit z jawnymi ścieżkami, scalenie do `develop` z `--no-ff`, push i odhaczenie; `main` dopiero po audycie. Działania, które należą do właściciela, są zapisywane jako zablokowane i nigdy nie są podejmowane.

## Kiedy go używać

Gdy pakiet pracy jest napisany i trzeba go wykonać albo zrobić jego kolejne zadanie.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/run-step` |
| Codex CLI | `$run-step` albo wybór z `/skills` |
| Cursor | `/run-step` w czacie Agent |
| Gemini CLI | `/run-step` |
| OpenCode | `/run-step` |
| GitHub Copilot | `/run-step` w czacie VS Code albo w Copilot CLI |
| Devin | `/run-step` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `run-step.mjs`: `node scripts/run-step.mjs protocol | tasks <file> | next <file> | branch <type> <slug> | guard [--repo <dir>]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable run-step` usuwa go z projektu, a `project enable run-step` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 136 | 1354 | 1600 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
