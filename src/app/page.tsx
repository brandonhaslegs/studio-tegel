import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { images, projects } from "@/lib/site";

export default function Home() {
  return <main className="overflow-hidden">
    <Navigation />
    <section className="relative min-h-svh bg-charcoal text-paper">
      <Image src={images.hero} alt="Studio Tegel am ehemaligen Flughafen Tegel" fill priority sizes="100vw" className="object-cover opacity-85" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="page-grid relative min-h-svh items-end pb-7 pt-28 md:pb-10">
        <div className="col-span-12 md:col-span-10">
          <p className="eyebrow mb-6">Berlin / Designstudio & Holzwerkstatt</p>
          <h1 className="display max-w-[11ch]">Zirkuläres Bauen für die Stadt von morgen.</h1>
        </div>
        <p className="col-span-7 col-start-6 mt-10 text-xs leading-relaxed text-paper/80 md:col-span-3 md:col-start-10">Wir retten und verbauen bestehende Materialien für maßgefertigte Projekte.</p>
      </div>
    </section>

    <section className="page-grid py-24 md:py-40">
      <Reveal className="col-span-12 md:col-span-2"><p className="eyebrow">01 / Das Studio</p></Reveal>
      <Reveal delay={0.08} className="col-span-12 mt-10 md:col-span-8 md:col-start-4 md:mt-0"><h2 className="display-medium">Wir sind kreative Planer*innen, Architekt*innen und Tischler*innen.</h2></Reveal>
      <Reveal delay={0.16} className="col-span-12 mt-16 md:col-span-3 md:col-start-9"><p className="text-sm leading-[1.55] text-charcoal">Wir hinterfragen herkömmliche Produktionsprozesse und setzen bereits im Designprozess neue, ressourcenschonende Maßstäbe.</p></Reveal>
    </section>

    <section className="px-4 pb-24 md:px-8 md:pb-40">
      <div className="mb-8 flex items-end justify-between border-t border-line pt-3"><p className="eyebrow">Referenzen</p><Link className="text-link" href="/projects">Alle Projekte</Link></div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
        <Reveal><ProjectCard project={projects[0]} priority /></Reveal>
        <Reveal delay={0.1} className="md:mt-32"><ProjectCard project={projects[1]} /></Reveal>
        <Reveal className="md:col-span-1 md:col-start-2"><ProjectCard project={projects[2]} /></Reveal>
      </div>
    </section>

    <section className="bg-[#d4ccc0] py-24 md:py-40">
      <div className="page-grid">
        <div className="col-span-12 border-t border-black/15 pt-3 md:col-span-2"><p className="eyebrow">Leistungen</p></div>
        <div className="col-span-12 mt-14 md:col-span-7 md:col-start-4 md:mt-0">
          {[["01", "Möbel & Stauraum", "Schrankwände, Regale, Sideboards und Kommoden für den Wohnbereich."], ["02", "Raumspezifische Möbel", "Hochbetten, Hochebenen, Podeste und Raumtrenner, exakt für ihren Ort gemacht."], ["03", "Gewerbe & Gastronomie", "Ein- und Umbau von Büroräumen, Gewerbeflächen und Ladeneinrichtungen."]].map(([number, title, text]) => <div className="grid grid-cols-8 border-t border-black/15 py-5 first:border-t-0 first:pt-0" key={title}><span className="eyebrow col-span-1">{number}</span><h3 className="col-span-4 text-2xl tracking-[-0.02em] md:text-3xl">{title}</h3><p className="col-span-3 text-xs leading-relaxed text-charcoal/75">{text}</p></div>)}
        </div>
      </div>
    </section>

    <section className="page-grid py-24 md:py-40">
      <Reveal className="col-span-12 md:col-span-5"><div className="image-frame relative aspect-[4/5]"><Image src={images.workshop} alt="Holzwerkstatt von Studio Tegel" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover" /></div></Reveal>
      <Reveal delay={0.1} className="col-span-12 mt-10 flex flex-col justify-between md:col-span-5 md:col-start-8 md:mt-0"><div><p className="eyebrow mb-8">Wie wir arbeiten</p><h2 className="display-medium">Materialien haben wir genug.</h2></div><p className="mt-16 max-w-sm text-sm leading-[1.55] text-charcoal">Wir verarbeiten Baustoffe, die sonst auf der Deponie landen würden, zu neuen, zirkulären Möbeln und Produkten.</p></Reveal>
    </section>

    <section className="bg-ink px-4 py-24 text-paper md:px-8 md:py-40">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
        <p className="eyebrow md:col-span-2">Projekt starten</p>
        <div className="md:col-span-8 md:col-start-4"><h2 className="display-medium max-w-[10ch]">Lass uns etwas bauen, das bleibt.</h2><a className="text-link mt-12" href="mailto:team@studiotegel.de">Kontakt aufnehmen</a></div>
      </div>
    </section>
    <Footer />
  </main>;
}
