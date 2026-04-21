export const profile = {
  name: "Ian Holender",
  firstName: "Ian",
  lastName: "Holender",
  title: "Data Engineer",
  specialty:
    "Arquitecturas de datos modernas, event-driven, sobre Microsoft Fabric y Azure.",
  tagline:
    "Diseño pipelines escalables, resilientes y auditables — con CI/CD sólido y data quality en mente — para llevar analítica de grado producción a escala.",
  location: "Ciudad de México",
  email: "holenderian@gmail.com",
  phone: "+52 (55) 4790 3290",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ian-holender/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "Email", href: "mailto:holenderian@gmail.com" },
  ],
};

export const about = {
  intro:
    "Soy Data Engineer enfocado en construir plataformas de datos modernas sobre Microsoft Fabric y Azure. Me apasiona el cruce entre ingeniería robusta, performance y experiencia de quien consume los datos.",
  bullets: [
    "He optimizado pipelines a través de 21 regiones y +3,400 tiendas.",
    "Reduje tiempos de procesamiento clave hasta en un 35%.",
    "Comprometido con CI/CD, data quality y auditabilidad end-to-end.",
    "Disponible para nuevos retos de ingeniería de datos y arquitectura cloud.",
  ],
};

export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Data Engineer",
    company: "Corporativo Tiendas 3B",
    location: "Ciudad de México",
    period: "May 2025 — Presente",
    description:
      "Implementación de arquitectura event-driven en tiempo real para el proyecto Tiendas 2.0, con bases KQL para analítica de alto desempeño y monitoreo operacional.",
    highlights: [
      "Pipelines escalables en 21 regiones (~3,400 tiendas).",
      "Mejora del Main Pipeline (10 modelos semánticos) reduciendo refresh en 35%.",
      "Extracción de tickets de 4h30 a 1h07 con Azure Data Factory y Microsoft Fabric.",
      "CI/CD con Azure DevOps integrado a Microsoft Fabric.",
      "Data Hub Landing Page para +570 directores y gerentes.",
    ],
    stack: [
      "Microsoft Fabric",
      "Azure Data Factory",
      "KQL",
      "PySpark",
      "Azure DevOps",
      "Power BI",
    ],
  },
  {
    role: "Data Analyst",
    company: "IBSO",
    location: "Ciudad de México",
    period: "Ene 2024 — Jun 2024",
    description:
      "Diseño y mantenimiento de dashboards interactivos para MAPED, Grupo JULIO y TISA. Insights accionables que optimizaron inventario y eficiencia operativa.",
    highlights: [
      "Dashboards en Tableau para KPI tracking, ventas y stock.",
      "Aumenté el desempeño en ventas ~15–20% identificando cuellos de botella.",
    ],
    stack: ["Tableau", "SQL", "Power BI", "Excel"],
  },
  {
    role: "Marketing & Business Development Intern",
    company: "Shoplogix",
    location: "Ciudad de México",
    period: "Oct 2022 — Jun 2023",
    description:
      "Contenido digital y multimedia para adquisición de clientes. Apoyo al rediseño del sitio LATAM mejorando usabilidad y generación de leads.",
    stack: ["Figma", "Adobe Premiere", "HTML", "CSS"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  accent: string;
  metric?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Tiendas 2.0 — Event-Driven Architecture",
    blurb:
      "Arquitectura event-driven en tiempo real para ingesta y procesamiento de eventos, basada en KQL para analítica de alto desempeño y monitoreo operacional en escala enterprise.",
    tags: ["Event-Driven", "KQL", "Microsoft Fabric", "Realtime"],
    year: "2025",
    metric: "3,400+ tiendas en 21 regiones",
    accent: "from-violet-500/30 to-blue-500/10",
  },
  {
    title: "Main Pipeline Optimization",
    blurb:
      "Refactor y optimización del pipeline principal que alimenta 10 modelos semánticos. Reducción significativa en tiempos de refresh y mejora de confiabilidad.",
    tags: ["Performance", "ADF", "PySpark", "Power BI"],
    year: "2025",
    metric: "−35% refresh time",
    accent: "from-rose-500/30 to-fuchsia-500/10",
  },
  {
    title: "Ticket Data Extraction",
    blurb:
      "Rediseño del flujo de extracción de tickets sobre Azure Data Factory y Microsoft Fabric, con paralelización y particionado optimizado.",
    tags: ["ADF", "Microsoft Fabric", "ETL"],
    year: "2025",
    metric: "4h30 → 1h07",
    accent: "from-emerald-500/30 to-cyan-500/10",
  },
  {
    title: "Data Hub Landing Page",
    blurb:
      "Hub centralizado de dashboards y documentación que mejora la accesibilidad y descubrimiento de datos para directores y gerentes a nivel corporativo.",
    tags: ["Power BI", "UX", "Documentación"],
    year: "2025",
    metric: "+570 stakeholders",
    accent: "from-amber-500/30 to-rose-500/10",
  },
];

export const skills = {
  core: [
    "Microsoft Fabric",
    "Azure",
    "Azure Data Factory",
    "Azure DevOps",
    "Python",
    "SQL",
    "KQL",
    "PySpark",
    "Power BI",
    "Tableau",
    "C#",
    "JavaScript",
    "Git",
  ],
  groups: [
    {
      label: "Cloud & Data",
      items: [
        "Microsoft Azure",
        "Microsoft Fabric",
        "Azure Data Factory",
        "Azure DevOps (CI/CD)",
      ],
    },
    {
      label: "Programación & Datos",
      items: ["Python", "SQL", "KQL", "PySpark", "C/C++", "C#", "JavaScript"],
    },
    {
      label: "Visualización & BI",
      items: ["Power BI", "Tableau", "PowerPoint"],
    },
    {
      label: "Herramientas",
      items: ["Git/GitHub", "Cisco Packet Tracer", "MATLAB"],
    },
    {
      label: "Web & Diseño",
      items: ["HTML", "CSS", "Figma", "Canva", "Adobe Premiere Pro"],
    },
  ],
  interests: [
    "Pipelines Escalables",
    "Cloud-native Engineering",
    "Backend & Data Systems",
    "System Reliability",
    "Data Quality & Compliance",
    "CI/CD & Automation",
    "System Design",
  ],
};

export const education = [
  {
    title: "B.S. en Ingeniería en Tecnologías Computacionales",
    institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
    period: "Ago 2021 — Jun 2025",
  },
  {
    title: "Marketing & Digital Marketing",
    institution: "Universidad CEU San Pablo",
    period: "Ago 2024 — Ene 2025",
  },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2" },
];
