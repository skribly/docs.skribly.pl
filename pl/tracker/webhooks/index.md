# Webhooki i podpisywanie

> Odbieraj zdarzenia Skribly Tracker jako podpisane webhooki JSON — zdarzenia, ładunek (payload), nagłówki, ponawianie prób i weryfikacja podpisu HMAC-SHA256.

Webhook wysyła podpisane żądanie `POST` z JSON-em na Twój adres URL, gdy coś się dzieje ze zgłoszeniem. Administratorzy dodają webhooki w **Ustawienia → Webhooki** lub przez API.

## Zdarzenia

| Zdarzenie | Kiedy | `data` |
| --- | --- | --- |
| `issue.created` | Zgłoszenie zostaje utworzone | `{ issue }`, pełny [obiekt zgłoszenia](/pl/tracker/rest-api/#obiekt-zgłoszenia) |
| `issue.updated` | Zmieniają się pola, status lub osoba przypisana | `{ issue }` |
| `issue.deleted` | Zgłoszenie zostaje usunięte | `{ issue: { key, title }, actor }` |
| `comment.created` | Zostaje dodany komentarz | `{ issue, comment: { id, author, body } }` |

Webhook może nasłuchiwać wybranych zdarzeń i jednego projektu albo wszystkiego.

## Dodawanie webhooka

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" "$TRACKER/webhooks" \
  -d '{"url": "https://example.com/hooks/skribly", "events": ["issue.updated", "comment.created"], "project": "WEB"}'
# 201 … "secret": "…"   (shown once)
```

Odpowiedź zawiera sekret podpisu. **Jest pokazywany tylko raz**, więc zapisz go tam, gdzie Twój odbiornik może go odczytać. `GET /webhooks` wypisuje webhooki, a `DELETE /webhooks/{id}` usuwa jeden z nich; oba wymagają tokenu administratora z uprawnieniem `write`.

## Żądanie

```http
POST /hooks/skribly
Content-Type: application/json
User-Agent: SkriblyTracker/0.1.0
X-Skribly-Event: issue.updated
X-Skribly-Signature: sha256=<hex HMAC-SHA256 of the raw body with the webhook secret>
X-Skryba-Event: issue.updated
X-Skryba-Signature: sha256=<same value>

{"id":"<uuid>","event":"issue.updated","sent_at":"2026-10-29T20:10:36+01:00","data":{"issue":{…}}}
```

| Pole | Znaczenie |
| --- | --- |
| `id` | UUID na każde dostarczenie; po nim odrzucisz duplikaty |
| `event` | Nazwa zdarzenia, taka sama jak w nagłówku `X-Skribly-Event` |
| `sent_at` | Znacznik czasu ISO 8601 z offsetem |
| `data` | Dane zdarzenia, jak w powyższej tabeli |

Nowe odbiorniki powinny odczytywać nagłówki `X-Skribly-Signature` i `X-Skribly-Event`. Para `X-Skryba-*` ma te same wartości i zostaje dla odbiorników napisanych przed zmianą nazwy.

## Dostarczanie i ponawianie prób

Dostarczenia trafiają do kolejki, a wysyła je worker kolejki:

| | |
| --- | --- |
| Liczba prób | 3 |
| Odstępy między próbami | 10 sekund, następnie 60 sekund |
| Limit czasu | 5 sekund na próbę (`TRACKER_WEBHOOK_TIMEOUT`) |
| Sukces | Dowolna odpowiedź `2xx` |

Odpowiadaj szybko kodem `2xx`, a resztę pracy wykonaj potem. Jeśli worker kolejki nie działa, nic nie jest dostarczane.

## Weryfikacja podpisu

Podpis to `sha256=` i HMAC-SHA256 zapisany małymi literami szesnastkowymi (hex), liczony z **surowej treści żądania** z sekretem webhooka jako kluczem. Licz go z otrzymanych bajtów, nigdy z ponownie zserializowanego obiektu, a porównuj w stałym czasie.

### Node.js, bez zależności

```js

export function verify(rawBody, signatureHeader, secret) {
  const expected = 'sha256=' + createHmac('sha256', secret).update(rawBody).digest('hex')
  const given = String(signatureHeader ?? '')
  return given.length === expected.length && timingSafeEqual(Buffer.from(given), Buffer.from(expected))
}
```

### Z `@skribly/core`

```ts

if (verifyWebhookRequest(rawBody, request.headers, secret)) {
  const delivery = parseWebhookBody(rawBody)
  if (delivery.event === 'issue.updated') console.log(delivery.data.issue.key)
}
```

`verifyWebhookRequest` czyta dowolną z dwóch par nagłówków, a `parseWebhookBody` sprawdza ładunek względem wspólnego [kontraktu](/pl/core/contracts/).

### PHP

```php
$expected = 'sha256=' . hash_hmac('sha256', file_get_contents('php://input'), $secret);
$valid = hash_equals($expected, $_SERVER['HTTP_X_SKRIBLY_SIGNATURE'] ?? '');
```

### Python

```python

def verify(raw_body: bytes, signature: str, secret: str) -> bool:
    expected = "sha256=" + hmac.new(secret.encode(), raw_body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature or "")
```

## Planowane

Planowane jest wysyłanie zdarzeń we wspólnym envelope CloudEvents, który `@skribly/core` już definiuje, oraz podpisywanie w stylu Standard Webhooks, ze znacznikiem czasu w podpisie i rotacją sekretu. Odbiorniki, które używają `verifyWebhookRequest` i `parseAnyWebhookBody` z `@skribly/core`, już czytają oba formaty. Zobacz [Zdarzenia](/pl/core/events/).
