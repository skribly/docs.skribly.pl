# Changes and commits

> Stage and discard changes, read a side-by-side diff, get a commit message suggestion without a model, commit, switch branches, push, pull and open a pull request.

The **Changes** tab of the **Code & git** view shows what changed in the project: files in the index (staged) and files with working changes. From there you stage and discard files, read each diff, write a commit message, commit, switch branches, push, pull and open a pull request. The commit message suggestion needs no language model, and no commit made here carries an AI trailer.

![The Code & git view: the commit box with Suggest and Agent, staged files and changes on the left, and a side-by-side diff of CartDrawer.tsx](../../../assets/screens/agent-code-changes.webp)

On Windows and Linux use `Ctrl` wherever this page says `⌘`.

## Open the view

- Click **Code & git** in the activity bar, or press `⌘4`, or choose **Code & git** in the command palette (`⌘K`).
- **Changes and commit** is the tab that opens first. Its icon shows the number of changed files.

The view refreshes itself every 8 seconds, while the window has focus, so changes made by agents show up. The refresh button in the panel head reloads at once. If the project is not a git repository, the tab says so; run `git init` in the terminal to start one.

## How to read and stage changes

<Steps>

1. Look at the two lists: **Staged (N)** and **Changes (N)**. A letter before each file tells its state: `A` added, `M` modified, `D` deleted, `R` renamed, `U` untracked, `!` conflict.

2. Click a file. A staged file opens as a side-by-side diff of **HEAD** against the index. A working file opens as a diff of the index against the disk. An untracked file opens in the editor, because it has nothing to compare with.

3. Press **Stage** next to a file (the plus) to move it to the index, or **Unstage** (the minus) to take it back. The buttons in the section headers do it for every file at once.

4. In the header of the diff, **Edit** opens the file in the editor, and **Add** or **Revert** stages or unstages it and closes the diff.

</Steps>

## How to discard changes

<Steps>

1. Press **Discard changes** next to a working file. For an untracked file the button is **Delete new file**. The button in the **Changes** header, **Discard all working changes**, takes every working file except conflicts.

2. Read the dialog. It lists the tracked files that return to their state in the index, and, in red, the new files that are deleted from the disk.

3. Confirm with **Discard changes**. This cannot be undone.

</Steps>

Staged files are not touched by a discard: unstage them first.

## How to commit

<Steps>

1. Stage the files you want in the commit.

2. Press **Suggest**. The message field fills in, and under the buttons you see the template and where it came from, the reasons for the type and the scope, and clickable alternatives. Click one to use it instead.

3. Optional: press **Agent**. A headless agent reads the draft, the commit rules of the repository, the last 20 commit subjects and a summary of the staged diff, and returns an improved message. The button needs staged files and an installed agent with a headless mode (the default agent if it has one, otherwise the first that does). The agent cannot change files, and its answer is only a proposal in the field.

4. Edit the message, then press **Commit**, or press `⌘↩` in the field.

</Steps>

When nothing is staged, the commit button stages all changes, untracked files included, and commits them. The commit goes through `git commit`, and the message is always stripped of AI trailers, also one you typed by hand.

### What Suggest does

**Suggest** works from the staged files, or from all changes when nothing is staged. It spends no tokens. The steps, in order:

| Step | Rule |
| --- | --- |
| Template | Taken from the **Commit template** field of the project settings. Without it, matched against the last 80 commit subjects (merges left out): `{type}({scope}): {subject}`, `{type}: {subject}`, `#{key} - {subject}`, `{key}: {subject}`, `[{key}] {subject}` or plain `{subject}`. The two Conventional Commits forms count together against the others; the scoped one wins on a tie. With fewer than 5 commits the default is used, and the reasons say so |
| Language | Polish when more than 30% of the subjects contain Polish letters or typical Polish words. The **Commit language** field of the project settings forces Polish or English |
| Capital letter | The subject starts with a capital when most of the history does, or when the template has `{key}` |
| Type | From the branch if it starts with `feat`, `feature`, `fix`, `bugfix`, `hotfix`, `refactor`, `docs`, `chore`, `test`, `perf`, `ci` or `build` and `/` or `-`; else `docs` for documentation only, `test` for tests only, `ci` for CI files only, `build` for dependency and build files only, `feat` when at least half the files are new, `refactor` for deletions only, otherwise `fix` |
| Scope | In a monorepo, the package under `packages/`, `apps/`, `libs/`, `services/` or `modules/`. For one file, its name without the extension (up to 24 characters). For several, the deepest common folder, skipping generic names such as `src`, `app`, `lib`, `components` and `views` |
| Key | From a local task whose key is in the branch name, or from the branch itself (`ABC-123`, or a number of at least two digits). If the template needs a key and there is none, the reasons tell you |
| Subject | The title of that local task, else the words of the last part of the branch (at least two, without `feature`, `fix` and numbers), else a description of the files |

The alternatives are the same subject in the forms `{type}({scope})`, `{type}` and `#{key}` (or plain when there is no key).

### What the Agent button reads

The agent is asked for a Conventional Commit message in English. Its answer loses every `Co-Authored-By` and "Generated with" line, and a `Signed-off-by` line unless you wrote the same one in the draft. It gets:

- The commit rules of the repository: the commit sections of `AGENTS.md`, `CLAUDE.md` and `CONTRIBUTING.md` (also in `.github/` and `docs/`), a commitlint configuration and `.gitmessage`. Each source is cut to 1,800 characters and all together to 6,000. A file larger than 256 KB, or a link that leaves the project, is not read.
- The last 20 commit subjects, merges left out.
- A summary of the staged diff of up to 12,000 characters: first the statistics for every staged file, then hunks, source code before configuration, tests, documents and generated files. A note says how many hunks were left out.

## How to remove AI trailers from every commit

Press **Hook without AI trailers** at the bottom of the tab. It installs a `commit-msg` hook in the repository's common git folder, so it works in all of its worktrees, and it also cleans the commits that agents make in a terminal.

The hook removes:

- `Co-Authored-By:` lines that name an agent as a whole word (`claude`, `anthropic`, `openai`, `codex`, `copilot`, `cursor`, `gemini`, `aider`, `devin ai`), the word `bot`, or a `noreply@` address;
- lines that start with `Generated with` or `Generated by` and an agent name;
- lines that start with 🤖.

The rest of the message stays. A human co-author is not removed, even if the name only contains an agent name inside a longer word. A `commit-msg` hook that was already there is set aside as `commit-msg.przed-skribly` and still runs after the cleanup. If `core.hooksPath` points elsewhere (husky, lefthook), git does not read this hook: add the cleanup to your own `commit-msg`.

## How to switch or create a branch

<Steps>

1. Press the branch button at the top of the tab. The **Branches** dialog opens.

2. To create a branch, type its name (for example `feature/PROJ-12-search`) and press **Create** or `Enter`. It is created from the current one and checked out.

3. To switch, click a local branch. A branch that exists only on the remote is listed in grey; clicking it creates a local branch that tracks it.

</Steps>

The current branch is marked **current**.

## How to push, pull and open a pull request

<Steps>

1. Press the pull button (the arrow down). It runs `git pull --ff-only`; the tooltip shows how many commits are waiting.

2. Press the push button (the arrow up). It runs `git push -u origin HEAD`, and the number next to it is how many commits are ahead.

3. After a push of a branch that is not the base branch, a bar offers **Create PR**. It runs `gh pr create` with the title and text of the last commit, without agent trailers, and the project's base branch as the target when one is set.

4. When the branch already has an open pull request, the bar shows its number with a button that opens it in the browser.

</Steps>

Pull requests need the GitHub CLI (`gh`) and a GitHub remote. Without `gh` the bar offers **Install gh**; without a login it offers **Log in to GitHub**. Push and pull use the git setup you already have (SSH keys, a credential manager): the app passes no token.

<Aside type="note">
With **No network calls by the app** switched on in **Settings**, push, pull and the pull request bar are blocked.
</Aside>

## What is on the screen

| Part | What it does |
| --- | --- |
| Branch button | Opens **Branches** |
| Pull and push buttons | `git pull --ff-only` and `git push -u origin HEAD` |
| Message field | The commit message; `⌘↩` commits |
| **Suggest** | A message from the changes, the branch and the history, with reasons and alternatives |
| **Agent** | An agent improves the message, read-only |
| **Commit** | Commits the staged files |
| **Staged (N)**, **Changes (N)** | The two file lists |
| **Hook without AI trailers** | Installs the `commit-msg` hook |

## Tips

<Aside type="tip">
Stage related files only, then press **Suggest**: the type and the scope come from the staged files, so a small commit gets a precise message.
</Aside>

- Name branches `feature/ABC-123-short-title`: the type, the key and the subject all come from the name.
- Always read an Agent message before you commit. It is a proposal.

## Related pages

<CardGrid>
  <LinkCard title="Review notes" href="/agent/review/" description="Note lines of a diff and send them to an agent." />
  <LinkCard title="History" href="/agent/history/" description="The graph of all branches, with commit details." />
  <LinkCard title="Editor and files" href="/agent/code/" description="The same view as an editor." />
  <LinkCard title="Worktrees" href="/agent/worktrees/" description="Every worktree of your projects and its state." />
</CardGrid>
