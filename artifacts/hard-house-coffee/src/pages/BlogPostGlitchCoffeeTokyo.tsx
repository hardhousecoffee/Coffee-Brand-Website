import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostGlitchCoffeeTokyo() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>The Master of Precision – Glitch Coffee & Roasters (Tokyo, Japan) | Hard House Coffee</title>
        <meta name="description" content="Tucked away in Jimbocho, Glitch Coffee treats light-roast coffee with the same reverence a master chef treats sushi. A masterclass in Japanese precision." />
        <meta property="og:title" content="Glitch Coffee & Roasters Tokyo – The Master of Precision | Hard House Coffee" />
        <meta property="og:description" content="Hyper-focus, minimalism, and absolute culinary perfection. This is Tokyo's coffee mecca." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/glitch-coffee-tokyo.jpg" alt="Glitch Coffee Roasters Tokyo Japan precision barista" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            The Master of Precision – Glitch Coffee & Roasters (Tokyo, Japan)
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          If you appreciate hyper-focus, minimalism, and absolute culinary perfection, Glitch Coffee & Roasters in Tokyo is your absolute mecca.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          Tucked away in Jimbocho, Glitch treats light-roast coffee with the exact same reverence and precision that a master chef treats sushi. They specialize almost exclusively in incredibly bright, complex single-origin coffees, and the baristas weigh, measure, and analyze every single variable of the brew right in front of you.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          The café design is incredibly sleek and stripped down, forcing you to focus entirely on the aromas and flavors in your cup. It's a masterclass in Japanese craftsmanship and dedication to the craft.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="The Glitch Philosophy">
          {[
            { label: "Single-Origin Only", detail: "Glitch believes that great coffee should tell a story. Blends obscure origin. Every cup at Glitch is traceable to a single farm, lot, and processing method." },
            { label: "Public Precision", detail: "Baristas weigh every dose and yield at the bar in full view. There's nothing hidden about their process — the data is the performance." },
            { label: "Japanese Minimalism", detail: "The stripped-down interior is intentional. No distractions. Nothing to look at except your coffee. The sensory experience is entirely in the cup." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="Is it worth upgrading from a blade grinder to a burr grinder?">
          <p style={{ marginBottom: "1rem" }}>
            Yes, a burr grinder is the single most important upgrade you can make because it crushes coffee beans into perfectly uniform particles using matching rotating plates, whereas a blade grinder randomly chops beans into uneven chunks and fine dust, leading to uneven, sour, and bitter extractions.
          </p>
          <p>
            Tokyo's Glitch Coffee views grind consistency as an absolute necessity for precision. Without uniform grind sizes, achieving their level of world-renowned light-roast perfection would be impossible.
          </p>
        </Section>

<RecommendedBeans variant="specialty" />
        <RelatedPosts posts={[
          { title: "Old World Perfection – Ditta Artigianale (Florence, Italy)", slug: "old-world-perfection-ditta-artigianale-florence-italy", image: "/images/ditta-artigianale-florence.jpg", category: "Coffee Culture" },
          { title: "Why Every Coffee Lover Needs a Grinder First", slug: "why-every-coffee-lover-needs-a-grinder-first-2026-guide", image: "/images/coffee-grinder-beans.png", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Upgrade your grind. Transform your cup.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse burr grinders and precision brewing tools.</p>
          <Link href="/products"><button className="btn-primary">Shop Products</button></Link>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog"><button className="btn-secondary" style={{ fontSize: "0.82rem" }}><span className="arrow-pulse">←</span> Back to Blog</button></Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", fontWeight: 700, color: "#f2f2f2", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>{title}</h2>
      <div style={{ color: "#b0a090", fontSize: "0.95rem" }}>{children}</div>
    </div>
  );
}
