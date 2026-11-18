# Skróty klawiszowe

> Wszystkie skróty klawiszowe Skribly Agent: paleta poleceń, przełączanie widoków, prefiks paneli Ctrl+B, edytor i git, czat oraz przewodnik.

Skribly Agent można obsługiwać z klawiatury: paleta poleceń znajduje każdy widok, projekt, agenta i działanie, skróty z cyframi przełączają widoki, a prefiks w stylu tmux steruje panelami. W systemach Windows i Linux używaj `Ctrl` wszędzie tam, gdzie na tej stronie jest mowa o `⌘`.

![Paleta poleceń nad Pulpitem: pole wyszukiwania i lista widoków z opisami i skrótami](../../../../assets/screens/agent-palette.webp)

## Otwórz widok

Widok **Pomoc**, na dole paska aktywności, wypisuje skróty w **Skróty klawiszowe**. **Ustawienia → Wygląd i przewodnik** ma przycisk **Skróty**, który otwiera tę samą listę, a `Ctrl+B` `?` pokazuje skróty paneli jako ściągę w widoku Agenci.

![Widok Pomoc: Uruchom przewodnik i Paleta poleceń, pięć kroków Pierwszych kroków i skróty klawiszowe](../../../../assets/screens/agent-help.webp)

## Globalne

| Skrót | Działanie |
| --- | --- |
| `⌘K` lub `⌘⇧P` | Paleta poleceń: widoki, projekty, **Nowa sesja: &lt;agent&gt;**, **Nowy terminal** i działania. Naciśnij ponownie, by ją zamknąć |
| `⌘⇧A` | Panel agenta po prawej |
| `⌘⇧U` | Skrzynka uwagi w widoku Agenci |
| `⌘1` … `⌘9` | Widoki: Pulpit, Agenci, Zadania, Kod i git, Potoki, Skille, Audyty, Przeglądarka, Docker |
| `Esc` | Zamyka paletę i okna dialogowe |

W palecie `↑` i `↓` przechodzą po wynikach, `Enter` uruchamia wybrany, a `Esc` zamyka paletę. Paleta pokazuje do 40 wyników i znajduje słowo po jego literach w kolejności.

## Panele: prefiks `Ctrl+B`

Naciśnij `Ctrl+B`, puść klawisz, a następnie naciśnij kolejny klawisz, tak jak w tmux. Prefiks pozostaje aktywny przez dwie sekundy, a na pasku kart pulsuje plakietka **Ctrl+B…**. Skróty są przechwytywane, zanim dotrą do terminala, więc działają także wtedy, gdy fokus jest w panelu. Nie działają, gdy otwarte jest okno dialogowe lub paleta. Na macOS prefiksem jest klawisz `Control`, nie `⌘`.

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
| `Ctrl+B` `i` | Skrzynka uwagi: sesje, które czekają na Ciebie |
| `Ctrl+B` `j` | Przejdź do następnego agenta, który na Ciebie czeka |
| `Ctrl+B` `h` | Historia sesji i wznowienie |
| `Ctrl+B` `x` | Zamknij aktywny panel |
| `Ctrl+B` `w` | Następny obszar roboczy |
| `Ctrl+B` `b` | Pokaż lub ukryj pasek obszarów roboczych |
| `Ctrl+B` `?` | Ściąga ze skrótami |
| `Ctrl+B` `Ctrl+B` | Anuluj prefiks |

Na macOS są też `⌘D` (podziel w prawo), `⌘⇧D` (podziel w dół) i `⌘T` (nowa karta).

<Aside type="note">
`Ctrl+B` nigdy nie trafia do programu uruchomionego w terminalu. Jeśli używasz tmux wewnątrz panelu albo skrótu `Ctrl+B` w swojej powłoce, zmień prefiks w tym programie. Prefiks Skribly jest stały.
</Aside>

## Edytor i git

| Skrót | Gdzie | Działanie |
| --- | --- | --- |
| `⌘P` | Kod | Szybkie otwieranie (`↑` `↓` lub `Ctrl+N` `Ctrl+P` do poruszania się, `Enter` otwiera, `Esc` zamyka) |
| `⌘⇧F` | Kod | Szukaj w plikach |
| `⌘S` | Edytor | Zapisz plik |
| `⌘W` | Edytor | Zamknij kartę |
| `Ctrl+G` | Edytor | Idź do linii (także na macOS klawisz `Control`) |
| `` Ctrl+` `` | Kod | Dolny terminal (także na macOS klawisz `Control`) |
| `⌘⇧I` | Edytor | Zapytaj agenta o zaznaczony kod |
| `⌘⌥M` | Diff | Dodaj notatkę przeglądu do zaznaczonych linii |
| `⌘Enter` | Pole commita | Zatwierdź |
| `⌘Enter` | Okna notatki i wysyłania | Zapisz notatkę albo wyślij notatki lub kod agentowi |

## Czat i panel agenta

| Skrót | Działanie |
| --- | --- |
| `Enter` | Wyślij wiadomość |
| `Shift+Enter` | Nowa linia |
| `/` | Polecenia ukośnikowe; `↑` `↓` wybierają, `Tab` lub `Enter` wstawiają, `Esc` czyści |
| `Enter` w polu rozsyłania | Wyślij tekst do zaznaczonych paneli |

## Przewodnik

| Klawisz | Działanie |
| --- | --- |
| `→` | Następny krok |
| `←` | Poprzedni krok |
| `Tab` lub `Enter` | Wstrzymaj automatyczne przechodzenie |
| `Esc` | Zamknij przewodnik |

## Wskazówki

- Paleta pokazuje skrót obok każdego widoku, więc możesz się ich uczyć podczas szukania.
- `⌘1` do `⌘9` zostają przy pierwszych dziewięciu widokach; pozostałe widoki nie mają cyfry i otwierają się z palety lub paska aktywności.

## Powiązane strony

<CardGrid>
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Panele, karty, podziały i sesje, które trzymają." />
  <LinkCard title="Edytor i pliki" href="/pl/agent/code/" description="Szybkie otwieranie, szukanie w plikach i edytor." />
  <LinkCard title="Dostępność" href="/pl/agent/accessibility/" description="Obsługa całej aplikacji z klawiatury." />
  <LinkCard title="Polecenie skribly" href="/pl/agent/cli/" description="Polecenie skribly dla terminala i agentów." />
</CardGrid>
