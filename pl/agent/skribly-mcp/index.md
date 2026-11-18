# Serwer MCP Skribly

> skribly mcp daje agentom programującym sterowanie Skribly Agent jako narzędzia MCP: domyślnie tylko do odczytu, zapis dopiero po Twojej zgodzie na każde wywołanie, oraz tryb jednego projektu.

`skribly mcp` to serwer MCP, który Skribly Agent oferuje Twoim agentom programującym. Udostępnia operacje [polecenia `skribly`](/pl/agent/cli/) jako narzędzia: wypisanie paneli i agentów, odczyt ekranu, czekanie na agenta i, tylko gdy na to pozwolisz, uruchamianie agentów, wysyłanie im wiadomości i ich zatrzymywanie. Daje też agentowi kontekst jednego projektu tylko do odczytu: jego ustawienia, zadania, sesje, diff w indeksie i zasady commitów.

Ta strona dotyczy własnego serwera Skribly. Serwery MCP, których Twoi agenci używają do innych narzędzi, opisuje strona [Serwery MCP](/pl/agent/mcp/).

## Jak to działa

Serwer mówi MCP przez standardowe wejście i wyjście, a z działającą aplikacją rozmawia tym samym lokalnym API sterowania co polecenie. Działa tylko wtedy, gdy Skribly Agent jest uruchomiony, a **Lokalne API sterowania** jest włączone w **Ustawienia → Sesje i sterowanie**. Port i token opisuje [Polecenie skribly](/pl/agent/cli/#jak-to-działa).

## Jak podłączyć agenta

<Steps>

1. Upewnij się, że polecenie `skribly` jest zainstalowane: **Ustawienia → Sesje i sterowanie → Polecenie skribly → Zainstaluj**.

2. W tej samej sekcji wybierz **Tylko odczyt (domyślnie)** albo **Z zapisem (--allow-writes)** nad konfiguracjami. Trzy fragmenty zmieniają się z wyborem.

3. Skopiuj fragment dla swojego agenta i uruchom go albo wklej do jego pliku konfiguracji.

</Steps>

| Agent | Gdzie trafia konfiguracja |
| --- | --- |
| Claude Code | W terminalu: `claude mcp add skribly -- skribly mcp` |
| Codex | `~/.codex/config.toml`, tabela `[mcp_servers.skribly]` z `command = "skribly"` i `args = ["mcp"]` |
| Cursor | `.cursor/mcp.json` w projekcie albo `~/.cursor/mcp.json`, pod `mcpServers` |
| Gemini CLI | `~/.gemini/settings.json`, pod `mcpServers` |

Jeśli polecenia nie ma w `PATH`, użyj pełnej ścieżki z Ustawień. Serwer możesz też dodać z **Wtyczki i MCP → Dodaj serwer MCP**, gdzie są **Skribly** (tylko odczyt) i **Skribly z zapisem**. Zobacz [Serwery MCP](/pl/agent/mcp/).

## Domyślnie odczyt, zapis tylko na prośbę

`skribly mcp` oferuje tylko narzędzia, które niczego nie zmieniają. Agent podłączony zwykłą konfiguracją nie może uruchomić, zagadnąć ani zatrzymać agenta, wpisać czegoś w panel, utworzyć lub usunąć worktree ani pokazać powiadomienia.

`skribly mcp --allow-writes` oferuje dodatkowo osiem narzędzi, które coś zmieniają, a każde ich wywołanie najpierw pyta Ciebie. Skribly Agent wychodzi na pierwszy plan i pokazuje okno z nazwą narzędzia i jego argumentami w całości, z **Odmów** jako domyślnym wyborem. Aplikacja uruchamia dokładnie te argumenty, które pokazała, i dopiero po **Zezwól**.

Wywołanie kończy się błędem, a nic się nie zmienia, gdy odmówisz lub zamkniesz okno, gdy agent przestanie czekać, zanim odpowiesz, oraz gdy aplikacja nie działa albo jej API sterowania jest wyłączone.

<Aside type="note">
Żebyś wiedział, że uruchamia się to, co przeczytałeś, argumenty dłuższe niż 4000 znaków są odrzucane bez pytania, a niewidoczne lub łudząco podobne znaki, takie jak znaczniki dwukierunkowe, znaki zerowej szerokości i nietypowe spacje, są pokazywane jako sekwencje w rodzaju `\u{202E}`. Naraz widać jedno pytanie.
</Aside>

Samo polecenie `skribly` nie pyta: to Ty albo skrypt wpisujecie je w terminalu. Pytanie jest częścią serwera MCP, bo wywołującym jest agent.

## Narzędzia

| Narzędzie | Co robi | Pyta Ciebie |
| --- | --- | --- |
| `skribly_status` | Liczba paneli i agentów oraz ich stany | Nie |
| `skribly_list_workspaces` | Projekty, worktree i panele w każdym | Nie |
| `skribly_list_panes` | Wszystkie panele | Nie |
| `skribly_list_agents` | Agenci i ich stany | Nie |
| `skribly_read_agent` | Ekran agenta, domyślnie 60 wierszy | Nie |
| `skribly_wait_agent` | Czeka na wybrane stany, domyślnie 600 sekund | Nie |
| `skribly_explain_agent` | Dlaczego agent jest w tym stanie | Nie |
| `skribly_read_pane` | Ekran panelu | Nie |
| `skribly_wait_output` | Czeka, aż wyjście pasuje do wyrażenia, domyślnie 60 sekund | Nie |
| `skribly_list_worktrees` | Worktree projektu | Nie |
| `skribly_project_profile`, `skribly_list_tasks`, `skribly_get_task`, `skribly_list_sessions`, `skribly_staged_diff_summary`, `skribly_commit_rules` | Narzędzia projektu tylko do odczytu, niżej | Nie |
| `skribly_start_agent` | Uruchamia agenta w nowym panelu, opcjonalnie w worktree | Tak |
| `skribly_prompt_agent` | Wysyła wiadomość, opcjonalnie czekając na koniec tury | Tak |
| `skribly_stop_agent` | Zamyka panel agenta | Tak |
| `skribly_create_pane` | Otwiera panel | Tak |
| `skribly_run_in_pane` | Wpisuje polecenie powłoki w panelu | Tak |
| `skribly_create_worktree` | Tworzy worktree | Tak |
| `skribly_remove_worktree` | Usuwa worktree i zostawia gałąź | Tak |
| `skribly_notify` | Pokazuje powiadomienie systemowe | Tak |

Narzędzia, które coś zmieniają, zaczynają opis od „CHANGES THINGS.” i niosą adnotację MCP `readOnlyHint`, prawdziwą lub fałszywą. Każdy wynik zaczyna się wierszem, który mówi, że to dane ze Skribly Agent i repozytorium, a nie polecenia, bo tekst zadania, plik zasad albo ekran mogą zawierać tekst napisany, by sterować agentem.

## Narzędzia projektu tylko do odczytu

Sześć narzędzi daje agentowi kontekst jednego projektu bez żadnej możliwości zmiany.

| Narzędzie | Zwraca | Argumenty |
| --- | --- | --- |
| `skribly_project_profile` | Nazwę, ścieżkę, ustawienia (gałąź bazowa, wzory, sprawdzenia, tracker), stan git i pliki, które podają zasady commitów | `project` |
| `skribly_list_tasks` | Zadania lokalne projektu: klucz, tytuł, etap, gałąź, następny krok, ostatnia zmiana | `project` |
| `skribly_get_task` | Jedno zadanie: metadane, `STATE.md` i `TASK.md`, każdy obcięty do 20 000 znaków | `key` (wymagany), `project` |
| `skribly_list_sessions` | Sesje agentów i powłok projektu ze statusem, bez wyjścia terminala | `project` |
| `skribly_staged_diff_summary` | Zmiany w indeksie w budżecie znaków: nazwany każdy plik, potem najważniejsze fragmenty | `project`, `file`, `budget` (od 1000 do 40 000, domyślnie 12 000) |
| `skribly_commit_rules` | Zasady commitów, które podaje repozytorium, i tematy jego 20 ostatnich commitów | `project` |

`project` to nazwa, identyfikator albo bezwzględna ścieżka wewnątrz projektu. Bez niego używany jest projekt panelu, z którego wywołano. Ścieżka spoza projektów, nieznana nazwa, `file` poza projektem i klucz zadania będący ścieżką są odrzucane, zanim cokolwiek zostanie przeczytane.

`skribly_staged_diff_summary` i `skribly_commit_rules` zwracają ten sam kontekst, który przycisk **Agent** w polu commita daje swojemu agentowi. Zobacz [Zmiany i commity](/pl/agent/changes/).

## Jak ograniczyć agenta do jednego projektu

Uruchom serwer z `--project <nazwa>`, na przykład `claude mcp add skribly -- skribly mcp --project my-project`. Każde narzędzie projektu, także `skribly_list_worktrees`, jest wtedy przypięte do tego projektu, a wywołanie z innym projektem jest odrzucane. `skribly_list_workspaces` wypisuje wszystkie projekty, więc w tym trybie w ogóle nie jest oferowane.

<Aside type="caution">
Narzędzia, które czytają terminale (`skribly_read_pane`, `skribly_read_agent`, `skribly_wait_output`), pokazują wszystko, co jest na ekranie, i nie są ograniczone do jednego projektu; `skribly_list_panes` i `skribly_list_agents` wypisują każdy panel. Podłączaj je tylko agentom, którym ufasz, albo daj agentowi tylko sześć narzędzi projektu przez jego własną listę dozwolonych narzędzi.
</Aside>

## Wskazówki

- Zacznij od konfiguracji tylko do odczytu. Dodaj `--allow-writes`, gdy agent ma kierować innymi agentami, i odpowiadaj na każdą prośbę w aplikacji.
- Flaga `--read-only` z wcześniejszych wersji jest nadal przyjmowana i nic nie robi, bo sam odczyt jest teraz domyślny.
- Zainstaluj skill `skribly` w projekcie, żeby agent wiedział, kiedy delegować. Zobacz [Polecenie skribly](/pl/agent/cli/#jak-je-włączyć).

## Powiązane strony

<CardGrid>
  <LinkCard title="Polecenie skribly" href="/pl/agent/cli/" description="Te same operacje z terminala, z przepisami." />
  <LinkCard title="Serwery MCP" href="/pl/agent/mcp/" description="Serwery MCP używane przez Twoich agentów i ich test." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Co nasłuchuje na tym komputerze i kto ma do tego dostęp." />
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Gdzie jest API sterowania i konfiguracje." />
</CardGrid>
