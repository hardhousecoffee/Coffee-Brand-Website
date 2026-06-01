import { useEffect, useState } from "react";

export default function SteamEffect() {
  const [smokeGone, setSmokeGone] = useState(false);
  const [mugGone, setMugGone] = useState(false);

  useEffect(() => {
    const mugTimer = setTimeout(() => setMugGone(true), 4500);
    const smokeTimer = setTimeout(() => setSmokeGone(true), 6800);
    return () => {
      clearTimeout(mugTimer);
      clearTimeout(smokeTimer);
    };
  }, []);

  return (
    <>
      {!smokeGone && (
        <div
          style={{
            position: "fixed",
            bottom: "clamp(12px, 2.5vh, 32px)",
            left: "calc(50% + 45px)",
            transform: "translateX(-50%)",
            width: "130vw",
            height: "115vh",
            pointerEvents: "none",
            zIndex: 9999,
            mixBlendMode: "screen",
            animation: "steamRise 6.5s ease-in-out 0.3s both",
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
      )}

      {!mugGone && (
        <img
          src="/images/mug-rim.png"
          alt=""
          style={{
            position: "fixed",
            bottom: "clamp(4px, 0.8vh, 12px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(300px, 70vw, 740px)",
            height: "auto",
            pointerEvents: "none",
            zIndex: 9998,
            animation: "mugFade 4.5s ease-in-out forwards",
          }}
        />
      )}
    </>
  );
}
