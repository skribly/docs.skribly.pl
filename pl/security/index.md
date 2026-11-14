# Bezpieczeństwo

> Jak zgłosić problem z bezpieczeństwem w dowolnym narzędziu Skribly oraz jak Skribly Agent, agent-skills i Skribly Tracker obsługują tokeny, dostęp do sieci i Twój kod.

## Zgłaszanie luki w zabezpieczeniach

Napisz na adres **[contact@skribly.pl](mailto:contact@skribly.pl)** i podaj:

- nazwę narzędzia i jego wersję (w Skribly Agent: **Pomoc → O aplikacji**);
- co może zrobić atakujący i jak odtworzyć problem krok po kroku;
- czy problem został już upubliczniony.

Nie zakładaj publicznego zgłoszenia i nigdzie nie publikuj szczegółów, zanim odpowiemy. Potwierdzimy, że dostaliśmy zgłoszenie, będziemy informować Cię o postępach w naprawie i, jeśli chcesz, wymienimy Cię w notatkach do wydania. Skribly to niekomercyjny projekt rozwijany w wolnym czasie, więc nie ma programu bug bounty.

## Skribly Agent

- **Brak telemetrii i własnego serwera.** Aplikacja nie wysyła statystyk, raportów o awariach ani identyfikatorów.
- **Tokeny w systemowym pęku kluczy.** Tokeny trackera są szyfrowane za pomocą Electron `safeStorage` (Keychain w macOS, DPAPI w Windows, libsecret w Linuksie). Jeśli szyfrowanie nie jest dostępne, tokeny pozostają wyłącznie w pamięci i nigdy nie są zapisywane na dysku jawnym tekstem.
- **Odizolowany interfejs.** Izolacja kontekstu jest włączona, interfejs może wywoływać tylko metody jednego typowanego kontraktu, a jego Content-Security-Policy zezwala wyłącznie na skrypty z aplikacji. Osadzone strony nie mają dostępu do Node.js.
- **Polecenia bez powłoki.** Git, agenci i edytory są uruchamiani przez `execFile`, więc argumenty nigdy nie są interpretowane przez powłokę. Operacje na plikach odrzucają ścieżki poza projektem.
- **Tylko porty lokalne.** API sterowania i opcjonalny port debugowania przeglądarki nasłuchują wyłącznie na `127.0.0.1`. API sterowania wymaga losowego tokenu, nowego przy każdym starcie.
- **Agenci działają z Twoimi uprawnieniami.** Agent w terminalu może zrobić wszystko, co Ty możesz zrobić w terminalu, i może odczytać tokeny, które Skribly przekazuje do jego sesji. Uruchamiaj agentów, którym ufasz.

Skribly Agent łączy się tylko z Twoimi trackerami, `api.osv.dev` (audyty zależności), `open-vsx.org` (motywy), GitHubem (aktualizacje i skille), stronami, które audytujesz lub otwierasz, oraz z usługą tłumaczeń, gdy wybierzesz język inny niż polski lub angielski.

:::caution
Włączony port debugowania przeglądarki może być używany przez **dowolny program na Twoim komputerze** bez uwierzytelniania i widzi każdą kartę, także te z zalogowanymi kontami. Włączaj go tylko na czas, gdy agenci go potrzebują.
:::

## agent-skills

- Poświadczenia pochodzą ze zmiennych środowiskowych albo z `~/.config/agent-skills/credentials.env`, nigdy z repozytorium. `agent-skills doctor` ostrzega, gdy inni mogą czytać ten plik.
- Klient trackera działa tylko do odczytu, chyba że opublikujesz komentarz z `--post --yes`. Tokeny są wysyłane wyłącznie na host samego trackera, a przekierowania na inny host je odrzucają.
- Skany sekretów maskują znalezione wartości.
- Nic nie jest zbierane ani wysyłane. CLI łączy się tylko z Twoim trackerem, z OSV.dev lub PageSpeed Insights, gdy uruchamiasz te audyty, oraz z rejestrami pakietów przez Twojego menedżera pakietów.

## Skribly Tracker

- Osobiste tokeny dostępu działają z rolą właściciela i mogą być tylko do odczytu albo wygasać. Zobacz [Osobiste tokeny dostępu](/pl/tracker/tokens/).
- Webhooki są podpisywane HMAC-SHA256 z surowej treści żądania. Zobacz [Webhooki i podpisywanie](/pl/tracker/webhooks/).
- Markdown w opisach i komentarzach jest renderowany z zescapowanym surowym HTML.
- API dopuszcza 240 żądań na minutę na użytkownika.
- Przy własnym hostingu umieść go za HTTPS, ustaw własne hasła do bazy i hasło administratora oraz wyłącz debugowanie. Zobacz [Własny hosting z Dockerem](/pl/tracker/self-hosting/#uruchomienie-dla-zespołu).

## Ta witryna

docs.skribly.pl to statyczna witryna bez analityki, bez śledzenia i bez żądań do usług zewnętrznych: czcionki i indeks wyszukiwania pochodzą z tego samego adresu. Zapamiętuje tylko Twoje wybory dotyczące wyglądu: motyw w ciasteczku `sk-theme` i ustawienia dostępności w ciasteczku `sk-a11y`, oba na `.skribly.pl`, więc obowiązują na każdej stronie Skribly, oraz kopię w pamięci lokalnej przeglądarki (local storage). Żadne z nich nie jest wysyłane dalej.
