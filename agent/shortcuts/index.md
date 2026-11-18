# Keyboard shortcuts

> Every keyboard shortcut of Skribly Agent: the command palette, switching views, the Ctrl+B pane prefix, the editor and git, chat and the tour.

Skribly Agent can be driven from the keyboard: the command palette finds any view, project, agent or action, number shortcuts switch views, and a tmux-style prefix controls panes. On Windows and Linux use `Ctrl` wherever this page says `⌘`.

![The command palette over the Dashboard: a search field and the list of views with their descriptions and shortcuts](../../../assets/screens/agent-palette.webp)

## Open the view

The **Help** view, at the bottom of the activity bar, lists the shortcuts under **Keyboard shortcuts**. **Settings → Appearance and tour** has a **Shortcuts** button that opens the same list, and `Ctrl+B` `?` shows the pane shortcuts as a cheat sheet in the Agents view.

![The Help view: Start tour and Command palette, the five Getting started steps and the keyboard shortcuts](../../../assets/screens/agent-help.webp)

## Global

| Shortcut | Action |
| --- | --- |
| `⌘K` or `⌘⇧P` | Command palette: views, projects, **New session: &lt;agent&gt;**, **New terminal** and actions. Press it again to close it |
| `⌘⇧A` | Agent panel on the right |
| `⌘⇧U` | Attention inbox in the Agents view |
| `⌘1` … `⌘9` | Views: Dashboard, Agents, Tasks, Code & git, Pipelines, Skills, Audits, Browser, Docker |
| `Esc` | Closes the palette and dialogs |

In the palette, `↑` and `↓` move through the results, `Enter` runs the selected one and `Esc` closes it. The palette shows up to 40 results and finds a word by its letters in order.

## Panes: the `Ctrl+B` prefix

Press `Ctrl+B`, release it, then press the key, as in tmux. The prefix stays active for two seconds, and a **Ctrl+B…** badge pulses on the tab bar. The shortcuts are caught before they reach the terminal, so they work with the focus in a pane. They do not work while a dialog or the palette is open. On macOS the prefix is the `Control` key, not `⌘`.

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
| `Ctrl+B` `i` | Attention inbox: sessions waiting for you |
| `Ctrl+B` `j` | Jump to the next agent waiting for you |
| `Ctrl+B` `h` | Session history and resume |
| `Ctrl+B` `x` | Close the active pane |
| `Ctrl+B` `w` | Next workspace |
| `Ctrl+B` `b` | Show or hide the workspace sidebar |
| `Ctrl+B` `?` | Shortcut cheat sheet |
| `Ctrl+B` `Ctrl+B` | Cancel the prefix |

On macOS there are also `⌘D` (split right), `⌘⇧D` (split down) and `⌘T` (new tab).

<Aside type="note">
`Ctrl+B` never reaches the program running in the terminal. If you use tmux inside a pane, or a `Ctrl+B` shortcut in your shell, change the prefix in that program. The Skribly prefix is fixed.
</Aside>

## Editor and git

| Shortcut | Where | Action |
| --- | --- | --- |
| `⌘P` | Code | Quick open (`↑` `↓` or `Ctrl+N` `Ctrl+P` to move, `Enter` to open, `Esc` to close) |
| `⌘⇧F` | Code | Search in files |
| `⌘S` | Editor | Save the file |
| `⌘W` | Editor | Close the tab |
| `Ctrl+G` | Editor | Go to line (the `Control` key on macOS too) |
| `` Ctrl+` `` | Code | Bottom terminal (the `Control` key on macOS too) |
| `⌘⇧I` | Editor | Ask an agent about the selected code |
| `⌘⌥M` | Diff | Add a review note on the selected lines |
| `⌘Enter` | Commit box | Commit |
| `⌘Enter` | Note and send dialogs | Save a note, or send the notes or code to the agent |

## Chat and the agent panel

| Shortcut | Action |
| --- | --- |
| `Enter` | Send the message |
| `Shift+Enter` | New line |
| `/` | Slash commands; `↑` `↓` choose, `Tab` or `Enter` insert, `Esc` clears |
| `Enter` in the broadcast field | Send the text to the selected panes |

## Tour

| Key | Action |
| --- | --- |
| `→` | Next step |
| `←` | Previous step |
| `Tab` or `Enter` | Pause the automatic advance |
| `Esc` | Close the tour |

## Tips

- The palette lists the shortcut next to each view, so you can learn them while you search.
- `⌘1` to `⌘9` stay with the first nine views; the other views have no number and open from the palette or the activity bar.

## Related pages

<CardGrid>
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="Panes, tabs, splits and the sessions they hold." />
  <LinkCard title="Editor and files" href="/agent/code/" description="Quick open, search in files and the editor." />
  <LinkCard title="Accessibility" href="/agent/accessibility/" description="Using the whole app from the keyboard." />
  <LinkCard title="The skribly command" href="/agent/cli/" description="The skribly command for the terminal and for agents." />
</CardGrid>
