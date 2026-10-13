export interface ProblemFeature {
  id: string;
  category: string;
  title: string;
  desc: string;
  benefit: string;
  iconName: 'clock' | 'shield' | 'ruler' | 'users';
}

export interface ApproachCard {
  number: string;
  title: string;
  desc: string;
  tag: string;
  iconName: 'layers' | 'calculator' | 'factory' | 'fileText' | 'graduationCap' | 'hardHat';
}

export interface KitItem {
  id: string;
  number: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
  actionText: string;
}

export interface ProcessStage {
  step: string;
  stepTag: string;
  title: string;
  desc: string;
  stageBadge: string;
  iconName: 'upload' | 'layers' | 'hammer' | 'shield';
}

export interface ProjectCard {
  id: string;
  location: string;
  title: string;
  surface: string;
  assemblyDays: string;
  spec: string;
  image: string;
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const PHONE_NUMBER = "+54 9 2477 654386";
export const PHONE_CALL_URL = "tel:+5492477654386";
export const WHATSAPP_NUMBER = "5492477654386";
export const EMAIL_ADDRESS = "doconstruccionesenseco@gmail.com";
export const LOCATION_CITY = "Pergamino, Buenos Aires, Argentina";

export function getWhatsAppUrl(customMessage?: string): string {
  const baseMsg = customMessage || "Hola DO Construcciones, quiero consultar por el KIT FULL SIPCOR para mi proyecto.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(baseMsg)}`;
}

// 1. EL PROBLEMA REAL EN LA OBRA
export const PROBLEM_FEATURES: ProblemFeature[] = [
  {
    id: "plazos-ciertos",
    category: "DESARROLLO Y CÁLCULO",
    title: "Plazos ciertos",
    desc: "Modulamos cada panel según tus planos de arquitectura. Sin cortes improvisados en el lote ni demoras por clima.",
    benefit: "Montaje en días récord",
    iconName: "clock"
  },
  {
    id: "estructura-precisa",
    category: "INGENIERÍA SIPCOR",
    title: "Estructura precisa",
    desc: "Encuentros estructurales, soleras, montantes y fijaciones calculados para soportar cargas y resistir esfuerzos.",
    benefit: "Garantía de fábrica",
    iconName: "shield"
  },
  {
    id: "eficiencia-energetica",
    category: "AISLACIÓN TERMOACÚSTICA",
    title: "Eficiencia energética",
    desc: "Núcleo continuo de EPS de alta densidad que elimina puentes térmicos y reduce hasta un 60% el consumo en climatización.",
    benefit: "Mayor confort térmico",
    iconName: "ruler"
  },
  {
    id: "acompanamiento-obra",
    category: "RESPALDO LOCAL",
    title: "Acompañamiento en obra",
    desc: "No estás solo con los paneles: asesoramos a tu equipo de montaje en tu obra en Pergamino y toda la zona de influencia.",
    benefit: "Asistencia presencial",
    iconName: "users"
  }
];

// 2. NUESTRO ENFOQUE · INTEGRAL Y PROFESIONAL
export const APPROACH_CARDS: ApproachCard[] = [
  {
    number: "01",
    title: "Desarrollo Técnico",
    desc: "Compatibilización de tu arquitectura con la modulación y cálculo estructural SIP.",
    tag: "GARANTÍA DE PROCESO",
    iconName: "layers"
  },
  {
    number: "02",
    title: "Cómputo Exacto",
    desc: "Desglose cuantitativo de paneles, soleras, tornillería y todos los insumos que componen el KIT FULL SIPCOR.",
    tag: "GARANTÍA DE PROCESO",
    iconName: "calculator"
  },
  {
    number: "03",
    title: "Fabricación Industrial",
    desc: "Producción en planta SIPCOR con mecanizados y paneles cortados con precisión milimétrica.",
    tag: "GARANTÍA DE PROCESO",
    iconName: "factory"
  },
  {
    number: "04",
    title: "Documentación Ejecutiva",
    desc: "Planos de montaje, axonométricas y numeración de paneles con su respectivo muro.",
    tag: "GARANTÍA DE PROCESO",
    iconName: "fileText"
  },
  {
    number: "05",
    title: "Capacitación en Sitio",
    desc: "Inducción técnica directa a tus cuadrillas u operarios durante el inicio del montaje.",
    tag: "GARANTÍA DE PROCESO",
    iconName: "graduationCap"
  },
  {
    number: "06",
    title: "Acompañamiento en Obra",
    desc: "Presencia técnica de DO en Pergamino y zona durante la etapa crítica de armado.",
    tag: "GARANTÍA DE PROCESO",
    iconName: "hardHat"
  }
];

// 3. COMPONENTES DEL KIT (¿Qué incluye exactamente el KIT FULL?)
export const KIT_ITEMS: KitItem[] = [
  {
    id: "paneles-medida",
    number: "1",
    title: "Paneles a medida codificados",
    desc: "El sistema constructivo emplea paneles formados por dos placas de OSB estructurales certificadas APA de LP y EPS de alta densidad (15/20 kg/m³), utilizados tanto en muros exteriores como en tabiques interiores y techos. Cada panel llega a obra cortado y numerado conforme al manual de montaje, lo que permite una colocación precisa y ordenada, incluyendo los vanos de puertas y aberturas. Esta modulación, sumada a la continuidad del material, garantiza una aislación térmica sin puentes térmicos en toda la envolvente.",
    bullets: [],
    image: "/src/assets/images/Paneles a medida codificados.png",
    actionText: "Consultar por este componente →"
  },
  {
    id: "insumos-vinculacion",
    number: "2",
    title: "Insumos de vinculación y sellado",
    desc: "El sistema se complementa con soleras tratadas y calibradas para un encastre exacto, con montantes y tirantes de unión cepillados, además de anclajes estructurales vinculados a la platea mediante varillas roscadas y anclajes químicos se completa con tornillería autoperforante específica, cintas, espuma de poliuretano expansiva y selladores de junta para garantizar la estanqueidad.",
    bullets: [],
    image: "/src/assets/images/Insumos de vinculación y sellado.jpg",
    actionText: "Consultar por este componente →"
  },
  {
    id: "legajo-manual",
    number: "3",
    title: "Legajo y manual de montaje",
    desc: "La documentación técnica incluye planos de montaje donde cada panel está identificado por número y posición dentro de cada muro al que compone, vistas axonométricas, detalles constructivos de encuentros y planos de replanteo de soleras en platea, complementados con una guía paso a paso para el instalador o la cuadrilla.",
    bullets: [],
    image: "/src/assets/images/Construir con PANELES SIP.jpeg",
    actionText: "Consultar por este componente →"
  },
  {
    id: "acompanamiento-terreno",
    number: "4",
    title: "Acompañamiento DO en terreno",
    desc: "El acompañamiento de DO en terreno incluye asistencia técnica presencial en Pergamino y zona desde el arranque de obra, con presencia en el montaje del primer panel y capacitación in situ a operarios y ayudantes, complementado con soporte remoto continuo durante todo el proceso a través de asistencia técnica directa vía WhatsApp y visitas periódicas.",
    bullets: [],
    image: "/src/assets/images/Acompañamiento DO en terreno.jpg",
    actionText: "Consultar por este componente →"
  }
];

// 4. EL PROCESO EN 4 ETAPAS (Del proyecto a la obra)
export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    stepTag: "PASO 1 · EVALUACIÓN",
    title: "Enviás tu proyecto",
    desc: "Nos envías tu proyecto en DWG, PDF o SketchUp. Realizamos el modelo en 3D de tu proyecto. Evaluamos la arquitectura, alturas y vanos para garantizar una transición perfecta y técnicamente viable hacia la construcción con paneles sip y lo devolvemos para ser aprobado por el arquitecto a cargo.",
    stageBadge: "Etapa 1",
    iconName: "upload"
  },
  {
    step: "02",
    stepTag: "PASO 2 · INGENIERÍA 3D",
    title: "Desarrollamos el KIT",
    desc: "Con el modelo 3D aprobado nos permite realizar un cómputo exacto de paneles e insumos que tu obra necesita, reduciendo el desperdicio a cero.",
    stageBadge: "Etapa 2",
    iconName: "layers"
  },
  {
    step: "03",
    stepTag: "PASO 3 · CORTE Y CONTROL",
    title: "Fabricamos",
    desc: "Tras la revisión técnica el proyecto se traslada a la planta para su corte y embalaje. Sustituimos el error humano de la obra tradicional por tecnología, recibis el kit exacto, numerado y listo para montar sin perder tiempo.",
    stageBadge: "Etapa 3",
    iconName: "hammer"
  },
  {
    step: "04",
    stepTag: "PASO 4 · ASISTENCIA EN LOTE",
    title: "Te acompañamos en obra",
    desc: "Capacitamos a tu cuadrilla directamente en el terreno para que dominen la tecnología de paneles SIP, estamos presentes en el inicio del armado, brindando soporte técnico directo donde más se necesita.",
    stageBadge: "Etapa 4",
    iconName: "shield"
  }
];

// 5. OBRAS EJECUTADAS EN PERGAMINO Y LA REGIÓN
export const PROJECTS_LIST: ProjectCard[] = [
  {
    id: "obra-pergamino-norte",
    location: "Pergamino, Bs. As.",
    title: "Obra Pergamino Norte - Vivienda Unifamiliar",
    surface: "140 m²",
    assemblyDays: "14 días de montaje",
    spec: "Muros SIP 114mm",
    image: "/src/assets/images/modern_sip_house_1791746372685.jpg"
  },
  {
    id: "residencia-campo-san-martin",
    location: "Pergamino, Bs. As.",
    title: "Residencia Campo San Martín",
    surface: "175 m²",
    assemblyDays: "18 días de montaje",
    spec: "Muros + Cubierta SIP",
    image: "/src/assets/images/construction_team_site_1791746382405.jpg"
  },
  {
    id: "vivienda-salto-cabana",
    location: "Colón, Bs. As.",
    title: "Vivienda Salto Cabaña",
    surface: "95 m²",
    assemblyDays: "10 días de montaje",
    spec: "Doble altura",
    image: "/src/assets/images/modern_sip_house_1791746372685.jpg"
  },
  {
    id: "ampliacion-planta-alta",
    location: "Pergamino, Bs. As.",
    title: "Ampliación en Planta Alta sobre Losa Existente",
    surface: "65 m²",
    assemblyDays: "8 días de montaje",
    spec: "Sin sobrecarga",
    image: "/src/assets/images/sip_panel_structure_1791746362215.jpg"
  },
  {
    id: "vivienda-campestre",
    location: "Rojas, Bs. As.",
    title: "Vivienda Campestre de Alta Eficiencia",
    surface: "160 m²",
    assemblyDays: "16 días de montaje",
    spec: "Eficiencia A",
    image: "/src/assets/images/modern_sip_house_1791746372685.jpg"
  },
  {
    id: "quincho-perimetral",
    location: "San Nicolás, Bs. As.",
    title: "Quincho Perimetral y Oficinas Técnicas",
    surface: "80 m²",
    assemblyDays: "9 días de montaje",
    spec: "Techo autoportante",
    image: "/src/assets/images/construction_team_site_1791746382405.jpg"
  }
];

// 6. PREGUNTAS FRECUENTES (Consultas técnicas habituales)
export const FAQS_LIST: FaqItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "¿Qué incluye exactamente el KIT FULL SIPCOR?",
    answer: "El KIT FULL incluye los paneles SIP cortados y modulados a medida para muros y techos, perfilería de acero galvanizado para soleras y montantes, anclajes mecánicos y químicos a platea, tornillos autoperforantes específicos, selladores de junta, el legajo ejecutivo de planos codificados 1 a 1 y el acompañamiento presencial de arranque en obra."
  },
  {
    id: "faq-2",
    number: "02",
    question: "¿Cómo se determina el precio del KIT?",
    answer: "El valor se calcula a partir del cómputo exacto de los planos de tu proyecto. Se evalúan los metros cuadrados de muros y cubiertas, espesores térmicos requeridos y piezas especiales. Se presenta un presupuesto cerrado y definitivo sin costos adicionales imprevistos."
  },
  {
    id: "faq-3",
    number: "03",
    question: "¿Qué documentación técnica recibo con el KIT?",
    answer: "Recibís el legajo ejecutivo completo: planos de replanteo de soleras sobre platea, vistas axonométricas de cada paño de muro con numeración alfanumérica de cada panel, detalles constructivos de encuentros críticos y el manual ilustrado de instalación paso a paso."
  },
  {
    id: "faq-4",
    number: "04",
    question: "¿Mi cuadrilla necesita experiencia previa con paneles SIP?",
    answer: "No es necesaria experiencia previa en SIP. Cualquier cuadrilla con conocimientos básicos de construcción en seco o tradicional puede realizar el montaje. En DO Construcciones asistimos al inicio de la obra para capacitar a tus operarios in situ y guiarlos en el armado del primer paño."
  },
  {
    id: "faq-5",
    number: "05",
    question: "¿En qué etapa del proyecto conviene contactar a DO?",
    answer: "Lo ideal es contactarnos en la etapa de anteproyecto o proyecto básico. Esto permite optimizar la modulación de los paneles desde el inicio, aprovechar al máximo las dimensiones estándar y ahorrar costos y tiempos de cálculo."
  },
  {
    id: "faq-6",
    number: "06",
    question: "¿Qué rubros quedan fuera del alcance del KIT FULL?",
    answer: "El KIT FULL provee la cáscara estructural completa. Quedan a cargo del cliente o constructor la platea de fundación, las terminaciones y revestimientos finales (EIFS, placas de yeso), carpinterías, instalaciones sanitarias/eléctricas y la mano de obra de montaje continuo posterior al arranque."
  },
  {
    id: "faq-7",
    number: "07",
    question: "¿Cuánto demora el desarrollo técnico previo a la fabricación?",
    answer: "El desarrollo de ingeniería de detalle y despiece insume entre 5 y 7 días hábiles a partir de la confirmación del proyecto y la entrega de la planimetría arquitectónica definitiva."
  },
  {
    id: "faq-8",
    number: "08",
    question: "¿Cuánto demora la fabricación y entrega del KIT FULL?",
    answer: "La producción en planta SIPCOR y la logística coordinada a obra en Pergamino y zona se programa habitualmente en un plazo de 15 a 25 días hábiles, coordinando la llegada exactamente con la fecha en que la platea esté fraguada y lista."
  }
];
