export const images = {
  hero: "https://images.squarespace-cdn.com/content/v1/657e2a7fa8046f21a8fde4c0/69ed57be-722a-4d0f-9227-d7a681188908/Nachhaltige-Holzwerkstatt-Studio-Tegel-Tischlerei-Berlin-Flughafen.jpg?format=2500w",
  workshop: "https://images.squarespace-cdn.com/content/v1/657e2a7fa8046f21a8fde4c0/08051dfc-b21b-4117-847a-d69f7511cc89/Zirkul%C3%A4re-Holzwerkstatt-Studio-Tegel-Tischlerei-Berlin-Recycling-Holzprodukte.jpg?format=1500w",
  storage: "https://images.squarespace-cdn.com/content/v1/657e2a7fa8046f21a8fde4c0/efeedd12-2c25-43ad-be3e-d7908397f79d/Ma%C3%9Fgefertigte-Staurauml%C3%B6sungen-Studio-Tegel-Tischlerei-Berlin-Recycling-Holzprodukte.jpg?format=1500w",
  modular: "https://images.squarespace-cdn.com/content/v1/657e2a7fa8046f21a8fde4c0/dc50463d-bfce-4c88-9464-6efbd2a907f0/Modulares-Design-Berlin-Studio-Tegel-Tischlerei-Berlin-Modulares-M%C3%B6beldesign.jpg?format=1500w",
  team: "https://images.squarespace-cdn.com/content/v1/657e2a7fa8046f21a8fde4c0/be47878a-c2e1-4557-ae33-b5c50557846a/Nachhaltige-Holzwerkstatt-Team-Studio-Tegel-Tischlerei-Berlin-drau%C3%9Fen.jpg?format=1500w",
};

export const projects = [
  { title: "Tegel Collection", type: "Limited furniture series", image: images.hero, slug: "tegel-collection" },
  { title: "Built to Belong", type: "Bespoke storage", image: images.storage, slug: "built-to-belong" },
  { title: "Second Structure", type: "Modular interiors", image: images.modular, slug: "second-structure" },
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));
