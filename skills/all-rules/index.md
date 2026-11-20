# All rules

> Every rule of the agent-skills rule dictionary, by technology, with its severity, versions, line check and public source.

This page is generated from `rules.json` of [agent-skills](/skills/), so it says what the rule files say. The rule dictionary is in development and ships in the next release: 98 rules in 29 technologies, 58 of them with a line check that `agent-skills rules --check` runs on the project's files. The rest are read by the agent while it works. How to list and check the rules: [Rule dictionary](/skills/rules/).

## Angular

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `angular/control-flow` | Templates use `@if`, `@for` with `track` and `@switch`, not `*ngIf`, `*ngFor` and `ngSwitch`. | medium | 17+ | yes | [Angular, control flow migration](https://angular.dev/reference/migrations/control-flow) |
| `angular/signal-inputs` | New components take `input()`, `output()` and `model()` instead of `@Input` and `@Output`, one style per component. | low | 17.1+ | no | [Angular, components](https://angular.dev/guide/components) |
| `angular/standalone-default` | Angular 19 components are standalone without `standalone: true`; an NgModule-declared one says `standalone: false`. | medium | 19+ | yes | [Angular, components](https://angular.dev/guide/components) |

## CI (GitHub Actions)

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `ci/least-token-permissions` | Every workflow sets `permissions:` to the least the jobs need. | high | any | no | [GitHub Docs, permissions for the GITHUB_TOKEN](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token) |
| `ci/no-untrusted-input-in-run` | A `run:` step never puts `${{ github.event.* }}` text such as a title or branch name inline in the script. | critical | any | yes | [GitHub Docs, script injections](https://docs.github.com/en/actions/concepts/security/script-injections) |
| `ci/pin-actions-to-sha` | A third-party GitHub Action is pinned to a full commit SHA, not a tag or a branch. | high | any | yes | [GitHub Docs, security hardening, using third-party actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions#using-third-party-actions) |

## Data science

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `data/control-randomness` | Every random split, sampler and estimator gets an explicit `random_state` or seed. | low | any | no | [scikit-learn, common pitfalls, controlling randomness](https://scikit-learn.org/stable/common_pitfalls.html#controlling-randomness) |
| `data/split-before-fit` | Preprocessing is fitted on the training split only, inside a pipeline, never on the whole dataset. | high | any | no | [scikit-learn, common pitfalls, data leakage](https://scikit-learn.org/stable/common_pitfalls.html#data-leakage) |

## Databases

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `database/index-concurrently` | On a live PostgreSQL table an index is built with `CREATE INDEX CONCURRENTLY`. | high | any | no | [PostgreSQL docs, CREATE INDEX, building indexes concurrently](https://www.postgresql.org/docs/current/sql-createindex.html#SQL-CREATEINDEX-CONCURRENTLY) |
| `database/never-edit-applied-migration` | A migration that already ran anywhere is never edited; a new migration makes the change. | high | any | no | [Rails Guides, changing existing migrations](https://guides.rubyonrails.org/active_record_migrations.html#changing-existing-migrations) |

## Django

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `django/no-index-together` | Django 5.1 models declare composite indexes in `Meta.indexes`. | medium | 5.1+ | yes | [Django 5.1 release notes](https://docs.djangoproject.com/en/5.1/releases/5.1/) |
| `django/no-timezone-utc` | Code uses `datetime.timezone.utc`, not `django.utils.timezone.utc`. | high | 5.0+ | yes | [Django 5.0 release notes](https://docs.djangoproject.com/en/5.0/releases/5.0/) |
| `django/no-use-l10n` | Django 5 settings do not set `USE_L10N`. | low | 5.0+ | yes | [Django 5.0 release notes](https://docs.djangoproject.com/en/5.0/releases/5.0/) |
| `django/storages-setting` | Django 5.1 configures file storage in `STORAGES`. | high | 5.1+ | yes | [Django 5.1 release notes](https://docs.djangoproject.com/en/5.1/releases/5.1/) |
| `django/use-tz-default` | Django 5 code stores aware datetimes from `django.utils.timezone.now()`. | medium | 5.0+ | yes | [Django 5.0 release notes](https://docs.djangoproject.com/en/5.0/releases/5.0/) |

## Docker

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `docker/non-root-user` | The final image stage switches to a non-root `USER`. | high | any | no | [Docker docs, building best practices, USER](https://docs.docker.com/build/building/best-practices/#user) |
| `docker/pin-base-image` | A base image is pinned to a version tag or digest, never `latest`. | medium | any | yes | [Docker docs, building best practices, pin base image versions](https://docs.docker.com/build/building/best-practices/#pin-base-image-versions) |
| `docker/secrets-not-in-build-args` | A secret reaches a build through a secret mount, never through `ARG`, `ENV` or `COPY`. | critical | any | yes | [Docker docs, build secrets](https://docs.docker.com/build/building/secrets/) |

## Documentation

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `docs/changelog-for-people` | The changelog lists notable changes per version for people, not a dump of commit messages. | low | any | no | [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) |
| `docs/runnable-code-samples` | A code sample in the docs can be copied and run as shown, with every placeholder named. | medium | any | no | [Google developer documentation style guide, code samples](https://developers.google.com/style/code-samples) |

## .NET

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `dotnet/async-void` | Return Task from async methods; use async void only for event handlers. | medium | 6+ | yes | [C# asynchronous programming scenarios](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios) |
| `dotnet/httpclient-factory` | Do not create a new HttpClient per request; use IHttpClientFactory or one long-lived client. | high | 6+ | yes | [.NET HttpClient guidelines](https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient-guidelines) |
| `dotnet/no-blocking-async` | Await tasks; never block on them with .Result, .Wait() or GetAwaiter().GetResult(). | high | 6+ | yes | [ASP.NET Core best practices](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/best-practices) |
| `dotnet/nullable-enable` | Turn on nullable reference types with &lt;Nullable&gt;enable&lt;/Nullable&gt; in the project. | medium | 6+ | no | [C# nullable reference types](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references) |

## Express

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `express/async-errors` | Express 5 handlers let a rejected promise reach the error middleware without wrappers. | medium | 5+ | yes | [Express, migrating to Express 5](https://expressjs.com/en/guide/migrating-5.html) |
| `express/body-undefined` | A route that reads `req.body` has a body parser registered before it. | medium | 5+ | no | [Express, migrating to Express 5](https://expressjs.com/en/guide/migrating-5.html) |
| `express/named-wildcard` | An Express 5 route names its wildcard and writes an optional part in braces. | high | 5+ | yes | [Express, migrating to Express 5](https://expressjs.com/en/guide/migrating-5.html) |
| `express/removed-methods` | Express 5 code uses `app.delete()`, `req.params`, `res.sendStatus()` and `res.status().json()`. | high | 5+ | yes | [Express, migrating to Express 5](https://expressjs.com/en/guide/migrating-5.html) |

## Flutter

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `flutter/color-with-values` | Use Color.withValues(alpha: ...), not the deprecated withOpacity and opacity. | low | 3.27+ | yes | [Flutter breaking changes: wide gamut Color](https://docs.flutter.dev/release/breaking-changes/wide-gamut-framework) |
| `flutter/context-after-await` | Check mounted before using a BuildContext after an await. | high | 3.7+ | no | [Dart lint: use_build_context_synchronously](https://dart.dev/tools/linter-rules/use_build_context_synchronously) |
| `flutter/pop-scope` | Use PopScope with canPop, not the deprecated WillPopScope. | medium | 3.16+ | yes | [Flutter breaking changes: Android predictive back](https://docs.flutter.dev/release/breaking-changes/android-predictive-back) |
| `flutter/text-scaler` | Use TextScaler (textScaler, MediaQuery.textScalerOf), not the deprecated textScaleFactor. | medium | 3.16+ | yes | [Flutter breaking changes: textScaleFactor deprecated](https://docs.flutter.dev/release/breaking-changes/deprecate-textscalefactor) |
| `flutter/widget-state` | Use WidgetState and WidgetStateProperty, not the deprecated MaterialState names. | low | 3.22+ | yes | [Flutter breaking changes: MaterialState renamed to WidgetState](https://docs.flutter.dev/release/breaking-changes/material-state) |

## Go

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `go/context-first-parameter` | A `context.Context` is the first parameter of the function that needs it and is never stored in a struct. | medium | any | yes | [Go standard library, package context](https://pkg.go.dev/context) |
| `go/wrap-errors` | Errors are wrapped with `%w` and compared with `errors.Is` or `errors.As`, never by their text. | medium | any | yes | [The Go Blog, working with errors in Go 1.13](https://go.dev/blog/go1.13-errors) |

## Infrastructure (Terraform)

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `infra/terraform-lock-providers` | Provider versions are constrained in `required_providers` and `.terraform.lock.hcl` is committed. | medium | any | no | [Terraform docs, dependency lock file](https://developer.hashicorp.com/terraform/language/files/dependency-lock) |
| `infra/terraform-remote-state-lock` | Shared Terraform state lives in a remote backend that supports locking. | high | any | no | [Terraform docs, state locking](https://developer.hashicorp.com/terraform/language/state/locking) |

## Java

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `java/optional-return-only` | `Optional` is a return type only, never a field, a parameter or a collection element. | low | any | yes | [Java SE 21 API, java.util.Optional](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html) |
| `java/try-with-resources` | Every stream, reader, connection or statement is opened in a try-with-resources block. | high | any | no | [The Java Tutorials, the try-with-resources statement](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html) |

## Kubernetes

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `kubernetes/no-latest-tag` | Pin container images to a version tag or digest, never :latest or no tag. | high | 1.25+ | yes | [Kubernetes docs: images](https://kubernetes.io/docs/concepts/containers/images/) |
| `kubernetes/readiness-probe` | Give serving containers a readiness probe, and a liveness probe that checks only the process itself. | medium | 1.25+ | no | [Kubernetes docs: liveness, readiness and startup probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) |
| `kubernetes/removed-apis` | Use the served API versions: policy/v1 for PodDisruptionBudget, autoscaling/v2 for HorizontalPodAutoscaler, apps/v1 for workloads. | critical | 1.25+ | yes | [Kubernetes deprecated API migration guide](https://kubernetes.io/docs/reference/using-api/deprecation-guide/) |
| `kubernetes/resource-requests` | Give every container CPU and memory requests and a memory limit. | high | 1.25+ | no | [Kubernetes docs: resource management for pods and containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) |
| `kubernetes/run-as-non-root` | Run containers as non-root with allowPrivilegeEscalation set to false. | high | 1.25+ | no | [Kubernetes Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/) |

## Laravel

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `laravel/bootstrap-app` | A new Laravel 11 application sets middleware, exceptions and routing in `bootstrap/app.php`. | high | 11+ | no | [Laravel 11.x, directory structure](https://laravel.com/docs/11.x/structure) |
| `laravel/casts-method` | New Laravel 11 models declare casts in a `casts()` method, one style per model. | low | 11+ | no | [Laravel 11.x, upgrade guide](https://laravel.com/docs/11.x/upgrade) |
| `laravel/install-api` | An API in Laravel 11 is added with `php artisan install:api`, not a hand-made `routes/api.php`. | medium | 11+ | no | [Laravel 11.x, upgrade guide](https://laravel.com/docs/11.x/upgrade) |
| `laravel/providers-file` | Laravel 11 lists extra service providers in `bootstrap/providers.php`, not `config/app.php`. | medium | 11+ | no | [Laravel 11.x, directory structure](https://laravel.com/docs/11.x/structure) |
| `laravel/schedule-in-routes` | Laravel 11 schedules live in `routes/console.php`. | medium | 11+ | no | [Laravel 11.x, upgrade guide](https://laravel.com/docs/11.x/upgrade) |

## Mobile apps

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `mobile/android-exported` | Every Android activity, service or receiver with an intent filter sets `android:exported` explicitly. | high | any | no | [Android 12 behavior changes, safer component exporting](https://developer.android.com/about/versions/12/behavior-changes-12#exported) |
| `mobile/ios-usage-description` | An iOS app that reads the camera, microphone, photos or location has the matching purpose string in Info.plist. | critical | any | no | [Apple Developer, NSCameraUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscamerausagedescription) |

## Next.js

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `nextjs/async-request-apis` | `params`, `searchParams`, `cookies()`, `headers()` and `draftMode()` are awaited before use. | high | 15+ | no | [Next.js, upgrading to version 15](https://nextjs.org/docs/app/guides/upgrading/version-15) |
| `nextjs/fetch-not-cached` | Code does not assume `fetch` or a `GET` route handler is cached; it opts in when it needs a cache. | medium | 15+ | no | [Next.js, upgrading to version 15](https://nextjs.org/docs/app/guides/upgrading/version-15) |
| `nextjs/no-next-lint` | A Next.js 16 project runs the ESLint CLI, not `next lint`. | low | 16+ | yes | [Next.js, upgrading to version 16](https://nextjs.org/docs/app/guides/upgrading/version-16) |
| `nextjs/node-version` | Next.js 16 runs on Node.js 20.9 or newer with TypeScript 5.1 or newer. | medium | 16+ | no | [Next.js, upgrading to version 16](https://nextjs.org/docs/app/guides/upgrading/version-16) |
| `nextjs/proxy-file` | A Next.js 16 project writes `proxy.ts` exporting `proxy`, not a new `middleware.ts`. | high | 16+ | yes | [Next.js, upgrading to version 16](https://nextjs.org/docs/app/guides/upgrading/version-16) |
| `nextjs/remote-images` | Remote images are allowed with `images.remotePatterns`, not `images.domains`. | low | 14+ | yes | [Next.js, upgrading to version 15](https://nextjs.org/docs/app/guides/upgrading/version-15) |

## Node.js

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `node/handle-rejections` | Every promise is awaited or has a `.catch()`, because an unhandled rejection ends the process. | high | any | no | [Node.js, the --unhandled-rejections flag](https://nodejs.org/api/cli.html#--unhandled-rejectionsmode) |
| `node/no-sync-io-in-handlers` | A request handler never calls a `*Sync` file, crypto or zlib function. | high | any | no | [Node.js, Don't block the event loop](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop) |

## PHP

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `php/prepared-statements` | SQL never concatenates request values; it binds them with prepared statements. | critical | any | yes | [PHP manual, prepared statements and stored procedures](https://www.php.net/manual/en/pdo.prepared-statements.php) |
| `php/strict-types` | Every PHP file starts with `declare(strict_types=1);`. | medium | any | no | [PHP manual, strict typing](https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.strict) |

## Pydantic

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `pydantic/field-validator` | Pydantic 2 validators use `@field_validator` and `@model_validator`. | high | 2+ | yes | [Pydantic, migration guide to v2](https://docs.pydantic.dev/latest/migration/) |
| `pydantic/model-config` | Pydantic 2 models configure with `model_config = ConfigDict(...)`. | high | 2+ | yes | [Pydantic, migration guide to v2](https://docs.pydantic.dev/latest/migration/) |
| `pydantic/model-dump` | Pydantic 2 code calls `model_dump`, `model_dump_json`, `model_validate` and `model_validate_json`. | high | 2+ | yes | [Pydantic, migration guide to v2](https://docs.pydantic.dev/latest/migration/) |
| `pydantic/settings-package` | Pydantic 2 settings import `BaseSettings` from `pydantic_settings`. | medium | 2+ | yes | [Pydantic, migration guide to v2](https://docs.pydantic.dev/latest/migration/) |

## Python

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `python/mutable-default-argument` | A function never uses a list, dict or set literal as a default argument value. | high | any | yes | [Python reference, function definitions](https://docs.python.org/3/reference/compound_stmts.html#function-definitions) |
| `python/subprocess-no-shell` | `subprocess` runs commands as an argument list, never with `shell=True` around outside input. | critical | any | yes | [Python docs, subprocess security considerations](https://docs.python.org/3/library/subprocess.html#security-considerations) |

## Rails

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `rails/enum-positional` | Define enums with the positional form, enum :status, [...], not keyword arguments. | high | 7.0+ | yes | [Rails 8.0 release notes](https://guides.rubyonrails.org/8_0_release_notes.html) |
| `rails/no-string-sql` | Never put request values into an SQL string; pass them as hash or placeholder conditions. | critical | 7.0+ | yes | [Rails guides: Active Record query interface](https://guides.rubyonrails.org/active_record_querying.html) |
| `rails/params-expect` | Read strong parameters with params.expect, not params.require(...).permit(...). | medium | 8.0+ | yes | [Rails 8.0 release notes](https://guides.rubyonrails.org/8_0_release_notes.html) |

## React

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `react/act-import` | Tests import `act` from `react`, not `react-dom/test-utils`. | low | 19+ | yes | [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) |
| `react/create-root` | The app mounts with `createRoot` or `hydrateRoot` from `react-dom/client`. | high | 19+ | yes | [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) |
| `react/no-proptypes` | Function components do not rely on `propTypes` or `defaultProps`. | medium | 19+ | yes | [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) |
| `react/ref-prop` | A new React 19 function component takes `ref` as a prop instead of using `forwardRef`. | medium | 19+ | no | [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) |
| `react/removed-legacy` | Code uses `useRef` or callback refs and `createContext`, never string refs or `contextTypes`. | high | 19+ | yes | [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) |
| `react/use-action-state` | Form action state uses `useActionState` from `react`, not `useFormState` from `react-dom`. | high | 19+ | yes | [React 19](https://react.dev/blog/2024/12/05/react-19) |

## Security

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `security/no-secrets-in-repo` | No password, token, key or connection string is committed, in code, config or examples. | critical | any | no | [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) |
| `security/password-hashing` | Passwords are stored with Argon2id, scrypt or bcrypt, never with a plain or fast hash. | critical | any | yes | [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) |

## Spring

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `spring/constructor-injection` | Inject required dependencies through the constructor, not with @Autowired on fields. | medium | 3.0+ | no | [Spring Framework reference: dependency injection](https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html) |
| `spring/jakarta-namespace` | Import jakarta.* (servlet, persistence, validation), not javax.*, on Spring Boot 3. | critical | 3.0+ | yes | [Spring Boot 3.0 migration guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide) |
| `spring/security-filter-chain` | Configure Spring Security with a SecurityFilterChain bean, not by extending WebSecurityConfigurerAdapter. | high | 3.0+ | yes | [Spring Security reference: Configuration Migrations](https://docs.enterprise.spring.io/spring-security/reference/5.8/migration/servlet/config.html) |

## SQLAlchemy

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `sqlalchemy/no-engine-execute` | SQLAlchemy 2 code runs statements on a connection and commits explicitly. | high | 2.0+ | yes | [SQLAlchemy, migrating to 2.0](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html) |
| `sqlalchemy/select` | SQLAlchemy 2 queries use `select()` with `session.execute()` or `session.scalars()`. | medium | 2.0+ | yes | [SQLAlchemy, migrating to 2.0](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html) |
| `sqlalchemy/text` | Raw SQL strings are wrapped in `text()`. | high | 2.0+ | yes | [SQLAlchemy, migrating to 2.0](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html) |
| `sqlalchemy/typed-mapping` | New SQLAlchemy 2 models use `Mapped[...]` with `mapped_column()` in a `DeclarativeBase` subclass, one style per module. | low | 2.0+ | no | [SQLAlchemy, migrating to 2.0](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html) |

## Tailwind CSS

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `tailwind/border-ring-defaults` | Tailwind 4 markup sets the border colour and the ring width it means. | low | 4+ | no | [Tailwind CSS, upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |
| `tailwind/css-import` | A Tailwind 4 stylesheet starts with `@import "tailwindcss";`. | high | 4+ | yes | [Tailwind CSS, upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |
| `tailwind/postcss-plugin` | Tailwind 4 runs through `@tailwindcss/postcss` or `@tailwindcss/vite`, not the `tailwindcss` PostCSS plugin. | medium | 4+ | yes | [Tailwind CSS, upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |
| `tailwind/renamed-utilities` | Tailwind 4 markup uses the renamed shadow, radius, blur and outline utilities. | medium | 4+ | no | [Tailwind CSS, upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |
| `tailwind/theme-in-css` | The Tailwind 4 theme is defined in CSS with `@theme`; a JavaScript config is loaded only with `@config`. | high | 4+ | no | [Tailwind CSS, upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |

## Testing

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `testing/isolated-tests` | Each test sets up its own data and passes alone, in any order. | medium | any | no | [Playwright docs, best practices, make tests as isolated as possible](https://playwright.dev/docs/best-practices#make-tests-as-isolated-as-possible) |
| `testing/no-fixed-waits` | An end-to-end test waits for a state, never for a fixed number of milliseconds. | medium | any | yes | [Playwright docs, page.waitForTimeout](https://playwright.dev/docs/api/class-page#page-wait-for-timeout) |

## Vue

| Rule | What it says | Severity | Versions | Line check | Source |
| --- | --- | --- | --- | --- | --- |
| `vue/create-app` | A Vue 3 app is created with `createApp(App).mount()`, not `new Vue()`. | high | 3+ | yes | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
| `vue/if-before-for` | `v-if` and `v-for` are never on the same element. | medium | 3+ | yes | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
| `vue/listeners-in-attrs` | Listeners are read from `$attrs` and emitted events are declared in `emits`. | low | 3+ | yes | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
| `vue/model-props` | `v-model` on a component uses `modelValue` and `update:modelValue`. | high | 3+ | no | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
| `vue/no-event-bus` | Components talk through props, emits, provide and inject or a store, not an event bus. | medium | 3+ | yes | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
| `vue/no-filters` | Templates format values with methods or computed values, not filters. | medium | 3+ | yes | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
