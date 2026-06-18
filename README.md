# MagneticBlox — Marketing & Legal Site

Static site that hosts the marketing landing page and the legal documents required by the App Store and Google Play for the MagneticBlox mobile app.

Operated by **Town76 Labs** · Contact: `info@town76labs.com`

## Pages

| Page | Path |
|------|------|
| Marketing | `/` |
| Privacy Policy | `/privacy/` |
| Terms & Conditions | `/terms/` |
| Support | `/support/` |

All pages are bilingual (English / Turkish) with a language toggle that defaults to the browser language.

## Updating content

The legal copy mirrors `src/legal/legal-content.ts` in the MagneticBlox app repo. Keep the two in sync when the legal text changes.

## Hosting

Served via GitHub Pages from the `main` branch (root). To use the custom domain `magneticblox.app`, point an `A`/`CNAME` DNS record to GitHub Pages and add a `CNAME` file at the repo root.
