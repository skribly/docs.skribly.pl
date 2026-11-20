# Konfiguracja CI

> Skill ci-setup z agent-skills: tworzy lub naprawia potoki CI (GitHub Actions albo GitLab CI) dla wykrytego stosu: lint, sprawdzenie typów, testy z prawdziwymi bazami danych, build, cache zależności, macierz tylko tam, gdzie się opłaca, limity czasu i ostrożne użycie sekretów.

`ci-setup` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/ci-setup`, `$ci-setup` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/ci-setup/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/ci-setup/SKILL.md) |

## Co robi

Tworzy lub naprawia potoki CI (GitHub Actions albo GitLab CI) dla wykrytego stosu: lint, sprawdzenie typów, testy z prawdziwymi bazami danych, build, cache zależności, macierz tylko tam, gdzie się opłaca, limity czasu i ostrożne użycie sekretów. Sprawdza istniejące workflow pod kątem wstrzyknięć skryptów, złego użycia `pull_request_target` i nieprzypiętych akcji.

## Kiedy go używać

Gdy projekt potrzebuje CI, potok nie działa albo jest wolny, albo trzeba zabezpieczyć istniejące workflow.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/ci-setup` |
| Codex CLI | `$ci-setup` albo wybór z `/skills` |
| Cursor | `/ci-setup` w czacie Agent |
| Gemini CLI | `/ci-setup` |
| OpenCode | `/ci-setup` |
| GitHub Copilot | `/ci-setup` w czacie VS Code albo w Copilot CLI |
| Devin | `/ci-setup` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `ci-lint.mjs`: `node scripts/ci-lint.mjs [files...] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable ci-setup` usuwa go z projektu, a `project enable ci-setup` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 124 | 898 | 1050 | 1578 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
