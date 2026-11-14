# Trackery

> Połącz agent-skills z Redmine, Jira, GitHub, GitLab, Linear lub Skribly Tracker i używaj poleceń tasks, które uruchamia skill task.

Skill `task` pobiera zgłoszenia skryptem (`agent-skills tasks`), więc model nie traci tokenów na HTTP, stronicowanie ani ponowne czytanie. Pierwsze pobranie zapisuje `.tasks/<id>/TASK.md`; kolejne wypisują tylko to, co się zmieniło: nowe komentarze, status, zmieniony opis, nowe załączniki.

## Poświadczenia

Umieść je w zmiennych środowiskowych albo w `~/.config/agent-skills/credentials.env` (Windows: `%USERPROFILE%\.config\agent-skills\credentials.env`). Zmienne środowiskowe mają pierwszeństwo przed plikiem. Zacznij od szablonu w repozytorium:

```bash
mkdir -p ~/.config/agent-skills
cp templates/credentials.env.example ~/.config/agent-skills/credentials.env
chmod 600 ~/.config/agent-skills/credentials.env     # doctor warns if others can read it
agent-skills tasks check                             # who am I, per configured tracker
```

Nigdy nie umieszczaj tokenów w repozytorium, w `.tasks/` ani w czacie. Wskaż inny plik przez `AGENT_SKILLS_CREDENTIALS`. W [Skribly Agent](/pl/agent/features/#zadania-i-trackery) sesje dostają te zmienne od aplikacji, więc plik nie jest potrzebny.

## Skribly Tracker

```bash
SKRIBLY_TRACKER_URL=http://localhost:8100   # base URL of the instance
SKRIBLY_TRACKER_TOKEN=...                   # Profile -> API tokens
```

Identyfikatory: `ABC-12` albo adres URL `/issues/ABC-12` na hoście `SKRIBLY_TRACKER_URL`. Klient korzysta z [REST API v1](/pl/tracker/rest-api/); opisy i komentarze są już w Markdown, a załączniki są pobierane tym samym tokenem. „Moje otwarte zadania” to `assignee=me&status=open&sort=-updated`.

Starsze konfiguracje nadal działają: `skryba` jest aliasem identyfikatora trackera `skribly`, a `SKRYBA_TRACKER_URL` i `SKRYBA_TRACKER_TOKEN` są odczytywane, gdy odpowiadająca zmienna `SKRIBLY_TRACKER_*` nie jest ustawiona.

## Redmine

```bash
REDMINE_URL=https://redmine.example.com
REDMINE_API_KEY=...        # My account -> API access key (an admin must enable the REST API)
```

Identyfikatory: `123`, `#123` albo adres URL `/issues/123`. Komentarze to notatki dziennika.

## Jira Cloud

```bash
JIRA_URL=https://your-team.atlassian.net
JIRA_EMAIL=you@example.com
JIRA_API_TOKEN=...         # id.atlassian.com -> Security -> API tokens
```

## Jira Server / Data Center

```bash
JIRA_URL=https://jira.example.com
JIRA_PAT=...               # Profile -> Personal Access Tokens
```

Identyfikatory: `ABC-123` albo adres URL `/browse/ABC-123`. Znaczniki wiki są zamieniane na Markdown.

## GitHub

```bash
GITHUB_TOKEN=...           # fine-grained token: Issues read (write only to post comments)
GITHUB_API_URL=https://github.example.com/api/v3   # GitHub Enterprise Server only
```

Bez tokena używane jest zalogowane GitHub CLI (`gh auth login`), a publiczne zgłoszenia działają anonimowo przy limicie 60 żądań na godzinę. Identyfikatory: `7` (repozytorium zdalnego `origin`), `owner/repo#7` albo adres URL zgłoszenia.

## GitLab

```bash
GITLAB_TOKEN=...           # read_api (api to post comments)
GITLAB_URL=https://gitlab.example.com   # default https://gitlab.com
```

Identyfikatory: `7`, `group/sub/project#7` albo adres URL `/-/issues/7`. Notatki systemowe są pomijane.

## Linear

```bash
LINEAR_API_KEY=lin_api_...  # Settings -> Security & access -> Personal API keys
```

Identyfikatory: `ENG-12` albo adres URL `linear.app/.../issue/ENG-12/...`.

## Do którego trackera odnosi się identyfikator?

Kolejność: `--tracker`, wiersz `Tracker:` w `.tasks/workflow.md`, `AGENT_SKILLS_TRACKER`, a w końcu ten tracker, który jest skonfigurowany. Dla samych liczb wygrywa skonfigurowany Redmine; GitHub lub GitLab wygrywają, gdy wskazuje na nie zdalne `origin`. `ABC-12` może oznaczać Jira, Linear lub Skribly Tracker: rozstrzygają te same trzy ustawienia, a gdy ich nie ma, używany jest jedyny skonfigurowany tracker; jeśli jest kilka, zostaniesz zapytany. Raz pobrane zadanie pamięta swój tracker.

## Polecenia

```bash
agent-skills tasks fetch 123                 # TASK.md; on re-fetch only the changes
agent-skills tasks attachments 123 [name]    # images by default, --all for every file
agent-skills tasks list                      # my open issues in every configured tracker (--json)
agent-skills tasks list --local              # tasks in .tasks/ with status, branch and next step
agent-skills tasks comment-draft 123         # create or show .tasks/123/COMMENT.md
agent-skills tasks comment-draft 123 --post --yes    # publish, only after your explicit OK
agent-skills tasks detect                    # git facts used to write .tasks/workflow.md
agent-skills tasks check                     # configuration and token test
```

## Bezpieczeństwo

- Domyślnie tylko do odczytu. Zapis wymaga `--post --yes`, a ten sam tekst nigdy nie jest publikowany dwa razy.
- Tokeny są wysyłane wyłącznie na własny host trackera. Przekierowania na inny host, na przykład do CDN serwującego załącznik, są wykonywane bez poświadczeń.
- Za firmowym proxy, które powoduje błędy TLS, ustaw `NODE_EXTRA_CA_CERTS` na certyfikat CA tego proxy.
