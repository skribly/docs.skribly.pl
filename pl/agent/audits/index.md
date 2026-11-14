# Reguły audytów

> Czego szuka widok Audyty w Skribly Agent — jak działa wynik, reguły sekretów, wzorców w kodzie i SEO, sprawdzanie zależności i dostępności oraz przekazywanie znalezisk agentowi.

Widok **Audyty** sprawdza Twój projekt i działającą stronę. Audyty bezpieczeństwa czytają Twój projekt, a audyty dostępności i SEO czytają działającą stronę. Ta strona wymienia, czego szuka każdy audyt. Sam widok opisuje strona [Funkcje](/pl/agent/features/#audyty).

## Jak działa wynik

Każdy raport zaczyna od 100. Każde znalezisko obniża wynik zależnie od ważności, a znaleziska są posortowane od najpoważniejszych.

| Ważność | Odejmowane punkty |
| --- | --- |
| Krytyczny | 25 |
| Wysoki | 10 |
| Średni | 4 |
| Niski | 1 |
| Informacyjny | 0 |

## Sekrety

Skanowanie obejmuje pliki śledzone przez git, do 1 MB. Wartość jest zamaskowana w raporcie, a linie wyglądające na przykład lub placeholder są pomijane.

| Reguła | Co wykrywa | Ważność |
| --- | --- | --- |
| `aws-key` | Klucz dostępu AWS | Krytyczny |
| `github-token` | Token GitHub | Krytyczny |
| `gitlab-token` | Token GitLab | Krytyczny |
| `slack-token` | Token Slack | Wysoki |
| `stripe-key` | Produkcyjny klucz Stripe | Krytyczny |
| `google-key` | Klucz Google API | Wysoki |
| `openai-key` | Klucz OpenAI | Krytyczny |
| `anthropic-key` | Klucz Anthropic | Krytyczny |
| `private-key` | Klucz prywatny | Krytyczny |
| `jwt` | JWT w kodzie | Średni |
| `hardcoded-password` | Hasło, sekret, klucz API lub token przypisany do tekstu | Wysoki |
| `env-tracked` | Plik `.env` śledzony przez git | Wysoki |

## Ryzykowne wzorce w kodzie

Te reguły pomijają foldery testów i fixture. Każde znalezisko ma plik, linię i propozycję poprawki.

| Reguła | Co wykrywa | Ważność |
| --- | --- | --- |
| `eval` | `eval(…)` w JavaScript, TypeScript, PHP lub Python | Wysoki |
| `new-function` | `new Function(…)` | Wysoki |
| `inner-html` | HTML wstawiany przez `innerHTML`, `dangerouslySetInnerHTML` lub `v-html` | Średni |
| `shell-injection` | Polecenia powłoki budowane z interpolowanych tekstów | Wysoki |
| `sql-concat` | SQL budowany z tekstów | Wysoki |
| `unsafe-deserialize` | Niebezpieczne `pickle`, `yaml.load` lub `unserialize` | Wysoki |
| `tls-off` | Wyłączona weryfikacja TLS | Wysoki |
| `weak-hash` | `md5` lub `sha1` | Średni |
| `cors-any` | Żądania dozwolone z dowolnego źródła | Średni |
| `debug-on` | Tryb debugowania zostawiony w konfiguracji | Średni |
| `http-url` | Zwykły adres `http://` systemu zewnętrznego | Niski |

## Zależności

Aplikacja czyta dokładne wersje z `package-lock.json`, `composer.lock`, przypiętych `requirements*.txt` i `poetry.lock`, a potem sprawdza je w OSV.dev. Wysyłane są tylko nazwy i wersje pakietów, nigdy kod. Bez sieci audyt i tak kończy się wynikami z reguł.

## Dostępność

Strona wczytuje się w ukrytym oknie, a axe-core działa z tagami WCAG 2.0, 2.1 i 2.2 oraz regułami dobrych praktyk. Każda reguła wymienia do ośmiu elementów.

:::note
axe-core znajduje tylko część problemów z dostępnością. Obsługę klawiaturą, kolejność fokusu i tekst alternatywny sprawdź ręcznie albo skillem `wcag-audit`.
:::

## SEO

| Reguła | Kiedy się uruchamia | Ważność |
| --- | --- | --- |
| `title`, `title-length` | Brak tytułu albo długość poza zakresem od 15 do 65 znaków | Wysoki, niski |
| `description`, `description-length` | Brak opisu albo długość poza zakresem od 50 do 170 znaków | Średni, niski |
| `h1`, `h1-many` | Brak H1 albo więcej niż jeden | Średni, niski |
| `heading-order` | Pominięty poziom nagłówka | Niski |
| `canonical` | Brak linku kanonicznego | Niski |
| `lang` | Brak `lang` w `<html>` | Średni |
| `viewport` | Brak meta viewport | Wysoki |
| `noindex` | `noindex` w meta robots | Wysoki |
| `https` | Strona bez HTTPS | Wysoki |
| `img-alt` | Obrazy bez `alt` | Średni |
| `link-text` | Linki bez tekstu | Niski |
| `og` | Brak `og:title` lub `og:image` | Niski |
| `structured-data` | Brak JSON-LD | Informacyjny |
| `favicon` | Brak linku do ikony | Niski |
| `dom-size` | Ponad 1500 elementów | Niski |
| `page-weight` | Ponad 3000 KB przesłanych danych | Średni |
| `load-time` | Zdarzenie load po ponad 4 sekundach | Średni |
| `robots`, `robots-block` | Brak `robots.txt` albo zablokowane wszystko | Niski, wysoki |
| `sitemap` | Brak mapy witryny | Niski |
| `broken:<url>` | Link wewnętrzny ze statusem 400 lub wyższym | Średni |

## Wyślij znaleziska do agenta

Zaznacz znaleziska i wybierz **Napraw z agentem**. Nowy lub działający agent dostaje krótką listę do 40 pozycji, a nie cały raport, i nie robi commita.

```text
Security audit for shop found 3 problems. Fix them in the code, starting with the most severe:
1. (critical) GitHub token [scripts/release.sh:12]
2. (high) SQL query built from strings [orders/reports.py:41]
3. (medium) HTML inserted without sanitization [src/components/ProductDescription.tsx:8]
```

## Czytaj dalej

- [Funkcje](/pl/agent/features/): wszystkie widoki według rodzaju pracy.
- [Katalog skilli](/pl/skills/catalog/): skille audytowe uruchamiane z dowolnego agenta.
- [Dane i sieć](/pl/agent/data-and-network/): co audyty wysyłają i dokąd.
