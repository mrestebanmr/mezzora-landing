import { Dumbbell, UtensilsCrossed, ShoppingBag, Building2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const verticals = [
  {
    icon: Dumbbell,
    pill: "Fitness & Sport",
    title: "Palestre",
    description:
      "Gestione iscritti, prenotazioni classi, promemoria pagamenti e riattivazione membri inattivi.",
    tasks: ["iscrizioni", "classi", "rinnovi"],
    span: "md:col-span-7",
  },
  {
    icon: UtensilsCrossed,
    pill: "Ristorazione",
    title: "Ristoranti & Locali",
    description:
      "Conferma prenotazioni, gestione liste d'attesa, comunicazioni clienti e raccolta feedback.",
    tasks: ["prenotazioni", "lista d'attesa", "recensioni"],
    span: "md:col-span-5",
  },
  {
    icon: ShoppingBag,
    pill: "Vendita online",
    title: "E-commerce",
    description:
      "Gestione ordini, assistenza clienti, recupero carrelli abbandonati e aggiornamenti in tempo reale.",
    tasks: ["ordini", "carrelli", "assistenza"],
    span: "md:col-span-5",
  },
  {
    icon: Building2,
    pill: "PMI",
    title: "Piccole imprese",
    description:
      "Eliminiamo il lavoro manuale quotidiano: preventivi, follow-up, fatturazione e comunicazione clienti.",
    tasks: ["preventivi", "fatture", "follow-up"],
    span: "md:col-span-7",
  },
];

export default function Verticals() {
  return (
    <section id="settori" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Per chi è Mezzora"
          title="Settori che trasformiamo."
          subtitle="Lavoriamo con attività italiane che vogliono crescere senza impazzire."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-12">
          {verticals.map((v, i) => (
            <article
              key={v.title}
              data-reveal
              style={{ "--d": i } as React.CSSProperties}
              className={`spotlight glass group flex flex-col rounded-2xl p-7 md:p-9 ${v.span}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-deep text-black shadow-[0_8px_30px_-8px_rgba(0,200,83,0.7)]">
                  <v.icon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                  {v.pill}
                </span>
              </div>
              <h3 className="mt-10 font-heading text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
                {v.title}
              </h3>
              <p className="mt-3 max-w-[520px] text-base leading-relaxed text-text-secondary">
                {v.description}
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                {v.tasks.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 font-mono text-[11px] text-text-secondary transition-colors group-hover:border-accent/30 group-hover:text-text-primary"
                  >
                    <span className="text-accent">✓</span> {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
