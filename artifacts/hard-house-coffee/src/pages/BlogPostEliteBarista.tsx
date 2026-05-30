import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostEliteBarista() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Meet the Masters – What Makes a Top-Tier Barista Truly Elite | Hard House Coffee</title>
        <meta name="description" content="It's more than latte art. Elite baristas are part scientist, part host — with an almost psychic understanding of extraction chemistry." />
        <meta property="og:title" content="What Makes a Top-Tier Barista Truly Elite | Hard House Coffee" />
        <meta property="og:description" content="Equal parts mad scientist and ultimate hospitality expert." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/barista-latte-art.jpg" alt="Barista pouring latte art professional coffee" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Meet the Masters – What Makes a Top-Tier Barista Truly Elite
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          What separates a regular person who makes coffee from a true master barista? It's way more than just knowing how to pour a pretty heart pattern into some foam.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          The elite pros have an almost psychic understanding of extraction chemistry. They can taste a shot of espresso, instantly realize that the water temperature was half a degree too low or that the grind setting shifted slightly due to the humidity in the room, and adjust it on the fly.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          On top of that, they are incredible hosts — they can break down complex flavor profiles and farming logistics into simple terms without ever sounding snobbish. They are equal parts mad scientist and ultimate hospitality expert.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="What Separates Good from Elite">
          {[
            { label: "Extraction Intelligence", detail: "Masters don't just follow recipes. They taste, diagnose, and adjust — often changing grind size mid-service based on humidity shifts or bean rest time." },
            { label: "Muscle Memory Under Pressure", detail: "At the World Barista Championship level, competitors produce 12 flawless drinks in 15 minutes without looking at a timer. That's thousands of hours of practice." },
            { label: "Hospitality First", detail: "The best baristas make you feel welcome the moment you walk in. Technical brilliance without warmth is just performance." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="What are the most common mistakes people make when frothing milk?">
          <p style={{ marginBottom: "1rem" }}>
            The most frequent mistakes are introducing too much air for too long, which creates large "soapy" bubbles instead of smooth microfoam, and overheating the milk past 150°F, which scalds the milk sugars and destroys the sweetness.
          </p>
          <p>
            Elite baristas listen to the sound of the steam wand closely — aiming for brief, gentle paper-tearing sounds before sinking the tip to spin the milk into a perfect, glossy wet-paint texture.
          </p>
        </Section>

<RecommendedBeans variant="espresso" />
        <RelatedPosts posts={[
          { title: "Inside the World Barista Championship", slug: "inside-world-barista-championship-olympics-of-caffeine", image: "/images/world-barista-championship.jpg", category: "Coffee Culture" },
          { title: "The Art of the Perfect Pour-Over", slug: "the-art-of-the-perfect-pour-over", image: "/images/pour-over-kettle.jpg", category: "Brewing Guides" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Practice like a pro.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse milk frothing pitchers, scales, and espresso accessories.</p>
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
