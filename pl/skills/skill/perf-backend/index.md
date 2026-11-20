# Wydajność backendu

> Skill perf-backend z agent-skills: znajduje i usuwa problemy wydajności backendu na podstawie dowodów: zapytania N+1 (assertNumQueries i debug toolbar w Django, log zapytań i preventLazyLoading w Laravel, logowanie zapytań ORM), brakujące lub złe indeksy odczytane z EXPLAIN, powtarzaną pracę do zapisania w cache i gorące miejsca CPU znalezione profilerem.

`perf-backend` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/perf-backend`, `$perf-backend` w Codexie |
| Grupa | Jakość i testy |
| Stosy | `backend` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/perf-backend/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/perf-backend/SKILL.md) |

## Co robi

Znajduje i usuwa problemy wydajności backendu na podstawie dowodów: zapytania N+1 (`assertNumQueries` i debug toolbar w Django, log zapytań i `preventLazyLoading` w Laravel, logowanie zapytań ORM), brakujące lub złe indeksy odczytane z `EXPLAIN`, powtarzaną pracę do zapisania w cache i gorące miejsca CPU znalezione profilerem. Zysk potwierdza pomiarem przed zmianą i po niej.

## Kiedy go używać

Gdy endpoint jest wolny, zapytań jest za dużo albo trzeba dodać indeks lub sprofilować backend.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/perf-backend` |
| Codex CLI | `$perf-backend` albo wybór z `/skills` |
| Cursor | `/perf-backend` w czacie Agent |
| Gemini CLI | `/perf-backend` |
| OpenCode | `/perf-backend` |
| GitHub Copilot | `/perf-backend` w czacie VS Code albo w Copilot CLI |
| Devin | `/perf-backend` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `query-log.mjs`: `node scripts/query-log.mjs [log-file] [--min 5] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `backend` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable perf-backend` usuwa go z projektu, a `project enable perf-backend` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 132 | 928 | 1100 | 805 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
