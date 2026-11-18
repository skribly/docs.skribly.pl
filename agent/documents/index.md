# Documents

> The Documents view of Skribly Agent shows a project's README, changelog, decision records and .docs folder as safe, read-only Markdown with search.

The **Documents** view shows the documentation a project keeps beside its code: the README, the changelog with its unreleased part first, the `.docs/` and `docs/` folders as a tree, and the decision records of an `adr` folder as a table. A file is shown as rendered Markdown, read only. You can search the titles and the text, open a file in the Code view, copy its path, or hand it to an agent to check against the code.

![The Documents view in the day theme: the tree of README, Changelog, decisions and .docs on the left and the rendered README with Open in the Code view, Copy path and Hand to an agent](../../../assets/screens/agent-documents.webp)

## Open the view

- Click **Documents** in the activity bar on the left (the open book icon), or
- open the command palette (`⌘K`) and choose **Documents**.

On Windows and Linux use `Ctrl` in place of `⌘`. The view has no number shortcut: `⌘1` to `⌘9` stay with the first nine views. Select a project first.

## What it lists

| Entry | Where it comes from |
| --- | --- |
| README | `README.md` (or `README`, `readme.md`) at the top of the project |
| Changelog | `CHANGELOG.md`, `CHANGES.md` or `HISTORY.md` at the top. The `Unreleased` section is moved to the start, and a note says so |
| **Decisions (ADR)** | The Markdown files of a folder named `adr` under `.docs/` or `docs/`, or `adr/` and `doc/adr/` at the top |
| `.docs/` | Every Markdown file of the folder, as a tree |
| `docs/` | The same for a `docs` folder |

Folders such as `node_modules`, `.git` and `build` are skipped, and a symbolic link is not followed. A very large set is cut at 800 files, and the view says so.

### Decision records

**Decisions (ADR)** is a table with one row per record: number, title, status and date. They are read from the front matter at the top of the file:

```md
---
status: Accepted
date: 2026-03-14
---

# Keep the cart in zustand
```

Without front matter the number comes from the file name (`0007-…`, `ADR-12…`) or the title (`# 3. Use X`), the status from a `Status:` line or a `## Status` section, and the date from a `Date:` line. Choose a title to open the record.

## How to read a file

<Steps>

1. Choose a file in the tree. In the tree `↑` and `↓` move, `→` opens a folder, `←` closes it and `Enter` or `Space` opens a file or a folder.

2. Read it. Headings, lists, task lists, tables, code blocks, quotes and links are rendered. Nothing can change: the boxes of a task list are shown, not ticked.

3. Follow a link. A link to another Markdown file of the project opens it in this view, also with a `#heading`. A link to another file of the project opens it in the Code view. A link inside the page scrolls to that heading.

</Steps>

The view renders Markdown without running anything:

- Raw HTML is shown as text. A `<script>`, an `onerror` attribute, an `<iframe>` or a `<style>` in a file never runs. HTML comments are left out.
- Only an `https:` address opens, and it opens in your system browser. Every other link (`http:`, `javascript:`, `data:`, `file:`, `mailto:` or a path that leaves the project folder) is shown as dotted text that does nothing.
- Images load only from the project folder (PNG, JPEG, GIF, WebP, AVIF, SVG, up to 5 MB). An image from the web is never requested, and its description is shown in brackets instead.
- A file that is not saved as UTF-8, or is larger than 2 MB, is not shown, and the view says why. Open it in the Code view instead.

## How to search

<Steps>

1. Type in **Search the documents**. The view looks in the titles and paths first, then in the text of every listed file.

2. Read the results: up to three matching lines per file, with the line number.

3. Choose a result to open the file, or the button beside it to open the file at that line in the Code view. `↓` from the search goes to the first result. `Esc` clears the search.

</Steps>

## What the bar above a page does

| Action | What happens |
| --- | --- |
| **Open in the Code view** | The file opens in the editor of the Code view |
| **Copy path** | The path relative to the project goes to the clipboard |
| **Hand to an agent** | A dialog shows a prompt that names the file and asks the agent to check it against the code. Edit it, choose a running session of the project or a new session of an installed agent, then press **Send** (`⌘↩`). Nothing is sent before you press it |

## When the view updates

The view reloads the list and the open file by itself when a listed file changes. It asks for the files' sizes and modification times every few seconds, and only while the window is visible and focused. The refresh button next to the title reloads at once.

## Tips

<Aside type="tip">
Use **Hand to an agent** on a README or a how-to after a change of code. The agent compares the page with the code and lists what is out of date.
</Aside>

- Put decision records in `.docs/adr/` with a short front matter, and they show up in the table.
- A page that is too large is not shown here. Open it in the Code view.

## Related pages

<CardGrid>
  <LinkCard title="Editor and files" href="/agent/code/" description="The Code view, where a document opens at a line." />
  <LinkCard title="Plan" href="/agent/plan/" description="The Markdown checkboxes of the plan files." />
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="The sessions a document can be handed to." />
  <LinkCard title="Skills" href="/agent/skills/" description="Generate a .docs skeleton for a project." />
</CardGrid>
