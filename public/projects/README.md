# Capturas de proyectos

Guarda aquí las capturas y configura cada proyecto en `src/data/projects.ts`:

```ts
preview: {
  src: "projects/inventory.webp",
  alt: {
    es: "Pantalla principal del sistema de inventario",
    en: "Inventory system main screen",
  },
},
```

- Sin `preview`, la tarjeta muestra una vista conceptual.
- `featured: true` coloca el proyecto en los destacados.
- `provisional: true` identifica contenido pendiente de confirmar. Elimina esta propiedad al incorporar la información real.
- Agrega `repositoryUrl` únicamente a proyectos con `category: "personal"`; el botón aparece cuando hay una URL real.
- `demoUrl` es opcional. No se muestran botones sin sus enlaces.
- Las imágenes se muestran en un encuadre horizontal. Para capturas profesionales, usa versiones sin información confidencial.
