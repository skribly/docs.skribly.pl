# Szukanie przyczyny błędu

> Skill debug z agent-skills: szuka prawdziwej przyczyny błędu, zanim zmieni kod: odtwarza go, zawęża celowanymi logami, bisekcją albo minimalnym przykładem, potwierdza przyczynę dowodem, a potem wprowadza najmniejszą poprawkę i sprawdza ją tym samym odtworzeniem.

`debug` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/debug`, `$debug` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/debug/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/debug/SKILL.md) |

## Co robi

Szuka prawdziwej przyczyny błędu, zanim zmieni kod: odtwarza go, zawęża celowanymi logami, bisekcją albo minimalnym przykładem, potwierdza przyczynę dowodem, a potem wprowadza najmniejszą poprawkę i sprawdza ją tym samym odtworzeniem.

## Kiedy go używać

Gdy coś nie działa, wczoraj działało, pojawia się stack trace, test jest niestabilny albo wróciła regresja.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/debug` |
| Codex CLI | `$debug` albo wybór z `/skills` |
| Cursor | `/debug` w czacie Agent |
| Gemini CLI | `/debug` |
| OpenCode | `/debug` |
| GitHub Copilot | `/debug` w czacie VS Code albo w Copilot CLI |
| Devin | `/debug` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`
- `repro-loop.mjs`: `node scripts/repro-loop.mjs run|watch [--name n] [--confirm "question"] [--timeout s] [--max-runs n] -- <cmd> [args]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable debug` usuwa go z projektu, a `project enable debug` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 111 | 819 | 950 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
