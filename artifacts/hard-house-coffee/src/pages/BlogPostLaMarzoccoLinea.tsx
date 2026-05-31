import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPostLaMarzoccoLinea() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>The Icon – Why the La Marzocco Linea Micra is Worth the Obsession | Hard House Coffee</title>
        <meta name="description" content="At $3,900, the La Marzocco Linea Micra is a luxury item. But once you've used one, you understand exactly why it commands that price." />
        <meta property="og:title" content="Why the La Marzocco Linea Micra is Worth the Obsession | Hard House Coffee" />
        <meta property="og:description" content="Commercial-grade performance shrunken down for your kitchen counter." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/la-marzocco-linea-micra.jpg" alt="La Marzocco Linea Micra espresso machine" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Espresso Machines</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            The Icon – Why the La Marzocco Linea Micra is Worth the Obsession
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Let's talk about the dream machine sitting on almost everyone's wishlist: the La Marzocco Linea Micra. It's definitely a luxury item, coming in right around $3,900, but if you've ever touched one, you get it.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          They essentially took the legendary industrial-grade performance of the massive machines you see in high-end specialty cafés and shrunken it down to fit right under your standard kitchen cabinets. It's got a dual-boiler system, a professional steam wand that produces the same velvety microfoam you get at world-class coffee bars, and La Marzocco's famous saturated group head for unmatched thermal stability.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          The Linea Micra isn't just an espresso machine. It's a statement that you take coffee seriously — and it delivers on that promise every single morning.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="What Sets the Linea Micra Apart">
          {[
            { label: "Saturated Group Head", detail: "La Marzocco's signature thermal mass system keeps the group head at a perfectly stable temperature, shot after shot." },
            { label: "Dual Boiler", detail: "Independent brew and steam boilers mean zero compromise. Pull espresso and steam milk simultaneously at professional temperatures." },
            { label: "Commercial Steam Wand", detail: "The same style wand found in top cafés worldwide. Achieving velvet microfoam at home becomes straightforward." },
            { label: "App Connectivity", detail: "Control brew temperature and pre-infusion via the La Marzocco Home app. Data-driven espresso from your kitchen." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="How can I get thick crema on my espresso at home?">
          <p style={{ marginBottom: "1rem" }}>
            To achieve a rich, thick crema, you must use freshly roasted coffee beans (ideally 7 to 21 days past the roast date) and an espresso machine that maintains a stable 9 bars of pressure. The crema is created when pressurized water emulsifies the natural oils of the fresh coffee beans and releases trapped carbon dioxide gas.
          </p>
          <p>
            While a luxury commercial-grade machine like the La Marzocco Linea Micra makes pulling a perfect velvet crema effortless due to its industrial temperature stability, using high-end accessories makes a massive difference on any setup.
          </p>
        </Section>

        <RelatedPosts posts={[
          { title: "Stepping Up – What Crossing the $1,000 Mark Actually Buys You", slug: "stepping-up-what-crossing-1000-mark-actually-buys-you", image: "/images/prosumer-espresso-machine.jpg", category: "Espresso Machines" },
          { title: "Living the Dream – The Mind-Blowing World of $20,000 Espresso Gear", slug: "living-the-dream-mind-blowing-world-of-20000-espresso-gear", image: "/images/slayer-luxury-espresso.jpg", category: "Espresso Machines" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Dream big, brew better.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse our full selection of premium espresso gear.</p>
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
