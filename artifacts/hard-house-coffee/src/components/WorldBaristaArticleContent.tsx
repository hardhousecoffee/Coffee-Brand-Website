import approvedCopy from "@/data/article-copy/world-barista-championship.txt?raw";

// Keep the owner's approved wording separate from its presentation.
const [, ...blocks] = approvedCopy.trim().split(/\r?\n\s*\r?\n/);
const sectionHeadings = new Set([
  "What Is the World Barista Championship?",
  "How Did the World Barista Championship Begin?",
  "The First World Barista Championship",
  "How the Competition Grew Around the World",
  "How Do You Qualify for the World Barista Championship?",
  "What Happens During the World Barista Championship?",
  "How Are World Barista Championship Competitors Judged?",
  "How Does Someone Become a World Barista Champion?",
  "What Skills Do Competitive Baristas Need?",
  "Famous World Barista Champions and Their Influence",
  "How Has the World Barista Championship Influenced Coffee Culture?",
  "Where Is the World Barista Championship Held?",
  "Can Coffee Enthusiasts Attend the Championship?",
  "Can You Train to Become a Competitive Barista?",
  "Frequently Asked Questions About the World Barista Championship",
  "Final Thoughts: More Than a Coffee Competition",
  "About Our Research",
]);
const subheadings = new Set([
  "Start With a National Barista Championship",
  "Check Eligibility Requirements",
  "What If Your Country Doesn’t Have a National Competition?",
  "The Three Beverage Courses",
  "Why Fifteen Minutes Matters",
  "Espresso Quality and Flavor",
  "Technical Skills and Consistency",
  "Cleanliness and Organization",
  "Creativity and Presentation",
  "Hospitality",
  "Understanding Coffee Origins",
  "Espresso Extraction",
  "Sensory Evaluation",
  "Milk Preparation",
  "Communication and Public Speaking",
  "Working Under Pressure",
  "Connecting Coffee Producers and Baristas",
  "Encouraging Experimentation",
  "Building an International Community",
  "What is the World Barista Championship?",
  "How do you enter the World Barista Championship?",
  "How long is a World Barista Championship routine?",
  "What drinks do competitors make?",
  "Do you have to work as a barista to compete?",
  "Where can I watch the World Barista Championship?",
  "Is the World Barista Championship the same as a latte art competition?",
]);
const beverageHeadings = new Set([
  "Four espressos",
  "Four milk-based beverages",
  "Four signature beverages",
]);
const sections: { heading?: string; blocks: string[] }[] = [{ blocks: [] }];
for (const block of blocks) {
  if (sectionHeadings.has(block)) sections.push({ heading: block, blocks: [] });
  else sections[sections.length - 1].blocks.push(block);
}

function renderBlock(block: string, index: number) {
  const style = {
    color: "#f2f2f2",
    fontFamily: "Inter, sans-serif",
    fontSize: "1.0625rem",
    fontWeight: 700,
    margin: "1rem 0 0.5rem",
  };
  if (subheadings.has(block)) return <h3 key={index} style={style}>{block}</h3>;
  if (beverageHeadings.has(block)) return <h4 key={index} style={style}>{block}</h4>;
  return <p key={index} style={{ color: "#b0a090", marginBottom: "0.65rem" }}>{block}</p>;
}

export default function WorldBaristaArticleContent() {
  return (
    <div data-approved-world-barista-copy>
      {sections.map((section, index) => section.heading ? (
        <section key={section.heading} style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.3rem, 3.25vw, 1.7rem)", fontWeight: 700, color: "#f2f2f2", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>{section.heading}</h2>
          <div>{section.blocks.map(renderBlock)}</div>
        </section>
      ) : (
        <div key={index}>{section.blocks.map(renderBlock)}</div>
      ))}
    </div>
  );
}
