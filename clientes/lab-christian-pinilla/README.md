# Christian Pinilla — Laboratorio dental (landing)

Cliente de Mezzora · Cali, Colombia · Instagram [@labchristian_pinilla](https://www.instagram.com/labchristian_pinilla/)

Stack: Next.js 16, React 19, Tailwind 4. Todo el texto y los datos están en `lib/content.ts`.

## Desarrollo

```bash
npm install
npm run dev
```

QA antes de mostrar: `npx tsc --noEmit && npm run lint && npm run build`.

## Datos pendientes (editar en `lib/content.ts`)

- [ ] `contact.whatsapp`: número internacional sin "+" (ej. `573001234567`). Mientras esté vacío, los CTA abren el DM de Instagram y el formulario copia el mensaje al portapapeles.
- [ ] `contact.address`: dirección exacta (hoy solo "Ciudad Jardín, Cali").
- [ ] Confirmar la grafía del nombre: la bio de Instagram dice "Cristian", la marca "Christian".
- [ ] Fotos originales en alta resolución (las actuales salen de capturas de Instagram, ~360 px).
- [ ] Validar el texto de "+300 sonrisas entregadas en todo el país".

## Lead webhook (opcional)

Si existe `NEXT_PUBLIC_LEAD_WEBHOOK`, el formulario además hace POST del lead en JSON (gancho para automatizar con n8n).

## SEO

`robots: noindex` hasta que el cliente apruebe el sitio (ver `app/layout.tsx`).
