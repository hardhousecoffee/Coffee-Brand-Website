import { useEffect, useRef } from "react";

export function CoffeeDecor() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(900px, 100%)",
        height: "110%",
        pointerEvents: "none",
        zIndex: 0,
        mixBlendMode: "screen",
      }}
    >
      <video
        ref={videoRef}
        src="/videos/steam-overlay.mp4"
        muted
        playsInline
        autoPlay
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center bottom",
          display: "block",
          opacity: 0.9,
        }}
      />
    </div>
  );
}
