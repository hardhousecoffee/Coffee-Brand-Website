import { Link } from "wouter";
import { FaXTwitter, FaInstagram, FaFacebook, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa6";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const SOCIAL_LINKS = [
  { icon: FaInstagram,  label: "Instagram", href: "#" },
  { icon: FaXTwitter,   label: "X (Twitter)", href: "#" },
  { icon: FaTiktok,     label: "TikTok", href: "#" },
  { icon: FaFacebook,   label: "Facebook", href: "#" },
  { icon: FaPinterest,  label: "Pinterest", href: "#" },
  { icon: FaYoutube,    label: "YouTube", href: "#" },
];

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
                    values="0.277 0.277 0.277 0 0
                            0.241 0.241 0.241 0 0
                            0.196 0.196 0.196 0 0
                            0     0     0     1 0"
                  />
                </filter>
              </defs>
            </svg>
            <div className="flex items-center gap-0 mb-1" style={{ marginLeft: "-14px" }}>
              <img
                src="/images/logo-icon.png"
                alt="Hard House Coffee Logo"
                style={{
                  height: "72px",
                  width: "auto",
                  filter: "url(#footer-logo-red)",
                  mixBlendMode: "screen",
                }}
              />
              <h3
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "1.1rem",
                  color: "#f2f2f2",
                  letterSpacing: "0.08em",
                  lineHeight: 1.2,
                  marginLeft: "-26px",
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

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "0.85rem", marginTop: "1.4rem", flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    border: "1px solid rgba(161,79,31,0.3)",
                    color: "#b0a090",
                    fontSize: "15px",
                    transition: "all 0.22s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#a14f1f";
                    el.style.color = "#d4b896";
                    el.style.background = "rgba(161,79,31,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(161,79,31,0.3)";
                    el.style.color = "#b0a090";
                    el.style.background = "transparent";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
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
                  onClick={scrollTop}
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

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(161,79,31,0.15)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ color: "#6b5a4e", fontSize: "0.78rem" }}>
            © 2026 Hard House Coffee. All rights reserved.
          </p>

          {/* Back to Top button */}
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              background: "transparent",
              border: "1px solid rgba(161,79,31,0.35)",
              borderRadius: "6px",
              padding: "0.4rem 0.9rem",
              color: "#b0a090",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.25s ease",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#a14f1f";
              (e.currentTarget as HTMLElement).style.color = "#d4b896";
              (e.currentTarget as HTMLElement).style.background = "rgba(161,79,31,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(161,79,31,0.35)";
              (e.currentTarget as HTMLElement).style.color = "#b0a090";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Top
          </button>

          <p style={{ color: "#6b5a4e", fontSize: "0.78rem" }}>
            This site may contain affiliate links.
          </p>
        </div>

        {/* Legal nav */}
        <div
          style={{
            marginTop: "1.5rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0",
          }}
        >
          {[
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Disclaimer", href: "/disclaimer" },
            { label: "Terms of Use", href: "/terms-of-use" },
          ].map((link, i, arr) => (
            <span key={link.href} style={{ display: "flex", alignItems: "center" }}>
              <Link href={link.href}>
                <span
                  onClick={scrollTop}
                  style={{
                    color: "#6b5a4e",
                    fontSize: "0.72rem",
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                    transition: "color 0.2s",
                    padding: "0 0.1rem",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#b0a090")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b5a4e")}
                >
                  {link.label}
                </span>
              </Link>
              {i < arr.length - 1 && (
                <span style={{ color: "rgba(161,79,31,0.3)", margin: "0 0.6rem", fontSize: "0.65rem" }}>
                  |
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
