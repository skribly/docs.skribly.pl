# Skribly Tracker

> Tracker zgłoszeń w ekosystemie Skribly — przestrzenie, projekty, zgłoszenia, przepływy pracy, role, tablice, komentarze i rejestry czasu, z REST API zaprojektowanym dla agentów programujących.

**Skribly Tracker** planuje pracę, którą realizuje reszta Skribly: projekty, zgłoszenia z kluczami takimi jak `AGENT-12`, tablice Kanban, komentarze i rejestry czasu. Działa w przeglądarce, a jego REST API powstało tak samo dla agentów programujących, jak dla ludzi.

![Tablica Kanban przykładowego projektu z czterema kolumnami: To do, In progress, Review i Done](../../../../assets/screens/tracker-board.webp)

:::note[Stan]
Pierwsze wydanie, 0.1. Interfejs w przeglądarce, REST API v1 z osobistymi tokenami dostępu, podpisane webhooki, stos Dockera i tracker `skribly` w agent-skills działają już dziś. Wydana wersja działa na PHP 8.4 i Laravel 12 z MySQL 8.4; planowane jest przeniesienie jej na wspólny stos Node.js z tym samym API.
:::

## Podstawowe pojęcia

| Pojęcie | Co to jest |
| --- | --- |
| **Przestrzeń** | Najwyższy poziom, który zawiera projekty i osoby |
| **Projekt** | Zbiór zgłoszeń z krótkim kluczem, takim jak `AGENT` lub `WEB`, własnym przepływem pracy, etykietami i członkami |
| **Zadanie** | Jednostka pracy z kluczem złożonym z klucza projektu i numeru, na przykład `AGENT-12`. Ma typ, status, priorytet, etykiety, osobę przypisaną, zgłaszającego, szacunek, termin, zgłoszenie nadrzędne i podzadania. |
| **Typ zgłoszenia** | `task`, `bug` lub `feature` |
| **Priorytet** | `lowest`, `low`, `medium`, `high` lub `urgent` |
| **Status** | Kolumna przepływu pracy projektu. Domyślnie: *To do, In progress, Review, Done*. |
| **Kategoria statusu** | Każdy status należy do kategorii `todo`, `in_progress` lub `done`. „Otwarte” oznacza zgłoszenie, które nie jest zrobione. |
| **Komentarz** | Tekst w Markdown przy zgłoszeniu |
| **Wpis czasu** | Godziny zarejestrowane przy zgłoszeniu, z datą, komentarzem i czynnością: `development`, `review`, `testing`, `design`, `meeting` lub `other` |
| **Osoba obserwująca** | Ktoś, kto śledzi zgłoszenie, choć nie jest do niego przypisany |
| **Załącznik** | Plik dołączony do zgłoszenia, domyślnie do 10 MB |
| **Dziennik aktywności** | Każda zmiana zgłoszenia, z informacją, kto ją zrobił i kiedy |

## Przepływ pracy

Każdy projekt ma własny przepływ pracy w **Projekt → Ustawienia → Przepływ pracy**. Administratorzy mogą zmieniać nazwy i kolejność statusów, dodawać nowe i przypisywać każdemu kategorię. Zgłoszeniu można nadać dowolny status jego projektu; nie ma ustalonych przejść.

## Role

| Rola | Co może robić |
| --- | --- |
| **Administrator** | Wszystko, a do tego projekty, przepływy pracy, osoby i webhooki |
| **Członek zespołu** | Tworzyć zgłoszenia i pracować nad nimi: edytować, komentować, przypisywać, zmieniać status, rejestrować czas |
| **Obserwator** | Tylko odczyt |

Tokeny API działają z rolą właściciela i dodatkowo można je ograniczyć do odczytu. Zobacz [Osobiste tokeny dostępu](/pl/tracker/tokens/).

## Widoki

| Widok | Co pokazuje |
| --- | --- |
| **Pulpit** | Twoje otwarte zgłoszenia, obserwowane zgłoszenia, projekty i ostatnia aktywność |
| **Tablica** | Tablica Kanban z przeciąganiem kart między kolumnami przepływu pracy projektu. Z klawiatury otwórz zgłoszenie i tam zmień jego status. |
| **Lista** | Filtry, wyszukiwanie i sortowanie, takie same jak w API |
| **Zadanie** | Opis Markdown, podzadania, komentarze, rejestr czasu, załączniki i historia |
| **Profil** | Język, motyw i tokeny API |

Interfejs jest po polsku i po angielsku, z jasnym i ciemnym motywem, który podąża za systemem i przełącza się z górnego paska, oraz z panelem dostępności na każdej stronie (rozmiar tekstu, kontrast, czcionki i ruch). Celem jest WCAG 2.2 AA.

## Połącz pozostałe narzędzia

### Skribly Agent

Skribly Tracker jest domyślnym trackerem Skribly Agent. Dodaj konto Skribly Tracker z adresem i tokenem do odczytu i zapisu. Zadania przypisane do Ciebie pojawiają się w aplikacji, która może komentować, zmieniać status, przypisywać i rejestrować czas. Zobacz [Osobiste tokeny dostępu](/pl/tracker/tokens/).

### agent-skills

Skill `task` czyta ten tracker tak samo jak każdy inny. Wpisz adres i token do `~/.config/agent-skills/credentials.env`:

```bash
SKRIBLY_TRACKER_URL=http://localhost:8100
SKRIBLY_TRACKER_TOKEN=...
```

Potem uruchom `agent-skills tasks check` oraz `/task AGENT-12` w swoim agencie. Zobacz [Trackery](/pl/skills/trackers/#skribly-tracker).

## Z myślą o agentach

- REST API odwzorowuje jedno wywołanie na jedną metodę klienta trackera w Skribly Agent i na skill `task` z agent-skills. Zobacz [odwzorowanie](/pl/tracker/rest-api/#mapowanie-na-skribly-agent).
- Klucze zgłoszeń nie rozróżniają wielkości liter, a początkowy `#` jest ignorowany, więc agent może wkleić to, co przeczytał.
- Opisy i komentarze są w Markdown i wracają dokładnie tak, jak je zapisano.
- `updated_since` pozwala klientowi tanio odpytywać o zmiany (polling).
- Podpisane [webhooki](/pl/tracker/webhooks/) informują dowolną usługę o zmianach w zgłoszeniach.

## Czytaj dalej

- [Własny hosting z Dockerem](/pl/tracker/self-hosting/)
- [Konfiguracja](/pl/tracker/configuration/)
- [Osobiste tokeny dostępu](/pl/tracker/tokens/)
- [Przewodnik po REST API](/pl/tracker/rest-api/) i wygenerowana [dokumentacja API](/pl/tracker/api/)
- [Webhooki i podpisywanie](/pl/tracker/webhooks/)
