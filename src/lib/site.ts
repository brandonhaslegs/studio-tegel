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
  { title: "Zirkuläre Küche", type: "Umbau", image: "/images/legacy/c90cc4ed-05e6-4925-a9d1-fd88939dea18-IMG_5009.jpg", slug: "zirkulaere-kueche", description: "Aus einer alten Küche aus Pressspan wurde mit neuen Holzkanten, Holzgriffen und frischem Linoleumbelag ein modernes, individuelles Schmuckstück. Alle Materialien hatten bereits ein Leben im Kreislauf." },
  { title: "Community-Kitchen", type: "Innenausbau", image: "/images/legacy/a9883c6e-7d3e-4ecc-973d-69cdf11eb7a6-IMG_4960.jpg", slug: "community-kitchen", description: "Ausbau einer leeren Lagerbox zu einer großzügigen Community-Küche mit drei separaten Kochinseln, einer langen Küchenzeile und einem offenen Essbereich. Fläche: 200 m²." },
  { title: "Eingangsbereich", type: "Barrierefreiheit & Möblierung", image: "/images/legacy/890a7e85-bfb9-4a93-97d4-fc59c58399f6-IMG_4739.jpg", slug: "eingangsbereich", description: "Bau einer Rampe zur barrierefreien Erschließung des Haupteinganges, einer Sitztreppe, zweier Eingangs-Totems sowie kleiner Sitzhocker und Tische." },
  { title: "Copyshop-Regal", type: "Sonderanfertigung", image: "/images/legacy/14e045c5-7285-4555-bb1a-64458c206d99-IMG_0271.JPG", slug: "copyshop-regal", description: "Geschwungenes Regal im Copyshop der .GUT-Community. Größe: 3,10 m × 2,40 m." },
  { title: "Großraumbüro", type: "Büroausbau", image: "/images/legacy/6b4f964e-2e9e-4e9c-8a78-7cf6b4cbdf06-IMG_0067.JPG", slug: "grossraumbuero", description: "Umbau kleiner, geschlossener Büroräume zu offenen Großraumbüros mit Abkofferungen zur abgehängten Flurdecke. Fläche: 2.000 m²." },
  { title: "Büro Sitzbank", type: "Maßgefertigte Möbel", image: "/images/legacy/f0272cfb-6507-493d-a02a-2f33af1c9f6c-IMG_0190.JPG", slug: "buero-sitzbank", description: "Bau einladender Sitzmöbel als sanfter Übergang zwischen offenem Bürospace und Flurfläche. Größe: 2,70 m × 1,10 m." },
  { title: "Umbau Gartenlaube", type: "Wohnraum", image: "/images/legacy/baec1fbf-7a22-4db2-8ee2-659a53e3a51c-IMG_0259.JPG", slug: "umbau-gartenlaube", description: "Umbau einer kleinen Gartenlaube zur optimalen Stauraumnutzung. Die vorhandene Küche wurde weiterentwickelt und zwei separate Schlafnischen im gemeinsamen Wohnzimmer geschaffen. Fläche: 24 m²." },
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));
