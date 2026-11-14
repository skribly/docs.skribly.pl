# Dokumentacja Skribly

> Jak zainstalować i używać Skribly Agent, agent-skills oraz Skribly Tracker i jak wspólne pakiety Core i UI je łączą.

export const core = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/></svg>';

export const tools = [
	{
		title: 'Skribly Agent',
		product: 'agent',
		href: '/pl/agent/',
		text: 'Aplikacja na macOS, Windows i Linux, która uruchamia obok siebie Claude Code, Codex, Cursor Agent, Gemini CLI i dziewięciu kolejnych agentów, a w jednym oknie daje zadania z trackera, git, potoki, skille, audyty i przeglądarkę podglądu.',
	},
	{
		title: 'agent-skills',
		product: 'skills',
		href: '/pl/skills/',
		text: '35 przenośnych skilli, które prowadzą agenta programującego od zgłoszenia w trackerze do przejrzanego i przetestowanego commita, z jednym instalatorem dla ośmiu agentów i bez zależności w czasie działania.',
	},
	{
		title: 'Skribly Tracker',
		product: 'tracker',
		href: '/pl/tracker/',
		text: 'Tracker zgłoszeń w przeglądarce: projekty, zgłoszenia z kluczami takimi jak AGENT-12, tablice Kanban, komentarze, rejestry czasu, podpisane webhooki i REST API zaprojektowane dla agentów.',
	},
	{
		title: 'Core',
		icon: core,
		href: '/pl/core/',
		text: '@skribly/core zawiera wspólne kontrakty, klienta Trackera i podpisywanie webhooków.',
	},
	{
		title: 'UI',
		product: 'ui',
		href: '/pl/ui/',
		text: '@skribly/ui zawiera tokeny projektowe, komponenty i site kit, dzięki którym każda aplikacja i każda witryna Skribly wygląda tak samo. Każdy komponent działa na żywo pod ui.skribly.pl.',
	},
];

Skribly to niekomercyjny projekt edukacyjny tworzony po godzinach przez pięciu programistów z Rzeszowa. Łączy tracker zgłoszeń, środowisko na komputer dla agentów programujących AI i wspólną bibliotekę skilli dla agentów w jeden przepływ pracy. Każde narzędzie działa też samodzielnie.

:::note[Status]
Repozytoria produktów są na razie prywatne i będą otwierane stopniowo. Strony opisujące elementy, które nie zostały jeszcze zbudowane, oznaczamy jako **planowane**.
:::

## Narzędzia

<div class="not-content sk-docs-tools">
	<FeatureGrid columns={2} label="Narzędzia" items={tools} />
</div>

<Band pattern="dots" product="docs" labelledby="zobacz-w-dzialaniu">

<h2 id="zobacz-w-dzialaniu">Zobacz w działaniu</h2>

Krótkie nagrania tej witryny z napisami. Odtwarzają się, gdy są widoczne na ekranie, i zatrzymują się, gdy wyłączysz animacje.

<div class="not-content sk-docs-clips">
	<Clip id="docs-search" />
	<Clip id="docs-navigation" />
</div>

</Band>

## Co dalej

<CardGrid>
	<LinkCard title="Pierwsze kroki" description="Zainstaluj narzędzia i przejdź od zadania do pierwszego commita utworzonego z pomocą agenta." href="/pl/getting-started/" />
	<LinkCard title="REST API Trackera" description="Osobiste tokeny dostępu, endpointy i wygenerowana dokumentacja OpenAPI." href="/pl/tracker/rest-api/" />
	<LinkCard title="Katalog skilli" description="Każdy skill, jego działanie i sytuacje, w których warto go użyć." href="/pl/skills/catalog/" />
	<LinkCard title="Skróty klawiszowe" description="Prefiks Ctrl+B, paleta poleceń i wszystkie skróty widoków w Skribly Agent." href="/pl/agent/shortcuts/" />
</CardGrid>
