# Zainstaluj Skribly Agent

> Zainstaluj Skribly Agent na macOS, Windows lub Linux, otwórz niepodpisane instalatory, sprawdź pobrany plik i udostępnij aplikacji swoich agentów.

Pobierz Skribly Agent ze strony [agent.skribly.pl/download](https://agent.skribly.pl/download/). Strona zawsze oferuje najnowszą wersję. Każde wydanie ma instalatory dla macOS, Windows i Linux, te same pliki ze stałymi nazwami, pakiety `.zip`, których używa automatyczna aktualizacja, i plik `SHA256SUMS.txt`. Wydania pochodzą z publicznego miejsca wydań, więc nie potrzebujesz konta.

## Wybierz plik

| System | Plik | Jak zainstalować |
| --- | --- | --- |
| macOS, Apple Silicon | `Skribly-mac-arm64.dmg` | Otwórz `.dmg` i przeciągnij aplikację do **Applications** |
| macOS, Intel | `Skribly-mac-x64.dmg` | To samo |
| Windows 10 i 11, x64 i ARM64 | `Skribly-Setup.exe` | Jeden instalator dla obu architektur; wybierasz folder oraz instalację dla siebie lub dla wszystkich użytkowników |
| Windows 10 i 11, tylko x64 | `Skribly-Setup-x64.exe` | Ten sam instalator tylko z x64, mniej więcej o połowę mniejszy |
| Windows 11, tylko ARM64 | `Skribly-Setup-arm64.exe` | Ten sam instalator tylko z ARM64 |
| Windows, przenośny | `Skribly-Portable-x64.exe` | Działa bez instalacji; nie aktualizuje się sam |
| Linux, dowolna dystrybucja | `Skribly-linux-x86_64.AppImage` | Nadaj plikowi prawo wykonywania i uruchom go |
| Debian, Ubuntu | `Skribly-linux-amd64.deb` | Zainstaluj przez `apt` |
| Fedora, RHEL, openSUSE | `Skribly-linux-x86_64.rpm` | Zainstaluj przez `dnf` |

Obok leżą kopie z wersją w nazwie, na przykład `Skribly-<version>-arm64.dmg`.

## Instalacja

<Tabs syncKey="os">
<TabItem label="macOS">

<Steps>

1. Otwórz `.dmg` i przeciągnij **Skribly Agent** do **Applications**.

2. Uruchom aplikację raz. Nie ma certyfikatu Apple Developer i nie jest notaryzowana, więc Gatekeeper blokuje pierwsze uruchomienie. Zamknij komunikat.

3. Otwórz **System Settings → Privacy & Security**, przewiń do komunikatu o Skribly Agent i kliknij **Open Anyway**. W starszych wersjach macOS kliknij aplikację prawym przyciskiem i wybierz **Open**.

   Albo usuń flagę kwarantanny w Terminalu:

   ```bash
   xattr -dr com.apple.quarantine "/Applications/Skribly Agent.app"
   ```

</Steps>

Robisz to raz. Aktualizacje instalowane przez aplikację działają dalej. Komunikat „is damaged and can't be opened” ma tę samą przyczynę i to samo rozwiązanie.

</TabItem>
<TabItem label="Windows">

<Steps>

1. Uruchom `Skribly-Setup.exe` albo instalator x64 lub ARM64. Uniwersalny sam wybiera właściwą architekturę.

2. Instalator nie jest podpisany cyfrowo, więc SmartScreen może pokazać „Windows protected your PC”. Kliknij **More info → Run anyway**.

3. Wybierz folder oraz instalację dla siebie lub dla wszystkich użytkowników.

</Steps>

Przenośny `Skribly-Portable-x64.exe` nie wymaga instalacji i nie aktualizuje się sam.

</TabItem>
<TabItem label="Linux">

AppImage, dla dowolnej dystrybucji:

```bash
chmod +x Skribly-linux-x86_64.AppImage
./Skribly-linux-x86_64.AppImage
```

Dystrybucja bez FUSE 2 potrzebuje `libfuse2` (Ubuntu 22.04 i nowsze: `sudo apt install libfuse2`; Ubuntu 24.04: `libfuse2t64`). Albo uruchom AppImage z opcją `--appimage-extract-and-run`.

Debian i Ubuntu:

```bash
sudo apt install ./Skribly-linux-amd64.deb
```

Fedora, RHEL i openSUSE:

```bash
sudo dnf install ./Skribly-linux-x86_64.rpm
```

Pakiety `.deb` i `.rpm` dodają Skribly do menu aplikacji.

</TabItem>
</Tabs>

## Sprawdź pobrany plik

Każde wydanie ma plik `SHA256SUMS.txt` z SHA-256 każdego pliku, także tych o stałych nazwach. Pobierz go obok instalatora i uruchom w tym folderze:

| System | Polecenie |
| --- | --- |
| macOS | `shasum -a 256 -c SHA256SUMS.txt --ignore-missing` |
| Linux | `sha256sum -c SHA256SUMS.txt --ignore-missing` |
| Windows PowerShell | `Get-FileHash .\Skribly-Setup.exe -Algorithm SHA256`, potem porównaj wynik z wierszem tego pliku w `SHA256SUMS.txt` |

`OK` albo taki sam skrót oznacza, że plik jest tym, który zbudowało wydanie.

## Zainstaluj agenta

Skribly uruchamia agentów, których już masz. Potrzebujesz `git` i co najmniej jednego agenta, na przykład:

```bash
npm install -g @anthropic-ai/claude-code
```

Agenta możesz też zainstalować z aplikacji: naciśnij **Zainstaluj** na jego karcie w **Ustawienia → Agenci**. Pełna lista z poleceniami instalacji jest na stronie [Obsługiwani agenci](/pl/agent/agents/). Po zainstalowaniu nowego agenta wybierz **Ustawienia → Agenci → Wykryj ponownie**. Aplikacja nie potrzebuje osobnego Node.js.

Aplikacja uruchomiona z Findera, Docka lub menu aplikacji dostaje krótki `PATH`. Na macOS i Linux Skribly raz przy starcie odczytuje środowisko z Twojej powłoki logowania, z limitem 5 sekund, i dodaje `~/.local/bin`, `/opt/homebrew/bin` oraz `/usr/local/bin`. Agenci zainstalowani przez nvm, Homebrew lub `npm -g` są wtedy widoczni jak w Twoim terminalu. Okno otwiera się od razu; agenci, panele i wszystko, co uruchamia program, czekają na tę powłokę, więc nic nie działa z krótkim `PATH`.

<Aside type="note">
Odinstalowanie usuwa aplikację i zostawia folder z Twoimi danymi, w którym są ustawienia i sesje. Co aplikacja zapisuje, jest na stronie [Dane i sieć](/pl/agent/data-and-network/).
</Aside>

## Powiązane strony

<CardGrid>
  <LinkCard title="Pierwsze uruchomienie" href="/pl/agent/first-run/" description="Przewodnik, lista Pierwsze kroki i ikona na pasku menu." />
  <LinkCard title="Obsługiwani agenci" href="/pl/agent/agents/" description="13 agentów i jak ich zainstalować." />
  <LinkCard title="Aktualizacje" href="/pl/agent/updates/" description="Jak aplikacja aktualizuje się sama i czym są pliki wydań." />
  <LinkCard title="Rozwiązywanie problemów" href="/pl/agent/troubleshooting/" description="Gdy agent nie jest znaleziony albo aplikacja się nie otwiera." />
</CardGrid>
