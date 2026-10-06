import type { Lang } from "../i18n/ui";

type LocalizedText = Record<Lang, string>;

interface ProjectDetails {
  id: string;
  code: string;
  title: LocalizedText;
  description: LocalizedText;
  responsibilities: Record<Lang, string[]>;
  technologies: string[];
  featured?: boolean;
  provisional?: boolean;
  context?: LocalizedText;
  demoUrl?: string;
  preview?: {
    // Ruta relativa a public/, por ejemplo: "projects/inventory.webp".
    src: string;
    alt: LocalizedText;
  };
}

export type Project = ProjectDetails & (
  | { category: "professional"; repositoryUrl?: never }
  | { category: "personal"; repositoryUrl?: string }
);

const responsibilities: Project["responsibilities"] = {
  es: [
    "Levantamiento de requerimientos y entrevistas.",
    "Diseño UI/UX en Figma.",
    "Modelado y diagramas de bases de datos.",
    "Desarrollo frontend y backend.",
  ],
  en: [
    "Requirements gathering and stakeholder interviews.",
    "UI/UX design in Figma.",
    "Database modeling and diagrams.",
    "Frontend and backend development.",
  ],
};

export const projects: Project[] = [
  {
    id: "inventory",
    category: "professional",
    featured: true,
    code: "INV",
    title: { es: "Sistema de inventario", en: "Inventory system" },
    description: {
      es: "Sistema de inventario desarrollado para la empresa, desde la investigación y el diseño de interfaces hasta la implementación Full Stack.",
      en: "An inventory system developed for the company, from research and interface design through full-stack implementation.",
    },
    responsibilities,
    technologies: ["React.js", "C# / .NET", "SQL Server", "Figma"],
  },
  {
    id: "erp",
    category: "professional",
    featured: true,
    code: "ERP",
    title: { es: "ERP empresarial", en: "Enterprise ERP" },
    description: {
      es: "Sistema de gestión empresarial diseñado y desarrollado de extremo a extremo, desde el levantamiento de requerimientos hasta la implementación de interfaces, bases de datos y backend.",
      en: "A business management system designed and developed end to end, from requirements gathering through interface, database, and backend implementation.",
    },
    responsibilities,
    technologies: ["React.js", "C# / .NET", "SQL Server", "Figma"],
  },
  {
    id: "portfolio",
    category: "personal",
    featured: true,
    code: "WEB",
    title: { es: "Portafolio personal", en: "Personal portfolio" },
    description: {
      es: "Sitio personal para presentar mi experiencia en desarrollo y diseño, con una identidad visual oscura y contenido en español e inglés.",
      en: "A personal website showcasing my development and design experience, with a dark visual identity and content in Spanish and English.",
    },
    responsibilities: {
      es: ["Diseño de interfaces y componentes reutilizables.", "Organización de contenido y navegación bilingüe.", "Implementación responsiva con Astro y Tailwind CSS."],
      en: ["Interface design and reusable components.", "Content organization and bilingual navigation.", "Responsive implementation with Astro and Tailwind CSS."],
    },
    technologies: ["Astro", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "replenishment-kanban",
    category: "professional",
    provisional: true,
    code: "KAN",
    context: { es: "Módulo de resurtido", en: "Replenishment module" },
    title: { es: "Kanban de resurtido", en: "Replenishment Kanban" },
    description: {
      es: "Tablero para organizar y dar seguimiento al proceso de resurtido, con una vista clara del estado de las solicitudes y las tareas pendientes.",
      en: "A board for organizing and tracking replenishment, with a clear view of request status and pending tasks.",
    },
    responsibilities: { es: [], en: [] },
    technologies: [],
  },
  {
    id: "shipping",
    category: "professional",
    provisional: true,
    code: "ENV",
    context: { es: "Módulo de embarques", en: "Shipping module" },
    title: { es: "Embarques", en: "Shipping" },
    description: {
      es: "Herramienta para organizar embarques y consultar su seguimiento, reuniendo la información operativa en una interfaz sencilla.",
      en: "A tool for organizing shipments and tracking their progress, bringing operational information together in a simple interface.",
    },
    responsibilities: { es: [], en: [] },
    technologies: [],
  },
  {
    id: "clients",
    category: "professional",
    provisional: true,
    code: "CLI",
    context: { es: "Módulo de clientes", en: "Client module" },
    title: { es: "Gestión de clientes", en: "Client management" },
    description: {
      es: "Módulo para centralizar el registro, la consulta y la actualización de clientes, facilitando el acceso a su información desde un solo lugar.",
      en: "A module for centralizing client registration, lookup, and updates, making their information accessible in one place.",
    },
    responsibilities: { es: [], en: [] },
    technologies: [],
  },
  {
    id: "personal-example",
    category: "personal",
    provisional: true,
    code: "APP",
    title: { es: "Gestor de tareas — ejemplo", en: "Task manager — example" },
    description: {
      es: "Aplicación personal de ejemplo para organizar tareas, definir prioridades y consultar el progreso de las actividades.",
      en: "A sample personal app for organizing tasks, setting priorities, and reviewing activity progress.",
    },
    responsibilities: { es: [], en: [] },
    technologies: [],
  },
];
