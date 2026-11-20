# Drobne poprawki na żywo

> Skill improve z agent-skills: prowadzi krótką sesję drobnych poprawek, gdy funkcja już działa: mówisz, co Ci przeszkadza (odstęp, etykieta, wolny krok, przypadek brzegowy), a agent poprawia jedną rzecz naraz najmniejszą zmianą, pokazuje wynik i czeka na kolejną uwagę.

`improve` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/improve`, `$improve` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/improve/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/improve/SKILL.md) |

## Co robi

Prowadzi krótką sesję drobnych poprawek, gdy funkcja już działa: mówisz, co Ci przeszkadza (odstęp, etykieta, wolny krok, przypadek brzegowy), a agent poprawia jedną rzecz naraz najmniejszą zmianą, pokazuje wynik i czeka na kolejną uwagę. Nic poza wskazaną rzeczą się nie zmienia, a każda poprawka jest sprawdzona przed następną.

## Kiedy go używać

Gdy funkcja działa, ale chcesz ją dopracować drobnymi poprawkami, jedna po drugiej.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/improve` |
| Codex CLI | `$improve` albo wybór z `/skills` |
| Cursor | `/improve` w czacie Agent |
| Gemini CLI | `/improve` |
| OpenCode | `/improve` |
| GitHub Copilot | `/improve` w czacie VS Code albo w Copilot CLI |
| Devin | `/improve` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable improve` usuwa go z projektu, a `project enable improve` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 111 | 432 | 500 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
