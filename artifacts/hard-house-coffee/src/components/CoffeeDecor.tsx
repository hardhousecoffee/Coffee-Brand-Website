import { useEffect, useRef } from "react";

export function CoffeeDecor() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  /* ── Desktop: looping steam video (same source as the hero) ── */
  if (!isMobile) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
          mixBlendMode: "screen",
          maskImage:
            "radial-gradient(ellipse 100% 90% at 50% 80%, black 10%, rgba(0,0,0,0.6) 50%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 90% at 50% 80%, black 10%, rgba(0,0,0,0.6) 50%, transparent 78%)",
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
            opacity: 0.75,
          }}
        />
      </div>
    );
  }

  /* ── Mobile: SVG curved wisps (same style as hero mobile) ── */
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(600px, 100%)",
        height: "70%",
        pointerEvents: "none",
        zIndex: 0,
        mixBlendMode: "screen",
      }}
    >
      <style>{`
        @keyframes svgSteamLoop {
          0%   { opacity: 0; transform: translateY(30px) scaleX(0.9); }
          15%  { opacity: 1; }
          80%  { opacity: 0.7; }
          100% { opacity: 0; transform: translateY(-60px) scaleX(1.15); }
        }
      `}</style>
      <svg
        style={{
          width: "100%",
          height: "100%",
          animation: "svgSteamLoop 5s ease-in-out infinite",
          transformOrigin: "center bottom",
          overflow: "visible",
        }}
        viewBox="0 0 400 580"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <filter id="coffeeSteamTurb" x="-40%" y="-40%" width="180%" height="180%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.007 0.005"
              numOctaves="4"
              seed="12"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.007 0.005;0.015 0.010;0.007 0.005"
                dur="5s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="40"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="coffeeSteamBlur">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* Soft base bloom */}
        <ellipse cx="200" cy="558" rx="115" ry="30"
          fill="rgba(238,232,222,0.38)" filter="url(#coffeeSteamBlur)" />
        <ellipse cx="200" cy="548" rx="88" ry="22"
          fill="rgba(238,232,222,0.26)" filter="url(#coffeeSteamBlur)" />

        {/* Rising curving wisps */}
        <g filter="url(#coffeeSteamTurb)">
          <path
            d="M 138,538 C 120,488 128,442 116,395 C 106,356 116,320 106,284"
            stroke="rgba(228,222,215,0.38)" strokeWidth="15"
            fill="none" strokeLinecap="round"
          />
          <path
            d="M 166,552 C 148,498 156,450 143,400 C 132,360 140,316 130,270 C 122,236 133,198 122,163"
            stroke="rgba(234,228,218,0.54)" strokeWidth="27"
            fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
          <path
            d="M 200,560 C 207,506 192,458 201,408 C 209,366 195,322 203,276 C 210,240 196,198 205,160 C 212,130 199,96 207,62 C 213,38 200,16 198,4"
            stroke="rgba(240,234,224,0.68)" strokeWidth="40"
            fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
          <path
            d="M 234,550 C 254,496 242,448 257,398 C 270,358 258,314 270,270 C 280,234 267,196 277,160"
            stroke="rgba(232,226,216,0.52)" strokeWidth="25"
            fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
          <path
            d="M 264,536 C 285,482 272,438 287,392 C 298,355 285,318 295,278"
            stroke="rgba(225,220,212,0.34)" strokeWidth="14"
            fill="none" strokeLinecap="round"
          />
          <ellipse cx="200" cy="458" rx="74" ry="20"
            fill="rgba(234,228,218,0.20)" />
        </g>
      </svg>
    </div>
  );
}
