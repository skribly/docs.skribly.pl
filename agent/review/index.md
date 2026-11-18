# Review notes

> Note a line or a range of a diff in Skribly Agent, keep the notes in one list, and send them all to an agent as one message that you read first.

When you read a diff, you can write a note on a line or on a range of lines, and send all the notes to an agent as one message. The agent gets the file, the lines, the quoted code and your text for every note, so it can work through them without the diff. Nothing is sent before you press **Send**, and the message is shown whole before it goes.

![A diff with two review notes listed below it, each with its file and lines, and the button Send to the agent](../../../assets/screens/agent-code-review.webp)

On Windows and Linux use `Ctrl` wherever this page says `⌘` or `⌥`.

## Open the view

Review notes live in the diff of the **Code & git** view.

- Open **Code & git** (`⌘4`), stay on the **Changes and commit** tab, and click a file. Its diff opens next to the list.
- The bar above the diff has the **Add a note** button and the number of notes.

The notes list appears under the diff as soon as there is a note.

## How to write a note

<Steps>

1. In the diff, select a line or a range of lines. Without a selection, the line of the cursor is used.

2. Press `⌘⌥M`, or press **Add a note** above the diff, or right-click and choose **Note on the diff…**.

3. Type what the agent should change in these lines.

4. Press `⌘↩` or **Save the note** to keep it. `Esc` or **Cancel** drops it and returns the focus to the diff.

</Steps>

A note in the right column is about the new lines. A note in the left column is about the old version, and is marked **old version**. A deleted file takes notes on its old lines, marked **deleted file, old lines**. A binary file shows no lines: it takes one note on the whole file, and the button there is **Note on the file**.

Lines with a note carry a mark in the margin of the diff. Hover the mark to read the note.

## How to manage the notes

The list under the diff, **Review notes (N)**, holds every note of the project, not only those of the open file. It is sorted the way the agent will read it: by file, then by line.

| Button | What it does |
| --- | --- |
| Arrow, **Go to the line** | Opens the file and puts the cursor on the first line of the note |
| Pencil, **Edit** | Opens the note in the form to change its text |
| Bin, **Delete** | Removes the note |
| **Discard all** | Removes every note, after a question: **Discard all the notes?** |
| **Send to the agent…** | Opens the dialog described below |

## How to send the notes to an agent

<Steps>

1. Press **Send to the agent…** over the list. The dialog **Send the notes to the agent** opens.

2. Read the message in the field. It is read-only and it is exactly what goes to the agent.

3. Pick a session under **To**. Sessions of this project come first, and the session that runs in the project's folder is chosen for you.

4. Press **Send** (`⌘↩`). The message goes into the terminal of the session, as every other text sent to an agent does, and the notes that were in it are removed.

</Steps>

![The dialog Send the notes to the agent: the full message with both notes and quoted code, and the list of sessions it can go to](../../../assets/screens/agent-code-review-send.webp)

The message starts with the number of notes and files and a short instruction: go through the notes in order, change only what a note asks for, and report what was done for each note by its number. Then comes one block per note: a heading with the file name and the line range, the quoted lines in a fenced block, and your text. The file name and the quoted lines are written so that spaces, backticks and control characters cannot break the layout.

The dialog lists only running sessions. If there is none, it says so: start an agent in the Agents view and come back, because the notes stay saved.

## Limits

| Limit | Value |
| --- | --- |
| Notes at once | 200 |
| Text of a note | 4,000 characters |
| Quoted code of a note | 4,000 characters |

Notes are stored in the app's data folder, per project, until you send or discard them, so they survive a restart. A project that is a session's worktree has its own list.

## Tips

<Aside type="tip">
Write each note as an instruction to change something ("Rename this to `total`", "Add a check for an empty cart"), not as a question. The message tells the agent to change only what a note asks for.
</Aside>

- Notes on staged and on working diffs go into the same list and the same message.
- You can write notes, close the app and send them tomorrow.

## Related pages

<CardGrid>
  <LinkCard title="Changes and commits" href="/agent/changes/" description="Where the diffs come from: the index, discard and commit." />
  <LinkCard title="Editor and files" href="/agent/code/" description="Send selected code to an agent instead of notes on a diff." />
  <LinkCard title="Terminals and sessions" href="/agent/terminals/" description="The sessions a message can be sent to." />
</CardGrid>
