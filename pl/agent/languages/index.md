# Języki

> Wybierz język interfejsu Skribly Agent: polski i angielski są wbudowane, Jak system wybiera jeden z nich, a każdy inny język jest tłumaczony maszynowo online i zapisywany.

Interfejs Skribly Agent jest napisany po polsku i ma wbudowane tłumaczenie angielskie, więc te dwa języki działają bez sieci. Świeża instalacja startuje po polsku. Każdy inny język jest tłumaczony z polskiego tekstu przez darmowe tłumacze maszynowe online przy pierwszym wyborze, a tłumaczenie zostaje na Twoim komputerze, więc potem działa offline. Zmiana działa od razu na stronie, w menu zasobnika, w menu aplikacji, w powiadomieniach i tytułach okien, bez ponownego uruchomienia.

![Ustawienia, Edytor i powiadomienia: edytor kodu, powiadomienia włączone, dźwięk wyłączony, wyciszeni agenci i projekty oraz lista języków interfejsu](../../../../assets/screens/agent-settings-general.webp)

## Otwórz widok

Język wybierzesz w każdym z tych miejsc:

- **Ustawienia → Wygląd i przewodnik**, lista **Język interfejsu** (polski, angielski albo **Jak system**);
- **Ustawienia → Edytor i powiadomienia**, wybór **Język interfejsu** z pełną listą języków;
- paleta poleceń (`⌘K`): **Język interfejsu: polski**, **Język interfejsu: angielski** albo **Język interfejsu: jak system**;
- menu **Język interfejsu** w menu aplikacji, z pozycjami **Polski**, **English** i **Jak system**.

W Windows i Linuksie zamiast `⌘` używasz `Ctrl`.

## Jak zmienić język

<Steps>

1. Otwórz **Ustawienia → Edytor i powiadomienia**.

2. Znajdź **Język interfejsu**. Wpisz tekst w **Szukaj języka**, by filtrować listę po nazwie lub kodzie, albo poruszaj się po liście strzałkami, `Home` i `End` i naciśnij `Enter`.

3. Dla języka, którego nie ma na liście, wpisz jego kod w **Kod języka** (na przykład `ga`, `sw` lub `fa`) i naciśnij **Ustaw**. Kod to dwie lub trzy litery, ewentualnie z regionem, jak `pt-BR`.

4. Interfejs się zmienia. Dla języka innego niż polski i angielski pasek postępu pokazuje pobieranie, gdy teksty są pobierane.

</Steps>

## Jak działają języki

| Wybór | Co się dzieje |
| --- | --- |
| Polski | Język źródłowy interfejsu. Nic nie jest pobierane |
| Angielski | Czytany z pliku wewnątrz aplikacji. Tekst, którego w nim brakuje, jest tłumaczony online jak inne języki, chyba że jest już angielski |
| **Jak system** | Wybiera polski, gdy język systemu jest polski, a angielski dla każdego innego języka systemu, więc sam nigdy nie zaczyna pobierania. Podąża za zmianą języka systemu, gdy aplikacja działa |
| Każdy inny język | Tłumaczony online z polskiego, partiami, i zapisywany w katalogu danych, jeden plik na język |

Lista oferuje 39 języków (razem z polskim i angielskim) oraz **Jak system**. Język spoza listy działa przez swój kod.

## Opcje

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Język interfejsu** | Język całej aplikacji, zasobnika, menu, powiadomień i tytułów okien | Polski |
| **Kod języka** | Ustawia język, którego nie ma na liście | Puste |
| **Odśwież tłumaczenia** | Usuwa zapisane tłumaczenia bieżącego języka i pobiera je od nowa. Widoczny dla każdego języka poza polskim i Jak system | Nie dotyczy |

## Co jest wysyłane do tłumaczenia

Do tłumaczy trafiają tylko zdania z interfejsu samej aplikacji (`translate.googleapis.com`, a gdy pierwszy zawiedzie, `api.mymemory.translated.net`). Twoje projekty, zadania, kod i zawartość plików nigdy.

- Tekst bez liter albo wyglądający jak kod, ścieżka lub adres nie jest wysyłany.
- Zmienne zastępcze, kod w odwrotnych apostrofach, adresy, ścieżki, skróty klawiszowe i flagi poleceń wewnątrz zdania są przed wysłaniem zamieniane na znaczniki i po tłumaczeniu wracają na miejsce.
- Teksty, które pochodzą od Ciebie lub z Twoich danych, są oznaczone jako nietłumaczone: nazwy, opisy i teksty dodatków w **Rozszerzenia** oraz wiersze skrzynki uwagi.
- W angielskim interfejsie tekst, który już jest angielski, zostaje na komputerze.

## Offline i przełącznik sieci

- Zapisane tłumaczenie działa bez żadnej sieci.
- Gdy wybierzesz język, którego jeszcze nie ma zapisanego, a komputer jest offline, komunikat mówi, że tłumaczenie pobierze się po połączeniu, a interfejs tymczasem pokazuje polski. Kończy się samo, gdy połączenie wróci.
- Tekst, którego tłumacz nie zwrócił, jest próbowany ponownie po minucie.
- Przy włączonym **Bez połączeń sieciowych aplikacji** w [Prywatność i sieć](/pl/agent/data-and-network/) nic nie jest wysyłane do tłumaczenia i widać tylko zapisane tłumaczenia.

<Aside type="note">
Tłumacze to usługi firm trzecich, więc tłumaczenie maszynowe może być błędne lub dziwne. Wybierz polski albo angielski, gdy potrzebujesz dokładnych słów aplikacji.
</Aside>

## Wskazówki

- Użyj **Odśwież tłumaczenia**, gdy tłumaczenie wygląda źle albo część tekstu została po polsku.
- Język commitów to osobne ustawienie każdego projektu, w [Ustawieniach](/pl/agent/settings/).

## Powiązane strony

<CardGrid>
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Każda sekcja Ustawień i jej wartości domyślne." />
  <LinkCard title="Wygląd i motywy" href="/pl/agent/themes/" description="Motywy, tryb motywu i rozmiar tekstu." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Co jest wysyłane przez sieć i przełącznik, który to zatrzymuje." />
  <LinkCard title="Skróty" href="/pl/agent/shortcuts/" description="Paleta poleceń i skróty klawiszowe." />
</CardGrid>
