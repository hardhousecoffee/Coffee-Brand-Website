import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPostEspressoRanked() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}
      >
        <img
          src="/images/espresso-tattooed-hands.jpg"
          alt="Best Espresso Machines (2026 Guide): Tested & Ranked"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}
        >
          <p className="section-subtitle mb-3">Gear Reviews</p>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              color: "#f2f2f2",
              lineHeight: 1.25,
              maxWidth: "820px",
            }}
          >
            Best Espresso Machines (2026 Guide): Tested & Ranked
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>
            8 min read
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>

        {/* Intro */}
        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Let's be real for a second. Buying a great espresso machine does not automatically
          give you great coffee.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          You can spend hundreds of dollars and still end up with weak or bitter shots if you
          do not understand what actually matters.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          So instead of chasing hype or brand names, let's break this down in a way that
          actually helps you make a smart decision.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        {/* What Makes a Good Espresso Machine */}
        <Section title="What Makes a Good Espresso Machine">
          {[
            {
              label: "Consistent Pressure",
              detail:
                "Espresso needs stable pressure, usually around nine bars, to extract properly. Too little pressure gives you weak coffee. Too much pressure makes it harsh and bitter.",
            },
            {
              label: "Temperature Stability",
              detail:
                "If your machine cannot hold a steady temperature, your results will be inconsistent no matter what you do.",
            },
            {
              label: "Build Quality",
              detail:
                "A well-built machine performs better over time. Cheaper machines tend to lose consistency and wear out faster.",
            },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        {/* Best Espresso Machines in 2026 */}
        <Section title="Best Espresso Machines in 2026">
          {[
            {
              name: "Breville Barista Express",
              detail:
                "A solid all-around machine with a built-in grinder. Easy to use and reliable for beginners.",
            },
            {
              name: "Gaggia Classic Pro",
              detail:
                "Simple, durable, and perfect if you want to learn how espresso really works.",
            },
            {
              name: "DeLonghi La Specialista",
              detail:
                "More guided and beginner-friendly. Great if you want convenience without sacrificing too much quality.",
            },
            {
              name: "Breville Dual Boiler",
              detail:
                "For serious home setups. Offers excellent control and consistent performance.",
            },
          ].map(({ name, detail }) => (
            <div
              key={name}
              style={{
                marginBottom: "1.5rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid rgba(161,79,31,0.1)",
              }}
            >
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{name}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        {/* Common Mistakes */}
        <Section title="Common Mistakes">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Buying a machine before getting a good grinder",
              "Expecting perfect espresso immediately",
              "Ignoring grind size and temperature",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  marginBottom: "0.75rem",
                  color: "#d4cfc9",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#a14f1f",
                    marginTop: "0.58rem",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Final Thoughts */}
        <Section title="Final Thoughts">
          <p style={{ marginBottom: "1rem" }}>
            The espresso machine matters, but it is only part of the setup.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Pair it with a quality grinder and fresh beans, and that is when everything starts
            to come together.
          </p>
          <p>That is when your coffee actually starts tasting like it should.</p>
        </Section>

        {/* CTA */}
        <div
          className="mt-12 p-6 text-center"
          style={{
            background: "#131313",
            borderRadius: "8px",
            border: "1px solid rgba(161,79,31,0.25)",
          }}
        >
          <p
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "1rem",
              color: "#f2f2f2",
              marginBottom: "0.5rem",
            }}
          >
            Ready to find your machine?
          </p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            Explore recommended espresso machines and gear on the site.
          </p>
          <Link href="/products">
            <button className="btn-primary">Shop Espresso Machines</button>
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link href="/blog">
            <button className="btn-secondary" style={{ fontSize: "0.75rem" }}>
              ← Back to Blog
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          fontWeight: 700,
          color: "#f2f2f2",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid rgba(161,79,31,0.2)",
        }}
      >
        {title}
      </h2>
      <div style={{ color: "#b0a090", fontSize: "0.95rem" }}>
        {children}
      </div>
    </div>
  );
}
