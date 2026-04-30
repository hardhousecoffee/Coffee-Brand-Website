import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";

const heroSlides = [
  { src: "/images/cafe-alley.jpg", alt: "Hero Cafe Alley" },
  { src: "/images/aroma-beans.jpg", alt: "Aroma Coffee Beans" },
  { src: "/images/dark-latte.jpg", alt: "Dark Latte" },
  { src: "/images/bar-mug.jpg", alt: "Coffee at Bar" },
  { src: "/images/steamy-mug.jpg", alt: "Steamy Mug" },
  { src: "/images/espresso-machine.jpg", alt: "Espresso Machine" },
];

const experienceTiles = [
  {
    src: "/images/man-drinking.jpg",
    label: "Community",
    modal: {
      title: "The Culture Behind Coffee",
      text: "Coffee isn't just a drink — it's a ritual. It's early mornings, conversations, ideas, and moments that stick. This is where coffee becomes more than caffeine. It becomes connection.",
      image: "/images/couple-coffee.jpg",
      buttonLabel: "Explore Coffee Culture",
      buttonHref: "/blog",
      steps: null as string[] | null,
    },
  },
  {
    src: "/images/barista-serve.jpg",
    label: "Craftsmanship",
    modal: {
      title: "How Great Coffee Is Made",
      text: "Great coffee does not happen by accident. It starts with quality beans, continues through the roast, comes alive in the grind, and finishes in the brew. Every step matters.",
      image: "/images/coffee-grinder-closeup.jpg",
      buttonLabel: "See Recommended Gear",
      buttonHref: "/products",
      steps: ["Beans", "Roast", "Grind", "Brew"] as string[] | null,
    },
  },
  {
    src: "/images/milk-pour.png",
    label: "Precision",
    modal: {
      title: "Dialing In the Perfect Cup",
      text: "Small changes make a big difference. Grind size, water temperature, brew time, and coffee ratio all shape the final cup. Once you understand those details, your coffee becomes more consistent and more enjoyable.",
      image: "/images/pour-over-kettle.jpg",
      buttonLabel: "View Brewing Guides",
      buttonHref: "/blog",
      steps: ["Grind Size", "Water Temp", "Brew Time", "Ratio"] as string[] | null,
    },
  },
  {
    src: "/images/dark-latte.jpg",
    label: "Atmosphere",
    modal: {
      title: "The Hard House Feel",
      text: "It's not just about coffee. It's about how it feels. The glow of the room, the smell of fresh grounds, the first sip, and the quiet moment before the day starts.",
      image: "/images/cafe-alley.jpg",
      buttonLabel: "Discover the Experience",
      buttonHref: null,
      steps: null as string[] | null,
    },
  },
];

const cultureImages = [
  { src: "/images/man-drinking.jpg", caption: "Every sip tells a story." },
  { src: "/images/couple-coffee.jpg", caption: "Shared moments, bold flavors." },
  { src: "/images/outdoor-coffee.jpg", caption: "Grounded wherever you are." },
  { src: "/images/woman-coffee.jpg", caption: "Eyes open, world alive." },
];

const blogPosts = [
  {
    id: 1,
    category: "Gear Reviews",
    title: "Best Espresso Machines of 2026",
    slug: "best-espresso-machines-2026-guide-tested-and-ranked",
    desc: "We tested 12 machines from Breville, De'Longhi and more. Here's what stood out in taste, ease and value.",
    image: "/images/espresso-tattooed-hands.jpg",
    readTime: "8 min read",
  },
  {
    id: 2,
    category: "Brewing Guides",
    title: "The Art of the Perfect Pour-Over",
    slug: "the-art-of-the-perfect-pour-over",
    desc: "Unlock the nuanced flavors of single-origin beans with our step-by-step pour-over brewing guide.",
    image: "/images/aroma-beans.jpg",
    readTime: "6 min read",
  },
  {
    id: 3,
    category: "Bean Recommendations",
    title: "Top 5 Dark Roast Beans for Espresso",
    slug: "top-5-dark-roast-beans-for-espresso-in-2026",
    desc: "Sourced from Ethiopia, Colombia and Sumatra — these dark roasts deliver the bold intensity you crave.",
    image: "/images/coffee-cheers.jpg",
    readTime: "5 min read",
  },
  {
    id: 4,
    category: "Coffee Culture",
    title: "The Rise of Specialty Coffee Bars",
    slug: "the-rise-of-specialty-coffee-bars",
    desc: "Third-wave coffee culture is reshaping how we experience our daily brew. We explore the movement.",
    image: "/images/black-cafe.jpg",
    readTime: "7 min read",
  },
];

const products = [
  {
    id: 1,
    name: "De'Longhi La Specialista Touch",
    tagline: "Cold brew to espresso. One machine, limitless craft.",
    price: "$999",
    originalPrice: "$1,199",
    rating: 4.8,
    reviews: 2134,
    badge: "Editor's Choice",
    badgeColor: "#8b2f2f",
    affiliateUrl: "https://amzn.to/4dfl8y3",
    image: "/images/products/la-specialista-main.jpg",
    hoverImage: "/images/products/la-specialista-hover.jpg",
  },
  {
    id: 2,
    name: "Ninja Luxe Café Pro",
    tagline: "Premium café drinks. Ninja-engineered precision.",
    price: "$279",
    originalPrice: "$349",
    rating: 4.5,
    reviews: 6823,
    badge: "Best Value",
    badgeColor: "#a14f1f",
    image: "/images/products/ninja-luxe-main.jpg",
    hoverImage: "/images/products/ninja-luxe-hover.jpg",
  },
  {
    id: 3,
    name: "Breville Oracle Jet",
    tagline: "Hands-free barista. Zero compromise.",
    price: "$1,999",
    originalPrice: "$2,299",
    rating: 4.9,
    reviews: 987,
    badge: "Top Rated",
    badgeColor: "#5a3a1a",
    image: "/images/products/oracle-jet-main.jpg",
    hoverImage: "/images/products/oracle-jet-hover.jpg",
  },
];


function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.src = "/videos/homepage.mp4";
            video.load();
            video.play().catch(() => {});
            setLoaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <section style={{ backgroundColor: "#0b0b0b" }}>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          aspectRatio: "16/9",
          overflow: "hidden",
          backgroundColor: "#0b0b0b",
        }}
      >
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(11,11,11,0.1) 0%, transparent 15%, transparent 80%, rgba(11,11,11,0.6) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Mute toggle */}
        {loaded && (
          <button
            onClick={toggleMute}
            title={muted ? "Unmute" : "Mute"}
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              background: "rgba(11,11,11,0.65)",
              border: "1px solid rgba(242,242,242,0.2)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s ease",
              zIndex: 3,
              color: "#f2f2f2",
              fontSize: "16px",
            }}
          >
            {muted ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <polygon points="3,1 15,8 3,15" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="1" width="4" height="14" rx="1" />
                <rect x="10" y="1" width="4" height="14" rx="1" />
              </svg>
            )}
          </button>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveExperience(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeExperience !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeExperience]);

  useEffect(() => {
    setIsVisible(true);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2" }}>
      <Helmet>
        <title>Hard House Coffee | Premium Espresso Gear, Reviews & Brewing Guides</title>
        <meta name="description" content="Hard House Coffee — gear reviews, brewing guides, and bean picks for serious espresso lovers. Find your perfect coffee setup and elevate every cup." />
        <meta property="og:title" content="Hard House Coffee | Premium Espresso Gear, Reviews & Brewing Guides" />
        <meta property="og:description" content="Gear reviews, brewing guides, and bean picks for serious espresso lovers." />
      </Helmet>
      <Navbar />

      {/* HERO SLIDESHOW */}
      <section className="relative w-full h-screen overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 slide-fade"
            style={{
              opacity: currentSlide === idx ? 1 : 0,
              zIndex: currentSlide === idx ? 1 : 0,
              transition: "opacity 1.4s ease-in-out",
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.65)" }}
            />
          </div>
        ))}

        {/* SVG filter: red colorization */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <filter id="bloody-orange" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="0.277 0.277 0.277 0 0
                        0.241 0.241 0.241 0 0
                        0.196 0.196 0.196 0 0
                        0     0     0     1 0"
              />
            </filter>
          </defs>
        </svg>

        {/* Dark gradient overlay */}
        <div className="hero-overlay absolute inset-0" style={{ zIndex: 2 }} />

        {/* Hero content */}
        <div
          className="hero-content-root absolute inset-0 text-center px-6"
          style={{ zIndex: 3 }}
        >
          {/* Logo — centered horizontally, sits in upper portion */}
          <div
            className="hero-logo-wrap"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -52%)",
              opacity: isVisible ? 1 : 0,
              transition: "opacity 1.2s ease",
            }}
          >
            <img
              src="/images/logo-icon.png"
              alt="Hard House Coffee"
              className="hero-logo-img"
              style={{
                width: "auto",
                filter: "url(#bloody-orange)",
                mixBlendMode: "screen",
              }}
            />
          </div>

          {/* Text block — pinned toward bottom of hero */}
          <div
            className="hero-text-block"
            style={{
              position: "absolute",
              bottom: "10%",
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s",
            }}
          >
            {/* Single-line brand title */}
            <h1
              className="hero-title"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1.3rem, 3.5vw, 3.2rem)",
                fontWeight: 700,
                color: "#f2f2f2",
                textShadow: [
                  "0 2px 16px rgba(0,0,0,0.8)",
                  "0 0 12px rgba(164,87,58,0.55)",
                  "0 0 28px rgba(164,87,58,0.35)",
                  "0 0 55px rgba(164,87,58,0.18)",
                  "0 0 90px rgba(164,87,58,0.09)",
                ].join(", "),
                letterSpacing: "0.12em",
                whiteSpace: "nowrap",
                lineHeight: 1,
                marginBottom: "1rem",
              }}
            >
              HARD HOUSE COFFEE
            </h1>

            <div
              style={{
                width: "70px",
                height: "2px",
                background: "linear-gradient(to right, #8b2f2f, #a14f1f)",
                marginBottom: "1rem",
              }}
            />
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(1.5rem, 3.2vw, 2.8rem)",
                color: "#d4b896",
                fontWeight: 600,
                textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                marginBottom: "2rem",
                lineHeight: 1.2,
              }}
            >
              Aroma From the Ground Up!
            </p>
            <div className="flex gap-3 justify-center flex-nowrap hero-buttons-row">
              <Link href="/blog">
                <button className="btn-primary">Explore the Blog</button>
              </Link>
              <Link href="/products">
                <button className="btn-secondary">Shop Gear</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div
          className="absolute bottom-8 left-1/2 flex gap-2"
          style={{ transform: "translateX(-50%)", zIndex: 4 }}
        >
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              style={{
                width: currentSlide === idx ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: currentSlide === idx ? "#a14f1f" : "rgba(242,242,242,0.4)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>
      </section>

      {/* VIDEO SECTION */}
      <VideoSection />

      {/* FEATURED GRID */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0b0b0b" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-subtitle">Our World</p>
            <div className="divider-orange mx-auto" />
            <h2 className="section-title mt-4">The Hard House Experience</h2>
            <p style={{ color: "#b0a090", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0" }}>
              Every cup we pour is a statement. Bold, deliberate, and unapologetically premium.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {experienceTiles.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveExperience(idx)}
                className="group relative overflow-hidden text-left"
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(161,79,31,0.2)",
                  aspectRatio: "3/4",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease",
                  background: "none",
                  padding: 0,
                  width: "100%",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(161,79,31,0.7)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(161,79,31,0.2)")}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.6s ease", display: "block" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div
                  className="absolute inset-0 flex flex-col items-start justify-end p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(11,11,11,0.92) 0%, transparent 60%)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      color: "#a14f1f",
                      textTransform: "uppercase",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.68rem",
                      color: "#d4b896",
                      letterSpacing: "0.06em",
                      opacity: 0,
                      transform: "translateY(6px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      fontWeight: 500,
                    }}
                    className="read-more-hint"
                  >
                    Explore →
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2b1e16" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-subtitle">The Culture</p>
            <div className="divider-orange mx-auto" />
            <h2 className="section-title mt-4">Coffee Is a Way of Life</h2>
            <p style={{ color: "#b0a090", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0" }}>
              More than a beverage — it's a ritual, a community, and a constant pursuit of the perfect cup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cultureImages.map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden"
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(161,79,31,0.2)",
                  aspectRatio: "16/10",
                }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                  style={{
                    transition: "transform 0.6s ease",
                    filter: "brightness(0.8)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.04)";
                    e.currentTarget.style.filter = "brightness(0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "brightness(0.8)";
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{
                    background: "linear-gradient(to top, rgba(11,11,11,0.9) 0%, transparent 100%)",
                  }}
                >
                  <p
                    style={{
                      color: "#f2f2f2",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    "{item.caption}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAY GROUNDED */}
      <section
        className="relative py-32 px-6 text-center overflow-hidden"
        style={{ backgroundColor: "#0b0b0b" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/coffee-oclock.png')",
            backgroundSize: "cover",
            backgroundPosition: "65% 75%",
            filter: "brightness(0.25)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(11,11,11,0.6)" }} />
        <div className="relative" style={{ zIndex: 2 }}>
          <p className="section-subtitle" style={{ color: "#a14f1f" }}>
            Stay Grounded
          </p>
          <div className="divider-orange mx-auto" />
          <h2
            className="mt-4 mb-6"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
              color: "#f2f2f2",
            }}
          >
            It's Always Coffee O'Clock
          </h2>
          <p
            style={{
              color: "#b0a090",
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
              fontSize: "1.05rem",
            }}
          >
            Whether it's 5am or midnight, Hard House Coffee is your anchor. Bold, consistent, and always worth savoring.
          </p>
          <Link href="/blog">
            <button className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.8rem 2.2rem" }}>
              Read Our Blog
            </button>
          </Link>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0b0b0b" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-subtitle">Coffee Knowledge</p>
            <div className="divider-orange mx-auto" />
            <h2 className="section-title mt-4">From the Blog</h2>
            <p style={{ color: "#b0a090", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0" }}>
              Gear reviews, brewing guides, bean recommendations, and the culture behind every cup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="card-dark flex flex-col">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div
                    className="absolute top-3 left-3 px-2 py-1"
                    style={{
                      background: "#8b2f2f",
                      borderRadius: "4px",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#f2f2f2",
                      fontWeight: 600,
                    }}
                  >
                    {post.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p style={{ fontSize: "0.7rem", color: "#a14f1f", marginBottom: "0.5rem" }}>
                    {post.readTime}
                  </p>
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#f2f2f2",
                      lineHeight: 1.4,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#b0a090",
                      lineHeight: 1.6,
                      flex: 1,
                      marginBottom: "1.2rem",
                    }}
                  >
                    {post.desc}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <button className="btn-primary w-full" style={{ fontSize: "0.75rem" }}>
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog">
              <button className="btn-secondary">View All Articles</button>
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT RECOMMENDATIONS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2b1e16" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-subtitle">Recommended Gear</p>
            <div className="divider-orange mx-auto" />
            <h2 className="section-title mt-4">Top Espresso Machines</h2>
            <p style={{ color: "#b0a090", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0" }}>
              We've tested the best machines so you don't have to. These are our top picks for every budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col"
                style={{
                  background: "#131313",
                  borderRadius: "8px",
                  border: "1px solid rgba(161,79,31,0.25)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 8px 32px rgba(161,79,31,0.25)";
                  el.style.borderColor = "rgba(161,79,31,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "rgba(161,79,31,0.25)";
                }}
              >
                {/* Product image with hover swap */}
                <div
                  className="relative"
                  style={{
                    height: "220px",
                    overflow: "hidden",
                    borderBottom: "1px solid rgba(161,79,31,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    const imgs = e.currentTarget.querySelectorAll("img");
                    if (imgs[1]) { (imgs[0] as HTMLElement).style.opacity = "0"; (imgs[1] as HTMLElement).style.opacity = "1"; }
                  }}
                  onMouseLeave={(e) => {
                    const imgs = e.currentTarget.querySelectorAll("img");
                    if (imgs[1]) { (imgs[0] as HTMLElement).style.opacity = "1"; (imgs[1] as HTMLElement).style.opacity = "0"; }
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.4s ease" }}
                  />
                  <img
                    src={product.hoverImage}
                    alt={product.name}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0, transition: "opacity 0.4s ease" }}
                  />
                  <div
                    className="absolute top-3 left-3 px-2 py-1"
                    style={{
                      background: product.badgeColor,
                      borderRadius: "4px",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#f2f2f2",
                      fontWeight: 700,
                      zIndex: 2,
                    }}
                  >
                    {product.badge}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: "0.4rem",
                    }}
                  >
                    <a
                      href={(product as any).affiliateUrl || "#"}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      style={{ color: "#f2f2f2", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4b896")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#f2f2f2")}
                    >
                      {product.name}
                    </a>
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "#b0a090", marginBottom: "0.8rem" }}>
                    {product.tagline}
                  </p>

                  {/* Stars */}
                  <div className="flex items-center gap-2 mb-3">
                    <div style={{ color: "#a14f1f" }}>
                      {"★".repeat(Math.floor(product.rating))}
                      {product.rating % 1 >= 0.5 ? "½" : ""}
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "#b0a090" }}>
                      {product.rating} ({product.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <p style={{ fontSize: "1.3rem", fontWeight: 700, color: "#f2f2f2" }}>
                      {product.price}
                    </p>
                    {product.originalPrice && (
                      <p style={{ fontSize: "0.85rem", color: "#7a6a5a", textDecoration: "line-through" }}>
                        {product.originalPrice}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    <a
                      href={(product as any).affiliateUrl || "#"}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="btn-primary w-full" style={{ fontSize: "0.75rem" }}>
                        Buy Now on Amazon
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products">
              <button className="btn-secondary">View All Products</button>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG PHOTO CTA */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: "#0b0b0b" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-subtitle" style={{ color: "#a14f1f" }}>
              Coffee & Community
            </p>
            <div className="divider-orange" />
            <h2
              className="mt-4 mb-6"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                color: "#f2f2f2",
                lineHeight: 1.3,
              }}
            >
              Join the Hard House Coffee Movement
            </h2>
            <p style={{ color: "#b0a090", lineHeight: 1.7, marginBottom: "2rem" }}>
              Follow along for weekly brewing guides, gear breakdowns, and stories from the coffee world. 
              Hard House is more than a brand — it's a mindset for people who take their coffee seriously.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/blog">
                <button className="btn-primary">Start Reading</button>
              </Link>
              <Link href="/about">
                <button className="btn-secondary">Our Story</button>
              </Link>
            </div>
          </div>
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "8px",
              border: "1px solid rgba(161,79,31,0.3)",
              aspectRatio: "4/3",
            }}
          >
            <img
              src="/images/blog-laptop.png"
              alt="Coffee Blogging"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.85)" }}
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE MODALS */}
      {activeExperience !== null && (() => {
        const tile = experienceTiles[activeExperience];
        const m = tile.modal;
        return (
          <div
            onClick={() => setActiveExperience(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "rgba(0,0,0,0.82)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              backdropFilter: "blur(6px)",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#140e0a",
                border: "1px solid rgba(161,79,31,0.35)",
                borderRadius: "12px",
                maxWidth: "860px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                display: "flex",
                flexDirection: "row",
                boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
              }}
            >
              {/* LEFT — image */}
              <div
                style={{
                  flex: "0 0 42%",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "12px 0 0 12px",
                  minHeight: "420px",
                }}
              >
                <img
                  src={m.image}
                  alt={m.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.8)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, transparent 60%, #140e0a)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      color: "#a14f1f",
                      textTransform: "uppercase",
                    }}
                  >
                    {tile.label}
                  </p>
                </div>
              </div>

              {/* RIGHT — content */}
              <div
                style={{
                  flex: 1,
                  padding: "2.5rem 2rem 2rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                }}
              >
                {/* Close button */}
                <button
                  onClick={() => setActiveExperience(null)}
                  style={{
                    alignSelf: "flex-end",
                    background: "none",
                    border: "none",
                    color: "#7a6050",
                    fontSize: "1.4rem",
                    cursor: "pointer",
                    lineHeight: 1,
                    padding: "0.25rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#d4b896")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7a6050")}
                  aria-label="Close"
                >
                  ✕
                </button>

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                      fontSize: "1.3rem",
                      color: "#f2f2f2",
                      marginBottom: "1.1rem",
                      lineHeight: 1.35,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    style={{
                      color: "#b0a090",
                      fontSize: "0.93rem",
                      lineHeight: 1.75,
                      marginBottom: m.steps ? "1.6rem" : "0",
                    }}
                  >
                    {m.text}
                  </p>

                  {m.steps && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.75rem",
                      }}
                    >
                      {m.steps.map((step, i) => (
                        <div
                          key={i}
                          style={{
                            background: "rgba(161,79,31,0.1)",
                            border: "1px solid rgba(161,79,31,0.25)",
                            borderRadius: "6px",
                            padding: "0.6rem 0.9rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                          }}
                        >
                          <span
                            style={{
                              width: "22px",
                              height: "22px",
                              borderRadius: "50%",
                              background: "rgba(161,79,31,0.25)",
                              border: "1px solid rgba(161,79,31,0.5)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              color: "#a14f1f",
                              fontWeight: 700,
                              flexShrink: 0,
                            }}
                          >
                            {i + 1}
                          </span>
                          <span style={{ color: "#d4b896", fontSize: "0.78rem", letterSpacing: "0.04em", fontWeight: 500 }}>
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {m.buttonHref ? (
                  <Link href={m.buttonHref}>
                    <button
                      onClick={() => setActiveExperience(null)}
                      className="btn-primary"
                      style={{ width: "100%", fontSize: "0.78rem", letterSpacing: "0.1em" }}
                    >
                      {m.buttonLabel}
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => setActiveExperience(null)}
                    className="btn-primary"
                    style={{ width: "100%", fontSize: "0.78rem", letterSpacing: "0.1em" }}
                  >
                    {m.buttonLabel}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      <PageNav nextPath="/blog" nextLabel="Read the Blog" />
      <Footer />
    </div>
  );
}
