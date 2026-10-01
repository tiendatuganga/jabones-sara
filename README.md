# Vividia — Landing de ventas (Hotmart)

Página de ventas para un curso de **jabones artesanales** en Hotmart. Astro 5 + React 19 (islas) + Tailwind CSS 4. Desarrollada con **Spec-Driven Development**.

## Flujo SDD
```
specs/constitution.md              principios no negociables
specs/001-landing-ventas/spec.md   QUÉ y POR QUÉ (historias, criterios, requisitos FR/NFR)
specs/001-landing-ventas/plan.md   CÓMO (stack, arquitectura, decisiones, mapa FR → componente)
specs/001-landing-ventas/tasks.md  tareas trazables y estado
```
Para cambiar comportamiento: actualiza la **spec** → ajusta el **plan** → añade/modifica **tareas** → implementa.

## Requisitos
Node.js 18.20+ (recomendado 20 o 22 LTS).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/ estático
npm run preview
```

## Personalización (todo en un único archivo)
Edita [`src/config/site.ts`](src/config/site.ts): enlace de Hotmart, nombre, precio, temario, bonus, instructor, testimonios, FAQ y legales.

### Checklist antes de publicar
- [ ] `checkoutUrl` → tu enlace real de Hotmart
- [ ] `product`, `price`, `guaranteeDays` coinciden con tu producto en Hotmart
- [ ] Temario, bonus, bio e iniciales reales (busca textos con "EJEMPLO")
- [ ] Testimonios reales (con permiso) o `testimonials: []`
- [ ] Enlaces legales (privacidad, términos, contacto) y `url` del dominio
- [ ] `public/og.jpg` (1200×630) y `ogImage: "/og.jpg"`
- [ ] El `console.warn` del build ya no avisa de testimonios de ejemplo

## Seguimiento de campañas
Si el visitante llega con `?src=...&utm_source=...` (también `sck`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`), esos parámetros se añaden automáticamente a todos los enlaces de checkout.

## Despliegue
`npm run build` produce `dist/`, desplegable tal cual en Netlify, Vercel, Cloudflare Pages o GitHub Pages.

## Estructura
```
src/config/site.ts        contenido
src/components/*.astro    secciones (estáticas)
src/components/react/     islas: Accordion, StickyCta
src/lib/                  checkout (tracking), format (precio)
```
