import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(11,11,11,0.97)"
          : "transparent",
        borderBottom: scrolled ? "1px solid rgba(161,79,31,0.25)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        outline: "1px solid transparent",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-10 flex items-center justify-center"
        style={{ height: "68px", position: "relative" }}
      >
        {/* Back button — desktop, all pages except home */}
        {!isHome && (
          <button
            onClick={() => window.history.back()}
            style={{
              position: "absolute",
              left: "2.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#b0a090",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'Cinzel Decorative', serif",
              transition: "color 0.2s ease",
              padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#f2f2f2")}
            onMouseLeave={e => (e.currentTarget.style.color = "#b0a090")}
            className="hidden md:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-pulse">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back
          </button>
        )}

        {/* Desktop nav links — centered */}
        <div className="hidden md:flex items-center gap-6">
          {/* Left group: Home, Blog */}
          {navLinks.slice(0, 2).map((link) => {
            const isActive = location === link.href && link.href !== "/";
            const allowHover = !(link.href === "/" && location === "/");
            return (
              <Link key={link.href} href={link.href}>
                <span
                  className={`nav-link${allowHover ? " nav-item-glow" : ""}`}
                  onClick={scrollTop}
                  style={{
                    color: isActive ? "#d4b896" : "#f2f2f2",
                    border: isActive ? "1px solid rgba(161,79,31,0.55)" : "1px solid transparent",
                    padding: "0.28rem 0.65rem",
                    borderRadius: "5px",
                    background: isActive ? "rgba(161,79,31,0.08)" : "transparent",
                    cursor: "pointer",
                    display: "inline-block",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}

          {/* Spacer between groups */}
          <div style={{ width: "6rem" }} />

          {/* Right group: About + Shop */}
          {navLinks.slice(2).map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className="nav-link nav-item-glow"
                onClick={scrollTop}
                style={{
                  color: location === link.href ? "#d4b896" : "#f2f2f2",
                  border: location === link.href ? "1px solid rgba(161,79,31,0.55)" : "1px solid transparent",
                  padding: "0.28rem 0.65rem",
                  borderRadius: "5px",
                  background: location === link.href ? "rgba(161,79,31,0.08)" : "transparent",
                  cursor: "pointer",
                  display: "inline-block",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/products">
            <span
              className="nav-link nav-item-glow"
              onClick={scrollTop}
              style={{
                color: location === "/products" ? "#d4b896" : "#f2f2f2",
                border: location === "/products" ? "1px solid rgba(161,79,31,0.55)" : "1px solid transparent",
                padding: "0.28rem 0.65rem",
                borderRadius: "5px",
                background: location === "/products" ? "rgba(161,79,31,0.08)" : "transparent",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              Shop
            </span>
          </Link>
        </div>

        {/* Mobile: logo + back + hamburger */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link href="/">
              <span
                onClick={scrollTop}
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "0.75rem",
                  color: "#f2f2f2",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                }}
              >
                HHC
              </span>
            </Link>
            {!isHome && (
              <button
                onClick={() => window.history.back()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#b0a090",
                  fontSize: "0.77rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "'Cinzel Decorative', serif",
                  padding: 0,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-pulse">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back
              </button>
            )}
          </div>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "#f2f2f2",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform:
                    menuOpen && i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : menuOpen && i === 2
                        ? "translateY(-7px) rotate(-45deg)"
                        : menuOpen && i === 1
                          ? "scaleX(0)"
                          : "none",
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(11,11,11,0.98)",
            borderTop: "1px solid rgba(161,79,31,0.2)",
            padding: "1.5rem 1.5rem 2rem",
          }}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                onClick={() => { setMenuOpen(false); scrollTop(); }}
                style={{
                  padding: "0.8rem 0",
                  borderBottom: "1px solid rgba(161,79,31,0.1)",
                  color: location === link.href ? "#a14f1f" : "#f2f2f2",
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <Link href="/products">
            <div
              onClick={() => { setMenuOpen(false); scrollTop(); }}
              style={{
                padding: "0.8rem 0",
                borderBottom: "1px solid rgba(161,79,31,0.1)",
                color: location === "/products" ? "#a14f1f" : "#f2f2f2",
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Shop
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
