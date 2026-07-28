export type Locale = "es" | "en";

const translations = {
  // ─── Navbar ───
  "nav.about": { es: "Sobre mí", en: "About" },
  "nav.experience": { es: "Experiencia", en: "Experience" },
  "nav.products": { es: "Productos", en: "Products" },
  "nav.academic": { es: "Académico", en: "Academic" },
  "nav.work": { es: "Trabajo", en: "Work" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.cta": { es: "Trabajemos juntos", en: "Let's work together" },
  "nav.menuOpen": { es: "Abrir menú", en: "Open menu" },
  "nav.menuClose": { es: "Cerrar menú", en: "Close menu" },

  // ─── Hero ───
  "hero.available": { es: "Disponible para nuevos proyectos", en: "Available for new projects" },
  "hero.tagline": {
    es: "Convierto ideas en productos completos —de la interfaz a los datos— con IA en el núcleo. He llevado 5 plataformas propias de cero a producción.",
    en: "I turn ideas into complete products —from the interface to the data— with AI at the core. I've taken 5 of my own platforms from zero to production.",
  },
  "hero.workedAt": { es: "Experiencia en", en: "Experience at" },
  "hero.locationLine": {
    es: "Ciudad de México · Disponible para proyectos remotos",
    en: "Mexico City · Available for remote work",
  },
  "hero.role": {
    es: "Soy Fullstack Developer & Data Engineer",
    en: "I'm a Fullstack Developer & Data Engineer",
  },
  "hero.basedIn": { es: "basado en", en: "based in" },
  "hero.cta": { es: "Ver mi trabajo", en: "See my work" },
  "hero.contact": { es: "Contáctame", en: "Contact me" },
  "hero.socialContact": { es: "Contacto", en: "Contact" },
  "hero.downloadCv": { es: "Descargar CV", en: "Download CV" },
  "hero.scroll": { es: "scroll", en: "scroll" },
  "hero.stat.platforms": { es: "Plataformas propias", en: "Own platforms" },
  "hero.stat.years": { es: "Años construyendo", en: "Years building" },
  "hero.stat.stores": { es: "Tiendas impactadas", en: "Stores impacted" },
  "hero.stat.faster": { es: "Más rápido", en: "Faster" },
  "hero.stat.regions": { es: "Regiones", en: "Regions" },
  "hero.stat.stakeholders": { es: "stakeholders", en: "stakeholders" },

  // ─── About ───
  "about.kicker": { es: "Sobre mí", en: "About me" },
  "about.title": { es: "Builder end-to-end.", en: "End-to-end builder." },
  "about.intro": {
    es: "Soy Fullstack Developer con especialidad en IA e Ingeniería de Datos, radicado en Ciudad de México. Hoy construyo productos en tiempo real con IA en eShip/Segmail — features customer-facing, chatbots con LLMs, servicios de mensajería en vivo y servidores MCP que conectan modelos de lenguaje directo a la plataforma — sobre React/Node.js y arquitecturas de datos event-driven en Microsoft Fabric y Azure.",
    en: "I'm a Fullstack Developer specialized in AI and Data Engineering, based in Mexico City. Today I build AI-powered, real-time products at eShip/Segmail — customer-facing features, LLM chatbots, live messaging services, and MCP servers that connect language models straight to the platform — on React/Node.js and event-driven data architectures over Microsoft Fabric and Azure.",
  },
  "about.intro2": {
    es: "Antes diseñé pipelines de extracción y procesamiento de datos para 21 regiones y más de 3,400 tiendas, recortando tiempos de procesamiento hasta un 35%. Y en paralelo fundé cinco plataformas propias — de un CRM multi-tenant a una plataforma de IA notarial — que llevé de idea a producción. Me gusta hacerme cargo del producto completo, de principio a fin.",
    en: "Before that I designed data extraction and processing pipelines across 21 regions and 3,400+ stores, cutting processing times by up to 35%. In parallel, I've founded five of my own platforms — from a multi-tenant CRM to an AI notarial platform — taking each one from idea to production. I like owning the whole product, end to end.",
  },
  "about.bullets": {
    es: [
      "En eShip/Segmail construyo features, chatbots con LLMs, integraciones MCP y dashboards en una plataforma en producción con 12,000+ usuarios.",
      "Fundador de 5 plataformas propias (SaaS, e-learning, IA legal) llevadas de idea a producción.",
      "Diseñé pipelines de extracción y procesamiento de datos en 21 regiones y +3,400 tiendas, reduciendo tiempos de procesamiento hasta 35%.",
      "Ingeniero en Tecnologías Computacionales por el Tecnológico de Monterrey.",
    ],
    en: [
      "At eShip/Segmail I build features, LLM chatbots, MCP integrations, and dashboards on a production platform serving 12,000+ users.",
      "Founder of 5 own platforms (SaaS, e-learning, legal AI) taken from idea to production.",
      "Designed data extraction and processing pipelines across 21 regions and 3,400+ stores, cutting processing times by up to 35%.",
      "Computer Technologies Engineer from Tecnológico de Monterrey.",
    ],
  },
  "about.info.role": { es: "Rol", en: "Role" },
  "about.info.roleValue": { es: "Fullstack Developer", en: "Fullstack Developer" },
  "about.info.roleSub": { es: "Especializado en IA e Ing. de Datos", en: "Specialized in AI & Data Engineering" },
  "about.info.education": { es: "Educación", en: "Education" },
  "about.info.educationValue": { es: "Ing. en Tecnologías Computacionales", en: "B.S. Computer Technologies Eng." },
  "about.info.educationSub": { es: "Tecnológico de Monterrey · + Marketing, CEU Madrid", en: "Tecnológico de Monterrey · + Marketing, CEU Madrid" },
  "about.info.ceuNote": { es: "Marketing", en: "Marketing" },
  "about.info.location": { es: "Ubicación", en: "Location" },
  "about.info.locationValue": { es: "Ciudad de México, MX", en: "Mexico City, MX" },
  "about.info.languages": { es: "Idiomas", en: "Languages" },
  "about.info.languagesValue": { es: "Español · Inglés", en: "Spanish · English" },

  // ─── Experience ───
  "experience.kicker": { es: "Experiencia", en: "Experience" },
  "experience.title": { es: "Dónde he construido.", en: "Where I've built." },
  "experience.expand": { es: "Ver más detalle", en: "See more detail" },
  "experience.collapse": { es: "Ocultar detalle", en: "Hide detail" },
  "experience.achievements": { es: "Logros", en: "Achievements" },
  "experience.impact": { es: "Impacto", en: "Impact" },
  "experience.stackLabel": { es: "Stack", en: "Stack" },
  "experience.items": {
    es: [
      {
        role: "Fullstack Developer & AI Engineer",
        company: "eShip / Segmail",
        period: "Feb 2026 — Presente",
        description: "Construyo features end-to-end para la plataforma logística v2.0, combinando producto, tiempo real e integraciones de IA y e-commerce.",
        metrics: ["Plataforma v2.0", "7+ integraciones", "IA + tiempo real"],
        highlights: [
          "Diseñé y lancé un servidor MCP (Model Context Protocol): una capa LLM-native que permite a agentes de IA consultar y ejecutar acciones sobre los datos de cuenta y de operación en lenguaje natural — volviendo toda la plataforma conversacional y accionable por agentes. Infraestructura pensada para el futuro del software.",
          "Lideré el desarrollo del módulo de Customer Service con un sistema de gestión de incidencias integrado al core de la plataforma v2.0.",
          "Construí 'Chatter', un servicio de mensajería cliente–agente en tiempo real para hacer el soporte mucho más fluido (React, Node.js, MySQL, Twilio).",
          "Desarrollé un chatbot inteligente de soporte con LLMs (OpenAI) embebido en la página de tracking de órdenes para automatizar la atención al cliente.",
          "Creé dashboards de analítica con insights detallados de envíos y órdenes, además de un módulo de automatizaciones en la v2.0 (Recharts / ApexCharts).",
          "Construí un módulo de inventario que integra ShipHero, Mercado Libre, Amazon y Odoo en una sola vista unificada.",
          "Integré plataformas de e-commerce (Shopify, Odoo, Tiendanube, Wix) para extraer órdenes e inventario, con onboarding interactivo para nuevos clientes.",
        ],
      },
      {
        role: "Data Engineer & Data Analyst",
        company: "Corporativo Tiendas 3B",
        period: "May 2025 — Ene 2026",
        description: "Diseñé arquitecturas de datos modernas y event-driven para el proyecto Tiendas 2.0, llevando analítica de grado producción a escala nacional.",
        metrics: ["−35% refresh", "4h30 → 1h07", "3,400+ tiendas", "21 regiones", "+570 stakeholders"],
        highlights: [
          "Implementé una arquitectura event-driven con ingesta y procesamiento de eventos en tiempo real, sobre bases KQL para analítica de alto desempeño y monitoreo operacional.",
          "Diseñé y optimicé pipelines de extracción y procesamiento de datos a través de 21 regiones (~3,400 tiendas), habilitando la extracción escalable de datos de ventas.",
          "Mejoré el rendimiento del Main Pipeline que alimenta 10 modelos semánticos, reduciendo el tiempo de refresh en un 35%.",
          "Reduje la extracción de datos de tickets de 4h30 a 1h07 mediante Azure Data Factory y Microsoft Fabric.",
          "Implementé pipelines CI/CD con Azure DevOps en Microsoft Fabric, agilizando los despliegues.",
          "Desarrollé un Data Hub que centraliza dashboards y documentación, mejorando el acceso a los datos para +570 directores y gerentes.",
        ],
      },
      {
        role: "Data Analyst",
        company: "IBSO",
        period: "Ene 2024 — Jun 2024",
        description: "Convertí datos de negocio en decisiones para clientes enterprise, con dashboards que optimizaron inventario, ventas y eficiencia operativa.",
        metrics: ["+15–20% ventas", "3 clientes enterprise"],
        highlights: [
          "Gestioné dashboards para MAPED, Grupo JULIO y TISA, entregando insights accionables que optimizaron la gestión de inventario y la eficiencia operativa.",
          "Diseñé y mantuve dashboards interactivos en Tableau, mejorando el KPI tracking, el análisis de tendencias de ventas y la gestión de stock para clientes diversos.",
          "Colaboré con los equipos de negocio para identificar cuellos de botella operativos, entregando insights que impulsaron el desempeño en ventas ~15–20%.",
        ],
      },
      {
        role: "Marketing & Business Development Intern",
        company: "Shoplogix",
        period: "Oct 2022 — Jun 2023",
        description: "Primer contacto con producto y crecimiento: contenido, marca y web para impulsar la adquisición de clientes en LATAM.",
        metrics: ["LATAM", "+ generación de leads"],
        highlights: [
          "Produje contenido digital y multimedia para apoyar la adquisición de clientes y fortalecer la presencia de la empresa en el mercado LATAM.",
          "Apoyé el rediseño del sitio web LATAM, mejorando la usabilidad y la alineación con las necesidades del cliente, lo que aumentó la generación de leads.",
        ],
      },
    ],
    en: [
      {
        role: "Fullstack Developer & AI Engineer",
        company: "eShip / Segmail",
        period: "Feb 2026 — Present",
        description: "I build end-to-end features for the v2.0 logistics platform, blending product, real-time, and AI & e-commerce integrations.",
        metrics: ["v2.0 platform", "7+ integrations", "AI + real-time"],
        highlights: [
          "Architected and shipped an MCP (Model Context Protocol) server: an LLM-native layer that lets AI agents query and take action on account and operational data in natural language — turning the entire platform into something conversational and agent-actionable. Infrastructure built for where software is heading.",
          "Led development of the Customer Service module with an incident-management system integrated into the core of the v2.0 platform.",
          "Built 'Chatter', a real-time client–agent messaging service to make support far smoother (React, Node.js, MySQL, Twilio).",
          "Developed an intelligent LLM support chatbot (OpenAI) embedded in the order-tracking page to automate customer assistance.",
          "Created analytics dashboards with detailed shipment and order insights, plus an automations module in v2.0 (Recharts / ApexCharts).",
          "Built an inventory module integrating ShipHero, Mercado Libre, Amazon, and Odoo into a single unified view.",
          "Integrated e-commerce platforms (Shopify, Odoo, Tiendanube, Wix) to extract orders and inventory, with interactive onboarding for new clients.",
        ],
      },
      {
        role: "Data Engineer & Data Analyst",
        company: "Corporativo Tiendas 3B",
        period: "May 2025 — Jan 2026",
        description: "Designed modern, event-driven data architectures for the Tiendas 2.0 project, bringing production-grade analytics to national scale.",
        metrics: ["−35% refresh", "4h30 → 1h07", "3,400+ stores", "21 regions", "+570 stakeholders"],
        highlights: [
          "Implemented an event-driven architecture with real-time event ingestion and processing, on KQL databases for high-performance analytics and operational monitoring.",
          "Designed and optimized data extraction and processing pipelines across 21 regions (~3,400 stores), enabling scalable extraction of sales data.",
          "Improved the performance of the Main Pipeline powering 10 semantic models, reducing refresh time by 35%.",
          "Reduced ticket-data extraction from 4h30 to 1h07 through Azure Data Factory and Microsoft Fabric.",
          "Implemented CI/CD pipelines with Azure DevOps in Microsoft Fabric, streamlining deployments.",
          "Developed a Data Hub centralizing dashboards and documentation, improving data access for 570+ directors and managers.",
        ],
      },
      {
        role: "Data Analyst",
        company: "IBSO",
        period: "Jan 2024 — Jun 2024",
        description: "Turned business data into decisions for enterprise clients, with dashboards that optimized inventory, sales, and operational efficiency.",
        metrics: ["+15–20% sales", "3 enterprise clients"],
        highlights: [
          "Managed dashboards for MAPED, Grupo JULIO, and TISA, delivering actionable insights that optimized inventory management and operational efficiency.",
          "Designed and maintained interactive Tableau dashboards, improving KPI tracking, sales-trend analysis, and stock management for diverse clients.",
          "Collaborated with business teams to identify operational bottlenecks, delivering insights that boosted sales performance ~15–20%.",
        ],
      },
      {
        role: "Marketing & Business Development Intern",
        company: "Shoplogix",
        period: "Oct 2022 — Jun 2023",
        description: "First taste of product and growth: content, brand, and web to drive client acquisition across LATAM.",
        metrics: ["LATAM", "+ lead generation"],
        highlights: [
          "Produced digital and multimedia content to support client acquisition and strengthen the company's market presence across LATAM.",
          "Supported the redesign of the LATAM website, improving usability and alignment with client needs, which increased lead generation.",
        ],
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
  "products.wip.title": { es: "Plataforma en desarrollo", en: "Platform in development" },
  "products.wip.body": {
    es: "NotarIA sigue en desarrollo activo (beta). Algunas secciones pueden cambiar o no estar disponibles todavía. ¿Quieres visitar la beta de todas formas?",
    en: "NotarIA is still under active development (beta). Some sections may change or not be available yet. Do you want to visit the beta anyway?",
  },
  "products.wip.visit": { es: "Visitar beta", en: "Visit beta" },
  "products.wip.close": { es: "Cerrar", en: "Close" },
  "products.items": {
    es: [
      {
        blurb: "Infraestructura de colaboración en tiempo real que convierte instancias sueltas de agentes de código (Claude Code, Cursor, Cline) en un equipo coordinado trabajando en paralelo entre máquinas: memoria y contexto compartidos, task boards para repartir el trabajo, mensajería MCP entre agentes y un dashboard en vivo para orquestarlo todo. Incluye un CLI publicado en Python (pip install meshcode) — la capa que lleva el desarrollo con IA de un agente aislado a una fuerza de trabajo orquestada.",
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
        blurb: "Real-time collaboration infrastructure that turns lone coding-agent instances (Claude Code, Cursor, Cline) into a coordinated team working in parallel across machines: shared memory and context, task boards to split the work, MCP messaging between agents, and a live dashboard to orchestrate it all. Ships a published Python CLI (pip install meshcode) — the layer that takes AI development from a single isolated agent to an orchestrated workforce.",
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

  // ─── Academic developments (Tec projects revived / deployed) ───
  "academic.kicker": { es: "Desarrollos Académicos", en: "Academic Work" },
  "academic.title": { es: "Proyectos académicos.", en: "Academic projects." },
  "academic.subtitle": {
    es: "Estos proyectos son el rastro de mi paso por el Tecnológico de Monterrey (ITESM). Cada uno nació de un reto real de la carrera y me obligó a aprender ingeniería de verdad —de un videojuego a una plataforma con IA, de un backend a una arquitectura en la nube—. Son la base de todo lo que hoy sé construir.",
    en: "These projects are the trail of my years at Tecnológico de Monterrey (ITESM). Each one grew out of a real challenge from my degree and pushed me to learn engineering for real —from a video game to an AI platform, from a backend to a cloud architecture—. They're the foundation of everything I know how to build today.",
  },
  "academic.badge": { es: "Tecnológico de Monterrey", en: "Tecnológico de Monterrey" },
  "academic.status.live": { es: "En vivo", en: "Live" },
  "academic.status.case": { es: "Caso de estudio", en: "Case study" },
  "academic.type.game": { es: "Videojuego", en: "Game" },
  "academic.type.ai": { es: "Recomendación de cultivos", en: "Crop recommendation" },
  "academic.type.callcenter": { es: "Call Center", en: "Call Center" },
  "academic.visit": { es: "Ver proyecto", en: "View project" },
  "academic.play": { es: "Jugar ahora", en: "Play now" },
  "academic.study": { es: "Ver caso de estudio", en: "View case study" },
  "academic.repo": { es: "Código", en: "Code" },
  "academic.items": {
    es: [
      {
        blurb:
          "Plataforma de agricultura inteligente que recomienda el cultivo óptimo para un terreno. A partir de los nutrientes del suelo (N, P, K), la temperatura, la humedad, el pH y la lluvia, un modelo de machine learning predice qué conviene sembrar para maximizar el rendimiento. Frontend en React/Vite y backend en Flask con PostgreSQL, con análisis de suelo, histórico de recomendaciones y dashboard.",
      },
      {
        blurb:
          "Plataforma de gestión de call center en tiempo real, construida 100% sobre AWS: Cognito para los roles (supervisor/agente), AppSync (GraphQL) + DynamoDB para los datos, y Lambda + Amazon Connect para la telefonía y el softphone dentro del navegador. Los agentes atienden llamadas mientras los supervisores monitorean el estado de cada agente, la transcripción y las alertas de sentimiento en tiempo real.",
      },
      {
        blurb:
          "RPG de fantasía con batallas y magia: el jugador explora el mundo, combate y avanza a lo largo de la aventura. Incluye cuentas de usuario —registro, inicio de sesión y guardado de partida— para retomar el juego justo donde lo dejaste. Hecho en Unity (C#) y llevado a WebGL para jugarse directo en el navegador, con un backend Node/Express + MySQL que gestiona usuarios y progreso.",
      },
    ],
    en: [
      {
        blurb:
          "A smart-agriculture platform that recommends the optimal crop for a plot of land. From soil nutrients (N, P, K), temperature, humidity, pH, and rainfall, a machine-learning model predicts what to plant to maximize yield. A React/Vite frontend with a Flask + PostgreSQL backend, featuring soil analysis, a recommendation history, and a dashboard.",
      },
      {
        blurb:
          "A real-time call-center management platform built entirely on AWS: Cognito for roles (supervisor/agent), AppSync (GraphQL) + DynamoDB for data, and Lambda + Amazon Connect for telephony and the in-browser softphone. Agents handle calls while supervisors monitor each agent's state, live transcription, and sentiment alerts in real time.",
      },
      {
        blurb:
          "A fantasy RPG of battles and magic where the player explores the world, fights, and progresses through the adventure. It ships full user accounts —sign-up, login, and save-game— so you can pick up right where you left off. Built in Unity (C#) and shipped to WebGL to play straight in the browser, with a Node/Express + MySQL backend handling users and progress.",
      },
    ],
  },

  // ─── Work (data engineering / internal projects) ───
  "projects.kicker": { es: "Trabajo & Ingeniería", en: "Work & Engineering" },
  "projects.title": { es: "Ingeniería en producción.", en: "Engineering in production." },
  "projects.scrollLeft": { es: "Desplazar izquierda", en: "Scroll left" },
  "projects.scrollRight": { es: "Desplazar derecha", en: "Scroll right" },
  "common.swipeHint": { es: "Desliza para ver más", en: "Swipe for more" },
  "projects.items": {
    es: [
      {
        title: "MCP Server",
        blurb: "Servidor MCP (Model Context Protocol) que expone los datos de cuenta a modelos de lenguaje, permitiendo consultar y ejecutar acciones sobre la operación con lenguaje natural. Una capa 'LLM-native' que convierte la plataforma en algo accionable por agentes de IA — infraestructura pensada para el futuro del software.",
        metric: "LLM-native",
      },
      {
        title: "Customer Service + Chatter",
        blurb: "Módulo de Customer Service de nivel enterprise con un sistema de gestión de incidencias integrado al núcleo de la plataforma v2.0. Incluye 'Chatter', un motor de mensajería cliente–agente en tiempo real que reduce la fricción del soporte y acelera los tiempos de respuesta — construido sobre React, Node.js, MySQL y Twilio para escalar sin perder inmediatez.",
        metric: "Soporte en tiempo real",
      },
      {
        title: "AI Support Chatbot",
        blurb: "Asistente de soporte impulsado por IA (LLMs de OpenAI) embebido directamente en la página de tracking de órdenes. Resuelve dudas de clientes de forma autónoma 24/7, desvía tickets del equipo humano y entrega respuestas contextualizadas sobre el estado de cada envío — soporte que escala solo.",
        metric: "IA · OpenAI",
      },
      {
        title: "Analytics & Automations",
        blurb: "Suite de dashboards de analítica con insights accionables de envíos, órdenes y operación, más un motor de automatizaciones que elimina trabajo manual repetitivo. Visualizaciones en tiempo real con Recharts y ApexCharts que dan a cada cliente visibilidad total de su logística en un vistazo.",
        metric: "v2.0",
      },
      {
        title: "Inventory & E-commerce Hub",
        blurb: "Hub de inventario que unifica 7+ integraciones — ShipHero, Mercado Libre, Amazon, Odoo, Shopify, Tiendanube y Wix — en una sola fuente de verdad. Sincroniza órdenes e inventario entre canales en tiempo real, eliminando la doble captura y los desajustes de stock que cuestan ventas.",
        metric: "7+ integraciones",
      },
      {
        title: "Tiendas 2.0 — Event-Driven Architecture",
        blurb: "Arquitectura event-driven en tiempo real que ingiere y procesa eventos operativos a escala nacional, sobre bases KQL diseñadas para analítica de altísimo desempeño. La columna vertebral de datos que da monitoreo en vivo a una red de 3,400+ tiendas en 21 regiones — ingeniería crítica para un retailer de gran escala.",
        metric: "3,400+ tiendas · 21 regiones",
      },
      {
        title: "Main Pipeline Optimization",
        blurb: "Refactor integral del pipeline principal que alimenta 10 modelos semánticos de negocio. Rediseñé la orquestación y el particionado para recortar los tiempos de refresh en un 35% y elevar la confiabilidad, entregando decisiones más rápidas y frescas a la dirección.",
        metric: "−35% refresh time",
      },
      {
        title: "Ticket Data Extraction",
        blurb: "Rediseño del flujo de extracción de tickets sobre Azure Data Factory y Microsoft Fabric, con paralelización y particionado optimizado que llevó el proceso de 4h30 a 1h07 — una mejora de ~76% que desbloqueó analítica casi en tiempo real sobre millones de transacciones.",
        metric: "4h30 → 1h07",
      },
      {
        title: "Data Hub Landing Page",
        blurb: "Hub central que unifica dashboards y documentación en un único punto de entrada, democratizando el acceso a los datos para +570 directores y gerentes. Convirtió reportes dispersos en una experiencia de autoservicio con gobernanza — data que la gente por fin encuentra y usa.",
        metric: "+570 stakeholders",
      },
    ],
    en: [
      {
        title: "MCP Server",
        blurb: "An MCP (Model Context Protocol) server that exposes account data to language models, letting you query and take action on the operation in natural language. An 'LLM-native' layer that makes the platform actionable by AI agents — infrastructure built for where software is heading.",
        metric: "LLM-native",
      },
      {
        title: "Customer Service + Chatter",
        blurb: "Enterprise-grade Customer Service module with an incident-management system wired into the core of the v2.0 platform. Includes 'Chatter', a real-time client–agent messaging engine that cuts support friction and speeds up response times — built on React, Node.js, MySQL, and Twilio to scale without losing immediacy.",
        metric: "Real-time support",
      },
      {
        title: "AI Support Chatbot",
        blurb: "AI-powered support assistant (OpenAI LLMs) embedded directly in the order-tracking page. It resolves customer questions autonomously 24/7, deflects tickets from the human team, and delivers contextual answers about each shipment's status — support that scales itself.",
        metric: "AI · OpenAI",
      },
      {
        title: "Analytics & Automations",
        blurb: "A suite of analytics dashboards with actionable shipment, order, and operations insights, plus an automations engine that removes repetitive manual work. Real-time visualizations with Recharts and ApexCharts that give every client full visibility into their logistics at a glance.",
        metric: "v2.0",
      },
      {
        title: "Inventory & E-commerce Hub",
        blurb: "An inventory hub unifying 7+ integrations — ShipHero, Mercado Libre, Amazon, Odoo, Shopify, Tiendanube, and Wix — into a single source of truth. Syncs orders and inventory across channels in real time, eliminating double entry and stock mismatches that cost sales.",
        metric: "7+ integrations",
      },
      {
        title: "Tiendas 2.0 — Event-Driven Architecture",
        blurb: "A real-time event-driven architecture that ingests and processes operational events at national scale, on KQL databases engineered for extreme-performance analytics. The data backbone that gives live monitoring to a network of 3,400+ stores across 21 regions — mission-critical engineering for a large-scale retailer.",
        metric: "3,400+ stores · 21 regions",
      },
      {
        title: "Main Pipeline Optimization",
        blurb: "A full refactor of the main pipeline powering 10 business semantic models. I redesigned the orchestration and partitioning to cut refresh times by 35% and raise reliability, delivering faster, fresher decisions to leadership.",
        metric: "−35% refresh time",
      },
      {
        title: "Ticket Data Extraction",
        blurb: "Redesign of the ticket-extraction flow on Azure Data Factory and Microsoft Fabric, with optimized parallelization and partitioning that took the process from 4h30 to 1h07 — a ~76% improvement that unlocked near-real-time analytics over millions of transactions.",
        metric: "4h30 → 1h07",
      },
      {
        title: "Data Hub Landing Page",
        blurb: "A central hub unifying dashboards and documentation into a single entry point, democratizing data access for 570+ directors and managers. It turned scattered reports into a governed self-service experience — data people can finally find and use.",
        metric: "+570 stakeholders",
      },
    ],
  },

  // ─── Skills ───
  "skills.kicker": { es: "Habilidades", en: "Skills" },
  "skills.title": { es: "Mi stack técnico.", en: "My tech stack." },
  "skills.stackLabel": { es: "Stack principal", en: "Core stack" },
  "skills.groups": {
    es: ["Fullstack & Web", "Cloud & DevOps", "Lenguajes & Datos", "Bases de datos & Backend", "IA & Integraciones", "BI, Viz & Herramientas"],
    en: ["Fullstack & Web", "Cloud & DevOps", "Languages & Data", "Databases & Backend", "AI & Integrations", "BI, Viz & Tools"],
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
  "github.contributions": { es: "contribuciones en el último año", en: "contributions in the last year" },
  "github.less": { es: "Menos", en: "Less" },
  "github.more": { es: "Más", en: "More" },
  "github.topLanguages": { es: "Lenguajes más usados", en: "Top languages" },
  "github.featured": { es: "Repos públicos destacados", en: "Featured public repos" },
  "github.privateNote": {
    es: "Mis plataformas principales (MeshCode, Visión 360, NotarIA, Credit Ops) viven en repos privados — puedes verlas en la sección de Productos.",
    en: "My main platforms (MeshCode, Visión 360, NotarIA, Credit Ops) live in private repos — see them in the Products section.",
  },
  "github.stat.repos": { es: "repos", en: "repos" },
  "github.stat.followers": { es: "followers", en: "followers" },
  "github.stat.following": { es: "following", en: "following" },
  "github.stat.stars": { es: "stars", en: "stars" },
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
  "contact.title1": { es: "Trabajemos", en: "Let's work" },
  "contact.title2": { es: "juntos.", en: "together." },
  "contact.subtitle": {
    es: "Si estás construyendo un producto, en datos, cloud o IA, o necesitas un partner técnico, escríbeme.",
    en: "If you're building a product — in data, cloud, or AI — or need a technical partner, reach out.",
  },
  "contact.copyEmail": { es: "Copiar email", en: "Copy email" },
  "contact.copied": { es: "Copiado", en: "Copied" },
  "contact.formName": { es: "Tu nombre", en: "Your name" },
  "contact.formEmail": { es: "Tu email", en: "Your email" },
  "contact.formMessage": { es: "Tu mensaje", en: "Your message" },
  "contact.formSubmit": { es: "Enviar Email", en: "Send Email" },
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
  "contact.methodLabel": { es: "¿Cómo prefieres escribirme?", en: "How would you rather reach me?" },
  "contact.methodEmail": { es: "Email", en: "Email" },
  "contact.methodWhatsapp": { es: "WhatsApp", en: "WhatsApp" },
  "contact.waIntro": {
    es: "Se abre WhatsApp con el mensaje ya escrito. Tú solo le das enviar.",
    en: "WhatsApp opens with your message ready. You just hit send.",
  },
  "contact.waName": { es: "Tu nombre", en: "Your name" },
  "contact.waMessage": { es: "¿En qué te ayudo?", en: "What can I help you with?" },
  "contact.waSubmit": { es: "Enviar WhatsApp", en: "Send WhatsApp" },
  "contact.waGreeting": { es: "Hola Ian, soy", en: "Hi Ian, this is" },
  "contact.waFallback": {
    es: "Vi tu portafolio y me gustaría platicar contigo.",
    en: "I came across your portfolio and I'd like to talk.",
  },

  // ─── Footer ───
  "footer.label": { es: "Portafolio personal", en: "Personal portfolio" },

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
  "cmd.academic": { es: "Académico", en: "Academic" },
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
