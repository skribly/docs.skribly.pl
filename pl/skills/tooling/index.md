# Narzędzia dla agentów

> Polecenia CLI agent-skills, które czynią agentów programujących bezpieczniejszymi i tańszymi - blokada usuwania, pasek stanu, presety uprawnień tylko do odczytu, test serwerów MCP i zadanie CI z agentem.

:::note[W przygotowaniu]
Polecenia z tej strony wejdą do następnego wydania; wydany agent-skills 0.3.0 jeszcze ich nie ma.
:::

Te polecenia działają obok skilli, choć same skillami nie są. Każde to Node bez zależności, działa na macOS, Linuksie i Windows, a każde, które coś zapisuje, przyjmuje `--dry-run`.

| Polecenie | Co robi |
| --- | --- |
| `agent-skills hooks install --agent-guard` | hook blokady usuwania dla każdego agenta, który ma hooki |
| `agent-skills guard "<command>"` | mówi, czy blokada zatrzymałaby polecenie |
| `agent-skills statusline [install]` | jeden krótki pasek stanu: agent, model, gałąź, zadanie, tokeny sesji |
| `agent-skills permissions [--dry-run]` | listy dozwolonych poleceń tylko do odczytu dla każdego agenta, z `.skribly/project.json` |
| `agent-skills mcp-smoke` | uruchamia każdy skonfigurowany serwer MCP, wypisuje jego narzędzia, wywołuje jedno tylko do odczytu |
| `templates/ci/` | agent programujący w CI po etykiecie zgłoszenia: plan, kod, przegląd, szkic pull requesta |
| `agent-skills init --mcp` | dodaje oficjalny serwer MCP każdego wykrytego frameworka do projektowego pliku MCP każdego agenta |
| `agent-skills rules [--check]` | słownik reguł dla plików, nad którymi pracujesz, i jego sprawdzenia wierszy w projekcie ([Słownik reguł](/pl/skills/rules/)) |
| `templates/nightly/` | nocny raport repozytorium: sprawdzenia, audyt, nieaktualne pakiety, gałęzie agentów |
| `deps-update/scripts/dependabot.mjs` | jeden preset Dependabota dla wykrytego stosu |
| `/upgrade` | nowa wersja główna frameworka albo środowiska według przewodnika migracji, obszar po obszarze |

## Blokada usuwania

```bash
agent-skills hooks install --agent-guard                 # Claude Code, Codex, Gemini CLI, OpenCode
agent-skills hooks install --agent-guard --agents all    # także Cursor i GitHub Copilot
agent-skills hooks status --agent-guard
agent-skills hooks uninstall --agent-guard
```

Blokada czyta każde polecenie powłoki, które agent ma uruchomić. Przy tych agent **pyta Ciebie**, zamiast je wykonać:

- rekurencyjne lub wymuszone usunięcie katalogu głównego systemu plików, folderu domowego lub folderu nad nim, folderu `.git`, czegokolwiek poza projektem albo całego projektu;
- usunięcie naraz 20 lub więcej śledzonych plików;
- `git clean --force` oraz `rsync --delete` do tych miejsc;
- usunięcie ukryte w kodzie podanym w poleceniu (`node -e`, `python -c`, `sh -c`, `eval`, `-Command` w PowerShell).

Usunięcie kilku plików w projekcie albo ignorowanych folderów, takich jak `node_modules` i `dist`, przechodzi. W razie wątpliwości blokada pyta: nieznana opcja liczy się jako rekurencyjna i wymuszona, przez nakładki takie jak `sudo`, `env` i `xargs` blokada patrzy na właściwe polecenie, a ścieżka, której nie da się ustalić, wymaga pytania. Instalacja i odinstalowanie dotykają tylko wpisów samej blokady; Twoje hooki zostają.

| Agent | Plik | Odpowiedź |
| --- | --- | --- |
| Claude Code | `.claude/settings.json` | pyta Ciebie |
| Codex | `.codex/hooks.json` | odmawia z powodem, więc agent pyta Ciebie |
| Gemini CLI | `.gemini/settings.json` | odmawia z powodem, więc agent pyta Ciebie |
| OpenCode | `.opencode/plugins/agent-skills-delete-guard.js` | odmawia z powodem |
| Cursor | `.cursor/hooks.json` | pyta Ciebie |
| GitHub Copilot | `.github/hooks/agent-skills-delete-guard.json` | odmawia z powodem |

Sama blokada leży w `.agents/hooks/delete-guard.mjs`: zrób commit tego folderu razem z plikami hooków albo niech każda osoba raz uruchomi instalację. Codex uruchamia hooki tylko z `codex_hooks = true` w sekcji `[features]` pliku `~/.codex/config.toml`.

## Pasek stanu

```bash
agent-skills statusline install            # Claude Code: statusLine w ~/.claude/settings.json
agent-skills statusline --agent codex      # w tmux albo w znaku zachęty powłoki
```

Jeden wiersz, na przykład `claude · Model X · feat/cart · task 482 · 42k tok (21%)`: agent, model, gałąź git, zadanie z `.tasks/`, którego `STATE.md` wskazuje tę gałąź, i tokeny sesji. Codex i Gemini CLI nie mają własnego paska stanu, więc dla nich wiersz trafia do tmux (`status-right "#(agent-skills statusline --agent codex --no-stdin)"`) albo do znaku zachęty. Cudzy `statusLine` zostaje, chyba że podasz `--force`.

## Presety uprawnień

```bash
agent-skills permissions --dry-run
agent-skills permissions --agents claude,codex
```

Zapisuje listy dozwolonych poleceń tylko do odczytu, aby agenci rzadziej pytali: `git status`, `git diff`, `git log`, `grep` oraz polecenia `test`, `lint` i `typecheck` z profilu, gdy każde jest zwykłym poleceniem. Polecenie z operatorami powłoki, cudzysłowami lub zmiennymi albo ze słowem, które zapisuje, wypycha, usuwa, instaluje lub sięga do sieci (`--fix`, `--write`, `push`, `rm`, `curl`, `npx`), trafia na listę `skipped` i nigdy nie jest dozwolone.

| Agent | Plik |
| --- | --- |
| Claude Code | `.claude/settings.json`, `permissions.allow` |
| Codex | `.codex/rules/agent-skills.rules` |
| Gemini CLI | `.gemini/settings.json`, `tools.allowed` |
| OpenCode | `opencode.json`, `permission.bash` |

Wpisy są dodawane; Twoje własne wpisy allow i deny zostają. Codex, Gemini CLI i OpenCode dopasowują po początku polecenia, więc trzymaj flagi zapisu z dala od poleceń profilu. Cursor, Copilot i Devin trzymają listy dozwolonych poleceń we własnych ustawieniach, których to polecenie nie zapisuje.

## Test serwerów MCP

```bash
agent-skills mcp-smoke --dry-run          # co zostałoby uruchomione
agent-skills mcp-smoke --timeout 15
agent-skills mcp-smoke --server notes --no-call
```

Czyta serwery MCP z `.mcp.json`, `.cursor/mcp.json`, `.gemini/settings.json`, `.vscode/mcp.json`, `opencode.json` i `.codex/config.toml`. Każdy lokalny serwer jest uruchamiany bez powłoki i pytany o narzędzia, a gdy narzędzie deklaruje, że jest tylko do odczytu i nie potrzebuje argumentów, zostaje wywołane; potem serwer jest zatrzymywany. Serwery zdalne są oznaczane jako pominięte i nigdy nie są wywoływane. Jeden wiersz na serwer (`ok`, `fail`, `skip`) i kod wyjścia 1, gdy któryś nie działa. W repozytorium, którego nie pisałeś, najpierw uruchom `--dry-run`: polecenie uruchamia programy skonfigurowane przez projekt.

## Agent programujący w CI

`templates/ci/` w repozytorium zawiera workflow GitHub Actions, plik GitLab CI i `run-agent.mjs`. Dodanie etykiety do zgłoszenia uruchamia agenta w trzech fazach, plan, kod i przegląd, z budżetem tur, minut i zmienionych plików, i kończy się szkicem pull albo merge requesta. Nic nie jest scalane. Sekrety pochodzą tylko z magazynu sekretów CI, a treść zgłoszenia nigdy nie trafia do wiersza powłoki. Ten sam program działa też uruchamiany o stałej porze na Twoim serwerze.

## Serwery MCP frameworków

```bash
agent-skills init                 # wymienia znalezione oficjalne serwery MCP
agent-skills init --mcp --dry-run # co zostałoby dodane
agent-skills init --mcp
```

`init` proponuje serwer MCP, który publikuje dostawca każdego wykrytego frameworka: Next.js (`next-devtools-mcp`), Angular CLI, Svelte, Nuxt (zdalny), Laravel Boost, gdy `laravel/boost` jest zainstalowany, Dart i Flutter, `gopls` dla Go oraz Terraform. Każde polecenie pochodzi ze strony MCP dostawcy. `--mcp` dodaje je do projektowego pliku MCP każdego wybranego agenta, w kształcie, który ten agent czyta: `.mcp.json` (Claude Code), `.cursor/mcp.json`, `.vscode/mcp.json` (Copilot), `.gemini/settings.json` (Gemini CLI i Antigravity) oraz `.codex/config.toml`. Serwer, który już skonfigurowałeś pod tą samą nazwą, nigdy nie jest zmieniany, plik JSON dostaje kopię `.bak-agent-skills`, a drugie uruchomienie niczego nie zmienia. Wynik sprawdzisz przez `agent-skills mcp-smoke`.

## Nocny raport

`templates/nightly/` zawiera `nightly-report.mjs` (Node bez zależności) z usługą i timerem użytkownika systemd oraz README z wierszem cron jako alternatywą. Co noc uruchamia sprawdzenia z `.skribly/nightly.json` albo zwykłe polecenia `test`, `lint`, `typecheck` i `build` z `.skribly/project.json`, potem `npm audit` albo `composer audit` i `npm outdated`, i liczy gałęzie agentów oraz raporty agenta w CI z ostatniej doby. Zapisuje `.skribly/reports/nightly-<data>.md` z jednym wierszem na pozycję: jej stanem, czasem i pierwszym wierszem błędu. Każdy program startuje bez powłoki i z limitem czasu; w repozytorium nic nie jest instalowane, poprawiane, commitowane ani wypychane i nic nie jest nigdzie wysyłane. `--strict` kończy się kodem 1 przy błędzie, dla Twojego własnego powiadamiania.

## Preset Dependabota

```bash
node skills/deps-update/scripts/dependabot.mjs            # wypisz go
node skills/deps-update/scripts/dependabot.mjs --write    # zapisz .github/dependabot.yml
```

Skrypt czyta stos repozytorium i zapisuje jeden wpis na ekosystem i folder (npm, bun, composer, pip, uv, bundler, gomod, cargo, maven, gradle, nuget, docker, docker-compose, terraform i GitHub Actions; bez fikstur testów). Wszystkie wpisy działają co tydzień w ten sam dzień i o tej samej porze (`--day`, `--time`, `--timezone`); aktualizacje minor i patch są grupowane w jeden pull request na ekosystem, wersja główna przychodzi osobno, a aktualizacje bezpieczeństwa są grupowane oddzielnie, żeby przyszły razem. Istniejący inny plik zostaje, chyba że podasz `--force`. Skill `deps-update` go proponuje i zapisuje dopiero po Twojej zgodzie.

## Nowe wersje główne

`/upgrade` (albo `$upgrade` w Codexie) przenosi projekt na nową wersję główną frameworka albo środowiska, na przykład Next.js 16, Laravel 12 albo Django 5. Czyta zainstalowaną wersję z pliku blokady i przewodnik migracji wersji docelowej, a narzędzie dostawcy (`next upgrade`, `ng update`, codemod, `rector`, `django-upgrade`, `rails app:update`) uruchamia dopiero po pokazaniu Ci jego planu. Przewodnik jest dzielony na obszary po jednym commicie. Każdy obszar dostaje najpierw test, który nie przechodzi albo utrwala obecne zachowanie, podbicie wersji przez menedżera pakietów, tylko zmiany wymienione w przewodniku i sprawdzenia, a przed następnym czeka na Twoją zgodę. Obszar, który zostaje czerwony, jest cofany sam. Zwykłe podbicia minor i patch zostają przy `deps-update`.

## Czytaj dalej

- [Słownik reguł](/pl/skills/rules/): `agent-skills rules` i `rules --check`.
- [Jak to działa](/pl/skills/how-it-works/): potok i jego bramki.
- [Commity bez stopek AI](/pl/skills/commits/): hook commit-msg i ustawienie atrybucji.
- [Rozwiązywanie problemów](/pl/skills/troubleshooting/): `agent-skills doctor`.
