import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";

const categories = ["All", "Gear Reviews", "Brewing Guides", "Bean Picks", "Espresso Machines", "Coffee Culture"];

const posts = [
  {
    id: 1,
    category: "Gear Reviews",
    title: "Best Espresso Machines (2026 Guide): Tested & Ranked",
    desc: "We spent 3 months testing 12 machines from Breville, De'Longhi, Gaggia and more. Here's everything you need to know before buying.",
    image: "/images/espresso-tattooed-hands.jpg",
    readTime: "8 min read",
    featured: true,
    slug: "best-espresso-machines-2026-guide-tested-and-ranked",
  },
  {
    id: 2,
    category: "Brewing Guides",
    title: "The Art of the Perfect Pour-Over",
    desc: "Unlock nuanced flavors from single-origin beans with our step-by-step guide to the perfect pour-over brewing technique.",
    image: "/images/pour-over-kettle.jpg",
    readTime: "6 min read",
    featured: false,
    slug: "the-art-of-the-perfect-pour-over",
  },
  {
    id: 3,
    category: "Bean Picks",
    title: "Top 5 Dark Roast Beans for Espresso in 2026",
    desc: "Sourced from Ethiopia, Colombia and Sumatra — these dark roasts deliver the bold, complex intensity serious espresso drinkers crave.",
    image: "/images/coffee-cheers.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "top-5-dark-roast-beans-for-espresso-in-2026",
  },
  {
    id: 4,
    category: "Coffee Culture",
    title: "The Rise of Specialty Coffee Bars",
    desc: "Third-wave coffee culture is reshaping how we think about our daily brew. We explore the movement and the people driving it.",
    image: "/images/black-cafe.jpg",
    readTime: "7 min read",
    featured: false,
    slug: "the-rise-of-specialty-coffee-bars",
  },
  {
    id: 6,
    category: "Brewing Guides",
    title: "Cold Brew Mastery: A Complete Home Guide",
    desc: "Smooth, low-acid, and incredibly refreshing. Master the cold brew process at home with our comprehensive walkthrough.",
    image: "/images/milk-pour.png",
    readTime: "9 min read",
    featured: false,
    slug: "cold-brew-mastery-a-complete-home-guide",
  },
  {
    id: 7,
    category: "Coffee Culture",
    title: "Why Every Coffee Lover Needs a Grinder First (2026 Guide)",
    desc: "Before you buy a machine, invest in a quality grinder. Here's why freshly ground beans make all the difference.",
    image: "/images/coffee-grinder-beans.png",
    readTime: "4 min read",
    featured: false,
    slug: "why-every-coffee-lover-needs-a-grinder-first-2026-guide",
  },
  {
    id: 8,
    category: "Bean Picks",
    title: "Ethiopia vs. Colombia: A Complete Coffee Origin Guide",
    desc: "Origin matters. Dive deep into how geography, altitude and processing methods shape the flavors in your cup.",
    image: "/images/outdoor-coffee.jpg",
    readTime: "8 min read",
    featured: false,
    slug: "ethiopia-vs-colombia-a-complete-coffee-origin-guide",
  },
  {
    id: 10,
    category: "Espresso Machines",
    title: "Best Espresso Machines for Beginners (2026 Guide)",
    desc: "Not all machines are beginner-friendly. Here's our updated 2026 guide — three solid picks that won't overwhelm you, with honest takes on what to look for before you buy.",
    image: "/images/espresso-pour-cup.jpg",
    readTime: "6 min read",
    featured: false,
    slug: "best-espresso-machines-for-beginners-2026-guide",
  },
  {
    id: 11,
    category: "Espresso Machines",
    title: "The $300 Sweet Spot – Yes, You Can Get Real Espresso at Home",
    desc: "You don't need to spend thousands to pull real espresso. The Breville Bambino proves that great crema is achievable on a serious budget.",
    image: "/images/espresso-bambino-budget.jpg",
    readTime: "6 min read",
    featured: false,
    slug: "the-300-dollar-sweet-spot-real-espresso-at-home",
  },
  {
    id: 12,
    category: "Espresso Machines",
    title: "Stepping Up – What Crossing the $1,000 Mark Actually Buys You",
    desc: "Dual boilers, PID temperature control, and shot-to-shot consistency. Here's exactly what you get when you move into prosumer territory.",
    image: "/images/prosumer-espresso-machine.jpg",
    readTime: "6 min read",
    featured: false,
    slug: "stepping-up-what-crossing-1000-mark-actually-buys-you",
  },
  {
    id: 13,
    category: "Espresso Machines",
    title: "The Icon – Why the La Marzocco Linea Micra is Worth the Obsession",
    desc: "At $3,900 the Linea Micra is a luxury item. But once you've used one, you understand exactly why it commands that price.",
    image: "/images/la-marzocco-linea-micra.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "the-icon-la-marzocco-linea-micra-worth-the-obsession",
  },
  {
    id: 14,
    category: "Espresso Machines",
    title: "Living the Dream – The Mind-Blowing World of $20,000 Espresso Gear",
    desc: "Slayer Espresso, Kees van der Westen — a look at the high-precision engineering marvels at the absolute peak of espresso technology.",
    image: "/images/slayer-luxury-espresso.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "living-the-dream-mind-blowing-world-of-20000-espresso-gear",
  },
  {
    id: 15,
    category: "Coffee Culture",
    title: "Seattle – Exploring the Deep Roots of the Emerald City's Coffee Scene",
    desc: "The real heartbeat of Seattle's coffee history goes far deeper than one green-logo chain. Espresso Vivace and the godfather of American espresso technique.",
    image: "/images/espresso-vivace-seattle.jpg",
    readTime: "6 min read",
    featured: false,
    slug: "seattle-deep-roots-emerald-city-coffee-scene",
  },
  {
    id: 16,
    category: "Coffee Culture",
    title: "Los Angeles – Where Old Hollywood Glamour Meets the New Wave",
    desc: "LA's coffee scene is more than trendy minimalism. How the city bridged old-school diner culture with the modern specialty coffee movement.",
    image: "/images/los-angeles-coffee-shop.jpg",
    readTime: "6 min read",
    featured: false,
    slug: "los-angeles-old-hollywood-glamour-meets-new-wave",
  },
  {
    id: 17,
    category: "Coffee Culture",
    title: "San Francisco – The Birthplace of the Specialty Revolution",
    desc: "From Alfred Peet's Berkeley roastery in the '60s to launching the Third Wave — SF's defining role in shaping modern coffee culture worldwide.",
    image: "/images/san-francisco-specialty-coffee.jpg",
    readTime: "6 min read",
    featured: false,
    slug: "san-francisco-birthplace-of-specialty-revolution",
  },
  {
    id: 18,
    category: "Coffee Culture",
    title: "New York City – From Historic Italian Espresso Bars to Fast-Paced Cafés",
    desc: "From Caffe Reggio's 1920s cappuccinos to Brooklyn's modern specialty scene — a century of coffee culture told through New York's streets.",
    image: "/images/caffe-reggio-nyc.jpg",
    readTime: "6 min read",
    featured: false,
    slug: "new-york-city-italian-espresso-bars-to-fast-paced-cafes",
  },
  {
    id: 19,
    category: "Bean Picks",
    title: "Seed to Sprout – The Secret Lives of Coffee Farmers",
    desc: "A coffee bean isn't a bean at all. Discover the years of patient work farmers put in before a single usable crop is ever harvested.",
    image: "/images/coffee-farmer-cherries.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "seed-to-sprout-secret-lives-of-coffee-farmers",
  },
  {
    id: 20,
    category: "Bean Picks",
    title: "The Magic of Processing – How Washing and Drying Shapes Flavor",
    desc: "Washed vs natural — how a simple post-harvest choice completely transforms the flavors in your cup from crisp and bright to wild and fruit-forward.",
    image: "/images/coffee-natural-processing.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "the-magic-of-processing-washing-and-drying-shapes-flavor",
  },
  {
    id: 21,
    category: "Bean Picks",
    title: "The Art of the Roast – Finding the Perfect Profile in the Drum",
    desc: "Part science, part instinct. From first crack to a finished roast — what happens inside the drum that determines how your coffee tastes.",
    image: "/images/coffee-drum-roaster.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "the-art-of-the-roast-finding-perfect-profile-in-the-drum",
  },
  {
    id: 22,
    category: "Bean Picks",
    title: "Logistics and Freshness – The Journey to Your Local Shelf",
    desc: "Once beans are roasted the clock is ticking. Why the Roasted On date matters more than the expiration date — and how to win the freshness race.",
    image: "/images/coffee-bag-freshness.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "logistics-and-freshness-journey-to-your-local-shelf",
  },
  {
    id: 23,
    category: "Coffee Culture",
    title: "Inside the World Barista Championship – The Olympics of Caffeine",
    desc: "15 minutes. 4 espressos. 4 milk drinks. 4 signature beverages. An inside look at what it takes to compete at the very top of the coffee world.",
    image: "/images/world-barista-championship.jpg",
    readTime: "6 min read",
    featured: false,
    slug: "inside-world-barista-championship-olympics-of-caffeine",
  },
  {
    id: 24,
    category: "Coffee Culture",
    title: "Meet the Masters – What Makes a Top-Tier Barista Truly Elite",
    desc: "It's way more than latte art. Elite baristas are equal parts extraction scientist and hospitality expert — and the gap between good and elite is enormous.",
    image: "/images/barista-latte-art.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "meet-the-masters-what-makes-top-tier-barista-truly-elite",
  },
  {
    id: 25,
    category: "Bean Picks",
    title: "Beyond the Supermarket – Navigating Notable Specialty Coffee Brands",
    desc: "Onyx, Intelligentsia, Stumptown — brands building direct-trade relationships and delivering total transparency about where your coffee comes from.",
    image: "/images/specialty-coffee-brands.jpg",
    readTime: "6 min read",
    featured: false,
    slug: "beyond-the-supermarket-navigating-notable-specialty-coffee-brands",
  },
  {
    id: 26,
    category: "Bean Picks",
    title: "The Three Most Expensive Coffee Brands on Earth – Luxury in a Mug",
    desc: "Ospina Dynasty at $1,500 a pound. Black Ivory processed by elephants. Panama Geisha breaking auction records. The absolute peak of luxury coffee.",
    image: "/images/panama-geisha-luxury.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "three-most-expensive-coffee-brands-on-earth-luxury-in-a-mug",
  },
  {
    id: 27,
    category: "Coffee Culture",
    title: "Global Excellence – Onyx Coffee Lab (Bentonville, Arkansas, USA)",
    desc: "Ranked #1 coffee shop in the world by the Espresso Academy. Why Onyx Coffee Lab in Arkansas is completely redefining what a modern coffee brand can be.",
    image: "/images/onyx-coffee-lab.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "global-excellence-onyx-coffee-lab-bentonville-arkansas",
  },
  {
    id: 28,
    category: "Coffee Culture",
    title: "Old World Perfection – Ditta Artigianale (Florence, Italy)",
    desc: "Founded by champion barista Francesco Sanapo in the heart of Florence — where classic Italian espresso tradition beautifully embraces the modern specialty movement.",
    image: "/images/ditta-artigianale-florence.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "old-world-perfection-ditta-artigianale-florence-italy",
  },
  {
    id: 29,
    category: "Coffee Culture",
    title: "The Master of Precision – Glitch Coffee & Roasters (Tokyo, Japan)",
    desc: "Tucked in Jimbocho, Glitch treats light-roast coffee with the same reverence a master chef treats sushi. A masterclass in Japanese precision and minimalism.",
    image: "/images/glitch-coffee-tokyo.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "master-of-precision-glitch-coffee-roasters-tokyo-japan",
  },
  {
    id: 30,
    category: "Coffee Culture",
    title: "Parisian Elegance – Café Lomi (Paris, France)",
    desc: "Café Lomi roasts their own beans in an industrial-chic Paris space and supplies top bistros across France. The ideal rainy afternoon in coffee form.",
    image: "/images/cafe-lomi-paris.jpg",
    readTime: "5 min read",
    featured: false,
    slug: "parisian-elegance-cafe-lomi-paris-france",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");
    if (cat && categories.includes(cat)) {
      setActiveCategory(cat);
      setTimeout(() => {
        const el = document.getElementById("blog-filter");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Blog & Reviews | Hard House Coffee</title>
        <meta name="description" content="Explore the Hard House Coffee blog — espresso machine reviews, brewing guides, bean picks, and coffee culture articles for serious coffee lovers." />
        <meta property="og:title" content="Blog & Reviews | Hard House Coffee" />
        <meta property="og:description" content="Espresso machine reviews, brewing guides, bean picks, and coffee culture from Hard House Coffee." />
      </Helmet>
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
        <h1 className="section-title inter-title mt-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          Blog & Reviews
        </h1>
        <p style={{ color: "#b0a090", maxWidth: "480px", margin: "1rem auto 0", lineHeight: 1.7 }}>
          Gear reviews, brewing guides, bean picks, and the culture behind every cup.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Category filter */}
        <div style={{ position: "relative", marginBottom: "3rem" }}>
          <div
            id="blog-filter"
            style={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
          <div style={{ display: "flex", gap: "0.75rem", minWidth: "max-content", paddingBottom: "2px" }}>
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
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          </div>
          {/* Right fade — hints at scrollable tabs on mobile */}
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "3rem",
            height: "100%",
            background: "linear-gradient(to right, transparent, #0b0b0b)",
            pointerEvents: "none",
          }} />
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
                    fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
                    fontWeight: 700,
                    color: "#f2f2f2",
                    lineHeight: 1.4,
                    marginBottom: "1rem",
                  }}
                >
                  {featured.title}
                </h2>
                <p style={{ color: "#b0a090", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {featured.desc}
                </p>
                {(featured as any).slug ? (
                  <Link href={`/blog/${(featured as any).slug}`}>
                    <button className="btn-primary" style={{ alignSelf: "flex-start" }}>
                      Read Full Article
                    </button>
                  </Link>
                ) : (
                  <button className="btn-primary" style={{ alignSelf: "flex-start" }}>
                    Read Full Article
                  </button>
                )}
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

      <PageNav nextPath="/about" nextLabel="Our Story" />
      <Footer />
    </div>
  );
}
