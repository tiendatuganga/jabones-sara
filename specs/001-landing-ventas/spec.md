# Spec 001 — Página de ventas: curso de jabones artesanales (Hotmart)

**Estado:** Aprobada para implementación · **Idioma:** español (es) · **Constitución:** `../constitution.md`

## 1. Contexto y objetivo
Se vende en Hotmart un producto digital (curso) sobre elaboración de jabones artesanales. Se necesita una **landing de ventas de una sola página** que convierta visitantes en compradores llevándolos al checkout de Hotmart.

**Métrica de éxito:** porcentaje de clics en CTA hacia el checkout (medible vía Hotmart `src`/UTM y analítica opcional).

## 2. Público objetivo
- Principiantes curiosos por el jabón natural (hobby, regalo, vida sin químicos agresivos).
- Personas que ya probaron recetas de internet y fracasaron.
- Quienes quieren una base para, quizá, vender sus jabones (sin promesas de ingresos).

## 3. Supuestos (a confirmar con el cliente)
| # | Supuesto | Dónde se cambia |
|---|----------|-----------------|
| A1 | Producto = curso online "Jabones Artesanales desde Cero", método en frío | `site.product` |
| A2 | Marca = "Vividia" (nombre de la carpeta del proyecto) | `site.brand` |
| A3 | Precio 47 € pago único, sin precio tachado | `site.price` |
| A4 | Garantía de 7 días (la que ofrece Hotmart) | `site.guaranteeDays` |
| A5 | Módulos, bonus, instructor y testimonios son **de ejemplo** | `site.modules`, `bonuses`, `instructor`, `testimonials` |
| A6 | Enlace de checkout pendiente de recibir | `site.checkoutUrl` |

## 4. Historias de usuario y criterios de aceptación

### US1 — Entender la propuesta de valor en 5 segundos (P0)
Como visitante quiero ver qué aprenderé y qué resultado obtendré sin hacer scroll.
- **Dado** que abro la página en móvil, **cuando** carga, **entonces** veo titular, subtítulo, 3 puntos clave, un CTA principal y una ilustración (sin scroll en ≥ 640 px de alto útil el titular y el CTA son visibles).

### US2 — Comprar (P0)
Como visitante convencido quiero llegar al checkout en un clic desde cualquier punto.
- **Dado** que estoy en cualquier sección, **cuando** pulso un CTA, **entonces** voy a `checkoutUrl` de Hotmart.
- **Dado** que llegué con `?utm_source=ig&src=reel1`, **cuando** pulso un CTA, **entonces** esos parámetros se añaden al enlace de Hotmart.
- **Dado** un móvil, **cuando** he pasado el hero y aún no veo la oferta, **entonces** aparece una barra CTA fija inferior; **cuando** la oferta es visible, la barra se oculta.

### US3 — Resolver dudas y objeciones (P0)
Como visitante dudoso quiero ver el contenido, para quién es, garantía y preguntas frecuentes.
- **Dado** el temario, **cuando** pulso un módulo, **entonces** se despliegan sus lecciones (accesible por teclado, `aria-expanded`).
- **Dado** la FAQ, **cuando** pulso una pregunta, **entonces** se muestra la respuesta.
- La página indica explícitamente **para quién no es** el curso.

### US4 — Confiar (P1)
Como visitante quiero señales de confianza reales.
- Se muestran: pago seguro por Hotmart, garantía de N días, acceso inmediato, quién enseña y testimonios.
- Los testimonios marcados `placeholder` muestran la etiqueta "Ejemplo" y el build avisa por consola.

### US5 — Encontrar la página (P1)
- `<title>`, `meta description`, canonical, Open Graph/Twitter y JSON-LD `Product` presentes y derivados de `site.ts`.

### US6 — Gestor del contenido (P0)
Como dueño quiero editar textos, precio y enlace sin tocar componentes.
- **Dado** `src/config/site.ts`, **cuando** cambio un valor y reconstruyo, **entonces** se refleja en toda la página.

## 5. Requisitos funcionales
| ID | Requisito |
|----|-----------|
| FR-01 | Header fijo con marca, navegación de anclas (≥ md) y CTA compacto. |
| FR-02 | Hero: eyebrow, titular, subtítulo, 3 bullets, CTA primario, enlace secundario al temario, ilustración SVG. |
| FR-03 | Barra de confianza (3 elementos) bajo el hero. |
| FR-04 | Sección **Problemas** (dolores) con transición a la solución. |
| FR-05 | Sección **Temario** con módulos en acordeón (título, resumen, lecciones). |
| FR-06 | Sección **Beneficios** (4 tarjetas). |
| FR-07 | Sección **Para quién sí / para quién no**. |
| FR-08 | Sección **Bonus** (opcional: se oculta si el array está vacío). |
| FR-09 | Sección **Quién te enseña** (iniciales como avatar, bio). |
| FR-10 | Sección **Testimonios** (se oculta si el array está vacío; etiqueta "Ejemplo" si `placeholder`). |
| FR-11 | Sección **Oferta** (`#oferta`): qué incluye, precio formateado en Intl, precio anterior opcional, CTA, garantía, pago seguro. |
| FR-12 | Sección **FAQ** en acordeón. |
| FR-13 | **CTA final** de cierre. |
| FR-14 | Footer con enlaces legales configurables y descargo de responsabilidad. |
| FR-15 | Barra CTA sticky móvil (isla React) con lógica de visibilidad. |
| FR-16 | Propagación de `src`, `sck`, `utm_*` a todos los enlaces de checkout (también al de la barra sticky). |
| FR-17 | SEO: meta, canonical, OG/Twitter, JSON-LD Product. |
| FR-18 | Todo el contenido proviene de `src/config/site.ts` (ver constitución §2). |

## 6. Requisitos no funcionales
| ID | Requisito |
|----|-----------|
| NFR-01 | Mobile-first; sin scroll horizontal desde 320 px. |
| NFR-02 | Lighthouse móvil ≥ 95 en Performance, Accesibilidad y SEO. |
| NFR-03 | JS enviado mínimo: solo 2 islas React (Accordion, StickyCta). |
| NFR-04 | Contraste AA, foco visible, `prefers-reduced-motion` respetado. |
| NFR-05 | Fuentes con `display=swap`; sin imágenes rasterizadas obligatorias. |
| NFR-06 | Despliegue estático (cualquier hosting: Netlify, Vercel, Cloudflare Pages…). |

## 7. Dirección visual
Natural, cálida y artesanal: crema, salvia y miel con acento arcilla. Tipografía display serif (Fraunces) para titulares + Inter para texto. Esquinas redondeadas generosas, mucho aire, ilustración SVG de pastillas de jabón y hojas.

## 8. Fuera de alcance
- Carrito, pagos o área de miembros propios (lo gestiona Hotmart).
- Blog, multiidioma, CMS.
- Analítica / píxeles (se documenta dónde añadirlos, no se instalan).
- Vídeo de ventas (el layout admite añadirlo después sobre el hero).

## 9. Preguntas abiertas
1. ¿Enlace real del checkout de Hotmart?
2. ¿Nombre final del producto, precio, moneda y garantía?
3. ¿Temario real, bonus y bio del instructor?
4. ¿Testimonios reales (con permiso) o capturas de resultados?
5. ¿URLs de privacidad, términos y contacto?
6. ¿Dominio final (canonical/OG) e imagen social 1200×630?
