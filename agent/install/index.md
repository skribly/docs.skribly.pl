# Install Skribly Agent

> Install Skribly Agent on macOS, Windows or Linux, open the unsigned builds, check a download and make your agents visible to the app.

Download Skribly Agent from [agent.skribly.pl/download](https://agent.skribly.pl/download/). The page always offers the newest version. Every release has installers for macOS, Windows and Linux, the same files with fixed names, the `.zip` packages that auto-update uses and a `SHA256SUMS.txt`. Releases come from a public release home, so you need no account.

## Pick your file

| System | File | How to install |
| --- | --- | --- |
| macOS, Apple Silicon | `Skribly-mac-arm64.dmg` | Open the `.dmg` and drag the app to **Applications** |
| macOS, Intel | `Skribly-mac-x64.dmg` | The same |
| Windows 10 and 11, x64 and ARM64 | `Skribly-Setup.exe` | One installer for both architectures; you choose the folder and an install for yourself or for all users |
| Windows 10 and 11, x64 only | `Skribly-Setup-x64.exe` | The same installer with x64 only, about half the size |
| Windows 11, ARM64 only | `Skribly-Setup-arm64.exe` | The same installer with ARM64 only |
| Windows, portable | `Skribly-Portable-x64.exe` | Runs without installing; it does not update itself |
| Linux, any distribution | `Skribly-linux-x86_64.AppImage` | Make it executable and run it |
| Debian, Ubuntu | `Skribly-linux-amd64.deb` | Install with `apt` |
| Fedora, RHEL, openSUSE | `Skribly-linux-x86_64.rpm` | Install with `dnf` |

Copies with the version in the name, such as `Skribly-<version>-arm64.dmg`, sit next to them.

## Install

<Tabs syncKey="os">
<TabItem label="macOS">

<Steps>

1. Open the `.dmg` and drag **Skribly Agent** to **Applications**.

2. Launch it once. The app has no Apple Developer certificate and is not notarised, so Gatekeeper blocks the first launch. Dismiss the message.

3. Open **System Settings → Privacy & Security**, scroll to the message about Skribly Agent and click **Open Anyway**. On older macOS versions, right-click the app and choose **Open**.

   Or remove the quarantine flag in Terminal:

   ```bash
   xattr -dr com.apple.quarantine "/Applications/Skribly Agent.app"
   ```

</Steps>

You do this once. Updates that the app installs keep working. The message "is damaged and can't be opened" has the same cause and the same fix.

</TabItem>
<TabItem label="Windows">

<Steps>

1. Run `Skribly-Setup.exe`, or the x64 or ARM64 installer. The universal one picks the right architecture.

2. The installer is not code-signed, so SmartScreen may show "Windows protected your PC". Click **More info → Run anyway**.

3. Choose the folder and whether to install for yourself or for all users.

</Steps>

The portable `Skribly-Portable-x64.exe` needs no installation and does not update itself.

</TabItem>
<TabItem label="Linux">

AppImage, for any distribution:

```bash
chmod +x Skribly-linux-x86_64.AppImage
./Skribly-linux-x86_64.AppImage
```

A distribution without FUSE 2 needs `libfuse2` (Ubuntu 22.04 and later: `sudo apt install libfuse2`; Ubuntu 24.04: `libfuse2t64`). Or run the AppImage with `--appimage-extract-and-run`.

Debian and Ubuntu:

```bash
sudo apt install ./Skribly-linux-amd64.deb
```

Fedora, RHEL and openSUSE:

```bash
sudo dnf install ./Skribly-linux-x86_64.rpm
```

The `.deb` and `.rpm` packages add Skribly to the application menu.

</TabItem>
</Tabs>

## Check a download

Every release has a `SHA256SUMS.txt` with the SHA-256 of every file, the fixed names included. Download it next to the installer and run, in that folder:

| System | Command |
| --- | --- |
| macOS | `shasum -a 256 -c SHA256SUMS.txt --ignore-missing` |
| Linux | `sha256sum -c SHA256SUMS.txt --ignore-missing` |
| Windows PowerShell | `Get-FileHash .\Skribly-Setup.exe -Algorithm SHA256`, then compare it with that file's line in `SHA256SUMS.txt` |

`OK`, or the same hash, means the file is the one the release was built as.

## Install an agent

Skribly runs the agents you already have. You need `git` and at least one agent, for example:

```bash
npm install -g @anthropic-ai/claude-code
```

You can also install an agent from the app: press **Install** on its card in **Settings → Agents**. The full list with install commands is on [Supported agents](/agent/agents/). After installing a new agent, choose **Settings → Agents → Detect again**. The app needs no separate Node.js.

An app started from Finder, the Dock or the applications menu gets a short `PATH`. On macOS and Linux, Skribly reads the environment from your login shell once at start, with a limit of 5 seconds, and adds `~/.local/bin`, `/opt/homebrew/bin` and `/usr/local/bin`. Agents installed with nvm, Homebrew or `npm -g` are then visible as in your terminal. The window opens at once; agents, panes and anything else that starts a program wait for that shell, so nothing runs with the short `PATH`.

<Aside type="note">
Uninstalling removes the app and keeps your data folder, which holds your settings and sessions. What the app stores is on [Data and network](/agent/data-and-network/).
</Aside>

## Related pages

<CardGrid>
  <LinkCard title="First run" href="/agent/first-run/" description="The tour, the Getting started list and the menu bar icon." />
  <LinkCard title="Supported agents" href="/agent/agents/" description="The 13 agents and how to install them." />
  <LinkCard title="Updates" href="/agent/updates/" description="How the app updates itself and what the release files are." />
  <LinkCard title="Troubleshooting" href="/agent/troubleshooting/" description="When an agent is not found or the app does not open." />
</CardGrid>
