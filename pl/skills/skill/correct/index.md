# Zabezpieczenie przed powtarzanym błędem

> Skill correct z agent-skills: zamienia błąd, który agenci wciąż popełniają w tym projekcie, w coś, co go trwale blokuje: typ, który nie pozwala na złe wywołanie, regułę lintera, test, skrypt sprawdzający albo czytelniejszą nazwę, zamiast kolejnej rady.

`correct` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/correct`, `$correct` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/correct/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/correct/SKILL.md) |

## Co robi

Zamienia błąd, który agenci wciąż popełniają w tym projekcie, w coś, co go trwale blokuje: typ, który nie pozwala na złe wywołanie, regułę lintera, test, skrypt sprawdzający albo czytelniejszą nazwę, zamiast kolejnej rady. Wyjaśnia błąd, proponuje zabezpieczenie i dodaje je dopiero po Twojej zgodzie. Działa tylko na prośbę.

## Kiedy go używać

Gdy agenci po raz kolejny robią ten sam błąd i chcesz, żeby nie dało się go powtórzyć.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/correct` |
| Codex CLI | `$correct` albo wybór z `/skills` |
| Cursor | `/correct` w czacie Agent |
| Gemini CLI | `/correct` |
| OpenCode | `/correct` |
| GitHub Copilot | `/correct` w czacie VS Code albo w Copilot CLI |
| Devin | `/correct` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable correct` usuwa go z projektu, a `project enable correct` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 109 | 388 | 450 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
