# Testy kontraktowe API

> Skill api-tests z agent-skills: pisze i uruchamia testy kontraktowe i integracyjne API REST i GraphQL: na podstawie specyfikacji OpenAPI, gdy ją ma projekt (Schemathesis, Dredd, Hurl, Postman z newman), albo klientem HTTP samego frameworka.

`api-tests` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/api-tests`, `$api-tests` w Codexie |
| Grupa | Jakość i testy |
| Stosy | `backend` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/api-tests/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/api-tests/SKILL.md) |

## Co robi

Pisze i uruchamia testy kontraktowe i integracyjne API REST i GraphQL: na podstawie specyfikacji OpenAPI, gdy ją ma projekt (Schemathesis, Dredd, Hurl, Postman z newman), albo klientem HTTP samego frameworka. Obejmuje uwierzytelnianie, walidację, przypadki błędów, stronicowanie i idempotentność.

## Kiedy go używać

Gdy trzeba przetestować API, sprawdzić endpointy względem OpenAPI albo dodać testy regresji API lub resolverów GraphQL.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/api-tests` |
| Codex CLI | `$api-tests` albo wybór z `/skills` |
| Cursor | `/api-tests` w czacie Agent |
| Gemini CLI | `/api-tests` |
| OpenCode | `/api-tests` |
| GitHub Copilot | `/api-tests` w czacie VS Code albo w Copilot CLI |
| Devin | `/api-tests` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `openapi-map.mjs`: `node scripts/openapi-map.mjs <spec.yaml|spec.json|URL> [--grep text] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `backend` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable api-tests` usuwa go z projektu, a `project enable api-tests` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 116 | 886 | 1050 | 728 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
