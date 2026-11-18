# Dane i sieć

> Co Skribly Agent zapisuje i gdzie, z czym się łączy, jakie foldery czyta i zapisuje, jakie porty lokalne otwiera, przełącznik Bez połączeń sieciowych i co zostaje po odinstalowaniu.

Skribly Agent działa na Twoim komputerze i nie wymaga konta. Nie wysyła telemetrii, raportów awarii ani identyfikatorów i nie ma własnego serwera. **Ustawienia → Prywatność i sieć** wypisuje każde miejsce, w którym sama aplikacja łączy się z siecią, każdy folder poza własnym folderem danych, który czyta lub zapisuje, i każdy port lokalny, który otwiera, z informacją co, kiedy i po co. Lista to dane, a test zawodzi, gdy kod ma połączenie, folder lub port, którego lista nie nazywa.

![Ustawienia, Prywatność i sieć: przełącznik Bez połączeń sieciowych aplikacji, wyłączony, i lista tego, czego przełącznik nie obejmuje](../../../../assets/screens/agent-privacy.webp)

## Otwórz widok

- Otwórz **Ustawienia** i wybierz **Prywatność i sieć** albo
- przełącz **Bez połączeń sieciowych aplikacji** w menu ikony w zasobniku lub na pasku menu; przełącznik idzie w parze z Ustawieniami.

## Jak wyłączyć sieć

<Steps>

1. Otwórz **Ustawienia → Prywatność i sieć**.

2. Włącz **Bez połączeń sieciowych aplikacji**.

3. Każde połączenie z listy poniżej kończy się teraz spokojnym komunikatem „wyłączone”, zanim cokolwiek zostanie wysłane. Adresy `localhost`, `127.0.0.1` i `::1` zostają otwarte, bo nigdy nie opuszczają komputera.

</Steps>

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Bez połączeń sieciowych aplikacji** | Zatrzymuje wszystkie połączenia samej aplikacji, zanim cokolwiek zostanie wysłane. Obejmuje też przekierowania: żądanie na adres lokalny idzie tylko za lokalnymi przekierowaniami, najwyżej pięcioma. Ukryte okno audytu anuluje każde żądanie, które nie jest lokalne. | Wyłączone |

## Czego przełącznik nie obejmuje

- **Agenci w panelach.** Claude Code, Codex, Cursor i pozostali to programy, które uruchamiasz. Mają własne połączenia, tokeny i ustawienia.
- **Agenci uruchomieni w tle.** Propozycja commita, potoki i zadania uruchamiane z narzędzi MCP startują tych samych agentów bez panelu. Ich ruch należy do agenta.
- **Serwery MCP i `npx`.** Polecenia `claude mcp` i `npx` uruchamiane z konfiguracji MCP tworzą własny ruch.
- **Terminale i SSH.** Powłoka, polecenia i połączenia SSH w panelach działają jak w zwykłym terminalu.
- **Widok Przeglądarka.** Strony, które otwierasz, ładuje sama przeglądarka. Tekst, który nie jest adresem, trafia do wyszukiwarki DuckDuckGo.
- **Linki.** Link otwiera się w przeglądarce systemowej dopiero po kliknięciu.

## Połączenia aplikacji

Każde połączenie przechodzi przez jeden mały moduł aplikacji, a test sprawdza, że nie istnieje żadne inne.

| Połączenie | Dokąd | Kiedy | Wysyła token |
| --- | --- | --- | --- |
| Aktualizacje aplikacji | Publiczne miejsce wydań Skribly Agent na GitHubie i serwer plików, na który przekierowuje | 8 sekund po starcie i co 4 godziny przy włączonym **Aktualizuj automatycznie** oraz po naciśnięciu **Sprawdź aktualizacje** | Nie |
| Tłumaczenie interfejsu | `translate.googleapis.com` i `api.mymemory.translated.net` | Tylko dla języka interfejsu innego niż polski i angielski, którego nie ma jeszcze w pamięci podręcznej; zobacz [Języki](/pl/agent/languages/) | Nie |
| Motywy z Open VSX | `open-vsx.org` | Gdy szukasz w katalogu motywów lub instalujesz motyw | Nie |
| Rozszerzenie edytora | Sklep Twojego edytora, przez własne polecenie edytora | Tylko gdy instalujesz rozszerzenie w edytorze | Nie |
| Trackery zadań | Adres każdego dodanego trackera | Gdy otwierasz zadania, wybierasz zadanie, komentujesz, zmieniasz status, logujesz czas lub testujesz połączenie | Tak, tylko do tego trackera |
| Konta Git i aktywność | `api.github.com`, `gitlab.com`, `codeberg.org`, `bitbucket.org`, `dev.azure.com` albo Twój własny serwer Git | Gdy łączysz konto, otwierasz listę repozytoriów lub kartę aktywności | Tak, tylko do tego serwera |
| Klonowanie repozytorium | Serwer repozytorium | Tylko gdy klonujesz; token połączonego konta służy wyłącznie temu klonowi | Tak, tylko do tego serwera |
| Push i pull | Serwer, na który wskazuje origin projektu | Tylko gdy naciskasz push lub pull; git używa własnych kluczy lub menedżera poświadczeń | Nie |
| Repozytorium skilli | `github.com/skribly/agent-skills` albo adres z Ustawień | Gdy pobierasz lub synchronizujesz repozytorium skilli | Nie |
| Pull requesty przez `gh` | `github.com`, przez GitHub CLI | Gdy otwierasz zmiany projektu, którego origin jest na GitHubie, i gdy tworzysz pull request | Nie |
| Logowanie `gh` i `glab` | GitHub albo wybrany serwer GitLab | Gdy otwierasz okno łączenia konta Git | Nie |
| Wtyczki Claude Code | Sklep wtyczek Claude Code, przez `claude` | Gdy otwierasz listę wtyczek i gdy instalujesz wtyczkę | Nie |
| Sprawdzenie serwera MCP | Adres sprawdzanego serwera MCP | Tylko gdy naciskasz sprawdzenie przy serwerze z adresem; adres lokalny działa także przy wyłączonej sieci | Tak, tylko do tego serwera |
| Obrazy Dockera | Rejestry z pliku compose, przez Dockera | Tylko gdy uruchamiasz projekt compose lub pobierasz jego obrazy | Nie |
| Audyt strony (WCAG i SEO) | Adres, który podasz | Tylko gdy uruchamiasz audyt strony | Nie |
| Audyt zależności | `api.osv.dev`: nazwy i wersje pakietów z plików blokad, nigdy kod | Tylko gdy uruchamiasz audyt bezpieczeństwa projektu z plikami blokad | Nie |
| Instalacja narzędzi | To, co zawiera pokazane polecenie (`brew`, `winget`, `npm`, `curl`) | Tylko gdy naciskasz instalację lub logowanie agenta albo narzędzia | Nie |

## Foldery poza katalogiem danych

| Co | Gdzie | Dostęp |
| --- | --- | --- |
| Sesje agentów | `~/.claude/projects`, `~/.codex/sessions`, `~/.copilot/session-state` albo foldery z `CLAUDE_CONFIG_DIR`, `CODEX_HOME`, `COPILOT_HOME` | Tylko odczyt: liczenie tokenów, historia sesji i wznawianie. Do historii czytany jest tylko początek każdego pliku |
| Konfiguracja agentów | `~/.claude.json`, `~/.claude/settings.json`, `~/.claude/plugins`, `~/.codex/config.toml`, `~/.cursor/mcp.json`, `~/.gemini/settings.json` oraz `.claude`, `.cursor`, `.gemini` w projekcie | Odczyt; zapis dopiero po potwierdzeniu zmiany MCP, a przy kopiowaniu wpisu do innego agenta najpierw powstaje kopia pliku |
| Polecenia i skille agentów | `.claude/commands`, `.claude/skills`, `.agents/skills`, `~/.claude/skills`, `~/.codex/prompts`, `~/.cursor/commands`, `~/.gemini/commands`, `~/.config/opencode/command` | Tylko odczyt |
| Foldery projektów | Dodane projekty i folder wybrany do klonowania | Odczyt; zapis tylko z tego, co robisz: edycje, indeks, commit, zmiany gałęzi, klony, `.skribly`, `.cursor/rules` i skille |
| Foldery worktree | `~/.skribly/worktrees` albo folder z Ustawień | Odczyt i zapis |
| Plik lokalnego API | `~/.skribly/control.json` | Zapisywany przy każdym starcie, gdy lokalne API jest włączone; czytelny tylko dla Ciebie |
| Polecenie `skribly` | `~/.local/bin/skribly` albo `%LOCALAPPDATA%\Skribly\bin` | Zapis tylko gdy instalujesz polecenie |
| Rozszerzenia edytorów | `~/.vscode/extensions`, `~/.cursor/extensions`, `~/.windsurf/extensions`, `~/.vscode-oss/extensions` | Tylko odczyt: pliki JSON motywów, kod rozszerzeń nie jest uruchamiany |
| Foldery kodu dla aktywności | `~/Developer`, `~/Projects`, `~/code` i foldery, które dodasz | Tylko odczyt: historia commitów |
| Pobrania z Claude Design | `~/Downloads/Skribly Design` | Zapis, gdy sam pobierasz plik na tej karcie |
| Pakiet aktualizacji | Folder tymczasowy systemu (`skribly-update-…`) | Zapis podczas aktualizacji na macOS |
| Miejsca narzędzi | `PATH`, `~/.local/bin`, `/opt/homebrew/bin`, `/usr/local/bin`, `~/.claude/local`, ścieżki Dockera | Tylko odczyt: sprawdza, że programy istnieją, i pyta o ich wersję |
| Pliki innych narzędzi | Herdr i foldery agentów | Tylko odczyt, tylko gdy otwierasz **Import i eksport** i naciskasz podgląd |
| Archiwum eksportu i kopie importu | Wybrane archiwum i folder kopii w katalogu danych | Odczyt i zapis, tylko po eksporcie lub imporcie |
| Folder startowy panelu | Folder projektu albo Twój folder domowy | Tylko tam, gdzie startuje panel; co program tam robi, zależy od niego |
| Procesy paneli | Lista procesów systemu i liczniki pamięci | Tylko odczyt, co 3 sekundy, tylko gdy widok **Zasoby** jest otwarty, a okno widoczne |

## Porty

| Port | Domyślnie | Przypięty do | Kto ma dostęp |
| --- | --- | --- | --- |
| Chrome DevTools Protocol | Wyłączony; `9333` po włączeniu udostępniania przeglądarki | `127.0.0.1` | Każdy program na tym komputerze, bez uwierzytelniania. Widzi wszystkie karty, także zalogowane profile. Otwiera się przy następnym starcie aplikacji |
| Lokalne API sterowania | Włączone, losowy wolny port | `127.0.0.1` | Procesy, które odczytają token z `~/.skribly/control.json` |

<Aside type="caution">
Włączaj udostępnianie przeglądarki tylko na czas pracy z agentami, a lokalne API sterowania wyłącz w **Ustawienia → Sesje i sterowanie**, jeśli nie używasz polecenia `skribly` ani serwera MCP. Zobacz [Przeglądarka](/pl/agent/browser/).
</Aside>

## Co aplikacja zapisuje

Katalog danych trzyma ustawienia, projekty, układ, sesje, zaszyfrowane tokeny, repozytorium skilli, pobrane motywy, kopie zapasowe, profile Przeglądarki i skrypty `skribly` paneli. **Ustawienia → Aktualizacje → Katalog danych** pokazuje, gdzie jest; zobacz [Ustawienia](/pl/agent/settings/#katalog-danych).

| Dane | Gdzie | Ochrona |
| --- | --- | --- |
| Tokeny trackerów i Git | `secrets.json` w katalogu danych | Zaszyfrowane magazynem haseł systemu; zobacz niżej |
| Konta trackerów | `trackers.json` | Zwykły JSON, bez kluczy |
| Ustawienia, projekty, układ i potoki | Pliki JSON w katalogu danych | Zwykły JSON |
| Wyłączone serwery MCP | `mcp-stash.json` | Zwykły JSON; może zawierać klucze z konfiguracji serwera |
| Logowania w kartach przeglądarki | Osobne profile przeglądarki w katalogu danych | Ciasteczka przeglądarki |
| Treść zadań | `.skribly/tasks/` w projekcie | Wyłączona z gita |
| Token API sterowania | `~/.skribly/control.json` | Czytelny tylko dla Ciebie; losowy, nowy przy każdym starcie |

## Tokeny i pęk kluczy

Tokeny są szyfrowane przez magazyn haseł systemu: Pęk kluczy na macOS, interfejs ochrony danych Windows i pęk kluczy na Linuksie (GNOME Keyring lub KWallet). Tokeny zapisane przez wcześniejsze wersje nadal się otwierają, a token jest szyfrowany ponownie, gdy system zmieni swój klucz.

- Gdy magazyn jest niedostępny albo odrzuca wywołanie, na przykład zablokowany pęk kluczy, nowy token zostaje w pamięci do zamknięcia aplikacji i jest ponownie oferowany magazynowi przy następnym użyciu. Nigdy nie trafia na dysk jako zwykły tekst.
- Na Linuksie bez GNOME Keyring i KWallet tokeny są tylko zaciemnione. Pierwszy zapis pokazuje jedno ostrzeżenie, które to mówi i wskazuje, jak zainstalować pęk kluczy.
- Sesje agentów uruchamiane przez aplikację dostają tokeny trackerów jako zmienne środowiskowe, żeby skille mogły pobierać zadania. Agent może je odczytać, jak każdy program w Twoim terminalu.
- Archiwa eksportu i importu nigdy nie zawierają tokenów, haseł, kluczy API ani wartości zmiennych środowiskowych MCP.

## Co zostaje po odinstalowaniu

Twoje dane zostają celowo, tak samo jak pliki należące do Twoich projektów i agentów.

| System | Usuwane razem z aplikacją | Zostaje |
| --- | --- | --- |
| macOS (przeciągnij aplikację do Kosza) | Aplikacja i jej obsługa linków | `~/Library/Application Support/Skribly Agent`, plik preferencji, cache, wpis Pęku kluczy `Skribly Agent Safe Storage`, `~/.local/bin/skribly` (nie działa, dopóki go nie usuniesz), `~/.skribly` |
| Windows (Ustawienia → Aplikacje) | Pliki programu, skróty, pamięć podręczna aktualizacji w `%LOCALAPPDATA%\skribly-agent-updater`, polecenie `skribly` i obsługa `skribly://` | `%APPDATA%\Skribly Agent` i `~/.skribly` |
| Linux `.deb` i `.rpm` | `/opt/Skribly Agent`, link `/usr/bin/skribly-agent`, plik desktop i ikony, profil AppArmor w Ubuntu 24.04 i nowszych | `~/.config/Skribly Agent`, `~/.cache/skribly-agent-updater`, wpis w pęku kluczy, `~/.local/bin/skribly`, `~/.skribly` |
| Linux AppImage, Windows przenośny | Usuń plik | Te same dane i `~/.skribly` |

Przed usunięciem `~/.skribly` sprawdź `~/.skribly/worktrees`, czy nie ma tam niezatwierdzonej pracy. Aby usunąć wszystko, skasuj katalog danych, `~/.skribly`, polecenie `skribly` i wpis w Pęku kluczy lub pęku kluczy Linuksa.

## Jak aplikacja Cię chroni

- Okno działa w piaskownicy Electrona bez dostępu do Node.js, wywołuje tylko ustalona listę metod, pokazuje wyłącznie własną stronę i odrzuca każde żądanie uprawnień poza zapisem do schowka i pełnym ekranem.
- Karty podglądu i agentów działają w piaskownicy, bez dostępu do aplikacji, i nie startują na adresie `file:`.
- Polecenia działają bez powłoki, z limitem czasu i limitem wyjścia. Wyjątkiem są pliki `.cmd` i `.bat` w Windows.
- Odczyt, zapis, odrzucanie zmian i wyszukiwanie odrzucają ścieżki poza katalogiem projektu. Rozpakowywanie pakietów odrzuca ścieżki wychodzące poza katalog docelowy.
- Motywy są czytane jako JSON, a kod rozszerzeń nigdy się nie uruchamia.

<Aside type="note">
Terminale agentów działają z Twoimi uprawnieniami. Agent w terminalu może zrobić wszystko, co Ty w terminalu.
</Aside>

## Wskazówki

- Podatność zgłosisz według strony [Bezpieczeństwo](/pl/security/).
- Wyłącz sieć, gdy pracujesz offline: aktualizacje, tłumaczenie i trackery zgłaszają wtedy, że są wyłączone, zamiast zawodzić.

## Powiązane strony

<CardGrid>
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Każda sekcja Ustawień i jej wartości domyślne." />
  <LinkCard title="Aktualizacje" href="/pl/agent/updates/" description="Jak aplikacja aktualizuje się sama." />
  <LinkCard title="Języki" href="/pl/agent/languages/" description="Język interfejsu i tłumaczenie online." />
  <LinkCard title="Serwer skribly MCP" href="/pl/agent/skribly-mcp/" description="Co agenci mogą czytać i zmieniać przez skribly mcp." />
</CardGrid>
