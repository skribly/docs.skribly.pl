# Autorzy

> Skribly tworzą Dawid Olko, Piotr Smoła, Konrad Pluta, Michał Pilecki i Mateusz Olko — pięciu programistów z Rzeszowa w Polsce.

Pięć osób z Rzeszowa w Polsce tworzy narzędzia, z których sami korzystamy. Skribly to projekt po godzinach, niekomercyjny.

export const people = [
	{
		name: 'Dawid Olko',
		role: 'Współtwórca, Fullstack / AI Developer',
		photo: '/img/authors/dawid-olko.webp',
		links: [
			['Strona', 'https://dawidolko.pl'],
			['GitHub', 'https://github.com/dawidolko'],
			['LinkedIn', 'https://www.linkedin.com/in/dawidolko/'],
		],
	},
	{
		name: 'Piotr Smoła',
		role: 'Współtwórca, Frontend Developer / Fullstack',
		photo: '/img/authors/piotr-smola.webp',
		links: [
			['GitHub', 'https://github.com/PiotrSmola'],
			['LinkedIn', 'https://www.linkedin.com/in/piotr-smo%C5%82a-181aab344/'],
		],
	},
	{
		name: 'Konrad Pluta',
		role: 'Współtwórca, AI Developer',
		photo: '/img/authors/konrad-pluta.webp',
		links: [
			['GitHub', 'https://github.com/g00staw'],
			['LinkedIn', 'https://www.linkedin.com/in/konrad-k-pluta/'],
		],
	},
	{
		name: 'Michał Pilecki',
		role: 'Współtwórca, AI Developer',
		photo: '/img/authors/michal-pilecki.webp',
		links: [
			['GitHub', 'https://github.com/Prawy126'],
			['LinkedIn', 'https://www.linkedin.com/in/micha%C5%82-pilecki-09b6a2337/'],
		],
	},
	{
		name: 'Mateusz Olko',
		role: 'Współtwórca, AI Developer',
		photo: '/img/authors/mateusz-olko.webp',
		links: [
			['Portfolio', 'https://olkomateusz.github.io/portfolio/'],
			['GitHub', 'https://github.com/OlkoMateusz'],
		],
	},
];

## Zespół

<div class="sk-authors not-content">
	{people.map((person) => (
		<article class="sk-card">
			<img src={person.photo} alt="" width="72" height="72" loading="lazy" decoding="async" />
			<h3>{person.name}</h3>
			<p class="sk-role">{person.role}</p>
			<p>
				{person.links.map(([label, href], index) => (
					<>
						{index > 0 && ' · '}
						<a class="sk-link" href={href} aria-label={`${person.name}, ${label}`}>{label}</a>
					</>
				))}
			</p>
		</article>
	))}
</div>

## Jak pracujemy

Każde narzędzie Skribly powstaje tak samo: jest udokumentowane, dostępne, przetestowane i ma działać także po demo. Commity trzymają się Conventional Commits, po angielsku i bez stopek współautorstwa AI. Agenci programujący, którzy pracują nad repozytoriami Skribly, używają wspólnych [agent-skills](/pl/skills/) do przepływu zadań, commitów i przeglądów.

## Kontakt

[contact@skribly.pl](mailto:contact@skribly.pl) · [skribly.pl](https://skribly.pl)
