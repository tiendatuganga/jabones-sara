# Tareas 001 — Landing de ventas

Leyenda: `[x]` hecho · `[ ]` pendiente · `[P]` paralelizable · `(FR-xx)` requisito que cubre.

## Fase 0 — Especificación
- [x] T00 Constitución, spec, plan y tareas

## Fase 1 — Cimientos
- [x] T01 `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`
- [x] T02 `src/styles/global.css` con tokens `@theme` (colores, tipografías) y base (NFR-04)
- [x] T03 `src/config/site.ts` con interfaces y contenido de ejemplo (FR-18)
- [x] T04 [P] `src/lib/format.ts` (FR-11)
- [x] T05 [P] `src/lib/checkout.ts` (FR-16)
- [x] T06 `src/layouts/Layout.astro`: head, SEO, JSON-LD, script de tracking (FR-16, FR-17)

## Fase 2 — Piezas base
- [x] T07 [P] `ui/Section.astro`, `ui/SectionHeading.astro`
- [x] T08 [P] `ui/CtaButton.astro` (FR-16)
- [x] T09 [P] `SoapIllustration.astro`
- [x] T10 [P] `react/Accordion.tsx` accesible (FR-05, FR-12)
- [x] T11 [P] `react/StickyCta.tsx` (FR-15, FR-16)

## Fase 3 — Secciones (US1–US4)
- [x] T12 `Header.astro` (FR-01)
- [x] T13 `Hero.astro` (FR-02) · `TrustBar.astro` (FR-03)
- [x] T14 `Pains.astro` (FR-04)
- [x] T15 `Curriculum.astro` (FR-05)
- [x] T16 `Benefits.astro` (FR-06) · `Audience.astro` (FR-07)
- [x] T17 `Bonuses.astro` (FR-08) · `Instructor.astro` (FR-09)
- [x] T18 `Testimonials.astro` (FR-10)
- [x] T19 `Offer.astro` (FR-11)
- [x] T20 `Faq.astro` (FR-12) · `FinalCta.astro` (FR-13) · `Footer.astro` (FR-14)
- [x] T21 `pages/index.astro` compone todo + `StickyCta`

## Fase 4 — Verificación (pendiente: requiere Node.js instalado)
- [x] T22 `npm install && npm run build` sin errores
- [ ] T23 Revisión visual 320 / 375 / 768 / 1280 px (NFR-01) — verificado ~370 px sin scroll horizontal; faltan el resto de anchos
- [x] T24 Prueba de parámetros UTM en todos los CTA (FR-16)
- [ ] T25 Prueba de teclado en acordeones (NFR-04) — clic verificado en temario; falta teclado y FAQ
- [ ] T26 Lighthouse móvil ≥ 95 (NFR-02)

## Fase 5 — Antes de publicar (contenido real)
- [ ] T27 Sustituir `checkoutUrl` por el enlace real de Hotmart
- [ ] T28 Revisar nombre, precio, moneda y garantía del producto
- [ ] T29 Reemplazar temario, bonus, bio e iniciales por los reales
- [ ] T30 Reemplazar testimonios `placeholder` por reales (o dejar `testimonials: []`)
- [ ] T31 Configurar URLs de privacidad / términos / contacto y `site.url`
- [ ] T32 Añadir `public/og.jpg` (1200×630) y `ogImage` en `site.ts`
- [ ] T33 (Opcional) Añadir Meta Pixel / GA en `Layout.astro`
