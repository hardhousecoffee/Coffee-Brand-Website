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
        <meta name="description" content="Learn the story behind Hard House Coffee — built by coffee obsessives for people who refuse to settle for ordinary. Our mission, values, and why we love coffee." />
        <meta property="og:title" content="About Us | Hard House Coffee" />
        <meta property="og:description" content="Built by coffee obsessives for people who refuse to settle for ordinary." />
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
          <div className="divider-orange mx-auto" />
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
            <div className="divider-orange" />
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
              Hard House Coffee started as a simple obsession with the perfect cup. We spent years testing beans, dialing in machines, and learning everything we could about what separates a good cup from an unforgettable one.
            </p>
            <p style={{ color: "#b0a090", lineHeight: 1.8, marginBottom: "1rem" }}>
              What began in a small apartment with a second-hand espresso machine evolved into a platform dedicated to helping coffee lovers everywhere find their perfect brew.
            </p>
            <p style={{ color: "#b0a090", lineHeight: 1.8 }}>
              Today, Hard House Coffee is your trusted source for honest gear reviews, brewing guides, bean recommendations, and everything in between.
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
          <div className="divider-orange mx-auto" />
          <h2 className="section-title inter-title mt-4">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: "☕",
              title: "Uncompromising Quality",
              desc: "We test every product and try every technique before we recommend it. If we wouldn't use it ourselves, it doesn't make the cut.",
            },
            {
              icon: "🔍",
              title: "Radical Honesty",
              desc: "No fluff, no paid placements masquerading as reviews. Our opinions are our own, and we'll tell you exactly what we think.",
            },
            {
              icon: "🌱",
              title: "Deep Knowledge",
              desc: "We go beyond surface-level reviews. Our guides are built on real experience, hours of research, and a genuine love of coffee.",
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

        {/* Culture collage */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-20">
          {["/images/about-coffee-dog.png", "/images/about-coffee-cheers.jpg", "/images/about-coffee-heart.png"].map((img, i) => (
            <div
              key={i}
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(161,79,31,0.2)",
                aspectRatio: "1",
              }}
            >
              <img src={img} alt="Culture" className="w-full h-full object-cover" style={{ filter: "brightness(0.75)" }} />
            </div>
          ))}
        </div>

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
