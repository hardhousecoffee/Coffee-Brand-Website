import { useEffect, useRef, useState } from "react";

export default function SteamVideoEffect() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "gone">("in");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("hold"), 300);
    const fadeTimer = setTimeout(() => setPhase("out"),  2400);
    const goneTimer = setTimeout(() => setPhase("gone"), 3800);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  if (phase === "gone") return null;

  const opacity =
    phase === "in"   ? 0 :
    phase === "hold" ? 1 :
    0;

  const transition =
    phase === "in"  ? "opacity 0.3s ease" :
    phase === "out" ? "opacity 1.4s ease" :
    "none";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "clamp(360px, 62vw, 820px)",
        height: "78vh",
        pointerEvents: "none",
        zIndex: 9999,
        opacity,
        transition,
        mixBlendMode: "screen",
        maskImage: [
          "radial-gradient(ellipse 78% 88% at 50% 62%,",
          "  black 18%,",
          "  rgba(0,0,0,0.55) 48%,",
          "  transparent 75%)",
        ].join(" "),
        WebkitMaskImage: [
          "radial-gradient(ellipse 78% 88% at 50% 62%,",
          "  black 18%,",
          "  rgba(0,0,0,0.55) 48%,",
          "  transparent 75%)",
        ].join(" "),
      }}
    >
      <video
        ref={videoRef}
        src="/videos/steam-overlay.mp4"
        muted
        playsInline
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
          display: "block",
        }}
      />
    </div>
  );
}
