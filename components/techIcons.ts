import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiTailwindcss,
  SiMui,
  SiHtml5,
  SiCss,
  SiVite,
  SiCloudflare,
  SiPython,
  SiApachespark,
  SiCplusplus,
  SiUnity,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiPrisma,
  SiJsonwebtokens,
  SiAnthropic,
  SiGooglegemini,
  SiModelcontextprotocol,
  SiShopify,
  SiOdoo,
  SiResend,
  SiThreedotjs,
  SiGithub,
  SiFigma,
  SiVercel,
  SiDocker,
} from "react-icons/si";
import {
  FaAws,
  FaAmazon,
  FaMicrosoft,
  FaDatabase,
  FaLock,
  FaShieldAlt,
  FaChartBar,
  FaChartPie,
  FaShoppingCart,
  FaTheaterMasks,
  FaVideo,
  FaPalette,
  FaCode,
} from "react-icons/fa";
import {
  TbApi,
  TbPlugConnected,
  TbBrandCSharp,
  TbMathFunction,
  TbBrain,
  TbBrandTwilio,
  TbChartLine,
  TbChartDots,
} from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { RiOpenaiFill } from "react-icons/ri";

export type TechMeta = { Icon: IconType; color: string };

// Keys must match the exact item strings used in lib/data.ts skills.groups.
export const TECH_ICONS: Record<string, TechMeta> = {
  // Fullstack & Web
  React: { Icon: SiReact, color: "#149ECA" },
  "Next.js": { Icon: SiNextdotjs, color: "#18180f" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Express: { Icon: SiExpress, color: "#18180f" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#C9A400" },
  GraphQL: { Icon: SiGraphql, color: "#E10098" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#0EA5E9" },
  "Material UI": { Icon: SiMui, color: "#007FFF" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#2965F1" },
  "REST APIs": { Icon: TbApi, color: "#4B8BBE" },
  WebSockets: { Icon: TbPlugConnected, color: "#4B8BBE" },
  Vite: { Icon: SiVite, color: "#646CFF" },

  // Cloud & DevOps
  "Microsoft Azure": { Icon: VscAzure, color: "#0078D4" },
  "Microsoft Fabric": { Icon: FaMicrosoft, color: "#0078D4" },
  "Azure Data Factory": { Icon: VscAzure, color: "#0078D4" },
  "Azure DevOps (CI/CD)": { Icon: VscAzure, color: "#0078D4" },
  "AWS (S3, RDS)": { Icon: FaAws, color: "#E8890C" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Vercel: { Icon: SiVercel, color: "#18180f" },
  Cloudflare: { Icon: SiCloudflare, color: "#F38020" },

  // Lenguajes & Datos
  Python: { Icon: SiPython, color: "#3776AB" },
  SQL: { Icon: FaDatabase, color: "#6E7C91" },
  KQL: { Icon: FaDatabase, color: "#6E7C91" },
  PySpark: { Icon: SiApachespark, color: "#E25A1C" },
  "C/C++": { Icon: SiCplusplus, color: "#00599C" },
  "C#": { Icon: TbBrandCSharp, color: "#953DAC" },
  Unity: { Icon: SiUnity, color: "#18180f" },
  MATLAB: { Icon: TbMathFunction, color: "#E16737" },

  // Bases de datos & Backend
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  Prisma: { Icon: SiPrisma, color: "#2D3748" },
  JWT: { Icon: SiJsonwebtokens, color: "#B4318F" },
  bcrypt: { Icon: FaLock, color: "#6B7280" },
  RLS: { Icon: FaShieldAlt, color: "#6B7280" },

  // IA & Integraciones
  OpenAI: { Icon: RiOpenaiFill, color: "#18180f" },
  Anthropic: { Icon: SiAnthropic, color: "#D97757" },
  "Gemini / Groq": { Icon: SiGooglegemini, color: "#4E7FFF" },
  MCP: { Icon: SiModelcontextprotocol, color: "#18180f" },
  LLMs: { Icon: TbBrain, color: "#8B7BD8" },
  Shopify: { Icon: SiShopify, color: "#7AB55C" },
  Odoo: { Icon: SiOdoo, color: "#714B67" },
  "Mercado Libre": { Icon: FaShoppingCart, color: "#2D3277" },
  Amazon: { Icon: FaAmazon, color: "#FF9900" },
  Twilio: { Icon: TbBrandTwilio, color: "#F22F46" },
  Resend: { Icon: SiResend, color: "#18180f" },

  // BI, Viz & Herramientas
  "Power BI": { Icon: FaChartBar, color: "#C9A200" },
  Tableau: { Icon: FaChartPie, color: "#C05F1F" },
  Recharts: { Icon: TbChartLine, color: "#22B5BF" },
  ApexCharts: { Icon: TbChartDots, color: "#008FFB" },
  "three.js": { Icon: SiThreedotjs, color: "#18180f" },
  "Git / GitHub": { Icon: SiGithub, color: "#18180f" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Canva: { Icon: FaPalette, color: "#00C4CC" },
  "Adobe Premiere": { Icon: FaVideo, color: "#9D5CFF" },
  Playwright: { Icon: FaTheaterMasks, color: "#2EAD33" },
};

const FALLBACK: TechMeta = { Icon: FaCode, color: "#8a8676" };

export function techMeta(name: string): TechMeta {
  return TECH_ICONS[name] ?? FALLBACK;
}
