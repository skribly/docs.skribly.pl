# Plan

> The Plan view of Skribly Agent counts the Markdown checkboxes of your plan files, lists the open items and hands one to the Code view or to an agent.

The **Plan** view shows the plan a project keeps as Markdown checkboxes: a `TODO.md`, a `.docs/TODO.md`, a folder of step files. It counts what is done and what is open per file and per heading, lists the open items with a search, and hands an item to the Code view or to an agent. It only reads the files: it never ticks a box and never writes to a plan file.

![The Plan view in the day theme: totals of 10 done out of 26 at the top, five plan files with their progress bars on the left and sixteen open items with copy and hand-off buttons on the right](../../../assets/screens/agent-plan.webp)

## Open the view

- Click **Plan** in the activity bar on the left (the icon with a checked list), or
- open the command palette (`⌘K`) and choose **Plan**.

The view has no number shortcut: `⌘1` to `⌘9` stay with the first nine views.

## How to hand an open item to an agent

<Steps>

1. Open **Plan** and find the item under **Open items**. Type in **Search the open items** to filter by text, file or heading, or pick one file in the list next to it.

2. Press **Hand to an agent** next to the item. A dialog shows a prompt with the item, its file, line and heading.

3. Edit the prompt, then choose a running session of the project or a new session of an installed agent.

4. Press **Send** (`⌘↩`). Nothing is sent before you press it.

</Steps>

## How to change where the view looks

<Steps>

1. Press **Plan paths** at the top of the view.

2. Write one pattern per line, relative to the project folder: `*` is any name inside one folder, `**` is any number of folders.

3. Press **Save**. The list is kept in the project's settings. **Restore defaults** brings back the four default patterns.

</Steps>

| Pattern | What it finds |
| --- | --- |
| `TODO.md` | The to-do file at the top of the project (default) |
| `.docs/TODO.md` | The to-do file of the docs folder (default) |
| `.docs/plan/**/*.md` | Every Markdown file of the plan folder, at any depth (default) |
| `docs/plan/**/*.md` | The same for a `docs` folder (default) |

A pattern that would leave the project folder (`../notes.md`, `/etc/…`, `~/…`, `C:\…`) is refused and named in the view. A symbolic link that points out of the project folder is not followed. Folders such as `node_modules`, `.git`, `dist` and `build` are skipped.

## What counts as an item

An item is a list entry that starts with a checkbox:

```md
## Release 1.5

- [x] Move the cart to the new price helpers
- [ ] Write the release notes
  - [ ] Ask for a review

1. [x] Numbered lists count too
```

- `[ ]` is open; `[x]` and `[X]` are done. Bullets `-`, `*`, `+` and numbered lists (`1.` or `1)`) all count, at any depth.
- An item belongs to the nearest heading above it. A heading without items is left out.
- A line inside a code block, an HTML comment or the front matter is not an item, even if it looks like one.
- A file that is not saved as UTF-8, or is larger than 4 MB, is listed with the reason instead of being guessed at.

## What is on the screen

| Part | What it shows or does |
| --- | --- |
| Totals | Done, open and the number of plan files of the project, with a bar; the numbers are always written beside it |
| **Files and sections** | One row per file with its numbers; open a file to see its headings, and a heading opens the file at that line in the Code view |
| **Open items** | Every open item with its file, line and heading |
| Click an item | The Code view opens the file at the item's line |
| **Copy** | The item's text goes to the clipboard |
| **Hand to an agent** | The dialog described above |
| Refresh button | Reloads at once, next to **Plan paths** |

## Keyboard

`Tab` reaches the search, the file list and the items. From the search `↓` goes to the first item; in the list `↑` and `↓` move between items and `Home` and `End` jump to the ends; `Enter` or `Space` opens the item in the Code view. `Esc` in the search clears it; `Esc` in a dialog closes it.

## Tips

<Aside type="tip">
The view reloads by itself when a plan file changes on disk, for example after an agent ticked a box. It checks the files' sizes and modification times every few seconds, and only while the window is visible and focused.
</Aside>

- Keep one checkbox per line of work. An agent that finishes an item ticks it in the file, and the Plan view picks it up without a refresh.
- Plan files written by the [agent-skills](/skills/) workflow (`.docs/TODO.md` and `.docs/plan/`) are found with the default patterns.

## Related pages

<CardGrid>
  <LinkCard title="Tasks and trackers" href="/agent/tasks/" description="Tasks from your tracker, written into TASK.md and started with an agent." />
  <LinkCard title="Editor and files" href="/agent/code/" description="The Code view, where an item opens at its line." />
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="The sessions a plan item can be handed to." />
  <LinkCard title="Documents" href="/agent/documents/" description="The README, the changelog and the .docs folder, read safely." />
</CardGrid>
