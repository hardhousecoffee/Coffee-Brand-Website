export function CoffeeDecor() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute", inset: 0,
        pointerEvents: "none", zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* SVG filter for organic warping */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="steam-warp" x="-60%" y="-20%" width="220%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.035 0.08"
              numOctaves="4"
              seed="2"
              result="noise"
            >
              <animate
                attributeName="seed"
                values="2;8;14;2"
                dur="12s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="28"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <style>{`
        @keyframes steam-up {
          0%   { transform: translateY(0px);    opacity: 0; }
          8%   { opacity: 0.65; }
          65%  { opacity: 0.40; }
          100% { transform: translateY(-320px); opacity: 0; }
        }
        .steam-wisp {
          position: absolute;
          bottom: 0;
          border-radius: 50px;
          filter: url(#steam-warp) blur(7px);
          transform-origin: bottom center;
          animation: steam-up linear infinite;
          will-change: transform, opacity;
        }
      `}</style>

      {/* 7 wisps — each a narrow vertical gradient strip */}
      <div className="steam-wisp" style={{
        left: "8%",  width: "22px", height: "260px",
        background: "linear-gradient(to top, rgba(225,205,180,0.9) 0%, rgba(225,205,180,0) 100%)",
        animationDuration: "6.2s", animationDelay: "0s",
      }} />

      <div className="steam-wisp" style={{
        left: "20%", width: "18px", height: "220px",
        background: "linear-gradient(to top, rgba(220,200,175,0.85) 0%, rgba(220,200,175,0) 100%)",
        animationDuration: "8.0s", animationDelay: "1.3s",
      }} />

      <div className="steam-wisp" style={{
        left: "33%", width: "26px", height: "290px",
        background: "linear-gradient(to top, rgba(230,210,185,0.90) 0%, rgba(230,210,185,0) 100%)",
        animationDuration: "7.0s", animationDelay: "0.7s",
      }} />

      <div className="steam-wisp" style={{
        left: "46%", width: "20px", height: "250px",
        background: "linear-gradient(to top, rgba(228,208,182,0.88) 0%, rgba(228,208,182,0) 100%)",
        animationDuration: "9.0s", animationDelay: "2.5s",
      }} />

      <div className="steam-wisp" style={{
        left: "60%", width: "24px", height: "270px",
        background: "linear-gradient(to top, rgba(232,212,187,0.87) 0%, rgba(232,212,187,0) 100%)",
        animationDuration: "6.8s", animationDelay: "1.0s",
      }} />

      <div className="steam-wisp" style={{
        left: "74%", width: "19px", height: "230px",
        background: "linear-gradient(to top, rgba(218,198,172,0.82) 0%, rgba(218,198,172,0) 100%)",
        animationDuration: "7.5s", animationDelay: "3.2s",
      }} />

      <div className="steam-wisp" style={{
        left: "87%", width: "21px", height: "240px",
        background: "linear-gradient(to top, rgba(224,204,178,0.86) 0%, rgba(224,204,178,0) 100%)",
        animationDuration: "8.5s", animationDelay: "0.4s",
      }} />
    </div>
  );
}
