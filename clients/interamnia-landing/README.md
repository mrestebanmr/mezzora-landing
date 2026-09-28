# Club Interamnia — Landing

Proposta di nuova landing per Club Interamnia (Teramo), realizzata da Mezzora.

## Sviluppo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Modificare i contenuti

Tutti i testi, gli orari, i contatti, i corsi e gli abbonamenti sono in `lib/content.ts`.
Le foto sono in `public/images/` (foto reali dal sito attuale del Club).

## Lead Test Day

Il form apre WhatsApp con un messaggio precompilato. Impostando la variabile
`NEXT_PUBLIC_LEAD_WEBHOOK` (es. webhook n8n), ogni richiesta viene inviata anche lì
in JSON: `{ nome, telefono, obiettivo, fascia, fonte }`.

## Deploy

Vercel: importare il repo, nessuna configurazione necessaria.
