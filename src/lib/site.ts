export const images = {
  hero: "/images/legacy/69ed57be-722a-4d0f-9227-d7a681188908-Nachhaltige-Holzwerkstatt-Studio-Tegel-Tischlerei-Berlin-Flughafen.jpg",
  workshop: "/images/legacy/08051dfc-b21b-4117-847a-d69f7511cc89-Zirkul%C3%A4re-Holzwerkstatt-Studio-Tegel-Tischlerei-Berlin-Recycling-Holzprodukte.jpg",
  storage: "/images/legacy/efeedd12-2c25-43ad-be3e-d7908397f79d-Ma%C3%9Fgefertigte-Staurauml%C3%B6sungen-Studio-Tegel-Tischlerei-Berlin-Recycling-Holzprodukte.jpg",
  modular: "/images/legacy/dc50463d-bfce-4c88-9464-6efbd2a907f0-Modulares-Design-Berlin-Studio-Tegel-Tischlerei-Berlin-Modulares-M%C3%B6beldesign.jpg",
  team: "/images/legacy/be47878a-c2e1-4557-ae33-b5c50557846a-Nachhaltige-Holzwerkstatt-Team-Studio-Tegel-Tischlerei-Berlin-drau%C3%9Fen.jpg",
};

export const projects = [
  { title: "Cargohalle TXL", type: "Ausbau & Ausführungsplanung", image: "/images/legacy/bbf17b11-4d5d-4a17-a181-60da74befed1-IMG_4597.jpg", slug: "cargohalle-txl", description: "In Zusammenarbeit mit Studio Aisslinger und GRAFT Architekten hat unser Team die Cargohalle des ehemaligen Flughafen Tegels zu einem Innovations- und Green-Tech-Campus umgebaut. Studio Tegel war für die Ausführungsplanung sowie sämtliche Ausführungsarbeiten der rund 10.000 m² großen Fläche verantwortlich." },
  { title: "Späti", type: "Gewerbeausbau", image: "/images/legacy/b7c7d543-a588-4369-8130-4da10eeb2e27-4B4E741D-1455-48B5-BE96-A0F14BCFE452.JPG", slug: "spaeti", description: "Ausbau eines ehemaligen Büroraumes zu einem Späti mit Verkaufsfläche, Küchenzeile und Ladentresen. Fläche: 40 m²." },
  { title: "Zirkuläre Küche", type: "Umbau", image: "/images/legacy/14e045c5-7285-4555-bb1a-64458c206d99-IMG_0271.JPG", slug: "zirkulaere-kueche", description: "Aus einer alten Küche aus Pressspan wurde mit neuen Holzkanten, Holzgriffen und frischem Linoleumbelag ein modernes, individuelles Schmuckstück. Alle Materialien hatten bereits ein Leben im Kreislauf." },
  { title: "Community-Kitchen", type: "Innenausbau", image: "/images/legacy/1347b3e1-7029-4047-bf1f-27b33109cd1e-IMG_4743.jpg", slug: "community-kitchen", description: "Ausbau einer leeren Lagerbox zu einer großzügigen Community-Küche mit drei separaten Kochinseln, einer langen Küchenzeile und einem offenen Essbereich. Fläche: 200 m²." },
  { title: "Eingangsbereich", type: "Barrierefreiheit & Möblierung", image: "/images/legacy/e8861862-d5be-4f8b-9bfb-1f99cc47d1a8-IMG_2280.jpg", slug: "eingangsbereich", description: "Bau einer Rampe zur barrierefreien Erschließung des Haupteinganges, einer Sitztreppe, zweier Eingangs-Totems sowie kleiner Sitzhocker und Tische." },
  { title: "Copyshop-Regal", type: "Sonderanfertigung", image: "/images/legacy/60f44b0f-a980-4e63-a6ce-6726cb6d282a-IMG_4848.jpg", slug: "copyshop-regal", description: "Geschwungenes Regal im Copyshop der .GUT-Community. Größe: 3,10 m × 2,40 m." },
  { title: "Großraumbüro", type: "Büroausbau", image: "/images/legacy/cda63897-663e-4c0d-8110-5d83d62ac6c5-IMG_0093.jpg", slug: "grossraumbuero", description: "Umbau kleiner, geschlossener Büroräume zu offenen Großraumbüros mit Abkofferungen zur abgehängten Flurdecke. Fläche: 2.000 m²." },
  { title: "Büro Sitzbank", type: "Maßgefertigte Möbel", image: "/images/legacy/138518af-61d9-4703-93b8-4e30e3aaa51d-IMG_0694.jpg", slug: "buero-sitzbank", description: "Bau einladender Sitzmöbel als sanfter Übergang zwischen offenem Bürospace und Flurfläche. Größe: 2,70 m × 1,10 m." },
  { title: "Umbau Gartenlaube", type: "Wohnraum", image: "/images/legacy/c4654eee-825c-4fbe-afe9-2b659714fec5-7E131B63-4639-4A12-9B60-EE29DCF57F24.JPG", slug: "umbau-gartenlaube", description: "Umbau einer kleinen Gartenlaube zur optimalen Stauraumnutzung. Die vorhandene Küche wurde weiterentwickelt und zwei separate Schlafnischen im gemeinsamen Wohnzimmer geschaffen. Fläche: 24 m²." },
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));
