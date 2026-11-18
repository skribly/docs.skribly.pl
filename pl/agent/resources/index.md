# Zasoby

> Widok Zasoby w Skribly Agent pokazuje pamięć, procesor i porty każdego panelu oraz jego procesów obok wolnej pamięci i swapu, i potrafi zatrzymać jeden proces.

Widok **Zasoby** pokazuje, ile pamięci i procesora zajmuje każdy panel Skribly Agent, licząc całe jego drzewo procesów: agenta, jego powłoki, uruchamiacze testów, serwery dev i przeglądarki bez interfejsu. Przy wielu agentach laptopowi może zabraknąć pamięci, a trudno zobaczyć, który agent jest przyczyną. Ten widok stawia panele obok wolnej pamięci i swapu komputera i mówi słowami, gdy wolnej pamięci jest mało.

![Widok Zasoby: pamięć paneli aplikacji, wolna pamięć i swap oraz tabela paneli z pamięcią, procesorem, procesami i portami, jeden panel rozwinięty do największych procesów](../../../../assets/screens/agent-resources.webp)

## Otwórz widok

- Kliknij **Zasoby** (wskaźnik) na pasku aktywności, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Zasoby**.

Na Windows i Linuksie używaj `Ctrl` wszędzie tam, gdzie ta strona pisze `⌘`. Widok nie ma skrótu z cyfrą. Czyta co 3 sekundy i tylko wtedy, gdy jest otwarty, a okno widoczne. Inny widok, zminimalizowane okno albo okno ukryte w zasobniku niczego nie czyta; powrót czyta od razu. **Odśwież** czyta teraz.

## Co jest na ekranie

| Część | Co pokazuje |
| --- | --- |
| **Panele aplikacji** | Pamięć drzew wszystkich paneli razem, ich udział procesora i liczbę procesów |
| **Wolna pamięć** | Co system może jeszcze dać, sumę i pasek udziału w użyciu |
| **Swap** | Używany swap i jego rozmiar (w Windows plik stronicowania) |
| Ostrzeżenie | Pojawia się, gdy wolnej pamięci jest mało, zobacz niżej |
| Tabela paneli | Jeden wiersz na panel, od największego: **Pamięć**, **Procesor**, **Procesy** i **Porty** (nasłuchujące porty TCP całego drzewa) |

Liczba, której system nie podaje, jest pokazana jako **brak danych**, nigdy jako `0`. Windows nie podaje udziału procesora na proces, więc ta kolumna pokazuje tam **brak danych**.

### Ostrzeżenie

Ostrzeżenie pojawia się nad liczbami, gdy wolnej pamięci jest mało:

- **Mało wolnej pamięci.** gdy wolne jest mniej niż 12% albo mniej niż 1 GB.
- **Pamięć prawie się skończyła.** gdy wolne jest mniej niż 5% albo mniej niż 10% przy swapie zapełnionym w ponad 80%.

Wskazuje największy panel i mówi, co zrobić: zatrzymać zbędny proces albo zamknąć nieużywany panel.

### Jak liczone są liczby

| Liczba | macOS | Linux | Windows |
| --- | --- | --- | --- |
| Procesy | `ps` | `ps` | `Win32_Process` (PowerShell) |
| Pamięć | Pamięć rezydentna (RSS) | Pamięć rezydentna (RSS) | Working set |
| Procesor | Niedawny średni udział jednego rdzenia | Średni udział od startu procesu | Niepodawany |
| Porty | `lsof -iTCP -sTCP:LISTEN` dla drzewa | `ss -ltnp` | `netstat -ano` |
| Wolna pamięć | Strony wolne, nieaktywne i spekulatywne | `MemAvailable` | Wolna pamięć fizyczna |

Drzewo panelu to własny proces panelu i każdy proces, którego łańcuch rodziców do niego prowadzi. Pamięć współdzielona między procesami liczy się przy każdym z nich, więc suma drzewa może być wyższa niż to, co naprawdę zajmuje. Udział procesora powyżej 100% oznacza więcej niż jeden rdzeń.

## Jak zobaczyć, co uruchamia panel

<Steps>

1. Kliknij wiersz tabeli albo naciśnij na nim `Enter` lub `Spacja`.

2. Przeczytaj **Największe procesy panelu**, do ośmiu: identyfikator procesu, pamięć, procesor, porty i wiersz polecenia. Notatka mówi, ile procesów ma drzewo w sumie.

3. Naciśnij **Przejdź** w wierszu, żeby otworzyć panel w [widoku Agenci](/pl/agent/terminals/). Przycisk jest wyłączony dla paneli pomocniczych, takich jak terminal widoku Kod, które nie mają tam miejsca.

</Steps>

## Jak zatrzymać proces

<Steps>

1. Otwórz panel i znajdź proces, na przykład zbiegły uruchamiacz testów albo zapomniany serwer dev.

2. Naciśnij **Zatrzymaj…** w jego wierszu. Okno **Zatrzymać ten proces?** nazywa polecenie, identyfikator procesu, panel i jego pamięć.

3. Naciśnij **Zatrzymaj proces N**.

</Steps>

Własny proces panelu nie ma przycisku **Zatrzymaj…**, tylko notatkę **proces panelu**: zamknij zamiast tego panel. **Kopiuj linię procesu** wkłada do schowka identyfikator procesu, pamięć, procesor, porty i polecenie.

Co zatrzymanie robi, a czego nie robi:

- Działa tylko na wybranym identyfikatorze procesu, nigdy na nazwie ani wzorcu.
- Tuż przed działaniem aplikacja czyta tablicę procesów jeszcze raz. Odmawia, gdy identyfikatora nie ma już w drzewie tego panelu, teraz uruchamia inne polecenie, jest własnym procesem panelu albo jest samą aplikacją.
- Na macOS i Linuksie wysyła `SIGTERM`, więc program może zakończyć się czysto. W Windows proces kończy się od razu.
- Panel i reszta jego drzewa działają dalej.

## Klawiatura

| Klawisz | Akcja |
| --- | --- |
| `↑` `↓`, `Home` `End` | Przechodzenie między panelami |
| `Enter`, `Spacja` | Otwarcie lub zamknięcie procesów panelu |
| `Tab` | Przejście przez akcje otwartego panelu |
| `Esc` | Zamyka otwarty panel i wraca do jego wiersza; zamyka okno |

## Wskazówki

<Aside type="tip">
Spójrz na kolumnę **Porty**, gdy serwer dev nie chce wystartować: zapomniany proces innego panelu może trzymać port.
</Aside>

- Widok używa tylko narzędzi Twojego systemu operacyjnego na Twoim komputerze. Nie łączy się z siecią i niczego nie zapisuje.
- Uruchamiaj mniej agentów naraz, gdy pojawi się ostrzeżenie, albo zatrzymaj serwery dev i uruchamiacze testów, których już nie potrzebujesz.

## Powiązane strony

<CardGrid>
  <LinkCard title="Terminale i sesje" href="/pl/agent/terminals/" description="Panele, które mierzy ten widok." />
  <LinkCard title="Drzewa robocze" href="/pl/agent/worktrees/" description="Zobacz, w których worktree nadal pracuje panel." />
  <LinkCard title="Rozwiązywanie problemów" href="/pl/agent/troubleshooting/" description="Częste problemy i ich rozwiązania." />
</CardGrid>
