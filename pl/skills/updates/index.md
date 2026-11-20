# Aktualizacje

> Jak utrzymać agent-skills na bieżąco - dziś git pull i sync, a w planach polecenie agent-skills update i marketplace'y wtyczek Claude Code, Codexa i Gemini CLI.

agent-skills to repozytorium git. Aktualizacja oznacza pobranie nowszych plików i przekazanie ich przez CLI do każdego miejsca, w którym zainstalowało skille.

## Aktualizacja dziś

```bash
cd ~/agent-skills && git pull && agent-skills sync     # każda zapisana instalacja, w zakresie użytkownika i projektu
agent-skills sync --dry-run                            # co sync by zmienił, bez zmieniania
agent-skills doctor                                    # co jest zainstalowane i gdzie, każdy problem z poprawką
```

- Instalacje w **zakresie użytkownika** to dowiązania symboliczne do repozytorium, więc samo `git pull` aktualizuje skille, które masz; `sync` ponawia każdą zapisaną instalację.
- Instalacje w **zakresie projektu** to kopie, więc zmieniają się dopiero po `sync`. Plik zmieniony ręcznie zostaje, chyba że podasz `--force`; z `--force` najpierw jest przenoszony do `<path>.bak-agent-skills`.
- `sync` ponawia skille, które każda instalacja już ma. Nowy skill dodaje `agent-skills install --skills <name>`, a w projekcie ponowne `agent-skills init`, które dodaje skille pasujące do stosu i zachowuje Twoje wybory z `project disable` i `project enable`.

Każda instalacja jest zapisana w `~/.config/agent-skills/installs.json`, więc `sync` zna każde miejsce do odświeżenia. Potem uruchom agenta ponownie (albo otwórz nowy czat), aby jeszcze raz przeczytał swój folder skilli.

## W planach: `agent-skills update`

:::note[W planach]
Polecenia z tej sekcji są zaplanowane na następne wydanie i jeszcze nie istnieją.
:::

- **Instalacja bez ręcznego klonowania**: `npx github:skribly/agent-skills install --target all`, bez pakietu npm.
- **`agent-skills update`**: pobiera najnowszy tag wydania z repozytorium i uruchamia `sync`, jednym poleceniem.
- **Wydania z tagu**: każda wersja jest publikowana na GitHubie z własnego tagu, razem z listą zmian.

## W planach: marketplace'y wtyczek

Ten sam folder `skills/` zostanie opisany także dla agentów, które same instalują i aktualizują paczki skilli:

| Agent | Planowany manifest | Co daje |
| --- | --- | --- |
| Claude Code | wtyczka i marketplace (`.claude-plugin/`) | dodajesz marketplace raz, a Claude Code aktualizuje paczkę |
| Codex CLI | manifest wtyczki (`.codex-plugin/`) | Codex instaluje i aktualizuje paczkę |
| Gemini CLI | manifest rozszerzenia (`gemini-extension.json`) | Gemini CLI instaluje i aktualizuje rozszerzenie |

Do tego czasu `git pull && agent-skills sync` obsługuje każdego agenta.

## Czytaj dalej

- [Instalacja](/pl/skills/install/): zakres użytkownika czy projektu, Windows, usuwanie wszystkiego.
- [Dopasuj skille do projektu](/pl/skills/train/): `init` i przełączniki projektu.
- [Lista zmian](/pl/changelog/): co się zmieniło w każdym wydaniu.
