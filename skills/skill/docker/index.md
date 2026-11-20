# Docker and compose review

> The docker skill of agent-skills: reviews and fixes Dockerfiles and docker compose files, covering multi-stage builds, pinned base images, non-root users, layer caching and small images, healthchecks, secrets kept out of images, and data stores not exposed on all interfaces, using hadolint when installed plus built-in checks.

`docker` is a skill of [agent-skills](/skills/). This page is generated from its `SKILL.md`.

| | |
| --- | --- |
| Command | `/docker`, `$docker` in Codex |
| Group | Audits |
| Stacks | `docker` |
| Release | agent-skills 0.3.0 |
| Source | [skills/docker/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/docker/SKILL.md) |

## What it does

Reviews and fixes Dockerfiles and docker compose files, covering multi-stage builds, pinned base images, non-root users, layer caching and small images, healthchecks, secrets kept out of images, and data stores not exposed on all interfaces, using hadolint when installed plus built-in checks.

## When to use it

Ask for it in your own words, for example:

- “review the Dockerfile”
- “make the image smaller”
- “the Docker build is slow”
- “dockerize this app”
- “fix docker compose”
- “container runs as root”

## How to call it

| Agent | Call |
| --- | --- |
| Claude Code | `/docker` |
| Codex CLI | `$docker`, or pick it from `/skills` |
| Cursor | `/docker` in Agent chat |
| Gemini CLI | `/docker` |
| OpenCode | `/docker` |
| GitHub Copilot | `/docker` in VS Code chat or Copilot CLI |
| Devin | `/docker` |

Every agent also picks the skill by itself when your request matches its description.

## Scripts

The skill hands the mechanical work to these Node scripts with no dependencies, which print a few lines instead of raw output:

- `docker-lint.mjs`: `node scripts/docker-lint.mjs [files...] [--json]`
- `stack.mjs`: `node scripts/stack.mjs [dir] [--json]`

## Where it fits

It fits projects with the stack tag `docker`, and `agent-skills init` installs it only there.
`agent-skills project disable docker` removes it from a project, `project enable docker` brings it back. More: [Train the skills for your project](/skills/train/).

## Token cost

| Listing | Run | Budget | On demand |
| ---: | ---: | ---: | ---: |
| 120 | 910 | 1050 | 0 |

Estimated as characters / 4. What the columns mean: [Token cost](/skills/token-cost/).
