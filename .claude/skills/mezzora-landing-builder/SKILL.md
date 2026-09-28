---
name: mezzora-landing-builder
description: Procedimiento estándar de Mezzora para crear la landing "servicio de entrada" de un negocio local (gimnasio, restaurante, bar, barbería, estudio): análisis del sitio actual y de una referencia, extracción de marca y fotos reales, build en Next.js + Tailwind, QA con screenshots y entrega lista para presentar. Usar cuando Esteban pida rediseñar o crear el sitio web de un prospecto o cliente.
---

# Mezzora — Landing como servicio de entrada

Objetivo comercial: llegar al prospecto con su sitio **ya hecho**, con su marca y sus fotos reales, mejor que el actual. La web abre la puerta; el ingreso recurrente viene después (automatización n8n de los leads que genera la web). Cada decisión de diseño se mide por una sola pregunta: ¿esto genera más contactos para el negocio?

## Fase 0 — Setup (5 min)

1. CRM Notion: buscar el prospecto en `📋 Prospects`. Si no existe, crearlo. Si existe en dos bases a la vez, dejar una sola ficha.
2. Repo nuevo `<negocio>-landing` (privado). Stack fijo: el mismo de `mezzora-landing` (Next.js 16, React 19, Tailwind 4, framer-motion, lucide-react). Copiar `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `tsconfig.json`, `AGENTS.md`.
3. Next 16: leer `node_modules/next/dist/docs/` antes de usar APIs. Cambios ya confirmados: `<Image preload>` reemplaza a `priority`; `images.qualities` por defecto es `[75]`.
4. Red: el entorno necesita acceso al dominio del cliente y al de la referencia. Si WebFetch/curl devuelve 403 del proxy, pedirle a Esteban que abra la red antes de seguir. Nunca inventar colores ni fotos.

## Fase 1 — Análisis (15 min)

Descargar con `curl` (no con WebFetch, que resume y pierde datos) la home y todas las subpáginas del menú. Extraer:

| Qué | Cómo |
|---|---|
| Colores de marca | Contar los hex del CSS principal (`grep -oE '#[0-9a-f]{6}'` + `uniq -c`) y muestrear los píxeles del logo con Pillow. El logo manda sobre el CSS. |
| Logo | El PNG más grande disponible (las imágenes `og:image` suelen estar en 1600px). Recortar por el canal alfa. Crear una variante clara para fondos oscuros recoloreando solo el texto. |
| Fotos | Todas las `src`/`url()` de cada página. Bajarlas, armar un contact sheet y clasificarlas en **reales** (el local, su gente) o **stock** (se descartan: restan credibilidad). Para full-bleed, solo ≥1600px. |
| Datos duros | Dirección, teléfono, WhatsApp, horarios, razón social/P.IVA, redes, links de reservas externas (Playtomic, TeamSystem, TheFork…). Se copian literales. |
| Oferta y números | Servicios, cifras reales (m², máquinas, cursos, años) y ofertas vigentes (prueba, voucher). Son el material para los titulares. |
| Punto débil del sitio actual | Anotarlo en el CRM: es argumento de venta. |

La referencia (ej.: Equinox) se usa solo para el **lenguaje visual**: estructura, ritmo, tipografía. Nunca para copiar textos ni fotos.

## Fase 2 — Dirección de diseño

Sistema base "editorial atrevido", probado con Interamnia:

- **Tipografía**: display condensada en mayúsculas (Anton) para titulares enormes; Inter para el cuerpo. Una palabra en outline por titular clave como máximo.
- **Color**: fondo casi negro derivado del color principal de la marca, más dos acentos de marca (uno de CTA, uno de apoyo). Alternar secciones oscuras y claras (bone `#f3f0e8`) para dar ritmo.
- **Imagen**: foto real a pantalla completa con degradado hacia el fondo. Nada de stock.
- **CTA única y repetida**: la acción de conversión (prueba, reserva, pedido) en la navbar, el hero, una sección propia y una barra fija en móvil con WhatsApp.
- **Copy**: en el idioma del cliente (italiano), frases cortas y afirmativas, con números concretos. Un titular = una idea.

Estructura estándar (adaptar el orden por vertical):

1. Hero: titular de 3-5 palabras, subtítulo con la oferta completa, CTA primaria y secundaria.
2. Ticker con los diferenciales (tira de color de acento).
3. Manifiesto + 4 cifras.
4. Pilares: 2-4 bloques full-bleed, uno por servicio.
5. Sección "storytelling" única del negocio (en Interamnia: las salas con nombres de planetas). Siempre buscar este elemento: es lo que hace que no parezca una plantilla.
6. Catálogo (cursos, menú, servicios) con tabs.
7. Servicio premium (PT, catering, eventos).
8. Planes/precios (si no hay precios públicos, CTA "Richiedi info" por WhatsApp).
9. Sección de conversión con formulario.
10. Footer con datos legales completos.

## Fase 3 — Build

- **Todo el texto y los datos van en `lib/content.ts`.** Los componentes no llevan textos hardcodeados. Así, los cambios que pida el cliente se hacen en minutos.
- Formulario de conversión: al enviar, abre WhatsApp con un mensaje prellenado (`wa.me/<num>?text=`). Si existe `NEXT_PUBLIC_LEAD_WEBHOOK`, además hace POST del lead en JSON. Ese es el gancho para vender la automatización n8n (lead → CRM → respuesta automática → follow-up).
- Fotos en `public/images/` con nombres descriptivos, en JPG q85, máximo 1920px. `alt` descriptivo en italiano.
- Animaciones: `Reveal` sin librerías, con `data-reveal` y un script inline en `<head>` (IntersectionObserver, failsafe de 3s, respeta `prefers-reduced-motion`). **Nunca framer-motion con `initial` de opacity 0**: si el JS falla (4G mala), la página queda en blanco. El marquee se hace con CSS puro.
- Accesibilidad mínima: `aria-label` en los botones de icono, `aria-pressed` en los chips, contraste AA en el texto del cuerpo.

## Fase 4 — QA (obligatorio antes de mostrar)

1. `npx tsc --noEmit && npm run lint && npm run build` sin errores.
2. `next start` y screenshots con Playwright (Chromium en `/opt/pw-browsers`) a 1440×900 y 390×844, bajando con `mouse.wheel` para disparar los reveals.
3. Revisar en los screenshots:
   - Ningún titular deja una palabra huérfana en móvil.
   - El texto en outline es visible (el stroke con color explícito, no `currentColor`).
   - Sin scroll horizontal (`scrollWidth > innerWidth`).
   - Ningún reveal queda en opacity 0, tampoco con los chunks JS bloqueados (`page.route('**/_next/static/chunks/**', r => r.abort())`).
   - Las fotos no cortan lo importante (usar `object-position`).
4. Después de cada rebuild, reiniciar `next start`: un servidor viejo con un build nuevo rompe la hidratación.

## Fase 5 — Entrega y cierre

1. Deploy en Vercel: Esteban importa el repo en vercel.com (Add New → Project → Deploy, sin configurar nada). Compartir el dominio de producción `<repo>.vercel.app`, **no** la URL del deployment (`<repo>-<hash>-...vercel.app`), que pide login de Vercel. Cada push a `main` se redespliega solo. **Vercel Hobby bloquea ("Blocked") los commits cuyo autor no es la cuenta de GitHub de Esteban**: configurar en cada repo `git config user.email "231981101+mrestebanmr@users.noreply.github.com"` y `user.name "Esteban Muriel"` antes del primer commit. Un commit bloqueado no se arregla con Redeploy: hace falta un commit nuevo con el autor correcto. Nota: el Chromium de la sandbox no carga sitios externos a través del proxy; verificar producción con curl (todos los `/_next/static` en 200) y hacer el QA visual en local.
2. Mostrarlo **en el móvil del dueño**, no en un portátil: así lo verán sus clientes.
3. Mientras el cliente no apruebe: `robots: { index: false }` en metadata + `app/robots.ts` con `disallow: "/"`. Se quita al pasar al dominio oficial.
4. Llevar preparadas 3 mejoras de negocio observadas (no técnicas) y la propuesta de automatización de leads.
5. CRM: Status → `Contattato`, fijar la fecha de la próxima acción y anotar en Note las objeciones y los ajustes pedidos.
6. Los ajustes que pida el cliente se hacen en `content.ts`: un ciclo de cambios incluido, el resto se cotiza.

## Qué NO hacer

- Inventar precios, años de fundación, premios o testimonios. Si falta un dato, dejar un placeholder evidente y avisar a Esteban.
- Usar fotos de stock cuando hay fotos reales, aunque las reales sean peores. Si no hay suficientes fotos buenas, pedir una sesión con iPhone (vertical + horizontal, luz natural, gente real entrenando).
- Publicar el sitio en un dominio o URL pública indexable antes de que el cliente lo apruebe: usa su marca.
