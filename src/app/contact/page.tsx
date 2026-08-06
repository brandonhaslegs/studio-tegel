import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";

export default function ContactPage() { return <main><PageIntro eyebrow="Kontakt" title="Lass uns ins Gespräch kommen.">Du möchtest ein Bauprojekt umsetzen, einen Workshop buchen oder dich in unserer Werkstatt mit einmieten?</PageIntro><section className="page-grid bg-ink py-24 text-paper md:py-40"><div className="col-span-12 md:col-span-7 md:col-start-4"><a className="display-medium break-words underline decoration-paper/35 underline-offset-[0.15em]" href="mailto:team@studiotegel.de">team@studiotegel.de</a><p className="mt-16 text-sm leading-relaxed text-paper/65">Berlin, Deutschland<br />Besuche der Werkstatt nach Vereinbarung.</p></div></section><Footer /></main>; }
