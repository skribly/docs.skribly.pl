# Dokumenty

> Widok Dokumenty w Skribly Agent pokazuje README, listę zmian, decyzje i folder .docs projektu jako bezpieczny Markdown tylko do odczytu, z wyszukiwaniem.

Widok **Dokumenty** pokazuje dokumentację, którą projekt trzyma obok kodu: README, listę zmian z częścią niewydaną na początku, foldery `.docs/` i `docs/` jako drzewo oraz decyzje z folderu `adr` jako tabelę. Plik jest pokazany jako wyrenderowany Markdown, tylko do odczytu. Możesz przeszukać tytuły i treść, otworzyć plik w widoku Kod, skopiować jego ścieżkę albo przekazać go agentowi do sprawdzenia z kodem.

![Widok Dokumenty w motywie dziennym: drzewo README, listy zmian, decyzji i .docs po lewej oraz wyrenderowane README z Otwórz w widoku Kod, Kopiuj ścieżkę i Przekaż agentowi](../../../../assets/screens/agent-documents.webp)

## Otwórz widok

- Kliknij **Dokumenty** na pasku aktywności po lewej (ikona otwartej książki) albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Dokumenty**.

W Windows i Linuksie zamiast `⌘` używaj `Ctrl`. Widok nie ma skrótu z cyfrą: `⌘1` do `⌘9` zostają przy pierwszych dziewięciu widokach. Najpierw wybierz projekt.

## Co wypisuje

| Pozycja | Skąd pochodzi |
| --- | --- |
| README | `README.md` (albo `README`, `readme.md`) na górze projektu |
| Lista zmian | `CHANGELOG.md`, `CHANGES.md` albo `HISTORY.md` na górze. Sekcja `Unreleased` jest przeniesiona na początek, a notka o tym informuje |
| **Decyzje (ADR)** | Pliki Markdown folderu o nazwie `adr` w `.docs/` albo `docs/`, albo `adr/` i `doc/adr/` na górze |
| `.docs/` | Każdy plik Markdown folderu, jako drzewo |
| `docs/` | To samo dla folderu `docs` |

Foldery takie jak `node_modules`, `.git` i `build` są pomijane, a dowiązanie symboliczne nie jest śledzone. Bardzo duży zbiór jest ucinany na 800 plikach, a widok o tym mówi.

### Decyzje

**Decyzje (ADR)** to tabela z jednym wierszem na decyzję: numer, tytuł, status i data. Są czytane z front matter na górze pliku:

```md
---
status: Accepted
date: 2026-03-14
---

# Keep the cart in zustand
```

Bez front matter numer pochodzi z nazwy pliku (`0007-…`, `ADR-12…`) albo z tytułu (`# 3. Use X`), status z linii `Status:` albo sekcji `## Status`, a data z linii `Date:`. Wybierz tytuł, żeby otworzyć decyzję.

## Jak przeczytać plik

<Steps>

1. Wybierz plik w drzewie. W drzewie `↑` i `↓` przesuwają, `→` otwiera folder, `←` go zamyka, a `Enter` lub `Space` otwiera plik albo folder.

2. Przeczytaj go. Nagłówki, listy, listy zadań, tabele, bloki kodu, cytaty i linki są renderowane. Nic nie może się zmienić: pola listy zadań są pokazane, nie zaznaczane.

3. Przejdź za linkiem. Link do innego pliku Markdown projektu otwiera go w tym widoku, także z `#nagłówkiem`. Link do innego pliku projektu otwiera go w widoku Kod. Link wewnątrz strony przewija do tego nagłówka.

</Steps>

Widok renderuje Markdown, nie uruchamiając niczego:

- Surowy HTML jest pokazany jako tekst. `<script>`, atrybut `onerror`, `<iframe>` albo `<style>` w pliku nigdy się nie uruchamia. Komentarze HTML są pomijane.
- Otwiera się tylko adres `https:`, i to w Twojej przeglądarce systemowej. Każdy inny link (`http:`, `javascript:`, `data:`, `file:`, `mailto:` albo ścieżka wychodząca poza folder projektu) jest pokazany jako tekst z kropkowanym podkreśleniem, który nic nie robi.
- Obrazy ładują się tylko z folderu projektu (PNG, JPEG, GIF, WebP, AVIF, SVG, do 5 MB). Obraz z sieci nigdy nie jest pobierany, a zamiast niego pokazany jest jego opis w nawiasach.
- Plik, który nie jest zapisany jako UTF-8 albo ma więcej niż 2 MB, nie jest pokazywany, a widok mówi dlaczego. Otwórz go w widoku Kod.

## Jak wyszukiwać

<Steps>

1. Wpisz w **Szukaj w dokumentach**. Widok szuka najpierw w tytułach i ścieżkach, potem w treści każdego wypisanego pliku.

2. Przeczytaj wyniki: do trzech pasujących linii na plik, z numerem linii.

3. Wybierz wynik, żeby otworzyć plik, albo przycisk obok, żeby otworzyć plik w tej linii w widoku Kod. `↓` z wyszukiwania przechodzi do pierwszego wyniku. `Esc` czyści wyszukiwanie.

</Steps>

## Co robi pasek nad stroną

| Akcja | Co się dzieje |
| --- | --- |
| **Otwórz w widoku Kod** | Plik otwiera się w edytorze widoku Kod |
| **Kopiuj ścieżkę** | Ścieżka względem projektu trafia do schowka |
| **Przekaż agentowi** | Okno pokazuje prompt, który wskazuje plik i prosi agenta o sprawdzenie go z kodem. Edytuj go, wybierz działającą sesję projektu albo nową sesję zainstalowanego agenta, potem naciśnij **Wyślij** (`⌘↩`). Nic nie jest wysyłane przed naciśnięciem |

## Kiedy widok się odświeża

Widok sam przeładowuje listę i otwarty plik, gdy zmieni się wypisany plik. Co kilka sekund pyta o rozmiary i czasy modyfikacji plików, i tylko gdy okno jest widoczne i aktywne. Przycisk odświeżania obok tytułu przeładowuje od razu.

## Wskazówki

<Aside type="tip">
Użyj **Przekaż agentowi** na README albo poradniku po zmianie kodu. Agent porówna stronę z kodem i wypisze, co jest nieaktualne.
</Aside>

- Trzymaj decyzje w `.docs/adr/` z krótkim front matter, a pojawią się w tabeli.
- Zbyt duża strona nie jest tu pokazywana. Otwórz ją w widoku Kod.

## Powiązane strony

<CardGrid>
  <LinkCard title="Edytor i pliki" href="/pl/agent/code/" description="Widok Kod, w którym dokument otwiera się w linii." />
  <LinkCard title="Plan" href="/pl/agent/plan/" description="Pola wyboru Markdown z plików planu." />
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Sesje, którym można przekazać dokument." />
  <LinkCard title="Skille" href="/pl/agent/skills/" description="Wygeneruj szkielet .docs dla projektu." />
</CardGrid>
