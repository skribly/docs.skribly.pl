# Polecenie skribly

> Steruj panelami i agentami Skribly Agent spoza okna poleceniem skribly — polecenia, kody wyjścia, przepisy na recenzenta i równoległe worktree oraz bezpieczeństwo.

Polecenie `skribly` pozwala agentom, skryptom i Tobie sterować panelami spoza okna. Agent może uruchomić obok siebie recenzenta, poczekać na niego i przeczytać wynik. Serwer MCP, `skribly mcp`, udostępnia te same operacje agentom jako narzędzia MCP; opisuje go osobna strona, która jest planowana.

## Jak to działa

- API sterowania działa wewnątrz aplikacji i nasłuchuje tylko na `127.0.0.1`, na losowym wolnym porcie.
- Port i losowy token są zapisywane w `~/.skribly/control.json`, który możesz odczytać tylko Ty. Żądania bez poprawnego tokenu dostają `401`.
- `skribly` to skrypt Node bez zależności. Działa tylko wtedy, gdy aplikacja jest uruchomiona.
- Sesje uruchomione w ten sposób pojawiają się w widoku **Agenci** jak wszystkie inne.

## Włącz

1. Otwórz **Ustawienia → Sesje i sterowanie → Lokalne API sterowania**. Domyślnie jest włączone.
2. W sekcji **Polecenie skribly** wybierz **Zainstaluj**, żeby dodać polecenie do `PATH`.
3. Opcjonalnie zainstaluj w projekcie skill `skribly`. Uczy Claude Code i Codexa, kiedy i jak przekazywać pracę.

## Polecenia

Polecenia przyjmują cel: nazwę sesji, na przykład `reviewer`, identyfikator panelu albo `current` dla panelu, z którego je wywołujesz. Każde polecenie wypisuje JSON, a `--text` wypisuje zwykły tekst dla `read` i `explain`.

| Polecenie | Co robi |
| --- | --- |
| `skribly status` | Liczba paneli i agentów oraz ich stany |
| `skribly workspace list` | Projekty, worktree i panele w każdym z nich |
| `skribly pane list` | Wszystkie panele, powłoki i agenci |
| `skribly pane create` | Otwiera nowy panel |
| `skribly pane run` | Wpisuje polecenie powłoki i Enter |
| `skribly pane read` | Czyta ekran jako tekst |
| `skribly pane wait-output` | Czeka, aż wyjście dopasuje się do wyrażenia regularnego |
| `skribly pane rename` | Nadaje panelowi nazwę dla API |
| `skribly pane close` | Zamyka panel |
| `skribly agent list` | Agenci i ich stany |
| `skribly agent start` | Uruchamia nazwanego agenta w nowym panelu, opcjonalnie w worktree |
| `skribly agent prompt` | Wysyła wiadomość i może poczekać na koniec tury |
| `skribly agent read` | Czyta ekran agenta |
| `skribly agent wait` | Czeka na wybrane stany |
| `skribly agent explain` | Pokazuje, dlaczego agent jest w danym stanie |
| `skribly agent stop` | Zamyka panel agenta |
| `skribly worktree list` | Wypisuje worktree projektu |
| `skribly worktree create` | Tworzy worktree |
| `skribly worktree remove` | Usuwa worktree i zostawia gałąź |
| `skribly notify` | Wysyła powiadomienie systemowe |
| `skribly mcp` | Uruchamia serwer MCP |

| Kod | Znaczenie |
| --- | --- |
| `0` | Sukces |
| `1` | Błąd, na przykład nieznany cel |
| `2` | Złe użycie lub brak połączenia |
| `124` | Przekroczony limit czasu |

## Przepisy

### Recenzent obok wykonawcy

```bash
skribly agent start reviewer --kind claude --prompt "Review the changes from git diff."
skribly agent wait reviewer --until done --timeout 600
skribly agent read reviewer --lines 60 --text
```

### Równoległe worktree

Każdy agent dostaje własny katalog i gałąź, więc nie nadpisują sobie plików.

```bash
skribly agent start impl-api --kind codex --worktree feature/api-export --prompt "Build the CSV export endpoint per SPEC.md"
skribly agent start impl-ui --kind claude --worktree feature/ui-export --prompt "Build the export button per SPEC.md"
skribly agent wait impl-api --until finished --timeout 1800
skribly agent wait impl-ui --until finished --timeout 1800
```

### Poczekaj i zareaguj

`blocked` oznacza, że agent prosi o zgodę lub wybór.

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

Inni użytkownicy systemu nie mogą czytać `control.json`, ale może to każdy proces Twojego użytkownika. Jeśli nie używasz API, wyłącz je przełącznikiem w **Ustawieniach**. Porty otwierane przez aplikację są wymienione w [Dane i sieć](/pl/agent/data-and-network/#porty).

## Czytaj dalej

- [Skróty klawiszowe](/pl/agent/shortcuts/): klawisze paneli, aplikacji i edytora.
- [Dane i sieć](/pl/agent/data-and-network/): co nasłuchuje i kto ma do tego dostęp.
- [Funkcje](/pl/agent/features/): CLI na tle pozostałych widoków.
