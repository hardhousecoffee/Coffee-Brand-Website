import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostColdBrew() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Cold Brew Mastery: A Complete Home Guide | Hard House Coffee</title>
        <meta name="description" content="Learn how to make smooth, low-acid cold brew coffee at home with our complete step-by-step guide. Minimal effort, consistent results — especially in warmer weather." />
        <meta property="og:title" content="Cold Brew Mastery: A Complete Home Guide | Hard House Coffee" />
        <meta property="og:description" content="Cold brew is easier than you think. Here is the complete home guide." />
      </Helmet>
      <Navbar />

      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}
      >
        <img
          src="/images/milk-pour.png"
          alt="Cold Brew Mastery: A Complete Home Guide"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}
        >
          <p className="section-subtitle mb-3">Brewing Guides</p>
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
            Cold Brew Mastery: A Complete Home Guide
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>
            9 min read
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        {/* Intro */}
        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Cold brew is not the same as iced coffee.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          It is smoother, less acidic, and easier to make than most people think.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        {/* Why Cold Brew Is Different */}
        <Section title="Why Cold Brew Is Different">
          <p style={{ marginBottom: "1rem" }}>
            Cold brew is made by steeping coffee grounds in cold water for an extended period of time.
          </p>
          <p>
            Because there is no heat involved, the result is less bitterness and a smoother taste.
          </p>
        </Section>

        {/* How to Make Cold Brew */}
        <Section title="How to Make Cold Brew">
          {[
            {
              step: "Step One: Use Coarse Grounds",
              detail: "The grind should be similar to sea salt.",
            },
            {
              step: "Step Two: Mix Coffee and Water",
              detail:
                "Use a ratio of one part coffee to four parts water for concentrate, or one to eight for ready-to-drink.",
            },
            {
              step: "Step Three: Let It Steep",
              detail: "Leave it for twelve to twenty-four hours.",
            },
            {
              step: "Step Four: Strain",
              detail: "Filter out the grounds using a strainer or filter.",
            },
          ].map(({ step, detail }) => (
            <div
              key={step}
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(161,79,31,0.1)",
              }}
            >
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{step}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        {/* Tips */}
        <Section title="Tips for Better Results">
          {[
            "Use fresh beans",
            "Store it in the refrigerator",
            "Adjust strength based on your preference",
          ].map((tip) => (
            <div
              key={tip}
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
              {tip}
            </div>
          ))}
        </Section>

        {/* Final Thoughts */}
        <Section title="Final Thoughts">
          <p style={{ marginBottom: "1rem" }}>
            Cold brew is one of the simplest ways to improve your coffee at home.
          </p>
          <p>
            It requires minimal effort and delivers consistent results, especially in warmer weather.
          </p>
        </Section>

<RecommendedBeans variant="cold-brew" />
        <RelatedPosts posts={[
          { title: "The Art of the Perfect Pour-Over", slug: "the-art-of-the-perfect-pour-over", image: "/images/pour-over-kettle.jpg", category: "Brewing Guides" },
          { title: "Why Every Coffee Lover Needs a Grinder First", slug: "why-every-coffee-lover-needs-a-grinder-first-2026-guide", image: "/images/coffee-grinder-beans.png", category: "Coffee Culture" },
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
            Ready to brew at home?
          </p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            Browse our recommended gear and beans to get started.
          </p>
          <Link href="/products">
            <button className="btn-primary">Shop</button>
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
