import { useEffect, useState } from "react";

export default function SteamEffect() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 8000);
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
        width: "min(700px, 90vw)",
        height: "90vh",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        animation: "steamRise 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      }}
    >
      <img
        src="/images/steam2.png"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center bottom",
          display: "block",
        }}
      />
    </div>
  );
}
