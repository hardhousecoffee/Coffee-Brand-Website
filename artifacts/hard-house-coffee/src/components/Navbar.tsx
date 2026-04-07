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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(11,11,11,0.97)"
          : "transparent",
        borderBottom: scrolled ? "1px solid rgba(161,79,31,0.25)" : "none",
        backdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-10 flex items-center justify-center"
        style={{ height: "68px" }}
      >
        {/* Desktop nav links — centered */}
        <div className="hidden md:flex items-center gap-6">
          {/* Left group: Home, Blog */}
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className="nav-link"
                onClick={scrollTop}
                style={{
                  color: location === link.href ? "#a14f1f" : "#f2f2f2",
                  borderBottom: location === link.href ? "1px solid #a14f1f" : "none",
                  paddingBottom: "2px",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}

          {/* Spacer between groups */}
          <div style={{ width: "6rem" }} />

          {/* Right group: About, Shop Gear */}
          {navLinks.slice(2).map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className="nav-link"
                onClick={scrollTop}
                style={{
                  color: location === link.href ? "#a14f1f" : "#f2f2f2",
                  borderBottom: location === link.href ? "1px solid #a14f1f" : "none",
                  paddingBottom: "2px",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/products">
            <button
              className="btn-primary"
              onClick={scrollTop}
              style={{ padding: "0.45rem 1.2rem", fontSize: "0.75rem" }}
            >
              Shop Gear
            </button>
          </Link>
        </div>

        {/* Mobile: just hamburger */}
        <div className="md:hidden flex items-center justify-between w-full">
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
            <button
              className="btn-primary w-full mt-4"
              onClick={() => { setMenuOpen(false); scrollTop(); }}
            >
              Shop Gear
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
