# Updates

> How to keep agent-skills current - git pull and sync today, and the planned agent-skills update command and plugin marketplaces of Claude Code, Codex and Gemini CLI.

agent-skills is a git repository. Updating it means getting the newer files and letting the CLI apply them to every place it installed skills.

## Update today

```bash
cd ~/agent-skills && git pull && agent-skills sync     # every recorded install, user and project scope
agent-skills sync --dry-run                            # what sync would change, without changing it
agent-skills doctor                                    # what is installed where, each problem with its fix
```

- **User scope** installs are symlinks to the repository, so `git pull` alone updates the skills you have; `sync` re-applies each recorded install.
- **Project scope** installs are copies, so they change only when `sync` runs. A file you edited by hand is kept unless you pass `--force`; with `--force` it is first moved to `<path>.bak-agent-skills`.
- `sync` re-applies the skills each install already has. A new skill comes with `agent-skills install --skills <name>`, or in a project with `agent-skills init` run again, which adds the skills that fit the stack and keeps your `project disable` and `project enable` choices.

Every install is recorded in `~/.config/agent-skills/installs.json`, so `sync` knows every place to refresh. Restart the agent (or open a new chat) afterwards so it reads its skills folder again.

## Planned: `agent-skills update`

:::note[Planned]
The commands in this section are planned for the next release and do not exist yet.
:::

- **Install without cloning by hand**: `npx github:skribly/agent-skills install --target all`, with no npm package needed.
- **`agent-skills update`**: fetches the newest release tag of the repository and runs `sync`, in one command.
- **Releases on a tag**: each version is published on GitHub from its tag, with its changelog.

## Planned: plugin marketplaces

The same `skills/` folder will also be described for the agents that install and update skills packs themselves:

| Agent | Planned manifest | What it gives you |
| --- | --- | --- |
| Claude Code | a plugin and a marketplace (`.claude-plugin/`) | add the marketplace once; Claude Code updates the pack |
| Codex CLI | a plugin manifest (`.codex-plugin/`) | Codex installs and updates the pack |
| Gemini CLI | an extension manifest (`gemini-extension.json`) | Gemini CLI installs and updates the extension |

Until then, `git pull && agent-skills sync` covers every agent.

## Read next

- [Install](/skills/install/): user scope or project scope, Windows, removing everything.
- [Train the skills for your project](/skills/train/): `init` and the project switches.
- [Changelog](/changelog/): what changed in each release.
