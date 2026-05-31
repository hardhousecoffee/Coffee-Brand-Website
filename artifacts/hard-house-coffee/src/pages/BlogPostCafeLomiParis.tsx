import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostCafeLomiParis() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Parisian Elegance – Café Lomi (Paris, France) | Hard House Coffee</title>
        <meta name="description" content="Café Lomi in Paris roasts their own beans in an industrial-chic space and supplies top bistros across France. A rainy afternoon here is the definition of coffee culture." />
        <meta property="og:title" content="Café Lomi Paris – Parisian Elegance in Every Cup | Hard House Coffee" />
        <meta property="og:description" content="Paris has always had legendary café culture. Lomi injected a serious dose of modern specialty expertise into that scene." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/cafe-lomi-paris.jpg" alt="Café Lomi Paris France interior specialty coffee" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Parisian Elegance – Café Lomi (Paris, France)
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          To wrap up our ultimate global café tour, we have to make a stop in Paris at Café Lomi.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          Paris has always had a legendary café culture focused on people-watching on the sidewalk, but Lomi injected a serious dose of modern specialty expertise into that scene. They roast their own beans right in the back of an industrial-chic space, supplying some of the top bistros and hotels all across France.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          It's warm, incredibly welcoming, and effortlessly stylish — the exact kind of place where you want to spend a rainy afternoon splitting an expertly poured flat white and a fresh, flaky croissant with your favorite group of friends.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="What Makes Café Lomi a Must-Visit">
          {[
            { label: "In-House Roasting", detail: "Lomi roasts their beans on-site. This gives them unmatched control over freshness and the ability to dial in roast profiles for the specific character of each origin." },
            { label: "Wholesale That Matters", detail: "Supplying top Parisian bistros and hotels means Lomi's coffee standard is woven into some of the finest dining experiences in France." },
            { label: "Industrial-Chic Atmosphere", detail: "The space combines the warmth of a neighborhood café with the aesthetic of a modern roastery. Beautiful, functional, and distinctly Parisian." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="What size grind should I use for a French press?">
          <p style={{ marginBottom: "1rem" }}>
            You should use a very coarse, chunky grind setting (resembling sea salt) for a French press. Because the coffee steeps in water for several minutes, a coarse grind ensures a slow, balanced extraction while preventing fine dust from slipping through the metal mesh filter.
          </p>
          <p>
            Curling up in a chic spot like Café Lomi with a French press or a smooth flat white is the ultimate way to enjoy coffee culture. Using the correct grind profile makes sure your slow afternoon brew remains clean and sediment-free.
          </p>
        </Section>

<RecommendedBeans variant="specialty" />
        <RelatedPosts posts={[
          { title: "Old World Perfection – Ditta Artigianale (Florence, Italy)", slug: "old-world-perfection-ditta-artigianale-florence-italy", image: "/images/ditta-artigianale-florence.jpg", category: "Coffee Culture" },
          { title: "The Master of Precision – Glitch Coffee (Tokyo)", slug: "master-of-precision-glitch-coffee-roasters-tokyo-japan", image: "/images/glitch-coffee-tokyo.jpg", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Bring Parisian café style home.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse French press gear, specialty beans, and more.</p>
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
