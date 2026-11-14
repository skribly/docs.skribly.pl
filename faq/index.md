# FAQ

> Short answers to common questions about Skribly - what it costs, where the code is, which agents and trackers it supports, and what leaves your machine.

## What is Skribly?

A family of tools for planning work and building software with AI coding agents: [Skribly Agent](/agent/), [agent-skills](/skills/) and [Skribly Tracker](/tracker/), with shared [Core](/core/) and [UI](/ui/) packages. See [Ecosystem architecture](/overview/architecture/).

## Is it commercial?

No. Skribly is a non-commercial learning project built in spare time by five developers from Rzeszów, Poland. See [Authors](/authors/).

## Where is the source code?

The repositories are private for now and will open step by step. The code is MIT-licensed.

## Do I need all the tools?

No. agent-skills works in any repository with any of its eight agents. Skribly Agent works with Jira, Redmine, GitHub, GitLab and Linear as well as Skribly Tracker. Skribly Tracker's API works with any HTTP client.

## Which coding agents are supported?

Skribly Agent runs 13: Claude Code, Codex CLI, Cursor Agent, Gemini CLI, OpenCode, Copilot CLI, Aider, Amp, Factory Droid, Qwen Code, Goose, Crush and Kimi CLI, plus your own commands. agent-skills installs skills for 8: Claude Code, Codex CLI, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot and Devin. See [Supported agents](/agent/agents/) and [agents for skills](/skills/agents/).

## Which trackers are supported?

Skribly Tracker, Jira Cloud and Server/Data Center, Redmine, GitHub Issues, GitLab and Linear, in both Skribly Agent and agent-skills.

## Do I need an account?

No. Skribly Agent and agent-skills need no Skribly account. Your agents use their own logins and API keys. Skribly Tracker has its own accounts, on your own install.

## Does anything leave my machine?

Skribly Agent sends no telemetry. It connects only to the services you use through it: your trackers, OSV.dev for dependency audits, Open VSX for themes, GitHub for updates and skills, and the pages you open or audit. Your coding agents talk to their own vendors, as they do without Skribly. See [Security](/security/).

## Why do commits never have `Co-Authored-By` trailers?

Because commits should look like yours. Skribly Agent and agent-skills write messages in your repository's style and strip AI trailers with a `commit-msg` hook, including from commits agents make in their own terminals. See [Commits without AI trailers](/skills/commits/).

## Why does macOS or Windows warn me when I install Skribly Agent?

The installers are not signed yet. See [Install Skribly Agent](/agent/install/) for the one-time steps.

## Can I run agents on a server?

Yes. Add the machine in **Settings → Sessions & control → SSH machines** and pick it in **New session**. The agent must be installed on the server. See [SSH machines](/agent/terminals/#ssh-machines).

## Does Skribly Agent keep sessions running after I quit?

No. Quitting ends the terminal processes. The layout comes back, and agents that support it resume their conversation natively. See [Resume after restart](/agent/terminals/#resume-after-restart).

## Can agents read this documentation?

Yes. [`/llms.txt`](https://docs.skribly.pl/llms.txt) lists the documentation for language models, with a full and an abridged single-file version.

## How do I report a bug or a security problem?

Security problems and accessibility barriers go to [contact@skribly.pl](mailto:contact@skribly.pl). See [Security](/security/).
