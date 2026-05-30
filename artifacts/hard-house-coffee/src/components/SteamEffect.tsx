import { useEffect, useState } from "react";

export default function SteamEffect() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 9000);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        animation: "steamRise 9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        // Soft elliptical mask — fades all hard edges to transparent
        maskImage:
          "radial-gradient(ellipse 70% 88% at 50% 72%, black 15%, rgba(0,0,0,0.6) 45%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 88% at 50% 72%, black 15%, rgba(0,0,0,0.6) 45%, transparent 78%)",
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
          // Reduce harsh whites + warm brown-amber tint to match homepage palette
          filter: "brightness(0.68) sepia(0.30) saturate(1.15)",
        }}
      />
    </div>
  );
}
