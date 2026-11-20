# Co zmiana psuje poza diffem

> Skill blast-radius z agent-skills: przed commitem lub scaleniem szuka tego, co zmiana może zepsuć poza własnym diffem: każdego wywołania, importu, trasy, zadania w tle, migracji i konfiguracji, które zależą od zmienionego kodu.

`blast-radius` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/blast-radius`, `$blast-radius` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/blast-radius/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/blast-radius/SKILL.md) |

## Co robi

Przed commitem lub scaleniem szuka tego, co zmiana może zepsuć poza własnym diffem: każdego wywołania, importu, trasy, zadania w tle, migracji i konfiguracji, które zależą od zmienionego kodu. Nazywa jedno założenie, na którym stoi zmiana, i sprawdza je uruchomionym kodem (testem, skryptem, zapytaniem), a nie czytaniem. Ryzyko opisuje w kilku wierszach.

## Kiedy go używać

Przed ryzykownym commitem, gdy zmienia się eksport, trasa, schemat, konfiguracja albo wspólny moduł.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/blast-radius` |
| Codex CLI | `$blast-radius` albo wybór z `/skills` |
| Cursor | `/blast-radius` w czacie Agent |
| Gemini CLI | `/blast-radius` |
| OpenCode | `/blast-radius` |
| GitHub Copilot | `/blast-radius` w czacie VS Code albo w Copilot CLI |
| Devin | `/blast-radius` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable blast-radius` usuwa go z projektu, a `project enable blast-radius` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 120 | 500 | 600 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
