# Wtyczki i Claude Design

> Wtyczki i MCP w Skribly Agent instaluje i przełącza wtyczki Claude Code, przekazuje paczkę z Claude Design agentowi i obsługuje kartę Cursor.

Widok **Wtyczki i MCP** ma pięć kart. Ta strona opisuje trzy z nich: **Wtyczki Claude** (katalog wtyczek Claude Code), **Claude Design** (od projektu do kodu, ze skrótami do claude.ai) i **Cursor**. Kartę **Serwery MCP** opisują [Serwery MCP](/pl/agent/mcp/), a **Rozszerzenia** strona [Rozszerzenia](/pl/agent/extensions/).

![Karta Wtyczki Claude: pięć zainstalowanych wtyczek Claude Code z zakresem i przełącznikami oraz katalog z wyszukiwaniem, kategoriami i przyciskami Zainstaluj](../../../../assets/screens/agent-plugins.webp)

## Otwórz widok

- Kliknij **Wtyczki i MCP** na pasku aktywności po lewej albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Wtyczki i MCP**.

W Windows i Linuksie zamiast `⌘` używaj `Ctrl`. Widok nie ma skrótu z cyfrą: `⌘1` do `⌘9` zostają przy pierwszych dziewięciu widokach. Karty to przełącznik u góry po prawej stronie widoku.

## Wtyczki Claude Code

Karta **Wtyczki Claude** wypisuje wtyczki, które ma Claude Code, i katalog, z którego możesz dodawać. Skribly uruchamia `claude plugin …`, więc o format plików i blokady dba sam Claude Code.

### Jak zainstalować wtyczkę

<Steps>

1. Wybierz, gdzie ma działać, w **Instaluj i włączaj dla**.

2. Znajdź wtyczkę. Katalog otwiera się na **Polecane**. Użyj filtrów **Design**, **Kod i review**, **Dokumenty**, **Integracje** albo **Wszystkie**, albo wpisz w polu wyszukiwania, które przeszukuje cały katalog.

3. Naciśnij **Zainstaluj** na karcie. Każda karta pokazuje, gdzie wtyczka działa: Claude Code, Cowork albo claude.ai.

4. Uruchom nową sesję Claude Code. Zmiana działa od następnej.

</Steps>

| Zakres w interfejsie | Plik ustawień |
| --- | --- |
| **wszędzie** | `~/.claude/settings.json` |
| **projekt (repo)** | `<project>/.claude/settings.json`, współdzielony z zespołem |
| **projekt (tylko ja)** | `<project>/.claude/settings.local.json` |

Dwa zakresy projektu wymagają wybranego projektu na górnym pasku.

### Jak wyłączyć albo usunąć wtyczkę

Każdy wiersz **Zainstalowane** ma przełącznik, zakres jako plakietkę, przycisk do repozytorium wtyczki i **Odinstaluj**. Przełącznik wyłącza wtyczkę bez usuwania. **Odinstaluj** usuwa ją z tego zakresu.

### Czego potrzebuje karta

Plakietka pokazuje **Claude Code CLI wykryty** albo **bez Claude Code CLI**. Bez CLI katalog pochodzi z lokalnej kopii Claude Code, `~/.claude/plugins/plugin-directory-cache-v2.json`, a przełącznik zmienia klucz `enabledPlugins` w pliku ustawień. Instalacja i odinstalowanie wymagają CLI. Katalog jest w pamięci podręcznej przez dziesięć minut, a **Odśwież** ładuje go od razu. Wypisanie i instalacja wtyczek to połączenia sieciowe, więc blokuje je przełącznik **Bez połączeń sieciowych aplikacji**; zobacz [Dane i sieć](/pl/agent/data-and-network/).

## Claude Design do kodu

![Karta Claude Design w Wtyczkach i MCP: Otwórz Claude Design, Wybierz paczkę, agent, który ją wdroży, i dwie zaimportowane paczki z przyciskami Wdróż](../../../../assets/screens/agent-claude-design.webp)

Projektujesz w Claude Design, a agent buduje projekt w Twoim projekcie z jego własnymi komponentami i tokenami.

### Jak wdrożyć projekt

<Steps>

1. Otwórz kartę **Claude Design** i wybierz projekt na górnym pasku.

2. Naciśnij **Otwórz Claude Design**. W [Przeglądarce](/pl/agent/browser/) otwiera się karta Claude, w osobnym profilu, i logujesz się raz.

3. W Claude Design wyeksportuj projekt jako `.zip` albo samodzielny HTML. Plik zapisuje się w `Skribly Design` w folderze Pobrane i pojawia się pod **Pobrane z Claude**.

4. Wybierz agenta, który go zbuduje, obok **Wdroży**.

5. Naciśnij **Wdróż** przy paczce. Żeby użyć paczki, której nie ma na liście, naciśnij **Wybierz paczkę…** (`.zip`, `.html`, `.htm` albo `.md`; w macOS także folder).

</Steps>

Co dzieje się potem:

- Paczka jest rozpakowywana do `.skribly/design/<name>-<date>/` w projekcie. `__MACOSX`, `.DS_Store`, `node_modules` i `.git` są pomijane, jeden folder w archiwum jest spłaszczany, a ścieżki wychodzące poza folder są odrzucane. Folder jest lokalnie wykluczony z gita.
- Skribly szuka pliku wejściowego: `handoff*.md`, `readme*.md`, `claude*.md` albo `prompt*.md`, potem `index.html`, potem dowolnego `.html`.
- W widoku Agenci otwiera się agent z promptem. Przegląda paczkę i istniejący kod, wypisuje plan i czeka na Twoje „ok”. Zachowuje kolory, typografię, odstępy, teksty i zasoby, buduje z komponentów projektu zamiast kopiować HTML, potem sprawdza wynik w podglądzie w rozmiarze desktopu i telefonu oraz dostępność. Robi commit dopiero po Twojej zgodzie, bez linii `Co-Authored-By`.

### Claude w Skribly

Na dole karty są skróty do claude.ai. Kliknięcie otwiera stronę w karcie Claude w Przeglądarce. Przycisk ze strzałką, **Otwórz w przeglądarce systemowej**, otwiera ją w Twojej przeglądarce.

| Skrót | Adres |
| --- | --- |
| **Claude Design** | `https://claude.ai/design` |
| **Artefakty** | `https://claude.ai/artifacts` |
| **Claude Code w sieci** | `https://claude.ai/code` |
| **Zaplanowane** | `https://claude.ai/scheduled` |
| **Dostosuj** | `https://claude.ai/customize` |

## Karta Cursor

Karta **Cursor** pokazuje, co jest na tym komputerze, i edytuje reguły Cursora projektu.

| Część | Co robi |
| --- | --- |
| **Aplikacja Cursor** | Pokazuje, gdzie jest aplikacja, albo **Pobierz Cursora**, gdy jej nie znaleziono |
| Polecenie `cursor` | Pokazane, gdy jest w `PATH`. Jest potrzebne do otwierania plików i instalowania rozszerzeń. W Cursorze użyj w palecie poleceń pozycji `Shell Command: Install 'cursor' command in PATH` |
| `cursor-agent` | Agent Cursora w terminalu. **Zainstaluj cursor-agent** go instaluje, a gdy jest, możesz się zalogować i nacisnąć **Uruchom**, żeby uruchomić go w widoku Agenci |
| **Edytor Skribly** | **Ustaw Cursor jako edytor** sprawia, że pliki z widoków Kod, Audyty i Skille otwierają się w Cursorze |
| **Otwórz projekt w Cursorze** | Otwiera wybrany projekt w aplikacji Cursor. Potrzebny jest projekt |
| **Serwery MCP Cursora** | Przechodzi do karty **Serwery MCP** |
| **Motywy i rozszerzenia Cursora** | Przechodzi do widoku Wygląd |

### Jak napisać regułę Cursora

Reguły Cursora to pliki w `.cursor/rules` projektu.

<Steps>

1. Wybierz projekt, potem naciśnij **Nowa reguła** pod **Reguły projektu**.

2. Wypełnij **Nazwa pliku (bez .mdc)**, opis, **Wzorce plików (globs, po przecinku)** i **Treść reguły (Markdown)**.

3. Zaznacz **Zawsze stosuj (alwaysApply)**, jeśli reguła ma zawsze trafiać do kontekstu. Zapisz.

</Steps>

Każda reguła na liście pokazuje, jak działa: **zawsze**, **dla plików**, **według opisu** albo **ręcznie**. Wiersz ma przełącznik stałego stosowania oraz przyciski edycji, otwarcia pliku w edytorze i usunięcia. Karta czyta reguły do trzech folderów w głąb.

## Wskazówki

<Aside type="tip">
Instaluj wtyczkę dla **projekt (repo)** tylko wtedy, gdy ma ją mieć cały zespół. Użyj **projekt (tylko ja)**, żeby najpierw ją wypróbować.
</Aside>

- Wtyczki, które dodajesz, to kod osób trzecich. Przeczytaj, co wtyczka robi, zanim ją włączysz.
- Paczka z Claude Design może być duża. Agent pracuje z rozpakowanego folderu, więc po pracy możesz usunąć `.skribly/design/<name>-<date>/`.

## Powiązane strony

<CardGrid>
  <LinkCard title="Serwery MCP" href="/pl/agent/mcp/" description="Serwery Claude Code, Codexa, Cursora i Gemini." />
  <LinkCard title="Rozszerzenia" href="/pl/agent/extensions/" description="Własne prompty, reguły, skille, serwery i polecenia." />
  <LinkCard title="Przeglądarka" href="/pl/agent/browser/" description="Gdzie otwiera się Claude Design, w osobnym profilu." />
  <LinkCard title="Skille" href="/pl/agent/skills/" description="Skille dla każdego agenta z repozytorium agent-skills." />
</CardGrid>
