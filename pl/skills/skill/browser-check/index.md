# Sprawdzenie w przeglądarce bez interfejsu

> Skill browser-check z agent-skills: sprawdza zmianę interfejsu w prawdziwej przeglądarce bez interfejsu (Chromium z Playwright): ładuje stronę, robi zrzut samego zmienionego elementu w szerokości komputera i telefonu oraz zgłasza błędy konsoli i nieudane żądania.

`browser-check` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/browser-check`, `$browser-check` w Codexie |
| Grupa | Jakość i testy |
| Stosy | `web` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/browser-check/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/browser-check/SKILL.md) |

## Co robi

Sprawdza zmianę interfejsu w prawdziwej przeglądarce bez interfejsu (Chromium z Playwright): ładuje stronę, robi zrzut samego zmienionego elementu w szerokości komputera i telefonu oraz zgłasza błędy konsoli i nieudane żądania. Działa tylko za Twoją zgodą, bo obrazy kosztują tokeny.

## Kiedy go używać

Po widocznej zmianie interfejsu, gdy chcesz zobaczyć, czy element wygląda dobrze na komputerze i na telefonie.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/browser-check` |
| Codex CLI | `$browser-check` albo wybór z `/skills` |
| Cursor | `/browser-check` w czacie Agent |
| Gemini CLI | `/browser-check` |
| OpenCode | `/browser-check` |
| GitHub Copilot | `/browser-check` w czacie VS Code albo w Copilot CLI |
| Devin | `/browser-check` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `shot.mjs`: `node scripts/shot.mjs <url> [--selector "<css>"] [--out dir] [--only desktop|mobile] [--wait ms]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `web` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable browser-check` usuwa go z projektu, a `project enable browser-check` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 116 | 668 | 800 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
