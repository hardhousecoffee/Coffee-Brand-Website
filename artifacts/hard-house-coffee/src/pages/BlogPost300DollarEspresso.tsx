import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPost300DollarEspresso() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>The $300 Sweet Spot – Yes, You Can Get Real Espresso at Home | Hard House Coffee</title>
        <meta name="description" content="You don't need to spend thousands to pull a real espresso at home. The Breville Bambino proves that great crema is achievable on a budget." />
        <meta property="og:title" content="The $300 Sweet Spot – Real Espresso at Home | Hard House Coffee" />
        <meta property="og:description" content="Entry-level doesn't mean bad. Here's why the Breville Bambino is a genuine game-changer." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/espresso-bambino-budget.jpg" alt="Breville Bambino espresso machine" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Espresso Machines</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            The $300 Sweet Spot – Yes, You Can Get Real Espresso at Home
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>6 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Alright, let's be real for a second. You don't need to take out a second mortgage just to stop buying a five-dollar latte every morning.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          A lot of people think entry-level home machines are just glorified toy pumps, but if you look at something like the Breville Bambino, it's a total game-changer for around three hundred bucks. It uses a 54mm portafilter, heats up in literally three seconds, and actually hits the right pressure to give you that thick, beautiful crema.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          The key insight most beginners miss is that the machine isn't the whole story. At this price point, your grind quality and tamping technique carry most of the weight. Get those two things right and you will be genuinely shocked at what a $300 machine can produce.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="Why the Breville Bambino Works">
          {[
            { label: "3-Second Heat-Up", detail: "Thermojet heating technology means you are not standing around waiting. From cold to brew-ready in three seconds flat." },
            { label: "54mm Portafilter", detail: "The same portafilter size used on machines twice the price. More coffee contact means better extraction and a fuller cup." },
            { label: "Consistent 9-Bar Pressure", detail: "This is the magic number for espresso. The Bambino holds it reliably, which is all you need to pull proper shots." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="What You Still Need to Nail">
          {["Grind size — go finer than you think", "Tamp firmly and evenly with around 30 pounds of pressure", "Use fresh beans roasted within the last two to three weeks"].map((item) => (
            <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.75rem", color: "#d4cfc9" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a14f1f", marginTop: "0.58rem", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </Section>

        <Section title="Why is my espresso shot running way too fast?">
          <p style={{ marginBottom: "1rem" }}>
            An espresso shot that runs too fast — filling your cup in less than 20 seconds — is usually caused by coffee grounds that are too coarse or not tamped firmly enough.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            To fix this, adjust your grinder to a finer setting so the water meets the proper resistance, or ensure you are applying a flat, even 30 pounds of pressure when tamping.
          </p>
          <p>
            Using an entry-level machine like the Breville Bambino means your grind size has to be completely dialed in to achieve that thick, beautiful crema. If you are struggling with fast, sour shots, pairing your machine with a high-quality espresso tool kit can instantly stabilize your extractions.
          </p>
        </Section>

        <RelatedPosts posts={[
          { title: "Best Espresso Machines for Beginners (2026 Guide)", slug: "best-espresso-machines-for-beginners-2026-guide", image: "/images/espresso-pour-cup.jpg", category: "Espresso Machines" },
          { title: "Why Every Coffee Lover Needs a Grinder First", slug: "why-every-coffee-lover-needs-a-grinder-first-2026-guide", image: "/images/coffee-grinder-beans.png", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Ready to upgrade your setup?</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse our curated espresso gear and product picks.</p>
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
