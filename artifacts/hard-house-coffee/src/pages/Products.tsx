import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";

const categories = ["All", "Espresso Machines", "Coffee Machines", "Grinders", "Accessories"];

const products = [
  {
    id: 1,
    category: "Espresso Machines",
    name: "De'Longhi La Specialista Touch",
    tagline: "Cold brew to espresso. One machine, limitless craft.",
    desc: "The La Specialista Touch combines sensor grinding, active temperature control, and cold brew extraction in a single machine. Designed for those who demand full creative control without sacrificing convenience.",
    price: "$999",
    originalPrice: "$1,199",
    rating: 4.8,
    reviews: 2134,
    badge: "Editor's Pick",
    badgeColor: "#8b2f2f",
    image: "/images/products/la-specialista-main.jpg",
    hoverImage: "/images/products/la-specialista-hover.jpg",
    pros: ["Sensor grinding with zero retention", "Cold brew extraction built-in", "Active temperature control", "Auto milk frothing system"],
  },
  {
    id: 2,
    category: "Espresso Machines",
    name: "De'Longhi Eletta Explore",
    tagline: "Full automation. Cold brew reimagined.",
    desc: "The Eletta Explore is a fully automatic machine that brings cold brew technology into your daily routine. With LatteCrema Hot & Cold, it crafts 12 signature beverages at the touch of a button.",
    price: "$1,299",
    originalPrice: "$1,499",
    rating: 4.7,
    reviews: 1456,
    badge: "Best Seller",
    badgeColor: "#a14f1f",
    image: "/images/products/p2.jpg",
    hoverImage: "/images/products/eletta-explore-hover.jpg",
    pros: ["One-touch cold brew", "LatteCrema Hot & Cold frother", "12 beverages on demand", "Built-in conical grinder"],
  },
  {
    id: 3,
    category: "Espresso Machines",
    name: "De'Longhi Dinamica Plus",
    tagline: "Smart brewing. Endless possibilities.",
    desc: "The Dinamica Plus features an intuitive 8.9\" touchscreen and the My LatteCrema system for perfectly textured hot and cold milk. Create and save your custom drink recipes with ease.",
    price: "$749",
    originalPrice: "$899",
    rating: 4.6,
    reviews: 3211,
    badge: "Smart Pick",
    badgeColor: "#5a3a1a",
    image: "/images/products/dinamica-plus-main.jpg",
    hoverImage: "/images/products/p6.jpg",
    pros: ["8.9\" TFT color touchscreen", "My LatteCrema milk system", "Customizable saved recipes", "Integrated bean-to-cup grinder"],
  },
  {
    id: 4,
    category: "Espresso Machines",
    name: "Breville Oracle Jet",
    tagline: "Hands-free barista. Zero compromise.",
    desc: "The Oracle Jet automates every step of the espresso-making process — from grinding and tamping to milk texturing — delivering third-wave specialty coffee at the press of a button.",
    price: "$1,999",
    originalPrice: "$2,299",
    rating: 4.9,
    reviews: 987,
    badge: "Ultra Premium",
    badgeColor: "#8b2f2f",
    image: "/images/products/oracle-jet-main.jpg",
    hoverImage: "/images/products/oracle-jet-hover.jpg",
    pros: ["Fully automated grinding & tamping", "Hands-free milk texturing", "Dual boiler system", "Heated group head for precision"],
  },
  {
    id: 5,
    category: "Espresso Machines",
    name: "Breville Barista Touch",
    tagline: "Guided espresso. Effortless mastery.",
    desc: "The Barista Touch features a guided touchscreen interface that walks you through every step of the brew process, from grind size to milk temperature — making barista-level espresso approachable for all.",
    price: "$999",
    originalPrice: "$1,199",
    rating: 4.8,
    reviews: 4562,
    badge: "Fan Favorite",
    badgeColor: "#a14f1f",
    image: "/images/products/p14.jpg",
    hoverImage: "/images/products/barista-touch-hover.jpg",
    pros: ["Guided touchscreen display", "Built-in conical burr grinder", "Auto milk texturing wand", "30 grind settings"],
  },
  {
    id: 6,
    category: "Espresso Machines",
    name: "Ninja Luxe Café Pro",
    tagline: "Premium café drinks. Ninja-engineered precision.",
    desc: "The Ninja Luxe Café Pro delivers up to 20 bars of pressure for rich, authentic espresso. Five brew styles and a built-in frother make it the most versatile machine in its class.",
    price: "$279",
    originalPrice: "$349",
    rating: 4.5,
    reviews: 6823,
    badge: "Best Value",
    badgeColor: "#5a3a1a",
    image: "/images/products/ninja-luxe-main.jpg",
    hoverImage: "/images/products/ninja-luxe-hover.jpg",
    pros: ["20-bar pressure pump", "5 brew styles in one machine", "Built-in steam frother", "Compact countertop footprint"],
  },
  {
    id: 7,
    category: "Espresso Machines",
    name: "Bosch 800 Series Espresso",
    tagline: "German engineering. Barista perfection.",
    desc: "The Bosch 800 Series brings Milk Express Plus technology and AROMA+ brewing to your countertop. Control every setting remotely with the Home Connect app for a seamless coffee ritual.",
    price: "$1,499",
    originalPrice: "$1,699",
    rating: 4.7,
    reviews: 1234,
    badge: "Premium Build",
    badgeColor: "#8b2f2f",
    image: "/images/products/p10.jpg",
    hoverImage: "/images/products/bosch-800-hover.jpg",
    pros: ["Milk Express Plus frother", "AROMA+ brewing technology", "HomeConnect app control", "Fully automatic cleaning program"],
  },
  {
    id: 8,
    category: "Espresso Machines",
    name: "Gaggia Magenta Prestige",
    tagline: "Super-automatic. Authentically Italian.",
    desc: "The Magenta Prestige combines Gaggia's legendary Italian espresso heritage with modern super-automatic convenience. Its ceramic flat burr grinder ensures a consistent, flavorful grind every time.",
    price: "$599",
    originalPrice: "$749",
    rating: 4.6,
    reviews: 1876,
    badge: "Italian Craft",
    badgeColor: "#a14f1f",
    image: "/images/products/gaggia-magenta-main.jpg",
    hoverImage: "/images/products/gaggia-magenta-hover.jpg",
    pros: ["Ceramic flat burr grinder", "One-touch specialty beverages", "Automatic steam wand", "Compact, stylish footprint"],
  },
  {
    id: 9,
    category: "Espresso Machines",
    name: "Philips 5500 LatteGo",
    tagline: "LatteGo frother. Effortless milk magic.",
    desc: "The Philips 5500 features the award-winning LatteGo milk system — the fastest, easiest-to-clean frother on the market. Paired with 5 grind settings and app connectivity, it's precision without pretension.",
    price: "$699",
    originalPrice: "$849",
    rating: 4.7,
    reviews: 5341,
    badge: "Easy Clean",
    badgeColor: "#5a3a1a",
    image: "/images/products/philips-5500-main.jpg",
    hoverImage: "/images/products/philips-5500-hover.jpg",
    pros: ["LatteGo milk system (2-part only)", "My Beverage app integration", "5 grind settings", "Auto descaling & cleaning"],
  },
  {
    id: 10,
    category: "Accessories",
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
    hoverImage: "",
    pros: ["±0.5° temperature accuracy", "Hold mode up to 60 min", "Precision pour spout"],
  },
  {
    id: 11,
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
    image: "/images/products/moccamaster-main.jpg",
    hoverImage: "/images/products/moccamaster-hover.webp",
    mainPosition: "center 30%",
    pros: ["Brews in 4-6 minutes", "Built to last decades", "Certified by ECBC"],
  },
  {
    id: 12,
    category: "Coffee Machines",
    name: "Breville Precision Brewer Thermal",
    tagline: "Gold Cup certified. Engineered for perfection.",
    desc: "The Precision Brewer is the only home coffee maker to earn SCA Gold Cup certification at this price point. It automatically adjusts brew time and water temperature for peak extraction every single brew.",
    price: "$170",
    originalPrice: "$220",
    rating: 4.8,
    reviews: 12847,
    badge: "SCA Certified",
    badgeColor: "#8b2f2f",
    image: "/images/products/breville-precision-main.jpg",
    hoverImage: "/images/products/breville-precision-hover.jpg",
    pros: ["SCA Gold Cup certified", "Bloom & brew technology", "60 oz thermal carafe", "Precise temp control 200°F"],
  },
  {
    id: 13,
    category: "Coffee Machines",
    name: "OXO Brew 9-Cup Coffee Maker",
    tagline: "Rainmaker showerhead. Flawless saturation.",
    desc: "The OXO Brew 9-Cup earns SCA certification with its Rainmaker showerhead that distributes water evenly across the grounds for full, balanced extraction. A premium build for the serious home brewer.",
    price: "$180",
    originalPrice: "$230",
    rating: 4.7,
    reviews: 8934,
    badge: "SCA Certified",
    badgeColor: "#a14f1f",
    image: "/images/products/oxo-brew-main.jpg",
    hoverImage: "/images/products/oxo-brew-hover.jpg",
    pros: ["Rainmaker showerhead", "SCA Gold Cup certified", "Stainless thermal carafe", "Brew pause feature"],
  },
  {
    id: 14,
    category: "Coffee Machines",
    name: "Bonavita 8-Cup One-Touch",
    tagline: "One touch. Flawless cup. Every time.",
    desc: "The Bonavita 8-Cup is the cult favourite for coffee purists who want SCA-certified extraction without the complexity. One button, optimal brew temperature, flat-bottom basket — and coffee that rivals expensive machines.",
    price: "$65",
    originalPrice: "$90",
    rating: 4.6,
    reviews: 21503,
    badge: "Best Value",
    badgeColor: "#5a3a1a",
    image: "/images/products/bonavita-main.jpg",
    hoverImage: "/images/products/bonavita-hover.jpg",
    pros: ["SCA Gold Cup certified", "Optimal 205°F brew temp", "Flat-bottom brew basket", "Simple one-touch operation"],
  },
  {
    id: 15,
    category: "Coffee Machines",
    name: "Cuisinart DCC-3200P1 Perfectemp",
    tagline: "14 cups. Fully programmable. Always ready.",
    desc: "The Perfectemp is Cuisinart's most popular brewer for good reason. It holds coffee at the perfect serving temperature, brews a full 14 cups, and lets you program it the night before — reliable, bold, and built to last.",
    price: "$80",
    originalPrice: "$100",
    rating: 4.6,
    reviews: 89241,
    badge: "Top Seller",
    badgeColor: "#a14f1f",
    image: "/images/products/cuisinart-3200-main.jpg",
    hoverImage: "/images/products/cuisinart-3200-hover.jpg",
    pros: ["14-cup capacity", "Adjustable brew strength", "24-hour programmable", "Brew-pause feature"],
  },
  {
    id: 16,
    category: "Coffee Machines",
    name: "Ninja Specialty Coffee Maker CM401",
    tagline: "Café-style drinks. Home machine simplicity.",
    desc: "The Ninja CM401 brews everything from rich classic drip to concentrated specialty coffee for lattes and cappuccinos. With a built-in frother and fold-away frother arm, it's the most versatile drip machine in its class.",
    price: "$150",
    originalPrice: "$180",
    rating: 4.7,
    reviews: 34872,
    badge: "Most Versatile",
    badgeColor: "#8b2f2f",
    image: "/images/products/ninja-cm401-main.jpg",
    hoverImage: "/images/products/ninja-cm401-hover.jpg",
    pros: ["6 brew sizes & styles", "Built-in fold-away frother", "Thermal & glass carafe options", "Specialty concentrate brew"],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
          {filtered.map((product) => {
            const isHovered = hoveredId === product.id;
            return (
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
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHovered ? "0 8px 32px rgba(161,79,31,0.25)" : "none",
                  borderColor: isHovered ? "rgba(161,79,31,0.5)" : "rgba(161,79,31,0.25)",
                }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image with hover swap */}
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  {/* Main image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full absolute inset-0"
                    style={{
                      objectFit: (product as any).mainFit || "cover",
                      objectPosition: (product as any).mainPosition || "center",
                      opacity: isHovered && product.hoverImage ? 0 : 1,
                      transform: isHovered ? `scale(${((product as any).mainScale ?? 1) * 1.06})` : `scale(${(product as any).mainScale ?? 1})`,
                      transition: "opacity 0.55s ease, transform 0.55s ease",
                      filter: "brightness(0.65)",
                    }}
                  />
                  {/* Hover image */}
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} lifestyle`}
                      className="w-full h-full absolute inset-0"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered
                          ? `scale(${(product as any).hoverScale ?? 1.03})`
                          : `scale(${(product as any).hoverScale ?? 1.01})`,
                        transition: "opacity 0.55s ease, transform 0.55s ease",
                        filter: "brightness(0.85)",
                      }}
                    />
                  )}

                  {/* Badges */}
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
            );
          })}
        </div>
      </div>

      <PageNav nextPath="/about" nextLabel="Our Story" />
      <Footer />
    </div>
  );
}
