# Plan pakietu pracy

> Skill plan-step z agent-skills: pisze lub rozszerza pakiet pracy planu (w stylu steps/F5.md) dokładnie w kształcie, który plan definiuje: nagłówki w kolejności, zadania z plikami, opisem działań i sprawdzeniem, działania właściciela, weryfikacja, kryteria ukończenia, ryzyka i plany awaryjne.

`plan-step` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/plan-step`, `$plan-step` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/plan-step/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/plan-step/SKILL.md) |

## Co robi

Pisze lub rozszerza pakiet pracy planu (w stylu `steps/F5.md`) dokładnie w kształcie, który plan definiuje: nagłówki w kolejności, zadania z plikami, opisem działań i sprawdzeniem, działania właściciela, weryfikacja, kryteria ukończenia, ryzyka i plany awaryjne. Identyfikatory zadań i odwołania do sekcji pozostają stałe. Pisze plan, ale nie wykonuje etapu.

## Kiedy go używać

Gdy trzeba napisać pakiet pracy, rozpisać falę planu na zadania albo dodać zadanie do etapu.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/plan-step` |
| Codex CLI | `$plan-step` albo wybór z `/skills` |
| Cursor | `/plan-step` w czacie Agent |
| Gemini CLI | `/plan-step` |
| OpenCode | `/plan-step` |
| GitHub Copilot | `/plan-step` w czacie VS Code albo w Copilot CLI |
| Devin | `/plan-step` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `plan-step.mjs`: `node scripts/plan-step.mjs template <id> "<name>" [--out <file>] | add-task <file> <plan|build|review|mech> "<title>"`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable plan-step` usuwa go z projektu, a `project enable plan-step` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 133 | 1147 | 1350 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
