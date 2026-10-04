// Todo el texto de la landing, por idioma. Los componentes no llevan copy
// hardcodeado: para cambiar un texto o añadir un idioma se toca solo este archivo.

export type Locale = "it" | "es";

export const SITE_URL = "https://www.mezzora.io";
export const CALENDLY = "https://calendly.com/mezzora";
export const WHATSAPP_NUMBER = "393279873102";

export const locales: { code: Locale; href: string; label: string }[] = [
  { code: "it", href: "/", label: "Italiano" },
  { code: "es", href: "/es", label: "Español" },
];

const it = {
  meta: {
    title: "Mezzora — Automazione intelligente per imprese italiane",
    description:
      "Eliminiamo le attività ripetitive del tuo business con automazione e IA. Per palestre, ristoranti, locali ed e-commerce italiani.",
    ogLocale: "it_IT",
  },
  whatsappText: "Ciao Esteban, ho visto Mezzora e vorrei saperne di più",
  nav: {
    home: "Mezzora — torna su",
    langLabel: "Lingua",
    links: [
      { href: "#problema", label: "Problema" },
      { href: "#soluzione", label: "Soluzione" },
      { href: "#settori", label: "Settori" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Prenota call",
  },
  hero: {
    badge: "Automazione IA · per imprese italiane",
    title: "Automatizziamo ciò che ti ruba tempo.",
    titleAccent: "Senza snaturare il tuo business.",
    subtitle:
      "Mezzora è l'agenzia italiana che usa l'IA per eliminare le attività ripetitive del tuo business — palestre, ristoranti, locali, e-commerce. Ti restituiamo ore, non complicazioni.",
    ctaPrimary: "Prenota una call di 20 minuti",
    ctaSecondary: "Scrivimi su WhatsApp",
    stats: [
      { value: 15, prefix: "+", suffix: "h", label: "risparmiate al mese per cliente" },
      { value: 3, prefix: "", suffix: "", label: "verticali specializzati" },
      { value: 14, prefix: "", suffix: "gg", label: "per il primo sistema attivo" },
    ],
    console: {
      path: "mezzora / flusso: prova-gratuita",
      footer: "eseguito senza intervento manuale",
      steps: [
        { tag: "TRIGGER", title: "Nuovo messaggio WhatsApp", detail: "“Ciao! Posso prenotare una prova?”" },
        { tag: "IA", title: "Intento riconosciuto", detail: "prenotazione · lingua: IT" },
        { tag: "AZIONE", title: "Slot confermato", detail: "giovedì 18:30 · promemoria inviato" },
        { tag: "CRM", title: "Lead registrato", detail: "follow-up automatico tra 24h" },
      ],
    },
  },
  ticker: {
    title: "Si integra con gli strumenti che usi già",
    items: ["WhatsApp", "Prenotazioni", "Calendari", "CRM", "E-commerce", "Pagamenti", "Email", "Gestionali", "Dati in UE", "GDPR"],
  },
  problem: {
    eyebrow: "Il problema",
    title: "Stai perdendo tempo",
    titleMuted: "ogni giorno.",
    subtitle:
      "La maggior parte dei titolari di piccole imprese spende ore preziose in attività ripetitive che non generano valore. È normale — ma non è inevitabile.",
    items: [
      { title: "Ore perse ogni giorno", description: "Risposte, follow-up, aggiornamenti manuali. Attività che si ripetono, giorno dopo giorno." },
      { title: "Processi lenti e disorganizzati", description: "Informazioni sparse, strumenti che non comunicano, errori umani che costano caro." },
      { title: "Opportunità che sfuggono", description: "Senza sistemi, perdi clienti potenziali mentre sei occupato con il lavoro operativo." },
    ],
  },
  solution: {
    eyebrow: "La soluzione",
    title: "Sistemi che lavorano",
    titleAccent: "al posto tuo.",
    subtitle:
      "Creiamo sistemi intelligenti che automatizzano il tuo lavoro operativo. Tu ti concentri su ciò che conta — il resto lo gestiamo noi.",
    steps: [
      { title: "Gestione automatica dei clienti", description: "Acquisizione, follow-up e comunicazione con i clienti gestiti in modo completamente automatico." },
      { title: "Risposte automatiche su WhatsApp", description: "Il tuo business risponde in tempo reale, anche quando sei impegnato o fuori orario." },
      { title: "Integrazione tra i tuoi strumenti", description: "Tutti i tuoi software parlano tra loro. Nessun copia-incolla, nessun dato perso." },
      { title: "Flussi senza intervento manuale", description: "Dai preventivi alle fatture, dai lead alle prenotazioni: tutto scorre senza toccare nulla." },
    ],
  },
  verticals: {
    eyebrow: "Per chi è Mezzora",
    title: "Settori che trasformiamo.",
    subtitle: "Lavoriamo con attività italiane che vogliono crescere senza impazzire.",
    items: [
      {
        pill: "Fitness & Sport",
        title: "Palestre",
        description: "Gestione iscritti, prenotazioni classi, promemoria pagamenti e riattivazione membri inattivi.",
        tasks: ["iscrizioni", "classi", "rinnovi"],
      },
      {
        pill: "Ristorazione",
        title: "Ristoranti & Locali",
        description: "Conferma prenotazioni, gestione liste d'attesa, comunicazioni clienti e raccolta feedback.",
        tasks: ["prenotazioni", "lista d'attesa", "recensioni"],
      },
      {
        pill: "Vendita online",
        title: "E-commerce",
        description: "Gestione ordini, assistenza clienti, recupero carrelli abbandonati e aggiornamenti in tempo reale.",
        tasks: ["ordini", "carrelli", "assistenza"],
      },
      {
        pill: "PMI",
        title: "Piccole imprese",
        description: "Eliminiamo il lavoro manuale quotidiano: preventivi, follow-up, fatturazione e comunicazione clienti.",
        tasks: ["preventivi", "fatture", "follow-up"],
      },
    ],
  },
  faq: {
    eyebrow: "Domande frequenti",
    title: "Le risposte che cerchi.",
    subtitle: "Tutto quello che devi sapere prima di iniziare.",
    items: [
      {
        q: "Quanto tempo serve per vedere i primi risultati?",
        a: "Il sistema va in produzione entro 14-20 giorni dalla firma. I primi risultati misurabili (riduzione no-show, riattivazioni) sono visibili dal primo mese di operatività.",
      },
      {
        q: "I miei dati sono al sicuro?",
        a: "Sì. Tutti i dati restano in UE (server in Germania), siamo conformi GDPR e firmiamo un DPA con ogni cliente. Non condividiamo dati con terze parti non autorizzate.",
      },
      {
        q: "Devo cambiare i miei strumenti attuali?",
        a: "No. Mezzora si integra con il gestionale che già usi (calendari, CRM, e-commerce). Aggiungiamo intelligenza, non sostituiamo quello che funziona.",
      },
      {
        q: "Cosa succede se voglio interrompere il servizio?",
        a: "Disdetta libera con 30 giorni di preavviso. Niente penali. Ti consegniamo backup di flussi e configurazioni se vuoi continuare in autonomia.",
      },
      {
        q: "Quanto costa?",
        a: "Dipende dal verticale e dalla complessità. Generalmente: setup una tantum + canone mensile. Parliamone in una call di 20 minuti — capiamo se ha senso e ti faccio un preventivo concreto.",
      },
    ],
  },
  cta: {
    eyebrow: "Inizia oggi",
    title: "Inizia a lavorare meno.",
    titleAccent: "Guadagnare di più.",
    subtitle: "Una call di 20 minuti è sufficiente per capire se possiamo aiutarti. Nessun impegno, nessuna pressione.",
    primary: "Prenota una call gratuita",
    secondary: "Scrivimi su WhatsApp",
    note: "Risposta garantita entro 24 ore · Nessun costo nascosto",
  },
  footer: {
    tagline: "Automazione intelligente per imprese italiane.",
    contacts: "Contatti",
    resources: "Risorse",
    bookCall: "Prenota call",
    office: "Sede",
    city: "Teramo, Italia",
    vat: "P.IVA in fase di costituzione",
    rights: "© 2026 Mezzora · Tutti i diritti riservati",
  },
};

export type Dict = typeof it;

const es: Dict = {
  meta: {
    title: "Mezzora — Automatización inteligente para empresas",
    description:
      "Eliminamos las tareas repetitivas de tu negocio con automatización e IA. Para gimnasios, restaurantes, locales y e-commerce.",
    ogLocale: "es_ES",
  },
  whatsappText: "Hola Esteban, he visto Mezzora y me gustaría saber más",
  nav: {
    home: "Mezzora — volver arriba",
    langLabel: "Idioma",
    links: [
      { href: "#problema", label: "Problema" },
      { href: "#soluzione", label: "Solución" },
      { href: "#settori", label: "Sectores" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Hablemos",
  },
  hero: {
    badge: "Automatización IA · para empresas",
    title: "Automatizamos lo que te roba tiempo.",
    titleAccent: "Sin desvirtuar tu negocio.",
    subtitle:
      "Mezzora es la agencia que usa la IA para eliminar las tareas repetitivas de tu negocio — gimnasios, restaurantes, locales, e-commerce. Te devolvemos horas, no complicaciones.",
    ctaPrimary: "Reserva una llamada de 20 minutos",
    ctaSecondary: "Escríbeme por WhatsApp",
    stats: [
      { value: 15, prefix: "+", suffix: "h", label: "ahorradas al mes por cliente" },
      { value: 3, prefix: "", suffix: "", label: "sectores especializados" },
      { value: 14, prefix: "", suffix: "d", label: "para el primer sistema activo" },
    ],
    console: {
      path: "mezzora / flujo: prueba-gratuita",
      footer: "ejecutado sin intervención manual",
      steps: [
        { tag: "TRIGGER", title: "Nuevo mensaje de WhatsApp", detail: "“¡Hola! ¿Puedo reservar una prueba?”" },
        { tag: "IA", title: "Intención reconocida", detail: "reserva · idioma: ES" },
        { tag: "ACCIÓN", title: "Cita confirmada", detail: "jueves 18:30 · recordatorio enviado" },
        { tag: "CRM", title: "Lead registrado", detail: "seguimiento automático en 24 h" },
      ],
    },
  },
  ticker: {
    title: "Se integra con lo que ya usas",
    items: ["WhatsApp", "Reservas", "Calendarios", "CRM", "E-commerce", "Pagos", "Email", "Software de gestión", "Datos en la UE", "RGPD"],
  },
  problem: {
    eyebrow: "El problema",
    title: "Estás perdiendo tiempo",
    titleMuted: "cada día.",
    subtitle:
      "La mayoría de los dueños de pequeñas empresas dedica horas valiosas a tareas repetitivas que no generan valor. Es normal — pero no es inevitable.",
    items: [
      { title: "Horas perdidas cada día", description: "Respuestas, seguimientos, actualizaciones manuales. Tareas que se repiten, día tras día." },
      { title: "Procesos lentos y desorganizados", description: "Información dispersa, herramientas que no se comunican, errores humanos que salen caros." },
      { title: "Oportunidades que se escapan", description: "Sin sistemas, pierdes clientes potenciales mientras estás ocupado con el trabajo operativo." },
    ],
  },
  solution: {
    eyebrow: "La solución",
    title: "Sistemas que trabajan",
    titleAccent: "por ti.",
    subtitle:
      "Creamos sistemas inteligentes que automatizan tu trabajo operativo. Tú te centras en lo que importa — del resto nos encargamos nosotros.",
    steps: [
      { title: "Gestión automática de clientes", description: "Captación, seguimiento y comunicación con los clientes gestionados de forma totalmente automática." },
      { title: "Respuestas automáticas en WhatsApp", description: "Tu negocio responde en tiempo real, incluso cuando estás ocupado o fuera de horario." },
      { title: "Integración entre tus herramientas", description: "Todo tu software se comunica entre sí. Sin copiar y pegar, sin datos perdidos." },
      { title: "Flujos sin intervención manual", description: "De los presupuestos a las facturas, de los leads a las reservas: todo fluye sin tocar nada." },
    ],
  },
  verticals: {
    eyebrow: "Para quién es Mezzora",
    title: "Sectores que transformamos.",
    subtitle: "Trabajamos con negocios que quieren crecer sin volverse locos.",
    items: [
      {
        pill: "Fitness y deporte",
        title: "Gimnasios",
        description: "Gestión de socios, reservas de clases, recordatorios de pago y reactivación de socios inactivos.",
        tasks: ["altas", "clases", "renovaciones"],
      },
      {
        pill: "Restauración",
        title: "Restaurantes y locales",
        description: "Confirmación de reservas, gestión de listas de espera, comunicación con clientes y recogida de opiniones.",
        tasks: ["reservas", "lista de espera", "reseñas"],
      },
      {
        pill: "Venta online",
        title: "E-commerce",
        description: "Gestión de pedidos, atención al cliente, recuperación de carritos abandonados y actualizaciones en tiempo real.",
        tasks: ["pedidos", "carritos", "atención"],
      },
      {
        pill: "Pymes",
        title: "Pequeñas empresas",
        description: "Eliminamos el trabajo manual diario: presupuestos, seguimientos, facturación y comunicación con clientes.",
        tasks: ["presupuestos", "facturas", "seguimiento"],
      },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Las respuestas que buscas.",
    subtitle: "Todo lo que necesitas saber antes de empezar.",
    items: [
      {
        q: "¿Cuánto tiempo hace falta para ver los primeros resultados?",
        a: "El sistema entra en producción entre 14 y 20 días después de la firma. Los primeros resultados medibles (menos ausencias, reactivaciones) se ven desde el primer mes de funcionamiento.",
      },
      {
        q: "¿Mis datos están seguros?",
        a: "Sí. Todos los datos se quedan en la UE (servidores en Alemania), cumplimos el RGPD y firmamos un contrato de encargado del tratamiento con cada cliente. No compartimos datos con terceros no autorizados.",
      },
      {
        q: "¿Tengo que cambiar mis herramientas actuales?",
        a: "No. Mezzora se integra con el software de gestión que ya usas (calendarios, CRM, e-commerce). Añadimos inteligencia, no sustituimos lo que funciona.",
      },
      {
        q: "¿Qué pasa si quiero dejar el servicio?",
        a: "Baja libre con 30 días de preaviso. Sin penalizaciones. Te entregamos una copia de los flujos y configuraciones si quieres seguir por tu cuenta.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Depende del sector y de la complejidad. Por lo general: configuración inicial única + cuota mensual. Hablemos en una llamada de 20 minutos — vemos si tiene sentido y te preparo un presupuesto concreto.",
      },
    ],
  },
  cta: {
    eyebrow: "Empieza hoy",
    title: "Empieza a trabajar menos.",
    titleAccent: "Y a ganar más.",
    subtitle: "Una llamada de 20 minutos basta para saber si podemos ayudarte. Sin compromiso, sin presión.",
    primary: "Reserva una llamada gratuita",
    secondary: "Escríbeme por WhatsApp",
    note: "Respuesta garantizada en 24 horas · Sin costes ocultos",
  },
  footer: {
    tagline: "Automatización inteligente para empresas.",
    contacts: "Contacto",
    resources: "Recursos",
    bookCall: "Reservar llamada",
    office: "Sede",
    city: "Teramo, Italia",
    vat: "P.IVA (Italia) en trámite",
    rights: "© 2026 Mezzora · Todos los derechos reservados",
  },
};

export const dictionaries: Record<Locale, Dict> = { it, es };

export function whatsappLink(t: Dict) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappText)}`;
}
