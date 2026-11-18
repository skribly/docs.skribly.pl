# Languages

> Choose the interface language of Skribly Agent: Polish and English are built in, Follow the system picks one of them, and any other language is machine translated online and cached.

The interface of Skribly Agent is written in Polish and ships with an English translation, so those two work with no network. A fresh install starts in Polish. Any other language is translated from the Polish text by free online machine translators the first time you choose it, and the translation is kept on your computer, so it works offline afterwards. The change applies at once to the page, the tray menu, the application menu, notifications and dialog titles, without a restart.

![Settings, Editor & notifications: code editor, notifications on, notification sound off, muted agents and projects, and the interface language list](../../../assets/screens/agent-settings-general.webp)

## Open the view

Pick the language in any of these places:

- **Settings → Appearance and tour**, the **Interface language** list (Polish, English or **Follow the system**);
- **Settings → Editor & notifications**, the **Interface language** picker with the whole list of languages;
- the command palette (`⌘K`): **Interface language: Polish**, **Interface language: English** or **Interface language: follow the system**;
- the **Interface language** menu in the application menu, with **Polski**, **English** and **Follow the system**.

Windows and Linux use `Ctrl` where this page says `⌘`.

## How to change the language

<Steps>

1. Open **Settings → Editor & notifications**.

2. Find **Interface language**. Type in **Search languages** to filter the list by name or code, or move through the list with the arrow keys, `Home` and `End` and press `Enter`.

3. For a language that is not in the list, write its code in **Language code** (for example `ga`, `sw` or `fa`) and press **Set**. A code is two or three letters, optionally followed by a region such as `pt-BR`.

4. The interface changes. For a language other than Polish and English, a progress bar shows the download while the texts are fetched.

</Steps>

## How the languages work

| Choice | What happens |
| --- | --- |
| Polish | The source language of the interface. Nothing is downloaded |
| English | Read from a file inside the app. A text that is missing from it is translated online like other languages, unless it is already English |
| **Follow the system** | Picks Polish when the system language is Polish and English for every other system language, so it never starts a download by itself. It follows a change of the system language while the app runs |
| Any other language | Translated online from Polish, in batches, and saved in the data directory, one file per language |

The list offers 39 languages (Polish and English included) plus **Follow the system**. A language outside the list works through its code.

## Options

| Option | What it does | Default |
| --- | --- | --- |
| **Interface language** | The language of the whole app, tray, menus, notifications and dialog titles | Polish |
| **Language code** | Sets a language that is not in the list | Empty |
| **Refresh translations** | Deletes the saved translations of the current language and downloads them again. Shown for every language except Polish and Follow the system | Not applicable |

## What is sent for translation

Only sentences of the app's own interface go to the translators (`translate.googleapis.com`, and `api.mymemory.translated.net` when the first fails). Your projects, tasks, code and file contents never do.

- Text that has no letters, or that looks like code, a path or an address, is not sent.
- Placeholders, code in backticks, addresses, paths, shortcuts and command flags inside a sentence are replaced with markers before sending and put back after.
- Texts that come from you or from your data are marked as not for translation: names, descriptions and texts of **Extensions** additions and the lines of the attention inbox.
- In the English interface, text that is already English stays on the computer.

## Offline and the network switch

- A saved translation is used with no network at all.
- When you choose a language that is not saved yet and the computer is offline, a notice says that the translation will download once you are online and the interface shows Polish meanwhile. It finishes by itself when the connection returns.
- A text the translator could not return is tried again after a minute.
- With **No network calls by the app** on in [Privacy and network](/agent/data-and-network/), nothing is sent for translation, and only saved translations show.

<Aside type="note">
The translators are third-party services, so a machine translation can be wrong or odd. Choose Polish or English when you need the exact words of the app.
</Aside>

## Tips

- Use **Refresh translations** when a translation looks wrong or has stayed partly Polish.
- The language of commit messages is a separate setting per project, in [Settings](/agent/settings/).

## Related pages

<CardGrid>
  <LinkCard title="Settings" href="/agent/settings/" description="Every section of Settings and its defaults." />
  <LinkCard title="Appearance and themes" href="/agent/themes/" description="Themes, the theme mode and text size." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What is sent over the network and the switch that stops it." />
  <LinkCard title="Shortcuts" href="/agent/shortcuts/" description="The command palette and the keyboard shortcuts." />
</CardGrid>
