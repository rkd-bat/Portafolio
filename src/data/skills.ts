import type { Lang } from "../i18n/ui";

type LocalizedText = Record<Lang, string>;

interface Skill {
  name: LocalizedText;
  note?: LocalizedText;
}

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  items: Skill[];
}

const skill = (name: string): Skill => ({ name: { es: name, en: name } });

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    items: [
      skill("HTML & CSS"),
      skill("Tailwind CSS"),
      skill("Bootstrap"),
      skill("JavaScript"),
      skill("React.js"),
      skill("TypeScript"),
      skill("WordPress"),
      {
        name: { es: "Next.js", en: "Next.js" },
        note: { es: "Intermedio", en: "Intermediate" },
      },
    ],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    items: [skill("C#"), skill(".NET Core")],
  },
  {
    id: "databases",
    title: { es: "Bases de datos", en: "Databases" },
    items: [skill("SQL Server"), skill("MySQL")],
  },
  {
    id: "ui-ux",
    title: { es: "UI/UX", en: "UI/UX" },
    items: [
      skill("Figma"),
      skill("Framer"),
      { name: { es: "Herramientas de Adobe", en: "Adobe tools" } },
      { name: { es: "Diseño responsive", en: "Responsive web design" } },
      skill("Wireframing"),
      { name: { es: "Flujos de usuario", en: "User flows" } },
      { name: { es: "Investigación de usuarios", en: "User research" } },
      { name: { es: "Diseño visual", en: "Visual design" } },
      { name: { es: "Sistemas de diseño", en: "Design systems" } },
      { name: { es: "Pruebas de usabilidad", en: "Usability testing" } },
    ],
  },
  {
    id: "devops",
    title: { es: "DevOps", en: "DevOps" },
    items: [skill("Git & GitHub"), skill("Docker"), skill("Vercel"), skill("Azure")],
  },
  {
    id: "personal",
    title: { es: "Habilidades personales", en: "Personal skills" },
    items: [
      { name: { es: "Trabajo en equipo", en: "Teamwork" } },
      { name: { es: "Comunicación efectiva", en: "Effective communication" } },
      { name: { es: "Adaptabilidad", en: "Adaptability" } },
      { name: { es: "Resolución de problemas", en: "Problem solving" } },
      { name: { es: "Aprendizaje continuo", en: "Continuous learning" } },
      { name: { es: "Organización", en: "Organization" } },
      { name: { es: "Creatividad", en: "Creativity" } },
    ],
  },
  {
    id: "hobbies",
    title: { es: "Hobbies", en: "Hobbies" },
    items: [
      { name: { es: "Fútbol", en: "Football" } },
      { name: { es: "Boxeo", en: "Boxing" } },
      { name: { es: "Videojuegos", en: "Video games" } },
    ],
  },
];
