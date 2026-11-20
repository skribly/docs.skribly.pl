# Dopasuj skille do projektu

> Dopasowanie agent-skills do jednego projektu krok po kroku - agent-skills init, pętla train-skills, włączanie i wyłączanie skilli, lekcje z zakresem i małe własne skille projektu.

:::note[W przygotowaniu]
`agent-skills init`, `project enable` i `disable`, `train-skills` oraz lekcje z zakresem wejdą do następnego wydania. W wydanym agent-skills 0.3.0 zainstaluj skille w zakresie projektu jak na stronie [Instalacja](/pl/skills/install/#zakres-użytkownika-czy-projektu) i uruchom skill `project`.
:::

Dopasowanie skilli to przygotowanie ich do jednego repozytorium: właściwe skille dla jego stosu, sprawdzony profil poleceń i pierwsze lekcje, które agent w nim potwierdził. Wystarczy jedno polecenie i jedna rozmowa, a każdy krok, który coś zapisuje, czeka na Twoje OK.

## 1. Podejrzyj konfigurację

W folderze projektu:

```bash
agent-skills init --dry-run
```

Wypisuje, co by zrobił, i niczego nie zapisuje: znaleziony stos i polecenia, skille pasujące do stosu, znalezionych agentów i pliki, które by zapisał. Użyj `--agents claude,codex` (albo `--agents all`), gdy wybierze złych agentów.

## 2. Uruchom init

```bash
agent-skills init
```

Robi cztery rzeczy i kończy krótkim podsumowaniem:

1. Wykrywa stos, polecenia i konwencje i zapisuje je w `.skribly/project.json`. Wartości ustawione ręcznie zostają.
2. Instaluje w zakresie projektu tylko skille pasujące do stosu, dla każdego agenta, którego używasz (jedna kopia na agenta).
3. Zapisuje `.tasks/plans/README.md` i `.tasks/specs/README.md`, konwencje folderów planowania.
4. Wypisuje, co znalazł i zainstalował.

Drugie uruchomienie niczego nie zmienia. Uruchom go ponownie po zmianie stosu. Cofnięcie wszystkiego: `agent-skills uninstall --target all --project .`.

## 3. Poproś agenta o dopasowanie skilli

Otwórz agenta w projekcie i poproś o `/train-skills` (`$train-skills` w Codexie). Skill [`train-skills`](/pl/skills/skill/train-skills/) domyka pętlę:

1. **Czyta profil** razem z `AGENTS.md` i README i raz prosi Cię o potwierdzenie poleceń i gałęzi bazowej. Twoja odpowiedź trafia do profilu jako zmiana ręczna, więc wygrywa z późniejszym wykrywaniem.
2. **Raz uruchamia sprawdzenia**: install (tylko za Twoją zgodą), potem lint, typecheck i test, te długie po pytaniu. Dla każdego zapisuje: przeszło, nie przeszło z pierwszym prawdziwym wierszem błędu albo brak. Nie poprawia tu kodu projektu: nieudane sprawdzenie to znalezisko.
3. **Proponuje lekcje** dla faktów, które udowodnił, każdą z zakresem i źródłem, `file:line` albo commitem. Najwyżej pięć, każda zapisana dopiero po Twoim tak.
4. **Proponuje skille projektu**, gdy projekt powtarza procedurę, której nie obejmuje żaden zainstalowany skill.
5. **Raportuje** w pięciu wierszach: co zainstalował init, poprawki profilu, każde sprawdzenie, zapisane lekcje, napisane lub zaproponowane skille projektu.

## 4. Włączaj i wyłączaj skille

```bash
agent-skills project list                 # każdy skill: jego stosy, czy pasuje, zainstalowany czy wyłączony
agent-skills project disable wcag-audit   # usunięty dla każdego agenta; init odtąd go pomija
agent-skills project enable load-test     # zainstalowany, nawet gdy stos go nie wymaga
```

Oba przełączniki przyjmują `--dry-run` i są zapisywane w `.skribly/agent-skills.json`, więc kolejny `init` je uwzględnia. Skill bez stosów pasuje do każdego projektu; stosy każdego skilla są na jego stronie w [Wszystkie skille](/pl/skills/skill/).

## 5. Zapisuj lekcje

Lekcja to jeden wiersz w `.skribly/lessons.md` pod nagłówkiem zakresu: `## [All]`, `## [CI]` albo `## [<module>]`, gdzie moduł to nazwa folderu, ścieżka albo wzorzec. Agent proponuje lekcję na końcu `task`, `test-loop`, `review` i `debug`; [`learn`](/pl/skills/skill/learn/) zapisuje ją po Twojej zgodzie, z datą i nazwą skilla, z którego pochodzi.

```text
Lesson (pitfall, scope src/cart, src/cart/price.ts:41): prices are integers in cents; never parse them as floats. Save? [y/N]
```

Wybierz najwęższy zakres, który nadal jest prawdziwy: każdy skill czyta wtedy tylko lekcje dla plików, które zmienia. Domysły i jednorazowe fakty nie są lekcjami, a wszystko, co wygląda na sekret, jest odrzucane. Poproś o `/learn`, aby wypisać, przyciąć albo przenieść lekcje do profilu.

## 6. Dodaj skille projektu

Gdy projekt ma własny rytuał (krok wydania, odświeżenie danych, szkielet modułu), `train-skills` proponuje dla niego mały skill:

- o nazwie `<project>-<topic>` małymi literami, nigdy o nazwie skilla z biblioteki;
- jeden `SKILL.md` w `.agents/skills/<name>/`, z polami `name` i `description`, które mówi, kiedy go używać, i najwyżej 40 wierszami kroków, każdy z plikiem lub poleceniem, z którego pochodzi;
- pokazany Ci przed zapisaniem i zapisany dopiero po Twoim OK. Claude Code czyta `.claude/skills/`, więc agent pyta, czy skill ma trafić także tam.

Kolejne sesje dopracowują go przez `learn`. Nic z niego nie jest instalowane ani publikowane: zostaje w repozytorium, dla osób, które w nim pracują.

## Czytaj dalej

- [Jak to działa](/pl/skills/how-it-works/): potok, bramki, profil i lekcje.
- [Aktualizacje](/pl/skills/updates/): jak utrzymać skille na bieżąco.
- [Rozwiązywanie problemów](/pl/skills/troubleshooting/): `agent-skills doctor` nazywa każdy problem i podaje poprawkę.
