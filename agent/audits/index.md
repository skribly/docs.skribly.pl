# Audits

> Run security, accessibility and SEO audits in Skribly Agent, read the score and findings, and send selected findings to an agent to fix.

The **Audits** view checks your project for security problems (secrets, risky code, vulnerable dependencies) and a running page for accessibility and SEO. Each audit gives a score and a list of findings. You select findings and send them to an agent as one task, with a short list instead of the whole report.

![A security audit with a score of 40 out of 100: eleven findings sorted by severity, the first a leaked GitHub token shown masked, with its fix on the right](../../../assets/screens/agent-audits.webp)

## Open the view

- Click **Audits** in the activity bar, or press `⌘7` (on Windows and Linux `Ctrl+7`), or
- open the command palette (`⌘K`) and choose **Audits**.

The view has three tabs: **Security**, **Accessibility (WCAG)** and **SEO**. A number next to a tab name is the count of findings of its last report.

## How to run an audit

<Steps>

1. Select a project in the top bar.

2. Choose a tab. **Security** reads the files of the project. **Accessibility (WCAG)** and **SEO** read a running page.

3. For the two page tabs, check the **Page URL**. It starts as the **Dev-mode app URL** of the project, or the page open in the [Browser](/agent/browser/), or `http://localhost:5173`. The audit button in the Browser toolbar brings the current page here.

4. Press **Run audit**, or `Enter` in the URL field.

5. Wait for the report. Each tab keeps its own report.

</Steps>

| Tab | What it checks |
| --- | --- |
| **Security** | Secrets in tracked files, risky code patterns, and known vulnerabilities of npm, PyPI and Composer dependencies from OSV.dev. Only files tracked by git are scanned, so a project outside git gives no findings |
| **Accessibility (WCAG)** | The page, in a hidden window, with axe-core. WCAG 2.2 AA is the target of the checks, and axe-core finds only part of the problems |
| **SEO** | Title, description, headings, canonical link, Open Graph, structured data, images without `alt`, `robots.txt`, sitemap and broken internal links |

Every rule has its own page: see [Audit rules](/agent/audit-rules/). Dependency checks send only package names and versions to OSV.dev, never code. See [Data and network](/agent/data-and-network/).

## How to read a report

The top of the report shows the score from 0 to 100, the target, the number of findings, the time, and the statistics of the audit (for example the number of files and dependencies). A report starts at 100 and every finding lowers it by its severity. The numbers are always written beside the ring.

- The severity buttons filter the list. Each shows how many findings it holds.
- The table is sorted from the most severe. A row shows the severity, the issue with its rule name, and the place: a file and line, or the page.
- Click a row to see the details on the right: the description, the **Fix** and, for a page, the element.
- **Open file** opens the file in the editor you chose in **Settings**. **Documentation** appears when the finding has a link, for example to the OSV entry.

## How to send findings to an agent

<Steps>

1. Tick the findings in the first column. The box in the header, **Select all**, ticks all the findings of the current filter. For one finding use **Fix this** in its details.

2. Press **Fix with an agent (N)**. The dialog **Fix N findings** opens.

3. Choose the target: **New session** of an installed agent (the default agent is chosen) or a running session of the list.

4. Press **Send**. The app switches to the Agents view, on that session.

</Steps>

The agent gets a concise list of up to 40 findings: for each one its severity, title, place, the first line of the description and the proposed fix. It is asked to fix them from the most severe, to check that nothing breaks, to list what it fixed and what it did not, and to make no commit. A new session is titled **Fixes** and the kind of the audit. The message is written in Polish.

## Tips

<Aside type="tip">
An audit of a local dev server always reports the rule `https`. That is expected: a dev address has no HTTPS.
</Aside>

- Run the three audits at once with the built-in pipeline **Three audits in parallel**, see [Pipelines](/agent/pipelines/).
- Fix the critical findings first. A leaked key must be revoked, not only removed from the code.
- axe-core does not replace a manual check: test keyboard use, focus order and alternative text by hand.

## Related pages

<CardGrid>
  <LinkCard title="Audit rules" href="/agent/audit-rules/" description="Every rule of the three audits, with its severity." />
  <LinkCard title="Pipelines" href="/agent/pipelines/" description="Run three audits in parallel with different agents." />
  <LinkCard title="Accessibility" href="/agent/accessibility/" description="Accessibility of Skribly Agent itself." />
  <LinkCard title="Data and network" href="/agent/data-and-network/" description="What audits send, and where." />
</CardGrid>
