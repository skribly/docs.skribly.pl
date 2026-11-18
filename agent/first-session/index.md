# Your first session

> Start your first agent session in Skribly Agent step by step, learn the agent states, send a prompt, answer from the inbox and commit the result.

This page takes you from an installed agent to a first commit. You need a [project](/agent/first-workspace/) and an installed agent; if none is found, see [Install](/agent/install/#install-an-agent).

![The Agents view: the workspace sidebar with three projects and their worktrees, and a Claude Code pane that reviews a diff and lists accessibility issues](../../../assets/screens/agent-agents.webp)

## How to start the session

<Steps>

1. Open **Agents** (`⌘2`) and press **New session**. On the Dashboard, **Run agent** does the same with the first installed agent.

2. Pick the agent. A dimmed card is an agent that is not installed; **Terminal** is a plain shell.

3. Check the **Project**. In **Working copy**, choose **Main** (it carries the folder's name) to work in the project folder, or **+ New worktree…** and give a branch to work in a separate copy, so the agent does not touch your files.

4. Leave **Mode** on **Terminal**. Write the **First message (optional)**, for example "Review the payment module and suggest tests".

5. Press **Run**, or `Enter` in the message field.

</Steps>

The agent starts in a pane with its own login and keys. Skribly never asks for them.

## What the states mean

The pane header and the sidebar show a state, read from the agent's screen.

| State | What to do |
| --- | --- |
| **starting** | Wait a moment |
| **working** | Nothing; the agent is busy |
| **waiting for a decision** | The agent asks for approval or a choice. Answer in the pane |
| **done** | The agent finished its turn. Read the result |
| **ready** | You saw the result; give it the next prompt |
| **finished** | The process has exited |

Press the state badge to see **Why this state?** when one looks wrong. More is on [Agents and sessions](/agent/sessions/#agent-states).

## How to send a prompt

Click in the pane and type, as in the agent's own terminal. The agent works and the state changes to **working**. To send the same text to several agents, tick the checkboxes in their headers and use the field on the tab bar, as described under [Broadcast](/agent/sessions/#broadcast).

## What happens when the agent waits

When an agent asks you something and you look at another pane or another view, the count on the **Agents** icon and the **Inbox** button goes up, and, if the window is in the background, a system notification appears. Open the [attention inbox](/agent/inbox/) with `⌘⇧U` or `Ctrl+B i`, press the row or its digit, and answer in the pane. A finished turn shows up there too, as **done**.

## How to commit the result

<Steps>

1. Open **Code & git** (`⌘4`) and the changes of the project.

2. Review the diff and stage the files you want. [Review notes](/agent/review/) let you send comments back to the agent.

3. Press **Suggest**. The message follows the pattern of your repository's history, and no AI trailers are added.

4. Press **Commit**.

</Steps>

The steps in detail are on [Changes and commits](/agent/changes/).

<Aside type="tip">
Shortcuts on this site use `⌘`. On Windows and Linux use `Ctrl` instead. The `Ctrl+B` prefix is the same on every system.
</Aside>

## Related pages

<CardGrid>
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="States, the agent panel, chat mode and hand-off." />
  <LinkCard title="Attention inbox" href="/agent/inbox/" description="The sessions that wait for you." />
  <LinkCard title="Changes and commits" href="/agent/changes/" description="Stage, suggest a message and commit." />
  <LinkCard title="Tasks and trackers" href="/agent/tasks/" description="Start a session from a tracker task." />
</CardGrid>
