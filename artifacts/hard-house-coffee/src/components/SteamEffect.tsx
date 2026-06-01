import { useEffect, useState } from "react";

export default function SteamEffect() {
  const [smokeGone, setSmokeGone] = useState(false);
  const [mugGone, setMugGone] = useState(false);

  useEffect(() => {
    // Mug fades out first — gone at 4.5s
    const mugTimer = setTimeout(() => setMugGone(true), 4500);
    // Smoke starts 0.3s after mug and runs for 6.5s → gone at 6.8s
    const smokeTimer = setTimeout(() => setSmokeGone(true), 6800);
    return () => {
      clearTimeout(mugTimer);
      clearTimeout(smokeTimer);
    };
  }, []);

  return (
    <>
      {/* Smoke — anchored at rim level, rises upward, 0.3s delay after mug appears */}
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

      {/* Mug rim — transparent PNG, anchored at bottom center, fades out quicker (4.5s) */}
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
