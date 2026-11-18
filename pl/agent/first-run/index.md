# Pierwsze uruchomienie

> Co robi Skribly Agent przy pierwszym uruchomieniu: animowany przewodnik, lista Pierwsze kroki na Pulpicie, ikona na pasku menu lub w zasobniku i jedno okno.

Przy pierwszym uruchomieniu, mniej więcej sekundę po otwarciu okna, startuje animowany przewodnik. Kursor porusza się po aplikacji, otwiera widoki i mówi, do czego każdy służy. Po przewodniku Pulpit trzyma listę **Pierwsze kroki**, która śledzi Twoją prawdziwą konfigurację. Aplikacja umieszcza też ikonę na pasku menu (macOS) lub w zasobniku systemowym (Windows i Linux).

![Przewodnik przy pierwszym uruchomieniu wskazuje przełącznik projektów, z Pauza i Dalej](../../../../assets/screens/agent-tour.webp)

## Przewodnik

Przewodnik ma 18 kroków. Przechodzi dalej sam mniej więcej co 6 sekund, a gdy okno jest ukryte, czeka na swoim kroku. Każdy krok pokazuje kartę z numerem kroku, tytułem, krótkim tekstem i paskiem postępu. Karta jest oknem dialogowym: fokus przechodzi do niej, `Tab` zostaje w jej wnętrzu, a po zamknięciu fokus wraca tam, gdzie był.

Przy ograniczonym ruchu, ustawionym w systemie albo przełącznikiem dostępności, kursor nie jest rysowany, a przewodnik nie przechodzi dalej sam: czeka, aż naciśniesz **Dalej**.

| Klawisz lub przycisk | Co robi |
| --- | --- |
| `→` lub **Dalej** | Następny krok |
| `←` lub przycisk poprzedniego kroku | Poprzedni krok |
| **Pauza** | Zatrzymuje automatyczne przechodzenie; przycisk zmienia się wtedy w **Auto** i je wznawia |
| `Esc` lub przycisk zamknięcia | Zamyka przewodnik |
| **Zaczynamy** | Zamyka przewodnik na ostatnim kroku |

Zamknięcie przewodnika w dowolny sposób oznacza go jako pokazany, więc sam nie startuje ponownie.

### Jak odtworzyć przewodnik

- Wybierz przycisk **?** u góry okna, potem **Uruchom przewodnik**, albo
- otwórz **Pomoc** na pasku aktywności i naciśnij **Uruchom przewodnik**, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Uruchom przewodnik**, albo
- wybierz **Ustawienia → Wygląd i przewodnik** i naciśnij **Uruchom teraz**, albo
- naciśnij **Przewodnik** na karcie **Pierwsze kroki** na Pulpicie.

### Jak pokazać przewodnik przy następnym uruchomieniu

<Steps>

1. Otwórz **Ustawienia → Wygląd i przewodnik**.

2. Naciśnij **Resetuj przewodnik** przy **Pokaż przewodnik przy następnym starcie**. Przycisk działa, gdy przewodnik był już pokazany.

3. Uruchom aplikację ponownie. Przewodnik startuje znów mniej więcej sekundę po otwarciu okna.

</Steps>

## Lista Pierwsze kroki

Pulpit pokazuje kartę **Pierwsze kroki** z paskiem postępu i licznikiem, na przykład `5 z 8`. Każda pozycja jest oznaczana jako zrobiona z prawdziwych danych, nie przez zaznaczanie, i ma przycisk, który prowadzi do miejsca.

| Pozycja | Zrobiona, gdy | Przycisk |
| --- | --- | --- |
| **Dodaj projekt** | Aplikacja ma co najmniej jeden projekt | **Dodaj projekt** |
| **Połącz tracker zadań** | Zapisano co najmniej jedno konto trackera | **Połącz** (otwiera **Ustawienia → Trackery zadań**) |
| **Wykryj agentów** | Zainstalowany jest co najmniej jeden agent | **Wykryj**, a po znalezieniu **Wykryj ponownie** |
| **Zainstaluj skille** | Bieżący projekt ma skill zainstalowany dla agenta | **Otwórz Skille** |
| **Uruchom pierwszego agenta** | Uruchomiono sesję agenta | **Uruchom** |
| **Podłącz agenta przez skribly mcp** | Nacisnąłeś jego przycisk; otwiera sekcję **Ustawień** z poleceniem do wklejenia | **Pokaż** |
| **Sprawdź prywatność i przełącznik sieci** | Nacisnąłeś jego przycisk; otwiera arkusz prywatności | **Pokaż** |
| **Wypróbuj Ctrl+B** | Nacisnąłeś prefiks w widoku Agenci | **Pokaż** |

Trzy ostatnie pozycje są zapamiętywane, bo aplikacja nie odczyta jej z danych. Prefiks to `Ctrl+B` w każdym systemie; naciśnij go, puść, potem naciśnij `?`, by zobaczyć ściągę skrótów paneli.

Naciśnij krzyżyk, by ukryć kartę. Gdy wszystkie pozycje są zrobione, karta mówi **Wszystko gotowe — możesz ukryć tę kartę.** i oferuje **Ukryj**. Aby ją przywrócić, wybierz **Ustawienia → Wygląd i przewodnik** i naciśnij **Pokaż ponownie** przy **Pierwsze kroki na Pulpicie**.

## Ikona na pasku menu i w zasobniku

Kliknięcie ikony przywołuje okno. Jej menu wypisuje od góry:

| Część | Co pokazuje |
| --- | --- |
| Liczniki agentów | Liczby `Pracuje`, `Czeka` i `Gotowe` |
| **Skrzynka uwagi** | Do pięciu najnowszych pozycji, każda jako `Czeka`, `Błąd` lub `Gotowe` z nazwą sesji; wybranie jednej ją otwiera |
| **Otwarte projekty** i **Ostatnie projekty** | Do pięciu w każdej; wybranie jednego otwiera projekt |
| **Ciche powiadomienia (bez dźwięku)** | Przełącznik będący odwrotnością **Dźwięk powiadomień** w **Ustawienia → Edytor i powiadomienia** |
| **Bez połączeń sieciowych aplikacji** | Przełącznik odzwierciedlający wyłącznik sieci |
| **Dziś zużyto tokenów** | Dzisiejsza liczba tokenów, tylko gdy jest jakaś liczba |
| **Pokaż Skribly**, **Ustawienia** | Przywołują okno, otwierają **Ustawienia** |
| **Sprawdź aktualizacje** | Tylko w systemie, w którym aplikacja może sprawdzać |
| **Zakończ** | Kończy aplikację |

Część bez treści jest pomijana. Długie nazwy są ucinane wielokropkiem. Na macOS liczba pozycji czekających na Ciebie jest wypisana obok ikony, a podpowiedź ikony nazywa ją w każdym systemie.

## Jedno okno

Działa tylko jedna instancja Skribly Agent. Drugie uruchomienie wysuwa istniejące okno na wierzch; jeśli zamknąłeś okno, otwiera się nowe.

<Aside type="tip">
Skróty na tej stronie używają `⌘`. W Windows i Linux używaj `Ctrl`.
</Aside>

## Powiązane strony

<CardGrid>
  <LinkCard title="Twój pierwszy obszar roboczy" href="/pl/agent/first-workspace/" description="Dodaj projekt, sklonuj go i połącz tracker." />
  <LinkCard title="Twoja pierwsza sesja" href="/pl/agent/first-session/" description="Uruchom agenta i zrób commit z jego pracy." />
  <LinkCard title="Pulpit" href="/pl/agent/dashboard/" description="Karty pierwszego widoku." />
  <LinkCard title="Skrzynka uwagi" href="/pl/agent/inbox/" description="Lista, którą odzwierciedla menu zasobnika." />
</CardGrid>
