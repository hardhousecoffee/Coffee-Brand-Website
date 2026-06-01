import { useEffect, useRef, useState } from "react";

export default function SteamVideoEffect() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [gone, setGone]       = useState(false);

  useEffect(() => {
    // Small delay so the browser paints opacity:0 first, then transitions up
    const fadeInTimer  = setTimeout(() => setOpacity(1),    80);
    // Start fading out after branding has been visible a while
    const fadeOutTimer = setTimeout(() => setOpacity(0),  5800);
    // Remove from DOM after fade-out completes
    const goneTimer    = setTimeout(() => setGone(true),  8500);
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
