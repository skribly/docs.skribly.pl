# Audit rules

> What the Audits view of Skribly Agent looks for - how the score works, the secret, code pattern and SEO rules, dependency checks, accessibility checks and how findings go to an agent.

The **Audits** view looks at your project and at a running page. Security audits read your project, and accessibility and SEO audits read a running page. This page lists what each audit looks for. The view itself is introduced in [Features](/agent/features/#audits).

## How the score works

Every report starts at 100. Each finding lowers the score by its severity, and findings are sorted from most severe.

| Severity | Points subtracted |
| --- | --- |
| Critical | 25 |
| High | 10 |
| Medium | 4 |
| Low | 1 |
| Informational | 0 |

## Secrets

The scan covers files tracked by git, up to 1 MB. The value is masked in the report, and lines that look like an example or placeholder are skipped.

| Rule | What it detects | Severity |
| --- | --- | --- |
| `aws-key` | AWS access key | Critical |
| `github-token` | GitHub token | Critical |
| `gitlab-token` | GitLab token | Critical |
| `slack-token` | Slack token | High |
| `stripe-key` | Live Stripe key | Critical |
| `google-key` | Google API key | High |
| `openai-key` | OpenAI key | Critical |
| `anthropic-key` | Anthropic key | Critical |
| `private-key` | Private key | Critical |
| `jwt` | JWT in code | Medium |
| `hardcoded-password` | A password, secret, API key or token set to a string | High |
| `env-tracked` | A `.env` file tracked by git | High |

## Risky code patterns

These rules skip test and fixture folders. Every finding has a file, a line and a suggested fix.

| Rule | What it detects | Severity |
| --- | --- | --- |
| `eval` | `eval(…)` in JavaScript, TypeScript, PHP or Python | High |
| `new-function` | `new Function(…)` | High |
| `inner-html` | HTML inserted with `innerHTML`, `dangerouslySetInnerHTML` or `v-html` | Medium |
| `shell-injection` | Shell commands built from interpolated strings | High |
| `sql-concat` | SQL built from strings | High |
| `unsafe-deserialize` | Unsafe `pickle`, `yaml.load` or `unserialize` | High |
| `tls-off` | TLS verification turned off | High |
| `weak-hash` | `md5` or `sha1` | Medium |
| `cors-any` | Requests allowed from any origin | Medium |
| `debug-on` | Debug mode left on in configuration | Medium |
| `http-url` | Plain `http://` address of an external system | Low |

## Dependencies

The app reads exact versions from `package-lock.json`, `composer.lock`, pinned `requirements*.txt` and `poetry.lock`, then checks them against OSV.dev. Only package names and versions are sent, never code. Without a network, the audit still finishes with results from the rules.

## Accessibility

The page loads in a hidden window, and axe-core runs with the WCAG 2.0, 2.1 and 2.2 tags and best-practice rules. Each rule lists up to eight elements.

:::note
axe-core finds only some accessibility problems. Check keyboard use, focus order and alternative text by hand, or with the `wcag-audit` skill.
:::

## SEO

| Rule | When it fires | Severity |
| --- | --- | --- |
| `title`, `title-length` | Missing title, or outside 15 to 65 characters | High, low |
| `description`, `description-length` | Missing description, or outside 50 to 170 characters | Medium, low |
| `h1`, `h1-many` | Missing H1, or more than one | Medium, low |
| `heading-order` | A skipped heading level | Low |
| `canonical` | Missing canonical link | Low |
| `lang` | Missing `lang` on `<html>` | Medium |
| `viewport` | Missing meta viewport | High |
| `noindex` | `noindex` in meta robots | High |
| `https` | Page without HTTPS | High |
| `img-alt` | Images without `alt` | Medium |
| `link-text` | Links without text | Low |
| `og` | Missing `og:title` or `og:image` | Low |
| `structured-data` | No JSON-LD | Informational |
| `favicon` | Missing icon link | Low |
| `dom-size` | More than 1500 elements | Low |
| `page-weight` | More than 3000 KB transferred | Medium |
| `load-time` | Load event after more than 4 seconds | Medium |
| `robots`, `robots-block` | Missing `robots.txt`, or everything disallowed | Low, high |
| `sitemap` | No sitemap | Low |
| `broken:<url>` | Internal link with status 400 or higher | Medium |

## Send findings to an agent

Select findings and choose **Fix with agent**. A new or running agent gets a short list of up to 40 items, not the whole report, and it makes no commit.

```text
Security audit for shop found 3 problems. Fix them in the code, starting with the most severe:
1. (critical) GitHub token [scripts/release.sh:12]
2. (high) SQL query built from strings [orders/reports.py:41]
3. (medium) HTML inserted without sanitization [src/components/ProductDescription.tsx:8]
```

## Read next

- [Features](/agent/features/): all views, grouped by job.
- [Skills catalog](/skills/catalog/): audit skills that run from any agent.
- [Data and network](/agent/data-and-network/): what audits send, and where.
