# Configuration

> The environment variables that configure Skribly Tracker - application, database, queue, mail and the Tracker's own limits.

Skribly Tracker reads its settings from `.env`. Start from `.env.example`. In Docker Compose, the stack sets the database host and the queue itself, so you rarely need more than the variables marked below.

## Tracker

| Variable | Default | What it does |
| --- | --- | --- |
| `TRACKER_PORT` | `8100` | Host port of the nginx container |
| `TRACKER_ADMIN_PASSWORD` | empty | Password of the administrator account the seeder creates. Required for a production seed. |
| `TRACKER_MAX_UPLOAD_KB` | `10240` | Largest attachment, in kilobytes |
| `TRACKER_WEBHOOK_TIMEOUT` | `5` | Seconds a webhook delivery may take before it is abandoned |
| `TRACKER_VERSION` | `0.1.0` | Version shown in the interface and in the webhook `User-Agent` |

## Application

| Variable | Default | What it does |
| --- | --- | --- |
| `APP_NAME` | `Skribly Tracker` | Name in the interface and in e-mails |
| `APP_ENV` | `local` | `production` for a real install; also decides whether development packages are installed in Docker |
| `APP_KEY` | empty | Encryption key; the entrypoint generates it on first boot |
| `APP_DEBUG` | `true` | Set to `false` in production |
| `APP_URL` | `http://localhost:8100` | Public address; used in issue and attachment URLs in the API |
| `APP_TIMEZONE` | `Europe/Warsaw` | Time zone of timestamps in the API and webhooks |
| `APP_LOCALE` | `en` | Default interface language, `en` or `pl`; people choose their own on the profile page |
| `APP_FALLBACK_LOCALE` | `en` | Language used when a translation is missing |

## Database

| Variable | Default | What it does |
| --- | --- | --- |
| `DB_CONNECTION` | `mysql` | `mysql` or `sqlite` |
| `DB_HOST`, `DB_PORT` | `127.0.0.1`, `3306` | Docker Compose sets the host to `mysql` |
| `DB_DATABASE` | `skryba_tracker` | The database name keeps the former product name, so existing data directories keep working |
| `DB_USERNAME`, `DB_PASSWORD` | example values | Change them for any shared install |
| `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_ROOT_PASSWORD` | example values | Used by the MySQL container on its first start |

## Queue, cache, sessions and logs

| Variable | Default | What it does |
| --- | --- | --- |
| `QUEUE_CONNECTION` | `database` | Webhook deliveries are queued jobs; a worker must run |
| `CACHE_STORE` | `file` | |
| `SESSION_DRIVER` | `file` | |
| `SESSION_LIFETIME` | `120` | Minutes until a browser session expires |
| `LOG_CHANNEL` | `stack` | Docker Compose logs to `stderr` |
| `LOG_LEVEL` | `debug` | Use `warning` or higher in production |

## Mail

| Variable | Default | What it does |
| --- | --- | --- |
| `MAIL_MAILER` | `log` | Mail is written to the log until you configure a real mailer |
| `MAIL_FROM_ADDRESS` | `tracker@skribly.pl` | Sender address; set your own |
| `MAIL_FROM_NAME` | `${APP_NAME}` | Sender name |

## Development

| Variable | What it does |
| --- | --- |
| `VITE_DEV_SERVER` | `true` serves assets from the Vite container with hot reload |
| `DB_WAIT_ATTEMPTS` | How many times the entrypoint retries the database at two-second intervals before giving up; `60` by default |

## Clients

Clients of the Tracker read two variables of their own. Skribly Agent passes them to every agent session, and agent-skills reads them from the environment or its credentials file:

| Variable | Example |
| --- | --- |
| `SKRIBLY_TRACKER_URL` | `http://localhost:8100` |
| `SKRIBLY_TRACKER_TOKEN` | A [personal access token](/tracker/tokens/) |

The former names `SKRYBA_TRACKER_URL` and `SKRYBA_TRACKER_TOKEN` keep working as fallbacks.
