# Standard repozytorium

> Skill standard z agent-skills: sprawdza repozytorium względem standardu Skribly i prowadzi przez naprawę.

`standard` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/standard`, `$standard` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/standard/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/standard/SKILL.md) |

## Co robi

Sprawdza repozytorium względem standardu Skribly i prowadzi przez naprawę. Jeden skrypt tylko do odczytu uruchamia sprawdzenia, które repozytorium ma we własnym `.tools/` (standard, nagłówki, licencje, wynik builda, słownictwo, synchronizacja TODO, commit źródłowy narzędzi), pliki dla agentów przez CLI agent-skills oraz własne sprawdzenia jednolitych nazw skryptów npm i ścieżki hooków git, a potem wypisuje jeden wiersz na sprawdzenie.

## Kiedy go używać

Gdy chcesz wiedzieć, czy repozytorium trzyma standard, albo doprowadzić je do standardu.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/standard` |
| Codex CLI | `$standard` albo wybór z `/skills` |
| Cursor | `/standard` w czacie Agent |
| Gemini CLI | `/standard` |
| OpenCode | `/standard` |
| GitHub Copilot | `/standard` w czacie VS Code albo w Copilot CLI |
| Devin | `/standard` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`
- `standard.mjs`: `node scripts/standard.mjs [--project <dir>] [--build <dir>] [--json]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable standard` usuwa go z projektu, a `project enable standard` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 156 | 1332 | 1550 | 1762 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
