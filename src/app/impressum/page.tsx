import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";

const sections = [
  {
    title: "Angaben gemäß § 5 TMG",
    content: <address className="not-italic">Klein &amp; Templiner GbR<br />Joachim-Friedrich-Straße 15<br />10711 Berlin<br /><a className="underline underline-offset-4" href="mailto:team@studiotegel.de">team@studiotegel.de</a><br /><br />Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE410393469</address>,
  },
  {
    title: "Haftung für Inhalte",
    content: "Als Diensteanbieter sind wir für eigene Inhalte auf dieser Website nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte Informationen Dritter fortlaufend zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen bleiben unberührt. Bei Kenntnis konkreter Rechtsverletzungen entfernen wir die betreffenden Inhalte umgehend.",
  },
  {
    title: "Haftung für Links",
    content: "Diese Website enthält Links zu externen Angeboten Dritter. Auf deren Inhalte haben wir keinen Einfluss und übernehmen dafür keine Gewähr. Verantwortlich ist jeweils der Anbieter oder Betreiber der verlinkten Seite. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.",
  },
  {
    title: "Urheberrecht",
    content: "Die Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Jede Nutzung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der jeweiligen Urheber*innen. Sollte eine Urheberrechtsverletzung auffallen, bitten wir um einen Hinweis. Entsprechende Inhalte werden bei Bekanntwerden umgehend entfernt.",
  },
];

export default function ImpressumPage() {
  return <main><PageIntro title="Impressum" /><article className="project-copy mx-auto max-w-3xl px-4 pb-24 md:pb-40">{sections.map((section) => <section className="border-t border-line py-7" key={section.title}><h2 className="headline mb-3">{section.title}</h2>{typeof section.content === "string" ? <p>{section.content}</p> : section.content}</section>)}</article><Footer /></main>;
}
