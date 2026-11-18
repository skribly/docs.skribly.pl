# Rozszerzenia

> Karta Rozszerzenia w Skribly Agent trzyma Twoje prompty, reguły, skille, serwery MCP i polecenia dla agenta lub technologii, wszystkie wyłączone do czasu włączenia.

Karta **Rozszerzenia** trzyma Twoje dodatki dla agenta albo dla technologii: prompty, reguły, skille, serwery MCP i polecenia powłoki. Każdy to zwykły plik. Wybierasz, dla kogo jest, dodajesz go i włączasz dla projektu. Nic nie uruchamia się samo, wszystko jest wyłączone do czasu włączenia i żaden sekret nie jest zapisywany.

![Karta Rozszerzenia: przyciski dodawania promptu, reguły, skilla, serwera MCP i polecenia oraz włączone prompt, reguła i skill zespołu z oszacowaniem tokenów](../../../../assets/screens/agent-extensions.webp)

## Otwórz widok

- Kliknij **Wtyczki i MCP** na pasku aktywności po lewej i wybierz kartę **Rozszerzenia**, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Wtyczki i MCP**.

W Windows i Linuksie zamiast `⌘` używaj `Ctrl`. Widok nie ma skrótu z cyfrą: `⌘1` do `⌘9` zostają przy pierwszych dziewięciu widokach. Najpierw wybierz projekt na górnym pasku: przełączniki, wykryte technologie i dodatki zespołu należą do projektu.

## Rodzaje dodatków

| Rodzaj | Czym jest | Co robi |
| --- | --- | --- |
| Prompt | Tekst do wielokrotnego użycia | **Wyślij** wpisuje go do panelu agenta. Panel wybierasz obok **Wyślij do** u góry listy |
| Reguła | Tekst do instrukcji agenta | Jest dopisywana do `TASK.md`, gdy zaczynasz zadanie z aplikacji, dla agenta, który je zaczyna |
| Skill | Folder z plikiem `SKILL.md`, wybrany z dysku | Włączenie kopiuje go do folderu skilli projektu: `.claude/skills/<name>` dla Claude Code, `.agents/skills/<name>` dla pozostałych agentów. Wyłączenie usuwa tylko tę kopię |
| Serwer MCP | Polecenie stdio z argumentami albo adres http lub sse | **Zapisz w agencie…** dodaje go do konfiguracji zaznaczonych agentów, tym samym kodem co [serwery MCP](/pl/agent/mcp/) |
| Polecenie | Polecenie powłoki trzymane jako tekst | **Uruchom…** pokazuje całe polecenie i po Twoim kliknięciu wpisuje je do nowego terminala w projekcie |

Haki nie są częścią tej wersji.

Nic z tego, co przynosi dodatek, nie uruchamia się samo. Prompt wysyła tylko Twoje kliknięcie. Polecenie działa dopiero po potwierdzeniu dokładnego pokazanego tekstu, a aplikacja odmawia jego uruchomienia, jeśli zapisany tekst zmienił się od chwili pokazania. Wpis MCP jest zapisywany dopiero po potwierdzeniu. Reguły to tekst, nie kod. Jedyne, co robi przełącznik, to skopiowanie skilla do projektu.

## Dla kogo jest dodatek

Lista **Pokaż dla** wybiera, na co patrzysz, a nowy dodatek powstaje dla tego wyboru.

| Zakres | Znaczenie |
| --- | --- |
| **Wszyscy agenci** i **Wszystkie projekty** | Dotyczy każdego agenta i każdego projektu. Widać go też pod każdym innym zakresem, z dopiskiem **z szerszego zakresu** |
| Agent | Jeden agent znany aplikacji, na przykład Claude Code albo Codex |
| Technologia | Technologia znaleziona w otwartym projekcie albo taka, którą nazywa już jakiś dodatek |

Aplikacja znajduje technologie, czytając pliki w katalogu głównym otwartego projektu, takie jak `package.json`, `composer.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile`, `pom.xml` i `Dockerfile`. Niczego przy tym nie uruchamia. Karta wypisuje każdą technologię z plikiem i wpisem, które ją potwierdziły, na przykład `package.json: react`.

## Jak dodać dodatek

<Steps>

1. Wybierz zakres w **Pokaż dla**.

2. Naciśnij przycisk rodzaju pod **Dodaj**: **Prompt**, **Reguła**, **Skill**, **Serwer MCP** albo **Polecenie**.

3. Wypełnij **Nazwa**, opcjonalny opis i treść. Dla skilla naciśnij **Wybierz folder skilla**. Dla serwera MCP wybierz stdio albo adres zdalny, potem polecenie i argumenty albo adres.

4. Pod **Gdzie zapisać** wybierz **Moje** (folder danych aplikacji) albo **Zespół** (`.skribly/extensions` w repozytorium). **Zespół** jest wyszarzony, gdy folder jest tylko do odczytu albo nie wybrano projektu.

5. Zaznacz pole, które włącza dodatek dla otwartego projektu, jeśli tego chcesz, i zapisz.

</Steps>

Tekst ma najwyżej 20 000 znaków, a polecenie najwyżej 2000. Folder skilla ma najwyżej 200 plików, po 512 KB każdy i 2 MB razem. Dowiązania są pomijane, a `.git` i `node_modules` nie są kopiowane.

## Twój folder i folder zespołu

| Gdzie | Ścieżka | Uwagi |
| --- | --- | --- |
| Twoje | `extensions/` w folderze danych aplikacji, z `index.json` i `skills/<id>/` | Folder danych widać w **Ustawieniach** |
| Zespół | `.skribly/extensions/` w projekcie, z `index.json` i `skills/<id>/` | Widoczne z plakietką zespołu. Gdy folderu nie da się zapisać, dodatek jest tylko do odczytu: możesz go włączyć, nie możesz edytować ani usunąć |

Żeby podzielić się dodatkiem z zespołem, zapisz go jako **Zespół**, potem zrób commit z `.skribly/extensions/`. Jeśli repozytorium ignoruje `.skribly/`, użyj `git add -f .skribly/extensions`.

Przełączniki są trzymane po Twojej stronie, w Twoim własnym `index.json`, nigdy w repozytorium. Dlatego sklonowane repozytorium nie może samo podać agentowi instrukcji.

## Wyłączone do czasu włączenia

Naciśnij przełącznik dodatku, żeby włączyć go dla projektu. Przełącznik jest związany z treścią, którą włączyłeś: SHA-256 z rodzaju, zakresu, nazwy, opisu, tekstu i wpisu MCP, a dla skilla ze ścieżki i skrótu każdego pliku.

Jeśli ta treść zmieni się inaczej niż edycją w aplikacji, na przykład przez `git pull` albo ręczną edycję `index.json`, dodatek liczy się jako wyłączony wszędzie. Jego reguły nie trafiają do `TASK.md`, jego polecenie nie działa, a jego wpis MCP nie jest zapisywany. Karta oznacza go **zmieniony, odkąd go włączono**. Przeczytaj go i włącz ponownie.

- Edycja zapisana w aplikacji zachowuje przełącznik.
- Skill skopiowany już do projektu zachowuje kopię, którą zatwierdziłeś. Karta mówi, że zapisany skill jest nowszy, a ponowne włączenie podmienia kopię.

## Oszacowanie tokenów

Każda reguła, prompt i skill pokazuje w przybliżeniu, ile tokenów dodaje: znaki tekstu (dla skilla z `SKILL.md`) podzielone przez cztery, zaokrąglone w górę. Serwery MCP i polecenia nie pokazują nic. Przy wybranym projekcie wiersz nad listą sumuje włączone reguły i skille, bo te trafiają do każdego zadania. Prompty nie są liczone, bo wysyłasz je tylko wtedy, gdy chcesz.

## Sprawdź dodatek

Przycisk z tarczą przy dodatku uruchamia sprawdzenie i niczego nie zmienia. Powtarza kontrole zapisu: nazwę, opis, zakres, limity, odmowę przyjęcia sekretów oraz poprawne polecenie albo adres http(s) dla serwera MCP. Dla skilla sprawdza też, czy `SKILL.md` istnieje z nazwą i opisem, oraz limity plików i kontrolę sekretów na zapisanych plikach. Nigdy nie uruchamia serwera MCP ani polecenia.

## Nigdy sekret

Wpis MCP nigdy nie zawiera tokenu. Wskazuje zmienną środowiskową, którą czyta serwer:

- dla serwera stdio **Zmienne środowiskowe, które serwer czyta (same nazwy)** to lista nazw. Każda jest zapisywana jako `${NAME}`, a agent rozwija ją przy starcie serwera (Cursor dostaje `${env:NAME}`, Codex dostaje `env_vars`);
- dla serwera zdalnego **Zmienna środowiskowa z tokenem Bearer (sama nazwa)** to jedna nazwa, zapisywana jako `Authorization: Bearer ${NAME}` (Codex dostaje `bearer_token_env_var`).

Tekst, wpis MCP albo plik skilla, który wygląda jak klucz, token lub hasło, jest odrzucany, a błąd nie powtarza wartości. Odrzucana jest też flaga z sekretem jako osobny argument (`--api-key abc…`). Odwołanie takie jak `$GITHUB_TOKEN` jest w porządku.

Gdy zapisujesz serwer MCP do agenta, potwierdzenie pokazuje agentów i zakres. Wpis nie ma ustawienia automatycznego zatwierdzania, więc agent pyta przed użyciem narzędzia jak zawsze. Domyślnym zakresem jest otwarty projekt, a **Wszędzie (konfiguracja użytkownika)** to osobny wybór. Codex czyta tylko konfigurację użytkownika, więc dla niego wpis zawsze tam trafia.

## Import i eksport

- **Eksport** (u góry po prawej albo przycisk pobierania przy jednym dodatku) zapisuje jeden plik JSON. Zawiera tekst, wpisy MCP i pliki każdego skilla. Nigdy nie zawiera Twoich przełączników projektów.
- **Import** czyta taki plik i najpierw pokazuje, co doda: nazwę, rodzaj, zakres i to, które już istnieją (są pomijane). Nic nie jest dodawane przed potwierdzeniem. Zaimportowane dodatki trafiają do Twoich dodatków, wszystkie wyłączone.

Plik z sekretem w dowolnym miejscu, ze ścieżką skilla wychodzącą poza jego folder albo w innym formacie jest odrzucany w całości. Plik może mieć do 10 MB.

## Co odrzuca magazyn

Folder zespołu pochodzi z repozytorium, więc piszą go inni. Magazyn traktuje każdy jego bajt jako niezaufany i tak samo sprawdza Twój własny folder.

- Wpis indeksu, którego id nie jest takim, jakie tworzy magazyn (`u-` dla Twoich albo `t-` dla zespołu, potem do 32 liter i cyfr), albo który nie przeszedłby kontroli nowego dodatku, jest pomijany. Pominięte wpisy zostają w pliku, nieużywane, a karta mówi, ile ich jest.
- Dowiązanie symboliczne na drodze do magazynu albo wewnątrz skilla jest odrzucane, także w folderach `.claude` i `.agents` projektu. Folder zespołu z dowiązaniem jest traktowany jak nieobecny.
- Skill zespołu, którego pliki łamią limity albo wyglądają, jakby zawierały sekret, jest odrzucany przy włączeniu i przy eksporcie.
- `index.json`, którego nie da się odczytać, na przykład z zostawionym konfliktem gita, nigdy nie jest nadpisywany. Folder zespołu z takim indeksem jest pomijany i tylko do odczytu, a zapis do Twojego indeksu jest odrzucany, dopóki nie naprawisz pliku.

## Wskazówki

<Aside type="caution">
Przeczytaj dodatek zespołu, zanim go włączysz. Reguła trafia do instrukcji każdego zadania, a polecenie działa w Twoim terminalu.
</Aside>

- Trzymaj regułę krótką: jest dopisywana do każdego zadania dla tego agenta.
- Co potrzebne tylko jednej technologii, wpisz pod tę technologię, żeby inne projekty tego nie nosiły.

## Powiązane strony

<CardGrid>
  <LinkCard title="Serwery MCP" href="/pl/agent/mcp/" description="Serwery Claude Code, Codexa, Cursora i Gemini oraz sprawdzenie stanu." />
  <LinkCard title="Wtyczki i Claude Design" href="/pl/agent/plugins/" description="Wtyczki Claude Code, Claude Design do kodu i karta Cursor." />
  <LinkCard title="Skille" href="/pl/agent/skills/" description="Skille z repozytorium agent-skills." />
  <LinkCard title="Zadania i trackery" href="/pl/agent/tasks/" description="Gdzie reguły trafiają do TASK.md." />
</CardGrid>
