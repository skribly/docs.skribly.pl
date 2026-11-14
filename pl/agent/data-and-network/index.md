# Dane i sieć

> Co zapisują Skribly Agent, Skribly Tracker i agent-skills, z czym się łączą, jakie porty otwiera Skribly Agent i jak aplikacje Cię chronią.

Co zapisują aplikacje Skribly, dokąd to trafia i jakie porty otwierają. Skribly Agent nie wysyła telemetrii i nie ma własnego serwera.

## Co zapisuje Skribly Agent

| Dane | Gdzie | Ochrona |
| --- | --- | --- |
| Tokeny trackerów | `secrets.json` w katalogu danych | Szyfrowane przez systemowy magazyn haseł. Jeśli jest niedostępny, zostają tylko w pamięci |
| Konta trackerów | `trackers.json` | Zwykły JSON, bez kluczy |
| Ustawienia, projekty, układ i potoki | Pliki JSON w katalogu danych | Zwykły JSON |
| Wyłączone serwery MCP | `mcp-stash.json` | Zwykły JSON, który może zawierać klucze z konfiguracji serwera |
| Logowania w kartach przeglądarki | Osobne profile przeglądarki | Ciasteczka przeglądarki |
| Treść zadań | `.skribly/tasks/` w projekcie | Wykluczona z gita |
| Token API sterowania | `~/.skribly/control.json` | Tylko Ty możesz go odczytać, a przy każdym uruchomieniu jest nowy |

:::note
Sesje agentów uruchamiane przez aplikację dostają tokeny trackerów jako zmienne środowiskowe, żeby skille mogły pobierać zadania. Agent może je odczytać, jak każdy program w Twoim terminalu.
:::

Katalog danych otworzysz z **Ustawienia → Aktualizacje → Katalog danych → Pokaż**; zobacz [Ustawienia](/pl/agent/settings/#katalog-danych).

## Z czym łączy się Skribly Agent

Nie wysyła statystyk, raportów o awariach ani identyfikatorów. Łączy się tylko z tymi miejscami:

| Cel | Kiedy | Co jest wysyłane |
| --- | --- | --- |
| Twoje trackery | Lista zadań, szczegóły, test połączenia | Token i zapytania o zadania |
| `api.osv.dev` | Audyt bezpieczeństwa z plikami lockfile | Nazwy i wersje pakietów |
| `open-vsx.org` | Wyszukiwanie i pobieranie motywów | Zapytanie wyszukiwania |
| `github.com` | Sprawdzanie aktualizacji, które możesz wyłączyć | Standardowe żądania aktualizacji |
| Repozytorium skilli | Pobierz repozytorium lub Synchronizuj | `git clone` i `git pull` |
| Audytowana strona | Audyt dostępności lub SEO | Zwykłe żądania strony |
| Strony w Przeglądarce | Gdy je otwierasz | Jak w każdej przeglądarce |
| Tłumaczenie maszynowe | Tylko dla języka interfejsu, którego nie ma w pamięci podręcznej | Tekst interfejsu do przetłumaczenia |

Programy uruchamiane przez aplikację na Twoją prośbę nawiązują własne połączenia: agenci, `git push`, `ssh` i `npx` z ustawień MCP.

## Porty

| Port | Domyślnie | Powiązany z | Kto ma dostęp |
| --- | --- | --- | --- |
| Chrome DevTools Protocol | Wyłączony, `9333` po włączeniu | `127.0.0.1` | Każdy program na tym komputerze, bez uwierzytelniania. Widzi wszystkie karty, także zalogowane profile |
| API sterowania | Włączone, losowy wolny port | `127.0.0.1` | Procesy, które czytają token z `control.json` |

:::note
Włączaj udostępnianie przeglądarki tylko na czas pracy z agentami. Wyłącz API sterowania, jeśli go nie używasz.
:::

## Jak aplikacja Cię chroni

- Interfejs nie ma dostępu do Node.js i może wywoływać tylko stałą listę metod.
- Karty podglądu i agentów działają bez żadnego dostępu do aplikacji.
- Polecenia działają bez powłoki, z limitem czasu i limitem wyjścia. Wyjątkiem są pliki `.cmd` i `.bat` na Windows.
- Odczyt, zapis, cofanie zmian i wyszukiwanie nie przyjmują ścieżek spoza katalogu projektu.
- Rozpakowywanie paczek nie przyjmuje ścieżek wychodzących poza katalog docelowy.
- Motywy są czytane jako JSON, a kod rozszerzeń nigdy się nie uruchamia.

:::note
Terminale agentów działają z Twoimi uprawnieniami. Agent w terminalu może zrobić wszystko, co Ty możesz zrobić w terminalu.
:::

## Skribly Tracker

- Markdown jest renderowany z escapowaniem surowego HTML i bez niebezpiecznych linków.
- Załączniki zostają na prywatnym dysku i są udostępniane tylko przez autoryzowane ścieżki.
- Sekrety webhooków i tokeny API są pokazywane raz i nigdy nie trafiają do logów.
- Token obserwatora nigdy nie zmienia danych.

## agent-skills

- Wiersz poleceń łączy się tylko z Twoim trackerem oraz z OSV.dev lub PageSpeed Insights, gdy uruchamiasz te audyty. Twój menedżer pakietów łączy się ze swoimi rejestrami.
- Tokeny są wysyłane tylko do hosta danego trackera. Przekierowania na inny host nie przenoszą danych logowania.
- Polecenie trackera domyślnie działa tylko do odczytu, a ten sam tekst nigdy nie jest publikowany dwa razy.

## Czytaj dalej

- [Bezpieczeństwo](/pl/security/): jak zgłosić podatność.
- [Funkcje](/pl/agent/features/): wszystkie widoki Skribly Agent według rodzaju pracy.
