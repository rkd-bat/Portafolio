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
    preview: {
      src: "projects/inventory.png",
      alt: {
        es: "Captura de la interfaz del sistema de inventario",
        en: "Screenshot of the inventory system interface",
      },
    },
    description: {
      es: "Sistema de inventario desarrollado para la empresa, desde la investigación y el diseño de interfaces hasta la implementación Full Stack.",
      en: "An inventory system developed for the company, from research and interface design through full-stack implementation.",
    },
    responsibilities,
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "TanStack Query", "C# / ASP.NET Core", "SQL Server", "Figma"],
  },
  {
    id: "central-portal",
    category: "professional",
    featured: true,
    code: "SSO",
    title: { es: "Portal central SSO", en: "Central SSO portal" },
    preview: {
      src: "projects/portal.png",
      alt: {
        es: "Captura de la interfaz del portal central SSO",
        en: "Screenshot of the central SSO portal interface",
      },
    },
    description: {
      es: "Portal con inicio de sesión único (SSO) para acceder de forma segura a Administración, Inventario, Ventas y Control de acceso. Centraliza las aplicaciones internas y simplifica la navegación entre herramientas empresariales.",
      en: "A Single Sign-On (SSO) portal providing secure access to Administration, Inventory, Sales, and Access Control. It centralizes internal applications and simplifies navigation across enterprise tools.",
    },
    responsibilities: {
      es: ["Desarrollo del portal central para unificar el acceso a aplicaciones internas."],
      en: ["Development of the central portal to unify access to internal applications."],
    },
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Zustand", "Formik / Yup"],
  },
  {
    id: "mdi",
    category: "personal",
    featured: true,
    code: "MDI",
    title: { es: "MDI — Sistema de facturación", en: "MDI — Invoicing system" },
    context: { es: "Proyecto de titulación", en: "Engineering degree project" },
    preview: {
      src: "projects/mdi.png",
      alt: {
        es: "Captura de la interfaz de MDI, sistema de facturación",
        en: "Screenshot of the MDI invoicing system interface",
      },
    },
    description: {
      es: "Sistema de facturación desarrollado como proyecto personal universitario y presentado para obtener mi título de ingeniería. Permite crear, editar y eliminar productos, consultar facturas y exportarlas en PDF.",
      en: "An invoicing system developed as a personal university project and presented to earn my engineering degree. Supports creating, editing, and deleting products, viewing invoices, and exporting them as PDFs.",
    },
    responsibilities: {
      es: ["Desarrollo de la gestión de productos.", "Implementación de consulta de facturas y exportación en PDF."],
      en: ["Development of product management features.", "Implementation of invoice viewing and PDF export."],
    },
    technologies: ["PHP", "Laravel", "Livewire", "Tailwind CSS", "MySQL", "Dompdf", "Docker"],
  },
  {
    id: "replenishment-kanban",
    category: "professional",
    code: "KAN",
    context: { es: "Resurtido y monitoreo de existencias", en: "Inventory replenishment & stock monitoring" },
    title: { es: "Kanban de resurtido", en: "Replenishment Kanban" },
    preview: {
      src: "projects/kanban.png",
      alt: {
        es: "Captura de la interfaz del Kanban de resurtido",
        en: "Screenshot of the replenishment Kanban interface",
      },
    },
    description: {
      es: "Módulo para monitorear existencias por sucursal y detectar necesidades de resurtido. Incluye clasificación por stock, promedios de consumo y herramientas de filtrado, actualización y exportación para planificar el inventario.",
      en: "A module for monitoring stock by branch and identifying replenishment needs. Includes stock-level classification, consumption averages, and filtering, update, and export tools for inventory planning.",
    },
    responsibilities: {
      es: [
        "Desarrollo del frontend e integración con la API.",
        "Desarrollo de la API en Compers_Central con C# y ASP.NET Core.",
        "Creación de un procedimiento almacenado en SQL Server para consultar existencias.",
      ],
      en: [
        "Frontend development and API integration.",
        "API development in Compers_Central using C# and ASP.NET Core.",
        "Creation of a SQL Server stored procedure for stock queries.",
      ],
    },
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "TanStack Query", "C# / ASP.NET Core", "SQL Server"],
  },
  {
    id: "shipping",
    category: "professional",
    code: "ENV",
    context: { es: "Módulo del ERP", en: "ERP module" },
    title: { es: "Embarques e historial", en: "Shipments & history" },
    preview: {
      src: "projects/shipments.png",
      alt: {
        es: "Captura de la interfaz del módulo de embarques",
        en: "Screenshot of the shipping module interface",
      },
    },
    description: {
      es: "Módulo del ERP para gestionar órdenes de venta y procesar embarques, con control de cantidades, almacenes y documentación. Incluye un historial con filtros, exportación a Excel y reimpresión en PDF o ticket térmico.",
      en: "An ERP module for managing sales orders and processing shipments, with quantity, warehouse, and documentation controls. Includes a searchable history with filters, Excel export, and PDF or thermal ticket reprinting.",
    },
    responsibilities: {
      es: ["Desarrollo de la pantalla de historial de embarques, con consulta de envíos completados y opciones de reimpresión."],
      en: ["Development of the shipment history screen, including completed-shipment lookup and reprinting options."],
    },
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "TanStack Query", "C# / ASP.NET Core", "SQL Server", "QuestPDF / ClosedXML"],
  },
  {
    id: "clients",
    category: "professional",
    code: "CLI",
    context: { es: "Módulo de clientes", en: "Client module" },
    title: { es: "Gestión de clientes", en: "Client management" },
    preview: {
      src: "projects/customers.png",
      alt: {
        es: "Captura de la interfaz del módulo de gestión de clientes",
        en: "Screenshot of the client management module interface",
      },
    },
    description: {
      es: "Módulo que centraliza la información de clientes y agiliza las operaciones internas. Participé en requerimientos, UI/UX, frontend e integración, con interfaces alineadas al sistema de diseño de la empresa.",
      en: "A module that centralizes customer information and streamlines internal operations. I contributed to requirements, UI/UX, frontend, and integration, with interfaces aligned with the company's Design System.",
    },
    responsibilities: {
      es: [
        "Análisis de requerimientos y diseño UI/UX.",
        "Implementación frontend e integración con el sistema.",
        "Interfaces alineadas con el sistema de diseño de la empresa.",
      ],
      en: [
        "Requirements analysis and UI/UX design.",
        "Frontend implementation and system integration.",
        "Interfaces aligned with the company's Design System.",
      ],
    },
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Zustand", "Formik / Yup"],
  },
  {
    id: "snkrs",
    category: "personal",
    code: "SNK",
    title: { es: "SNKRS — Colección de sneakers", en: "SNKRS — Sneaker collection" },
    context: { es: "Proyecto universitario · Web y móvil", en: "University project · Web and mobile" },
    preview: {
      src: "projects/snkrs.png",
      alt: {
        es: "Captura de la interfaz de SNKRS, aplicación de colección de sneakers",
        en: "Screenshot of SNKRS, a sneaker collection app",
      },
    },
    description: {
      es: "Aplicación web y móvil desarrollada como proyecto universitario para registrar sneakers mediante códigos QR y visualizarlos en una colección personal. Incluye una función de validación de autenticidad e integra una cámara ESP32-CAM.",
      en: "A web and mobile app developed as a university project to register sneakers through QR codes and view them in a personal collection. Includes an authenticity validation feature and integrates an ESP32-CAM camera.",
    },
    responsibilities: { es: [], en: [] },
    technologies: ["HTML", "CSS", "JavaScript", "MongoDB Compass", "Arduino / C++", "ESP32-CAM"],
  },
];
