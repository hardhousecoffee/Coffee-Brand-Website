export function SteamWisps() {
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

        @keyframes shaft-drift {
          0%, 100% { opacity: 0.10; transform: rotate(-14deg) translateY(0px); }
          50%       { opacity: 0.17; transform: rotate(-14deg) translateY(-8px); }
        }
        @keyframes shaft-drift-2 {
          0%, 100% { opacity: 0.07; transform: rotate(-14deg) translateY(0px); }
          50%       { opacity: 0.13; transform: rotate(-14deg) translateY(6px); }
        }
        @keyframes shaft-drift-3 {
          0%, 100% { opacity: 0.05; transform: rotate(-14deg) translateY(0px); }
          50%       { opacity: 0.10; transform: rotate(-14deg) translateY(-4px); }
        }
      `}</style>

      {/* Deep base */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 65% at 30% 50%, #1c0f06 0%, #0d0905 100%)",
        zIndex: 0,
      }} />

      {/* Light shaft 1 — primary, left of centre */}
      <div style={{
        position: "absolute",
        top: "-20%", bottom: "-20%",
        left: "5%", width: "220px",
        background: "linear-gradient(to bottom, transparent 0%, rgba(210,140,50,0.28) 30%, rgba(200,130,40,0.32) 50%, rgba(210,140,50,0.28) 70%, transparent 100%)",
        filter: "blur(28px)",
        transform: "rotate(-14deg)",
        transformOrigin: "50% 50%",
        animation: "shaft-drift 7s ease-in-out infinite",
        zIndex: 1,
      }} />

      {/* Light shaft 2 — secondary */}
      <div style={{
        position: "absolute",
        top: "-20%", bottom: "-20%",
        left: "22%", width: "130px",
        background: "linear-gradient(to bottom, transparent 0%, rgba(190,120,35,0.18) 35%, rgba(200,130,40,0.22) 50%, rgba(190,120,35,0.18) 65%, transparent 100%)",
        filter: "blur(22px)",
        transform: "rotate(-14deg)",
        transformOrigin: "50% 50%",
        animation: "shaft-drift-2 9s ease-in-out infinite 1.5s",
        zIndex: 1,
      }} />

      {/* Light shaft 3 — faint third beam */}
      <div style={{
        position: "absolute",
        top: "-20%", bottom: "-20%",
        left: "37%", width: "90px",
        background: "linear-gradient(to bottom, transparent 0%, rgba(170,100,28,0.12) 40%, rgba(180,110,32,0.16) 50%, rgba(170,100,28,0.12) 60%, transparent 100%)",
        filter: "blur(18px)",
        transform: "rotate(-14deg)",
        transformOrigin: "50% 50%",
        animation: "shaft-drift-3 11s ease-in-out infinite 3s",
        zIndex: 1,
      }} />

      {/* Edge bleed — hot left side where light enters */}
      <div style={{
        position: "absolute",
        top: 0, bottom: 0, left: 0, width: "20%",
        background: "linear-gradient(to right, rgba(120,55,12,0.25) 0%, transparent 100%)",
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
