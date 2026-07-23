export const profile = {
  name: "Ian Holender",
  firstName: "Ian",
  lastName: "Holender",
  title: "Fullstack Developer & Data Engineer",
  specialty:
    "Construyo productos end-to-end y arquitecturas de datos modernas — de la interfaz al pipeline.",
  tagline:
    "Diseño y construyo productos completos — front, back, datos e IA — desde plataformas SaaS propias hasta arquitecturas event-driven sobre Microsoft Fabric y Azure.",
  location: "Ciudad de México",
  email: "holenderian@gmail.com",
  phone: "+52 55 4790 3290",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ianholender" },
    { label: "GitHub", href: "https://github.com/IanHolen" },
    { label: "Email", href: "mailto:holenderian@gmail.com" },
  ],
};

export const about = {
  intro:
    "Soy Fullstack Developer y Data Engineer. Construyo productos completos — de la interfaz al pipeline — combinando React/Node.js e integraciones de IA con arquitecturas de datos modernas sobre Microsoft Fabric y Azure. Además soy fundador de varias plataformas SaaS que llevé de idea a producción.",
  bullets: [
    "Desarrollo features customer-facing, dashboards e integraciones LLM y e-commerce en eShip/Segmail.",
    "Fundador de 5 plataformas propias (SaaS, e-learning, IA legal) llevadas a producción.",
    "Diseñé arquitecturas event-driven en 21 regiones y +3,400 tiendas, reduciendo tiempos hasta 35%.",
    "Comprometido con CI/CD, data quality, seguridad y auditabilidad end-to-end.",
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
    role: "Fullstack Developer",
    company: "eShip / Segmail",
    location: "Ciudad de México",
    period: "Feb 2026 — Presente",
    description:
      "Construyo features end-to-end para la plataforma v2.0: módulo de Customer Service, chatbot con LLMs, dashboards de analítica e integraciones de e-commerce.",
    highlights: [
      "Módulo de Customer Service + 'Chatter', mensajería cliente–agente en tiempo real (React, Node.js, MySQL, Twilio).",
      "Chatbot de soporte con LLMs (OpenAI) en la página de tracking de órdenes.",
      "Dashboards de analítica y módulo de automatizaciones en v2.0 (Recharts / ApexCharts).",
      "Integraciones con Shopify, Odoo, Tiendanube, Wix, ShipHero, Amazon y Mercado Libre.",
      "Diseño de un servidor MCP para consultar y actuar sobre datos vía LLMs.",
    ],
    stack: ["React", "Node.js", "MySQL", "OpenAI", "MCP", "Twilio"],
  },
  {
    role: "Data Engineer",
    company: "Corporativo Tiendas 3B",
    location: "Ciudad de México",
    period: "May 2025 — Ene 2026",
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

/* ─── Productos propios (plataformas SaaS que fundé / co-fundé) ─── */
export type Product = {
  name: string;
  role: string;
  domain: string;
  href?: string;
  year: string;
  status: "live" | "internal" | "wip";
  tags: string[];
  accent: string;
};

export const products: Product[] = [
  {
    name: "MeshCode",
    role: "Co-founder",
    domain: "meshcode.io",
    href: "https://meshcode.io",
    year: "2025",
    status: "live",
    tags: ["React 19", "TypeScript", "Supabase", "Python MCP", "Cloudflare"],
    accent: "from-teal-500/25 to-cyan-500/5",
  },
  {
    name: "Visión 360",
    role: "Founder",
    domain: "shoplogix-vision360.com",
    href: "https://shoplogix-vision360.com",
    year: "2025",
    status: "internal",
    tags: ["React", "TypeScript", "Supabase", "three.js", "RLS"],
    accent: "from-cyan-500/25 to-sky-500/5",
  },
  {
    name: "Certificaciones AI",
    role: "Founder",
    domain: "certificacionesai.com",
    href: "https://certificacionesai.com",
    year: "2025",
    status: "live",
    tags: ["Next.js 16", "Prisma", "Supabase", "Gemini / Groq", "i18n"],
    accent: "from-emerald-500/25 to-teal-500/5",
  },
  {
    name: "Credit Operations Platform",
    role: "Founder",
    domain: "Solución interna",
    href: "https://misfichasnexsys.com",
    year: "2025",
    status: "internal",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT + bcrypt"],
    accent: "from-amber-500/20 to-orange-500/5",
  },
  {
    name: "NotarIA",
    role: "Founder",
    domain: "notaria-app-beta.vercel.app",
    href: "https://notaria-app-beta.vercel.app",
    year: "2026",
    status: "wip",
    tags: ["Next.js 16", "Supabase", "Anthropic SDK", "shadcn/ui", "Multi-tenant"],
    accent: "from-teal-500/25 to-emerald-500/5",
  },
];

/* ─── Trabajo & Data Engineering (proyectos internos en empresa) ─── */
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
    accent: "from-teal-500/30 to-cyan-500/10",
  },
  {
    title: "Main Pipeline Optimization",
    blurb:
      "Refactor y optimización del pipeline principal que alimenta 10 modelos semánticos. Reducción significativa en tiempos de refresh y mejora de confiabilidad.",
    tags: ["Performance", "ADF", "PySpark", "Power BI"],
    year: "2025",
    metric: "−35% refresh time",
    accent: "from-cyan-500/30 to-sky-500/10",
  },
  {
    title: "Ticket Data Extraction",
    blurb:
      "Rediseño del flujo de extracción de tickets sobre Azure Data Factory y Microsoft Fabric, con paralelización y particionado optimizado.",
    tags: ["ADF", "Microsoft Fabric", "ETL"],
    year: "2025",
    metric: "4h30 → 1h07",
    accent: "from-emerald-500/30 to-teal-500/10",
  },
  {
    title: "Data Hub Landing Page",
    blurb:
      "Hub centralizado de dashboards y documentación que mejora la accesibilidad y descubrimiento de datos para directores y gerentes a nivel corporativo.",
    tags: ["Power BI", "UX", "Documentación"],
    year: "2025",
    metric: "+570 stakeholders",
    accent: "from-amber-500/25 to-orange-500/10",
  },
];

export const skills = {
  core: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "SQL",
    "Microsoft Fabric",
    "Azure",
    "PostgreSQL",
    "Supabase",
    "LLMs",
    "Power BI",
  ],
  groups: [
    {
      label: "Fullstack & Web",
      items: ["React", "Next.js", "Node.js", "Express", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
    {
      label: "Cloud & Data Engineering",
      items: ["Microsoft Azure", "Microsoft Fabric", "Azure Data Factory", "Azure DevOps (CI/CD)", "Vercel"],
    },
    {
      label: "Lenguajes & Datos",
      items: ["Python", "SQL", "KQL", "PySpark", "C/C++", "C#", "JavaScript"],
    },
    {
      label: "Bases de datos & Backend",
      items: ["PostgreSQL", "MySQL", "Supabase", "Prisma", "JWT / Auth"],
    },
    {
      label: "IA & Integraciones",
      items: ["OpenAI", "Anthropic", "Gemini / Groq", "MCP", "Shopify", "Odoo", "Mercado Libre"],
    },
    {
      label: "BI, Herramientas & Diseño",
      items: ["Power BI", "Tableau", "Git / GitHub", "Figma", "Canva", "Adobe Premiere"],
    },
  ],
  interests: [
    "Product Engineering",
    "Fullstack Development",
    "Cloud-native Engineering",
    "AI Integration",
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

export const heroStats = [
  { value: 5, suffix: "", label: "plataformas" },
  { value: 3400, suffix: "+", label: "tiendas" },
  { value: 35, suffix: "%", label: "más rápido" },
  { value: 570, suffix: "+", label: "stakeholders" },
];

// Empty until Ian adds his real certifications + credential URLs.
// The Certifications section auto-hides while this array is empty.
export const certifications: {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  credentialUrl: string;
}[] = [];
