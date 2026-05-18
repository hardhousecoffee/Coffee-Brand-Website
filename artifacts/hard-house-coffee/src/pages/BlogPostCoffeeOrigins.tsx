import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPostCoffeeOrigins() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Ethiopia vs. Colombia: A Complete Coffee Origin Guide | Hard House Coffee</title>
        <meta name="description" content="Ethiopia or Colombia? Compare two of the world's most popular coffee origins and discover which one matches your taste, brewing style, and flavor preferences." />
        <meta property="og:title" content="Ethiopia vs. Colombia: A Complete Coffee Origin Guide | Hard House Coffee" />
        <meta property="og:description" content="Compare Ethiopia and Colombia coffee origins to find your perfect match." />
      </Helmet>
      <Navbar />

      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}
      >
        <img
          src="/images/outdoor-coffee.jpg"
          alt="Ethiopia vs Colombia: A Complete Coffee Origin Guide"
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
            Ethiopia vs. Colombia: A Complete Coffee Origin Guide
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>
            8 min read
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        {/* Intro */}
        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          The origin of your coffee plays a major role in how it tastes.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          Two of the most popular coffee origins are Ethiopia and Colombia, and they offer very
          different flavor experiences.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        {/* Ethiopian Coffee */}
        <Section title="Ethiopian Coffee">
          {[
            {
              label: "Flavor Profile",
              detail: "Bright, fruity, and sometimes floral.",
            },
            {
              label: "Best For",
              detail: "Pour-over methods and people who enjoy more complex flavors.",
            },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        {/* Colombian Coffee */}
        <Section title="Colombian Coffee">
          {[
            {
              label: "Flavor Profile",
              detail: "Smooth, balanced, and slightly sweet with chocolate notes.",
            },
            {
              label: "Best For",
              detail: "Espresso, drip coffee, and everyday drinking.",
            },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        {/* Key Differences */}
        <Section title="Key Differences">
          {[
            "Ethiopia tends to be more acidic and complex.",
            "Colombia tends to be smoother and more balanced.",
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

        {/* Which One Should You Choose */}
        <Section title="Which One Should You Choose">
          {[
            "If you like bold and smooth coffee, go with Colombia.",
            "If you enjoy lighter, more complex flavors, try Ethiopia.",
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
          <p style={{ marginBottom: "1rem" }}>There is no right or wrong choice.</p>
          <p style={{ marginBottom: "1rem" }}>
            The best option is the one that matches your taste.
          </p>
          <p>
            Exploring different origins is one of the easiest ways to better understand coffee.
          </p>
        </Section>

        <RelatedPosts posts={[
          { title: "Top 5 Dark Roast Beans for Espresso in 2026", slug: "top-5-dark-roast-beans-for-espresso-in-2026", image: "/images/coffee-cheers.jpg", category: "Bean Picks" },
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
            Find your perfect origin.
          </p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            Browse our curated bean selection and discover what suits your taste.
          </p>
          <Link href="/products">
            <button className="btn-primary">Shop Products</button>
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
