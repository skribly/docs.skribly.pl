# Docker

> The Docker view of Skribly Agent lists containers by compose project, runs compose commands, shows logs, images and volumes, and alerts you to failures.

The **Docker** view shows the containers of the Docker engine on this computer, grouped by compose project, with the compose files of the open project on top. You start, restart and stop containers, read their logs, open a shell, and see images and volumes. A watcher in the background raises an alert when a container crashes, runs out of memory, fails its health check or restarts in a loop.

![The Docker view: the compose file of the project with Up, Restart, Pull and Down, and the containers of three compose projects with their state, ports and actions](../../../assets/screens/agent-docker.webp)

## Open the view

- Click **Docker** in the activity bar on the left, or press `⌘9`, or
- open the command palette (`⌘K`) and choose **Docker**.

On Windows and Linux use `Ctrl` in place of `⌘`.

If Docker is not found, the view says **Docker not found** and lists where it looked (the `docker` command in `PATH`, and the folders of Docker Desktop, OrbStack, colima and Rancher). If the engine is not running, it says **Docker is not running**, shows the command that starts it and checks again every few seconds.

## The tabs

| Tab | What it shows |
| --- | --- |
| **Containers** | Every container, grouped by compose project, with the compose files of the open project above |
| **Images** | Images with size and age. **Remove dangling** removes untagged images, **Remove unused** removes every image no container uses. Both ask first |
| **Volumes** | Volumes with their driver and mount point |
| **Alerts** | The recent alerts, with the number in the tab. **Clear** empties the list. A click on an alert opens its container |

## How to run a compose project

When the open project has a compose file, a bar **Compose in project** lists each file and its compose project name.

<Steps>

1. Press **Up** to start the project (`docker compose up -d`).

2. Use **Restart** and **Pull** when you need them, and `ps` to list the project's containers.

3. Press **Down** to stop and remove the project's containers. It asks first. Volumes stay.

</Steps>

A group header in the container list has its own **Up**, **Restart**, **Stop** and **Down** for that compose project.

## How to work with a container

Each row shows the state, the health, the image, the ports and, after **Show CPU/RAM**, the processor and memory use. A port with a link opens in the [Browser](/agent/browser/). A container that crashed shows its exit code.

| Button | What it does |
| --- | --- |
| **Open shell (docker exec)** | Opens a terminal with a shell inside a running container |
| **Logs** | Shows the last 100, 200, 500 or 2000 lines. **Follow in terminal** keeps following them |
| **Pause** and **Resume** | Pause and resume the container |
| **Restart**, **Stop**, **Run** | Control the container |
| **Remove container** | Removes it. Data outside volumes is lost. It asks first |
| **Fix with agent** | Shown for a container with a problem. It sends the logs and a summary of `inspect` to an agent and asks for a diagnosis |

Above the list a search field matches containers, images and projects, and the filter has **All**, **Running** and **Problems**, each with a count. **Show CPU/RAM** reads the use once, and the button then reads **Refresh CPU/RAM**.

The list reloads when the engine reports a change, and every 30 seconds while the view is open.

## Alerts and the status bar

The watcher listens to the events of Docker. It raises an alert in the app, and a system notification, for these four things:

| Alert | When |
| --- | --- |
| **Container crash** | A container ended with a code other than 0, and not because you stopped it |
| **Out of memory (OOM)** | The kernel killed a process in a container that went over its memory limit |
| **Failed health check** | A container became unhealthy |
| **Restart loop** | At least 3 restarts within 2 minutes |

The status bar at the bottom shows `Docker OK` when all containers are fine, or the number of containers with a problem, in red. A click opens this view. A click on a system notification opens the view on that container.

Since the watcher uses the `docker events` stream, it no longer runs `docker ps` every 15 seconds while the stream is alive, also while the window is hidden. The list reloads when the stream reports a change, and while the window is hidden only once you come back. The 15 second check is only a fallback while monitoring is on and the stream is down.

## Settings → Docker

| Option | What it does | Default |
| --- | --- | --- |
| **Container monitoring** | Runs the watcher. Off: Skribly does not run `docker events` or poll the engine in the background, and the Docker view still works | On |
| Container crash | Alert on this event | On |
| Out of memory (OOM) | Alert on this event | On |
| Failed health check | Alert on this event | On |
| Restart loop | Alert on this event | On |
| **Context** | The Docker context from `docker context ls` that Skribly talks to (Docker Desktop, OrbStack, colima or a remote server). It does not change the context of your terminal | The current Docker context |
| **DOCKER_HOST** | The address of the engine: `unix://`, `tcp://`, `ssh://` or `npipe://`. It wins over the context | Empty, the context is used |

The four alert switches are greyed out while monitoring is off. If system notifications are off in **Editor & notifications**, alerts appear only in the app. When more than one context exists, a picker for the context also sits in the view's header.

## Tips

<Aside type="caution">
**Remove unused** deletes every image that no container uses, and you will have to pull them again. **Down** removes containers but keeps volumes.
</Aside>

- Use **Fix with agent** first when a container crashes: the agent gets the logs and the `inspect` summary without you copying them.
- Point **DOCKER_HOST** at a remote engine only over `ssh://` or a network you trust.

## Related pages

<CardGrid>
  <LinkCard title="Browser" href="/agent/browser/" description="Open a published port in the app's browser." />
  <LinkCard title="Agents and sessions" href="/agent/sessions/" description="Where the agent from Fix with agent works." />
  <LinkCard title="Resources" href="/agent/resources/" description="Memory, processor and ports of every pane." />
  <LinkCard title="Settings" href="/agent/settings/" description="All the settings of Skribly Agent." />
</CardGrid>
