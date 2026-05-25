import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPostNYCEspressoBars() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>New York City – From Historic Italian Espresso Bars to Fast-Paced Cafés | Hard House Coffee</title>
        <meta name="description" content="From Caffe Reggio's 1920s cappuccinos to Brooklyn's modern specialty scene — how New York City became one of the world's great coffee capitals." />
        <meta property="og:title" content="NYC – From Historic Italian Espresso Bars to Fast-Paced Cafés | Hard House Coffee" />
        <meta property="og:description" content="New York City runs on caffeine — and its coffee story spans over a century." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/caffe-reggio-nyc.jpg" alt="Caffe Reggio New York City Italian espresso bar" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            New York City – From Historic Italian Espresso Bars to Fast-Paced Cafés
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>6 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          New York City runs on caffeine, period. But the way people drink it tells a fascinating story.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          If you head down into Greenwich Village, you can still step into places like Caffe Reggio, which has been serving up classic Italian espresso since the 1920s — they actually claim to have introduced the cappuccino to America. They still have this massive, ornate chrome and bronze machine from 1902 sitting on the counter.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          Compare that old-world charm to the hyper-fast, sleek specialty shops in Williamsburg and Brooklyn and you get the full scope of what NYC coffee culture represents: a city that holds onto its history while racing toward what's next.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="Historic and Essential NYC Coffee Spots">
          {[
            { name: "Caffe Reggio (1927)", desc: "Greenwich Village institution. Claims to have introduced the cappuccino to America. The 1902 espresso machine behind the counter is worth the visit alone." },
            { name: "Abraço", desc: "Tiny, serious, and brilliant. A Lower East Side espresso bar that treats every shot as a work of craft." },
            { name: "Devoción", desc: "Colombian-owned and Brooklyn-based. They fly in beans from Colombia weekly — possibly the freshest specialty coffee in the entire city." },
          ].map(({ name, desc }) => (
            <div key={name} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(161,79,31,0.1)" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{name}</p>
              <p style={{ color: "#b0a090" }}>{desc}</p>
            </div>
          ))}
        </Section>

        <Section title="What's the difference between a traditional cappuccino and a flat white?">
          <p style={{ marginBottom: "1rem" }}>
            A traditional cappuccino consists of equal parts espresso, steamed milk, and a thick layer of airy milk foam, whereas a flat white uses a higher ratio of espresso to milk and utilizes smooth, velvety microfoam integrated completely throughout the drink without a stiff foam head.
          </p>
          <p>
            Whether you're ordering an old-school cappuccino at a historic spot like Caffe Reggio in Greenwich Village or grabbing a flat white at a modern shop in Brooklyn, knowing your drink styles helps you navigate any menu in the world.
          </p>
        </Section>

        <RelatedPosts posts={[
          { title: "Meet the Masters – What Makes a Top-Tier Barista Truly Elite", slug: "meet-the-masters-what-makes-top-tier-barista-truly-elite", image: "/images/barista-latte-art.jpg", category: "Coffee Culture" },
          { title: "The Rise of Specialty Coffee Bars", slug: "the-rise-of-specialty-coffee-bars", image: "/images/black-cafe.jpg", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Master your milk at home.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse frothing pitchers, espresso gear, and more.</p>
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
