# Przeglądarka

> Widok Przeglądarka w Skribly Agent pokazuje podgląd aplikacji w szerokości telefonu, tabletu i laptopa, robi zrzuty dla agentów i może udostępniać karty przez CDP.

Widok **Przeglądarka** pokazuje działającą aplikację obok Twojej pracy. Oglądasz ją w szerokości laptopa, tabletu i telefonu, otwierasz narzędzia deweloperskie i robisz zrzut ekranu, który agent potrafi odczytać. Ten sam widok ma karty Claude, Codex, Cursor i Gemini, każdą w osobnym profilu. Jeśli chcesz, możesz udostępnić przeglądarkę agentom przez Chrome DevTools Protocol, żeby klikali i czytali to, co widzisz.

![Widok Przeglądarka z kartą Podgląd na localhost:5173, przyciskami rozmiaru urządzenia, DevTools, zrzutem ekranu i Udostępnij na pasku](../../../../assets/screens/agent-browser.webp)

## Otwórz widok

- Kliknij **Przeglądarka** na pasku aktywności po lewej albo naciśnij `⌘8`, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Przeglądarka**.

W Windows i Linuksie zamiast `⌘` używaj `Ctrl`.

## Karty i profile

Każdy rodzaj karty ma własny trwały profil, z własnymi ciasteczkami, logowaniem i danymi. Logowanie w jednej nie miesza się z drugą, a sesja przetrwa restart.

| Karta | Strona startowa |
| --- | --- |
| **Podgląd** | Adres dev projektu, a jeśli go nie ma, `http://localhost:5173` |
| Claude | `https://claude.ai` |
| Codex | `https://chatgpt.com/codex` |
| Cursor | `https://cursor.com/agents` |
| Gemini | `https://gemini.google.com` |

- Przycisk **+** otwiera menu **Nowa karta**. Możesz mieć kilka podglądów, ale tylko jedną kartę dla każdego agenta. Adres w claude.ai, chatgpt.com, openai.com, cursor.com albo gemini.google.com zawsze otwiera się w karcie własnego profilu.
- Karty i ich adresy są zapamiętywane między uruchomieniami. Środkowy przycisk myszy zamyka kartę.
- Strona podglądu nie ma dostępu do Node.js ani do aplikacji.

## Jak zobaczyć podgląd aplikacji

<Steps>

1. Uruchom serwer dev w terminalu.

2. Otwórz **Przeglądarka**. Karta **Podgląd** ładuje adres dev projektu albo `http://localhost:5173`.

3. Użyj przycisków na pasku: wstecz, dalej i odśwież, potem szerokość ramki podglądu: **Pełna szerokość**, laptop (1366), tablet (820) i telefon (390).

4. Wpisz inny adres w polu **Adres**, jeśli potrzebujesz.

</Steps>

Co pole **Adres** robi z tym, co wpiszesz:

| Wpisujesz | Co się otwiera |
| --- | --- |
| `localhost:3000` | `http://localhost:3000` |
| `example.com` | `https://example.com` |
| Cokolwiek innego | Wyszukiwanie w DuckDuckGo |

Ostatni wiersz to połączenie z usługą poza Twoim komputerem. Zobacz [Dane i sieć](/pl/agent/data-and-network/).

## Jak zrobić zrzut ekranu dla agenta

<Steps>

1. Otwórz stronę, którą ma zobaczyć agent.

2. Naciśnij **Zrzut ekranu dla agenta** na pasku. Widoczna karta zostaje zapisana jako PNG.

3. Wklej ścieżkę, która jest już w schowku, do terminala agenta i poproś, żeby obejrzał plik.

</Steps>

Przy wybranym projekcie plik trafia do `.skribly/shots/podglad-<date>.png` w projekcie, a `.skribly/` jest lokalnie wykluczone z gita. Bez projektu trafia do folderu `shots` w folderze danych aplikacji.

## Co jest na pasku

| Przycisk | Co robi |
| --- | --- |
| Wstecz, **Dalej**, **Odśwież** | Przechodzą po historii karty i ją przeładowują |
| **Adres** | Pole adresu opisane wyżej |
| **Urządzenie** | Ustawia szerokość ramki podglądu |
| **Narzędzia deweloperskie** | Otwierają narzędzia deweloperskie karty |
| **Zrzut ekranu dla agenta** | Zapisuje widoczną kartę jak opisano wyżej |
| **Audyt WCAG / SEO tej strony** | Audytuje stronę; zobacz [Audyty](/pl/agent/audits/) |
| **Udostępnij** | Otwiera **Przeglądarka dla agentów**. Gdy udostępnianie jest włączone, nazywa się **Agenci widzą** |

## Udostępnij przeglądarkę agentom

Skribly może otworzyć port Chrome DevTools Protocol (CDP), żeby `chrome-devtools-mcp` albo Playwright MCP sterowały kartami tego widoku. Klikają, wypełniają formularze, czytają konsolę i sieć oraz robią zrzuty, a Ty patrzysz na to samo. Domyślnie jest wyłączone.

<Steps>

1. Otwórz **Ustawienia**, sekcję **Przeglądarka dla agentów**, i włącz **Udostępnij przeglądarkę agentom**. Albo naciśnij **Udostępnij** w widoku Przeglądarka, a potem **Przejdź do ustawień**.

2. Zmień **Port**, jeśli trzeba. Domyślny to `9333`, a dozwolony zakres to od 1024 do 65535.

3. Uruchom Skribly ponownie. Port otwiera się dopiero przy starcie aplikacji. Do tego czasu **Stan** pokazuje **wymaga restartu**. Gdy port jest otwarty, **Stan** pokazuje adres, na przykład `127.0.0.1:9333`.

4. Dodaj serwer MCP agentowi z fragmentem z **Konfiguracja MCP** i otwórz kartę, z którą agent ma pracować.

</Steps>

Gdy udostępnianie jest włączone, pasek stanu pokazuje `CDP 127.0.0.1:9333`.

Port nasłuchuje tylko na `127.0.0.1`, ale przyjmuje połączenia od każdego programu na tym komputerze. Wszystkie karty są wtedy widoczne, także zalogowane profile Claude i Cursora. Włączaj udostępnianie tylko wtedy, gdy pracujesz z agentami.

| Ustawienie | Wartość | Domyślnie |
| --- | --- | --- |
| **Udostępnij przeglądarkę agentom** | Włączone lub wyłączone | Wyłączone |
| **Port** | od 1024 do 65535 | `9333` |
| Nasłuchuje na | tylko `127.0.0.1` | |

Sekcja **Konfiguracja MCP** ma fragment dla każdego z **Claude Code**, **Codex**, **Cursor**, **Gemini CLI** i **Playwright MCP**, z wpisanym Twoim portem. Dla Claude Code wygląda tak:

```bash
claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest --browserUrl http://127.0.0.1:9333
```

Codex czyta `~/.codex/config.toml`, Cursor `.cursor/mcp.json` albo `~/.cursor/mcp.json`, a Gemini CLI `~/.gemini/settings.json`. Playwright MCP używa `--cdp-endpoint` zamiast `--browserUrl`. Serwery włączasz i wyłączasz w [Serwerach MCP](/pl/agent/mcp/).

## Wskazówki

<Aside type="caution">
Udostępniona przeglądarka wystawia każdą kartę, także zalogowane, każdemu programowi na tym komputerze. Trzymaj udostępnianie wyłączone, gdy nie pracujesz z agentem.
</Aside>

- Jeśli port jest zajęty, wybierz inny w **Ustawieniach**, w sekcji **Przeglądarka dla agentów**, i uruchom ponownie. Zobacz [Rozwiązywanie problemów](/pl/agent/troubleshooting/#port-przeglądarki-jest-zajęty).
- Pliki pobrane w karcie Claude, na przykład eksport z Claude Design, trafiają do `Skribly Design` w folderze Pobrane. Zobacz [Wtyczki i Claude Design](/pl/agent/plugins/).

## Powiązane strony

<CardGrid>
  <LinkCard title="Wtyczki i Claude Design" href="/pl/agent/plugins/" description="Przekaż paczkę z Claude Design agentowi." />
  <LinkCard title="Serwery MCP" href="/pl/agent/mcp/" description="Dodaj i sprawdź serwery MCP przeglądarki swoich agentów." />
  <LinkCard title="Audyty" href="/pl/agent/audits/" description="Audyty WCAG i SEO strony." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Z czym łączy się aplikacja i co obejmuje jej przełącznik." />
</CardGrid>
