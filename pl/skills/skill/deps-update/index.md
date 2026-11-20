# Bezpieczne aktualizacje zależności

> Skill deps-update z agent-skills: bezpiecznie aktualizuje zależności npm, pnpm, Composer, pip, Poetry i uv: wypisuje nieaktualne pakiety pogrupowane według ryzyka, czyta listy zmian i zmiany łamiące przy wersjach głównych, a potem aktualizuje po jednej grupie, z testami po każdym kroku i osobnym commitem dla każdej grupy.

`deps-update` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/deps-update`, `$deps-update` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/deps-update/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/deps-update/SKILL.md) |

## Co robi

Bezpiecznie aktualizuje zależności npm, pnpm, Composer, pip, Poetry i uv: wypisuje nieaktualne pakiety pogrupowane według ryzyka, czyta listy zmian i zmiany łamiące przy wersjach głównych, a potem aktualizuje po jednej grupie, z testami po każdym kroku i osobnym commitem dla każdej grupy.

## Kiedy go używać

Gdy trzeba zaktualizować pakiety, podnieść wersję frameworka albo naprawić czerwone alerty Dependabota.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/deps-update` |
| Codex CLI | `$deps-update` albo wybór z `/skills` |
| Cursor | `/deps-update` w czacie Agent |
| Gemini CLI | `/deps-update` |
| OpenCode | `/deps-update` |
| GitHub Copilot | `/deps-update` w czacie VS Code albo w Copilot CLI |
| Devin | `/deps-update` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `dependabot.mjs`: `node scripts/dependabot.mjs [dir] [--day monday] [--time 05:00] [--timezone Europe/Warsaw] [--limit 5] [--write]`
- `outdated.mjs`: `node scripts/outdated.mjs [dir] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable deps-update` usuwa go z projektu, a `project enable deps-update` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 109 | 904 | 1000 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
