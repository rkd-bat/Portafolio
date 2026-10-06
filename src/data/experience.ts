import type { Lang } from "../i18n/ui";

type LocalizedText = Record<Lang, string>;

export interface ExperienceEntry {
  id: string;
  role: LocalizedText;
  organization: LocalizedText;
  period: LocalizedText;
  workMode: LocalizedText;
  current: boolean;
  contributions: Record<Lang, string[]>;
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "compers",
    role: { es: "Full Stack Developer · UI/UX Designer", en: "Full Stack Developer · UI/UX Designer" },
    organization: { es: "COMPERS MX · Monterrey, México", en: "COMPERS MX · Monterrey, Mexico" },
    period: { es: "Noviembre 2025 — Actual", en: "November 2025 — Present" },
    workMode: { es: "Presencial", en: "On-site" },
    current: true,
    contributions: {
      es: [
        "Lidero el desarrollo del módulo de inventario, que abarca traspasos, transacciones y órdenes de venta.",
        "Desarrollo e implemento módulos del ERP interno, incluidos embarques, resurtido y alta de clientes.",
        "Diseño interfaces e integro frontend, backend y lógica de negocio con React.js, C#/.NET y SQL Server.",
      ],
      en: [
        "I lead development of the inventory module, covering transfers, transactions, and sales orders.",
        "I develop and implement internal ERP modules, including shipping, replenishment, and client registration.",
        "I design interfaces and integrate frontend, backend, and business logic using React.js, C#/.NET, and SQL Server.",
      ],
    },
    tags: ["React.js", "C# / .NET", "SQL Server"],
  },
  {
    id: "klyvenza",
    role: { es: "Full Stack Developer · UI/UX Designer", en: "Full Stack Developer · UI/UX Designer" },
    organization: { es: "Klyvenza · Estados Unidos", en: "Klyvenza · United States" },
    period: { es: "Marzo 2022 — Agosto 2025", en: "March 2022 — August 2025" },
    workMode: { es: "Remoto", en: "Remote" },
    current: false,
    contributions: {
      es: [
        "Diseñé y desarrollé sitios web responsivos, desde la arquitectura de información hasta la implementación y optimización, aplicando principios de UI/UX y accesibilidad.",
        "Creé sistemas de diseño, wireframes, prototipos interactivos y flujos de usuario para soluciones orientadas a clientes.",
        "Colaboré con equipos creativos y de marketing para incorporar funcionalidades y mejorar la experiencia de usuario.",
      ],
      en: [
        "I designed and developed responsive websites, from information architecture through implementation and optimization, applying UI/UX and accessibility principles.",
        "I created design systems, wireframes, interactive prototypes, and user flows for client-focused solutions.",
        "I collaborated with creative and marketing teams to introduce features and improve the user experience.",
      ],
    },
    tags: ["UI/UX", "Design Systems", "Web"],
  },
  {
    id: "mercadotecnia-mix",
    role: { es: "Full Stack Developer · UI/UX Designer", en: "Full Stack Developer · UI/UX Designer" },
    organization: { es: "Mercadotecnia Mix · Monterrey, México", en: "Mercadotecnia Mix · Monterrey, Mexico" },
    period: { es: "Octubre 2021 — Octubre 2022", en: "October 2021 — October 2022" },
    workMode: { es: "Presencial", en: "On-site" },
    current: false,
    contributions: {
      es: [
        "Diseñé e implementé plataformas web responsivas y accesibles, con interfaces alineadas a la identidad de marca y las necesidades del usuario.",
        "Creé sistemas de diseño para mantener la consistencia visual y colaboré en la definición de flujos de usuario y prototipos interactivos.",
        "Contribuí a la presencia digital mediante contenido estratégico y brindé soporte técnico para mantener la estabilidad y mejorar la experiencia en distintos dispositivos.",
      ],
      en: [
        "I designed and implemented responsive, accessible web platforms with interfaces aligned with brand identity and user needs.",
        "I created design systems to maintain visual consistency and collaborated on user flows and interactive prototypes.",
        "I supported the company's digital presence through strategic content and provided technical support to maintain stability and improve the experience across devices.",
      ],
    },
    tags: ["UI/UX", "HTML", "Tailwind CSS", "JavaScript", "SQL Server", "Laravel"],
  },
];
