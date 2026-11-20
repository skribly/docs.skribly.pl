# Lekcje projektu

> Skill learn z agent-skills: zapisuje potwierdzoną lekcję o bieżącym projekcie (działające polecenie, konwencję zespołu, pułapkę, która kosztowała czas) w .skribly/lessons.md w jednym zakresie (All, CI albo jeden moduł), z datą i nazwą skilla, z którego pochodzi, i tylko po Twojej zgodzie, aby każdy skill następnym razem startował mądrzejszy.

`learn` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/learn`, `$learn` w Codexie |
| Grupa | Meta |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/learn/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/learn/SKILL.md) |

## Co robi

Zapisuje potwierdzoną lekcję o bieżącym projekcie (działające polecenie, konwencję zespołu, pułapkę, która kosztowała czas) w `.skribly/lessons.md` w jednym zakresie (`All`, `CI` albo jeden moduł), z datą i nazwą skilla, z którego pochodzi, i tylko po Twojej zgodzie, aby każdy skill następnym razem startował mądrzejszy. Wypisuje też, przycina i przenosi lekcje do `.skribly/project.json` oraz podaje tylko lekcje dla plików, które zmienia diff. Nigdy nie zapisuje sekretów.

## Kiedy go używać

Gdy coś warto zapamiętać na następny raz; `task`, `test-loop`, `review` i `debug` proponują lekcję same na końcu pracy.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/learn` |
| Codex CLI | `$learn` albo wybór z `/skills` |
| Cursor | `/learn` w czacie Agent |
| Gemini CLI | `/learn` |
| OpenCode | `/learn` |
| GitHub Copilot | `/learn` w czacie VS Code albo w Copilot CLI |
| Devin | `/learn` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable learn` usuwa go z projektu, a `project enable learn` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 157 | 883 | 1050 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
