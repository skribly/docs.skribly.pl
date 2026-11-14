# FAQ

> Krótkie odpowiedzi na częste pytania o Skribly: czy jest komercyjne, gdzie jest kod, jakich agentów i trackery obsługuje oraz co opuszcza Twój komputer.

## Czym jest Skribly?

To rodzina narzędzi do planowania pracy i budowania oprogramowania z agentami programującymi AI: [Skribly Agent](/pl/agent/), [agent-skills](/pl/skills/) i [Skribly Tracker](/pl/tracker/), ze wspólnymi pakietami [Core](/pl/core/) i [UI](/pl/ui/). Zobacz [Architektura ekosystemu](/pl/overview/architecture/).

## Czy to projekt komercyjny?

Nie. Skribly to niekomercyjny projekt edukacyjny, tworzony po godzinach przez pięciu programistów z Rzeszowa. Zobacz [Autorzy](/pl/authors/).

## Gdzie jest kod źródłowy?

Repozytoria są na razie prywatne i będą otwierane stopniowo. Kod jest na licencji MIT.

## Czy potrzebuję wszystkich narzędzi?

Nie. agent-skills działa w dowolnym repozytorium z każdym z ośmiu agentów, które obsługuje. Skribly Agent współpracuje z Jira, Redmine, GitHub, GitLab i Linear, a także ze Skribly Tracker. API Skribly Tracker działa z dowolnym klientem HTTP.

## Którzy agenci programujący są obsługiwani?

Skribly Agent uruchamia 13: Claude Code, Codex CLI, Cursor Agent, Gemini CLI, OpenCode, Copilot CLI, Aider, Amp, Factory Droid, Qwen Code, Goose, Crush i Kimi CLI, oraz Twoje własne polecenia. agent-skills instaluje skille dla 8: Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot i Devin. Zobacz [Obsługiwani agenci](/pl/agent/agents/) i [agenci dla skilli](/pl/skills/agents/).

## Jakie trackery są obsługiwane?

Skribly Tracker, Jira Cloud i Server/Data Center, Redmine, GitHub Issues, GitLab i Linear, zarówno w Skribly Agent, jak i w agent-skills.

## Czy potrzebuję konta?

Nie. Skribly Agent i agent-skills nie wymagają konta Skribly. Agenci używają własnych logowań i kluczy API. Skribly Tracker ma własne konta, na Twojej własnej instalacji.

## Czy cokolwiek opuszcza mój komputer?

Skribly Agent nie wysyła telemetrii. Łączy się tylko z usługami, których używasz przez niego: z Twoimi trackerami, OSV.dev (audyty zależności), Open VSX (motywy), GitHubem (aktualizacje i skille) oraz stronami, które otwierasz lub audytujesz. Agenci programujący rozmawiają ze swoimi dostawcami tak samo jak bez Skribly. Zobacz [Bezpieczeństwo](/pl/security/).

## Dlaczego w commitach nigdy nie ma stopek `Co-Authored-By`?

Bo commity mają wyglądać jak Twoje. Skribly Agent i agent-skills piszą wiadomości w stylu Twojego repozytorium i usuwają stopki AI hookiem `commit-msg`, także z commitów, które agenci robią we własnych terminalach. Zobacz [Commity bez stopek AI](/pl/skills/commits/).

## Dlaczego macOS albo Windows ostrzega mnie przy instalacji Skribly Agent?

Instalatory nie są jeszcze podpisane. Jednorazowe kroki są w [Zainstaluj Skribly Agent](/pl/agent/install/).

## Czy mogę uruchamiać agentów na serwerze?

Tak. Dodaj maszynę w **Ustawienia → Sesje i sterowanie → Maszyny SSH** i wybierz ją w **Nowa sesja**. Agent musi być zainstalowany na serwerze. Zobacz [Maszyny SSH](/pl/agent/terminals/#maszyny-ssh).

## Czy Skribly Agent utrzymuje sesje po zamknięciu aplikacji?

Nie. Zamknięcie kończy procesy terminala. Układ wraca, a agenci, którzy to obsługują, natywnie wznawiają rozmowę. Zobacz [Wznawianie po ponownym uruchomieniu](/pl/agent/terminals/#wznawianie-po-ponownym-uruchomieniu).

## Czy agenci mogą czytać tę dokumentację?

Tak. [`/llms.txt`](https://docs.skribly.pl/llms.txt) zawiera spis dokumentacji dla modeli językowych, z pełną i skróconą wersją w jednym pliku.

## Jak zgłosić błąd albo problem z bezpieczeństwem?

Problemy z bezpieczeństwem i bariery w dostępności zgłaszaj na adres [contact@skribly.pl](mailto:contact@skribly.pl). Zobacz [Bezpieczeństwo](/pl/security/).
