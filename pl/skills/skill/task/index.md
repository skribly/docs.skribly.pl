# Przebieg zadania

> Skill task z agent-skills: prowadzi zadanie od początku do końca, od zgłoszenia w trackerze (Redmine, Jira, GitHub, GitLab, Linear, Skribly Tracker) albo zwykłej prośby, przez analizę, zatwierdzenie, gałąź, implementację etapami i sprawdzenia, do lokalnego commita zrobionego dopiero po Twojej zgodzie.

`task` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/task`, `$task` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/task/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/task/SKILL.md) |

## Co robi

Prowadzi zadanie od początku do końca, od zgłoszenia w trackerze (Redmine, Jira, GitHub, GitLab, Linear, Skribly Tracker) albo zwykłej prośby, przez analizę, zatwierdzenie, gałąź, implementację etapami i sprawdzenia, do lokalnego commita zrobionego dopiero po Twojej zgodzie. Prowadzi aktualny plik `STATE.md` w `.tasks/`, aby każdy agent mógł wznowić pracę.

## Kiedy go używać

Gdy zaczynasz, przejmujesz albo wznawiasz zadanie, i przy dodatkach do zadania: oszacowaniu, planie, opisie pull requesta albo szkicu komentarza w trackerze.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/task 123` |
| Codex CLI | `$task ABC-42` albo wybór z `/skills` |
| Cursor | `/task 123` w czacie Agent |
| Gemini CLI | `/task 123` |
| OpenCode | `/task 123` |
| GitHub Copilot | `/task 123` w czacie VS Code albo w Copilot CLI |
| Devin | `/task 123` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`
- `tasks.mjs`: `node scripts/tasks.mjs`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable task` usuwa go z projektu, a `project enable task` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 136 | 1914 | 2200 | 1790 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
