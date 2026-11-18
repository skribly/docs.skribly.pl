# Wygląd i motywy

> Wybierz tryb motywu, motyw dzienny i nocny oraz rozmiar tekstu w Skribly Agent i używaj motywów z VS Code, Cursora, Windsurfa, VSCodium lub Open VSX.

Widok **Wygląd** ustawia, jak wygląda Skribly Agent: tryb motywu (dzień, noc, wysoki kontrast albo jak system), rozmiar tekstu i, jeśli chcesz, motywy z Twojego edytora. Jeden motyw koloruje interfejs, edytor kodu (tokeny składni) i terminale. Motywy wbudowane to te, których używają strony Skribly. Motyw z VS Code, Cursora, Windsurfa, VSCodium lub Open VSX to opcjonalna warstwa nad nimi, wyłączona, dopóki jej nie włączysz albo nie wybierzesz motywu.

![Widok Wygląd: motyw dzienny i nocny, rozmiar tekstu oraz karty motywów wbudowanych, z VS Code, Cursora i Windsurfa](../../../../assets/screens/agent-themes.webp)

## Otwórz widok

- Kliknij **Wygląd** na dole paska aktywności po lewej (ikona palety) albo
- otwórz **Ustawienia → Wygląd i przewodnik** i naciśnij **Wybierz motywy** albo
- otwórz menu motywu na górnym pasku (ikona słońca, księżyca lub monitora) i wybierz **Więcej motywów (VS Code, Cursor)…**.

## Tryb motywu

Tryb mówi, który motyw jest włączony. Zmienisz go w **Ustawienia → Wygląd i przewodnik**, w widoku **Wygląd**, w menu **Tryb motywu** na górnym pasku i klikając pigułkę motywu po prawej stronie paska stanu, która przechodzi przez tryby w tej kolejności: Dzień, Noc, Wysoki kontrast, Jak system. W trybie **Jak system** pigułka pokazuje `Auto` i motyw wybrany teraz.

<Tabs>
  <TabItem label="Dzień">
    ![Ta sama strona Ustawień w motywie dziennym](../../../../assets/screens/agent-theme-light.webp)

    **Dzień** to zawsze jasny motyw.
  </TabItem>
  <TabItem label="Noc">
    ![Ustawienia, Wygląd i przewodnik nocą: tryb motywu Dzień, Noc, Wysoki kontrast albo Jak system, rozmiar tekstu, język interfejsu, motywy dzienny i nocny oraz przyciski przewodnika](../../../../assets/screens/agent-settings.webp)

    **Noc** to zawsze ciemny motyw.
  </TabItem>
  <TabItem label="Wysoki kontrast">
    ![Ta sama strona Ustawień w motywie wysokiego kontrastu: czarne tło, biały tekst i żółte akcenty](../../../../assets/screens/agent-theme-contrast.webp)

    **Wysoki kontrast** to czerń, biel i żółć.
  </TabItem>
  <TabItem label="Jak system">
    ![Ta sama strona Ustawień z wybranym Jak system, tu w motywie dziennym](../../../../assets/screens/agent-theme-system.webp)

    **Jak system** bierze dzień, noc albo wysoki kontrast z systemu, także z jego ustawienia zwiększonego kontrastu.
  </TabItem>
</Tabs>

Widok Wygląd nazywa te same cztery tryby **System**, **Dzień**, **Noc** i **Kontrast**.

## Jak wybrać motyw

<Steps>

1. Otwórz **Wygląd**. Karty **Motyw dzienny** i **Motyw nocny** pokazują, co jest ustawione teraz, i oznaczają ten w użyciu.

2. Na karcie **Motywy** filtruj przez **Szukaj motywu** albo przyciskami źródeł (**Wszystkie**, potem po jednym dla każdego źródła, które ma motywy, jak **Wbudowany**, **VS Code** czy **Cursor**). Motywy jasne są pod **Dzień**, ciemne pod **Noc**.

3. Kliknij kartę. Staje się motywem dziennym albo nocnym według swojego typu, a motyw z edytora lub Open VSX włącza też **Motywy z edytorów i Open VSX**. W trybie **Jak system** wybór motywu drugiego rodzaju pokazuje komunikat, kiedy się pojawi.

4. Wybór **Skribly · Wysoki kontrast** przełącza tryb na Wysoki kontrast.

</Steps>

Naciśnij **Wczytaj ponownie**, by znów wczytać motywy z edytorów.

## Jak użyć motywu z Open VSX

<Steps>

1. Otwórz **Wygląd** i kartę **Open VSX**.

2. Wpisz nazwę, na przykład `dracula`, `nord` lub `github`, i naciśnij **Szukaj**. Bez zapytania zobaczysz najczęściej pobierane motywy.

3. Naciśnij **Pobierz motyw** przy rozszerzeniu. Skribly pobiera paczkę tylko z `open-vsx.org` i bierze z niej tylko pliki JSON i Markdown do 5 MB każdy.

4. Kliknij nazwę motywu na karcie, by go użyć.

</Steps>

## Jak zainstalować rozszerzenie edytora

<Steps>

1. Otwórz **Wygląd** i kartę **Rozszerzenia w edytorach**.

2. W **Zainstaluj rozszerzenie w edytorze** wpisz identyfikator jako `wydawca.nazwa`, na przykład `dracula-theme.theme-dracula`. Skróty oferują Dracula, One Dark Pro, GitHub Theme, Catppuccin i Tokyo Night.

3. Wybierz VS Code, Cursor lub Windsurf i naciśnij **Zainstaluj**. Skribly uruchamia polecenie edytora z `--install-extension`. Polecenie (`code`, `cursor` lub `windsurf`) musi być w `PATH` albo w standardowym folderze aplikacji.

</Steps>

Lista poniżej pokazuje rozszerzenia zainstalowane w VS Code, Cursorze, Windsurfie i VSCodium z ich wersją i edytorem. **Tylko z motywami** zostawia te, które mają motywy.

## Opcje

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| Tryb motywu | **Dzień**, **Noc**, **Wysoki kontrast** albo **Jak system** | Jak system |
| **Motywy z edytorów i Open VSX** | Wybrany motyw dzienny i nocny zastępuje kolory Skribly. Wyłączone: wbudowane motywy Skribly | Wyłączone |
| **Motyw dzienny** | Używany w trybie Dzień i gdy system jest jasny | **Skribly · Pergamin** |
| **Motyw nocny** | Używany w trybie Noc i gdy system jest ciemny | **Skribly · Atrament** |
| **Rozmiar tekstu** | Suwak od 12 (zwarty) do 16 (duży) pikseli dla interfejsu, edytora i terminali. W Ustawienia → Wygląd i przewodnik są przyciski minus i plus dla tej samej wartości | 13 |

Motywy wbudowane to **Skribly · Pergamin** (jasny), **Skribly · Atrament** (ciemny) i **Skribly · Wysoki kontrast**. [Dostępność](/pl/agent/accessibility/) ma osobny rozmiar tekstu w procentach i przełącznik, który pokazuje motyw wysokiego kontrastu albo jasny nad wybranym motywem.

## Skąd biorą się motywy

| Źródło | Miejsce |
| --- | --- |
| Wbudowane | Trzy motywy Skribly |
| VS Code | `~/.vscode/extensions`, `~/.vscode-insiders/extensions` i motywy dołączone do aplikacji |
| Cursor | `~/.cursor/extensions` i motywy aplikacji |
| Windsurf | `~/.windsurf/extensions` i motywy aplikacji |
| VSCodium | `~/.vscode-oss/extensions` i motywy aplikacji |
| Pobrane | Z Open VSX, zapisane w `themes/` w katalogu danych |

Skribly czyta tylko pliki JSON motywów wymienione w `contributes.themes` w `package.json` rozszerzenia, z `include`, komentarzami i tłumaczeniami `package.nls.json`. Nigdy nie uruchamia kodu z rozszerzenia.

## Reguły kontrastu

Wiele motywów ma blady kolor akcentu. Skribly dobiera akcent tak, by miał kontrast co najmniej 3:1 względem tła, a tekst na przyciskach w kolorze akcentu co najmniej 4,5:1, w przeciwnym razie używa bieli, czerni albo koloru motywu. Dzięki temu żaden motyw nie daje nieczytelnych przycisków. Przy **Wysoki kontrast** nad zaimportowanym motywem każdy kolor pierwszego planu przesuwa się ku czerni lub bieli tylko tak daleko, jak trzeba, więc motyw pozostaje rozpoznawalny.

Wyjątkiem jest znak Skribly Agent na górnym pasku i w oknie O aplikacji: zawsze ma własny pomarańcz produktu i kontrast co najmniej 3:1 względem wbudowanych powierzchni.

## Wskazówki

<Aside type="tip">
Ustawienia zapisane przez starsze wersje przenoszą się przy pierwszym starcie: Dzień, Noc i System zostają, wysoki kontrast staje się trybem Wysoki kontrast, a wybrany motyw edytora włącza opcjonalną warstwę.
</Aside>

- Motywy są czytane tylko jako JSON, więc motyw nigdy nie uruchomi kodu na Twoim komputerze.
- Przy włączonym **Bez połączeń sieciowych aplikacji** wyszukiwanie i pobieranie z Open VSX zgłaszają, że sieć jest wyłączona; motywy, które już masz, nadal działają.

## Powiązane strony

<CardGrid>
  <LinkCard title="Dostępność" href="/pl/agent/accessibility/" description="Rozmiar tekstu w procentach, tryby wyświetlania, opcje czytania i fokus." />
  <LinkCard title="Języki" href="/pl/agent/languages/" description="Język interfejsu i tłumaczenie online." />
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Każda sekcja Ustawień i jej wartości domyślne." />
  <LinkCard title="Dane i sieć" href="/pl/agent/data-and-network/" description="Z czym łączą się Open VSX i inne pobrania." />
</CardGrid>
