# MUREC — Redesign

A ground-up redesign of the MUREC (Madhusudan Urban Real Estate Collection)
homepage, built with **React 19 + Vite**. All copy, imagery, and links are
sourced from the live [murec.com](https://murec.com) site; the visual
language takes cues from [timeless.club](https://timeless.club/en) — dark,
restrained, editorial — reinterpreted for a legacy real-estate brand rather
than copied.

## Design direction

- **Palette** — a warm cream/ivory stage (`#f6f3ec`) for the body content,
  bookended top and bottom by a deep navy-charcoal stage (`#12171d`) for the
  hero and footer. Ink is near-navy (`#1c2530`), accented with a muted
  brass/gold (`#9a7a3c`) and a sage green (`#5e6f52`) reserved for the IGBC
  sustainability section. This light-body/dark-bookend rhythm is a common
  editorial pattern in real print and web design — it reads as considered
  rather than a single flat theme.
- **Type** — system font stacks only, no external font loading: Georgia for
  display headings, the OS UI sans stack (San Francisco / Segoe UI / Roboto)
  for body and interface text. Faster load, and avoids the generic
  serif+geometric-sans pairing that's become a template cliché.
- **Signature element** — an oversized, hairline-outlined "78" watermark in
  the hero, a direct reference to MUREC's "78+ years of legacy" — grounding
  the one bold visual risk in the brand's own story rather than a generic
  flourish.
- **Motion** — scroll-triggered reveals (Framer Motion) fire once per
  section and respect `prefers-reduced-motion`; a slow Ken Burns zoom on the
  hero video, an infinite logo marquee for Our Associations, and hover
  states throughout (image zoom, underline sweep on nav links, arrow slide
  on buttons) — all subtle, none flashy.

## Structure

```
src/
  components/
    Nav.jsx / Nav.css              sticky nav, mobile drawer
    Hero.jsx / Hero.css            full-bleed video hero + "78" signature
    SplitSection.jsx / .css        reusable image/text split (Legacy section)
    Principles.jsx / .css          four-value grid (Trust/Quality/Transparency/Innovation)
    Collection.jsx / .css          full-bleed portfolio banner
    Igbc.jsx / .css                sustainability section, custom SVG badge
    Associations.jsx / .css        partner logo strip
    Partners.jsx / .css            architect/interior-designer testimonials
    CtaBand.jsx / .css             "Get in Touch" band
    Footer.jsx / .css              address, contact, disclaimer, socials
    Reveal.jsx                     shared scroll-reveal wrapper
  App.jsx                          page composition
  index.css                        design tokens + base styles
```

All images and the hero video are referenced directly from `murec.com`'s
own CDN (no assets were re-hosted), so content stays live-accurate.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

Requires Node 18+.

## Deploying

The build output is a static `dist/` folder — deploy it anywhere static:

**Vercel**
```bash
npm i -g vercel
vercel --prod
```

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

Or drag-and-drop the `dist/` folder into the Netlify or Vercel dashboard.

## Notes

- Built as a single page (Home), per the assignment brief.
- Fully responsive: single-column mobile layouts, 2–4 column grids from
  tablet width up (breakpoints at 640px / 720px / 780px / 860px / 900px
  across components).
- No UI framework dependency beyond React + Framer Motion — plain CSS with
  custom properties for full control over the token system.
