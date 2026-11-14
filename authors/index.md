# Authors

> Skribly is built by Dawid Olko, Piotr Smoła, Konrad Pluta, Michał Pilecki and Mateusz Olko, five developers from Rzeszów, Poland.

Five people from Rzeszów, Poland, building tools we use ourselves. Skribly is a spare-time project, and it is not commercial.

export const people = [
	{
		name: 'Dawid Olko',
		role: 'Co-creator, Fullstack / AI Developer',
		photo: '/img/authors/dawid-olko.webp',
		links: [
			['Website', 'https://dawidolko.pl'],
			['GitHub', 'https://github.com/dawidolko'],
			['LinkedIn', 'https://www.linkedin.com/in/dawidolko/'],
		],
	},
	{
		name: 'Piotr Smoła',
		role: 'Co-creator, Frontend Developer / Fullstack',
		photo: '/img/authors/piotr-smola.webp',
		links: [
			['GitHub', 'https://github.com/PiotrSmola'],
			['LinkedIn', 'https://www.linkedin.com/in/piotr-smo%C5%82a-181aab344/'],
		],
	},
	{
		name: 'Konrad Pluta',
		role: 'Co-creator, AI Developer',
		photo: '/img/authors/konrad-pluta.webp',
		links: [
			['GitHub', 'https://github.com/g00staw'],
			['LinkedIn', 'https://www.linkedin.com/in/konrad-k-pluta/'],
		],
	},
	{
		name: 'Michał Pilecki',
		role: 'Co-creator, AI Developer',
		photo: '/img/authors/michal-pilecki.webp',
		links: [
			['GitHub', 'https://github.com/Prawy126'],
			['LinkedIn', 'https://www.linkedin.com/in/micha%C5%82-pilecki-09b6a2337/'],
		],
	},
	{
		name: 'Mateusz Olko',
		role: 'Co-creator, AI Developer',
		photo: '/img/authors/mateusz-olko.webp',
		links: [
			['Portfolio', 'https://olkomateusz.github.io/portfolio/'],
			['GitHub', 'https://github.com/OlkoMateusz'],
		],
	},
];

## The team

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
						<a class="sk-link" href={href} aria-label={`${person.name} on ${label}`}>{label}</a>
					</>
				))}
			</p>
		</article>
	))}
</div>

## How we work

Every Skribly tool is built the same way: documented, accessible, tested, and meant to keep running after the demo. Commits follow Conventional Commits in English, without AI co-author trailers. The coding agents that work on the Skribly repositories use the shared [agent-skills](/skills/) for the task workflow, commits and reviews.

## Contact

[contact@skribly.pl](mailto:contact@skribly.pl) · [skribly.pl](https://skribly.pl)
