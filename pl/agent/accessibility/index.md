# Dostępność

> Przełączniki czytania w Skribly Agent: rozmiar tekstu, tryby wyświetlania, opcje czytania i Przywróć ustawienia oraz ograniczony ruch, klawiatura, przewodnik i audyty własnych stron.

**Ustawienia → Dostępność** zawiera te same przełączniki, z tymi samymi nazwami i w tej samej kolejności, co panel dostępności stron Skribly. Zapisują się na tym urządzeniu razem z pozostałymi ustawieniami aplikacji. Skribly Agent jest budowany z WCAG 2.2 AA jako celem.

![Ustawienia, Dostępność: rozmiar tekstu 100 procent, przełączniki wyświetlania Skala szarości, Wysoki kontrast, Odwrócone kolory i Jasne tło oraz przełączniki czytania Podkreśl linki, Czytelna czcionka, Zatrzymaj animacje i Wyraźny fokus](../../../../assets/screens/agent-settings-accessibility.webp)

## Otwórz widok

- Otwórz **Ustawienia** i wybierz **Dostępność** albo
- przejdź do kroku **Dostępność** przewodnika przy pierwszym uruchomieniu, który otwiera tę stronę Ustawień.

## Jak zmienić przełącznik

<Steps>

1. Otwórz **Ustawienia → Dostępność**.

2. Dla rozmiaru tekstu naciśnij **Większy tekst** lub **Mniejszy tekst**. Rozmiar zmienia się o jeden krok, a liczba między przyciskami go pokazuje.

3. Włącz to, czego potrzebujesz, pod **Wyświetlanie** i **Czytanie**. Przełącznik działa od razu.

4. Aby wrócić, naciśnij **Przywróć ustawienia**.

</Steps>

## Opcje

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Rozmiar tekstu** | Skaluje cały interfejs, razem z terminalami i edytorem, krokami 100, 110, 120, 130 i 140 procent. Terminale dopasowują liczbę kolumn i wierszy. Strony w przeglądarce Skribly zachowują swój rozmiar, więc audyty i agenci mierzą prawdziwe okno | 100% |
| **Skala szarości** | Cały interfejs w odcieniach szarości. Wyłącza pozostałe tryby wyświetlania | Wyłączone |
| **Wysoki kontrast** | Motyw wysokiego kontrastu (czarne tło, biały tekst, żółty akcent) niezależnie od wybranego motywu. Wyłącza pozostałe tryby wyświetlania | Wyłączone |
| **Odwrócone kolory** | Odwraca jasność kolorów interfejsu. Obrazy zachowują swoje kolory. Wyłącza pozostałe tryby wyświetlania | Wyłączone |
| **Jasne tło** | Jasny motyw Skribly niezależnie od wybranego motywu. Wyłącza pozostałe tryby wyświetlania | Wyłączone |
| **Podkreśl linki** | Linki wyróżniają się nie tylko kolorem | Wyłączone |
| **Czytelna czcionka** | Verdana z większymi odstępami między literami. Kod i terminale zachowują czcionkę o stałej szerokości | Wyłączone |
| **Zatrzymaj animacje** | Zatrzymuje przejścia i animacje | Wyłączone |
| **Wyraźny fokus** | Gruba obwódka wokół elementu wybranego klawiaturą | Wyłączone |
| **Przywróć ustawienia** | Przywraca rozmiar tekstu 100% i wyłącza wszystkie przełączniki tej sekcji | |

Tryby wyświetlania działają po jednym: włączenie jednego wyłącza ten, który był włączony, jak na stronach. Rozmiar tekstu i pozostałe przełączniki łączą się.

## Ograniczony ruch

Jeśli system prosi o ograniczenie ruchu, aplikacja zatrzymuje animacje i płynne przewijanie nawet przy wyłączonym **Zatrzymaj animacje**. **Zatrzymaj animacje** dodaje się do ustawienia systemu i nie może go zastąpić.

## Klawiatura

Do wszystkiego w aplikacji dojdziesz z klawiatury: paleta poleceń `⌘K`, skróty z cyframi do widoków i prefiks `Ctrl+B` dla paneli. W Windows i Linuksie zamiast `⌘` używasz `Ctrl`. Pełna lista jest w [Skrótach klawiszowych](/pl/agent/shortcuts/).

- Listy wyboru otwierają się klawiszami `Spacja`, `Enter` lub strzałkami i przeskakują do opcji podczas pisania. Przełączniki segmentowe to jeden przystanek `Tab` i poruszasz się w nich strzałkami. Menu otwierają się klawiszem `Enter` lub strzałkami i zamykają klawiszem `Esc`, który zwraca fokus do przycisku.
- Podpowiedzi otwierają się przy fokusie z klawiatury jak po najechaniu myszą.
- Lista języków, listy skrzynki uwagi i Potoków, widok Plan i tabele tablicy zużycia działają z klawiatury.
- Przyciski tej sekcji mają co najmniej 44 piksele wysokości.

## Przewodnik i okna

Przewodnik przy pierwszym uruchomieniu to okno dialogowe: fokus przechodzi na jego przycisk i zostaje w środku, `Esc` je zamyka, a fokus wraca tam, gdzie był, strzałki przechodzą między krokami. Przy ograniczonym ruchu (systemowym albo **Zatrzymaj animacje**) przewodnik nie rysuje kursora i czeka na Ciebie zamiast przechodzić dalej sam. Czeka też, gdy okno jest ukryte.

Każde inne okno dialogowe przenosi fokus do siebie przy otwarciu, trzyma `Tab` w środku do zamknięcia i oddaje fokus kontrolce, która je otworzyła. Czytnik ekranu nazywa okno jego tytułem, a długie okno przewija treść, gdy tytuł i przyciski zostają w widoku.

## Sprawdzanie własnego projektu

Widok **Audyty** uruchamia axe-core względem WCAG 2.2 A i AA na dowolnej stronie Twojego projektu i przekazuje znaleziska agentowi jako zadanie. Zobacz [Audyty](/pl/agent/audits/). Audyt mówi, co poprawić; nie poświadcza strony.

## Wskazówki

<Aside type="tip">
Przy słabym wzroku połącz **Rozmiar tekstu**, **Wysoki kontrast** i **Wyraźny fokus**. Dla spokojniejszego ekranu włącz **Zatrzymaj animacje**.
</Aside>

- Ustawienia ze starszych wersji przenoszą się przy pierwszym starcie: skala tekstu staje się rozmiarem tekstu, a wysoki kontrast, ograniczony ruch, podkreślone linki i mocny fokus stają się po jednym przełączniku. Stare wartości zostają w `settings.json` w `legacy.accessibility`.
- Tryb motywu, motywy dzienny i nocny oraz bazowy rozmiar tekstu w pikselach są w [Wygląd i motywy](/pl/agent/themes/).

## Powiązane strony

<CardGrid>
  <LinkCard title="Wygląd i motywy" href="/pl/agent/themes/" description="Tryb motywu, motywy dzienny i nocny oraz rozmiar tekstu." />
  <LinkCard title="Skróty" href="/pl/agent/shortcuts/" description="Każdy skrót klawiszowy aplikacji." />
  <LinkCard title="Audyty" href="/pl/agent/audits/" description="Audyty dostępności własnych stron." />
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Każda sekcja Ustawień i jej wartości domyślne." />
</CardGrid>
