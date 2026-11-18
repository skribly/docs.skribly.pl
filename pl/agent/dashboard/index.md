# Pulpit

> Pulpit w Skribly Agent: akcje startowe, wykryci agenci, lista Pierwsze kroki, liczniki, aktywność repozytoriów, wykres tokenów, projekty i ostatnie commity.

Pulpit to pierwszy widok. Podsumowuje Twoją pracę na jednej stronie: ilu agentów pracuje i ilu czeka na Ciebie, Twoje commity, zużycie tokenów i Twoje projekty. Używasz go, by zacząć pracę i zobaczyć, jak wygląda sytuacja.

![Pulpit nocą: Uruchom agenta, Moje zadania i Dodaj projekt, wykryci agenci, lista Pierwsze kroki, cztery liczniki i aktywność repozytoriów](../../../../assets/screens/agent-dashboard.webp)

![Ten sam Pulpit w motywie dziennym](../../../../assets/screens/agent-dashboard-light.webp)

## Otwórz widok

- Kliknij **Pulpit** na pasku aktywności po lewej albo naciśnij `⌘1`, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Pulpit**.

Skróty na tej stronie używają `⌘`. W Windows i Linux używaj `Ctrl`.

## Co jest na stronie

| Część | Co pokazuje lub robi |
| --- | --- |
| Hero | Powitanie i trzy akcje: **Uruchom agenta** otwiera widok Agenci z nową sesją pierwszego zainstalowanego agenta (zwykłą powłoką, gdy żaden nie jest zainstalowany), **Moje zadania** otwiera [Zadania](/pl/agent/tasks/), **Dodaj projekt** pyta o folder |
| Wykryci agenci | Jeden znacznik na agenta. Zainstalowany pokazuje po najechaniu nazwę i wersję. Brakujący jest przyciemniony; kliknięcie uruchamia jego instalację |
| **Pierwsze kroki** | Lista konfiguracji opisana na stronie [Pierwsze uruchomienie](/pl/agent/first-run/). Znika, gdy ją zamkniesz |
| Liczniki | **agentów pracuje teraz**, **czeka na Twoją decyzję** (kliknij, by otworzyć widok Agenci), **zadań w toku** (kliknij, by otworzyć Zadania) i **Twoich commitów w 7 dni** |
| **Aktywność w repozytoriach** | Twoje commity i, gdy połączyłeś konta Git, ich kalendarze. Zakresy: **14 dni**, **3 mies.** i **rok**. Podsumowanie podaje dni z rzędu, najdłuższą serię, sumę tego roku i tego tygodnia. Przycisk odświeżania skanuje repozytoria ponownie |
| **Tokeny agentów — 14 dni** | Wykres tokenów na dzień. Grupuj go według **Rodzaj**, **Agent** lub **Model** i przełączaj liczone rodzaje: **Wejście**, **Wyjście**, **Zapis cache**, **Odczyt cache**. **Tablica** otwiera [tablicę zużycia tokenów](/pl/agent/usage/). **Jak to jest liczone** wyjaśnia źródła |
| **Najaktywniejsze repozytoria** | Repozytoria z największą liczbą Twoich commitów w wybranym zakresie |
| **Projekty** | Każdy projekt z liczbą sesji. Kliknij jeden, by go wybrać i otworzyć widok Kod. **Dodaj** dodaje projekt |
| **Ostatnie commity** | Twoje najnowsze commity z ostatnich 14 dni ze wszystkich projektów, z hashem, tematem i wiekiem. Kliknij jeden, by otworzyć jego projekt w widoku Kod |

Aktywność liczy Twoje commity ze wszystkich gałęzi Twoich projektów i repozytoriów w wybranych folderach, pod wszystkimi Twoimi adresami e-mail z gita. Gdy nie znajdzie żadnych, karta mówi, jakich adresów szukała, i podpowiada połączenie konta GitHub lub GitLab. Konta łączysz w **Ustawienia → Konta Git**.

## Wskazówki

<Aside type="tip">
Liczniki i listy wczytują się ponownie, gdy dodasz projekt, uruchomisz lub zamkniesz sesję albo odświeżysz aktywność.
</Aside>

- Znacznik brakującego agenta to najkrótsza droga do instalacji agenta: otwiera postęp instalacji w aplikacji. Polecenia są na stronie [Obsługiwani agenci](/pl/agent/agents/).

## Powiązane strony

<CardGrid>
  <LinkCard title="Pierwsze uruchomienie" href="/pl/agent/first-run/" description="Przewodnik i lista Pierwsze kroki." />
  <LinkCard title="Zużycie tokenów i zasoby" href="/pl/agent/usage/" description="Tablica za wykresem tokenów." />
  <LinkCard title="Skrzynka uwagi" href="/pl/agent/inbox/" description="Sesje, które czekają na Ciebie." />
  <LinkCard title="Twój pierwszy obszar roboczy" href="/pl/agent/first-workspace/" description="Dodaj projekt." />
</CardGrid>
