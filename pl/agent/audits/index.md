# Audyty

> Uruchamiaj audyty bezpieczeństwa, dostępności i SEO w Skribly Agent, czytaj wynik i znaleziska oraz wysyłaj wybrane znaleziska agentowi do naprawy.

Widok **Audyty** sprawdza Twój projekt pod kątem problemów z bezpieczeństwem (sekrety, ryzykowny kod, podatne zależności) oraz działającą stronę pod kątem dostępności i SEO. Każdy audyt daje wynik i listę znalezisk. Zaznaczasz znaleziska i wysyłasz je agentowi jako jedno zadanie, z krótką listą zamiast całego raportu.

![Audyt bezpieczeństwa z wynikiem 40 na 100: jedenaście znalezisk według wagi, pierwsze to zamaskowany token GitHub, po prawej sposób naprawy](../../../../assets/screens/agent-audits.webp)

## Otwórz widok

- Kliknij **Audyty** na pasku aktywności, albo naciśnij `⌘7` (na Windows i Linuksie `Ctrl+7`), albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Audyty**.

Widok ma trzy karty: **Bezpieczeństwo**, **Dostępność (WCAG)** i **SEO**. Liczba obok nazwy karty to liczba znalezisk jej ostatniego raportu.

## Jak uruchomić audyt

<Steps>

1. Wybierz projekt na górnym pasku.

2. Wybierz kartę. **Bezpieczeństwo** czyta pliki projektu. **Dostępność (WCAG)** i **SEO** czytają działającą stronę.

3. Dla dwóch kart ze stroną sprawdź **Adres strony**. Na początku to **Adres aplikacji w trybie dev** projektu, albo strona otwarta w [Przeglądarce](/pl/agent/browser/), albo `http://localhost:5173`. Przycisk audytu na pasku Przeglądarki przenosi tu bieżącą stronę.

4. Naciśnij **Uruchom audyt** albo `Enter` w polu adresu.

5. Poczekaj na raport. Każda karta trzyma własny raport.

</Steps>

| Karta | Co sprawdza |
| --- | --- |
| **Bezpieczeństwo** | Sekrety w śledzonych plikach, ryzykowne wzorce w kodzie i znane podatności zależności npm, PyPI i Composera z OSV.dev. Skanowane są tylko pliki śledzone przez git, więc projekt poza gitem nie daje znalezisk |
| **Dostępność (WCAG)** | Stronę, w ukrytym oknie, przy pomocy axe-core. WCAG 2.2 AA jest celem sprawdzeń, a axe-core znajduje tylko część problemów |
| **SEO** | Tytuł, opis, nagłówki, link kanoniczny, Open Graph, dane strukturalne, obrazy bez `alt`, `robots.txt`, mapę witryny i niedziałające linki wewnętrzne |

Każda reguła ma swoją stronę: zobacz [Reguły audytów](/pl/agent/audit-rules/). Sprawdzanie zależności wysyła do OSV.dev tylko nazwy i wersje pakietów, nigdy kod. Zobacz [Dane i sieć](/pl/agent/data-and-network/).

## Jak czytać raport

Góra raportu pokazuje wynik od 0 do 100, cel, liczbę znalezisk, czas i statystyki audytu (na przykład liczbę plików i zależności). Raport zaczyna od 100, a każde znalezisko obniża go według swojej ważności. Liczby są zawsze wypisane obok pierścienia.

- Przyciski ważności filtrują listę. Każdy pokazuje, ile znalezisk zawiera.
- Tabela jest ułożona od najpoważniejszych. Wiersz pokazuje ważność, problem z nazwą reguły i miejsce: plik i wiersz albo stronę.
- Kliknij wiersz, żeby zobaczyć szczegóły po prawej: opis, **Poprawkę** i, dla strony, element.
- **Otwórz plik** otwiera plik w edytorze wybranym w **Ustawieniach**. **Dokumentacja** pojawia się, gdy znalezisko ma link, na przykład do wpisu OSV.

## Jak wysłać znaleziska agentowi

<Steps>

1. Zaznacz znaleziska w pierwszej kolumnie. Pole w nagłówku, **Zaznacz wszystkie**, zaznacza wszystkie znaleziska bieżącego filtra. Dla jednego znaleziska użyj **Popraw to** w jego szczegółach.

2. Naciśnij **Popraw z agentem (N)**. Otwiera się okno **Popraw N znalezisk**.

3. Wybierz cel: **Nowa sesja** zainstalowanego agenta (domyślny jest wybrany) albo działająca sesja z listy.

4. Naciśnij **Wyślij**. Aplikacja przechodzi do widoku Agenci, na tę sesję.

</Steps>

Agent dostaje zwięzłą listę do 40 znalezisk: dla każdego jego ważność, tytuł, miejsce, pierwszy wiersz opisu i proponowaną poprawkę. Ma je naprawiać od najpoważniejszych, sprawdzać, czy nic się nie psuje, wypisać, co naprawił, a czego nie, i nie robić commita. Nowa sesja ma tytuł **Poprawki** i rodzaj audytu. Wiadomość jest napisana po polsku.

## Wskazówki

<Aside type="tip">
Audyt lokalnego serwera dev zawsze zgłasza regułę `https`. To oczekiwane: adres dev nie ma HTTPS.
</Aside>

- Uruchom trzy audyty naraz wbudowanym potokiem **Trzy audyty równolegle**, zobacz [Potoki](/pl/agent/pipelines/).
- Najpierw napraw znaleziska krytyczne. Wyciekły klucz trzeba unieważnić, a nie tylko usunąć z kodu.
- axe-core nie zastępuje ręcznego sprawdzenia: obsługę klawiaturą, kolejność fokusu i tekst alternatywny przetestuj ręcznie.

## Powiązane strony

<CardGrid>
  <LinkCard title="Reguły audytów" href="/pl/agent/audit-rules/" description="Każda reguła trzech audytów z jej ważnością." />
  <LinkCard title="Potoki" href="/pl/agent/pipelines/" description="Trzy audyty równolegle z różnymi agentami." />
  <LinkCard title="Dostępność" href="/pl/agent/accessibility/" description="Dostępność samego Skribly Agent." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Co audyty wysyłają i dokąd." />
</CardGrid>
