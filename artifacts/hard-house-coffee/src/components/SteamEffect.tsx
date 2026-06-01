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
        bottom: "-40vh",
        left: "calc(50% + 45px)",
        width: "165vw",
        height: "135vh",
        objectFit: "contain",
        objectPosition: "center bottom",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        filter: "brightness(0.55) contrast(0.82) blur(3px)",
        animation: "steamRise 6s ease-in-out forwards",
      }}
    />
  );
}
