# Jak to działa

> Jak skille agent-skills działają razem - jeden potok od planu do scalonej gałęzi, przeglądy tylko do odczytu po drodze, profil projektu, który każdy skill czyta jako pierwszy, i lekcje z zakresem.

:::note[W przygotowaniu]
Ta strona opisuje wersję w przygotowaniu, która wejdzie do następnego wydania. Wydany agent-skills 0.3.0 ma profil, lekcje bez zakresów i większość kroków; kroki oznaczone jako „następne” na stronie [Wszystkie skille](/pl/skills/skill/) przyjdą z następnym wydaniem.
:::

Każdy krok pracy to skill. Każdy najpierw czyta profil projektu (`.skribly/project.json`) i lekcje (`.skribly/lessons.md`), swoje pliki robocze trzyma w `.tasks/` (poza gitem) i czeka na Ciebie w miejscach oznaczonych **OK**.

## Potok

Jedna droga od pomysłu do scalonej gałęzi:

```text
plan -> spec -> task -> verify -> e2e-check -> improve -> commit -> merge
         \___ review · gate-convention · blast-radius · security-audit · design-review · deslop ___/
```

Mała praca pomija pierwsze kroki: poprawka w jednym pliku zaczyna się od `task`, zadanie na jedno posiedzenie nie potrzebuje `plan`, a zadanie, które `task` opisze w pięciu wierszach, nie potrzebuje `spec`.

| Krok | Skill | Zapisuje | Czeka na |
| --- | --- | --- | --- |
| 1 | [`plan`](/pl/skills/skill/plan/) | `.tasks/plans/<slug>.md` | **OK** dla planu |
| 2 | [`spec`](/pl/skills/skill/spec/) | `.tasks/specs/SPEC-<slug>.md` | **OK**, potem `Status: approved` |
| 3 | [`task`](/pl/skills/skill/task/) | gałąź, kod w fazach, `.tasks/<id>/STATE.md` | **OK** przed utworzeniem gałęzi |
| 4 | [`verify`](/pl/skills/skill/verify/) | nic: wynik każdego kroku | - |
| 5 | [`e2e-check`](/pl/skills/skill/e2e-check/) | zrzuty w folderze wyników testów | **OK** na tokeny za zrzuty |
| 6 | [`improve`](/pl/skills/skill/improve/) | jedna mała poprawka na uwagę | Twoją następną uwagę |
| 7 | [`commit`](/pl/skills/skill/commit/) | lokalny commit, bez stopek | **OK** dla wiadomości i plików |
| 8 | [`merge`](/pl/skills/skill/merge/) | scalenie do `develop`, push | **OK** przed push i sprzątaniem |

Skill `project` zapisuje w projekcie konwencje obu folderów planowania: `.tasks/plans/README.md` i `.tasks/specs/README.md`, z nazewnictwem, zawartością każdego pliku i cyklem życia `draft -> approved -> done -> archived`.

## Bramki

Bramki to przeglądy tylko do odczytu. Każda zaczyna od znalezisk, z `file:line` i poprawką, a kod zmienia dopiero wtedy, gdy przyjmiesz znalezisko.

| Bramka | Pyta | Kto ją woła |
| --- | --- | --- |
| [`review`](/pl/skills/skill/review/) | czy zmiana robi to, co obiecuje, dla każdych danych wejściowych? | `task` przed każdym commitem; `review pr` przed `merge` |
| [`gate-convention`](/pl/skills/skill/gate-convention/) | czy trzyma się tego, co projekt zapisał w `AGENTS.md` i w profilu? | po każdej fazie specyfikacji; `task` przed commitem |
| [`blast-radius`](/pl/skills/skill/blast-radius/) | co poza diffem zależy od tego, co się zmieniło? | `task`, gdy zmienia się eksport, trasa, schemat, konfiguracja lub wspólny moduł |
| [`security-audit`](/pl/skills/skill/security-audit/) | sekrety, wstrzyknięcia, autoryzacja, podatne zależności? | `task`, gdy zmienia się uwierzytelnianie, dane wejściowe lub zależności; `deps-update` |
| [`design-review`](/pl/skills/skill/design-review/) | czy strona przechodzi listę kontrolną projektu? | `task` przy widocznej zmianie interfejsu |
| [`deslop`](/pl/skills/skill/deslop/) | maszynowe naleciałości w dodanych wierszach? | `task` przed commitem |

`review pr` to jedyne miejsce, gdzie wszystkie bramki działają na tym samym diffie: cała gałąź względem `develop`, zapisana jako szkic przeglądu, który trafia do pull requesta dopiero po Twoim zatwierdzeniu.

## Profil projektu

`.skribly/project.json` przechowuje stos, polecenia (install, dev, build, test, lint, typecheck, format), styl i język commitów, gałąź bazową, CI i kontenery. Skill [`project`](/pl/skills/skill/project/) albo `agent-skills init` wykrywa je z `package.json` i plików lock, `pyproject.toml`, `composer.json`, `go.mod`, `Cargo.toml`, plików Dockerfile, plików CI, README i historii Twoich commitów.

- **Czytany pierwszy, wszędzie.** Każdy skill zaczyna od profilu, a własne wykrywanie uruchamia tylko wtedy, gdy profilu nie ma.
- **Twoje zmiany wygrywają.** Wartości ustawionej ręcznie późniejsze wykrywanie nigdy nie nadpisze, a wartość usunięta ręcznie pozostaje usunięta.
- **Bezpieczne polecenia.** Folder pakietu trafia do polecenia takiego jak `cd web && npm test` tylko wtedy, gdy jego ścieżka składa się ze zwykłych członów; każdy inny folder jest pomijany i zgłaszany jako `skipped`. W repozytorium, którego nie pisałeś, każdy skill pokazuje Ci polecenia profilu przed ich uruchomieniem.
- **Tylko pasujące skille.** Z profilu powstają znaczniki stosu (`node`, `php`, `python` i inne środowiska uruchomieniowe oraz `web`, `backend`, `database`, `docker`, `data`, `skribly-app`). Skill bez stosów pasuje do każdego projektu; skill ze stosami jest instalowany tylko tam, gdzie się zgadzają. Zobacz [Dopasuj skille do projektu](/pl/skills/train/).

## Lekcje z zakresem

Na końcu `task`, `test-loop`, `review` i `debug` agent proponuje jedną potwierdzoną lekcję: działające polecenie, konwencję, której kod nie pokazuje, pułapkę, która kosztowała czas. Po Twojej zgodzie [`learn`](/pl/skills/skill/learn/) zapisuje ją w `.skribly/lessons.md` z datą i nazwą skilla, z którego pochodzi. Wszystko, co wygląda na sekret, jest odrzucane.

Każda lekcja stoi pod nagłówkiem zakresu, więc skill czyta tylko lekcje dla plików, które zmienia:

| Zakres | Obejmuje |
| --- | --- |
| `## [All]` | każdą zmianę; wiersze nad pierwszym nagłówkiem liczą się jako `All` |
| `## [CI]` | pliki potoku (`.github/workflows/`, `.gitlab-ci.yml`, `Jenkinsfile` i podobne) |
| `## [<module>]` | nazwę folderu (`cart` pasuje do każdego folderu `cart/`), ścieżkę (`src/cart`) albo wzorzec (`*.sql`) |

`lessons.mjs for-diff --base <branch>` wypisuje tylko lekcje, których zakres pasuje do zmienionych plików. Lekcję, która się sprawdza, można przenieść do profilu.

## Co zasila każdy krok

- [`project`](/pl/skills/skill/project/): profil i foldery robocze.
- [`learn`](/pl/skills/skill/learn/): lekcje, każda ze swoim zakresem.
- [`guide-tests`](/pl/skills/skill/guide-tests/): co zasługuje na test i na jakim poziomie; korzystają z niego `task`, `spec` i `test-loop`.
- [`writing`](/pl/skills/skill/writing/): styl każdego tekstu dla ludzi, od treści commitów po raporty.
- [`handoff`](/pl/skills/skill/handoff/): `STATE.md`, aby każdy agent mógł wznowić pracę na dowolnym kroku po `/clear` albo limicie użycia.

## Oszczędnie z tokenami

Agent trzyma w kontekście tylko nazwę i opis każdego skilla. `SKILL.md` wczytuje się, gdy skill działa, pozostałe opisy tylko wtedy, gdy potrzebuje ich jakiś krok, a małe skrypty dają modelowi kilka wierszy zamiast surowego wyniku. Każdy skill ma zmierzony rozmiar i budżet pilnowany przez sprawdzenie w repozytorium: [Koszt w tokenach](/pl/skills/token-cost/).

## Czytaj dalej

- [Dopasuj skille do projektu](/pl/skills/train/): `init`, `train-skills`, przełączniki, lekcje i skille projektu, krok po kroku.
- [Narzędzia dla agentów](/pl/skills/tooling/): blokada usuwania, pasek stanu, uprawnienia, test MCP i zadanie CI.
- [Wszystkie skille](/pl/skills/skill/): każdy skill na osobnej stronie.
