# Audyt bezpieczeństwa

> Skill security-audit z agent-skills: sprawdza kod albo bieżący diff pod kątem bezpieczeństwa: wycieki sekretów, podatne zależności (npm, pnpm, yarn, Composer, pip przez ich własne narzędzia audytu albo bazę OSV) i niebezpieczne wzorce, takie jak wstrzyknięcia, XSS, niebezpieczna deserializacja, przechodzenie ścieżek, SSRF i brak autoryzacji.

`security-audit` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/security-audit`, `$security-audit` w Codexie |
| Grupa | Audyty |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/security-audit/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/security-audit/SKILL.md) |

## Co robi

Sprawdza kod albo bieżący diff pod kątem bezpieczeństwa: wycieki sekretów, podatne zależności (npm, pnpm, yarn, Composer, pip przez ich własne narzędzia audytu albo bazę OSV) i niebezpieczne wzorce, takie jak wstrzyknięcia, XSS, niebezpieczna deserializacja, przechodzenie ścieżek, SSRF i brak autoryzacji. Każde znalezisko podaje z wagą, dowodem i konkretną poprawką. Tylko do odczytu.

## Kiedy go używać

Przed wydaniem lub scaleniem i zawsze, gdy zmienia się uwierzytelnianie, obsługa danych wejściowych albo zależności.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/security-audit` |
| Codex CLI | `$security-audit` albo wybór z `/skills` |
| Cursor | `/security-audit` w czacie Agent |
| Gemini CLI | `/security-audit` |
| OpenCode | `/security-audit` |
| GitHub Copilot | `/security-audit` w czacie VS Code albo w Copilot CLI |
| Devin | `/security-audit` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `deps.mjs`: `node scripts/deps.mjs [dir] [--osv] [--offline] [--json]`
- `secrets.mjs`: `node scripts/secrets.mjs`

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable security-audit` usuwa go z projektu, a `project enable security-audit` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 139 | 1596 | 1850 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
