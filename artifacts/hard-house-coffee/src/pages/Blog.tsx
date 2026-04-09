import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";

const categories = ["All", "Gear Reviews", "Brewing Guides", "Bean Picks", "Espresso Machines", "Coffee Culture"];

const posts = [
  {
    id: 1,
    category: "Gear Reviews",
    title: "Best Espresso Machines of 2025: Tested & Ranked",
    desc: "We spent 3 months testing 12 machines from Breville, De'Longhi, Gaggia and more. Here's everything you need to know before buying.",
    image: "/images/espresso-machine.jpg",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Brewing Guides",
    title: "The Art of the Perfect Pour-Over",
    desc: "Unlock nuanced flavors from single-origin beans with our step-by-step guide to the perfect pour-over brewing technique.",
    image: "/images/aroma-beans.jpg",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    category: "Bean Picks",
    title: "Top 5 Dark Roast Beans for Espresso in 2025",
    desc: "Sourced from Ethiopia, Colombia and Sumatra — these dark roasts deliver the bold, complex intensity serious espresso drinkers crave.",
    image: "/images/coffee-cheers.jpg",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    category: "Coffee Culture",
    title: "The Rise of Specialty Coffee Bars",
    desc: "Third-wave coffee culture is reshaping how we think about our daily brew. We explore the movement and the people driving it.",
    image: "/images/black-cafe.jpg",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    category: "Espresso Machines",
    title: "Breville vs. De'Longhi: Which Brand Wins in 2025?",
    desc: "Two of the biggest names in home espresso go head-to-head across price, performance, durability and ease of use.",
    image: "/images/breville-vs-delonghi.png",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 6,
    category: "Brewing Guides",
    title: "Cold Brew Mastery: A Complete Home Guide",
    desc: "Smooth, low-acid, and incredibly refreshing. Master the cold brew process at home with our comprehensive walkthrough.",
    image: "/images/milk-pour.png",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 7,
    category: "Coffee Culture",
    title: "Why Every Coffee Lover Needs a Grinder First",
    desc: "Before you buy a machine, invest in a quality grinder. Here's why freshly ground beans make all the difference.",
    image: "/images/steamy-mug.jpg",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 8,
    category: "Bean Picks",
    title: "Ethiopia vs. Colombia: A Complete Coffee Origin Guide",
    desc: "Origin matters. Dive deep into how geography, altitude and processing methods shape the flavors in your cup.",
    image: "/images/outdoor-coffee.jpg",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 9,
    category: "Espresso Machines",
    title: "Best Espresso Machines for Beginners",
    desc: "So many machines, so much confusion. Here's a straight-talking guide to the types that exist, what actually matters, and what we recommend when you're just starting out.",
    image: "/images/espresso-machine.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "best-espresso-machines-for-beginners",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Navbar />

      {/* Page header */}
      <div
        className="relative pt-32 pb-16 px-6 text-center overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #2b1e16 0%, #0b0b0b 100%)",
          borderBottom: "1px solid rgba(161,79,31,0.2)",
        }}
      >
        <p className="section-subtitle" style={{ color: "#a14f1f" }}>Hard House</p>
        <div className="divider-orange mx-auto" />
        <h1 className="section-title mt-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          Blog & Reviews
        </h1>
        <p style={{ color: "#b0a090", maxWidth: "480px", margin: "1rem auto 0", lineHeight: 1.7 }}>
          Gear reviews, brewing guides, bean picks, and the culture behind every cup.
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

        {/* Featured post */}
        {activeCategory === "All" && featured && (
          <div
            className="mb-12 relative overflow-hidden"
            style={{
              borderRadius: "10px",
              border: "1px solid rgba(161,79,31,0.25)",
              background: "#131313",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.75)" }}
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1"
                  style={{
                    background: "#8b2f2f",
                    borderRadius: "4px",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#f2f2f2",
                    fontWeight: 700,
                  }}
                >
                  Featured
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p style={{ fontSize: "0.7rem", color: "#a14f1f", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {featured.category} · {featured.readTime}
                </p>
                <h2
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                    color: "#f2f2f2",
                    lineHeight: 1.3,
                    marginBottom: "1rem",
                  }}
                >
                  {featured.title}
                </h2>
                <p style={{ color: "#b0a090", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {featured.desc}
                </p>
                <button className="btn-primary" style={{ alignSelf: "flex-start" }}>
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <div key={post.id} className="card-dark flex flex-col">
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
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
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#f2f2f2",
                    fontWeight: 700,
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
                    marginBottom: "0.7rem",
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
                {(post as any).slug ? (
                  <Link href={`/blog/${(post as any).slug}`}>
                    <button className="btn-primary w-full" style={{ fontSize: "0.75rem" }}>
                      Read More
                    </button>
                  </Link>
                ) : (
                  <button className="btn-primary w-full" style={{ fontSize: "0.75rem" }}>
                    Read More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <PageNav nextPath="/products" nextLabel="Shop Gear" />
      <Footer />
    </div>
  );
}
