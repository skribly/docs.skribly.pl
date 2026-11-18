# Obsługiwani agenci

> Gdzie agent-skills instaluje skille dla Claude Code, Codex CLI, Cursora, Gemini CLI, OpenCode, Windsurfa, GitHub Copilot i Devina oraz jak wywołujesz je w każdym z tych narzędzi. Opisuje też pliki dla poszczególnych agentów, które `agent-skills agent-files` generuje z `AGENTS.md`.

Każdy obsługiwany agent czyta foldery w natywnym formacie **Agent Skills**: `<name>/SKILL.md` z metadanymi front matter `name` i `description` oraz opcjonalnymi folderami `reference/`, `scripts/` i `templates/`. Siedmiu z nich czyta ten sam wspólny folder `.agents/skills`, więc jedna kopia wystarcza dla Codexa, Cursora, Gemini CLI, OpenCode, Windsurfa, GitHub Copilot i Devina. Claude Code czyta tylko `.claude/skills`. Lokalizacje sprawdzono w dokumentacji każdego dostawcy 29 października 2026 r., a lokalizacje dla Devina i plików instrukcji projektu 11 listopada 2026 r.

## Format domyślny: `--format skills`

| Agent | Cel | Zakres projektu (kopia) | Zakres użytkownika (symlink) | Wywołanie |
| --- | --- | --- | --- | --- |
| Claude Code | `claude` | `.claude/skills/<name>/` | `~/.claude/skills/<name>` | `/task 123` |
| Codex CLI | `codex` | `.agents/skills/<name>/` | `~/.agents/skills/<name>` | `$task 123` lub wybór z `/skills` |
| Cursor | `cursor` | `.agents/skills/<name>/` | `~/.agents/skills/<name>` | `/task 123` w czacie agenta |
| Gemini CLI | `gemini` | `.agents/skills/<name>/` + `.gemini/commands/<name>.toml` | `~/.agents/skills/<name>` + `~/.gemini/commands/<name>.toml` | `/task 123` |
| OpenCode | `opencode` | `.agents/skills/<name>/` + `.opencode/commands/<name>.md` | `~/.agents/skills/<name>` + `~/.config/opencode/commands/<name>.md` | `/task 123` |
| Windsurf | `windsurf` | `.agents/skills/<name>/` + `.windsurf/workflows/<name>.md` | `~/.agents/skills/<name>` + `~/.codeium/windsurf/global_workflows/<name>.md` | `/task 123` lub `@task` |
| GitHub Copilot | `copilot` | `.agents/skills/<name>/` | `~/.agents/skills/<name>` | `/task 123` w czacie VS Code lub Copilot CLI |
| Devin | `devin` | `.agents/skills/<name>/` | `~/.agents/skills/<name>`; Devin CLI czyta też `~/.config/devin/skills` (w Windows `%APPDATA%\devin\skills`) | `@skills:task` w prompcie |

Gemini CLI, OpenCode i Windsurf ładują skille przez narzędzie albo `@mention`, a nie przez polecenie ukośnikowe, dlatego instalator zapisuje też cienkie polecenie z kilku linijek: „użyj skilla `<name>` z tymi argumentami”. Nigdy nie powiela treści skilla, więc do aktualizacji wystarczą `git pull` i `agent-skills sync`.

## Format klasyczny: `--format rules`

Dla starszych wersji agentów:

| Cel | Zapisywane pliki | Uwagi |
| --- | --- | --- |
| `cursor` | `.cursor/rules/<name>.mdc` („Agent Requested”) | Tylko zakres projektu |
| `windsurf` | `.windsurf/rules/<name>.md` (`trigger: model_decision`) | Tylko zakres projektu; sprawdzany jest limit 12 000 znaków na plik |
| `copilot` | `.github/instructions/<name>.instructions.md`; zakres użytkownika `~/.copilot/instructions/` | Bez `applyTo`, więc reguła nie jest dołączana do każdego żądania |
| `gemini` | `.gemini/commands/<name>.toml` z całym skillem w środku | Sekwencje `@{` i `!{` są neutralizowane, aby Gemini nigdy nie wstawiał plików ani nie uruchamiał poleceń z tekstu skilla |
| `opencode` | `.opencode/commands/<name>.md` z całym skillem w środku | |
| `claude`, `codex`, `devin` | Tak samo jak `skills` | Nie mają innego formatu |

## Znane nakładanie się

- Cursor, OpenCode i Copilot czytają też `.claude/skills` w zakresie projektu. Gdy w jednym projekcie działają Claude i jeden z nich, skill może się pojawić dwa razy. Zainstaluj Claude w zakresie użytkownika, a pozostałych w zakresie projektu, albo odwrotnie.
- Codex nadal ładuje przestarzały folder `~/.codex/skills`. agent-skills nigdy tam nie zapisuje, a `agent-skills doctor` ostrzega, gdy stare kopie przesłaniają nowe.

## Nie w pełni zweryfikowane

- **Windsurf** preferuje teraz `.devin/{rules,workflows,skills}` i czyta `.windsurf/*` jako zapasowe. agent-skills zapisuje `.windsurf/*`, co działa zarówno w starej, jak i w przemianowanej aplikacji, oraz wspólny `.agents/skills`.
- **Gemini CLI** ogranicza narzędzia plikowe do folderów obszaru roboczego. Skille podlinkowane w zakresie użytkownika są aktywowane przez `activate_skill`, które daje dostęp do folderu skilla.

## Pliki instrukcji projektu

Repozytorium trzyma instrukcje dla agentów programujących w jednym pliku, `AGENTS.md`. Codex, OpenCode i Devin czytają go samodzielnie. Claude Code, Gemini CLI, Cursor i Copilot potrzebują własnego, małego pliku, a `agent-skills agent-files` generuje te pliki z `AGENTS.md`, więc nigdy nie piszesz ich ręcznie:

```bash
cd ~/code/shop                      # repozytorium z plikiem AGENTS.md
agent-skills agent-files            # zapisz to, czego brakuje lub co jest nieaktualne
agent-skills agent-files --check    # nic nie zapisuje, kończy się kodem 1, gdy wygenerowanego pliku brakuje lub różni się
agent-skills doctor                 # każdy agent: skonfigurowany lub nie dla tego repozytorium
```

Uruchom je ponownie po `git pull` agent-skills (nowe wersje skilli) albo po zmianie struktury `AGENTS.md`. Pliki z odwołaniem nie zawierają instrukcji, więc edycja samego `AGENTS.md` nie wymaga ponownego uruchomienia. Generator obejmuje siedmiu agentów: Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, GitHub Copilot i Devin. Windsurf czyta też `.agents/skills` i `AGENTS.md`, więc wygenerowane repozytorium działa tam bez dodatkowego pliku.

| Plik | Dla | Zawartość |
| --- | --- | --- |
| `CLAUDE.md` | Claude Code | Komentarz ze znacznikiem, a potem jeden wiersz `@AGENTS.md` |
| `GEMINI.md` | Gemini CLI | Komentarz ze znacznikiem, a potem `@./AGENTS.md` |
| `.cursor/rules/agents.mdc` | Cursor | Zawsze stosowana reguła, która odwołuje się do `@AGENTS.md` |
| `.github/copilot-instructions.md` | GitHub Copilot | Komentarz ze znacznikiem i link do `../AGENTS.md` |
| `.claude/skills/<name>/` | Claude Code | Skille, skopiowane |
| `.agents/skills/<name>/` | Codex, Cursor, Gemini CLI, OpenCode, Copilot, Devin (i Windsurf) | Te same skille, raz dla wszystkich |
| `.mcp.json` | Claude Code | `{ "mcpServers": {} }`: bezpieczne ustawienia tylko do odczytu i pusta lista serwerów |
| `.skribly/agent-files.json` | Samo polecenie | Co zostało wygenerowane; zapisz go w commicie razem z pozostałymi plikami |

Każdy plik tekstowy zaczyna się komentarzem, który mówi, że wygenerował go `agent-skills agent-files`. Claude Code usuwa ten komentarz, zanim przeczyta `CLAUDE.md`, więc agent nadal widzi pojedynczy wiersz importu. `.mcp.json` nigdy nie zawiera tokena ani adresu URL z poświadczeniami; serwery dodaje człowiek.

Polecenie można bezpiecznie uruchamiać wielokrotnie:

- **Ponowne uruchomienie daje ten sam wynik.** Drugie uruchomienie nic nie zmienia i wypisuje `0 change(s)`; zakończenia wierszy nie mają znaczenia.
- **Pliki napisane ręcznie zostają.** `CLAUDE.md`, `GEMINI.md`, reguła, plik instrukcji lub folder skilla bez znacznika jest zgłaszany i pozostawiany bez zmian, a polecenie kończy się kodem 1. Przenieś jego treść do `AGENTS.md` i usuń go albo użyj `--force`: stary plik jest wcześniej zapisywany jako `<path>.bak-agent-skills`.
- **Twoje serwery w `.mcp.json` zostają.** `--force` pomija taki plik; tylko `--force-mcp` go zastępuje i zapisuje stary jako `.mcp.json.bak-agent-skills`. Ta kopia może zawierać blok `env` z tokenami, więc usuń ją albo zignoruj przed `git add`.
- **Twoje własne skille nigdy nie są zmieniane.** Zarządzane są tylko foldery nazwane jak skill z agent-skills.
- **Wszystko zostaje w repozytorium.** Link wskazujący poza nie jest odrzucany, zgłaszany i pomijany; polecenie kończy się kodem 1.
- **`--check` i `--dry-run` niczego nie zapisują.** `--check` kończy się kodem 1, gdy wygenerowanego pliku brakuje, różni się albo nie ma znacznika, i jest bramką do użycia w CI. `--skills a,b` ogranicza, które skille są kopiowane, a `--json` wypisuje raport do odczytu maszynowego.

`agent-skills doctor` wypisuje każdego z siedmiu agentów jako `configured` albo `not configured` dla bieżącego repozytorium, razem z powodem, na przykład `CLAUDE.md missing`. Tylko raportuje, niczego nie zmienia.

Wygenerowane pliki nie obejmują jeszcze hooka ochronnego każdego agenta ani ról subagentów z `.claude/agents/`.

## Agenci w Skribly Agent

Skribly Agent uruchamia 13 agentów, więcej, niż obsługuje agent-skills. Aider, Amp, Factory Droid, Qwen Code, Goose, Crush i Kimi CLI działają w Skribly, ale nie mają celu instalacji skilli. Zobacz [Obsługiwani agenci w Skribly Agent](/pl/agent/agents/).
