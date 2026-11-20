# Tłumaczenia i i18n

> Skill i18n z agent-skills: pilnuje kompletnych i poprawnych tłumaczeń: szuka brakujących, pustych i nadmiarowych kluczy w każdym języku, niezgodnych placeholderów oraz kluczy użytych w kodzie, których brakuje w katalogu (JSON, YAML, gettext PO i pliki językowe Laravel), potem dodaje tłumaczenia w formacie projektu i wyciąga teksty wpisane na stałe w interfejsie.

`i18n` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/i18n`, `$i18n` w Codexie |
| Grupa | Jakość i testy |
| Stosy | `web` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/i18n/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/i18n/SKILL.md) |

## Co robi

Pilnuje kompletnych i poprawnych tłumaczeń: szuka brakujących, pustych i nadmiarowych kluczy w każdym języku, niezgodnych placeholderów oraz kluczy użytych w kodzie, których brakuje w katalogu (JSON, YAML, gettext PO i pliki językowe Laravel), potem dodaje tłumaczenia w formacie projektu i wyciąga teksty wpisane na stałe w interfejsie.

## Kiedy go używać

Gdy brakuje tłumaczeń, dochodzą nowe teksty albo nowy język, albo komponent trzeba przygotować do tłumaczenia.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/i18n` |
| Codex CLI | `$i18n` albo wybór z `/skills` |
| Cursor | `/i18n` w czacie Agent |
| Gemini CLI | `/i18n` |
| OpenCode | `/i18n` |
| GitHub Copilot | `/i18n` w czacie VS Code albo w Copilot CLI |
| Devin | `/i18n` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `i18n-check.mjs`: `node scripts/i18n-check.mjs [dir] [--base en] [--usage] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `web` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable i18n` usuwa go z projektu, a `project enable i18n` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 115 | 805 | 950 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
