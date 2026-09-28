// Tutti i testi e i dati del sito in un unico posto: modificare qui, non nei componenti.

export const club = {
  name: "Club Interamnia",
  tagline: "Fitness & Day Spa",
  city: "Teramo",
  address: "Via Ponte San Giovanni snc, 64100 Teramo (TE)",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Club+Interamnia+Via+Ponte+San+Giovanni+Teramo",
  phone: "+39 0861 240103",
  phoneHref: "tel:+390861240103",
  whatsapp: "393929617455",
  whatsappLabel: "+39 392 961 7455",
  email: "info@interamniaclub.it",
  padelUrl:
    "https://playtomic.io/club-interamnia/1716e2a9-672d-446f-a639-cd604b99089b",
  areaPersonaleUrl: "https://inforyou.teamsystem.com/clubinteramnia/",
  orariUrl: "https://www.interamniaclub.it/orari/",
  legal:
    "Polisportiva Interamnia s.s.d. a r.l. · Sede legale: via Fieno 3, 20123 Milano (MI) · P.I. e C.F. 01968080679",
  socials: {
    instagram: "https://www.instagram.com/club_interamnia/",
    facebook: "https://www.facebook.com/Club.Interamnia",
    youtube: "http://www.youtube.com/user/ClubInteramnia",
  },
  hours: [
    { days: "Lun — Ven", time: "06:30 — 21:45" },
    { days: "Sabato", time: "08:00 — 20:00" },
    { days: "Domenica", time: "Chiuso" },
  ],
  hoursNote: "Chiusura estiva dall'8 al 16 agosto.",
};

export const waLink = (text: string) =>
  `https://wa.me/${club.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: "Il Club", href: "#club" },
  { label: "Corsi", href: "#corsi" },
  { label: "Personal", href: "#personal" },
  { label: "Day Spa", href: "#spa" },
  { label: "Abbonamenti", href: "#abbonamenti" },
  { label: "Contatti", href: "#contatti" },
];

export const ticker = [
  "100+ corsi",
  "50+ macchinari Technogym®",
  "Piscina 25 m",
  "Piscina estiva",
  "Day Spa",
  "Padel",
  "Personal Trainer",
  "Aperti dalle 06:30",
];

export const stats = [
  { value: "100+", label: "Corsi ogni settimana" },
  { value: "50+", label: "Macchinari Technogym®" },
  { value: "25m", label: "Piscina coperta, 4 corsie" },
  { value: "40", label: "Bike nella sala cycling" },
];

export const pillars = [
  {
    id: "fitness",
    kicker: "01 — Fitness",
    title: "Allenati senza limiti",
    text: "Sala attrezzi con oltre 50 macchinari Technogym® di ultima generazione, linea cardio Excite connessa e tre sale corsi. Luce naturale, spazio, zero attese.",
    image: "/images/sala-attrezzi.jpg",
    alt: "Sala attrezzi Technogym del Club Interamnia",
  },
  {
    id: "piscina",
    kicker: "02 — Piscina",
    title: "L'acqua è la tua palestra",
    text: "Piscina coperta da 25 metri e 4 corsie per nuoto libero, scuola nuoto e acqua fitness. D'estate, la piscina esterna immersa nel verde.",
    image: "/images/piscina-nuoto.jpg",
    alt: "Nuotatori nella piscina coperta da 25 metri",
  },
  {
    id: "spa",
    kicker: "03 — Day Spa",
    title: "Recupera come un atleta",
    text: "Sauna finlandese, bagno turco, stanza del sale, idromassaggio, percorso Kneipp e docce emozionali. Il recupero è parte dell'allenamento.",
    image: "/images/spa-relax.jpg",
    alt: "Area relax della Day Spa con fontana e lettini",
  },
];

export const sale = [
  {
    name: "Giove",
    role: "Corsi di gruppo",
    text: "La sala principale. Musica alta, energia alle stelle, tutti i corsi del palinsesto.",
    image: "/images/sala-corsi.jpg",
  },
  {
    name: "Marte",
    role: "Group Cycling",
    text: "40 Group Cycle Technogym con regolazione ON THE FLY. Qui si suda sul serio.",
    image: "/images/sala-marte-cycling.jpg",
  },
  {
    name: "Mercurio",
    role: "Walking & corpo libero",
    text: "Tatami a tutta sala per Walking®, TRX, Pilates, Yoga e Zumba.",
    image: "/images/functional.jpg",
  },
  {
    name: "Nettuno",
    role: "Piscina",
    text: "25 metri, 4 corsie. Nuoto libero, scuola nuoto per adulti e bambini, acqua fitness.",
    image: "/images/piscina-interna.jpg",
  },
];

export const corsi = [
  {
    group: "Fitness",
    items: [
      "Functional Training",
      "Bootcamp",
      "Total Body",
      "Power Pump",
      "Cardio Cross Training",
      "Calisthenic Work Out",
      "Gambe Addome Glutei",
      "Woman Functional",
      "Dance Fitness",
      "Pole Dance",
    ],
  },
  {
    group: "Cycling & Walking",
    items: ["Group Cycling", "Interval Bike", "Cyclex", "Walking a Circuito", "Walking Progress", "Passeggiata Sportiva"],
  },
  {
    group: "Combat",
    items: ["Boxe", "Fit Boxe", "Kick Boxing", "MMA", "Aeroboxing", "Cross Fit Boxe", "Karate Bambini", "Aikido", "Taekwondo"],
  },
  {
    group: "Mind & Body",
    items: ["Yoga", "Pilates Matwork", "Pilates Posturale", "Programma Posturale", "Ginnastica Dolce", "Lezione per Gestanti"],
  },
  {
    group: "Acqua",
    items: ["Nuoto Libero", "Scuola Nuoto Adulti", "Scuola Nuoto Bimbi", "Acqua Gym", "Acqua Tonic", "Acqua Jump", "Idrobike", "Agonismo"],
  },
];

export const personal = {
  title: "PT Pack",
  subtitle: "3 sessioni 1 to 1 da 30 minuti per sentire la differenza.",
  steps: [
    {
      n: "01",
      title: "Definisci l'obiettivo",
      text: "Stile di vita, orari, obiettivi reali. Il tuo trainer costruisce la strategia su di te.",
    },
    {
      n: "02",
      title: "Inizia il percorso",
      text: "Programma personalizzato, esercizi spiegati passo dopo passo, motivazione costante.",
    },
    {
      n: "03",
      title: "Dai il massimo",
      text: "L'allenamento diventa intenso e mirato: tiriamo fuori tutto il tuo potenziale.",
    },
  ],
  modes: [
    { name: "1 to 1", text: "Il trainer è tutto per te." },
    { name: "Duetto", text: "Allenati con un amico." },
    { name: "Small Group", text: "Più motivazione, stesso focus." },
    { name: "Checkup Station", text: "Scopri la tua Wellness Age." },
  ],
};

export const spa = [
  { name: "Sauna finlandese", temp: "80–90°", time: "10–15 min", note: "Scioglie l'acido lattico dopo la tonificazione." },
  { name: "Bagno turco", temp: "20–50°", time: "10–20 min", note: "Elimina le tossine dopo cardio e combat." },
  { name: "Stanza del sale", temp: "Graduation Tower", time: "—", note: "Difese immunitarie e pelle più sana." },
  { name: "Idromassaggio", temp: "38–40°", time: "10–15 min", note: "Defaticamento dopo la sala attrezzi." },
  { name: "Percorso Kneipp", temp: "Caldo / freddo", time: "—", note: "Gambe leggere dopo il cycling." },
  { name: "Docce emozionali", temp: "Cromoterapia", time: "—", note: "Il finale perfetto dopo Yoga e Pilates." },
];

export const abbonamenti = [
  {
    name: "Mensile",
    kicker: "Ricorrente",
    text: "La libertà di un rinnovo automatico, senza vincoli lunghi.",
    features: ["Sala attrezzi", "Corsi inclusi", "Piscina"],
  },
  {
    name: "Annuale",
    kicker: "Il più scelto",
    text: "Il miglior valore per chi fa sul serio tutto l'anno.",
    features: ["Sala attrezzi", "Corsi inclusi", "Piscina", "Miglior prezzo mensile"],
    featured: true,
  },
  {
    name: "A consumo",
    kicker: "Flessibile",
    text: "Ingressi quando vuoi tu. Ideale se viaggi o hai orari variabili.",
    features: ["Carnet di ingressi", "Nessun vincolo"],
  },
  {
    name: "Day Spa",
    kicker: "Benessere",
    text: "Il percorso Spa completo, anche per chi non si allena al Club.",
    features: ["Sauna e bagno turco", "Stanza del sale", "Idromassaggio"],
  },
];

export const obiettivi = [
  "Tornare in forma",
  "Dimagrire",
  "Aumentare la massa",
  "Nuoto",
  "Corsi di gruppo",
  "Benessere e Spa",
];
