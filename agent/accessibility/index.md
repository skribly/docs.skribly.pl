# Accessibility

> The reading switches of Skribly Agent: text size, display modes, reading options and Reset, plus reduced motion, keyboard use, the tour and the audits for your own sites.

**Settings → Accessibility** holds the same switches, with the same names and in the same order, as the accessibility panel of the Skribly sites. They are saved on this device with the rest of the app's settings. Skribly Agent is built to WCAG 2.2 AA as a target.

![Settings, Accessibility: text size at 100 percent, the display switches Grayscale, High contrast, Inverted colours and Light background, and the reading switches Underline links, Readable font, Stop animations and Strong focus](../../../assets/screens/agent-settings-accessibility.webp)

## Open the view

- Open **Settings** and choose **Accessibility**, or
- follow the **Accessibility** step of the first-run tour, which opens this page of Settings.

## How to change a switch

<Steps>

1. Open **Settings → Accessibility**.

2. For the text size, press **Larger text** or **Smaller text**. The size moves one step at a time and the number between the buttons shows it.

3. Switch on what you need under **Display** and **Reading**. A switch takes effect at once.

4. To go back, press **Reset all settings**.

</Steps>

## Options

| Option | What it does | Default |
| --- | --- | --- |
| **Text size** | Scales the whole interface, terminals and the editor included, in steps of 100, 110, 120, 130 and 140 percent. Terminals refit their columns and rows. Pages in the Skribly browser keep their own size, so audits and agents measure the real viewport | 100% |
| **Grayscale** | The whole interface in shades of grey. Turns the other display modes off | Off |
| **High contrast** | The high contrast theme (black background, white text, yellow accent) whatever theme is chosen. Turns the other display modes off | Off |
| **Inverted colours** | Inverts the brightness of the interface colours. Images keep their colours. Turns the other display modes off | Off |
| **Light background** | The light Skribly theme whatever theme is chosen. Turns the other display modes off | Off |
| **Underline links** | Links stand out by more than colour | Off |
| **Readable font** | Verdana with wider letter spacing. Code and terminals keep their monospaced font | Off |
| **Stop animations** | Stops transitions and animations | Off |
| **Strong focus** | A thick outline around the item selected with the keyboard | Off |
| **Reset all settings** | Sets the text size back to 100% and turns every switch of this section off | |

The display modes work one at a time: switching one on switches the one that was on off, as on the sites. Text size and the other switches combine.

## Reduced motion

If the system asks for reduced motion, the app stops animations and smooth scrolling even with **Stop animations** off. **Stop animations** adds to the system setting and cannot override it.

## Keyboard

Everything in the app can be reached from the keyboard: the command palette `⌘K`, the number shortcuts for views, and the `Ctrl+B` prefix for panes. Windows and Linux use `Ctrl` where this page says `⌘`. The full list is in [Keyboard shortcuts](/agent/shortcuts/).

- Selects open their list with `Space`, `Enter` or the arrow keys and jump to an option as you type. Segmented switchers are one `Tab` stop and move with the arrow keys. Menus open with `Enter` or the arrow keys and close with `Esc`, which returns focus to the button.
- Tooltips open on keyboard focus as on hover.
- The language list, the lists of the attention inbox and Pipelines, the Plan view and the usage board tables are all usable from the keyboard.
- The buttons of this section are at least 44 pixels high.

## The tour and dialogs

The first-run tour is a dialog: focus moves to its button and stays inside, `Esc` closes it and focus goes back to where it was, and the arrow keys move between steps. With reduced motion (the system's or **Stop animations**) the tour draws no cursor and waits for you instead of moving on by itself. It also waits while the window is hidden.

Every other dialog moves focus into itself when it opens, keeps `Tab` inside until it closes and gives focus back to the control that opened it. A screen reader names a dialog by its title, and a long dialog scrolls its body while the title and the buttons stay in view.

## Checking your own project

The **Audits** view runs axe-core against WCAG 2.2 A and AA on any page of your project and sends the findings to an agent as a task. See [Audits](/agent/audits/). The audit tells you what to fix; it does not certify a page.

## Tips

<Aside type="tip">
For low vision, combine **Text size**, **High contrast** and **Strong focus**. For a calmer screen, switch on **Stop animations**.
</Aside>

- Settings from older versions move over on the first start: the text scale becomes the text size, and high contrast, reduced motion, underlined links and strong focus each become one switch. The old values stay in `settings.json` under `legacy.accessibility`.
- The theme mode, the day and night themes and the base text size in pixels are in [Appearance and themes](/agent/themes/).

## Related pages

<CardGrid>
  <LinkCard title="Appearance and themes" href="/agent/themes/" description="Theme mode, day and night themes and the text size." />
  <LinkCard title="Shortcuts" href="/agent/shortcuts/" description="Every keyboard shortcut of the app." />
  <LinkCard title="Audits" href="/agent/audits/" description="Accessibility audits for your own sites." />
  <LinkCard title="Settings" href="/agent/settings/" description="Every section of Settings and its defaults." />
</CardGrid>
