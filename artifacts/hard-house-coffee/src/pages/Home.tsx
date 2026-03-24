import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heroSlides = [
  { src: "/images/cafe-alley.jpg", alt: "Hero Cafe Alley" },
  { src: "/images/aroma-beans.jpg", alt: "Aroma Coffee Beans" },
  { src: "/images/dark-latte.jpg", alt: "Dark Latte" },
  { src: "/images/bar-mug.jpg", alt: "Coffee at Bar" },
  { src: "/images/steamy-mug.jpg", alt: "Steamy Mug" },
  { src: "/images/espresso-machine.jpg", alt: "Espresso Machine" },
];

const featuredImages = [
  { src: "/images/coffee-cheers.jpg", label: "Community" },
  { src: "/images/barista-serve.jpg", label: "Craftsmanship" },
  { src: "/images/milk-pour.png", label: "Precision" },
  { src: "/images/black-cafe.jpg", label: "Atmosphere" },
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
    title: "Best Espresso Machines of 2025",
    desc: "We tested 12 machines from Breville, De'Longhi and more. Here's what stood out in taste, ease and value.",
    image: "/images/espresso-machine.jpg",
    readTime: "8 min read",
  },
  {
    id: 2,
    category: "Brewing Guides",
    title: "The Art of the Perfect Pour-Over",
    desc: "Unlock the nuanced flavors of single-origin beans with our step-by-step pour-over brewing guide.",
    image: "/images/aroma-beans.jpg",
    readTime: "6 min read",
  },
  {
    id: 3,
    category: "Bean Recommendations",
    title: "Top 5 Dark Roast Beans for Espresso",
    desc: "Sourced from Ethiopia, Colombia and Sumatra — these dark roasts deliver the bold intensity you crave.",
    image: "/images/coffee-cheers.jpg",
    readTime: "5 min read",
  },
  {
    id: 4,
    category: "Coffee Culture",
    title: "The Rise of Specialty Coffee Bars",
    desc: "Third-wave coffee culture is reshaping how we experience our daily brew. We explore the movement.",
    image: "/images/black-cafe.jpg",
    readTime: "7 min read",
  },
];

const products = [
  {
    id: 1,
    name: "Breville Barista Express",
    tagline: "Built-in grinder. Cafe-quality at home.",
    price: "$699",
    rating: 4.8,
    reviews: 3200,
    badge: "Editor's Pick",
    badgeColor: "#8b2f2f",
  },
  {
    id: 2,
    name: "De'Longhi La Specialista",
    tagline: "Precision grinding. Barista-level results.",
    price: "$799",
    rating: 4.7,
    reviews: 1800,
    badge: "Best Value",
    badgeColor: "#a14f1f",
  },
  {
    id: 3,
    name: "Gaggia Classic Pro",
    tagline: "Timeless Italian espresso engineering.",
    price: "$499",
    rating: 4.6,
    reviews: 2400,
    badge: "Top Rated",
    badgeColor: "#5a3a1a",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

        {/* Dark gradient overlay */}
        <div className="hero-overlay absolute inset-0" style={{ zIndex: 2 }} />

        {/* Hero content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ zIndex: 3 }}
        >
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1.2s ease, transform 1.2s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Centered logo — large and dominant, text clipped */}
            <div
              style={{
                height: "clamp(420px, 60vw, 660px)",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                marginBottom: "1.6rem",
              }}
            >
              <img
                src="/images/logo.png"
                alt="Hard House Coffee"
                style={{
                  height: "clamp(700px, 100vw, 1100px)",
                  width: "auto",
                  filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.7)) sepia(1) saturate(2.5) hue-rotate(330deg) brightness(0.85)",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Single-line brand title */}
            <h1
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(2.6rem, 7vw, 6.4rem)",
                color: "#f2f2f2",
                textShadow: "0 2px 20px rgba(0,0,0,0.8)",
                letterSpacing: "0.12em",
                whiteSpace: "nowrap",
                lineHeight: 1,
                marginBottom: "1.2rem",
              }}
            >
              HARD HOUSE COFFEE
            </h1>

            <div
              style={{
                width: "70px",
                height: "2px",
                background: "linear-gradient(to right, #8b2f2f, #a14f1f)",
                marginBottom: "1.2rem",
              }}
            />
            <p
              style={{
                fontSize: "clamp(0.75rem, 1.6vw, 1rem)",
                color: "#f2f2f2",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 300,
                textShadow: "0 1px 8px rgba(0,0,0,0.7)",
                marginBottom: "2.5rem",
              }}
            >
              Aroma From the Ground Up
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
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
            {featuredImages.map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden"
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(161,79,31,0.2)",
                  aspectRatio: "3/4",
                }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  style={{
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div
                  className="absolute inset-0 flex items-end p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(11,11,11,0.85) 0%, transparent 60%)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      color: "#a14f1f",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
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
            backgroundPosition: "center",
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
                  <Link href="/blog">
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
                {/* Product image placeholder with espresso machine themed visual */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    height: "200px",
                    background: "linear-gradient(135deg, #1a1008 0%, #2b1e16 100%)",
                    borderBottom: "1px solid rgba(161,79,31,0.2)",
                  }}
                >
                  <img
                    src="/images/espresso-machine.jpg"
                    alt={product.name}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.5)" }}
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
                      color: "#f2f2f2",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {product.name}
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

                  <p
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "#f2f2f2",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {product.price}
                  </p>

                  <div className="flex flex-col gap-2 mt-auto">
                    <Link href="/products">
                      <button className="btn-primary w-full" style={{ fontSize: "0.75rem" }}>
                        Buy Now
                      </button>
                    </Link>
                    <Link href="/products">
                      <button className="btn-dark w-full" style={{ fontSize: "0.75rem" }}>
                        Read Review
                      </button>
                    </Link>
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
              Join the Hard House Movement
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

      <Footer />
    </div>
  );
}
