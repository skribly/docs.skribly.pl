# Ustawienia

> Co kontroluje każda sekcja Ustawień w Skribly Agent: od wyglądu i dostępności po trackery, agentów, sesje, przeglądarkę, Dockera i aktualizacje.

Otwórz **Ustawienia** z paska bocznego lub palety poleceń. Ustawienia są zapisywane na tym urządzeniu w katalogu danych aplikacji, a tokeny są szyfrowane za pomocą systemowego pęku kluczy.

| Sekcja | Co kontroluje |
| --- | --- |
| **Wygląd i samouczek** | Tryb (systemowy, dzienny, nocny), motywy dzienny i nocny, rozmiar tekstu oraz samouczek aplikacji |
| **Dostępność** | Rozmiar tekstu interfejsu, wysoki kontrast, ograniczenie ruchu, podkreślanie linków i wyraźny wskaźnik fokusu. Zobacz [Dostępność](/pl/agent/accessibility/). |
| **Trackery zadań** | Konta Skribly Tracker, Jira, Redmine, GitHub, GitLab i Linear: adres URL, token, **Zapisz i sprawdź**, **Testuj** |
| **Konta Git** | Logowania do GitHub, GitLab, Bitbucket, Gitea i Azure DevOps, używane do pokazywania aktywności commitów i do klonowania prywatnych repozytoriów |
| **Agenci** | Wykrywanie zainstalowanych agentów, polecenia instalacji, domyślny agent i agenci niestandardowi |
| **Projekty** | Dla każdego projektu: gałąź bazowa, polecenia sprawdzające, adres URL środowiska deweloperskiego, wzorzec gałęzi, wzorzec commita i język; **Wykryj** uruchamia wykrywanie od nowa |
| **Sesje i sterowanie** | Przywracanie sesji po restarcie, katalog worktree, maszyny SSH, lokalne API sterowania, polecenie `skribly` i skill `skribly` dla agentów |
| **Edytor i powiadomienia** | Opcje edytora, powiadomienia systemowe i język interfejsu |
| **Repozytorium skilli** | Adres repozytorium agent-skills, domyślnie `github.com/skribly/agent-skills`, albo własnego forka |
| **Przeglądarka dla agentów** | Udostępnianie przeglądarki Skribly przez Chrome DevTools Protocol oraz jej port (1024–65535, domyślnie `9333`) |
| **Docker** | Monitorowanie kontenerów, alerty i kontekst Dockera |
| **Aktualizacje** | Wersja, system i architektura, **Sprawdź aktualizacje**, **Aktualizuj automatycznie** oraz katalog danych |

## Szczegóły projektów

Podczas dodawania projektu Skribly wykrywa używane w nim konwencje:

| Ustawienie | Sposób wykrywania |
| --- | --- |
| Gałąź bazowa | Pierwsza istniejąca spośród `develop`, `main`, `master`; jeśli żadna nie istnieje, pierwsza lokalna gałąź |
| Sprawdzenia | `npm run lint`, `typecheck` i `test`, jeśli występują w `package.json`, `composer test`, `python manage.py test` oraz `pytest`, jeśli jest tylko plik `pyproject.toml` |
| Adres URL środowiska deweloperskiego | Port podany przez `--port` w skrypcie `dev` lub `start`; w przeciwnym razie `5173` dla Vite i `3000` dla pozostałych narzędzi |
| Wzorzec gałęzi | `feature/{key}-{slug}` |
| Wzorzec commita i język | Puste i automatyczne, czyli wykrywane na podstawie historii przy każdej sugestii |

Usunięcie projektu z listy nie wpływa na jego pliki.

## Konta trackerów

Możesz mieć kilka kont, również kilka tego samego typu. Edycja konta bez podania tokenu zachowuje poprzedni token. Usunięcie konta usuwa również jego zaszyfrowany token; pliki zadań w projektach pozostają bez zmian.

| Tracker | Adres | Token |
| --- | --- | --- |
| Skribly Tracker | Twoja instancja, lokalnie `http://localhost:8100` | **Profil → Tokeny API**, odczyt i zapis |
| Jira Cloud | `https://your-team.atlassian.net` oraz adres e-mail konta | id.atlassian.com → Security → API tokens |
| Jira Server / Data Center | Twój serwer, pole adresu e-mail pozostaw puste | Profile → Personal Access Tokens |
| Redmine | Adres strony głównej, bez `/issues` | My account → API access key; REST API musi być włączone |
| GitHub | Puste dla github.com; Enterprise: `https://github.example.com/api/v3` | Token fine-grained z dostępem do Issues |
| GitLab | Puste dla gitlab.com albo adres Twojej instancji | Token z zakresem `read_api` |
| Linear | Może pozostać puste | Settings → Security & access → Personal API keys |

## Katalog danych

**Ustawienia → Aktualizacje → Katalog danych → Pokaż** otwiera folder zawierający ustawienia, układ, sesje, zaszyfrowane sekrety i pobrane motywy. Instalacja zaktualizowana ze starej nazwy **Skryba Agent Workflow** nadal korzysta ze starego folderu, więc nic nie ginie.
