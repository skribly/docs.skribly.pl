# Pionowy wycinek

> Skill slice z agent-skills: tworzy szkielet wycinka polecenia lub zapytania albo całego nowego modułu w aplikacji zbudowanej z szablonu aplikacji Skribly, wyprowadzając go z modułu referencyjnego samej aplikacji w chwili uruchomienia (bez kopiowanych konwencji): zwykłe funkcje (input, deps), podział na input.ts, handler.ts lub query.ts i route.ts, handler, który najpierw sprawdza uprawnienia i otwiera jedną transakcję najemcy dla sprawdzonej organizacji, żaden wycinek nie importuje innego, outbox dla polecenia, tool.ts dla MCP na życzenie, seed i przepis na podmianę zależności.

`slice` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/slice`, `$slice` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | `skribly-app` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/slice/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/slice/SKILL.md) |

## Co robi

Tworzy szkielet wycinka polecenia lub zapytania albo całego nowego modułu w aplikacji zbudowanej z szablonu aplikacji Skribly, wyprowadzając go z modułu referencyjnego samej aplikacji w chwili uruchomienia (bez kopiowanych konwencji): zwykłe funkcje `(input, deps)`, podział na `input.ts`, `handler.ts` lub `query.ts` i `route.ts`, handler, który najpierw sprawdza uprawnienia i otwiera jedną transakcję najemcy dla sprawdzonej organizacji, żaden wycinek nie importuje innego, outbox dla polecenia, `tool.ts` dla MCP na życzenie, seed i przepis na podmianę zależności.

## Kiedy go używać

Gdy w aplikacji z szablonu Skribly trzeba dodać endpoint, polecenie, zapytanie, nowy moduł albo podmienić bibliotekę.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/slice` |
| Codex CLI | `$slice` albo wybór z `/skills` |
| Cursor | `/slice` w czacie Agent |
| Gemini CLI | `/slice` |
| OpenCode | `/slice` |
| GitHub Copilot | `/slice` w czacie VS Code albo w Copilot CLI |
| Devin | `/slice` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `slice.mjs`: `node scripts/slice.mjs conventions|module|new|check [args] [--project <dir>] [--reference <module>]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `skribly-app` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable slice` usuwa go z projektu, a `project enable slice` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 177 | 1527 | 1800 | 804 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
