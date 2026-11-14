# Architektura ekosystemu

> Czym zajmuje się każdy produkt Skribly, jak zadanie przechodzi od trackera do commita oraz które elementy już istnieją, a które są planowane.

Skribly to warsztat pracy w modelu local-first, dla ludzi i agentów programujących. Daje im jeden tracker, jeden wygląd i jeden uczciwy zapis pracy; na start nie trzeba konta, a nic nie opuszcza Twojego komputera, dopóki tego nie wyślesz. Stan na 8 listopada 2026 r.

## Co nas wyróżnia

- **Najpierw lokalnie, bez konta.** Skribly Agent działa na Twoim komputerze, bez konta i bez telemetrii.
- **Dowolny agent.** Działa z agentami programującymi, których już używasz, na Twoich własnych logowaniach i przez otwarte standardy.
- **Zadanie żyje w Twoim repozytorium.** Zgłoszenie z Jira, Redmine, GitHub, GitLab, Linear lub Skribly Tracker staje się plikami `TASK.md` i `STATE.md` w repozytorium, więc każde narzędzie może je przeczytać.
- **Tracker stworzony dla agentów.** W Skribly Tracker agent pracuje nad zgłoszeniem jako delegat, a właścicielem pozostaje człowiek.
- **Twój styl, Twoja historia.** Commity trzymają się stylu repozytorium i nigdy nie dostają stopek współautorstwa AI.
- **Twoje dane mogą wyjść.** Plan jest taki, że każda aplikacja eksportuje wszystkie swoje dane w otwartych formatach, a żadna funkcja nie działa wyłącznie z hostowanym serwerem Skribly.

## Produkty

| Produkt | Opis | Stan |
| --- | --- | --- |
| [Skribly Agent](/pl/agent/) | Aplikacja na komputer, która uruchamia wielu agentów programujących obok siebie, zamienia zgłoszenia w pliki zadań i pokazuje, który agent pracuje, czeka na Ciebie albo skończył | Dostępny, v1.0.37 |
| [agent-skills](/pl/skills/) | Biblioteka 35 skilli i mały instalator dla ośmiu agentów programujących, we wspólnym formacie Agent Skills | Dostępne dla zespołu, v0.2.14 |
| [Skribly Tracker](/pl/tracker/) | Tracker zgłoszeń z REST API i podpisanymi webhookami, zaprojektowany dla ludzi i agentów razem | Pierwsze wydanie, 0.1; przeniesienie na wspólny stos jest planowane |
| [`@skribly/core`](/pl/core/) | Wspólne kontrakty, klient API, podpisywanie webhooków, envelope zdarzeń, tożsamość i zakresy, manifesty aplikacji, profil projektu, błędy, konfiguracja, tłumaczenia | v0.2.0 |
| [`@skribly/ui`](/pl/ui/) | Tokeny projektowe, zwykłe klasy CSS i komponenty React dla jednego wyglądu wszędzie | Pierwsza wersja |
| [skribly.pl](https://skribly.pl) | Strona produktów | Działa |
| docs.skribly.pl | Ta dokumentacja | Działa |

## Przepływ pracy

```text
Skribly Tracker            Skribly Agent                     Agenci programujący
(lub Jira, Redmine,       gałąź lub worktree,       start   Claude Code, Codex,
 GitHub, GitLab,  zadanie▶ TASK.md i STATE.md,     ──────▶  Cursor Agent, Gemini CLI
 Linear)                   sesja agenta                      i dziewięć kolejnych
      ▲                                                            │
      │ komentarz, status, czas                     reguły         │ zmiany
      │                                     agent-skills ─────────▶│
      │                                     testy, przeglądy,      ▼
      └──────────────────────────────────── audyty, commity   Przeglądasz diff
                                                              i wyniki audytów
```

1. **Planowanie.** Zadanie zaczyna się w Skribly Tracker albo trafia z Jira, Redmine, GitHub, GitLab lub Linear.
2. **Start.** Jedna akcja w Skribly Agent tworzy gałąź, zapisuje zadanie w `.skribly/tasks/<KEY>/TASK.md` i uruchamia agenta z gotowym promptem.
3. **Praca agentów.** Każdy może działać we własnym worktree, a aplikacja pokazuje, kto pracuje, czeka lub skończył.
4. **Reguły.** Testy, przeglądy, audyty i styl commitów pochodzą z jednej biblioteki skilli, agent-skills.
5. **Przegląd.** Czytasz zmiany oraz wyniki audytów bezpieczeństwa, WCAG i SEO.
6. **Zamknięcie.** Akceptujesz commit i dodajesz do zadania komentarz oraz zarejestrowany czas.

agent-skills do działania nie potrzebuje niczego więcej: to samodzielna biblioteka dla dowolnego repozytorium i każdego z ośmiu obsługiwanych agentów. Skribly Agent współpracuje z trackerami innymi niż Skribly Tracker, a API Skribly Tracker działa z dowolnym klientem HTTP.

## Jak aplikacje są dziś połączone

| Od | Do | Sposób |
| --- | --- | --- |
| Skribly Agent | Skribly Tracker, Jira, Redmine, GitHub, GitLab, Linear | REST API danego trackera z tokenem zapisanym w systemowym pęku kluczy. Zobacz [Zadania i trackery](/pl/agent/features/#zadania-i-trackery). |
| Skribly Agent | agent-skills | Klonuje repozytorium skilli, czyta `skills.json` i instaluje skille osobno dla projektu i agenta przez CLI agent-skills. |
| Skribly Agent | agenci programujący | Uruchamia własne CLI każdego agenta w terminalu lub w trybie bez interfejsu i przekazuje do sesji `SKRIBLY_TRACKER_URL` oraz `SKRIBLY_TRACKER_TOKEN`. |
| agent-skills | Skribly Tracker i pięć innych trackerów | `agent-skills tasks fetch` czyta zgłoszenia osobistym tokenem. Zobacz [Trackery](/pl/skills/trackers/). |
| agent-skills | `@skribly/core` | `.skribly/project.json` jest zgodny ze schematem profilu projektu `@skribly/core`, skopiowanym do agent-skills, aby biblioteka nie miała zależności w czasie działania. `agent-skills tasks event` wypisuje zdarzenie `skills.task.completed` w formacie core; niczego nie wysyła. |
| Skribly Tracker | dowolna usługa | [Podpisane webhooki](/pl/tracker/webhooks/) dla zdarzeń `issue.created`, `issue.updated`, `issue.deleted` i `comment.created`. |
| Każda aplikacja Node | `@skribly/core`, `@skribly/ui` | Wspólne pakiety z kontraktami, klientem Trackera, podpisywaniem webhooków i wyglądem. Zobacz [Jak łączą się aplikacje](/pl/core/connecting/). |

Aplikacje nigdy nie importują się nawzajem. Rozmawiają przez HTTP, a kształt wysyłanych danych jest zdefiniowany raz w `@skribly/core`.

## Wspólne pakiety

- **`@skribly/core` łączy wszystko.** Zawiera kontrakty używane przez aplikacje: schematy API Trackera v1, klienta Trackera, podpisywanie i weryfikację webhooków, błędy problem+json (RFC 9457), konfigurację środowiska, logi i tłumaczenia. Od wersji 0.2.0 definiuje też poniższe wspólne elementy jako schematy i helpery: tożsamość i zakresy, envelope CloudEvents, manifesty aplikacji, powiadomienia, dziennik audytu i profil projektu. Aplikacje nie korzystają jeszcze z większości z nich.
- **`@skribly/ui` daje jeden wygląd.** Trzy warstwy: tokeny projektowe, zwykłe klasy CSS dla dowolnej strony i komponenty React oparte na React Aria, które dbają o obsługę klawiatury i czytników ekranu. Późniejsza zmiana frameworka wymieni tylko górną warstwę. Ta witryna korzysta z tokenów i zwykłych klas.

## Planowane elementy

To są projekty, nie funkcje, z których można dziś korzystać w aplikacjach. Gdy `@skribly/core` 0.2.0 już definiuje kształty, mówi o tym kolumna Stan; schemat we wspólnym pakiecie nie jest jeszcze funkcją aplikacji.

| Element | Projekt | Stan |
| --- | --- | --- |
| Tożsamość | Jedno konto na osobę, organizacje z rolami `admin`, `member` i `viewer`. Aplikacje logują się przez OAuth 2.1. Integracje należą do organizacji, a nie do osoby, która je zainstalowała. | Planowane; użytkownicy, organizacje i członkostwa są zdefiniowane w `@skribly/core` |
| Tokeny | Osobiste tokeny dla osób piszących skrypty. Aplikacje i agenci dostają krótkotrwałe tokeny ograniczone do wybranych projektów i działań i działają jako widoczny bot. | Planowane; osobiste tokeny istnieją dziś w Skribly Tracker, a `@skribly/core` definiuje zakresy, takie jak `tracker.issues:write` |
| Zdarzenia | Jeden envelope w formacie CloudEvents 1.0.2, z typami rozdzielonymi kropkami, takimi jak `issue.updated`, z aktorem (osobą, agentem lub aplikacją) i opisem zmiany. Ten sam strumień zasila webhooki, skrzynkę odbiorczą, kanały aktywności, dziennik audytu i wyszukiwanie. | Envelope i katalog zdarzeń są w `@skribly/core`; żadna aplikacja jeszcze ich nie wysyła. Zobacz [Zdarzenia](/pl/core/events/). |
| Webhooki | Podpisywane zgodnie ze Standard Webhooks: id, znacznik czasu i podpis obejmujący oba, rotacja sekretu bez przestoju oraz ponawianie prób przez około dobę. | Planowane; podpisywanie HMAC-SHA256 istnieje dziś |
| Manifesty aplikacji | Każda aplikacja opisuje się w jednym pliku: nazwa, adres, nawigacja, polecenia, widżety, zdarzenia i uprawnienia. | Planowane; pierwszy schemat manifestu i rejestr są już w `@skribly/core` |
| Paleta poleceń | Cmd/Ctrl+K w każdej aplikacji, domyślnie włączona, ze skrótami sekwencyjnymi, na przykład G, a potem I dla skrzynki. | Dziś w Skribly Agent; w pozostałych planowana |
| Skrzynka odbiorcza | Jedna lista spraw wymagających Twojej uwagi, z powodem przy każdej pozycji. Na początku: „Agent czeka na Ciebie”. | Planowane |
| Sesje agentów | Agent pracuje nad zgłoszeniem jako delegat i raportuje, co robi: myśli, działania, pytania, odpowiedzi, błędy i plan. Odpowiedzialność pozostaje po stronie człowieka. | Planowane |
| MCP | Skribly Tracker udostępni serwer Model Context Protocol (rewizja 2026-07-28) z OAuth, trybem tylko do odczytu i zakresem per projekt. | Planowane; Skribly Agent ma już serwer MCP do sterowania własnymi sesjami |
| Flagi funkcji | Jeden przełącznik wyłącza wszystkie funkcje AI, a każda funkcja AI informuje, jakie dane wysyła do modelu. | Planowane |

## Otwarte standardy

| Standard | Zastosowanie |
| --- | --- |
| [Model Context Protocol](https://modelcontextprotocol.io/specification/versioning), rewizja 2026-07-28 | Narzędzia dla agentów |
| [Agent Client Protocol](https://agentclientprotocol.com/overview/introduction) | Ustrukturyzowana komunikacja z lokalnymi agentami |
| [Agent Skills](https://agentskills.io/specification) | Format agent-skills |
| [AGENTS.md](https://agents.md) | Instrukcje projektu dla agentów |
| [llms.txt](https://llmstxt.org/) | Dokumentacja czytelna dla agentów; ta witryna publikuje plik [`/llms.txt`](https://docs.skribly.pl/llms.txt) |
| [Standard Webhooks](https://www.standardwebhooks.com/) | Podpisywanie webhooków (planowane) |
| [CloudEvents 1.0.2](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md) | Envelope zdarzeń w `@skribly/core` |
| [OpenAPI 3.1](https://spec.openapis.org/oas/v3.1.0) | [Dokumentacja REST API](/pl/tracker/api/) |
| [Design Tokens (DTCG)](https://www.designtokens.org/tr/2025.10/format/) | Pliki tokenów `@skribly/ui` |
| [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/) | Cel dostępności |

## Stos technologiczny

Wspólny stos planowany dla każdej aplikacji, stan na 8 listopada 2026 r.:

| Warstwa | Wybór |
| --- | --- |
| Środowisko uruchomieniowe | Node.js 26 LTS (wsparcie do 30 kwietnia 2029), TypeScript 7 |
| Web | React 19, React Router 8, Vite 8, Tailwind CSS 4, React Aria Components |
| Serwer | Hono 4 |
| Dane | PostgreSQL 18, Drizzle ORM, Zod 4, pg-boss do kolejek |
| Desktop | Electron 45 |
| Dokumentacja | Astro 7 ze Starlight, wyszukiwanie Pagefind |
| Jakość | Vitest, Playwright, oxlint, axe |

Skribly Agent działa już na Electron, React i Vite. `@skribly/core`, `@skribly/ui` i ta witryna działają na Node.js 26. Skribly Tracker jest przepisywany na ten stos.

## Zasady

1. Najpierw lokalnie; konto służy do dzielenia się, nigdy nie jest bramką.
2. Otwarte standardy zamiast zamkniętych systemów wtyczek.
3. Odpowiedzialność pozostaje po stronie człowieka. Agenci są zawsze oznaczeni jako agenci, zatrzymują się na polecenie i nigdy po cichu nie rejestrują czasu ani nie wysyłają kodu.
4. Czas wynika z pracy, nigdy z obserwowania ludzi.
5. Zadanie znajduje się w repozytorium.
6. Jedna tożsamość, jedna powłoka, jedna paleta, jedna skrzynka, jeden wygląd.
7. Dane można wyeksportować w otwartych formatach.
8. Publiczne deklaracje są weryfikowane i opatrzone datą.

## Prywatność i dostępność

- Skribly Agent nie wysyła telemetrii. Gdy aplikacja cokolwiek wysyła, mówi, co i dokąd. Zobacz [Bezpieczeństwo](/pl/security/).
- Skribly nie będzie oferować zrzutów ekranu, zliczania naciśnięć klawiszy ani ocen produktywności ludzi.
- Celem jest WCAG 2.2 AA, a tam, gdzie to możliwe, AAA. Narzędzia automatyczne nie udowodnią pełnej zgodności, więc każde oświadczenie mówi, co sprawdzono ręcznie. Oświadczenie o dostępności nie jest deklaracją zgodności. Zobacz [Dostępność](/pl/accessibility/).
