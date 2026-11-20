# Przekazanie pracy i wznowienie

> Skill handoff z agent-skills: zapisuje lub odtwarza stan pracy w pliku STATE.md w .tasks/, aby inny agent albo świeża sesja po /clear, kompresji kontekstu lub limicie użycia mogły kontynuować bez transkryptu.

`handoff` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/handoff`, `$handoff` w Codexie |
| Grupa | Przepływ pracy |
| Stosy | ogólny |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/handoff/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/handoff/SKILL.md) |

## Co robi

Zapisuje lub odtwarza stan pracy w pliku `STATE.md` w `.tasks/`, aby inny agent albo świeża sesja po `/clear`, kompresji kontekstu lub limicie użycia mogły kontynuować bez transkryptu.

## Kiedy go używać

Gdy zbliżasz się do limitu, przekazujesz pracę innemu agentowi albo wracasz do przerwanego zadania.

Nie służy do zapisywania ustawień w pliku konfiguracyjnym.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/handoff` |
| Codex CLI | `$handoff` albo wybór z `/skills` |
| Cursor | `/handoff` w czacie Agent |
| Gemini CLI | `/handoff` |
| OpenCode | `/handoff` |
| GitHub Copilot | `/handoff` w czacie VS Code albo w Copilot CLI |
| Devin | `/handoff` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Brak: skill to same instrukcje, a agent uruchamia własne polecenia projektu.

## Gdzie pasuje

Skill ogólny: pasuje do każdego projektu, więc `agent-skills init` instaluje go zawsze.
`agent-skills project disable handoff` usuwa go z projektu, a `project enable handoff` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 98 | 783 | 900 | 0 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
