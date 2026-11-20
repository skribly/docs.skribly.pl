# Przegląd projektu graficznego strony

> Skill design-review z agent-skills: przegląda stronę lub komponent według listy rzeczy, które nie przechodzą przeglądu projektu, i listy kontrolnej wspólnej dla wszystkich witryn, obie czytane na bieżąco z planu.

`design-review` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/design-review`, `$design-review` w Codexie |
| Grupa | Jakość i testy |
| Stosy | `web` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/design-review/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/design-review/SKILL.md) |

## Co robi

Przegląda stronę lub komponent według listy rzeczy, które nie przechodzą przeglądu projektu, i listy kontrolnej wspólnej dla wszystkich witryn, obie czytane na bieżąco z planu. Skrypt szuka ikon emoji, gradientów, efektów szkła, ilustracji ze stocków, brakującego tekstu alternatywnego, landmarków, jednego `h1`, reguł tytułu, meta i hreflang, skryptów zewnętrznych i zakazanych słów; resztę ocenia się na zrzutach w szerokości 360 i 1440 px w każdym motywie. Tylko do odczytu.

## Kiedy go używać

Przed scaleniem widocznej zmiany strony, gdy chcesz wiedzieć, czy strona przejdzie przegląd projektu.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/design-review` |
| Codex CLI | `$design-review` albo wybór z `/skills` |
| Cursor | `/design-review` w czacie Agent |
| Gemini CLI | `/design-review` |
| OpenCode | `/design-review` |
| GitHub Copilot | `/design-review` w czacie VS Code albo w Copilot CLI |
| Devin | `/design-review` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `design-review.mjs`: `node scripts/design-review.mjs rules | scan <file|dir>... [--page]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `web` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable design-review` usuwa go z projektu, a `project enable design-review` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 155 | 888 | 1050 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
