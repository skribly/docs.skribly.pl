# Bramka konwencji

> Skill gate-convention z agent-skills: bramka przeglądu dla konwencji samego projektu: zbiera reguły z AGENTS.md (także zagnieżdżonych nad zmienionymi plikami), CLAUDE.md i konwencji .skribly/project.json w ponumerowaną listę, sprawdza diff względem każdej reguły i zaczyna raport od znalezisk, każde z wierszem pliku, złamaną regułą, jej źródłem i konkretną poprawką.

`gate-convention` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/gate-convention`, `$gate-convention` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/gate-convention/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/gate-convention/SKILL.md) |

## Co robi

Bramka przeglądu dla konwencji samego projektu: zbiera reguły z `AGENTS.md` (także zagnieżdżonych nad zmienionymi plikami), `CLAUDE.md` i konwencji `.skribly/project.json` w ponumerowaną listę, sprawdza diff względem każdej reguły i zaczyna raport od znalezisk, każde z wierszem pliku, złamaną regułą, jej źródłem i konkretną poprawką. To nie szukanie błędów (`review`) ani przegląd bezpieczeństwa (`security-audit`). Tylko do odczytu, chyba że poprosisz o poprawki.

## Kiedy go używać

Po każdej fazie specyfikacji i przed commitem, gdy trzeba sprawdzić, czy zmiana trzyma się zasad z `AGENTS.md`.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/gate-convention` |
| Codex CLI | `$gate-convention` albo wybór z `/skills` |
| Cursor | `/gate-convention` w czacie Agent |
| Gemini CLI | `/gate-convention` |
| OpenCode | `/gate-convention` |
| GitHub Copilot | `/gate-convention` w czacie VS Code albo w Copilot CLI |
| Devin | `/gate-convention` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `lessons.mjs`: `node scripts/lessons.mjs list [--scope <scope>] [--project <dir>]`
- `rules.mjs`: `node scripts/rules.mjs [changed path...] [--project <dir>] [--json]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable gate-convention` usuwa go z projektu, a `project enable gate-convention` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 156 | 980 | 1150 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
