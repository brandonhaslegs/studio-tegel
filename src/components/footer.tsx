import Link from "next/link";

export function Footer({ showContact = true }: { showContact?: boolean }) {
  return <footer className="site-footer bg-ink px-4 pb-5 pt-16 text-paper md:px-8 md:pt-24">
    {showContact && <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
      {showContact && <><div className="col-span-1 md:col-start-7 md:col-span-2"><p className="nav-text mb-3 text-paper/50">Kontakt</p><a className="project-copy underline underline-offset-4" href="mailto:team@studiotegel.de">team@studiotegel.de</a></div><div className="col-span-1 md:col-span-2"><p className="nav-text mb-3 text-paper/50">Social</p><a className="project-copy underline underline-offset-4" href="https://www.instagram.com/studio_tegel/" rel="noreferrer" target="_blank">Instagram</a></div></>}
    </div>}
    <div className={`${showContact ? "mt-24" : "mt-0"} flex flex-col gap-4 border-t border-paper/20 pt-4 md:flex-row md:items-end md:justify-between`}><p className="nav-text text-paper/50">Studio Tegel: Designstudio und Holzwerkstatt</p><div className="flex gap-4"><Link className="nav-text text-paper/50" href="/agb">AGB</Link><Link className="nav-text text-paper/50" href="/datenschutz">Datenschutz</Link><p className="nav-text text-paper/50">© 2026</p></div></div>
  </footer>;
}
