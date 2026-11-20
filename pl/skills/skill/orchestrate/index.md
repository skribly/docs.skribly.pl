# Równoległe subagenty

> Skill orchestrate z agent-skills: dzieli dużą pracę na niezależne podzadania i uruchamia je równolegle w subagentach (narzędzie Agent w Claude Code, agenci Codexa, Cursora lub OpenCode albo osobne sesje), z samodzielnymi opisami i jawnym przypisaniem plików, tak aby nigdy nie edytowały tych samych plików, a potem scala i sprawdza wyniki.

`orchestrate` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/orchestrate`, `$orchestrate` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/orchestrate/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/orchestrate/SKILL.md) |

## Co robi

Dzieli dużą pracę na niezależne podzadania i uruchamia je równolegle w subagentach (narzędzie Agent w Claude Code, agenci Codexa, Cursora lub OpenCode albo osobne sesje), z samodzielnymi opisami i jawnym przypisaniem plików, tak aby nigdy nie edytowały tych samych plików, a potem scala i sprawdza wyniki.

## Kiedy go używać

Gdy praca obejmuje wiele niezależnych obszarów, na przykład migrację wielu modułów, refaktoryzację hurtem albo audyt wielu stron.

Nie służy do równoległego uruchamiania testów.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/orchestrate` |
| Codex CLI | `$orchestrate` albo wybór z `/skills` |
| Cursor | `/orchestrate` w czacie Agent |
| Gemini CLI | `/orchestrate` |
| OpenCode | `/orchestrate` |
| GitHub Copilot | `/orchestrate` w czacie VS Code albo w Copilot CLI |
| Devin | `/orchestrate` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable orchestrate` usuwa go z projektu, a `project enable orchestrate` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 153 | 1216 | 1400 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
