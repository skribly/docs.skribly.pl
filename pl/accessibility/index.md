# Dostępność

> Cel dostępności Skribly i tej witryny dokumentacji, co sprawdzono, znane ograniczenia i jak zgłosić barierę.

Skribly budujemy z **poziomem AA WCAG 2.2 jako celem**, a tam, gdzie się da, także AAA. Narzędzia automatyczne nie udowodnią pełnej zgodności, więc ta strona mówi, co sprawdzono i jak. To oświadczenie o zamiarach i znanych ograniczeniach, a nie deklaracja zgodności.

## Ta witryna

docs.skribly.pl budujemy z celem WCAG 2.2 AA.

| Co | Jak |
| --- | --- |
| Motywy | Dzień, noc i wysoki kontrast, z przełącznika motywu w nagłówku. **Jak w systemie** podąża za ustawieniem systemu, także za opcją „zwiększ kontrast”. Wybór obowiązuje na każdej stronie Skribly. |
| Ustawienia czytania | Przycisk dostępności w nagłówku otwiera panel: rozmiar tekstu do 140%, skala szarości, wysoki kontrast, odwrócone kolory, jasne tło, podkreślone linki, czytelna czcionka, zatrzymane animacje i wyraźny fokus. Ustawienia obowiązują na każdej stronie Skribly. |
| Kolory | Kolory pochodzą z tokenów `@skribly/ui`, których testy sprawdzają kontrast każdej pary tekstu i kontrolki względem progów WCAG we wszystkich trzech motywach. Linki są podkreślone, więc nigdy nie polegają wyłącznie na kolorze. |
| Klawiatura | Wszystkie linki, wyszukiwanie, menu, przełącznik motywu i panel dostępności działają z klawiatury. <kbd>Ctrl</kbd>+<kbd>K</kbd> lub <kbd>/</kbd> otwiera wyszukiwanie, a <kbd>Esc</kbd> je zamyka. Link „przejdź do treści” prowadzi do treści, a widoczny wskaźnik fokusu pokazuje, gdzie jesteś. |
| Struktura | Jeden `h1` na stronę, nagłówki po kolei, landmarki dla nagłówka, nawigacji, paska bocznego, treści i stopki, ścieżka nawigacji (breadcrumbs) i spis treści na dłuższych stronach. |
| Ruch | Przejścia między stronami, animacje i płynne przewijanie zatrzymują się, gdy system prosi o ograniczenie ruchu albo gdy wybierzesz **Zatrzymaj animacje** w panelu dostępności. |
| Powiększenie i małe ekrany | Układ działa od szerokości 320 pikseli i przy powiększeniu 400% bez poziomego przewijania strony; szerokie tabele przewijają się same. |
| Wyszukiwanie | Wyszukiwanie działa w przeglądarce, z lokalnego indeksu, i jest dostępne z klawiatury. |
| Język | Każda strona deklaruje swój język (polski albo angielski). |

Znane ograniczenia:

- [Dokumentacja API](/pl/tracker/api/) jest generowana z opisu OpenAPI przez wtyczkę, a jej znaczniki są mniej dopracowane niż na stronach pisanych ręcznie.
- Zrzuty ekranu mają opisy tekstowe, ale nie pokazują wszystkiego, co wyświetla aplikacja.

## Aplikacje

| Narzędzie | Co oferuje |
| --- | --- |
| Skribly Agent | Rozmiar tekstu interfejsu, wysoki kontrast, ograniczenie ruchu, podkreślanie linków i wyraźny wskaźnik fokusu w **Ustawienia → Dostępność**; pełna obsługa z klawiatury; wbudowane motywy: jasny, ciemny i wysokiego kontrastu. Zobacz [Dostępność w Skribly Agent](/pl/agent/accessibility/). |
| Skribly Tracker | Jasny i ciemny motyw, panel dostępności na każdej stronie (rozmiar tekstu, kontrast, czcionki i ruch) oraz tablica obsługiwana z klawiatury: otwierasz zgłoszenie i tam zmieniasz jego status. |
| `@skribly/ui` | Komponenty na React Aria dla obsługi klawiatury i czytników ekranu, znaczenie nigdy niesione samym kolorem i kontrola axe każdego demo w każdym motywie. Zobacz [UI](/pl/ui/). |
| agent-skills | Skill `wcag-audit` sprawdza Twój interfejs względem WCAG 2.2 AA przez axe-core i listę kontrolną. |

## Zgłaszanie barier

Jeśli coś w tej witrynie lub w narzędziu Skribly jest trudne albo niemożliwe w użyciu, napisz na **[contact@skribly.pl](mailto:contact@skribly.pl)**. Podaj stronę lub ekran, to, co próbujesz zrobić, oraz używaną przeglądarkę, technologię asystującą i system. Czytamy każdą wiadomość i traktujemy bariery jak błędy.
