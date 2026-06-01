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
        bottom: "-5vh",
        left: "calc(50% + 45px)",
        width: "130vw",
        height: "115vh",
        objectFit: "contain",
        objectPosition: "center bottom",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        animation: "steamRise 6s ease-in-out forwards",
      }}
    />
  );
}
