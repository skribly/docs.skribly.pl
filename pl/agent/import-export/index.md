# Import i eksport

> Ustawienia, Import i eksport w Skribly Agent zapisują Twoje dane w jednym zipie bez sekretów, pokazują podgląd importu przed zmianą i czytają inne narzędzia tylko do odczytu.

**Ustawienia**, sekcja **Import i eksport**, robią dwie rzeczy. Zapisują Twoje dane w jednym archiwum, które możesz zabrać na inny komputer. I czytają to, co zbudowałeś już w innych narzędziach, Herdr oraz reguły, polecenia, skille i wpisy MCP Twoich agentów, i proponują wciągnięcie tego. Każdy import najpierw pokazuje podgląd. Nic się nie zmienia, dopóki tego nie zaznaczysz, i nic nie opuszcza Twojego komputera.

![Ustawienia, Import i eksport: podgląd archiwum z projektami, potokami, rozszerzeniami i ustawieniami do zaznaczenia oraz Import z innych narzędzi z Herdr i plikami agentów](../../../../assets/screens/agent-import-export.webp)

## Otwórz widok

- Kliknij **Ustawienia** na pasku aktywności po lewej i wybierz **Import i eksport**, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Ustawienia**.

W Windows i Linuksie zamiast `⌘` używaj `Ctrl`. Wszystko na stronie to natywne pola wyboru, listy i przyciski: `Tab` przesuwa, `Space` zaznacza, a `Enter` naciska.

## Jak wyeksportować dane

<Steps>

1. Pod **Eksport Twoich danych** zaznacz, co ma trafić do archiwum. Każda linia pokazuje, ile pozycji zawiera.

2. Naciśnij **Eksportuj…** i wybierz, gdzie zapisać `.zip`.

3. Naciśnij **Pokaż w folderze**, żeby znaleźć plik.

</Steps>

| Sekcja | Co zawiera |
| --- | --- |
| **Projekty i ich ustawienia** | Nazwę, folder, kolor, przypięcie i ustawienia każdego projektu |
| **Potoki z układem** | Zapisane potoki z układem ich kroków. Nic, jeśli używasz tylko wbudowanych |
| **Rozszerzenia: reguły, prompty, skille, MCP z przełącznikami** | Twoje reguły, prompty, skille, wpisy MCP i polecenia, z zakresem i przełącznikami projektów |
| **Ustawienia aplikacji** | Ustawienia aplikacji |
| **Lista zadań** | Lokalne zadania Twoich projektów: `meta.json` i `STATE.md` każdego folderu w `.skribly/tasks` |
| **Liczby zużycia** | Liczby mapy aktywności, liczba na dzień. Bez opisów commitów, adresów e-mail i nazw repozytoriów |

Czego nigdy nie ma w archiwum: tokenów, haseł i kluczy API (klucze trackerów zostają w pęku kluczy systemu i nie są czytane), wartości zmiennych środowiskowych wpisów MCP (wpis zachowuje same nazwy) ani niczego z dzienników sesji agentów. Dodatkowo każdy ciąg znaków każdego pliku jest sprawdzany, a ten, który wygląda jak sekret albo stoi pod kluczem o takiej nazwie (`token`, `password`, `apiKey` i tak dalej), jest zastępowany przez `••••••`.

### Co jest w archiwum

Archiwum to zwykły zip, deflate bez szyfrowania, więc możesz go otworzyć i przeczytać. Zawiera `manifest.json` i jeden plik JSON na każdą zaznaczoną sekcję: `projects.json`, `pipelines.json`, `extensions.json`, `settings.json`, `tasks.json` i `usage.json`. Manifest podaje format (`skribly-export`), jego wersję, wersję aplikacji, datę i platformę. Archiwum zrobione nowszą wersją aplikacji jest odrzucane.

## Jak zaimportować archiwum

<Steps>

1. Pod **Import z archiwum** naciśnij **Wybierz archiwum…** i wskaż plik.

2. Przeczytaj podgląd. Pokazuje wersję aplikacji i datę archiwum, potem każdą sekcję linia po linii, ze statusem.

3. Zaznacz, co wziąć. Nowe linie są zaznaczone za Ciebie. Linię **inną niż u Ciebie** zaznacz i wybierz, co zrobić: **Zostaw moje** albo **Weź ich (kopia zapasowa moich zostaje)**.

4. Naciśnij **Importuj zaznaczone**. Wynik mówi, ile pozycji zaimportowano i pominięto, i podaje kopię zapasową.

</Steps>

| Status | Znaczenie |
| --- | --- |
| nowe | Nie ma na tym komputerze. Domyślnie zaznaczone |
| inne niż u Ciebie | Istnieje tutaj i się różni. Zaznacz i wybierz **Zostaw moje** albo **Weź ich** |
| takie samo | Już identyczne. Nic do zrobienia |
| pominięte, informacja | Pokazane z powodem. Nie da się zaznaczyć |

Import trzyma się tych zasad:

- Nic nie jest zapisywane, dopóki nie naciśniesz **Importuj zaznaczone**. Linia, która się różni, jest zastępowana tylko wtedy, gdy jest zaznaczona i ustawiona na **Weź ich**.
- Wszystko, co zostaje zastąpione, jest najpierw kopiowane do `backups/import-<time>/` w folderze danych aplikacji, jeden plik JSON na każdą zastąpioną pozycję.
- Rozszerzenia przychodzą wyłączone. Przełączniki projektów z archiwum są wypisane, ale nigdy nie stosowane: rozszerzenie zmienia to, co robi agent, więc włączasz je sam. Zobacz [Rozszerzenia](/pl/agent/extensions/).
- Niektóre ustawienia nigdy nie są brane z archiwum, bo uruchamiają programy, otwierają port albo wskazują inną maszynę: `controlApi`, `customAgents`, `machines`, `shareBrowserWithAgents` i `cdpPort`.
- Zadanie jest zapisywane tylko do projektu, który jest na tym komputerze. Najpierw weź projekt, potem zaimportuj ponownie.
- Liczby zużycia zostają w archiwum jako zapis. Aplikacja liczy je od nowa z Twoich repozytoriów.
- Zepsuty plik pomija tylko własną sekcję. Plik, który nie jest archiwum albo jest uszkodzony, za duży lub ma nazwę wychodzącą poza folder, jest odrzucany z komunikatem.

## Jak zaimportować z innych narzędzi

Pod **Import z innych narzędzi** każde źródło pokazuje, co znaleziono. Aplikacja tylko czyta pliki innego narzędzia, tylko w Twoim folderze domowym (dowiązanie wychodzące poza niego jest odrzucane), i niczego w nich nie zmienia. Niczego nie wysyła.

<Steps>

1. Naciśnij **Podgląd** przy źródle. Przycisk jest wyszarzony, gdy nic nie znaleziono.

2. Przeczytaj listę. Każda pozycja wskazuje swój plik w **Źródło**. Ostrzeżenia są nad nią.

3. Zaznacz pozycje do wzięcia i naciśnij **Importuj zaznaczone**. Wziąć można tylko to, co pokazał podgląd.

</Steps>

| Źródło | Skąd czyta | Czym się staje |
| --- | --- | --- |
| Herdr (aplikacja) | `~/.local/state/herdr-core/*/docs.json` i `terminals.json`, `~/.config/herdr-core`, `~/.config/herdr-app/shared.json` | Projekt na każdą przestrzeń, układ sesji na przestrzeń i na szablon, układ na agenta w jego menu startowym |
| Herdr (terminal) | `~/.config/herdr/session.json` | Projekt na każdy obszar roboczy i układ sesji z jego kart i etykiet paneli |
| Agenci: reguły, polecenia, skille, MCP | Zobacz niżej | [Rozszerzenia](/pl/agent/extensions/) o zakresie agenta, ze wskazanym plikiem źródłowym |

Formaty Herdr poznano z plików, które Herdr zapisuje na komputerze. Nie użyto publicznego opisu formatu, więc nowsza wersja jest czytana, na ile jest zrozumiała, a podgląd o tym mówi.

Układ sesji zachowuje dla każdego panelu jego kartę, tytuł, folder i program (`claude`, `codex` i tak dalej albo `shell`). Argumenty są odrzucane, bo mogą zawierać treść zadania albo token. Układy pojawiają się pod **Zaimportowane układy sesji**, gdzie możesz je usunąć. Folder poza Twoim folderem domowym jest pokazany jako pominięty. Dodaj go ręcznie na liście projektów.

### Co jest czytane od agentów

| Agent | Reguły | Polecenia (jako prompty) | Skille | Wpisy MCP |
| --- | --- | --- | --- | --- |
| Claude Code | `~/.claude/CLAUDE.md` | `~/.claude/commands/*.md` | `~/.claude/skills/*/SKILL.md` | `mcpServers` w `~/.claude.json` |
| Codex | `~/.codex/AGENTS.md` | `~/.codex/prompts/*.md` | `~/.codex/skills/*/SKILL.md` | `[mcp_servers.*]` w `~/.codex/config.toml` |
| Cursor | `~/.cursor/rules/*.mdc` i `*.md` | `~/.cursor/commands/*.md` | | `mcpServers` w `~/.cursor/mcp.json` |
| Gemini CLI | `~/.gemini/GEMINI.md` | `~/.gemini/commands/*.toml` | | `mcpServers` w `~/.gemini/settings.json` |
| OpenCode | `~/.config/opencode/AGENTS.md` | `~/.config/opencode/command/*.md` | `~/.config/opencode/skill/*` | `mcp` w `~/.config/opencode/opencode.json` |
| Copilot | `~/.copilot/copilot-instructions.md` | | | `mcpServers` w `~/.copilot/mcp-config.json` |

Pliku, którego nie ma, nie czytamy, więc lista odpowiada temu, co jest zainstalowane. Czytany jest tylko Twój folder domowy.

Sekrety nie są importowane:

- Reguła, prompt albo skill, którego tekst wygląda jak sekret, jest pokazany jako `••••••` i oznaczony jako pominięty. Nigdy nie jest zapisywany.
- Wpis MCP zachowuje nazwy swoich zmiennych środowiskowych. Wartości nie są czytane do podglądu. Nagłówek jest zachowany tylko jako odwołanie `Bearer ${NAME}`, a każdy inny nagłówek jest odrzucany, o czym mówi podgląd. Polecenie albo adres z danymi logowania jest pomijany.

## Wskazówki

<Aside type="tip">
Wyeksportuj dane przed ponowną instalacją albo zmianą komputera. Na nowym najpierw zaimportuj archiwum, weź projekty i zaimportuj ponownie, żeby wziąć zadania.
</Aside>

- Jeśli dla linii wybierzesz „weź ich”, kopia Twoich zostaje w `backups/`, więc możesz wrócić.
- Arkusz prywatności wymienia czytanie plików innych narzędzi, zapis archiwum i trzymanie kopii zapasowej. Zobacz [Dane i sieć](/pl/agent/data-and-network/).

## Powiązane strony

<CardGrid>
  <LinkCard title="Rozszerzenia" href="/pl/agent/extensions/" description="Czym stają się zaimportowane reguły, prompty, skille i wpisy MCP." />
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Sesje i ich panele." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Co aplikacja czyta, zapisuje i z czym się łączy." />
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Wszystkie ustawienia Skribly Agent." />
</CardGrid>
