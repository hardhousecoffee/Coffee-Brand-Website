import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostSpecialtyBrands() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Beyond the Supermarket – Navigating Notable Specialty Coffee Brands | Hard House Coffee</title>
        <meta name="description" content="Onyx Coffee Lab, Intelligentsia, Stumptown — brands building direct-trade relationships and delivering total transparency about where your coffee comes from." />
        <meta property="og:title" content="Beyond the Supermarket – Notable Specialty Coffee Brands | Hard House Coffee" />
        <meta property="og:description" content="Step out of the supermarket aisle. The world of independent specialty roasters is wide open." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/specialty-coffee-brands.jpg" alt="Specialty coffee roaster brands bags" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Bean Picks</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Beyond the Supermarket – Navigating Notable Specialty Coffee Brands
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>6 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          If you are looking to step out of the supermarket aisle and try something truly special, the world of independent specialty roasters is wide open right now.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          Brands like Onyx Coffee Lab, Intelligentsia, and Stumptown have completely transformed the coffee game over the last couple of decades. They don't just buy generic commercial beans — they build direct-trade relationships with individual farmers across the globe.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          When you buy a bag from them, you're getting incredible transparency — you'll know the exact washing station, the elevation it was grown at, and the name of the estate. It's an easy way to support sustainable farming while treating your tastebuds to something exceptional.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="Brands Worth Exploring">
          {[
            { name: "Onyx Coffee Lab", desc: "Ranked #1 coffee shop in the world by the Espresso Academy. Based in Bentonville, Arkansas. Obsessive transparency and data-driven roasting." },
            { name: "Intelligentsia Coffee", desc: "Chicago-based pioneer of the direct-trade model. Their Black Cat espresso blend is considered a benchmark by professionals worldwide." },
            { name: "Stumptown Coffee Roasters", desc: "Portland-born and nationally loved. Their Hair Bender blend remains one of the most consistently excellent espresso blends available anywhere." },
            { name: "Counter Culture Coffee", desc: "Durham, NC. Deeply committed to sustainability and one of the most educational roasters in the country." },
          ].map(({ name, desc }) => (
            <div key={name} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(161,79,31,0.1)" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{name}</p>
              <p style={{ color: "#b0a090" }}>{desc}</p>
            </div>
          ))}
        </Section>

        <Section title="How fresh should coffee beans be for the best taste?">
          <p style={{ marginBottom: "1rem" }}>
            For the absolute best flavor, coffee beans should be brewed between 7 and 21 days after their roast date. This gives the beans enough time to release excess carbon dioxide gas (degas) without losing their vibrant aroma and flavor oils to staleness.
          </p>
          <p>
            Exceptional brands like Onyx, Stumptown, and Intelligentsia stamp clear roast dates right on the front of their packaging so you never have to guess whether you are buying fresh inventory or stale grocery stock.
          </p>
        </Section>

<RecommendedBeans variant="specialty" />
        <RelatedPosts posts={[
          { title: "Global Excellence – Onyx Coffee Lab (Bentonville, Arkansas)", slug: "global-excellence-onyx-coffee-lab-bentonville-arkansas", image: "/images/onyx-coffee-lab.jpg", category: "Coffee Culture" },
          { title: "Logistics and Freshness – The Journey to Your Local Shelf", slug: "logistics-and-freshness-journey-to-your-local-shelf", image: "/images/coffee-bag-freshness.jpg", category: "Bean Picks" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Taste the difference quality sourcing makes.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse our top specialty bean picks.</p>
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
