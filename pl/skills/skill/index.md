# Wszystkie skille

> Każdy z 57 skilli agent-skills na osobnej stronie, generowanej z jego SKILL.md: co robi, kiedy go używać, jak go wywołać, jego skrypty, stosy, do których pasuje, i koszt w tokenach.

W przygotowaniu jest 57 skilli: 39 z nich jest w wydanym agent-skills 0.3.0, pozostałe 18 wejdą do następnego wydania. Każda strona powstaje z pliku `SKILL.md` skilla, więc mówi to samo co on.

## Przepływ pracy

| Skill | Co to jest | Stosy | Wydanie |
| --- | --- | --- | --- |
| [`ci-setup`](/pl/skills/skill/ci-setup/) | Konfiguracja CI | ogólny | 0.3.0 |
| [`commit`](/pl/skills/skill/commit/) | Commit w stylu projektu | ogólny | 0.3.0 |
| [`deps-update`](/pl/skills/skill/deps-update/) | Bezpieczne aktualizacje zależności | ogólny | 0.3.0 |
| [`estimate`](/pl/skills/skill/estimate/) | Oszacowanie zadania | ogólny | 0.3.0 |
| [`handoff`](/pl/skills/skill/handoff/) | Przekazanie pracy i wznowienie | ogólny | 0.3.0 |
| [`improve`](/pl/skills/skill/improve/) | Drobne poprawki na żywo | ogólny | następne |
| [`merge`](/pl/skills/skill/merge/) | Domknięcie gałęzi do develop | ogólny | następne |
| [`orchestrate`](/pl/skills/skill/orchestrate/) | Równoległe subagenty | ogólny | 0.3.0 |
| [`plan`](/pl/skills/skill/plan/) | Plan dużej inicjatywy | ogólny | następne |
| [`plan-step`](/pl/skills/skill/plan-step/) | Plan pakietu pracy | ogólny | 0.3.0 |
| [`project`](/pl/skills/skill/project/) | Profil projektu | ogólny | 0.3.0 |
| [`release`](/pl/skills/skill/release/) | Lista kontrolna wydania | ogólny | 0.3.0 |
| [`run-step`](/pl/skills/skill/run-step/) | Wykonanie pakietu pracy | ogólny | 0.3.0 |
| [`seed`](/pl/skills/skill/seed/) | Dane startowe modułu | `skribly-app` | 0.3.0 |
| [`slice`](/pl/skills/skill/slice/) | Pionowy wycinek | `skribly-app` | 0.3.0 |
| [`spec`](/pl/skills/skill/spec/) | Specyfikacja gotowa do wdrożenia | ogólny | następne |
| [`standard`](/pl/skills/skill/standard/) | Standard repozytorium | ogólny | 0.3.0 |
| [`task`](/pl/skills/skill/task/) | Przebieg zadania | ogólny | 0.3.0 |
| [`tracker-write`](/pl/skills/skill/tracker-write/) | Szkice tekstów do trackera i przeglądu | ogólny | następne |
| [`upgrade`](/pl/skills/skill/upgrade/) | Aktualizacja do nowej wersji głównej | ogólny | następne |

## Jakość i testy

| Skill | Co to jest | Stosy | Wydanie |
| --- | --- | --- | --- |
| [`api-tests`](/pl/skills/skill/api-tests/) | Testy kontraktowe API | `backend` | 0.3.0 |
| [`backend-tests`](/pl/skills/skill/backend-tests/) | Testy backendu | `backend` | 0.3.0 |
| [`blast-radius`](/pl/skills/skill/blast-radius/) | Co zmiana psuje poza diffem | ogólny | następne |
| [`browser-check`](/pl/skills/skill/browser-check/) | Sprawdzenie w przeglądarce bez interfejsu | `web` | 0.3.0 |
| [`correct`](/pl/skills/skill/correct/) | Zabezpieczenie przed powtarzanym błędem | ogólny | następne |
| [`db-migrations`](/pl/skills/skill/db-migrations/) | Bezpieczne migracje bazy danych | `database` | 0.3.0 |
| [`debug`](/pl/skills/skill/debug/) | Szukanie przyczyny błędu | ogólny | 0.3.0 |
| [`design-review`](/pl/skills/skill/design-review/) | Przegląd projektu graficznego strony | `web` | 0.3.0 |
| [`deslop`](/pl/skills/skill/deslop/) | Sprzątanie maszynowych naleciałości w diffie | ogólny | następne |
| [`e2e-check`](/pl/skills/skill/e2e-check/) | Przejście funkcji w przeglądarce bez interfejsu | `web` | następne |
| [`e2e-tests`](/pl/skills/skill/e2e-tests/) | Testy end-to-end w Playwright | `web` | 0.3.0 |
| [`framework-guide`](/pl/skills/skill/framework-guide/) | Kod frameworka dla zainstalowanej wersji | ogólny | następne |
| [`gate-convention`](/pl/skills/skill/gate-convention/) | Bramka konwencji | ogólny | następne |
| [`guide-tests`](/pl/skills/skill/guide-tests/) | Przewodnik po testach | ogólny | następne |
| [`i18n`](/pl/skills/skill/i18n/) | Tłumaczenia i i18n | `web` | 0.3.0 |
| [`load-test`](/pl/skills/skill/load-test/) | Testy obciążeniowe | `backend` | 0.3.0 |
| [`perf-backend`](/pl/skills/skill/perf-backend/) | Wydajność backendu | `backend` | 0.3.0 |
| [`refactor`](/pl/skills/skill/refactor/) | Refaktoryzacja bez zmiany działania | ogólny | 0.3.0 |
| [`review`](/pl/skills/skill/review/) | Samodzielny przegląd przed commitem | ogólny | 0.3.0 |
| [`test-loop`](/pl/skills/skill/test-loop/) | Skupiona pętla testów | ogólny | 0.3.0 |
| [`verify`](/pl/skills/skill/verify/) | Sprawdzenie zmiany w działającej aplikacji | ogólny | następne |

## Audyty

| Skill | Co to jest | Stosy | Wydanie |
| --- | --- | --- | --- |
| [`docker`](/pl/skills/skill/docker/) | Przegląd Dockera i compose | `docker` | 0.3.0 |
| [`pagespeed`](/pl/skills/skill/pagespeed/) | PageSpeed i Web Vitals | `web` | 0.3.0 |
| [`security-audit`](/pl/skills/skill/security-audit/) | Audyt bezpieczeństwa | ogólny | 0.3.0 |
| [`seo-audit`](/pl/skills/skill/seo-audit/) | Techniczny audyt SEO | `web` | 0.3.0 |
| [`wcag-audit`](/pl/skills/skill/wcag-audit/) | Audyt WCAG 2.2 AA | `web` | 0.3.0 |

## Dokumentacja

| Skill | Co to jest | Stosy | Wydanie |
| --- | --- | --- | --- |
| [`adr`](/pl/skills/skill/adr/) | Zapis decyzji architektonicznej | ogólny | 0.3.0 |
| [`docs-sync`](/pl/skills/skill/docs-sync/) | Dokumentacja idzie razem z kodem | ogólny | 0.3.0 |
| [`newsletter`](/pl/skills/skill/newsletter/) | Numer newslettera | ogólny | 0.3.0 |
| [`project-docs`](/pl/skills/skill/project-docs/) | Dokumentacja wiedzy o projekcie | ogólny | 0.3.0 |
| [`record-docs`](/pl/skills/skill/record-docs/) | Opis zbudowanej funkcji | ogólny | następne |
| [`release-notes`](/pl/skills/skill/release-notes/) | Notatki do wydania | ogólny | 0.3.0 |
| [`report`](/pl/skills/skill/report/) | Raport z realizacji | ogólny | następne |
| [`writing`](/pl/skills/skill/writing/) | Proste pisanie dla ludzi | ogólny | następne |

## Meta

| Skill | Co to jest | Stosy | Wydanie |
| --- | --- | --- | --- |
| [`learn`](/pl/skills/skill/learn/) | Lekcje projektu | ogólny | 0.3.0 |
| [`token-saver`](/pl/skills/skill/token-saver/) | Oszczędzanie tokenów | ogólny | 0.3.0 |
| [`train-skills`](/pl/skills/skill/train-skills/) | Dopasowanie skilli do projektu | ogólny | następne |
