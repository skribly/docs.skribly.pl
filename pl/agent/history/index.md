# Historia

> Karta Historia w Skribly Agent rysuje graf 300 ostatnich commitów wszystkich gałęzi z etykietami gałęzi i tagów oraz pokazuje szczegóły klikniętego commita.

Karta **Historia** widoku **Kod i git** rysuje commity projektu jako graf. Obejmuje wszystkie gałęzie, lokalne i zdalne, więc widzisz, gdzie każda gałąź się zaczęła, gdzie została scalona i na który commit wskazuje każda gałąź i każdy tag. Tylko czyta: nic na tej karcie nie zmienia repozytorium.

![Karta Historia: graf wszystkich gałęzi z opisami commitów, etykietami gałęzi i tagów, autorami, datami i skrótami](../../../../assets/screens/agent-code-history.webp)

## Otwórz widok

- Otwórz **Kod i git** (`⌘4`) i wybierz kartę **Historia**, ostatnią z czterech ikon w lewym panelu.
- Graf otwiera się w głównym obszarze, jako karta o nazwie **Historia**, obok Twoich plików. Lewy panel trzyma szczegóły zaznaczonego commita.

Jeśli projekt nie jest repozytorium git, karta o tym mówi. Jeśli repozytorium nie ma jeszcze commitów, graf pokazuje **Brak historii** i odsyła do pola commita na karcie **Zmiany**.

## Jak czytać graf

Każdy wiersz to jeden commit. Od lewej pokazuje:

| Część | Co znaczy |
| --- | --- |
| Kropki i linie | Jedna kolumna (tor) na linię pracy. Gałąź biegnie w dół swoim torem, aż się skończy albo zostanie scalona. Tory się nie przesuwają, więc linie są proste. Pełna kropka to commit; pusta to merge (commit z więcej niż jednym rodzicem) |
| Etykiety | Nazwy gałęzi, gałęzie zdalne takie jak `origin/main` i tagi. Gałęzie zdalne i tagi mają własne kolory; bieżąca gałąź jest pokazana samą nazwą |
| Opis | Temat commita |
| Autor i czas | Kto go zrobił i jak dawno temu |
| Skrót | Pierwsze 7 znaków skrótu commita |

Commity są ułożone według daty, od najnowszych. Graf mieści 300 ostatnich commitów wszystkich gałęzi i rysuje najwyżej 12 torów.

## Jak zobaczyć szczegóły commita

<Steps>

1. Kliknij commit w grafie albo przejdź do niego `Tab` i naciśnij `Enter` lub `Spacja`.

2. Przeczytaj lewy panel: temat, pierwsze 12 znaków skrótu, autora i czas, etykiety gałęzi i tagów oraz rodziców commita (po 8 znaków).

</Steps>

Zanim wybierzesz commit, panel prosi o kliknięcie jednego w grafie.

## Jak znaleźć gałąź albo tag

Poszukaj jego etykiety w grafie: stoi w wierszu commita, na który wskazuje. Żeby przełączyć się na gałąź, użyj przycisku gałęzi na karcie **Zmiany**, opisanego w [Zmiany i commity](/pl/agent/changes/#jak-zmienić-albo-utworzyć-gałąź).

## Wskazówki

<Aside type="tip">
Widok odświeża się co 8 sekund, gdy okno ma fokus, a przycisk odświeżania w nagłówku panelu wczytuje od razu. Gałąź, którą agent właśnie założył, pojawia się bez żadnej akcji.
</Aside>

- Długie historie są ucinane na 300 commitach. Starsze commity obejrzysz przez `git log` w terminalu na dole widoku.
- Gałęzie worktree leżą w tym samym repozytorium, więc też pojawiają się w grafie.

## Powiązane strony

<CardGrid>
  <LinkCard title="Zmiany i commity" href="/pl/agent/changes/" description="Dodawaj do indeksu, rób commity, zmieniaj gałęzie i push." />
  <LinkCard title="Drzewa robocze" href="/pl/agent/worktrees/" description="Każdy worktree i gałąź Twoich projektów w jednym miejscu." />
  <LinkCard title="Edytor i pliki" href="/pl/agent/code/" description="Ten sam widok jako edytor." />
</CardGrid>
