# Resources

> The Resources view of Skribly Agent shows memory, processor and ports of every pane and its processes next to free memory and swap, and can stop one process.

The **Resources** view shows how much memory and processor every pane of Skribly Agent takes, counting its whole process tree: the agent, its shells, test runners, dev servers and headless browsers. With many agents a laptop can run out of memory, and it is hard to see which agent is the cause. This view puts the panes side by side with the free memory and swap of the machine, and says in words when free memory is short.

![The Resources view: memory of the app panes, free memory and swap, and a table of panes with memory, processor, processes and ports, one pane opened to its largest processes](../../../assets/screens/agent-resources.webp)

## Open the view

- Click **Resources** (the gauge) in the activity bar, or
- open the command palette (`⌘K`) and choose **Resources**.

On Windows and Linux use `Ctrl` wherever this page says `⌘`. The view has no number shortcut. It reads every 3 seconds, and only while it is open and the window is visible. Another view, a minimised window or a window hidden in the tray reads nothing; coming back reads at once. **Refresh** reads now.

## What is on the screen

| Part | What it shows |
| --- | --- |
| **App panes** | The memory of all panes' trees together, their processor share and the number of processes |
| **Free memory** | What the system can still give, the total, and a bar of the share in use |
| **Swap** | Swap in use and its size (on Windows, the page file) |
| Warning | Appears when free memory is short, see below |
| Table of panes | One row per pane, largest first: **Memory**, **Processor**, **Processes** and **Ports** (the listening TCP ports of the whole tree) |

A number that the system does not give reads **no data**, never `0`. Windows gives no processor share per process, so that column reads **no data** there.

### The warning

A warning appears above the numbers when free memory is short:

- **Free memory is short.** when less than 12% is free, or less than 1 GB.
- **Memory is almost gone.** when less than 5% is free, or less than 10% with swap more than 80% full.

It names the largest pane and says what to do: stop an unneeded process or close an unused pane.

### How the numbers are counted

| Number | macOS | Linux | Windows |
| --- | --- | --- | --- |
| Processes | `ps` | `ps` | `Win32_Process` (PowerShell) |
| Memory | Resident memory (RSS) | Resident memory (RSS) | Working set |
| Processor | Recent average share of one core | Average share since the process started | Not given |
| Ports | `lsof -iTCP -sTCP:LISTEN` for the tree | `ss -ltnp` | `netstat -ano` |
| Free memory | Free, inactive and speculative pages | `MemAvailable` | Free physical memory |

A pane's tree is the pane's own process and every process whose parent chain leads to it. Memory shared between processes counts with each of them, so a tree's total can be higher than what it really holds. A processor share above 100% means more than one core.

## How to see what a pane runs

<Steps>

1. Click a row of the table, or press `Enter` or `Space` on it.

2. Read **The pane's largest processes**, up to eight: process id, memory, processor, ports and the command line. A note says how many processes the tree has in all.

3. Press **Go** on the row to open the pane in the [Agents view](/agent/terminals/). The button is off for helper panes, such as the terminal of the Code view, which have no place there.

</Steps>

## How to stop a process

<Steps>

1. Open the pane and find the process, for example a runaway test runner or a forgotten dev server.

2. Press **Stop…** on its line. The dialog **Stop this process?** names the command, the process id, the pane and its memory.

3. Press **Stop process N**.

</Steps>

The pane's own process has no **Stop…** button, only the note **pane process**: close the pane instead. **Copy process line** puts the process id, memory, processor, ports and the command into the clipboard.

What stopping does and does not do:

- It acts only on the process id you chose, never on a name or a pattern.
- Right before it acts, the app reads the process table again. It refuses when the process id is no longer in that pane's tree, now runs a different command, is the pane's own process, or is the app itself.
- On macOS and Linux it sends `SIGTERM`, so the program can end cleanly. On Windows the process ends at once.
- The pane and the rest of its tree keep running.

## Keyboard

| Key | Action |
| --- | --- |
| `↑` `↓`, `Home` `End` | Move between panes |
| `Enter`, `Space` | Open or close the processes of a pane |
| `Tab` | Move through the actions of the open pane |
| `Esc` | Close the open pane and return to its row; close a dialog |

## Tips

<Aside type="tip">
Look at the **Ports** column when a dev server will not start: a forgotten process of another pane may hold the port.
</Aside>

- The view uses only the tools of your operating system on your machine. It makes no network call and writes nothing.
- Run fewer agents at once when the warning appears, or stop the dev servers and test runners that you no longer need.

## Related pages

<CardGrid>
  <LinkCard title="Terminals and sessions" href="/agent/terminals/" description="The panes this view measures." />
  <LinkCard title="Worktrees" href="/agent/worktrees/" description="See which worktrees still have a pane working in them." />
  <LinkCard title="Troubleshooting" href="/agent/troubleshooting/" description="Common problems and their fixes." />
</CardGrid>
