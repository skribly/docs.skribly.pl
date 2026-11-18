# Personal access tokens

> Create, scope, use and revoke the personal access tokens that authenticate scripts, Skribly Agent and agent-skills against the Skribly Tracker API.

Every request to the REST API carries a personal access token as a bearer token. A token belongs to one person and acts with that person's role.

## Create a token

In the browser: **Profile and API tokens → API tokens** (`/profile#tokens`).

1. Enter a name that says where the token is used, for example "Skribly Agent" or "CI".
2. Choose the abilities:
   - **Read and write**: abilities `read` and `write`. Needed by Skribly Agent and to post comments from agent-skills.
   - **Read only**: ability `read`. Enough to fetch issues.
3. Optionally set an expiry date.
4. Copy the token. **It is shown once.**

From the command line on the server:

```bash
docker compose exec app php artisan tracker:token you@example.com "Skribly Agent"
docker compose exec app php artisan tracker:token you@example.com ci --read-only
```

A token looks like `1|` followed by 40 characters.

## What a token may do

A token can never do more than its owner:

| Owner's role | With `read` | With `read` and `write` |
| --- | --- | --- |
| Viewer | Read everything the viewer can see | Same as read only |
| Member | Read | Create and change issues, comment, assign, change status, log time, upload attachments |
| Admin | Read | Everything a member can do, plus webhooks |

Endpoints that change data need the `write` ability. Deleting an issue also needs the owner to be an admin or the issue's reporter. A request that the token's ability or the owner's role does not allow gets `403`.

## Use a token

```bash
export TRACKER=http://localhost:8100/api/v1
export TOKEN='1|…'
curl -H "Authorization: Bearer $TOKEN" -H "Accept: application/json" "$TRACKER/me"
```

`GET /me` returns the owner and the token's abilities:

```json
{ "data": { "id": 1, "name": "Ada Example", "email": "ada@example.com", "role": "admin", "locale": "en", "abilities": ["read", "write"] } }
```

| Client | Where the token goes |
| --- | --- |
| Skribly Agent | **Settings → Task trackers → Add tracker → Skribly Tracker**, URL and a read-write token |
| agent-skills | `SKRIBLY_TRACKER_URL` and `SKRIBLY_TRACKER_TOKEN` in `~/.config/agent-skills/credentials.env` |
| `@skribly/core` | `createTrackerClient({ baseUrl, token })`; see [How apps connect](/core/connecting/) |
| Your scripts | The `Authorization: Bearer` header |

## Keep tokens safe

- Never commit a token, paste it in a chat or put it in `.tasks/`.
- Give each tool its own token, so you can revoke one without breaking the others.
- Use read-only tokens wherever nothing needs to change.
- Use an expiry date for tokens on shared machines and in CI.
- Revoke a token on the profile page as soon as you suspect it leaked.

Requests without a token, or with a revoked or expired one, get `401`. More than 240 requests a minute per user get `429`.

## Planned

Short-lived tokens for apps and agents, limited to chosen projects and actions and shown as a visible bot, are planned for the whole ecosystem. See [Ecosystem architecture](/overview/architecture/#planned-building-blocks).
