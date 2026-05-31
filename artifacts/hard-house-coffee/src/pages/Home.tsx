import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";
import SteamEffect from "@/components/SteamEffect";
import PremiumBanner from "@/components/PremiumBanner";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

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
      image: "/images/exp-community.jpg",
      buttonLabel: "Explore Coffee Culture",
      buttonHref: "/blog?cat=Coffee+Culture",
      steps: null as string[] | null,
      videoId: null as string | null,
      videoSrc: null as string | null,
    },
  },
  {
    src: "/images/barista-serve.jpg",
    label: "Craftsmanship",
    modal: {
      title: "How Great Coffee Is Made",
      text: "Great coffee does not happen by accident. It starts with quality beans, continues through the roast, comes alive in the grind, and finishes in the brew. Every step matters.",
      image: "/images/exp-craftsmanship.jpg",
      buttonLabel: "See Recommended",
      buttonHref: "/products",
      steps: ["Beans", "Roast", "Grind", "Brew"] as string[] | null,
      videoId: null as string | null,
      videoSrc: null as string | null,
    },
  },
  {
    src: "/images/milk-pour.png",
    label: "Precision",
    modal: {
      title: "Dialing In the Perfect Cup",
      text: "Small changes make a big difference. Grind size, water temperature, brew time, and coffee ratio all shape the final cup. Once you understand those details, your coffee becomes more consistent and more enjoyable.",
      image: "/images/exp-precision.jpg",
      buttonLabel: "View Brewing Guides",
      buttonHref: "/blog?cat=Brewing+Guides",
      steps: ["Grind Size", "Water Temp", "Brew Time", "Ratio"] as string[] | null,
      videoId: null as string | null,
      videoSrc: null as string | null,
    },
  },
  {
    src: "/images/dark-latte.jpg",
    label: "Atmosphere",
    modal: {
      title: "The Hard House Feel",
      text: "It's not just about coffee. It's about how it feels. The glow of the room, the smell of fresh grounds, the first sip, and the quiet moment before the day starts.",
      image: "/images/exp-atmosphere.jpg",
      buttonLabel: "Watch the Experience",
      buttonHref: null,
      steps: null as string[] | null,
      videoId: "Z6Dx-o3vfJY" as string | null,
      videoSrc: null as string | null,
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
    affiliateUrl: "https://amzn.to/4uU8Hho",
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
    affiliateUrl: "https://amzn.to/4nvZfxV",
    image: "/images/products/oracle-jet-main.jpg",
    hoverImage: "/images/products/oracle-jet-hover.jpg",
  },
];


function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [containerHovered, setContainerHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

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
            setLoaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);

    const handleEnded = () => setPlaying(false);
    video.addEventListener("ended", handleEnded);

    return () => {
      observer.disconnect();
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  // Button is visible when: paused (always), OR playing + container hovered
  const buttonVisible = !playing || containerHovered;

  return (
    <section style={{ backgroundColor: "#0b0b0b" }}>
      <div
        ref={containerRef}
        onMouseEnter={() => setContainerHovered(true)}
        onMouseLeave={() => { setContainerHovered(false); setBtnHovered(false); }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          aspectRatio: "16/9",
          overflow: "hidden",
          backgroundColor: "#0b0b0b",
          cursor: playing ? "default" : "default",
        }}
      >
        <video
          ref={videoRef}
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

        {/* Cinematic YouTube-style play overlay */}
        {loaded && (
          <>
            <style>{`
              @keyframes hhc-fade-in {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.92); }
                to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
              }
            `}</style>

            {/* Dark vignette — shows when paused, fades when playing */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.28)",
                opacity: playing ? 0 : 1,
                transition: "opacity 0.5s ease",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            <button
              onClick={togglePlay}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              title={playing ? "Pause" : "Play"}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) scale(${btnHovered ? 1.06 : 1})`,
                width: "168px",
                height: "72px",
                borderRadius: "16px",
                background: btnHovered
                  ? "rgba(8,8,8,0.88)"
                  : "rgba(8,8,8,0.72)",
                border: `1.5px solid ${btnHovered ? "rgba(212,184,150,0.85)" : "rgba(212,184,150,0.4)"}`,
                boxShadow: btnHovered
                  ? "0 0 40px rgba(161,79,31,0.5), 0 0 80px rgba(161,79,31,0.18), 0 8px 32px rgba(0,0,0,0.7)"
                  : "0 0 20px rgba(161,79,31,0.18), 0 6px 24px rgba(0,0,0,0.55)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                cursor: "pointer",
                zIndex: 3,
                opacity: buttonVisible ? 1 : 0,
                pointerEvents: buttonVisible ? "auto" : "none",
                transition: "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, opacity 0.4s ease",
                outline: "none",
                animation: !playing ? "hhc-fade-in 0.6s ease forwards" : "none",
              }}
            >
              {/* Play triangle */}
              {!playing && (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="white"
                  style={{ flexShrink: 0, marginLeft: "2px" }}
                >
                  <polygon points="5,2 22,12 5,22" />
                </svg>
              )}

              {/* Pause bars */}
              {playing && (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
                  <rect x="5" y="3" width="4" height="18" rx="1.5" />
                  <rect x="15" y="3" width="4" height="18" rx="1.5" />
                </svg>
              )}

              {/* Label */}
              <span
                style={{
                  color: "rgba(255,255,255,0.92)",
                  fontSize: "0.78rem",
                  fontFamily: "'Cinzel Decorative', serif",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  userSelect: "none",
                }}
              >
                {playing ? "Pause" : "Play"}
              </span>
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const [showAtmosphereVideo, setShowAtmosphereVideo] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const openTile = (idx: number) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveExperience(idx);
  };
  const closeTile = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveExperience(null);
      setShowAtmosphereVideo(false);
    }, 200);
  };
  const keepOpen = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setActiveExperience(null); setShowAtmosphereVideo(false); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    // Smoke appears first, then logo/text fade in through it at 0.5s
    const visTimer = setTimeout(() => setIsVisible(true), 1000);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => {
      clearTimeout(visTimer);
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
      <SteamEffect />
      <Helmet>
        <title>Hard House Coffee | Coffee Culture, Barista Lifestyle & Brewing Inspiration</title>
        <meta name="description" content="Hard House Coffee — your home for coffee culture, barista lifestyle, espresso gear reviews, brewing guides, and bean recommendations. Elevate every cup with expert insight and bold inspiration." />
        <meta name="keywords" content="coffee culture, barista lifestyle, espresso gear, brewing guides, coffee blog, specialty coffee, coffee reviews, bean picks, pour over, hard house coffee" />
        <meta property="og:title" content="Hard House Coffee | Coffee Culture, Barista Lifestyle & Brewing Inspiration" />
        <meta property="og:description" content="Coffee culture, barista lifestyle, espresso gear reviews, brewing inspiration, and bean picks for serious coffee lovers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hardhousecoffee.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hard House Coffee | Coffee Culture & Brewing Inspiration" />
        <meta name="twitter:description" content="Gear reviews, brewing guides, barista lifestyle content, and bean picks for serious espresso lovers." />
        <link rel="canonical" href="https://hardhousecoffee.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Hard House Coffee",
          "url": "https://hardhousecoffee.com",
          "description": "Coffee culture, barista lifestyle, espresso gear reviews, brewing guides, and bean recommendations for serious coffee lovers.",
          "publisher": {
            "@type": "Organization",
            "name": "Hard House Coffee",
            "url": "https://hardhousecoffee.com"
          }
        })}</script>
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
                fontWeight: 400,
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
            <div className="flex gap-3 justify-center flex-nowrap hero-buttons-row" style={{ marginBottom: "2.5rem" }}>
              <Link href="/blog">
                <button className="btn-primary">Explore the Blog</button>
              </Link>
              <Link href="/products">
                <button className="btn-secondary">Shop</button>
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
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "#0b0b0b", position: "relative" }}
      >
        <div className="max-w-6xl mx-auto text-center mb-8">
          <p className="section-subtitle">Our World</p>
          <div className="divider-orange mx-auto" />
          <h2 className="section-title inter-title mt-4">The Hard House Experience</h2>
          <p style={{ color: "#b0a090", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0" }}>
            Every cup we pour is a statement. Bold, deliberate, and unapologetically premium.
          </p>
        </div>

        {/* Banner: Now Brewing */}
        <PremiumBanner />

        {/* Tile grid */}
        <div className="max-w-6xl mx-auto mt-10" style={{ position: "relative" }}>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{
              transition: "opacity 0.3s ease",
              opacity: activeExperience !== null ? 0.18 : 1,
            }}
          >
            {experienceTiles.map((item, idx) => (
              <button
                key={idx}
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
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(161,79,31,0.65)";
                  const img = (e.currentTarget as HTMLElement).querySelector("img") as HTMLElement;
                  if (img) img.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(161,79,31,0.2)";
                  const img = (e.currentTarget as HTMLElement).querySelector("img") as HTMLElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.6s ease", display: "block" }}
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
                      transition: "color 0.2s ease",
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    onClick={(e) => { e.stopPropagation(); openTile(idx); }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#f2f2f2";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#d4b896";
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      openTile(idx);
                    }}
                    style={{
                      fontSize: "0.68rem",
                      color: "#d4b896",
                      letterSpacing: "0.06em",
                      opacity: 0,
                      transform: "translateY(6px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      fontWeight: 500,
                      userSelect: "none",
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 10,
                    }}
                    className="read-more-hint"
                  >
                    Explore →
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Hovering pop-up tile */}
          {activeExperience !== null && (() => {
            const tile = experienceTiles[activeExperience];
            const m = tile.modal;
            return (
              <div
                onMouseEnter={keepOpen}
                onMouseLeave={closeTile}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 50,
                  width: "min(780px, 95vw)",
                  animation: "popIn 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards",
                }}
              >
                <style>{`
                  @keyframes popIn {
                    from { opacity: 0; transform: translate(-50%, -46%) scale(0.94); }
                    to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                  }
                  @keyframes popInMobile {
                    from { opacity: 0; transform: translateY(20px) scale(0.96); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                  }
                  .hhc-modal-inner { display: flex; flex-direction: row; min-height: 360px; }
                  .hhc-modal-img-panel { flex: 0 0 38%; position: relative; overflow: hidden; }
                  @media (max-width: 600px) {
                    .hhc-modal-inner { flex-direction: column; min-height: unset; }
                    .hhc-modal-img-panel { flex: 0 0 160px; width: 100%; }
                  }
                `}</style>

                <div
                  className="hhc-modal-inner"
                  style={{
                    background: "linear-gradient(145deg, #1a110a, #0f0a07)",
                    border: "1px solid rgba(161,79,31,0.45)",
                    borderRadius: "14px",
                    boxShadow: "0 24px 70px rgba(0,0,0,0.85), 0 0 0 1px rgba(161,79,31,0.1)",
                    overflow: "hidden",
                  }}
                >
                  {/* Left image panel */}
                  <div className="hhc-modal-img-panel" style={{ position: "relative", overflow: "hidden" }}>
                    <img
                      src={m.image}
                      alt={m.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "brightness(0.75) saturate(0.9)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to right, transparent 55%, #1a110a)",
                      }}
                    />
                    <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                      <p
                        style={{
                          fontFamily: "'Cinzel Decorative', serif",
                          fontSize: "0.6rem",
                          letterSpacing: "0.2em",
                          color: "#a14f1f",
                          textTransform: "uppercase",
                        }}
                      >
                        {tile.label}
                      </p>
                    </div>
                  </div>

                  {/* Right content panel */}
                  <div
                    style={{
                      flex: 1,
                      padding: "2rem 1.75rem 1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.1rem",
                    }}
                  >
                    {/* Close */}
                    <button
                      onClick={() => { setActiveExperience(null); setShowAtmosphereVideo(false); }}
                      style={{
                        alignSelf: "flex-end",
                        background: "rgba(161,79,31,0.12)",
                        border: "1px solid rgba(161,79,31,0.25)",
                        borderRadius: "50%",
                        width: "28px",
                        height: "28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#8a6a50",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(161,79,31,0.28)";
                        el.style.color = "#d4b896";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(161,79,31,0.12)";
                        el.style.color = "#8a6a50";
                      }}
                      aria-label="Close"
                    >
                      ✕
                    </button>

                    {/* Video player — shown only for Atmosphere after clicking the button */}
                    {showAtmosphereVideo && (m.videoId || m.videoSrc) ? (
                      <>
                        <h3
                          style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "0.95rem",
                            color: "#f2f2f2",
                            lineHeight: 1.4,
                            marginTop: "-0.4rem",
                          }}
                        >
                          {m.title}
                        </h3>
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            borderRadius: "10px",
                            overflow: "hidden",
                            border: "1px solid rgba(161,79,31,0.35)",
                            background: "#0b0b0b",
                            flexShrink: 0,
                          }}
                        >
                          {m.videoSrc ? (
                            <video
                              src={m.videoSrc}
                              autoPlay
                              controls
                              playsInline
                              style={{
                                width: "100%",
                                display: "block",
                                borderRadius: "10px",
                              }}
                            />
                          ) : (
                            <div style={{ position: "relative", paddingBottom: "56.25%" }}>
                              <iframe
                                src={`https://www.youtube.com/embed/${m.videoId}?autoplay=1&rel=0&modestbranding=1`}
                                title="The Hard House Experience"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  border: "none",
                                }}
                              />
                            </div>
                          )}
                        </div>
                        {/* Back + nav buttons + social icons */}
                        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.6rem", marginTop: "auto" }}>
                          {/* Back */}
                          <button
                            onClick={() => setShowAtmosphereVideo(false)}
                            style={{
                              background: "transparent",
                              border: "1px solid rgba(161,79,31,0.3)",
                              borderRadius: "5px",
                              color: "#a89880",
                              fontSize: "0.72rem",
                              cursor: "pointer",
                              letterSpacing: "0.08em",
                              padding: "0.3rem 0.7rem",
                              textTransform: "uppercase",
                              fontWeight: 600,
                              transition: "all 0.2s",
                            }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#a14f1f"; el.style.color = "#d4b896"; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(161,79,31,0.3)"; el.style.color = "#a89880"; }}
                          >
                            <span style={{ marginRight: "0.3rem" }}>←</span>Back
                          </button>

                          {/* Blog */}
                          <Link href="/blog">
                            <button
                              onClick={() => { setActiveExperience(null); setShowAtmosphereVideo(false); window.scrollTo(0,0); }}
                              style={{
                                background: "transparent",
                                border: "1px solid rgba(161,79,31,0.3)",
                                borderRadius: "5px",
                                color: "#a89880",
                                fontSize: "0.72rem",
                                cursor: "pointer",
                                letterSpacing: "0.08em",
                                padding: "0.3rem 0.7rem",
                                textTransform: "uppercase",
                                fontWeight: 600,
                                transition: "all 0.2s",
                              }}
                              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#a14f1f"; el.style.borderColor = "#c06020"; el.style.color = "#fff"; }}
                              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.borderColor = "rgba(161,79,31,0.3)"; el.style.color = "#a89880"; }}
                            >
                              Blog
                            </button>
                          </Link>

                          {/* Shop */}
                          <Link href="/products">
                            <button
                              onClick={() => { setActiveExperience(null); setShowAtmosphereVideo(false); window.scrollTo(0,0); }}
                              style={{
                                background: "transparent",
                                border: "1px solid rgba(161,79,31,0.3)",
                                borderRadius: "5px",
                                color: "#a89880",
                                fontSize: "0.72rem",
                                cursor: "pointer",
                                letterSpacing: "0.08em",
                                padding: "0.3rem 0.7rem",
                                textTransform: "uppercase",
                                fontWeight: 600,
                                transition: "all 0.2s",
                              }}
                              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#a14f1f"; el.style.borderColor = "#c06020"; el.style.color = "#fff"; }}
                              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.borderColor = "rgba(161,79,31,0.3)"; el.style.color = "#a89880"; }}
                            >
                              Shop
                            </button>
                          </Link>

                          {/* Divider */}
                          <div style={{ width: "1px", height: "20px", background: "rgba(161,79,31,0.2)", margin: "0 0.1rem" }} />

                          {/* Instagram */}
                          <a
                            href="https://www.instagram.com/hardhousecoffee.official?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                              border: "1px solid rgba(161,79,31,0.3)",
                              color: "#a89880",
                              transition: "all 0.2s",
                              flexShrink: 0,
                            }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#a14f1f"; el.style.color = "#d4b896"; el.style.background = "rgba(161,79,31,0.12)"; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(161,79,31,0.3)"; el.style.color = "#a89880"; el.style.background = "transparent"; }}
                            aria-label="Instagram"
                          >
                            <FaInstagram size={14} />
                          </a>

                          {/* TikTok */}
                          <a
                            href="https://www.tiktok.com/@hardhousecoffee?_r=1&_t=ZP-96W4w42enMc"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                              border: "1px solid rgba(161,79,31,0.3)",
                              color: "#a89880",
                              transition: "all 0.2s",
                              flexShrink: 0,
                            }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#a14f1f"; el.style.color = "#d4b896"; el.style.background = "rgba(161,79,31,0.12)"; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(161,79,31,0.3)"; el.style.color = "#a89880"; el.style.background = "transparent"; }}
                            aria-label="TikTok"
                          >
                            <FaTiktok size={13} />
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Title */}
                        <h3
                          style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "1.1rem",
                            color: "#f2f2f2",
                            lineHeight: 1.4,
                            marginTop: "-0.4rem",
                          }}
                        >
                          {m.title}
                        </h3>

                        {/* Body text */}
                        <p style={{ color: "#a89880", fontSize: "0.88rem", lineHeight: 1.75 }}>
                          {m.text}
                        </p>

                        {/* Step pills */}
                        {m.steps && (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {m.steps.map((step, i) => (
                              <span
                                key={i}
                                style={{
                                  background: "rgba(161,79,31,0.13)",
                                  border: "1px solid rgba(161,79,31,0.3)",
                                  borderRadius: "20px",
                                  padding: "0.28rem 0.75rem",
                                  fontSize: "0.72rem",
                                  color: "#d4b896",
                                  letterSpacing: "0.06em",
                                  fontWeight: 500,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.4rem",
                                }}
                              >
                                <span
                                  style={{
                                    width: "16px",
                                    height: "16px",
                                    borderRadius: "50%",
                                    background: "rgba(161,79,31,0.3)",
                                    fontSize: "0.55rem",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#a14f1f",
                                    fontWeight: 700,
                                  }}
                                >
                                  {i + 1}
                                </span>
                                {step}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* CTA button */}
                        <div style={{ marginTop: "auto" }}>
                          {(m.videoId || m.videoSrc) ? (
                            <button
                              onClick={() => setShowAtmosphereVideo(true)}
                              className="btn-primary"
                              style={{ width: "100%", fontSize: "0.74rem", letterSpacing: "0.1em" }}
                            >
                              {m.buttonLabel}
                            </button>
                          ) : m.buttonHref ? (
                            <Link href={m.buttonHref}>
                              <button
                                onClick={() => setActiveExperience(null)}
                                className="btn-primary"
                                style={{ width: "100%", fontSize: "0.74rem", letterSpacing: "0.1em" }}
                              >
                                {m.buttonLabel}
                              </button>
                            </Link>
                          ) : (
                            <button
                              onClick={() => { setActiveExperience(null); setShowAtmosphereVideo(false); }}
                              className="btn-primary"
                              style={{ width: "100%", fontSize: "0.74rem", letterSpacing: "0.1em" }}
                            >
                              {m.buttonLabel}
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>

              </div>
            );
          })()}
        </div>
        <div style={{ marginTop: "2.5rem" }}>
          <PremiumBanner reverse phrase={"AROMA FROM THE GROUND UP \u00A0\u00A0\u2736\u00A0\u00A0 "} />
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2b1e16" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-subtitle">The Culture</p>
            <div className="divider-orange mx-auto" />
            <h2 className="section-title inter-title mt-4">Coffee Is a Way of Life</h2>
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
            <button className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.8rem 2.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              Read Our Blog
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
            <h2 className="section-title inter-title mt-4">From the Blog</h2>
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
            <p className="section-subtitle">Recommended Products</p>
            <div className="divider-orange mx-auto" />
            <h2 className="section-title inter-title mt-4">Top Espresso Machines</h2>
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
                    alt={`${product.name} — ${product.category} recommended by Hard House Coffee`}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.4s ease" }}
                  />
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} ${product.category} alternate view`}
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
                    <p style={{ fontSize: "0.68rem", color: "#c4b09a", textAlign: "center", letterSpacing: "0.01em", lineHeight: 1.4, marginTop: "4px" }}>
                      For the latest pricing and availability, view this product directly on Amazon.
                    </p>
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
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                color: "#f2f2f2",
                lineHeight: 1.3,
                textTransform: "uppercase",
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

      <PageNav nextPath="/blog" nextLabel="Read the Blog" />
      <Footer />
    </div>
  );
}
