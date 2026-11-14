# Rozwiązywanie problemów z agent-skills

> Rozwiązania typowych problemów z agent-skills — agenci, którzy nie widzą skilli, konflikty przy instalacji, linki w Windows, błędy trackerów, hook commitów i narzędzia opcjonalne.

## Agent nie widzi skilli

- Uruchom `agent-skills doctor`: pokaże, których agentów wykryto i gdzie zainstalowano skille.
- Uruchom agenta ponownie albo otwórz nowy czat; większość agentów skanuje foldery skilli przy starcie.
- Sprawdź lokalizację dla swojego agenta na stronie [Obsługiwani agenci](/pl/skills/agents/). Starsze wersje mogą wymagać `--format rules`.
- Codex pokazuje skill dwa razy: stare kopie leżą w przestarzałym `~/.codex/skills`. `doctor` o nich ostrzega; usuń je.
- Cursor, OpenCode lub Copilot pokazują skill w projekcie dwa razy: czytają też `.claude/skills`. Zainstaluj Claude w zakresie użytkownika, a pozostałych w zakresie projektu, albo odwrotnie.

## `agent-skills: command not found`

Uruchom `npm link` w repozytorium, wywołaj `node ~/agent-skills/cli/agent-skills.mjs` albo podlinkuj `bin/agent-skills` w folderze z `PATH` (`ln -s ~/agent-skills/bin/agent-skills ~/.local/bin/`). W Windows użyj `bin\agent-skills.cmd`.

## „exists and was not installed by agent-skills”

Plik lub folder o tej samej nazwie już tam był, więc go nie ruszono. Porównaj go, a potem uruchom polecenie jeszcze raz z `--force`; stary element zostanie przeniesiony do `<path>.bak-agent-skills`.

## `sync` lub `uninstall` pomija kopię, którą edytowałem

To celowe: ręcznie zmienione kopie nigdy nie są nadpisywane ani usuwane. Zachowaj swoją zmianę albo użyj `--force`, aby kopię zastąpić lub usunąć.

## Linki w Windows

Instalacje w zakresie użytkownika tworzą junctions (dowiązania folderów), które nie wymagają uprawnień administratora ani trybu programisty. Jeśli junction nie da się utworzyć, na przykład na niektórych dyskach sieciowych, zainstaluj z `--copy` i po aktualizacjach uruchamiaj `agent-skills sync`.

## WSL i Windows jednocześnie

Każde środowisko ma własny folder domowy i własnych agentów. Zainstaluj w obu, jeśli chcesz z jednego klonu, uruchamiając `agent-skills install` w każdym środowisku.

## Problemy z trackerem

- `access denied (HTTP 401/403)`: zły lub wygasły token albo brakujący zakres. `agent-skills tasks check` sprawdza każdy tracker.
- `cannot resolve` lub `no connection`: VPN albo URL. `TLS problem`: ustaw `NODE_EXTRA_CA_CERTS` na certyfikat CA Twojej firmy.
- `ENG-12 could be Jira or Linear` (albo Skribly Tracker): dodaj `Tracker: jira` (albo `linear`, `skribly`) do `.tasks/workflow.md`, ustaw `AGENT_SKILLS_TRACKER` lub przekaż `--tracker`.
- GitHub bez tokena: publiczne zgłoszenia działają przy 60 żądaniach na godzinę; prywatne wymagają `GITHUB_TOKEN` lub `gh auth login`.

## PageSpeed Insights zwraca HTTP 429

Limit bez klucza jest wspólny i często się wyczerpuje. Utwórz klucz API dla PageSpeed Insights API i ustaw `PSI_API_KEY` albo zmierz lokalnie z `--local`, co wymaga Chrome.

## Brakuje Playwright lub axe-core

`browser-check`, `wcag-audit` i `e2e-tests` najpierw szukają Playwright w projekcie, a potem globalnie. Zainstaluj go tylko wtedy, gdy chcesz: `npm i -D playwright axe-core && npx playwright install chromium`. Bez niego skille przechodzą na ręczne listy kontrolne i mówią o tym.

## Hook commit-msg się nie uruchomił

- Uruchom `agent-skills hooks status` w tym repozytorium. Hooki działają w obrębie jednego repozytorium.
- husky, lefthook i podobne narzędzia ustawiają `core.hooksPath`; dodaj wypisany wiersz do ich hooka `commit-msg`.
- `node` musi być w `PATH` widocznym dla gita. Klienty graficzne czasem mają okrojony `PATH`.

## Czy to wysyła mój kod gdziekolwiek?

Nie. CLI łączy się tylko z Twoim trackerem (gdy pobierasz dane lub jawnie coś publikujesz), z OSV.dev albo PageSpeed Insights, gdy uruchamiasz te audyty, oraz z rejestrami pakietów przez Twojego menedżera pakietów. Nic więcej nie jest zbierane ani wysyłane.

## Jak używać tego w zespole?

Zainstaluj w zakresie projektu (`--project .`) i zacommituj `.claude/skills` oraz `.agents/skills`, żeby wszyscy mieli te same skille. `.tasks/` pozostaje osobisty. Wspólne konwencje (gałąź bazowa, wzorzec commitów, polecenia sprawdzające) umieść w `AGENTS.md`, a na ich podstawie powstaje propozycja `.tasks/workflow.md` każdego dewelopera. Każdy deweloper instaluje hook commitów we własnym klonie.
