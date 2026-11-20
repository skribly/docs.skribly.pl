# Numer newslettera

> Skill newsletter z agent-skills: przygotowuje szkic jednego numeru Skribly Newsletter (wiadomości o AI dla programistów oraz nowości w Skribly) po polsku i po angielsku.

`newsletter` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/newsletter`, `$newsletter` w Codexie |
| Grupa | Dokumentacja |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/newsletter/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/newsletter/SKILL.md) |

## Co robi

Przygotowuje szkic jednego numeru Skribly Newsletter (wiadomości o AI dla programistów oraz nowości w Skribly) po polsku i po angielsku. Zbiera kandydatów z wybranej listy publicznych źródeł, wybiera najlepsze, otwiera i sprawdza każdą pozycję u pierwotnego źródła, pisze `pl.md` i `en.md` w formacie numeru ze źródłem pod każdą pozycją, dodaje część „Ze Skribly” z publicznych stron i list zmian, sprawdza folder i zapisuje go jako szkic. Nigdy nie wysyła i nigdy nie zatwierdza.

## Kiedy go używać

Gdy trzeba przygotować kolejny numer newslettera albo zebrać do niego wiadomości o AI.

Nie służy do formularza zapisu, pola zgody na subskrypcję ani wysyłki do subskrybentów.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/newsletter` |
| Codex CLI | `$newsletter` albo wybór z `/skills` |
| Cursor | `/newsletter` w czacie Agent |
| Gemini CLI | `/newsletter` |
| OpenCode | `/newsletter` |
| GitHub Copilot | `/newsletter` w czacie VS Code albo w Copilot CLI |
| Devin | `/newsletter` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `check-issue.mjs`: `node scripts/check-issue.mjs <issue folder> [--deny <file>] [--json]`
- `collect.mjs`: `node scripts/collect.mjs [--days 14] [--issues <content/issues>] [--sources <file>] [--topic a,b] [--only id,id]`
- `save-draft.mjs`: `node scripts/save-draft.mjs <issue folder> [--dry-run] [--timeout 20000]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable newsletter` usuwa go z projektu, a `project enable newsletter` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 187 | 1980 | 2250 | 1212 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
