# Constitución del proyecto

Principios no negociables. Cualquier spec, plan o tarea que los contradiga debe corregirse, no el principio.

## 1. Honestidad comercial
- **Sin urgencia falsa.** Prohibidos los contadores regresivos, "últimas plazas" o "oferta termina hoy" que no sean reales.
- **Sin prueba social inventada.** Todo testimonio, cifra o logro mostrado debe ser real. Los datos de ejemplo se marcan como `placeholder` y la página los etiqueta visiblemente como "ejemplo" hasta ser reemplazados.
- **Sin promesas de ingresos ni de salud.** Se habla de habilidades y resultados del proceso (hacer jabón), nunca de "ganarás X €/mes" ni de "cura/trata la piel".
- **Precio tachado solo si fue real** (campo opcional `price.oldAmount`).

## 2. El contenido vive en un solo sitio
- Todo texto, precio, enlace de Hotmart y lista editable está en `src/config/site.ts`.
- Los componentes presentan datos; no contienen copy hardcodeado (salvo etiquetas de UI como "Cerrar").
- Cambiar de producto o de enlace de checkout = editar un único archivo.

## 3. Rendimiento primero (Astro-first)
- HTML estático por defecto. React solo en **islas** donde hay interacción real (acordeones, barra CTA sticky).
- Hidratación diferida (`client:visible` / `client:idle`) salvo que sea imprescindible `client:load`.
- Sin dependencias de UI adicionales, sin imágenes pesadas: las ilustraciones son SVG inline.
- Objetivo Lighthouse móvil: Performance ≥ 95, Accessibility ≥ 95, SEO ≥ 95.

## 4. Accesibilidad y móvil
- Diseño **mobile-first**: la mayoría del tráfico llegará desde redes sociales.
- Contraste WCAG AA, foco visible, HTML semántico, acordeones operables con teclado, respeto de `prefers-reduced-motion`.

## 5. Una sola acción principal
- La página existe para llevar al checkout de Hotmart. Todos los CTA apuntan al mismo `checkoutUrl`.
- Se conservan los parámetros de seguimiento (`src`, `sck`, `utm_*`) al saltar a Hotmart.

## 6. Cumplimiento
- Pie de página con aviso legal, privacidad y términos (URLs configurables) y descargo de responsabilidad.
- El contenido es educativo; se advierte de seguir normas de seguridad (sosa cáustica) y la normativa local si se vende.

## 7. Spec antes que código
- Flujo: `spec.md` → `plan.md` → `tasks.md` → implementación. Un cambio de comportamiento empieza actualizando la spec.
- Cada tarea referencia los requisitos (`FR-xx`) que cumple.
