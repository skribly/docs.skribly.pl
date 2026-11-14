# Accessibility in Skribly Agent

> Reading preferences in Skribly Agent - interface text size, high contrast, reduced motion, underlined links and a strong focus indicator - plus keyboard use and themes.

**Settings → Accessibility** holds the reading preferences for the interface. They are saved on this device with the rest of the app's settings.

| Setting | What it does | Default |
| --- | --- | --- |
| **Interface text size** | Scales the whole interface, terminals and the editor included, in steps of 100, 110, 120, 130 and 140 percent. Terminals refit their columns and rows; pages in the Skribly browser keep their own size, so audits and agents measure the real viewport. | 100% |
| **High contrast** | Strengthens text and borders in the day and night themes. The terminal and code editor keep their theme colours. | Off |
| **Reduce motion** | Stops transitions and animations. Until you change it, the app follows your system setting. | System |
| **Underline links** | Links stand out by more than colour. | Off |
| **Strong focus indicator** | A thick ring around the item selected with the keyboard. | Off |
| **Default settings** | Restores every setting in this section; reduced motion follows the system again. | |

## Keyboard

Everything in the app can be reached from the keyboard: the command palette `⌘K` (`Ctrl+K`), view shortcuts `⌘1` to `⌘9`, and the `Ctrl+B` prefix for panes. The full list is in [Keyboard shortcuts](/agent/shortcuts/).

## Themes and contrast

- Separate day and night themes that follow the system or switch from the status bar.
- A built-in high contrast theme, **Skribly · Wysoki kontrast**.
- With any theme, Skribly picks an accent with at least 3:1 contrast against the background, and text on accent buttons with at least 4.5:1.
- Text size can also be set from 12 to 16 in **Appearance**.

## Checking your own project

The **Audits** view runs axe-core against WCAG 2.2 A and AA on any page, and sends the findings to an agent as a task. The `wcag-audit` skill of [agent-skills](/skills/catalog/) does the same from any agent.
