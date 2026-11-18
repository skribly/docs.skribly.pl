# Uwagi przeglądu

> Notuj wiersz lub zakres diffu w Skribly Agent, trzymaj uwagi na jednej liście i wyślij je wszystkie agentowi jako jedną wiadomość, którą najpierw czytasz.

Gdy czytasz diff, możesz napisać notatkę do wiersza albo zakresu wierszy i wysłać wszystkie notatki agentowi jako jedną wiadomość. Agent dostaje dla każdej notatki plik, wiersze, cytowany kod i Twój tekst, więc może przejść przez nie bez diffu. Nic nie wychodzi, zanim naciśniesz **Wyślij**, a wiadomość jest pokazana w całości, zanim pójdzie.

![Diff z dwiema uwagami przeglądu pod spodem, każda z plikiem i wierszami, oraz przycisk Wyślij agentowi](../../../../assets/screens/agent-code-review.webp)

Na Windows i Linuksie używaj `Ctrl` wszędzie tam, gdzie ta strona pisze `⌘` lub `⌥`.

## Otwórz widok

Uwagi przeglądu żyją w diffie widoku **Kod i git**.

- Otwórz **Kod i git** (`⌘4`), zostań na karcie **Zmiany i commit** i kliknij plik. Jego diff otwiera się obok listy.
- Pasek nad diffem ma przycisk **Dodaj notatkę** i liczbę notatek.

Lista notatek pojawia się pod diffem, gdy tylko jest jakaś notatka.

## Jak napisać notatkę

<Steps>

1. W diffie zaznacz wiersz albo zakres wierszy. Bez zaznaczenia używany jest wiersz kursora.

2. Naciśnij `⌘⌥M`, albo przycisk **Dodaj notatkę** nad diffem, albo kliknij prawym przyciskiem i wybierz **Notatka do diffu…**.

3. Wpisz, co agent ma zmienić w tych wierszach.

4. Naciśnij `⌘↩` albo **Zapisz notatkę**, żeby ją zachować. `Esc` albo **Anuluj** ją porzuca i oddaje fokus diffowi.

</Steps>

Notatka w prawej kolumnie dotyczy nowych wierszy. Notatka w lewej kolumnie dotyczy starej wersji i ma znacznik **stara wersja**. Usunięty plik przyjmuje notatki do swoich starych wierszy, ze znacznikiem **usunięty plik, stare linie**. Plik binarny nie pokazuje wierszy: przyjmuje jedną notatkę do całego pliku, a przycisk nazywa się tam **Notatka do pliku**.

Wiersze z notatką mają znacznik na marginesie diffu. Najedź na znacznik, żeby przeczytać notatkę.

## Jak zarządzać notatkami

Lista pod diffem, **Notatki do przeglądu (N)**, zawiera każdą notatkę projektu, nie tylko te z otwartego pliku. Jest ułożona tak, jak przeczyta ją agent: według pliku, potem według wiersza.

| Przycisk | Co robi |
| --- | --- |
| Strzałka, **Przejdź do linii** | Otwiera plik i ustawia kursor na pierwszym wierszu notatki |
| Ołówek, **Edytuj** | Otwiera notatkę w formularzu, żeby zmienić jej tekst |
| Kosz, **Usuń** | Usuwa notatkę |
| **Odrzuć wszystkie** | Usuwa każdą notatkę, po pytaniu: **Odrzucić wszystkie notatki?** |
| **Wyślij do agenta…** | Otwiera okno opisane niżej |

## Jak wysłać notatki agentowi

<Steps>

1. Naciśnij **Wyślij do agenta…** nad listą. Otwiera się okno **Wyślij notatki do agenta**.

2. Przeczytaj wiadomość w polu. Jest tylko do odczytu i dokładnie to trafia do agenta.

3. Wybierz sesję pod **Do kogo**. Sesje tego projektu są na górze, a sesja działająca w folderze projektu jest wybrana za Ciebie.

4. Naciśnij **Wyślij** (`⌘↩`). Wiadomość trafia do terminala sesji, tak jak każdy inny tekst wysłany agentowi, a notatki, które w niej były, są usuwane.

</Steps>

![Okno Wyślij uwagi agentowi: cała wiadomość z obiema uwagami i cytowanym kodem oraz lista sesji, do których może trafić](../../../../assets/screens/agent-code-review-send.webp)

Wiadomość zaczyna się od liczby notatek i plików oraz krótkiej instrukcji: przejdź przez notatki po kolei, zmieniaj tylko to, o co prosi notatka, i zgłoś, co zrobiono dla każdej notatki, po jej numerze. Potem idzie jeden blok na notatkę: nagłówek z nazwą pliku i zakresem wierszy, cytowane wiersze w bloku kodu i Twój tekst. Nazwa pliku i cytowane wiersze są zapisane tak, żeby spacje, odwrotne apostrofy i znaki sterujące nie zepsuły układu.

Okno wypisuje tylko działające sesje. Jeśli żadnej nie ma, mówi o tym: uruchom agenta w widoku Agenci i wróć, bo notatki zostają zapisane.

## Limity

| Limit | Wartość |
| --- | --- |
| Notatek naraz | 200 |
| Tekst notatki | 4000 znaków |
| Cytowany kod notatki | 4000 znaków |

Notatki są przechowywane w folderze danych aplikacji, osobno dla projektu, dopóki ich nie wyślesz ani nie odrzucisz, więc przetrwają restart. Projekt będący worktree sesji ma własną listę.

## Wskazówki

<Aside type="tip">
Pisz każdą notatkę jako polecenie zmiany („Zmień nazwę na `total`”, „Dodaj sprawdzenie pustego koszyka”), a nie jako pytanie. Wiadomość każe agentowi zmieniać tylko to, o co prosi notatka.
</Aside>

- Notatki do diffów z indeksu i roboczych trafiają na tę samą listę i do tej samej wiadomości.
- Możesz napisać notatki, zamknąć aplikację i wysłać je jutro.

## Powiązane strony

<CardGrid>
  <LinkCard title="Zmiany i commity" href="/pl/agent/changes/" description="Skąd biorą się diffy: indeks, odrzucanie i commit." />
  <LinkCard title="Edytor i pliki" href="/pl/agent/code/" description="Wyślij zaznaczony kod agentowi zamiast notatek do diffu." />
  <LinkCard title="Terminale i sesje" href="/pl/agent/terminals/" description="Sesje, którym można wysłać wiadomość." />
</CardGrid>
