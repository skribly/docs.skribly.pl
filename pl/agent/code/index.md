# Edytor i pliki

> Widok Kod i git w Skribly Agent działa jak edytor: drzewo plików, karty, szybkie otwieranie, szukanie w plikach, Monaco, zapis, akcje agenta na kodzie i terminal.

Widok **Kod i git** to edytor zbudowany do pracy obok agentów. Ma drzewo plików, karty, szybkie otwieranie, szukanie w plikach, edytor Monaco (ten z VS Code), terminal w dolnym panelu i sposób wysłania zaznaczonego kodu agentowi. Gdy agent zmieni otwarty plik, edytor to pokazuje. W tym samym widoku są [zmiany i commity](/pl/agent/changes/), [uwagi przeglądu](/pl/agent/review/) i [graf historii](/pl/agent/history/).

Na Windows i Linuksie używaj `Ctrl` wszędzie tam, gdzie ta strona pisze `⌘`.

## Otwórz widok

- Kliknij **Kod i git** na pasku aktywności po lewej, albo
- naciśnij `⌘4`, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Kod i git**.

Widok działa na projekcie wybranym na górnym pasku. Bez projektu prosi o jego wybranie. Lewy panel ma cztery karty, pokazane jako ikony: **Zmiany i commit** (domyślnie otwarta), **Pliki**, **Szukaj w plikach** i **Historia**.

## Jak otworzyć plik

<Steps>

1. Otwórz kartę **Pliki**. Drzewo wypisuje pliki znane gitowi (śledzone i nieśledzone, bez ignorowanych). Poza repozytorium skanuje folder i pomija `node_modules`, `.git`, `dist`, `out`, `build`, `.next`, `vendor`, `.venv`, `target` i podobne. Drzewo mieści najwyżej 20 000 plików.

2. Kliknij plik. Otwiera się w karcie nad edytorem. Może być otwartych kilka plików naraz, a ścieżka nad edytorem pokazuje, gdzie plik leży w drzewie.

3. Zamknij kartę jej **x** albo `⌘W`, gdy fokus jest w edytorze. Gdzie indziej `⌘W` zostaje skrótem okna. Karta z niezapisanymi zmianami pyta przed zamknięciem.

</Steps>

Plik większy niż 2 MB i plik binarny nie jest otwierany: widok pisze **Plik jest za duży albo binarny** i odsyła do Twojego edytora. Przycisk **Otwórz w zewnętrznym edytorze** nad edytorem otwiera plik w edytorze wybranym w **Ustawieniach**.

Ścieżki są pilnowane: widok odmawia czytania i zapisu poza folderem projektu.

## Jak znaleźć plik albo tekst

<Steps>

1. Naciśnij `⌘P`, żeby użyć **Szybkie otwieranie pliku**. Wpisz część nazwy; dopasowanie jest rozmyte, a ostatnie pliki są na górze. Dopisz `:123` do nazwy, żeby przejść do wiersza 123.

2. Przesuwaj się `↑` i `↓` (także `Ctrl+N` i `Ctrl+P`), otwórz `Enter`, zamknij `Esc`.

3. Żeby szukać wewnątrz plików, naciśnij `⌘⇧F` albo otwórz kartę **Szukaj w plikach**. Wpisz tekst; szukanie rusza w trakcie pisania, a `Enter` uruchamia je od razu.

4. Przyciski w polu służą do **Uwzględnij wielkość liter** i **Wyrażenie regularne**, a filtr plików przyjmuje wzorce takie jak `*.ts, src/**, !*.test.ts`. Kliknięcie wyniku otwiera plik z zaznaczonym trafieniem.

</Steps>

Szukanie pokazuje do 2000 trafień i mówi o tym, gdy dojdzie do limitu. Używa ripgrepa z Twojego `PATH` albo z zainstalowanego VS Code, Cursora, Windsurfa lub VSCodium. Bez ripgrepa skanuje w aplikacji pliki tekstowe do 1 MB i pomija foldery takie jak `node_modules` i `dist`.

## Jak edytować i zapisać

<Steps>

1. Kliknij w edytorze i pisz. Niezapisany plik ma kropkę w karcie i **niezapisany** na pasku pod edytorem.

2. Naciśnij `⌘S` albo przycisk **Zapisz**. Przycisk jest wyłączony, gdy nic się nie zmieniło.

3. Naciśnij `Ctrl+G` (albo pozycję kursora na pasku pod edytorem), żeby przejść do wiersza.

</Steps>

Edytor bierze kolory z dziennego lub nocnego motywu aplikacji. Pasek pod nim pokazuje wiersz i kolumnę kursora, rozmiar zaznaczenia, język, UTF-8 i koniec wiersza.

## Pliki, które zmienia agent

Widok sprawdza otwarty plik co dwie sekundy i gdy okno dostaje fokus, o ile okno jest widoczne. Listę plików i zmiany odświeża też co 8 sekund.

- Jeśli nie masz niezapisanych zmian, plik wczytuje się sam. Kursor i przewinięcie zostają na miejscu, chyba że zmiana dotyczy tego miejsca.
- Jeśli masz niezapisane zmiany, pojawia się pasek: **Plik zmieniony na dysku (np. przez agenta), a w edytorze są niezapisane zmiany.** Wybierz **Przeładuj**, by wziąć wersję z dysku, albo **Zostaw moje**, by zachować swoją.
- Jeśli pliku już nie ma, pasek pisze **Pliku nie ma już na dysku.** Zapisz, żeby go odtworzyć, albo zamknij kartę.

## Jak wysłać kod agentowi

<Steps>

1. Zaznacz kod, o który chodzi. Bez zaznaczenia liczy się cały plik.

2. Otwórz menu **Agent** nad edytorem albo kliknij prawym przyciskiem i wybierz polecenie z grupy **Agent:**. **Zapytaj agenta…** ma też skrót `⌘⇧I`.

3. W oknie wybierz cel: działającą sesję (sesje tego projektu są na górze) albo **Nowa sesja: &lt;agent&gt;** zainstalowanego agenta. Ostatni wybór jest zapamiętywany.

4. Przeczytaj prompt w **Polecenie** i popraw go, jeśli chcesz. **przywróć** wraca do wygenerowanego.

5. Naciśnij **Wyślij** (`⌘↩`). Przy działającej sesji możesz zaznaczyć **Przejdź do agenta po wysłaniu**, by otworzyć widok Agenci.

</Steps>

| Akcja | O co prompt prosi agenta |
| --- | --- |
| **Zapytaj agenta…** | Twoje własne pytanie o zaznaczony kod |
| **Wyjaśnij** | Powiedzieć zwięźle, co kod robi i dlaczego; nie zmieniać plików |
| **Napraw** | Znaleźć i naprawić błędy, zmienić tylko to, co konieczne, opisać poprawkę |
| **Napisz testy** | Napisać testy we frameworku i konwencji projektu, potem je uruchomić |
| **Przejrzyj (review)** | Przejrzeć błędy, przypadki brzegowe, bezpieczeństwo, wydajność i czytelność, z numerami wierszy; nie zmieniać plików |

Prompt zawsze nazywa plik i wiersze (`ścieżka:od-do`). Zaznaczenie do 40 wierszy i 2400 znaków trafia do promptu w całości. Dłuższe zostawia agentowi, który czyta je z dysku. Jeśli plik ma niezapisane zmiany, do promptu idzie kod z edytora (do 150 wierszy i 8000 znaków), bo agent nie widzi go na dysku, a okno o tym informuje.

## Jak używać terminala

Naciśnij `` Ctrl+` `` (także na macOS) albo przycisk terminala w nagłówku panelu. Na dole otwiera się powłoka w folderze projektu. Przeciągnij jej górną krawędź albo użyj `↑` i `↓` na krawędzi, żeby zmienić wysokość. **Nowa powłoka** uruchamia ją od nowa, a **Ukryj panel** zamyka panel.

Projekt ma jedną taką powłokę: pokazanie i ukrycie panelu nie uruchamia nowej. Nie pojawia się w [widoku Agenci](/pl/agent/terminals/) i nie przetrwa zamknięcia aplikacji.

<Aside type="note">
Na Windows i Linuksie `Ctrl+P` i `Ctrl+G` należą do powłoki, gdy fokus jest w terminalu.
</Aside>

## Skróty

| Skrót | Akcja |
| --- | --- |
| `⌘4` | Otwórz widok |
| `⌘P` | Szybkie otwieranie pliku |
| `⌘⇧F` | Szukaj w plikach |
| `⌘S` | Zapisz plik |
| `⌘W` | Zamknij kartę (fokus w edytorze) |
| `Ctrl+G` | Przejdź do wiersza |
| `⌘⇧I` | Zapytaj agenta o zaznaczenie |
| `` Ctrl+` `` | Pokaż lub ukryj terminal |

## Wskazówki

<Aside type="tip">
Przeciągnij krawędź lewego panelu, żeby zmienić jego szerokość (od 240 do 720 pikseli; dwuklik ją przywraca). Szerokość jest zapamiętywana.
</Aside>

- Zaznacz kilka wierszy zamiast całego pliku, gdy pytasz agenta: krótkie zaznaczenie kosztuje mniej tokenów i daje ostrzejszą odpowiedź.
- Użyj **Przejrzyj (review)** na zaznaczeniu, by dostać uwagi bez zmian w plikach.

## Powiązane strony

<CardGrid>
  <LinkCard title="Zmiany i commity" href="/pl/agent/changes/" description="Indeks, diff obok siebie, propozycja opisu commita i push." />
  <LinkCard title="Uwagi przeglądu" href="/pl/agent/review/" description="Notuj wiersze diffu i wyślij je agentowi jako jedną wiadomość." />
  <LinkCard title="Historia" href="/pl/agent/history/" description="Graf wszystkich gałęzi ze szczegółami commitów." />
  <LinkCard title="Terminale i sesje" href="/pl/agent/terminals/" description="Widok Agenci, w którym żyją sesje." />
</CardGrid>
