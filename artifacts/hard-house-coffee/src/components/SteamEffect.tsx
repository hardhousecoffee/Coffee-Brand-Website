import { useEffect, useState } from "react";

export default function SteamEffect() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 6000);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "-5vh",
        left: "50%",
        width: "130vw",
        height: "115vh",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        animation: "steamRise 6s ease-in-out forwards",
        maskImage:
          "radial-gradient(ellipse 72% 85% at 50% 68%, black 10%, rgba(0,0,0,0.55) 42%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 72% 85% at 50% 68%, black 10%, rgba(0,0,0,0.55) 42%, transparent 75%)",
      }}
    >
      <img
        src="/images/steam2.png"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          display: "block",
          filter: "sepia(0.4) brightness(0.8) contrast(0.9) blur(4px)",
        }}
      />
    </div>
  );
}
