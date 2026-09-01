import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";
import SteamEffect from "@/components/SteamEffect";
import SteamEffectSVG from "@/components/SteamEffectSVG";
import PremiumBanner from "@/components/PremiumBanner";
import { useIsMobile } from "@/hooks/use-mobile";

const heroSlides = [
  { src: "/images/cafe-alley.jpg", alt: "Hero Cafe Alley" },
  { src: "/images/hero-barista-pour.jpg", alt: "Barista Pouring Coffee" },
  { src: "/images/aroma-beans.jpg", alt: "Aroma Coffee Beans" },
  { src: "/images/hero-coffee-community.jpg", alt: "Coffee Community" },
  { src: "/images/dark-latte.jpg", alt: "Dark Latte" },
  { src: "/images/carousel-man-drinking.jpg", alt: "Man Drinking Coffee" },
  { src: "/images/bar-mug.jpg", alt: "Coffee at Bar" },
  { src: "/images/hero-park-coffee.png", alt: "Coffee in the Park" },
  { src: "/images/steamy-mug.jpg", alt: "Steamy Mug" },
  { src: "/images/hero-tattooed-woman-cafe.jpg", alt: "Tattooed Woman with Coffee" },
  { src: "/images/hero-coffee-portrait.png", alt: "Coffee Portrait" },
  { src: "/images/carousel-neon-coffee.jpg", alt: "Neon Coffee Sign" },
  { src: "/images/hero-tattooed-barista.jpg", alt: "Tattooed Barista" },
  { src: "/images/carousel-black-cafe.jpg", alt: "Black Cafe Exterior" },
  { src: "/images/carousel-woman-teapot.jpg", alt: "Woman with Teapot" },
];

const experienceTiles = [
  {
    src: "/images/community-coffee-table.jpg",
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
    src: "/images/precision-espresso-pull.png",
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
    src: "/images/atmosphere-cafe.png",
    label: "Atmosphere",
    modal: {
      title: "THE HARD HOUSE JAZZ FEEL",
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
  { src: "/images/outdoor-coffee.jpg", caption: "Every sip tells a story." },
  { src: "/images/couple-coffee.jpg", caption: "Shared moments, bold flavors." },
  { src: "/images/man-laptop-coffee.png", caption: "Grounded wherever you are." },
  { src: "/images/woman-coffee.jpg", caption: "Eyes open, world alive." },
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
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const openTile = (idx: number) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveExperience(idx);
  };
  const closeTile = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveExperience(null);
    }, 200);
  };
  const keepOpen = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveExperience(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    // Logo/text begin fading in at 2s (1300ms + 0.7s CSS delay = 2s on screen)
    const visTimer = setTimeout(() => setIsVisible(true), 1300);
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
    <div className="hhc-home-page min-h-screen" style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2" }}>
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
      <section className="hero-section relative w-full h-screen overflow-hidden">
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
            />
          </div>
        ))}

        {/* SVG filter: red colorization */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <filter id="bloody-orange" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="0.263 0.263 0.263 0 0
                        0.097 0.097 0.097 0 0
                        0.031 0.031 0.031 0 0
                        0     0     0     1 0"
              />
            </filter>
          </defs>
        </svg>

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
              transition: "opacity 1.2s ease 0.7s",
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
              transition: "opacity 1.2s ease 1.0s, transform 1.2s ease 1.0s",
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

            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(1.5rem, 3.2vw, 2.8rem)",
                color: "#C94A18",
                fontWeight: 600,
                textShadow: "0 2px 12px rgba(0,0,0,0.85), 0 0 24px rgba(201,74,24,0.55), 0 0 55px rgba(201,74,24,0.2)",
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

      {/* FEATURED GRID */}
      <section
        className="px-6"
        style={{ backgroundColor: "#0b0b0b", position: "relative", paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        {/* Statement box — text always inside the rounded box, all screen sizes */}
        <div style={{ maxWidth: "67rem", margin: "0 auto 2.5rem" }}>
          <div className="hhc-stmt-box">
            <img
              aria-hidden="true"
              src="/images/coffeehouse-scene.jpg"
              alt=""
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                objectPosition: "center 38%",
                zIndex: 0,
              }}
            />
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              background: "rgba(6,4,2,0.52)",
              zIndex: 1, pointerEvents: "none",
            }} />
            {/* Flex column: headline top-left, paragraph bottom-left — all inside the box */}
            <div className="hhc-stmt-inner">
              <div>
                <p className="hhc-stmt-line1">EVERY CUP WE POUR IS A STATEMENT:</p>
                <p className="hhc-stmt-line2">Bold. Deliberate. Unapologetically Premium.</p>
              </div>
              <p className="hhc-stmt-para">
                Great coffee deserves more than being rushed. From the beans we choose to the way they're ground, brewed and served, small details can completely change what's in the cup. Hard House Coffee explores those details without making coffee complicated — whether you're learning espresso, comparing brewing methods, looking for better coffee gear, or simply wondering why one cup tastes better than another.
              </p>
            </div>
          </div>
        </div>

        {/* Banner: Now Brewing */}
        <PremiumBanner />

        {/* Tile grid */}
        <div className="w-full mt-10" style={{ position: "relative" }}>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
            style={{
              transition: "opacity 0.3s ease",
              opacity: activeExperience !== null ? 0.18 : 1,
            }}
          >
            {experienceTiles.map((item, idx) => {
              const isAtmosphere = item.src === "/images/atmosphere-cafe.png";

              return (
              <button
                key={idx}
                className={`hhc-experience-tile group relative overflow-hidden text-left${isAtmosphere ? " hhc-atmosphere-tile" : ""}`}
                onClick={() => openTile(idx)}
                style={{
                  borderRadius: "8px",
                   border: item.src === "/images/atmosphere-cafe.png"
                     ? "1px solid rgba(185,164,255,0.28)"
                     : "1px solid rgba(161,79,31,0.2)",
                  aspectRatio: "3/4",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease",
                  background: "none",
                  padding: 0,
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = item.src === "/images/atmosphere-cafe.png"
                     ? "rgba(205,188,255,0.82)"
                     : "rgba(161,79,31,0.65)";
                  const img = (e.currentTarget as HTMLElement).querySelector("img") as HTMLElement;
                  if (img) img.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = item.src === "/images/atmosphere-cafe.png"
                     ? "rgba(185,164,255,0.28)"
                     : "rgba(161,79,31,0.2)";
                  const img = (e.currentTarget as HTMLElement).querySelector("img") as HTMLElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className={`w-full h-full object-cover${isAtmosphere ? " hhc-atmosphere-tile-image" : ""}`}
                  style={{ transition: "transform 0.6s ease", display: "block" }}
                />
                  <div
                    className={`hhc-experience-tile-overlay absolute inset-0${isAtmosphere ? " hhc-atmosphere-tile-overlay" : ""}`}
                  style={{
                     background: item.src === "/images/atmosphere-cafe.png"
                       ? "linear-gradient(to bottom, rgba(8,5,18,0.8) 0%, transparent 48%, rgba(8,5,18,0.24) 100%)"
                       : "linear-gradient(to bottom, rgba(11,11,11,0.7) 0%, transparent 48%, rgba(11,11,11,0.92) 100%)",
                  }}
                >
                  {/* Explore — top right, appears on hover */}
                    <div className="hhc-experience-tile-explore" style={{ position: "absolute", top: "0.95rem", right: "1rem", zIndex: 10 }}>
                    <p
                      onClick={(e) => { e.stopPropagation(); openTile(idx); }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#f2f2f2"; el.style.textShadow = "0 0 10px rgba(242,242,242,0.7), 0 0 20px rgba(212,184,150,0.45)"; }}
                       onMouseLeave={(e) => {
                         const el = e.currentTarget as HTMLElement;
                          el.style.color = item.src === "/images/atmosphere-cafe.png" ? "#d1c2ff" : "#ff6a00";
                          el.style.textShadow = item.src === "/images/atmosphere-cafe.png"
                           ? "0 0 12px rgba(197,171,255,0.72)"
                           : "0 0 8px rgba(255,106,0,0.6)";
                       }}
                      onTouchStart={(e) => { e.preventDefault(); openTile(idx); }}
                       className="read-more-hint hhc-experience-tile-explore-text"
                      style={{
                        fontSize: "1.1rem",
                          color: item.src === "/images/atmosphere-cafe.png" ? "#d1c2ff" : "#ff6a00",
                          textShadow: item.src === "/images/atmosphere-cafe.png"
                           ? "0 0 12px rgba(197,171,255,0.72)"
                           : "0 0 8px rgba(255,106,0,0.6)",
                        letterSpacing: "0.1em",
                         opacity: item.src === "/images/atmosphere-cafe.png" ? 0.88 : 0,
                         transform: "translateX(6px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                        fontWeight: 700,
                        userSelect: "none",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        textTransform: "uppercase",
                      }}
                    >
                      Explore →
                    </p>
                  </div>
                   {/* Label — top left, kept clear of the photography */}
                   <p
                      className={`hhc-experience-tile-label${isAtmosphere ? " hhc-atmosphere-card-label" : ""}`}
                    style={{
                      position: "absolute",
                       top: "1rem",
                      left: "1rem",
                      fontFamily: "'Cinzel Decorative', serif",
                      fontSize: "0.91rem",
                      letterSpacing: "0.15em",
                        color: item.src === "/images/atmosphere-cafe.png" ? "#d1c2ff" : "#ff6a00",
                        textShadow: item.src === "/images/atmosphere-cafe.png"
                         ? "0 0 12px rgba(197,171,255,0.78)"
                         : "0 0 8px rgba(255,106,0,0.55)",
                      textTransform: "uppercase",
                      userSelect: "none",
                      pointerEvents: "none",
                      margin: 0,
                    }}
                  >
                      {isAtmosphere ? (
                        <>
                          <span className="hhc-atmosphere-card-word">{item.label}</span>
                          <span className="hhc-atmosphere-card-underline" aria-hidden="true" />
                          <span className="hhc-atmosphere-card-notes" aria-hidden="true">
                            <span>♪</span>
                            <span>♫</span>
                            <span>♬</span>
                          </span>
                        </>
                      ) : item.label}
                  </p>
                </div>
              </button>
              );
            })}
          </div>

          {/* Hovering pop-up tile */}
          {activeExperience !== null && (() => {
            const tile = experienceTiles[activeExperience];
            const m = tile.modal;
            return (
              <div
                className="hhc-experience-popover"
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
                  .hhc-modal-inner { display: flex; flex-direction: row; height: 340px; }
                  .hhc-modal-img-panel { flex: 0 0 52%; position: relative; overflow: hidden; }
                  @media (max-width: 600px) {
                    .hhc-modal-inner { flex-direction: column; height: auto; }
                    .hhc-modal-img-panel { flex: 0 0 160px; width: 100%; }
                  }
                `}</style>

                <div
                    className={`hhc-modal-inner${m.videoId ? " hhc-jazz-modal-inner" : ""}`}
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
                        objectPosition: (m as any).imagePosition || "center",
                        display: "block",
                        filter: "brightness(0.75) saturate(0.9)",
                        transform: (m as any).imageScale ? `scale(${(m as any).imageScale})` : undefined,
                        transformOrigin: (m as any).imagePosition || "center",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: m.videoId
                          ? "linear-gradient(to right, transparent 55%, #120c1d)"
                          : "linear-gradient(to right, transparent 55%, #1a110a)",
                      }}
                    />
                    <div className={m.videoId ? "hhc-jazz-modal-label" : ""} style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
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
                      padding: "1.25rem 1.5rem 1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      overflow: "hidden",
                    }}
                  >
                    {/* Close */}
                    <button
                      className={m.videoId ? "hhc-jazz-modal-close" : undefined}
                      onClick={() => setActiveExperience(null)}
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

                    {m.videoId ? (
                      <>
                        <div className="hhc-jazz-invitation" aria-label="Enter The Lounge">
                          <p className="hhc-jazz-invitation-kicker">A private room for the senses</p>
                          <h3 aria-label="Enter The Lounge">
                            <span>ENTER</span>
                            <span>THE</span>
                            <span>LOUNGE</span>
                          </h3>
                          <Link href="/experience">
                            <button
                              type="button"
                              className="hhc-jazz-play-button"
                              aria-label="Enter The Lounge"
                              onClick={() => { setActiveExperience(null); window.scrollTo(0, 0); }}
                            >
                               ENTER
                            </button>
                          </Link>
                          <p className="hhc-jazz-invitation-hint">Open the full coffee experience</p>
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
                            marginLeft: "0.25rem",
                          }}
                        >
                          {m.title}
                        </h3>

                        {/* Body text */}
                        <p style={{ color: "#a89880", fontSize: "0.88rem", lineHeight: 1.75, textAlign: "justify", hyphens: "auto" }}>
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
                          {m.buttonHref ? (
                            <Link href={m.buttonHref}>
                              <button
                                onClick={() => setActiveExperience(null)}
                                className="btn-primary"
                                style={{ fontSize: "0.74rem", letterSpacing: "0.1em", padding: "0.6rem 1.1rem" }}
                              >
                                {m.buttonLabel}
                              </button>
                            </Link>
                          ) : (
                            <button
                               onClick={() => setActiveExperience(null)}
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

      {/* VIDEO SECTION */}
      <VideoSection />

      {/* COFFEE JOURNAL SECTION */}
      <section className="py-14 px-6" style={{ backgroundColor: "#0f0a07" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-subtitle" style={{ color: "#a14f1f" }}>From The Coffee Journal</p>
            <h2
              className="inter-title mt-4"
              style={{
                color: "#f2f2f2",
                fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              Brewing Better Coffee Doesn't Have to Be Complicated
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                href: "/blog/best-espresso-machines-for-beginners-2026-guide",
                image: "/images/espresso-pour-cup.jpg",
                title: "Best Espresso Machines for Beginners (2026 Guide)",
                desc: "Not sure which machine to buy first? Three solid picks that won't overwhelm you, with honest takes on what actually matters before you spend your money.",
              },
              {
                href: "/blog/the-art-of-the-perfect-pour-over",
                image: "/images/pour-over-kettle.jpg",
                title: "The Art of the Perfect Pour-Over",
                desc: "A great pour-over isn't complicated — but it is intentional. Learn the details that separate a flat cup from one that genuinely surprises you.",
              },
              {
                href: "/blog/why-every-coffee-lover-needs-a-grinder-first-2026-guide",
                image: "/images/coffee-grinder-beans.png",
                title: "Why Every Coffee Lover Needs a Grinder First",
                desc: "Before you upgrade your machine, upgrade your grinder. Here's why fresh grinding changes everything — and which grinders are worth the investment.",
              },
            ].map((article, idx) => (
              <Link key={idx} href={article.href}>
                <div
                  style={{
                    background: "linear-gradient(145deg, #1a110a, #110c07)",
                    border: "1px solid rgba(161,79,31,0.2)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "border-color 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(161,79,31,0.55)";
                    el.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(161,79,31,0.2)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.82)", transition: "transform 0.5s ease" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                    />
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontStyle: "italic", fontSize: "1rem", color: "#f2f2f2", lineHeight: 1.5, marginBottom: "0.75rem", letterSpacing: "0.02em" }}>
                      {article.title}
                    </h3>
                    <p style={{ color: "#9a8878", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "1.1rem" }}>
                      {article.desc}
                    </p>
                    <span style={{ color: "#a14f1f", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/blog">
              <button className="btn-primary">Explore the Journal →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-16 px-6" style={{ backgroundColor: "#1c1008" }}>
        <div className="text-center mb-14" style={{ maxWidth: "72rem", margin: "0 auto 3.5rem" }}>
          <p className="section-subtitle">The Culture</p>
          <h2 className="section-title inter-title mt-4">Coffee Is a Way of Life</h2>
          <p style={{ color: "#b0a090", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0", fontSize: "1.05rem", lineHeight: 1.75 }}>
            More than a beverage — it's a ritual, a community, and a constant pursuit of the perfect cup.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "1rem", maxWidth: "1400px", margin: "0 auto" }}
        >
          {cultureImages.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(161,79,31,0.2)",
                aspectRatio: "4/3",
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
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(to top, rgba(11,11,11,0.92) 0%, transparent 100%)",
                }}
              >
                <p
                  style={{
                    color: "#f2f2f2",
                    fontStyle: "italic",
                    fontSize: "1.15rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL SECTION — Better Coffee Starts With Understanding It */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0b0b0b" }}>
        <div
          className="max-w-6xl mx-auto"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Left — photograph */}
          <div style={{ flex: "1 1 340px", minWidth: "280px" }}>
            <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(161,79,31,0.25)" }}>
              <img
                src="/images/barista-latte-art.jpg"
                alt="Barista crafting latte art — Hard House Coffee"
                style={{ width: "100%", display: "block", objectFit: "cover", filter: "brightness(0.85)" }}
              />
            </div>
          </div>
          {/* Right — copy */}
          <div style={{ flex: "1 1 340px", minWidth: "280px" }}>
            <p className="section-subtitle" style={{ color: "#a14f1f" }}>Better Coffee</p>
            <h2
              className="inter-title mt-4"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1.2rem, 2.2vw, 1.75rem)",
                color: "#f2f2f2",
                lineHeight: 1.4,
                marginBottom: "1.25rem",
              }}
            >
              Better Coffee Starts With Understanding It
            </h2>
            <p style={{ color: "#9a8878", fontSize: "clamp(0.95rem, 1.4vw, 1.06rem)", lineHeight: 1.9, marginBottom: "1rem" }}>
              Great coffee isn't reserved for professional baristas or expensive cafés. Understanding a few fundamentals can dramatically improve what you make at home.
            </p>
            <p style={{ color: "#9a8878", fontSize: "clamp(0.95rem, 1.4vw, 1.06rem)", lineHeight: 1.9, marginBottom: "1rem" }}>
              The beans matter. So does the grind. Water temperature, brewing time and the equipment you use all influence what eventually reaches your cup.
            </p>
            <p style={{ color: "#9a8878", fontSize: "clamp(0.95rem, 1.4vw, 1.06rem)", lineHeight: 1.9, marginBottom: "1.75rem" }}>
              That's why Hard House Coffee goes beyond beautiful coffee photography. We explore espresso, brewing methods, coffee equipment, beans and coffee culture through practical guides written for people who simply want to enjoy better coffee.
            </p>
            <Link href="/blog">
              <button className="btn-primary">Learn About Coffee →</button>
            </Link>
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
            backgroundImage: "url('/images/coffee-oclock.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 45%",
            filter: "brightness(0.45)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(11,11,11,0.35)" }} />
        <div className="relative" style={{ zIndex: 2 }}>
          <p className="section-subtitle" style={{ color: "#a14f1f" }}>
            Stay Grounded
          </p>
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
              lineHeight: 1.8,
              fontSize: "1.15rem",
            }}
          >
            Whether it's 5am or midnight, Hard House Coffee is your anchor. Bold, consistent, and always worth savoring.
          </p>
          <Link href="/blog">
            <button className="btn-primary">Explore the Blog</button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
