# Venture & service logos

Place logo image files here and reference them in `src/lib/config.ts` (add `logo` and optionally `website` to each venture).

## Expected filenames (labels)

| Business / service       | Suggested filename(s)     |
|--------------------------|---------------------------|
| Crisis Interceptor       | `crisis-interceptor.png` or `.svg` |
| Al-Kimya Recovery        | `al-kimya.png`            |
| Precision LGS            | `precision-lgs.png`        |
| Glengrove                | `glengrove.png`           |
| Recovery Architect       | `recovery-architect.png`   |
| Financial Architect      | `financial-architect.png`  |
| Al-Ameen Caps            | `al-ameen-caps.png`       |

Use PNG or SVG. Keep aspect ratio consistent; the site displays logos in a uniform size (e.g. 48×48px container with `object-contain`).

In `config.ts`, set for each venture, for example:

- `logo: "/logos/glengrove.png"`
- `website: "https://..."` (optional external link)
