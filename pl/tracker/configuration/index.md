# Konfiguracja

> Zmienne środowiskowe, które konfigurują Skribly Tracker: aplikację, bazę danych, kolejkę, pocztę i własne limity trackera.

Skribly Tracker odczytuje ustawienia z pliku `.env`. Zacznij od `.env.example`. W Docker Compose stos sam ustawia hosta bazy danych i kolejkę, więc zazwyczaj wystarczą zmienne oznaczone poniżej.

## Tracker

| Zmienna | Wartość domyślna | Działanie |
| --- | --- | --- |
| `TRACKER_PORT` | `8100` | Port hosta kontenera nginx |
| `TRACKER_ADMIN_PASSWORD` | pusty | Hasło konta administratora tworzonego przez seeder. Wymagane przy zasilaniu (seed) produkcji. |
| `TRACKER_MAX_UPLOAD_KB` | `10240` | Maksymalny rozmiar załącznika w kilobajtach |
| `TRACKER_WEBHOOK_TIMEOUT` | `5` | Ile sekund może trwać dostarczenie webhooka, zanim zostanie porzucone |
| `TRACKER_VERSION` | `0.1.0` | Wersja wyświetlana w interfejsie i w nagłówku `User-Agent` webhooka |

## Aplikacja

| Zmienna | Wartość domyślna | Działanie |
| --- | --- | --- |
| `APP_NAME` | `Skribly Tracker` | Nazwa wyświetlana w interfejsie i wiadomościach e-mail |
| `APP_ENV` | `local` | Wartość `production` dla prawdziwej instalacji; decyduje też, czy w Dockerze zostaną zainstalowane pakiety deweloperskie |
| `APP_KEY` | pusty | Klucz szyfrowania; skrypt entrypoint generuje go przy pierwszym starcie |
| `APP_DEBUG` | `true` | Ustaw na `false` w środowisku produkcyjnym |
| `APP_URL` | `http://localhost:8100` | Publiczny adres używany w adresach URL zgłoszeń i załączników w API |
| `APP_TIMEZONE` | `Europe/Warsaw` | Strefa czasowa znaczników czasu w API i webhookach |
| `APP_LOCALE` | `en` | Domyślny język interfejsu: `en` lub `pl`; każda osoba wybiera własny na stronie profilu |
| `APP_FALLBACK_LOCALE` | `en` | Język używany w przypadku braku tłumaczenia |

## Baza danych

| Zmienna | Wartość domyślna | Działanie |
| --- | --- | --- |
| `DB_CONNECTION` | `mysql` | `mysql` lub `sqlite` |
| `DB_HOST`, `DB_PORT` | `127.0.0.1`, `3306` | Docker Compose ustawia hosta na `mysql` |
| `DB_DATABASE` | `skryba_tracker` | Nazwa bazy danych zachowuje poprzednią nazwę produktu, dzięki czemu istniejące katalogi danych nadal działają |
| `DB_USERNAME`, `DB_PASSWORD` | przykładowe wartości | Zmień je w każdej instalacji współdzielonej |
| `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_ROOT_PASSWORD` | przykładowe wartości | Używane przez kontener MySQL przy pierwszym uruchomieniu |

## Kolejka, cache, sesje i logi

| Zmienna | Wartość domyślna | Działanie |
| --- | --- | --- |
| `QUEUE_CONNECTION` | `database` | Dostarczanie webhooków odbywa się jako zadania w kolejce; musi działać worker |
| `CACHE_STORE` | `file` | |
| `SESSION_DRIVER` | `file` | |
| `SESSION_LIFETIME` | `120` | Liczba minut do wygaśnięcia sesji przeglądarki |
| `LOG_CHANNEL` | `stack` | Docker Compose zapisuje logi do `stderr` |
| `LOG_LEVEL` | `debug` | W środowisku produkcyjnym użyj poziomu `warning` lub wyższego |

## Poczta

| Zmienna | Wartość domyślna | Działanie |
| --- | --- | --- |
| `MAIL_MAILER` | `log` | Wiadomości trafiają do logu, dopóki nie skonfigurujesz prawdziwego mailera |
| `MAIL_FROM_ADDRESS` | `tracker@skribly.pl` | Adres nadawcy; ustaw własny |
| `MAIL_FROM_NAME` | `${APP_NAME}` | Nazwa nadawcy |

## Środowisko deweloperskie

| Zmienna | Działanie |
| --- | --- |
| `VITE_DEV_SERVER` | `true` udostępnia zasoby z kontenera Vite z hot reload |
| `DB_WAIT_ATTEMPTS` | Liczba ponowień połączenia z bazą danych przez skrypt entrypoint w odstępach dwusekundowych, zanim zrezygnuje; domyślnie `60` |

## Klienci

Klienci trackera czytają dwie własne zmienne. Skribly Agent przekazuje je do każdej sesji agenta, a agent-skills odczytuje je ze środowiska lub pliku poświadczeń:

| Zmienna | Przykład |
| --- | --- |
| `SKRIBLY_TRACKER_URL` | `http://localhost:8100` |
| `SKRIBLY_TRACKER_TOKEN` | [Osobisty token dostępu](/pl/tracker/tokens/) |

Dawne nazwy `SKRYBA_TRACKER_URL` i `SKRYBA_TRACKER_TOKEN` nadal działają jako rezerwa.
