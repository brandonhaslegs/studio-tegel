import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";

export default function ContactPage() {
  return (
    <main>
      <PageIntro compact label="Kontakt" title="Lass uns ins Gespräch kommen.">
        Du möchtest ein Bauprojekt mit uns umsetzen, einen Workshop buchen oder dich in unserer Werkstatt mit einmieten? Dann schreib uns oder fülle das Formular aus. Wir freuen uns auf dich.
      </PageIntro>

      <section className="page-grid bg-ink py-24 text-paper md:py-40">
        <div className="col-span-12 md:col-span-7 md:col-start-4">
          <p className="nav-text mb-6 text-paper/60">E-Mail</p>
          <a className="headline whitespace-nowrap underline decoration-paper/35 underline-offset-[0.15em]" href="mailto:team@studiotegel.de">team@studiotegel.de</a>
          <p className="project-copy mt-16 text-paper/65">Berlin, Deutschland<br />Besuche der Werkstatt nach Vereinbarung.</p>
        </div>
      </section>

      <section className="page-grid bg-paper py-24 md:py-40">
        <div className="col-span-12 md:col-span-7 md:col-start-4">
          <p className="nav-text mb-7">Kontaktformular</p>
          <h2 className="headline max-w-3xl">Erzähl uns von deinem Vorhaben.</h2>

          <form action="mailto:team@studiotegel.de" className="mt-16 grid gap-8 md:grid-cols-2" encType="text/plain" method="post">
            <div>
              <label className="nav-text mb-3 block" htmlFor="name">Name</label>
              <input className="project-copy w-full border-b border-ink/40 bg-transparent py-3 outline-none transition-colors focus:border-ink" id="name" name="Name" required type="text" />
            </div>
            <div>
              <label className="nav-text mb-3 block" htmlFor="email">E-Mail-Adresse</label>
              <input className="project-copy w-full border-b border-ink/40 bg-transparent py-3 outline-none transition-colors focus:border-ink" id="email" name="E-Mail-Adresse" required type="email" />
            </div>
            <div className="md:col-span-2">
              <label className="nav-text mb-3 block" htmlFor="message">Nachricht</label>
              <textarea className="project-copy min-h-36 w-full resize-y border-b border-ink/40 bg-transparent py-3 outline-none transition-colors focus:border-ink" id="message" name="Nachricht" required />
            </div>
            <div className="md:col-span-2">
              <button className="nav-text border-b border-ink pb-1 transition-opacity hover:opacity-60" type="submit">Senden</button>
              <p className="project-copy mt-4 text-ink/65">Mit dem Senden öffnet sich dein E-Mail-Programm.</p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
