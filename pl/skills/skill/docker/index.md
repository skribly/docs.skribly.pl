# Przegląd Dockera i compose

> Skill docker z agent-skills: przegląda i poprawia pliki Dockerfile i docker compose: kompilacje wieloetapowe, przypięte obrazy bazowe, użytkownik inny niż root, cache warstw i małe obrazy, healthchecki, sekrety poza obrazem i bazy danych niewystawione na wszystkich interfejsach.

`docker` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/docker`, `$docker` w Codexie |
| Grupa | Audyty |
| Stosy | `docker` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/docker/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/docker/SKILL.md) |

## Co robi

Przegląda i poprawia pliki Dockerfile i docker compose: kompilacje wieloetapowe, przypięte obrazy bazowe, użytkownik inny niż root, cache warstw i małe obrazy, healthchecki, sekrety poza obrazem i bazy danych niewystawione na wszystkich interfejsach. Używa hadolint, gdy jest zainstalowany, oraz własnych sprawdzeń.

## Kiedy go używać

Gdy obraz jest za duży, build Dockera jest wolny, kontener działa jako root albo aplikacja ma dopiero dostać Dockera.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/docker` |
| Codex CLI | `$docker` albo wybór z `/skills` |
| Cursor | `/docker` w czacie Agent |
| Gemini CLI | `/docker` |
| OpenCode | `/docker` |
| GitHub Copilot | `/docker` w czacie VS Code albo w Copilot CLI |
| Devin | `/docker` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `docker-lint.mjs`: `node scripts/docker-lint.mjs [files...] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `docker` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable docker` usuwa go z projektu, a `project enable docker` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 120 | 910 | 1050 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
