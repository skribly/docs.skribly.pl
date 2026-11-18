# Updates

> How Skribly Agent updates itself on macOS, Windows and Linux, what Check for updates and Update automatically do, how versions are numbered and what changed from the former name.

Skribly Agent updates itself from a public release home that holds only installers and is read with no token. It checks at startup and every four hours, downloads a new version in the background and installs it when you restart or quit. To install it for the first time, use [the download page](https://agent.skribly.pl/download/).

## Open the view

- Open **Settings** and choose **Updates**, or
- click **Check for updates** in the tray or menu bar menu.

The page shows the version, the system and the architecture, **Check for updates**, the download progress, the **Update automatically** switch and the [data directory](/agent/settings/#data-directory).

## How to check for an update now

<Steps>

1. Open **Settings → Updates**.

2. Press **Check for updates**. The line under it says what happened: checking, a new version is available, downloading with the percent, ready, or **You have the latest version.**

3. When the new version is ready, press **Restart and install** with its number, or click **Version … ready — restart** in the status bar. Without a click the update is installed when you quit the app.

</Steps>

## How auto-update works

| When | What happens |
| --- | --- |
| 8 seconds after startup | The first check, in an installed app with **Update automatically** on |
| Every 4 hours | Another check |
| New version available | Background download; the status bar shows **Downloading &lt;version&gt; N%** |
| Downloaded | The status bar shows **Version &lt;version&gt; ready — restart**. Click it to install and restart, or the update installs when you quit. |
| Update refused for its signature (Windows, Linux) | The status bar offers **New version available** as a download link instead |
| Error | A message in **Settings → Updates** |

**Check for updates** works also when **Update automatically** is off. In a development build the check answers that updates work in the built app.

| System | What is downloaded |
| --- | --- |
| macOS | The `-mac.zip` package of your architecture. The app is not signed, so Skribly checks the SHA-512 sum itself and swaps the app in after it quits. The downloaded package is removed afterwards. |
| Windows | The NSIS installer. The portable build does not update itself. An update keeps the `skribly` command, the link handlers and your data folder. |
| Linux | The AppImage, or the `.deb` or `.rpm` package it was installed from. A package update asks for the administrator password once and keeps the `skribly-agent` command. |

## Options

| Option | What it does | Default |
| --- | --- | --- |
| **Check for updates** | Checks now and shows the result in the line below it | Not checked in this session until you press it or the timer runs |
| **Update automatically** | Checks 8 seconds after startup and every 4 hours, downloads in the background and installs on quit | On |

When **No network calls by the app** is on in [Privacy and network](/agent/data-and-network/), no check is made and the page says that the network is switched off.

## Versions

A release is built only from a tag `v<version>` on `main` that equals the version in `package.json`. The first release made this way is 1.1.0; versions before it were numbered `1.0.<build number>`.

<Aside type="caution">
Skribly 1.0.x read a former private feed. Install 1.1.0 once by hand from [the download page](https://agent.skribly.pl/download/); later versions arrive by themselves. The **GitHub token (private repository)** field of **Settings → Updates** is gone, and a token saved there is deleted from the app's secret store at the next start.
</Aside>

## Release files

| System | Files |
| --- | --- |
| macOS | `Skribly-mac-arm64.dmg` (Apple Silicon), `Skribly-mac-x64.dmg` (Intel) |
| Windows | `Skribly-Setup.exe` (x64 and ARM64 in one), `Skribly-Setup-x64.exe`, `Skribly-Setup-arm64.exe`, `Skribly-Portable-x64.exe` |
| Linux | `Skribly-linux-x86_64.AppImage`, `Skribly-linux-amd64.deb`, `Skribly-linux-x86_64.rpm` |

These fixed names always give the newest version. Every release also has a `SHA256SUMS.txt` and notes that say how to open the unsigned app on macOS and Windows and how to check the sums. Every packaged app is smoke-tested before it is published, and installed apps see a release only once it has the files of every system.

## Tips

- Turn off **Update automatically** if you want to choose when to update, and press **Check for updates** yourself.
- What an install, an update and an uninstall leave on each system is on [Data and network](/agent/data-and-network/#what-an-uninstall-leaves).
- When an update fails, see [Troubleshooting](/agent/troubleshooting/).

## Related pages

<CardGrid>
  <LinkCard title="Install" href="/agent/install/" description="Install Skribly Agent on macOS, Windows or Linux." />
  <LinkCard title="Settings" href="/agent/settings/" description="Every section of Settings and its defaults." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What the app stores, connects to and leaves behind." />
  <LinkCard title="Troubleshooting" href="/agent/troubleshooting/" description="Fixes for the problems people meet most." />
</CardGrid>
