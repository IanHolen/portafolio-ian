export type Locale = "es" | "en";

const translations = {
  // ─── Navbar ───
  "nav.about": { es: "Sobre mí", en: "About" },
  "nav.experience": { es: "Experiencia", en: "Experience" },
  "nav.products": { es: "Productos", en: "Products" },
  "nav.work": { es: "Trabajo", en: "Work" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.cta": { es: "Trabajemos juntos", en: "Let's work together" },
  "nav.menuOpen": { es: "Abrir menú", en: "Open menu" },
  "nav.menuClose": { es: "Cerrar menú", en: "Close menu" },

  // ─── Hero ───
  "hero.available": { es: "Disponible para nuevos proyectos", en: "Available for new projects" },
  "hero.tagline": {
    es: "Diseño y construyo productos completos — front, back, datos e IA — desde plataformas SaaS propias hasta arquitecturas event-driven sobre Microsoft Fabric y Azure.",
    en: "I design and build complete products — front, back, data, and AI — from my own SaaS platforms to event-driven architectures on Microsoft Fabric and Azure.",
  },
  "hero.role": {
    es: "Soy Fullstack Developer & Data Engineer",
    en: "I'm a Fullstack Developer & Data Engineer",
  },
  "hero.basedIn": { es: "basado en", en: "based in" },
  "hero.cta": { es: "Ver mi trabajo", en: "See my work" },
  "hero.contact": { es: "Contáctame", en: "Contact me" },
  "hero.scroll": { es: "scroll", en: "scroll" },
  "hero.stat.platforms": { es: "plataformas", en: "platforms" },
  "hero.stat.stores": { es: "tiendas", en: "stores" },
  "hero.stat.faster": { es: "más rápido", en: "faster" },
  "hero.stat.regions": { es: "regiones", en: "regions" },
  "hero.stat.stakeholders": { es: "stakeholders", en: "stakeholders" },

  // ─── About ───
  "about.kicker": { es: "Sobre mí", en: "About me" },
  "about.title": { es: "Builder end-to-end.", en: "End-to-end builder." },
  "about.intro": {
    es: "Soy Fullstack Developer y Data Engineer. Construyo productos completos — de la interfaz al pipeline — combinando React/Node.js e integraciones de IA con arquitecturas de datos modernas sobre Microsoft Fabric y Azure. Además soy fundador de varias plataformas SaaS que llevé de idea a producción.",
    en: "I'm a Fullstack Developer and Data Engineer. I build complete products — from the interface to the pipeline — combining React/Node.js and AI integrations with modern data architectures on Microsoft Fabric and Azure. I'm also the founder of several SaaS platforms I took from idea to production.",
  },
  "about.bullets": {
    es: [
      "Desarrollo features customer-facing, dashboards e integraciones LLM y e-commerce en eShip/Segmail.",
      "Fundador de 5 plataformas propias (SaaS, e-learning, IA legal) llevadas a producción.",
      "Diseñé arquitecturas event-driven en 21 regiones y +3,400 tiendas, reduciendo tiempos hasta 35%.",
      "Comprometido con CI/CD, data quality, seguridad y auditabilidad end-to-end.",
    ],
    en: [
      "I build customer-facing features, dashboards, and LLM & e-commerce integrations at eShip/Segmail.",
      "Founder of 5 own platforms (SaaS, e-learning, legal AI) taken to production.",
      "Designed event-driven architectures across 21 regions and 3,400+ stores, cutting times by up to 35%.",
      "Committed to CI/CD, data quality, security, and end-to-end auditability.",
    ],
  },

  // ─── Experience ───
  "experience.kicker": { es: "Experiencia", en: "Experience" },
  "experience.title": { es: "Dónde he construido.", en: "Where I've built." },
  "experience.items": {
    es: [
      {
        role: "Fullstack Developer",
        company: "eShip / Segmail",
        period: "Feb 2026 — Presente",
        description: "Construyo features end-to-end para la plataforma v2.0: módulo de Customer Service, chatbot con LLMs, dashboards de analítica e integraciones de e-commerce.",
        highlights: [
          "Módulo de Customer Service + 'Chatter', mensajería cliente–agente en tiempo real (React, Node.js, MySQL, Twilio).",
          "Chatbot de soporte con LLMs (OpenAI) en la página de tracking de órdenes.",
          "Dashboards de analítica y módulo de automatizaciones en v2.0 (Recharts / ApexCharts).",
          "Integraciones con Shopify, Odoo, Tiendanube, Wix, ShipHero, Amazon y Mercado Libre.",
          "Diseño de un servidor MCP para consultar y actuar sobre datos vía LLMs.",
        ],
      },
      {
        role: "Data Engineer",
        company: "Corporativo Tiendas 3B",
        period: "May 2025 — Ene 2026",
        description: "Implementación de arquitectura event-driven en tiempo real para el proyecto Tiendas 2.0, con bases KQL para analítica de alto desempeño y monitoreo operacional.",
        highlights: [
          "Pipelines escalables en 21 regiones (~3,400 tiendas).",
          "Mejora del Main Pipeline (10 modelos semánticos) reduciendo refresh en 35%.",
          "Extracción de tickets de 4h30 a 1h07 con Azure Data Factory y Microsoft Fabric.",
          "CI/CD con Azure DevOps integrado a Microsoft Fabric.",
          "Data Hub Landing Page para +570 directores y gerentes.",
        ],
      },
      {
        role: "Data Analyst",
        company: "IBSO",
        period: "Ene 2024 — Jun 2024",
        description: "Diseño y mantenimiento de dashboards interactivos para MAPED, Grupo JULIO y TISA. Insights accionables que optimizaron inventario y eficiencia operativa.",
        highlights: [
          "Dashboards en Tableau para KPI tracking, ventas y stock.",
          "Aumenté el desempeño en ventas ~15–20% identificando cuellos de botella.",
        ],
      },
      {
        role: "Marketing & Business Development Intern",
        company: "Shoplogix",
        period: "Oct 2022 — Jun 2023",
        description: "Contenido digital y multimedia para adquisición de clientes. Apoyo al rediseño del sitio LATAM mejorando usabilidad y generación de leads.",
        highlights: [],
      },
    ],
    en: [
      {
        role: "Fullstack Developer",
        company: "eShip / Segmail",
        period: "Feb 2026 — Present",
        description: "I build end-to-end features for the v2.0 platform: a Customer Service module, an LLM chatbot, analytics dashboards, and e-commerce integrations.",
        highlights: [
          "Customer Service module + 'Chatter', real-time client–agent messaging (React, Node.js, MySQL, Twilio).",
          "LLM support chatbot (OpenAI) on the order-tracking page.",
          "Analytics dashboards and an automations module in v2.0 (Recharts / ApexCharts).",
          "Integrations with Shopify, Odoo, Tiendanube, Wix, ShipHero, Amazon, and Mercado Libre.",
          "Designed an MCP server to query and act on data through LLMs.",
        ],
      },
      {
        role: "Data Engineer",
        company: "Corporativo Tiendas 3B",
        period: "May 2025 — Jan 2026",
        description: "Implementation of a real-time event-driven architecture for the Tiendas 2.0 project, with KQL databases for high-performance analytics and operational monitoring.",
        highlights: [
          "Scalable pipelines across 21 regions (~3,400 stores).",
          "Main Pipeline improvement (10 semantic models) reducing refresh by 35%.",
          "Ticket extraction from 4h30 to 1h07 with Azure Data Factory and Microsoft Fabric.",
          "CI/CD with Azure DevOps integrated into Microsoft Fabric.",
          "Data Hub Landing Page for 570+ directors and managers.",
        ],
      },
      {
        role: "Data Analyst",
        company: "IBSO",
        period: "Jan 2024 — Jun 2024",
        description: "Design and maintenance of interactive dashboards for MAPED, Grupo JULIO, and TISA. Actionable insights that optimized inventory and operational efficiency.",
        highlights: [
          "Tableau dashboards for KPI tracking, sales, and stock.",
          "Increased sales performance ~15–20% by identifying bottlenecks.",
        ],
      },
      {
        role: "Marketing & Business Development Intern",
        company: "Shoplogix",
        period: "Oct 2022 — Jun 2023",
        description: "Digital and multimedia content for client acquisition. Supported the LATAM site redesign improving usability and lead generation.",
        highlights: [],
      },
    ],
  },

  // ─── Products (own platforms) ───
  "products.kicker": { es: "Productos", en: "Products" },
  "products.title": { es: "Plataformas que he construido.", en: "Platforms I've built." },
  "products.visit": { es: "Visitar sitio", en: "Visit site" },
  "products.status.live": { es: "En vivo", en: "Live" },
  "products.status.internal": { es: "Solución interna", en: "Internal solution" },
  "products.status.wip": { es: "En desarrollo", en: "In progress" },
  "products.items": {
    es: [
      {
        blurb: "Infraestructura en tiempo real que permite a múltiples agentes de IA de código (Claude Code, Cursor, Cline) colaborar como un equipo entre máquinas: memoria compartida, task boards, mensajería MCP y un dashboard en vivo. Incluye un CLI publicado en Python (pip install meshcode).",
      },
      {
        blurb: "Plataforma interactiva para el manejo y control de operaciones a nivel directivo. Solución interna con jerarquía de roles, aislamiento multi-tenant (RLS), dashboards ejecutivos con mapa mundial 3D, tableros Kanban y un asistente de IA con datos en contexto.",
      },
      {
        blurb: "Plataforma e-learning de cursos de IA para audiencia no técnica en LATAM: 15 cursos / 110+ lecciones con quizzes, tutor de IA y sandbox, planes de aprendizaje personalizados, certificados en PDF y panel de administración con métricas reales.",
      },
      {
        blurb: "Plataforma web que gestiona el ciclo completo de solicitudes de crédito (captura → revisión → aprobación) entre equipos de ventas, crédito y administración. Solución interna con control de acceso por rol, comentarios por campo, logs de acceso y dashboard analítico.",
      },
      {
        blurb: "Plataforma de gestión notarial con IA, pensada como reemplazo de sistemas legacy. Aislamiento multi-tenant por notaría, expedientes, archivo unificado de identidad (RFC/CURP/CFDI 4.0, PLD) y captura + generación de documentos asistida por IA.",
      },
    ],
    en: [
      {
        blurb: "Real-time infrastructure that lets multiple AI coding agents (Claude Code, Cursor, Cline) collaborate as a team across machines: shared memory, task boards, MCP messaging, and a live dashboard. Ships a published Python CLI (pip install meshcode).",
      },
      {
        blurb: "Interactive platform for managing and controlling operations at the executive level. Internal solution with role hierarchy, multi-tenant isolation (RLS), executive dashboards with a 3D world map, Kanban boards, and a data-grounded AI assistant.",
      },
      {
        blurb: "E-learning platform of AI courses for a non-technical LATAM audience: 15 courses / 110+ lessons with quizzes, an AI tutor and sandbox, personalized learning plans, PDF certificates, and an admin panel with real metrics.",
      },
      {
        blurb: "Web platform managing the full credit-application lifecycle (capture → review → approval) across sales, credit, and admin teams. Internal solution with role-based access, per-field comments, access logs, and an analytics dashboard.",
      },
      {
        blurb: "AI-powered notarial management platform, built as a replacement for legacy systems. Multi-tenant isolation per notary, case files, a unified identity archive (RFC/CURP/CFDI 4.0, PLD), and AI-assisted capture and document generation.",
      },
    ],
  },

  // ─── Work (data engineering / internal projects) ───
  "projects.kicker": { es: "Trabajo & Data Engineering", en: "Work & Data Engineering" },
  "projects.title": { es: "Ingeniería en producción.", en: "Engineering in production." },
  "projects.scrollLeft": { es: "Desplazar izquierda", en: "Scroll left" },
  "projects.scrollRight": { es: "Desplazar derecha", en: "Scroll right" },
  "projects.items": {
    es: [
      {
        title: "Tiendas 2.0 — Event-Driven Architecture",
        blurb: "Arquitectura event-driven en tiempo real para ingesta y procesamiento de eventos, basada en KQL para analítica de alto desempeño y monitoreo operacional en escala enterprise.",
        metric: "3,400+ tiendas en 21 regiones",
      },
      {
        title: "Main Pipeline Optimization",
        blurb: "Refactor y optimización del pipeline principal que alimenta 10 modelos semánticos. Reducción significativa en tiempos de refresh y mejora de confiabilidad.",
        metric: "−35% refresh time",
      },
      {
        title: "Ticket Data Extraction",
        blurb: "Rediseño del flujo de extracción de tickets sobre Azure Data Factory y Microsoft Fabric, con paralelización y particionado optimizado.",
        metric: "4h30 → 1h07",
      },
      {
        title: "Data Hub Landing Page",
        blurb: "Hub centralizado de dashboards y documentación que mejora la accesibilidad y descubrimiento de datos para directores y gerentes a nivel corporativo.",
        metric: "+570 stakeholders",
      },
    ],
    en: [
      {
        title: "Tiendas 2.0 — Event-Driven Architecture",
        blurb: "Real-time event-driven architecture for event ingestion and processing, based on KQL for high-performance analytics and operational monitoring at enterprise scale.",
        metric: "3,400+ stores across 21 regions",
      },
      {
        title: "Main Pipeline Optimization",
        blurb: "Refactoring and optimization of the main pipeline feeding 10 semantic models. Significant reduction in refresh times and reliability improvement.",
        metric: "−35% refresh time",
      },
      {
        title: "Ticket Data Extraction",
        blurb: "Redesign of the ticket extraction flow on Azure Data Factory and Microsoft Fabric, with optimized parallelization and partitioning.",
        metric: "4h30 → 1h07",
      },
      {
        title: "Data Hub Landing Page",
        blurb: "Centralized dashboard and documentation hub that improves data accessibility and discovery for directors and managers at the corporate level.",
        metric: "+570 stakeholders",
      },
    ],
  },

  // ─── Skills ───
  "skills.kicker": { es: "Habilidades", en: "Skills" },
  "skills.title": { es: "Mi stack técnico.", en: "My tech stack." },
  "skills.groups": {
    es: ["Fullstack & Web", "Cloud & Data Engineering", "Lenguajes & Datos", "Bases de datos & Backend", "IA & Integraciones", "BI, Herramientas & Diseño"],
    en: ["Fullstack & Web", "Cloud & Data Engineering", "Languages & Data", "Databases & Backend", "AI & Integrations", "BI, Tools & Design"],
  },
  "skills.interests": {
    es: [
      "Product Engineering", "Fullstack Development", "Cloud-native Engineering",
      "AI Integration", "Data Quality & Compliance", "CI/CD & Automation", "System Design",
    ],
    en: [
      "Product Engineering", "Fullstack Development", "Cloud-native Engineering",
      "AI Integration", "Data Quality & Compliance", "CI/CD & Automation", "System Design",
    ],
  },

  // ─── Certifications ───
  "certs.kicker": { es: "Certificaciones", en: "Certifications" },
  "certs.title": { es: "Credenciales.", en: "Credentials." },
  "certs.viewCredential": { es: "Ver credencial", en: "View credential" },

  // ─── GitHub ───
  "github.kicker": { es: "Open Source", en: "Open Source" },
  "github.title": { es: "Mi actividad en GitHub.", en: "My GitHub activity." },
  "github.recentActivity": { es: "Actividad reciente", en: "Recent activity" },
  "github.unavailable": { es: "GitHub data no disponible en este momento.", en: "GitHub data unavailable at this time." },
  "github.timeAgo.m": { es: "hace", en: "" },
  "github.timeAgo.suffix.m": { es: "m", en: "m ago" },
  "github.timeAgo.suffix.h": { es: "h", en: "h ago" },
  "github.timeAgo.suffix.d": { es: "d", en: "d ago" },
  "github.timeAgo.suffix.mo": { es: "mo", en: "mo ago" },

  // ─── Education ───
  "education.kicker": { es: "Educación", en: "Education" },
  "education.items": {
    es: [
      { title: "B.S. en Ingeniería en Tecnologías Computacionales", institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey", period: "Ago 2021 — Jun 2025" },
      { title: "Marketing & Digital Marketing", institution: "Universidad CEU San Pablo", period: "Ago 2024 — Ene 2025" },
    ],
    en: [
      { title: "B.S. in Computer Science and Technology", institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey", period: "Aug 2021 — Jun 2025" },
      { title: "Marketing & Digital Marketing", institution: "Universidad CEU San Pablo", period: "Aug 2024 — Jan 2025" },
    ],
  },
  "languages.kicker": { es: "Idiomas", en: "Languages" },
  "languages.items": {
    es: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B2" },
    ],
    en: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B2" },
    ],
  },

  // ─── Contact ───
  "contact.kicker": { es: "Contacto", en: "Contact" },
  "contact.title1": { es: "Hagamos algo", en: "Let's build something" },
  "contact.title2": { es: "extraordinario.", en: "extraordinary." },
  "contact.subtitle": {
    es: "Si estás construyendo un producto, en datos, cloud o IA, o necesitas un partner técnico, escríbeme.",
    en: "If you're building a product — in data, cloud, or AI — or need a technical partner, reach out.",
  },
  "contact.copyEmail": { es: "Copiar email", en: "Copy email" },
  "contact.copied": { es: "Copiado", en: "Copied" },
  "contact.formName": { es: "Tu nombre", en: "Your name" },
  "contact.formEmail": { es: "Tu email", en: "Your email" },
  "contact.formMessage": { es: "Tu mensaje", en: "Your message" },
  "contact.formSubmit": { es: "Enviar mensaje", en: "Send message" },
  "contact.formSending": { es: "Enviando...", en: "Sending..." },
  "contact.formSent": { es: "Mensaje enviado", en: "Message sent" },
  "contact.formThanks": { es: "Gracias por escribirme. Te responderé lo antes posible.", en: "Thanks for writing. I'll get back to you as soon as possible." },
  "contact.formAnother": { es: "Enviar otro mensaje", en: "Send another message" },
  "contact.formRetry": { es: "Intentar de nuevo", en: "Try again" },
  "contact.errName": { es: "El nombre es requerido", en: "Name is required" },
  "contact.errEmail": { es: "El email es requerido", en: "Email is required" },
  "contact.errEmailInvalid": { es: "Email no válido", en: "Invalid email" },
  "contact.errMessage": { es: "El mensaje es requerido", en: "Message is required" },
  "contact.errConnection": { es: "Error de conexión. Intenta de nuevo.", en: "Connection error. Try again." },
  "contact.infoEmail": { es: "Email", en: "Email" },
  "contact.infoPhone": { es: "Teléfono", en: "Phone" },
  "contact.infoLocation": { es: "Ubicación", en: "Location" },
  "contact.socialSuffix": { es: "(abre en nueva pestaña)", en: "(opens in new tab)" },

  // ─── Footer ───
  "footer.designed": { es: "Diseñado y desarrollado con cuidado.", en: "Designed and developed with care." },
  "footer.madeIn": { es: "Hecho en", en: "Made in" },

  // ─── BackToTop ───
  "backToTop": { es: "Volver arriba", en: "Back to top" },

  // ─── CommandPalette ───
  "cmd.placeholder": { es: "Buscar secciones, proyectos, acciones...", en: "Search sections, projects, actions..." },
  "cmd.noResults": { es: "Sin resultados", en: "No results" },
  "cmd.label": { es: "Paleta de comandos", en: "Command palette" },
  "cmd.search": { es: "Buscar", en: "Search" },
  "cmd.home": { es: "Inicio", en: "Home" },
  "cmd.about": { es: "Sobre mí", en: "About" },
  "cmd.experience": { es: "Experiencia", en: "Experience" },
  "cmd.products": { es: "Productos", en: "Products" },
  "cmd.projects": { es: "Trabajo", en: "Work" },
  "cmd.skills": { es: "Skills", en: "Skills" },
  "cmd.github": { es: "GitHub", en: "GitHub" },
  "cmd.education": { es: "Educación", en: "Education" },
  "cmd.contact": { es: "Contacto", en: "Contact" },
  "cmd.copyEmail": { es: "Copiar email", en: "Copy email" },
  "cmd.viewGithub": { es: "Ver GitHub", en: "View GitHub" },
  "cmd.hintProject": { es: "Proyecto", en: "Project" },
  "cmd.hintAction": { es: "Acción", en: "Action" },

  // ─── Skip link ───
  "skipToContent": { es: "Ir al contenido principal", en: "Skip to main content" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  const entry = translations[key];
  const value = entry[locale];
  if (typeof value === "string") return value;
  return String(value);
}

export function tArray<T>(key: TranslationKey, locale: Locale): T[] {
  const entry = translations[key];
  const value = entry[locale];
  return value as unknown as T[];
}

export default translations;
