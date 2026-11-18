# Skrzynka uwagi

> Skrzynka uwagi w Skribly Agent wypisuje sesje, które czekają na Ciebie, z jej klawiszami, powiadomieniami systemowymi, cichymi powiadomieniami i menu zasobnika.

Skrzynka uwagi wypisuje każdą sesję agenta, która Cię potrzebuje, od najnowszej, więc nie musisz przeglądać paneli. Trzy rzeczy wstawiają sesję na listę: czeka na odpowiedź, zakończyła się błędem albo skończyła i jeszcze nie obejrzałeś wyniku.

![Skrzynka uwagi, Czeka na Ciebie (3): sesja Codex czekająca na odpowiedź, sesja Claude, która skończyła, i sesja Cursor zakończona błędem](../../../../assets/screens/agent-inbox.webp)

## Otwórz widok

- Naciśnij **Skrzynka** na pasku kart widoku Agenci, albo
- naciśnij `Ctrl+B`, potem `i`, albo
- naciśnij `⌘⇧U` z dowolnego widoku, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Skrzynka: sesje, które czekają na Ciebie**.

Skróty na tej stronie używają `⌘`. W Windows i Linux używaj `Ctrl`; `⌘⇧U` to wtedy `Ctrl+Shift+U`. Prefiks `Ctrl+B` jest taki sam w każdym systemie.

## Co pokazuje wiersz

Każdy wiersz ma agenta, nazwę sesji, jej stan (**czeka na odpowiedź**, **zakończył się błędem** lub **skończył**), projekt, klucz zadania, jeśli sesja go ma, ostatni znaczący wiersz z ekranu i czas oczekiwania. Dla pytania ten wiersz to pytanie. Nagłówek liczy nieobejrzane wiersze: **Czeka na Ciebie (3)**.

## Jak przejrzeć skrzynkę

<Steps>

1. Otwórz skrzynkę. Każdy z pierwszych dziewięciu wierszy ma cyfrę.

2. Naciśnij wiersz, `Enter` albo jego cyfrę. Widok Agenci przeskakuje do tego panelu z kursorem w środku.

3. Dla wyniku lub błędu, którego nie musisz otwierać, naciśnij **Obejrzane** w wierszu albo `S`. **Oznacz wszystko jako obejrzane** robi to dla wszystkich.

4. Naciśnij `Esc` albo **Wróć do paneli**, by wrócić. Fokus wraca na przycisk **Skrzynka**.

</Steps>

| Klawisz | Co robi |
| --- | --- |
| `↑` `↓`, `Home`, `End` | Przechodzą między wierszami |
| `Enter` lub `1` do `9` | Otwierają panel wiersza |
| `S` | Oznacza wynik lub błąd jako obejrzany; pytania nie da się oznaczyć |
| `Esc` | Wraca do paneli |

Wynik lub błąd znika z listy, gdy go obejrzysz: liczy się otwarcie panelu i oznaczenie. Pytanie zostaje na liście, dopóki agent znów nie pracuje, bo nadal czeka na Ciebie. Gdy je zobaczysz, z jego panelem na ekranie w aktywnym oknie, przechodzi pod nieobejrzane wiersze, jest oznaczone **obejrzane, nadal czeka** i nie jest już liczone w znaczkach, w Docku ani w komunikacie. Stan obejrzenia jest pamiętany między uruchomieniami. Lista używa tego samego wykrywania stanów co nagłówki paneli i aktualizuje się z jego zdarzeń; nie odpytuje.

Ta sama liczba pojawia się jako znaczek na ikonie **Agenci**, na ikonie Docka (macOS, Linux), w zasobniku, na pasku stanu i jako uprzejmy komunikat dla czytników ekranu. `Ctrl+B j` przeskakuje do następnego agenta, który na Ciebie czeka.

## Powiadomienia systemowe

Powiadomienie systemowe pojawia się, gdy agent prosi o decyzję albo kończy turę po co najmniej 15 sekundach pracy, a Ty go nie widzisz: okno jest w tle albo panel sesji nie jest na ekranie. Kliknięcie powiadomienia jednej sesji pokazuje okno i panel. Na macOS ikona w Docku też podskakuje. Zwykłe powłoki nie powiadamiają.

Agent w panelu, którego nie widzisz, wywołuje też komunikat w aplikacji, gdy prosi o decyzję lub kończy turę.

## Ciche powiadomienia

Powiadomienia są domyślnie ciche. Te ustawienia są w **Ustawienia → Edytor i powiadomienia**.

| Ustawienie | Co robi | Domyślnie |
| --- | --- | --- |
| **Powiadomienia** | Włącza i wyłącza powiadomienia systemowe | Włączone |
| **Dźwięk powiadomień** | Powiadomienie gra dźwięk tylko, gdy to jest włączone | Wyłączone |
| **Wyciszeni agenci** | Sesje zaznaczonych agentów, także własnych, nie wywołują powiadomień systemowych | Brak |
| **Wyciszone projekty** | Sesje zaznaczonych projektów nie wywołują powiadomień systemowych | Brak |

- Wyciszony agent lub projekt nadal pojawia się w skrzynce i w licznikach.
- Sesja, na którą patrzysz, z panelem na ekranie w aktywnym oknie, nigdy nie powiadamia.
- Kilka powiadomień w ciągu czterech sekund łączy się w jedno, „N sesji czeka na Ciebie”, które otwiera skrzynkę.

## Menu zasobnika

Skrzynka jest też w menu ikony na pasku menu lub w zasobniku: sekcja **Skrzynka uwagi** wypisuje jej pięć najnowszych pozycji, każdą jako `Czeka`, `Błąd` lub `Gotowe` z nazwą sesji, a pierwszy wiersz menu liczy agentów, którzy pracują, czekają i skończyli. Wybranie pozycji pokazuje okno na tym agencie. Menu ma dwa przełączniki: **Ciche powiadomienia (bez dźwięku)**, odwrotność **Dźwięk powiadomień**, oraz **Bez połączeń sieciowych aplikacji**. Całe menu jest opisane na stronie [Pierwsze uruchomienie](/pl/agent/first-run/#ikona-na-pasku-menu-i-w-zasobniku).

<Aside type="note">
Sesji w Herdr nie ma w skrzynce. Ich stany są czytane tylko, gdy karta Herdr jest otwarta.
</Aside>

## Powiązane strony

<CardGrid>
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Stany, które wstawiają sesję do skrzynki." />
  <LinkCard title="Obszary robocze" href="/pl/agent/workspaces/" description="Znaczek na pasku i karta Herdr." />
  <LinkCard title="Pierwsze uruchomienie" href="/pl/agent/first-run/" description="Całe menu zasobnika." />
  <LinkCard title="Skróty klawiszowe" href="/pl/agent/shortcuts/" description="Każdy skrót globalny i prefiksowy." />
</CardGrid>
