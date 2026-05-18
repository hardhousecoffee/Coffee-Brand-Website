import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPostDarkRoast() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Top 5 Dark Roast Beans for Espresso in 2026 | Hard House Coffee</title>
        <meta name="description" content="Our top 5 dark roast bean picks for espresso in 2026 — from Sumatra Mandheling to French Roast. Find your bold, rich cup and stop settling for burnt coffee." />
        <meta property="og:title" content="Top 5 Dark Roast Beans for Espresso in 2026 | Hard House Coffee" />
        <meta property="og:description" content="Not all dark roasts are equal. Here are the five worth buying in 2026." />
      </Helmet>
      <Navbar />

      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}
      >
        <img
          src="/images/coffee-cheers.jpg"
          alt="Top 5 Dark Roast Beans for Espresso in 2026"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}
        >
          <p className="section-subtitle mb-3">Bean Picks</p>
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
            Top 5 Dark Roast Beans for Espresso in 2026
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>
            5 min read
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        {/* Intro */}
        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          If you want bold, rich espresso at home, your choice of beans matters more than anything else.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          Dark roast is where most people start, but not all dark roasts are created equal. Some taste
          smooth and full-bodied, while others taste burnt and flat.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          Here is what actually matters.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        {/* What Makes a Good Dark Roast */}
        <Section title="What Makes a Good Dark Roast">
          {[
            {
              label: "Flavor Balance",
              detail:
                "A good dark roast should taste bold, not burnt. Look for chocolate, caramel, or nutty notes instead of harsh bitterness.",
            },
            {
              label: "Freshness",
              detail:
                "Fresh beans produce better crema, better aroma, and better flavor. Always check the roast date if possible.",
            },
            {
              label: "Origin",
              detail:
                "Even dark roasts carry characteristics from where they are grown. That is what gives them unique flavor profiles.",
            },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        {/* Top Picks */}
        <Section title="Top Picks for 2026">
          {[
            {
              num: "1",
              name: "Sumatra Mandheling",
              desc: "Full-bodied, earthy, and low in acidity. Great for strong espresso lovers.",
            },
            {
              num: "2",
              name: "Colombia Supremo Dark Roast",
              desc: "Balanced and smooth with a slightly sweet finish.",
            },
            {
              num: "3",
              name: "Ethiopian Dark Roast",
              desc: "More complex than most dark roasts, with subtle fruit notes.",
            },
            {
              num: "4",
              name: "Italian Roast Blend",
              desc: "Classic espresso flavor. Bold, rich, and slightly smoky.",
            },
            {
              num: "5",
              name: "French Roast",
              desc: "Very dark and intense. Best for those who prefer strong, heavy coffee.",
            },
          ].map(({ num, name, desc }) => (
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
              <p style={{ color: "#b0a090" }}>{desc}</p>
            </div>
          ))}
        </Section>

        {/* Common Mistakes */}
        <Section title="Common Mistakes">
          {[
            "Using pre-ground coffee",
            "Ignoring grind size",
            "Keeping beans too long after opening",
          ].map((mistake) => (
            <div
              key={mistake}
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
              {mistake}
            </div>
          ))}
        </Section>

        {/* Final Thoughts */}
        <Section title="Final Thoughts">
          <p style={{ marginBottom: "1rem" }}>Good espresso starts with good beans.</p>
          <p style={{ marginBottom: "1rem" }}>
            Once you find a dark roast that fits your taste, everything else becomes easier.
          </p>
          <p>
            That is when your coffee starts to feel consistent and enjoyable.
          </p>
        </Section>

        <RelatedPosts posts={[
          { title: "Ethiopia vs. Colombia: A Complete Coffee Origin Guide", slug: "ethiopia-vs-colombia-a-complete-coffee-origin-guide", image: "/images/outdoor-coffee.jpg", category: "Bean Picks" },
          { title: "The Art of the Perfect Pour-Over", slug: "the-art-of-the-perfect-pour-over", image: "/images/pour-over-kettle.jpg", category: "Brewing Guides" },
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
            Ready to find your perfect roast?
          </p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            Browse our curated bean picks and gear on the site.
          </p>
          <Link href="/products">
            <button className="btn-primary">Shop Beans</button>
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
