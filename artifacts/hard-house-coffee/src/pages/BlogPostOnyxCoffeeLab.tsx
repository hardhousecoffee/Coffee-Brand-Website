import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPostOnyxCoffeeLab() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Global Excellence – Onyx Coffee Lab (Bentonville, Arkansas, USA) | Hard House Coffee</title>
        <meta name="description" content="Ranked the #1 coffee shop in the world by the Espresso Academy. Here's why Onyx Coffee Lab in Bentonville, Arkansas is redefining what a modern coffee brand can be." />
        <meta property="og:title" content="Onyx Coffee Lab – The #1 Coffee Shop in the World | Hard House Coffee" />
        <meta property="og:description" content="You have to head to Arkansas to find the absolute pinnacle of modern American coffee culture." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/onyx-coffee-lab.jpg" alt="Onyx Coffee Lab Bentonville Arkansas interior" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Global Excellence – Onyx Coffee Lab (Bentonville, Arkansas, USA)
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          If you want to visit the absolute pinnacle of modern American coffee culture, you actually have to head out to Arkansas.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          Onyx Coffee Lab based out of Bentonville was officially ranked as the number one coffee shop in the world by the Espresso Academy. What makes them so legendary is their absolute obsession with data and transparency. They literally publish the exact pricing, roast profiles, and trade data for every single bean they source.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          Walking into one of their cafes feels like stepping into a beautifully designed, high-tech coffee laboratory where every single pour-over is crafted with absolute, flawless mathematical precision. They are completely redefining what a modern coffee brand can be.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="What Makes Onyx Different">
          {[
            { label: "Radical Transparency", detail: "Onyx publishes exact purchase prices, farm details, roast curves, and water chemistry for every coffee they sell. You know everything about what's in your cup." },
            { label: "Competition Pedigree", detail: "Their baristas have competed and placed at the highest levels of national and international competition, bringing elite technique to every daily service." },
            { label: "Design-Forward Spaces", detail: "Their cafes are intentionally designed — clean, precise, and focused. The environment reinforces that everything here is done with purpose." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="How does water quality affect the taste of my coffee?">
          <p style={{ marginBottom: "1rem" }}>
            Because a cup of coffee is 98% water, tap water high in chlorine or heavy minerals can muddy the bright flavor notes, while completely distilled water lacks the essential minerals (like magnesium and calcium) needed to bind to and extract the coffee's flavorful oils.
          </p>
          <p>
            Onyx Coffee Lab uses strict water-filtration metrics to ensure that the water profile in their cafés highlights the precise chemistry of their light roasts perfectly.
          </p>
        </Section>

        <RelatedPosts posts={[
          { title: "Beyond the Supermarket – Notable Specialty Coffee Brands", slug: "beyond-the-supermarket-navigating-notable-specialty-coffee-brands", image: "/images/specialty-coffee-brands.jpg", category: "Bean Picks" },
          { title: "Inside the World Barista Championship", slug: "inside-world-barista-championship-olympics-of-caffeine", image: "/images/world-barista-championship.jpg", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Bring that world-class precision home.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Explore specialty beans, water additives, and brew tools.</p>
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
