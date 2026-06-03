export function CoffeeDecor() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}
    >
      <style>{`
        /* Rising motion — narrows at bottom, spreads as it climbs */
        @keyframes steam-rise {
          0%   { transform: translateY(0)    scaleX(1);   opacity: 0; }
          8%   { opacity: 0.55; }
          60%  { opacity: 0.32; }
          100% { transform: translateY(-115%) scaleX(3.2); opacity: 0; }
        }
        /* Gentle organic sway variants */
        @keyframes sway-a {
          0%, 100% { transform: translateX(0px); }
          28%      { transform: translateX(13px); }
          65%      { transform: translateX(-9px); }
        }
        @keyframes sway-b {
          0%, 100% { transform: translateX(0px); }
          35%      { transform: translateX(-15px); }
          72%      { transform: translateX(10px); }
        }
        @keyframes sway-c {
          0%, 100% { transform: translateX(0px); }
          42%      { transform: translateX(11px); }
          78%      { transform: translateX(-13px); }
        }
      `}</style>

      {/* Wisp 1 */}
      <div style={{ position: "absolute", bottom: 0, left: "12%", animation: "sway-a 4.1s ease-in-out infinite" }}>
        <div style={{
          width: "28px", height: "60%",
          background: "linear-gradient(to top, rgba(230,210,185,0.75) 0%, rgba(230,210,185,0) 100%)",
          filter: "blur(10px)",
          transformOrigin: "bottom center",
          animation: "steam-rise 7.5s ease-in-out infinite",
        }} />
      </div>

      {/* Wisp 2 */}
      <div style={{ position: "absolute", bottom: 0, left: "26%", animation: "sway-b 5.2s ease-in-out infinite 1.4s" }}>
        <div style={{
          width: "22px", height: "52%",
          background: "linear-gradient(to top, rgba(225,205,180,0.65) 0%, rgba(225,205,180,0) 100%)",
          filter: "blur(8px)",
          transformOrigin: "bottom center",
          animation: "steam-rise 9.2s ease-in-out infinite 2.1s",
        }} />
      </div>

      {/* Wisp 3 — tallest, centre-left */}
      <div style={{ position: "absolute", bottom: 0, left: "40%", animation: "sway-a 3.8s ease-in-out infinite 0.6s" }}>
        <div style={{
          width: "32px", height: "72%",
          background: "linear-gradient(to top, rgba(235,215,190,0.70) 0%, rgba(235,215,190,0) 100%)",
          filter: "blur(12px)",
          transformOrigin: "bottom center",
          animation: "steam-rise 8.0s ease-in-out infinite 0.5s",
        }} />
      </div>

      {/* Wisp 4 — centre-right */}
      <div style={{ position: "absolute", bottom: 0, left: "55%", animation: "sway-c 4.6s ease-in-out infinite 2.8s" }}>
        <div style={{
          width: "24px", height: "58%",
          background: "linear-gradient(to top, rgba(228,208,183,0.60) 0%, rgba(228,208,183,0) 100%)",
          filter: "blur(9px)",
          transformOrigin: "bottom center",
          animation: "steam-rise 10.5s ease-in-out infinite 3.5s",
        }} />
      </div>

      {/* Wisp 5 */}
      <div style={{ position: "absolute", bottom: 0, left: "69%", animation: "sway-b 4.9s ease-in-out infinite 1.0s" }}>
        <div style={{
          width: "26px", height: "64%",
          background: "linear-gradient(to top, rgba(232,212,187,0.68) 0%, rgba(232,212,187,0) 100%)",
          filter: "blur(11px)",
          transformOrigin: "bottom center",
          animation: "steam-rise 8.8s ease-in-out infinite 1.2s",
        }} />
      </div>

      {/* Wisp 6 */}
      <div style={{ position: "absolute", bottom: 0, left: "82%", animation: "sway-a 5.5s ease-in-out infinite 3.3s" }}>
        <div style={{
          width: "20px", height: "50%",
          background: "linear-gradient(to top, rgba(222,202,177,0.62) 0%, rgba(222,202,177,0) 100%)",
          filter: "blur(8px)",
          transformOrigin: "bottom center",
          animation: "steam-rise 7.2s ease-in-out infinite 4.0s",
        }} />
      </div>
    </div>
  );
}
