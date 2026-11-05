import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import EditorialArticle, { ArticleSection, ComparisonTable } from "@/components/EditorialArticle";
import FiveMachineProfile from "@/components/FiveMachineProfile";
import { everydayMachines, fiveMachineGuide as guide } from "@/data/fiveMachineGuide";
import { finalIntroduction, finalProfiles, finalBuyingAdvice, finalFaqs, finalConclusion } from "@/data/fiveMachineEditorial";

const linkStyle = { color: "#d4b896", textDecoration: "underline" };
const paragraphStyle = { marginBottom: "1.15rem" };

// Add the existing useful internal links without changing the supplied wording.
const internalReferences = [
  ["purchase a separate grinder", "/blog/why-every-coffee-lover-needs-a-grinder-first-2026-guide"],
  ["a separate grinder can also be a good choice", "/blog/turin-df54-vs-baratza-encore-esp"],
  ["Medium and darker roasts", "/blog/top-5-dark-roast-beans-for-espresso-in-2026"],
  ["proper preparation", "/blog/espresso-sour-bitter-channeling-troubleshooting"],
  ["fresh water", "/blog/espresso-water-hardness-alkalinity-guide"],
  ["removing mineral buildup", "/blog/espresso-machine-cleaning-vs-descaling"],
  ["steam wand after preparing milk drinks", "/blog/steam-wand-vs-electric-milk-frother"],
] as const;

function linkedText(text: string): ReactNode {
  const reference = internalReferences.find(([phrase]) => text.includes(phrase));
  if (!reference) return text;
  const [phrase, href] = reference;
  const start = text.indexOf(phrase);
  return <>{text.slice(0, start)}<Link href={href} style={linkStyle}>{phrase}</Link>{linkedText(text.slice(start + phrase.length))}</>;
}

function CopyParagraphs({ texts }: { texts: string[] }) {
  return <>{texts.map((text) => <p key={text} style={paragraphStyle}>{linkedText(text)}</p>)}</>;
}

export default function BlogPost300DollarEspresso() {
  useEffect(() => {
    // Preserve existing profile jumps, including links opened in a new tab.
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
        { title: "Best Espresso Machines for Beginners: Your Guide to Choosing the Right One", slug: "best-espresso-machines-for-beginners-2026-guide", image: "/images/espresso-pour-cup.jpg", category: "Espresso Machines" },
        { title: "Why Every Coffee Lover Needs a Grinder First", slug: "why-every-coffee-lover-needs-a-grinder-first-2026-guide", image: "/images/coffee-grinder-beans.png", category: "Coffee Culture" },
      ]}
      ctaTitle="Build the setup around your routine."
      ctaText="Keep exploring practical guidance on grinders, milk, maintenance and choosing your first espresso machine."
      ctaLabel="Explore the Journal"
    >
      <article aria-label="Five-machine espresso buying guide">
        <p style={{ color: "#8f7d6e", fontSize: "0.82rem", marginBottom: "1rem" }}>Updated <time dateTime={guide.modified}>{guide.updated}</time></p>
        <div data-article-introduction>
          <CopyParagraphs texts={finalIntroduction.paragraphs} />
        </div>
        <p style={{ fontSize: "0.85rem" }}><a href="#five-machine-comparison" style={linkStyle}>Jump to the comparison table</a></p>
        {everydayMachines.map((machine, index) => <FiveMachineProfile key={machine.id} machine={machine} editorial={finalProfiles[index]} />)}

        <div id="five-machine-comparison" style={{ scrollMarginTop: "5rem" }}>
        <ArticleSection title="Five Espresso Machines at a Glance">
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
        </div>

        <nav aria-label="Jump to a machine profile" style={{ marginBottom: "1.5rem", padding: "0.75rem", background: "#131313", border: "1px solid rgba(161,79,31,0.25)", borderRadius: "8px" }}>
          <p style={{ fontWeight: 700, color: "#f2f2f2", marginBottom: "0.65rem" }}>Find your starting point</p>
          <ol style={{ paddingLeft: "1.25rem" }}>
            {everydayMachines.map((machine) => <li key={machine.id} style={{ marginBottom: "0.55rem" }}><a href={`#${machine.id}`} style={linkStyle}>{machine.name}</a></li>)}
          </ol>
        </nav>

        {finalBuyingAdvice.map((section) => (
          <ArticleSection key={section.title} title={section.title}>
            <CopyParagraphs texts={section.paragraphs} />
          </ArticleSection>
        ))}

        <ArticleSection title="Frequently Asked Questions">
          {finalFaqs.map((faq) => <section key={faq.question} style={{ marginBottom: "1.6rem" }}><h3 style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.55rem", lineHeight: 1.45 }}>{faq.question}</h3><CopyParagraphs texts={faq.paragraphs} /></section>)}
        </ArticleSection>

        <ArticleSection title="Our Final Thoughts">
          <CopyParagraphs texts={finalConclusion} />
        </ArticleSection>
      </article>
    </EditorialArticle>
  );
}
