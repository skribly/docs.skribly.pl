# Lista zmian

> Co się zmieniło w Skribly Agent, Skribly Tracker, agent-skills i w tej dokumentacji, prostymi słowami, od najnowszych.

Co się zmieniło w każdym narzędziu, przepisane prostymi słowami z notatek do wydań. Wydania bez widocznej zmiany pomijamy. Każdy push do `main` w repozytorium produktu publikuje wydanie GitHub Release z notatkami pogrupowanymi na podstawie commitów.

## Listopad 2026

### Dokumentacja, 14 listopada: strony przeniesione ze skribly.pl

- Przenosiny są zakończone: przewodniki po Skribly Agent, Skribly Tracker i agent-skills są teraz tylko w tej dokumentacji. Strona [Instalacja](/pl/skills/install/) agent-skills dostała kroki połączenia trackera, a [przegląd](/pl/skills/) odsyła do zmierzonych oszczędności tokenów.

- Cztery nowe strony w sekcji Skribly Agent: [Polecenie skribly](/pl/agent/cli/), [Reguły audytów](/pl/agent/audits/), [Oszczędzanie tokenów](/pl/agent/token-saving/) oraz [Dane i sieć](/pl/agent/data-and-network/). Serwer MCP Skribly Agent opisuje osobna strona, która jest planowana.
- [Skróty klawiszowe](/pl/agent/shortcuts/) wymieniają teraz podgląd agentów, przejście do następnego czekającego agenta, przejście do linii, zamknięcie karty i dolny terminal. [Skribly Tracker](/pl/tracker/) i [przewodnik po REST API](/pl/tracker/rest-api/) dostały kroki łączenia pozostałych narzędzi i krótką sekcję o uwierzytelnianiu.

### Dokumentacja, 11 listopada: wyszukiwarka na stronie głównej

- Na stronie głównej jest teraz pole wyszukiwania, które podpowiada strony w trakcie pisania, narzędzia jako zakładki, polecenie szybkiego startu z przyciskiem Kopiuj i najnowsze wpisy tej listy.
- Bez JavaScriptu formularz wyszukiwania otwiera stronę Wszystkie strony (`/pl/all-pages/`), czyli każdą stronę dokumentacji ułożoną jak w menu bocznym. Zapytanie zostaje na tej stronie.
- Strona Autorzy ma nagłówek nad kartami autorów.

### Dokumentacja, 11 listopada: jeden układ strony

- Każda strona zaczyna się teraz tak samo jak na skribly.pl i ui.skribly.pl: ścieżka nawigacji, potem tytuł strony z jednozdaniowym podsumowaniem pod nim, potem treść.

### Dokumentacja, 11 listopada: licencje i przełącznik języka

- Stopka każdej strony prowadzi teraz do strony Licencje, z listą pakietów i czcionek używanych przez serwis wraz z ich licencjami: `/licenses/` po angielsku i `/pl/licencje/` po polsku.
- Przełącznik języka jest teraz w nagłówku każdej strony, która istnieje w obu językach, a na wąskich ekranach także na liście stron. Zaznacza bieżący język i prowadzi do tej samej strony w drugim.
- Krótkie nagrania na polskich stronach pokazują teraz polski interfejs i mają polskie napisy.

### agent-skills 0.2.13 i 0.2.14, 11 listopada

- Sześć nowych skilli, razem 35: `adr`, `plan-step`, `run-step`, `release`, `docs-sync` i `design-review`. Zobacz [Katalog skilli](/pl/skills/catalog/).
- Nowe polecenie `agent-skills agent-files`: generuje z `AGENTS.md` repozytorium pliki `CLAUDE.md`, `GEMINI.md`, regułę Cursora, instrukcje Copilota, foldery skilli projektu i `.mcp.json` tylko do odczytu, nigdy nie zastępuje pliku, którego nie zapisało, chyba że wymusisz, a `--check` kończy się błędem, gdy czegoś brakuje lub jest nieaktualne. `agent-skills doctor` pokazuje teraz, czy każdy agent jest skonfigurowany dla repozytorium. Zobacz [Pliki instrukcji projektu](/pl/skills/agents/#pliki-instrukcji-projektu).
- Nowy cel `devin`: Devin jest ósmym obsługiwanym agentem. Czyta wspólny folder `.agents/skills` i `AGENTS.md`. Zobacz [Obsługiwani agenci](/pl/skills/agents/).
- Ukończone zadania znikają z TODO: `run-step` ma sprawdzenie `tidy`, a `docs-sync` sprawdza tę samą regułę.
- `agent-files` zapisuje, tworzy kopie zapasowe i usuwa tylko wewnątrz repozytorium i obsługuje tylko dowiązania symboliczne, które prowadzą do wnętrza repozytorium.

### Dokumentacja, 11 listopada: aktualne liczby

- Strony przeglądowe, strony o skillach, strona instalacji i FAQ zgadzają się teraz z wydanymi wersjami: 35 skilli, ośmiu agentów, agent-skills 0.2.14. Katalog opisuje sześć nowych skilli, a strona Obsługiwani agenci opisuje Devina i pliki generowane przez `agent-skills agent-files`.
- Data wydania Skribly Agent 1.0.37 na jego stronie przeglądowej to teraz 6 listopada.
- Ta lista zyskała wydania Skribly Agent od 1.0.33 do 1.0.37 oraz agent-skills 0.2.11, których w niej brakowało.

### Dokumentacja, 11 listopada: wersja polska

- Każda strona dokumentacji jest teraz dostępna także po polsku pod adresem `/pl/`. Język wybierasz w nagłówku; nagłówek, stopka, wyszukiwanie i panel dostępności podążają za nim, a każda strona wskazuje swój odpowiednik wyszukiwarkom.

### Dokumentacja, 8 listopada: jeden wygląd z pozostałymi witrynami

- Witryna korzysta teraz z site kitu `@skribly/ui`: ten sam nagłówek z przełącznikiem produktów Skribly, przełącznik motywu, panel dostępności, wyszukiwanie, stopka, ścieżka nawigacji (breadcrumbs) i strona 404 co na pozostałych witrynach Skribly.
- Motyw i ustawienia dostępności obowiązują na każdej witrynie Skribly. **Auto** nazywa się teraz **Jak w systemie**.
- Wyszukiwanie otwiera się skrótem <kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>⌘</kbd>+<kbd>K</kbd> lub <kbd>/</kbd> w tym samym oknie co na pozostałych witrynach.
- Strony zmieniają się przez view transition, a strona główna wymienia narzędzia z ich logo. Wszystkie animacje zatrzymują się przy ograniczeniu ruchu.
- Strona [UI](/pl/ui/) prowadzi do galerii komponentów na żywo, [ui.skribly.pl](https://ui.skribly.pl).

### Dokumentacja, 8 listopada

- docs.skribly.pl rusza z przewodnikami dla każdego narzędzia, dokumentacją REST API wygenerowaną z opisu OpenAPI, wyszukiwaniem, `llms.txt` oraz motywami jasnym, ciemnym i wysokiego kontrastu.

### agent-skills 0.2.11, 8 listopada

- Skill `project` zachowuje odwołanie `$schema`, które ustawisz ręcznie w `.skribly/project.json`.

### agent-skills 0.2.10, 8 listopada

- Nowy skill `project` i `agent-skills project`: stos, polecenia i konwencje commitów są wykrywane do `.skribly/project.json`, a wartości ustawione ręcznie nigdy nie są nadpisywane. Instalacje w zakresie projektu też je wykrywają.
- Nowy skill `learn`: potwierdzone lekcje o projekcie trafiają do `.skribly/lessons.md` po Twoim „ok”, razem 29 skilli.
- Każdy skill najpierw czyta profil projektu i lekcje.
- `agent-skills tasks event` wypisuje zdarzenie `skills.task.completed` zadania. Zobacz [Katalog skilli](/pl/skills/catalog/).

### Skribly Agent 1.0.37, 6 listopada

Wersje od 1.0.33 do 1.0.37 wyszły tego samego wieczoru.

- Podgląd na żywo wszystkich agentów, zerknięcie do sesji i przejście do agentów, którzy czekają na Ciebie.
- Czaty wracają po ponownym uruchomieniu.
- Panel po prawej z narzędziami sesji oraz klonowanie projektu z linku. Zobacz [Panel agenta](/pl/agent/terminals/#panel-agenta).
- Ikony zasobnika są teraz dołączane do instalatorów.

### Skribly Agent 1.0.32, 6 listopada

- Nowa sekcja **Dostępność** w Ustawieniach: rozmiar tekstu interfejsu, wysoki kontrast, ograniczenie ruchu, podkreślanie linków, wyraźny wskaźnik fokusu i reset. Zobacz [Dostępność w Skribly Agent](/pl/agent/accessibility/).

### Skribly Tracker 0.1.20, 6 listopada

- Każda strona dostaje panel dostępności (rozmiar tekstu, kontrast, czcionki i ruch).

### Skribly Agent 1.0.30, 4 listopada

- Aplikacja dostaje nazwę Skribly Agent. Istniejące instalacje zachowują ustawienia, tokeny, sesje i logowania. Zobacz [Aktualizacja z poprzedniej nazwy](/pl/agent/updates/#aktualizacja-z-poprzedniej-nazwy).
- Cały tekst interfejsu jest zaktualizowany po polsku i angielsku.

### Skribly Tracker 0.1.16, 4 listopada

- Interfejs i logo przyjmują nazwę Skribly.
- Webhooki wysyłają nagłówki `X-Skribly` obok starszych, więc dotychczasowe odbiorniki nadal działają.

### agent-skills 0.2.5, 4 listopada

- Identyfikator trackera to teraz `skribly`, ze zmiennymi `SKRIBLY_TRACKER_URL` i `SKRIBLY_TRACKER_TOKEN`. Starsze nazwy i poświadczenia nadal działają.

## Październik 2026

### Skribly Agent 1.0.27, 29 października

- Skribly Tracker staje się domyślnym trackerem.

### Skribly Agent 1.0.26

- Nowe ikony w zasobniku i w oknie, z własnym kolorem akcentu aplikacji.

### Skribly Agent 1.0.23

- Interfejs można przetłumaczyć na dowolny język online i dalej działa offline.
- Zaloguj się do GitHub, GitLab, Bitbucket, Gitea lub Azure DevOps, aby zobaczyć prawdziwą aktywność commitów.
- Można zmieniać rozmiar węzłów potoków i je rozwijać.
- Instalacje pokazują pasek postępu, upływający czas i ostatnią linię wyjścia.

### Skribly Agent 1.0.19

- Monitorowanie Dockera, instalacje jednym kliknięciem, integracje z Cursorem i z pull requestami GitHub oraz wprowadzenie dla nowych użytkowników (onboarding).
- Można zmieniać rozmiar bocznego panelu Kod.

### Skribly Agent 1.0.15

- Niepodpisane kompilacje macOS aktualizują się na miejscu.

### Skribly Agent 1.0.7

- Spakowana aplikacja uruchamia się poprawnie.
- Menu Claude Code przy pierwszym uruchomieniu są wykrywane jako czekanie na decyzję.

### Skribly Agent 1.0.4

- Pierwsze wydanie: pulpit, agenci, zadania, kod i git, potoki, skille i audyty.
- Obszary robocze, karty i podzielone panele, ze stanami agentów odczytywanymi z ekranu.
- Przywracanie sesji, API sterowania i wiersz poleceń z MCP.
- Zadania z trackera obsługiwane z aplikacji: komentarze, status, przypisanie, tworzenie, rejestrowanie czasu i wyszukiwanie.
- Przeglądarka z osobnym profilem dla każdego agenta, wtyczki Claude i serwery MCP.
- Własni agenci, maszyny SSH, worktree, ustawienia wyglądu i pomoc.

### Skribly Tracker 0.1.9

- REST API v1 ma dokumentację z przykładami curl i opis OpenAPI 3.1.

### Skribly Tracker 0.1.8

- Tracker dostaje logo rodziny i błękitny akcent.

### Skribly Tracker 0.1.7

- Testy obejmują API, uprawnienia i ścieżki w przeglądarce.

### Skribly Tracker 0.1.5

- Tracker działa w Dockerze.

### Skribly Tracker 0.1.3

- Interfejs w przeglądarce: pulpit, tablica Kanban, lista i strony zgłoszeń.
- Demonstracyjna przestrzeń, z poleceniami do tokenów i danych przykładowych.

### Skribly Tracker 0.1.2

- Pierwsza wersja.

### agent-skills 0.2.2

- Skill `task` potrafi czytać Skribly Tracker.

### agent-skills 0.2.0

- 13 nowych skilli, razem 27: wydajność, backend, API, testy end-to-end i obciążeniowe, migracje, Docker, CI, aktualizacje, refaktoryzacja, tłumaczenia i notatki do wydań.
- Nowe skrypty skracają wyniki narzędzi dla modelu: Lighthouse, pokrycie zmienionych wierszy, mapy OpenAPI, raporty Playwright, podsumowania testów obciążeniowych, lintery migracji i Dockerfile i inne.
- Nowe przewodniki: pierwsze kroki, skille, trackery, oszczędzanie tokenów i hook commitów.

### agent-skills 0.1.0

- Pierwsze wydanie: 14 skilli i instalator w wierszu poleceń dla siedmiu agentów.
- Obsługa trackerów Redmine, Jira, GitHub, GitLab i Linear, domyślnie tylko do odczytu.
- Hook `commit-msg`, który usuwa stopki AI ze współautorami (co-author).

## Wspólne pakiety

### `@skribly/core` 0.2.0

- Tożsamość i zakresy, envelope zdarzeń CloudEvents i katalog, manifesty aplikacji i rejestr, powiadomienia, dziennik audytu, profil projektu z jego JSON Schema, podpisane zdarzenia i helpery Hono. Zobacz [Core](/pl/core/) i [Zdarzenia](/pl/core/events/).

### `@skribly/core` 0.1.0

- Pierwsza wersja: kontrakty i klient API Trackera, podpisywanie webhooków, błędy problem+json, konfiguracja środowiska, logi, tłumaczenia, tokeny projektowe i presety. Zobacz [Core](/pl/core/).

### `@skribly/ui`, pierwsza wersja

- Tokeny projektowe w trzech motywach, zwykłe klasy CSS oraz komponenty `Logo`, `Button`, `IconButton`, `TextField`, `Card`, `Badge` i `Alert`. Zobacz [UI](/pl/ui/).
- Od tego czasu, na głównej gałęzi: grupy komponentów dla motywu, akcji, formularzy, informacji zwrotnej, nakładek, nawigacji, powierzchni, danych, szkieletu aplikacji, wyszukiwania, treści, rozmowy, onboardingu, wykresów, mediów, trackera, kodu i stron uwierzytelniania.
