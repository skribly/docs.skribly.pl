# Notatki do wydania

> Skill release-notes z agent-skills: przygotowuje notatki do wydania i wpisy w CHANGELOG.md z historii git od ostatniego tagu, pogrupowane na zmiany łamiące, nowe funkcje, poprawki, wydajność i resztę, pisane dla użytkowników, a nie dla programistów, w stylu listy zmian projektu, z odwołaniami do zgłoszeń i pull requestów i nigdy ze stopką AI.

`release-notes` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/release-notes`, `$release-notes` w Codexie |
| Grupa | Dokumentacja |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/release-notes/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/release-notes/SKILL.md) |

## Co robi

Przygotowuje notatki do wydania i wpisy w `CHANGELOG.md` z historii git od ostatniego tagu, pogrupowane na zmiany łamiące, nowe funkcje, poprawki, wydajność i resztę, pisane dla użytkowników, a nie dla programistów, w stylu listy zmian projektu, z odwołaniami do zgłoszeń i pull requestów i nigdy ze stopką AI.

## Kiedy go używać

Gdy trzeba napisać listę zmian albo notatki do nowej wersji.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/release-notes` |
| Codex CLI | `$release-notes` albo wybór z `/skills` |
| Cursor | `/release-notes` w czacie Agent |
| Gemini CLI | `/release-notes` |
| OpenCode | `/release-notes` |
| GitHub Copilot | `/release-notes` w czacie VS Code albo w Copilot CLI |
| Devin | `/release-notes` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `changes.mjs`: `node scripts/changes.mjs [--since v1.2.0] [--to HEAD] [--all] [--json]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable release-notes` usuwa go z projektu, a `project enable release-notes` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 119 | 730 | 850 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
