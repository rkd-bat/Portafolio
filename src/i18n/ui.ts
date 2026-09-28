export const ui = {
    es: {
        projects: "Proyectos",
        about: "Sobre mí",
        contact: "Contacto",
        heroRole: "Full Stack Developer · UI/UX Designer",
        heroTitle: "Diseño y desarrollo productos digitales de principio a fin.",
        heroDescription: "Combino investigación, diseño de interfaces y desarrollo de software para crear soluciones útiles.",
        viewProjects: "Explorar proyectos",
        featuredProjects: "Proyectos destacados",
    },
    en: {
        projects: "Projects",
        about: "About",
        contact: "Contact",
        heroRole: "Full Stack Developer · UI/UX Designer",
        heroTitle: "I design and build digital products from start to finish.",
        heroDescription: "I combine research, interface design, and software development to create useful solutions.",
        viewProjects: "Explore projects",
        featuredProjects: "Featured projects",
    },
} as const;

export type Lang = keyof typeof ui;