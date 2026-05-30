import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  opacity: number;
  maxOpacity: number;
  vy: number;
  phase: number;
  phaseSpeed: number;
  drift: number;
  isCore: boolean;
}

function spawn(W: number, H: number, scatter = false): Particle {
  const isCore = Math.random() < 0.38;
  const spread = isCore ? W * 0.06 : W * 0.14;
  const cx = W * 0.5;
  return {
    x: cx + (Math.random() - 0.5) * spread,
    y: scatter ? H * (0.1 + Math.random() * 0.95) : H + 20 + Math.random() * 40,
    r: isCore ? 12 + Math.random() * 28 : 24 + Math.random() * 52,
    opacity: 0,
    maxOpacity: isCore
      ? 0.28 + Math.random() * 0.38
      : 0.10 + Math.random() * 0.20,
    vy: isCore ? 0.55 + Math.random() * 0.85 : 0.38 + Math.random() * 0.65,
    phase: Math.random() * Math.PI * 2,
    phaseSpeed: 0.007 + Math.random() * 0.016,
    drift: (Math.random() - 0.5) * 0.4,
    isCore,
  };
}

export default function SteamEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    const particles: Particle[] = Array.from({ length: 80 }, (_, i) => {
      const p = spawn(W(), H(), i < 60);
      if (i < 60) {
        // Pre-warm opacity so steam is visible immediately on load
        const progress = 1 - p.y / (H() || 1);
        if (progress < 0.55) {
          p.opacity = p.maxOpacity * (0.3 + Math.random() * 0.7);
        }
      }
      return p;
    });

    const startTime = performance.now();
    const HOLD = 5800;
    const FADE = 2600;

    const draw = (now: number) => {
      const elapsed = now - startTime;
      const cw = W();
      const ch = H();

      if (elapsed > HOLD) {
        const t = Math.min(1, (elapsed - HOLD) / FADE);
        canvas.style.opacity = String(1 - t);
        if (t >= 1) {
          canvas.style.display = "none";
          return;
        }
      }

      ctx.clearRect(0, 0, cw, ch);

      for (const p of particles) {
        const progress = 1 - p.y / ch; // 0 at bottom, 1 at top

        // Warm cream/tan matching the reference images
        const r = 228, g = 202, b = 168;
        const g2 = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g2.addColorStop(0,    `rgba(${r},${g},${b},${p.opacity})`);
        g2.addColorStop(0.45, `rgba(${r},${g},${b},${p.opacity * 0.38})`);
        g2.addColorStop(1,    `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = g2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Physics
        p.y -= p.vy;
        // Spread widens naturally as steam rises
        const spreadAmp = p.isCore
          ? 0.35 + progress * 1.1
          : 0.55 + progress * 1.8;
        p.x += Math.sin(p.phase) * spreadAmp + p.drift;
        p.phase += p.phaseSpeed;
        p.r += p.isCore ? 0.16 : 0.24;

        // Opacity envelope: fade in fast near bottom, hold mid, fade out near top
        if (progress < 0.12) {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.02);
        } else if (progress > 0.55) {
          p.opacity = Math.max(0, p.opacity - 0.006);
        }

        // Respawn
        if (p.y + p.r < 0 || p.opacity <= 0) {
          Object.assign(p, spawn(cw, ch));
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        display: "block",
      }}
    />
  );
}
