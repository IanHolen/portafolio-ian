# portafolio-ian

Portafolio personal de **Ian Holender** — Data Engineer especializado en arquitecturas event-driven sobre Microsoft Fabric y Azure.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Script         | Descripción                        |
| -------------- | ---------------------------------- |
| `npm run dev`  | Servidor de desarrollo con HMR     |
| `npm run build`| Build de producción                |
| `npm start`    | Sirve el build de producción       |
| `npm run lint` | Linter de Next                     |

## Estructura

```
.
├── app/                 # App Router (layout, globals, page raíz)
├── components/          # Componentes de UI y secciones
├── lib/                 # Fuentes de datos (data.ts con el CV)
├── public/              # Assets estáticos
├── tailwind.config.ts   # Configuración de tema
└── next.config.mjs      # Configuración de Next
```

## Despliegue

Optimizado para desplegar en [Vercel](https://vercel.com). Conecta el repo y el deploy es automático en cada push a `main`.

## Contacto

- Email: holenderian@gmail.com
- LinkedIn: [Ian Holender](https://www.linkedin.com/in/ian-holender/)
