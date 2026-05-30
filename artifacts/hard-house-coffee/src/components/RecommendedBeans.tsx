import { Link } from "wouter";

const BEANS: Record<
  string,
  { name: string; desc: string; roast: string; origin: string; image: string; url: string }[]
> = {
  "dark-roast": [
    {
      name: "Peet's Major Dickason's Blend",
      desc: "Bold, rich, and complex with serious depth. Peet's signature dark roast has been a coffee lover's benchmark for decades — full-bodied and consistently excellent.",
      roast: "Dark",
      origin: "Multi-Origin Blend",
      image: "/images/products/coffee-beans/peets-major-dickason.png",
      url: "https://amzn.to/43Cd3xI",
    },
    {
      name: "Death Wish Coffee",
      desc: "Not just the world's strongest coffee — it's surprisingly smooth too. Medium-dark roast with cherry and chocolate notes for those who want serious caffeine and serious flavor.",
      roast: "Medium",
      origin: "Multi-Origin",
      image: "/images/products/coffee-beans/death-wish-coffee.png",
      url: "https://amzn.to/4a315Rr",
    },
    {
      name: "Intelligentsia Black Cat Sublunar",
      desc: "Intelligentsia's precision dark espresso roast. Chocolate and caramel notes with a clean, persistent finish — built for those who want intensity without bitterness.",
      roast: "Dark Espresso",
      origin: "Multi-Origin",
      image: "/images/products/coffee-beans/intelligentsia-sublunar.png",
      url: "https://amzn.to/4ecY6s7",
    },
  ],
  "espresso": [
    {
      name: "Lavazza Super Crema",
      desc: "One of the most popular espresso beans in the world. Creamy body with hazelnut and brown sugar notes — works beautifully in super-automatics and traditional machines alike.",
      roast: "Medium Espresso",
      origin: "Italian Blend",
      image: "/images/products/coffee-beans/lavazza-super-crema.png",
      url: "https://amzn.to/4xe0JSa",
    },
    {
      name: "Lavazza Gran Crema",
      desc: "A velvety espresso with chocolate and spice notes. Lavazza's barista-grade blend is engineered for dense crema and consistent extraction — shot after shot.",
      roast: "Medium",
      origin: "Italian Blend",
      image: "/images/products/coffee-beans/lavazza-gran-crema.png",
      url: "https://amzn.to/4dJkwQc",
    },
    {
      name: "Intelligentsia Black Cat Analog",
      desc: "A medium espresso roast with wild berry and chocolate notes. Intelligentsia's most approachable Black Cat expression — versatile for espresso or pour-over.",
      roast: "Medium Espresso",
      origin: "Multi-Origin",
      image: "/images/products/coffee-beans/intelligentsia-analog.png",
      url: "https://amzn.to/4u2OapW",
    },
  ],
  "specialty": [
    {
      name: "Onyx Coffee Lab Tropical Weather",
      desc: "A vibrant espresso blend with tropical fruit and floral notes. Onyx sources directly from farms — this is one of the finest examples of what specialty coffee can taste like.",
      roast: "Medium Espresso",
      origin: "Direct Trade, Multi-Origin",
      image: "/images/products/coffee-beans/onyx-tropical-weather.png",
      url: "https://amzn.to/4o5N5MM",
    },
    {
      name: "Intelligentsia Black Cat Analog",
      desc: "Berry, chocolate, and a silky finish. A medium roast that works for espresso or filter brewing — dialed in for precision baristas who want both complexity and balance.",
      roast: "Medium Espresso",
      origin: "Multi-Origin",
      image: "/images/products/coffee-beans/intelligentsia-analog.png",
      url: "https://amzn.to/4u2OapW",
    },
    {
      name: "Stumptown Holler Mountain",
      desc: "Stumptown's flagship organic blend — caramel, dark chocolate, and hazelnut in a balanced roast. Consistently ranked among the best whole-bean coffees available online.",
      roast: "Medium Organic",
      origin: "Organic Blend",
      image: "/images/products/coffee-beans/stumptown-holler-mountain.png",
      url: "https://amzn.to/3PUowpb",
    },
  ],
  "brewing": [
    {
      name: "Stumptown Holler Mountain",
      desc: "Excellent for pour-over and drip. The organic blend's caramel and chocolate notes open up beautifully when brewed slowly through a Chemex or V60.",
      roast: "Medium Organic",
      origin: "Organic Blend",
      image: "/images/products/coffee-beans/stumptown-holler-mountain.png",
      url: "https://amzn.to/3PUowpb",
    },
    {
      name: "Kicking Horse Three Sisters",
      desc: "Sweet, nutty, and medium-bodied — Three Sisters is a reliable go-to for slow-brew methods. Clean and forgiving, it's consistently enjoyable across brew styles.",
      roast: "Medium",
      origin: "Multi-Origin",
      image: "/images/products/coffee-beans/kicking-horse-three-sisters.png",
      url: "https://amzn.to/4ede5GB",
    },
    {
      name: "Lavazza Super Crema",
      desc: "Smooth enough for pour-over, creamy enough for espresso. Lavazza Super Crema is one of the most versatile beans available — reliably clean in any brew method.",
      roast: "Medium Espresso",
      origin: "Italian Blend",
      image: "/images/products/coffee-beans/lavazza-super-crema.png",
      url: "https://amzn.to/4xe0JSa",
    },
  ],
  "cold-brew": [
    {
      name: "Stumptown Holler Mountain",
      desc: "The organic blend's chocolate and caramel notes become even richer in cold brew. A go-to choice for smooth, low-acid cold concentrate that doesn't need any sweetener.",
      roast: "Medium Organic",
      origin: "Organic Blend",
      image: "/images/products/coffee-beans/stumptown-holler-mountain.png",
      url: "https://amzn.to/3PUowpb",
    },
    {
      name: "Kicking Horse Three Sisters",
      desc: "Sweet, nutty, and naturally low-acid — ideal for cold brew. Grinds beautifully coarse and extracts into a rich, clean concentrate with no harsh edges.",
      roast: "Medium",
      origin: "Multi-Origin",
      image: "/images/products/coffee-beans/kicking-horse-three-sisters.png",
      url: "https://amzn.to/4ede5GB",
    },
    {
      name: "Death Wish Coffee",
      desc: "For cold brew that hits hard. Death Wish produces a concentrate with intense caffeine and surprisingly smooth cherry-chocolate notes — great for iced drinks that need to stand up to milk and ice.",
      roast: "Medium",
      origin: "Multi-Origin",
      image: "/images/products/coffee-beans/death-wish-coffee.png",
      url: "https://amzn.to/4a315Rr",
    },
  ],
  "origins": [
    {
      name: "Onyx Coffee Lab Tropical Weather",
      desc: "Onyx works directly with farmers to craft this vibrant espresso blend. A masterclass in how origin, processing, and roasting come together into something genuinely special.",
      roast: "Medium Espresso",
      origin: "Direct Trade, Multi-Origin",
      image: "/images/products/coffee-beans/onyx-tropical-weather.png",
      url: "https://amzn.to/4o5N5MM",
    },
    {
      name: "Stumptown Holler Mountain",
      desc: "Stumptown's direct-trade relationships across Latin America come through in every bag — balanced, sweet, and traceable to the farms it came from.",
      roast: "Medium Organic",
      origin: "Latin America Blend",
      image: "/images/products/coffee-beans/stumptown-holler-mountain.png",
      url: "https://amzn.to/3PUowpb",
    },
    {
      name: "Kicking Horse Three Sisters",
      desc: "A Canadian-roasted blend drawing from high-altitude origins for a clean, sweet cup. Great for exploring how geography and altitude shape coffee flavor.",
      roast: "Medium",
      origin: "Multi-Origin",
      image: "/images/products/coffee-beans/kicking-horse-three-sisters.png",
      url: "https://amzn.to/4ede5GB",
    },
  ],
  "roasting": [
    {
      name: "Onyx Coffee Lab Tropical Weather",
      desc: "Roasted to highlight vibrant fruit and florals that only a precise light-to-medium profile can unlock. A perfect example of modern specialty roasting philosophy.",
      roast: "Medium Espresso",
      origin: "Direct Trade, Multi-Origin",
      image: "/images/products/coffee-beans/onyx-tropical-weather.png",
      url: "https://amzn.to/4o5N5MM",
    },
    {
      name: "Intelligentsia Black Cat Analog",
      desc: "Intelligentsia's roasting precision at its finest. A medium roast that preserves berry and chocolate terroir notes while maintaining sweetness and balance throughout.",
      roast: "Medium Espresso",
      origin: "Multi-Origin",
      image: "/images/products/coffee-beans/intelligentsia-analog.png",
      url: "https://amzn.to/4u2OapW",
    },
    {
      name: "Kicking Horse Three Sisters",
      desc: "A well-developed medium that shows how a skilled roaster builds sweetness and nuance without going dark. A great introduction to roast-level flavor differences.",
      roast: "Medium",
      origin: "Multi-Origin",
      image: "/images/products/coffee-beans/kicking-horse-three-sisters.png",
      url: "https://amzn.to/4ede5GB",
    },
  ],
  "freshness": [
    {
      name: "Stumptown Holler Mountain",
      desc: "Stumptown bags their beans with a roasted-on date on every bag. If you take freshness seriously, this is your benchmark — peak flavor and traceable sourcing in every order.",
      roast: "Medium Organic",
      origin: "Organic Blend",
      image: "/images/products/coffee-beans/stumptown-holler-mountain.png",
      url: "https://amzn.to/3PUowpb",
    },
    {
      name: "Onyx Coffee Lab Tropical Weather",
      desc: "Onyx roasts and ships in small, frequent batches — designed to arrive at peak flavor. Best consumed within a few weeks of the roast date for full vibrancy.",
      roast: "Medium Espresso",
      origin: "Direct Trade",
      image: "/images/products/coffee-beans/onyx-tropical-weather.png",
      url: "https://amzn.to/4o5N5MM",
    },
    {
      name: "Peet's Major Dickason's Blend",
      desc: "One of the most trusted names in fresh-roasted coffee. Peet's has been meticulous about freshness since 1966 — still one of the most reliable dark roasts you can order online.",
      roast: "Dark",
      origin: "Multi-Origin Blend",
      image: "/images/products/coffee-beans/peets-major-dickason.png",
      url: "https://amzn.to/43Cd3xI",
    },
  ],
  "general": [
    {
      name: "Lavazza Super Crema",
      desc: "The world's most popular espresso bean for a reason — creamy, balanced, and works in almost any machine. A staple in Italian cafés and serious home setups.",
      roast: "Medium Espresso",
      origin: "Italian Blend",
      image: "/images/products/coffee-beans/lavazza-super-crema.png",
      url: "https://amzn.to/4xe0JSa",
    },
    {
      name: "Peet's Major Dickason's Blend",
      desc: "Rich, bold, and reliably excellent. A dark roast that's been a coffee lover's standard for decades — widely available and always consistent.",
      roast: "Dark",
      origin: "Multi-Origin Blend",
      image: "/images/products/coffee-beans/peets-major-dickason.png",
      url: "https://amzn.to/43Cd3xI",
    },
    {
      name: "Stumptown Holler Mountain",
      desc: "Stumptown's flagship organic whole bean. Balanced caramel and chocolate that works equally well as espresso or drip — one of the easiest recommendations we make.",
      roast: "Medium Organic",
      origin: "Organic Blend",
      image: "/images/products/coffee-beans/stumptown-holler-mountain.png",
      url: "https://amzn.to/3PUowpb",
    },
  ],
};

type Variant = keyof typeof BEANS;

export default function RecommendedBeans({ variant }: { variant: Variant }) {
  const beans = BEANS[variant] ?? BEANS["general"];

  return (
    <div
      style={{
        margin: "2.5rem 0",
        padding: "1.75rem",
        background: "#111",
        borderRadius: "10px",
        border: "1px solid rgba(161,79,31,0.2)",
      }}
    >
      <p
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#a14f1f",
          marginBottom: "0.35rem",
          fontWeight: 700,
        }}
      >
        Hard House Coffee Picks
      </p>
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#f2f2f2",
          marginBottom: "0.4rem",
          paddingBottom: "0.75rem",
          borderBottom: "1px solid rgba(161,79,31,0.18)",
        }}
      >
        Recommended Coffee Beans
      </h2>
      <p
        style={{
          color: "#7a6a5a",
          fontSize: "0.8rem",
          lineHeight: 1.6,
          marginBottom: "1.25rem",
        }}
      >
        The best coffee beans we're brewing with right now — tested and recommended by our team.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {beans.map((bean, i) => (
          <div
            key={i}
            style={{
              background: "#171717",
              borderRadius: "8px",
              border: "1px solid rgba(161,79,31,0.15)",
              padding: "0.9rem 1rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                flexShrink: 0,
                borderRadius: "6px",
                overflow: "hidden",
                background: "#0b0b0b",
                border: "1px solid rgba(161,79,31,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={bean.image}
                alt={bean.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  marginBottom: "0.2rem",
                  flexWrap: "wrap",
                }}
              >
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#f2f2f2",
                    lineHeight: 1.3,
                  }}
                >
                  {bean.name}
                </p>
                <span
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#a14f1f",
                    border: "1px solid rgba(161,79,31,0.3)",
                    borderRadius: "3px",
                    padding: "1px 5px",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  {bean.roast}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#5a4e42",
                  marginBottom: "0.4rem",
                  letterSpacing: "0.04em",
                }}
              >
                {bean.origin}
              </p>
              <p
                style={{
                  fontSize: "0.79rem",
                  color: "#a09080",
                  lineHeight: 1.55,
                  marginBottom: "0.7rem",
                }}
              >
                {bean.desc}
              </p>
              <a
                href={bean.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "0.3rem 0.9rem",
                  background: "#8b2f2f",
                  borderRadius: "5px",
                  color: "#f2f2f2",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#a14f1f")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#8b2f2f")
                }
              >
                View on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
        <Link href="/products#coffee-beans">
          <button
            className="btn-secondary"
            style={{ fontSize: "0.7rem" }}
          >
            View All Recommended Coffee Beans →
          </button>
        </Link>
      </div>
    </div>
  );
}
