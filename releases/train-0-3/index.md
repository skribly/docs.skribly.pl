# Release train 0.3

> The first release train of Skribly: @skribly/core 0.3.0 and agent-skills 0.3.0, with @skribly/ui following in a later train, what each brings and how to upgrade.

The shared packages of Skribly now ship as a release train: one train per minor version, so the packages of the same train are known to work together. Train 0.3 is the first one. A fix inside a train moves only the package it fixes, as 0.3.1, 0.3.2 and so on.

| Package | Version | Before |
| --- | --- | --- |
| `@skribly/core` | 0.3.0 | 0.2.0 |
| agent-skills | 0.3.0 | 0.2.14 |
| `@skribly/ui` | follows a later train (stays 0.1.0) | 0.1.0 |

`@skribly/ui` is not part of this train: its next version waits for work on the design direction and the admin components, and it joins a later train. Until then ui 0.1.0 is the version that goes with core 0.3.0, and the sites keep the copy of the site kit they have.

Which versions belong to which train is written in `compat.json` in the core repository: the versions of the train, the packages that follow a later one, the ui commit each site uses, the oldest Skribly Agent and Skribly Tracker that work with the train, and the Node.js, Astro, React and Next.js versions it was tested on.

## Added

### Core

- **The server kit**: eight entry points under `@skribly/core/server/` with the code every Skribly server needs from its first day. `db` opens Postgres (or PGlite in tests) and runs each request in a transaction of its organisation under row-level security. `events` keeps events in an outbox in the same transaction and runs background jobs. `seed` fills a database with minimal or demo data. `app` wires the modules of an app together. `http` adds the shared Hono middleware: errors as problem details, a body size limit, idempotency keys that never run a write twice, and rate limits. `mcp` serves an app's actions as MCP tools at `/mcp`, with writes confirmed by the person. `testing` gives isolation and cross-organisation tests. `telemetry` sends OpenTelemetry traces.
- **Contracts**: API conventions (version in the path, cursor pagination), ports with fakes for tests, Standard Schema, Standard Webhooks, the event catalogue of every product, identity with workspaces and installations, the admin API of Skribly ID (experimental), manifest v2, the product registry and catalogue, feature flags (experimental), and more Skribly Tracker operations in the contracts and the client.
- **Generated files**: a JSON Schema file for every schema and OpenAPI 3.1 files for Skribly Tracker and Skribly ID.
- **Presets**: the shared Prettier config as `@skribly/core/prettier` and an oxlint preset for Next.js apps.

### agent-skills

- Four new skills: `newsletter`, `slice`, `seed` and `standard`. See the [Skills catalog](/skills/catalog/).

## Changed

- Core: a request can only open a transaction of the organisation it is signed in to (401 without a sign-in, 403 for another organisation). Every access check names the organisation. Dates, webhook addresses and links are checked more strictly.
- agent-skills: releases now follow the train. A release is made for a version tag such as `v0.3.0` only; the releases numbered by build (`v0.2.1` to `v0.2.14`) end here.
- agent-skills: `agent-skills agent-files` writes only `CLAUDE.md` and the Copilot pointer by default, and `--prune` removes what older versions wrote. The skill scripts never start a program found inside the repository you work in. See [Supported agents](/skills/agents/).

## Fixed

- Core: rate-limit headers set by a handler are kept, and every finding of the November review of the server kit is closed.
- agent-skills: `agent-files` stays inside the repository it runs in and no longer replaces your own `.mcp.json`.

## Upgrading

1. `@skribly/core` 0.3.0 is not on GitHub Packages yet: the publish runs in the release workflow, which comes later. Until then apps keep installing core from a packed tarball in their `vendor/` folder; repack it from the `v0.3.0` tag with `node .tools/pack-libs.mjs <app>` in core. `@skribly/ui` stays at its 0.1.0 tarball.
2. Once core is published, an app copies the `.npmrc` template of the core repository (`.tools/npmrc.template`), sets a token that can read packages as `NODE_AUTH_TOKEN`, pins `"@skribly/core": "0.3.0"` exactly, and uses the shared Prettier config with `"prettier": "@skribly/core/prettier"` in `package.json` instead of its own `.prettierrc.json`.
3. Before migrating a database, run the database setup of the server kit again: it adds a role the new migrations need.
4. Code that opened a transaction for work outside any organisation, such as a sign-in, moves to `db.identity`. Access checks pass the organisation.
5. Run `agent-skills install` again, then `agent-skills agent-files --prune` once in each repository.
