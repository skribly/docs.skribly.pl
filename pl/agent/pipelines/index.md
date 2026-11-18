# Potoki

> Potok w Skribly Agent uruchamia kilku agentów na jednym celu, etap po etapie, przekazując wyniki przez handoff.md; zbuduj własny, uruchom go i śledź na grafie.

Potok to kilku agentów, jeśli chcesz różnych firm, pracujących nad jednym celem. Kroki jednego etapu działają równolegle, późniejsze etapy czekają na wcześniejsze, a wyniki przechodzą przez plik `handoff.md` zamiast przez Ciebie. Użyj potoku, gdy praca ma naturalną kolejność: plan, wykonanie, przegląd.

![Widok Potoki: wbudowane potoki i ostatnie uruchomienia po lewej, działający potok Plan, wykonanie i przegląd na grafie oraz jego kroki po prawej](../../../../assets/screens/agent-pipelines.webp)

## Otwórz widok

- Kliknij **Potoki** na pasku aktywności, albo naciśnij `⌘5` (na Windows i Linuksie `Ctrl+5`), albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Potoki**.

Lewa strona wypisuje potoki i **Ostatnie uruchomienia**, środek pokazuje graf, a prawa strona pokazuje kroki uruchomienia albo szczegóły klikniętego kroku.

## Jak działa uruchomienie

1. Aplikacja tworzy `.skribly/runs/<id>/handoff.md` w projekcie, z nagłówkiem i Twoim celem. `.skribly/` jest dodawane do `.git/info/exclude`.
2. Dla każdego etapu, po kolei, uruchamia naraz wszystkie jego kroki. Krok to agent bez interfejsu w folderze projektu. Dostaje rolę i prompt kroku, cel całej pracy, aktualny `handoff.md` (ostatnie 16 000 znaków) i prośbę o zwięzłą odpowiedź, bo trafia ona do następnego agenta.
3. Po etapie odpowiedzi jego kroków są dopisywane do `handoff.md` jako sekcje `## Etap N: <rola> (<agent>)`.
4. Jeśli krok zawiedzie (błąd i brak odpowiedzi), uruchomienie kończy się błędem, a kroki, które nie ruszyły, są pominięte.
5. **Zatrzymaj** przerywa pracujących agentów, a uruchomienie kończy się jako zatrzymane.

Krok z **zmienia pliki** może edytować: Claude działa z `acceptEdits`, Codex z `--full-auto`. Bez tego krok jest tylko do odczytu: Claude w trybie `plan`, Codex z `--sandbox read-only`. Agent dostaje tylko wynik wcześniejszych kroków, nie całą ich rozmowę. To oszczędza tokeny i pozwala łączyć agentów różnych firm.

## Wbudowane potoki

| Potok | Kroki |
| --- | --- |
| **Plan → wykonanie → przegląd** | 1: Planista (Claude, tylko odczyt) → 2: Wykonawca (Codex, zmienia pliki, uruchamia sprawdzenia projektu) → 3: Recenzent (Claude, tylko odczyt: przegląda `git diff` i proponuje wiadomość commita) |
| **Trzy audyty równolegle** | 1: Bezpieczeństwo (Claude), dostępność względem WCAG 2.2 AA (Gemini) i SEO (Codex) równolegle → 2: Koordynator (Claude) łączy wyniki w jeden plan poprawek |
| **Poprawka, testy, dokumentacja** | 1: Poprawka (Codex) → 2: Testy (Claude, uruchamia tylko testy, których dotyczy zmiana) → 3: Dokumentacja (Gemini aktualizuje `.docs/` i README) |

Wbudowane potoki są wypisane, dopóki nie zapiszesz własnego. Od pierwszego zapisu lista pochodzi z `pipelines.json` w katalogu danych aplikacji.

## Jak uruchomić potok

<Steps>

1. Wybierz projekt na górnym pasku i potok na liście.

2. Wpisz cel w polu, na przykład „Dodaj eksport raportu do CSV z filtrami jak w widoku tabeli”.

3. Naciśnij **Uruchom** albo `Enter` w polu.

4. Śledź graf. Węzeł pokazuje stan swojego kroku. Kliknij węzeł, żeby zobaczyć po prawej prompt i wynik kroku.

5. Gdy uruchomienie się skończy, naciśnij **Pokaż handoff.md**, żeby zobaczyć plik przekazania w menedżerze plików.

</Steps>

**Uruchom** jest wyłączone, gdy cel jest pusty, nie wybrano projektu albo brakuje agenta potoku. Komunikat **Nie wykryto: …** nad grafem nazywa agenta: zainstaluj go w **Ustawienia → Agenci** albo zmień agenta kroku. Gdy uruchomienie trwa, **Uruchom** zmienia się w **Zatrzymaj**. Kliknij uruchomienie w **Ostatnie uruchomienia**, żeby zobaczyć je ponownie. Przechowywane jest 30 ostatnich uruchomień (`runs.json` w katalogu danych), a lista pokazuje 12.

## Jak utworzyć albo edytować potok

<Steps>

1. Naciśnij plus w nagłówku listy (**Nowy potok**) albo wybierz potok i naciśnij **Duplikuj** lub **Edytuj**.

2. Wpisz **Nazwę** i **Opis**.

3. Dodawaj kroki przyciskiem **Dodaj krok**. Każdy krok ma pola z tabeli niżej.

4. Naciśnij **Zapisz**. **Zapisz** jest wyłączone bez nazwy albo bez kroku.

</Steps>

| Pole | Znaczenie |
| --- | --- |
| **Etap** | Liczba od 1. Kroki z tą samą liczbą działają równolegle |
| **Rola** | Na przykład „Planista” albo „Testy”. Trafia do promptu jako rola agenta |
| **Agent** | Agent, który wykonuje krok |
| **zmienia pliki** | Czy agent może edytować pliki |
| Prompt | Co agent ma zrobić |
| **Usuń krok** | Usuwa krok |

Na grafie każdy krok etapu łączy się z każdym krokiem następnego etapu. **Usuń** na pasku narzędzi usuwa cały potok.

## Jak ułożyć graf

- Przeciągnij węzeł, żeby go przesunąć. Przeciągnij krawędź węzła, żeby zmienić rozmiar. Położenie i rozmiar przyciągają się do małej siatki.
- Przy węźle z fokusem (`Tab`) strzałki przesuwają go o jedną kratkę, a `Shift` ze strzałkami zmienia rozmiar. `Enter` pokazuje szczegóły kroku. Dwuklik rozwija cały prompt węzła.
- Sterowanie grafem przybliża, oddala i dopasowuje graf do okna.
- **Resetuj układ** przywraca każdy węzeł na wyliczone miejsce. Jest wyłączone, dopóki niczego nie przesuniesz.

Przesunięcie lub zmiana rozmiaru węzła zmienia tylko to, gdzie jest narysowany. Nie zmienia etapu ani kolejności uruchomienia. Układ jest zapisywany z potokiem, więc przetrwa restart.

## Wskazówki

<Aside type="caution">
Kroki zmieniające pliki w tym samym etapie pracują w tym samym folderze i mogą sobie przeszkadzać. Daj je do osobnych etapów.
</Aside>

- Zakończ krokiem recenzenta albo koordynatora, który zbiera wyniki w jedną listę.
- Agenci bez trybu JSON odpowiadają zwykłym tekstem. To wystarcza do przekazania pracy.
- Potoki wysyłają prompt agenta do firmy tego agenta, jak każda sesja. Co wysyła sama aplikacja, opisuje [Dane i sieć](/pl/agent/data-and-network/).

## Powiązane strony

<CardGrid>
  <LinkCard title="Audyty" href="/pl/agent/audits/" description="Audyty bezpieczeństwa, WCAG i SEO z Popraw z agentem." />
  <LinkCard title="Obsługiwani agenci" href="/pl/agent/agents/" description="Którzy agenci mają tryb bez interfejsu." />
  <LinkCard title="Terminale i sesje" href="/pl/agent/terminals/" description="Sesje, tryb czatu i przekazywanie pracy." />
</CardGrid>
