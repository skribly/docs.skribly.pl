# Zadania i trackery

> Widok Zadania w Skribly Agent wypisuje Twoje zadania ze Skribly Tracker, Jiry, Redmine, GitHuba, GitLaba i Lineara i uruchamia agenta na jednym z nich, z gotowym plikiem i gałęzią.

Widok **Zadania** zbiera zadania przypisane do Ciebie w trackerach na jednej liście, obok zadań, które rozpocząłeś, i zadań, które piszesz sam. Z zadania możesz zmienić status, przypisać je, skomentować, zalogować czas i otworzyć je w trackerze. **Zacznij z agentem** zapisuje zadanie do pliku w projekcie, tworzy gałąź albo worktree i uruchamia agenta z gotowym promptem, więc agent nie zużywa tokenów na pobieranie zgłoszenia.

![Widok Zadania: zadania w toku i przypisane do mnie z Jiry i Redmine po lewej oraz zadanie Jiry z Zacznij z agentem, statusem, Przypisz do mnie, Komentarz, Zaloguj czas i Otwórz w trackerze](../../../../assets/screens/agent-tasks.webp)

## Otwórz widok

- Kliknij **Zadania** na pasku aktywności, albo naciśnij `⌘3` (na Windows i Linuksie `Ctrl+3`), albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Zadania**.

Bez konta trackera lista jest pusta i proponuje **Ustawienia trackerów** oraz **Własne zadanie**. Najpierw połącz tracker: zobacz [Jak połączyć tracker](#jak-połączyć-tracker).

## Jak połączyć tracker

<Steps>

1. Otwórz **Ustawienia**, potem **Trackery zadań** i naciśnij **Dodaj tracker**.

2. Wybierz tracker, wpisz **Nazwę** (na przykład „Jira firmowa”) i **Adres**. Dla Jiry wybierz **Rodzaj instalacji**, a dla Jira Cloud wpisz **E-mail konta Atlassian**.

3. Wklej token. **Otwórz stronę tokenów** otwiera stronę, na której go tworzysz. Tabela niżej mówi, jakiego tokenu potrzebuje każdy tracker.

4. Naciśnij **Zapisz i sprawdź**. Konto zostaje zapisane, a połączenie sprawdzone. **Testuj** powtarza sprawdzenie w dowolnej chwili.

</Steps>

Możesz mieć kilka kont, także kilka tego samego trackera. Edytuj konto ołówkiem: zostaw token pusty, żeby zachować stary. Usunięcie konta usuwa też jego zaszyfrowany token; pliki zadań w projektach zostają.

Dla GitHuba i GitLaba możesz ograniczyć konto do niektórych repozytoriów lub projektów (albo całej organizacji lub grupy). Ograniczenie zawęża Twoje zadania, wyszukiwanie i miejsca proponowane dla nowych zadań. Puste oznacza wszystko, co widzi token.

| Tracker | Adres | Token | Uprawnienia | Klucz zadania |
| --- | --- | --- | --- | --- |
| **Skribly Tracker** | Twoja instancja; lokalnie `http://localhost:8100` | **Profil → Tokeny API → utwórz token** (odczyt i zapis; pokazuje się raz) | Odczyt i zapis | `AGENT-12` |
| **Jira Cloud** | `https://twoj-zespol.atlassian.net` oraz e-mail konta | id.atlassian.com → Security → API tokens → Create API token | Odczyt zgłoszeń projektów, które widzisz | `PROJ-123` |
| **Jira Server / Data Center** | Twój serwer; e-mail zostaw pusty | Profil → Personal Access Tokens | Te same | `PROJ-123` |
| **Redmine** | Adres strony głównej, bez `/issues` | Moje konto → Klucz dostępu do API → Pokaż | Administrator musi włączyć REST API: Administracja → Ustawienia → API | `2047` |
| **GitHub** | Puste dla github.com; Enterprise: `https://github.example.com/api/v3` | Settings → Developer settings → Personal access tokens | Fine-grained, **Issues: Read-only** dla repozytoriów z Twoimi zadaniami | `owner/repo#12` |
| **GitLab** | Puste dla gitlab.com albo Twoja instancja | Preferences → Access tokens → Add new token | Zakres `read_api` | `group/project#34` |
| **Linear** | Może zostać puste: Linear ma jeden adres API | Settings → Security & access → Personal API keys → New API key | Konto, które widzi zespoły z Twoimi zadaniami | `ENG-56` |

Token jest szyfrowany systemowym magazynem haseł (pęk kluczy na macOS, DPAPI w Windows, libsecret w Linuksie) przez Electron `safeStorage`. Nie jest pokazywany w interfejsie i nie trafia do plików projektu. Gdy szyfrowanie jest niedostępne, na przykład w Linuksie bez pęku kluczy, token jest trzymany tylko w pamięci do zamknięcia aplikacji.

Token tylko do odczytu wystarcza, żeby wypisać i otworzyć zadania. Zmiana statusu, przypisanie, komentarz, logowanie czasu i tworzenie zadania wymagają tokenu z prawem zapisu.

### Co wypisuje każdy tracker

| Tracker | „Przypisane do mnie” |
| --- | --- |
| Skribly Tracker | Twoje przypisane zadania |
| Jira | Zgłoszenia z `assignee = currentUser()`, które nie są zrobione, od najnowszej zmiany, do 100. Jira Cloud loguje się e-mailem i tokenem, Server i Data Center tokenem w nagłówku bearer |
| Redmine | Otwarte zgłoszenia przypisane do Ciebie, od najnowszej zmiany, do 100 |
| GitHub | Otwarte zgłoszenia przypisane do Ciebie (bez pull requestów), do 100 |
| GitLab | Otwarte zgłoszenia przypisane do Ciebie, do 100 |
| Linear | Zgłoszenia przypisane do Ciebie, które nie są ukończone ani anulowane, do 100 |

### Co każdy tracker potrafi w aplikacji

| Tracker | Komentarz | Status | Przypisanie | Tworzenie | Szukanie | Logowanie czasu |
| --- | --- | --- | --- | --- | --- | --- |
| Skribly Tracker | Tak | Tak | Tak | Tak | Tak | Tak |
| Jira | Tak | Tak | Tak | Tak | Tak | Tak |
| Redmine | Tak | Tak | Tak | Tak | Tak | Tak |
| GitHub | Tak | Tak | Tak | Tak | Tak | Nie |
| GitLab | Tak | Tak | Tak | Tak | Tak | Tak |
| Linear | Tak | Tak | Tak | Tak | Tak | Nie |

Przycisk, którego tracker nie obsługuje, jest wyłączony, a jego podpowiedź mówi dlaczego. Przy tworzeniu zadania formularz pokazuje też pola, które ma tracker:

| Tracker | Typ | Priorytet | Etykiety | Aktywność (przy logowaniu czasu) |
| --- | --- | --- | --- | --- |
| Skribly Tracker | Tak | Tak | Tak | Tak |
| Jira | Tak | Tak | Tak | Nie |
| Redmine | Tak | Tak | Nie | Tak |
| GitHub | Nie | Nie | Tak | Nie |
| GitLab | Tak | Nie | Tak | Nie |
| Linear | Nie | Tak | Tak | Nie |

### Zmienne środowiskowe dla agent-skills

Agenci uruchamiani przez aplikację dostają dane logowania Twoich kont jako zmienne środowiskowe własnej sesji, pod nazwami, które czytają skille [agent-skills](/pl/skills/). Dzięki temu `/task 123` działa bez pliku `credentials.env`. Żaden plik nie jest zapisywany na dysku, a zmienne widzi tylko proces uruchomiony przez aplikację.

| Tracker | Zmienne |
| --- | --- |
| Skribly Tracker | `SKRIBLY_TRACKER_URL`, `SKRIBLY_TRACKER_TOKEN` |
| Jira Cloud | `JIRA_URL`, `JIRA_EMAIL`, `JIRA_API_TOKEN` |
| Jira Server / Data Center | `JIRA_URL`, `JIRA_PAT` |
| Redmine | `REDMINE_URL`, `REDMINE_API_KEY` |
| GitHub | `GITHUB_TOKEN` oraz `GITHUB_API_URL`, gdy adres to nie `api.github.com` |
| GitLab | `GITLAB_URL`, `GITLAB_TOKEN` |
| Linear | `LINEAR_API_KEY` |
| Wszystkie | `AGENT_SKILLS_TRACKER`: tracker dla samych numerów, ten z trackera projektu albo z pierwszego konta |

Przy kilku kontach jednego trackera wygrywa konto przypisane do projektu, potem pierwsze na liście.

Żeby przypisać tracker do projektu, otwórz **Ustawienia → Projekty** i ustaw **Tracker projektu** oraz **Projekt / repozytorium / zespół w trackerze**. Widok Zadania otwiera się wtedy przefiltrowany do tego trackera, a **Zacznij z agentem** i nowe zadania używają go domyślnie.

## Jak znaleźć zadanie

<Steps>

1. Spójrz na **W toku** (zadania, które już rozpocząłeś w projektach, z ich etapem) i **Przypisane do mnie** (otwarte zadania wszystkich kont, od ostatnio zmienionych).

2. Naciśnij nazwę konta, żeby zobaczyć tylko to konto, albo **Wszystkie**.

3. Wpisz tekst w polu wyszukiwania. Od razu filtruje listę po kluczu, tytule i etykiecie. Po krótkiej przerwie, a od razu po `Enter`, pyta też tracker i wypisuje wyniki pod **W trackerze**.

4. Żeby otworzyć zadanie, którego nie ma na liście, wpisz jego numer w **Numer zadania** i naciśnij `Enter`: na przykład `2047`, `PROJ-12` albo `org/repo#5`. Szukane jest na koncie wybranym w filtrze albo na pierwszym.

</Steps>

Kliknij zadanie, żeby zobaczyć jego szczegóły po prawej: tracker, klucz, status, etykiety, osobę przypisaną, opis i komentarze.

## Jak pracować nad zadaniem

Szczegóły mają te przyciski:

| Przycisk | Co robi |
| --- | --- |
| **Zacznij z agentem** | Otwiera okno startu, opisane niżej |
| Lista statusów | Zmienia status; w Jirze uruchamia przejście przepływu pracy |
| **Przypisz do mnie** | Przypisuje zadanie Tobie; przycisk **Zdejmij przypisanie** obok zdejmuje przypisanie |
| **Komentarz** | Otwiera edytor z podglądem Markdown. Skribly zamienia tekst na format trackera (na przykład ADF w Jira Cloud). **Wyślij podsumowanie od agenta** wypełnia go z `STATE.md` |
| **Zaloguj czas** | Godziny (więcej niż 0 i do 24), dzień (nie w przyszłości), aktywność, jeśli tracker ją ma, i komentarz. GitLab zapisuje czas bez daty |
| **Otwórz w trackerze** | Otwiera zadanie w przeglądarce |

## Jak zacząć zadanie z agentem

<Steps>

1. Wybierz zadanie i naciśnij **Zacznij z agentem**.

2. Wybierz **Projekt** i **Agent**. Zainstalowani agenci są wypisani, a domyślny jest wybrany.

3. Zostaw zaznaczone **Załóż gałąź według wzoru projektu (tylko przy czystym repozytorium)** albo zaznacz **W osobnym worktree**, co oznacza też gałąź.

4. Naciśnij **Zacznij**. Aplikacja przechodzi do widoku Agenci, na nowy panel.

</Steps>

Co robi aplikacja:

1. Tworzy `.skribly/tasks/<KLUCZ>/` w projekcie i dodaje `.skribly/` do `.git/info/exclude`, lokalnego pliku ignorowania, którego nie ma w repozytorium. Znaki klucza inne niż litery, cyfry, `_`, `.` i `-` zamieniają się w `-`, więc `org/repo#5` to `org-repo-5`.
2. Zapisuje `TASK.md` z treścią i komentarzami oraz z regułami włączonych rozszerzeń. Plik jest nadpisywany przy każdym starcie.
3. Tworzy `STATE.md` z szablonu tylko wtedy, gdy go nie ma, więc postęp nigdy nie ginie.
4. Zapisuje `meta.json` z kluczem, tytułem, adresem i kontem.
5. Przygotowuje gałąź. Wzorem jest **Wzór gałęzi** projektu, domyślnie `feature/{key}-{slug}`; `{slug}` to do sześciu słów tytułu, małymi literami, bez polskich znaków, połączone myślnikami. Dla `SKLEP-142` o tytule „Koszyk: zapis przy wylogowaniu” gałąź to `feature/SKLEP-142-koszyk-zapis-przy-wylogowaniu`. Istniejąca gałąź jest włączana, nowa tworzona. Jeśli śledzone pliki mają zmiany, gałąź nie jest tworzona, a agent startuje na bieżącej.
6. Z **W osobnym worktree** tworzy worktree tej gałęzi z **Gałęzi bazowej** projektu i uruchamia tam agenta. Twoja kopia zostaje nietknięta. Folder zadania jest podlinkowany do worktree, więc agent znajduje `TASK.md` obok siebie. Zobacz [Drzewa robocze](/pl/agent/worktrees/).
7. Uruchamia agenta w terminalu o tytule `<KLUCZ> · <agent>` z takim promptem:
   - Claude Code, gdy projekt ma skill `task` w `.claude/skills/task`: `/task <KLUCZ>`;
   - Codex ze skillem w `.agents/skills/task`: `$task <KLUCZ>`;
   - w każdym innym przypadku: krótki tekst, który wskazuje `TASK.md` i `STATE.md`, prosi agenta o przeczytanie obu i zaproponowanie planu (`SPEC.md` przy dużym zadaniu), o czekanie na Twoje „ok” przed zmianą kodu, o aktualizację `STATE.md` po każdym etapie i o commit dopiero po Twojej zgodzie, w stylu historii projektu i bez stopek `Co-Authored-By`.

`STATE.md` zawiera wiersz etapu, następny krok oraz listy tego, co zrobione, decyzji i otwartych pytań. Szablon jest napisany po polsku. Aplikacja czyta z niego dwa wiersze: `Etap:` z jedną z wartości `analiza`, `implementacja`, `weryfikacja` lub `gotowe` oraz `Następny krok:`. Pokazuje je w **W toku**.

## Jak utworzyć zadanie

<Steps>

1. Naciśnij plus w nagłówku listy (**Nowe zadanie w trackerze**).

2. Wybierz **Konto trackera** i projekt (dla GitHuba repozytorium, dla Lineara zespół). Wybrane jest miejsce z ustawień projektu albo oznaczone gwiazdką.

3. Wypełnij **Tytuł** i opis w Markdown. Wybierz typ, priorytet i etykiety, jeśli tracker je ma.

4. Zaznacz **Od razu zacznij z agentem**, jeśli chcesz przejść do okna startu, i naciśnij **Utwórz**.

</Steps>

## Jak napisać zadanie lokalne

Nie każde zadanie żyje w trackerze.

<Steps>

1. Naciśnij drugą ikonę w nagłówku listy (**Własne zadanie**).

2. Wpisz tytuł i opis w Markdown: co zrobić, gdzie szukać, kryteria akceptacji.

3. Naciśnij **Dalej**. Otwiera się to samo okno startu.

</Steps>

Zadanie dostaje klucz taki jak `W-10291412` (miesiąc, dzień, godzina i minuta), a potem działa jak każde inne: `TASK.md`, `STATE.md`, gałąź i agent. Zadanie lokalne nie ma przycisków trackera.

## Wskazówki

<Aside type="tip">
Propozycje commitów korzystają z Twoich zadań: gdy nazwa gałęzi zawiera klucz rozpoczętego zadania, jego tytuł staje się tematem. Zobacz [Zmiany i commity](/pl/agent/changes/).
</Aside>

- Poproś agenta, żeby na bieżąco aktualizował `STATE.md`. To ten sam plik, który pozwala innemu agentowi przejąć pracę, a przycisk **Wyślij podsumowanie od agenta** w komentarzu zamienia go w komentarz w trackerze.
- Jeśli lista pokazuje błąd, na przykład 401 albo 403 z trackera, sprawdź token i jego uprawnienia w **Ustawienia → Trackery zadań** przyciskiem **Testuj**.

## Powiązane strony

<CardGrid>
  <LinkCard title="Plan" href="/pl/agent/plan/" description="Otwarte pozycje plików planu Twojego projektu." />
  <LinkCard title="Zmiany i commity" href="/pl/agent/changes/" description="Propozycje commitów, które używają klucza i tytułu zadania." />
  <LinkCard title="Drzewa robocze" href="/pl/agent/worktrees/" description="Worktree, który może utworzyć Zacznij z agentem." />
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Wszystkie sekcje Ustawień." />
</CardGrid>
