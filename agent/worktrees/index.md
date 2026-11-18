# Worktrees

> The Worktrees view of Skribly Agent lists every git worktree of your projects with its state, shows which can go, and removes a worktree only when that is safe.

A worktree is a separate folder with its own checked-out branch and the same git history, so several agents can work in parallel without touching each other's files. When you run many agents, worktrees pile up. The **Worktrees** view lists every worktree of every project of the app in one place: which are still in use, which hold work that is saved nowhere else, and which can go.

![The Worktrees view: worktrees of two projects with branch, state, distance to upstream and main, the pane working in each, and one opened with Show in the Code view, Start an agent here, Copy path and Remove worktree](../../../assets/screens/agent-worktrees.webp)

## Open the view

- Click **Worktrees** (the folder with a branch) in the activity bar, or
- open the command palette (`⌘K`) and choose **Worktrees**.

On Windows and Linux use `Ctrl` wherever this page says `⌘`. The view has no number shortcut. It reads the worktrees when it opens and when you press **Refresh**, never on a timer. It runs only local `git` commands in your project folders and makes no network call.

## What a row shows

Rows are grouped by project. Each row is one entry of `git worktree list`.

| Part | What it means |
| --- | --- |
| Branch and folder | The checked-out branch (or the commit, for a detached HEAD) and the folder, with your home folder shortened to `~` |
| **Main folder** | The project's own folder, its main working tree |
| **Detached HEAD** | The tree is on a commit, not on a branch |
| **Clean** or **3 changes** | Changed, staged and untracked files, counted by git. **State unknown** when git could not read the tree |
| **Merged into main** | The tree's HEAD is contained in the project's main branch: the **Base branch** of the project, or `main` when none is set, local or on `origin` |
| `↑2 ↓0 origin/feature/x` | Commits ahead of and behind the upstream. **No upstream** when the branch tracks nothing |
| `↑4 ↓1 main` | Commits ahead of and behind the project's main branch |
| **Locked** | The tree is locked with `git worktree lock` |
| **Folder is gone** | Git still lists the tree, but its folder does not exist |
| Agent badge | A pane of the app whose folder is this tree or a folder inside it. Ended panes and panes on another machine are not counted |
| Last line | The subject of the last commit and how long ago it was made |

Above the list, a line counts the worktrees, those with changes and those that can be removed.

## How to find a worktree

<Steps>

1. Pick a filter: **All**, **With changes**, **Merged** or **No agent**. **With changes** also lists trees whose state is unknown.

2. Type in **Search branch, folder, commit…**. The search looks in the branch, the folder, the project name, the subject of the last commit and the pane names.

</Steps>

## How to work in a worktree

<Steps>

1. Click a row, or press `Enter` or `Space` on it. It opens and shows its actions.

2. Press **Show in the Code view** to open the tree in [Code & git](/agent/code/). The main folder switches the open project. A linked worktree is added to your projects the first time and opened.

3. Or press **Start an agent here**. The usual new-session dialog of the Agents view opens on this tree, so you pick the agent, the name and the first message as always.

4. **Copy path** puts the full folder path in the clipboard.

</Steps>

## How to remove a worktree

<Steps>

1. Open the row. If removal is possible, **Remove worktree…** is there. If not, the row says **Removal not available:** and lists what is in the way.

2. Press **Remove worktree…**. The dialog **Remove the worktree?** names the folder and the branch.

3. Press **Remove worktree**. The app reads the list and the tree again, checks every rule once more, and runs `git worktree remove` without `--force`.

</Steps>

Removal is offered only when all of these hold:

- the tree is not the project's main folder, it is not locked, and its folder exists;
- it has no changed, staged or untracked file;
- its branch is merged into the main branch, or it is pushed with nothing left to push (a detached HEAD must be merged);
- no pane of the app works in it or in a folder inside it.

The branch and its commits always stay: **Worktree removed. The branch stays.** Nothing else is pruned.

## Where new worktrees go

You create a worktree in the Agents view (**+ New worktree…**) or by starting a task with an agent in its own worktree. The app makes it under `~/.skribly/worktrees/<repository>/<branch>`. To use another folder, open **Settings**, go to **Sessions & control** and set **Worktree directory**. An empty field means the default. Worktrees made earlier stay where they are.

## Keyboard

| Key | Action |
| --- | --- |
| `↑` `↓`, `Home` `End` | Move between rows |
| `Enter`, `Space` | Open or close a row |
| `Tab` | Move into the actions of the open row |
| `Esc` | Close the open row and return to it; close a dialog |

## Tips

<Aside type="caution">
A worktree that is not merged and not pushed holds work that exists nowhere else. The view will not offer to remove it. Merge or push first.
</Aside>

- Use **No agent** together with **Merged** to find the trees that are safe to clean up.
- A project's **Base branch** decides what counts as merged. Set it in the project settings if your main branch is not `main`.

## Related pages

<CardGrid>
  <LinkCard title="Tasks and trackers" href="/agent/tasks/" description="Start with an agent can create a worktree for a task." />
  <LinkCard title="Changes and commits" href="/agent/changes/" description="Push the branch of a worktree before you remove it." />
  <LinkCard title="Terminals and sessions" href="/agent/terminals/" description="Sessions and the new-session dialog." />
</CardGrid>
