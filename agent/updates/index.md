# Updates

> How Skribly Agent updates itself on macOS, Windows and Linux, how versions are numbered, which files each release has, and what happened to the former name.

Skribly Agent updates itself from GitHub Releases. It checks at startup and every four hours, downloads the new version in the background and installs it on the next restart.

## How auto-update works

| When | What happens |
| --- | --- |
| 8 seconds after startup | The first check, in a built app with **Update automatically** on |
| Every 4 hours | Another check |
| New version available | Background download; the status bar shows "Downloading &lt;version&gt; N%" |
| Downloaded | The status bar shows "Version &lt;version&gt; ready — restart". Click it to install and restart, or the update installs when you quit. |
| Error | A message in **Settings → Updates** |

| System | What updates |
| --- | --- |
| macOS | The `-mac.zip` package. The app is not signed, so Skribly verifies the package (SHA-512) and swaps it in itself. |
| Windows | The NSIS installer. The portable build does not update itself. |
| Linux | The AppImage. `.deb` and `.rpm` update by installing the new version. |

**Settings → Updates** shows the version, system and architecture, a **Check for updates** button, the download progress, the **Update automatically** switch and the data directory.

## Versions

Versions look like `1.0.<build number>`, with release tags like `v1.0.37`. Every push to `main` builds a new version for macOS, Windows and Linux into one GitHub Release, with notes grouped from the commits and a `SHA256SUMS.txt`. Installed apps only see a release once it has files for every system.

## Release files

| System | Files |
| --- | --- |
| macOS | `Skribly-<version>-arm64.dmg`, `Skribly-<version>-x64.dmg`, plus `-mac.zip` packages for auto-update |
| Windows | `Skribly-Setup-<version>.exe` (one installer for x64 and ARM64), `Skribly-Portable-<version>-x64.exe` |
| Linux | `Skribly-<version>-x86_64.AppImage`, `Skribly-<version>-amd64.deb`, `Skribly-<version>-x86_64.rpm` |

Each release also has stable copies without the version in the name, such as `Skribly-mac-arm64.dmg` and `Skribly-Setup.exe`, so a link to the latest release always gets the newest build.

## Upgrading from the former name

The app used to be called **Skryba Agent Workflow**. Updating to Skribly Agent keeps everything:

| What | After the update |
| --- | --- |
| Data directory | An install that already uses the old folder keeps it, so settings, tokens, sessions and sign-ins stay. New installs use `Skribly Agent`. |
| Project folders | New work goes to `.skribly/`. Tasks already in `.skryba/` stay there and are still listed and resumed. |
| Home folder | `~/.skribly/control.json` is the new location. Worktrees in `~/.skryba/worktrees` stay valid. |
| Command and MCP | `skryba` keeps working next to `skribly`. MCP tools are now `skribly_*`; calls to `skryba_*` still work. |
| Environment | `SKRIBLY_*` variables come first and `SKRYBA_*` still work as a fallback. |
| Saved choices | Themes, tracker accounts, the link scheme, commit hooks and preferences carry over. |

On macOS an updated app keeps its old location in **Applications**; only a fresh install from the `.dmg` uses the new name. If you install that way, remove the old app; the data directory stays in use either way.
