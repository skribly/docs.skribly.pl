# Polecenie skribly

> Steruj panelami i agentami Skribly Agent spoza okna poleceniem skribly: cele, każde polecenie, kody wyjścia, przepisy na recenzenta i równoległe worktree oraz bezpieczeństwo.

Polecenie `skribly` pozwala agentom, skryptom i Tobie sterować panelami spoza okna. Agent może uruchomić recenzenta obok siebie, poczekać na niego i przeczytać wynik. Te same operacje jako narzędzia MCP daje agentom [serwer MCP Skribly](/pl/agent/skribly-mcp/), uruchamiany przez `skribly mcp`.

## Jak to działa

- API sterowania działa wewnątrz aplikacji i nasłuchuje tylko na `127.0.0.1`, na losowym wolnym porcie.
- Port i losowy token trafiają do `~/.skribly/control.json`, czytelnego tylko dla Ciebie. Żądania bez ważnego tokenu dostają `401`. Zmienna `SKRIBLY_CONTROL` może wskazać inny plik.
- `skribly` to mały skrypt bez zależności. Zainstalowane polecenie uruchamia go wewnątrz aplikacji Skribly w trybie bez okna, więc osobny Node.js nie jest potrzebny.
- Działa tylko wtedy, gdy aplikacja jest uruchomiona.
- Wywołanie z panelu Skribly przekazuje ten panel i jego folder, więc `current` i domyślny projekt oznaczają panel, z którego wywołujesz.
- Sesje uruchomione w ten sposób pojawiają się w widoku **Agenci** jak każde inne.

## Jak je włączyć

<Steps>

1. Otwórz **Ustawienia → Sesje i sterowanie → Lokalne API sterowania**. Jest domyślnie włączone; znaczek pokazuje port.

2. W **Polecenie skribly** naciśnij **Zainstaluj**. Polecenie trafia do `~/.local/bin/skribly` w macOS i Linuksie oraz do `%LOCALAPPDATA%\Skribly\bin` w Windows. Jeśli tego folderu nie ma w `PATH`, Skribly mówi, co dopisać, na przykład `export PATH="$HOME/.local/bin:$PATH"` w `~/.zshrc`.

3. Opcjonalnie zainstaluj **Skill „skribly” dla agentów** w projekcie. Uczy Claude Code i Codexa, kiedy i jak delegować pracę.

</Steps>

## Cele

Polecenia, które działają na istniejącym panelu, przyjmują cel.

| Cel | Przykład | Uwagi |
| --- | --- | --- |
| Nazwa agenta | `reviewer` | Nadana przy starcie (małe litery, cyfry, `_` i `-`, do 32 znaków) i pokazana jako znaczek `@nazwa` w panelu. `pane rename` nadaje nazwę później |
| Identyfikator panelu | `3f2c9a1e-…` | Co najmniej pierwsze 4 znaki. Z `pane list` albo `agent list` |
| `current` | `current` | Panel, z którego wywołano polecenie, tylko w terminalu Skribly |

`--kind` przyjmuje `claude`, `codex`, `cursor`, `gemini`, `opencode`, `copilot`, `aider`, `amp`, `droid`, `qwen`, `goose`, `crush`, `kimi` albo `custom:<id>` dla własnego agenta z Ustawień. `--project` przyjmuje nazwę, identyfikator lub ścieżkę projektu. Limity czasu są w sekundach.

## Polecenia

| Polecenie | Co robi |
| --- | --- |
| `skribly status` | Liczba paneli i agentów oraz ich stany |
| `skribly workspace list` | Projekty, ich worktree i panele w każdym, ze zbiorczym stanem |
| `skribly pane list` | Wszystkie panele, powłoki i agenci |
| `skribly pane create [name] [--kind shell\|<agent>] [--project P\|--cwd D] [--title T] [--prompt X] [--worktree BRANCH] [--machine M]` | Otwiera nowy panel |
| `skribly pane run <target> <command…>` | Wpisuje polecenie powłoki i Enter |
| `skribly pane read <target> [--lines N]` | Czyta ekran i ostatnie wiersze jako tekst |
| `skribly pane wait-output <target> <regex> [--timeout S] [--new]` | Czeka, aż wyjście pasuje do wyrażenia; `--new` patrzy tylko na wyjście po wywołaniu |
| `skribly pane rename <target> [name]` | Nadaje panelowi nazwę dla API |
| `skribly pane close <target>` | Zamyka panel |
| `skribly agent list` | Agenci i ich stany: `working`, `blocked`, `done`, `idle`, `exited` |
| `skribly agent start <name> --kind <agent> [--project P\|--cwd D] [--prompt X] [--worktree BRANCH] [--base REF] [--machine M] [--title T]` | Uruchamia nazwanego agenta w nowym panelu; z `--worktree` w worktree tej gałęzi |
| `skribly agent prompt <target> <text…> [--wait] [--timeout S] [--lines N]` | Wysyła wiadomość; z `--wait` czeka na koniec tury i zwraca ekran |
| `skribly agent read <target> [--lines N]` | Czyta ekran agenta |
| `skribly agent wait <target> [--until done,idle,blocked\|finished] [--timeout S]` | Czeka na jeden ze stanów; domyślnie `done,idle,blocked,exited`, a `finished` znaczy to samo |
| `skribly agent explain <target>` | Pokazuje, dlaczego agent jest w tym stanie: regułę, proces i ekran |
| `skribly agent stop <target>` | Zamyka panel agenta, co kończy agenta |
| `skribly worktree list [--project P]` | Wypisuje worktree projektu |
| `skribly worktree create <branch> [--base B] [--project P]` | Tworzy worktree; istniejąca gałąź jest wyewidencjonowana, nowa startuje z gałęzi bazowej albo `HEAD` |
| `skribly worktree remove <path\|branch> [--force] [--project P]` | Usuwa folder worktree i zostawia gałąź |
| `skribly notify <title> [body…]` | Wysyła powiadomienie systemowe |
| `skribly mcp [--allow-writes] [--project P]` | Uruchamia serwer MCP na standardowym wejściu i wyjściu; zobacz [serwer MCP Skribly](/pl/agent/skribly-mcp/) |
| `skribly --help` | Wypisuje pomoc |

## Wyjście i kody wyjścia

Każde polecenie wypisuje JSON na standardowe wyjście. `--text` z `read` i `explain` wypisuje zwykły tekst. Błędy trafiają na standardowe wyjście błędów jako `{"error": "…"}`.

| Kod | Znaczenie |
| --- | --- |
| `0` | Sukces |
| `1` | Błąd, na przykład nieznany cel |
| `2` | Złe użycie albo brak połączenia: Skribly nie działa, API jest wyłączone albo token jest nieaktualny |
| `124` | Przekroczono limit czasu w `wait`, `wait-output` albo `prompt --wait` |

## Przepisy

### Recenzent obok wykonawcy

```bash
skribly agent start reviewer --kind claude --prompt "Review the changes from git diff. List issues from most severe, with file:line."
skribly agent wait reviewer --until done --timeout 600
skribly agent read reviewer --lines 60 --text
```

Wywołany z panelu Skribly, recenzent startuje w projekcie tego panelu. Widzisz go w panelu obok wykonawcy i możesz mu odpowiedzieć. Przy następnej turze wystarczy jedno polecenie:

```bash
skribly agent prompt reviewer "Check again after the fixes" --wait --timeout 600 --lines 40
```

### Równoległe worktree

Każdy agent dostaje własny folder i gałąź, więc nie nadpisują sobie plików.

```bash
skribly agent start impl-api --kind codex --worktree feature/api-export --prompt "Build the CSV export endpoint per SPEC.md"
skribly agent start impl-ui --kind claude --worktree feature/ui-export --prompt "Build the export button per SPEC.md"
skribly agent wait impl-api --until finished --timeout 1800
skribly agent wait impl-ui --until finished --timeout 1800
```

Połącz wyniki zwykłym merge, potem posprzątaj przez `skribly worktree remove feature/api-export`. Zobacz [Worktree](/pl/agent/worktrees/).

### Poczekaj, potem zareaguj

`blocked` oznacza, że agent prosi o zgodę albo wybór.

```bash
skribly agent wait impl-api --until done,blocked --timeout 900
skribly agent explain impl-api --text
skribly agent read impl-api --lines 30 --text
skribly agent prompt impl-api "1"
```

### Poczekaj na polecenie powłoki

```bash
skribly pane create tests --kind shell
skribly pane run tests npm test
skribly pane wait-output tests "Tests:.*(passed|failed)" --timeout 300 --new
```

## Bezpieczeństwo

<Aside type="caution">
Inni użytkownicy systemu nie mogą czytać `control.json`, ale każdy proces Twojego użytkownika może, a z tokenem steruje Twoimi agentami. Samo polecenie `skribly` nigdy nie pyta, zanim zadziała. Jeśli nie używasz API, wyłącz je jego przełącznikiem w **Ustawieniach**.
</Aside>

Porty, które aplikacja otwiera, wypisuje strona [Dane i sieć](/pl/agent/data-and-network/#porty).

## Powiązane strony

<CardGrid>
  <LinkCard title="Serwer MCP Skribly" href="/pl/agent/skribly-mcp/" description="To samo sterowanie jako narzędzia MCP, domyślnie tylko do odczytu." />
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Tu pojawiają się sesje uruchomione poleceniem." />
  <LinkCard title="Worktree" href="/pl/agent/worktrees/" description="Osobne foldery i gałęzie dla równoległych agentów." />
  <LinkCard title="Skróty klawiszowe" href="/pl/agent/shortcuts/" description="Klawisze paneli, aplikacji i edytora." />
</CardGrid>
