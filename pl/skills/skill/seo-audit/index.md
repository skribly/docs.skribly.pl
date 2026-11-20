# Techniczny audyt SEO

> Skill seo-audit z agent-skills: sprawdza techniczne SEO stron: tytuł i opis meta, układ nagłówków, canonical, meta robots i robots.txt, sitemap.xml, hreflang, Open Graph, dane strukturalne (JSON-LD), teksty alternatywne obrazów, linki i podstawy wydajności, takie jak zasoby blokujące renderowanie i ryzyko przesunięć układu.

`seo-audit` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/seo-audit`, `$seo-audit` w Codexie |
| Grupa | Audyty |
| Stosy | `web` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/seo-audit/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/seo-audit/SKILL.md) |

## Co robi

Sprawdza techniczne SEO stron: tytuł i opis meta, układ nagłówków, canonical, meta robots i `robots.txt`, `sitemap.xml`, hreflang, Open Graph, dane strukturalne (JSON-LD), teksty alternatywne obrazów, linki i podstawy wydajności, takie jak zasoby blokujące renderowanie i ryzyko przesunięć układu. Zwraca konkretne poprawki według ważności.

## Kiedy go używać

Przed startem lub migracją stron i gdy strona nie trafia do indeksu wyszukiwarki.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/seo-audit` |
| Codex CLI | `$seo-audit` albo wybór z `/skills` |
| Cursor | `/seo-audit` w czacie Agent |
| Gemini CLI | `/seo-audit` |
| OpenCode | `/seo-audit` |
| GitHub Copilot | `/seo-audit` w czacie VS Code albo w Copilot CLI |
| Devin | `/seo-audit` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `seo.mjs`: `node scripts/seo.mjs <url> [more urls] [--no-robots] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `web` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable seo-audit` usuwa go z projektu, a `project enable seo-audit` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 124 | 733 | 850 | 642 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
