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
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/a85e5e7e-c07f-478d-8595-097114a2103d.jpg",
    hoverImage: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/a8ca39b7-1a0f-4a8b-a2af-1a512f897269.jpg",
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
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9e09cc12-c73a-4436-bdeb-4bfe07c96d71.jpg",
    hoverImage: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/433670ef-1780-4819-ab3e-a546badd357c.jpg",
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
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6472/6472004_sd.jpg",
    hoverImage: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6472/6472004cv11d.jpg",
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
    image: "https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/BES985/BES985BSS1BNA1/pdp.png",
    hoverImage: "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES985/BES985_CAROUSEL1_USCM.png",
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
    image: "https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/BES880/BES880BSS1BUS1/pdp.png",
    hoverImage: "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES880/BES880USC_CAROUSEL1.png",
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
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/c3a8b2d5-2788-441e-979f-d49086c35c84.jpg",
    hoverImage: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8d69ecc3-20ad-40f6-af10-5cc57c3536b8.jpg",
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
    image: "https://media3.bsh-group.com/Product_Shots/25747163_TQU60307_frontal_STP.webp",
    hoverImage: "https://media3.bsh-group.com/Product_Shots/24461656_BSH-EN_BO_FAEM_812_TQU60703_General_SecImg-06_plain_3200x1800px_def.webp",
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
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6587/6587174_sd.jpg",
    hoverImage: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6587/6587175cv18d.jpg",
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
    image: "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202543/0004/philips-5500-fully-automatic-espresso-machine-with-lattego-j.jpg",
    hoverImage: "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202541/0299/philips-5500-fully-automatic-espresso-machine-with-lattego-j.jpg",
    pros: ["LatteGo milk system (2-part only)", "My Beverage app integration", "5 grind settings", "Auto descaling & cleaning"],
  },
  {
    id: 10,
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
    image: "/images/product-moccamaster.png",
    hoverImage: "",
    pros: ["Brews in 4-6 minutes", "Built to last decades", "Certified by ECBC"],
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
                    className="w-full h-full object-cover absolute inset-0"
                    style={{
                      opacity: isHovered && product.hoverImage ? 0 : 1,
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                      transition: "opacity 0.55s ease, transform 0.55s ease",
                      filter: "brightness(0.65)",
                    }}
                  />
                  {/* Hover image */}
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} lifestyle`}
                      className="w-full h-full object-cover absolute inset-0"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "scale(1.06)" : "scale(1.01)",
                        transition: "opacity 0.55s ease, transform 0.55s ease",
                        filter: "brightness(0.65)",
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
