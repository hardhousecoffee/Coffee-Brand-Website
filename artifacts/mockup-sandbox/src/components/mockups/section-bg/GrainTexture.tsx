export function GrainTexture() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0905",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap');

        @keyframes band-breathe-1 {
          0%, 100% { opacity: 0.12; transform: scaleY(1); }
          50% { opacity: 0.18; transform: scaleY(1.08); }
        }
        @keyframes band-breathe-2 {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.13; }
        }
        @keyframes band-breathe-3 {
          0%, 100% { opacity: 0.06; }
          60% { opacity: 0.11; }
        }
      `}</style>

      {/* Deep base vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 90% 70% at 50% 50%, #1a0e07 0%, #0d0905 100%)",
        zIndex: 0,
      }} />

      {/* Primary glow band — centre */}
      <div style={{
        position: "absolute",
        top: "42%", left: "-10%", right: "-10%",
        height: "90px",
        background: "linear-gradient(to right, transparent 0%, rgba(180,100,30,0.22) 20%, rgba(210,140,50,0.30) 50%, rgba(180,100,30,0.22) 80%, transparent 100%)",
        filter: "blur(22px)",
        transform: "rotate(-1.5deg)",
        animation: "band-breathe-1 6s ease-in-out infinite",
        zIndex: 1,
      }} />

      {/* Secondary band — above */}
      <div style={{
        position: "absolute",
        top: "28%", left: "-10%", right: "-10%",
        height: "50px",
        background: "linear-gradient(to right, transparent 0%, rgba(160,80,20,0.12) 25%, rgba(200,130,45,0.18) 50%, rgba(160,80,20,0.12) 75%, transparent 100%)",
        filter: "blur(18px)",
        transform: "rotate(-1deg)",
        animation: "band-breathe-2 8s ease-in-out infinite 1s",
        zIndex: 1,
      }} />

      {/* Tertiary band — below */}
      <div style={{
        position: "absolute",
        top: "58%", left: "-10%", right: "-10%",
        height: "40px",
        background: "linear-gradient(to right, transparent 0%, rgba(140,70,18,0.10) 30%, rgba(190,120,40,0.14) 50%, rgba(140,70,18,0.10) 70%, transparent 100%)",
        filter: "blur(16px)",
        transform: "rotate(-1deg)",
        animation: "band-breathe-3 9s ease-in-out infinite 2s",
        zIndex: 1,
      }} />

      {/* Ambient edge glow — left */}
      <div style={{
        position: "absolute",
        top: 0, bottom: 0, left: 0,
        width: "35%",
        background: "linear-gradient(to right, rgba(90,40,10,0.18) 0%, transparent 100%)",
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "3rem 2rem", maxWidth: "700px" }}>
        <p style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "0.68rem", letterSpacing: "0.24em",
          color: "#a14f1f", textTransform: "uppercase", marginBottom: "1rem",
        }}>
          Recommended Products
        </p>
        <h1 style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400,
          color: "#f2f2f2", letterSpacing: "0.08em",
          marginBottom: "1.2rem", lineHeight: 1.1,
        }}>
          Coffee Essentials
        </h1>
        <p style={{
          color: "#b0a090", fontSize: "1rem", lineHeight: 1.7,
          maxWidth: "460px", margin: "0 auto",
        }}>
          Expert-tested espresso machines, coffee makers and brewing gear — curated for serious coffee lovers.
        </p>
      </div>

      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(to right, transparent, rgba(161,79,31,0.4), transparent)",
        zIndex: 3,
      }} />
    </div>
  );
}
