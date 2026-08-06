import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";

export default function ContactPage() {
  return (
    <main>
      <PageIntro compact eyebrow="Kontakt" title="Lass uns ins Gespräch kommen.">
        Du möchtest ein Bauprojekt mit uns umsetzen, einen Workshop buchen oder dich in unserer Werkstatt mit einmieten? Dann schreib uns oder fülle das Formular aus. Wir freuen uns auf dich.
      </PageIntro>

      <section className="page-grid bg-ink py-24 text-paper md:py-40">
        <div className="col-span-12 md:col-span-7 md:col-start-4">
          <p className="eyebrow mb-6 text-paper/60">E-Mail</p>
          <a className="display-medium break-words underline decoration-paper/35 underline-offset-[0.15em]" href="mailto:team@studiotegel.de">team@studiotegel.de</a>
          <p className="mt-16 text-sm leading-relaxed text-paper/65">Berlin, Deutschland<br />Besuche der Werkstatt nach Vereinbarung.</p>
        </div>
      </section>

      <section className="page-grid bg-[#d4ccc0] py-24 md:py-40">
        <div className="col-span-12 md:col-span-7 md:col-start-4">
          <p className="eyebrow mb-7">Kontaktformular</p>
          <h2 className="display-medium max-w-3xl text-5xl md:text-7xl">Erzähl uns von deinem Vorhaben.</h2>

          <form action="mailto:team@studiotegel.de" className="mt-16 grid gap-8 md:grid-cols-2" encType="text/plain" method="post">
            <div>
              <label className="eyebrow mb-3 block" htmlFor="name">Name</label>
              <input className="w-full border-b border-ink/40 bg-transparent py-3 text-base outline-none transition-colors focus:border-ink" id="name" name="Name" required type="text" />
            </div>
            <div>
              <label className="eyebrow mb-3 block" htmlFor="email">E-Mail-Adresse</label>
              <input className="w-full border-b border-ink/40 bg-transparent py-3 text-base outline-none transition-colors focus:border-ink" id="email" name="E-Mail-Adresse" required type="email" />
            </div>
            <div className="md:col-span-2">
              <label className="eyebrow mb-3 block" htmlFor="message">Nachricht</label>
              <textarea className="min-h-36 w-full resize-y border-b border-ink/40 bg-transparent py-3 text-base outline-none transition-colors focus:border-ink" id="message" name="Nachricht" required />
            </div>
            <div className="md:col-span-2">
              <button className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-60" type="submit">Senden</button>
              <p className="mt-4 text-xs leading-relaxed text-charcoal/65">Mit dem Senden öffnet sich dein E-Mail-Programm.</p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
