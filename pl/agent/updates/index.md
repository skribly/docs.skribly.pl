# Aktualizacje

> Jak Skribly Agent aktualizuje się w systemach macOS, Windows i Linux, co robią Sprawdź aktualizacje i Aktualizuj automatycznie, jak numerowane są wersje i co zmieniło się po poprzedniej nazwie.

Skribly Agent aktualizuje się sam z publicznego miejsca wydań, które trzyma tylko instalatory i jest czytane bez tokenu. Sprawdza wersję przy starcie i co cztery godziny, pobiera nową w tle i instaluje ją po ponownym uruchomieniu lub zamknięciu aplikacji. Pierwszą instalację zrobisz ze [strony pobierania](https://agent.skribly.pl/download/).

## Otwórz widok

- Otwórz **Ustawienia** i wybierz **Aktualizacje** albo
- kliknij **Sprawdź aktualizacje** w menu ikony w zasobniku lub na pasku menu.

Strona pokazuje wersję, system i architekturę, **Sprawdź aktualizacje**, postęp pobierania, przełącznik **Aktualizuj automatycznie** oraz [katalog danych](/pl/agent/settings/#katalog-danych).

## Jak sprawdzić aktualizację teraz

<Steps>

1. Otwórz **Ustawienia → Aktualizacje**.

2. Naciśnij **Sprawdź aktualizacje**. Wiersz pod przyciskiem mówi, co się stało: sprawdzanie, jest nowa wersja, pobieranie z procentem, gotowe albo **Masz najnowszą wersję.**

3. Gdy nowa wersja jest gotowa, naciśnij **Uruchom ponownie i zainstaluj** z jej numerem albo kliknij **Wersja … gotowa — uruchom ponownie** na pasku stanu. Bez kliknięcia aktualizacja zainstaluje się przy zamknięciu aplikacji.

</Steps>

## Jak działa automatyczna aktualizacja

| Kiedy | Co się dzieje |
| --- | --- |
| 8 sekund po uruchomieniu | Pierwsze sprawdzenie w zainstalowanej aplikacji z włączonym **Aktualizuj automatycznie** |
| Co 4 godziny | Kolejne sprawdzenie |
| Dostępna nowa wersja | Pobieranie w tle; pasek stanu pokazuje **Pobieranie &lt;wersja&gt; N%** |
| Pobrano | Pasek stanu pokazuje **Wersja &lt;wersja&gt; gotowa — uruchom ponownie**. Kliknij go, aby zainstalować i uruchomić ponownie, albo aktualizacja zainstaluje się przy zamknięciu. |
| Aktualizacja odrzucona z powodu podpisu (Windows, Linux) | Pasek stanu pokazuje zamiast tego **Nowa wersja do pobrania** jako link do pobrania |
| Błąd | Komunikat w **Ustawienia → Aktualizacje** |

**Sprawdź aktualizacje** działa także przy wyłączonym **Aktualizuj automatycznie**. W wersji deweloperskiej sprawdzenie odpowiada, że aktualizacje działają w zbudowanej aplikacji.

| System | Co jest pobierane |
| --- | --- |
| macOS | Pakiet `-mac.zip` dla Twojej architektury. Aplikacja nie jest podpisana, więc Skribly sam sprawdza sumę SHA-512 i podmienia aplikację po jej zamknięciu. Pobrany pakiet jest potem usuwany. |
| Windows | Instalator NSIS. Wersja przenośna nie aktualizuje się sama. Aktualizacja zostawia polecenie `skribly`, obsługę linków i Twój folder danych. |
| Linux | AppImage albo pakiet `.deb` lub `.rpm`, z którego zainstalowano aplikację. Aktualizacja pakietu raz prosi o hasło administratora i zostawia polecenie `skribly-agent`. |

## Opcje

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Sprawdź aktualizacje** | Sprawdza od razu i pokazuje wynik w wierszu pod przyciskiem | W tej sesji nie sprawdzano, dopóki go nie naciśniesz lub nie ruszy zegar |
| **Aktualizuj automatycznie** | Sprawdza 8 sekund po starcie i co 4 godziny, pobiera w tle i instaluje przy zamknięciu | Włączone |

Gdy **Bez połączeń sieciowych aplikacji** jest włączone w [Prywatność i sieć](/pl/agent/data-and-network/), żadne sprawdzenie nie jest wykonywane, a strona mówi, że sieć jest wyłączona.

## Wersje

Wydanie powstaje tylko z tagu `v<wersja>` na `main`, który równa się wersji z `package.json`. Pierwsze takie wydanie to 1.1.0; wcześniejsze wersje miały numery `1.0.<numer kompilacji>`.

<Aside type="caution">
Skribly 1.0.x czytał dawny prywatny kanał. Zainstaluj 1.1.0 raz ręcznie ze [strony pobierania](https://agent.skribly.pl/download/); kolejne wersje przychodzą same. Pole tokenu GitHub dla prywatnego repozytorium z **Ustawienia → Aktualizacje** zniknęło, a token zapisany tam jest usuwany z magazynu sekretów aplikacji przy następnym starcie.
</Aside>

## Pliki wydania

| System | Pliki |
| --- | --- |
| macOS | `Skribly-mac-arm64.dmg` (Apple Silicon), `Skribly-mac-x64.dmg` (Intel) |
| Windows | `Skribly-Setup.exe` (x64 i ARM64 w jednym), `Skribly-Setup-x64.exe`, `Skribly-Setup-arm64.exe`, `Skribly-Portable-x64.exe` |
| Linux | `Skribly-linux-x86_64.AppImage`, `Skribly-linux-amd64.deb`, `Skribly-linux-x86_64.rpm` |

Te stałe nazwy zawsze dają najnowszą wersję. Każde wydanie ma też `SHA256SUMS.txt` i notatki, które mówią, jak otworzyć niepodpisaną aplikację na macOS i Windows i jak sprawdzić sumy. Każda spakowana aplikacja przechodzi test uruchomieniowy przed publikacją, a zainstalowane aplikacje widzą wydanie dopiero wtedy, gdy ma pliki dla każdego systemu.

## Wskazówki

- Wyłącz **Aktualizuj automatycznie**, jeśli chcesz sam wybierać moment aktualizacji, i naciskaj **Sprawdź aktualizacje** samodzielnie.
- Co zostawia instalacja, aktualizacja i odinstalowanie w każdym systemie, opisuje [Dane i sieć](/pl/agent/data-and-network/#co-zostaje-po-odinstalowaniu).
- Gdy aktualizacja się nie uda, zajrzyj do [Rozwiązywania problemów](/pl/agent/troubleshooting/).

## Powiązane strony

<CardGrid>
  <LinkCard title="Instalacja" href="/pl/agent/install/" description="Instalacja Skribly Agent na macOS, Windows lub Linux." />
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Każda sekcja Ustawień i jej wartości domyślne." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Co aplikacja zapisuje, z czym się łączy i co po niej zostaje." />
  <LinkCard title="Rozwiązywanie problemów" href="/pl/agent/troubleshooting/" description="Co zrobić z najczęstszymi problemami." />
</CardGrid>
