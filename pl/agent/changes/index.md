# Zmiany i commity

> Dodawaj do indeksu i odrzucaj zmiany, czytaj diff obok siebie, dostań propozycję opisu commita bez modelu, zrób commit, zmieniaj gałęzie, push, pobranie i pull request.

Karta **Zmiany** widoku **Kod i git** pokazuje, co zmieniło się w projekcie: pliki w indeksie i pliki ze zmianami roboczymi. Stąd dodajesz pliki do indeksu i je odrzucasz, czytasz każdy diff, piszesz opis commita, robisz commit, zmieniasz gałęzie, robisz push i pobranie oraz otwierasz pull request. Propozycja opisu commita nie potrzebuje modelu językowego, a żaden commit zrobiony tutaj nie ma stopki AI.

![Widok Kod i git: pole commita z Zaproponuj i Agent, pliki w indeksie i zmiany po lewej oraz diff CartDrawer.tsx obok siebie](../../../../assets/screens/agent-code-changes.webp)

Na Windows i Linuksie używaj `Ctrl` wszędzie tam, gdzie ta strona pisze `⌘`.

## Otwórz widok

- Kliknij **Kod i git** na pasku aktywności, naciśnij `⌘4` albo wybierz **Kod i git** w palecie poleceń (`⌘K`).
- **Zmiany i commit** to karta, która otwiera się pierwsza. Jej ikona pokazuje liczbę zmienionych plików.

Widok odświeża się sam co 8 sekund, gdy okno ma fokus, więc zmiany agentów są widoczne. Przycisk odświeżania w nagłówku panelu wczytuje od razu. Jeśli projekt nie jest repozytorium git, karta o tym mówi; uruchom `git init` w terminalu, żeby je założyć.

## Jak czytać zmiany i dodawać je do indeksu

<Steps>

1. Spójrz na dwie listy: **Zindeksowane (N)** i **Zmiany (N)**. Litera przed plikiem mówi o jego stanie: `A` dodany, `M` zmieniony, `D` usunięty, `R` przeniesiony, `U` nieśledzony, `!` konflikt.

2. Kliknij plik. Plik w indeksie otwiera się jako diff **HEAD** z indeksem obok siebie. Plik roboczy otwiera się jako diff indeksu z dyskiem. Plik nieśledzony otwiera się w edytorze, bo nie ma z czym go porównać.

3. Naciśnij **Dodaj do indeksu** przy pliku (plus), żeby przenieść go do indeksu, albo **Wycofaj z indeksu** (minus), żeby go cofnąć. Przyciski w nagłówkach sekcji robią to dla wszystkich plików naraz.

4. W nagłówku diffu **Edytuj** otwiera plik w edytorze, a **Dodaj** lub **Wycofaj** dodaje go do indeksu albo go z niego cofa i zamyka diff.

</Steps>

## Jak odrzucić zmiany

<Steps>

1. Naciśnij **Odrzuć zmiany** przy pliku roboczym. Dla pliku nieśledzonego przycisk nazywa się **Usuń nowy plik**. Przycisk w nagłówku **Zmiany**, **Odrzuć wszystkie zmiany robocze**, bierze każdy plik roboczy oprócz konfliktów.

2. Przeczytaj okno. Wypisuje śledzone pliki, które wracają do stanu z indeksu, oraz na czerwono nowe pliki, które zostaną usunięte z dysku.

3. Potwierdź przyciskiem **Odrzuć zmiany**. Tego nie da się cofnąć.

</Steps>

Odrzucenie nie rusza plików w indeksie: najpierw cofnij je z indeksu.

## Jak zrobić commit

<Steps>

1. Dodaj do indeksu pliki, które mają trafić do commita.

2. Naciśnij **Zaproponuj**. Pole wiadomości się wypełnia, a pod przyciskami widzisz szablon i jego źródło, powody wyboru typu i zakresu oraz alternatywy, które można kliknąć. Kliknij jedną, żeby jej użyć zamiast propozycji.

3. Opcjonalnie naciśnij **Agent**. Agent bez interfejsu czyta szkic, zasady commitów repozytorium, 20 ostatnich tematów commitów i podsumowanie diffu z indeksu, po czym zwraca poprawioną wiadomość. Przycisk wymaga plików w indeksie i zainstalowanego agenta z trybem bez interfejsu (domyślnego, jeśli go ma, w przeciwnym razie pierwszego, który go ma). Agent nie może zmieniać plików, a jego odpowiedź jest tylko propozycją w polu.

4. Popraw wiadomość, potem naciśnij **Commit** albo `⌘↩` w polu.

</Steps>

Gdy nic nie jest w indeksie, przycisk commita dodaje do indeksu wszystkie zmiany, także pliki nieśledzone, i robi commit. Commit idzie przez `git commit`, a z wiadomości zawsze znikają stopki AI, także wpisane ręcznie.

### Co robi Zaproponuj

**Zaproponuj** działa na plikach w indeksie albo na wszystkich zmianach, gdy nic nie jest w indeksie. Nie zużywa tokenów. Kroki po kolei:

| Krok | Reguła |
| --- | --- |
| Szablon | Z pola **Wzór commita** w ustawieniach projektu. Bez niego dopasowany do 80 ostatnich tematów commitów (bez merge): `{type}({scope}): {subject}`, `{type}: {subject}`, `#{key} - {subject}`, `{key}: {subject}`, `[{key}] {subject}` albo samo `{subject}`. Dwie formy Conventional Commits liczą się razem wobec pozostałych; przy remisie wygrywa ta z zakresem. Przy mniej niż 5 commitach używany jest szablon domyślny, o czym mówią powody |
| Język | Polski, gdy ponad 30% tematów zawiera polskie litery lub typowe polskie słowa. Pole **Język commitów** w ustawieniach projektu wymusza polski albo angielski |
| Wielka litera | Temat zaczyna się wielką literą, gdy tak jest w większości historii albo gdy szablon ma `{key}` |
| Typ | Z gałęzi, jeśli zaczyna się od `feat`, `feature`, `fix`, `bugfix`, `hotfix`, `refactor`, `docs`, `chore`, `test`, `perf`, `ci` lub `build` i `/` albo `-`; w przeciwnym razie `docs` dla samej dokumentacji, `test` dla samych testów, `ci` dla samych plików CI, `build` dla samych plików zależności i budowania, `feat`, gdy co najmniej połowa plików jest nowa, `refactor` dla samych usunięć, w pozostałych przypadkach `fix` |
| Zakres | W monorepo pakiet pod `packages/`, `apps/`, `libs/`, `services/` lub `modules/`. Dla jednego pliku jego nazwa bez rozszerzenia (do 24 znaków). Dla kilku najgłębszy wspólny folder, z pominięciem ogólnych nazw takich jak `src`, `app`, `lib`, `components` i `views` |
| Klucz | Z lokalnego zadania, którego klucz jest w nazwie gałęzi, albo z samej gałęzi (`ABC-123` lub liczba z co najmniej dwiema cyframi). Jeśli szablon wymaga klucza, a go nie ma, mówią o tym powody |
| Temat | Tytuł tego lokalnego zadania, w przeciwnym razie słowa z ostatniej części gałęzi (co najmniej dwa, bez `feature`, `fix` i liczb), w ostateczności opis plików |

Alternatywy to ten sam temat w formach `{type}({scope})`, `{type}` i `#{key}` (albo sam temat, gdy nie ma klucza).

### Co czyta przycisk Agent

Agent dostaje prośbę o wiadomość w stylu Conventional Commits po angielsku. Z jego odpowiedzi znikają wszystkie wiersze `Co-Authored-By` i „Generated with” oraz wiersz `Signed-off-by`, chyba że wpisałeś taki sam w szkicu. Dostaje:

- Zasady commitów repozytorium: sekcje o commitach z `AGENTS.md`, `CLAUDE.md` i `CONTRIBUTING.md` (także w `.github/` i `docs/`), konfigurację commitlint i `.gitmessage`. Każde źródło jest ucinane do 1800 znaków, a wszystkie razem do 6000. Plik większy niż 256 KB albo dowiązanie wychodzące poza projekt nie jest czytane.
- 20 ostatnich tematów commitów, bez merge.
- Podsumowanie diffu z indeksu do 12 000 znaków: najpierw statystyka każdego pliku w indeksie, potem fragmenty, kod źródłowy przed konfiguracją, testami, dokumentami i plikami generowanymi. Notatka mówi, ile fragmentów pominięto.

## Jak usuwać stopki AI z każdego commita

Naciśnij **Hook bez stopek AI** na dole karty. Instaluje hook `commit-msg` we wspólnym folderze git repozytorium, więc działa we wszystkich jego worktree, i czyści też commity, które agenci robią w terminalu.

Hook usuwa:

- wiersze `Co-Authored-By:`, które nazywają agenta całym słowem (`claude`, `anthropic`, `openai`, `codex`, `copilot`, `cursor`, `gemini`, `aider`, `devin ai`), słowo `bot` albo adres `noreply@`;
- wiersze zaczynające się od `Generated with` lub `Generated by` i nazwy agenta;
- wiersze zaczynające się od 🤖.

Reszta wiadomości zostaje. Współautor-człowiek nie jest usuwany, nawet jeśli jego nazwisko zawiera nazwę agenta wewnątrz dłuższego słowa. Istniejący hook `commit-msg` jest odkładany jako `commit-msg.przed-skribly` i nadal działa po czyszczeniu. Jeśli `core.hooksPath` wskazuje gdzie indziej (husky, lefthook), git nie czyta tego hooka: dodaj czyszczenie do własnego `commit-msg`.

## Jak zmienić albo utworzyć gałąź

<Steps>

1. Naciśnij przycisk gałęzi u góry karty. Otwiera się okno **Gałęzie**.

2. Żeby utworzyć gałąź, wpisz jej nazwę (na przykład `feature/PROJ-12-wyszukiwarka`) i naciśnij **Utwórz** albo `Enter`. Powstaje z bieżącej i jest od razu włączana.

3. Żeby przełączyć, kliknij gałąź lokalną. Gałąź, która istnieje tylko na zdalnym serwerze, jest wypisana na szaro; kliknięcie tworzy gałąź lokalną, która ją śledzi.

</Steps>

Bieżąca gałąź ma znacznik **bieżąca**.

## Jak zrobić push, pobranie i otworzyć pull request

<Steps>

1. Naciśnij przycisk pobrania (strzałka w dół). Uruchamia `git pull --ff-only`; podpowiedź pokazuje, ile commitów czeka.

2. Naciśnij przycisk push (strzałka w górę). Uruchamia `git push -u origin HEAD`, a liczba obok to liczba commitów do wypchnięcia.

3. Po pushu gałęzi innej niż gałąź bazowa pasek proponuje **Utwórz PR**. Uruchamia `gh pr create` z tytułem i treścią ostatniego commita, bez stopek agentów, a jako cel bierze gałąź bazową projektu, jeśli jest ustawiona.

4. Gdy gałąź ma już otwarty pull request, pasek pokazuje jego numer i przycisk, który otwiera go w przeglądarce.

</Steps>

Pull requesty wymagają GitHub CLI (`gh`) i zdalnego repozytorium na GitHubie. Bez `gh` pasek proponuje **Zainstaluj gh**; bez zalogowania proponuje **Zaloguj do GitHuba**. Push i pobranie używają konfiguracji git, którą już masz (klucze SSH, menedżer haseł): aplikacja nie przekazuje żadnego tokenu.

<Aside type="note">
Gdy w **Ustawieniach** włączysz **Bez połączeń sieciowych aplikacji**, push, pobranie i pasek pull requesta są zablokowane.
</Aside>

## Co jest na ekranie

| Część | Co robi |
| --- | --- |
| Przycisk gałęzi | Otwiera **Gałęzie** |
| Przyciski pobrania i push | `git pull --ff-only` i `git push -u origin HEAD` |
| Pole wiadomości | Wiadomość commita; `⌘↩` robi commit |
| **Zaproponuj** | Wiadomość ze zmian, gałęzi i historii, z powodami i alternatywami |
| **Agent** | Agent poprawia wiadomość, tylko do odczytu |
| **Commit** | Robi commit z plików w indeksie |
| **Zindeksowane (N)**, **Zmiany (N)** | Dwie listy plików |
| **Hook bez stopek AI** | Instaluje hook `commit-msg` |

## Wskazówki

<Aside type="tip">
Dodawaj do indeksu tylko powiązane pliki, potem naciśnij **Zaproponuj**: typ i zakres biorą się z plików w indeksie, więc mały commit dostaje precyzyjną wiadomość.
</Aside>

- Nazywaj gałęzie `feature/ABC-123-krotki-tytul`: typ, klucz i temat biorą się z nazwy.
- Zawsze przeczytaj wiadomość od Agenta, zanim zrobisz commit. To tylko propozycja.

## Powiązane strony

<CardGrid>
  <LinkCard title="Uwagi przeglądu" href="/pl/agent/review/" description="Notuj wiersze diffu i wyślij je agentowi." />
  <LinkCard title="Historia" href="/pl/agent/history/" description="Graf wszystkich gałęzi ze szczegółami commitów." />
  <LinkCard title="Edytor i pliki" href="/pl/agent/code/" description="Ten sam widok jako edytor." />
  <LinkCard title="Drzewa robocze" href="/pl/agent/worktrees/" description="Każdy worktree Twoich projektów i jego stan." />
</CardGrid>
