# Własny hosting z Dockerem

> Uruchom Skribly Tracker na własnym komputerze lub serwerze z Docker Compose albo bez Dockera i zachowaj dane między restartami.

Tracker ma gotowy stos Docker Compose: aplikację (PHP-FPM), nginx, MySQL 8.4, Vite do zasobów i workera kolejki, który dostarcza webhooki.

:::note[Dostęp]
Repozytorium jest na razie prywatne, więc klonowanie wymaga dostępu do organizacji Skribly na GitHubie.
:::

## Start z Dockerem

<Steps>

1. Sklonuj repozytorium i utwórz plik środowiskowy:

   ```bash
   git clone https://github.com/skribly/tracker.git skribly-tracker
   cd skribly-tracker
   cp .env.example .env
   ```

2. Przed pierwszym uruchomieniem ustaw hasło do konta administratora. Otwórz plik `.env` i uzupełnij `TRACKER_ADMIN_PASSWORD`; linia nad nim podaje adres e-mail administratora.

3. Zbuduj i uruchom stos:

   ```bash
   docker compose up -d --build
   ```

4. Otwórz adres `http://localhost:8100` i zaloguj się jako administrator.

</Steps>

Przy pierwszym starcie skrypt startowy generuje klucz aplikacji, czeka na bazę danych, uruchamia migracje i zasila demonstracyjną przestrzeń trzema projektami, ich zgłoszeniami, komentarzami i wpisami czasu. Kolejne restarty zachowują dane: zasilanie (seed) działa tylko wtedy, gdy baza jest pusta.

:::caution
Bez `TRACKER_ADMIN_PASSWORD` instalacja lokalna używa hasła demonstracyjnego, a instalacja produkcyjna (`APP_ENV=production`) odmawia zasilenia danymi. Nigdy nie wystawiaj instalacji demonstracyjnej do internetu.
:::

## Usługi

| Usługa | Adres | Uwagi |
| --- | --- | --- |
| Tracker (nginx) | `http://localhost:8100` | Zmienisz przez `TRACKER_PORT` |
| Vite | `http://localhost:5174` | Buduje przy zapisie; `VITE_DEV_SERVER=true` włącza hot reload |
| MySQL 8.4 | Tylko wewnątrz sieci Docker | Dane w nazwanym wolumenie |
| Worker kolejki | Brak portu | Dostarcza webhooki: 3 próby, potem rezygnuje |

nginx udostępnia endpoint `/health`, którego używa healthcheck kontenera. Przesłane pliki leżą w nazwanym wolumenie `app-storage`, więc przetrwają przebudowanie.

## Codzienne polecenia

```bash
docker compose logs -f app queue                 # follow the app and the webhook worker
docker compose exec app php artisan tracker:token you@example.com "Skribly Agent"
docker compose exec app php artisan migrate      # after pulling a new version
docker compose down                              # stop; data stays in the volumes
docker compose down -v                           # stop and delete all data
```

## Bez Dockera

Potrzebujesz PHP 8.4, Composera i Node.js 22.

```bash
cp .env.example .env          # set DB_* or DB_CONNECTION=sqlite
composer install && npm install && npm run build
php artisan key:generate
php artisan migrate --seed
php artisan serve
php artisan queue:work        # in a second terminal, for webhooks
```

## Uruchomienie dla zespołu

- Ustaw `APP_ENV=production`, `APP_DEBUG=false` oraz `APP_URL` na publiczny adres.
- Umieść Tracker za HTTPS. Tokeny są przesyłane w nagłówku `Authorization`.
- Zmień w `.env` hasła do bazy z przykładowych na własne.
- Pilnuj, żeby worker kolejki działał, bo inaczej webhooki nie będą dostarczane.
- Rób kopie zapasowe wolumenu bazy i wolumenu plików.

Wszystkie ustawienia są wymienione w sekcji [Konfiguracja](/pl/tracker/configuration/).

## Aktualizacja

```bash
git pull
docker compose up -d --build
docker compose exec app php artisan migrate --force
```

Każdy push do `main` w repozytorium Trackera publikuje wydanie GitHub Release z notatkami pogrupowanymi na podstawie commitów. Zobacz [listę zmian](/pl/changelog/).
