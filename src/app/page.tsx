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
    <section className="relative min-h-[75svh] bg-ink text-paper">
      <Image src={images.hero} alt="Studio Tegel am ehemaligen Flughafen Tegel" fill priority sizes="100vw" className="object-cover opacity-85" />
      <div className="absolute inset-0 bg-ink/25" />
      <div className="page-grid relative min-h-[75svh] items-end pb-7 pt-28 md:pb-10">
        <div className="col-span-12 md:col-span-10">
          <h1 className="headline home-hero-title">Zirkuläres Bauen für die Stadt von morgen.</h1>
        </div>
        <p className="project-copy col-span-7 col-start-6 mt-10 text-paper/80 md:col-span-3 md:col-start-10">Wir retten und verbauen bestehende Materialien für maßgefertigte Projekte.</p>
      </div>
    </section>

    <section className="bg-paper py-24 md:py-40">
      <div className="page-grid">
        <div className="col-span-12 border-t border-ink/15 pt-3 md:col-span-2"><p className="nav-text">Leistungen</p></div>
        <div className="col-span-12 mt-14 md:col-span-7 md:col-start-4 md:mt-0">
          {[["01", "Möbel & Stauraum", "Schrankwände, Regale, Sideboards und Kommoden für den Wohnbereich."], ["02", "Raumspezifische Möbel", "Hochbetten, Hochebenen, Podeste und Raumtrenner, exakt für ihren Ort gemacht."], ["03", "Gewerbe & Gastronomie", "Ein- und Umbau von Büroräumen, Gewerbeflächen und Ladeneinrichtungen."]].map(([number, title, text]) => <div className="grid grid-cols-8 border-t border-ink/15 py-5 first:border-t-0 first:pt-0" key={title}><span className="nav-text col-span-1">{number}</span><h3 className="headline home-service-title col-span-7 col-start-2">{title}</h3><p className="project-copy col-span-7 col-start-2 mt-5 text-ink/75">{text}</p></div>)}
        </div>
      </div>
    </section>

    <section className="px-4 pb-24 md:px-8 md:pb-40">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => <ProjectCard key={project.slug} priority={index === 0} project={project} />)}
      </div>
      <Link className="headline mt-16 inline-block border-b border-ink pb-2" href="/projects">Mehr Projekte ansehen.</Link>
    </section>

    <section className="page-grid py-24 md:py-40">
      <Reveal className="col-span-12 md:col-span-5"><div className="image-frame relative aspect-[4/5]"><Image src={images.workshop} alt="Holzwerkstatt von Studio Tegel" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover" /></div></Reveal>
      <Reveal delay={0.1} className="col-span-12 mt-10 flex flex-col justify-between md:col-span-5 md:col-start-8 md:mt-0"><div><h2 className="headline">Materialien haben wir genug.</h2></div><div className="mt-16"><p className="project-copy max-w-sm">Wir verarbeiten Baustoffe, die sonst auf der Deponie landen würden, zu neuen, zirkulären Möbeln und Produkten.</p><Link className="nav-text mt-8 inline-block border-b border-ink pb-1 transition-opacity hover:opacity-60" href="/studio">Mehr über das Studio</Link></div></Reveal>
    </section>

    <Footer />
  </main>;
}
