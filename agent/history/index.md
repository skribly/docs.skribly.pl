# History

> The History tab of Skribly Agent draws a graph of the last 300 commits of all branches, with branch and tag labels, and shows the details of a commit you click.

The **History** tab of the **Code & git** view draws the commits of the project as a graph. It covers all branches, local and remote, so you see where each branch started, where it was merged and which commit each branch and tag points at. It only reads: nothing in this tab changes the repository.

![The History tab: a graph of all branches with commit messages, branch and tag labels, authors, dates and short hashes](../../../assets/screens/agent-code-history.webp)

## Open the view

- Open **Code & git** (`⌘4`) and choose the **History** tab, the last of the four icons in the left panel.
- The graph opens in the main area, as a tab named **History**, next to your files. The left panel keeps the details of the commit you selected.

If the project is not a git repository, the tab says so. If the repository has no commits yet, the graph shows **No history** and points you to the commit box of the **Changes** tab.

## How to read the graph

Each row is one commit. From left to right it shows:

| Part | What it means |
| --- | --- |
| Dots and lines | One column (lane) per line of work. A branch runs down its lane until it ends or is merged. Lanes do not move, so lines stay straight. A filled dot is a commit; a hollow one is a merge (a commit with more than one parent) |
| Labels | Branch names, remote branches such as `origin/main`, and tags. Remote branches and tags have their own colours; the current branch is shown by its name alone |
| Message | The subject of the commit |
| Author and time | Who made it and how long ago |
| Hash | The first 7 characters of the commit hash |

Commits are in date order, newest first. The graph holds the last 300 commits of all branches, and it draws at most 12 lanes.

## How to see the details of a commit

<Steps>

1. Click a commit in the graph, or move to it with `Tab` and press `Enter` or `Space`.

2. Read the left panel: the subject, the first 12 characters of the hash, the author and the time, the branch and tag labels, and the parents of the commit (8 characters each).

</Steps>

Before you select a commit, the panel says to click one in the graph.

## How to find a branch or a tag

Look for its label in the graph: it sits on the row of the commit it points at. To switch to a branch, use the branch button of the **Changes** tab, described in [Changes and commits](/agent/changes/#how-to-switch-or-create-a-branch).

## Tips

<Aside type="tip">
The view refreshes every 8 seconds while the window has focus, and the refresh button in the panel head reloads at once. A branch that an agent just made shows up without any action.
</Aside>

- Long histories are cut at 300 commits. For older commits use `git log` in the terminal at the bottom of the view.
- The branches of worktrees live in the same repository, so they appear in the graph as well.

## Related pages

<CardGrid>
  <LinkCard title="Changes and commits" href="/agent/changes/" description="Stage, commit, switch branches and push." />
  <LinkCard title="Worktrees" href="/agent/worktrees/" description="Every worktree and branch of your projects at a glance." />
  <LinkCard title="Editor and files" href="/agent/code/" description="The same view as an editor." />
</CardGrid>
