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
      {/* Coffee cup — perfectly synced with smoke, same 6s fade */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9998,
          pointerEvents: "none",
          width: "clamp(240px, 30vw, 400px)",
          animation: "mugFade 6s ease-in-out forwards",
          mixBlendMode: "screen",
          filter: "brightness(0.88) contrast(1.1) saturate(0.85)",
          maskImage: "linear-gradient(to top, black 38%, rgba(0,0,0,0.65) 62%, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to top, black 38%, rgba(0,0,0,0.65) 62%, transparent 88%)",
        }}
      >
        <img
          src="/images/hero-cup.png"
          alt=""
          style={{ width: "100%", display: "block" }}
        />
      </div>

      {/* Smoke overlay */}
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
    </>
  );
}
