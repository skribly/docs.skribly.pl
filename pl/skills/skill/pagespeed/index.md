# PageSpeed i Web Vitals

> Skill pagespeed z agent-skills: mierzy i poprawia Core Web Vitals (LCP, CLS, INP, TBT) przez PageSpeed Insights dla publicznych adresów albo lokalny Lighthouse dla localhost, skraca raport do najważniejszych możliwości poprawy na telefonie i komputerze i prowadzi pętlę poprawka i pomiar, z poprawkami dla Next.js, Vite, Django i Laravel.

`pagespeed` to skill z [agent-skills](/pl/skills/). Ta strona powstaje z jego pliku `SKILL.md`.

| | |
| --- | --- |
| Polecenie | `/pagespeed`, `$pagespeed` w Codexie |
| Grupa | Audyty |
| Stosy | `web` |
| Wydanie | agent-skills 0.3.0 |
| Źródło | [skills/pagespeed/SKILL.md](https://github.com/skribly/agent-skills/blob/main/skills/pagespeed/SKILL.md) |

## Co robi

Mierzy i poprawia Core Web Vitals (LCP, CLS, INP, TBT) przez PageSpeed Insights dla publicznych adresów albo lokalny Lighthouse dla localhost, skraca raport do najważniejszych możliwości poprawy na telefonie i komputerze i prowadzi pętlę poprawka i pomiar, z poprawkami dla Next.js, Vite, Django i Laravel.

## Kiedy go używać

Gdy strona jest wolna, wynik Lighthouse spadł albo przed wydaniem trzeba sprawdzić budżet wydajności.

Możesz też opisać zadanie własnymi słowami, po polsku: agent dobiera skill po jego opisie.

## Jak go wywołać

| Agent | Wywołanie |
| --- | --- |
| Claude Code | `/pagespeed` |
| Codex CLI | `$pagespeed` albo wybór z `/skills` |
| Cursor | `/pagespeed` w czacie Agent |
| Gemini CLI | `/pagespeed` |
| OpenCode | `/pagespeed` |
| GitHub Copilot | `/pagespeed` w czacie VS Code albo w Copilot CLI |
| Devin | `/pagespeed` |

Każdy agent wybiera też skill sam, gdy Twoja prośba pasuje do jego opisu.

## Skrypty

Pracę mechaniczną skill oddaje tym skryptom Node bez zależności, które wypisują kilka wierszy zamiast surowego wyniku:

- `psi.mjs`: `node scripts/psi.mjs <url> [--strategy mobile|desktop|both] [--local] [--file report.json] [--top 8] [--json]`

## Gdzie pasuje

Pasuje do projektów ze znacznikiem stosu `web` i tylko tam instaluje go `agent-skills init`.
`agent-skills project disable pagespeed` usuwa go z projektu, a `project enable pagespeed` przywraca. Więcej: [Dopasuj skille do projektu](/pl/skills/train/).

## Koszt w tokenach

| Na liście | Uruchomienie | Budżet | Na żądanie |
| ---: | ---: | ---: | ---: |
| 118 | 845 | 1000 | 954 |

Szacunek: liczba znaków / 4. Co znaczą kolumny: [Koszt w tokenach](/pl/skills/token-cost/).
