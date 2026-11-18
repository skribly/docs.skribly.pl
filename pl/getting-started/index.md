# Pierwsze kroki

> Wybierz potrzebne narzędzia Skribly, zainstaluj je i przejdź od zadania w trackerze do pierwszego commita wykonanego z agentem.

Każde narzędzie Skribly działa samodzielnie, a najlepiej sprawdzają się razem. Ta strona prowadzi Cię przez cały cykl w około piętnaście minut. Jeśli chcesz tylko jedno narzędzie, przejdź od razu na jego stronę:

- [Skribly Agent](/pl/agent/install/), jeśli chcesz aplikację na komputer, która uruchamia Twoich agentów programujących obok siebie.
- [agent-skills](/pl/skills/install/), jeśli już korzystasz z Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot lub Devin i chcesz, by trzymały się jednego przepływu pracy.
- [Skribly Tracker](/pl/tracker/self-hosting/), jeśli chcesz tracker zgłoszeń, którego API jest zaprojektowane pod agentów.

:::note[Dostęp]
Repozytoria są na razie prywatne, więc klonowanie i pobieranie wymagają dostępu do organizacji Skribly na GitHubie. Publiczne pobieranie jest planowane na moment otwarcia repozytoriów.
:::

## Czego potrzebujesz

| Co | Po co |
| --- | --- |
| `git` w Twoim `PATH` | Gałęzie, worktree, commity i pobieranie skilli |
| Co najmniej jeden agent programujący, na przykład `npm install -g @anthropic-ai/claude-code` | Skribly uruchamia agentów, których już masz, z ich własnymi logowaniami |
| Node.js 20 lub nowszy | Tylko dla agent-skills bez Skribly Agent; aplikacja ma własne środowisko uruchomieniowe |
| Docker | Tylko do własnego hostingu Skribly Tracker |

## Cały cykl

<Steps>

1. **Postaw tracker (opcjonalnie).** Uruchom Skribly Tracker w Dockerze, jak opisano w [Własny hosting z Dockerem](/pl/tracker/self-hosting/), i utwórz osobisty token dostępu w **Profil i tokeny API → Tokeny API**. Możesz pominąć ten krok i użyć zamiast niego Jira, Redmine, GitHub, GitLab lub Linear.

2. **Zainstaluj Skribly Agent.** Pobierz plik dla swojego systemu i zainstaluj go, jak w [Zainstaluj Skribly Agent](/pl/agent/install/). Pierwsze uruchomienie otwiera krótki przewodnik; możesz go odtworzyć z menu **Pomoc**.

3. **Dodaj projekt.** Otwórz przełącznik projektów na górnym pasku i wybierz **Dodaj projekt…**. Skribly wykrywa gałąź bazową, polecenia sprawdzające i adres URL środowiska deweloperskiego w repozytorium.

4. **Połącz tracker.** Wejdź w **Ustawienia → Trackery zadań → Dodaj tracker**, wybierz tracker, wklej adres URL i token, a potem kliknij **Zapisz i sprawdź**. Skribly Tracker jest domyślny; lokalnie jego adres to `http://localhost:8100`.

5. **Zainstaluj skille.** Otwórz **Skille**, pobierz repozytorium agent-skills i zainstaluj wybrane skille dla każdego agenta w projekcie. Bez aplikacji użyj CLI, jak w [Zainstaluj agent-skills](/pl/skills/install/).

6. **Zacznij zadanie.** Otwórz **Zadania**, wybierz zadanie i kliknij **Zacznij z agentem**. Skribly zapisuje zadanie w `.skribly/tasks/<KEY>/TASK.md`, tworzy `STATE.md` oraz gałąź według Twojego wzorca (lub worktree) i uruchamia agenta z gotowym promptem. Agent czyta zadanie, proponuje plan i czeka na Twoje „ok”.

7. **Przegląd i commit.** Otwórz **Kod i git**, dodaj pliki do indeksu, kliknij **Zaproponuj**, a potem **Commit**. Wiadomość wynika z historii Twojego repozytorium i nigdy nie dostaje stopek AI.

8. **Zamknij zadanie.** Dodaj komentarz, zmień status i zarejestruj czas w panelu zadania, nie wychodząc z aplikacji.

</Steps>

## Bez aplikacji

Ten sam cykl działa w terminalu każdego agenta z agent-skills:

```bash
git clone https://github.com/skribly/agent-skills.git ~/agent-skills
cd ~/agent-skills && npm link
agent-skills install --target all
agent-skills config attribution off
agent-skills doctor
```

Potem w projekcie uruchom `/task 123` w Claude Code, `$task 123` w Codexie albo `/task 123` w pozostałych agentach. Skill `task` pobiera zgłoszenie, zapisuje `.tasks/123/TASK.md`, planuje, po Twojej zgodzie tworzy gałąź, implementuje etapami i po Twoim „ok” robi commit.

## Zobacz to w działaniu

Każda strona ma to samo wyszukiwanie i ten sam sposób poruszania się: <kbd>Ctrl</kbd> <kbd>K</kbd> lub <kbd>/</kbd> otwiera wyszukiwanie, nagłówek prowadzi do każdego narzędzia, pasek boczny do jego stron, a **Na tej stronie** do jego sekcji.

<Clip id="docs-search" />

<Clip id="docs-navigation" />

## Kolejne kroki

- [Funkcje Skribly Agent](/pl/agent/features/): potoki, audyty, przeglądarka podglądu i CLI.
- [Katalog skilli](/pl/skills/catalog/): każdy skill i kiedy go używać.
- [REST API Trackera](/pl/tracker/rest-api/): steruj trackerem z własnych skryptów.
