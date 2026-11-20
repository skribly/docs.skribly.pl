# Koszt w tokenach

> Ile tokenów kosztuje agenta każdy skill agent-skills: wpis na liście trzymany w każdej sesji, uruchomienie, budżet pilnowany przez sprawdzenie i opisy czytane na żądanie.

Każdy skill jest zmierzony i każdy ma budżet. Liczby to szacunek: liczba znaków / 4, praktyczna reguła skilla [`token-saver`](/pl/skills/skill/token-saver/). Pochodzą z wersji w przygotowaniu, która wejdzie do następnego wydania; `agent-skills tokens` podaje je dla wersji, którą masz zainstalowaną.

## Kolumny

- **Na liście**: nazwa i opis. Agent trzyma je w kontekście w każdej sesji, dla każdego zainstalowanego skilla. `agent-skills init` instaluje tylko skille pasujące do projektu, więc projekt płaci za mniej wpisów.
- **Uruchomienie**: `SKILL.md` i opisy, które skill wczytuje domyślnie, czytane przy każdym uruchomieniu. To, co uruchomienie pisze, zależy od zadania i nie jest liczone; skrypty ograniczają swój wynik do kilku wierszy.
- **Budżet**: górna granica uruchomienia. Sprawdzenie w repozytorium nie przechodzi, gdy skill ją przekroczy, więc skill nie może przypadkiem urosnąć.
- **Na żądanie**: pozostałe pliki z opisami, czytane tylko wtedy, gdy potrzebuje ich jakiś krok.

Wszystkie 57 skille razem: wpisy na liście 7480 tokenów, uruchomienia 52598 tokenów, na żądanie 22771 tokenów.

## Dla każdego skilla

| Skill | Stosy | Na liście | Uruchomienie | Budżet | Na żądanie |
| --- | --- | ---: | ---: | ---: | ---: |
| [`adr`](/pl/skills/skill/adr/) | ogólny | 116 | 1124 | 1300 | 0 |
| [`api-tests`](/pl/skills/skill/api-tests/) | backend | 116 | 886 | 1050 | 728 |
| [`backend-tests`](/pl/skills/skill/backend-tests/) | backend | 131 | 887 | 1050 | 901 |
| [`blast-radius`](/pl/skills/skill/blast-radius/) | ogólny | 120 | 500 | 600 | 0 |
| [`browser-check`](/pl/skills/skill/browser-check/) | web | 116 | 668 | 800 | 0 |
| [`ci-setup`](/pl/skills/skill/ci-setup/) | ogólny | 124 | 898 | 1050 | 1578 |
| [`commit`](/pl/skills/skill/commit/) | ogólny | 125 | 771 | 900 | 1494 |
| [`correct`](/pl/skills/skill/correct/) | ogólny | 109 | 388 | 450 | 0 |
| [`db-migrations`](/pl/skills/skill/db-migrations/) | database | 130 | 890 | 1050 | 806 |
| [`debug`](/pl/skills/skill/debug/) | ogólny | 111 | 819 | 950 | 0 |
| [`deps-update`](/pl/skills/skill/deps-update/) | ogólny | 109 | 904 | 1000 | 0 |
| [`design-review`](/pl/skills/skill/design-review/) | web | 155 | 888 | 1050 | 0 |
| [`deslop`](/pl/skills/skill/deslop/) | ogólny | 131 | 483 | 600 | 0 |
| [`docker`](/pl/skills/skill/docker/) | docker | 120 | 910 | 1050 | 0 |
| [`docs-sync`](/pl/skills/skill/docs-sync/) | ogólny | 126 | 1088 | 1300 | 0 |
| [`e2e-check`](/pl/skills/skill/e2e-check/) | web | 132 | 1081 | 1250 | 0 |
| [`e2e-tests`](/pl/skills/skill/e2e-tests/) | web | 107 | 813 | 950 | 543 |
| [`estimate`](/pl/skills/skill/estimate/) | ogólny | 117 | 660 | 750 | 0 |
| [`framework-guide`](/pl/skills/skill/framework-guide/) | ogólny | 175 | 783 | 850 | 5793 |
| [`gate-convention`](/pl/skills/skill/gate-convention/) | ogólny | 156 | 980 | 1150 | 0 |
| [`guide-tests`](/pl/skills/skill/guide-tests/) | ogólny | 145 | 1245 | 1400 | 0 |
| [`handoff`](/pl/skills/skill/handoff/) | ogólny | 98 | 783 | 900 | 0 |
| [`i18n`](/pl/skills/skill/i18n/) | web | 115 | 805 | 950 | 0 |
| [`improve`](/pl/skills/skill/improve/) | ogólny | 111 | 432 | 500 | 0 |
| [`learn`](/pl/skills/skill/learn/) | ogólny | 157 | 883 | 1050 | 0 |
| [`load-test`](/pl/skills/skill/load-test/) | backend | 121 | 807 | 950 | 0 |
| [`merge`](/pl/skills/skill/merge/) | ogólny | 129 | 545 | 650 | 0 |
| [`newsletter`](/pl/skills/skill/newsletter/) | ogólny | 187 | 1980 | 2250 | 1212 |
| [`orchestrate`](/pl/skills/skill/orchestrate/) | ogólny | 153 | 1216 | 1400 | 0 |
| [`pagespeed`](/pl/skills/skill/pagespeed/) | web | 118 | 845 | 1000 | 954 |
| [`perf-backend`](/pl/skills/skill/perf-backend/) | backend | 132 | 928 | 1100 | 805 |
| [`plan`](/pl/skills/skill/plan/) | ogólny | 107 | 630 | 750 | 0 |
| [`plan-step`](/pl/skills/skill/plan-step/) | ogólny | 133 | 1147 | 1350 | 0 |
| [`project`](/pl/skills/skill/project/) | ogólny | 138 | 771 | 900 | 0 |
| [`project-docs`](/pl/skills/skill/project-docs/) | ogólny | 115 | 1301 | 1500 | 0 |
| [`record-docs`](/pl/skills/skill/record-docs/) | ogólny | 132 | 449 | 550 | 0 |
| [`refactor`](/pl/skills/skill/refactor/) | ogólny | 128 | 902 | 1050 | 0 |
| [`release`](/pl/skills/skill/release/) | ogólny | 142 | 850 | 1000 | 0 |
| [`release-notes`](/pl/skills/skill/release-notes/) | ogólny | 119 | 730 | 850 | 0 |
| [`report`](/pl/skills/skill/report/) | ogólny | 112 | 419 | 500 | 0 |
| [`review`](/pl/skills/skill/review/) | ogólny | 166 | 955 | 1100 | 1098 |
| [`run-step`](/pl/skills/skill/run-step/) | ogólny | 136 | 1354 | 1600 | 0 |
| [`security-audit`](/pl/skills/skill/security-audit/) | ogólny | 139 | 1596 | 1850 | 0 |
| [`seed`](/pl/skills/skill/seed/) | skribly-app | 152 | 1232 | 1450 | 0 |
| [`seo-audit`](/pl/skills/skill/seo-audit/) | web | 124 | 733 | 850 | 642 |
| [`slice`](/pl/skills/skill/slice/) | skribly-app | 177 | 1527 | 1800 | 804 |
| [`spec`](/pl/skills/skill/spec/) | ogólny | 150 | 1132 | 1300 | 0 |
| [`standard`](/pl/skills/skill/standard/) | ogólny | 156 | 1332 | 1550 | 1762 |
| [`task`](/pl/skills/skill/task/) | ogólny | 136 | 1914 | 2200 | 1790 |
| [`test-loop`](/pl/skills/skill/test-loop/) | ogólny | 109 | 805 | 950 | 0 |
| [`token-saver`](/pl/skills/skill/token-saver/) | ogólny | 105 | 772 | 900 | 0 |
| [`tracker-write`](/pl/skills/skill/tracker-write/) | ogólny | 123 | 472 | 550 | 0 |
| [`train-skills`](/pl/skills/skill/train-skills/) | ogólny | 186 | 1008 | 1150 | 0 |
| [`upgrade`](/pl/skills/skill/upgrade/) | ogólny | 130 | 935 | 1100 | 0 |
| [`verify`](/pl/skills/skill/verify/) | ogólny | 135 | 669 | 700 | 0 |
| [`wcag-audit`](/pl/skills/skill/wcag-audit/) | web | 104 | 716 | 850 | 1281 |
| [`writing`](/pl/skills/skill/writing/) | ogólny | 134 | 1357 | 1600 | 580 |

Jak skille oszczędzają tokeny poza własnym rozmiarem, z pomiarami: [Jak to działa](/pl/skills/how-it-works/#oszczędnie-z-tokenami) i [Oszczędzanie tokenów](/pl/agent/token-saving/).
