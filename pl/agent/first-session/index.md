# Twoja pierwsza sesja

> Uruchom pierwszą sesję agenta w Skribly Agent krok po kroku, poznaj stany agentów, wyślij prompt, odpowiedz ze skrzynki uwagi i zrób commit z wyniku.

Ta strona prowadzi od zainstalowanego agenta do pierwszego commita. Potrzebujesz [projektu](/pl/agent/first-workspace/) i zainstalowanego agenta; jeśli żaden nie został znaleziony, zobacz [Instalacja](/pl/agent/install/#zainstaluj-agenta).

![Widok Agenci: pasek obszarów roboczych z trzema projektami i ich worktree oraz panel Claude Code, który przegląda diff i wypisuje problemy dostępności](../../../../assets/screens/agent-agents.webp)

## Jak uruchomić sesję

<Steps>

1. Otwórz **Agenci** (`⌘2`) i naciśnij **Nowa sesja**. Na Pulpicie **Uruchom agenta** robi to samo z pierwszym zainstalowanym agentem.

2. Wybierz agenta. Przyciemniona karta to agent, który nie jest zainstalowany; **Terminal** to zwykła powłoka.

3. Sprawdź **Projekt**. W **Kopia robocza** wybierz **Główna** (nosi nazwę folderu), by pracować w folderze projektu, albo **+ Nowy worktree…** i podaj gałąź, by pracować w osobnej kopii, tak że agent nie rusza Twoich plików.

4. Zostaw **Tryb** na **Terminal**. Napisz **Pierwsza wiadomość (opcjonalnie)**, na przykład „Przejrzyj moduł płatności i zaproponuj testy”.

5. Naciśnij **Uruchom** albo `Enter` w polu wiadomości.

</Steps>

Agent startuje w panelu z własnym logowaniem i kluczami. Skribly nigdy ich nie pyta.

## Co oznaczają stany

Nagłówek panelu i pasek boczny pokazują stan, czytany z ekranu agenta.

| Stan | Co robić |
| --- | --- |
| **startuje** | Poczekaj chwilę |
| **pracuje** | Nic; agent jest zajęty |
| **czeka na decyzję** | Agent prosi o zgodę lub wybór. Odpowiedz w panelu |
| **skończył** | Agent skończył turę. Przeczytaj wynik |
| **gotowy** | Widziałeś wynik; daj mu następny prompt |
| **zakończony** | Proces się zakończył |

Naciśnij znacznik stanu, by zobaczyć **Dlaczego taki stan?**, gdy któryś wygląda źle. Więcej jest na stronie [Agenci i sesje](/pl/agent/sessions/#stany-agentów).

## Jak wysłać prompt

Kliknij w panelu i pisz, tak jak w terminalu samego agenta. Agent pracuje, a stan zmienia się na **pracuje**. Aby wysłać ten sam tekst kilku agentom, zaznacz pola wyboru w ich nagłówkach i użyj pola na pasku kart, jak opisano w [Rozsyłanie wiadomości](/pl/agent/sessions/#rozsyłanie-wiadomości).

## Co się dzieje, gdy agent czeka

Gdy agent o coś pyta, a Ty patrzysz na inny panel albo inny widok, liczba na ikonie **Agenci** i przycisku **Skrzynka** rośnie, a gdy okno jest w tle, pojawia się powiadomienie systemowe. Otwórz [skrzynkę uwagi](/pl/agent/inbox/) przez `⌘⇧U` lub `Ctrl+B i`, naciśnij wiersz albo jego cyfrę i odpowiedz w panelu. Skończona tura też się tam pojawia, jako **skończył**.

## Jak zrobić commit z wyniku

<Steps>

1. Otwórz **Kod i git** (`⌘4`) i zmiany projektu.

2. Przejrzyj diff i dodaj do indeksu pliki, które chcesz. [Uwagi przeglądu](/pl/agent/review/) pozwalają odesłać komentarze agentowi.

3. Naciśnij **Zaproponuj**. Wiadomość idzie za wzorcem historii Twojego repozytorium i nie są dodawane stopki AI.

4. Naciśnij **Commit**.

</Steps>

Kroki szczegółowo opisuje strona [Zmiany i commity](/pl/agent/changes/).

<Aside type="tip">
Skróty na tej stronie używają `⌘`. W Windows i Linux używaj `Ctrl`. Prefiks `Ctrl+B` jest taki sam w każdym systemie.
</Aside>

## Powiązane strony

<CardGrid>
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Stany, panel agenta, tryb czatu i przekazywanie pracy." />
  <LinkCard title="Skrzynka uwagi" href="/pl/agent/inbox/" description="Sesje, które czekają na Ciebie." />
  <LinkCard title="Zmiany i commity" href="/pl/agent/changes/" description="Dodaj do indeksu, zaproponuj wiadomość i zrób commit." />
  <LinkCard title="Zadania i trackery" href="/pl/agent/tasks/" description="Uruchom sesję z zadania trackera." />
</CardGrid>
