import { Link } from "wouter";
import EditorialArticle, { ArticleSection, ArticleNote, ComparisonTable } from "@/components/EditorialArticle";
import { luxuryFeature, luxuryMachines, type LuxuryMachine } from "@/data/luxuryEspressoFeature";

const imageRoot = "/images/luxury-espresso/";
const paragraphs = (items: string[]) => items.map((text) => (
  <p key={text.slice(0, 60)} style={{ marginBottom: "1.2rem" }}>{text}</p>
));

function MachineProfile({ machine, index }: { machine: LuxuryMachine; index: number }) {
  return (
    <section id={machine.id} aria-labelledby={`${machine.id}-title`} style={{ marginBottom: "1.75rem", scrollMarginTop: "6rem" }}>
      <p className="section-subtitle" style={{ marginBottom: "0.5rem" }}>{String(index).padStart(2, "0")} / {machine.category === "commercial" ? "Commercial" : "Luxury home"}</p>
      <h3 id={`${machine.id}-title`} style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.75rem)", fontWeight: 700, lineHeight: 1.3, color: "#f2f2f2", marginBottom: "0.65rem" }}>{machine.name}</h3>
      <p style={{ color: "#d4b896", marginBottom: "1.25rem" }}>{machine.character}</p>
      <figure style={{ margin: "0 0 1.5rem", overflow: "hidden", borderRadius: "8px", background: "#101010", border: "1px solid rgba(161,79,31,0.2)" }}>
        <img
          src={`${imageRoot}${machine.file}`}
          alt={machine.alt}
          width={machine.width}
          height={machine.height}
          loading={index === 1 ? "eager" : "lazy"}
          decoding="async"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
        <figcaption style={{ padding: "0.8rem 1rem", fontSize: "0.8rem", lineHeight: 1.6, color: "#b0a090" }}>{machine.name} — photograph supplied by Hard House Coffee.</figcaption>
      </figure>
      <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.4rem" }}>Approximate U.S. price: {machine.price}</p>
      <p style={{ color: "#8f7d6e", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{machine.priceDetail}</p>
      {paragraphs(machine.paragraphs)}
      <h4 style={{ color: "#f2f2f2", fontWeight: 700, margin: "1.4rem 0 0.6rem" }}>Key specifications</h4>
      <ul style={{ paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
        {machine.specs.map((spec) => <li key={spec} style={{ marginBottom: "0.6rem" }}>{spec}</li>)}
      </ul>
      <dl style={{ marginBottom: "1rem" }}>
        {[
          ["Strengths", machine.strengths],
          ["Limitations", machine.limitations],
          ["Best suited to", machine.buyer],
          ["What the premium buys", machine.premium],
        ].map(([label, text]) => (
          <div key={label} style={{ marginBottom: "1rem" }}>
            <dt style={{ color: "#f2f2f2", fontWeight: 700 }}>{label}</dt>
            <dd style={{ margin: 0 }}>{text}</dd>
          </div>
        ))}
      </dl>
      <p style={{ fontSize: "0.84rem", lineHeight: 1.6 }}>
        Technical reference: <a href={machine.source} target="_blank" rel="noopener noreferrer" style={{ color: "#d4b896", textDecoration: "underline" }}>{machine.sourceLabel}</a>.
      </p>
    </section>
  );
}

export default function BlogPost20000EspressoGear() {
  const commercial = luxuryMachines.filter((machine) => machine.category === "commercial");
  const home = luxuryMachines.filter((machine) => machine.category === "home");
  return (
    <EditorialArticle
      title={luxuryFeature.title}
      description={luxuryFeature.description}
      category="Espresso Machines"
      image="/images/slayer-luxury-espresso.jpg"
      imageAlt={luxuryMachines[0].alt}
      canonicalPath={luxuryFeature.path}
      readTime={luxuryFeature.readTime}
      editorialNote={luxuryFeature.disclosure}
      related={[
        { title: "Best Espresso Machines Over $1,000: 8 Worth Buying Under $3,000", slug: "stepping-up-what-crossing-1000-mark-actually-buys-you", image: "/images/premium-espresso/01_Breville_Oracle_Jet/IMG_2426.jpeg", category: "Espresso Machines" },
        { title: "Inside the World Barista Championship – The Olympics of Caffeine", slug: "inside-world-barista-championship-olympics-of-caffeine", image: "/images/world-barista-championship.jpg", category: "Coffee Culture" },
      ]}
    >
      <p data-article-introduction>Explore four commercial café machines and four luxury home machines, with photographs, reference prices and the differences that matter before you invest.</p>
      <p style={{ fontSize: "0.85rem" }}><a href="#luxury-machine-comparison" style={{ color: "#d4b896", textDecoration: "underline" }}>Jump to the comparison table</a></p>

      <ArticleSection title="Four elite commercial espresso machines" eyebrow="Section one">
        {commercial.map((machine, index) => <MachineProfile key={machine.id} machine={machine} index={index + 1} />)}
        {paragraphs([luxuryFeature.commercialIntro])}
      </ArticleSection>

      <ArticleSection title="Four luxury home espresso machines" eyebrow="Section two">
        {home.map((machine, index) => <MachineProfile key={machine.id} machine={machine} index={index + 5} />)}
        {paragraphs([luxuryFeature.homeIntro])}
      </ArticleSection>

      <div id="luxury-machine-comparison" style={{ scrollMarginTop: "5rem" }}>
      <ArticleSection title="Eight machines at a glance">
        <p>{luxuryFeature.comparisonIntro}</p>
        <div role="region" aria-label="Eight-machine comparison; scroll horizontally on narrow screens" tabIndex={0} style={{ overflowX: "auto" }}>
          <ComparisonTable
            headers={["Machine", "Application", "Approx. U.S. price", "Defining feature"]}
            rows={luxuryMachines.map((machine) => [
              machine.name,
              machine.category === "commercial" ? "Commercial · two groups" : "Luxury home · one group",
              machine.price,
              machine.character,
            ])}
          />
        </div>
      </ArticleSection>
      </div>

      <nav aria-label="Jump to an espresso machine" style={{ padding: "0.75rem", marginBottom: "1.5rem", background: "#131313", border: "1px solid rgba(161,79,31,0.25)", borderRadius: "8px" }}>
        <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.6rem" }}>Explore the machines</p>
        <ul style={{ paddingLeft: "1.2rem" }}>
          {luxuryMachines.map((machine) => <li key={machine.id} style={{ marginBottom: "0.45rem" }}><a href={`#${machine.id}`} style={{ color: "#d4b896", textDecoration: "underline" }}>{machine.name}</a></li>)}
        </ul>
      </nav>

      <ArticleSection title="What the price tag does—and does not—buy">
        {paragraphs(luxuryFeature.ownership)}
        <p>For a more accessible home setup, our <Link href="/blog/stepping-up-what-crossing-1000-mark-actually-buys-you" style={{ color: "#d4b896", textDecoration: "underline" }}>eight-machine comparison under $3,000</Link> covers both hands-on and fully automatic options.</p>
      </ArticleSection>

      <ArticleSection title="Which kind of buyer should consider these machines?">
        {paragraphs(luxuryFeature.conclusion)}
      </ArticleSection>

      <ArticleSection title="Research and price references">
        <p style={{ marginBottom: "1rem" }}>Checked {luxuryFeature.checked}. Manufacturer references appear beside each profile. U.S. advertised prices were cross-checked against Prima Coffee (Slayer and KB90), Pro Coffee Gear (Spirit Duette, Maverick and YOU), Clive Coffee and Espresso Parts (GS3 MP), Seattle Coffee Gear (Bicocca), and Voltage Coffee Supply (E1 Prima EXP). The GS3 figures are for the Manual Paddle version; the Maverick range separates two-group volumetric and gravimetric configurations.</p>
        <p style={{ marginBottom: "1rem" }}>Additional technical documentation: <a href="https://www.sanremomachines.com/wp-content/uploads/2026/09/YOU_09_US_2026-07-31_US.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#d4b896", textDecoration: "underline" }}>Sanremo YOU U.S. technical sheet</a>. Where retailer and manufacturer specifications conflict, this feature uses manufacturer figures or identifies the regional/configuration question rather than combining incompatible numbers.</p>
        <p style={{ fontSize: "0.88rem", color: "#8f7d6e" }}>Published base-machine prices do not establish the cost of the custom finishes shown in a photograph. Confirm configuration, installation requirements and the final quotation with the supplier.</p>
      </ArticleSection>
    </EditorialArticle>
  );
}
