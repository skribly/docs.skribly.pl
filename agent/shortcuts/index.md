# Keyboard shortcuts

> Every keyboard shortcut of Skribly Agent - the Ctrl+B pane prefix, the command palette, view switching and editor shortcuts.

On Windows and Linux use `Ctrl` wherever this page says `⌘`.

## Global

| Shortcut | Action |
| --- | --- |
| `⌘K` or `⌘⇧P` | Command palette: views, projects, **New session: &lt;agent&gt;**, **New terminal**, actions |
| `⌘⇧A` | Agent panel on the right |
| `⌘1` … `⌘9` | Views: Dashboard, Agents, Tasks, Code & git, Pipelines, Skills, Audits, Browser, Plugins & MCP |
| `Esc` | Closes the palette and dialogs |

## Panes: the `Ctrl+B` prefix

Press `Ctrl+B`, release it, then press the key, as in tmux. The prefix stays active for two seconds, and a **Ctrl+B…** badge pulses on the tab bar. The shortcuts are caught before they reach the terminal, so they work with the focus in a pane. They do not work while a dialog or the palette is open.

| Shortcut | Action |
| --- | --- |
| `Ctrl+B` `v` or `%` | Split right (new shell in the active pane's directory) |
| `Ctrl+B` `-` or `"` | Split down (new shell) |
| `Ctrl+B` `a` | New agent session next to the active pane |
| `Ctrl+B` `c` | New tab in the current workspace |
| `Ctrl+B` `n` / `p` | Next / previous tab |
| `Ctrl+B` `1` … `9` | Tab by number |
| `Ctrl+B` `→` `↓` / `←` `↑` | Focus the next / previous pane in the tab |
| `Ctrl+B` `z` | Maximise or restore the active pane |
| `Ctrl+B` `o` | Overview of all agents with live screens |
| `Ctrl+B` `j` | Jump to the next agent waiting for you |
| `Ctrl+B` `x` | Close the active pane |
| `Ctrl+B` `w` | Next workspace |
| `Ctrl+B` `b` | Show or hide the workspace sidebar |
| `Ctrl+B` `?` | Shortcut cheat sheet |
| `Ctrl+B` `Ctrl+B` | Cancel the prefix |

On macOS there are also `⌘D` (split right), `⌘⇧D` (split down) and `⌘T` (new tab).

:::note
`Ctrl+B` never reaches the program running in the terminal. If you use tmux inside a pane, or a `Ctrl+B` shortcut in your shell, change the prefix in that program. The Skribly prefix is fixed.
:::

## Editor and git

| Shortcut | Where | Action |
| --- | --- | --- |
| `⌘P` | Code | Quick open |
| `⌘⇧F` | Code | Search in files |
| `⌘S` | Editor | Save the file |
| `⌘W` | Editor | Close the tab |
| `Ctrl+G` | Editor | Go to line |
| `` Ctrl+` `` | Code | Bottom terminal |
| `⌘⇧I` | Editor | Ask an agent about the selected code |
| `⌘Enter` | Commit box | Commit |

## Chat and the agent panel

| Shortcut | Action |
| --- | --- |
| `Enter` | Send the message |
| `Shift+Enter` | New line |
| `/` | Slash commands |

## Tour

| Key | Action |
| --- | --- |
| `→` | Next step |
| `←` | Previous step |
| `Esc` | Close the tour |
