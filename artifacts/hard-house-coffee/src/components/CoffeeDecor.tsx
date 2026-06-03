export function CoffeeDecor() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}
    >
      <style>{`
        @keyframes smoke-a {
          0%   { transform: translateY(0) scaleX(1);    opacity: 0; }
          10%  { opacity: 0.28; }
          55%  { opacity: 0.18; }
          100% { transform: translateY(-110%) scaleX(2.4); opacity: 0; }
        }
        @keyframes smoke-b {
          0%   { transform: translateY(0) scaleX(1);    opacity: 0; }
          12%  { opacity: 0.22; }
          60%  { opacity: 0.14; }
          100% { transform: translateY(-95%) scaleX(2.0);  opacity: 0; }
        }
        @keyframes smoke-c {
          0%   { transform: translateY(0) scaleX(1);    opacity: 0; }
          14%  { opacity: 0.30; }
          50%  { opacity: 0.20; }
          100% { transform: translateY(-105%) scaleX(2.6); opacity: 0; }
        }
        @keyframes smoke-d {
          0%   { transform: translateY(0) scaleX(1);    opacity: 0; }
          16%  { opacity: 0.20; }
          65%  { opacity: 0.12; }
          100% { transform: translateY(-90%) scaleX(1.8);  opacity: 0; }
        }
        @keyframes smoke-e {
          0%   { transform: translateY(0) scaleX(1);    opacity: 0; }
          11%  { opacity: 0.25; }
          58%  { opacity: 0.16; }
          100% { transform: translateY(-100%) scaleX(2.2); opacity: 0; }
        }
      `}</style>

      {/* Smoke column 1 */}
      <div style={{
        position: "absolute", bottom: "-5%", left: "6%",
        width: "340px", height: "80%",
        background: "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(230,210,185,1) 0%, transparent 100%)",
        filter: "blur(44px)",
        transformOrigin: "bottom center",
        animation: "smoke-a 13s ease-in-out infinite",
      }} />

      {/* Smoke column 2 */}
      <div style={{
        position: "absolute", bottom: "-5%", left: "26%",
        width: "280px", height: "72%",
        background: "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(220,200,175,1) 0%, transparent 100%)",
        filter: "blur(38px)",
        transformOrigin: "bottom center",
        animation: "smoke-b 17s ease-in-out infinite 3s",
      }} />

      {/* Smoke column 3 — centre */}
      <div style={{
        position: "absolute", bottom: "-5%", left: "44%",
        width: "400px", height: "85%",
        background: "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(235,215,190,1) 0%, transparent 100%)",
        filter: "blur(52px)",
        transformOrigin: "bottom center",
        animation: "smoke-c 15s ease-in-out infinite 1s",
      }} />

      {/* Smoke column 4 */}
      <div style={{
        position: "absolute", bottom: "-5%", left: "64%",
        width: "260px", height: "68%",
        background: "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(218,198,172,1) 0%, transparent 100%)",
        filter: "blur(36px)",
        transformOrigin: "bottom center",
        animation: "smoke-d 19s ease-in-out infinite 5s",
      }} />

      {/* Smoke column 5 */}
      <div style={{
        position: "absolute", bottom: "-5%", left: "80%",
        width: "320px", height: "76%",
        background: "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(225,205,180,1) 0%, transparent 100%)",
        filter: "blur(46px)",
        transformOrigin: "bottom center",
        animation: "smoke-e 14s ease-in-out infinite 2s",
      }} />
    </div>
  );
}
