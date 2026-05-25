import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPost20000EspressoGear() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Living the Dream – The Mind-Blowing World of $20,000 Espresso Gear | Hard House Coffee</title>
        <meta name="description" content="Slayer Espresso, Kees van der Westen, and other $20,000+ machines. A look at the high-precision engineering marvels at the absolute peak of espresso." />
        <meta property="og:title" content="The Mind-Blowing World of $20,000 Espresso Gear | Hard House Coffee" />
        <meta property="og:description" content="These aren't just coffee machines. They're precision engineering marvels." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/slayer-luxury-espresso.jpg" alt="Slayer luxury professional espresso machine" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Espresso Machines</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Living the Dream – The Mind-Blowing World of $20,000 Espresso Gear
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Have you ever seen a piece of equipment and thought, "Is that an espresso machine or a luxury sports car?" Because that's exactly what it feels like when you look at a Slayer Espresso 2-Group or a Kees van der Westen Spirit, which can easily run you north of twenty thousand dollars.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          These aren't just for making a quick morning cup. They are high-precision engineering marvels designed for ultra-high-volume specialty shops. We're talking about advanced pre-infusion profiling, pressure curves that can be dialed in shot by shot, and build quality that is meant to last decades of hard commercial use.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          These machines represent the absolute ceiling of what espresso technology can do today. They aren't about convenience — they are about complete and total mastery over every variable in the extraction.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="Machines in This League">
          {[
            { name: "Slayer Espresso 2-Group", desc: "Pre-infusion needle valve gives the barista manual control over flow rate during extraction. Built in Seattle, USA. A genuine work of art." },
            { name: "Kees van der Westen Spirit", desc: "Dutch engineering at its most extreme. Hand-built, pressure profiling, and a design aesthetic that belongs in a museum." },
            { name: "Victoria Arduino Black Eagle", desc: "The machine of choice for many World Barista Championship competitors. Gravimetric dosing, T3 temperature system, and commercial reliability." },
          ].map(({ name, desc }) => (
            <div key={name} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(161,79,31,0.1)" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{name}</p>
              <p style={{ color: "#b0a090" }}>{desc}</p>
            </div>
          ))}
        </Section>

        <Section title="What accessories do I really need to make great espresso at home?">
          <p style={{ marginBottom: "1rem" }}>
            The essential accessories for high-quality home espresso are a dedicated burr grinder, a precise digital kitchen scale, a heavy distribution tool, and a high-quality knock box. A scale ensures your input and output ratios are dead accurate, which is the exact secret used by high-end cafés.
          </p>
          <p>
            Even if you aren't ready to drop the price of a luxury car on a Slayer or Kees van der Westen machine, outfitting your coffee bar with elite tools can replicate a significant amount of that multi-thousand-dollar café precision.
          </p>
        </Section>

        <RelatedPosts posts={[
          { title: "The Icon – La Marzocco Linea Micra Worth the Obsession", slug: "the-icon-la-marzocco-linea-micra-worth-the-obsession", image: "/images/la-marzocco-linea-micra.jpg", category: "Espresso Machines" },
          { title: "Inside the World Barista Championship – The Olympics of Caffeine", slug: "inside-world-barista-championship-olympics-of-caffeine", image: "/images/world-barista-championship.jpg", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Start building your dream setup.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse our curated selection of professional espresso accessories.</p>
          <Link href="/products"><button className="btn-primary">Shop Products</button></Link>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog"><button className="btn-secondary" style={{ fontSize: "0.75rem" }}>Back to Blog</button></Link>
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
