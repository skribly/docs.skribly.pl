# Webhooks and signing

> Receive Skribly Tracker events as signed JSON webhooks - the events, the payload, the headers, retries, and how to verify the HMAC-SHA256 signature.

A webhook sends a signed JSON `POST` to your URL when something happens to an issue. Admins add webhooks in **Settings → Webhooks** or through the API.

## Events

| Event | When | `data` |
| --- | --- | --- |
| `issue.created` | An issue is created | `{ issue }`, the full [issue object](/tracker/rest-api/#the-issue-object) |
| `issue.updated` | Fields, the status or the assignee change | `{ issue }` |
| `issue.deleted` | An issue is deleted | `{ issue: { key, title }, actor }` |
| `comment.created` | A comment is added | `{ issue, comment: { id, author, body } }` |

A webhook can listen to some events and to one project, or to everything.

## Add a webhook

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" "$TRACKER/webhooks" \
  -d '{"url": "https://example.com/hooks/skribly", "events": ["issue.updated", "comment.created"], "project": "WEB"}'
# 201 … "secret": "…"   (shown once)
```

The response holds the signing secret. **It is shown once**, so store it where your receiver can read it. `GET /webhooks` lists webhooks and `DELETE /webhooks/{id}` removes one; both need an admin token with the `write` ability.

## The request

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

| Field | Meaning |
| --- | --- |
| `id` | A UUID per delivery; use it to drop duplicates |
| `event` | The event name, the same as the `X-Skribly-Event` header |
| `sent_at` | ISO 8601 timestamp with an offset |
| `data` | The event's data, as in the table above |

New receivers should read `X-Skribly-Signature` and `X-Skribly-Event`. The `X-Skryba-*` pair carries the same values and stays for receivers written before the rename.

## Delivery and retries

Deliveries are queued and sent by the queue worker:

| | |
| --- | --- |
| Tries | 3 |
| Backoff | 10 seconds, then 60 seconds |
| Timeout | 5 seconds per try (`TRACKER_WEBHOOK_TIMEOUT`) |
| Success | Any `2xx` answer |

Answer quickly with `2xx` and do the work afterwards. If the queue worker is not running, nothing is delivered.

## Verify the signature

The signature is `sha256=` followed by the lowercase hex HMAC-SHA256 of the **raw request body**, keyed with the webhook secret. Compute it over the bytes you received, never over a re-serialised object, and compare in constant time.

### Node.js, no dependencies

```js

export function verify(rawBody, signatureHeader, secret) {
  const expected = 'sha256=' + createHmac('sha256', secret).update(rawBody).digest('hex')
  const given = String(signatureHeader ?? '')
  return given.length === expected.length && timingSafeEqual(Buffer.from(given), Buffer.from(expected))
}
```

### With `@skribly/core`

```ts

if (verifyWebhookRequest(rawBody, request.headers, secret)) {
  const delivery = parseWebhookBody(rawBody)
  if (delivery.event === 'issue.updated') console.log(delivery.data.issue.key)
}
```

`verifyWebhookRequest` reads either header pair, and `parseWebhookBody` validates the payload against the shared [contract](/core/contracts/).

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

## Planned

Sending events in the shared CloudEvents envelope, which `@skribly/core` already defines, and signing in the Standard Webhooks style, with a timestamp in the signature and secret rotation, are planned. Receivers that use `verifyWebhookRequest` and `parseAnyWebhookBody` from `@skribly/core` already read both formats. See [Events](/core/events/).
