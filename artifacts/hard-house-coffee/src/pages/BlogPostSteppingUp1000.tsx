import { Link } from "wouter";
import EditorialArticle, { ArticleCard, ArticleGrid, ArticleList, ArticleSection, ComparisonTable } from "@/components/EditorialArticle";
import { premiumGuide as guide, premiumMachines as machines, premiumImageRoot } from "@/data/premiumEspressoGuide";

function ProductPhoto({ index, priority = false }: { index: number; priority?: boolean }) {
  const machine = machines[index];
  return (
    <figure style={{ margin: "0 0 1.25rem" }}>
      <img
        src={`${premiumImageRoot}${machine.image}`}
        alt={machine.alt}
        width={machine.width}
        height={machine.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={{ display: "block", width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <figcaption style={{ marginTop: "0.5rem", fontSize: "0.82rem", color: "#8f7d6e" }}>
        {machine.name} · Supplied reference price: {machine.price}
      </figcaption>
    </figure>
  );
}

export default function BlogPostSteppingUp1000() {
  return (
    <EditorialArticle
      title={guide.title}
      seoTitle={guide.seoTitle}
      description={guide.description}
      category="Espresso Machines"
      image={`${premiumImageRoot}${machines[1].image}`}
      imageAlt={machines[1].alt}
      imageFit="contain"
      canonicalPath={guide.path}
      dateModified={guide.modified}
      readTime="10 min read"
      editorialNote="Research-based comparison, not a hands-on test. Photographs and U.S. dollar reference prices supplied by Hard House Coffee; these are not live offers. Manufacturer descriptions inform the feature comparisons. Check the exact model, generation, included accessories and local warranty before buying."
      related={[
        { title: "Five Espresso Machines Worth Buying: From Budget-Friendly to Midrange", slug: "the-300-dollar-sweet-spot-real-espresso-at-home", image: "/images/five-espresso-machines/cafe-bellissimo-espresso-machine.jpeg", category: "Espresso Machines" },
        { title: "Breville Oracle Jet: A Researched Buying Guide", slug: "breville-oracle-jet-bes985-researched-guide", image: `${premiumImageRoot}${machines[0].image}`, category: "Gear Reviews" },
      ]}
      ctaTitle="Choose the routine you want."
      ctaText="Explore practical advice on coffee beans, milk and caring for your next machine."
    >
      <article aria-label="Eight espresso machines over $1,000 and under $3,000">
        <p data-article-introduction>Eight espresso machines from $1,000 to $3,000—here’s what each offers.</p>
        <p style={{ fontSize: "0.85rem" }}><a href="#machine-comparison" style={{ color: "#d4b896", textDecoration: "underline" }}>Jump to the comparison table</a></p>

        {machines.map((machine, index) => (
          <div key={machine.id} id={machine.id} style={{ scrollMarginTop: "5rem" }}>
            <ArticleSection title={`${index + 1}. ${machine.name}`} eyebrow={machine.subtitle}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "1rem" }}>Reference price: {machine.price}</p>
              <ProductPhoto index={index} priority={index === 0} />
              {machine.paragraphs.map((p) => <p key={p} style={{ marginBottom: "0.9rem" }}>{p}</p>)}
              <ArticleGrid>
                <ArticleCard title="What stands out"><ArticleList items={machine.pros} /></ArticleCard>
                <ArticleCard title="What to think about"><ArticleList items={machine.cons} /></ArticleCard>
              </ArticleGrid>
              <p style={{ marginBottom: "0.8rem" }}><strong>Who it suits:</strong> {machine.verdict}</p>
              <p style={{ fontSize: "0.88rem" }}><span data-article-reference={machine.source} style={{ color: "#d4b896", textDecoration: "underline" }}>Manufacturer information for {machine.name}</span></p>
            </ArticleSection>
          </div>
        ))}

        <div id="machine-comparison" style={{ scrollMarginTop: "5rem" }}>
        <ArticleSection title="Eight machines at a glance">
          <p>All eight include a grinder. Prices are supplied reference prices, not live offers; tax, bundles and later offers may differ.</p>
          <div role="region" aria-label="Eight-machine comparison; scroll horizontally on a narrow screen" tabIndex={0} style={{ maxWidth: "100%", overflowX: "auto" }}>
            <div style={{ minWidth: "940px" }}>
              <ComparisonTable headers={["Machine", "Reference price", "Daily routine", "Milk preparation", "Best fit"]} rows={machines.map((m) => [m.name, m.price, m.routine, m.milk, m.suited])} />
            </div>
          </div>
        </ArticleSection>
        </div>

        <ArticleSection title="Hands-on or fully automatic? Start here">
          <p style={{ marginBottom: "0.9rem" }}>The Oracle Jet and Meraki keep you involved. You move the coffee handle, clear the basket and work with a milk pitcher. Breville takes over more of the coffee preparation; Meraki leaves tamping to you. Neither should be mistaken for a closed-front, one-button latte machine.</p>
          <p>The other six brew internally. That is convenient, especially in a shared kitchen, but automatic does not mean maintenance-free. Milk equipment still needs cleaning, and every machine needs fresh water, coffee and routine care.</p>
        </ArticleSection>

        <ArticleSection title="Where would we start the shortlist?">
          <ArticleList items={[
            "For a coffee-bar ritual with preparation assistance: Breville Oracle Jet.",
            "For hands-on espresso with weighing help: Meraki Gen 2.",
            "For hot and iced milk drinks: compare Eletta Explore with PrimaDonna Aromatic before spending more.",
            "For an automatic milk carafe plus a manual wand: Gaggia Accademia, after confirming the generation.",
            "For a shared, screen-led coffee routine: compare TK-02, Bosch 800 VeroCafe and Jura E8 on the exact features you will use.",
          ]} />
          <p>There is no universal winner. A machine that makes your favorite drink easily is more useful than one with a longer feature list you rarely touch.</p>
        </ArticleSection>

        <ArticleSection title="Leave room for the everyday costs">
          <p style={{ marginBottom: "0.9rem" }}>Because all eight have integrated grinders, a separate grinder is not an automatic day-one purchase. Spend that money on beans you enjoy, suitable water and the cleaning supplies your machine actually calls for. Check what is included before adding pitchers, filters or coffee tools to the basket.</p>
          <p style={{ marginBottom: "0.9rem" }}>Measure the space above the machine as well as the counter: you need to refill the beans and water. Look into local service, warranty coverage and return conditions before ordering. Those details matter more than a temporary discount.</p>
          <p>Our <Link href="/blog/espresso-machine-cleaning-vs-descaling">cleaning and descaling guide</Link> and <Link href="/blog/espresso-water-hardness-alkalinity-guide">espresso-water guide</Link> explain the upkeep. If this price range feels like too much, our <Link href="/blog/the-300-dollar-sweet-spot-real-espresso-at-home">budget-to-midrange comparison</Link> offers a more affordable place to start.</p>
        </ArticleSection>
      </article>
    </EditorialArticle>
  );
}
