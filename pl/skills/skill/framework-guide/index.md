# Kod frameworka dla zainstalowanej wersji

> Skill framework-guide z agent-skills: pisze kod frameworka pod wersję zainstalowaną w projekcie, a nie tę z pamięci modelu: odczytuje zainstalowaną wersję i jej dokumentację (indeks dokumentacji w AGENTS.md, node_modules albo vendor), przed użyciem potwierdza każde API w zainstalowanym pakiecie i sprawdza typowe błędy tej wersji głównej (Next.js, React, Vue, Angular, Express, Tailwind, Laravel, Django, Pydantic, SQLAlchemy, Rails, Spring Boot, .NET, Flutter, manifesty Kubernetes).

`framework-guide` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/framework-guide`, `$framework-guide` w Codexie |
| Grupa | Jakość i testy |
| Stosy | ogólny |
| Wydanie | W przygotowaniu, wejdzie do następnego wydania |
| Źródło | [skills/framework-guide/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/framework-guide/SKILL.md) |

## Co robi

Pisze kod frameworka pod wersję zainstalowaną w projekcie, a nie tę z pamięci modelu: odczytuje zainstalowaną wersję i jej dokumentację (indeks dokumentacji w `AGENTS.md`, `node_modules` albo `vendor`), przed użyciem potwierdza każde API w zainstalowanym pakiecie i sprawdza typowe błędy tej wersji głównej (Next.js, React, Vue, Angular, Express, Tailwind, Laravel, Django, Pydantic, SQLAlchemy, Rails, Spring Boot, .NET, Flutter, manifesty Kubernetes).

## Kiedy go używać

Gdy kod ma pasować do wersji frameworka, której używa projekt, albo agent użył API, którego ta wersja nie ma.

Nie służy do przejścia na nową wersję (do tego jest `upgrade`).

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/framework-guide` |
| Codex CLI | `$framework-guide` albo wybór z `/skills` |
| Cursor | `/framework-guide` w czacie Agent |
| Gemini CLI | `/framework-guide` |
| OpenCode | `/framework-guide` |
| GitHub Copilot | `/framework-guide` w czacie VS Code albo w Copilot CLI |
| Devin | `/framework-guide` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable framework-guide` usuwa go z projektu, a `project enable framework-guide` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 175 | 783 | 850 | 5793 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
