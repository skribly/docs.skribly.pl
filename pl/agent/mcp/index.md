# Serwery MCP

> Karta Serwery MCP w Skribly Agent wypisuje serwery Claude Code, Codexa, Cursora i Gemini, przełącza je, sprawdza, czy odpowiadają, i kopiuje wpis.

Karta **Serwery MCP**, w **Wtyczkach i MCP**, wypisuje serwery MCP skonfigurowane w Claude Code, Codex, Cursorze i Gemini, dla Ciebie i dla otwartego projektu. Możesz wyłączyć serwer bez niszczenia jego konfiguracji, dodać serwer kilku agentom naraz, sprawdzić, czy naprawdę startuje i odpowiada, oraz skopiować wpis od jednego agenta do drugiego. Nic nie uruchamia się samo i żaden sekret nie jest pokazywany.

Ta strona dotyczy serwerów, których używają agenci. Skribly Agent ma też własny serwer MCP, `skribly mcp`, opisany w [Własny serwer MCP aplikacji](/pl/agent/skribly-mcp/).

![Karta Serwery MCP: serwery Claude Code, Codexa, Cursor Agent i Gemini CLI z zakresem, transportem, przełącznikami i przyciskami sprawdzenia, kopiowania, folderu i usunięcia](../../../../assets/screens/agent-mcp.webp)

## Otwórz widok

- Kliknij **Wtyczki i MCP** na pasku aktywności po lewej i wybierz kartę **Serwery MCP**, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Wtyczki i MCP**.

W Windows i Linuksie zamiast `⌘` używaj `Ctrl`. Widok nie ma skrótu z cyfrą: `⌘1` do `⌘9` zostają przy pierwszych dziewięciu widokach.

## Lista

Każdy agent ma jedną kartę, z liczbą jego serwerów. Wiersz pokazuje nazwę, zakres, transport i polecenie albo adres. Zakres to **wszędzie**, **projekt (repo)** albo **projekt (tylko ja)**. Transport to `stdio` dla programu uruchamianego przez agenta albo `http` lub `sse` dla adresu.

| Agent | Skąd czyta |
| --- | --- |
| Claude Code | `~/.claude.json` (wszędzie i dla projektu) oraz `.mcp.json` w projekcie |
| Codex | `~/.codex/config.toml`, sekcje `[mcp_servers.NAME]` |
| Cursor | `~/.cursor/mcp.json` i `.cursor/mcp.json` w projekcie |
| Gemini CLI | `~/.gemini/settings.json` i `.gemini/settings.json` w projekcie |

Każdy wiersz ma przełącznik i cztery przyciski: sprawdzenie, kopiowanie, **Pokaż plik** (otwiera plik, z którego pochodzi wpis) i **Usuń serwer**. Agent widzi zmianę w nowej sesji.

## Jak wyłączyć i włączyć serwer

Naciśnij przełącznik wiersza. Agenci nie mają wspólnej flagi „wyłączony”, więc Skribly obsługuje każdy format po swojemu, a włączenie przywraca dokładnie tę samą konfigurację.

| Serwer | Wyłączenie |
| --- | --- |
| Codex | `enabled = false` w jego sekcji `config.toml` |
| Claude Code, `.mcp.json` projektu | Nazwa trafia do `disabledMcpjsonServers` w `.claude/settings.local.json`. `.mcp.json` z repozytorium zostaje nietknięty |
| Claude Code, wszędzie albo tylko ja | Konfiguracja jest zapisywana w własnym schowku Skribly (`mcp-stash.json` w folderze danych), a serwer jest usuwany poleceniem `claude mcp remove`, albo z pliku, gdy nie ma CLI |
| Cursor i Gemini | Ten sam schowek, a wpis jest usuwany z pliku |

Serwery w schowku widać na liście jako wyłączone. Skribly czyta też wyłączenia zrobione ręcznie.

## Jak dodać serwer

<Steps>

1. Naciśnij **Dodaj serwer MCP**. Wybierz gotowy zestaw (Chrome DevTools, Playwright, Context7, Skribly, Skribly z zapisem, Figma (Dev Mode), Sentry, Atlassian albo Linear) albo wypełnij formularz sam.

2. Zaznacz agentów w **Do agenta**. Wybierz zakres. Codex zawsze zapisuje do konfiguracji użytkownika i okno o tym mówi.

3. Podaj **Nazwa** (litery, cyfry, `.`, `-` i `_`) i wybierz **Transport**: `stdio` (lokalny program), HTTP albo SSE.

4. Dla programu podaj polecenie i **Argumenty**. Dla adresu podaj adres. Dodaj zmienne środowiskowe (`KLUCZ=wartość`, jedna na linię) albo, dla adresu, nagłówki (`Nazwa: wartość`, jeden na linię).

5. Zapisz. Komunikat wypisuje zapisane pliki.

</Steps>

Skribly zapisuje wpis w formacie każdego agenta: `claude mcp add-json` dla Claude Code (albo plik, gdy nie ma CLI), nową sekcję `[mcp_servers.<name>]` dla Codexa, `mcpServers` w `mcp.json` dla Cursora i w `settings.json` dla Gemini.

Zestaw **Skribly z zapisem** uruchamia `skribly mcp --allow-writes`. Każda zmiana, którą wtedy robi, najpierw pyta Cię w aplikacji.

<Aside type="caution">
Wolisz odwołanie do zmiennej środowiskowej niż wartość wpisaną w formularzu. Wpisana wartość trafia do pliku agenta bez zmian. Wpisy, które trzymają tylko nazwę zmiennej, opisują [Rozszerzenia](/pl/agent/extensions/).
</Aside>

## Jak sprawdzić serwer

Sprawdzenie najpierw pokazuje, co zrobi, a dopiero potem to robi.

![Okno sprawdzenia serwera playwright: uruchomione polecenie i folder oraz odpowiedź po 550 ms z pięcioma narzędziami](../../../../assets/screens/agent-mcp-test.webp)

<Steps>

1. Naciśnij przycisk sprawdzenia w wierszu. Najpierw włącz serwer: wyłączony serwer nie jest uruchamiany.

2. Okno pokazuje, co zrobi test. Dla programu pokazuje polecenie z argumentami i folder, w którym by wystartował. Dla adresu pokazuje adres. Zmienne środowiskowe i nagłówki widać tylko z nazwy, nigdy z wartości. Nic jeszcze nie wystartowało.

3. Naciśnij **Uruchom test** albo `Esc`, żeby anulować. Skribly uruchamia program tak jak jego agent (albo wysyła żądanie na adres), robi pierwsze powitanie (`initialize`), prosi o listę narzędzi (`tools/list`) i zatrzymuje program razem ze wszystkim, co uruchomił.

4. Przeczytaj wynik. Limit czasu to 20 sekund. Plakietka zostaje na wierszu do przeładowania listy.

</Steps>

| Wynik | Znaczenie |
| --- | --- |
| **działa**, **Odpowiedź po** N ms z liczbą narzędzi i ich nazwami | Serwer wystartował i odpowiedział |
| Brak odpowiedzi w limicie czasu | Serwer potrzebował więcej niż 20 sekund |
| Serwer zakończył się przed odpowiedzią | Okno podaje kod wyjścia i ostatnie linie, które wypisał program |
| Coś, co nie jest wiadomością MCP | Program wypisuje tekst, który nie jest JSON-RPC |
| Nie znaleziono polecenia | Polecenia nie ma w `PATH` |
| Serwer wymaga logowania | Adres odpowiedział HTTP 401 albo 403, albo potrzebne jest logowanie lub token |

Sekrety są ukryte w całym oknie: wartości zmiennych i nagłówków, `user:password@` w adresie, wartości zapytania i wartość po `--token`, `--api-key` albo `--password` wyglądają jak `•••`, a te same wartości są wycinane z tekstu błędów. Serwer z pliku projektu może używać tylko zmiennych, które deklaruje jego własny wpis, więc sklonowane repozytorium nie wyśle Twojej zmiennej pod żaden adres.

Gdy włączony jest przełącznik **Bez połączeń sieciowych aplikacji**, serwer ze zdalnym adresem nie jest odpytywany, a okno o tym mówi. Adres na tym komputerze (`localhost`, `127.0.0.1`) jest nadal sprawdzany. Program uruchamiany poleceniem nie jest zatrzymywany przez przełącznik, a to, co robi w sieci, to jego własny ruch. Zobacz [Dane i sieć](/pl/agent/data-and-network/).

## Jak skopiować serwer do innego agenta

<Steps>

1. Naciśnij przycisk kopiowania w wierszu.

2. Wybierz **Do agenta** i **Zakres**. Codex ma tylko plik użytkownika, Cursor i Gemini mają wszędzie i projekt, a tylko Claude Code ma **projekt (tylko ja)**.

3. Przeczytaj okno. Pokazuje plik, który się zmieni, jeden wpis, który zostanie zapisany w formacie tego agenta, z ukrytymi wartościami zmiennych i nagłówków, oraz nazwę kopii zapasowej. Odwołanie takie jak `${GITHUB_TOKEN}` zostaje widoczne i jest zamieniane na składnię drugiego agenta. Jeśli agent ma już serwer o tej nazwie, nic się nie zmienia.

4. Naciśnij **Zapisz ten wpis**. Skribly kopiuje plik obok jako `NAME.skribly-backup-DATE`, czytelny tylko dla Ciebie, i dodaje wpis. Pozostałe wpisy zostają bez zmian, a plik JSON, którego nie da się odczytać, nigdy nie jest ruszany.

</Steps>

## Jak usunąć serwer

Naciśnij **Usuń serwer** w wierszu i potwierdź. Wpis jest usuwany z pliku (dla Codexa cała sekcja) i ze schowka Skribly. Usunięcia nie da się cofnąć, więc skopiuj wpis wcześniej, jeśli możesz go jeszcze potrzebować.

## Wskazówki

<Aside type="tip">
Uruchom sprawdzenie po dodaniu serwera. Serwer, który startuje, ale nie wypisuje narzędzi albo pada na logowaniu, łatwiej zauważyć tutaj niż w sesji agenta.
</Aside>

- Użyj przycisku folderu, żeby otworzyć plik i zobaczyć dokładnie to, co czyta agent.
- Trzymaj serwery projektu pod **projekt (tylko ja)**, gdy je wypróbowujesz, i przenieś do **projekt (repo)**, gdy ma je mieć zespół.

## Powiązane strony

<CardGrid>
  <LinkCard title="Własny serwer MCP aplikacji" href="/pl/agent/skribly-mcp/" description="skribly mcp: co inni agenci mogą czytać i zmieniać w Skribly Agent." />
  <LinkCard title="Rozszerzenia" href="/pl/agent/extensions/" description="Wpisy MCP trzymane dla agenta lub technologii, tylko z nazwami zmiennych." />
  <LinkCard title="Wtyczki i Claude Design" href="/pl/agent/plugins/" description="Wtyczki Claude Code, Claude Design do kodu i karta Cursor." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Co obejmuje przełącznik braku sieci." />
</CardGrid>
