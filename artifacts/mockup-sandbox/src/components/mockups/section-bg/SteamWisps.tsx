export function SteamWisps() {
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap');

        @keyframes wisp-rise-1 {
          0%   { transform: translateY(0px) translateX(0px) scaleX(1); opacity: 0; }
          15%  { opacity: 0.18; }
          60%  { opacity: 0.12; }
          100% { transform: translateY(-320px) translateX(18px) scaleX(1.4); opacity: 0; }
        }
        @keyframes wisp-rise-2 {
          0%   { transform: translateY(0px) translateX(0px) scaleX(1); opacity: 0; }
          20%  { opacity: 0.14; }
          70%  { opacity: 0.08; }
          100% { transform: translateY(-280px) translateX(-14px) scaleX(1.6); opacity: 0; }
        }
        @keyframes wisp-rise-3 {
          0%   { transform: translateY(0px) translateX(0px) scaleX(1); opacity: 0; }
          25%  { opacity: 0.16; }
          65%  { opacity: 0.1; }
          100% { transform: translateY(-300px) translateX(10px) scaleX(1.3); opacity: 0; }
        }
        @keyframes wisp-rise-4 {
          0%   { transform: translateY(0px) scaleX(1); opacity: 0; }
          20%  { opacity: 0.13; }
          100% { transform: translateY(-260px) scaleX(1.5); opacity: 0; }
        }
        @keyframes wisp-rise-5 {
          0%   { transform: translateY(0px) translateX(0px) scaleX(1); opacity: 0; }
          18%  { opacity: 0.11; }
          100% { transform: translateY(-340px) translateX(-20px) scaleX(1.7); opacity: 0; }
        }

        .wisp {
          position: absolute;
          bottom: 20%;
          width: 3px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, rgba(212,184,150,0.9) 0%, rgba(212,184,150,0) 70%);
          pointer-events: none;
        }
        .w1 { left: 22%; width: 28px; height: 80px; animation: wisp-rise-1 5.2s ease-in-out infinite; animation-delay: 0s; }
        .w2 { left: 38%; width: 22px; height: 65px; animation: wisp-rise-2 6.1s ease-in-out infinite; animation-delay: 1.4s; }
        .w3 { left: 55%; width: 32px; height: 90px; animation: wisp-rise-3 4.8s ease-in-out infinite; animation-delay: 0.7s; }
        .w4 { left: 70%; width: 20px; height: 60px; animation: wisp-rise-4 5.6s ease-in-out infinite; animation-delay: 2.1s; }
        .w5 { left: 82%; width: 26px; height: 75px; animation: wisp-rise-5 6.4s ease-in-out infinite; animation-delay: 0.3s; }
        .w6 { left: 10%; width: 18px; height: 55px; animation: wisp-rise-2 5.9s ease-in-out infinite; animation-delay: 3.0s; }
      `}</style>

      {/* Warm radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(42,24,12,0.85) 0%, #0b0b0b 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Steam wisps */}
      <div className="wisp w1" />
      <div className="wisp w2" />
      <div className="wisp w3" />
      <div className="wisp w4" />
      <div className="wisp w5" />
      <div className="wisp w6" />

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
    </div>
  );
}
