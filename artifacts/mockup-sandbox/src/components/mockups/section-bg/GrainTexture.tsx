export function GrainTexture() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Grain texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          opacity: 0.045,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Warm radial glow — center warmth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(42,24,12,0.85) 0%, #0b0b0b 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "3rem 2rem", maxWidth: "700px" }}>
        <p
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "0.7rem",
            letterSpacing: "0.22em",
            color: "#a14f1f",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Recommended Products
        </p>
        <h1
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 400,
            color: "#f2f2f2",
            letterSpacing: "0.08em",
            marginBottom: "1.2rem",
            lineHeight: 1.1,
          }}
        >
          Coffee Essentials
        </h1>
        <p
          style={{
            color: "#b0a090",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: "460px",
            margin: "0 auto",
          }}
        >
          Expert-tested espresso machines, coffee makers and brewing gear — curated for serious coffee lovers.
        </p>
      </div>

      {/* Subtle amber top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(161,79,31,0.5), transparent)",
          zIndex: 3,
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap');
      `}</style>
    </div>
  );
}
