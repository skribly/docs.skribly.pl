# Sprzątanie maszynowych naleciałości w diffie

> Skill deslop z agent-skills: czyści wiersze, które agent dodał w bieżącym diffie, z typowych maszynowych naleciałości: komentarzy powtarzających kod, zabezpieczeń przed rzeczami niemożliwymi, zbędnego obchodzenia typów, try/catch, które połyka błędy, rozwlekłych logów, nieużywanych pomocników, stylu innego niż reszta pliku i napompowanego tekstu w dokumentacji.

`deslop` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/deslop`, `$deslop` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/deslop/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/deslop/SKILL.md) |

## Co robi

Czyści wiersze, które agent dodał w bieżącym diffie, z typowych maszynowych naleciałości: komentarzy powtarzających kod, zabezpieczeń przed rzeczami niemożliwymi, zbędnego obchodzenia typów, `try/catch`, które połyka błędy, rozwlekłych logów, nieużywanych pomocników, stylu innego niż reszta pliku i napompowanego tekstu w dokumentacji. Poprawia tylko dodane wiersze i wypisuje, co zmienił. Działa tylko na prośbę.

## Kiedy go używać

Gdy kod napisany przez agenta ma wyglądać jak reszta kodu projektu.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/deslop` |
| Codex CLI | `$deslop` albo wybór z `/skills` |
| Cursor | `/deslop` w czacie Agent |
| Gemini CLI | `/deslop` |
| OpenCode | `/deslop` |
| GitHub Copilot | `/deslop` w czacie VS Code albo w Copilot CLI |
| Devin | `/deslop` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable deslop` usuwa go z projektu, a `project enable deslop` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 131 | 483 | 600 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
