# Search Console Ranking Log (searchConsoleRL)

Intentional SEO / ranking decisions for the **myfence.com** Search Console property.  
Use this log when interpreting GSC query shifts so we do not treat deliberate keyword pivots as accidental regressions.

**Property:** `https://myfence.com` (Search Console)

---

## 2026-08-05 — Own “Seattle Fence Builder” (intentional)

**Decision:** Rank for **fence builder** / **Seattle fence builder** as the primary homepage + core-page intent phrase (replacing “fence installation” as the lead SERP wording on those URLs).

**Why:** High-intent commercial phrasing; differentiate from generic “fence company / installation” SERPs; align title, H1, and supporting content hub.

**Date enacted:** **2026-08-05**  
**Commit:** `1cc0e237` — *Own Seattle Fence Builder on core pages and expand the content hub.*

### Property / URL updates

| URL | Change |
|-----|--------|
| `/` (homepage) | Title → `Seattle Fence Builder \| Cedar, Hogwire & Hybrid \| MyFence.com`; meta + About H1/copy shifted to “fence builder” |
| `/quote` | Title/meta → Seattle Fence Builder framing |
| `/contact` | Title/meta → Seattle Fence Builder framing |
| Site tagline / `SITE_CONFIG` | “Father & Son Seattle Fence Builder” |
| `/blog/fence-builder-vs-handyman-seattle` | New supporting article |
| `/blog/what-a-fence-builder-includes-in-a-seattle-quote` | New supporting article |
| `/blog/fence-builder-slopes-setbacks-property-lines-seattle` | New supporting article |

**GSC monitoring notes:** Expect title rewrites and query mix to shift toward “fence builder” variants. Do **not** revert titles back to “installation” if impressions move — this was intentional.

---

## 2026-08-06 — Drop redundant brand from homepage title

**Decision:** Remove trailing `| MyFence.com` from the homepage `<title>` only. Brand already appears in the SERP site-name row + URL; Google was rewriting the title to prepend `MyFence.com:` and wasting character budget.

**Date enacted:** **2026-08-06**  
**Commit:** `0f6212a5` — *Drop redundant MyFence.com brand from homepage title.*

| URL | Change |
|-----|--------|
| `/` | Title → `Seattle Fence Builder \| Cedar, Hogwire & Hybrid` |

**Keyword target unchanged:** Still intentionally ranking for **Seattle fence builder**.
