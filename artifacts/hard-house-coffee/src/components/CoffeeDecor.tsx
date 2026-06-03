export function CoffeeDecor() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}
    >
      <style>{`
        @keyframes cf-bob-1 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes cf-bob-2 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-9px); } }
        @keyframes cf-bob-3 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
        @keyframes cf-bob-4 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-11px); } }
      `}</style>

      {/* Top-left — big bean cluster */}
      <div style={{ position: "absolute", top: "-50px", left: "-60px", animation: "cf-bob-1 7s ease-in-out infinite" }}>
        <img
          src="/images/aroma-beans.jpg"
          alt=""
          style={{
            width: "260px", borderRadius: "50%",
            transform: "rotate(28deg)",
            opacity: 0.14,
            filter: "sepia(0.5) brightness(0.75)",
          }}
        />
      </div>

      {/* Top-right — steamy mug */}
      <div style={{ position: "absolute", top: "-30px", right: "4%", animation: "cf-bob-2 9s ease-in-out infinite 1.2s" }}>
        <img
          src="/images/steamy-mug.jpg"
          alt=""
          style={{
            width: "190px", borderRadius: "12px",
            transform: "rotate(-18deg)",
            opacity: 0.11,
            filter: "sepia(0.4) brightness(0.7)",
          }}
        />
      </div>

      {/* Bottom-right — grinder beans (PNG) */}
      <div style={{ position: "absolute", bottom: "-30px", right: "-30px", animation: "cf-bob-3 8s ease-in-out infinite 2s" }}>
        <img
          src="/images/coffee-grinder-beans.png"
          alt=""
          style={{
            width: "230px",
            transform: "rotate(-22deg)",
            opacity: 0.13,
            filter: "sepia(0.3) brightness(0.8)",
          }}
        />
      </div>

      {/* Bottom-left — hero cup (PNG) */}
      <div style={{ position: "absolute", bottom: "5%", left: "2%", animation: "cf-bob-4 10s ease-in-out infinite 0.5s" }}>
        <img
          src="/images/hero-cup.png"
          alt=""
          style={{
            width: "150px",
            transform: "rotate(14deg)",
            opacity: 0.12,
            filter: "sepia(0.4) brightness(0.8)",
          }}
        />
      </div>

      {/* Mid-right — mug rim (PNG) */}
      <div style={{ position: "absolute", top: "35%", right: "-20px", animation: "cf-bob-1 11s ease-in-out infinite 3s" }}>
        <img
          src="/images/mug-rim.png"
          alt=""
          style={{
            width: "130px",
            transform: "rotate(-8deg)",
            opacity: 0.09,
            filter: "sepia(0.3) brightness(0.8)",
          }}
        />
      </div>

      {/* Mid-left — small bean cluster */}
      <div style={{ position: "absolute", top: "40%", left: "-20px", animation: "cf-bob-2 8.5s ease-in-out infinite 1.8s" }}>
        <img
          src="/images/aroma-beans.jpg"
          alt=""
          style={{
            width: "120px", borderRadius: "50%",
            transform: "rotate(-35deg)",
            opacity: 0.09,
            filter: "sepia(0.5) brightness(0.7)",
          }}
        />
      </div>
    </div>
  );
}
