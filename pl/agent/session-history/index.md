# Historia sesji

> Historia sesji w Skribly Agent wypisuje dawne sesje Claude Code, Codexa i Copilot CLI, filtruje je i wznawia jedną w jej własnym folderze.

Historia sesji to jedna lista dawnych sesji agentów, których własne pliki sesji Skribly potrafi czytać: Claude Code, Codexa i Copilot CLI. Dla otwartego projektu albo dla wszystkich projektów pokazuje agenta, folder, gałąź, kiedy sesja się zaczęła i skończyła, pierwszy wiersz tego, o czym była, i zużyte tokeny. Wybranie sesji otwiera ją ponownie w jej folderze własnym poleceniem wznowienia tego agenta.

![Okno Historia sesji: wyszukiwanie, filtr agenta, Ten projekt i Wszystkie projekty oraz pięć dawnych sesji Claude Code, Codexa i Copilot CLI z przyciskiem Wznów](../../../../assets/screens/agent-session-history.webp)

## Otwórz okno

- Naciśnij **Historia** na pasku narzędzi widoku Agenci, albo
- naciśnij `Ctrl+B`, potem `h`, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Historia sesji agentów i wznowienie**.

Lista jest czytana, gdy okno się otwiera i gdy naciśniesz **Odśwież**. Nie ma zegara, więc zamknięte okno ani ukryta aplikacja nigdy nie czytają pliku.

## Jak znaleźć i wznowić sesję

<Steps>

1. Otwórz okno. Pole wyszukiwania ma fokus.

2. Wpisz tekst w **Szukaj w pierwszej linii, folderze, gałęzi albo agencie…**. Wyszukiwanie sprawdza pierwszy wiersz, folder, gałąź, nazwę projektu, nazwę agenta i identyfikator sesji, a każde słowo musi pasować.

3. Zawęź listę filtrem agenta, który oferuje agentów mających sesje, i **Zakres**: **Ten projekt** lub **Wszystkie projekty**.

4. Wybierz sesję albo przejdź do niej przez `↑` i `↓` i naciśnij `Enter`. Nowy panel otwiera się w folderze sesji i uruchamia polecenie wznowienia agenta.

</Steps>

Lista jest od najnowszych. Zawiera sesje z ostatnich 90 dni, najwyżej 500, i mówi, kiedy została ucięta.

## Co uruchamia wznowienie

| Agent | Polecenie uruchamiane w folderze sesji |
| --- | --- |
| Claude Code | `claude --resume <id>` |
| Codex | `codex resume <id>` |
| Copilot CLI | `copilot --resume=<id>` |

- Sesja, której folder już nie istnieje, jest wyszarzona i to mówi. Nic nie jest uruchamiane.
- Sesja agenta bez polecenia wznowienia otwiera zamiast tego nową sesję tego agenta w folderze. Dziś wszyscy trzej wymienieni agenci je mają.
- Polecenie jest zbudowane ze stałych części i identyfikatora sesji. Identyfikator musi być kanonicznym UUID, agent musi być jednym z trzech, a sesja musi być na liście, którą aplikacja właśnie przeczytała. Nic więcej z pliku sesji nie trafia do wiersza poleceń.

## Co aplikacja czyta

Skribly tylko czyta te pliki i nigdy do nich nie zapisuje.

| Agent | Pliki |
| --- | --- |
| Claude Code | `<CLAUDE_CONFIG_DIR lub ~/.claude>/projects/<folder>/<id>.jsonl` |
| Codex | `<CODEX_HOME lub ~/.codex>/sessions/YYYY/MM/DD/rollout-*.jsonl` |
| Copilot CLI | `<COPILOT_HOME lub ~/.copilot>/session-state/<id>/events.jsonl` |

- Z każdego pliku czytane jest tylko pierwsze 256 KB, więc ogromna sesja kosztuje tyle samo co mała. Aplikacja bierze z niego identyfikator, czas startu, folder, gałąź i pierwszy wiersz pierwszej wiadomości, którą napisałeś.
- Czas zakończenia to czas ostatniej zmiany pliku.
- Pierwszy wiersz jest przycięty do jednego zwykłego wiersza o długości 140 znaków. Jest pokazywany tylko w tym oknie; nie trafia do logów, nigdzie nie jest wysyłany i nie jest częścią żadnego polecenia.
- Tokeny pochodzą z tego samego czytnika co [tablica zużycia](/pl/agent/usage/) i obejmują ostatnie 14 dni. Starsza sesja albo taka, której pliki nie niosą liczb tokenów, nie pokazuje żadnych, a nie zero.
- Pliki uszkodzone, puste albo spoza powyższego układu są pomijane.

## Klawiatura

`↑` i `↓` przesuwają po liście, `Ctrl+Home` i `Ctrl+End` skaczą na jej końce, `Enter` wznawia zaznaczoną sesję, a `Esc` zamyka okno. Filtry to zwykłe kontrolki w kolejności `Tab`.

<Aside type="tip">
Skróty na tej stronie używają `⌘`. W Windows i Linux używaj `Ctrl`. Prefiks `Ctrl+B` jest taki sam w każdym systemie.
</Aside>

## Powiązane strony

<CardGrid>
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Wznawianie po restarcie, które przywraca otwarte panele." />
  <LinkCard title="Zużycie tokenów i zasoby" href="/pl/agent/usage/" description="Skąd pochodzą liczby tokenów sesji." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Co aplikacja czyta i gdzie się łączy." />
</CardGrid>
