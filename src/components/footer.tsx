import Link from "next/link";

export function Footer() {
  return <footer className="bg-ink px-4 pb-5 pt-16 text-paper md:px-8 md:pt-24">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
      <p className="col-span-1 text-sm leading-relaxed text-paper/65 md:col-span-3">A design studio and woodworking workshop in Berlin.</p>
      <div className="col-span-1 md:col-start-7 md:col-span-3"><p className="eyebrow mb-3 text-paper/50">Visit</p><p className="text-sm leading-relaxed">Berlin, Germany<br />By appointment</p></div>
      <div className="col-span-1 md:col-span-3"><p className="eyebrow mb-3 text-paper/50">Contact</p><a className="text-sm underline underline-offset-4" href="mailto:hallo@studiotegel.de">hallo@studiotegel.de</a></div>
    </div>
    <div className="mt-24 flex items-end justify-between border-t border-paper/20 pt-4"><Link href="/" className="text-[0.82rem] font-medium tracking-[-0.045em]">STUDIO TEGEL</Link><p className="eyebrow text-paper/50">© 2026</p></div>
  </footer>;
}
