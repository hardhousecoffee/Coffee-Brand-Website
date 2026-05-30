import { useEffect, useRef } from "react";

interface Particle {
  prog: number;          // position along column: 0 = bottom, 1 = top
  lateralOffset: number; // horizontal scatter from spine (px)
  radius: number;
  opacity: number;
  speed: number;
}

function makeParticle(scattered = false): Particle {
  return {
    prog: scattered ? Math.random() : -Math.random() * 0.18,
    lateralOffset: (Math.random() - 0.5) * 30,
    radius: 20 + Math.random() * 30,
    opacity: 0,
    speed: 0.0009 + Math.random() * 0.0011,
  };
}

// S-curve spine — safe for all prog >= 0 (uses sqrt, not fractional pow)
function spineX(prog: number, t: number, cx: number): number {
  const amp = Math.sqrt(Math.max(0, prog));
  return (
    cx +
    40 * amp * Math.sin(prog * Math.PI * 2.3 + t * 0.38) +
    20 * amp * Math.sin(prog * Math.PI * 4.8 - t * 0.28) +
    8  * amp * Math.sin(prog * Math.PI * 1.1 + t * 0.15)
  );
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

    // 170 pre-scattered so steam is visible immediately on load
    const COUNT = 220;
    const particles: Particle[] = Array.from({ length: COUNT }, (_, i) =>
      makeParticle(i < 170)
    );

    const startTime = performance.now();
    const HOLD = 5500;
    const FADE = 2500;

    const draw = (now: number) => {
      const elapsed = now - startTime;
      const cw = canvas.width;
      const ch = canvas.height;

      if (elapsed > HOLD + FADE) {
        canvas.style.display = "none";
        return;
      }

      let globalAlpha = 1;
      if (elapsed > HOLD) {
        globalAlpha = 1 - (elapsed - HOLD) / FADE;
      }

      ctx.clearRect(0, 0, cw, ch);
      ctx.save();
      ctx.globalAlpha = globalAlpha;

      const t = elapsed / 1000;
      const cx = cw / 2;
      const steamBottom = ch;
      const steamHeight = ch * 0.92; // rises to ~8% from top

      for (const p of particles) {
        p.prog += p.speed;

        // Skip until particle enters the column from below
        if (p.prog < 0) continue;

        // Respawn at bottom when particle exits top
        if (p.prog > 1.05) {
          Object.assign(p, makeParticle(false));
          continue;
        }

        const y = steamBottom - p.prog * steamHeight;
        const sx = spineX(p.prog, t, cx) + p.lateralOffset;

        // Guard against any floating-point edge case
        if (!isFinite(sx) || !isFinite(y)) continue;

        // Opacity envelope: fade in near base, hold, fade near top
        let targetOpacity: number;
        if (p.prog < 0.07) {
          targetOpacity = (p.prog / 0.07) * 0.20;
        } else if (p.prog > 0.72) {
          targetOpacity = Math.max(0, (1 - p.prog) / 0.28) * 0.20;
        } else {
          targetOpacity = 0.20;
        }

        p.opacity += (targetOpacity - p.opacity) * 0.06;
        if (p.opacity <= 0.001) continue;

        const r = p.radius;
        const grad = ctx.createRadialGradient(sx, y, 0, sx, y, r);
        grad.addColorStop(0,   `rgba(232, 224, 212, ${p.opacity})`);
        grad.addColorStop(0.5, `rgba(232, 224, 212, ${p.opacity * 0.35})`);
        grad.addColorStop(1,   `rgba(232, 224, 212, 0)`);

        ctx.beginPath();
        ctx.arc(sx, y, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      ctx.restore();
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
