# Security

> How to report a security problem in any Skribly tool, and how Skribly Agent, agent-skills and Skribly Tracker handle tokens, network access and your code.

## Report a vulnerability

Write to **[contact@skribly.pl](mailto:contact@skribly.pl)** with:

- the tool and version (in Skribly Agent: **Help → About**);
- what an attacker can do, and the steps to reproduce it;
- whether the problem is already public.

Please do not open a public issue or post details anywhere before we have answered. We will confirm that we received the report, keep you posted while we fix it, and credit you in the release notes if you want. Skribly is a spare-time, non-commercial project, so there is no bug bounty.

## Skribly Agent

- **No telemetry and no server of its own.** It sends no statistics, crash reports or identifiers.
- **Tokens in the system keychain.** Tracker tokens are encrypted with Electron `safeStorage` (Keychain on macOS, DPAPI on Windows, libsecret on Linux). When encryption is not available, they stay in memory only and never reach disk in plain text.
- **An isolated interface.** Context isolation is on, the interface can call only the methods of one typed contract, and its Content-Security-Policy allows scripts from the app only. Embedded pages get no Node.js access.
- **Commands without a shell.** Git, agents and editors run through `execFile`, so arguments are never interpreted by a shell. File operations reject paths outside the project.
- **Local ports only.** The control API and the optional browser debugging port listen on `127.0.0.1` only. The control API needs a random token, renewed on every start.
- **Agents run with your permissions.** An agent in a terminal can do whatever you can do in a terminal, and it can read the tokens Skribly passes to its session. Run agents you trust.

Skribly Agent connects only to your trackers, `api.osv.dev` for dependency audits, `open-vsx.org` for themes, GitHub for updates and skills, the sites you audit or open, and a translation service when you choose a language other than Polish or English.

:::caution
The browser debugging port, when you turn it on, can be used by **any program on your computer** without authentication, and it sees every tab, including signed-in ones. Turn it on only while agents need it.
:::

## agent-skills

- Credentials come from environment variables or `~/.config/agent-skills/credentials.env`, never from the repository. `agent-skills doctor` warns when others can read that file.
- The tracker client is read-only unless you publish a comment with `--post --yes`. Tokens are sent only to the tracker's own host, and redirects to another host drop them.
- Secret scans mask the values they find.
- Nothing is collected or uploaded. The CLI talks only to your tracker, to OSV.dev or PageSpeed Insights when you run those audits, and to package registries through your own package manager.

## Skribly Tracker

- Personal access tokens act with their owner's role and can be read-only or expire. See [Personal access tokens](/tracker/tokens/).
- Webhooks are signed with HMAC-SHA256 over the raw body. See [Webhooks and signing](/tracker/webhooks/).
- Markdown in descriptions and comments is rendered with raw HTML escaped.
- The API allows 240 requests a minute per user.
- When you host it yourself, put it behind HTTPS, set your own database passwords and an administrator password, and turn debugging off. See [Self-hosting](/tracker/self-hosting/#running-it-for-a-team).

## This site

docs.skribly.pl is a static site with no analytics, no tracking and no third-party requests: fonts and the search index are served from the same address. It keeps only your own display choices: the theme in the `sk-theme` cookie and the accessibility settings in the `sk-a11y` cookie, both on `.skribly.pl` so they hold on every Skribly site, plus a copy in the browser's local storage. Neither is sent anywhere else.
