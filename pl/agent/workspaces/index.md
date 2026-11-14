# Obszary robocze i panele

> Jak jest zorganizowany widok agentów w Skribly Agent — obszary robocze, karty, podziały i panele — oraz jak działają stany agentów i powiadomienia.

Widok **Agenci** działa jak multiplekser terminali stworzony dla agentów: obszary robocze → karty → podziały → panele. Każdy panel to terminal albo czat z agentem, z wykrywaniem stanu, powiadomieniami i wznawianiem po restarcie.

## Model układu

| Poziom | Co to jest | Skąd się bierze |
| --- | --- | --- |
| **Obszar roboczy** | Katalog projektu lub jeden z jego worktree | Panel należy do obszaru roboczego, którego ścieżka najlepiej pasuje do jego katalogu. Sesje spoza jakiegokolwiek projektu trafiają do **Inne katalogi**. |
| **Karta** | Zestaw paneli w jednym obszarze roboczym | **+** na pasku kart, `Ctrl+B c` lub `⌘T`. Kliknij kartę dwukrotnie, aby zmienić jej nazwę. |
| **Podział** | Drzewo podziałów poziomych i pionowych | Przeciągaj separatory za pomocą myszy. |
| **Panel** | Terminal agenta, powłoka lub czat | **Nowa sesja**, skróty podziału, CLI, potoki lub zadania. |

Terminale działają w głównym procesie aplikacji, więc ani przełączanie widoków lub kart, ani przeładowanie okna ich nie przerywa. Ponownie otwarty panel odtwarza swoje ostatnie wyjście. Układ jest zapisywany na bieżąco.

Gdy karta ma trzy panele, Skribly otwiera następną sesję na nowej karcie, aby panele nie stały się zbyt wąskie. Sesje uruchomione z zewnątrz, przez CLI, potoki lub zadania, również dostają miejsce w układzie.

## Pasek boczny obszarów roboczych

Pasek boczny **Obszary robocze** po lewej stronie (przełączany przyciskiem lub skrótem `Ctrl+B b`) pokazuje:

- jedną grupę na projekt, z wierszem **główna** i jednym wierszem na każdy worktree (z nazwą gałęzi);
- w każdym obszarze roboczym jego sesje z awatarem agenta, jego `@name` i stanem; kliknij sesję, aby przejść do jej panelu;
- plakietkę w nagłówku z liczbą sesji oczekujących na Ciebie;
- **+** obok projektu, aby utworzyć worktree, oraz ikonę kosza obok worktree, aby go usunąć.

Stan karty, obszaru roboczego lub projektu jest najważniejszym stanem spośród jego paneli, w tej kolejności: *czeka na decyzję* → *skończył* → *pracuje* → *startuje* → *gotowy* → *zakończony*.

## Nagłówek panelu

| Element | Działanie |
| --- | --- |
| Pole wyboru | Wybiera panel do [rozsyłania](/pl/agent/terminals/#rozsyłanie-wiadomości) |
| Awatar i tytuł | Kliknij dwukrotnie, aby zmienić nazwę (`Enter` zapisuje, `Esc` anuluje) |
| `@name` | Nazwa sesji używana przez CLI i MCP |
| Gałąź | Sesja działa w osobnym worktree |
| Maszyna | Sesja działa na maszynie SSH |
| **wznowiony** | Panel został przywrócony po restarcie |
| Plakietka stanu | Otwiera okno [Dlaczego taki stan?](#dlaczego-taki-stan) |
| Przekazanie | [Przekazuje pracę innemu agentowi](/pl/agent/terminals/#przekazywanie-pracy) |
| Podział w prawo, podział w dół | Otwiera okno **Nowa sesja** obok tego panelu |
| Powiększ | To samo co `Ctrl+B z` |
| Zamknij | Najpierw pyta, gdy agent pracuje lub czeka |

## Stany agentów

| Stan | Etykieta | Znaczenie |
| --- | --- | --- |
| `starting` | startuje | Sesja została właśnie utworzona |
| `working` | pracuje | Agent pracuje: w jego wyjściu widać ruch |
| `blocked` | czeka na decyzję | Agent prosi o zatwierdzenie lub wybór i czeka na Ciebie |
| `done` | skończył | Agent skończył turę, a Ty nie widziałeś jeszcze wyniku |
| `idle` | gotowy | Wynik został obejrzany; agent czeka na następny prompt |
| `exited` | zakończony | Proces zakończył działanie |

Stany wynikają z tego, co pokazuje agent, bez wtyczek i hooków po jego stronie:

- **Ekran agenta.** Każdy terminal ma niewidoczną kopię, która renderuje ten sam strumień, więc Skribly odczytuje wyrenderowany ekran, a nie surowe kody sterujące. Każdy agent ma reguły dla stanów *czeka na decyzję* i *pracuje*, takie jak pytanie „Do you want to…?” w Claude Code albo okno zatwierdzenia w Codexie. Reguły ogólne wychwytują `(y/n)`, „Press Enter to continue” i pytania o hasło. Reguły są ostrożne: fałszywe *czeka na decyzję* jest gorsze niż spóźnione.
- **Ruch na wyjściu.** Gdy żadna reguła nie pasuje, wyjście z ostatnich 1,5 sekundy oznacza stan *pracuje*. Po 2,5 sekundy ciszy tura się kończy: stanem jest *skończył*, jeśli była prawdziwa praca, której jeszcze nie widziałeś, a w przeciwnym razie *gotowy*.
- **Rozpoznawanie agenta.** Skribly sprawdza proces pierwszoplanowy i ekran, więc zwykły panel terminala, w którym ręcznie uruchomisz `codex`, dostanie awatar i reguły Codexa.
- **Wyświetlenie.** Widoczny panel w stanie *skończył* w aktywnym oknie zmienia stan na *gotowy*.
- **Zakończenie procesu.** Sesja zmienia stan na *zakończony*.

### Dlaczego taki stan?

Kliknij plakietkę stanu w nagłówku panelu. Okno dialogowe pokazuje stan, rozpoznanego agenta, źródło (wzorzec ekranu, ruch na wyjściu lub zakończenie procesu), proces pierwszoplanowy, pasującą regułę oraz 24 ostatnie wiersze ekranu. Program, który stale coś odrysowuje, na przykład zegar lub pasek postępu, jest pokazywany jako *pracuje*.

## Powiadomienia

| Gdzie | Kiedy |
| --- | --- |
| Plakietka na ikonie widoku **Agenci** | Liczba sesji czekających na Ciebie albo, gdy żadna nie czeka, liczba sesji, które pracują |
| Pasek stanu | „N pracuje · M czeka” |
| Wiadomość w aplikacji | Agent, którego nie widzisz, prosi o decyzję albo skończył turę |
| Powiadomienie systemowe | Agent prosi o decyzję albo zakończył turę po co najmniej 15 sekundach pracy, gdy żadne okno Skribly nie jest aktywne. Kliknięcie otwiera panel. Zwykłe powłoki nie wysyłają powiadomień. |
| `skribly notify` | Agent lub skrypt wysyła powiadomienie samodzielnie |

Wyłącz powiadomienia systemowe w **Ustawienia → Edytor i powiadomienia → Powiadomienia**.

Podgląd agentów pokazuje jednocześnie ekran każdego agenta. Klawisze strzałek wybierają sesję, a `Enter` lub cyfra ją otwiera.

## Worktree dla agentów

Worktree to osobny katalog z tą samą historią git, więc dwaj agenci w dwóch worktree nie nadpisują swoich plików.

1. Na pasku bocznym obszarów roboczych najedź kursorem na projekt i kliknij **+** albo wybierz **+ Nowy worktree…** w oknie **Nowa sesja**.
2. Wprowadź gałąź i bazę. Istniejąca gałąź zostanie przełączona (checkout); nowa powstanie z bazy, domyślnie z gałęzi bazowej projektu.
3. Kliknij **Utwórz**. Worktree pojawi się jako osobny obszar roboczy.

| Szczegół | Wartość |
| --- | --- |
| Katalog | `~/.skribly/worktrees/<repo>/<branch>` lub folder ustawiony w **Ustawienia → Sesje i sterowanie → Katalog worktree** |
| Usuwanie | Ikona kosza uruchamia `git worktree remove` i `git worktree prune`. **Gałąź zostaje.** Gdy są niezatwierdzone zmiany, Skribly pyta, czy wymusić usunięcie. |
| Odświeżanie | Co 30 sekund, więc worktree utworzone w terminalu również się pojawią |
