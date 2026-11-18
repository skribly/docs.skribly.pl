# Terminale

> Panele powłoki w Skribly Agent, terminal na dole widoku Kod i maszyny SSH, z krótkimi odsyłaczami do wznawiania, rozsyłania, przekazywania pracy i panelu agenta.

Terminal w Skribly Agent to panel, który uruchamia powłokę albo agenta. Terminale żyją w głównym procesie aplikacji, więc zmiana widoku albo karty ani przeładowanie okna ich nie przerywa. Ponownie otwarty panel odtwarza swoje ostatnie wyjście. Ta strona obejmuje zwykłą powłokę, terminal widoku Kod i maszyny SSH; agenci i czat są na stronie [Agenci i sesje](/pl/agent/sessions/).

## Panele powłoki

Wybierz **Terminal** w **Nowa sesja**, by dostać zwykłą powłokę. Otwiera powłokę logowania w folderze projektu lub worktree, który wybrałeś. Podział z panelu, `Ctrl+B v` lub `Ctrl+B -`, też uruchamia powłokę w folderze tego panelu. Panel powłoki nie powiadamia Cię i nie ma go w [skrzynce uwagi](/pl/agent/inbox/). Jeśli uruchomisz w nim agenta ręcznie, na przykład `codex`, aplikacja go rozpozna i nada panelowi awatar oraz reguły stanu agenta.

Podziały, karty i powiększanie są na stronie [Obszary robocze](/pl/agent/workspaces/). Panele powłoki są zapisywane z układem; po restarcie startują jako świeża powłoka w tym samym folderze.

## Terminal w widoku Kod

Widok Kod ma powłokę w folderze projektu w panelu na dole. Naciśnij ``⌃` `` (Control i grawis), by ją otworzyć, albo przycisk terminala w widoku. Taka powłoka jest jedna na projekt, więc ponowne otwarcie panelu nie uruchamia nowej. Nagłówek panelu ma przyciski **Nowa powłoka** i **Ukryj panel**, a jego krawędź przeciągniesz, by zmienić wysokość. Sesja jest ukryta przed widokiem Agenci i żyje tylko w pamięci. Zobacz [Edytor i pliki](/pl/agent/code/).

## Maszyny SSH

Agent może pracować na serwerze, a jego panel zostaje w Skribly.

<Steps>

1. Otwórz **Ustawienia → Sesje i sterowanie**, sekcja **Maszyny SSH**. Wpisz nazwę, na przykład `ci-server`, i cel `ssh`: `user@host` albo alias z `~/.ssh/config`. Naciśnij **Dodaj**.

2. W **Nowa sesja** wybierz maszynę w polu **Maszyna**.

</Steps>

Aplikacja otwiera `ssh -t <host>`, przechodzi do folderu sesji, a gdy nie istnieje na serwerze, do folderu domowego, uruchamia powłokę logowania i uruchamia w niej agenta. Agent musi być zainstalowany na serwerze. Po restarcie sesja SSH wraca jako nowe połączenie z powłoką, bez wznawiania agenta. Logowanie obsługuje OpenSSH, z kluczami w `ssh-agent` lub `~/.ssh/config`; aplikacja nie przechowuje haseł. Panel na maszynie pokazuje maszynę w nagłówku.

## Wznawianie po ponownym uruchomieniu

**Ustawienia → Sesje i sterowanie → Odtwarzaj sesje po restarcie** jest domyślnie włączone. Karty, podziały i panele wracają, a agenci z natywnym identyfikatorem sesji kontynuują rozmowę. Szczegóły i polecenie wznowienia każdego agenta są na stronie [Agenci i sesje](/pl/agent/sessions/#wznawianie-po-ponownym-uruchomieniu). Starsze sesje są w [historii sesji](/pl/agent/session-history/).

## Rozsyłanie wiadomości

Zaznacz pole wyboru w nagłówkach kilku paneli, wpisz raz w polu na pasku kart i wyślij ten sam tekst do wszystkich. Zobacz [Agenci i sesje](/pl/agent/sessions/#rozsyłanie-wiadomości).

## Przekazywanie pracy

Przycisk przekazania w nagłówku panelu oddaje pracę innemu agentowi przez `STATE.md` albo `handoff.md`. Zobacz [Agenci i sesje](/pl/agent/sessions/#przekazywanie-pracy).

## Panel agenta

Panel po prawej, `⌘⇧A`, to rozmowa z agentem nad dowolnym widokiem. Zobacz [Agenci i sesje](/pl/agent/sessions/#panel-agenta).

<Aside type="tip">
Skróty na tej stronie używają `⌘`. W Windows i Linux używaj `Ctrl`. `Ctrl+B` nigdy nie trafia do programu w terminalu; jeśli używasz tmux w panelu, zmień jego prefiks.
</Aside>

## Powiązane strony

<CardGrid>
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Stany, tryb czatu, wznawianie, rozsyłanie i przekazywanie pracy." />
  <LinkCard title="Obszary robocze" href="/pl/agent/workspaces/" description="Karty, podziały, powiększanie i pasek obszarów." />
  <LinkCard title="Edytor i pliki" href="/pl/agent/code/" description="Widok Kod z jego terminalem." />
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Sesje i sterowanie oraz pozostałe sekcje." />
</CardGrid>
