# Self-hosting with Docker

> Run Skribly Tracker on your own machine or server with Docker Compose, or without Docker, and keep its data across restarts.

The Tracker ships with a Docker Compose stack: the app (PHP-FPM), nginx, MySQL 8.4, Vite for assets, and a queue worker that delivers webhooks.

:::note[Access]
The repository is private for now, so cloning needs access to the Skribly organisation on GitHub.
:::

## Start with Docker

<Steps>

1. Clone the repository and create the environment file:

   ```bash
   git clone https://github.com/skribly/tracker.git skribly-tracker
   cd skribly-tracker
   cp .env.example .env
   ```

2. Set a password for the administrator account before the first boot. Open `.env` and fill in `TRACKER_ADMIN_PASSWORD`; the line above it names the administrator's e-mail address.

3. Build and start the stack:

   ```bash
   docker compose up -d --build
   ```

4. Open `http://localhost:8100` and sign in as the administrator.

</Steps>

On the first boot the entrypoint generates the application key, waits for the database, runs the migrations and seeds a demo workspace with three projects, their issues, comments and time entries. Later restarts keep your data: seeding only runs while the database is empty.

:::caution
Without `TRACKER_ADMIN_PASSWORD`, a local install uses a demo password, and a production install (`APP_ENV=production`) refuses to seed. Never expose a demo install to the internet.
:::

## Services

| Service | Address | Notes |
| --- | --- | --- |
| Tracker (nginx) | `http://localhost:8100` | Change with `TRACKER_PORT` |
| Vite | `http://localhost:5174` | Builds on save; `VITE_DEV_SERVER=true` for hot reload |
| MySQL 8.4 | Inside the Docker network only | Data in a named volume |
| Queue worker | No port | Delivers webhooks: 3 tries, then gives up |

nginx exposes a `/health` endpoint used by the container healthcheck. Uploaded files live in a named `app-storage` volume, so they survive rebuilds.

## Everyday commands

```bash
docker compose logs -f app queue                 # follow the app and the webhook worker
docker compose exec app php artisan tracker:token you@example.com "Skribly Agent"
docker compose exec app php artisan migrate      # after pulling a new version
docker compose down                              # stop; data stays in the volumes
docker compose down -v                           # stop and delete all data
```

## Without Docker

You need PHP 8.4, Composer and Node.js 22.

```bash
cp .env.example .env          # set DB_* or DB_CONNECTION=sqlite
composer install && npm install && npm run build
php artisan key:generate
php artisan migrate --seed
php artisan serve
php artisan queue:work        # in a second terminal, for webhooks
```

## Running it for a team

- Set `APP_ENV=production`, `APP_DEBUG=false` and `APP_URL` to the public address.
- Put the Tracker behind HTTPS. Tokens travel in the `Authorization` header.
- Change the database passwords in `.env` from the example values.
- Keep the queue worker running, or webhooks are never delivered.
- Back up the database volume and the storage volume.

All settings are listed in [Configuration](/tracker/configuration/).

## Upgrading

```bash
git pull
docker compose up -d --build
docker compose exec app php artisan migrate --force
```

Every push to `main` of the Tracker repository publishes a GitHub Release with notes grouped from the commits. See the [changelog](/changelog/).
