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
      readTime="18 min read"
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
        <p style={{ color: "#8f7d6e", fontSize: "0.82rem", marginBottom: "1rem" }}>Updated <time dateTime={guide.modified}>{guide.checked}</time></p>
        <p style={paragraphStyle}>You can make worthwhile espresso at home without spending a fortune. The harder part is buying the right kind of machine: one that fits both your budget and the amount of work you want to do before the first sip. A low-priced machine can be a good purchase, but not if the grinder you still need pushes the complete setup beyond your limit.</p>
        <p style={paragraphStyle}>These five selections cover two different approaches. De’Longhi, Gemilai and CAFÉ use a portafilter you fill and tamp yourself. Philips and Zulay handle the coffee grounds internally, although only the Philips here also automates milk frothing. That difference matters more to an everyday latte drinker than a headline pump-pressure number.</p>
        <p style={paragraphStyle}>The checked machine prices span approximately $150–$700. This is not an “everything under $500” list, and a displayed price is not a stock guarantee: CAFÉ asks for a ZIP code to confirm local availability. Start with the comparison, then read the sections that match the routine you actually want.</p>

        <ArticleSection title="Compare the five espresso machines">
          <p style={paragraphStyle}>Prices below were checked {guide.checked}; tax, delivery, retailer availability and promotions can change. Sale labels are used only where the source displays a distinct comparison price. Swipe the table horizontally on a smaller screen.</p>
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
          <p style={paragraphStyle}>A semi-automatic is a good fit if making the drink is part of the enjoyment. You decide how much coffee enters the basket, how finely it is ground and when the shot should stop. You also accept loose grounds, a hot portafilter and a little practice before the results become repeatable. A machine that stops at a saved volume is still semi-automatic if you prepare the puck yourself.</p>
          <p style={paragraphStyle}>A bean-to-cup machine is for a different priority: fewer preparation steps. It grinds, doses, compresses and discards the coffee internally. You adjust settings rather than handling each puck. The tradeoff is less direct control and a more involved internal mechanism to maintain.</p>
          <p>Do not stop at the category label. The Zulay automates coffee but leaves the milk to you. The Philips LatteGo automates milk as well. If “press a button and get a milk drink” is your requirement, that distinction should decide the shortlist before color, touchscreen size or the number of drinks shown in a photograph.</p>
        </ArticleSection>

        <ArticleSection title="The machine price is not the setup price">
          <p style={paragraphStyle}>The useful lesson from a $300 espresso budget still applies: price the whole station. With the De’Longhi or Gemilai, reserve money and space for a separate espresso-capable grinder. With the Bellissimo, Philips or Zulay, the grinder is already included—but ongoing coffee, water and cleaning costs do not disappear.</p>
          <ComparisonTable
            headers={["Item", "Semi-automatic setup", "Fully automatic setup"]}
            rows={[
              ["Grinder", "Required separately for De’Longhi/Gemilai; integrated in CAFÉ", "Already integrated; no second grinder needed"],
              ["Scale", "Useful for dose and beverage yield; check tray clearance", "Optional for checking drink size, not puck preparation"],
              ["Tamper", "Usually supplied; verify basket fit before replacing", "Not needed; internal brewing unit handles compression"],
              ["Milk pitcher", "Needed for manual steaming; check included accessories", "Useful for Zulay; not needed to operate LatteGo"],
              ["Water and cleaning", "Water treatment, approved cleaner/descaler, wand care", "Filters where used, descaler, brew-group and milk-system care"],
              ["Coffee and repairs", "Recurring beans, milk and eventual wear/service costs", "Recurring beans, milk and eventual wear/service costs"],
            ]}
          />
          <p style={paragraphStyle}>As a planning example—not a current bundle offer—adding roughly $150–$250 for an espresso-capable grinder and $20–$50 for a suitable scale can turn a $149.95 machine into a roughly $320–$450 station before coffee, milk, water treatment and any missing pitcher. A hand grinder may reduce cost, provided its adjustment range is genuinely suitable for espresso.</p>
          <p>Compare that complete budget with an integrated machine before deciding what is “cheaper.” An all-in-one saves an initial purchase, but a separate grinder can move to a future machine and can be serviced or upgraded independently. Our <Link href="/blog/turin-df54-vs-baratza-encore-esp" style={linkStyle}>espresso-grinder comparison</Link> explains the kind of adjustment and workflow differences worth looking for.</p>
        </ArticleSection>

        <ArticleSection title="Grinders, fresh beans and a repeatable starting recipe">
          <h3 style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.6rem" }}>Why grind consistency matters</h3>
          <p style={paragraphStyle}>Espresso pushes water through a compact bed of coffee. Uneven grounds and a poorly prepared puck give that water easier paths, so one part can extract differently from another. A capable grinder lets you make small adjustments instead of jumping from a fast, thin shot to a stalled one. A burr grinder made only for filter coffee is not automatically suitable for espresso.</p>
          <p style={paragraphStyle}>Freshly ground beans retain more aroma than a bag ground long before brewing. Buy manageable quantities, keep them airtight and away from heat, and start with a coffee whose roast level suits your taste. Medium or medium-dark coffee is often an easier starting point for milk drinks than an unusually light roast. For automatic machines, follow the manual on beans and avoid very oily or flavored beans if prohibited; Zulay specifically recommends less-oily medium roast.</p>
          <p style={paragraphStyle}>Our <Link href="/blog/why-every-coffee-lover-needs-a-grinder-first-2026-guide" style={linkStyle}>guide to choosing the grinder first</Link> expands on this, while the <Link href="/blog/top-5-dark-roast-beans-for-espresso-in-2026" style={linkStyle}>dark-roast espresso guide</Link> explains the tradeoffs behind a roast preference.</p>
          <h3 style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.6rem" }}>A starting point for portafilter machines</h3>
          <p style={paragraphStyle}>Use the basket’s recommended dose rather than copying a number from a different machine. An 18 g dose is an example, not an instruction for every supplied basket. A common starting ratio is about 1:2 by weight: 18 g in and approximately 36 g of espresso out. Weigh the result and taste it; a saved shot volume can vary as the coffee changes.</p>
          <p style={paragraphStyle}>Distribute the grounds evenly and tamp level until compressed. There is no need to chase a precise force number or buy several decorative distribution tools. A properly fitting tamper, a consistent dose and a small scale that fits under the spouts are more useful. Confirm the actual basket dimensions before buying accessories; “58 mm” does not make every basket, tamper and portafilter interchangeable.</p>
          <p style={paragraphStyle}>If a shot runs fast and tastes sharply sour, try a slightly finer grind. If it runs very slowly and tastes harsh or dry, try coarser. Change one thing at a time. Channeling can complicate that simple pattern, so use our <Link href="/blog/espresso-sour-bitter-channeling-troubleshooting" style={linkStyle}>sour, bitter and channeling troubleshooting guide</Link> when changing grind alone does not help.</p>
          <p>On the Philips and Zulay, do not attempt to tamp the internal dose. Begin with the manual’s startup procedure, make small permitted grinder/strength changes and allow the machine to settle after adjustments. Those owners need the right settings and maintenance—not a portafilter accessory collection.</p>
        </ArticleSection>

        <ArticleSection title="Milk, water and maintenance: the daily work">
          <ArticleGrid>
            <ArticleCard title="Milk texture takes practice">
              Use fresh cold milk and a suitably sized pitcher with room for expansion. Purge and wipe a manual steam wand as directed, keep its tip correctly positioned, and stop steaming before the milk overheats. More foam is not automatically better texture. Plant milks vary; barista-formulated versions often behave differently from ordinary cartons.
            </ArticleCard>
            <ArticleCard title="Water affects taste and service life">
              Check water hardness and follow the machine’s guidance. A basic carbon filter does not necessarily soften hard water. Do not assume distilled water is the solution: Zulay’s manual advises against it. Match treatment to the actual water and appliance rather than adding a filter and forgetting maintenance.
            </ArticleCard>
          </ArticleGrid>
          <p style={{ marginTop: "1.4rem", marginBottom: "1.15rem" }}>For manual milk drinks, brew and steam in the sequence the machine supports; these are not all dual-boiler machines. If you need several cappuccinos in a row, allow for heating transitions and cleaning between drinks. The <Link href="/blog/steam-wand-vs-electric-milk-frother" style={linkStyle}>steam-wand versus milk-frother guide</Link> explains why foam volume and pourable microfoam are different goals.</p>
          <p style={paragraphStyle}>After use, remove spent coffee, empty the tray before it overflows and clean any milk-contact parts promptly. LatteGo’s two-part design is convenient, but milk residue still needs attention. Automatic rinse cycles on bean-to-cup machines do not replace manual brew-group care, grounds-bin emptying or descaling. Follow model-specific instructions about cleaning products, removable parts and lubrication.</p>
          <p style={paragraphStyle}>Cleaning removes coffee oils and milk residue; descaling tackles mineral deposits. They are different jobs, and a cleaning reminder is not permission to improvise with an unsuitable chemical. Read our <Link href="/blog/espresso-machine-cleaning-vs-descaling" style={linkStyle}>cleaning-versus-descaling guide</Link> and <Link href="/blog/espresso-water-hardness-alkalinity-guide" style={linkStyle}>espresso-water guide</Link> for practical next steps.</p>
          <p>A used machine can stretch a budget, but ask about leaks, scale, service history, included parts and warranty before buying. If a machine leaves no budget for fresh coffee or an adequate grinder, saving longer—or starting with a moka pot, AeroPress or pour-over—can be more satisfying than an incomplete espresso setup.</p>
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
          <p>The right machine is not the one with the most buttons or the highest advertised pump pressure. It is the one whose complete cost, preparation steps and maintenance you are comfortable repeating. Decide whether you want to learn the shot, simplify the morning, or split the difference—then buy for that priority.</p>
        </ArticleSection>

        <ArticleSection title="Research notes and source checks">
          <p style={paragraphStyle}>Manufacturer references and checked price context appear in each profile. The CAFÉ grinder caution is supported by <a href="https://www.lowes.com/reviews/cafe-c7cesas3rd3-espresso-machines/5014567101" target="_blank" rel="noopener noreferrer" style={linkStyle}>Lowe’s Bellissimo owner feedback</a>; individual reports cannot establish a product-wide failure rate. CAFÉ’s own feature text and specification table disagree on the grinder’s setting count, so no exact count is asserted here.</p>
          <p style={paragraphStyle}>Additional references: <a href="https://www.delonghi.com/en-us/p/de-longhi-classic-classic-manual-coffee-maker-em400m/EM400M.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>De’Longhi Classic EM400M</a>, <a href="https://www.delonghi.com/en-us/p/de-longhi-classic-de-longhi-classic-espresso-machine/EM450M.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Classic Signature EM450M</a>, <a href="https://www.cafeappliances.com/appliance/Cafe-BELLISSIMO-Semi-Automatic-Espresso-Machine-Frother-C7CESAS4RW3" target="_blank" rel="noopener noreferrer" style={linkStyle}>Bellissimo Matte White</a>, <a href="https://www.cafeappliances.com/appliance/Cafe-BELLISSIMO-Semi-Automatic-Espresso-Machine-Frother-C7CESAS2RS3" target="_blank" rel="noopener noreferrer" style={linkStyle}>Bellissimo Steel Silver</a>, and the <a href="https://www.zulaykitchen.com/pages/magia-clasica-manuals" target="_blank" rel="noopener noreferrer" style={linkStyle}>Magia Clásica manufacturer manual</a>.</p>
          <p style={{ fontSize: "0.88rem", color: "#8f7d6e" }}>Photos show the owner-supplied selections, not evidence of personal testing or an inventory guarantee. Confirm model suffixes, revision, finish, included accessories and warranty before ordering. Displayed retailer reference prices do not establish a permanent discount.</p>
        </ArticleSection>
      </article>
    </EditorialArticle>
  );
}
