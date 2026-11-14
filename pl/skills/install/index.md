# Zainstaluj agent-skills

> Zainstaluj agent-skills dla jednego lub wszystkich ośmiu agentów, w zakresie użytkownika lub projektu, aktualizuj je i usuwaj bez śladu.

## Wymagania

- `git` i **Node.js 20 lub nowszy** (`node --version`). Nie są instalowane żadne pakiety npm: CLI i każdy skrypt skilla korzystają wyłącznie z biblioteki standardowej Node.
- Co najmniej jeden obsługiwany agent: Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot lub Devin.

:::note[Dostęp]
Repozytorium jest obecnie prywatne, dlatego klonowanie wymaga dostępu do organizacji Skribly na GitHubie.
:::

## Instalacja w minutę

<Steps>

1. Sklonuj repozytorium i dodaj polecenie do `PATH`:

   ```bash
   git clone https://github.com/skribly/agent-skills.git ~/agent-skills
   cd ~/agent-skills
   npm link
   ```

2. Zainstaluj wszystkie skille dla każdego agenta w zakresie użytkownika:

   ```bash
   agent-skills install --target all
   ```

3. Wyłącz własne oznaczenie autorstwa Claude Code i sprawdź wynik:

   ```bash
   agent-skills config attribution off
   agent-skills doctor
   ```

4. Uruchom ponownie agenta lub otwórz nowy czat, aby jeszcze raz przeczytał folder ze skillami. Potem wypróbuj `/task 123` w Claude Code lub `$task 123` w Codexie.

</Steps>

W systemie Windows użyj tych samych poleceń w PowerShellu, z `$HOME\agent-skills`. Dowiązania do folderów powstają jako junctions, które nie wymagają uprawnień administratora. Bez `npm link` uruchom `node cli/agent-skills.mjs …` lub `bin\agent-skills.cmd …`.

## Zakres użytkownika czy projektu

| | Zakres użytkownika (domyślnie) | Zakres projektu |
| --- | --- | --- |
| Polecenie | `agent-skills install --target all` | `agent-skills install --target all --project ~/code/shop` |
| Lokalizacja | `~/.claude/skills`, `~/.agents/skills`, … | `<project>/.claude/skills`, `<project>/.agents/skills`, … |
| Sposób | Dowiązania symboliczne do repozytorium | Kopie |
| Aktualizacje | `git pull`, a następnie `agent-skills sync` | `agent-skills sync` po `git pull` |
| Dobre do | Własnego komputera i wszystkich projektów | Udostępniania zespołowi przez repozytorium projektu |

Instalacja w zakresie projektu wykrywa też profil projektu, `.skribly/project.json`; dodaj `--no-detect`, aby pominąć ten krok.

Możesz łączyć oba zakresy: zainstalować wszystko w zakresie użytkownika, a `task` i `commit` dodać do repozytorium projektu zespołowego, żeby koledzy też je dostali. Zakres wybierzesz jawnie opcjami `--scope user|project`, `--link` lub `--copy`.

## Wybór skilli i agentów

```bash
agent-skills install --target claude,codex --skills task,commit,handoff,review,test-loop,token-saver
agent-skills list
```

Opcja `--target` przyjmuje wartości `claude`, `codex`, `cursor`, `gemini`, `opencode`, `windsurf`, `copilot`, `devin` lub `all`. Opcja `--format rules` zapisuje klasyczne formaty dla starszych wersji agentów; zobacz [Obsługiwani agenci](/pl/skills/agents/).

## Zalecana konfiguracja

```bash
agent-skills config attribution off             # Claude Code: no Co-Authored-By trailer or PR footer
cd ~/code/shop && agent-skills hooks install    # per repository: strip AI trailers from any tool
```

Potem skonfiguruj tracker, jak opisano w [Trackery](/pl/skills/trackers/).

## Połącz tracker

```bash
agent-skills tasks check
agent-skills tasks list
agent-skills tasks fetch 482
```

Dane logowania pochodzą ze zmiennych środowiskowych albo z `~/.config/agent-skills/credentials.env`, nigdy z repozytorium. Pierwsze pobranie zapisuje `.tasks/<id>/TASK.md`, kolejne wypisują tylko to, co się zmieniło, a `.tasks/` jest wykluczony lokalnie, więc pobrane zgłoszenia nie trafiają do commitów.

## Aktualizowanie i usuwanie

```bash
cd ~/agent-skills && git pull && agent-skills sync      # refresh everything that was installed
agent-skills uninstall --target all                     # user scope
agent-skills uninstall --target all --project ~/code/shop
```

Informacje o instalacjach są zapisywane w `~/.config/agent-skills/installs.json` wraz z hashem każdego pliku. `uninstall` usuwa tylko elementy zainstalowane przez agent-skills, zachowuje zmodyfikowane przez Ciebie pliki, chyba że przekażesz `--force`, i usuwa foldery, które pozostawi puste. Plik, którego agent-skills nie utworzył, nigdy nie jest nadpisywany; z `--force` najpierw zostaje przeniesiony do `<path>.bak-agent-skills`.

## Dokumentacja CLI

| Polecenie | Zastosowanie |
| --- | --- |
| `agent-skills list [--json]` | Katalog |
| `agent-skills install --target <agents\|all> [--scope user\|project] [--project <dir>] [--skills a,b] [--link\|--copy] [--format skills\|rules] [--dry-run] [--force]` | Instalacja |
| `agent-skills uninstall --target … [--scope] [--project] [--skills]` | Usuwanie tylko zainstalowanych elementów |
| `agent-skills sync` | Ponowne zastosowanie każdej zapisanej instalacji po `git pull` |
| `agent-skills project [--project <dir>] [--dry-run] [--json]` | Wykrywa projekt do `.skribly/project.json`, zachowując wartości ustawione ręcznie |
| `agent-skills agent-files [--project <dir>] [--check] [--force] [--force-mcp] [--skills a,b\|all] [--dry-run] [--json]` | Generuje pliki dla poszczególnych agentów z `AGENTS.md` repozytorium; zobacz [Pliki instrukcji projektu](/pl/skills/agents/#pliki-instrukcji-projektu) |
| `agent-skills doctor [--project <dir>] [--json]` | Agenci, instalacje, trackery, hook, oznaczenie autorstwa i to, czy każdy agent jest skonfigurowany dla repozytorium |
| `agent-skills hooks install\|uninstall\|status [--project <dir>]` | Hook `commit-msg` |
| `agent-skills config attribution off\|on\|status [--project <dir>]` | Oznaczenie autorstwa Claude Code |
| `agent-skills tasks fetch\|attachments\|list\|comment-draft\|event\|detect\|check` | Klient trackera; `event` wypisuje zdarzenie `skills.task.completed` zadania |
| `agent-skills manifest [--check\|--write]` | Sprawdza skille, synchronizuje wspólne pliki i generuje `skills.json` od nowa |

## Ze Skribly Agent

[Skribly Agent](/pl/agent/features/#skille) klonuje agent-skills, pokazuje katalog z `skills.json` (stabilny kontrakt v1 ze schematem JSON), instaluje wybrane skille osobno dla projektów i agentów przez to CLI i może poprosić agenta o dostosowanie ich do projektu. Uruchamia CLI we własnym środowisku uruchomieniowym, więc nie potrzeba tam osobnego Node.js.
