import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0b0b0b", borderTop: "1px solid rgba(161,79,31,0.2)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* Hidden SVG filter — same red colorization as hero */}
            <svg style={{ position: "absolute", width: 0, height: 0 }}>
              <defs>
                <filter id="footer-logo-red" colorInterpolationFilters="sRGB">
                  <feColorMatrix
                    type="matrix"
                    values="0.333 0.333 0.333 0 0
                            0     0     0     0 0
                            0     0     0     0 0
                            0     0     0     1 0"
                  />
                </filter>
              </defs>
            </svg>
            <div className="flex items-center gap-0 mb-4">
              <img
                src="/images/logo-icon.png"
                alt="Hard House Coffee Logo"
                style={{
                  height: "100px",
                  width: "auto",
                  filter: "url(#footer-logo-red)",
                  mixBlendMode: "screen",
                  marginTop: "8px",
                }}
              />
              <h3
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "1.15rem",
                  color: "#f2f2f2",
                  letterSpacing: "0.08em",
                  lineHeight: 1.2,
                  marginLeft: "-36px",
                }}
              >
                HARD HOUSE COFFEE
              </h3>
            </div>
            <p
              style={{
                color: "#b0a090",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                maxWidth: "300px",
              }}
            >
              A premium coffee brand built for people who refuse to settle. Bold, dark, and always deliberate.
            </p>
            <div
              style={{
                width: "50px",
                height: "2px",
                background: "linear-gradient(to right, #8b2f2f, #a14f1f)",
                marginTop: "1.2rem",
              }}
            />
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                color: "#f2f2f2",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "1.2rem",
              }}
            >
              Explore
            </h4>
            {[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Products", href: "/products" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  style={{
                    color: "#b0a090",
                    fontSize: "0.85rem",
                    marginBottom: "0.6rem",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#a14f1f")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#b0a090")
                  }
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div>
            <h4
              style={{
                color: "#f2f2f2",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "1.2rem",
              }}
            >
              Blog Topics
            </h4>
            {[
              "Gear Reviews",
              "Brewing Guides",
              "Bean Picks",
              "Espresso Machines",
              "Coffee Culture",
            ].map((cat) => (
              <div
                key={cat}
                style={{
                  color: "#b0a090",
                  fontSize: "0.85rem",
                  marginBottom: "0.6rem",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#a14f1f")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#b0a090")
                }
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(161,79,31,0.15)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p style={{ color: "#6b5a4e", fontSize: "0.78rem" }}>
            © 2025 Hard House Coffee. All rights reserved.
          </p>
          <p style={{ color: "#6b5a4e", fontSize: "0.78rem" }}>
            This site may contain affiliate links.
          </p>
        </div>
      </div>
    </footer>
  );
}
