# Agenci i sesje

> Uruchom sesję w Skribly Agent, czytaj stany agentów i Dlaczego taki stan, używaj panelu agenta, paska narzędzi i trybu czatu, wznawiaj po restarcie i przekazuj pracę.

Sesja to jeden agent w jednym panelu: terminal z agentem albo czat. Uruchamiasz ją z **Nowa sesja**, a aplikacja wykrywa, co agent robi, mówi Ci, gdy Cię potrzebuje, i przywraca go po restarcie.

![Panel agenta otwarty po prawej stronie widoku Agenci: czat Claude Code z polem wiadomości, modelem oraz przyciskami Edytuj i Remote](../../../../assets/screens/agent-panel.webp)

## Otwórz widok

- Kliknij **Agenci** na pasku aktywności albo naciśnij `⌘2`, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Agenci** albo **Nowa sesja: …** dla agenta.

Skróty na tej stronie używają `⌘`. W Windows i Linux używaj `Ctrl`. Prefiks `Ctrl+B` jest taki sam w każdym systemie.

## Jak uruchomić sesję

<Steps>

1. Naciśnij **Nowa sesja** na pasku kart, albo `Ctrl+B a`, albo przycisk podziału w nagłówku panelu.

2. Wybierz kartę agenta albo **Terminal** dla zwykłej powłoki. Agent, który nie jest zainstalowany, jest przyciemniony i pokazuje **Zainstaluj …** oraz polecenie instalacji.

3. Wybierz **Projekt** i **Kopia robocza**: główną, istniejący worktree albo **+ Nowy worktree…** z gałęzią, tworzoną z gałęzi bazowej projektu. Wybierz **Maszyna**: **Ten komputer** albo maszynę SSH.

4. Opcjonalnie wypełnij **Nazwa dla CLI i innych agentów**, na przykład `reviewer` (małe litery, cyfry, `_` i `-`, do 32 znaków), wybierz **Tryb**, **Terminal** lub **Czat**, i napisz **Pierwsza wiadomość (opcjonalnie)**. W trybie czatu zaznacz **może zmieniać pliki**, jeśli agent ma edytować.

5. Naciśnij **Uruchom** albo `Enter` w polu wiadomości (`Shift+Enter` dodaje wiersz).

</Steps>

W trybie terminala aplikacja otwiera powłokę logowania (`$SHELL -l`, a w Windows `pwsh` lub `powershell.exe`) i wpisuje do niej polecenie agenta, z pierwszą wiadomością jako argumentem, tam gdzie agent go przyjmuje. Agent, który nie przyjmuje, jak OpenCode czy Aider, dostaje ją wpisaną po starcie. Sesja ma zmienną `SKRIBLY_TERMINAL=<id>`.

## Stany agentów

Stan sesji jest czytany z ekranu agenta i jego wyjścia. Nie potrzeba żadnej wtyczki ani hooka w agencie.

| Stan | Co oznacza |
| --- | --- |
| **startuje** | Sesja została właśnie utworzona |
| **pracuje** | Agent pracuje: na wyjściu jest aktywność |
| **czeka na decyzję** | Agent prosi o zgodę lub wybór i czeka na Ciebie |
| **skończył** | Agent skończył turę, a Ty jeszcze nie widziałeś wyniku |
| **gotowy** | Widziałeś wynik; agent czeka na następny prompt |
| **zakończony** | Proces się zakończył; szczegóły mają kod wyjścia |

- **Ekran agenta.** Każdy agent ma reguły dla stanów oczekiwania i pracy, na przykład pytanie „Do you want to…?” Claude Code albo okno zgody Codexa. Reguły ogólne łapią `(y/n)`, „Press Enter to continue” i prośbę o hasło. Reguły są ostrożne: fałszywe oczekiwanie jest gorsze niż spóźnione.
- **Aktywność wyjścia.** Bez pasującej reguły wyjście w ciągu ostatnich 1,5 sekundy oznacza pracę. Po 2,5 sekundy ciszy tura się kończy: skończył, jeśli była prawdziwa praca, a Ty jej nie widziałeś, w przeciwnym razie gotowy.
- **Rozpoznanie agenta.** Aplikacja sprawdza proces pierwszoplanowy, więc panel Terminal, w którym ręcznie uruchomiłeś `codex`, dostaje awatar i reguły Codexa.
- **Oglądanie.** Panel w stanie skończył, widoczny w aktywnym oknie, staje się gotowy.
- **Zakończenie procesu.** Sesja staje się zakończona.

### Dlaczego taki stan?

Naciśnij znacznik stanu w nagłówku panelu. Okno pokazuje stan, rozpoznanego agenta, źródło stanu (wzorzec ekranu agenta, aktywność wyjścia, proces zakończony albo brak), proces pierwszoplanowy, regułę, która zadziałała, i ostatnie 24 wiersze ekranu. Zacznij tam, gdy stan wydaje się błędny.

## Panel agenta

Panel po prawej otwiera się nad dowolnym widokiem przyciskiem obok pola wyszukiwania albo `⌘⇧A`. Każdy projekt trzyma własne rozmowy, a one wracają po restarcie. Przeciągnij lewą krawędź, by zmienić szerokość. **Nowa rozmowa** zaczyna kolejną, a **Zamknij panel** go ukrywa.

| Narzędzie | Co robi |
| --- | --- |
| Menu agenta | Wybiera agenta albo instaluje brakującego. Zmiana agenta zaczyna nową rozmowę |
| **Zmień model** | Model domyślny, lista agenta albo dowolna wpisana nazwa; przycisk odświeżania pyta agenta ponownie |
| **Wysiłek** | Tylko Claude Code: `--effort` od niskiego do maksymalnego |
| **Polecenia /** | Polecenia agenta, projektu, Twojego folderu domowego i wtyczek. `/clear` zaczyna od nowa |
| **Wtyczki** | Włącza i wyłącza wtyczki Claude Code; następna wiadomość używa zmiany |
| **Dołącz pliki** | Dołącza pliki. Możesz też upuścić pliki na pole albo wkleić obraz |
| **Edycja** lub **Plan** | Czy agent może zmieniać pliki |
| **Remote** | Uruchamia sesję Claude Code z Remote Control, by sterować nią z telefonu albo z claude.ai/code |
| **Otwórz w terminalu** | Kontynuuje tę samą rozmowę w terminalu |

Pod polem wiadomości widzisz czas sesji, subagentów i kontekst, o ile agent je podaje.

## Pasek narzędzi pod panelem

Panel agenta ma te same narzędzia w pasku pod sobą: **Polecenia /**, **Zmień model**, **Wysiłek**, **Wtyczki**, **Przeładuj wtyczki**, **Dołącz pliki** i **Remote**. Wpisują do sesji, więc `/model`, `/effort`, `/reload-plugins` i `/remote-control` działają tak, jakbyś wpisał je ręcznie. Pasek wstrzymuje się, gdy agent zadaje pytanie, bo tekst wysłany wtedy odpowiadałby na nie. Subagenci i kontekst w terminalu pochodzą z transkryptu Claude Code, więc inni agenci pokazują tylko czas.

## Tryb czatu

Czat to agent uruchamiany bez interfejsu: każda wiadomość to osobne uruchomienie z identyfikatorem sesji z ostatniej odpowiedzi, więc agent pamięta rozmowę, a między wiadomościami nie działa żaden proces. Panel pokazuje tekst, wywołania narzędzi i błędy.

| Klawisz | Działanie |
| --- | --- |
| `Enter` | Wyślij |
| `Shift+Enter` | Nowy wiersz |
| **Stop** | Przerwij odpowiedź |

Czaty są trzymane w pamięci interfejsu i nie wracają po restarcie; kontynuuj rozmowę w terminalu przez **Otwórz w terminalu**. Kimi CLI nie ma trybu czatu. Agenci i ich flagi są na stronie [Obsługiwani agenci](/pl/agent/agents/).

## Wznawianie po ponownym uruchomieniu

**Ustawienia → Sesje i sterowanie → Odtwarzaj sesje po restarcie** jest domyślnie włączone.

- Karty, podziały i panele wracają na swoje miejsca z tymi samymi identyfikatorami, nazwami, worktree i zadaniami.
- Agent, dla którego aplikacja znalazła natywny identyfikator sesji, kontynuuje rozmowę i dostaje znacznik **resumed**. Claude Code, Cursor Agent, Droid i Qwen Code używają `--resume <id>`, Codex `codex resume <id>`, Copilot CLI `--resume=<id>`, OpenCode, Crush i Kimi CLI `--session <id>`, a Goose `goose session --resume --session-id <id>`. Własny agent używa argumentów wznowienia ze swojej definicji.
- Inne panele, czyli powłoki, agenci bez sesji, Amp, Gemini CLI, Aider i sesje SSH, startują jako świeża powłoka w tym samym folderze z podpowiedzią polecenia, które ponownie uruchomi agenta.

Zakończenie aplikacji kończy wszystkie procesy terminali; nie ma serwera w tle. Ciągłość zapewnia natywne wznawianie agentów i pliki stanu. Panele wcześniejszych sesji, nie tylko tych otwartych przy ostatnim zamknięciu, są w [historii sesji](/pl/agent/session-history/).

## Rozsyłanie wiadomości

Wyślij jeden prompt do kilku agentów. Zaznacz pola wyboru w nagłówkach paneli, wpisz tekst w polu na pasku kart (**Zaznacz panele (☑), żeby wysłać im to samo**, co po zaznaczeniu czyta się **Do N zaznaczonych…**) i naciśnij `Enter` albo **Wyślij do zaznaczonych paneli**. Tekst trafia do każdego działającego panelu tak, jakbyś go wkleił i potwierdził `Enter`. Zakończone panele są pomijane.

## Przekazywanie pracy

Przycisk przekazania w nagłówku panelu oddaje pracę innemu agentowi bez odtwarzania rozmowy.

<Steps>

1. Naciśnij **Wyślij prośbę**. Obecny agent zapisuje swój stan, co zrobione, następny krok, decyzje i otwarte pytania, w pliku: `.skribly/tasks/<KEY>/STATE.md`, gdy sesja dotyczy zadania, w przeciwnym razie `.skribly/handoff.md`.

2. Naciśnij **Uruchom** i nazwę nowego agenta. Startuje w tym samym folderze i worktree, obok poprzedniego, z promptem, by przeczytał plik stanu, uruchomił `git status` i `git diff`, podsumował w trzech punktach i kontynuował.

</Steps>

Zrób krok 2 po kroku 1. Nowy agent zaczyna wtedy od kilkudziesięciu wierszy stanu zamiast od całego transkryptu.

## Podgląd agentów

Naciśnij przycisk siatki na pasku kart albo `Ctrl+B o`, by zobaczyć **Podgląd agentów**: siatkę podglądów na żywo wszystkich sesji, z tymi, które Cię potrzebują, na początku. Podglądy są czytane tylko, gdy podgląd jest na ekranie.

## Powiązane strony

<CardGrid>
  <LinkCard title="Skrzynka uwagi" href="/pl/agent/inbox/" description="Sesje, które czekają na Ciebie, i powiadomienia." />
  <LinkCard title="Obsługiwani agenci" href="/pl/agent/agents/" description="13 agentów i co każdy obsługuje." />
  <LinkCard title="Terminale" href="/pl/agent/terminals/" description="Panele powłoki, maszyny SSH i terminal widoku Kod." />
  <LinkCard title="Obszary robocze" href="/pl/agent/workspaces/" description="Karty, podziały i pasek obszarów." />
</CardGrid>
