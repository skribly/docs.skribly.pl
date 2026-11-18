# Skribly Agent

> IDE na komputer zbudowane wokół agentów programujących AI, a nie wokół plików. Co robi, czego potrzebuje i mapa wszystkich obszarów przewodnika użytkownika.

**Skribly Agent** to IDE zbudowane wokół agentów AI, a nie wokół plików. Ustawia Claude Code, Codex, Cursor Agent, Gemini CLI i dziewięciu kolejnych obok siebie jak multiplekser terminali, z zadaniami z trackera, gitem, potokami, skillami, audytami i przeglądarką podglądu w jednym oknie. Działa lokalnie na macOS, Windows i Linux.

Zastępuje pięć terminali, opisy zadań wklejane z trackera do czatu oraz wynik jednego agenta wklejany do kolejnego. Nigdy nie dopisuje stopki `Co-Authored-By`, o którą nikt nie prosił.

![Widok Agenci: pasek obszarów roboczych z trzema projektami i ich worktree oraz panel Claude Code, który przegląda diff i wypisuje problemy dostępności](../../../../assets/screens/agent-agents.webp)

## W skrócie

- **Agenci pracują obok siebie** w kartach i podzielonych panelach i sami informują, kiedy na Ciebie czekają.
- **Zadania trafiają z trackera jako pliki**, nie przez kopiowanie i wklejanie: `TASK.md` i `STATE.md` na każde zadanie.
- **Agenci przekazują sobie pracę** przez pliki stanu i potoki, a nie przez Ciebie.
- **Commity zachowują styl repozytorium** i nigdy nie dostają stopek AI, także te tworzone przez agentów.
- **Wszystko działa lokalnie.** Bez konta, bez telemetrii; agenci korzystają z własnych logowań i kluczy API.

## Fakty

| | |
| --- | --- |
| Wersja | 1.0.37 (6 listopada 2026) to ostatnie wydanie; następne jest w przygotowaniu |
| Systemy | macOS 12+ (Apple Silicon i Intel), Windows 10 i 11 (x64 i ARM64), Linux x64 (AppImage, `.deb`, `.rpm`) |
| Stos | Electron 45, React 19, TypeScript 7, Vite 8 |
| Języki interfejsu | polski i angielski oraz dowolny inny język dzięki tłumaczeniu maszynowemu online, zapisywanemu do użytku offline |
| Telemetria | Brak |
| Licencja | MIT |

## Wymagania

- `git` w `PATH`. Bez niego możesz podglądać pliki, ale nie zobaczysz zmian.
- Przynajmniej jeden agent programujący, na przykład `npm install -g @anthropic-ai/claude-code`. Skribly wykrywa zainstalowanych agentów i pokazuje polecenie instalacji dla brakujących.
- Bez osobnego Node.js. Aplikacja uruchamia narzędzia pomocnicze we własnym środowisku uruchomieniowym.
- `ssh` (OpenSSH) tylko wtedy, gdy chcesz uruchamiać agentów na zdalnych maszynach.

## Przewodnik

Zacznij od [Instalacji](/pl/agent/install/). Każdy obszar poniżej ma własne strony.

### Pierwsze kroki

<CardGrid>
  <LinkCard title="Instalacja" href="/pl/agent/install/" description="Pliki dla każdego systemu i niepodpisane instalatory." />
  <LinkCard title="Pierwsze uruchomienie" href="/pl/agent/first-run/" description="Przewodnik, lista Pierwsze kroki i ikona w zasobniku." />
  <LinkCard title="Twój pierwszy obszar roboczy" href="/pl/agent/first-workspace/" description="Dodaj projekt i połącz tracker." />
  <LinkCard title="Twoja pierwsza sesja" href="/pl/agent/first-session/" description="Uruchom agenta i zrób commit z jego pracy." />
  <LinkCard title="Wszystkie funkcje w skrócie" href="/pl/agent/features/" description="Jeden akapit o każdym obszarze." />
</CardGrid>

### Agenci i obszary robocze

<CardGrid>
  <LinkCard title="Obszary robocze" href="/pl/agent/workspaces/" description="Karty, podziały, powiększanie i pasek obszarów." />
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Stany, panel agenta, czat i przekazywanie pracy." />
  <LinkCard title="Obsługiwani agenci" href="/pl/agent/agents/" description="13 agentów i jak ich zainstalować." />
  <LinkCard title="Terminale" href="/pl/agent/terminals/" description="Panele powłoki i maszyny SSH." />
  <LinkCard title="Historia sesji" href="/pl/agent/session-history/" description="Dawne sesje i wznawianie." />
  <LinkCard title="Skrzynka uwagi" href="/pl/agent/inbox/" description="Sesje, które czekają na Ciebie." />
  <LinkCard title="Pulpit" href="/pl/agent/dashboard/" description="Liczniki, aktywność i projekty." />
</CardGrid>

### Kod i zmiany

<CardGrid>
  <LinkCard title="Edytor i pliki" href="/pl/agent/code/" description="Widok Kod." />
  <LinkCard title="Zmiany i commity" href="/pl/agent/changes/" description="Dodawanie do indeksu, propozycja i commit." />
  <LinkCard title="Uwagi przeglądu" href="/pl/agent/review/" description="Uwagi do diffu odsyłane agentowi." />
  <LinkCard title="Historia" href="/pl/agent/history/" description="Graf wszystkich gałęzi." />
  <LinkCard title="Drzewa robocze" href="/pl/agent/worktrees/" description="Wszystkie worktree Twoich projektów." />
</CardGrid>

### Plan i zadania

<CardGrid>
  <LinkCard title="Zadania i trackery" href="/pl/agent/tasks/" description="Zadania uruchamiane z agentem." />
  <LinkCard title="Plan" href="/pl/agent/plan/" description="Pola wyboru Twoich plików planu." />
  <LinkCard title="Potoki" href="/pl/agent/pipelines/" description="Kilku agentów nad jednym celem." />
</CardGrid>

### Jakość i zużycie

<CardGrid>
  <LinkCard title="Audyty" href="/pl/agent/audits/" description="Bezpieczeństwo, dostępność i SEO." />
  <LinkCard title="Reguły audytów" href="/pl/agent/audit-rules/" description="Czego szuka każdy audyt." />
  <LinkCard title="Zużycie tokenów" href="/pl/agent/usage/" description="Tokeny według agenta, projektu i dnia." />
  <LinkCard title="Zasoby" href="/pl/agent/resources/" description="Pamięć, procesor i porty każdego panelu." />
</CardGrid>

### Skille i integracje

<CardGrid>
  <LinkCard title="Skille" href="/pl/agent/skills/" description="Skille z agent-skills dla każdego agenta." />
  <LinkCard title="Oszczędzanie tokenów" href="/pl/agent/token-saving/" description="Jak tekst wysyłany do modelu pozostaje mały." />
  <LinkCard title="Rozszerzenia" href="/pl/agent/extensions/" description="Prompty, reguły, skille, serwery MCP i polecenia." />
  <LinkCard title="Wtyczki" href="/pl/agent/plugins/" description="Wtyczki Claude Code i Claude Design." />
  <LinkCard title="Serwery MCP" href="/pl/agent/mcp/" description="Serwery MCP Twoich agentów." />
  <LinkCard title="Przeglądarka" href="/pl/agent/browser/" description="Przeglądarka podglądu." />
  <LinkCard title="Docker" href="/pl/agent/docker/" description="Kontenery i alerty." />
  <LinkCard title="Dokumenty" href="/pl/agent/documents/" description="README, lista zmian i .docs." />
</CardGrid>

### Ustawienia i wygląd

<CardGrid>
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Każda sekcja Ustawień." />
  <LinkCard title="Motywy" href="/pl/agent/themes/" description="Motywy dzienny i nocny." />
  <LinkCard title="Dostępność" href="/pl/agent/accessibility/" description="Rozmiar tekstu, kontrast i ruch." />
  <LinkCard title="Języki" href="/pl/agent/languages/" description="Języki interfejsu." />
  <LinkCard title="Import i eksport" href="/pl/agent/import-export/" description="Przenieś swoją konfigurację." />
</CardGrid>

### Informacje pomocnicze

<CardGrid>
  <LinkCard title="Skróty klawiszowe" href="/pl/agent/shortcuts/" description="Prefiks Ctrl+B i każdy skrót globalny." />
  <LinkCard title="Polecenie skribly" href="/pl/agent/cli/" description="Sterowanie panelami i agentami ze skryptów." />
  <LinkCard title="Skribly MCP" href="/pl/agent/skribly-mcp/" description="Serwer MCP aplikacji." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Co jest zapisywane i z czym łączy się aplikacja." />
  <LinkCard title="Aktualizacje" href="/pl/agent/updates/" description="Automatyczne aktualizacje i pliki wydań." />
  <LinkCard title="Rozwiązywanie problemów" href="/pl/agent/troubleshooting/" description="Typowe problemy i rozwiązania." />
  <LinkCard title="FAQ" href="/pl/agent/faq/" description="Krótkie odpowiedzi." />
</CardGrid>
