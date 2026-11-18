# First run

> What Skribly Agent does on its first launch: the animated tour, the Getting started list on the Dashboard, the menu bar or tray icon and the single window.

On the first launch, about a second after the window opens, an animated tour starts. A cursor moves through the app, opens the views and says what each one is for. After the tour, the Dashboard keeps a **Getting started** list that follows your real setup. The app also puts an icon in the menu bar (macOS) or the system tray (Windows and Linux).

![The first-run tour pointing at the project switcher, with Pause and Next](../../../assets/screens/agent-tour.webp)

## The tour

The tour has 18 steps. It goes on by itself about every 6 seconds, and it waits on its step while the window is hidden. Each step shows a card with the step number, a title, a short text and a progress bar. The card is a dialog: focus moves into it, `Tab` stays inside it and focus returns to where it was when you close it.

With reduced motion, set in the system or with the accessibility switch, the cursor is not drawn and the tour does not advance by itself: it waits for you to press **Next**.

| Key or button | What it does |
| --- | --- |
| `→` or **Next** | Next step |
| `←` or the previous-step button | Previous step |
| **Pause** | Stops the automatic advance; the button then reads **Auto** and resumes it |
| `Esc` or the close button | Closes the tour |
| **Let's get started** | Closes the tour on the last step |

Closing the tour in any way marks it as shown, so it does not start by itself again.

### How to replay the tour

- Choose the **?** button at the top of the window, then **Start tour**, or
- open **Help** in the activity bar and press **Start tour**, or
- open the command palette (`⌘K`) and choose **Start tour**, or
- choose **Settings → Appearance and tour** and press **Run now**, or
- press **Tour** on the **Getting started** card of the Dashboard.

### How to show the tour at the next launch

<Steps>

1. Open **Settings → Appearance and tour**.

2. Press **Reset tour** next to **Show the tour on next launch**. The button works once the tour has been shown.

3. Restart the app. The tour starts again about a second after the window opens.

</Steps>

## The Getting started list

The Dashboard shows a **Getting started** card with a progress bar and a count such as `5 of 8`. Each item is marked done from your real data, not by ticking, and has a button that takes you to the place.

| Item | Done when | Button |
| --- | --- | --- |
| **Add project** | The app has at least one project | **Add project** |
| **Connect a task tracker** | At least one tracker account is saved | **Connect** (opens **Settings → Task trackers**) |
| **Detect agents** | At least one agent is installed | **Detect**, or **Detect again** when one is found |
| **Install skills** | The current project has a skill installed for an agent | **Open Skills** |
| **Run your first agent** | An agent session has been started | **Run** |
| **Connect an agent through skribly mcp** | You pressed its button; it opens the section of **Settings** that holds the command to paste | **Show** |
| **Check privacy and the network switch** | You pressed its button; it opens the privacy sheet | **Show** |
| **Try Ctrl+B** | You pressed the prefix in the Agents view | **Show** |

The last three items are remembered, because the app cannot read it from data. The prefix is `Ctrl+B` on every system; press it, release it, then press `?` for the cheat sheet of pane shortcuts.

Press the cross to hide the card. When every item is done, the card says **All set — you can hide this card.** and offers **Hide**. To bring it back, choose **Settings → Appearance and tour** and press **Show again** next to **Getting started on the Dashboard**.

## The menu bar and tray icon

Clicking the icon brings up the window. Its menu lists, from the top:

| Part | What it shows |
| --- | --- |
| Agent counts | `Working`, `Waiting` and `Done` counts |
| **Attention inbox** | Up to five of the newest items, each as `Waiting`, `Failed` or `Done` with the session name; choosing one opens it |
| **Open projects** and **Recent projects** | Up to five each; choosing one opens the project |
| **Quiet notifications (no sound)** | A switch that is the opposite of **Notification sound** in **Settings → Editor & notifications** |
| **No network calls by the app** | A switch that mirrors the offline switch |
| **Tokens used today** | Today's token count, only when there is a number |
| **Show Skribly**, **Settings** | Bring up the window, open **Settings** |
| **Check for updates** | Only on a system where the app can check |
| **Quit** | Quits the app |

A part with nothing to show is left out. Long names are cut with an ellipsis. On macOS the number of items waiting for you is written next to the icon, and the icon's tip names it on every system.

## One window

Only one instance of Skribly Agent runs. Starting it a second time brings the existing window forward; if you closed the window, a new one opens.

<Aside type="tip">
Shortcuts on this site use `⌘`. On Windows and Linux use `Ctrl` instead.
</Aside>

## Related pages

<CardGrid>
  <LinkCard title="Your first workspace" href="/agent/first-workspace/" description="Add a project, clone one and connect a tracker." />
  <LinkCard title="Your first session" href="/agent/first-session/" description="Start an agent and commit what it did." />
  <LinkCard title="Dashboard" href="/agent/dashboard/" description="The cards of the first view." />
  <LinkCard title="Attention inbox" href="/agent/inbox/" description="The list that the tray menu mirrors." />
</CardGrid>
