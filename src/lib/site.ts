export const images = {
  hero: "/images/legacy/69ed57be-722a-4d0f-9227-d7a681188908-Nachhaltige-Holzwerkstatt-Studio-Tegel-Tischlerei-Berlin-Flughafen.jpg",
  workshop: "/images/legacy/08051dfc-b21b-4117-847a-d69f7511cc89-Zirkul%C3%A4re-Holzwerkstatt-Studio-Tegel-Tischlerei-Berlin-Recycling-Holzprodukte.jpg",
  storage: "/images/legacy/efeedd12-2c25-43ad-be3e-d7908397f79d-Ma%C3%9Fgefertigte-Staurauml%C3%B6sungen-Studio-Tegel-Tischlerei-Berlin-Recycling-Holzprodukte.jpg",
  modular: "/images/legacy/dc50463d-bfce-4c88-9464-6efbd2a907f0-Modulares-Design-Berlin-Studio-Tegel-Tischlerei-Berlin-Modulares-M%C3%B6beldesign.jpg",
  team: "/images/legacy/be47878a-c2e1-4557-ae33-b5c50557846a-Nachhaltige-Holzwerkstatt-Team-Studio-Tegel-Tischlerei-Berlin-drau%C3%9Fen.jpg",
};

export const projects = [
  { title: "Tegel Kollektion", type: "Limitierte Möbelserie", image: images.hero, slug: "tegel-kollektion" },
  { title: "Für den Raum gemacht", type: "Maßgefertigter Stauraum", image: images.storage, slug: "fuer-den-raum-gemacht" },
  { title: "Zweite Struktur", type: "Modulare Innenräume", image: images.modular, slug: "zweite-struktur" },
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));
