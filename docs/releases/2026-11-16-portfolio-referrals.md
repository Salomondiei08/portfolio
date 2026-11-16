# Portfolio referrals — 2026-11-16

Five existing Academy links on https://salomon.reinvent-labs.com/links now identify
visits as `portfolio / referral`, campaign `bio_links`. Distinct content labels
separate each course row from the free-start button. Text, prices and layout are
unchanged. https://s.reinvent-labs.com/ still redirects to this page.

| Link | Campaign content |
| --- | --- |
| IA productivity | `course_productivity` |
| Vibe Coder Pro | `course_vibe_coder_pro` |
| AI Agent Builder | `course_ai_agent_builder` |
| AI in Business | `course_ai_in_business` |
| Commencer gratuitement | `start_free` |

## Published revisions

- Portfolio source `a051a20852715269661256b49669f1193bba9e90`, branch
  `fix/links-attribution-20261116`; Vercel production
  `dpl_EeA55XJ7Ptk8Nv3snaatN4Wtxf8G`, built before domain promotion.
  Baseline was the previously published `5a888ec`, preserving that site's existing
  pages. Uncommitted blog edits in the original checkout were not included.
- Academy [PR #7](https://github.com/Reinvent-Labs/Reinvent-Academy/pull/7)
  merged as `7c708dbc4943d4f7cae88575dc4ad2d5f9d5a882`. It adds `portfolio` to
  the finite campaign-source allowlist with a regression test. Current dashboard
  and intake work from `6445d80` was preserved; the only merge conflict was resolved
  by retaining both release-note entries.
- [Academy CI run 43797495989](https://github.com/Reinvent-Labs/Reinvent-Academy/actions/runs/43797495989)
  passed migrations, typecheck, lint, 265 tests (2 skipped), build and deployment.
  Runner HEAD matched the merge commit; app running, PostgreSQL healthy, local
  and public `/api/health` returned `{"ok":true}`. Kuma monitors 2/10 were UP,
  Prometheus Academy target UP, and the authenticated central Grafana query
  returned availability 1.

## Browser verification

Aside confirmed all five published anchor URLs. A separate anonymous installed
Chrome session clicked the actual free-start anchor and accepted the public-site
consent prompt. No GA or Clarity request occurred before consent. Google's real
SDK sent exactly one `page_view`, accepted by the collector with HTTP 204:

```json
{
  "status": 204,
  "tid": "G-T8X4Z0MDYE",
  "en": "page_view",
  "dl": "https://academy.reinvent-labs.com/cours/etre-plus-productif-grace-a-l-ia",
  "dr": "",
  "cs": "portfolio",
  "cm": "referral",
  "cn": "bio_links",
  "cc": "start_free"
}
```

All four course destinations returned HTTP 200 on their original public paths,
with no vendors before consent. The short-domain redirect passed. Portfolio
widths 320, 390 and 480 px had no horizontal overflow.

Campaign arrivals intentionally omit Clarity, keeping query values out of session
recordings. The page location sent to GA is canonical and queryless; campaign
fields are validated separately. No signups, payments or inquiry forms were tested.

This was one controlled QA visit, not a customer count. Collector acceptance
proves transport; processed acquisition reports were not checked in this release.
Tags apply to future consenting visits and identify the portfolio hop, not the
original social platform when multiple profiles share the same short URL.

Source-only labtest mirrors: `~/projects/portfolio-links-attribution-20261116`
and `~/projects/academy-portfolio-referral-20261116`. They are not runtime roots.
The later documentation commit changes no deployed application files.
