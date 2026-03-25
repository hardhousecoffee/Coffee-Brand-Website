import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";

const categories = ["All", "Espresso Machines", "Coffee Machines", "Grinders", "Accessories"];

const products = [
  {
    id: 1,
    category: "Espresso Machines",
    name: "Breville Barista Express",
    tagline: "Built-in grinder. Cafe-quality espresso at home.",
    desc: "The Barista Express delivers third wave specialty coffee at home using the 4 keys formula and a revolutionary grinding cradle which allows you to grind directly into the portafilter.",
    price: "$699",
    originalPrice: "$799",
    rating: 4.8,
    reviews: 3247,
    badge: "Editor's Pick",
    badgeColor: "#8b2f2f",
    image: "/images/product-breville.png",
    pros: ["Built-in conical burr grinder", "Precise espresso extraction", "Steam wand for milk frothing"],
  },
  {
    id: 2,
    category: "Espresso Machines",
    name: "De'Longhi La Specialista Arte",
    tagline: "Precision grinding meets barista-level control.",
    desc: "With its sensor grinding technology, you can grind with absolute precision for a consistent grind every time, with zero retention. Pair with the active temperature control for perfect espresso shots.",
    price: "$799",
    originalPrice: "$999",
    rating: 4.7,
    reviews: 1823,
    badge: "Best Value",
    badgeColor: "#a14f1f",
    image: "/images/product-delonghi.png",
    pros: ["Smart tamping station", "Dual heating system", "Active temperature control"],
  },
  {
    id: 3,
    category: "Espresso Machines",
    name: "Gaggia Classic Pro",
    tagline: "Timeless Italian engineering. Serious espresso.",
    desc: "The Gaggia Classic Pro is a commercial-grade home espresso machine with a commercial 58mm portafilter and a 3-way solenoid valve, allowing you to pull perfect espresso shots every time.",
    price: "$499",
    originalPrice: "$549",
    rating: 4.6,
    reviews: 2418,
    badge: "Top Rated",
    badgeColor: "#5a3a1a",
    image: "/images/product-gaggia.png",
    pros: ["Commercial 58mm portafilter", "3-way solenoid valve", "Commercial steam wand"],
  },
  {
    id: 4,
    category: "Espresso Machines",
    name: "Rancilio Silvia Pro X",
    tagline: "Professional dual boiler. Home barista's dream.",
    desc: "The Silvia Pro X features a dual boiler system with independent temperature control for both the brew boiler and the steam boiler, eliminating heat-up time between steam and brew.",
    price: "$1,299",
    originalPrice: "$1,499",
    rating: 4.9,
    reviews: 876,
    badge: "Premium Pick",
    badgeColor: "#8b2f2f",
    image: "/images/product-rancilio.png",
    pros: ["Dual boiler system", "PID temperature control", "No wait between steam and brew"],
  },
  {
    id: 5,
    category: "Coffee Machines",
    name: "Fellow Stagg EKG Electric Kettle",
    tagline: "Pour-over perfection. Built for precision.",
    desc: "The Stagg EKG offers precision pour control with a temperature range of 135°F-212°F and a hold mode that maintains your desired temperature for 60 minutes.",
    price: "$169",
    originalPrice: "$195",
    rating: 4.8,
    reviews: 5621,
    badge: "Most Popular",
    badgeColor: "#8b2f2f",
    image: "/images/product-fellow.png",
    pros: ["±0.5° temperature accuracy", "Hold mode up to 60 min", "Precision pour spout"],
  },
  {
    id: 6,
    category: "Coffee Machines",
    name: "Technivorm Moccamaster KB",
    tagline: "Dutch precision. Perfect drip every time.",
    desc: "The Moccamaster brews coffee at the ideal temperature of 196-205°F and saturates the coffee grounds evenly for full extraction. Built to last a lifetime.",
    price: "$349",
    originalPrice: "$369",
    rating: 4.7,
    reviews: 3102,
    badge: "Best Drip",
    badgeColor: "#a14f1f",
    image: "/images/product-moccamaster.png",
    pros: ["Brews in 4-6 minutes", "Built to last decades", "Certified by ECBC"],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Navbar />

      {/* Page header */}
      <div
        className="pt-32 pb-16 px-6 text-center"
        style={{
          background: "linear-gradient(to bottom, #2b1e16 0%, #0b0b0b 100%)",
          borderBottom: "1px solid rgba(161,79,31,0.2)",
        }}
      >
        <p className="section-subtitle" style={{ color: "#a14f1f" }}>Recommended Gear</p>
        <div className="divider-orange mx-auto" />
        <h1 className="section-title mt-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          Coffee Equipment
        </h1>
        <p style={{ color: "#b0a090", maxWidth: "480px", margin: "1rem auto 0", lineHeight: 1.7 }}>
          Expert-tested espresso machines, coffee makers and brewing gear — curated for serious coffee lovers.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.45rem 1.2rem",
                borderRadius: "6px",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: activeCategory === cat ? "#8b2f2f" : "transparent",
                color: activeCategory === cat ? "#f2f2f2" : "#b0a090",
                border: activeCategory === cat ? "1px solid #a14f1f" : "1px solid rgba(161,79,31,0.25)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Affiliate disclosure */}
        <div
          className="mb-8 p-4"
          style={{
            background: "#131313",
            borderRadius: "6px",
            border: "1px solid rgba(161,79,31,0.15)",
            fontSize: "0.78rem",
            color: "#b0a090",
          }}
        >
          <strong style={{ color: "#a14f1f" }}>Affiliate Disclosure:</strong> Hard House Coffee may earn a commission when you purchase through our links — at no extra cost to you. We only recommend gear we've personally tested and trust.
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#131313",
                borderRadius: "10px",
                border: "1px solid rgba(161,79,31,0.25)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
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
              <div
                className="relative overflow-hidden"
                style={{ height: "220px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.6)", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.filter = "brightness(0.75)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "brightness(0.6)";
                  }}
                />
                <div
                  className="absolute top-3 left-3 px-2 py-1"
                  style={{
                    background: product.badgeColor,
                    borderRadius: "4px",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#f2f2f2",
                    fontWeight: 700,
                    zIndex: 2,
                  }}
                >
                  {product.badge}
                </div>
                <div
                  className="absolute top-3 right-3 px-2 py-1"
                  style={{
                    background: "rgba(11,11,11,0.8)",
                    borderRadius: "4px",
                    fontSize: "0.65rem",
                    color: "#a14f1f",
                    fontWeight: 600,
                    zIndex: 2,
                    letterSpacing: "0.05em",
                  }}
                >
                  {product.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#f2f2f2",
                    marginBottom: "0.3rem",
                  }}
                >
                  {product.name}
                </h3>
                <p style={{ fontSize: "0.78rem", color: "#a14f1f", marginBottom: "0.8rem", fontStyle: "italic" }}>
                  {product.tagline}
                </p>
                <p style={{ fontSize: "0.8rem", color: "#b0a090", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {product.desc}
                </p>

                {/* Pros */}
                <ul className="mb-4">
                  {product.pros.map((pro) => (
                    <li
                      key={pro}
                      style={{
                        fontSize: "0.78rem",
                        color: "#c0a880",
                        marginBottom: "0.3rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: "#a14f1f", fontSize: "0.9rem" }}>✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>

                {/* Stars */}
                <div className="flex items-center gap-2 mb-3">
                  <div style={{ color: "#a14f1f", fontSize: "0.9rem" }}>
                    {"★".repeat(Math.floor(product.rating))}
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "#b0a090" }}>
                    {product.rating} ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f2f2f2" }}>
                    {product.price}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "#6b5a4e", textDecoration: "line-through" }}>
                    {product.originalPrice}
                  </span>
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                  <button className="btn-primary w-full" style={{ fontSize: "0.78rem" }}>
                    Buy Now
                  </button>
                  <div className="flex gap-2">
                    <button className="btn-secondary flex-1" style={{ fontSize: "0.72rem" }}>
                      View Product
                    </button>
                    <button className="btn-dark flex-1" style={{ fontSize: "0.72rem" }}>
                      Read Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PageNav nextPath="/about" nextLabel="Our Story" />
      <Footer />
    </div>
  );
}
