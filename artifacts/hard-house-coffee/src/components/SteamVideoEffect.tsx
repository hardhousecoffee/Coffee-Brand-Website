// Checkpoint: Steaming Hot Coffee Cup with Swirling Aroma steam — June 1, 2026
import { useEffect, useRef, useState } from "react";

export default function SteamVideoEffect() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [gone, setGone]       = useState(false);

  useEffect(() => {
    const fadeInTimer  = setTimeout(() => setOpacity(1),    80);
    const fadeOutTimer = setTimeout(() => setOpacity(0),  3500);
    const goneTimer    = setTimeout(() => setGone(true),  6100);
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  if (gone) return null;

  return (
    <div
      className="steam-video-overlay"
      style={{
        opacity,
        transition: "opacity 2.5s ease",
        mixBlendMode: "screen",
        maskImage:
          "radial-gradient(ellipse 78% 88% at 50% 62%, black 18%, rgba(0,0,0,0.55) 48%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 78% 88% at 50% 62%, black 18%, rgba(0,0,0,0.55) 48%, transparent 75%)",
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
