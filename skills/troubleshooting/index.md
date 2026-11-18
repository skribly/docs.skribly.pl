# Troubleshooting agent-skills

> Fixes for common agent-skills problems - agents that do not see skills, install conflicts, Windows links, tracker errors, the commit hook and optional tools.

## The agent does not see the skills

- Run `agent-skills doctor`: it shows which agents were detected and where skills are installed.
- Restart the agent or start a new chat; most agents scan skill folders at startup.
- Check the location for your agent in [Supported agents](/skills/agents/). Older versions may need `--format rules`.
- Codex lists a skill twice: old copies sit in the deprecated `~/.codex/skills`. `doctor` warns about them; remove them.
- Cursor, OpenCode or Copilot list a skill twice in a project: they also read `.claude/skills`. Install Claude at user scope and the others at project scope, or the reverse.

## `agent-skills: command not found`

Run `npm link` in the repository, call `node ~/agent-skills/cli/agent-skills.mjs`, or link `bin/agent-skills` into a folder on `PATH` (`ln -s ~/agent-skills/bin/agent-skills ~/.local/bin/`). On Windows use `bin\agent-skills.cmd`.

## "exists and was not installed by agent-skills"

A file or folder with the same name was already there, so it was left alone. Compare it, then rerun with `--force`; the old one is moved to `<path>.bak-agent-skills`.

## `sync` or `uninstall` skips a copy I edited

On purpose: hand-edited copies are never overwritten or deleted. Keep your edit, or use `--force` to replace or remove it.

## Links on Windows

User-scope installs create folder junctions, which need no administrator rights or developer mode. If a junction cannot be created, for example on some network drives, install with `--copy` and run `agent-skills sync` after updates.

## WSL and Windows at the same time

Each environment has its own home folder and agents. Install in both, from one clone if you like, running `agent-skills install` inside each environment.

## Tracker problems

- `access denied (HTTP 401/403)`: a wrong or expired token, or a missing scope. `agent-skills tasks check` tests every tracker.
- `cannot resolve` or `no connection`: VPN or URL. `TLS problem`: set `NODE_EXTRA_CA_CERTS` to your company's CA certificate.
- `ENG-12 could be Jira or Linear` (or Skribly Tracker): add `Tracker: jira` (or `linear`, `skribly`) to `.tasks/workflow.md`, set `AGENT_SKILLS_TRACKER`, or pass `--tracker`.
- GitHub without a token: public issues work at 60 requests an hour; private ones need `GITHUB_TOKEN` or `gh auth login`.

## PageSpeed Insights says HTTP 429

The keyless quota is shared and often used up. Create an API key for the PageSpeed Insights API and set `PSI_API_KEY`, or measure locally with `--local`, which needs Chrome.

## Playwright or axe-core is missing

`browser-check`, `wcag-audit` and `e2e-tests` look for Playwright in the project, then globally. Install it only if you want it: `npm i -D playwright axe-core && npx playwright install chromium`. Without it the skills fall back to manual checklists and say so.

## The commit-msg hook did not run

- Run `agent-skills hooks status` in that repository. Hooks are per repository.
- husky, lefthook and similar tools set `core.hooksPath`; add the printed line to their `commit-msg` hook.
- `node` must be on `PATH` for git. GUI clients sometimes have a minimal `PATH`.

## Does it send my code anywhere?

No. The CLI talks only to your tracker (when you fetch, or explicitly post), to OSV.dev or PageSpeed Insights when you run those audits, and to package registries through your own package manager. Nothing else is collected or uploaded.

## How do I use it in a team?

Install at project scope (`--project .`) and commit `.claude/skills` and `.agents/skills`, so everyone gets the same skills. `.tasks/` stays personal. Put shared conventions (base branch, commit pattern, check commands) in `AGENTS.md`, and each developer's `.tasks/workflow.md` is proposed from them. Each developer installs the commit hook in their own clone.
