import Link from "next/link";

export function Footer() {
  return <footer className="site-footer bg-ink text-paper">
    <section className="page-grid py-24 md:py-40">
      <div className="md:col-span-8 md:col-start-4">
        <h2 className="headline max-w-[10ch]">Lass uns etwas bauen, das bleibt.</h2>
        <a className="nav-text mt-12 inline-block border-b border-paper pb-1 hover:underline" href="mailto:team@studiotegel.de">Kontakt aufnehmen</a>
        <div className="mt-10 flex flex-wrap gap-x-16 gap-y-8">
          <div><p className="nav-text mb-3">Kontakt</p><a className="project-copy underline underline-offset-4" href="mailto:team@studiotegel.de">team@studiotegel.de</a></div>
          <div><p className="nav-text mb-3">Social</p><a className="project-copy underline underline-offset-4" href="https://www.instagram.com/studio_tegel/" rel="noreferrer" target="_blank">Instagram</a></div>
        </div>
      </div>
    </section>
    <div className="px-4 pb-5 pt-16 md:px-8 md:pt-24">
      <div className="flex flex-col gap-4 border-t border-paper pt-4 md:flex-row md:items-end md:justify-between"><p className="nav-text">Studio Tegel: Designstudio und Holzwerkstatt</p><div className="flex gap-4"><Link className="nav-text" href="/agb">AGB</Link><Link className="nav-text" href="/datenschutz">Datenschutz</Link><p className="nav-text">© 2026</p></div></div>
    </div>
  </footer>;
}
