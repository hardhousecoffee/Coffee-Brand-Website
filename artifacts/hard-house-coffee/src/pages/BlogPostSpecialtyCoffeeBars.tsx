import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPostSpecialtyCoffeeBars() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>The Rise of Specialty Coffee Bars | Hard House Coffee</title>
        <meta name="description" content="Specialty coffee is reshaping how we experience our daily brew. Explore what makes specialty coffee bars different, why the movement is growing, and what sets them apart." />
        <meta property="og:title" content="The Rise of Specialty Coffee Bars | Hard House Coffee" />
        <meta property="og:description" content="What makes specialty coffee bars different — and why the movement keeps growing." />
      </Helmet>
      <Navbar />

      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}
      >
        <img
          src="/images/black-cafe.jpg"
          alt="The Rise of Specialty Coffee Bars"
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
            The Rise of Specialty Coffee Bars
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>
            7 min read
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        {/* Intro */}
        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Coffee has changed in a big way over the past decade.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          What used to be a quick daily habit has turned into a full experience focused on quality,
          technique, and flavor.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          This shift is what people call specialty coffee.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        {/* What Specialty Coffee Means */}
        <Section title="What Specialty Coffee Means">
          <p style={{ marginBottom: "1rem" }}>
            Specialty coffee focuses on quality at every level, from sourcing beans to roasting and
            brewing.
          </p>
          <p>
            It is not just about caffeine anymore. It is about how the coffee tastes and how it is made.
          </p>
        </Section>

        {/* Why It Is Growing */}
        <Section title="Why It Is Growing">
          {[
            {
              label: "Higher Standards",
              detail:
                "Coffee shops are paying more attention to sourcing and preparation.",
            },
            {
              label: "Better Equipment",
              detail:
                "Modern tools allow baristas to control brewing more precisely.",
            },
            {
              label: "More Awareness",
              detail:
                "People care more about what they are drinking and where it comes from.",
            },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        {/* What Makes Specialty Coffee Bars Different */}
        <Section title="What Makes Specialty Coffee Bars Different">
          {[
            "Single-origin beans",
            "Manual brewing methods",
            "Skilled baristas",
            "Focus on flavor instead of speed",
          ].map((item) => (
            <div
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
            </div>
          ))}
        </Section>

        {/* Final Thoughts */}
        <Section title="Final Thoughts">
          <p style={{ marginBottom: "1rem" }}>
            Specialty coffee is not just a trend. It is a shift in how people experience coffee.
          </p>
          <p>
            Once you get used to higher quality coffee, it becomes hard to go back to basic options.
          </p>
        </Section>

        <RelatedPosts posts={[
          { title: "The Art of the Perfect Pour-Over", slug: "the-art-of-the-perfect-pour-over", image: "/images/pour-over-kettle.jpg", category: "Brewing Guides" },
          { title: "Ethiopia vs. Colombia: A Complete Coffee Origin Guide", slug: "ethiopia-vs-colombia-a-complete-coffee-origin-guide", image: "/images/outdoor-coffee.jpg", category: "Bean Picks" },
        ]} />

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
            Elevate your home setup.
          </p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            Explore gear and beans that bring the specialty experience home.
          </p>
          <Link href="/products">
            <button className="btn-primary">Shop Gear</button>
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link href="/blog">
            <button className="btn-secondary" style={{ fontSize: "0.75rem" }}>
              Back to Blog
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
