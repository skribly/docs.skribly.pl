# Token use board

> The token use board of Skribly Agent shows tokens per day, agent and project for 7, 14 or 30 days, read from the session files your agents leave on this computer.

The token use board shows how many tokens your coding agents used, per day, agent and project, for the last 7, 14 or 30 days. It reads only the session files that the agents already leave on this computer. It needs no account and sends nothing anywhere.

![The Token use board for 14 days: tokens per agent and project in input, output, cache write and cache read, and what can be measured for each agent](../../../assets/screens/agent-usage-board.webp)

## Open the view

The board is a window that opens from the Dashboard.

<Steps>

1. Open the **Dashboard** (the first view of the activity bar, `⌘1`; on Windows and Linux `Ctrl+1`).

2. In the token chart press **Board**. The window **Token use** opens.

3. Choose the period. The first read of 30 days takes a few seconds; later reads read only what was appended.

</Steps>

The board reads files only while it is open, when you change the period and when you press **Refresh**. It has no timer, so a closed board or a hidden window never reads anything. The index the board builds is dropped from memory five minutes after the last request.

## How to read the table

- **Period** is 7, 14 or 30 days. The default is 14. The line under the controls gives the dates and your time zone: days follow your local time.
- **Rows:** **Day**, **Agent** and **Project** switch the dimensions of the rows. Rows are added up over the dimensions that are off, and at least one stays on. By default the rows are by agent and project.
- **Input**, **Output**, **Cache write** and **Cache read** are always shown apart. Cache read is usually far larger than the rest.
- **Total** sums only the kinds ticked in the line **The Total column adds up**, and the line above the table names them. By default it sums input, output and cache write; cache read is off.
- **A dash** means the agent does not report that kind. It is not a zero, and in the CSV that cell is empty.
- **Project** is the folder the session ran in, as the agent's own file records it. A folder inside a project you added to Skribly Agent is shown under that project's name. Other folders, also worktrees outside the project, are shown by their folder name. A file with no folder shows **No folder in the session file**.

Your choices of period, rows and kinds are remembered.

## What each agent's files allow

The second table, **What can be measured for each agent**, says for every agent the app knows what its files hold. Nothing is guessed.

| State | Meaning |
| --- | --- |
| **Measured** | The files carry token numbers, and at least one record fell in the period. The table shows how many files and records |
| **No records in this period** | The files are read, but nothing was recorded in the period. There is no row and no zero |
| **No data** | The agent leaves no token numbers in its files, or has not been checked. No number is shown, not even a zero |

| Agent | Files read | Counted |
| --- | --- | --- |
| Claude Code | `.jsonl` files under `~/.claude/projects` (or `CLAUDE_CONFIG_DIR`), at any depth, with sub-agents | Input, output, cache write and cache read of each reply; each reply once |
| Codex | `.jsonl` files under `~/.codex/sessions` and `archived_sessions` (or `CODEX_HOME`) | Running totals of input, output and cache read; a day gets the difference between totals. The cache write field was always 0 in the files that were checked, so it is not counted |
| Copilot CLI | `events.jsonl` under `~/.copilot/session-state` (or `COPILOT_HOME`) | Input, output, cache write and cache read of each request. Its input contains the cache counts, so the board splits them out |
| Cursor Agent | Checked: its files hold no token numbers | **No data** |
| Gemini CLI, OpenCode, Aider, Amp, Factory Droid, Qwen Code, Goose, Crush, Kimi CLI | Not checked | **No data**, with the note **Not checked** |

## How to save the table

Press **Save CSV**. A save dialog opens, and the file holds the rows you see, in the order you see them. The columns are `date`, `agent` and `project` (only the dimensions that are on), then `input`, `output`, `cache_write`, `cache_read` and a total column whose name lists the kinds it sums, for example `total_input_plus_output_plus_cache_write`.

The file is UTF-8 with a byte order mark, so a spreadsheet reads Polish letters correctly. A text cell that starts with `=`, `+`, `-`, `@`, a tab or a carriage return gets a leading `'`, so a spreadsheet does not run it as a formula. **Save CSV** is off when the table is empty.

## Tips

<Aside type="tip">
Switch **Day** on to see which days were heavy, then switch **Agent** off to compare days across all agents.
</Aside>

- A row with no data has no number, because a zero would look like a measurement.
- Hover a project name to see the full folder path.

## Related pages

<CardGrid>
  <LinkCard title="Token saving" href="/agent/token-saving/" description="How Skribly Agent keeps prompts short." />
  <LinkCard title="Supported agents" href="/agent/agents/" description="The agents the app knows." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What the app reads and sends." />
</CardGrid>
