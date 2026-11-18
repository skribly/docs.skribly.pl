# Twój pierwszy obszar roboczy

> Dodaj projekt do Skribly Agent z folderu albo z linku, zobacz, co aplikacja wykrywa, połącz tracker zadań i przełączaj się między projektami.

Projekt to folder, zwykle repozytorium git. Agenci, git, audyty i skille działają w folderze projektu, który wybierzesz na górze okna. Dodaj jeden, zanim uruchomisz agenta.

![Widok Kod i git przed wyborem projektu: Wybierz projekt, z Dodaj projekt i Sklonuj z linku](../../../../assets/screens/agent-no-project.webp)

## Jak dodać projekt

<Steps>

1. Kliknij przełącznik projektów na górnym pasku i wybierz **Dodaj projekt…**. Ta sama akcja jest w **Ustawienia → Projekty**, na Pulpicie i w palecie poleceń (`⌘K`).

2. Wskaż folder. Aplikacja go doda, wybierze i wykryje konwencje repozytorium.

3. Otwórz **Ustawienia → Projekty**, naciśnij **Konfiguruj** przy projekcie, sprawdź wartości i naciśnij **Zapisz**.

</Steps>

Dodanie folderu, który już jest projektem, wybiera istniejący. Usunięcie projektu z listy przyciskiem **Usuń z listy** nie rusza żadnego pliku na dysku; możesz go dodać ponownie w każdej chwili.

## Jak sklonować repozytorium

<Steps>

1. Wybierz **Sklonuj z linku…** w przełączniku projektów, w palecie (**Sklonuj repozytorium z linku…**) albo **Sklonuj z linku** w **Ustawienia → Projekty**.

2. Wklej **Link do repozytorium**: link z przeglądarki, adres `https://` lub `ssh://`, `git@host:właściciel/nazwa.git` albo `właściciel/nazwa` dla GitHuba. Link wskazujący gałąź, na przykład `…/tree/develop`, uzupełnia gałąź.

3. Naciśnij **Wybierz** przy **Folder docelowy**. Wiersz niżej mówi, jaki folder powstanie, `<folder>/<nazwa>`.

4. Wypełnij **Gałąź (opcjonalnie)**, jeśli chcesz inną gałąź niż domyślna.

5. Naciśnij **Sklonuj i dodaj projekt**. Okno pokazuje postęp, a **Przerwij** go kończy.

</Steps>

Prywatne repozytoria używają konta z **Ustawienia → Konta Git**, Twojego logowania `gh` albo klucza SSH. Link z nazwą użytkownika lub hasłem jest odrzucany: nigdy nie wpisuj ich do linku.

## Co jest wykrywane

Wykrywanie tylko podpowiada wartości. Naciśnij **Wykryj** w ustawieniach projektu, by uruchomić je ponownie; Twoje zmiany nie są stosowane bez **Zapisz**.

| Ustawienie | Jak jest wykrywane |
| --- | --- |
| **Gałąź bazowa** | Pierwsza istniejąca z `develop`, `main`, `master`; w przeciwnym razie pierwsza gałąź lokalna |
| **Sprawdzenia (po przecinku)** | `npm run lint`, `npm run typecheck` i `npm run test` dla skryptów, które ma `package.json`; `composer test`, gdy jest `composer.json`; `python manage.py test`, gdy jest `manage.py`; `pytest`, gdy jest tylko `pyproject.toml` |
| **Adres aplikacji w trybie dev** | Port po `--port` w skrypcie `dev` lub `start`; w przeciwnym razie `5173`, gdy skrypt używa Vite, i `3000` dla wszystkiego innego; ustawiany tylko, gdy istnieje `package.json` |
| **Wzór gałęzi** | `feature/{key}-{slug}` |
| **Wzór commita** | Pusty: wiadomość commita idzie za historią repozytorium |
| **Język commitów** | Automatyczny |

Ta sama sekcja pozwala ustawić nazwę i kolor projektu, **Tracker projektu** oraz **Projekt / repozytorium / zespół w trackerze**, żeby lista zadań tego projektu pokazywała tylko jego zadania.

## Jak połączyć tracker

<Steps>

1. Otwórz **Ustawienia → Trackery zadań** i naciśnij **Dodaj tracker**.

2. Wybierz tracker i wpisz adres URL oraz token.

3. Naciśnij **Zapisz i sprawdź**. Aplikacja zapisuje konto, szyfruje token i sprawdza połączenie.

</Steps>

Adresy URL, uprawnienia tokenów i uruchamianie zadania z agentem są na stronie [Zadania i trackery](/pl/agent/tasks/).

## Jak przełączać projekty

Kliknij przełącznik projektów na górnym pasku i wybierz projekt z listy. Bieżący ma kolorową kropkę i swoją nazwę na przycisku. Agenci, git, audyty i skille działają teraz w nowym folderze. Panele, które już działają, zostają na miejscu; widok Agenci grupuje je według projektów, jak opisano w [Obszary robocze](/pl/agent/workspaces/).

<Aside type="tip">
Skróty na tej stronie używają `⌘`. W Windows i Linux używaj `Ctrl`.
</Aside>

## Powiązane strony

<CardGrid>
  <LinkCard title="Twoja pierwsza sesja" href="/pl/agent/first-session/" description="Uruchom agenta w nowym projekcie." />
  <LinkCard title="Zadania i trackery" href="/pl/agent/tasks/" description="Zadania z Twojego trackera, uruchamiane z agentem." />
  <LinkCard title="Obszary robocze" href="/pl/agent/workspaces/" description="Karty, podziały i pasek obszarów." />
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Każda sekcja Ustawień." />
</CardGrid>
