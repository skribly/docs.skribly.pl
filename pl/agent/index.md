# Skribly Agent

> IDE na komputer zbudowane wokół agentów programujących AI, a nie wokół plików. Co robi, czego potrzebuje i gdzie czytać dalej.

**Skribly Agent** to IDE zbudowane wokół agentów AI, a nie wokół plików. Ustawia Claude Code, Codex, Cursor Agent, Gemini CLI i dziewięciu kolejnych obok siebie jak multiplekser terminali, z zadaniami z trackera, gitem, potokami, skillami, audytami i przeglądarką podglądu w jednym oknie. Działa lokalnie na macOS, Windows i Linux.

Zastępuje pięć terminali, opisy zadań wklejane z trackera do czatu oraz wynik jednego agenta wklejany do kolejnego. Nigdy nie dopisuje stopki `Co-Authored-By`, o którą nikt nie prosił.

![Widok Agenci: pasek boczny obszarów roboczych z trzema projektami i ich worktree oraz panel Claude Code przeglądający diff](../../../../assets/screens/agent-agents.webp)

## W skrócie

- **Agenci pracują obok siebie** w kartach i podzielonych panelach i sami informują, kiedy na Ciebie czekają.
- **Zadania trafiają z trackera jako pliki**, nie przez kopiowanie i wklejanie: `TASK.md` i `STATE.md` na każde zadanie.
- **Agenci przekazują sobie pracę** przez pliki stanu i potoki, a nie przez Ciebie.
- **Commity zachowują styl repozytorium** i nigdy nie dostają stopek AI, także te tworzone przez agentów.
- **Wszystko działa lokalnie.** Bez konta, bez telemetrii; agenci korzystają z własnych logowań i kluczy API.

## Fakty

| | |
| --- | --- |
| Wersja | 1.0.37 (6 listopada 2026); każdy push do `main` tworzy nowe wydanie `1.0.<build>` |
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

## Czytaj dalej

| Strona | Co obejmuje |
| --- | --- |
| [Instalacja](/pl/agent/install/) | Pliki dla każdego systemu, pierwsze uruchomienie, niepodpisane kompilacje |
| [Funkcje](/pl/agent/features/) | Kod i git, zadania, potoki, skille, audyty, przeglądarka, Docker, CLI i MCP |
| [Obszary robocze i panele](/pl/agent/workspaces/) | Obszary robocze, karty, podziały, stany agentów, powiadomienia, worktree |
| [Terminale i sesje](/pl/agent/terminals/) | Nowe sesje, tryb czatu, wznawianie po restarcie, SSH, rozsyłanie wiadomości, przekazywanie pracy |
| [Obsługiwani agenci](/pl/agent/agents/) | 13 agentów, sposób instalacji i funkcje obsługiwane przez każdego z nich |
| [Skróty klawiszowe](/pl/agent/shortcuts/) | Prefiks `Ctrl+B` i wszystkie globalne skróty |
| [Ustawienia](/pl/agent/settings/) | Każda sekcja okna **Ustawienia** |
| [Dostępność](/pl/agent/accessibility/) | Rozmiar tekstu, wysoki kontrast, ograniczenie ruchu, podkreślanie linków, fokus |
| [Polecenie skribly](/pl/agent/cli/) | Sterowanie panelami i agentami ze skryptów i od innych agentów |
| [Reguły audytów](/pl/agent/audits/) | Czego szukają audyty bezpieczeństwa, dostępności i SEO |
| [Oszczędzanie tokenów](/pl/agent/token-saving/) | Jak agent-skills ogranicza tekst wysyłany do modelu |
| [Dane i sieć](/pl/agent/data-and-network/) | Co jest zapisywane, z czym łączy się aplikacja i jakie porty otwiera |
| [Aktualizacje](/pl/agent/updates/) | Automatyczne aktualizacje, wersje i pliki wydań |
| [Rozwiązywanie problemów](/pl/agent/troubleshooting/) | Typowe problemy i ich rozwiązania |
