import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";

export default function ContactPage() { return <main><PageIntro eyebrow="Contact" title="Begin with a conversation.">Tell us about the space, the object or the question you have in mind.</PageIntro><section className="page-grid bg-ink py-24 text-paper md:py-40"><div className="col-span-12 md:col-span-7 md:col-start-4"><a className="display-medium break-words underline decoration-paper/35 underline-offset-[0.15em]" href="mailto:hallo@studiotegel.de">hallo@studiotegel.de</a><p className="mt-16 text-sm leading-relaxed text-paper/65">Berlin, Germany<br />Visits to the workshop by appointment.</p></div></section><Footer /></main>; }
