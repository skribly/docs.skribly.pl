# Wszystkie reguły

> Każda reguła słownika reguł agent-skills, według technologii, z wagą, wersjami, sprawdzeniem wierszy i publicznym źródłem.

Ta strona powstaje z pliku `rules.json` [agent-skills](/pl/skills/), więc mówi to samo co pliki reguł. Słownik reguł jest w przygotowaniu i wejdzie do następnego wydania: 98 reguł w 29 technologiach, z czego 58 ma sprawdzenie wierszy, które `agent-skills rules --check` uruchamia na plikach projektu. Pozostałe agent czyta podczas pracy. Jak wypisać i sprawdzić reguły: [Słownik reguł](/pl/skills/rules/).

## Angular

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `angular/control-flow` | Szablony używają `@if`, `@for` z `track` i `@switch`, a nie `*ngIf`, `*ngFor` i `ngSwitch`. | średnia | 17+ | tak | [Angular, control flow migration](https://angular.dev/reference/migrations/control-flow) |
| `angular/signal-inputs` | Nowe komponenty przyjmują `input()`, `output()` i `model()` zamiast `@Input` i `@Output`, jeden styl w komponencie. | niska | 17.1+ | nie | [Angular, components](https://angular.dev/guide/components) |
| `angular/standalone-default` | Komponenty Angulara 19 są samodzielne bez `standalone: true`; komponent zadeklarowany w NgModule ma `standalone: false`. | średnia | 19+ | tak | [Angular, components](https://angular.dev/guide/components) |

## CI (GitHub Actions)

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `ci/least-token-permissions` | Każdy workflow ustawia w `permissions:` najmniejsze uprawnienia, jakich potrzebują zadania. | wysoka | każda | nie | [GitHub Docs, permissions for the GITHUB_TOKEN](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token) |
| `ci/no-untrusted-input-in-run` | Krok `run:` nigdy nie wstawia do skryptu tekstu z `${{ github.event.* }}`, takiego jak tytuł czy nazwa gałęzi. | krytyczna | każda | tak | [GitHub Docs, script injections](https://docs.github.com/en/actions/concepts/security/script-injections) |
| `ci/pin-actions-to-sha` | Akcja GitHuba od innego autora jest przypięta do pełnego SHA commita, a nie do tagu czy gałęzi. | wysoka | każda | tak | [GitHub Docs, security hardening, using third-party actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions#using-third-party-actions) |

## Analiza danych

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `data/control-randomness` | Każdy losowy podział, sampler i estymator dostaje jawny `random_state` albo ziarno. | niska | każda | nie | [scikit-learn, common pitfalls, controlling randomness](https://scikit-learn.org/stable/common_pitfalls.html#controlling-randomness) |
| `data/split-before-fit` | Przetwarzanie wstępne jest dopasowywane tylko na zbiorze treningowym, w potoku, nigdy na całym zbiorze danych. | wysoka | każda | nie | [scikit-learn, common pitfalls, data leakage](https://scikit-learn.org/stable/common_pitfalls.html#data-leakage) |

## Bazy danych

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `database/index-concurrently` | Na działającej tabeli PostgreSQL indeks powstaje przez `CREATE INDEX CONCURRENTLY`. | wysoka | każda | nie | [PostgreSQL docs, CREATE INDEX, building indexes concurrently](https://www.postgresql.org/docs/current/sql-createindex.html#SQL-CREATEINDEX-CONCURRENTLY) |
| `database/never-edit-applied-migration` | Migracji, która już gdzieś się wykonała, nigdy się nie edytuje; zmianę wprowadza nowa migracja. | wysoka | każda | nie | [Rails Guides, changing existing migrations](https://guides.rubyonrails.org/active_record_migrations.html#changing-existing-migrations) |

## Django

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `django/no-index-together` | Modele Django 5.1 deklarują indeksy złożone w `Meta.indexes`. | średnia | 5.1+ | tak | [Django 5.1 release notes](https://docs.djangoproject.com/en/5.1/releases/5.1/) |
| `django/no-timezone-utc` | Kod używa `datetime.timezone.utc`, a nie `django.utils.timezone.utc`. | wysoka | 5.0+ | tak | [Django 5.0 release notes](https://docs.djangoproject.com/en/5.0/releases/5.0/) |
| `django/no-use-l10n` | Ustawienia Django 5 nie ustawiają `USE_L10N`. | niska | 5.0+ | tak | [Django 5.0 release notes](https://docs.djangoproject.com/en/5.0/releases/5.0/) |
| `django/storages-setting` | Django 5.1 konfiguruje przechowywanie plików w `STORAGES`. | wysoka | 5.1+ | tak | [Django 5.1 release notes](https://docs.djangoproject.com/en/5.1/releases/5.1/) |
| `django/use-tz-default` | Kod Django 5 zapisuje daty ze strefą czasową z `django.utils.timezone.now()`. | średnia | 5.0+ | tak | [Django 5.0 release notes](https://docs.djangoproject.com/en/5.0/releases/5.0/) |

## Docker

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `docker/non-root-user` | Ostatni etap obrazu przełącza się na `USER` inny niż root. | wysoka | każda | nie | [Docker docs, building best practices, USER](https://docs.docker.com/build/building/best-practices/#user) |
| `docker/pin-base-image` | Obraz bazowy jest przypięty do tagu wersji albo skrótu, nigdy do `latest`. | średnia | każda | tak | [Docker docs, building best practices, pin base image versions](https://docs.docker.com/build/building/best-practices/#pin-base-image-versions) |
| `docker/secrets-not-in-build-args` | Sekret trafia do budowania przez montowanie sekretu, nigdy przez `ARG`, `ENV` ani `COPY`. | krytyczna | każda | tak | [Docker docs, build secrets](https://docs.docker.com/build/building/secrets/) |

## Dokumentacja

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `docs/changelog-for-people` | Changelog wymienia ważne zmiany każdej wersji dla ludzi, a nie zrzut wiadomości commitów. | niska | każda | nie | [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) |
| `docs/runnable-code-samples` | Przykład kodu w dokumentacji da się skopiować i uruchomić tak, jak jest pokazany, z nazwanym każdym miejscem do uzupełnienia. | średnia | każda | nie | [Google developer documentation style guide, code samples](https://developers.google.com/style/code-samples) |

## .NET

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `dotnet/async-void` | Metody asynchroniczne zwracają Task; async void tylko w obsłudze zdarzeń. | średnia | 6+ | tak | [C# asynchronous programming scenarios](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios) |
| `dotnet/httpclient-factory` | Nie twórz nowego HttpClient dla każdego żądania; użyj IHttpClientFactory albo jednego długo żyjącego klienta. | wysoka | 6+ | tak | [.NET HttpClient guidelines](https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient-guidelines) |
| `dotnet/no-blocking-async` | Na zadania czekaj przez await; nigdy nie blokuj ich przez .Result, .Wait() ani GetAwaiter().GetResult(). | wysoka | 6+ | tak | [ASP.NET Core best practices](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/best-practices) |
| `dotnet/nullable-enable` | Włącz typy referencyjne dopuszczające null przez &lt;Nullable&gt;enable&lt;/Nullable&gt; w projekcie. | średnia | 6+ | nie | [C# nullable reference types](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references) |

## Express

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `express/async-errors` | Handlery Express 5 pozwalają, aby odrzucona obietnica dotarła do middleware błędów bez opakowań. | średnia | 5+ | tak | [Express, migrating to Express 5](https://expressjs.com/en/guide/migrating-5.html) |
| `express/body-undefined` | Trasa, która czyta `req.body`, ma zarejestrowany przed sobą parser treści. | średnia | 5+ | nie | [Express, migrating to Express 5](https://expressjs.com/en/guide/migrating-5.html) |
| `express/named-wildcard` | Trasa Express 5 nazywa swój symbol wieloznaczny, a część opcjonalną zapisuje w nawiasach klamrowych. | wysoka | 5+ | tak | [Express, migrating to Express 5](https://expressjs.com/en/guide/migrating-5.html) |
| `express/removed-methods` | Kod Express 5 używa `app.delete()`, `req.params`, `res.sendStatus()` i `res.status().json()`. | wysoka | 5+ | tak | [Express, migrating to Express 5](https://expressjs.com/en/guide/migrating-5.html) |

## Flutter

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `flutter/color-with-values` | Używaj Color.withValues(alpha: ...), a nie przestarzałych withOpacity i opacity. | niska | 3.27+ | tak | [Flutter breaking changes: wide gamut Color](https://docs.flutter.dev/release/breaking-changes/wide-gamut-framework) |
| `flutter/context-after-await` | Sprawdź mounted, zanim użyjesz BuildContext po await. | wysoka | 3.7+ | nie | [Dart lint: use_build_context_synchronously](https://dart.dev/tools/linter-rules/use_build_context_synchronously) |
| `flutter/pop-scope` | Używaj PopScope z canPop, a nie przestarzałego WillPopScope. | średnia | 3.16+ | tak | [Flutter breaking changes: Android predictive back](https://docs.flutter.dev/release/breaking-changes/android-predictive-back) |
| `flutter/text-scaler` | Używaj TextScaler (textScaler, MediaQuery.textScalerOf), a nie przestarzałego textScaleFactor. | średnia | 3.16+ | tak | [Flutter breaking changes: textScaleFactor deprecated](https://docs.flutter.dev/release/breaking-changes/deprecate-textscalefactor) |
| `flutter/widget-state` | Używaj WidgetState i WidgetStateProperty, a nie przestarzałych nazw MaterialState. | niska | 3.22+ | tak | [Flutter breaking changes: MaterialState renamed to WidgetState](https://docs.flutter.dev/release/breaking-changes/material-state) |

## Go

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `go/context-first-parameter` | `context.Context` jest pierwszym parametrem funkcji, która go potrzebuje, i nigdy nie jest przechowywany w strukturze. | średnia | każda | tak | [Go standard library, package context](https://pkg.go.dev/context) |
| `go/wrap-errors` | Błędy są opakowywane przez `%w` i porównywane przez `errors.Is` albo `errors.As`, nigdy po treści. | średnia | każda | tak | [The Go Blog, working with errors in Go 1.13](https://go.dev/blog/go1.13-errors) |

## Infrastruktura (Terraform)

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `infra/terraform-lock-providers` | Wersje providerów są ograniczone w `required_providers`, a `.terraform.lock.hcl` jest w repozytorium. | średnia | każda | nie | [Terraform docs, dependency lock file](https://developer.hashicorp.com/terraform/language/files/dependency-lock) |
| `infra/terraform-remote-state-lock` | Wspólny stan Terraform jest w zdalnym backendzie, który obsługuje blokady. | wysoka | każda | nie | [Terraform docs, state locking](https://developer.hashicorp.com/terraform/language/state/locking) |

## Java

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `java/optional-return-only` | `Optional` jest tylko typem zwracanym, nigdy polem, parametrem ani elementem kolekcji. | niska | każda | tak | [Java SE 21 API, java.util.Optional](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html) |
| `java/try-with-resources` | Każdy strumień, czytnik, połączenie i polecenie jest otwierane w bloku try-with-resources. | wysoka | każda | nie | [The Java Tutorials, the try-with-resources statement](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html) |

## Kubernetes

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `kubernetes/no-latest-tag` | Przypinaj obrazy kontenerów do tagu wersji albo skrótu, nigdy do :latest ani bez tagu. | wysoka | 1.25+ | tak | [Kubernetes docs: images](https://kubernetes.io/docs/concepts/containers/images/) |
| `kubernetes/readiness-probe` | Kontenery obsługujące ruch mają sondę gotowości i sondę żywotności, która sprawdza tylko sam proces. | średnia | 1.25+ | nie | [Kubernetes docs: liveness, readiness and startup probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) |
| `kubernetes/removed-apis` | Używaj obsługiwanych wersji API: policy/v1 dla PodDisruptionBudget, autoscaling/v2 dla HorizontalPodAutoscaler, apps/v1 dla obciążeń. | krytyczna | 1.25+ | tak | [Kubernetes deprecated API migration guide](https://kubernetes.io/docs/reference/using-api/deprecation-guide/) |
| `kubernetes/resource-requests` | Każdy kontener ma żądania CPU i pamięci oraz limit pamięci. | wysoka | 1.25+ | nie | [Kubernetes docs: resource management for pods and containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) |
| `kubernetes/run-as-non-root` | Uruchamiaj kontenery jako użytkownik inny niż root, z allowPrivilegeEscalation ustawionym na false. | wysoka | 1.25+ | nie | [Kubernetes Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/) |

## Laravel

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `laravel/bootstrap-app` | Nowa aplikacja Laravel 11 ustawia middleware, wyjątki i trasy w `bootstrap/app.php`. | wysoka | 11+ | nie | [Laravel 11.x, directory structure](https://laravel.com/docs/11.x/structure) |
| `laravel/casts-method` | Nowe modele Laravel 11 deklarują rzutowania w metodzie `casts()`, jeden styl w modelu. | niska | 11+ | nie | [Laravel 11.x, upgrade guide](https://laravel.com/docs/11.x/upgrade) |
| `laravel/install-api` | API w Laravel 11 dodaje się przez `php artisan install:api`, a nie ręcznie pisanym `routes/api.php`. | średnia | 11+ | nie | [Laravel 11.x, upgrade guide](https://laravel.com/docs/11.x/upgrade) |
| `laravel/providers-file` | Laravel 11 wymienia dodatkowych dostawców usług w `bootstrap/providers.php`, a nie w `config/app.php`. | średnia | 11+ | nie | [Laravel 11.x, directory structure](https://laravel.com/docs/11.x/structure) |
| `laravel/schedule-in-routes` | Harmonogramy Laravel 11 są w `routes/console.php`. | średnia | 11+ | nie | [Laravel 11.x, upgrade guide](https://laravel.com/docs/11.x/upgrade) |

## Aplikacje mobilne

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `mobile/android-exported` | Każda aktywność, usługa i odbiornik Androida z filtrem intencji ustawia jawnie `android:exported`. | wysoka | każda | nie | [Android 12 behavior changes, safer component exporting](https://developer.android.com/about/versions/12/behavior-changes-12#exported) |
| `mobile/ios-usage-description` | Aplikacja iOS, która używa aparatu, mikrofonu, zdjęć lub lokalizacji, ma w Info.plist pasujący opis celu. | krytyczna | każda | nie | [Apple Developer, NSCameraUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscamerausagedescription) |

## Next.js

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `nextjs/async-request-apis` | Na `params`, `searchParams`, `cookies()`, `headers()` i `draftMode()` czeka się przez await przed użyciem. | wysoka | 15+ | nie | [Next.js, upgrading to version 15](https://nextjs.org/docs/app/guides/upgrading/version-15) |
| `nextjs/fetch-not-cached` | Kod nie zakłada, że `fetch` albo handler trasy `GET` jest cache'owany; włącza cache, gdy go potrzebuje. | średnia | 15+ | nie | [Next.js, upgrading to version 15](https://nextjs.org/docs/app/guides/upgrading/version-15) |
| `nextjs/no-next-lint` | Projekt Next.js 16 uruchamia CLI ESLinta, a nie `next lint`. | niska | 16+ | tak | [Next.js, upgrading to version 16](https://nextjs.org/docs/app/guides/upgrading/version-16) |
| `nextjs/node-version` | Next.js 16 działa na Node.js 20.9 lub nowszym i TypeScripcie 5.1 lub nowszym. | średnia | 16+ | nie | [Next.js, upgrading to version 16](https://nextjs.org/docs/app/guides/upgrading/version-16) |
| `nextjs/proxy-file` | Projekt Next.js 16 pisze `proxy.ts` eksportujący `proxy`, a nie nowy `middleware.ts`. | wysoka | 16+ | tak | [Next.js, upgrading to version 16](https://nextjs.org/docs/app/guides/upgrading/version-16) |
| `nextjs/remote-images` | Zdalne obrazy są dozwolone przez `images.remotePatterns`, a nie `images.domains`. | niska | 14+ | tak | [Next.js, upgrading to version 15](https://nextjs.org/docs/app/guides/upgrading/version-15) |

## Node.js

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `node/handle-rejections` | Na każdą obietnicę czeka się przez await albo ma ona `.catch()`, bo nieobsłużone odrzucenie kończy proces. | wysoka | każda | nie | [Node.js, the --unhandled-rejections flag](https://nodejs.org/api/cli.html#--unhandled-rejectionsmode) |
| `node/no-sync-io-in-handlers` | Handler żądania nigdy nie wywołuje funkcji `*Sync` dla plików, kryptografii ani zlib. | wysoka | każda | nie | [Node.js, Don't block the event loop](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop) |

## PHP

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `php/prepared-statements` | SQL nigdy nie skleja wartości z żądania; wiąże je przez przygotowane zapytania. | krytyczna | każda | tak | [PHP manual, prepared statements and stored procedures](https://www.php.net/manual/en/pdo.prepared-statements.php) |
| `php/strict-types` | Każdy plik PHP zaczyna się od `declare(strict_types=1);`. | średnia | każda | nie | [PHP manual, strict typing](https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.strict) |

## Pydantic

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `pydantic/field-validator` | Walidatory Pydantic 2 używają `@field_validator` i `@model_validator`. | wysoka | 2+ | tak | [Pydantic, migration guide to v2](https://docs.pydantic.dev/latest/migration/) |
| `pydantic/model-config` | Modele Pydantic 2 konfiguruje się przez `model_config = ConfigDict(...)`. | wysoka | 2+ | tak | [Pydantic, migration guide to v2](https://docs.pydantic.dev/latest/migration/) |
| `pydantic/model-dump` | Kod Pydantic 2 wywołuje `model_dump`, `model_dump_json`, `model_validate` i `model_validate_json`. | wysoka | 2+ | tak | [Pydantic, migration guide to v2](https://docs.pydantic.dev/latest/migration/) |
| `pydantic/settings-package` | Ustawienia Pydantic 2 importują `BaseSettings` z `pydantic_settings`. | średnia | 2+ | tak | [Pydantic, migration guide to v2](https://docs.pydantic.dev/latest/migration/) |

## Python

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `python/mutable-default-argument` | Funkcja nigdy nie używa listy, słownika ani zbioru jako domyślnej wartości argumentu. | wysoka | każda | tak | [Python reference, function definitions](https://docs.python.org/3/reference/compound_stmts.html#function-definitions) |
| `python/subprocess-no-shell` | `subprocess` uruchamia polecenia jako listę argumentów, nigdy z `shell=True` wokół danych z zewnątrz. | krytyczna | każda | tak | [Python docs, subprocess security considerations](https://docs.python.org/3/library/subprocess.html#security-considerations) |

## Rails

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `rails/enum-positional` | Definiuj enumy w formie pozycyjnej, enum :status, [...], a nie przez argumenty nazwane. | wysoka | 7.0+ | tak | [Rails 8.0 release notes](https://guides.rubyonrails.org/8_0_release_notes.html) |
| `rails/no-string-sql` | Nigdy nie wstawiaj wartości z żądania do tekstu SQL; przekazuj je jako warunki w haszu albo z symbolami zastępczymi. | krytyczna | 7.0+ | tak | [Rails guides: Active Record query interface](https://guides.rubyonrails.org/active_record_querying.html) |
| `rails/params-expect` | Czytaj silne parametry przez params.expect, a nie params.require(...).permit(...). | średnia | 8.0+ | tak | [Rails 8.0 release notes](https://guides.rubyonrails.org/8_0_release_notes.html) |

## React

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `react/act-import` | Testy importują `act` z `react`, a nie z `react-dom/test-utils`. | niska | 19+ | tak | [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) |
| `react/create-root` | Aplikacja montuje się przez `createRoot` albo `hydrateRoot` z `react-dom/client`. | wysoka | 19+ | tak | [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) |
| `react/no-proptypes` | Komponenty funkcyjne nie polegają na `propTypes` ani `defaultProps`. | średnia | 19+ | tak | [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) |
| `react/ref-prop` | Nowy komponent funkcyjny React 19 przyjmuje `ref` jako prop zamiast używać `forwardRef`. | średnia | 19+ | nie | [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) |
| `react/removed-legacy` | Kod używa `useRef` albo refów w postaci funkcji i `createContext`, nigdy refów tekstowych ani `contextTypes`. | wysoka | 19+ | tak | [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) |
| `react/use-action-state` | Stan akcji formularza używa `useActionState` z `react`, a nie `useFormState` z `react-dom`. | wysoka | 19+ | tak | [React 19](https://react.dev/blog/2024/12/05/react-19) |

## Bezpieczeństwo

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `security/no-secrets-in-repo` | Żadne hasło, token, klucz ani connection string nie trafia do repozytorium, w kodzie, konfiguracji ani przykładach. | krytyczna | każda | nie | [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) |
| `security/password-hashing` | Hasła są zapisywane przez Argon2id, scrypt albo bcrypt, nigdy jawnie ani szybkim skrótem. | krytyczna | każda | tak | [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) |

## Spring

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `spring/constructor-injection` | Wymagane zależności wstrzykuj przez konstruktor, a nie przez @Autowired na polach. | średnia | 3.0+ | nie | [Spring Framework reference: dependency injection](https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html) |
| `spring/jakarta-namespace` | W Spring Boot 3 importuj jakarta.* (servlet, persistence, validation), a nie javax.*. | krytyczna | 3.0+ | tak | [Spring Boot 3.0 migration guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide) |
| `spring/security-filter-chain` | Konfiguruj Spring Security beanem SecurityFilterChain, a nie przez dziedziczenie po WebSecurityConfigurerAdapter. | wysoka | 3.0+ | tak | [Spring Security reference: Configuration Migrations](https://docs.enterprise.spring.io/spring-security/reference/5.8/migration/servlet/config.html) |

## SQLAlchemy

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `sqlalchemy/no-engine-execute` | Kod SQLAlchemy 2 wykonuje polecenia na połączeniu i jawnie robi commit. | wysoka | 2.0+ | tak | [SQLAlchemy, migrating to 2.0](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html) |
| `sqlalchemy/select` | Zapytania SQLAlchemy 2 używają `select()` z `session.execute()` albo `session.scalars()`. | średnia | 2.0+ | tak | [SQLAlchemy, migrating to 2.0](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html) |
| `sqlalchemy/text` | Surowy tekst SQL jest opakowany w `text()`. | wysoka | 2.0+ | tak | [SQLAlchemy, migrating to 2.0](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html) |
| `sqlalchemy/typed-mapping` | Nowe modele SQLAlchemy 2 używają `Mapped[...]` z `mapped_column()` w podklasie `DeclarativeBase`, jeden styl w module. | niska | 2.0+ | nie | [SQLAlchemy, migrating to 2.0](https://docs.sqlalchemy.org/en/20/changelog/migration_20.html) |

## Tailwind CSS

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `tailwind/border-ring-defaults` | Znaczniki Tailwind 4 ustawiają kolor obramowania i szerokość obwódki, o które im chodzi. | niska | 4+ | nie | [Tailwind CSS, upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |
| `tailwind/css-import` | Arkusz stylów Tailwind 4 zaczyna się od `@import "tailwindcss";`. | wysoka | 4+ | tak | [Tailwind CSS, upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |
| `tailwind/postcss-plugin` | Tailwind 4 działa przez `@tailwindcss/postcss` albo `@tailwindcss/vite`, a nie przez wtyczkę PostCSS `tailwindcss`. | średnia | 4+ | tak | [Tailwind CSS, upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |
| `tailwind/renamed-utilities` | Znaczniki Tailwind 4 używają nowych nazw klas cienia, zaokrąglenia, rozmycia i obrysu. | średnia | 4+ | nie | [Tailwind CSS, upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |
| `tailwind/theme-in-css` | Motyw Tailwind 4 jest zdefiniowany w CSS przez `@theme`; konfigurację w JavaScripcie wczytuje się tylko przez `@config`. | wysoka | 4+ | nie | [Tailwind CSS, upgrade guide](https://tailwindcss.com/docs/upgrade-guide) |

## Testy

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `testing/isolated-tests` | Każdy test przygotowuje własne dane i przechodzi sam, w dowolnej kolejności. | średnia | każda | nie | [Playwright docs, best practices, make tests as isolated as possible](https://playwright.dev/docs/best-practices#make-tests-as-isolated-as-possible) |
| `testing/no-fixed-waits` | Test end-to-end czeka na stan, nigdy na stałą liczbę milisekund. | średnia | każda | tak | [Playwright docs, page.waitForTimeout](https://playwright.dev/docs/api/class-page#page-wait-for-timeout) |

## Vue

| Reguła | Co mówi | Waga | Wersje | Sprawdzenie wierszy | Źródło |
| --- | --- | --- | --- | --- | --- |
| `vue/create-app` | Aplikacja Vue 3 powstaje przez `createApp(App).mount()`, a nie `new Vue()`. | wysoka | 3+ | tak | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
| `vue/if-before-for` | `v-if` i `v-for` nigdy nie są na tym samym elemencie. | średnia | 3+ | tak | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
| `vue/listeners-in-attrs` | Nasłuchiwacze czyta się z `$attrs`, a emitowane zdarzenia są zadeklarowane w `emits`. | niska | 3+ | tak | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
| `vue/model-props` | `v-model` na komponencie używa `modelValue` i `update:modelValue`. | wysoka | 3+ | nie | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
| `vue/no-event-bus` | Komponenty komunikują się przez propsy, emity, provide i inject albo store, a nie przez szynę zdarzeń. | średnia | 3+ | tak | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
| `vue/no-filters` | Szablony formatują wartości metodami albo wartościami computed, a nie filtrami. | średnia | 3+ | tak | [Vue 3 migration guide, breaking changes](https://v3-migration.vuejs.org/breaking-changes/) |
