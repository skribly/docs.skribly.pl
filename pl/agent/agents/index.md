# Obsługiwani agenci

> 13 agentów programujących, które Skribly Agent wykrywa i uruchamia, sposób instalacji każdego z nich oraz to, co obsługują w panelach, czacie, wznawianiu, MCP i wspólnej przeglądarce.

Skribly uruchamia agentów programujących, których już masz, korzystając z ich własnych logowań i kluczy API. Wyszukuje ich w `PATH` oraz w typowych lokalizacjach instalacji, a brakującym agentom pokazuje polecenie instalacji w **Ustawienia → Agenci**, gdzie każde polecenie można skopiować jednym kliknięciem.

## Polecenia instalacji

| Agent | Polecenie | Instalacja |
| --- | --- | --- |
| Claude Code | `claude` | `npm install -g @anthropic-ai/claude-code` |
| Codex CLI | `codex` | `npm install -g @openai/codex` |
| Cursor Agent | `cursor-agent` | `curl https://cursor.com/install -fsS \| bash` |
| Gemini CLI | `gemini` | `npm install -g @google/gemini-cli` |
| OpenCode | `opencode` | `npm install -g opencode-ai` |
| Copilot CLI | `copilot` | `npm install -g @github/copilot` |
| Aider | `aider` | `python -m pip install aider-install && aider-install` |
| Amp | `amp` | `npm install -g @ampcode/cli` |
| Factory Droid | `droid` | `curl -fsSL https://app.factory.ai/cli \| sh` |
| Qwen Code | `qwen` | `npm install -g @qwen-code/qwen-code` |
| Goose | `goose` | `curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh \| bash` |
| Crush | `crush` | `brew install charmbracelet/tap/crush` |
| Kimi CLI | `kimi` | `npm install -g @moonshot-ai/kimi-code` |

Po instalacji kliknij **Ustawienia → Agenci → Wykryj ponownie**; lista jest buforowana przez pięć minut.

Skribly znajdzie Claude Code także wtedy, gdy jest zainstalowany tylko jako rozszerzenie VS Code, Cursora, Windsurfa lub VSCodium, w `~/.claude/local`, w `~/.local/bin` albo, na macOS, w pakiecie aplikacji Claude.

## Możliwości poszczególnych agentów

| Agent | Panele | Czat | Natywne wznawianie | Przełącznik MCP | Wspólna przeglądarka |
| --- | --- | --- | --- | --- | --- |
| Claude Code | Tak | Tak | Tak | Tak | Tak |
| Codex CLI | Tak | Tak | Tak | Tak | Tak |
| Cursor Agent | Tak | Tak | Tak | Tak | Tak |
| Gemini CLI | Tak | Tak | Nie | Tak | Tak |
| OpenCode | Tak | Tak | Tak | Nie | Nie |
| Copilot CLI | Tak | Tak | Tak | Nie | Nie |
| Aider | Tak | Tak | Nie | Nie | Nie |
| Amp | Tak | Tak | Nie | Nie | Nie |
| Factory Droid | Tak | Tak | Tak | Nie | Nie |
| Qwen Code | Tak | Tak | Tak | Nie | Nie |
| Goose | Tak | Tak | Tak | Nie | Nie |
| Crush | Tak | Tak | Tak | Nie | Nie |
| Kimi CLI | Tak | Nie | Tak | Nie | Nie |

- **Panele**: działa interaktywnie w panelu terminala z wykrywaniem stanu.
- **Czat**: działa bez interfejsu w trybie czatu oraz w [potokach](/pl/agent/features/#potoki).
- **Natywne wznawianie**: rozmowa jest kontynuowana po ponownym uruchomieniu. Zobacz [Wznawianie po ponownym uruchomieniu](/pl/agent/terminals/#wznawianie-po-ponownym-uruchomieniu).
- **Przełącznik MCP**: Skribly może włączać i wyłączać serwery MCP agenta.
- **Wspólna przeglądarka**: agent może korzystać z przeglądarki Skribly przez Chrome DevTools Protocol.

## Agenci niestandardowi

Dodaj własne polecenie w **Ustawienia → Agenci**, wraz z jego argumentami oraz — jeśli występuje — argumentem wznawiającym sesję (`{id}`). W CLI agent niestandardowy ma postać `--kind custom:<id>`.

## Skille dla poszczególnych agentów

[agent-skills](/pl/skills/agents/) instaluje skille dla Claude Code, Codex CLI, Cursora, Gemini CLI, OpenCode, Windsurfa, GitHub Copilot i Devina, każdemu w jego własnym formacie.
