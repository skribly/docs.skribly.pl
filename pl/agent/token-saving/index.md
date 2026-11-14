# Oszczędzanie tokenów

> Jak agent-skills ogranicza tekst przechodzący przez model — wczytywanie na żądanie, skrypty do pracy mechanicznej, pytanie przed kosztownymi akcjami, tanie wznawianie i zasady pracy — ze zmierzonymi liczbami.

Limity użycia zależą od tego, ile tekstu przechodzi przez model. agent-skills ogranicza to na pięć sposobów. Poniższe liczby autorzy agent-skills zmierzyli na prawdziwych projektach.

## Wczytywanie na żądanie

Agent trzyma w kontekście tylko nazwę i opis każdego skilla. Pełny `SKILL.md` wczytuje się, gdy skill startuje, a pliki pomocnicze dopiero wtedy, gdy potrzebuje ich dany krok. Każdy `SKILL.md` ma najwyżej 110 linii, a pilnuje tego sprawdzenie w CI.

## Mechaniczną pracę robią skrypty

Pobieraniem, parsowaniem, liczeniem i filtrowaniem zajmują się skrypty, które wypisują tylko to, czego potrzebuje model. Rozmiary są w bajtach, a cztery bajty to w przybliżeniu jeden token.

| Zadanie | Surowe dane | Wynik skryptu | Oszczędność |
| --- | ---: | ---: | ---: |
| Raport Lighthouse | 455 534 | 754 | 99,8% |
| Log 86 zaliczonych testów | 27 098 | 86 | 99,7% |
| `npm audit --json` w aplikacji z 300 pakietami | 20 555 | 2 126 | 90% |
| `git log -60` do poznania stylu commitów | 7 415 | 739 | 90% |
| Zgłoszenie z GitHuba z komentarzami | 8 178 | 1 018 | 88% |
| Log SQL jednego żądania z N+1 | 4 204 | 490 | 88% |
| `package.json` do znalezienia poleceń testów i lintera | 2 122 | 275 | 87% |

Ponowne pobranie zadania pokazuje tylko nowe komentarze i zmienione pola. Nieudane testy wypisują bloki z błędami z `file:line` i podsumowaniem, nigdy pełny log.

## Pytanie przed kosztownymi akcjami

Zrzut ekranu kosztuje około 1000 do 2000 tokenów, więc `browser-check` najpierw pyta i obejmuje tylko zmieniony element. Lokalny Lighthouse, pełne zestawy testów i testy obciążeniowe są proponowane, a nie uruchamiane po cichu.

## Sesje, które tanio się wznawia

`STATE.md`, mający około 30 linii, przechowuje cel, wykonaną pracę, zmienione pliki, wyniki sprawdzeń, decyzje i jeden konkretny następny krok. Po etapie wyczyść sesję i wznów ją z pliku. To tańsze i dokładniejsze niż ciągnięcie za sobą długiego zapisu rozmowy.

## Zasady pracy

Skill `token-saver` daje wszystkim agentom te same nawyki:

- Najpierw szukaj, potem czytaj, i to zakresy linii.
- Nigdy nie otwieraj plików lockfile ani wyników budowania.
- Używaj krótkich form poleceń, takich jak `git status --short`.
- Edytuj zamiast pisać od nowa.
- W odpowiedziach podawaj wyniki na początku.
- Do szerokich wyszukiwań używaj podagentów z wąskim poleceniem.

## Czytaj dalej

- [Katalog skilli](/pl/skills/catalog/): wszystkie skille.
- [Instalacja agent-skills](/pl/skills/install/): skonfiguruj skille.
- [Funkcje](/pl/agent/features/): wszystkie widoki Skribly Agent według rodzaju pracy.
