import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostLuxuryCoffee() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>The Three Most Expensive Coffee Brands on Earth – Luxury in a Mug | Hard House Coffee</title>
        <meta name="description" content="Ospina Dynasty, Black Ivory Coffee, and Panama Geisha. The most expensive coffees on earth and why serious connoisseurs consider them bucket-list experiences." />
        <meta property="og:title" content="The Three Most Expensive Coffee Brands on Earth | Hard House Coffee" />
        <meta property="og:description" content="$1,500 a pound. Processed by elephants. The absolute peak of luxury coffee." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/panama-geisha-luxury.jpg" alt="Panama Geisha luxury coffee rare beans" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Bean Picks</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            The Three Most Expensive Coffee Brands on Earth – Luxury in a Mug
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Let's talk about the absolute peak of luxury coffee. If money were no object, what are the most expensive brands on Earth?
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          First, you have Ospina Dynasty Coffee, a legendary Colombian brand dating back to 1835 whose premier grand cru can fetch over $1,500 a pound. Then there's the famous Black Ivory Coffee from Thailand, which is naturally refined by elephants and sits right around $1,000 a pound because the yield is so incredibly tiny.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          Finally, you have ultra-rare lots of Panama Geisha, especially from farms like Hacienda La Esmeralda, which regularly break records at global auctions for its mind-blowing floral and jasmine aroma. It's definitely a splurge, but for true connoisseurs, it's the ultimate bucket-list experience.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="The Three Most Expensive Coffees in the World">
          {[
            { num: "1", name: "Ospina Dynasty Coffee (Colombia)", desc: "Dating back to 1835. Grown at extreme altitude on a legendary estate. Premier Grand Cru can exceed $1,500 per pound. The ultimate status symbol in specialty coffee." },
            { num: "2", name: "Black Ivory Coffee (Thailand)", desc: "Arabica beans naturally processed through Thai elephants, then hand-sorted. Around $1,000 per pound. The extremely small yield makes it one of the rarest coffees in existence." },
            { num: "3", name: "Panama Geisha – Hacienda La Esmeralda", desc: "Regularly breaks global auction records. Grown at 1,700m+. The cup profile — jasmine, bergamot, tropical fruit — is unlike anything else in coffee." },
          ].map(({ num, name, desc }) => (
            <div key={num} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(161,79,31,0.1)" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{num}. {name}</p>
              <p style={{ color: "#b0a090" }}>{desc}</p>
            </div>
          ))}
        </Section>

        <Section title="Why is Panama Geisha coffee so expensive?">
          <p style={{ marginBottom: "1rem" }}>
            Panama Geisha coffee commands record-breaking prices because it is an incredibly delicate, low-yielding variety that requires precise high-altitude microclimates to grow, producing a cup with an unparalleled floral, jasmine, and tea-like elegance that dominates global coffee competitions.
          </p>
          <p>
            When you look at luxury offerings like Ospina or Black Ivory, the rarity of the crop and the labor-intensive refining processes turn a simple morning beverage into an elite, bucket-list culinary luxury.
          </p>
        </Section>

<RecommendedBeans variant="specialty" />
        <RelatedPosts posts={[
          { title: "Beyond the Supermarket – Notable Specialty Coffee Brands", slug: "beyond-the-supermarket-navigating-notable-specialty-coffee-brands", image: "/images/specialty-coffee-brands.jpg", category: "Bean Picks" },
          { title: "Ethiopia vs. Colombia: A Complete Coffee Origin Guide", slug: "ethiopia-vs-colombia-a-complete-coffee-origin-guide", image: "/images/outdoor-coffee.jpg", category: "Bean Picks" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Explore premium coffee and brewing gear.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse our curated selection of top-tier coffee products.</p>
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
