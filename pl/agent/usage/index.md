# Zużycie tokenów

> Tablica zużycia tokenów w Skribly Agent pokazuje tokeny według dnia, agenta i projektu za 7, 14 lub 30 dni, odczytane z plików sesji, które agenci zostawiają na tym komputerze.

Tablica zużycia tokenów pokazuje, ile tokenów zużyli Twoi agenci programujący, według dnia, agenta i projektu, za ostatnie 7, 14 lub 30 dni. Czyta tylko pliki sesji, które agenci i tak zostawiają na tym komputerze. Nie wymaga konta i niczego nigdzie nie wysyła.

![Tablica zużycia tokenów za 14 dni: tokeny według agenta i projektu w podziale na wejście, wyjście, zapis i odczyt cache oraz co da się zmierzyć dla każdego agenta](../../../../assets/screens/agent-usage-board.webp)

## Otwórz widok

Tablica to okno, które otwiera się z Pulpitu.

<Steps>

1. Otwórz **Pulpit** (pierwszy widok paska aktywności, `⌘1`; na Windows i Linuksie `Ctrl+1`).

2. W wykresie tokenów naciśnij **Tablica**. Otwiera się okno **Zużycie tokenów**.

3. Wybierz okres. Pierwszy odczyt 30 dni trwa kilka sekund; późniejsze odczyty czytają tylko to, co zostało dopisane.

</Steps>

Tablica czyta pliki tylko wtedy, gdy jest otwarta, gdy zmieniasz okres i gdy naciśniesz **Odśwież**. Nie ma zegara, więc zamknięta tablica ani ukryte okno niczego nie czytają. Indeks, który tablica buduje, jest zwalniany z pamięci pięć minut po ostatnim żądaniu.

## Jak czytać tabelę

- **Okres** to 7, 14 lub 30 dni. Domyślnie 14. Wiersz pod przyciskami podaje daty i Twoją strefę czasową: dni liczą się według Twojego czasu lokalnego.
- **Wiersze:** **Dzień**, **Agent** i **Projekt** przełączają wymiary wierszy. Wiersze są sumowane po wymiarach, które są wyłączone, a co najmniej jeden zostaje włączony. Domyślnie wiersze są według agenta i projektu.
- **Wejście**, **Wyjście**, **Zapis cache** i **Odczyt cache** są zawsze pokazane osobno. Odczyt cache jest zwykle znacznie większy niż reszta.
- **Razem** sumuje tylko rodzaje zaznaczone w wierszu **Kolumna „Razem” sumuje**, a wiersz nad tabelą je wymienia. Domyślnie sumuje wejście, wyjście i zapis cache; odczyt cache jest wyłączony.
- **Kreska** oznacza, że agent nie podaje tego rodzaju. To nie zero, a w CSV ta komórka jest pusta.
- **Projekt** to folder, w którym działała sesja, tak jak zapisuje go własny plik agenta. Folder wewnątrz projektu dodanego do Skribly Agent jest pokazany pod nazwą tego projektu. Inne foldery, także worktree poza projektem, są pokazane nazwą folderu. Plik bez folderu pokazuje **Brak katalogu w pliku sesji**.

Twoje wybory okresu, wierszy i rodzajów są zapamiętywane.

## Co pozwalają zmierzyć pliki każdego agenta

Druga tabela, **Co można zmierzyć u każdego agenta**, mówi dla każdego agenta, którego zna aplikacja, co zawierają jego pliki. Nic nie jest zgadywane.

| Stan | Znaczenie |
| --- | --- |
| **Zmierzone** | Pliki zawierają liczby tokenów i co najmniej jeden zapis wypadł w okresie. Tabela pokazuje, ile plików i zapisów |
| **Brak zapisów w tym okresie** | Pliki są czytane, ale w okresie nic nie zapisano. Nie ma wiersza ani zera |
| **Brak danych** | Agent nie zostawia liczb tokenów w swoich plikach albo nie został sprawdzony. Nie pokazuje się żadna liczba, nawet zero |

| Agent | Czytane pliki | Co jest liczone |
| --- | --- | --- |
| Claude Code | Pliki `.jsonl` pod `~/.claude/projects` (albo `CLAUDE_CONFIG_DIR`), na dowolnej głębokości, razem z podagentami | Wejście, wyjście, zapis i odczyt cache każdej odpowiedzi; każda odpowiedź raz |
| Codex | Pliki `.jsonl` pod `~/.codex/sessions` i `archived_sessions` (albo `CODEX_HOME`) | Narastające sumy wejścia, wyjścia i odczytu cache; dzień dostaje różnicę między sumami. Pole zapisu cache miało zawsze wartość 0 w sprawdzonych plikach, więc nie jest liczone |
| Copilot CLI | `events.jsonl` pod `~/.copilot/session-state` (albo `COPILOT_HOME`) | Wejście, wyjście, zapis i odczyt cache każdego żądania. Jego wejście zawiera liczby cache, więc tablica je wydziela |
| Cursor Agent | Sprawdzono: jego pliki nie zawierają liczb tokenów | **Brak danych** |
| Gemini CLI, OpenCode, Aider, Amp, Factory Droid, Qwen Code, Goose, Crush, Kimi CLI | Nie sprawdzono | **Brak danych**, z adnotacją **Nie sprawdzono** |

## Jak zapisać tabelę

Naciśnij **Zapisz CSV**. Otwiera się okno zapisu, a plik zawiera wiersze, które widzisz, w kolejności, w jakiej je widzisz. Kolumny to `date`, `agent` i `project` (tylko wymiary, które są włączone), potem `input`, `output`, `cache_write`, `cache_read` i kolumna sumy, której nazwa wymienia sumowane rodzaje, na przykład `total_input_plus_output_plus_cache_write`.

Plik jest w UTF-8 ze znacznikiem kolejności bajtów, więc arkusz kalkulacyjny poprawnie czyta polskie litery. Komórka tekstowa zaczynająca się od `=`, `+`, `-`, `@`, tabulatora lub znaku powrotu karetki dostaje na początku `'`, żeby arkusz nie wykonał jej jako formuły. **Zapisz CSV** jest wyłączone, gdy tabela jest pusta.

## Wskazówki

<Aside type="tip">
Włącz **Dzień**, żeby zobaczyć, które dni były ciężkie, potem wyłącz **Agent**, żeby porównać dni dla wszystkich agentów.
</Aside>

- Wiersz bez danych nie ma liczby, bo zero wyglądałoby jak pomiar.
- Najedź na nazwę projektu, żeby zobaczyć pełną ścieżkę folderu.

## Powiązane strony

<CardGrid>
  <LinkCard title="Oszczędzanie tokenów" href="/pl/agent/token-saving/" description="Jak Skribly Agent utrzymuje krótkie prompty." />
  <LinkCard title="Obsługiwani agenci" href="/pl/agent/agents/" description="Agenci, których zna aplikacja." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Co aplikacja czyta i wysyła." />
</CardGrid>
