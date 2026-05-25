import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPostSFSpecialtyRevolution() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>San Francisco – The Birthplace of the Specialty Revolution | Hard House Coffee</title>
        <meta name="description" content="From Alfred Peet's Berkeley roastery in the '60s to launching the Third Wave movement — San Francisco's role in shaping modern coffee culture worldwide." />
        <meta property="og:title" content="San Francisco – Birthplace of the Specialty Revolution | Hard House Coffee" />
        <meta property="og:description" content="You can't talk about modern coffee without giving a massive shout-out to San Francisco." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/san-francisco-specialty-coffee.jpg" alt="San Francisco specialty coffee third wave" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            San Francisco – The Birthplace of the Specialty Revolution
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>6 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          You really can't talk about modern American coffee culture without giving a massive shout-out to San Francisco.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          Long before the tech booms, SF was the absolute epicenter of the "Second Wave" thanks to Alfred Peet opening up in Berkeley in the late '60s. He changed the way Americans thought about dark, rich, high-quality European roasts. Fast forward a few decades, and the city did it again by launching the "Third Wave" movement with pioneers out in Hayes Valley and Mission District neighborhoods.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          SF pushed the entire industry away from dark, oily, mysterious commercial blends and introduced coffee lovers to crisp, light-roast single-origin profiles that tell a story — about the farm, the farmer, the altitude, and the processing method.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="SF's Contribution to Coffee History">
          {[
            { label: "Alfred Peet & the Second Wave", detail: "Peet's Coffee, founded in Berkeley in 1966, introduced Americans to the European tradition of dark, carefully sourced roasts. Many of Starbucks' founders were his students." },
            { label: "The Third Wave Epicenter", detail: "Cafés in Hayes Valley and the Mission District became laboratories for light-roast single-origin brewing, direct-trade sourcing, and barista competitions." },
            { label: "Blue Bottle Coffee", detail: "James Freeman's Blue Bottle, born from a tiny kiosk in Hayes Valley, became a global symbol of the specialty movement's values." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="What are the key elements of third-wave coffee culture?">
          <p style={{ marginBottom: "1rem" }}>
            Third-wave coffee culture treats coffee as an artisanal product rather than a basic commodity, focusing deeply on sustainable direct-trade farming, transparent roasting practices, and brewing methods that highlight the unique flavor profile of the specific bean origin.
          </p>
          <p>
            San Francisco pioneered this movement, pushing the entire industry away from dark, oily, mysterious commercial blends and introducing coffee lovers to crisp, light-roast single-origin profiles that tell a story.
          </p>
        </Section>

        <RelatedPosts posts={[
          { title: "Beyond the Supermarket – Notable Specialty Coffee Brands", slug: "beyond-the-supermarket-navigating-notable-specialty-coffee-brands", image: "/images/specialty-coffee-brands.jpg", category: "Bean Picks" },
          { title: "Ethiopia vs. Colombia: A Complete Coffee Origin Guide", slug: "ethiopia-vs-colombia-a-complete-coffee-origin-guide", image: "/images/outdoor-coffee.jpg", category: "Bean Picks" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Experience the third wave at home.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse our curated single-origin bean picks and brew gear.</p>
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
