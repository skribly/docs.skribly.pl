# Terminale i sesje

> Uruchamianie sesji agentów w Skribly Agent — tryb terminala i czatu, panel agenta, wznawianie po ponownym uruchomieniu, maszyny SSH, rozsyłanie wiadomości i przekazywanie pracy.

Sesja to pojedynczy agent albo zwykła powłoka uruchomiona w panelu. Uruchom ją z **Agenci → Nowa sesja**, skrótem `Ctrl+B a`, przyciskami podziału w nagłówku panelu albo z palety poleceń (**Nowa sesja: …**).

## Nowa sesja

| Pole | Znaczenie |
| --- | --- |
| Agent | Karta agenta albo **Terminal** dla zwykłej powłoki. Przy agentach, którzy nie są zainstalowane, wyświetla się polecenie instalacji. |
| Projekt | Katalog, w którym rozpocznie się sesja |
| Kopia robocza | **główna**, istniejący worktree albo **+ Nowy worktree…** |
| Maszyna | **Ten komputer** albo maszyna SSH z ustawień |
| Nazwa dla CLI i innych agentów | `[a-z][a-z0-9_-]{0,31}`, na przykład `reviewer` albo `impl-1` |
| Tryb | **Terminal** (agent interaktywny) albo **Czat** (bez interfejsu) |
| Może zmieniać pliki | Tylko w trybie czatu: czy agent może edytować pliki |
| Pierwsza wiadomość | Wysyłana od razu; `Enter` uruchamia sesję |

W trybie terminala Skribly otwiera powłokę logowania (`$SHELL -l`; w systemie Windows `pwsh` lub `powershell.exe`) i wpisuje do niej polecenie agenta, przekazując pierwszą wiadomość jako argument. Agentom, którzy nie przyjmują wiadomości jako argumentu, tekst jest wpisywany po uruchomieniu. Każda sesja ma zmienną środowiskową `SKRIBLY_TERMINAL=<id>`.

:::caution
Terminale agentów działają z Twoimi uprawnieniami. Agent uruchomiony w terminalu może zrobić wszystko, co możesz zrobić w terminalu.
:::

## Tryb czatu

Tryb czatu uruchamia agenta bez interfejsu: każda wiadomość jest osobnym wywołaniem z identyfikatorem sesji z poprzedniej odpowiedzi, dzięki czemu agent pamięta rozmowę, mimo że między wiadomościami nie działa żaden proces. Panel pokazuje tekst, wywołania narzędzi i błędy.

| Klawisz | Działanie |
| --- | --- |
| `Enter` | Wyślij |
| `Shift+Enter` | Nowy wiersz |
| **Przerwij** | Zatrzymaj odpowiedź |

| Agent | Może zmieniać pliki | Tylko do odczytu |
| --- | --- | --- |
| Claude Code | `--permission-mode acceptEdits` | `--permission-mode plan` |
| Codex | `--full-auto` | `--sandbox read-only` |
| Cursor Agent | `--force` | brak flagi |
| Gemini CLI | `--approval-mode auto_edit` | brak flagi |
| Copilot CLI | `--allow-all-tools` | brak flagi |
| Aider | brak flagi | `--dry-run` |
| OpenCode | brak przełącznika | brak przełącznika |

Amp, Droid, Qwen Code, Goose i Crush również mają tryb bez interfejsu. Kimi CLI działa tylko w terminalu. Czaty są przechowywane w pamięci i nie wracają po restarcie; kontynuuj rozmowę w terminalu, na przykład poleceniem `claude --resume`. Ten sam tryb bez interfejsu napędza [potoki](/pl/agent/features/#potoki) oraz przycisk **Agent** do wiadomości commitów.

## Panel agenta

Panel po prawej stronie otwiera się nad dowolnym widokiem po naciśnięciu `⌘⇧A` (`Ctrl+Shift+A`). Każdy projekt ma własne rozmowy, które wracają po restarcie.

| Narzędzie | Działanie |
| --- | --- |
| Menu agenta | Wybiera agenta lub instaluje brakującego. Zmiana agenta rozpoczyna nową rozmowę. |
| Model | Domyślny model, lista modeli agenta albo wpisana przez Ciebie nazwa |
| Wysiłek | Tylko Claude Code: `--effort` od low do max |
| `/` | Polecenia agenta, projektu, folderu domowego i wtyczek; `/clear` rozpoczyna od nowa |
| Wtyczki | Włącza i wyłącza wtyczki Claude Code dla następnej wiadomości |
| Spinacz | Dołącza pliki; możesz też przeciągnąć pliki lub wkleić obraz |
| Edycja / Plan | Określa, czy agent może zmieniać pliki |
| Remote | Uruchamia sesję Claude Code z Remote Control |
| Ikona terminala | Kontynuuje tę samą rozmowę w terminalu |

Pod polem wiadomości widać czas sesji, subagentów, kontekst i koszt, o ile agent je zgłasza. Terminale agentów mają te same narzędzia na pasku pod panelem; pasek się wstrzymuje, gdy agent zadaje pytanie, bo tekst wysłany w tym momencie byłby odpowiedzią na nie.

## Wznawianie po ponownym uruchomieniu

Opcja **Ustawienia → Sesje i sterowanie → Odtwarzaj sesje po restarcie** jest domyślnie włączona.

- Karty, podziały i panele wracają na swoje miejsca z tymi samymi nazwami, worktree i zadaniami.
- Agenci z natywnym identyfikatorem sesji wznawiają rozmowę i dostają plakietkę **wznowiony**:

| Agent | Wznawianie |
| --- | --- |
| Claude Code, Cursor Agent, Droid, Qwen Code | `--resume <id>` |
| Codex | `codex resume <id>` |
| Copilot CLI | `--resume=<id>` |
| OpenCode, Crush, Kimi CLI | `--session <id>` |
| Goose | `goose session --resume --session-id <id>` |
| Agent niestandardowy | Argumenty wznawiania z jego definicji (`{id}`) |

- Pozostałe panele (powłoki, Gemini CLI, Aider, Amp, sesje SSH) uruchamiają nową powłokę w tym samym katalogu, ze wskazówką, jakim poleceniem ponownie uruchomić agenta.

Zamknięcie aplikacji kończy wszystkie procesy terminala; nie ma serwera w tle, jak w tmux. Ciągłość zapewniają natywne wznawianie w agentach oraz pliki stanu (`STATE.md`, `handoff.md`).

## Maszyny SSH

Agent może pracować na serwerze, a jego panel pozostaje w Skribly.

1. **Ustawienia → Sesje i sterowanie → Maszyny SSH**: podaj nazwę i cel `ssh`, czyli `user@host` albo alias z `~/.ssh/config`, a potem kliknij **Dodaj**.
2. W oknie **Nowa sesja** wybierz maszynę w polu **Maszyna**.

Skribly otwiera `ssh -t <host>`, przechodzi do katalogu sesji (lub do katalogu domowego, jeśli katalog sesji nie istnieje na tej maszynie), uruchamia powłokę logowania i uruchamia agenta. Agent musi być zainstalowany na serwerze. Uwierzytelnianiem zarządza OpenSSH, korzystając z kluczy w `ssh-agent` albo `~/.ssh/config`; Skribly nie przechowuje haseł.

## Rozsyłanie wiadomości

Wyślij jeden prompt do kilku agentów naraz, na przykład „uruchom testy i opisz błędy”.

1. Zaznacz pole wyboru w nagłówkach paneli.
2. Wpisz tekst w polu na pasku kart („Do N wybranych…”).
3. Naciśnij `Enter`.

Tekst dociera do każdego uruchomionego panelu jako wklejenie w trybie bracketed paste, a po nim Enter. Panele z zakończonym procesem są pomijane.

## Przekazywanie pracy

Przycisk przekazywania w nagłówku panelu agenta przekazuje pracę innemu agentowi bez odtwarzania rozmowy.

1. **Wyślij prośbę**: bieżący agent zapisuje stan (co zrobiono, następny krok, decyzje i otwarte pytania) w `.skribly/tasks/<KEY>/STATE.md` dla zadania albo w `.skribly/handoff.md` w pozostałych przypadkach.
2. **Uruchom** wybranego agenta: nowy agent startuje w tym samym katalogu i worktree z poleceniem, by przeczytać plik stanu i `TASK.md`, sprawdzić `git status` i `git diff`, podsumować sytuację w trzech punktach i kontynuować.

Nowy agent zaczyna od kilkudziesięciu wierszy stanu zamiast od całego zapisu rozmowy.
