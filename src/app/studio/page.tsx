import Image from "next/image";

import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";
import { images } from "@/lib/site";

const principles = [
  {
    number: "01",
    title: "Wiederverwertung von Baustoffen",
    copy: "Wir verarbeiten Baumaterialien, die sonst auf der Deponie landen würden, zu neuen Möbeln und Produkten. Ein Netzwerk aus Abriss-, Messebau- und Sanierungsunternehmen versorgt uns mit Materialien für den nächsten Kreislauf.",
  },
  {
    number: "02",
    title: "Modular bauen, demontierbar denken",
    copy: "Gebäude und Möbel sollen sich nach ihrer Nutzung wieder zerlegen lassen. So werden sie zu Materiallagern für kommende Projekte, statt zu Abfall.",
  },
  {
    number: "03",
    title: "Wenn neu, dann kreislauffähig",
    copy: "Wo neue Materialien nötig sind, wählen wir sie bewusst: Holz aus nachhaltiger Forstwirtschaft, Linoleum und andere kreislauffähige Baustoffe ergänzen wiedergewonnene Materialien.",
  },
];

export default function StudioPage() {
  return (
    <main>
      <PageIntro compact title="Wir sind kreative Planer*innen, Architekt*innen und Tischler*innen.">
        Wir hinterfragen herkömmliche Produktionsprozesse und setzen bereits im Designprozess neue, ressourcenschonende Maßstäbe.
      </PageIntro>

      <section className="page-grid pb-24 md:pb-40">
        <div className="image-frame relative col-span-12 aspect-[3/2] md:col-span-8 md:col-start-3">
          <Image src={images.team} alt="Das Team von Studio Tegel" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
        </div>
      </section>

      <section className="page-grid bg-ink py-24 text-paper md:py-40">
        <p className="nav-text col-span-12 md:col-span-2">Unsere Vision</p>
        <div className="col-span-12 mt-8 md:col-span-7 md:col-start-4 md:mt-0">
          <h2 className="headline">Zirkuläres Bauen für die Stadt von morgen.</h2>
          <p className="project-copy mt-10 max-w-2xl">Die Baubranche soll vom größten CO₂-Verursacher zur nachhaltigsten Branche werden.</p>
        </div>
      </section>

      <section className="page-grid bg-paper py-24 md:py-40">
        <p className="nav-text col-span-12 md:col-span-2">Unsere Mission</p>
        <div className="col-span-12 mt-8 md:col-span-7 md:col-start-4 md:mt-0">
          <h2 className="headline max-w-5xl">Wir denken bestehende Prozesse in der Baubranche neu.</h2>
          <ol className="project-copy mt-16 space-y-7">
            <li>Wir retten und verbauen bestehende Materialien für maßgefertigte Kundenprojekte.</li>
            <li>Wir verlängern die Nutzungsdauer von Gebäuden und Möbeln durch modulare Bauweisen und Demontagefähigkeit.</li>
            <li>Wo neue Baustoffe nötig sind, setzen wir auf kreislauffähige Materialien.</li>
          </ol>
        </div>
      </section>

      <section className="page-grid py-24 md:py-40">
        <p className="nav-text col-span-12 md:col-span-2">Wie arbeiten wir</p>
        <div className="col-span-12 mt-10 md:col-span-8 md:col-start-4 md:mt-0">
          {principles.map((principle) => (
            <article className="grid grid-cols-8 gap-y-5 border-t border-ink/20 py-8 md:gap-y-8 md:py-10" key={principle.number}>
              <p className="nav-text col-span-1">{principle.number}</p>
              <h2 className="headline col-span-7 md:col-span-4">{principle.title}</h2>
              <p className="project-copy col-span-7 col-start-2 mt-2 text-ink/80 md:mt-5">{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
