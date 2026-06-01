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
        transform: "translateX(-50%)",
        width: "clamp(420px, 74vw, 1050px)",
        height: "auto",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        filter: "brightness(0.68) contrast(0.88) blur(2px)",
        animation: "steamRise 6s ease-in-out forwards",
      }}
    />
  );
}
