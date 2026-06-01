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
      {/* Smoke — outer div: mask only. Inner div: blur only, oversized so its
          hard edge stays outside the masked zone. overflow:hidden clips the
          inner div at the outer boundary, hiding any blur artefacts. */}
      {!smokeGone && (
        <div
          style={{
            position: "fixed",
            bottom: "-110px",
            left: "calc(50% + 45px)",
            transform: "translateX(-50%)",
            width: "130vw",
            height: "115vh",
            pointerEvents: "none",
            zIndex: 9999,
            mixBlendMode: "screen",
            animation: "steamRise 6.5s ease-in-out 0.3s both",
            overflow: "hidden",
            maskImage:
              "radial-gradient(ellipse 80% 90% at 50% 58%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.45) 48%, rgba(0,0,0,0.22) 63%, rgba(0,0,0,0.07) 77%, rgba(0,0,0,0.02) 87%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 90% at 50% 58%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.45) 48%, rgba(0,0,0,0.22) 63%, rgba(0,0,0,0.07) 77%, rgba(0,0,0,0.02) 87%, transparent 95%)",
          }}
        >
          {/* Inner wrapper: extends 16px in every direction so the blur's hard
              edge is always outside the masked container and never visible */}
          <div
            style={{
              position: "absolute",
              inset: "-16px",
              filter: "blur(6px)",
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
                filter: "sepia(0.35) brightness(1.05) contrast(0.9)",
              }}
            />
          </div>
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
