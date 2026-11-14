# UI

> @skribly/ui, wspólny wygląd Skribly: tokeny projektowe, zwykłe klasy CSS dla dowolnej strony, komponenty React na React Aria i site kit w Astro dla stron Skribly, z motywami jasnym, ciemnym i wysokiego kontrastu. Każdy komponent działa na żywo pod ui.skribly.pl.

`@skribly/ui` to wspólny wygląd Skribly: jeden zestaw tokenów projektowych, zwykły CSS dla dowolnej strony, komponenty React dla aplikacji i site kit stron Skribly.

:::tip[Zobacz każdy komponent na żywo]
[ui.skribly.pl](https://ui.skribly.pl) to galeria `@skribly/ui` na żywo: każdy komponent z działającymi przykładami, w każdym motywie.
:::

## Warstwy

| Warstwa | Pliki | Działa w |
| --- | --- | --- |
| Tokeny | `tokens/*.tokens.json` w formacie W3C Design Tokens, budowane przez Style Dictionary do `tokens.css` i wartości TypeScript | Wszystkim |
| Style | `components.css`, zwykłe klasy `.sk-*` w warstwie kaskady (cascade layer) | Astro, czystym HTML, w dowolnym miejscu |
| Komponenty | React 19 na React Aria Components | Aplikacjach |
| Site kit | Komponenty Astro, `site.css` i małe skrypty TypeScript | Witrynach Skribly |

Późniejsza zmiana frameworka wymienia tylko górną warstwę. React Aria zapewnia obsługę klawiatury, fokusu i czytników ekranu; wygląd pozostaje Skribly.

## Użycie

Z Tailwind 4:

```css
@import "tailwindcss";
@import "@skribly/ui/styles.css";
```

```tsx

```

Na stronie bez Tailwind i bez React:

```css
@import "@skribly/ui/plain.css";
```

```html
<button class="sk-button sk-button--outline">Cancel</button>
```

Aplikacja dodaje własny link do czcionek: Inter dla interfejsu, JetBrains Mono dla kodu, Bricolage Grotesque dla nagłówków głównych (display).

## Motywy

Ustaw `data-theme` na `light`, `dark` lub `contrast` na elemencie głównym (root) albo na dowolnym elemencie, aby nadać motyw tylko tej części strony. Bez atrybutu na elemencie głównym decyduje system operacyjny, w tym `prefers-contrast: more`.

`data-density="compact"` daje mniejsze kontrolki i tekst aplikacji Skribly Agent. Klasy `a11y-reduce-motion` i `a11y-strong-focus` na elemencie głównym odpowiadają ustawieniom czytelności w aplikacjach, a `prefers-reduced-motion` działa bez klasy.

Ta witryna stosuje te same reguły: wybierz **Dzień**, **Noc**, **Wysoki kontrast** lub **Jak w systemie** w przełączniku motywu w nagłówku. Wybór obowiązuje na każdej witrynie Skribly.

## Tokeny

| Grupa | Zmienne CSS |
| --- | --- |
| Powierzchnie | `--sk-bg`, `-surface`, `-sunken`, `-side`, `-bar`, `-input`, `-hover`, `-selected` |
| Tekst i linie | `--sk-fg`, `-muted`, `-border`, `-border-strong` |
| Akcent | `--sk-accent`, `-strong`, `-fg`, `-text`, `-soft`, `-ring` |
| Status | `--sk-danger`, `-warn`, `-ok`, `-info`, każdy z `-fg` i `-soft` |
| Ciemny pasek boczny | `--sk-nav`, `-fg`, `-muted`, `-hover`, `-active`, `-accent` |
| Kolory produktów | `--sk-tool-agent`, `-tracker`, `-skills`, `-docs`, `-ui` |
| Typografia | `--sk-text-label`, `-caption`, `-body`, `-title`, `-heading`, `-page`, `-display` |
| Rozmiary | `--sk-space-*`, `--sk-control-sm`, `-md`, `-lg` |
| Zaokrąglenie i cień | `--sk-radius-sm` do `-xl`, `-full`; `--sk-shadow-sm` do `-lg` |
| Animacja | `--sk-duration-fast`, `-base`, `-slow`; `--sk-ease-out`, `-in-out` |
| Warstwy | `--sk-z-sticky`, `-sidebar`, `-modal`, `-toast`, `-tour` |

Bursztynowy jest jedynym akcentem. Zieleń oznacza wyłącznie sukces, a czerwień wyłącznie działania destrukcyjne. `--sk-accent-text` to akcent dla tekstu, bo zwykły akcent nie spełnia 4,5:1 jako kolor tekstu na niektórych powierzchniach. Testy pakietu sprawdzają kontrast każdej pary tekstu i kontrolki względem progów WCAG we wszystkich trzech motywach.

## Zwykłe klasy

Każda klasa leży w warstwie kaskady `components` i czyta wyłącznie tokeny `--sk-*`, więc motywy, `data-density` i ustawienia dostępności działają tak jak w aplikacjach, a własny CSS strony wygrywa bez przepychanek o specyficzność. Każda klasa ma stany hover, focus i disabled tam, gdzie mają sens, a resztę stanów czyta z atrybutów ARIA, takich jak `aria-current`, `aria-selected`, `aria-expanded`, `aria-sort` i `aria-invalid`. Komunikaty łączą kolor ze znakiem (glifem).

| Grupa | Klasy |
| --- | --- |
| Akcje | `.sk-button` (`--outline`, `--ghost`, `--danger`, `--sm`, `--lg`, `--icon`), `.sk-link`, `.sk-kbd` |
| Formularze | `.sk-field`, `.sk-fieldset`, `.sk-label`, `.sk-required`, `.sk-optional`, `.sk-hint`, `.sk-input`, `.sk-textarea`, `.sk-select`, `.sk-checkbox`, `.sk-radio`, `.sk-switch` |
| Komunikaty | `.sk-error`, `.sk-status`, `.sk-alert`, `.sk-callout`, `.sk-badge` |
| Postęp | `.sk-spinner`, `.sk-progress` |
| Dane | `.sk-table-wrap`, `.sk-table` (`--compact`, `--stack`) |
| Nawigacja | `.sk-nav`, `.sk-tabs`, `.sk-breadcrumbs`, `.sk-pagination`, `.sk-skip-link` |
| Nakładki | `.sk-dialog`, `.sk-tooltip`, `.sk-details` |
| Treść | `.sk-prose`, `.sk-code`, `.sk-divider`, `.sk-avatar`, `.sk-card`, `.sk-visually-hidden` |
| Układ | `.sk-container`, `.sk-stack`, `.sk-cluster`, `.sk-grid`, `.sk-hero` |

To znaczniki HTML niosą znaczenie, a klasy tylko wygląd: checkbox to `<label>` wokół swojego `<input>`, błąd jest powiązany przez `aria-describedby`, a tabela szersza niż ekran leży w `.sk-table-wrap` z `tabindex="0"`, `role="region"` i nazwą.

## Site kit

Site kit daje skribly.pl, docs.skribly.pl i ui.skribly.pl jedną technologię, Astro 7, i jeden zestaw części, żeby wyglądały i działały jak jedna całość. Ta witryna dokumentacji już na nim działa; skribly.pl i ui.skribly.pl na niego przechodzą.

- Jeden nagłówek z przełącznikiem produktów Skribly, który pokazuje logo każdego produktu: Skribly, Skribly Agent, Skribly Tracker, agent-skills, Skribly Docs i Skribly UI.
- Jeden przełącznik motywu: dzień, noc, wysoki kontrast albo wybór systemu. Wybór jest zapamiętany w cookie `sk-theme` na `.skribly.pl`, więc obowiązuje na wszystkich trzech witrynach.
- Jeden panel dostępności: rozmiar tekstu, skala szarości, wysoki kontrast, odwrócone kolory, jasne tło, podkreślone linki, czytelna czcionka, zatrzymane animacje i wyraźny fokus, zapamiętywane tak samo w cookie `sk-a11y`.
- Jedno okno wyszukiwania oparte na Pagefind, otwierane przez <kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>⌘</kbd>+<kbd>K</kbd> lub <kbd>/</kbd>.
- Jedna stopka, link „przejdź do treści”, ścieżka nawigacji (breadcrumbs), strona 404 i jeden wzorzec tytułu: `<page> | Skribly <site>`.
- Ten sam opis meta, adres kanoniczny, karta Open Graph i dane strukturalne na każdej stronie.
- Ruch, który ustępuje, gdy prosisz o mniej: strony zmieniają się przez view transition, nagłówki wsuwają się, a sekcje podnoszą w pole widzenia; wszystko to wyłącza ograniczenie ruchu w systemie albo **Zatrzymaj animacje** w panelu.

Witryny nie instalują prywatnego repozytorium. Każda trzyma kopię w `vendor/skribly-ui`, zapisywaną jednym poleceniem w repozytorium UI, a testy zawodzą, gdy kopia zostanie zmieniona ręcznie.

## Komponenty

Komponenty są podzielone na grupy, a każda grupa ma też własny punkt wejścia, na przykład `@skribly/ui/forms`. Na 8 listopada 2026 główna gałąź ma:

| Grupa | Przykłady |
| --- | --- |
| Motyw | `ThemeProvider`, `ThemeToggle`, `AccessibilitySettings`, `SkipLink`, `LiveRegion`, `VisuallyHidden` |
| Marka | `Logo`, `Wordmark`, `AppLockup`, `Avatar`, `AgentChip`, `TrackerBadge` |
| Akcje | `Button`, `IconButton`, `LinkButton`, `ToggleButton`, `CopyButton`, `Kbd`, `KeyCombo` |
| Formularze | `TextField`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `DateInput`, `FileInput`, `FormErrorSummary` |
| Informacja zwrotna | `Alert`, `Badge`, `Banner`, toasty, `Spinner`, `Skeleton`, `EmptyState`, `ProgressBar`, `Meter` |
| Nakładki | `Modal`, `ConfirmDialog`, `Popover`, `DropdownMenu`, `Tooltip`, `InfoTip` |
| Nawigacja | `Tabs`, `LinkTabs`, `Segmented`, `Breadcrumbs`, `Pagination`, `FilterChips`, `LanguageSwitch` |
| Powierzchnie | `Card` i jego części, `StatCard`, `Hero`, `SettingsSection`, `OptionCard`, `Divider` |
| Dane | `Table`, `DataTable`, `List`, `VirtualList`, `TreeView`, `Timeline`, `KeyValueList` |
| Szkielet aplikacji | `AppLayout`, `Sidebar`, `Topbar`, `StatusBar`, `SplitView`, `Pane`, `Dock` |
| Wyszukiwanie | `CommandPalette`, `GlobalSearch`, `QuickOpen`, `Highlight` |
| Treść | `Markdown`, `CodeBlock`, `Snippet`, `TerminalScreen`, `Prose` |
| Rozmowa | `MessageThread`, `MessageBubble`, `Composer`, `ToolLine`, `CommentItem`, `CommentForm` |
| Wprowadzenie | `Tour`, `TourSpotlight`, `Checklist`, `OnboardingSteps` |
| Wykresy | `LineChart`, `BarChart`, `StackedBars`, `DonutChart`, `ActivityHeatmap`, `Sparkline`, `ScoreRing`, `MetricTile` |
| Media | `UploadDropzone`, `MediaGrid`, `MediaPicker`, `ImageEditor`, `ImageField` |
| Tracker | `Board`, `TaskCard`, `IssueRow`, `IssueTable`, `IssueKey`, `PriorityBadge`, `LabelList` |
| Kod | `GitFileRow`, `GitGraph`, `CommitBox`, `PullRequestCard`, `EditorStatusBar`, `BrowserBar` |
| Strony | `AuthLayout`, `LoginForm`, `PasswordResetForm`, `ErrorPage` |

Pakiet nie ma jeszcze wydania z tagiem, a żadna aplikacja jeszcze tych komponentów nie używa.

Każdy komponent trzyma się tych samych reguł: tylko tokeny semantyczne, więc wygląda dobrze w każdym motywie; żadnego wbudowanego tekstu, więc każda etykieta, także `aria-label`, pochodzi z plików językowych aplikacji; znaczenie nigdy nie jest niesione samym kolorem; a testy zawierają kontrolę axe każdego demo w każdym motywie.

## Planowane

- skribly.pl i ui.skribly.pl na site kicie.
- Wydanie 0.1.0 z tagiem, a potem przejście Skribly Agent i Skribly Tracker na jego komponenty.
