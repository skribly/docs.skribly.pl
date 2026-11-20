# Słownik reguł

> Reguły agent-skills jako dane - jedno zdanie, waga i publiczne źródło każdej reguły - wypisywane dla plików, nad którymi pracujesz, i sprawdzane wiersz po wierszu przez agent-skills rules --check.

:::note[W przygotowaniu]
Słownik reguł i polecenia z tej strony wejdą do następnego wydania; wydany agent-skills 0.3.0 jeszcze ich nie ma.
:::

Słownik reguł przechowuje typowe błędy każdej technologii jako dane, jeden plik na regułę: Node, PHP, Python, Go, Java, bazy danych i migracje, aplikacje mobilne, Docker, CI, infrastruktura, dane i ML, bezpieczeństwo, testy i dokumentacja oraz frameworki Next.js, React, Vue, Angular, Express, Tailwind CSS, Laravel, Django, Pydantic, SQLAlchemy, Ruby on Rails, Spring Boot, .NET, Kubernetes i Flutter. Skill `framework-guide` czyta reguły frameworka, nad którym pracujesz; poniższe polecenia czytają je bez skilla.

Każda reguła ma:

| Pole | Co zawiera |
| --- | --- |
| Id | stałą nazwę, na przykład `nextjs/async-request-apis` |
| Reguła | jedno zdanie |
| Waga | `critical`, `high`, `medium` albo `low` |
| Wersje | wersje frameworka, których dotyczy, na przykład `15+` (opcjonalnie) |
| Dotyczy | plików, których dotyczy, zapisanych jak wzorce `.gitignore` |
| Źródło | tytuł i adres publicznej strony, która to mówi |
| Dlaczego, poprawka, przykłady | krótki powód, poprawkę oraz zły i dobry przykład |
| Sprawdzenie | wzorzec jednego wiersza, który znajduje zły przypadek, albo powód, dla którego wiersz go nie pokaże |

## Wypisz reguły

```bash
agent-skills rules --tech docker
agent-skills rules --files src/app/page.tsx,Dockerfile --severity high
agent-skills rules --tech go --json
```

Jeden wiersz na regułę: id, waga, reguła i jej źródło. `--tech` zostawia podane technologie, `--files` reguły dotyczące tych plików, a `--severity` ten poziom i wyższe, od najpoważniejszych.

## Sprawdź projekt

```bash
agent-skills rules --check
agent-skills rules --check --project ../shop --tech nextjs,react
agent-skills rules --check --files src/app/page.tsx --json
```

`--check` uruchamia reguły ze wzorcem wiersza na całym projekcie albo na podanych plikach i wypisuje jeden wiersz na znalezisko: `plik:wiersz id-reguły (waga, wersje): reguła adres-źródła`. Kod wyjścia to 1, gdy jest znalezisko, więc polecenie pasuje do kroku CI. Wzorzec ma najwyżej 200 znaków i musi pasować do złego przykładu swojej reguły, a do dobrego nie; niektóre wzorce działają tylko w plikach, które importują framework, więc kod innej biblioteki nie jest zgłaszany.

Polecenie czyta tylko tekst: pomija pliki powyżej 1 MB, pliki binarne, wiersze dłuższe niż 1000 znaków, foldery zależności i budowania, takie jak `node_modules`, `vendor`, `dist` i `.venv`, oraz ścieżki poza projektem, i zatrzymuje się po 20 000 plików i 1000 znaleziskach. Nic w projekcie się nie zmienia.

Reguła, której zły przypadek to czegoś brak, który obejmuje kilka wierszy albo zależy od historii (brak `USER` w Dockerfile, `await` przed użyciem `context`, migracja, która już się wykonała), nie ma wzorca. Mówi w swoich danych dlaczego, a ostatni wiersz raportu liczy te reguły tylko do przeglądu: przeczytasz je przez `agent-skills rules`.

## Czytaj dalej

- [Wszystkie reguły](/pl/skills/all-rules/): każda reguła według technologii, z wagą i źródłem.
- [Narzędzia dla agentów](/pl/skills/tooling/): pozostałe polecenia CLI.
- [`framework-guide`](/pl/skills/skill/framework-guide/): skill, który czyta te reguły, także w następnym wydaniu.
