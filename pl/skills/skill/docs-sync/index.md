# Dokumentacja idzie razem z kodem

> Skill docs-sync z agent-skills: sprawdza, czy zmiana widoczna dla użytkownika zaktualizowała w tej samej zmianie polskie i angielskie pliki językowe (te same klucze), .docs/ repozytorium, CHANGELOG.md i odpowiednią stronę docs.skribly.pl, według reguły „dokumentacja idzie razem z kodem” czytanej na bieżąco z planu.

`docs-sync` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/docs-sync`, `$docs-sync` w Codexie |
| Grupa | Dokumentacja |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/docs-sync/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/docs-sync/SKILL.md) |

## Co robi

Sprawdza, czy zmiana widoczna dla użytkownika zaktualizowała w tej samej zmianie polskie i angielskie pliki językowe (te same klucze), `.docs/` repozytorium, `CHANGELOG.md` i odpowiednią stronę docs.skribly.pl, według reguły „dokumentacja idzie razem z kodem” czytanej na bieżąco z planu. Tylko do odczytu: zgłasza braki, a agent je uzupełnia.

## Kiedy go używać

Przed scaleniem zmiany, którą zobaczy użytkownik, gdy chcesz wiedzieć, czy dokumentacja i tłumaczenia nadążają.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/docs-sync` |
| Codex CLI | `$docs-sync` albo wybór z `/skills` |
| Cursor | `/docs-sync` w czacie Agent |
| Gemini CLI | `/docs-sync` |
| OpenCode | `/docs-sync` |
| GitHub Copilot | `/docs-sync` w czacie VS Code albo w Copilot CLI |
| Devin | `/docs-sync` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `docs-sync.mjs`: `node scripts/docs-sync.mjs rule | check [--base develop] [--repo <dir>] [--visible <regex>]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable docs-sync` usuwa go z projektu, a `project enable docs-sync` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 126 | 1088 | 1300 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
