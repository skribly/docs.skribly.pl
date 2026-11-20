# Zgodność

> Które wersje pakietów Skribly do siebie pasują: każdy pociąg wydań z wersjami core, ui i agent-skills, najstarsze Skribly Agent i Skribly Tracker, które z nim działają, oraz na czym go przetestowano.

Wspólne pakiety Skribly wychodzą jako pociągi wydań: jeden pociąg na wersję minor, więc pakiety z tego samego pociągu na pewno ze sobą działają. Poprawka w ramach pociągu podnosi tylko pakiet, który poprawia, jako 0.3.1, 0.3.2 i tak dalej. Ta strona wymienia każdy pociąg, od najnowszego.

## Pociągi

<CompatTable />

## Jak czytać tabelę

- **Pociąg** prowadzi do opisu pociągu, jeśli istnieje: co wnosi i jak zaktualizować.
- **@skribly/core**, **@skribly/ui** i **agent-skills** to wersje, które należą do pociągu. „Późniejszy pociąg” znaczy, że pakiet nie jedzie tym pociągiem i zostaje przy wersji z pociągu przed nim.
- **Skribly Agent, co najmniej** i **Skribly Tracker, co najmniej** to najstarsze wersje aplikacji, które działają z pociągiem.
- **Node.js**, **Astro**, **React** i **Next.js** to wersje, na których pociąg przetestowano.

## Skąd są dane

Tabela powstaje z `compat.json` w repozytorium core, jedynej listy tego, które wersje należą do którego pociągu. Ten sam plik podaje commit zestawu dla stron, którego używa każda strona. Każdy nowy pociąg dopisuje tam najpierw swój wiersz.

## Powiązane strony

- [Pociąg wydań 0.3](/pl/releases/train-0-3/)
- [Lista zmian](/pl/changelog/)
- [Architektura](/pl/overview/architecture/)
