# Oszacowanie zadania

> Skill estimate z agent-skills: szacuje zadanie lub funkcję bez zmiany kodu: dzieli je na elementy do dostarczenia z godzinami optymistycznymi, prawdopodobnymi i pesymistycznymi, liczy sumę i przedział PERT oraz wypisuje założenia, ryzyka i pytania gotowe do wysłania osobie, która zleca pracę.

`estimate` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/estimate`, `$estimate` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/estimate/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/estimate/SKILL.md) |

## Co robi

Szacuje zadanie lub funkcję bez zmiany kodu: dzieli je na elementy do dostarczenia z godzinami optymistycznymi, prawdopodobnymi i pesymistycznymi, liczy sumę i przedział PERT oraz wypisuje założenia, ryzyka i pytania gotowe do wysłania osobie, która zleca pracę.

## Kiedy go używać

Gdy ktoś pyta, ile zajmie zadanie, i przed planowaniem pracy.

Nie służy do przyspieszania zestawu testów ani budowania.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/estimate` |
| Codex CLI | `$estimate` albo wybór z `/skills` |
| Cursor | `/estimate` w czacie Agent |
| Gemini CLI | `/estimate` |
| OpenCode | `/estimate` |
| GitHub Copilot | `/estimate` w czacie VS Code albo w Copilot CLI |
| Devin | `/estimate` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable estimate` usuwa go z projektu, a `project enable estimate` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 117 | 660 | 750 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
