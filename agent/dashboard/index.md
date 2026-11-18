# Dashboard

> The Dashboard of Skribly Agent: start actions, detected agents, the Getting started list, counters, repository activity, the token chart, projects and recent commits.

The Dashboard is the first view. It sums up your work in one page: how many agents work and how many wait for you, your commits, your token use and your projects. You use it to start work and to see where things stand.

![The Dashboard at night: Run agent, My tasks and Add project, the detected agents, the Getting started checklist, four counters and the repository activity](../../../assets/screens/agent-dashboard.webp)

![The same Dashboard in the day theme](../../../assets/screens/agent-dashboard-light.webp)

## Open the view

- Click **Dashboard** in the activity bar on the left, or press `⌘1`, or
- open the command palette (`⌘K`) and choose **Dashboard**.

Shortcuts on this site use `⌘`. On Windows and Linux use `Ctrl` instead.

## What is on the page

| Part | What it shows or does |
| --- | --- |
| Hero | The greeting and three actions: **Run agent** opens the Agents view with a new session of the first installed agent (a plain shell when none is installed), **My tasks** opens [Tasks](/agent/tasks/), **Add project** asks for a folder |
| Detected agents | One chip per agent. An installed agent shows its name and version on hover. A missing one is dimmed; clicking it starts its installation |
| **Getting started** | The setup list described on [First run](/agent/first-run/). It is hidden once you close it |
| Counters | **agents working now**, **waiting for your decision** (click it for the Agents view), **tasks in progress** (click it for Tasks) and **Your commits in 7 days** |
| **Repository activity** | Your commits and, when you have connected Git accounts, their calendars. Ranges: **14 days**, **3 mo.** and **year**. The summary gives the days in a row, the longest streak, the total of this year and this week. The refresh button scans the repositories again |
| **Agent tokens — 14 days** | A chart of tokens per day. Group it by **Kind**, **Agent** or **Model**, and switch the counted kinds: **Input**, **Output**, **Cache write**, **Cache read**. **Board** opens the [token use board](/agent/usage/). **How this is counted** explains the sources |
| **Most active repositories** | The repositories with the most of your commits in the chosen range |
| **Projects** | Every project with its number of sessions. Click one to select it and open the Code view. **Add** adds a project |
| **Recent commits** | Your latest commits of the last 14 days from all projects, with their hash, subject and age. Click one to open its project in the Code view |

The activity counts your commits from all branches of your projects and of the repositories in the folders you chose, under all your git email addresses. When it finds none, the card says which addresses it searched for and suggests connecting a GitHub or GitLab account. You connect accounts in **Settings → Git accounts**.

## Tips

<Aside type="tip">
The counters and the lists load again when you add a project, start or close a session, or when the activity is refreshed.
</Aside>

- A missing agent chip is the shortest way to install an agent: it opens the install progress in the app. The commands are on [Supported agents](/agent/agents/).

## Related pages

<CardGrid>
  <LinkCard title="First run" href="/agent/first-run/" description="The tour and the Getting started list." />
  <LinkCard title="Token use and resources" href="/agent/usage/" description="The board behind the token chart." />
  <LinkCard title="Attention inbox" href="/agent/inbox/" description="The sessions that wait for you." />
  <LinkCard title="Your first workspace" href="/agent/first-workspace/" description="Add a project." />
</CardGrid>
