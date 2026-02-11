# Netlify environment variables

Set these in **Netlify Dashboard → Site → Site configuration → Environment variables** (not as a `.env` file in the repo).

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_FSP_NUMBER` | Yes (for go‑live) | Your FSP license number. Replaces "[Insert Number]" in Footer, Contact, and Services. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL, e.g. `https://taufeeqessop.co.za`. Used for SEO and absolute links. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | No | WhatsApp number for optional floating widget, e.g. `27810487447`. |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID, e.g. `G-52K77Q647M`. Loaded via `GoogleAnalytics` component when set. |

After changing values, trigger a new deploy (or wait for the next build) so Next.js picks them up at build time.
