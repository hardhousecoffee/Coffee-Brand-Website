import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  opacity: number;
  vx: number;
  vy: number;
  phase: number;
  phaseSpeed: number;
}

function spawn(W: number, H: number): Particle {
  const zones = [W * 0.25, W * 0.5, W * 0.75];
  const cx = zones[Math.floor(Math.random() * zones.length)];
  return {
    x: cx + (Math.random() - 0.5) * W * 0.28,
    y: H + 10 + Math.random() * 30,
    r: 18 + Math.random() * 42,
    opacity: 0.13 + Math.random() * 0.32,
    vx: (Math.random() - 0.5) * 0.25,
    vy: 0.45 + Math.random() * 0.95,
    phase: Math.random() * Math.PI * 2,
    phaseSpeed: 0.009 + Math.random() * 0.018,
  };
}

export default function SteamBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const init = () => {
      canvas.width = canvas.clientWidth || 1280;
      canvas.height = canvas.clientHeight || 520;
      const W = canvas.width;
      const H = canvas.height;
      particlesRef.current = Array.from({ length: 90 }, () => {
        const p = spawn(W, H);
        p.y = Math.random() * (H + 60) - 30;
        return p;
      });
    };

    init();
    window.addEventListener("resize", init);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const p of particlesRef.current) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0,    `rgba(218,190,148,${p.opacity})`);
        g.addColorStop(0.42, `rgba(196,158,98,${p.opacity * 0.48})`);
        g.addColorStop(1,    "rgba(170,130,70,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.y -= p.vy;
        p.x += Math.sin(p.phase) * 0.62 + p.vx;
        p.phase += p.phaseSpeed;
        p.opacity -= 0.0011;
        p.r += 0.2;

        if (p.opacity <= 0 || p.y + p.r < 0) {
          Object.assign(p, spawn(W, H));
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(440px, 50vw, 600px)",
        backgroundColor: "#080808",
        overflow: "hidden",
        borderTop: "1px solid rgba(161,79,31,0.14)",
        borderBottom: "1px solid rgba(161,79,31,0.14)",
      }}
    >
      <style>{`
        @keyframes hhSteamReveal {
          0%   { opacity:0; filter:blur(26px); transform:translateY(16px); }
          50%  { opacity:0.6; filter:blur(8px); }
          100% { opacity:1; filter:blur(0px); transform:translateY(0); }
        }
        @keyframes hhLineGrow {
          from { opacity:0; transform:scaleX(0); }
          to   { opacity:1; transform:scaleX(1); }
        }
        @keyframes hhLineDriftL {
          0%,100% { transform:scaleX(1) translateX(0); }
          50%     { transform:scaleX(1) translateX(-7px); }
        }
        @keyframes hhLineDriftR {
          0%,100% { transform:scaleX(1) translateX(0); }
          50%     { transform:scaleX(1) translateX(7px); }
        }
        .hhLineTop {
          animation:
            hhLineGrow 2.4s cubic-bezier(.4,0,.2,1) 2.2s forwards,
            hhLineDriftR 11s ease-in-out 4.8s infinite;
          opacity: 0;
          transform-origin: center;
        }
        .hhLineBot {
          animation:
            hhLineGrow 2.4s cubic-bezier(.4,0,.2,1) 2.6s forwards,
            hhLineDriftL 11s ease-in-out 5.2s infinite;
          opacity: 0;
          transform-origin: center;
        }
        .hhSteamText {
          animation: hhSteamReveal 4.8s cubic-bezier(.4,0,.2,1) 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Live steam canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Warm center glow behind text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "min(900px,100%)",
          height: "260px",
          background:
            "radial-gradient(ellipse at center, rgba(161,79,31,0.09) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      {/* Text + lines layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 32px",
          zIndex: 2,
        }}
      >
        <div
          className="hhLineTop"
          style={{
            width: "min(820px,92%)",
            height: "1px",
            background:
              "linear-gradient(90deg,transparent 0%,rgba(161,79,31,.55) 20%,rgba(212,150,50,.95) 50%,rgba(161,79,31,.55) 80%,transparent 100%)",
            marginBottom: "3rem",
          }}
        />

        <h2
          className="hhSteamText"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 9vw, 6.2rem)",
            color: "#d4b896",
            lineHeight: 1.2,
            textAlign: "center",
            margin: 0,
            letterSpacing: "0.02em",
            textShadow:
              "0 4px 60px rgba(161,79,31,.5), 0 0 120px rgba(212,184,150,.14)",
          }}
        >
          Now Brewing at Hard House Coffee
        </h2>

        <div
          className="hhLineBot"
          style={{
            width: "min(820px,92%)",
            height: "1px",
            background:
              "linear-gradient(90deg,transparent 0%,rgba(161,79,31,.55) 20%,rgba(212,150,50,.95) 50%,rgba(161,79,31,.55) 80%,transparent 100%)",
            marginTop: "3rem",
          }}
        />
      </div>
    </section>
  );
}
