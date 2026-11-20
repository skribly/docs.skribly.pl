# Audyt WCAG 2.2 AA

> Skill wcag-audit z agent-skills: sprawdza zmieniony interfejs względem WCAG 2.2 na poziomie AA: uruchamia axe-core przez Playwright, gdy jest dostępny, a w przeciwnym razie celowaną listę kontrolną, i dla każdego problemu podaje konkretną poprawkę w kodzie (element, kryterium sukcesu, poprawka).

`wcag-audit` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/wcag-audit`, `$wcag-audit` w Codexie |
| Grupa | Audyty |
| Stosy | `web` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/wcag-audit/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/wcag-audit/SKILL.md) |

## Co robi

Sprawdza zmieniony interfejs względem WCAG 2.2 na poziomie AA: uruchamia axe-core przez Playwright, gdy jest dostępny, a w przeciwnym razie celowaną listę kontrolną, i dla każdego problemu podaje konkretną poprawkę w kodzie (element, kryterium sukcesu, poprawka).

## Kiedy go używać

Przy zmianach komponentów, szablonów i stron, gdy trzeba sprawdzić kontrast, obsługę klawiaturą albo czytnik ekranu.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/wcag-audit` |
| Codex CLI | `$wcag-audit` albo wybór z `/skills` |
| Cursor | `/wcag-audit` w czacie Agent |
| Gemini CLI | `/wcag-audit` |
| OpenCode | `/wcag-audit` |
| GitHub Copilot | `/wcag-audit` w czacie VS Code albo w Copilot CLI |
| Devin | `/wcag-audit` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `axe.mjs`: `node scripts/axe.mjs <url> [--selector "<css>"] [--mobile] [--storage auth.json] [--wait ms] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `web` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable wcag-audit` usuwa go z projektu, a `project enable wcag-audit` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 104 | 716 | 850 | 1281 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
