export function CoffeeDecor() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}
    >
      <style>{`
        @keyframes smoke-a {
          0%   { transform: translateY(0) scaleX(1);   opacity: 0; }
          12%  { opacity: 0.07; }
          60%  { opacity: 0.045; }
          100% { transform: translateY(-110%) scaleX(2.2); opacity: 0; }
        }
        @keyframes smoke-b {
          0%   { transform: translateY(0) scaleX(1);   opacity: 0; }
          15%  { opacity: 0.055; }
          65%  { opacity: 0.03; }
          100% { transform: translateY(-95%) scaleX(1.9); opacity: 0; }
        }
        @keyframes smoke-c {
          0%   { transform: translateY(0) scaleX(1);   opacity: 0; }
          18%  { opacity: 0.06; }
          55%  { opacity: 0.035; }
          100% { transform: translateY(-105%) scaleX(2.4); opacity: 0; }
        }
        @keyframes smoke-d {
          0%   { transform: translateY(0) scaleX(1);   opacity: 0; }
          20%  { opacity: 0.05; }
          70%  { opacity: 0.025; }
          100% { transform: translateY(-90%) scaleX(2.0); opacity: 0; }
        }
        @keyframes smoke-e {
          0%   { transform: translateY(0) scaleX(1);   opacity: 0; }
          14%  { opacity: 0.065; }
          60%  { opacity: 0.04; }
          100% { transform: translateY(-100%) scaleX(1.7); opacity: 0; }
        }
      `}</style>

      {/* Smoke column 1 */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "8%",
        width: "320px", height: "70%",
        background: "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(220,200,180,0.9) 0%, transparent 100%)",
        filter: "blur(42px)",
        transformOrigin: "bottom center",
        animation: "smoke-a 14s ease-in-out infinite",
      }} />

      {/* Smoke column 2 */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "28%",
        width: "260px", height: "65%",
        background: "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(210,195,175,0.9) 0%, transparent 100%)",
        filter: "blur(36px)",
        transformOrigin: "bottom center",
        animation: "smoke-b 18s ease-in-out infinite 3.5s",
      }} />

      {/* Smoke column 3 — centre */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "46%",
        width: "380px", height: "75%",
        background: "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(225,205,185,0.9) 0%, transparent 100%)",
        filter: "blur(50px)",
        transformOrigin: "bottom center",
        animation: "smoke-c 16s ease-in-out infinite 1.2s",
      }} />

      {/* Smoke column 4 */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "65%",
        width: "240px", height: "60%",
        background: "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(210,190,170,0.9) 0%, transparent 100%)",
        filter: "blur(34px)",
        transformOrigin: "bottom center",
        animation: "smoke-d 20s ease-in-out infinite 5s",
      }} />

      {/* Smoke column 5 */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "82%",
        width: "300px", height: "68%",
        background: "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(215,198,178,0.9) 0%, transparent 100%)",
        filter: "blur(44px)",
        transformOrigin: "bottom center",
        animation: "smoke-e 15s ease-in-out infinite 2.3s",
      }} />
    </div>
  );
}
