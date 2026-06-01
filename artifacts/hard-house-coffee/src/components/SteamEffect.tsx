import { useEffect, useState } from "react";

export default function SteamEffect() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 6000);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <>
      {/* Original smoke / human figures */}
      <div
        style={{
          position: "fixed",
          bottom: "-5vh",
          left: "calc(50% + 45px)",
          transform: "translateX(-50%)",
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
            filter: "sepia(0.35) brightness(1.05) contrast(0.9) blur(3px)",
          }}
        />
      </div>

      {/* Mug rim — transparent PNG, width matches "Aroma From the Ground Up!" text,
          sits at bottom center below all hero text, same fade as smoke */}
      <img
        src="/images/mug-rim.png"
        alt=""
        style={{
          position: "fixed",
          bottom: "clamp(12px, 2.5vh, 32px)",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(260px, 58vw, 620px)",
          height: "auto",
          pointerEvents: "none",
          zIndex: 9998,
          animation: "steamRise 6s ease-in-out forwards",
        }}
      />
    </>
  );
}
