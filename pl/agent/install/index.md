# Zainstaluj Skribly Agent

> Zainstaluj Skribly Agent na macOS, Windows lub Linux, poradź sobie z ostrzeżeniami przy niepodpisanych kompilacjach i wykonaj pierwsze kroki.

Skribly Agent jest publikowany na stronie GitHub Releases swojego repozytorium. Każde wydanie zawiera instalatory dla macOS, Windows i Linux, te same pliki ze stabilnymi nazwami, które zawsze wskazują najnowszą wersję, pakiety `.zip` używane przez automatyczną aktualizację oraz plik `SHA256SUMS.txt`.

:::note[Dostęp]
Repozytorium jest na razie prywatne, więc pliki wydań są dostępne dla osób z dostępem. Publiczne pobieranie jest planowane na moment otwarcia repozytoriów.
:::

## Wybierz plik

| System | Stabilna nazwa pliku | Uwagi |
| --- | --- | --- |
| macOS, Apple Silicon | `Skribly-mac-arm64.dmg` | Otwórz `.dmg` i przeciągnij aplikację do **Applications** |
| macOS, Intel | `Skribly-mac-x64.dmg` | Tak samo jak wyżej |
| Windows 10/11, x64 i ARM64 | `Skribly-Setup.exe` | Jeden instalator dla obu architektur; wybierasz folder oraz instalację dla bieżącego użytkownika lub dla wszystkich |
| Windows, przenośny | `Skribly-Portable-x64.exe` | Bez instalacji; nie aktualizuje się samodzielnie |
| Linux, dowolna dystrybucja | `Skribly-linux-x86_64.AppImage` | Nadaj uprawnienia do wykonywania i uruchom |
| Debian, Ubuntu | `Skribly-linux-amd64.deb` | Zainstaluj za pomocą `apt` |
| Fedora, RHEL, openSUSE | `Skribly-linux-x86_64.rpm` | Zainstaluj za pomocą `dnf` |

Wersjonowane kopie mają nazwy w stylu `Skribly-<version>-arm64.dmg` lub `Skribly-Setup-<version>.exe`. Aby sprawdzić pobrany plik:

```bash
shasum -a 256 -c SHA256SUMS.txt --ignore-missing   # Linux: sha256sum -c SHA256SUMS.txt --ignore-missing
```

## Instalacja

<Tabs syncKey="os">
<TabItem label="macOS">

<Steps>

1. Otwórz `.dmg` i przeciągnij **Skribly Agent** do **Applications**.

2. Uruchom aplikację raz. Nie jest podpisana certyfikatem Apple Developer, więc Gatekeeper blokuje pierwsze uruchomienie.

3. Otwórz **System Settings → Privacy & Security**, przewiń do komunikatu o Skribly Agent i kliknij **Open Anyway**. W starszych wersjach macOS kliknij aplikację prawym przyciskiem myszy i wybierz **Open**.

   Albo usuń flagę kwarantanny w Terminalu:

   ```bash
   xattr -dr com.apple.quarantine "/Applications/Skribly Agent.app"
   ```

</Steps>

Wystarczy zrobić to raz; aktualizacje instalowane przez aplikację działają dalej. Komunikat „is damaged and can't be opened” ma tę samą przyczynę i to samo rozwiązanie.

</TabItem>
<TabItem label="Windows">

<Steps>

1. Uruchom `Skribly-Setup.exe`. Jeden instalator zawiera x64 i ARM64 i wybiera właściwą wersję.

2. Instalator nie jest podpisany cyfrowo, więc SmartScreen może pokazać „Windows protected your PC”. Kliknij **More info → Run anyway**.

3. Wybierz folder oraz instalację dla siebie lub dla wszystkich użytkowników.

</Steps>

Przenośny plik `Skribly-Portable-x64.exe` działa bez instalacji i nie aktualizuje się samodzielnie.

</TabItem>
<TabItem label="Linux">

AppImage, dla dowolnej dystrybucji:

```bash
chmod +x Skribly-linux-x86_64.AppImage
./Skribly-linux-x86_64.AppImage
```

Na dystrybucjach bez FUSE 2 zainstaluj `libfuse2` (Ubuntu 22.04+: `sudo apt install libfuse2`, Ubuntu 24.04: `libfuse2t64`) albo uruchom AppImage z opcją `--appimage-extract-and-run`.

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

## Zainstaluj agenta

Skribly uruchamia agentów, których już masz. Zainstaluj co najmniej jednego, na przykład:

```bash
npm install -g @anthropic-ai/claude-code
```

Pełna lista z poleceniami instalacji znajduje się na stronie [Obsługiwani agenci](/pl/agent/agents/). Po zainstalowaniu nowego agenta kliknij **Ustawienia → Agenci → Wykryj ponownie**.

Aplikacja uruchomiona z Findera, Docka lub menu aplikacji dostaje okrojony `PATH`. Na macOS i Linux Skribly odczytuje środowisko z powłoki logowania raz przy starcie i dodaje `~/.local/bin`, `/opt/homebrew/bin` oraz `/usr/local/bin`, więc agenci zainstalowani przez nvm, Homebrew lub `npm -g` są widoczni tak samo jak w terminalu.

## Pierwsze kroki

<Steps>

1. **Przewodnik.** Około sekundy po pierwszym uruchomieniu animowany przewodnik prowadzi kursor przez 15 miejsc w aplikacji. Użyj `→` i `←`, aby przechodzić między krokami, **Wstrzymaj**, aby zatrzymać, oraz `Esc`, aby zamknąć. Odtworzysz go z **Pomoc → Uruchom przewodnik** lub z palety poleceń.

2. **Dodaj projekt.** Kliknij przełącznik projektów na górnym pasku i wybierz **Dodaj projekt…** albo **Sklonuj z linku…**, aby zacząć od zdalnego repozytorium. Skribly wykrywa gałąź bazową, polecenia sprawdzające, adres URL środowiska deweloperskiego i wzorzec gałęzi; dostosujesz je w **Ustawienia → Projekty**.

3. **Połącz tracker.** **Ustawienia → Trackery zadań → Dodaj tracker** → wybierz tracker, podaj adres URL i token → **Zapisz i sprawdź**.

4. **Uruchom agenta.** **Agenci** (`⌘2`) → **Nowa sesja** → wybierz agenta i kopię roboczą (albo nowy worktree) → **Uruchom**.

5. **Rozpocznij zadanie.** **Zadania** → wybierz zadanie → **Zacznij z agentem**. Agent czyta `TASK.md`, proponuje plan i czeka na Twoje „ok”.

6. **Zrób commit.** **Kod i git** (`⌘4`) → dodaj pliki do indeksu → **Zaproponuj** → **Commit**. Bez stopek AI.

</Steps>

Skribly działa w zasobniku systemowym, z pozycjami **Pokaż Skribly** i **Zakończ** w menu. Naraz działa tylko jedna instancja; drugie uruchomienie przywraca istniejące okno.
