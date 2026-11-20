# Skupiona pętla testów

> Skill test-loop z agent-skills: uruchamia tylko sprawdzenia, których dotyczy bieżąca zmiana (lint, typy, powiązane testy), naprawia błędy w pętli ograniczonej do 3 prób i podaje krótkie podsumowania błędów zamiast pełnych logów.

`test-loop` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/test-loop`, `$test-loop` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/test-loop/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/test-loop/SKILL.md) |

## Co robi

Uruchamia tylko sprawdzenia, których dotyczy bieżąca zmiana (lint, typy, powiązane testy), naprawia błędy w pętli ograniczonej do 3 prób i podaje krótkie podsumowania błędów zamiast pełnych logów. Zatrzymuje się i pyta, gdy ten sam błąd wraca, i nigdy nie edytuje, nie pomija ani nie osłabia testów tylko po to, żeby przeszły.

## Kiedy go używać

Gdy trzeba uruchomić testy, sprawdzenia mają przejść albo testy nie przechodzą.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/test-loop` |
| Codex CLI | `$test-loop` albo wybór z `/skills` |
| Cursor | `/test-loop` w czacie Agent |
| Gemini CLI | `/test-loop` |
| OpenCode | `/test-loop` |
| GitHub Copilot | `/test-loop` w czacie VS Code albo w Copilot CLI |
| Devin | `/test-loop` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`
- `related.mjs`: `node scripts/related.mjs [--base <branch>] [--json]`
- `squeeze.mjs`: `node scripts/squeeze.mjs [--context 8] [--max 12] -- <command ...>`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable test-loop` usuwa go z projektu, a `project enable test-loop` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 109 | 805 | 950 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
