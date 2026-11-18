# Pipelines

> A pipeline in Skribly Agent runs several agents on one goal, stage by stage, passing results through handoff.md; build your own, run it and follow it on a graph.

A pipeline is several agents, from different vendors if you like, working toward one goal. Steps of one stage run in parallel, later stages wait for earlier ones, and results pass through a file, `handoff.md`, instead of through you. Use a pipeline when the work has a natural order: plan, do, review.

![The Pipelines view: built-in pipelines and recent runs on the left, a running Plan, execution and review pipeline on a graph, and its steps on the right](../../../assets/screens/agent-pipelines.webp)

## Open the view

- Click **Pipelines** in the activity bar, or press `⌘5` (on Windows and Linux `Ctrl+5`), or
- open the command palette (`⌘K`) and choose **Pipelines**.

The left side lists the pipelines and **Recent runs**, the middle shows the graph, and the right side shows the steps of the run or the details of the step you click.

## How a run works

1. The app creates `.skribly/runs/<id>/handoff.md` in the project, with a header and your goal. `.skribly/` is added to `.git/info/exclude`.
2. For each stage, in order, it starts all steps of the stage at once. A step is a headless agent in the project folder. It gets the role and the prompt of the step, the goal of the whole job, the current `handoff.md` (the last 16,000 characters) and a request for a concise answer, because the answer goes to the next agent.
3. After a stage, the answers of its steps are appended to `handoff.md` as sections named `## Etap N: <role> (<agent>)`.
4. If a step fails (an error and no answer), the run ends as failed and the steps that did not start are skipped.
5. **Stop** interrupts the working agents and the run ends as stopped.

A step marked **modifies files** may edit: Claude runs with `acceptEdits`, Codex with `--full-auto`. Without it the step is read-only: Claude in `plan` mode, Codex with `--sandbox read-only`. An agent gets only the result of the earlier steps, not their whole conversation. That saves tokens and lets you combine vendors.

## Built-in pipelines

| Pipeline | Steps |
| --- | --- |
| **Plan → execution → review** | 1: Planner (Claude, read-only) → 2: Implementer (Codex, modifies files, runs the project checks) → 3: Reviewer (Claude, read-only: reviews `git diff` and proposes a commit message) |
| **Three audits in parallel** | 1: Security (Claude), accessibility against WCAG 2.2 AA (Gemini) and SEO (Codex) in parallel → 2: Coordinator (Claude) merges the results into one fix plan |
| **Fix, tests, documentation** | 1: Fix (Codex) → 2: Tests (Claude, runs only the tests the change affects) → 3: Documentation (Gemini updates `.docs/` and the README) |

The built-in pipelines are listed until you save your own. From the first save the list comes from `pipelines.json` in the app's data directory.

## How to run a pipeline

<Steps>

1. Select a project in the top bar, and a pipeline in the list.

2. Type the goal in the field, for example "Add report export to CSV with filters like in the table view".

3. Press **Run**, or `Enter` in the field.

4. Follow the graph. A node shows the state of its step. Click a node to see the prompt and the result of the step on the right.

5. When the run is over, press **Show handoff.md** to see the handoff file in the file manager.

</Steps>

**Run** is off while the goal is empty, no project is selected, or an agent of the pipeline is missing. The message **Not detected: …** over the graph names the agent: install it in **Settings → Agents** or change the agent of the step. While a run works, **Run** becomes **Stop**. Click a run under **Recent runs** to see it again. The last 30 runs are kept (`runs.json` in the data directory), and the list shows 12.

## How to create or edit a pipeline

<Steps>

1. Press the plus in the head of the list (**New pipeline**), or select a pipeline and press **Duplicate** or **Edit**.

2. Type a **Name** and a **Description**.

3. Add steps with **Add step**. Each step has the fields below.

4. Press **Save**. **Save** is off without a name or without a step.

</Steps>

| Field | Meaning |
| --- | --- |
| **Stage** | A number from 1. Steps with the same number run in parallel |
| **Role** | For example "Planner" or "Tests". It goes into the prompt as the role of the agent |
| **Agent** | The agent that does the step |
| **modifies files** | Whether the agent may edit files |
| Prompt | What the agent should do |
| **Delete step** | Removes the step |

On the graph every step of a stage connects to every step of the next stage. **Delete** in the toolbar removes the whole pipeline.

## How to arrange the graph

- Drag a node to move it. Drag an edge of the node to resize it. Positions and sizes snap to a small grid.
- With a node focused (`Tab`), the arrow keys move it by one grid step and `Shift` with the arrows resizes it. `Enter` shows the step's details. Double click expands the whole prompt of the node.
- The graph controls zoom in, zoom out and fit the graph to the window.
- **Reset layout** puts every node back in its computed place. It is off until you have moved something.

Moving or resizing a node only changes where it is drawn. It does not change the stage or the order of the run. The layout is saved with the pipeline, so it survives a restart.

## Tips

<Aside type="caution">
Steps that modify files in the same stage work in the same folder and can get in each other's way. Put them in separate stages.
</Aside>

- End with a reviewer or a coordinator step that gathers the results into one list.
- Agents without a JSON mode answer in plain text. That is enough for the handoff.
- Pipelines send the agent's prompt to the vendor of that agent, like any session. Read [Data and network](/agent/data-and-network/) for what the app itself sends.

## Related pages

<CardGrid>
  <LinkCard title="Audits" href="/agent/audits/" description="Security, WCAG and SEO audits, with Fix with an agent." />
  <LinkCard title="Supported agents" href="/agent/agents/" description="Which agents have a headless mode." />
  <LinkCard title="Terminals and sessions" href="/agent/terminals/" description="Sessions, chat mode and handing off work." />
</CardGrid>
