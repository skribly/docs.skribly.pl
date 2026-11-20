# Oszczędzanie tokenów

> Skill token-saver z agent-skills: zasady pracy, które utrzymują mały kontekst i małe zużycie agenta: szukaj przed czytaniem, czytaj zakresy wierszy zamiast całych plików, skracaj logi, oddawaj pracę mechaniczną skryptom, nie czytaj tego samego drugi raz i wiedz, kiedy zrobić /clear i wznowić pracę z STATE.md.

`token-saver` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/token-saver`, `$token-saver` w Codexie |
| Grupa | Meta |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/token-saver/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/token-saver/SKILL.md) |

## Co robi

Zasady pracy, które utrzymują mały kontekst i małe zużycie agenta: szukaj przed czytaniem, czytaj zakresy wierszy zamiast całych plików, skracaj logi, oddawaj pracę mechaniczną skryptom, nie czytaj tego samego drugi raz i wiedz, kiedy zrobić `/clear` i wznowić pracę z `STATE.md`.

## Kiedy go używać

Gdy sesja robi się długa, kontekst jest za duży albo zbliżasz się do limitu.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/token-saver` |
| Codex CLI | `$token-saver` albo wybór z `/skills` |
| Cursor | `/token-saver` w czacie Agent |
| Gemini CLI | `/token-saver` |
| OpenCode | `/token-saver` |
| GitHub Copilot | `/token-saver` w czacie VS Code albo w Copilot CLI |
| Devin | `/token-saver` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable token-saver` usuwa go z projektu, a `project enable token-saver` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 105 | 772 | 900 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
