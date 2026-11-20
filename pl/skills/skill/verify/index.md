# Sprawdzenie zmiany w działającej aplikacji

> Skill verify z agent-skills: dowodzi, że zmiana działa w uruchomionej aplikacji, a nie tylko w testach jednostkowych: uruchamia projekt tak, jak naprawdę działa (jego własnym poleceniem dev albo Dockera z profilu), czeka, aż odpowie, przechodzi zmienioną ścieżkę żądaniem smoke albo przeglądarką bez interfejsu, uruchamia lint, typy i powiązane testy i w kilku wierszach podaje wynik każdego kroku.

`verify` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/verify`, `$verify` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/verify/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/verify/SKILL.md) |

## Co robi

Dowodzi, że zmiana działa w uruchomionej aplikacji, a nie tylko w testach jednostkowych: uruchamia projekt tak, jak naprawdę działa (jego własnym poleceniem dev albo Dockera z profilu), czeka, aż odpowie, przechodzi zmienioną ścieżkę żądaniem smoke albo przeglądarką bez interfejsu, uruchamia lint, typy i powiązane testy i w kilku wierszach podaje wynik każdego kroku. Nigdy nie otwiera widocznej przeglądarki i nie uruchamia drugiej kopii działającej aplikacji.

## Kiedy go używać

Gdy chcesz wiedzieć, czy zmiana naprawdę działa, zanim trafi do commita.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/verify` |
| Codex CLI | `$verify` albo wybór z `/skills` |
| Cursor | `/verify` w czacie Agent |
| Gemini CLI | `/verify` |
| OpenCode | `/verify` |
| GitHub Copilot | `/verify` w czacie VS Code albo w Copilot CLI |
| Devin | `/verify` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `running.mjs`: `node scripts/running.mjs [dir] [--log [lines]] [--json]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable verify` usuwa go z projektu, a `project enable verify` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 135 | 669 | 700 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
