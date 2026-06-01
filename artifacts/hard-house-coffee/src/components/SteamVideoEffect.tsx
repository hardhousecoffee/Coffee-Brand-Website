import { useEffect, useRef, useState } from "react";

export default function SteamVideoEffect() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "gone">("in");

  useEffect(() => {
    const holdTimer  = setTimeout(() => setPhase("hold"), 400);
    const fadeTimer  = setTimeout(() => setPhase("out"),  2400);
    const goneTimer  = setTimeout(() => setPhase("gone"), 3800);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  if (phase === "gone") return null;

  const opacity =
    phase === "in"   ? 0   :
    phase === "hold" ? 1   :
    /* out */          0;

  const transition =
    phase === "in"  ? "opacity 0.4s ease" :
    phase === "out" ? "opacity 1.3s ease" :
    "none";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        opacity,
        transition,
        mixBlendMode: "screen",
        maskImage:
          "radial-gradient(ellipse 80% 90% at 50% 60%, black 25%, rgba(0,0,0,0.6) 55%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 90% at 50% 60%, black 25%, rgba(0,0,0,0.6) 55%, transparent 80%)",
      }}
    >
      <video
        ref={videoRef}
        src="/videos/steam-intro.mp4"
        muted
        playsInline
        autoPlay
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 60%",
        }}
      />
    </div>
  );
}
