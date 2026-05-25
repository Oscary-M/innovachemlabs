export const NAV_LINKS = ["Servicios", "Proceso", "Laboratorio", "Contacto"];

export const WHATSAPP_URL = "https://wa.me/5491131232401?text=%C2%A1Hola%20Innova!%2C%20quiero%20mas%20informacion";

export const HERO_CONTENT = {
  headline: "Rediseñamos la esencia de tus productos.",
  subheadline:
    "Consultoría química de alta precisión: optimización de costos, estabilidad y rediseño de fórmulas industriales.",
  cta: "Agendar Consultoría",
};

export const SERVICES = [
  {
    id: 1,
    title: "Reformulación",
    description:
      "Optimizamos productos existentes para reducir costos, mejorar rendimiento y adaptarlos a nuevas regulaciones del mercado.",
    size: "large" as const,
    verb: "Auditamos",
  },
  {
    id: 2,
    title: "Desarrollo I+D",
    description:
      "Creación de formulaciones desde cero con base científica sólida. Desde la idea hasta el producto terminado.",
    size: "medium" as const,
    verb: "Innovamos",
  },
  {
    id: 3,
    title: "Pruebas de Estabilidad",
    description:
      "Ensayos de vida útil, compatibilidad de envases y estudios de estabilidad acelerada bajo normas internacionales.",
    size: "small" as const,
    verb: "Validamos",
  },
  {
    id: 4,
    title: "Documentación Técnica",
    description:
      "Fichas técnicas, hojas de seguridad (MSDS), dossiers regulatorios y especificaciones de calidad.",
    size: "small" as const,
    verb: "Documentamos",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Diagnóstico Inicial",
    description: "Analizamos tu producto actual, entendemos tus objetivos y evaluamos las oportunidades de mejora técnica y económica.",
  },
  {
    step: 2,
    title: "Diseño de Propuesta",
    description: "Elaboramos una propuesta técnica detallada con alternativas de formulación, costos estimados y cronograma de trabajo.",
  },
  {
    step: 3,
    title: "Desarrollo en Laboratorio",
    description: "Ejecutamos pruebas de laboratorio, ajustes de fórmula y ensayos de estabilidad hasta alcanzar los parámetros deseados.",
  },
  {
    step: 4,
    title: "Entrega & Escalado",
    description: "Entregamos la fórmula validada con documentación completa y acompañamos el escalado a producción industrial.",
  },
];

export const CONTACT_INFO = {
  phone: "+54 9 11 31232401",
  email: "innovachems.labs@gmail.com",
  instagram: "@innovachemlabs",
  linkedin: "Innova Chem",
  address: "Buenos Aires, Argentina",
};

// Optional: set this to your Formspree endpoint or other form endpoint that accepts JSON POSTs.
// Example Formspree endpoint: "https://formspree.io/f/yourId"
export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/xeedlpol";
