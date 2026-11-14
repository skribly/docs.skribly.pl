# Skróty klawiszowe

> Wszystkie skróty klawiszowe (keyboard shortcuts) Skribly Agent — prefiks paneli Ctrl+B, paleta poleceń, przełączanie widoków i skróty edytora.

W systemach Windows i Linux używaj `Ctrl` wszędzie tam, gdzie na tej stronie jest mowa o `⌘`.

## Globalne

| Skrót | Działanie |
| --- | --- |
| `⌘K` lub `⌘⇧P` | Paleta poleceń: widoki, projekty, **Nowa sesja: &lt;agent&gt;**, **Nowy terminal**, działania |
| `⌘⇧A` | Panel agenta po prawej |
| `⌘1` … `⌘9` | Widoki: Pulpit, Agenci, Zadania, Kod i git, Potoki, Skille, Audyty, Przeglądarka, Wtyczki i MCP |
| `Esc` | Zamyka paletę i okna dialogowe |

## Panele: prefiks `Ctrl+B`

Naciśnij `Ctrl+B`, puść klawisz, a następnie naciśnij kolejny klawisz, tak jak w tmux. Prefiks pozostaje aktywny przez dwie sekundy, a na pasku kart pulsuje plakietka **Ctrl+B…**. Skróty są przechwytywane, zanim dotrą do terminala, więc działają także wtedy, gdy fokus jest w panelu. Nie działają, gdy otwarte jest okno dialogowe lub paleta.

| Skrót | Działanie |
| --- | --- |
| `Ctrl+B` `v` lub `%` | Podziel w prawo (nowa powłoka w katalogu aktywnego panelu) |
| `Ctrl+B` `-` lub `"` | Podziel w dół (nowa powłoka) |
| `Ctrl+B` `a` | Nowa sesja agenta obok aktywnego panelu |
| `Ctrl+B` `c` | Nowa karta w bieżącym obszarze roboczym |
| `Ctrl+B` `n` / `p` | Następna / poprzednia karta |
| `Ctrl+B` `1` … `9` | Karta o danym numerze |
| `Ctrl+B` `→` `↓` / `←` `↑` | Przejdź do następnego / poprzedniego panelu na karcie |
| `Ctrl+B` `z` | Powiększ lub przywróć aktywny panel |
| `Ctrl+B` `o` | Podgląd wszystkich agentów z ekranami na żywo |
| `Ctrl+B` `j` | Przejdź do następnego agenta, który na Ciebie czeka |
| `Ctrl+B` `x` | Zamknij aktywny panel |
| `Ctrl+B` `w` | Następny obszar roboczy |
| `Ctrl+B` `b` | Pokaż lub ukryj pasek boczny obszarów roboczych |
| `Ctrl+B` `?` | Ściągawka skrótów |
| `Ctrl+B` `Ctrl+B` | Anuluj prefiks |

W systemie macOS dostępne są również `⌘D` (podziel w prawo), `⌘⇧D` (podziel w dół) i `⌘T` (nowa karta).

:::note
`Ctrl+B` nigdy nie trafia do programu uruchomionego w terminalu. Jeśli używasz tmux wewnątrz panelu albo skrótu `Ctrl+B` w swojej powłoce, zmień prefiks w tym programie. Prefiks Skribly jest stały.
:::

## Edytor i git

| Skrót | Gdzie | Działanie |
| --- | --- | --- |
| `⌘P` | Kod | Szybkie otwieranie |
| `⌘⇧F` | Kod | Wyszukiwanie w plikach |
| `⌘S` | Edytor | Zapisz plik |
| `⌘W` | Edytor | Zamknij kartę |
| `Ctrl+G` | Edytor | Przejdź do linii |
| `` Ctrl+` `` | Kod | Dolny terminal |
| `⌘⇧I` | Edytor | Zapytaj agenta o zaznaczony kod |
| `⌘Enter` | Pole commita | Commit |

## Czat i panel agenta

| Skrót | Działanie |
| --- | --- |
| `Enter` | Wyślij wiadomość |
| `Shift+Enter` | Nowy wiersz |
| `/` | Polecenia ukośnikowe (slash) |

## Przewodnik

| Klawisz | Działanie |
| --- | --- |
| `→` | Następny krok |
| `←` | Poprzedni krok |
| `Esc` | Zamknij przewodnik |
