import { useEffect, useState } from "react";

export default function SteamEffect() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 6000);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <img
      src="/images/hero-cup.png"
      alt=""
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "clamp(320px, 55vw, 700px)",
        height: "auto",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        filter: "brightness(0.52) contrast(0.85) blur(2.5px)",
        animation: "steamRise 6s ease-in-out forwards",
      }}
    />
  );
}
