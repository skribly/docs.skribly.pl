# Ustawienia

> Każda sekcja Ustawień w Skribly Agent, opcja po opcji z wartością domyślną: od wyglądu i trackerów po sesje, koszt, strażnika poleceń, Dockera i aktualizacje.

**Ustawienia** zbierają wszystko, co można zmienić w Skribly Agent. Mają szesnaście sekcji na liście po lewej. Ustawienia zapisują się na tym urządzeniu w katalogu danych; tokeny są szyfrowane pękiem kluczy systemu. Zmiana ustawienia nigdzie niczego nie wysyła.

![Ustawienia, Wygląd i przewodnik, w motywie nocnym: lista sekcji po lewej, a po prawej tryb motywu, rozmiar tekstu 13 px, język interfejsu, motywy dzienny i nocny oraz przewodnik po aplikacji](../../../../assets/screens/agent-settings.webp)

## Otwórz widok

- Kliknij **Ustawienia** na dole paska aktywności po lewej (koło zębate) albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Ustawienia**.

Widok pamięta sekcję, z której korzystałeś ostatnio. Niektóre przyciski w innych miejscach aplikacji otwierają sekcję od razu. W Windows i Linuksie zamiast `⌘` użyj `Ctrl`.

## Sekcje

| Sekcja | Co ustawia | Szczegóły |
| --- | --- | --- |
| **Wygląd i przewodnik** | Tryb motywu, rozmiar tekstu, język interfejsu, motywy, przewodnik po aplikacji | [Niżej](#wygląd-i-przewodnik) |
| **Dostępność** | Rozmiar tekstu, przełączniki wyglądu i czytania | [Dostępność](/pl/agent/accessibility/) |
| **Trackery zadań** | Konta Skribly Tracker, Jiry, Redmine, GitHuba, GitLaba i Lineara oraz śledzenie zmian | [Niżej](#trackery-zadań) |
| **Konta Git** | Logowania do aktywności commitów i prywatnych repozytoriów, foldery z repozytoriami, tożsamości w commitach | [Niżej](#konta-git) |
| **Agenci** | Wykrywanie zainstalowanych agentów, agent domyślny, własni agenci | [Niżej](#agenci) |
| **Koszt** | Waluta, abonamenty, budżety, ceny modeli | [Niżej](#koszt) |
| **Projekty** | Dla każdego projektu: gałąź bazowa, wzory, sprawdzenia, adres dev, tracker | [Niżej](#projekty) |
| **Sesje i sterowanie** | Odtwarzanie sesji, folder worktree, maszyny SSH, API sterowania, polecenie `skribly` | [Niżej](#sesje-i-sterowanie) |
| **Edytor i powiadomienia** | Edytor kodu, powiadomienia, wyciszeni agenci i projekty, język interfejsu | [Niżej](#edytor-i-powiadomienia) |
| **Repozytorium skilli** | Skąd pobierane są skille | [Niżej](#repozytorium-skilli) |
| **Przeglądarka dla agentów** | Udostępnianie przeglądarki Skribly przez Chrome DevTools Protocol | [Niżej](#przeglądarka-dla-agentów) |
| **Docker** | Monitorowanie kontenerów, alerty, kontekst Dockera | [Docker](/pl/agent/docker/#ustawienia--docker) |
| **Strażnik poleceń** | Pytanie przed groźnymi poleceniami agentów | [Niżej](#strażnik-poleceń) |
| **Prywatność i sieć** | Każde połączenie, folder i port aplikacji oraz przełącznik, który wyłącza sieć | [Dane, prywatność i sieć](/pl/agent/data-and-network/) |
| **Aktualizacje** | Wersja, sprawdzanie aktualizacji, katalog danych | [Niżej](#aktualizacje) |
| **Import i eksport** | Archiwum danych, import z Herdr, pliki agentów | [Import i eksport](/pl/agent/import-export/) |

## Jak zmienić ustawienie

<Steps>

1. Otwórz **Ustawienia** i wybierz sekcję z listy po lewej.

2. Zmień opcję. Przełączniki, listy i przyciski działają od razu; potwierdza to komunikat.

3. W polach tekstowych (folder worktree, adres repozytorium, pola projektu) wyjdź z pola albo naciśnij **Zapisz**. Formularz projektu ma własny przycisk **Zapisz**.

</Steps>

## Wygląd i przewodnik

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Tryb motywu** | **Dzień**, **Noc**, **Wysoki kontrast** albo **Jak system**. Ikona słońca i księżyca na górnym pasku też go zmienia | Jak system |
| **Rozmiar tekstu** | Tekst interfejsu, edytora i terminali, w pikselach | 13 px |
| **Język interfejsu** | Polski, angielski albo język tłumaczony z internetu; zobacz [Języki](/pl/agent/languages/) | Polski |
| **Motywy dzienny i nocny** | Otwiera widok Wygląd, w którym wybierasz motywy z VS Code, Cursora, Windsurfa albo Open VSX; zobacz [Motywy](/pl/agent/themes/) | Skribly dzienny i Skribly nocny |
| **Przewodnik po aplikacji** | **Uruchom teraz** włącza animowany przewodnik | Pokazany raz przy pierwszym uruchomieniu |
| **Pokaż przewodnik przy następnym starcie** | **Resetuj przewodnik** pokaże go znowu przy następnym starcie | |
| **Pierwsze kroki na Pulpicie** | **Pokaż ponownie** przywraca listę startową na Pulpicie | |
| **Skróty i dokumentacja** | Otwiera listę skrótów i widok Pomoc | |

## Trackery zadań

Same konta opisuje strona [Zadania i trackery](/pl/agent/tasks/#jak-połączyć-tracker). Sekcja ma jeszcze jeden przełącznik:

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Śledź zmiany w trackerze** | Przy otwartym oknie pyta tracker tylko o zadania zmienione od ostatniego sprawdzenia, rzadziej, gdy okno nie ma fokusu, i wcale, gdy jest ukryte. Zmienione zadanie dostaje znacznik i powiadomienie, a agent przy starcie dostaje tylko nowe komentarze | Włączone |

## Konta Git

Konta GitHub, GitLab, Bitbucket, Gitea i Azure DevOps służą do karty aktywności commitów na Pulpicie i do klonowania prywatnych repozytoriów. Sekcja trzyma też **Foldery z repozytoriami**, które są skanowane pod kątem aktywności, oraz **Twoje tożsamości w commitach**, czyli adresy e-mail, pod którymi liczone są Twoje commity. Zobacz [Pulpit](/pl/agent/dashboard/) i [Pierwszy obszar roboczy](/pl/agent/first-workspace/).

## Agenci

Skribly szuka agentów w `PATH` Twojej powłoki logowania i w typowych katalogach instalacji.

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Wykryj ponownie** | Uruchamia wykrywanie jeszcze raz; wynik jest trzymany w pamięci przez pięć minut | |
| **Agent domyślny** | Agent podpowiadany przy zadaniach, audytach, skillach i poprawianiu commitów | Claude Code |
| Karty agentów | Wersja i ścieżka zainstalowanego agenta, przycisk instalacji dla pozostałych i link do dokumentacji. Znaczek mówi, czy agent ma tryb bez interfejsu, którego używają czat i potoki, czy tylko terminal | |
| **Własni agenci** | Dowolne narzędzie wiersza poleceń jako agent: nazwa, polecenie, opcjonalne argumenty, opcjonalne polecenie wznowienia, w którym `{id}` oznacza identyfikator sesji, i kolor. Pierwsza wiadomość trafia jako ostatni argument | Brak |

Własni agenci pojawiają się w **Nowa sesja** i można nimi sterować [poleceniem `skribly`](/pl/agent/cli/) jako `custom:<id>`. Zobacz też [Obsługiwani agenci](/pl/agent/agents/).

## Koszt

Koszt pokazuje, ile kosztowałyby tokeny Twoich agentów, obok liczby tokenów. To szacunek liczony na tym komputerze z plików sesji, które zostawiają agenci, i z datowanej tabeli cen. Skribly niczego nie blokuje z powodu budżetu. Zobacz [Zużycie tokenów](/pl/agent/usage/).

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Pokazuj koszt** | Jeden przełącznik dla całej aplikacji | Włączone |
| Miejsca | Po jednym przełączniku dla tablicy zużycia, wykresu tokenów, Pulpitu, paska sesji i menu w zasobniku | Włączone |
| **Waluta** | USD, EUR, PLN i inne popularne kody albo dowolny kod ISO 4217 | USD |
| **Kurs wpisany ręcznie** | Ile Twojej waluty kosztuje jeden USD | 1 |
| **Dzienny kurs EBC** | Pobiera kursy referencyjne Europejskiego Banku Centralnego, najwyżej co 12 godzin; to jedyne połączenie sieciowe Kosztu | Wyłączone |
| **Miejsca po przecinku** | Od 0 do 4 cyfr po przecinku | 2 |
| **Bardzo małe kwoty jako „< 0,01”** | Pokazuje, że koszt istnieje, zamiast zera | Włączone |
| Abonament dla agenta | Oznacza koszt jako odpowiednik kosztu API i pokazuje obok plan oraz jego miesięczną cenę. Agenci: Claude Code, Codex, Copilot CLI | Wyłączone |
| **Copilot CLI: cena żądania premium** | Puste oznacza koszt w planie; cena sprawia, że koszt to liczba żądań premium razy ta cena | Puste |
| Budżety | Limity dzienne i miesięczne w sumie i dla każdego agenta, pokazane jako cichy pasek na tablicy zużycia | Brak |
| **Powiadom przy 80%**, **Powiadom przy 100%** | Jedno powiadomienie systemowe na budżet i okres | Włączone |
| **Ceny modeli** | Tabela, która obowiązuje. Możesz zmienić cenę, dodać model z nazwami, jakie ma w plikach sesji, i przywrócić jeden model albo wszystkie | Tabela z aplikacji |

## Projekty

Otwórz projekt na liście i naciśnij **Konfiguruj**. **Wykryj** czyta konwencje repozytorium jeszcze raz.

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Nazwa i kolor** | Jak projekt wygląda w aplikacji | Nazwa folderu |
| **Gałąź bazowa** | Gałąź, od której zaczynają się worktree i gałęzie zadań | Wykryta |
| **Wzór gałęzi** | `{key}` to klucz zadania, `{slug}` to tytuł małymi literami z myślnikami | `feature/{key}-{slug}` |
| **Wzór commita** | `{type}`, `{scope}`, `{subject}`, `{key}`, na przykład `{type}({scope}): {subject}` | Puste: wzór z historii |
| **Język commitów** | **Automatycznie**, **Polski** albo **Angielski** | Automatycznie |
| **Adres aplikacji w trybie dev** | Otwierany przez podgląd w przeglądarce i audyty WCAG i SEO | Wykryty |
| **Tracker projektu** | Konto, z którego pochodzą zadania, oraz projekt, repozytorium lub zespół w nim | Brak: wszystkie trackery |
| **Sprawdzenia** | Polecenia oddzielone przecinkami, które agenci uruchamiają przed oddaniem pracy | Wykryte |

Wykrywanie działa tak:

| Ustawienie | Jak jest wykrywane |
| --- | --- |
| Gałąź bazowa | Pierwsza istniejąca z `develop`, `main`, `master`, a gdy żadnej nie ma, pierwsza gałąź lokalna |
| Sprawdzenia | `npm run lint`, `typecheck` i `test`, gdy są w `package.json`, `composer test`, `python manage.py test` oraz `pytest`, gdy jest tylko `pyproject.toml` |
| Adres dev | Port z `--port` w skrypcie `dev` lub `start`, w przeciwnym razie `5173` dla Vite i `3000` dla reszty |

Skribly nigdy nie dodaje stopki `Co-Authored-By` do commita. **Usuń z listy** wyjmuje projekt ze Skribly i zostawia jego pliki w spokoju.

## Sesje i sterowanie

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Odtwarzaj sesje po restarcie** | Karty, podziały i panele wracają. Claude Code i Codex wznawiają rozmowę; pozostałe panele startują jako świeża powłoka w tym samym folderze | Włączone |
| **Katalog worktree** | Gdzie powstają worktree dla agentów. Usunięcie worktree nigdy nie kasuje jego gałęzi | Puste: `~/.skribly/worktrees/<repo>/<gałąź>` |
| **Maszyny SSH** | Nazwa i `user@host` albo alias z `~/.ssh/config`. Skribly otwiera `ssh -t` i uruchamia tam agenta; nie przechowuje haseł | Brak |
| **Lokalne API sterowania** | Pozwala agentom i skryptom sterować panelami. Nasłuchuje tylko na `127.0.0.1`; znaczek pokazuje port | Włączone |
| **Polecenie skribly** | **Zainstaluj** dodaje polecenie do `PATH` | Niezainstalowane |
| **Skill „skribly” dla agentów** | **Zainstaluj** w wybranym projekcie uczy Claude Code i Codexa delegowania pracy | Niezainstalowany |

Pod opcjami sekcja pokazuje konfiguracje serwera MCP Skribly do skopiowania, w wersji **Tylko odczyt (domyślnie)** albo **Z zapisem (--allow-writes)**. Zobacz [Polecenie skribly](/pl/agent/cli/) i [Serwer MCP Skribly](/pl/agent/skribly-mcp/).

## Edytor i powiadomienia

![Ustawienia, Edytor i powiadomienia: lista edytora kodu, przełączniki powiadomień i ich dźwięku, listy wyciszonych agentów i projektów oraz lista języka interfejsu](../../../../assets/screens/agent-settings-general.webp)

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Edytor kodu** | Otwiera pliki z widoków Kod, Audyty i Skille: VS Code, Cursor, Windsurf albo **Domyślna aplikacja systemu** | VS Code |
| **Powiadomienia** | Powiadomienie systemowe, gdy agent skończy albo czeka na Ciebie | Włączone |
| **Dźwięk powiadomień** | Odtwarza dźwięk z powiadomieniem | Wyłączone |
| **Wyciszeni agenci** | Brak powiadomień systemowych od zaznaczonych agentów; nadal trafiają do skrzynki uwagi | Brak |
| **Wyciszone projekty** | To samo dla projektów. Kilka powiadomień w ciągu paru sekund łączy się w jedno | Brak |
| **Język interfejsu** | Polski, angielski, **Jak system** albo język tłumaczony | Polski |

Powiadomienie pojawia się tylko wtedy, gdy nie patrzysz na sesję: okno jest w tle albo jej panelu nie widać. Zobacz [Skrzynka uwagi](/pl/agent/inbox/).

## Repozytorium skilli

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Adres repozytorium git** | Skąd pobierane są skille. Każdy adres, który obsługuje `git clone`, HTTPS albo SSH; adres SSH wymaga klucza w `ssh-agent` | `https://github.com/skribly/agent-skills.git` |
| **Przywróć domyślne** | Wraca do domyślnego adresu | |

Po zmianie zsynchronizuj repozytorium w widoku Skille. Zobacz [Skille](/pl/agent/skills/).

## Przeglądarka dla agentów

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Udostępnij przeglądarkę agentom** | Otwiera Chrome DevTools Protocol na `127.0.0.1`, żeby agenci mogli używać przeglądarki Skribly | Wyłączone |
| **Port** | Od 1024 do 65535. Zmień, jeśli port jest zajęty | 9333 |
| **Stan** | Mówi, czy potrzebny jest restart: port otwiera się przy starcie | |
| **Konfiguracja MCP** | Konfiguracje do skopiowania dla Claude Code, Codexa, Cursora, Gemini CLI i Playwright MCP | |

<Aside type="caution">
Gdy udostępnianie jest włączone, każdy program na tym komputerze może połączyć się z portem, a karty z zalogowanymi kontami są widoczne. Włączaj, gdy pracujesz z agentami. Zobacz [Przeglądarka](/pl/agent/browser/) i [Rozwiązywanie problemów](/pl/agent/troubleshooting/#port-przeglądarki-jest-zajęty).
</Aside>

## Strażnik poleceń

Strażnik sprawia, że agenci pytają przed groźnym poleceniem, i pozwala wybrać grupy poleceń, które każdy agent może uruchamiać bez pytania. Jest **domyślnie wyłączony**, a dopóki go nie włączysz i nie potwierdzisz listy plików, Skribly nic nie zapisuje w konfiguracji żadnego agenta. To siatka bezpieczeństwa, nie piaskownica.

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Włącz strażnika** | Pokazuje pliki, które się zmienią, i zapisuje dopiero po Twoim potwierdzeniu. Wyłączenie usuwa dokładnie wpisy, które dodał Skribly | Wyłączone |
| Agenci | Claude Code, Codex i OpenCode | Brak |
| Grupy dla agenta | **Odczyt i szukanie**, **Edycja plików**, **Git**, **Wysyłanie (git push)**, **Budowanie i testy**, **Wszystko** | Brak |
| **Zawsze pytają** | Lista tylko do odczytu tego, co pyta zawsze, cokolwiek zaznaczysz: usuwanie plików, porzucanie zmian w git, przepisywanie historii, czyszczenie baz danych, usuwanie kontenerów, zabijanie procesów, publikowanie pakietów, `sudo` i przekazywanie pobranego skryptu do powłoki | |

Aby zmienić grupy, zmień zaznaczenia i naciśnij **Podgląd i zastosuj zmiany**. Okno wypisuje każdy plik, informację, czy jest tworzony czy rozszerzany, i każdy wpis; **Zapisz w plikach** najpierw robi kopię każdego istniejącego pliku.

## Aktualizacje

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Sprawdź aktualizacje** | Sprawdza teraz i pokazuje stan | |
| **Aktualizuj automatycznie** | Sprawdza przy starcie i co 4 godziny, pobiera w tle i instaluje przy zamknięciu aplikacji | Włączone |
| **Katalog danych** | **Pokaż** otwiera folder; przycisk kopiowania kopiuje jego ścieżkę | |

Zobacz [Aktualizacje](/pl/agent/updates/).

## Katalog danych

**Ustawienia → Aktualizacje → Katalog danych → Pokaż** otwiera folder, który trzyma ustawienia, projekty, konta trackerów z zaszyfrowanymi kluczami, układ, sesje, repozytorium skilli, pobrane motywy i historię potoków.

## Wskazówki

- Ustawienia, których nie możesz znaleźć, są często w widoku, do którego należą: potoki, audyty i przeglądarka trzymają swoje opcje na własnej stronie.
- **Prywatność i sieć** wypisuje, co aplikacja robi w sieci. **Bez połączeń sieciowych aplikacji** wyłącza tam także sprawdzanie aktualizacji i kurs EBC.

## Powiązane strony

<CardGrid>
  <LinkCard title="Motywy" href="/pl/agent/themes/" description="Dzień, noc i wysoki kontrast oraz motywy z VS Code i Open VSX." />
  <LinkCard title="Dostępność" href="/pl/agent/accessibility/" description="Rozmiar tekstu, kontrast, ruch i fokus." />
  <LinkCard title="Polecenie skribly" href="/pl/agent/cli/" description="Steruj aplikacją z terminala." />
  <LinkCard title="Rozwiązywanie problemów" href="/pl/agent/troubleshooting/" description="Rozwiązania typowych problemów." />
</CardGrid>
