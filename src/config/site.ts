/**
 * ÚNICA fuente de contenido de la landing (ver specs/constitution.md §2).
 * Todo lo marcado con "EJEMPLO" debe reemplazarse por datos reales antes de publicar.
 */

export interface Module {
  title: string;
  summary: string;
  lessons: string[];
}
export interface Benefit {
  icon: string;
  title: string;
  text: string;
}
export interface Bonus {
  title: string;
  description: string;
}
export interface Testimonial {
  name: string;
  detail: string;
  quote: string;
  /** true = texto de ejemplo; se etiqueta como "Ejemplo" y avisa en el build. */
  placeholder?: boolean;
}
export interface FaqItem {
  question: string;
  answer: string;
}
export interface FooterLink {
  label: string;
  href: string;
}

export const site = {
  brand: "Vividia",
  locale: "es",
  /** Dominio final, sin barra final. Se usa en canonical y Open Graph. */
  url: "https://tudominio.com",
  /** Ruta en /public (p. ej. "/og.jpg", 1200×630). Vacío = sin imagen social. */
  ogImage: "",

  /** Enlace de checkout de Hotmart. */
  checkoutUrl: "https://pay.hotmart.com/REEMPLAZA_CON_TU_CODIGO",

  product: {
    name: "Jabones Artesanales desde Cero",
    description:
      "Curso online paso a paso para elaborar jabones artesanales naturales con el método en frío: seguridad, recetas, colores, aromas y acabados.",
  },

  cta: {
    label: "Quiero empezar ahora",
    secondary: "Ver qué aprenderás",
  },

  price: {
    amount: 47,
    /** Solo si el precio anterior fue real. null = no se muestra. */
    oldAmount: null as number | null,
    currency: "EUR",
    note: "Pago único · Acceso inmediato",
  },
  guaranteeDays: 7,

  hero: {
    eyebrow: "Curso online · Método en frío",
    title: "Crea jabones artesanales que huelen, limpian y se ven como de tienda",
    subtitle:
      "Aprende paso a paso, desde tu cocina y sin experiencia previa, a hacer tus propias barras de jabón natural con seguridad y resultados que dan orgullo.",
    bullets: [
      "Tu primera tanda de jabón lista en una tarde",
      "Recetas propias con calculadora de saponificación",
      "Colores, aromas y acabados con ingredientes naturales",
    ],
  },

  trust: ["Pago 100% seguro con Hotmart", "Garantía de 7 días", "Acceso inmediato tras la compra"],

  pains: {
    title: "¿Te suena alguna de estas situaciones?",
    items: [
      "Seguiste una receta de internet y el jabón salió blando, con grietas o con aceite en la superficie.",
      "Te da respeto la sosa cáustica y no sabes cómo manejarla con seguridad.",
      "Has gastado en aceites, moldes y esencias sin saber muy bien para qué sirve cada cosa.",
      "Las recetas no explican el porqué y no sabes cómo adaptarlas o crear las tuyas.",
      "Quieres jabones bonitos, con color y aroma, pero no sabes por dónde empezar.",
    ],
    resolution:
      "Con el método adecuado, hacer jabón deja de ser un experimento y se convierte en una receta que sale bien una y otra vez.",
  },

  modulesSection: {
    eyebrow: "Contenido del curso",
    title: "Todo lo que necesitas, en el orden correcto",
    subtitle: "Un recorrido guiado desde tu primera barra hasta tus propias recetas. (Temario de ejemplo)",
  },
  modules: [
    {
      title: "Módulo 1 · Bienvenida y seguridad",
      summary: "Prepara tu espacio y trabaja con confianza.",
      lessons: [
        "Materiales y utensilios imprescindibles",
        "Equipo de protección y buenas prácticas",
        "Cómo manejar la sosa cáustica con seguridad",
      ],
    },
    {
      title: "Módulo 2 · Fundamentos del jabón",
      summary: "Entiende qué ocurre en el molde para no depender de suerte.",
      lessons: [
        "Qué es la saponificación (explicado fácil)",
        "Aceites y mantecas: qué aporta cada uno",
        "Sobreengrasado y propiedades de la barra",
      ],
    },
    {
      title: "Módulo 3 · Tu primera receta",
      summary: "Una tanda completa, de principio a fin y paso a paso.",
      lessons: ["Pesado y preparación", "Mezcla, traza y moldeado", "Desmoldado, corte y primeras pruebas"],
    },
    {
      title: "Módulo 4 · Diseña tus propias recetas",
      summary: "Aprende a calcular y a adaptar sin miedo.",
      lessons: [
        "Uso de la calculadora de saponificación",
        "Cómo equilibrar dureza, espuma y suavidad",
        "Plantilla de receta para guardar tus tandas",
      ],
    },
    {
      title: "Módulo 5 · Color, aroma y aditivos naturales",
      summary: "Dale personalidad a tus jabones.",
      lessons: [
        "Arcillas, micas y colorantes naturales",
        "Aceites esenciales: dosis y precauciones",
        "Exfoliantes y aditivos (avena, café, flores…)",
      ],
    },
    {
      title: "Módulo 6 · Técnicas de decoración",
      summary: "Acabados que se ven profesionales.",
      lessons: ["Capas y degradados", "Remolinos (swirls)", "Moldes y texturas"],
    },
    {
      title: "Módulo 7 · Curado y solución de problemas",
      summary: "Qué hacer cuando algo no sale como esperabas.",
      lessons: [
        "Curado y almacenamiento",
        "Sudor, grietas, manchas y aceleraciones: causas y soluciones",
        "Lista de comprobación antes de cada tanda",
      ],
    },
    {
      title: "Módulo 8 · Presentación y primeros pasos para vender",
      summary: "Si quieres regalar o vender, empieza con buen pie.",
      lessons: [
        "Empaquetado y etiquetado",
        "Cálculo de costes y precios",
        "Nociones sobre la normativa de tu zona",
      ],
    },
  ] satisfies Module[],

  benefitsSection: {
    eyebrow: "Lo que conseguirás",
    title: "No es solo aprender una receta: es dominar el proceso",
  },
  benefits: [
    {
      icon: "🛡️",
      title: "Seguridad desde el primer día",
      text: "Aprende a trabajar con sosa y aceites esenciales con las precauciones correctas.",
    },
    {
      icon: "🧪",
      title: "Recetas propias, no copias",
      text: "Entiende los ingredientes y calcula tus fórmulas para crear jabones a tu gusto.",
    },
    {
      icon: "🎨",
      title: "Acabados de tienda",
      text: "Colores, remolinos y capas que convierten una barra sencilla en un regalo precioso.",
    },
    {
      icon: "🌱",
      title: "Una base para vender, si quieres",
      text: "Presentación, costes y nociones legales para dar el paso a tu ritmo. Sin promesas de ingresos.",
    },
  ] satisfies Benefit[],

  audience: {
    title: "¿Es este curso para ti?",
    for: [
      "Quieres empezar desde cero y que alguien te lo explique paso a paso.",
      "Prefieres cosmética sencilla y con ingredientes que entiendes.",
      "Buscas un hobby creativo o una forma original de hacer regalos.",
      "Probaste recetas sueltas y quieres entender por qué fallan.",
    ],
    notFor: [
      "Buscas resultados sin dedicar tiempo a practicar.",
      "Quieres una fórmula mágica para ganar dinero rápido.",
      "No quieres seguir normas de seguridad al manipular ingredientes.",
    ],
  },

  bonusesSection: {
    eyebrow: "Incluido sin coste extra",
    title: "Bonus para que empieces con ventaja (ejemplo)",
  },
  bonuses: [
    {
      title: "Hoja de cálculo de costes",
      description: "Calcula cuánto cuesta cada barra y define tu precio.",
    },
    {
      title: "Plantillas de etiquetas editables",
      description: "Diseños listos para imprimir y personalizar con tu marca.",
    },
    {
      title: "Guía rápida de aceites esenciales",
      description: "Dosis orientativas y precauciones de uso en jabón.",
    },
  ] satisfies Bonus[],

  instructor: {
    eyebrow: "Quién te enseña",
    name: "Tu nombre aquí",
    role: "Jabonero/a artesanal y formador/a",
    initials: "TN",
    bio: [
      "EJEMPLO: cuenta aquí en 2-3 frases tu historia con el jabón artesanal y por qué creaste este curso.",
      "EJEMPLO: explica tu experiencia real (años haciendo jabón, talleres impartidos, etc.). Solo datos verdaderos.",
    ],
  },

  testimonialsSection: {
    eyebrow: "Opiniones",
    title: "Lo que dicen quienes ya lo han probado",
  },
  /** Deja el array vacío ([]) para ocultar la sección hasta tener opiniones reales. */
  testimonials: [
    {
      name: "Nombre Apellido",
      detail: "Alumno/a del curso",
      quote: "EJEMPLO: sustituye este texto por un testimonio real y con permiso de la persona.",
      placeholder: true,
    },
    {
      name: "Nombre Apellido",
      detail: "Alumno/a del curso",
      quote: "EJEMPLO: aquí va la experiencia real de otro alumno o alumna.",
      placeholder: true,
    },
    {
      name: "Nombre Apellido",
      detail: "Alumno/a del curso",
      quote: "EJEMPLO: un tercer testimonio real con un resultado concreto.",
      placeholder: true,
    },
  ] satisfies Testimonial[],

  offer: {
    eyebrow: "Tu plaza en el curso",
    title: "Empieza hoy a hacer tus propios jabones",
    includes: [
      "8 módulos en vídeo con todo el proceso paso a paso",
      "Calculadora y plantilla de recetas",
      "Bonus: costes, etiquetas y guía de aceites esenciales",
      "Acceso desde móvil, tablet y ordenador",
      "Garantía de 7 días",
    ],
    guaranteeTitle: "Garantía de 7 días",
    guaranteeText:
      "Pruébalo con tranquilidad. Si en los primeros 7 días sientes que el curso no es para ti, pide el reembolso desde Hotmart y te devuelven el importe íntegro.",
  },

  faqSection: {
    eyebrow: "Preguntas frecuentes",
    title: "Resolvemos tus dudas",
  },
  faq: [
    {
      question: "¿Necesito experiencia previa?",
      answer: "No. El curso empieza desde cero y explica cada paso, incluidos los conceptos básicos.",
    },
    {
      question: "¿Qué materiales necesito y dónde los consigo?",
      answer:
        "Dentro del curso hay una lista de materiales con alternativas. La mayoría se encuentran en tiendas de cosmética natural, droguerías especializadas o por internet.",
    },
    {
      question: "¿Es peligrosa la sosa cáustica?",
      answer:
        "Requiere precauciones, como cualquier producto de limpieza fuerte. El primer módulo está dedicado a la seguridad: protección, manejo y almacenamiento. Sigue siempre esas indicaciones.",
    },
    {
      question: "¿Cómo recibo el acceso?",
      answer:
        "Al completar el pago en Hotmart recibirás un correo con el acceso. Si no lo ves, revisa la carpeta de spam o promociones.",
    },
    {
      question: "¿Cuánto tiempo tengo acceso?",
      answer: "EJEMPLO: indica aquí el periodo de acceso configurado en tu producto de Hotmart (p. ej., acceso de por vida).",
    },
    {
      question: "¿Qué métodos de pago hay?",
      answer: "Verás los métodos disponibles para tu país en el checkout de Hotmart, que es una plataforma de pago segura.",
    },
    {
      question: "¿Puedo pedir el reembolso?",
      answer:
        "Sí. Dispones de 7 días desde la compra para solicitar la devolución directamente desde Hotmart, sin complicaciones.",
    },
  ] satisfies FaqItem[],

  finalCta: {
    title: "Tu primera barra de jabón está más cerca de lo que crees",
    subtitle: "Únete al curso y empieza a crear jabones que te encantará usar y regalar.",
  },

  footer: {
    links: [
      { label: "Política de privacidad", href: "#" },
      { label: "Términos y condiciones", href: "#" },
      { label: "Contacto", href: "#" },
    ] satisfies FooterLink[],
    disclaimer:
      "Los resultados dependen de la práctica y la dedicación de cada persona. El contenido del curso es educativo: no sustituye el asesoramiento profesional. Sigue siempre las normas de seguridad al manipular ingredientes y consulta la normativa de tu zona si vas a vender. Este sitio no forma parte de Hotmart ni de ninguna otra plataforma de redes sociales.",
  },
};
