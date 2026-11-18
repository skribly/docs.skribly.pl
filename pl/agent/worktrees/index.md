# Drzewa robocze

> Widok Drzewa robocze w Skribly Agent wypisuje każdy worktree Twoich projektów z jego stanem, pokazuje, które mogą zniknąć, i usuwa worktree tylko wtedy, gdy jest to bezpieczne.

Worktree to osobny folder z własną wybraną gałęzią i tą samą historią git, więc kilku agentów może pracować równolegle, nie ruszając swoich plików. Gdy uruchamiasz wielu agentów, worktree się gromadzą. Widok **Drzewa robocze** wypisuje w jednym miejscu każdy worktree każdego projektu aplikacji: które są jeszcze używane, które trzymają pracę zapisaną tylko tam i które mogą zniknąć.

![Widok Drzewa robocze: worktree dwóch projektów z gałęzią, stanem, odległością od upstream i main, panelem w każdym i jednym rozwiniętym z Pokaż w widoku Kod, Uruchom tu agenta, Kopiuj ścieżkę i Usuń worktree](../../../../assets/screens/agent-worktrees.webp)

## Otwórz widok

- Kliknij **Drzewa robocze** (folder z gałęzią) na pasku aktywności, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Drzewa robocze**.

Na Windows i Linuksie używaj `Ctrl` wszędzie tam, gdzie ta strona pisze `⌘`. Widok nie ma skrótu z cyfrą. Czyta worktree przy otwarciu i po naciśnięciu **Odśwież**, nigdy według zegara. Uruchamia tylko lokalne polecenia `git` w folderach Twoich projektów i nie łączy się z siecią.

## Co pokazuje wiersz

Wiersze są pogrupowane według projektu. Każdy wiersz to jeden wpis `git worktree list`.

| Część | Co znaczy |
| --- | --- |
| Gałąź i folder | Wybrana gałąź (albo commit, przy odłączonym HEAD) i folder, z Twoim folderem domowym skróconym do `~` |
| **Główny folder** | Własny folder projektu, jego główne drzewo robocze |
| **Odłączony HEAD** | Drzewo jest na commicie, nie na gałęzi |
| **Czysto** albo **3 zmiany** | Zmienione, dodane do indeksu i nieśledzone pliki, policzone przez git. **Stan nieznany**, gdy git nie mógł odczytać drzewa |
| **Scalona z main** | HEAD drzewa zawiera się w głównej gałęzi projektu: **Gałęzi bazowej** projektu albo `main`, gdy żadnej nie ustawiono, lokalnej lub na `origin` |
| `↑2 ↓0 origin/feature/x` | Commity przed upstreamem i za nim. **Bez upstreamu**, gdy gałąź niczego nie śledzi |
| `↑4 ↓1 main` | Commity przed główną gałęzią projektu i za nią |
| **Zablokowane** | Drzewo jest zablokowane przez `git worktree lock` |
| **Folder nie istnieje** | Git nadal wypisuje drzewo, ale jego folder nie istnieje |
| Znacznik agenta | Panel aplikacji, którego folder to to drzewo albo folder w nim. Zakończone panele i panele na innej maszynie nie liczą się |
| Ostatni wiersz | Temat ostatniego commita i jak dawno go zrobiono |

Nad listą jeden wiersz liczy worktree, te ze zmianami i te, które można usunąć.

## Jak znaleźć worktree

<Steps>

1. Wybierz filtr: **Wszystkie**, **Ze zmianami**, **Scalone** albo **Bez agenta**. **Ze zmianami** wypisuje też drzewa o nieznanym stanie.

2. Wpisz tekst w **Szukaj gałęzi, folderu, commita…**. Szukanie obejmuje gałąź, folder, nazwę projektu, temat ostatniego commita i nazwy paneli.

</Steps>

## Jak pracować w worktree

<Steps>

1. Kliknij wiersz albo naciśnij na nim `Enter` lub `Spacja`. Wiersz się otwiera i pokazuje swoje akcje.

2. Naciśnij **Pokaż w widoku Kod**, żeby otworzyć drzewo w [Kod i git](/pl/agent/code/). Główny folder przełącza otwarty projekt. Powiązany worktree jest dodawany do Twoich projektów za pierwszym razem i otwierany.

3. Albo naciśnij **Uruchom tu agenta**. Zwykłe okno nowej sesji widoku Agenci otwiera się na tym drzewie, więc wybierasz agenta, nazwę i pierwszą wiadomość jak zawsze.

4. **Kopiuj ścieżkę** wkłada pełną ścieżkę folderu do schowka.

</Steps>

## Jak usunąć worktree

<Steps>

1. Otwórz wiersz. Jeśli usunięcie jest możliwe, jest tam **Usuń drzewo…**. Jeśli nie, wiersz pisze **Usunięcie niedostępne:** i wypisuje, co stoi na przeszkodzie.

2. Naciśnij **Usuń drzewo…**. Okno **Usunąć drzewo robocze?** nazywa folder i gałąź.

3. Naciśnij **Usuń drzewo**. Aplikacja czyta listę i drzewo jeszcze raz, sprawdza każdą regułę po raz drugi i uruchamia `git worktree remove` bez `--force`.

</Steps>

Usunięcie jest oferowane tylko wtedy, gdy spełnione jest wszystko naraz:

- drzewo nie jest głównym folderem projektu, nie jest zablokowane i jego folder istnieje;
- nie ma zmienionego, dodanego do indeksu ani nieśledzonego pliku;
- jego gałąź jest scalona z główną albo wypchnięta bez niczego do wypchnięcia (odłączony HEAD musi być scalony);
- żaden panel aplikacji nie pracuje w nim ani w folderze w nim.

Gałąź i jej commity zawsze zostają: **Usunięto drzewo robocze. Gałąź została.** Nic poza tym nie jest czyszczone.

## Gdzie powstają nowe worktree

Worktree tworzysz w widoku Agenci (**+ Nowy worktree…**) albo zaczynając zadanie z agentem w osobnym worktree. Aplikacja tworzy go w `~/.skribly/worktrees/<repozytorium>/<gałąź>`. Żeby użyć innego folderu, otwórz **Ustawienia**, przejdź do **Sesje i sterowanie** i ustaw **Katalog worktree**. Puste pole oznacza domyślny. Wcześniej utworzone worktree zostają tam, gdzie są.

## Klawiatura

| Klawisz | Akcja |
| --- | --- |
| `↑` `↓`, `Home` `End` | Przechodzenie między wierszami |
| `Enter`, `Spacja` | Otwarcie lub zamknięcie wiersza |
| `Tab` | Przejście do akcji otwartego wiersza |
| `Esc` | Zamyka otwarty wiersz i wraca do niego; zamyka okno |

## Wskazówki

<Aside type="caution">
Worktree, który nie jest scalony ani wypchnięty, trzyma pracę, która nie istnieje nigdzie indziej. Widok nie zaproponuje jego usunięcia. Najpierw scal albo zrób push.
</Aside>

- Użyj **Bez agenta** razem ze **Scalone**, żeby znaleźć drzewa, które można bezpiecznie posprzątać.
- **Gałąź bazowa** projektu decyduje, co liczy się jako scalone. Ustaw ją w ustawieniach projektu, jeśli Twoja główna gałąź nie nazywa się `main`.

## Powiązane strony

<CardGrid>
  <LinkCard title="Zadania i trackery" href="/pl/agent/tasks/" description="Zacznij z agentem może utworzyć worktree dla zadania." />
  <LinkCard title="Zmiany i commity" href="/pl/agent/changes/" description="Zrób push gałęzi worktree, zanim go usuniesz." />
  <LinkCard title="Terminale i sesje" href="/pl/agent/terminals/" description="Sesje i okno nowej sesji." />
</CardGrid>
