# Aktualizacje

> Jak Skribly Agent aktualizuje się w systemach macOS, Windows i Linux, jak numerowane są wersje, jakie pliki zawiera każde wydanie oraz co stało się z poprzednią nazwą.

Skribly Agent aktualizuje się sam z GitHub Releases. Sprawdza wersję przy starcie i co cztery godziny, pobiera nową w tle i instaluje ją przy następnym uruchomieniu.

## Jak działa automatyczna aktualizacja

| Kiedy | Co się dzieje |
| --- | --- |
| 8 sekund po uruchomieniu | Pierwsze sprawdzenie w skompilowanej aplikacji z włączoną opcją **Aktualizuj automatycznie** |
| Co 4 godziny | Kolejne sprawdzenie |
| Dostępna nowa wersja | Pobieranie w tle; pasek stanu pokazuje „Pobieranie &lt;version&gt; N%” |
| Pobrano | Pasek stanu pokazuje „Wersja &lt;version&gt; gotowa — uruchom ponownie”. Kliknij go, aby zainstalować i uruchomić aplikację ponownie; w przeciwnym razie aktualizacja zainstaluje się przy zamknięciu aplikacji. |
| Błąd | Komunikat w sekcji **Ustawienia → Aktualizacje** |

| System | Co jest aktualizowane |
| --- | --- |
| macOS | Pakiet `-mac.zip`. Aplikacja nie jest podpisana, więc Skribly weryfikuje pakiet (SHA-512) i samodzielnie go podmienia. |
| Windows | Instalator NSIS. Wersja przenośna nie aktualizuje się automatycznie. |
| Linux | AppImage. Aktualizacja `.deb` i `.rpm` odbywa się przez zainstalowanie nowej wersji. |

Sekcja **Ustawienia → Aktualizacje** pokazuje wersję, system i architekturę, przycisk **Sprawdź aktualizacje**, postęp pobierania, przełącznik **Aktualizuj automatycznie** oraz katalog danych.

## Wersje

Wersje wyglądają tak: `1.0.<build number>`, a tagi wydań tak: `v1.0.37`. Każdy push do `main` buduje nową wersję dla macOS, Windows i Linuksa w jednym wydaniu GitHub Release, z notatkami pogrupowanymi na podstawie commitów i plikiem `SHA256SUMS.txt`. Zainstalowane aplikacje widzą wydanie dopiero wtedy, gdy zawiera ono pliki dla każdego systemu.

## Pliki wydania

| System | Pliki |
| --- | --- |
| macOS | `Skribly-<version>-arm64.dmg`, `Skribly-<version>-x64.dmg` oraz pakiety `-mac.zip` do automatycznych aktualizacji |
| Windows | `Skribly-Setup-<version>.exe` (jeden instalator dla x64 i ARM64), `Skribly-Portable-<version>-x64.exe` |
| Linux | `Skribly-<version>-x86_64.AppImage`, `Skribly-<version>-amd64.deb`, `Skribly-<version>-x86_64.rpm` |

Każde wydanie zawiera również stabilne kopie bez numeru wersji w nazwie, takie jak `Skribly-mac-arm64.dmg` i `Skribly-Setup.exe`, więc link do najnowszego wydania zawsze daje najnowszą wersję.

## Aktualizacja z poprzedniej nazwy

Aplikacja nazywała się wcześniej **Skryba Agent Workflow**. Aktualizacja do Skribly Agent zachowuje wszystko:

| Co | Po aktualizacji |
| --- | --- |
| Katalog danych | Instalacja, która już korzysta ze starego folderu, zachowuje go, więc ustawienia, tokeny, sesje i logowania pozostają bez zmian. Nowe instalacje korzystają z `Skribly Agent`. |
| Foldery projektów | Nowa praca trafia do `.skribly/`. Zadania znajdujące się już w `.skryba/` pozostają tam i nadal można je wyświetlać oraz wznawiać. |
| Folder domowy | `~/.skribly/control.json` to nowa lokalizacja. Worktree w `~/.skryba/worktrees` nadal działają. |
| Polecenie i MCP | `skryba` nadal działa obok `skribly`. Narzędzia MCP mają teraz nazwy `skribly_*`; wywołania `skryba_*` nadal działają. |
| Środowisko | Zmienne `SKRIBLY_*` mają pierwszeństwo, a `SKRYBA_*` nadal działają jako rezerwa. |
| Zapisane wybory | Motywy, konta trackerów, schemat linków, hooki commitów i preferencje zostają. |

W systemie macOS zaktualizowana aplikacja zachowuje starą lokalizację w folderze **Applications**; tylko świeża instalacja z pliku `.dmg` korzysta z nowej nazwy. Jeśli zainstalujesz ją w ten sposób, usuń starą aplikację; katalog danych pozostaje używany niezależnie od wybranej metody.
