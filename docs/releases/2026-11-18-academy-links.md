# Portfolio Academy links — production release, 2026-11-18

Published https://salomon.reinvent-labs.com/links with three paid programmes first,
one concrete benefit per programme, and the separate free course/action last.
The Academy block is 501 CSS px tall at a 390px viewport (43% shorter than the
previous draft). Current prices and all five referral URLs are preserved.

- Application source: `45cef87ef37309266354ca9472d1a0f8c218d87f`.
- Git branch: `design/links-academy-20261116`, pushed with the user's deploy approval.
- Vercel project: `portfolio` / `prj_vpIY6KJgdnySZIf24xhl1xqwGnbC`.
- Production deployment: `dpl_BGYqojFDTUv8GQtECoGDVN8cKFhX`, Ready.
- Deployment URL: https://portfolio-fspmf3ice-salomondiei08s-projects.vercel.app.
- Previous production retained for rollback: `dpl_EeA55XJ7Ptk8Nv3snaatN4Wtxf8G`.

Built with production settings before domain promotion. Vercel's lint, type
validation and production build passed (23 generated pages). This project has
no GitHub Actions workflow; production uses its existing Vercel deployment path.
The isolated checkout preserves the previously published portfolio source and
does not include unrelated uncommitted blog changes from the original checkout.

Aside confirmed the published content and all five Academy hrefs. Installed
Chrome verified HTTP 200 and six production layout cases: light/dark at 320, 390
and 480 px, without horizontal overflow, overlapping headings/prices or Academy
links below 44px high. The paid-first link order passed in all six cases.
https://s.reinvent-labs.com/ returned the canonical /links page with HTTP 200.
No checkout, signup or live conversion was submitted. Analytics dashboard counts
and new collector receipts were not part of this design-only release.

Monitoring audit found no existing Kuma monitor for either portfolio hostname.
Portfolio is Vercel-hosted and has no server container/application-metrics target.
Do not describe unrelated server metrics or other sites' Kuma monitors as coverage
for this website. Availability-monitor registration remains pending admin access.

Source-only labtest mirror: `~/projects/portfolio-links-design-20261116`;
environment files, secrets, dependencies, build output and Git metadata excluded.
The later release-evidence commit changes documentation only.
