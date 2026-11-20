# Dokumentacja wiedzy o projekcie

> Skill project-docs z agent-skills: tworzy lub odświeża folder wiedzy .docs/ repozytorium (przegląd, architektura, moduły, przepływ danych, uruchamianie i testy, decyzje) oraz krótkie AGENTS.md i CLAUDE.md, które na niego wskazują, aby agenci wczytywali wiedzę o projekcie dopiero wtedy, gdy jej potrzebują, a nie w każdej sesji.

`project-docs` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/project-docs`, `$project-docs` w Codexie |
| Grupa | Dokumentacja |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/project-docs/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/project-docs/SKILL.md) |

## Co robi

Tworzy lub odświeża folder wiedzy `.docs/` repozytorium (przegląd, architektura, moduły, przepływ danych, uruchamianie i testy, decyzje) oraz krótkie `AGENTS.md` i `CLAUDE.md`, które na niego wskazują, aby agenci wczytywali wiedzę o projekcie dopiero wtedy, gdy jej potrzebują, a nie w każdej sesji.

## Kiedy go używać

Gdy projekt nie ma dokumentacji dla agentów, `AGENTS.md` jest za długi albo dokumentacja nie nadąża za zmianami.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/project-docs` |
| Codex CLI | `$project-docs` albo wybór z `/skills` |
| Cursor | `/project-docs` w czacie Agent |
| Gemini CLI | `/project-docs` |
| OpenCode | `/project-docs` |
| GitHub Copilot | `/project-docs` w czacie VS Code albo w Copilot CLI |
| Devin | `/project-docs` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `repo-map.mjs`: `node scripts/repo-map.mjs [dir] [--depth 3] [--max-entries 400]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable project-docs` usuwa go z projektu, a `project enable project-docs` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 115 | 1301 | 1500 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
