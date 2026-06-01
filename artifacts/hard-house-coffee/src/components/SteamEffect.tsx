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
        bottom: "6vh",
        left: "50%",
        height: "clamp(320px, 72vh, 680px)",
        width: "auto",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        filter: "brightness(0.70) contrast(0.88) blur(1.5px)",
        animation: "mugRise 6s ease-in-out forwards",
      }}
    />
  );
}
