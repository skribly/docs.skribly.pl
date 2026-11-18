# Appearance and themes

> Choose the theme mode, the day and night themes and the text size of Skribly Agent, and use themes from VS Code, Cursor, Windsurf, VSCodium or Open VSX.

The **Appearance** view sets how Skribly Agent looks: the theme mode (day, night, high contrast or follow the system), the text size and, if you want them, themes from your editor. One theme colours the interface, the code editor (syntax tokens) and the terminals. The built-in themes are the ones the Skribly sites use. A theme from VS Code, Cursor, Windsurf, VSCodium or Open VSX is an optional layer above them, off until you switch it on or pick one.

![The Appearance view: the day and night theme, text size, and theme cards from built-in, VS Code, Cursor and Windsurf themes](../../../assets/screens/agent-themes.webp)

## Open the view

- Click **Appearance** at the bottom of the activity bar on the left (the palette icon), or
- open **Settings → Appearance and tour** and press **Choose themes**, or
- open the theme menu in the title bar (the sun, moon or monitor icon) and choose **More themes (VS Code, Cursor)…**.

## Theme mode

The mode says which theme is on. You can change it in **Settings → Appearance and tour**, in the **Appearance** view, in the title bar menu **Theme mode** and by clicking the theme pill at the right of the status bar, which goes through the modes in this order: Day, Night, High contrast, Follow the system. In **Follow the system** the pill shows `Auto` and the theme it picked now.

<Tabs>
  <TabItem label="Day">
    ![The same Settings page in the day theme](../../../assets/screens/agent-theme-light.webp)

    **Day** is always the light theme.
  </TabItem>
  <TabItem label="Night">
    ![Settings, Appearance and tour at night: theme mode Day, Night, High contrast or Follow the system, text size, interface language, day and night themes, and the tour buttons](../../../assets/screens/agent-settings.webp)

    **Night** is always the dark theme.
  </TabItem>
  <TabItem label="High contrast">
    ![The same Settings page in the high contrast theme: black background, white text and yellow accents](../../../assets/screens/agent-theme-contrast.webp)

    **High contrast** is black, white and yellow.
  </TabItem>
  <TabItem label="Follow the system">
    ![The same Settings page with Follow the system chosen, here showing the day theme](../../../assets/screens/agent-theme-system.webp)

    **Follow the system** takes day, night or high contrast from the system, including its increased contrast setting.
  </TabItem>
</Tabs>

The Appearance view names the same four modes **System**, **Day**, **Night** and **Contrast**.

## How to choose a theme

<Steps>

1. Open **Appearance**. The cards **Day theme** and **Night theme** show what is set now, and mark the one in use.

2. In the **Themes** tab, filter with **Search themes** or with the source buttons (**All**, then one for each source that has themes, such as **Built-in**, **VS Code** or **Cursor**). Day themes are under **Day**, dark ones under **Night**.

3. Click a card. It becomes the day or the night theme by its type, and a theme from an editor or Open VSX also switches on **Themes from editors and Open VSX**. In **Follow the system** mode, picking a theme of the other kind shows a message that says when it will appear.

4. Choosing **Skribly · High contrast** switches the mode to High contrast.

</Steps>

Press **Reload** to read the themes from your editors again.

## How to use a theme from Open VSX

<Steps>

1. Open **Appearance** and the **Open VSX** tab.

2. Type a name such as `dracula`, `nord` or `github` and press **Search**. With no query you see the most downloaded themes.

3. Press **Get theme** next to an extension. Skribly downloads the package only from `open-vsx.org` and takes from it only JSON and Markdown files of up to 5 MB each.

4. Click a theme name on the card to use it.

</Steps>

## How to install an editor extension

<Steps>

1. Open **Appearance** and the **Extensions in editors** tab.

2. Under **Install an extension in the editor**, write the identifier as `publisher.name`, for example `dracula-theme.theme-dracula`. Shortcuts offer Dracula, One Dark Pro, GitHub Theme, Catppuccin and Tokyo Night.

3. Choose VS Code, Cursor or Windsurf and press **Install**. Skribly runs the editor's command with `--install-extension`. The command (`code`, `cursor` or `windsurf`) must be in `PATH` or in the standard application folder.

</Steps>

The list below shows the extensions installed in VS Code, Cursor, Windsurf and VSCodium with their version and editor. **Themes only** keeps those that have themes.

## Options

| Option | What it does | Default |
| --- | --- | --- |
| Theme mode | **Day**, **Night**, **High contrast** or **Follow the system** | Follow the system |
| **Themes from editors and Open VSX** | The chosen day and night theme replaces the Skribly colours. Off: the built-in Skribly themes | Off |
| **Day theme** | Used in Day mode, and when the system is light | **Skribly · Parchment** |
| **Night theme** | Used in Night mode, and when the system is dark | **Skribly · Ink** |
| **Text size** | A slider from 12 (compact) to 16 (large) pixels for the interface, editor and terminals. Settings → Appearance and tour has minus and plus buttons for the same value | 13 |

The built-in themes are **Skribly · Parchment** (light), **Skribly · Ink** (dark) and **Skribly · High contrast**. [Accessibility](/agent/accessibility/) has a separate text size in percent and a switch that shows the high contrast or the light theme over the chosen theme.

## Where themes come from

| Source | Location |
| --- | --- |
| Built-in | The three Skribly themes |
| VS Code | `~/.vscode/extensions`, `~/.vscode-insiders/extensions` and the themes bundled with the app |
| Cursor | `~/.cursor/extensions` and the app's themes |
| Windsurf | `~/.windsurf/extensions` and the app's themes |
| VSCodium | `~/.vscode-oss/extensions` and the app's themes |
| Downloaded | From Open VSX, saved in `themes/` in the data directory |

Skribly reads only the theme JSON files listed in `contributes.themes` of an extension's `package.json`, with `include`, comments and `package.nls.json` translations. It never runs code from an extension.

## Contrast rules

Many themes have a pale accent colour. Skribly picks the accent so that it has at least 3:1 contrast against the background, and text on accent buttons at least 4.5:1, otherwise it uses white, black or a colour of the theme. This way no theme gives unreadable buttons. With **High contrast** over an imported theme, each foreground moves towards black or white only as far as it needs to, so the theme stays recognisable.

The Skribly Agent mark in the title bar and the About box is the exception: it always keeps the product's own orange, and at least 3:1 contrast against the built-in surfaces.

## Tips

<Aside type="tip">
Settings written by older versions move over on the first start: Day, Night and System stay as they were, high contrast becomes the High contrast mode, and a chosen editor theme turns the optional layer on.
</Aside>

- Themes are read only as JSON, so a theme can never run code on your computer.
- With **No network calls by the app** on, the Open VSX search and downloads report that the network is switched off; the themes you already have keep working.

## Related pages

<CardGrid>
  <LinkCard title="Accessibility" href="/agent/accessibility/" description="Text size in percent, display modes, reading options and focus." />
  <LinkCard title="Languages" href="/agent/languages/" description="The interface language and online translation." />
  <LinkCard title="Settings" href="/agent/settings/" description="Every section of Settings and its defaults." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What Open VSX and other downloads connect to." />
</CardGrid>
