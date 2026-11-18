# Browser

> The Browser view of Skribly Agent previews your app at phone, tablet and laptop widths, takes screenshots for agents and can share its tabs over CDP.

The **Browser** view shows your running app next to your work. You preview it at laptop, tablet and phone width, open the developer tools and take a screenshot an agent can read. The same view has tabs for Claude, Codex, Cursor and Gemini, each in its own profile. If you wish, you can share the browser with agents over the Chrome DevTools Protocol, so they click and read what you see.

![The Browser view with a Preview tab on localhost:5173, the device size buttons, DevTools, screenshot and Share in the toolbar](../../../assets/screens/agent-browser.webp)

## Open the view

- Click **Browser** in the activity bar on the left, or press `⌘8`, or
- open the command palette (`⌘K`) and choose **Browser**.

On Windows and Linux use `Ctrl` in place of `⌘`.

## Tabs and profiles

Each kind of tab has its own persistent profile, with its own cookies, sign-in and storage. Signing in to one does not mix with another, and the session survives a restart.

| Tab | Start page |
| --- | --- |
| **Preview** | The project's dev URL, otherwise `http://localhost:5173` |
| Claude | `https://claude.ai` |
| Codex | `https://chatgpt.com/codex` |
| Cursor | `https://cursor.com/agents` |
| Gemini | `https://gemini.google.com` |

- The **+** button opens the **New tab** menu. You can have several previews but only one tab for each agent. An address on claude.ai, chatgpt.com, openai.com, cursor.com or gemini.google.com always opens in the tab of its own profile.
- Tabs and their addresses are remembered between launches. The middle mouse button closes a tab.
- The preview page has no access to Node.js or to the app.

## How to preview your app

<Steps>

1. Start your dev server in a terminal.

2. Open **Browser**. The **Preview** tab loads the dev URL of the project, or `http://localhost:5173`.

3. Use the buttons in the toolbar: back, forward and reload, then the width of the preview frame: **Full width**, laptop (1366), tablet (820) and phone (390).

4. Type a different address in the **Address** field if you need one.

</Steps>

What the **Address** field does with what you type:

| You type | What opens |
| --- | --- |
| `localhost:3000` | `http://localhost:3000` |
| `example.com` | `https://example.com` |
| Anything else | A search on DuckDuckGo |

The last row is a network call to a service outside your computer. See [Data and network](/agent/data-and-network/).

## How to take a screenshot for the agent

<Steps>

1. Open the page you want the agent to see.

2. Press **Screenshot for the agent** in the toolbar. The visible tab is saved as a PNG.

3. Paste the path, which is already in the clipboard, into the agent's terminal and ask it to look at the file.

</Steps>

With a project selected the file goes to `.skribly/shots/podglad-<date>.png` in the project, and `.skribly/` is excluded from git locally. Without a project it goes to the `shots` folder in the app's data folder.

## What is in the toolbar

| Button | What it does |
| --- | --- |
| Back, **Next**, **Refresh** | Move through the tab's history and reload it |
| **Address** | The address field described above |
| **Device** | Sets the width of the preview frame |
| **Developer tools** | Opens the tab's developer tools |
| **Screenshot for the agent** | Saves the visible tab as described above |
| **WCAG / SEO audit of this page** | Audits the page; see [Audits](/agent/audits/) |
| **Share** | Opens **Browser for agents**. It reads **Agents can see it** while sharing is on |

## Share the browser with agents

Skribly can open a Chrome DevTools Protocol (CDP) port, so that `chrome-devtools-mcp` or Playwright MCP control the tabs of this view. They click, fill in forms, read the console and the network, and take screenshots, while you watch the same thing. It is off by default.

<Steps>

1. Open **Settings**, section **Browser for agents**, and switch on **Share browser with agents**. Or press **Share** in the Browser view and then **Go to settings**.

2. Change the **Port** if you need to. The default is `9333`, and the allowed range is 1024 to 65535.

3. Restart Skribly. The port opens only when the app starts. Until then **Status** shows **requires restart**. When it is open, **Status** shows the address, for example `127.0.0.1:9333`.

4. Add the MCP server to your agent with a snippet from **MCP configuration**, and open the tab the agent should work with.

</Steps>

While sharing is on, the status bar shows `CDP 127.0.0.1:9333`.

The port listens only on `127.0.0.1`, but it accepts connections from any program on this computer. All tabs are then visible, including the signed-in Claude and Cursor profiles. Switch sharing on only while you work with agents.

| Setting | Value | Default |
| --- | --- | --- |
| **Share browser with agents** | On or off | Off |
| **Port** | 1024 to 65535 | `9333` |
| Listens on | `127.0.0.1` only | |

The section **MCP configuration** has a snippet for each of **Claude Code**, **Codex**, **Cursor**, **Gemini CLI** and **Playwright MCP**, with your port filled in. For Claude Code it is:

```bash
claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest --browserUrl http://127.0.0.1:9333
```

Codex reads `~/.codex/config.toml`, Cursor `.cursor/mcp.json` or `~/.cursor/mcp.json`, and Gemini CLI `~/.gemini/settings.json`. Playwright MCP uses `--cdp-endpoint` in place of `--browserUrl`. Turn the servers on and off in [MCP servers](/agent/mcp/).

## Tips

<Aside type="caution">
A shared browser exposes every tab, including signed-in ones, to any program on this computer. Keep sharing off when you do not work with an agent.
</Aside>

- If the port is taken, choose another one in **Settings**, section **Browser for agents**, and restart. See [Troubleshooting](/agent/troubleshooting/#the-browser-port-is-in-use).
- Files you download in the Claude tab, such as an export from Claude Design, go to `Skribly Design` in your Downloads folder. See [Plugins and Claude Design](/agent/plugins/).

## Related pages

<CardGrid>
  <LinkCard title="Plugins and Claude Design" href="/agent/plugins/" description="Hand a Claude Design package to an agent." />
  <LinkCard title="MCP servers" href="/agent/mcp/" description="Add and check the browser MCP servers of your agents." />
  <LinkCard title="Audits" href="/agent/audits/" description="WCAG and SEO audits of a page." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What the app contacts and what its switch covers." />
</CardGrid>
