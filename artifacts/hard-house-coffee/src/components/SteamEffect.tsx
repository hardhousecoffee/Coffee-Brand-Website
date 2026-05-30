import { useEffect, useState } from "react";

export default function SteamEffect() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 7000);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "320px",
        height: "680px",
        pointerEvents: "none",
        zIndex: 9999,
        animation: "steamRise 7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      }}
    >
      <img
        src="/images/steam-transparent.png"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center bottom",
          display: "block",
        }}
      />
    </div>
  );
}
