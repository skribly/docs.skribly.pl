# Katalog skilli

> Wszystkie 35 skilli agent-skills, pogrupowane według zadań, z opisem działania, zastosowania i sposobu wywołania.

Wywołuj skill jako `/name` w Claude Code, Cursorze, Gemini CLI, OpenCode, Windsurfie i Copilot, `$name` w Codexie albo `@skills:name` w prompcie Devina. Możesz też po prostu opisać, czego potrzebujesz: agenci wybierają skille na podstawie ich opisu.

Lista do odczytu maszynowego to plik `skills.json` w repozytorium, sprawdzany w CI względem schematu JSON.

## Przepływ pracy

| Skill | Działanie | Przykład |
| --- | --- | --- |
| `task` | Prowadzi od zgłoszenia lub jednego zdania do zatwierdzonego commita: pobiera zgłoszenie skryptem, pisze krótką lub obszerną analizę (`SPEC.md` do zatwierdzenia), po zatwierdzeniu tworzy gałąź, pracuje etapami i po każdym etapie aktualizuje `STATE.md`, uruchamia sprawdzenia i po Twojej zgodzie robi commit. Dodatki: `estimate`, `plan`, `pr` (opis pull requesta) oraz `comment` (komentarz w trackerze). | `/task 482` · `$task SHOP-42` · `/task fix the date sorting` · `/task`, aby wznowić zadanie bieżącej gałęzi |
| `project` | Wykrywa stos, polecenia install, dev, build, test, lint, typecheck i format, styl i język commitów, gałąź bazową, CI i kontenery, a wynik zapisuje w `.skribly/project.json`, który każdy skill czyta jako pierwszy. Wartości ustawione ręcznie nigdy nie są nadpisywane, a wartość usunięta ręcznie pozostaje usunięta. | `/project` · `$project` · „jakich poleceń używa to repozytorium?” |
| `commit` | Proponuje wiadomość zgodną z konwencją projektu, wykrytą z Twoich ostatnich commitów, i po Twojej akceptacji robi commit wskazanych plików. Nigdy nie dodaje stopek i nigdy nie robi push. | `/commit` · „podziel to na dwa commity” |
| `handoff` | Zapisuje lub odczytuje `.tasks/<id>/STATE.md`, aby inny agent lub świeża sesja mogły kontynuować pracę bez transkryptu. | `/handoff` · `$handoff resume 482` |
| `orchestrate` | Dzieli duże zadanie na niezależne podzadania z samodzielnymi opisami i przypisaniem plików, uruchamia je równolegle w subagentach lub worktree, a potem scala wyniki i je weryfikuje. | `/orchestrate migrate all forms to the new validation helper` |
| `estimate` | Oszacowanie pracochłonności, tylko do odczytu: elementy do dostarczenia, godziny optymistyczne, prawdopodobne i pesymistyczne, suma i przedział PERT, założenia, ryzyka i otwarte pytania. | `/estimate 482` |
| `plan-step` | Pisze lub rozszerza pakiet pracy planu dokładnie w kształcie, który plan definiuje: nagłówki w kolejności, zadania z plikami, opisem działań i sprawdzeniem, działania właściciela, weryfikacja, kryteria ukończenia i ryzyka. Identyfikatory zadań i odwołania do sekcji pozostają stałe. Pisze plan, ale nie wykonuje etapu. | `/plan-step` · „napisz pakiet pracy dla F9” · „dodaj zadanie do F5” |
| `run-step` | Wykonuje jeden pakiet pracy zadanie po zadaniu według protokołu etapów planu: krótka gałąź z `develop` dla każdego zadania, jego sprawdzenie, Conventional Commit z jawnymi ścieżkami, scalenie z `--no-ff`, push i dopiero potem odhaczenie. Działania, które należą do właściciela, są zapisywane jako zablokowane i nigdy nie są podejmowane. | `/run-step` · „uruchom etap F5” · „zrób następne zadanie z F5” |
| `release` | Przechodzi listę kontrolną wydania z planu i uruchamia sprawdzenia tylko do odczytu przed wydaniem: `develop` czysty, `package.json` i `VERSION` zgodne, wpis w `CHANGELOG.md` obecny, tag nadal wolny. Nigdy nie podnosi wersji, nie tworzy tagów, nie scala do `main` i niczego nie publikuje. | `/release` · „czy to jest gotowe do wydania?” · „uruchom cotygodniową rutynę” |

## Jakość i testy

| Skill | Działanie | Przykład |
| --- | --- | --- |
| `test-loop` | Uruchamia tylko sprawdzenia, których dotyczy zmiana, naprawia w pętli ograniczonej do trzech prób, skraca logi i nigdy nie osłabia testów. | `/test-loop` · „napraw CI” |
| `backend-tests` | Pisze i uruchamia testy backendu dla zmienionego kodu: pytest z Django i DRF, Laravel PHPUnit lub Pest, Node z supertest, Go, Spring. Obejmuje testową bazę danych, fabryki (factories), izolację, mockowane żądania HTTP i pokrycie zmienionych wierszy. | `/backend-tests` · „dodaj pokrycie dla nowego endpointu zamówień” |
| `api-tests` | Testy kontraktowe i integracyjne REST i GraphQL na podstawie OpenAPI (Schemathesis, Dredd, Hurl, newman), z przepływami uwierzytelniania i przypadkami błędów. | „sprawdź API względem openapi.yaml” |
| `e2e-tests` | Specyfikacje Playwright dla zmienionych ścieżek użytkownika; uruchamia tylko dotknięte specyfikacje, zachowuje ślady (traces) i usuwa przyczynę niestabilnych testów. | `/e2e-tests` · „ten test nie przechodzi tylko w CI” |
| `load-test` | k6, autocannon lub Locust, od testów smoke po load, stress i spike, z progami i skróconymi wynikami. | `/load-test GET /api/orders at 20 users` |
| `review` | Samodzielny przegląd diffu przed commitem: najpierw znaleziska, z ważnością, `file:line` i poprawką. | `/review` · `/review src/billing` |
| `debug` | Odtwarza błąd, zawęża go, dowodzi przyczyny, wprowadza najmniejszą poprawkę i używa tego samego odtworzenia jako dowodu. | `/debug totals are wrong after applying a coupon` |
| `refactor` | Refaktoryzacja zachowująca działanie: najpierw testy charakteryzujące (characterisation tests), potem małe, zweryfikowane kroki. | `/refactor split OrderService` |
| `db-migrations` | Migracje bez przestoju dla Django, Laravel, Prisma, Alembic, Flyway i Rails, z linterem wykrywającym blokady i ryzyka. | „czy ta migracja jest bezpieczna?” |
| `i18n` | Wyszukuje brakujące, puste i nieużywane klucze tłumaczeń, niezgodne placeholdery, klucze użyte w kodzie, których brakuje w plikach, oraz wyodrębnia teksty. | `/i18n` · „sprawdź pliki lokalizacji” |
| `browser-check` | Zrzuty ekranu samego zmienionego elementu w Chromium bez interfejsu (headless), na desktopie i na telefonie, wraz z błędami konsoli. Tylko za Twoją zgodą. | `/browser-check the cart badge on /cart` |
| `design-review` | Przegląda stronę lub komponent względem listy rzeczy, które nie przechodzą przeglądu projektu graficznego, i listy kontrolnej wspólnej dla wszystkich witryn, obu z planu. Skrypt wyszukuje ikony emoji, gradienty, efekty szkła, brakujący tekst alternatywny, landmarki oraz reguły nagłówków, tytułu, meta i hreflang; resztę ocenia się na zrzutach ekranu w szerokości telefonu i komputera w każdym motywie. Tylko do odczytu. | `/design-review` · „czy ta strona nie przejdzie przeglądu?” |

## Wydajność

| Skill | Działanie | Przykład |
| --- | --- | --- |
| `pagespeed` | Core Web Vitals przez PageSpeed Insights dla publicznych adresów URL albo lokalny Lighthouse dla localhost, na telefonie i na desktopie, skrócone do najważniejszych możliwości poprawy, z pętlą poprawka i pomiar dla Next.js, Vite, Django i Laravel. | `/pagespeed http://localhost:3000/products` |
| `perf-backend` | Wykrywanie N+1 z logów zapytań, indeksy na podstawie `EXPLAIN`, cache i profilowanie, potwierdzone liczbami przed zmianą i po niej. | `/perf-backend /api/orders is slow` |

## Bezpieczeństwo i dostępność

| Skill | Działanie | Przykład |
| --- | --- | --- |
| `security-audit` | Skan sekretów z maskowaniem, podatnych zależności (npm, pnpm, Composer, pip lub OSV.dev) i niebezpiecznych wzorców w kodzie, z ważnością, dowodami i poprawkami. Tylko do odczytu. | `/security-audit` · `/security-audit full` |
| `wcag-audit` | Audyt WCAG 2.2 AA zmienionego interfejsu: axe-core przez Playwright, gdy jest dostępny, oraz celowana lista kontrolna i konkretne poprawki. | `/wcag-audit http://localhost:3000/checkout` |

## DevOps

| Skill | Działanie | Przykład |
| --- | --- | --- |
| `docker` | Przegląd i poprawki Dockerfile i compose: kompilacje wieloetapowe, przypięte obrazy, użytkownicy inni niż root, cache, healthchecki, sekrety i wystawione bazy danych. Używa hadolint, jeśli jest zainstalowany. | `/docker` · „zmniejsz obraz” |
| `ci-setup` | Tworzy lub naprawia GitHub Actions albo GitLab CI dla wykrytego stosu oraz sprawdza workflow pod kątem wstrzyknięć i nieprzypiętych akcji. Używa actionlint, jeśli jest zainstalowany. | `/ci-setup` · „czy nasz workflow jest bezpieczny?” |
| `deps-update` | Nieaktualne pakiety pogrupowane według ryzyka, przeczytane changelogi wersji głównych, jedna grupa naraz z testami i osobnym commitem. | `/deps-update` · „zaktualizuj wszystkie wersje patch” |

## Dokumentacja i meta

| Skill | Działanie | Przykład |
| --- | --- | --- |
| `project-docs` | Folder wiedzy `.docs/` (przegląd, architektura, moduły, przepływ danych, rozwój i decyzje) oraz krótki `AGENTS.md` lub `CLAUDE.md`, który na niego wskazuje. | `/project-docs` · „odchudź nasz CLAUDE.md” |
| `seo-audit` | Techniczny audyt SEO: tagi meta, nagłówki, canonical, robots i mapa witryny, hreflang, Open Graph, JSON-LD i podstawy wydajności. | `/seo-audit https://example.com/product/1` |
| `release-notes` | Notatki do wydania i wpisy w `CHANGELOG.md` na podstawie historii git, w stylu projektu, bez stopek AI. | `/release-notes since v1.4.0` |
| `adr` | Pisze zapis decyzji architektonicznej w MADR 4.0.0 z czterema polami wymaganymi w Skribly (pewność, kiedy wrócić do decyzji, plan wyjścia i potwierdzenie z nazwanym sprawdzeniem), numeruje go i prowadzi indeks `.docs/adr`. Odmawia edycji przyjętego zapisu i zamiast tego zastępuje go nowym, połączonym linkiem. | `/adr` · „zapisz tę decyzję” · „zastąp ADR 0007” |
| `docs-sync` | Sprawdza, czy zmiana widoczna dla użytkownika zaktualizowała w tej samej zmianie polskie i angielskie pliki językowe z tymi samymi kluczami, `.docs/` repozytorium, `CHANGELOG.md` i odpowiednią stronę tej witryny. Tylko do odczytu: zgłasza, czego brakuje, a agent to uzupełnia. | `/docs-sync` · „czy zaktualizowałem dokumentację?” |
| `learn` | Zachowuje potwierdzone lekcje projektu (działające polecenie, konwencję, pułapkę) w `.skribly/lessons.md`, po jednym datowanym wierszu z nazwą skilla, z którego pochodzi, i tylko po Twojej zgodzie. Każdy skill czyta ten plik jako pierwszy. Odrzuca wszystko, co wygląda na sekret. | `/learn` · „zapamiętaj, że testy e2e wymagają bazy z danymi seed” |
| `token-saver` | Zasady pracy przy małym kontekście: szukaj przed czytaniem, zakresy wierszy, skrócone logi, skrypty zamiast modelu, `/clear` i `STATE.md`. | `/token-saver` · „zbliżam się do limitu” |

## Pliki, które zostawiają skille

| Plik | Zapisuje | Co zawiera |
| --- | --- | --- |
| `.skribly/project.json` | `project`, instalacje w zakresie projektu, Ty | Profil projektu: stos, polecenia, styl i język commitów, gałąź bazowa i opcjonalnie projekt w Skribly Tracker. Jego schemat pochodzi z [`@skribly/core`](/pl/core/) |
| `.skribly/project.detected.json` | `project` | Wynik ostatniego wykrywania, dzięki któremu następne uruchomienie odróżni wartości wykryte od ustawionych ręcznie |
| `.skribly/lessons.md` | `learn`, po Twojej zgodzie | Datowane lekcje po jednym wierszu, każda z nazwą skilla, z którego pochodzi |
| `.tasks/<id>/TASK.md` | `task` | Pobrane zgłoszenie; przy kolejnych pobraniach odświeżane tylko o zmiany |
| `.tasks/<id>/SPEC.md` | `task` | Analiza większego zadania, do zatwierdzenia |
| `.tasks/<id>/STATE.md` | `task`, `handoff` | Około 30 wierszy: cel, co zrobiono, zmienione pliki, wyniki sprawdzeń, decyzje i jeden następny krok |
| `.tasks/<id>/COMMENT.md` | `task` | Szkic komentarza w trackerze, publikowany dopiero po Twojej wyraźnej zgodzie |
| `.tasks/workflow.md` | `task` | Konwencje projektu: tracker, gałąź bazowa, wzorce gałęzi i commitów, polecenia sprawdzające oraz adres URL środowiska deweloperskiego |

`.tasks/` jest dodany do `.git/info/exclude`, więc pobrane zgłoszenia nigdy nie trafią do commita, a plik `.gitignore` zespołu pozostaje nietknięty. Pliki `.skribly/` mają trafiać do commita razem z projektem, żeby cały zespół i każdy agent czytali ten sam profil i te same lekcje.
