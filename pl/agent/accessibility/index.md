# Dostępność w Skribly Agent

> Ustawienia czytelności w Skribly Agent — rozmiar tekstu interfejsu, wysoki kontrast, ograniczenie ruchu, podkreślone linki i wyraźny wskaźnik fokusu — a także obsługa klawiatury i motywy.

W **Ustawienia → Dostępność** znajdziesz preferencje czytelności interfejsu. Są zapisywane na tym urządzeniu razem z pozostałymi ustawieniami aplikacji.

| Ustawienie | Działanie | Domyślnie |
| --- | --- | --- |
| **Rozmiar tekstu interfejsu** | Skaluje cały interfejs, w tym terminale i edytor, w krokach po 100, 110, 120, 130 i 140 procent. Terminale dopasowują liczbę kolumn i wierszy; strony w przeglądarce Skribly zachowują własny rozmiar, więc audyty i agenci mierzą prawdziwy viewport. | 100% |
| **Wysoki kontrast** | Wzmacnia tekst i obramowania w motywach dziennym i nocnym. Terminal i edytor kodu zachowują kolory swojego motywu. | Wyłączone |
| **Ogranicz ruch** | Zatrzymuje przejścia i animacje. Dopóki tego nie zmienisz, aplikacja stosuje ustawienie systemu. | System |
| **Podkreślaj linki** | Linki wyróżniają się nie tylko kolorem. | Wyłączone |
| **Wyraźny wskaźnik fokusu** | Gruba obwódka wokół elementu wybranego za pomocą klawiatury. | Wyłączone |
| **Ustawienia domyślne** | Przywraca każde ustawienie w tej sekcji; ograniczenie ruchu znów podąża za systemem. | |

## Klawiatura

Do wszystkiego w aplikacji można dotrzeć z klawiatury: paletą poleceń `⌘K` (`Ctrl+K`), skrótami widoków od `⌘1` do `⌘9` i prefiksem `Ctrl+B` dla paneli. Pełna lista znajduje się na stronie [Skróty klawiszowe](/pl/agent/shortcuts/).

## Motywy i kontrast

- Osobne motywy dzienny i nocny, zgodne z ustawieniem systemu albo przełączane z paska stanu.
- Wbudowany motyw wysokiego kontrastu, **Skribly · Wysoki kontrast**.
- W każdym motywie Skribly dobiera akcent o kontraście co najmniej 3:1 względem tła, a tekst na przyciskach akcentu o kontraście co najmniej 4,5:1.
- Rozmiar tekstu można też ustawić od 12 do 16 w sekcji **Wygląd**.

## Sprawdzanie własnego projektu

Widok **Audyty** uruchamia axe-core względem WCAG 2.2 A i AA na dowolnej stronie i wysyła znaleziska agentowi jako zadanie. Skill `wcag-audit` z [agent-skills](/pl/skills/catalog/) robi to samo z poziomu dowolnego agenta.
