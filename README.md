# Uncle Peter's Pancakes — Gachibowli landing page

Single-page, mobile-first landing page built with React 19, Vite 7 and Tailwind CSS 4.

```bash
npm install
npm run dev      # http://localhost:5181
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Replace before launch

Real details live in two places and must be kept in step:

| What | `src/site.js` | `index.html` (JSON-LD) |
| --- | --- | --- |
| Phone number | `phoneDisplay`, `phoneHref` | `telephone` |
| WhatsApp number | `whatsappNumber` | `potentialAction.target.urlTemplate` |
| Street address | `addressLines` | `address.streetAddress` |
| Coordinates | — | `geo.latitude`, `geo.longitude` |
| Canonical domain | — | `canonical`, `og:url`, `og:image`, `twitter:image` |

The phone (`+91 90000 00000`), WhatsApp number and street address (`Plot 00, Gachibowli Main
Road`) are placeholders. Menu items and prices are plausible stand-ins — swap in the real board.

Also add a 1200×630 social preview image at `public/og-pancakes.jpg`; the meta tags already
point at it.

**Hero photograph.** The card currently loads a stock shot from Unsplash (Chad Montano, free
under the [Unsplash License](https://unsplash.com/license) — attribution appreciated, not
required). Replace it with a photo of your own stack: drop the file in `public/` and set
`heroPhoto.src` in `src/site.js` to `/hero-stack.jpg`. A portrait crop around 900×1100 suits the
card; it is darkened heavily, so a bright kitchen shot works fine. If the image ever fails to
load the card falls back to plain glass rather than breaking.

## Structure

| File | What it holds |
| --- | --- |
| `index.html` | SEO meta, Open Graph, Twitter card, `Restaurant` + `Menu` + `AggregateRating` JSON-LD |
| `src/site.js` | Business details, menu, reviews — the only file most edits need |
| `src/index.css` | Design tokens (`@theme`), reveal animation, batter-edge and griddle styles |
| `src/hooks/useScrollReveal.js` | IntersectionObserver that reveals `[data-reveal]` elements once |
| `src/hooks/useOpenStatus.js` | Live open/closed state for a 9 AM – 1 AM shift that crosses midnight |
| `src/components/` | One file per section, plus the hero showcase card and the sticky action bar |

## Design notes

- **Palette**: chocolate `#1E1109`, golden `#F2A714`, cream `#FFF6E6`, syrup `#8A4B1F`.
- **Type**: *Gluten* for display, *Hanken Grotesque* for body (Google Fonts).
- The hero is a layered glass showcase: two tilted `.glass-quiet` panels behind a photo card,
  a free-floating rating badge, and two blurred golden orbs for the warm light. The card's prices
  come from `showcase` in `site.js`, so they follow the menu board.
- Inside the card: the photograph, a chocolate wash (`rgba(20,11,5,…)` 50% at the top to 88% at
  the foot) so white type stays crisp, a warm radial from the top right, the `.glass-ring`
  hairline painted over the photo, and a `.glass-strip` panel whose real `backdrop-filter` blurs
  the food behind the second price list.
- The hero headline is set in Hanken Grotesque 800 (tight tracking) for a sleeker read; Gluten
  stays the voice for section headings, the logo and prices.
- The page reads as a stack of griddle layers — chocolate, cream, chocolate, gold, cream — joined
  by poured-batter edges (`BatterEdge`).
- The hours bar and every "open now" indicator are computed from the visitor's clock, so they
  stay honest after midnight.
- `LocationCard` draws a stylised street plan in SVG instead of embedding Google Maps, which is
  blocked on some networks and renders as an empty frame. The real routing is the directions
  link, which opens Google Maps in a new tab.
- `prefers-reduced-motion: reduce` turns off the reveal transitions, the floating card and
  badge, and the button hover zoom, and leaves everything visible and in place.
