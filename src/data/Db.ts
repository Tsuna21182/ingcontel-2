import {
  Cable,
  Layers,
  Server,
  Wifi,
  Network,
  Zap,
  Target,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

export const services = [
  {
    icon: Cable,
    number: "01",
    title: "Fibra Óptica Aérea",
    description:
      "Instalación de redes de fibra óptica aérea en postes, adaptándonos a la infraestructura existente.",
    gradient: "from-blue-600 to-blue-400",
    details:
      "Diseñamos e instalamos redes de fibra óptica aérea utilizando postes existentes y nuevos. Incluye tendido de cable, templado, fijación y conectividad de extremo a extremo. Cumplimos con todas las normativas de seguridad y distancias reglamentarias.",
    image: "/image/tendido-aereo.webp",
  },
  {
    icon: Layers,
    number: "02",
    title: "Canalización de Fibra Óptica",
    description:
      "Construcción de canalizaciones subterráneas para despliegue de fibra óptica en ciudades.",
    gradient: "from-cyan-600 to-cyan-400",
    details:
      "Realizamos estudios de trazado, excavación, instalación de tubería, arquetas y registros. Utilizamos técnicas de perforación dirigida para minimizar el impacto urbano. Incluye obra civil completa y señalización.",
    image: "/image/tendido-canalizado.webp",
  },
  {
    icon: Server,
    number: "03",
    title: "Construcción de ODF",
    description:
      "Instalación y configuración de Optical Distribution Frames para la gestión de conexiones.",
    gradient: "from-blue-700 to-blue-500",
    details:
      "Montaje de ODF (Optical Distribution Frame) en salas técnicas y armarios exteriores. Incluye fusionado de fibras, etiquetado completo, distribución de puertos y documentación técnica. Preparamos la infraestructura para conexión de usuarios finales.",
    image: "/image/odf.webp",
  },
  {
    icon: Wifi,
    number: "04",
    title: "Zonas WiFi",
    description:
      "Despliegue de redes WiFi públicas y privadas en áreas urbanas y edificios.",
    gradient: "from-sky-600 to-sky-400",
    details:
      "Diseño e instalación de redes WiFi de alta densidad para zonas públicas, parques, plazas y edificios comerciales. Incluye puntos de acceso mesh, cableado, configuración de red y gestión centralizada. Cobertura garantizada.",
    image: "/image/zonas-wifi.webp",
  },
  {
    icon: Network,
    number: "05",
    title: "Cableado Estructurado",
    description:
      "Sistemas completos de cableado estructurado para edificios corporativos y residenciales.",
    gradient: "from-blue-800 to-blue-600",
    details:
      "Instalación de cableado estructurado categoría 6/6A/7 para voz, datos y video. Incluye certificación de enlaces, racks, patch panels, etiquetado y documentación. Diseño de salas de telecomunicaciones según estándares TIA/EIA.",
    image: "/image/cableado-estructurado.webp",
  },
  {
    icon: Zap,
    number: "06",
    title: "Redes Eléctricas",
    description:
      "Instalación de infraestructura eléctrica para soportar equipos de telecomunicaciones.",
    gradient: "from-cyan-700 to-cyan-500",
    details:
      "Diseño e instalación de sistemas eléctricos dedicados para equipos de telecomunicaciones. Incluye UPS, PDU, canalización eléctrica, tomas reguladas, puesta a tierra y protecciones. Garantizamos alimentación estable y segura.",
    image: "/image/red-electrica.webp",
  },
];

export const values = [
  {
    icon: Target,
    number: "01",
    title: "Misión",
    description:
      "Conectar comunidades mediante infraestructura de fibra óptica de última generación.",
    gradient: "from-blue-600 to-blue-400",
    fullContent:
      "Nuestra misión es conectar comunidades y empresas mediante el diseño, construcción y despliegue de infraestructura de fibra óptica de última generación. Nos comprometemos a facilitar el acceso a internet de alta velocidad, impulsando el desarrollo digital y mejorando la calidad de vida de las personas. Trabajamos con excelencia técnica, innovación constante y responsabilidad social para construir las redes del futuro.",
  },
  {
    icon: Users,
    number: "02",
    title: "Visión",
    description:
      "Ser líderes en infraestructura FTTH, transformando la conectividad en toda Europa.",
    gradient: "from-cyan-600 to-cyan-400",
    fullContent:
      "Aspiramos a ser reconocidos como la empresa líder en construcción de infraestructura FTTH en Colombia, siendo el partner preferido de operadores y gobiernos para proyectos de conectividad. Visualizamos un futuro donde cada hogar, empresa y ciudad esté conectada a través de nuestras redes, habilitando nuevas oportunidades económicas, educativas y sociales en la era digital.",
  },
  {
    icon: Award,
    number: "03",
    title: "Experiencia",
    description:
      "Más de 7 años construyendo redes con más de 185 proyectos exitosos.",
    gradient: "from-blue-700 to-blue-500",
    fullContent:
      "Con más de 7 años de experiencia en el sector, hemos completado más de 185 proyectos de infraestructura de telecomunicaciones en ciudades y edificios. Nuestro equipo de ingenieros certificados y técnicos especializados ha desplegado más de 700.000 metros lineales de red de fibra óptica, conectando más de 50 edificios residenciales y comerciales. Contamos con certificaciones internacionales y cumplimos con los más altos estándares de calidad.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Crecimiento",
    description:
      "En constante expansión con tecnologías innovadoras y metodologías eficientes.",
    gradient: "from-sky-600 to-sky-400",
    fullContent:
      "Estamos en constante crecimiento y expansión, implementando las tecnologías más innovadoras y las metodologías más eficientes del sector. Invertimos continuamente en capacitación de nuestro equipo, adquisición de equipamiento de última generación y desarrollo de soluciones propias. Nuestro crecimiento sostenido nos permite asumir proyectos cada vez más ambiciosos, manteniendo siempre la calidad y compromiso que nos caracteriza.",
  },
];
