# Install Skribly Agent

> Install Skribly Agent on macOS, Windows or Linux, get past the warnings for unsigned builds and take the first steps.

Skribly Agent is published on the GitHub Releases page of its repository. Every release has the installers for macOS, Windows and Linux, the same files with stable names that always point at the newest version, the `.zip` packages used by auto-update, and a `SHA256SUMS.txt`.

:::note[Access]
The repository is private for now, so release files are available to people with access. Public downloads are planned for when the repositories open.
:::

## Pick your file

| System | Stable file name | Notes |
| --- | --- | --- |
| macOS, Apple Silicon | `Skribly-mac-arm64.dmg` | Open the `.dmg` and drag the app to **Applications** |
| macOS, Intel | `Skribly-mac-x64.dmg` | Same as above |
| Windows 10/11, x64 and ARM64 | `Skribly-Setup.exe` | One installer for both architectures; you choose the folder and a per-user or all-users install |
| Windows, portable | `Skribly-Portable-x64.exe` | No installation; does not update itself |
| Linux, any distribution | `Skribly-linux-x86_64.AppImage` | Make it executable and run it |
| Debian, Ubuntu | `Skribly-linux-amd64.deb` | Install with `apt` |
| Fedora, RHEL, openSUSE | `Skribly-linux-x86_64.rpm` | Install with `dnf` |

Versioned copies are named like `Skribly-<version>-arm64.dmg` or `Skribly-Setup-<version>.exe`. To check a download:

```bash
shasum -a 256 -c SHA256SUMS.txt --ignore-missing   # Linux: sha256sum -c SHA256SUMS.txt --ignore-missing
```

## Install

<Tabs syncKey="os">
<TabItem label="macOS">

<Steps>

1. Open the `.dmg` and drag **Skribly Agent** to **Applications**.

2. Launch it once. The app is not signed with an Apple Developer certificate, so Gatekeeper blocks the first launch.

3. Open **System Settings → Privacy & Security**, scroll to the message about Skribly Agent and click **Open Anyway**. On older macOS versions, right-click the app and choose **Open**.

   Or remove the quarantine flag in Terminal:

   ```bash
   xattr -dr com.apple.quarantine "/Applications/Skribly Agent.app"
   ```

</Steps>

You only need to do this once; updates installed by the app keep working. The message "is damaged and can't be opened" has the same cause and the same fix.

</TabItem>
<TabItem label="Windows">

<Steps>

1. Run `Skribly-Setup.exe`. The one installer contains x64 and ARM64 and picks the right one.

2. The installer is not code-signed, so SmartScreen may show "Windows protected your PC". Click **More info → Run anyway**.

3. Choose the folder and whether to install for yourself or for all users.

</Steps>

The portable `Skribly-Portable-x64.exe` runs without installation and does not update itself.

</TabItem>
<TabItem label="Linux">

AppImage, for any distribution:

```bash
chmod +x Skribly-linux-x86_64.AppImage
./Skribly-linux-x86_64.AppImage
```

On distributions without FUSE 2, install `libfuse2` (Ubuntu 22.04+: `sudo apt install libfuse2`, Ubuntu 24.04: `libfuse2t64`), or run the AppImage with `--appimage-extract-and-run`.

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

## Install an agent

Skribly runs the agents you already have. Install at least one, for example:

```bash
npm install -g @anthropic-ai/claude-code
```

The full list with install commands is in [Supported agents](/agent/agents/). After installing a new agent, click **Settings → Agents → Detect again**.

An app launched from Finder, the Dock or the applications menu gets a stripped-down `PATH`. On macOS and Linux, Skribly reads the environment from your login shell once at startup and adds `~/.local/bin`, `/opt/homebrew/bin` and `/usr/local/bin`, so agents installed with nvm, Homebrew or `npm -g` are visible just like in your terminal.

## First steps

<Steps>

1. **The tour.** About a second after the first launch, an animated tour moves the cursor through 15 places in the app. Use `→` and `←` to step, **Pause** to stop and `Esc` to close. Replay it from **Help → Start tour** or the command palette.

2. **Add a project.** Click the project switcher in the top bar and choose **Add project…**, or **Clone from a link…** to start from a remote repository. Skribly detects the base branch, the checks, the dev URL and a branch pattern; adjust them in **Settings → Projects**.

3. **Connect a tracker.** **Settings → Task trackers → Add tracker** → choose the tracker, enter the URL and token → **Save and check**.

4. **Run an agent.** **Agents** (`⌘2`) → **New session** → pick an agent and the working copy (or a new worktree) → **Run**.

5. **Start a task.** **Tasks** → pick one → **Start with an agent**. The agent reads `TASK.md`, proposes a plan and waits for your "ok".

6. **Commit.** **Code & git** (`⌘4`) → stage files → **Suggest** → **Commit**. No AI trailers.

</Steps>

Skribly lives in the system tray, with **Show Skribly** and **Quit** in its menu. Only one instance runs at a time; a second launch brings up the existing window.
