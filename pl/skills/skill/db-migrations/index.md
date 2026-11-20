# Bezpieczne migracje bazy danych

> Skill db-migrations z agent-skills: przegląda i pisze bezpieczne migracje dla Django, Laravel, Prisma, Alembic, Flyway i Rails.

`db-migrations` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/db-migrations`, `$db-migrations` w Codexie |
| Grupa | Jakość i testy |
| Stosy | `database` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/db-migrations/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/db-migrations/SKILL.md) |

## Co robi

Przegląda i pisze bezpieczne migracje dla Django, Laravel, Prisma, Alembic, Flyway i Rails. Wyłapuje blokady tabel, `NOT NULL` bez wartości domyślnej, usuwanie i zmiany nazw, zmiany typów, niezwalidowane klucze obce, uzupełnianie danych bez podziału na partie i brak wycofania, a potem przepisuje migrację na kroki bez przestoju (rozszerz, potem zawęź).

## Kiedy go używać

Przed migracją dużej tabeli, przy dodawaniu kolumny albo zmianie nazwy i zawsze, gdy chcesz wiedzieć, czy migracja jest bezpieczna.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/db-migrations` |
| Codex CLI | `$db-migrations` albo wybór z `/skills` |
| Cursor | `/db-migrations` w czacie Agent |
| Gemini CLI | `/db-migrations` |
| OpenCode | `/db-migrations` |
| GitHub Copilot | `/db-migrations` w czacie VS Code albo w Copilot CLI |
| Devin | `/db-migrations` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `migration-lint.mjs`: `node scripts/migration-lint.mjs [files...] [--base origin/main] [--all] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `database` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable db-migrations` usuwa go z projektu, a `project enable db-migrations` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 130 | 890 | 1050 | 806 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
