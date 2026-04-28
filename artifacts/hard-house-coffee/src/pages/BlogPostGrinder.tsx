import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPostGrinder() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}
      >
        <img
          src="/images/coffee-grinder-beans.png"
          alt="Why Every Coffee Lover Needs a Grinder First"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}
        >
          <p className="section-subtitle mb-3">Coffee Culture</p>
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
            Why Every Coffee Lover Needs a Grinder First (2026 Guide)
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>
            4 min read
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#f2f2f2",
            marginBottom: "1.5rem",
          }}
        >
          Best Coffee Grinders for Espresso — What Actually Matters
        </p>

        {/* Intro */}
        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          If you're getting into coffee and thinking about buying an espresso machine, you're
          probably focusing on the wrong thing.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>Most people do.</p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          They spend hundreds on a machine… and completely overlook the one piece of gear that
          actually makes the biggest difference:
        </p>
        <p
          style={{
            color: "#f2f2f2",
            fontWeight: 700,
            fontSize: "1.05rem",
            marginBottom: "1.25rem",
          }}
        >
          The grinder.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "0.5rem" }}>Here's the truth:</p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          A good grinder can make an average machine perform better — but a bad grinder will
          ruin even the best setup.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          So before you spend money in the wrong place, let's break down why the grinder should
          always come first.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        {/* What Actually Matters */}
        <Section title="What Actually Matters in an Espresso Grinder">
          <p style={{ marginBottom: "1.5rem" }}>
            Before we get into specific recommendations, you need to understand what separates a
            decent grinder from one that actually delivers.
          </p>

          {[
            {
              label: "Grind Consistency",
              detail:
                "Espresso is sensitive. You're working with pressure and precision, so the grind size has to be uniform. If your grinder produces uneven particles, your shot will extract unevenly — and that's where bitterness and sourness come from.",
            },
            {
              label: "Adjustment Control",
              detail:
                "You don't just need 'fine' or 'coarse.' You need micro-adjustments. Small changes in grind size can completely change how your espresso tastes.",
            },
            {
              label: "Burr Type",
              detail:
                "You want a burr grinder, not a blade grinder. Burr grinders crush beans evenly, while blade grinders chop them randomly. That difference alone is night and day.",
            },
            {
              label: "Build Quality",
              detail:
                "A solid grinder will hold its settings, run consistently, and last longer. Cheap grinders tend to drift, overheat, or break down faster.",
            },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        {/* Best Grinders */}
        <Section title="Best Coffee Grinders for Espresso (2026 Picks)">
          {[
            {
              num: "1",
              name: "Breville Smart Grinder Pro",
              intro:
                "If you're getting serious about espresso without going overboard, this is a strong starting point.",
              bullets: [
                "Precise grind control",
                "Consistent results for home use",
                "Easy adjustments for dialing in your shot",
              ],
              outro: "It's one of those grinders that just works without making things complicated.",
            },
            {
              num: "2",
              name: "Baratza Sette 270",
              intro:
                "This one is for people who want more precision and faster grinding.",
              bullets: [
                "Excellent consistency",
                "Fast grinding speed",
                "Very fine adjustment range",
              ],
              outro: "It's a noticeable step up if you're chasing better espresso quality.",
            },
            {
              num: "3",
              name: "Eureka Mignon Specialita",
              intro: "Now you're getting into that premium home setup territory.",
              bullets: [
                "Extremely consistent grind",
                "Quiet operation",
                "Stepless adjustment (very precise control)",
              ],
              outro:
                "This is the kind of grinder where you start getting café-level results at home.",
            },
            {
              num: "4",
              name: "Niche Zero",
              intro: "This one has a bit of a cult following, and for good reason.",
              bullets: [
                "Minimal retention (less wasted coffee)",
                "Smooth, consistent grind",
                "Great for switching between brew methods",
              ],
              outro: "It's clean, simple, and built for people who really care about their coffee.",
            },
          ].map(({ num, name, intro, bullets, outro }) => (
            <div
              key={num}
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(161,79,31,0.1)",
              }}
            >
              <p
                style={{
                  color: "#f2f2f2",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {num}. {name}
              </p>
              <p style={{ color: "#b0a090", marginBottom: "0.75rem" }}>{intro}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 0.75rem 0" }}>
                {bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      marginBottom: "0.5rem",
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
                    {b}
                  </li>
                ))}
              </ul>
              <p style={{ color: "#b0a090" }}>{outro}</p>
            </div>
          ))}
        </Section>

        {/* Why It Matters More Than You Think */}
        <Section title="Why the Grinder Matters More Than You Think">
          <p style={{ marginBottom: "1rem" }}>
            Here's something most beginners don't realize:
          </p>
          <p style={{ marginBottom: "1rem" }}>
            You can have a great espresso machine and still get bad espresso.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            But if you have a great grinder and a decent machine, you can still get a really
            good shot.
          </p>
          <p style={{ marginBottom: "1rem" }}>That's how important grind quality is.</p>
          <p style={{ color: "#b0a090", marginBottom: "0.5rem" }}>The grinder controls:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem 0" }}>
            {["Extraction speed", "Flavor balance", "Strength and clarity"].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  marginBottom: "0.5rem",
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
          <p>It's not just a tool — it's the foundation of everything.</p>
        </Section>

        {/* Common Mistakes */}
        <Section title="Common Mistakes to Avoid">
          {[
            {
              mistake: "Using a Blade Grinder",
              detail:
                "This is the fastest way to ruin your espresso. It creates uneven grind sizes, which leads to inconsistent extraction.",
            },
            {
              mistake: "Not Adjusting Your Grind",
              detail:
                "A lot of people set it once and leave it. But beans change. Freshness changes. Humidity even plays a role. Dialing in your grind is part of the process.",
            },
            {
              mistake: "Buying Based on Price Alone",
              detail:
                "Cheap grinders usually mean inconsistent results. You don't need the most expensive option — but going too cheap will hold you back.",
            },
          ].map(({ mistake, detail }) => (
            <div key={mistake} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{mistake}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        {/* Final Thoughts */}
        <Section title="Final Thoughts">
          <p style={{ marginBottom: "1rem" }}>
            If you're serious about making better coffee at home, the grinder is where you
            should focus first.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            It's not the most exciting piece of gear, but it's the one that makes the biggest
            difference.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Once you dial in your grind, everything else — your machine, your technique, your
            beans — starts to come together.
          </p>
          <p>
            And that's when coffee stops being just coffee… and starts becoming something you
            actually look forward to making.
          </p>
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
            Ready to upgrade your setup?
          </p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            Explore recommended grinders and gear on the site.
          </p>
          <Link href="/products">
            <button className="btn-primary">Shop Grinders</button>
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
