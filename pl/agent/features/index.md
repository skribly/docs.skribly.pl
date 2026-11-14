# Funkcje

> Wszystko wokół agentów w Skribly Agent — edytor, git i commity, zadania i trackery, potoki, skille, audyty, przeglądarka podglądu, Docker, integracje i CLI.

Skribly Agent ma osobny widok do każdego rodzaju pracy. Otworzysz go z paska bocznego, skrótami od `⌘1` do `⌘9` (`Ctrl` w Windows i Linuksie) lub z palety poleceń `⌘K`. Agenci są opisani na stronach [Obszary robocze i panele](/pl/agent/workspaces/) oraz [Terminale i sesje](/pl/agent/terminals/).

## Pulpit

Agenci przy pracy, przypisane Ci zadania, ostatnie commity i zużycie tokenów. Zużycie tokenów jest obliczane lokalnie na podstawie plików sesji Claude Code i Codex; nic nie jest wysyłane.

## Prawdziwe IDE wokół agentów

- Edytor Monaco z kartami, szybkim otwieraniem `⌘P`, wyszukiwaniem w plikach `⌘⇧F` (ripgrep), diffami obok siebie i terminalem na dole.
- Pliki zmienione przez agenta są automatycznie przeładowywane.
- **Działania agenta na zaznaczonym kodzie** (`⌘⇧I`): Wyjaśnij, Napraw, Napisz testy, Przejrzyj; wysyłane do działającego agenta lub do nowej sesji.
- Paleta poleceń `⌘K` otwiera widoki, projekty, działania i agentów.

## Kod i git

- Zmiany i indeks, gałęzie, wypychanie i pobieranie, wykres historii wszystkich gałęzi oraz pull requesty przez GitHub CLI.
- **Sugestie commitów bez modelu.** Skribly uczy się wzorca z Twojej historii (`feat(scope): …`, `[KEY] …`, `KEY: …`, `#123 - …`), język, typ i zakres bierze ze zmienionych plików, a klucz z nazwy gałęzi. Sugestia pokazuje, skąd pochodzi każda jej część.
- **Agent** poprawia sugerowaną wiadomość na podstawie diffu zindeksowanych zmian, jeśli o to poprosisz.
- **Hook usuwający stopki AI** wycina z commitów stopki takie jak `Co-Authored-By` i „Generated with…”, także z commitów tworzonych przez agentów w ich terminalach. Włączysz go opcją **Hook bez stopek AI** na dole panelu zmian.
- Zaloguj się do GitHub, GitLab, Bitbucket, Gitea lub Azure DevOps, aby zobaczyć prawdziwą aktywność commitów.

## Zadania i trackery

- Jira (Cloud i Server/Data Center), Redmine, GitHub Issues, GitLab, Linear i Skribly Tracker na jednej liście, a także zadania lokalne. Skribly Tracker jest domyślnym trackerem.
- **Zacznij z agentem** zapisuje zadanie w `.skribly/tasks/<KEY>/TASK.md`, tworzy `STATE.md`, gałąź według Twojego wzorca (lub worktree) i uruchamia agenta z gotowym promptem, więc agent nie zużywa tokenów na pobieranie zgłoszenia.
- Zmiana statusu, komentarze, przypisywanie, nowe zgłoszenia, wyszukiwanie i rejestrowanie czasu bez opuszczania aplikacji — o ile tracker to obsługuje.
- Tokeny są szyfrowane za pomocą systemowego pęku kluczy. Sesje agentów dostają je jako zmienne środowiskowe o nazwach oczekiwanych przez agent-skills, więc `/task 123` działa bez pliku z danymi uwierzytelniającymi.

Co każdy tracker obsługuje w aplikacji:

| Tracker | Klucz | Komentarz | Status | Przypisz | Utwórz | Szukaj | Zaloguj czas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Skribly Tracker | `AGENT-12` | Tak | Tak | Tak | Tak | Tak | Tak |
| Jira | `PROJ-123` | Tak | Tak | Tak | Tak | Tak | Tak |
| Redmine | `2047` | Tak | Tak | Tak | Tak | Tak | Tak |
| GitHub | `owner/repo#12` | Tak | Tak | Tak | Tak | Tak | Nie |
| GitLab | `group/project#34` | Tak | Tak | Tak | Tak | Tak | Tak |
| Linear | `ENG-56` | Tak | Tak | Tak | Tak | Tak | Nie |

`.skribly/` jest dodawany do `.git/info/exclude`, więc pliki zadań nigdy nie trafiają do commita.

## Potoki

Potok to kilku agentów, także różnych dostawców, pracujących nad jednym celem.

- Etapy działają po kolei, a kroki w ramach jednego etapu — równolegle.
- Każdy krok to agent bez interfejsu, który dostaje swoją rolę, cel i najnowszą część `.skribly/runs/<id>/handoff.md`, a nie całą rozmowę z poprzednim agentem. Oszczędza to tokeny i pozwala łączyć różnych dostawców.
- Po zakończeniu etapu odpowiedź każdego kroku jest dopisywana do `handoff.md`.
- Krok oznaczony jako **zmienia pliki** może je edytować; w przeciwnym razie działa tylko do odczytu (na przykład Claude w trybie `plan` albo Codex z `--sandbox read-only`).
- Wbudowane: *Plan → wykonanie → przegląd*, *Trzy audyty równolegle*, *Poprawka, testy, dokumentacja* albo własny potok. Postęp widać na grafie, w którym można zmieniać rozmiar węzłów i je rozwijać.

![Widok potoków: wbudowane potoki po lewej, działający potok planowania, wykonania i przeglądu na grafie oraz jego kroki po prawej](../../../../assets/screens/agent-pipelines.webp)

## Skille

- Skille z [agent-skills](/pl/skills/) (`task`, `commit`, `review`, `handoff`, audyty, `project-docs` i inne) instalowane jednym kliknięciem, każdy w natywnym formacie danego agenta.
- Agent może dostosować zainstalowane skille i `.tasks/workflow.md` do projektu: polecenia sprawdzające, gałąź bazową, wzorce gałęzi i commitów oraz adres URL środowiska deweloperskiego.
- Szkielet dokumentacji `.docs/` generowany na podstawie repozytorium.
- Repozytorium skilli to domyślnie `github.com/skribly/agent-skills` albo Twój fork wskazany w **Ustawienia → Repozytorium skilli**.

## Audyty

Widok **Audyty** sprawdza projekt i działającą witrynę, przyznaje każdemu raportowi wynik od 0 do 100 i wysyła wybrane znaleziska do agenta jako krótką listę zadań.

| Karta | Co sprawdza |
| --- | --- |
| Bezpieczeństwo | Sekrety (zamaskowane w raporcie) i ryzykowne wzorce w plikach śledzonych przez Git; podatne zależności z OSV.dev dla plików lock npm, PyPI i Composer |
| Dostępność (WCAG) | axe-core względem WCAG 2.2 A i AA, w osobnej, izolowanej sesji przeglądarki |
| SEO | Techniczne SEO: metatagi, nagłówki, adres kanoniczny, `robots.txt`, mapy witryny i do 25 linków |

Zaznacz znaleziska i kliknij **Napraw z agentem (N)** albo kliknij **Popraw to** przy jednym z nich. Wszystkie reguły są na stronie [Reguły audytów](/pl/agent/audits/).

![Audyt bezpieczeństwa z wynikiem 40 na 100 i jedenastoma znaleziskami posortowanymi według ważności, od ujawnionego tokenu po zakresy wersji](../../../../assets/screens/agent-audits.webp)

## Przeglądarka

- Podgląd aplikacji w rozmiarach telefonu, tabletu i laptopa, z DevTools i zrzutem ekranu dla agenta.
- Karty Claude, Codex, Cursor i Gemini w osobnych profilach, aby każda zachowywała własne logowanie.
- **Udostępnij przeglądarkę agentom** przez Chrome DevTools Protocol, dla `chrome-devtools-mcp` lub Playwright MCP. Ta opcja jest domyślnie wyłączona i nasłuchuje tylko na `127.0.0.1`.

## Docker

Kontenery, projekty Compose i logi oraz alerty, gdy kontener ulegnie awarii lub zacznie się restartować w pętli.

## Integracje z Claude i Cursorem

- Wtyczki Claude Code z katalogu Anthropic, instalowane i włączane lub wyłączane osobno dla każdego zakresu.
- Serwery MCP Claude, Codex, Cursor i Gemini włączane i wyłączane jednym przełącznikiem, bez uszkadzania ich konfiguracji.
- Most **Claude Design → kod** i skróty do claude.ai.
- Karta **Cursor**: reguły projektu (`.cursor/rules`), serwery MCP Cursora i **Otwórz projekt w Cursorze**.

## Motywy dzienne i nocne

- Motywy z rozszerzeń VS Code, Cursor, Windsurf i VSCodium albo pobrane z Open VSX. Jeden motyw nadaje kolory interfejsowi, edytorowi kodu i terminalom.
- Osobne motywy dzienny i nocny, zgodne z ustawieniem systemu albo przełączane z paska stanu.
- Wbudowane motywy: **Skribly · Pergamin** (jasny), **Skribly · Atrament** (ciemny) i **Skribly · Wysoki kontrast** (wysoki kontrast).
- Skribly dobiera akcent o kontraście co najmniej 3:1 względem tła, a tekst na przyciskach akcentu o kontraście co najmniej 4,5:1, więc żaden motyw nie daje nieczytelnych przycisków.
- Motywy są odczytywane wyłącznie jako JSON; kod z rozszerzeń nigdy nie jest uruchamiany.

## CLI i MCP

Agenci mogą sterować innymi agentami przez lokalne API sterowania. Nasłuchuje ono tylko na `127.0.0.1`, na losowym porcie, z losowym tokenem w `~/.skribly/control.json` (uprawnienia `600`).

```bash
skribly agent start reviewer --kind claude \
  --project . --prompt "Review the changes in git diff"
skribly agent wait reviewer --until done --timeout 600
skribly agent read reviewer --lines 60

claude mcp add skribly -- skribly mcp
```

| Polecenie | Co robi |
| --- | --- |
| `skribly status` | Liczba paneli i agentów oraz ich stany |
| `skribly workspace list` | Projekty, ich worktree i panele w każdym z nich |
| `skribly pane create`, `run`, `read`, `wait-output`, `rename`, `close` | Panele powłoki |
| `skribly agent start <name> --kind <agent>` | Nazwany agent w nowym panelu, opcjonalnie w worktree (`--worktree BRANCH`) lub na maszynie SSH (`--machine M`) |
| `skribly agent prompt <target> <text> [--wait]` | Wysyła wiadomość i opcjonalnie czeka na koniec tury |
| `skribly agent wait <target> [--until done,idle,blocked]` | Czeka na wskazany stan |
| `skribly agent read`, `explain`, `stop` | Odczytuje ekran, wyjaśnia stan i kończy pracę agenta |
| `skribly worktree list`, `create`, `remove` | Worktree projektu |
| `skribly notify` | Powiadomienie od agenta lub skryptu |
| `skribly mcp` | Te same operacje co narzędzia MCP (`skribly_*`) |

Włączysz je w **Ustawienia → Sesje i sterowanie → Lokalne API sterowania** (domyślnie jest włączone), a polecenie dodasz do `PATH` przez **Polecenie skribly → Zainstaluj**. Polecenie działa tylko wtedy, gdy Skribly jest uruchomiony, i nie wymaga osobnego Node.js. Kody wyjścia i przepisy są na stronie [Polecenie skribly](/pl/agent/cli/).
