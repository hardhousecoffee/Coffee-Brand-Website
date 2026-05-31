import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostWorldBaristaChamp() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Inside the World Barista Championship – The Olympics of Caffeine | Hard House Coffee</title>
        <meta name="description" content="15 minutes on stage, 4 espressos, 4 milk drinks, 4 signature beverages. An inside look at the World Barista Championship and what it takes to compete at the top." />
        <meta property="og:title" content="Inside the World Barista Championship – The Olympics of Caffeine | Hard House Coffee" />
        <meta property="og:description" content="Did you know there's an actual Olympics for baristas? Here's what it looks like." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/world-barista-championship.jpg" alt="World Barista Championship competition stage" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Inside the World Barista Championship – The Olympics of Caffeine
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>6 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Did you know there is an actual Olympics for baristas? It's called the World Barista Championship, and it is a deadly serious, high-intensity competition.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          These top-tier pros get exactly 15 minutes on stage to set up their station, pull four espressos, four milk drinks, and four completely custom "signature beverages" for a panel of incredibly strict sensory judges. In fact, Australian barista Jack Simpson took the world crown by spending thousands of hours perfecting a routine that treated coffee like elite chemistry.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          They talk through a synchronized routine, explaining the exact chemistry of their milk, the origin of their beans, and the tasting notes the judges should look for. The level of precision, focus, and creativity on display is totally mesmerizing.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="What the Competition Looks Like">
          {[
            { label: "15-Minute Set", detail: "Competitors have exactly 15 minutes from the first whistle to serve 12 drinks to four judges. Every second is planned and rehearsed." },
            { label: "Four Espressos", detail: "Pulled to identical standards for four sensory judges. Each shot is scored on taste, crema, and consistency." },
            { label: "Four Milk Drinks", detail: "Cappuccinos or lattes with microfoam demonstrating precise temperature, texture, and visual presentation." },
            { label: "Four Signature Beverages", detail: "The creative wildcard. Competitors use any legal food-safe ingredients to produce a hot or cold espresso-based drink that tells a story." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="How much coffee should I use per cup to get the best flavor?">
          <p style={{ marginBottom: "1rem" }}>
            The golden ratio for coffee brewing is 1 to 2 grams of coffee for every 16 to 18 grams of water (a 1:16 or 1:18 ratio). For a standard 8-ounce mug, this equates to roughly 15 grams of whole bean coffee.
          </p>
          <p>
            In competitions like the World Barista Championship, competitors weigh every single metric down to the tenth of a gram. Using precise ratios allows them to extract maximum flavor symmetry under intense pressure.
          </p>
        </Section>

<RecommendedBeans variant="espresso" />
        <RelatedPosts posts={[
          { title: "Meet the Masters – What Makes a Top-Tier Barista Truly Elite", slug: "meet-the-masters-what-makes-top-tier-barista-truly-elite", image: "/images/barista-latte-art.jpg", category: "Coffee Culture" },
          { title: "Global Excellence – Onyx Coffee Lab (Bentonville, Arkansas)", slug: "global-excellence-onyx-coffee-lab-bentonville-arkansas", image: "/images/onyx-coffee-lab.jpg", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Compete at home with precision tools.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse scales, grinders, and professional espresso accessories.</p>
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
