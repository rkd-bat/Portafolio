import type { Lang } from "../i18n/ui";

type LocalizedText = Record<Lang, string>;

export interface Project {
  id: string;
  code: string;
  title: LocalizedText;
  description: LocalizedText;
  responsibilities: Record<Lang, string[]>;
  technologies: string[];
  preview?: {
    src: string;
    alt: LocalizedText;
  };
}

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
    code: "INV",
    title: { es: "Sistema de inventario", en: "Inventory system" },
    description: {
      es: "Sistema de inventario desarrollado para la empresa, desde la investigación y el diseño de interfaces hasta la implementación Full Stack.",
      en: "An inventory system developed for the company, from research and interface design through full-stack implementation.",
    },
    responsibilities,
    technologies: ["Next.js", "C# / .NET", "SQL Server", "Figma"],
  },
  {
    id: "erp",
    code: "ERP",
    title: { es: "ERP empresarial", en: "Enterprise ERP" },
    description: {
      es: "Sistema de gestión empresarial diseñado y desarrollado de extremo a extremo, desde el levantamiento de requerimientos hasta la implementación de interfaces, bases de datos y backend.",
      en: "A business management system designed and developed end to end, from requirements gathering through interface, database, and backend implementation.",
    },
    responsibilities,
    technologies: ["Next.js", "C# / .NET", "SQL Server", "Figma"],
  },
];
