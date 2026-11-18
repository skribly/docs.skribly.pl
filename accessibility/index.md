# Accessibility

> The accessibility target of Skribly and of this documentation site, what was checked, the known limits, and how to report a barrier.

Skribly is built to **WCAG 2.2 level AA as a target**, and AAA wherever we can. Automated tools cannot prove full conformance, so this page says what was checked and how. It is a statement of intent and of known limits, not a declaration of conformity.

## This site

docs.skribly.pl is built to WCAG 2.2 AA as a target.

| What | How |
| --- | --- |
| Themes | Light, dark and high contrast, from the theme switch in the header. **System** follows your system, including the "increase contrast" setting. The choice holds on every Skribly site. |
| Reader settings | The accessibility button in the header opens a panel with text size up to 140%, grayscale, high contrast, inverted colours, a light background, underlined links, a readable font, stopped animations and a strong focus ring. The settings hold on every Skribly site. |
| Colour | Colours come from the `@skribly/ui` tokens, whose tests check every text and control pairing against WCAG contrast in all three themes. Links are underlined, so they never rely on colour alone. |
| Keyboard | Every link, the search, the menus, the theme switch and the accessibility panel work with the keyboard. <kbd>Ctrl</kbd>+<kbd>K</kbd> or <kbd>/</kbd> opens the search, and <kbd>Esc</kbd> closes it. A skip link leads to the content, and a visible focus ring marks where you are. |
| Structure | One `h1` per page, headings in order, landmarks for the header, navigation, sidebar, content and footer, a breadcrumb trail, and a table of contents on longer pages. |
| Motion | Page transitions, animations and smooth scrolling stop when your system asks for reduced motion, or when you choose **Stop animations** in the accessibility panel. |
| Zoom and small screens | The layout works from 320 pixels wide and at 400% zoom without horizontal scrolling of the page; wide tables scroll on their own. |
| Search | Search runs in the browser, from a local index, and is reachable with the keyboard. |
| Language | Every page declares its language (English or Polish). |

Known limits:

- The [API reference](/tracker/api/) is generated from the OpenAPI description by a plugin, and its markup is less tuned than the hand-written pages.
- Screenshots have written descriptions, but they cannot show everything the app shows.

## The apps

| Tool | What it offers |
| --- | --- |
| Skribly Agent | Interface text size, high contrast, reduced motion, underlined links and a strong focus indicator in **Settings → Accessibility**; full keyboard control; built-in light, dark and high contrast themes. See [Accessibility in Skribly Agent](/agent/accessibility/). |
| Skribly Tracker | Light and dark themes, an accessibility panel on every page for text size, contrast, fonts and motion, and a board you can use with a keyboard by opening an issue and changing its status there. |
| `@skribly/ui` | Components on React Aria for keyboard and screen reader behaviour, no meaning carried by colour alone, and an axe check of every demo in every theme. See [UI](/ui/). |
| agent-skills | The `wcag-audit` skill checks your own UI against WCAG 2.2 AA with axe-core and a checklist. |

## Report a barrier

If something on this site or in a Skribly tool is hard or impossible to use, write to **[contact@skribly.pl](mailto:contact@skribly.pl)**. Tell us the page or the screen, what you tried to do, and the browser, assistive technology and system you use. We read every message, and we treat barriers as bugs.
