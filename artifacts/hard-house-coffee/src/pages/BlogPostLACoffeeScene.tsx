import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostLACoffeeScene() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Los Angeles – Where Old Hollywood Glamour Meets the New Wave | Hard House Coffee</title>
        <meta name="description" content="LA's coffee scene is more than trendy minimalism. Discover how the city bridged old-school diner culture with the modern specialty coffee movement." />
        <meta property="og:title" content="Los Angeles – Old Hollywood Glamour Meets the New Wave | Hard House Coffee" />
        <meta property="og:description" content="LA has always known how to reinvent itself — and its coffee scene is no exception." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/los-angeles-coffee-shop.jpg" alt="Los Angeles specialty coffee shop" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Los Angeles – Where Old Hollywood Glamour Meets the New Wave
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>6 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Los Angeles gets a lot of hype for its trendy, minimalist, hyper-modern cafés, but the city actually has some incredible coffee history tucked away if you know where to look.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          Take the historic coffee bars on Hollywood Boulevard, or even the classic diner culture that kept screenwriters fueled for decades. But if you want to experience how the old-school vibe transitioned into the modern era, you have to check out what the early specialty roasters did downtown. LA took the traditional café format and gave it a cinematic edge — sleek design, impeccable sourcing, and a theatrical presentation that makes every cup feel like an event.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          The city caters to both the fast-paced commuter grabbing a cold brew and the coffee purist who wants to spend an hour over a single meticulously crafted pour-over. That range is exactly what makes the LA coffee scene one of the most dynamic in the country.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="LA Cafés Worth Visiting">
          {[
            { name: "Go Get Em Tiger", desc: "Precision-driven coffee in a beautifully designed space. A modern LA institution that takes both hospitality and technique seriously." },
            { name: "Dayglow", desc: "Bold colors, bold coffee. Dayglow turned a neighborhood corner into a destination and proved specialty coffee could have serious personality." },
            { name: "Intelligentsia Silver Lake", desc: "One of Chicago's finest roasters planting its flag in LA. A pillar of the third-wave movement on the West Coast." },
          ].map(({ name, desc }) => (
            <div key={name} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(161,79,31,0.1)" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{name}</p>
              <p style={{ color: "#b0a090" }}>{desc}</p>
            </div>
          ))}
        </Section>

        <Section title="How involved do I want to be in the coffee brewing process?">
          <p style={{ marginBottom: "1rem" }}>
            If you want a quick, push-button morning routine, a super-automatic machine or capsule system fits best. If you enjoy the meditative ritual of grinding, tamping, and steaming your own microfoam, a semi-automatic machine or pour-over setup is ideal.
          </p>
          <p>
            The dynamic café scene in Los Angeles caters to both ends of the spectrum — from high-speed, busy commuters grabbing iced lattes to coffee purists sitting back to enjoy a slow, meticulously crafted single-origin extraction.
          </p>
        </Section>

<RecommendedBeans variant="general" />
        <RelatedPosts posts={[
          { title: "Seattle – Deep Roots of the Emerald City's Coffee Scene", slug: "seattle-deep-roots-emerald-city-coffee-scene", image: "/images/espresso-vivace-seattle.jpg", category: "Coffee Culture" },
          { title: "San Francisco – Birthplace of the Specialty Revolution", slug: "san-francisco-birthplace-of-specialty-revolution", image: "/images/san-francisco-specialty-coffee.jpg", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Craft your own café experience.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse manual brew gear and specialty bean picks.</p>
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
