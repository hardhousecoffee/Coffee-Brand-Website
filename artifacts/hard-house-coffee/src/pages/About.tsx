import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";
import { Link } from "wouter";

export default function About() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>About Us | Hard House Coffee</title>
        <meta name="description" content="Learn how Hard House Coffee researches brewing guides and product comparisons, handles affiliate relationships, and distinguishes research from hands-on testing." />
        <meta property="og:title" content="About Us | Hard House Coffee" />
        <meta property="og:description" content="The publication, values, and research methodology behind Hard House Coffee." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <div
        className="relative pt-32 pb-10 px-6 text-center overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/cafe-alley.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.25)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(11,11,11,0.4), rgba(11,11,11,0.95))" }} />
        <div className="relative" style={{ zIndex: 2 }}>
          <p className="section-subtitle" style={{ color: "#a14f1f" }}>Our Story</p>
          <h1
            className="mt-4"
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(2rem,5vw,4rem)",
              color: "#f2f2f2",
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            Built on Bold Coffee
          </h1>
          <p style={{ color: "#b0a090", maxWidth: "500px", margin: "1.5rem auto 0", lineHeight: 1.7 }}>
            Hard House Coffee was built for people who take their coffee seriously — and refuse to settle for anything less than extraordinary.
          </p>
        </div>
      </div>

      {/* Story section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="section-subtitle" style={{ color: "#a14f1f" }}>The Beginning</p>
            <h2
              className="mt-4 mb-6"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                color: "#f2f2f2",
                lineHeight: 1.3,
              }}
            >
              Aroma From the Ground Up
            </h2>
            <p style={{ color: "#b0a090", lineHeight: 1.8, marginBottom: "1rem" }}>
              Hard House Coffee is an independent coffee publication focused on practical brewing
              guides, equipment comparisons, bean education, and the culture around the cup.
            </p>
            <p style={{ color: "#b0a090", lineHeight: 1.8, marginBottom: "1rem" }}>
              The goal is to make complicated buying and brewing decisions easier to understand
              without pretending that one recipe, roast, or machine is right for everyone.
            </p>
            <p style={{ color: "#b0a090", lineHeight: 1.8 }}>
              Articles are published under the Hard House Coffee name. When guidance is based on
              research rather than direct product use, the article says so plainly.
            </p>
          </div>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              aspectRatio: "4/3",
              position: "relative",
              maskImage: "radial-gradient(ellipse 92% 88% at 50% 50%, black 48%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 92% 88% at 50% 50%, black 48%, transparent 100%)",
            }}
          >
            <img
              src="/images/about-aroma-desk.png"
              alt="Hard House Coffee desk scene"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.82) saturate(1.05)" }}
            />
            {/* Edge vignette — darkens all four sides */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: [
                  "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 38%, rgba(11,11,11,0.55) 72%, rgba(11,11,11,0.92) 100%)",
                ].join(","),
                pointerEvents: "none",
              }}
            />
            {/* Steam wisps overlay */}
            <div className="about-steam-overlay" aria-hidden="true">
              <span className="steam-wisp steam-wisp-1" />
              <span className="steam-wisp steam-wisp-2" />
              <span className="steam-wisp steam-wisp-3" />
              <span className="steam-wisp steam-wisp-4" />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-14">
          <p className="section-subtitle" style={{ color: "#a14f1f" }}>What We Stand For</p>
          <h2 className="section-title inter-title mt-4">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: "☕",
              title: "Useful Detail",
              desc: "Guides focus on repeatable recipes, meaningful specifications, limitations, and the buyer questions that change a decision.",
            },
            {
              icon: "🔍",
              title: "Clear Evidence",
              desc: "Research-based comparisons are labeled as research. Hands-on testing is claimed only when the publication can substantiate what was tested and how.",
            },
            {
              icon: "🌱",
              title: "Editorial Independence",
              desc: "Affiliate relationships are disclosed. A potential commission does not purchase placement or change the comparison criteria used in an article.",
            },
          ].map((val) => (
            <div
              key={val.title}
              className="p-8 text-center"
              style={{
                background: "#131313",
                borderRadius: "8px",
                border: "1px solid rgba(161,79,31,0.2)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{val.icon}</div>
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#f2f2f2",
                  letterSpacing: "0.05em",
                  marginBottom: "0.8rem",
                  textTransform: "uppercase",
                }}
              >
                {val.title}
              </h3>
              <p style={{ color: "#b0a090", fontSize: "0.85rem", lineHeight: 1.7 }}>{val.desc}</p>
            </div>
          ))}
        </div>

        <section
          id="methodology"
          style={{
            scrollMarginTop: "110px",
            marginBottom: "5rem",
            padding: "2rem",
            background: "#131313",
            border: "1px solid rgba(161,79,31,0.25)",
            borderRadius: "10px",
          }}
        >
          <p className="section-subtitle" style={{ color: "#a14f1f" }}>Editorial Standards</p>
          <h2
            className="inter-title mt-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)",
              color: "#f2f2f2",
              marginBottom: "1.25rem",
            }}
          >
            Research & Recommendation Methodology
          </h2>
          <div style={{ color: "#b0a090", lineHeight: 1.85, fontSize: "0.95rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              Hard House Coffee starts with the reader’s use case: drink type, experience level,
              available time, counter space, maintenance tolerance, and total setup budget.
              Product comparisons then consider documented specifications, manufacturer guidance,
              warranty and service information, workflow, known design tradeoffs, and whether the
              product solves the stated problem.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Research-based analysis is not presented as hands-on testing. When Hard House Coffee
              has not personally used a product, the article avoids first-person ownership,
              tasting, durability, and performance claims. Specifications, prices, availability,
              and model details can change, so time-sensitive information is qualified and readers
              are directed to confirm current details with the manufacturer or retailer.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Recommendations explain strengths, limitations, who a product or method suits, and
              who should skip it. No product can be evaluated independently of the complete setup:
              grinders, water, coffee freshness, technique, maintenance, and local service often
              matter as much as the headline feature.
            </p>
            <p>
              Some links may earn Hard House Coffee a commission at no additional cost to the
              reader. Affiliate relationships do not guarantee inclusion. See the{" "}
              <Link href="/disclaimer" style={{ color: "#d4b896", textDecoration: "underline" }}>
                full affiliate disclosure and accuracy notice
              </Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div
          className="text-center py-20 px-8"
          style={{
            position: "relative",
            borderRadius: "12px",
            border: "1px solid rgba(161,79,31,0.3)",
            overflow: "hidden",
            minHeight: "340px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* YouTube video background — muted, autoplay, looped, no controls */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/wzEiZdcss88?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&playsinline=1&modestbranding=1&rel=0&showinfo=0&playlist=wzEiZdcss88"
              title="Espresso cinematic background"
              allow="autoplay; encrypted-media"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "200%",
                height: "200%",
                transform: "translate(-50%, -50%)",
                border: "none",
                pointerEvents: "none",
              }}
            />
          </div>
          {/* Dark gradient overlay for text legibility */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(11,11,11,0.78) 0%, rgba(11,11,11,0.58) 50%, rgba(11,11,11,0.88) 100%)",
              pointerEvents: "none",
            }}
          />
          {/* Content sits above the overlay */}
          <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
            <h2
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                color: "#f2f2f2",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              Ready to Elevate Your Coffee?
            </h2>
            <p style={{ color: "#d4c8bb", maxWidth: "440px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              Explore our guides and gear recommendations to find your perfect setup.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/blog">
                <button className="btn-primary">Read the Blog</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PageNav nextPath="/products" nextLabel="Shop" />
      <Footer />
    </div>
  );
}
