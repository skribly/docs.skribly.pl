# Wszystkie funkcje w skrócie

> Jeden krótki akapit o każdym widoku i obszarze Skribly Agent, każdy z odsyłaczem do strony, która go wyjaśnia.

Skribly Agent ma osobny widok do każdego rodzaju pracy. Otworzysz go z paska aktywności, skrótami od `⌘1` do `⌘9` (`Ctrl` w Windows i Linux) lub z palety poleceń `⌘K`. Ta strona nazywa każdy obszar w kilku wierszach; strona, do której prowadzi odsyłacz, ma szczegóły.

## Pulpit

Agenci przy pracy, przypisane Ci zadania, Twoje ostatnie commity i zużycie tokenów na jednej stronie, z listą Pierwsze kroki. Zobacz [Pulpit](/pl/agent/dashboard/) i [Pierwsze uruchomienie](/pl/agent/first-run/).

## Agenci i sesje

Claude Code, Codex, Cursor Agent, Gemini CLI i dziewięciu kolejnych działa obok siebie w obszarach roboczych, kartach, podziałach i panelach, każdy w terminalu albo w czacie. Aplikacja czyta stan każdego agenta, mówi Ci, gdy któryś czeka, i wznawia sesje po restarcie. Zobacz [Obszary robocze](/pl/agent/workspaces/), [Agenci i sesje](/pl/agent/sessions/), [Obsługiwani agenci](/pl/agent/agents/), [Terminale](/pl/agent/terminals/), [Historia sesji](/pl/agent/session-history/) i [skrzynkę uwagi](/pl/agent/inbox/).

## Kod i zmiany

Edytor Monaco, wyszukiwanie, diffy obok siebie i terminal; zmiany, wiadomości commitów idące za Twoją historią bez stopek AI, gałęzie, push i pull requesty, graf historii oraz uwagi przeglądu odsyłane agentowi. Worktree trzymają agentów osobno. Zobacz [Edytor i pliki](/pl/agent/code/), [Zmiany i commity](/pl/agent/changes/), [Uwagi przeglądu](/pl/agent/review/), [Historia](/pl/agent/history/) i [Drzewa robocze](/pl/agent/worktrees/).

## Zadania i trackery

Jira, Redmine, GitHub Issues, GitLab, Linear i Skribly Tracker w jednej liście, plus zadania lokalne. **Zacznij z agentem** zapisuje zadanie do `.skribly/tasks/<KEY>/TASK.md` i `STATE.md`, tworzy gałąź lub worktree i uruchamia agenta z gotowym promptem. Status, komentarze, przypisanie i logowanie czasu działają bez wychodzenia z aplikacji, tam gdzie tracker je obsługuje. Zobacz [Zadania i trackery](/pl/agent/tasks/).

## Plan

Widok Plan liczy pola wyboru Markdown z plików planu i przekazuje otwartą pozycję do widoku Kod albo agentowi. Zobacz [Plan](/pl/agent/plan/).

## Potoki

Potok to kilku agentów, jeśli chcesz od różnych dostawców, pracujących nad jednym celem. Etapy działają po kolei, a kroki etapu równolegle; każdy krok to agent bez interfejsu, który czyta najnowszą część wspólnego `handoff.md`, a nie całą rozmowę poprzedniego agenta. Zobacz [Potoki](/pl/agent/pipelines/).

![Widok Potoki: wbudowane potoki i ostatnie uruchomienia po lewej, działający potok Plan, wykonanie i przegląd na grafie oraz jego kroki po prawej](../../../../assets/screens/agent-pipelines.webp)

## Skille

Skille z [agent-skills](/pl/skills/) instalowane jednym kliknięciem w formacie każdego agenta, dopasowane do projektu, ze szkieletem `.docs/` wygenerowanym z repozytorium. Zobacz [Skille](/pl/agent/skills/) i [Oszczędzanie tokenów](/pl/agent/token-saving/).

## Audyty

Widok **Audyty** sprawdza projekt i działającą stronę pod kątem bezpieczeństwa, dostępności (WCAG) i SEO, daje każdemu raportowi wynik od 0 do 100 i wysyła wybrane znaleziska agentowi jako krótką listę zadań. Zobacz [Audyty](/pl/agent/audits/) i [Reguły audytów](/pl/agent/audit-rules/).

![Audyt bezpieczeństwa z wynikiem 40 na 100: jedenaście znalezisk według wagi, pierwsze to zamaskowany token GitHub, po prawej sposób naprawy](../../../../assets/screens/agent-audits.webp)

## Zużycie tokenów i zasoby

Tablica zużycia tokenów według agenta, projektu i dnia, obliczana lokalnie z plików sesji agentów, oraz widok pamięci, procesora i portów każdego panelu. Zobacz [Zużycie tokenów](/pl/agent/usage/) i [Zasoby](/pl/agent/resources/).

## Rozszerzenia, wtyczki i MCP

Prompty, reguły, skille, serwery MCP i polecenia dodawane na projekt lub zespół; wtyczki Claude Code; serwery MCP Claude, Codexa, Cursora i Gemini włączane jednym przełącznikiem; oraz most Claude Design do kodu. Zobacz [Rozszerzenia](/pl/agent/extensions/), [Wtyczki](/pl/agent/plugins/) i [Serwery MCP](/pl/agent/mcp/).

## Przeglądarka, Docker i dokumenty

Przeglądarka podglądu w rozmiarach telefonu, tabletu i laptopa z DevTools i zrzutem ekranu dla agenta, którą możesz udostępnić agentom przez Chrome DevTools Protocol; kontenery Docker, projekty compose i alerty; oraz README, lista zmian i folder `.docs` czytane bezpiecznie. Zobacz [Przeglądarka](/pl/agent/browser/), [Docker](/pl/agent/docker/) i [Dokumenty](/pl/agent/documents/).

## Ustawienia, motywy i języki

Motywy z rozszerzeń VS Code, Cursora i Windsurfa albo z Open VSX, osobne motywy dzienny i nocny, rozmiar tekstu, ustawienia dostępności, języki interfejsu oraz import i eksport Twojej konfiguracji. Zobacz [Ustawienia](/pl/agent/settings/), [Motywy](/pl/agent/themes/), [Dostępność](/pl/agent/accessibility/), [Języki](/pl/agent/languages/) i [Import i eksport](/pl/agent/import-export/).

## CLI i MCP

Agenci mogą sterować innymi agentami przez polecenie `skribly` i serwer `skribly mcp`, przez lokalne API sterowania na `127.0.0.1` z losowym tokenem. Zobacz [Polecenie skribly](/pl/agent/cli/) i [Skribly MCP](/pl/agent/skribly-mcp/).

## Powiązane strony

<CardGrid>
  <LinkCard title="Przegląd" href="/pl/agent/" description="Czym jest Skribly Agent i czego potrzebuje." />
  <LinkCard title="Instalacja" href="/pl/agent/install/" description="Pliki dla każdego systemu." />
  <LinkCard title="Skróty klawiszowe" href="/pl/agent/shortcuts/" description="Prefiks Ctrl+B i każdy skrót globalny." />
</CardGrid>
