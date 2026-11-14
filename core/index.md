# Core packages

> @skribly/core, the shared code of the Skribly apps: Tracker API contracts and client, identity and scopes, the event envelope, app manifests, the project profile, webhook signing, problem errors, environment config, logging, translations and presets.

`@skribly/core` is the shared code of the Skribly apps. It holds the Tracker API contracts and client, identity and scopes, the event catalogue, the app registry, notifications, the audit log, the project profile, webhook signing, Hono helpers, problem errors, environment config, logging, translations and the shared TypeScript, lint and design token presets. Apps never import each other; what they send each other is defined once, here.

| | |
| --- | --- |
| Version | 0.2.0 |
| Runtime | Node.js 26; the root entry also runs in browsers |
| Validation | Zod 4 |
| Distribution | A private package installed from Git, not from the npm registry |

## Install

Apps install it over SSH from the private repository:

```json
{ "dependencies": { "@skribly/core": "git+ssh://git@github.com/skribly/core.git#semver:^0.2.0" } }
```

`dist` is not committed; the `prepare` script builds it during the install. While working locally, an app in a sibling folder can use `file:../skriblyCore`, which is a symlink and runs no build.

## Entry points

| Import | Contents | Runs in a browser |
| --- | --- | --- |
| `@skribly/core` | Everything marked yes below | Yes |
| `@skribly/core/contracts` | Zod schemas and types of the Tracker API v1, webhook payloads, `toIso8601`, `normalizeInput` | Yes |
| `@skribly/core/client` | `createTrackerClient` | Yes |
| `@skribly/core/problem` | RFC 9457 errors and `validate` | Yes |
| `@skribly/core/env` | `defineEnv` and the shared env schemas | Yes |
| `@skribly/core/i18n` | `createTranslator`, `preferredLocale` | Yes |
| `@skribly/core/i18n/node` | `loadLanguageLines`, `parsePhpLanguageFile` | No |
| `@skribly/core/identity` | Users, organisations, memberships, personal tokens, scopes and `hasScope` | Yes |
| `@skribly/core/events` | The CloudEvents 1.0 envelope, the event catalogue, `createEvent`, `parseEvent` | Yes |
| `@skribly/core/registry` | App manifests, `createRegistry`, `fetchManifest` | Yes |
| `@skribly/core/notifications` | The notification schema and its mapping to the `@skribly/ui` tones | Yes |
| `@skribly/core/audit` | The audit log entry schema and `diffForAudit` | Yes |
| `@skribly/core/project` | The project profile of `.skribly/project.json` | Yes |
| `@skribly/core/schema/project.schema.json` | The project profile as JSON Schema | |
| `@skribly/core/http` | Hono 4 helpers: problem errors, bearer auth, request ids, the manifest route | Needs `hono` |
| `@skribly/core/webhooks` | Signing, verifying and building deliveries and signed events | No |
| `@skribly/core/logger` | `createLogger` | No |
| `@skribly/core/tokens.css` | Tailwind 4 design tokens | Yes |
| `@skribly/core/tsconfig/{base,node,react}.json` | TypeScript presets | |
| `@skribly/core/oxlint/{base,react}.json` | oxlint presets | |

The root entry stays browser-safe, so a React client bundle can import contracts from it. Node-only modules have their own entry points.

The ecosystem modules (identity, events, registry, notifications, audit, project and http) are reachable only through their own entry points, so their names never clash with the Tracker contracts. Their fields are camel case; the Tracker contracts keep the snake case the API sends.

## Identity and scopes

```ts

hasScope(token.scopes, 'tracker.issues:write')
```

A scope is `<app>.<resource>:<action>`, such as `tracker.issues:read`. The action is `read`, `write` or `admin`, and a higher one covers the lower ones. A granted scope may use wildcards, such as `tracker.*:write` or `*:read`; a required scope never does. A membership has the role `owner`, `admin`, `member` or `viewer`, and `scopesForRole` gives each role its default scopes.

These are shared definitions. Skribly Tracker's tokens today have the `read` and `write` abilities described in [Personal access tokens](/tracker/tokens/).

## Registry

Each app can describe itself with a manifest (its id, name, version, addresses, capabilities, the events it emits and consumes, and links) and serve it at `/api/manifest`. `fetchManifest` reads one, and `createRegistry` answers which app has a capability, which apps emit or consume an event, and where an app's API lives.

## Project profile

`.skribly/project.json` describes how a project is built and worked on: the stack, the package manager, the commands, the commit conventions and, optionally, the Skribly Tracker project. `parseProjectProfile` and `stringifyProjectProfile` read and write it, and `schema/project.schema.json` is the same profile as JSON Schema. agent-skills writes and reads this file with its [`project`](/skills/catalog/#workflow) skill.

## Notifications and audit log

`NotificationSchema` has a `tone` of `success`, `info`, `warning` or `error`, a `title`, an optional `body` and `url`, and `readAt`; `toUiTone` and `fromUiTone` map the tone to and from the `@skribly/ui` message tones. `AuditEntrySchema` records who did what to which target, with the outcome and the changes, and `diffForAudit(before, after)` builds the changes.

## Problem errors

```ts

throw new ProblemError(createProblem({ status: 401, detail: t('tracker.errors.unauthenticated') }))
```

`error.toResponse()` gives a standard `Response` with `application/problem+json`, ready to return from a Hono handler. A problem keeps `message` and `errors` next to the RFC 9457 members, so existing clients keep reading them. `problemFromBody` reads both the old and the new shape.

## Environment

```ts

const env = defineEnv(trackerEnvSchema)
```

An empty `KEY=` line counts as unset. A failure throws `EnvError`, which names the variables and never their values. `trackerClientEnvSchema` reads `SKRIBLY_TRACKER_URL` and `SKRIBLY_TRACKER_TOKEN`, the variables Skribly Agent passes to its sessions.

## Logging

```ts

const logger = createLogger({ name: 'tracker', level: env.LOG_LEVEL })
```

Writes JSON through pino. Tokens, passwords, secrets, cookies and auth headers are redacted.

## Translations

```ts

const translator = createTranslator({ lines: await loadLanguageLines('lang'), locale: 'pl' })

translator.t('tracker.board.moved', { key: 'WEB-1', status: 'Done' })
translator.choice('tracker.list.results', 7)
```

`loadLanguageLines` reads an app's `lang` folder, both `.php` arrays (parsed, never run) and `.json` groups. Placeholders, `|` plurals, `{0}` and `[2,*]` ranges, the Polish plural rule and the fallback locale are supported.

## Presets

```json
{ "extends": "@skribly/core/tsconfig/node.json" }
```

```json
{ "extends": ["./node_modules/@skribly/core/oxlint/base.json"] }
```

```css
@import "tailwindcss";
@import "@skribly/core/tokens.css";
```

`tsconfig/react.json` needs `vite` in the app for its `vite/client` types. The tokens leave out the font link, so an app adds its own. The full design system lives in [`@skribly/ui`](/ui/).

## Read next

- [Contracts](/core/contracts/): the schemas and the Tracker client.
- [Events](/core/events/): today's webhook payloads and the shared event envelope.
- [How apps connect](/core/connecting/): which app talks to which, and with what.
