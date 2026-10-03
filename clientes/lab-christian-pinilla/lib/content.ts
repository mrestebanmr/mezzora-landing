// Todo el texto y los datos de la landing viven aquí.
// Los componentes no llevan textos: los cambios del cliente se hacen en este archivo.
//
// PENDIENTES (datos que aún no tenemos):
//  - contact.whatsapp: número en formato internacional sin "+" (ej. "573001234567").
//    Mientras esté vacío, los CTA llevan al DM de Instagram.
//  - contact.address: dirección exacta (hoy solo "Ciudad Jardín, Cali").
//  - Confirmar nombre: la bio de Instagram dice "Cristian", la marca "Christian".

export const brand = {
  name: "Christian Pinilla",
  descriptor: "Laboratorio dental",
  city: "Cali",
  neighborhood: "Ciudad Jardín",
};

export const contact = {
  whatsapp: "",
  instagram: "labchristian_pinilla",
  address: "Ciudad Jardín, Cali, Colombia",
};

export const instagramUrl = `https://www.instagram.com/${contact.instagram}/`;
export const instagramDmUrl = `https://ig.me/m/${contact.instagram}`;

export function whatsappUrl(text?: string) {
  if (!contact.whatsapp) return null;
  const q = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${contact.whatsapp}${q}`;
}

/** Destino de los CTA: WhatsApp si hay número, si no el DM de Instagram. */
export function primaryContactUrl(text?: string) {
  return whatsappUrl(text) ?? instagramDmUrl;
}

export const defaultMessage =
  "Hola Christian, soy odontólogo/a y quiero enviarte un caso.";

export const nav = {
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: "Enviar un caso",
};

export const hero = {
  eyebrow: "Laboratorio dental · Cali",
  titleTop: "Cerámica hecha a mano.",
  titleBottom: "Precisión digital.",
  subtitle:
    "Diseño CAD/CAM 3D, carillas cerámicas estratificadas, prótesis fija y zirconio para odontólogos de todo el país. Un solo técnico responsable de tu caso, de principio a fin.",
  ctaPrimary: "Enviar un caso",
  ctaSecondary: "Ver trabajos",
  badges: ["Estratificado a mano", "Diseño CAD/CAM 3D", "Zirconio"],
  photo: {
    src: "/images/carillas-estratificadas-detalle.jpg",
    alt: "Carillas cerámicas estratificadas sobre modelo de yeso, vista de detalle",
    width: 360,
    height: 280,
  },
};

export const ticker = [
  "Diseño CAD/CAM 3D",
  "Carillas cerámicas estratificadas",
  "Prótesis fija",
  "Zirconio",
  "Casos de todo el país",
  "Hecho en Cali",
];

export const manifesto = {
  eyebrow: "Un laboratorio, una persona",
  title: "Un solo par de manos. Cada caso, de principio a fin.",
  body: [
    "En un laboratorio grande tu caso pasa por varias manos antes de volver a tu consultorio. Aquí lo diseña, lo fabrica y lo revisa la misma persona: Christian Pinilla.",
    "Si algo hay que ajustar, hablas directo con quien hizo el trabajo. Sin intermediarios, sin teléfono roto.",
  ],
  stats: [
    { value: 300, prefix: "+", suffix: "", label: "sonrisas entregadas en todo el país" },
    { value: 2, prefix: "", suffix: "", label: "años dedicados a la cerámica dental" },
    { value: 1, prefix: "", suffix: "", label: "técnico responsable de cada caso" },
    { value: 4, prefix: "", suffix: "", label: "especialidades bajo un mismo techo" },
  ],
};

export const services = {
  eyebrow: "Servicios",
  title: "Lo que sale de este laboratorio",
  intro:
    "Cuatro especialidades, un mismo estándar: que la restauración no se note.",
  items: [
    {
      key: "cadcam",
      name: "Diseño CAD/CAM 3D",
      text: "Cada pieza se diseña en digital antes de fabricarse: anatomía, contactos y oclusión planificados con precisión.",
    },
    {
      key: "carillas",
      name: "Carillas cerámicas estratificadas",
      text: "Cerámica aplicada capa por capa, a mano, para lograr la translucidez y el color de un diente natural.",
    },
    {
      key: "fija",
      name: "Prótesis fija",
      text: "Coronas y puentes con ajuste marginal cuidado y una estética que se integra con el resto de la sonrisa.",
    },
    {
      key: "zirconio",
      name: "Zirconio",
      text: "Resistencia para el sector posterior y estética para el anterior, en un material biocompatible y duradero.",
    },
  ],
};

export const works = {
  eyebrow: "Trabajos",
  title: "Desde el banco de trabajo",
  intro:
    "Carillas cerámicas estratificadas, recién salidas del horno. Más casos cada semana en Instagram.",
  cta: "Ver más en Instagram",
  photos: [
    {
      src: "/images/carillas-estratificadas-mano.jpg",
      alt: "Arcada superior de carillas cerámicas estratificadas sobre modelo, vista lateral",
      width: 360,
      height: 280,
      caption: "Carillas estratificadas · arcada completa",
    },
    {
      src: "/images/carillas-estratificadas-detalle.jpg",
      alt: "Detalle de carillas cerámicas en incisivos y caninos sobre modelo de yeso",
      width: 360,
      height: 280,
      caption: "Detalle de translucidez incisal",
    },
    {
      src: "/images/carillas-estratificadas-perfil.jpg",
      alt: "Carillas cerámicas estratificadas vistas de perfil sobre modelo",
      width: 256,
      height: 280,
      caption: "Perfil de emergencia",
    },
  ],
};

export const shades = {
  eyebrow: "El color",
  title: "Dieciséis tonos. Uno es el de tu paciente.",
  body: "Elegir el color es la mitad del trabajo. La otra mitad es estratificarlo capa por capa, para que la luz atraviese la cerámica como atraviesa un diente natural.",
  hint: "Toca un tono de la guía",
  groups: [
    { family: "A", label: "Rojizo-marrón" },
    { family: "B", label: "Rojizo-amarillento" },
    { family: "C", label: "Gris" },
    { family: "D", label: "Rojizo-gris" },
  ],
  // Aproximación en pantalla de la guía VITA clásica: solo ilustrativa.
  list: [
    { id: "A1", hex: "#F3EAD8" },
    { id: "A2", hex: "#ECDDC1" },
    { id: "A3", hex: "#E4D0AA" },
    { id: "A3.5", hex: "#DAC197" },
    { id: "A4", hex: "#CCAF82" },
    { id: "B1", hex: "#F5EDDD" },
    { id: "B2", hex: "#EEDFC2" },
    { id: "B3", hex: "#E2CCA1" },
    { id: "B4", hex: "#D9BF8F" },
    { id: "C1", hex: "#E7DDCA" },
    { id: "C2", hex: "#DDD0B6" },
    { id: "C3", hex: "#D0C1A0" },
    { id: "C4", hex: "#C0AE8A" },
    { id: "D2", hex: "#E5D9C4" },
    { id: "D3", hex: "#DDCEB2" },
    { id: "D4", hex: "#D3C4A4" },
  ],
  defaultId: "A2",
  disclaimer:
    "Colores aproximados en pantalla. El color final se toma con guía física en el consultorio.",
};

export const process = {
  eyebrow: "Proceso",
  title: "Del consultorio al laboratorio, y de vuelta",
  steps: [
    {
      n: "01",
      title: "Nos envías el caso",
      text: "Escríbenos con el tipo de trabajo, el color y las fotos o registros del paciente.",
    },
    {
      n: "02",
      title: "Diseño 3D",
      text: "Cada pieza se planifica en CAD/CAM: forma, contactos y oclusión antes de fabricar.",
    },
    {
      n: "03",
      title: "Fabricación a mano",
      text: "Fabricación a partir del diseño digital y cerámica estratificada capa por capa para el acabado final.",
    },
    {
      n: "04",
      title: "Entrega y seguimiento",
      text: "Recibes el trabajo y cualquier ajuste lo resuelves directo con Christian.",
    },
  ],
};

export const contactSection = {
  eyebrow: "Contacto",
  title: "Cuéntanos tu próximo caso",
  body: "Llena el formulario y se abre la conversación con el mensaje ya escrito. Respuesta directa de Christian, sin intermediarios.",
  fields: {
    name: "Tu nombre",
    clinic: "Consultorio o clínica",
    city: "Ciudad",
    message: "Detalles del caso (opcional)",
    messagePlaceholder: "Ej.: 6 carillas anteriores, color A1, fotos listas.",
  },
  workTypesLabel: "Tipo de trabajo",
  workTypes: ["Carillas", "Coronas", "Puentes", "Zirconio", "Diseño CAD/CAM", "Otro"],
  submitWhatsapp: "Enviar por WhatsApp",
  submitInstagram: "Enviar por Instagram",
  instagramNotice:
    "Copiamos tu mensaje. Pégalo en el chat de Instagram que se acaba de abrir.",
  location: "Ciudad Jardín, Cali",
  locationNote: "Atendemos casos de todo el país.",
};

export const footer = {
  tagline: "Cerámica hecha a mano. Precisión digital.",
  credit: "Sitio diseñado por Mezzora",
};
