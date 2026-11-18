# UI

> @skribly/ui, the shared look of Skribly: design tokens, plain CSS classes for any page, React components on React Aria and the Astro site kit of the Skribly sites, with light, dark and high contrast themes. Every component is live at ui.skribly.pl.

`@skribly/ui` is the shared look of Skribly: one set of design tokens, plain CSS for any page, React components for the apps, and the site kit of the Skribly websites.

:::tip[See every component live]
[ui.skribly.pl](https://ui.skribly.pl) is the live gallery of `@skribly/ui`: every component with working examples, in every theme.
:::

## Layers

| Layer | Files | Works in |
| --- | --- | --- |
| Tokens | `tokens/*.tokens.json` in the W3C Design Tokens format, built by Style Dictionary into `tokens.css` and TypeScript values | Everything |
| Styles | `components.css`, plain `.sk-*` classes in a cascade layer | Astro, plain HTML, anything |
| Components | React 19 on React Aria Components | The apps |
| Site kit | Astro components, `site.css` and small TypeScript scripts | The Skribly websites |

A later framework change only replaces the top layer. React Aria supplies keyboard, focus and screen reader behaviour; the look stays Skribly's.

## Use it

With Tailwind 4:

```css
@import "tailwindcss";
@import "@skribly/ui/styles.css";
```

```tsx

```

On a page with no Tailwind and no React:

```css
@import "@skribly/ui/plain.css";
```

```html
<button class="sk-button sk-button--outline">Cancel</button>
```

An app adds its own font link: Inter for the interface, JetBrains Mono for code, Bricolage Grotesque for display headings.

## Themes

Set `data-theme` to `light`, `dark` or `contrast` on the root, or on any element to theme only that part of the page. With no attribute on the root, the operating system decides, including `prefers-contrast: more`.

`data-density="compact"` gives the smaller controls and text of the desktop Agent. The `a11y-reduce-motion` and `a11y-strong-focus` classes on the root match the reader settings of the apps, and `prefers-reduced-motion` works with no class.

This site follows the same rules: pick **Light**, **Dark**, **High contrast** or **System** in the theme switch in the header. The choice holds on every Skribly site.

## Tokens

| Group | CSS variables |
| --- | --- |
| Surfaces | `--sk-bg`, `-surface`, `-sunken`, `-side`, `-bar`, `-input`, `-hover`, `-selected` |
| Text and lines | `--sk-fg`, `-muted`, `-border`, `-border-strong` |
| Accent | `--sk-accent`, `-strong`, `-fg`, `-text`, `-soft`, `-ring` |
| Status | `--sk-danger`, `-warn`, `-ok`, `-info`, each with `-fg` and `-soft` |
| Dark sidebar | `--sk-nav`, `-fg`, `-muted`, `-hover`, `-active`, `-accent` |
| Product colours | `--sk-tool-agent`, `-tracker`, `-skills`, `-docs`, `-ui` |
| Type | `--sk-text-label`, `-caption`, `-body`, `-title`, `-heading`, `-page`, `-display` |
| Sizes | `--sk-space-*`, `--sk-control-sm`, `-md`, `-lg` |
| Radius and shadow | `--sk-radius-sm` to `-xl`, `-full`; `--sk-shadow-sm` to `-lg` |
| Motion | `--sk-duration-fast`, `-base`, `-slow`; `--sk-ease-out`, `-in-out` |
| Layers | `--sk-z-sticky`, `-sidebar`, `-modal`, `-toast`, `-tour` |

Amber is the one accent. Green is for success only and red for destruction only. `--sk-accent-text` is the accent for text, because the plain accent fails 4.5:1 as a text colour on some surfaces. The package's tests check every text and control pairing against WCAG contrast in all three themes.

## Plain classes

Every class sits in the `components` cascade layer and reads only `--sk-*` tokens, so the themes, `data-density` and the reader settings work as they do in the apps, and a page's own CSS wins with no specificity fights. Each class has hover, focus and disabled states where they apply, and reads ARIA states such as `aria-current`, `aria-selected`, `aria-expanded`, `aria-sort` and `aria-invalid` for the rest. Message tones pair their colour with a glyph.

| Group | Classes |
| --- | --- |
| Actions | `.sk-button` (`--outline`, `--ghost`, `--danger`, `--sm`, `--lg`, `--icon`), `.sk-link`, `.sk-kbd` |
| Forms | `.sk-field`, `.sk-fieldset`, `.sk-label`, `.sk-required`, `.sk-optional`, `.sk-hint`, `.sk-input`, `.sk-textarea`, `.sk-select`, `.sk-checkbox`, `.sk-radio`, `.sk-switch` |
| Messages | `.sk-error`, `.sk-status`, `.sk-alert`, `.sk-callout`, `.sk-badge` |
| Progress | `.sk-spinner`, `.sk-progress` |
| Data | `.sk-table-wrap`, `.sk-table` (`--compact`, `--stack`) |
| Navigation | `.sk-nav`, `.sk-tabs`, `.sk-breadcrumbs`, `.sk-pagination`, `.sk-skip-link` |
| Overlays | `.sk-dialog`, `.sk-tooltip`, `.sk-details` |
| Content | `.sk-prose`, `.sk-code`, `.sk-divider`, `.sk-avatar`, `.sk-card`, `.sk-visually-hidden` |
| Layout | `.sk-container`, `.sk-stack`, `.sk-cluster`, `.sk-grid`, `.sk-hero` |

The markup carries the meaning and the classes only the look: a checkbox is a `<label>` around its `<input>`, an error is linked with `aria-describedby`, and a table wider than the screen sits in `.sk-table-wrap` with `tabindex="0"`, `role="region"` and a name.

## Site kit

The site kit gives skribly.pl, docs.skribly.pl and ui.skribly.pl one technology, Astro 7, and one set of parts, so they look and behave as one. This documentation site already runs on it; skribly.pl and ui.skribly.pl are moving onto it.

- One header with the Skribly products switcher, which shows the logo of every product: Skribly, Skribly Agent, Skribly Tracker, agent-skills, Skribly Docs and Skribly UI.
- One theme switch: light, dark, high contrast or the system's choice. The choice is kept in the `sk-theme` cookie on `.skribly.pl`, so it holds on all three sites.
- One accessibility panel: text size, grayscale, high contrast, inverted colours, light background, underlined links, a readable font, stopped animations and a strong focus ring, kept the same way in the `sk-a11y` cookie.
- One search dialog on Pagefind, opened with <kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>⌘</kbd>+<kbd>K</kbd> or <kbd>/</kbd>.
- One footer, skip link, breadcrumb trail and 404 page, and one title pattern: `<page> | Skribly <site>`.
- The same meta description, canonical address, Open Graph card and structured data on every page.
- Motion that stops when you ask for less: pages change with a view transition, headings rise in and sections lift into view, all off under reduced motion or the panel's **Stop animations**.

The sites do not install the private repository. Each keeps a copy in `vendor/skribly-ui`, written by one command in the UI repository, and its tests fail when the copy is edited by hand.

## Components

The components come in groups, and each group also has its own entry point, such as `@skribly/ui/forms`. As of 8 November 2026 the main branch has:

| Group | Examples |
| --- | --- |
| Theme | `ThemeProvider`, `ThemeToggle`, `AccessibilitySettings`, `SkipLink`, `LiveRegion`, `VisuallyHidden` |
| Brand | `Logo`, `Wordmark`, `AppLockup`, `Avatar`, `AgentChip`, `TrackerBadge` |
| Actions | `Button`, `IconButton`, `LinkButton`, `ToggleButton`, `CopyButton`, `Kbd`, `KeyCombo` |
| Forms | `TextField`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `DateInput`, `FileInput`, `FormErrorSummary` |
| Feedback | `Alert`, `Badge`, `Banner`, toasts, `Spinner`, `Skeleton`, `EmptyState`, `ProgressBar`, `Meter` |
| Overlays | `Modal`, `ConfirmDialog`, `Popover`, `DropdownMenu`, `Tooltip`, `InfoTip` |
| Navigation | `Tabs`, `LinkTabs`, `Segmented`, `Breadcrumbs`, `Pagination`, `FilterChips`, `LanguageSwitch` |
| Surfaces | `Card` and its parts, `StatCard`, `Hero`, `SettingsSection`, `OptionCard`, `Divider` |
| Data | `Table`, `DataTable`, `List`, `VirtualList`, `TreeView`, `Timeline`, `KeyValueList` |
| Shell | `AppLayout`, `Sidebar`, `Topbar`, `StatusBar`, `SplitView`, `Pane`, `Dock` |
| Search | `CommandPalette`, `GlobalSearch`, `QuickOpen`, `Highlight` |
| Content | `Markdown`, `CodeBlock`, `Snippet`, `TerminalScreen`, `Prose` |
| Conversation | `MessageThread`, `MessageBubble`, `Composer`, `ToolLine`, `CommentItem`, `CommentForm` |
| Onboarding | `Tour`, `TourSpotlight`, `Checklist`, `OnboardingSteps` |
| Charts | `LineChart`, `BarChart`, `StackedBars`, `DonutChart`, `ActivityHeatmap`, `Sparkline`, `ScoreRing`, `MetricTile` |
| Media | `UploadDropzone`, `MediaGrid`, `MediaPicker`, `ImageEditor`, `ImageField` |
| Tracker | `Board`, `TaskCard`, `IssueRow`, `IssueTable`, `IssueKey`, `PriorityBadge`, `LabelList` |
| Code | `GitFileRow`, `GitGraph`, `CommitBox`, `PullRequestCard`, `EditorStatusBar`, `BrowserBar` |
| Pages | `AuthLayout`, `LoginForm`, `PasswordResetForm`, `ErrorPage` |

The package has no tagged release yet, and no app uses these components so far.

Every component follows the same rules: semantic tokens only, so it is right in every theme; no built-in text, so every label, `aria-label` included, comes from the app's own language files; never meaning carried by colour alone; and an axe check of every demo in every theme in the tests.

## Planned

- skribly.pl and ui.skribly.pl on the site kit.
- A tagged 0.1.0 release, then Skribly Agent and Skribly Tracker moving onto its components.
