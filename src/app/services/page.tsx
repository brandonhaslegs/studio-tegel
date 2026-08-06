import Link from "next/link";

import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";

const services = [
  {
    number: "01",
    title: "Maßgefertigte Möbel",
    intro: "Stauraum gefällig? Dann bist du bei uns genau richtig.",
    items: [
      "Schrankwände, Regale, Sideboards und Kommoden für den Wohnbereich",
      "Hochbetten, Hochebenen, Podeste und Raumtrenner",
      "Ein- und Umbau von Büroräumen und Gewerbeflächen",
      "Möbel für Restaurants und Ladeneinrichtungen",
    ],
  },
  {
    number: "02",
    title: "TXL-Kollektion",
    intro: "Hol dir ein Stück TXL zu dir nach Hause.",
    copy: "Aus geretteten Baumaterialien des ehemaligen Flughafens Tegel bauen wir einzigartige Möbelunikate in limitierter Stückzahl. Ein Produktkatalog der TXL-Kollektion folgt in Kürze. Bis dahin gilt: nur solange der Vorrat reicht.",
  },
  {
    number: "03",
    title: "Upcycling-Workshops",
    intro: "Du hast Freude am Designen und Bauen? Dann melde dich für unseren Workshop an.",
    copy: "Unter professioneller Anleitung entstehen aus Holzresten unserer Tischlerei eigene Kunstwerke.",
    items: [
      "3-stündiger Workshop",
      "Planung und Bau eines individuellen Kunstwerkes aus Holzresten",
      "Einführung in die sichere Maschinennutzung",
      "Dein eigenes Kunstwerk zum Mitnehmen",
      "115 € pro Person, ermäßigt für Student*innen 60 €",
    ],
  },
  {
    number: "04",
    title: "Werkstattnutzung",
    intro: "Du suchst eine Holzwerkstatt zur gemeinsamen Nutzung? Dann miete dich gerne bei uns mit ein.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageIntro eyebrow="Leistungen" title="Räume, Möbel und Dinge, die bleiben." />

      <section className="page-grid bg-[#d4ccc0] py-24 md:py-40" aria-label="Leistungen im Überblick">
        <div className="col-span-12 md:col-span-8 md:col-start-4">
          {services.map((service) => (
            <article className="grid grid-cols-8 gap-y-5 border-t border-black/15 py-8 md:gap-y-8 md:py-10" key={service.number}>
              <p className="eyebrow col-span-1">{service.number}</p>
              <div className="col-span-7 md:col-span-4">
                <h2 className="text-3xl tracking-[-0.02em] md:text-4xl">{service.title}</h2>
              </div>
              <div className="col-span-7 col-start-2 space-y-5 text-sm leading-relaxed text-charcoal/80 md:col-span-3 md:col-start-6">
                <p>{service.intro}</p>
                {service.copy && <p>{service.copy}</p>}
                {service.items && (
                  <ul className="space-y-2 border-t border-black/15 pt-4">
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-grid bg-paper py-24 md:py-40">
        <div className="col-span-12 md:col-span-7 md:col-start-4">
          <p className="eyebrow mb-7">Projekt anfragen</p>
          <h2 className="display-medium max-w-4xl text-5xl md:text-7xl">Erzähl uns, was du vorhast.</h2>
          <Link className="mt-10 inline-block border-b border-ink pb-1 text-sm" href="/contact">Kontakt aufnehmen</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
