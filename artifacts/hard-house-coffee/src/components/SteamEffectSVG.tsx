import { useEffect, useState } from "react";

export default function SteamEffectSVG() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setGone(true), 2900);
    return () => clearTimeout(timer);
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(700px, 100vw)",
        height: "82vh",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
      }}
    >
      <svg
        style={{
          width: "100%",
          height: "100%",
          animation: "svgSteamRise 2.5s ease-out 0.15s both",
          transformOrigin: "center bottom",
          overflow: "visible",
        }}
        viewBox="0 0 400 580"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <filter id="svgSteamTurb" x="-40%" y="-40%" width="180%" height="180%">
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
                dur="2.5s"
                begin="0.15s"
                fill="freeze"
                repeatCount="1"
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

          <filter id="svgSteamBlur">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* Wide soft base bloom near mug */}
        <ellipse
          cx="200" cy="558"
          rx="115" ry="30"
          fill="rgba(238,232,222,0.38)"
          filter="url(#svgSteamBlur)"
        />
        <ellipse
          cx="200" cy="548"
          rx="88" ry="22"
          fill="rgba(238,232,222,0.26)"
          filter="url(#svgSteamBlur)"
        />

        {/* Rising wisps — turbulence makes them organic */}
        <g filter="url(#svgSteamTurb)">
          {/* Far left thin tendril */}
          <path
            d="M 138,538 C 120,488 128,442 116,395 C 106,356 116,320 106,284"
            stroke="rgba(228,222,215,0.38)"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
          />

          {/* Left wisp */}
          <path
            d="M 166,552 C 148,498 156,450 143,400 C 132,360 140,316 130,270 C 122,236 133,198 122,163"
            stroke="rgba(234,228,218,0.54)"
            strokeWidth="27"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center main wisp — widest and most prominent */}
          <path
            d="M 200,560 C 207,506 192,458 201,408 C 209,366 195,322 203,276 C 210,240 196,198 205,160 C 212,130 199,96 207,62 C 213,38 200,16 198,4"
            stroke="rgba(240,234,224,0.68)"
            strokeWidth="40"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right wisp */}
          <path
            d="M 234,550 C 254,496 242,448 257,398 C 270,358 258,314 270,270 C 280,234 267,196 277,160"
            stroke="rgba(232,226,216,0.52)"
            strokeWidth="25"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Far right thin tendril */}
          <path
            d="M 264,536 C 285,482 272,438 287,392 C 298,355 285,318 295,278"
            stroke="rgba(225,220,212,0.34)"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />

          {/* Mid-level soft bloom fills out the body */}
          <ellipse
            cx="200" cy="458"
            rx="74" ry="20"
            fill="rgba(234,228,218,0.20)"
          />
        </g>
      </svg>
    </div>
  );
}
