# Najczęstsze pytania

> Krótkie odpowiedzi o Skribly Agent: systemy, konta, dane, agenci, worktree, trackery, koszt, języki, aktualizacje i dostępność, każda z odnośnikiem do strony, która to wyjaśnia.

Krótkie odpowiedzi, każda ze stroną, która wyjaśnia temat. Jeśli nie ma Twojego pytania, spróbuj [Rozwiązywanie problemów](/pl/agent/troubleshooting/) albo [Wszystkie funkcje w skrócie](/pl/agent/features/).

## Aplikacja

### Czym jest Skribly Agent?

Aplikacją desktopową, która uruchamia agentów programujących, takich jak Claude Code, Codex, Cursor Agent i Gemini, obok siebie w panelach terminala, a w tym samym oknie ma zadania z trackera, git, potoki, skille i audyty. Zobacz [Przegląd](/pl/agent/) i [Wszystkie funkcje w skrócie](/pl/agent/features/).

### Na jakich systemach działa?

W macOS, Windows i Linuksie. Strona pobierania ma instalatory dla każdego. Zobacz [Zainstaluj Skribly Agent](/pl/agent/install/).

### Dlaczego system ostrzega mnie przy otwarciu?

Instalatory nie są jeszcze podpisane ani notaryzowane, więc macOS i Windows pokazują ostrzeżenie za pierwszym razem. [Zainstaluj Skribly Agent](/pl/agent/install/) pokazuje, jak otworzyć aplikację w każdym systemie.

### Czy potrzebuję konta?

Nie. Aplikacja działa na Twoim komputerze, nie ma własnego serwera i nie wysyła telemetrii. Zobacz [Dane i sieć](/pl/agent/data-and-network/).

## Agenci

### Których agentów uruchamia?

Trzynastu: Claude Code, Codexa, Cursor Agent, Gemini CLI, OpenCode, Copilot CLI, Aidera, Amp, Droida, Qwen Code, Goose, Crush i Kimi CLI, oraz dowolne narzędzie wiersza poleceń dodane jako własny agent. Zobacz [Obsługiwani agenci](/pl/agent/agents/).

### Czy agenci są w zestawie?

Nie. Skribly uruchamia agentów zainstalowanych na Twoim komputerze, znajduje ich w `PATH` i może pokazać ich polecenia instalacji. Logowanie i warunki użytkowania zostają po stronie dostawcy każdego agenta.

### Czy kilku agentów może pracować naraz na jednym repozytorium?

Tak. Daj każdemu własny worktree, osobny folder z własną gałęzią, żeby nie nadpisywali sobie plików. Zobacz [Drzewa robocze](/pl/agent/worktrees/) i [Polecenie skribly](/pl/agent/cli/#równoległe-worktree).

### Czy agent może uruchomić innego agenta?

Tak, przez [polecenie `skribly`](/pl/agent/cli/) albo [serwer MCP Skribly](/pl/agent/skribly-mcp/). Serwer MCP jest domyślnie tylko do odczytu, a każda zmiana, którą może zrobić, najpierw pyta Ciebie w aplikacji.

### Czy agent uruchomi groźne polecenia bez pytania?

To zależy od własnych ustawień uprawnień agenta. Opcjonalny [strażnik poleceń](/pl/agent/settings/#strażnik-poleceń) sprawia, że Claude Code, Codex i OpenCode pytają przed groźnymi. Jest domyślnie wyłączony i jest siatką bezpieczeństwa, nie piaskownicą.

## Twoje dane

### Czy mój kod opuszcza mój komputer?

Sam Skribly go nie wysyła. Uruchamiani agenci łączą się ze swoimi dostawcami tak jak zawsze. Listę każdego połączenia aplikacji znajdziesz w **Ustawienia → Prywatność i sieć**. Zobacz [Dane i sieć](/pl/agent/data-and-network/).

### Czy mogę wyłączyć sieć?

Tak. **Ustawienia → Prywatność i sieć → Bez połączeń sieciowych aplikacji** zatrzymuje każde połączenie, które nawiązuje sama aplikacja, także sprawdzanie aktualizacji. Zobacz [Dane i sieć](/pl/agent/data-and-network/#jak-wyłączyć-sieć).

### Gdzie są moje ustawienia i tokeny?

Ustawienia są w katalogu danych, który otwiera **Ustawienia → Aktualizacje → Katalog danych → Pokaż**. Tokeny trackerów są szyfrowane pękiem kluczy systemu. Zobacz [Ustawienia](/pl/agent/settings/#katalog-danych).

### Jak przenieść się na inny komputer?

Wyeksportuj dane i zaimportuj je tam. Zobacz [Import i eksport](/pl/agent/import-export/).

## Zadania, koszt i jakość

### Które trackery mogę połączyć?

Skribly Tracker, Jirę Cloud i Server, Redmine, GitHuba, GitLaba i Lineara. Zobacz [Zadania i trackery](/pl/agent/tasks/).

### Czy koszt jest taki sam jak mój rachunek?

Nie, to szacunek liczony na Twoim komputerze z plików sesji agentów i datowanej tabeli cen. Abonament jest pokazany jako odpowiednik kosztu API. Niektórych rzeczy, które zmieniają rachunek, nie widać w plikach. Zobacz [Ustawienia → Koszt](/pl/agent/settings/#koszt).

### Czy budżet zatrzyma agenta?

Nie. Budżet rysuje pasek i może wysłać powiadomienie przy 80% i przy 100%. Nic nie jest blokowane.

### Jakie są audyty?

Trzy: **Bezpieczeństwo**, **Dostępność (WCAG)** i **SEO**, uruchamiane z widoku Audyty. Zobacz [Audyty](/pl/agent/audits/).

## Interfejs

### Czy mogę używać go po polsku?

Tak. Polski i angielski są wbudowane, a **Jak system** wybiera jeden z nich. Inne języki są tłumaczone z internetu i zapisywane do pracy offline. Zobacz [Języki](/pl/agent/languages/).

### Czy jest dostępny?

Skribly Agent jest budowany z WCAG 2.2 AA jako celem. Ma motyw wysokiego kontrastu, rozmiar tekstu, ograniczenie ruchu, podkreślone linki i wyraźny wskaźnik fokusu. Zobacz [Dostępność](/pl/agent/accessibility/).

### Jak go zaktualizować?

Aktualizacje pobierają się w tle i instalują przy zamknięciu aplikacji. **Ustawienia → Aktualizacje** sprawdza na żądanie. Zobacz [Aktualizacje](/pl/agent/updates/).

## Powiązane strony

<CardGrid>
  <LinkCard title="Rozwiązywanie problemów" href="/pl/agent/troubleshooting/" description="Rozwiązania typowych problemów." />
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Każda opcja i jej wartość domyślna." />
  <LinkCard title="Skróty klawiszowe" href="/pl/agent/shortcuts/" description="Klawisze paneli, aplikacji i edytora." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Co jest przechowywane i jakie połączenia są nawiązywane." />
</CardGrid>
