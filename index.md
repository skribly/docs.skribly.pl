# Skribly documentation

> How to install and use Skribly Agent, agent-skills and Skribly Tracker, and how the shared Core and UI packages tie them together.

export const core = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/></svg>';

export const tools = [
	{
		title: 'Skribly Agent',
		product: 'agent',
		href: '/agent/',
		text: 'A desktop app for macOS, Windows and Linux that runs Claude Code, Codex, Cursor Agent, Gemini CLI and nine more side by side, with tracker tasks, git, pipelines, skills, audits and a preview browser in one window.',
	},
	{
		title: 'agent-skills',
		product: 'skills',
		href: '/skills/',
		text: '35 portable skills that take a coding agent from a tracker ticket to a reviewed, tested commit, with one installer for eight agents and no runtime dependencies.',
	},
	{
		title: 'Skribly Tracker',
		product: 'tracker',
		href: '/tracker/',
		text: 'An issue tracker in the browser: projects, issues with keys such as AGENT-12, Kanban boards, comments, time logs, signed webhooks and a REST API designed for agents.',
	},
	{
		title: 'Core',
		icon: core,
		href: '/core/',
		text: '@skribly/core holds the shared contracts, the Tracker client and webhook signing.',
	},
	{
		title: 'UI',
		product: 'ui',
		href: '/ui/',
		text: '@skribly/ui holds the design tokens, the components and the site kit that give every app and every Skribly site the same look. Every component is live at ui.skribly.pl.',
	},
];

Skribly is a non-commercial learning project built in spare time by five developers from Rzeszów, Poland. It connects an issue tracker, a desktop environment for AI coding agents and a shared library of agent skills into one workflow. Each tool also works on its own.

:::note[Status]
The product repositories are private for now and will open step by step. Pages that describe something not built yet say **planned**.
:::

## The tools

<div class="not-content sk-docs-tools">
	<FeatureGrid columns={2} label="The tools" items={tools} />
</div>

<Band pattern="dots" product="docs" labelledby="see-it-in-action">

<h2 id="see-it-in-action">See it in action</h2>

Short recordings of this site, with captions. They play while on screen and stop when animations are turned off.

<div class="not-content sk-docs-clips">
	<Clip id="docs-search" />
	<Clip id="docs-navigation" />
</div>

</Band>

## Where to go next

<CardGrid>
	<LinkCard title="Getting started" description="Install the tools and go from a task to your first commit made with an agent." href="/getting-started/" />
	<LinkCard title="Tracker REST API" description="Personal access tokens, endpoints and the generated OpenAPI reference." href="/tracker/rest-api/" />
	<LinkCard title="Skills catalog" description="Every skill, what it does and when to use it." href="/skills/catalog/" />
	<LinkCard title="Keyboard shortcuts" description="The Ctrl+B prefix, the command palette and every view shortcut of Skribly Agent." href="/agent/shortcuts/" />
</CardGrid>
