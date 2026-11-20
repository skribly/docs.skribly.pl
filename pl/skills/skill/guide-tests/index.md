# Przewodnik po testach

> Skill guide-tests z agent-skills: decyduje, co zasługuje na test i gdzie ten test trafia: trzy poziomy (jednostkowe z atrapami na granicy, integracyjne z prawdziwym frameworkiem i bazą danych, end-to-end na działającej aplikacji), jeden folder na dziedzinę w tests/ i przełącznik, który włącza każdy poziom.

`guide-tests` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/guide-tests`, `$guide-tests` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/guide-tests/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/guide-tests/SKILL.md) |

## Co robi

Decyduje, co zasługuje na test i gdzie ten test trafia: trzy poziomy (jednostkowe z atrapami na granicy, integracyjne z prawdziwym frameworkiem i bazą danych, end-to-end na działającej aplikacji), jeden folder na dziedzinę w `tests/` i przełącznik, który włącza każdy poziom. Wszystko odczytuje z testów, które projekt już ma, skryptem mapującym je według poziomu i dziedziny.

## Kiedy go używać

Przed pisaniem testów, gdy nie wiesz, co testować i na jakim poziomie; korzystają z niego też `task`, `spec` i `test-loop`.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/guide-tests` |
| Codex CLI | `$guide-tests` albo wybór z `/skills` |
| Cursor | `/guide-tests` w czacie Agent |
| Gemini CLI | `/guide-tests` |
| OpenCode | `/guide-tests` |
| GitHub Copilot | `/guide-tests` w czacie VS Code albo w Copilot CLI |
| Devin | `/guide-tests` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `test-map.mjs`: `node scripts/test-map.mjs [--project <dir>] [--json]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable guide-tests` usuwa go z projektu, a `project enable guide-tests` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 145 | 1245 | 1400 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
