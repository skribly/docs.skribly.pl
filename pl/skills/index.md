# agent-skills

> 35 przenośnych skilli, które prowadzą agentów programujących AI od zgłoszenia w trackerze do przejrzanego, przetestowanego commita — oszczędnych w tokenach, domyślnie bezpiecznych, bez stopek współautorstwa AI.

**agent-skills** to biblioteka krótkich, przetestowanych procedur („skilli”) dla agentów programujących AI oraz instalator bez zależności, który umieszcza je tam, gdzie każdy agent ich szuka. Obsługuje Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot i Devin.

Skille obejmują cały cykl: pobranie zgłoszenia z Redmine, Jiry, GitHuba, GitLaba, Lineara lub Skribly Tracker, plan, gałąź, implementację etapami, testy, przegląd, audyt i commit. Obejmują też wyspecjalizowane zadania wokół niego: Core Web Vitals, testy obciążeniowe, bezpieczne migracje, Docker, CI, aktualizacje zależności, tłumaczenia i notatki do wydań. Osobna grupa skilli obejmuje też pracę wokół kodu: pisanie planu jako pakietów pracy i wykonywanie pakietu pracy zadanie po zadaniu, zapisy decyzji, listę kontrolną wydania, sprawdzenie, czy dokumentacja i tłumaczenia są aktualizowane razem ze zmianą w kodzie, oraz przegląd projektu graficznego strony.

![Katalog skilli w Skribly Agent: karty skilli z poleceniem, grupą i agentami, dla których dany skill jest zainstalowany](../../../../assets/screens/skills-catalog.webp)

## Zasady

- **Skrypty wykonują pracę mechaniczną.** Małe skrypty Node dają modelowi kilka wierszy zamiast megabajtów: raport Lighthouse o rozmiarze 455 KB zmienia się w 754 bajty, a log testów o rozmiarze 27 KB w 86 bajtów.
- **Każdy ryzykowny krok czeka na Twoją zgodę.** Commity, komentarze do zgłoszeń w trackerze, zrzuty ekranu i długie uruchomienia testów są proponowane, a nie wykonywane po cichu.
- **Dostosowuje się do każdego projektu.** Skill `project` wykrywa stos, polecenia i konwencje commitów, zapisuje je w `.skribly/project.json`, a każdy skill najpierw czyta ten profil. Wartości ustawione ręcznie nigdy nie są nadpisywane.
- **Uczy się z pracy.** Na końcu `task`, `test-loop`, `review` i `debug` agent proponuje jedną potwierdzoną lekcję; po Twojej zgodzie `learn` zapisuje ją w `.skribly/lessons.md` na następny raz. Lekcje, które wyglądają na sekrety, są odrzucane.
- **Commity wyglądają jak Twoje.** Wiadomości trzymają się konwencji projektu, a żaden skill nie dodaje stopki `Co-Authored-By` ani „Generated with”.
- **Działa samodzielnie.** Nie wymaga niczego innego ze Skribly i działa w dowolnym repozytorium. Skribly Agent to jedno z opcjonalnych miejsc, które go używają.

## Fakty

| | |
| --- | --- |
| Wersja | 0.2.14 (11 listopada 2026) |
| Skille | 35, we wspólnym formacie [Agent Skills](https://agentskills.io/specification) |
| Agenci | 8: Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot, Devin |
| Trackery | Redmine, Jira Cloud i Server/Data Center, GitHub, GitLab, Linear, Skribly Tracker |
| Wymagania | `git` i Node.js 20 lub nowszy |
| Zależności w czasie działania | Brak |
| Licencja | MIT |

## Jak zbudowany jest skill

Każdy skill to folder `skills/<name>/`:

```text
skills/<name>/
  SKILL.md       at most 110 lines, read when the skill runs
  reference/     extra detail, read only when a step needs it
  scripts/       Node scripts with no dependencies that do the mechanical work
  templates/     files the skill fills in
```

Agent trzyma w kontekście tylko nazwę i opis każdego skilla, po jednym wierszu na skill. Reszta jest wczytywana na żądanie.

## Jak oszczędza tokeny

1. **Wczytywanie na żądanie.** `SKILL.md` wczytuje się przy użyciu skilla, a `reference/` tylko wtedy, gdy krok tego potrzebuje. Limit 110 wierszy pilnuje CI.
2. **Skrypty zamiast modelu.** Pomiary na prawdziwych projektach:

   | Zadanie | Dane wejściowe | Wynik skryptu | Oszczędność |
   | --- | ---: | ---: | ---: |
   | Raport Lighthouse | 455 534 bajty | 754 bajty | 99,8% |
   | Log uruchomienia testów, 86 testów | 27 098 bajtów | 86 bajtów | 99,7% |
   | `npm audit --json` w aplikacji z 300 pakietami | 20 555 bajtów | 2 126 bajtów | 90% |
   | `git log -60` do poznania stylu commitów | 7 415 bajtów | 739 bajtów | 90% |
   | Zgłoszenie GitHub z komentarzami | 8 178 bajtów | 1 018 bajtów | 88% |

3. **Pytanie przed kosztownymi krokami.** Zrzuty ekranu, uruchomienia Lighthouse i pełne zestawy testów wymagają Twojej zgody.
4. **Restart zamiast wleczenia transkryptów.** `STATE.md` (około 30 wierszy) przechowuje cel, to, co zrobiono, i jeden następny krok, więc po każdym etapie możesz wykonać `/clear` i wznowić pracę w tym samym albo w innym agencie.
5. **Zasady pracy.** Skill `token-saver` daje każdemu agentowi te same nawyki: szukaj, zanim zaczniesz czytać, czytaj zakresy wierszy, nigdy nie otwieraj plików lock ani wyników kompilacji.

Pełne pomiary są na stronie [Oszczędzanie tokenów](/pl/agent/token-saving/).

## Czytaj dalej

- [Instalacja](/pl/skills/install/): zakres użytkownika lub projektu, aktualizacje, Windows.
- [Katalog skilli](/pl/skills/catalog/): każdy skill i kiedy go używać.
- [Obsługiwani agenci](/pl/skills/agents/): skąd każdy agent bierze skille oraz pliki, które `agent-skills agent-files` generuje z `AGENTS.md`.
- [Trackery](/pl/skills/trackers/): poświadczenia dla każdego trackera.
- [Commity bez stopek AI](/pl/skills/commits/): trzy warstwy, które sprawiają, że commity pozostają Twoje.
