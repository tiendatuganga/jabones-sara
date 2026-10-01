# Plan técnico 001 — Landing de ventas

Implementa `spec.md` respetando `../../specs/constitution.md`.

## 1. Stack
| Pieza | Elección | Motivo |
|-------|----------|--------|
| Framework | **Astro 5** (salida estática) | HTML sin JS por defecto, ideal para landings |
| Interactividad | **React 19** vía `@astrojs/react` | Solo islas: acordeón y barra sticky |
| Estilos | **Tailwind CSS 4** vía `@tailwindcss/vite`, tokens en `@theme` | Sin config JS, tokens de marca centralizados |
| Lenguaje | TypeScript estricto | Contrato tipado del contenido |
| Fuentes | Google Fonts (Fraunces + Inter), `display=swap` | Identidad artesanal, carga rápida |

## 2. Arquitectura
```
src/
├─ config/site.ts          ← ÚNICA fuente de contenido (FR-18)
├─ lib/
│  ├─ checkout.ts          ← withTracking(): propaga src/sck/utm_* (FR-16)
│  └─ format.ts            ← formatPrice() con Intl
├─ styles/global.css       ← Tailwind + tokens @theme + base
├─ layouts/Layout.astro    ← <head>, SEO, JSON-LD, script de tracking (FR-17)
├─ pages/index.astro       ← compone las secciones
└─ components/
   ├─ ui/  Section · SectionHeading · CtaButton
   ├─ SoapIllustration.astro
   ├─ Header · Hero · TrustBar · Pains · Curriculum · Benefits
   │  Audience · Bonuses · Instructor · Testimonials · Offer · Faq
   │  FinalCta · Footer                      (todas .astro, estáticas)
   └─ react/ Accordion.tsx · StickyCta.tsx   (islas)
```

## 3. Modelo de contenido (`site.ts`)
Interfaces TypeScript exportadas (`Module`, `Benefit`, `Testimonial`, `FaqItem`…) y un objeto `site: SiteConfig`. Los componentes importan `site` directamente (es una landing única; no se necesita inyección de props).

Campos clave: `checkoutUrl`, `product`, `price {amount, oldAmount?, currency}`, `guaranteeDays`, `hero`, `trust[]`, `pains`, `modules[]`, `benefits[]`, `audience {for, notFor}`, `bonuses[]`, `instructor`, `testimonials[]`, `offer.includes[]`, `faq[]`, `footer`.

## 4. Decisiones de diseño
| Decisión | Detalle |
|----------|---------|
| **Islas React mínimas** | `Accordion` (`client:visible`) se reutiliza para temario y FAQ. `StickyCta` (`client:idle`) solo móvil. |
| **Acordeón accesible** | `<button aria-expanded aria-controls>`, panel con `role="region"`, animación `grid-template-rows 0fr→1fr`, `inert` cuando está cerrado. |
| **Barra sticky** | `IntersectionObserver`: visible si `#hero` ya salió del viewport **y** `#oferta` no es visible. |
| **Tracking Hotmart** | Los enlaces estáticos llevan `data-checkout`; un script del layout aplica `withTracking`. `StickyCta` lo aplica en `useEffect`. |
| **Ilustración** | SVG inline con clases `fill-*` de Tailwind (evita variables CSS purgadas del `@theme`). |
| **Secciones opcionales** | `Bonuses` y `Testimonials` devuelven nada si su array está vacío. |
| **Testimonios de ejemplo** | `placeholder: true` → etiqueta "Ejemplo" visible + `console.warn` en build. |
| **SEO** | `<link rel=canonical>`, OG/Twitter, JSON-LD `Product` con `Offer` (sin ratings inventados). |
| **CTA color** | Miel (`honey-400`) con texto oscuro: contraste ≥ 7:1 y máximo protagonismo. |

## 5. Mapa requisito → componente
| Requisito | Implementación |
|-----------|----------------|
| FR-01 | `Header.astro` |
| FR-02 | `Hero.astro` + `SoapIllustration.astro` |
| FR-03 | `TrustBar.astro` |
| FR-04 | `Pains.astro` |
| FR-05 | `Curriculum.astro` + `react/Accordion.tsx` |
| FR-06 | `Benefits.astro` |
| FR-07 | `Audience.astro` |
| FR-08 | `Bonuses.astro` |
| FR-09 | `Instructor.astro` |
| FR-10 | `Testimonials.astro` |
| FR-11 | `Offer.astro` + `lib/format.ts` |
| FR-12 | `Faq.astro` + `react/Accordion.tsx` |
| FR-13 | `FinalCta.astro` |
| FR-14 | `Footer.astro` |
| FR-15 | `react/StickyCta.tsx` |
| FR-16 | `lib/checkout.ts` + script en `Layout.astro` |
| FR-17 | `Layout.astro` |
| FR-18 | `config/site.ts` |

## 6. Estrategia de verificación
1. `npm run build` sin errores ni warnings de TypeScript.
2. Revisión manual a 320 / 375 / 768 / 1280 px.
3. Probar `?utm_source=test&src=abc` y comprobar los `href` de todos los CTA (incluido el sticky).
4. Navegación por teclado completa (Tab, Enter, Espacio en acordeones).
5. Lighthouse móvil (NFR-02).

## 7. Riesgos
| Riesgo | Mitigación |
|--------|------------|
| Publicar con testimonios/ejemplos falsos | Etiqueta "Ejemplo" + warning de build + checklist en README |
| Enlace de checkout sin sustituir | `checkoutUrl` con valor obvio `REEMPLAZA_CON_TU_CODIGO` + checklist |
| Cambios en versiones mayores de Astro/Tailwind | Versiones con rango `^` de major fijo y `package-lock.json` |
