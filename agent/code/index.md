# Editor and files

> The Code & git view of Skribly Agent works as an editor: a file tree, tabs, quick open, search in files, Monaco, saving, agent actions on code and a terminal.

The **Code & git** view is an editor built for work next to agents. It has a file tree, tabs, quick open, search in files, the Monaco editor (the one of VS Code), a terminal in the bottom panel, and a way to send selected code to an agent. When an agent changes a file you have open, the editor shows it. The same view holds [changes and commits](/agent/changes/), [review notes](/agent/review/) and the [history graph](/agent/history/).

On Windows and Linux use `Ctrl` wherever this page says `⌘`.

## Open the view

- Click **Code & git** in the activity bar on the left, or
- press `⌘4`, or
- open the command palette (`⌘K`) and choose **Code & git**.

The view works on the project selected in the top bar. Without a project it asks you to select one. The left panel has four tabs, shown as icons: **Changes and commit** (open by default), **Files**, **Search in files** and **History**.

## How to open a file

<Steps>

1. Open the **Files** tab. The tree lists the files git knows (tracked and untracked, without ignored ones). Outside a repository it scans the folder instead and skips `node_modules`, `.git`, `dist`, `out`, `build`, `.next`, `vendor`, `.venv`, `target` and similar. The tree holds at most 20,000 files.

2. Click a file. It opens in a tab above the editor. Several files can be open at once, and the path above the editor shows where the file is in the tree.

3. Close a tab with its **x**, or with `⌘W` while the focus is in the editor. Elsewhere `⌘W` stays the window shortcut. A tab with unsaved changes asks before it closes.

</Steps>

A file larger than 2 MB, and a binary file, is not opened: the view says **File is too large or binary** and points you to your own editor. The **Open in external editor** button above the editor opens the file in the editor chosen in **Settings**.

Paths are guarded: the view refuses to read or write outside the project folder.

## How to find a file or a text

<Steps>

1. Press `⌘P` for **Quick open file**. Type part of a name; the match is fuzzy, and recent files come first. Add `:123` to the name to jump to line 123.

2. Move with `↑` and `↓` (also `Ctrl+N` and `Ctrl+P`), open with `Enter`, close with `Esc`.

3. To search inside files, press `⌘⇧F`, or open the **Search in files** tab. Type the text; the search starts while you type, and `Enter` runs it at once.

4. Use the buttons in the field for **Match case** and **Regular expression**, and the file filter for patterns such as `*.ts, src/**, !*.test.ts`. A click on a result opens the file with the match selected.

</Steps>

The search shows up to 2,000 matches and says so when it reaches the limit. It uses ripgrep from your `PATH` or from an installed VS Code, Cursor, Windsurf or VSCodium. Without ripgrep it scans text files up to 1 MB in the app and skips folders such as `node_modules` and `dist`.

## How to edit and save

<Steps>

1. Click in the editor and type. An unsaved file shows a dot in its tab and **unsaved** in the bar below the editor.

2. Press `⌘S` or the **Save** button. The button is off while nothing changed.

3. Press `Ctrl+G` (or the cursor position in the bar below the editor) to go to a line.

</Steps>

The editor takes its colours from the day or night theme of the app. The bar below it shows the cursor line and column, the selection size, the language, UTF-8 and the line ending.

## Files that an agent changes

The view checks the open file every two seconds, and when the window gets focus, while the window is visible. It also refreshes the file list and the changes every 8 seconds.

- If you have no unsaved changes, the file reloads by itself. The cursor and scroll stay in place unless the change is where they are.
- If you have unsaved changes, a bar appears: **The file was changed on disk (e.g. by an agent), and the editor has unsaved changes.** Choose **Reload** to take the disk version or **Keep mine** to keep yours.
- If the file is gone, the bar says **The file no longer exists on disk.** Save to recreate it, or close the tab.

## How to send code to an agent

<Steps>

1. Select the code you mean. With no selection the whole file counts.

2. Open the **Agent** menu above the editor, or right-click and choose a command of the **Agent:** group. **Ask the agent…** also has the shortcut `⌘⇧I`.

3. In the dialog pick the target: a running session (the ones of this project come first) or **New session: &lt;agent&gt;** of an installed agent. The last choice is remembered.

4. Read the prompt in **Command** and edit it if you want. **restore** brings back the generated one.

5. Press **Send** (`⌘↩`). With a running session you can tick **Go to the agent after sending** to open the Agents view.

</Steps>

| Action | What the prompt asks the agent to do |
| --- | --- |
| **Ask the agent…** | Your own question about the selected code |
| **Explain** | Say briefly what the code does and why; change no files |
| **Fix** | Find and fix bugs, change only what is needed, describe the fix |
| **Write tests** | Write tests in the framework and style of the project, then run them |
| **Review** | Review bugs, edge cases, security, speed and clarity, with line numbers; change no files |

The prompt always names the file and the lines (`path:from-to`). A selection of up to 40 lines and 2,400 characters goes into the prompt as it is. A longer one is left to the agent, which reads it from disk. If the file has unsaved changes, the code from the editor goes into the prompt instead (up to 150 lines and 8,000 characters), because the agent cannot see it on disk, and the dialog says so.

## How to use the terminal

Press `` Ctrl+` `` (also on macOS) or the terminal button in the panel head. A shell opens at the bottom, in the project folder. Drag its top edge, or use `↑` and `↓` on the edge, to change its height. **New shell** restarts it, and **Hide panel** closes the panel.

The project has one such shell: showing and hiding the panel starts no new one. It does not appear in the [Agents view](/agent/terminals/), and it is not kept after you quit the app.

<Aside type="note">
On Windows and Linux, `Ctrl+P` and `Ctrl+G` belong to the shell while the focus is in the terminal.
</Aside>

## Shortcuts

| Shortcut | Action |
| --- | --- |
| `⌘4` | Open the view |
| `⌘P` | Quick open file |
| `⌘⇧F` | Search in files |
| `⌘S` | Save the file |
| `⌘W` | Close the tab (focus in the editor) |
| `Ctrl+G` | Go to line |
| `⌘⇧I` | Ask the agent about the selection |
| `` Ctrl+` `` | Show or hide the terminal |

## Tips

<Aside type="tip">
Drag the edge of the left panel to change its width (between 240 and 720 pixels; a double click restores it). The width is remembered.
</Aside>

- Select a few lines rather than the whole file when you ask an agent: a short selection costs fewer tokens and gives a sharper answer.
- Use **Review** on a selection to get comments without any change to your files.

## Related pages

<CardGrid>
  <LinkCard title="Changes and commits" href="/agent/changes/" description="The index, side-by-side diff, commit message suggestion and push." />
  <LinkCard title="Review notes" href="/agent/review/" description="Note lines of a diff and send them to an agent as one message." />
  <LinkCard title="History" href="/agent/history/" description="The graph of all branches, with commit details." />
  <LinkCard title="Terminals and panes" href="/agent/terminals/" description="The Agents view, where sessions live." />
</CardGrid>
