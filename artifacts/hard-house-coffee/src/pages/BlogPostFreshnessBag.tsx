import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostFreshnessBag() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Logistics and Freshness – The Journey to Your Local Shelf | Hard House Coffee</title>
        <meta name="description" content="Once beans are roasted, the clock is ticking. Learn why the Roasted On date matters more than the expiration date, and how freshness reaches your shelf." />
        <meta property="og:title" content="Logistics and Freshness – The Journey to Your Local Shelf | Hard House Coffee" />
        <meta property="og:description" content="Oxygen is the enemy of fresh coffee. Here's how to beat it." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/coffee-bag-freshness.jpg" alt="Specialty coffee bag with freshness valve" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Bean Picks</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Logistics and Freshness – The Journey to Your Local Shelf
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Once the beans are roasted to perfection, the clock starts ticking. Oxygen is the ultimate enemy of fresh coffee.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          Getting those bags from the roaster onto your local shop's shelves is a massive race against time. That's why you see those little circular plastic valves on high-end coffee bags — they're one-way degas valves that let the freshly roasted beans release carbon dioxide without letting any stale air inside.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          When you're picking out a bag at the store, skip the commercial stuff with an expiration date a year from now. Look for a "Roasted On" date within the last two to three weeks. That's the secret to unlocking the absolute best flavor possible.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="What to Look for on the Bag">
          {[
            { label: "Roasted On Date", detail: "The single most important thing on a coffee bag. Aim for beans roasted within the last 7–21 days for peak flavor." },
            { label: "One-Way Degas Valve", detail: "That little circular valve on premium bags isn't decoration. It lets CO2 out without letting oxygen in — keeping your beans fresh longer." },
            { label: "Sealed Airtight", detail: "Once opened, seal the bag tightly and store in a cool, dark place. A resealable bag or an airtight canister extends freshness significantly." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="Should I be storing my coffee beans in the freezer?">
          <p style={{ marginBottom: "1rem" }}>
            No. Storing your everyday coffee beans in the freezer can expose them to moisture and condensation every time you open the bag, which degrades the oils and causes the beans to go stale faster. Instead, store your beans in an airtight container in a cool, dark place.
          </p>
          <p>
            Freshness is a race against the clock once coffee leaves the roaster. Keeping your beans protected from oxygen and moisture ensures that the "Roasted On" window stays fresh for as long as possible.
          </p>
        </Section>

<RecommendedBeans variant="freshness" />
        <RelatedPosts posts={[
          { title: "The Art of the Roast – Finding the Perfect Profile", slug: "the-art-of-the-roast-finding-perfect-profile-in-the-drum", image: "/images/coffee-drum-roaster.jpg", category: "Bean Picks" },
          { title: "Beyond the Supermarket – Notable Specialty Coffee Brands", slug: "beyond-the-supermarket-navigating-notable-specialty-coffee-brands", image: "/images/specialty-coffee-brands.jpg", category: "Bean Picks" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Fresh beans make all the difference.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse our recommended beans and storage gear.</p>
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
