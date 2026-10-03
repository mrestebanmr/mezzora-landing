"use client";

import { useState } from "react";
import { Check, MapPin } from "lucide-react";
import { contact, contactSection as c, instagramDmUrl, whatsappUrl } from "@/lib/content";
import { InstagramIcon, WhatsappIcon } from "./Icons";

const webhook = process.env.NEXT_PUBLIC_LEAD_WEBHOOK;

const inputCls =
  "w-full rounded-2xl border border-porcelain/15 bg-porcelain/5 px-4 py-3.5 text-porcelain placeholder:text-porcelain/40 outline-none transition-colors focus:border-terracotta";

export default function ContactForm() {
  const [types, setTypes] = useState<string[]>([]);
  const [notice, setNotice] = useState(false);
  const viaWhatsapp = Boolean(contact.whatsapp);

  function toggle(t: string) {
    setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lead = {
      name: String(data.get("name") ?? "").trim(),
      clinic: String(data.get("clinic") ?? "").trim(),
      city: String(data.get("city") ?? "").trim(),
      workTypes: types,
      message: String(data.get("message") ?? "").trim(),
    };

    const text = [
      `Hola Christian, soy ${lead.name}${lead.clinic ? ` de ${lead.clinic}` : ""}${lead.city ? ` (${lead.city})` : ""}.`,
      lead.workTypes.length ? `Quiero enviarte un caso de: ${lead.workTypes.join(", ")}.` : "Quiero enviarte un caso.",
      lead.message,
    ]
      .filter(Boolean)
      .join("\n");

    // La ventana se abre antes de cualquier await para que el navegador no la bloquee.
    const wa = whatsappUrl(text);
    window.open(wa ?? instagramDmUrl, "_blank", "noopener,noreferrer");

    if (!wa) {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // Sin permiso de portapapeles: el aviso igual orienta al usuario.
      }
      setNotice(true);
    }

    if (webhook) {
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, source: "landing", createdAt: new Date().toISOString() }),
      }).catch(() => {});
    }
  }

  return (
    <section id="contacto" className="bg-graphite py-24 text-porcelain md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p data-reveal className="eyebrow text-terracotta">{c.eyebrow}</p>
          <h2 data-reveal className="font-display mt-5 text-4xl leading-[1.08] font-medium text-balance md:text-5xl">{c.title}</h2>
          <p data-reveal className="mt-5 max-w-md text-base leading-relaxed text-porcelain/70 md:text-lg">{c.body}</p>
          <div data-reveal className="mt-10 flex items-start gap-3 text-sm text-porcelain/80">
            <MapPin className="mt-0.5 h-4 w-4 text-terracotta" aria-hidden="true" />
            <span>
              {c.location}
              <span className="block text-porcelain/55">{c.locationNote}</span>
            </span>
          </div>
        </div>

        <form data-reveal onSubmit={onSubmit} className="space-y-4 rounded-[2rem] border border-porcelain/10 bg-graphite-soft/60 p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">{c.fields.name}</span>
              <input name="name" required autoComplete="name" placeholder={c.fields.name} className={inputCls} />
            </label>
            <label className="block">
              <span className="sr-only">{c.fields.clinic}</span>
              <input name="clinic" autoComplete="organization" placeholder={c.fields.clinic} className={inputCls} />
            </label>
          </div>
          <label className="block">
            <span className="sr-only">{c.fields.city}</span>
            <input name="city" autoComplete="address-level2" placeholder={c.fields.city} className={inputCls} />
          </label>

          <fieldset>
            <legend className="eyebrow mb-3 text-porcelain/60">{c.workTypesLabel}</legend>
            <div className="flex flex-wrap gap-2">
              {c.workTypes.map((t) => {
                const on = types.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(t)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors ${
                      on ? "border-terracotta bg-terracotta text-graphite" : "border-porcelain/20 text-porcelain/80 hover:border-porcelain/50"
                    }`}
                  >
                    {on && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                    {t}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="block">
            <span className="sr-only">{c.fields.message}</span>
            <textarea name="message" rows={4} placeholder={c.fields.messagePlaceholder} className={`${inputCls} resize-none`} />
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-porcelain px-6 py-4 text-sm font-semibold text-graphite transition-colors hover:bg-white"
          >
            {viaWhatsapp ? <WhatsappIcon className="h-4 w-4" /> : <InstagramIcon className="h-4 w-4" />}
            {viaWhatsapp ? c.submitWhatsapp : c.submitInstagram}
          </button>
          <p role="status" className="min-h-5 text-center text-sm text-terracotta">
            {notice ? c.instagramNotice : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
