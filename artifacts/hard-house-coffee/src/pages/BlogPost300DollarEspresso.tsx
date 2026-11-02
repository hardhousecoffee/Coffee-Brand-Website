import { useEffect } from "react";
import { Link } from "wouter";
import EditorialArticle, { ArticleCard, ArticleGrid, ArticleList, ArticleSection, ComparisonTable } from "@/components/EditorialArticle";
import FiveMachineProfile from "@/components/FiveMachineProfile";
import { everydayMachines, fiveMachineGuide as guide, guideFaqs } from "@/data/fiveMachineGuide";

const linkStyle = { color: "#d4b896", textDecoration: "underline" };
const paragraphStyle = { marginBottom: "1.15rem" };

export default function BlogPost300DollarEspresso() {
  useEffect(() => {
    // The site's general route reset runs on navigation. Honor this guide's
    // profile links after that reset, including direct links opened in a new tab.
    const id = window.location.hash.slice(1);
    if (!everydayMachines.some((machine) => machine.id === id)) return;
    const frame = window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <EditorialArticle
      title={guide.title}
      seoTitle={guide.seoTitle}
      schemaHeadline={guide.schemaHeadline}
      description={guide.description}
      category="Espresso Machines"
      image={guide.image}
      imageAlt={everydayMachines[2].alt}
      imageFit="contain"
      canonicalPath={guide.path}
      dateModified={guide.modified}
      readTime="12 min read"
      editorialNote={<>Research-based buying guide, not a hands-on group test. Specifications, prices and availability checked {guide.checked}. See our <Link href="/about#methodology" style={linkStyle}>editorial methodology</Link>. Photographs supplied by Hard House Coffee.</>}
      related={[
        { title: "Best Espresso Machines for Beginners (2026 Guide)", slug: "best-espresso-machines-for-beginners-2026-guide", image: "/images/espresso-pour-cup.jpg", category: "Espresso Machines" },
        { title: "Why Every Coffee Lover Needs a Grinder First", slug: "why-every-coffee-lover-needs-a-grinder-first-2026-guide", image: "/images/coffee-grinder-beans.png", category: "Coffee Culture" },
      ]}
      ctaTitle="Build the setup around your routine."
      ctaText="Keep exploring practical guidance on grinders, milk, maintenance and choosing your first espresso machine."
      ctaLabel="Explore the Journal"
    >
      <article aria-label="Five-machine espresso buying guide">
        <p style={{ color: "#8f7d6e", fontSize: "0.82rem", marginBottom: "1rem" }}>Updated <time dateTime={guide.modified}>{guide.updated}</time></p>
        <p style={paragraphStyle}>Good espresso at home does not have to begin with a four-figure machine. These five options run from roughly $150 to $700, with choices for people who enjoy making every drink by hand and those who would rather let the machine do most of the work.</p>
        <p style={paragraphStyle}>The best place to start is your morning routine. Want to learn the coffee-making side? Look at De’Longhi, Gemilai or CAFÉ. Prefer fewer steps? Compare Philips and Zulay—but notice the milk difference: Philips froths automatically, while Zulay uses a manual wand. The chart makes those choices easy to scan.</p>

        <ArticleSection title="Compare the five espresso machines">
          <p style={paragraphStyle}>Prices checked {guide.checked}; offers and availability can change. Swipe sideways on a smaller screen to see the whole chart.</p>
          <div role="region" aria-label="Five espresso machines comparison; scroll horizontally to see all columns" tabIndex={0} style={{ overflowX: "auto", maxWidth: "100%", WebkitOverflowScrolling: "touch" }}>
            <div style={{ minWidth: "1060px" }}>
              <ComparisonTable
                headers={["Machine", "Approx. U.S. price", "Operation", "Built-in grinder", "Milk", "Finishes", "Best suited to"]}
                rows={everydayMachines.map((machine) => [
                  machine.name,
                  machine.price,
                  machine.operation,
                  machine.grinder,
                  machine.milk,
                  machine.finishes,
                  machine.bestFor,
                ])}
              />
            </div>
          </div>
        </ArticleSection>

        <nav aria-label="Jump to a machine profile" style={{ marginBottom: "3rem", padding: "1.25rem", background: "#131313", border: "1px solid rgba(161,79,31,0.25)", borderRadius: "8px" }}>
          <p style={{ fontWeight: 700, color: "#f2f2f2", marginBottom: "0.65rem" }}>Find your starting point</p>
          <ol style={{ paddingLeft: "1.25rem" }}>
            {everydayMachines.map((machine) => <li key={machine.id} style={{ marginBottom: "0.55rem" }}><a href={`#${machine.id}`} style={linkStyle}>{machine.name}</a></li>)}
          </ol>
        </nav>

        {everydayMachines.map((machine, index) => <FiveMachineProfile key={machine.id} machine={machine} index={index + 1} />)}

        <ArticleSection title="Should you choose semi-automatic or fully automatic?">
          <p style={paragraphStyle}>Choose a semi-automatic if making coffee is part of the enjoyment. You prepare the grounds and steam the milk yourself, with more opportunity to learn and experiment. De’Longhi and Gemilai need separate grinders; CAFÉ includes one.</p>
          <p>An automatic handles the coffee preparation internally, which means fewer steps and less loose coffee on the counter. Philips also handles milk frothing; Zulay does not. Decide how much involvement you want before comparing screens or drink menus.</p>
        </ArticleSection>

        <ArticleSection title="The machine price is not the setup price">
          <p style={paragraphStyle}>A good deal on the machine is only part of the budget. Set aside money for anything missing from the box, plus coffee, milk and routine cleaning. Here is what you actually need:</p>
          <ComparisonTable
            headers={["Item", "Semi-automatic setup", "Fully automatic setup"]}
            rows={[
              ["Grinder", "Required separately for De’Longhi/Gemilai; integrated in CAFÉ", "Already integrated; no second grinder needed"],
              ["Scale", "Useful for repeating your coffee amounts; check it fits", "Optional for checking drink size"],
              ["Tamper", "Usually supplied; check fit before replacing", "Not needed"],
              ["Milk pitcher", "Needed for manual steaming; check included accessories", "Useful for Zulay; not needed to operate LatteGo"],
              ["Water and cleaning", "Water treatment, approved cleaner/descaler, wand care", "Filters where used, descaler, brew-group and milk-system care"],
              ["Coffee and repairs", "Recurring beans, milk and eventual wear/service costs", "Recurring beans, milk and eventual wear/service costs"],
            ]}
          />
          <p style={paragraphStyle}>As a planning example, allow roughly $150–$250 for an espresso-capable grinder and $20–$50 for a scale. That can turn a $149.95 machine into a roughly $320–$450 setup before coffee and other extras. These are budget allowances, not a bundle offer; a suitable hand grinder may cost less.</p>
          <p>A built-in grinder saves an initial purchase. A separate one can move to a future machine or be upgraded independently. Our <Link href="/blog/turin-df54-vs-baratza-encore-esp" style={linkStyle}>espresso-grinder comparison</Link> can help you decide which approach suits you.</p>
        </ArticleSection>

        <ArticleSection title="Grinders, fresh beans and a few useful extras">
          <p style={paragraphStyle}><strong>A suitable grinder makes learning easier.</strong> Look for one designed for espresso, not just filter coffee: small grind adjustments help you improve the taste without changing everything else. Our <Link href="/blog/why-every-coffee-lover-needs-a-grinder-first-2026-guide" style={linkStyle}>grinder-first guide</Link> explains what is worth paying for.</p>
          <p style={paragraphStyle}><strong>Start with beans you enjoy.</strong> Buy manageable amounts, keep them airtight and grind close to brewing. Medium or medium-dark roasts are an approachable starting point for milk drinks. Check an automatic machine’s guidance on oily or flavored beans; Zulay recommends less-oily medium roast. For more choices, see our <Link href="/blog/top-5-dark-roast-beans-for-espresso-in-2026" style={linkStyle}>dark-roast espresso guide</Link>.</p>
          <p style={paragraphStyle}><strong>Keep accessories simple.</strong> For a semi-automatic, a properly fitting tamper and small scale help you make the same coffee twice. Level tamping matters more than buying elaborate tools. Philips and Zulay handle that preparation internally, so skip the tamper and other coffee-handle accessories.</p>
          <p><strong>You can learn the finer points later.</strong> A common starting recipe uses about twice as much brewed espresso as dry coffee by weight—a 1:2 ratio—but basket size and taste matter more than copying someone else’s numbers. Change one thing at a time. If a drink tastes unpleasantly sour or bitter, our <Link href="/blog/espresso-sour-bitter-channeling-troubleshooting" style={linkStyle}>espresso troubleshooting guide</Link> offers practical help.</p>
        </ArticleSection>

        <ArticleSection title="Milk, water and maintenance: keep it simple">
          <ArticleGrid>
            <ArticleCard title="Milk texture takes practice">
              A manual wand takes practice; an automatic system saves that work. Fresh cold milk is a useful starting point, and plant milks can behave differently. Clean milk-contact parts promptly, whichever system you choose.
            </ArticleCard>
            <ArticleCard title="Water affects taste and service life">
              Hard water can leave scale inside a machine. Check your water and follow the appliance’s guidance rather than assuming any filter will solve it. Distilled water is not a universal answer; Zulay advises against it.
            </ArticleCard>
          </ArticleGrid>
          <p style={{ marginTop: "1.4rem", marginBottom: "1.15rem" }}>Making several milk drinks in a row takes longer on a machine that switches between coffee and steam. If that is your usual morning, consider convenience as well as price. Our <Link href="/blog/steam-wand-vs-electric-milk-frother" style={linkStyle}>milk-frothing guide</Link> explains the options.</p>
          <p style={paragraphStyle}>Every machine needs care: empty the tray and spent coffee, clean milk parts and follow the recommended routine. Automatic rinsing does not do everything. Cleaning removes coffee and milk residue; descaling removes mineral buildup. See our <Link href="/blog/espresso-machine-cleaning-vs-descaling" style={linkStyle}>cleaning-versus-descaling guide</Link> and <Link href="/blog/espresso-water-hardness-alkalinity-guide" style={linkStyle}>espresso-water guide</Link> when you need more detail.</p>
          <p>Used equipment can save money, but check condition, service history and warranty. If a machine leaves no budget for beans or a suitable grinder, it may be better to save longer or enjoy another brewing method for now.</p>
        </ArticleSection>

        <ArticleSection title="Questions worth asking before you buy">
          {guideFaqs.map((faq) => <section key={faq.question} style={{ marginBottom: "1.6rem" }}><h3 style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.55rem", lineHeight: 1.45 }}>{faq.question}</h3><p>{faq.answer}</p></section>)}
        </ArticleSection>

        <ArticleSection title="Choose the machine that fits your morning">
          <ArticleList items={[
            "First machine and the lowest machine-only price: De’Longhi EM350BK, with a separate grinder budget.",
            "Hands-on coffee preparation and more adjustable controls: Gemilai Owl G3006.",
            "A built-in grinder and a coordinated kitchen aesthetic: CAFÉ Bellissimo, after checking local availability, the actual offer and support.",
            "Automatic milk preparation with minimal manual work: Philips 2300 LatteGo, at its verified midrange price.",
            "Automatic coffee with a manual milk wand and distinctive finishes: Zulay Magia Clásica.",
          ]} />
          <p>The right machine is the one you will enjoy using regularly. Choose the level of effort you want, allow for the whole setup and pick the features that make your morning easier—not just the longest specification list.</p>
        </ArticleSection>

        <ArticleSection title="Research notes and source checks">
          <p style={paragraphStyle}>Manufacturer sources appear beside each machine. The qualified CAFÉ grinder concerns come from <a href="https://www.lowes.com/reviews/cafe-c7cesas3rd3-espresso-machines/5014567101" target="_blank" rel="noopener noreferrer" style={linkStyle}>Lowe’s Bellissimo owner feedback</a>, not a measured failure rate. An inconsistent manufacturer grinder-setting count has been omitted.</p>
          <p style={paragraphStyle}>Additional references: <a href="https://www.delonghi.com/en-us/p/de-longhi-classic-classic-manual-coffee-maker-em400m/EM400M.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>De’Longhi Classic EM400M</a>, <a href="https://www.delonghi.com/en-us/p/de-longhi-classic-de-longhi-classic-espresso-machine/EM450M.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Classic Signature EM450M</a>, <a href="https://www.cafeappliances.com/appliance/Cafe-BELLISSIMO-Semi-Automatic-Espresso-Machine-Frother-C7CESAS4RW3" target="_blank" rel="noopener noreferrer" style={linkStyle}>Bellissimo Matte White</a>, <a href="https://www.cafeappliances.com/appliance/Cafe-BELLISSIMO-Semi-Automatic-Espresso-Machine-Frother-C7CESAS2RS3" target="_blank" rel="noopener noreferrer" style={linkStyle}>Bellissimo Steel Silver</a>, and the <a href="https://www.zulaykitchen.com/pages/magia-clasica-manuals" target="_blank" rel="noopener noreferrer" style={linkStyle}>Magia Clásica manufacturer manual</a>.</p>
          <p style={{ fontSize: "0.88rem", color: "#8f7d6e" }}>Before buying, confirm the exact model, finish, included accessories and warranty with the seller.</p>
        </ArticleSection>
      </article>
    </EditorialArticle>
  );
}
