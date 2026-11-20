# Profil projektu

> Skill project z agent-skills: wykrywa, jak projekt jest zbudowany i jak się nad nim pracuje (stos, języki, frameworki, menedżer pakietów, polecenia install, dev, build, test, lint, typecheck i format, styl i język commitów, gałąź bazowa, CI i kontenery), i zapisuje to w .skribly/project.json, profilu projektu, który każdy inny skill czyta jako pierwszy.

`project` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/project`, `$project` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/project/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/project/SKILL.md) |

## Co robi

Wykrywa, jak projekt jest zbudowany i jak się nad nim pracuje (stos, języki, frameworki, menedżer pakietów, polecenia install, dev, build, test, lint, typecheck i format, styl i język commitów, gałąź bazowa, CI i kontenery), i zapisuje to w `.skribly/project.json`, profilu projektu, który każdy inny skill czyta jako pierwszy. Nigdy nie nadpisuje wartości ustawionych ręcznie.

## Kiedy go używać

Na początku pracy w nowym repozytorium albo gdy inny skill nie znajduje `.skribly/project.json`.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/project` |
| Codex CLI | `$project` albo wybór z `/skills` |
| Cursor | `/project` w czacie Agent |
| Gemini CLI | `/project` |
| OpenCode | `/project` |
| GitHub Copilot | `/project` w czacie VS Code albo w Copilot CLI |
| Devin | `/project` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `project.mjs`: `node scripts/project.mjs [dir] [--dry-run] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`
- `tasks-folders.mjs`: `node scripts/tasks-folders.mjs [--project <dir>] [--dry-run]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable project` usuwa go z projektu, a `project enable project` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 138 | 771 | 900 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
