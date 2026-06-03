import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
}

export function CoffeeDecor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    // Smoke source positions across the bottom (as fraction of width)
    const sources = [0.08, 0.22, 0.38, 0.54, 0.68, 0.82];
    const particles: Particle[] = [];

    const spawn = () => {
      const srcX = sources[Math.floor(Math.random() * sources.length)];
      particles.push({
        x: srcX * canvas.width + (Math.random() - 0.5) * 24,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(0.7 + Math.random() * 0.9),
        life: 0,
        maxLife: 200 + Math.random() * 140,
        size: 6 + Math.random() * 10,
        opacity: 0,
      });
    };

    // Pre-seed some particles so there's something visible immediately
    for (let i = 0; i < 12; i++) {
      const srcX = sources[i % sources.length];
      const progress = Math.random();
      const maxLife = 200 + Math.random() * 140;
      const life = progress * maxLife;
      const travelY = (life * (0.7 + Math.random() * 0.9));
      particles.push({
        x: srcX * (canvas.offsetWidth || 800) + (Math.random() - 0.5) * 24,
        y: (canvas.offsetHeight || 400) + 10 - travelY,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(0.7 + Math.random() * 0.9),
        life,
        maxLife,
        size: 6 + Math.random() * 10 + progress * 18,
        opacity: 0,
      });
    }

    let frame = 0;
    let animId: number;

    const tick = () => {
      if (!canvas.isConnected) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn a new particle every 6 frames
      if (frame % 6 === 0) spawn();
      frame++;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Organic sway
        p.vx += (Math.random() - 0.5) * 0.07;
        p.vx *= 0.96;

        // Grow as it rises (dissipation)
        p.size += 0.15;

        // Opacity curve: fade in → hold → fade out
        const t = p.life / p.maxLife;
        if (t < 0.15) {
          p.opacity = (t / 0.15) * 0.5;
        } else if (t < 0.65) {
          p.opacity = 0.5;
        } else {
          p.opacity = ((1 - t) / 0.35) * 0.5;
        }

        // Remove when done or off-screen
        if (p.life >= p.maxLife || p.y < -p.size * 2) {
          particles.splice(i, 1);
          continue;
        }

        // Draw soft radial smoke puff
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, `rgba(215, 195, 170, ${p.opacity})`);
        grad.addColorStop(0.5, `rgba(215, 195, 170, ${p.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(215, 195, 170, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animId = requestAnimationFrame(tick);
    };

    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
