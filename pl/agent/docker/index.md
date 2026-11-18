# Docker

> Widok Docker w Skribly Agent wypisuje kontenery według projektów compose, uruchamia polecenia compose, pokazuje logi, obrazy i wolumeny oraz alarmuje o awariach.

Widok **Docker** pokazuje kontenery silnika Dockera na tym komputerze, pogrupowane według projektów compose, a u góry pliki compose otwartego projektu. Uruchamiasz, restartujesz i zatrzymujesz kontenery, czytasz ich logi, otwierasz powłokę i oglądasz obrazy oraz wolumeny. Strażnik w tle zgłasza alert, gdy kontener ulegnie awarii, zabraknie mu pamięci, nie przejdzie health checka albo restartuje się w pętli.

![Widok Docker: plik compose projektu z Up, Restart, Pull i Down oraz kontenery trzech projektów compose ze stanem, portami i akcjami](../../../../assets/screens/agent-docker.webp)

## Otwórz widok

- Kliknij **Docker** na pasku aktywności po lewej albo naciśnij `⌘9`, albo
- otwórz paletę poleceń (`⌘K`) i wybierz **Docker**.

W Windows i Linuksie zamiast `⌘` używaj `Ctrl`.

Jeśli Dockera nie znaleziono, widok pisze **Nie znaleziono Dockera** i wypisuje, gdzie szukał (polecenie `docker` w `PATH` oraz foldery Docker Desktop, OrbStack, colima i Rancher). Jeśli silnik nie działa, pisze **Docker nie działa**, pokazuje polecenie, które go uruchamia, i co kilka sekund sprawdza ponownie.

## Karty

| Karta | Co pokazuje |
| --- | --- |
| **Kontenery** | Każdy kontener, pogrupowany według projektów compose, a nad nimi pliki compose otwartego projektu |
| **Obrazy** | Obrazy z rozmiarem i wiekiem. **Usuń wiszące** usuwa obrazy bez tagu, **Usuń nieużywane** usuwa każdy obraz, którego nie używa żaden kontener. Oba najpierw pytają |
| **Wolumeny** | Wolumeny z ich sterownikiem i punktem montowania |
| **Alerty** | Ostatnie alerty, z liczbą na karcie. **Wyczyść** opróżnia listę. Kliknięcie alertu otwiera jego kontener |

## Jak uruchomić projekt compose

Gdy otwarty projekt ma plik compose, pasek **Compose w projekcie** wypisuje każdy plik i nazwę jego projektu compose.

<Steps>

1. Naciśnij **Up**, żeby uruchomić projekt (`docker compose up -d`).

2. Użyj **Restart** i **Pull**, gdy ich potrzebujesz, oraz `ps`, żeby wypisać kontenery projektu.

3. Naciśnij **Down**, żeby zatrzymać i usunąć kontenery projektu. Najpierw pyta. Wolumeny zostają.

</Steps>

Nagłówek grupy na liście kontenerów ma własne **Up**, **Restart**, **Stop** i **Down** dla tego projektu compose.

## Jak pracować z kontenerem

Każdy wiersz pokazuje stan, zdrowie, obraz, porty, a po **Pokaż CPU/RAM** także użycie procesora i pamięci. Port z linkiem otwiera się w [Przeglądarce](/pl/agent/browser/). Kontener, który uległ awarii, pokazuje swój kod wyjścia.

| Przycisk | Co robi |
| --- | --- |
| **Otwórz powłokę (docker exec)** | Otwiera terminal z powłoką wewnątrz działającego kontenera |
| **Logi** | Pokazują ostatnie 100, 200, 500 albo 2000 linii. **Śledź w terminalu** dalej je śledzi |
| **Wstrzymaj** i **Wznów** | Wstrzymują i wznawiają kontener |
| **Restart**, **Zatrzymaj**, **Uruchom** | Sterują kontenerem |
| **Usuń kontener** | Usuwa go. Dane spoza wolumenów przepadają. Najpierw pyta |
| **Napraw z agentem** | Pokazany przy kontenerze z problemem. Wysyła logi i podsumowanie `inspect` do agenta z prośbą o diagnozę |

Nad listą pole wyszukiwania dopasowuje kontenery, obrazy i projekty, a filtr ma **Wszystkie**, **Działające** i **Problemy**, każdy z liczbą. **Pokaż CPU/RAM** odczytuje użycie jednorazowo, a potem przycisk nazywa się **Odśwież CPU/RAM**.

Lista przeładowuje się, gdy silnik zgłasza zmianę, i co 30 sekund, gdy widok jest otwarty.

## Alerty i pasek stanu

Strażnik słucha zdarzeń Dockera. Zgłasza alert w aplikacji i powiadomienie systemowe w czterech przypadkach:

| Alert | Kiedy |
| --- | --- |
| **Awaria kontenera** | Kontener zakończył się kodem innym niż 0, i nie dlatego, że go zatrzymałeś |
| **Brak pamięci (OOM)** | Jądro zabiło proces w kontenerze, który przekroczył limit pamięci |
| **Nieudany health check** | Kontener przeszedł w stan unhealthy |
| **Pętla restartów** | Co najmniej 3 restarty w ciągu 2 minut |

Pasek stanu na dole pokazuje `Docker OK`, gdy wszystkie kontenery są w porządku, albo liczbę kontenerów z problemem, na czerwono. Kliknięcie otwiera ten widok. Kliknięcie powiadomienia systemowego otwiera widok na tym kontenerze.

Ponieważ strażnik używa strumienia `docker events`, nie uruchamia już `docker ps` co 15 sekund, dopóki strumień działa, także gdy okno jest ukryte. Lista przeładowuje się, gdy strumień zgłasza zmianę, a przy ukrytym oknie dopiero po Twoim powrocie. Sprawdzenie co 15 sekund jest tylko zapasowe, gdy monitorowanie jest włączone, a strumień nie działa.

## Ustawienia → Docker

| Opcja | Co robi | Domyślnie |
| --- | --- | --- |
| **Monitorowanie kontenerów** | Uruchamia strażnika. Wyłączone: Skribly nie uruchamia `docker events` ani nie odpytuje silnika w tle, a widok Docker nadal działa | Włączone |
| Awaria kontenera | Alert przy tym zdarzeniu | Włączone |
| Brak pamięci (OOM) | Alert przy tym zdarzeniu | Włączone |
| Nieudany health check | Alert przy tym zdarzeniu | Włączone |
| Pętla restartów | Alert przy tym zdarzeniu | Włączone |
| **Kontekst** | Kontekst Dockera z `docker context ls`, z którym rozmawia Skribly (Docker Desktop, OrbStack, colima albo zdalny serwer). Nie zmienia kontekstu w Twoim terminalu | Bieżący kontekst Dockera |
| **DOCKER_HOST** | Adres silnika: `unix://`, `tcp://`, `ssh://` albo `npipe://`. Ma pierwszeństwo przed kontekstem | Puste, używany jest kontekst |

Cztery przełączniki alertów są wyszarzone, gdy monitorowanie jest wyłączone. Jeśli powiadomienia systemowe są wyłączone w **Edytor i powiadomienia**, alerty pojawiają się tylko w aplikacji. Gdy istnieje więcej niż jeden kontekst, wybór kontekstu jest też w nagłówku widoku.

## Wskazówki

<Aside type="caution">
**Usuń nieużywane** kasuje każdy obraz, którego nie używa żaden kontener, i trzeba będzie je pobrać ponownie. **Down** usuwa kontenery, ale zostawia wolumeny.
</Aside>

- Gdy kontener ulegnie awarii, użyj najpierw **Napraw z agentem**: agent dostaje logi i podsumowanie `inspect`, bez kopiowania przez Ciebie.
- Kieruj **DOCKER_HOST** na zdalny silnik tylko przez `ssh://` albo sieć, której ufasz.

## Powiązane strony

<CardGrid>
  <LinkCard title="Przeglądarka" href="/pl/agent/browser/" description="Otwórz opublikowany port w przeglądarce aplikacji." />
  <LinkCard title="Agenci i sesje" href="/pl/agent/sessions/" description="Gdzie pracuje agent z Napraw z agentem." />
  <LinkCard title="Zasoby" href="/pl/agent/resources/" description="Pamięć, procesor i porty każdego panelu." />
  <LinkCard title="Ustawienia" href="/pl/agent/settings/" description="Wszystkie ustawienia Skribly Agent." />
</CardGrid>
