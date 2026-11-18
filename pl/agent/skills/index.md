# Skille

> Widok Skille w Skribly Agent pobiera repozytorium agent-skills i instaluje skille w projekcie w formacie i folderze każdego agenta.

Widok **Skille** wypisuje skille z repozytorium agent-skills: krótkie procedury dla agenta, takie jak praca nad zadaniem, commit czy przegląd. Skribly trzyma kopię repozytorium, instaluje zaznaczone skille w projekcie w formacie i folderze, które czyta każdy agent, i potrafi dopasować zainstalowane skille do konwencji projektu. Co robią same skille, opisuje [sekcja agent-skills](/pl/skills/).

![Widok Skille: repozytorium agent-skills z Synchronizuj, Wygeneruj .docs i Zainstaluj zaznaczone, filtry kategorii i karty skilli z agentami, dla których są zainstalowane](../../../../assets/screens/agent-skills.webp)

## Otwórz widok

- Kliknij **Skille** na pasku aktywności po lewej albo naciśnij `⌘6`, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Skille**.

W Windows i Linuksie zamiast `⌘` używaj `Ctrl`.

## Jak pobrać repozytorium

<Steps>

1. Otwórz **Skille**. Za pierwszym razem widok jest pusty i prosi o pobranie skilli.

2. Naciśnij **Pobierz repozytorium**. Skribly klonuje repozytorium do swojego folderu danych poleceniem `git clone --depth 50`.

3. Później naciśnij **Synchronizuj**, żeby je zaktualizować. Działa `git pull --ff-only`, więc fork z lokalnymi commitami nigdy nie jest przepisywany.

</Steps>

Pod tytułem widać wiersz z adresem repozytorium, skrótem wersji i czasem ostatniej synchronizacji. Błąd z gita pojawia się w tym samym wierszu. Pobranie i synchronizacja to jedyne połączenia sieciowe widoku, i to tylko po naciśnięciu przycisku. Blokuje je przełącznik **Bez połączeń sieciowych aplikacji**; zobacz [Dane i sieć](/pl/agent/data-and-network/).

## Jak zainstalować skille w projekcie

Potrzebujesz wybranego projektu w aplikacji.

<Steps>

1. Znajdź skille, których chcesz. Wpisz w **Szukaj skilla** (szuka w nazwie, tytule, opisie i tagach) albo wybierz kategorię pod **Kategoria**.

2. Zaznacz pole na każdej karcie albo otwórz kartę, przeczytaj skill i naciśnij tam **Zainstaluj**.

3. Naciśnij **Zainstaluj zaznaczone**. Przycisk pokazuje, ile skilli jest zaznaczonych.

4. Wybierz agentów. Agenci znalezieni na tym komputerze mają plakietkę, a agenci, których skill nie obsługuje, są wyszarzeni.

5. Naciśnij **Zainstaluj w projekcie**. Dziennik wypisuje, co zapisano i gdzie. Naciśnij **Gotowe**, żeby go zamknąć.

</Steps>

Pliki trafiają do repozytorium projektu, więc cały zespół ma te same skille. Skill liczy się jako zainstalowany dla agenta, gdy istnieje którakolwiek z jego ścieżek, i pokazują to plakietki na kartach oraz w otwartej karcie.

| Agent | Gdzie trafia skill |
| --- | --- |
| Claude Code | `.claude/skills/<name>/SKILL.md` |
| Codex | `.agents/skills/<name>/SKILL.md` |
| Cursor | `.agents/skills/` (starszy `.cursor/rules/<name>.mdc` też liczy się jako zainstalowany) |
| Gemini CLI | `.agents/skills/` i `.gemini/commands/<name>.toml` |
| OpenCode | `.agents/skills/` i `.opencode/commands/<name>.md` |
| Windsurf | `.agents/skills/` i `.windsurf/workflows/<name>.md` |
| Copilot | `.agents/skills/` (starszy `.github/instructions/<name>.instructions.md` też liczy się jako zainstalowany) |

Claude Code czyta `.claude/skills`. Pozostali agenci czytają wspólny folder `.agents/skills`, więc skill jest dla nich zapisany raz. Dodatkowe pliki poleceń tworzy własny instalator repozytorium.

Skribly uruchamia instalator repozytorium, `cli/agent-skills.mjs`, w wątku roboczym wewnątrz aplikacji, więc nie potrzebujesz osobnego Node.js. Działa tylko po naciśnięciu **Zainstaluj w projekcie**. Jeśli instalator nie zapisze skilla albo go brakuje, Skribly kopiuje folder skilla sam: do `.claude/skills/` dla Claude Code i do `.agents/skills/` dla pozostałych.

## Jak dopasować zainstalowane skille do projektu

<Steps>

1. Najpierw zainstaluj skille. Dopóki żaden nie jest zainstalowany, przycisk jest wyszarzony.

2. Naciśnij **Dopasuj zainstalowane do projektu (Claude)** pod tytułem. Nazwa w nawiasie to Twój agent domyślny.

3. W widoku Agenci otwiera się agent z promptem. Czyta tylko plik zależności, README, 30 ostatnich commitów oraz konfigurację lintera i testów, uzupełnia zależne od projektu części skilli (polecenia sprawdzeń, gałąź bazową, wzory gałęzi i commitów, adres dev), zapisuje je w `.tasks/workflow.md` i wypisuje, co zmienił. Nie robi commita i nie zmienia ogólnych procedur.

</Steps>

## Jak wygenerować .docs

<Steps>

1. Naciśnij **Wygeneruj .docs**. Potrzebny jest projekt.

2. Skribly skanuje repozytorium bez modelu i zapisuje szkielet folderu `.docs/` projektu. Plik edytowany ręcznie, bez znacznika `skribly:auto`, nie jest nadpisywany.

3. W widoku Agenci otwiera się agent i uzupełnia architekturę, polecenia i zależności. Proponuje krótki `AGENTS.md` wskazujący na `.docs/` i nie zapisuje go bez Twojej zgody.

</Steps>

## Co jest na ekranie

| Część | Co pokazuje lub robi |
| --- | --- |
| Wiersz repozytorium | Adres, wersja, czas ostatniej synchronizacji i ewentualny błąd |
| **Synchronizuj** | Aktualizuje repozytorium. Do pierwszego pobrania nazywa się **Pobierz repozytorium** |
| **Wygeneruj .docs** | Dwa kroki opisane wyżej |
| **Zainstaluj zaznaczone** | Otwiera wybór agentów dla zaznaczonych skilli |
| **Dopasuj zainstalowane do projektu** | Prompt opisany wyżej |
| **Szukaj skilla** i **Kategoria** | Filtrują karty. Kategorie pochodzą z repozytorium |
| Karta skilla | Tytuł, `/name`, trzy linie opisu, kategoria i agenci, których obsługuje. Zielona plakietka z liczbą pokazuje, dla ilu agentów jest zainstalowany |
| Otwarta karta | Tekst skilla, agenci, dla których jest zainstalowany, **Pokaż pliki** (folder w menedżerze plików), **GitHub** (tylko dla repozytorium HTTPS) i **Zainstaluj** |

## Ustawienia → Repozytorium skilli

Adres ustawiasz w **Ustawieniach**, w sekcji **Repozytorium skilli**.

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Adres repozytorium git** | Skąd Skribly pobiera skille. Każdy adres, który obsługuje `git clone`: HTTPS albo SSH | `https://github.com/skribly/agent-skills.git` |
| **Zapisz** | Zapamiętuje adres. Potem naciśnij **Synchronizuj** w widoku Skille | |
| **Przywróć domyślne** | Przywraca domyślny adres | |
| **Otwórz repozytorium** | Otwiera adres HTTPS w przeglądarce | |

Użyj własnego forka albo firmowego repozytorium, żeby dać zespołowi inny zestaw skilli. Jeśli repozytorium ma `skills.json`, katalog jest czytany z niego. Bez niego Skribly czyta foldery `skills/<name>/SKILL.md`.

## Skill skribly

Osobny skill, `skribly`, uczy Claude Code i Codexa przekazywać pracę innym agentom: recenzenta obok, wykonawcę w osobnym worktree, czekanie na wynik i jego odczyt. Jest wbudowany w aplikację i nie pochodzi z repozytorium. Zainstalujesz go w **Ustawieniach**, w sekcji **Sesje i sterowanie**, pod **Skill „skribly” dla agentów**: wybierz projekt i naciśnij **Zainstaluj**. Zapisuje `.claude/skills/skribly/SKILL.md` i `.agents/skills/skribly/SKILL.md`. Polecenia, których używa, opisuje [Polecenie skribly](/pl/agent/cli/).

## Wskazówki

<Aside type="tip">
Instaluj tylko te skille, których projekt używa. Agent trzyma w kontekście tylko nazwę i opis każdego skilla, ale krótką listę łatwiej czytać. Zobacz [Oszczędzanie tokenów](/pl/agent/token-saving/).
</Aside>

- Zrób commit z zainstalowanymi folderami skilli, żeby nowa osoba w zespole dostała je razem z klonem.
- Gdy projekt ma skill `task`, **Zacznij z agentem** w widoku Zadania wysyła `/task <KEY>` do Claude Code i `$task <KEY>` do Codexa zamiast długiego promptu.

## Powiązane strony

<CardGrid>
  <LinkCard title="agent-skills" href="/pl/skills/" description="Same skille: co robi każdy z nich i jak zainstalować cały zestaw." />
  <LinkCard title="Oszczędzanie tokenów" href="/pl/agent/token-saving/" description="Jak skille ograniczają tekst wysyłany do modelu." />
  <LinkCard title="Zadania i trackery" href="/pl/agent/tasks/" description="Zacznij zadanie z agentem i skillem task." />
  <LinkCard title="Rozszerzenia" href="/pl/agent/extensions/" description="Własne prompty, reguły i skille, trzymane osobno od repozytorium." />
</CardGrid>
