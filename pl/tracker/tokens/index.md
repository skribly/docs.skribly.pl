# Osobiste tokeny dostępu

> Twórz, ograniczaj, używaj i unieważniaj osobiste tokeny dostępu, które uwierzytelniają skrypty, Skribly Agent i agent-skills w API Skribly Tracker.

Każde żądanie do REST API niesie osobisty token dostępu jako bearer token. Token należy do jednej osoby i działa z rolą tej osoby.

## Tworzenie tokenu

W przeglądarce: **Profil i tokeny API → Tokeny API** (`/profile#tokens`).

1. Wpisz nazwę wskazującą, gdzie token jest używany, na przykład „Skribly Agent” lub „CI”.
2. Wybierz uprawnienia:
   - **Odczyt i zapis**: uprawnienia `read` i `write`. Wymagane przez Skribly Agent oraz do publikowania komentarzy z agent-skills.
   - **Tylko odczyt**: uprawnienie `read`. Wystarcza do pobierania zgłoszeń.
3. Opcjonalnie ustaw datę wygaśnięcia.
4. Skopiuj token. **Jest wyświetlany tylko raz.**

Z wiersza poleceń na serwerze:

```bash
docker compose exec app php artisan tracker:token you@example.com "Skribly Agent"
docker compose exec app php artisan tracker:token you@example.com ci --read-only
```

Token wygląda tak: `1|` i 40 znaków.

## Co może zrobić token

Token nigdy nie może zrobić więcej niż jego właściciel:

| Rola właściciela | Z uprawnieniem `read` | Z uprawnieniami `read` i `write` |
| --- | --- | --- |
| Obserwator | Odczyt wszystkiego, co może zobaczyć obserwator | To samo co tylko odczyt |
| Członek zespołu | Odczyt | Tworzenie i zmienianie zgłoszeń, komentowanie, przypisywanie, zmienianie statusu, rejestrowanie czasu, przesyłanie załączników |
| Administrator | Odczyt | Wszystko, co może członek zespołu, a do tego webhooki |

Endpointy, które zmieniają dane, wymagają uprawnienia `write`. Usunięcie zgłoszenia wymaga ponadto, by właściciel był administratorem albo zgłaszającym to zgłoszenie. Żądanie, na które nie pozwala uprawnienie tokenu lub rola właściciela, zwraca `403`.

## Używanie tokenu

```bash
export TRACKER=http://localhost:8100/api/v1
export TOKEN='1|…'
curl -H "Authorization: Bearer $TOKEN" -H "Accept: application/json" "$TRACKER/me"
```

`GET /me` zwraca właściciela i uprawnienia tokenu:

```json
{ "data": { "id": 1, "name": "Ada Example", "email": "ada@example.com", "role": "admin", "locale": "en", "abilities": ["read", "write"] } }
```

| Narzędzie | Gdzie umieścić token |
| --- | --- |
| Skribly Agent | **Ustawienia → Trackery zadań → Dodaj tracker → Skribly Tracker**, adres URL i token z uprawnieniami do odczytu i zapisu |
| agent-skills | `SKRIBLY_TRACKER_URL` i `SKRIBLY_TRACKER_TOKEN` w `~/.config/agent-skills/credentials.env` |
| `@skribly/core` | `createTrackerClient({ baseUrl, token })`; zobacz [Jak aplikacje nawiązują połączenie](/pl/core/connecting/) |
| Twoje skrypty | Nagłówek `Authorization: Bearer` |

## Bezpieczne przechowywanie tokenów

- Nigdy nie commituj tokenu, nie wklejaj go do czatu ani do `.tasks/`.
- Daj każdemu narzędziu własny token, żeby móc unieważnić jeden bez psucia pozostałych.
- Używaj tokenów tylko do odczytu wszędzie tam, gdzie nic nie trzeba zmieniać.
- Ustawiaj datę wygaśnięcia tokenom na wspólnych komputerach i w CI.
- Unieważnij token na stronie profilu, gdy tylko podejrzewasz wyciek.

Żądania bez tokenu lub z tokenem unieważnionym albo wygasłym zwracają `401`. Więcej niż 240 żądań na minutę od jednego użytkownika zwraca `429`.

## Planowane

Dla całego ekosystemu planowane są krótkotrwałe tokeny dla aplikacji i agentów, ograniczone do wybranych projektów i działań i widoczne jako bot. Zobacz [Architektura ekosystemu](/pl/overview/architecture/#planowane-elementy).
