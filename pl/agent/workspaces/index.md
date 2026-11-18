# Obszary robocze i panele

> Jak jest zbudowany widok Agenci w Skribly Agent: obszary robocze, karty, podziały i panele, pasek obszarów, powiększanie, przeciąganie, karta Herdr i worktree na agenta.

Widok **Agenci** działa jak multiplekser terminali zbudowany dla agentów: obszary robocze, w nich karty, w nich podziały, w nich panele. Każdy panel to terminal albo czat z agentem. Używasz go, by uruchomić kilku agentów obok siebie i od razu widzieć, który potrzebuje Ciebie.

![Widok Agenci: pasek obszarów roboczych z trzema projektami i ich worktree oraz panel Claude Code, który przegląda diff i wypisuje problemy dostępności](../../../../assets/screens/agent-agents.webp)

## Otwórz widok

- Kliknij **Agenci** na pasku aktywności po lewej albo naciśnij `⌘2`, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Agenci**.

Skróty na tej stronie używają `⌘`. W Windows i Linux używaj `Ctrl`. Skróty paneli zaczynają się od prefiksu `Ctrl+B` w każdym systemie.

## Model układu

| Poziom | Czym jest | Skąd się bierze |
| --- | --- | --- |
| **Obszar roboczy** | Folder projektu albo jeden z jego worktree | Panel należy do obszaru, którego ścieżka najlepiej pasuje do jego folderu. Sesje spoza projektów trafiają do **Inne katalogi**. |
| **Karta** | Zestaw paneli w jednym obszarze | **+** na pasku kart, `Ctrl+B c` lub `⌘T`. Kliknij kartę dwukrotnie, by zmienić nazwę. |
| **Podział** | Drzewo podziałów poziomych i pionowych | **Nowa sesja w prawo** i **Nowa sesja w dół** w nagłówku panelu, `Ctrl+B v` i `Ctrl+B -`, albo `⌘D` i `⌘⇧D` na macOS. |
| **Panel** | Terminal agenta, powłoka albo czat | **Nowa sesja**, przyciski podziału, polecenie `skribly`, potoki lub zadania. |

Terminale żyją w głównym procesie aplikacji, więc zmiana widoku albo karty ani przeładowanie okna ich nie przerywa. Ponownie otwarty panel odtwarza swoje ostatnie wyjście. Układ, z kartami, podziałami, rozmiarami i aktywnym obszarem, jest zapisywany na bieżąco.

Gdy nowa sesja nie ma podanego miejsca, trafia do aktywnej karty swojego obszaru. Gdy karta ma już trzy panele, następna sesja otwiera się w nowej karcie, żeby panele nie robiły się zbyt wąskie. Sesje uruchomione z zewnątrz, przez polecenie `skribly`, potoki lub zadania, też dostają miejsce, a panele zamkniętych sesji znikają same.

## Pasek obszarów

Pasek **Obszary robocze** jest po lewej stronie widoku. Ukryj go jego przyciskiem albo `Ctrl+B b`; przycisk **Pokaż obszary** go przywraca.

- Jedna grupa na projekt, z kolorową kropką, zwijana kliknięciem. W niej wiersz **główna** i po jednym wierszu na worktree, nazwanym jego gałęzią.
- Pod każdym obszarem jego sesje: awatar agenta, nazwa i stan. Kliknij jedną, by przejść do jej panelu; najedź, by na nią zerknąć.
- Obok obszaru kropka z najważniejszym stanem jego sesji i ich liczba. Najważniejszy stan to, w tej kolejności: czeka na decyzję, skończył, pracuje, startuje, gotowy, zakończony.
- W nagłówku przycisk z liczbą sesji czekających na Ciebie; przeskakuje do następnej (`Ctrl+B j`).
- **Nowy worktree** (**+**, który pojawia się po najechaniu) przy projekcie oraz ikona kosza przy worktree, która go usuwa i zostawia jego gałąź.

## Jak pracować w kartach i podziałach

<Steps>

1. Naciśnij **+** na pasku kart albo `Ctrl+B c`, by dostać nową kartę w bieżącym obszarze. Przełączaj kliknięciem, `Ctrl+B n` i `Ctrl+B p` albo `Ctrl+B` i numerem karty.

2. Podziel panel przyciskami podziału w jego nagłówku albo `Ctrl+B v` i `Ctrl+B -`. Nowy podział uruchamia powłokę w folderze panelu; **Nowa sesja** obok uruchamia agenta.

3. Przeciągnij separator między panelami, by zmienić ich rozmiar. Panel zachowuje co najmniej 8 procent swojego podziału.

4. Powiększ aktywny panel przyciskiem powiększenia albo `Ctrl+B z`. Ten sam skrót go przywraca.

5. Przechodź między panelami przez `Ctrl+B` i strzałki. Zamknij aktywny panel przez `Ctrl+B x`; dla agenta, który pracuje lub czeka, aplikacja najpierw pyta.

</Steps>

Zamknięcie karty zamyka wszystkie jej sesje, po potwierdzeniu, które mówi, ile jeszcze pracuje. Pełna lista klawiszy prefiksu jest w [Skrótach klawiszowych](/pl/agent/shortcuts/).

## Co jest w nagłówku panelu

| Element | Działanie |
| --- | --- |
| Pole wyboru | Zaznacza panel do [rozsyłania wiadomości](/pl/agent/terminals/#rozsyłanie-wiadomości) |
| Awatar i tytuł | Kliknij dwukrotnie, by zmienić nazwę (`Enter` zapisuje, `Esc` anuluje) |
| `@nazwa` | Nazwa sesji dla polecenia `skribly` i MCP |
| Gałąź | Sesja pracuje w osobnym worktree |
| Maszyna | Sesja działa na maszynie SSH |
| **resumed** | Panel odtworzono po restarcie |
| Znacznik stanu | Otwiera **Dlaczego taki stan?**, opisane w [Agenci i sesje](/pl/agent/sessions/#dlaczego-taki-stan) |
| Przekazanie | [Przekazuje pracę innemu agentowi](/pl/agent/terminals/#przekazywanie-pracy) |
| Nowa sesja w prawo, w dół | Otwiera **Nowa sesja** obok tego panelu |
| Powiększ | To samo co `Ctrl+B z` |
| Zamknij | Najpierw pyta, gdy agent pracuje lub czeka |

## Karta Herdr

Jeśli używasz też [Herdr](https://herdr.dev), przycisk **Herdr** na pasku kart pokazuje jego obszary robocze i agentów w nich, każdego ze stanem: pracuje, czeka na osobę, skończył lub gotowy. Przycisk przy obszarze lub agencie pokazuje go w Herdr, a pole pod agentem, **Wyślij polecenie do agenta…**, wysyła mu prompt.

![Karta Herdr w widoku Agenci: dwa obszary robocze Herdr z agentami, ich stanami i polem promptu dla każdego agenta](../../../../assets/screens/agent-herdr.webp)

Panel czyta Herdr przez jego wiersz poleceń co kilka sekund, tylko gdy jest otwarty, a okno widoczne. Nigdy nie uruchamia, nie zatrzymuje ani nie podłącza serwera Herdr. Gdy brakuje polecenia `herdr`, jego serwer nie działa, nie ma obszarów roboczych albo odpowiedzi nie da się odczytać, panel mówi to krótkim pustym stanem. Herdr odmawia promptu dla agenta, który czeka na decyzję, a komunikat jest pokazywany tak, jak przychodzi. Sesji Herdr nie ma w [skrzynce uwagi](/pl/agent/inbox/).

## Worktree na agenta

Worktree to osobny folder z tą samą historią gita, więc dwaj agenci w dwóch worktree nie nadpisują sobie plików. Wybierz **+ Nowy worktree…** jako **Kopia robocza** w **Nowa sesja** albo naciśnij **Nowy worktree** przy projekcie na pasku, potem podaj gałąź i bazę. Worktree pojawia się jako osobny obszar roboczy. Tworzenie, listowanie i usuwanie worktree jest na stronie [Drzewa robocze](/pl/agent/worktrees/).

## Wskazówki

<Aside type="tip">
`Ctrl+B` nigdy nie trafia do programu w terminalu. Jeśli używasz tmux w panelu albo skrótu `Ctrl+B` w swojej powłoce, zmień prefiks w tym programie.
</Aside>

- Prefiks jest aktywny przez 2 sekundy, a na pasku kart pulsuje znacznik **Ctrl+B…**. Naciśnij `Ctrl+B` jeszcze raz, by go anulować. Skróty paneli nie działają, gdy otwarte jest okno dialogowe albo paleta.
- Naciśnij `Ctrl+B o`, by zobaczyć **Podgląd agentów**, siatkę podglądów wszystkich sesji, z tymi, które Cię potrzebują, na początku.

## Powiązane strony

<CardGrid>
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Nowa sesja, stany, panel agenta i tryb czatu." />
  <LinkCard title="Terminale" href="/pl/agent/terminals/" description="Panele powłoki, terminal widoku Kod i maszyny SSH." />
  <LinkCard title="Drzewa robocze" href="/pl/agent/worktrees/" description="Wszystkie worktree Twoich projektów i ich stan." />
  <LinkCard title="Skróty klawiszowe" href="/pl/agent/shortcuts/" description="Prefiks Ctrl+B i każdy skrót globalny." />
</CardGrid>
