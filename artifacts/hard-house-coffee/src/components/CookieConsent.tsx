import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("hhc_cookie_consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("hhc_cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#131313",
        borderTop: "1px solid rgba(161,79,31,0.35)",
        padding: "1rem 1.5rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <p style={{ color: "#b0a090", fontSize: "0.82rem", lineHeight: 1.6, maxWidth: "680px", margin: 0 }}>
        We use cookies to analyze site traffic and improve your experience. By continuing to use
        this site, you consent to our use of cookies as described in our{" "}
        <Link href="/privacy-policy">
          <span style={{ color: "#a14f1f", textDecoration: "underline", cursor: "pointer" }}>
            Privacy Policy
          </span>
        </Link>
        .
      </p>
      <button
        onClick={accept}
        className="btn-primary"
        style={{ fontSize: "0.78rem", padding: "0.5rem 1.5rem", whiteSpace: "nowrap" }}
      >
        Accept & Continue
      </button>
    </div>
  );
}
