# Rozwiązywanie problemów

> Rozwiązania najczęstszych problemów Skribly Agent — wykrywanie agentów, terminale, niepodpisane instalatory, sandbox w Linuksie, trackery, worktree, hooki i audyty.

## Agent nie jest wykrywany

**Objaw:** w **Ustawienia → Agenci** agent ma stan „nie zainstalowano”, choć działa w Twoim terminalu.

1. Kliknij **Wykryj ponownie**; lista jest buforowana przez pięć minut.
2. Sprawdź, gdzie jest agent: `which claude` (w Windows: `where claude`). Skribly przeszukuje `PATH` Twojej powłoki logowania oraz `~/.local/bin`, `/opt/homebrew/bin` i `/usr/local/bin`.
3. Jeśli folder agenta dodajesz do `PATH` tylko w bloku dla powłok interaktywnych albo w pliku, którego powłoka logowania nie czyta, przenieś ten wpis do `~/.zprofile` lub `~/.bash_profile`.
4. Powłoka, która startuje dłużej niż pięć sekund, nie zdąży zwrócić swojego środowiska. Przyspiesz ją albo podlinkuj agenta w `~/.local/bin`.
5. W Windows Skribly nie czyta powłoki; agent musi być w systemowym `PATH`. Po instalacji przez npm uruchom Skribly ponownie.
6. Po każdej zmianie `PATH` uruchom Skribly ponownie; środowisko jest odczytywane raz, przy starcie.

## Claude Code tylko w rozszerzeniu VS Code

Skribly znajduje plik wykonywalny Claude Code w rozszerzeniach VS Code, Cursora, Windsurfa i VSCodium, w `~/.claude/local`, w `~/.local/bin` oraz, na macOS, w aplikacji Claude. Jeśli go nie znajdzie, po aktualizacji rozszerzenia otwórz edytor raz, żeby rozpakował ten plik, albo zainstaluj CLI poleceniem `npm install -g @anthropic-ai/claude-code`. Wtyczki Claude wymagają działającego `claude`.

## Terminal się nie otwiera

**Objaw:** **Nowa sesja** kończy się błędem dotyczącym `pty.node`, `node-pty` lub `posix_spawnp failed`.

- Sprawdź, czy `$SHELL` wskazuje istniejący plik. Skribly uruchamia `$SHELL` (domyślnie `/bin/zsh` na macOS i `/bin/bash` w Linuksie), a w Windows `pwsh` lub `powershell.exe`.
- **Pierwsze znaki znikają:** polecenie agenta jest wpisywane 400 ms po starcie powłoki, a bardzo wolny prompt może je zgubić. Uruchom agenta ręcznie w panelu albo przyspiesz powłokę.

## `Ctrl+B` nie dociera do programu w terminalu

To zamierzone: `Ctrl+B` jest prefiksem paneli. Zmień prefiks w tmux albo skrót w swoim programie. Zobacz [Skróty klawiszowe](/pl/agent/shortcuts/).

## Agent pokazuje zły stan

Kliknij plakietkę stanu w panelu. Okno **Dlaczego taki stan?** pokazuje źródło, regułę i ekran. Program, który ciągle coś przerysowuje, na przykład zegar lub pasek postępu, jest pokazywany jako *pracuje*.

## macOS: „can't be opened” lub „is damaged”

Aplikacja nie jest podpisana ani notaryzowana. Użyj **System Settings → Privacy & Security → Open Anyway** albo:

```bash
xattr -dr com.apple.quarantine "/Applications/Skribly Agent.app"
```

## Windows: SmartScreen

„Windows protected your PC” → **More info → Run anyway**. Program antywirusowy może też spowolnić pierwsze uruchomienie terminala.

## Linux: AppImage i sandbox

- **Nie startuje:** `chmod +x Skribly-*.AppImage`.
- **`libfuse.so.2: cannot open`:** zainstaluj FUSE 2 (`sudo apt install libfuse2`, a w Ubuntu 24.04 `libfuse2t64`) albo uruchom `./Skribly-*.AppImage --appimage-extract-and-run`.
- **„The SUID sandbox helper binary was found, but is not configured correctly”** albo błąd dotyczący user namespaces w Ubuntu 23.10+ z AppArmor: zainstaluj pakiet `.deb` albo, jako obejście, uruchom z `--no-sandbox`, co osłabia izolację.
- **Tokeny nie przetrwają restartu:** nie ma keyringa (gnome-keyring ani KWallet), więc Skribly trzyma tokeny tylko w pamięci. Zainstaluj keyring i odblokuj go.

## Port przeglądarki jest zajęty

**Objaw:** po włączeniu **Udostępnij przeglądarkę agentom** i restarcie pasek stanu tego nie pokazuje albo agent łączy się z inną przeglądarką Chrome.

1. Sprawdź, kto używa portu: `lsof -i :9333` (macOS, Linux) lub `netstat -ano | findstr 9333` (Windows).
2. Zmień port w **Ustawienia → Przeglądarka dla agentów → Port**.
3. Uruchom Skribly ponownie i zaktualizuj adres w konfiguracji MCP agenta.

## Tracker zwraca 401 lub 403

| Tracker | Sprawdź |
| --- | --- |
| Skribly Tracker | Token ma uprawnienie `write`, jeśli zmieniasz zgłoszenia, i nie wygasł |
| Jira Cloud | Wypełniony jest adres e-mail konta, a token to token API z id.atlassian.com, a nie hasło |
| Jira Server / Data Center | Adres e-mail jest pusty, a token to Personal Access Token |
| Redmine | Administrator włączył REST API; klucz pochodzi z **My account → API access key** |
| GitHub | Token fine-grained ma dostęp Issues do właściwych repozytoriów, a organizacja go zatwierdziła |
| GitLab | Token ma zakres `read_api` i nie wygasł |
| Linear | To osobisty klucz API, a nie OAuth |

„Not found (HTTP 404)” zwykle oznacza zły adres, na przykład Redmine z `/issues` na końcu albo klucz GitHub lub GitLab bez repozytorium (`owner/repo#123`).

## Git odmawia usunięcia worktree

„contains modified or untracked files”: worktree ma niezatwierdzone zmiany, a Skribly pyta, czy wymusić usunięcie. Żeby je zachować, najpierw zrób commit albo `git stash`. Gałąź zostaje w obu przypadkach. „is locked”: uruchom `git worktree unlock <path>`. „is not a working tree”: folder usunięto ręcznie; `git worktree prune` to posprząta.

## Gałąź zadania nie została utworzona

**Zacznij z agentem** tworzy gałąź tylko w czystym repozytorium; nieśledzone pliki nie mają znaczenia. Zrób commit albo stash, a potem zacznij jeszcze raz. `TASK.md` i `STATE.md` powstają i tak.

## Hook bez stopek AI nic nie robi

- Repozytorium używa `core.hooksPath` (husky, lefthook), więc git nie czyta `.git/hooks`. Dodaj czyszczenie do własnego hooka `commit-msg`.
- Commit z `--no-verify` pomija hooki.

## Przycisk Agent przy commitach jest nieaktywny

Potrzebuje plików dodanych do indeksu i agenta z trybem bez interfejsu: Claude Code, Codex, Cursor, Gemini, OpenCode, Copilot lub Aider.

## Audyt WCAG lub SEO zgłasza, że strona nie załadowała się w ciągu 30 sekund

Uruchom serwer deweloperski projektu i sprawdź adres, który domyślnie pochodzi z **Ustawienia → Projekty → Adres aplikacji w trybie dev**. Strona za logowaniem pokaże ekran logowania, bo audyt działa w osobnej, pustej sesji.

## Skille się nie pobierają

Sprawdź, czy `git` jest w `PATH`, czy działa sieć i czy adres w **Ustawienia → Repozytorium skilli** jest poprawny. Adres SSH wymaga klucza w `ssh-agent`.

## Nadal nie działa

- Katalog danych znajdziesz w **Ustawienia → Aktualizacje → Katalog danych → Pokaż**.
- Uruchomienie aplikacji z terminala pokazuje błędy procesu głównego. Na macOS: `"/Applications/Skribly Agent.app/Contents/MacOS/Skribly Agent"`.
- Zgłoś problem, podając wersję z **Pomoc → O aplikacji** i swój system; w sprawach wrażliwych postępuj zgodnie z opisem na stronie [Bezpieczeństwo](/pl/security/).
