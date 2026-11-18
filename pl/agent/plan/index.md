# Plan

> Widok Plan w Skribly Agent liczy pola wyboru Markdown z plików planu, wypisuje otwarte pozycje i przekazuje jedną z nich do widoku Kod albo agentowi.

Widok **Plan** pokazuje plan, który projekt trzyma jako pola wyboru Markdown: `TODO.md`, `.docs/TODO.md`, folder plików kroków. Liczy, co zrobione i co otwarte w każdym pliku i pod każdym nagłówkiem, wypisuje otwarte pozycje z wyszukiwaniem i przekazuje pozycję do widoku Kod albo agentowi. Tylko czyta pliki: nigdy nie zaznacza pola i nigdy nie zapisuje pliku planu.

![Widok Plan w motywie dziennym: u góry suma 10 zrobionych z 26, po lewej pięć plików planu z paskami postępu, po prawej szesnaście otwartych pozycji z przyciskami kopiowania i przekazania](../../../../assets/screens/agent-plan.webp)

## Otwórz widok

- Kliknij **Plan** na pasku aktywności po lewej (ikona listy z zaznaczeniem) albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Plan**.

Widok nie ma skrótu z cyfrą: `⌘1` do `⌘9` zostają przy pierwszych dziewięciu widokach.

## Jak przekazać otwartą pozycję agentowi

<Steps>

1. Otwórz **Plan** i znajdź pozycję w **Otwarte pozycje**. Wpisz tekst w **Szukaj w otwartych pozycjach**, by filtrować po treści, pliku lub nagłówku, albo wybierz jeden plik z listy obok.

2. Naciśnij **Przekaż agentowi** przy pozycji. Okno pokazuje prompt z pozycją, jej plikiem, wierszem i nagłówkiem.

3. Popraw prompt, potem wybierz działającą sesję projektu albo nową sesję zainstalowanego agenta.

4. Naciśnij **Wyślij** (`⌘↩`). Nic nie wychodzi, zanim go naciśniesz.

</Steps>

## Jak zmienić miejsca, które widok czyta

<Steps>

1. Naciśnij **Ścieżki planu** u góry widoku.

2. Wpisz jeden wzorzec w wierszu, względem folderu projektu: `*` to dowolna nazwa w jednym folderze, `**` to dowolna liczba folderów.

3. Naciśnij **Zapisz**. Lista zostaje w ustawieniach projektu. **Przywróć domyślne** przywraca cztery domyślne wzorce.

</Steps>

| Wzorzec | Co znajduje |
| --- | --- |
| `TODO.md` | Plik zadań na górze projektu (domyślnie) |
| `.docs/TODO.md` | Plik zadań folderu dokumentacji (domyślnie) |
| `.docs/plan/**/*.md` | Każdy plik Markdown folderu planu, na dowolnej głębokości (domyślnie) |
| `docs/plan/**/*.md` | To samo dla folderu `docs` (domyślnie) |

Wzorzec, który wyszedłby poza folder projektu (`../notes.md`, `/etc/…`, `~/…`, `C:\…`), jest odrzucany i wymieniony w widoku. Dowiązanie symboliczne wskazujące poza folder projektu nie jest śledzone. Foldery takie jak `node_modules`, `.git`, `dist` i `build` są pomijane.

## Co liczy się jako pozycja

Pozycja to element listy, który zaczyna się od pola wyboru:

```md
## Release 1.5

- [x] Move the cart to the new price helpers
- [ ] Write the release notes
  - [ ] Ask for a review

1. [x] Numbered lists count too
```

- `[ ]` jest otwarte; `[x]` i `[X]` są zrobione. Liczą się punkty `-`, `*`, `+` i listy numerowane (`1.` albo `1)`), na każdej głębokości.
- Pozycja należy do najbliższego nagłówka nad nią. Nagłówek bez pozycji jest pomijany.
- Wiersz w bloku kodu, w komentarzu HTML albo w nagłówku front matter nie jest pozycją, nawet jeśli tak wygląda.
- Plik zapisany nie w UTF-8 albo większy niż 4 MB jest wymieniony z powodem, zamiast być zgadywany.

## Co jest na ekranie

| Część | Co pokazuje lub robi |
| --- | --- |
| Suma | Zrobione, otwarte i liczba plików planu projektu, z paskiem; liczby są zawsze wypisane obok |
| **Pliki i sekcje** | Jeden wiersz na plik z jego liczbami; rozwiń plik, by zobaczyć nagłówki, a nagłówek otwiera plik w tym wierszu w widoku Kod |
| **Otwarte pozycje** | Każda otwarta pozycja z plikiem, wierszem i nagłówkiem |
| Kliknięcie pozycji | Widok Kod otwiera plik w wierszu pozycji |
| **Kopiuj** | Tekst pozycji trafia do schowka |
| **Przekaż agentowi** | Okno opisane wyżej |
| Przycisk odświeżania | Wczytuje od razu, obok **Ścieżki planu** |

## Klawiatura

`Tab` prowadzi do wyszukiwania, listy plików i pozycji. Z wyszukiwania `↓` przechodzi do pierwszej pozycji; na liście `↑` i `↓` przesuwają między pozycjami, a `Home` i `End` skaczą na końce; `Enter` albo `Spacja` otwiera pozycję w widoku Kod. `Esc` w wyszukiwaniu je czyści; `Esc` w oknie je zamyka.

## Wskazówki

<Aside type="tip">
Widok wczytuje się sam, gdy plik planu zmieni się na dysku, na przykład gdy agent zaznaczył pole. Sprawdza rozmiary i daty zmian plików co kilka sekund i tylko wtedy, gdy okno jest widoczne i aktywne.
</Aside>

- Trzymaj jedno pole wyboru na jedną część pracy. Agent, który skończy pozycję, zaznacza ją w pliku, a widok Plan widzi to bez odświeżania.
- Pliki planu pisane przez workflow [agent-skills](/pl/skills/) (`.docs/TODO.md` i `.docs/plan/`) są znajdowane domyślnymi wzorcami.

## Powiązane strony

<CardGrid>
  <LinkCard title="Zadania i trackery" href="/pl/agent/tasks/" description="Zadania z trackera, zapisane w TASK.md i uruchamiane z agentem." />
  <LinkCard title="Edytor i pliki" href="/pl/agent/code/" description="Widok Kod, w którym pozycja otwiera się w swoim wierszu." />
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Sesje, którym można przekazać pozycję planu." />
  <LinkCard title="Dokumenty" href="/pl/agent/documents/" description="README, lista zmian i folder .docs, czytane bezpiecznie." />
</CardGrid>
