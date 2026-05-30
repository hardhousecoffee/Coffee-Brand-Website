import { useEffect, useRef } from "react";

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

      const t = elapsed / 1000;
      const cx = cw / 2;

      // Steam column: rises from bottom to ~25% from top
      const steamBottom = ch + 20;
      const steamTop = ch * 0.12;
      const steamHeight = steamBottom - steamTop;
      const NUM_POINTS = 120;

      // Build the spine of the ribbon
      const pts: { x: number; y: number }[] = [];
      for (let i = 0; i <= NUM_POINTS; i++) {
        const prog = i / NUM_POINTS; // 0 = bottom, 1 = top
        const y = steamBottom - prog * steamHeight;

        // Sinuous S-curve: amplitude grows as it rises
        const amp1 = 22 * Math.pow(prog, 0.6);
        const amp2 = 12 * Math.pow(prog, 0.8);
        const amp3 = 6 * prog;

        const x =
          cx +
          amp1 * Math.sin(prog * Math.PI * 3.2 + t * 0.9) +
          amp2 * Math.sin(prog * Math.PI * 5.5 - t * 0.65) +
          amp3 * Math.sin(prog * Math.PI * 1.4 + t * 0.35);

        pts.push({ x, y });
      }

      // Draw multiple passes: outer glow → soft halo → sharp core
      const passes = [
        { blur: 18, width: 28, alpha: 0.06 },
        { blur: 10, width: 16, alpha: 0.10 },
        { blur: 5,  width: 9,  alpha: 0.18 },
        { blur: 2,  width: 5,  alpha: 0.30 },
        { blur: 0,  width: 2,  alpha: 0.55 },
      ];

      ctx.save();
      ctx.globalAlpha = globalAlpha;

      for (const pass of passes) {
        ctx.save();
        if (pass.blur > 0) ctx.filter = `blur(${pass.blur}px)`;

        // Vertical gradient: transparent at very bottom (origin), opaque mid, transparent at top
        const grad = ctx.createLinearGradient(0, steamBottom, 0, steamTop);
        grad.addColorStop(0,    `rgba(255, 253, 248, 0)`);
        grad.addColorStop(0.06, `rgba(255, 253, 248, ${pass.alpha})`);
        grad.addColorStop(0.55, `rgba(255, 253, 248, ${pass.alpha})`);
        grad.addColorStop(0.80, `rgba(255, 253, 248, ${pass.alpha * 0.6})`);
        grad.addColorStop(1,    `rgba(255, 253, 248, 0)`);

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length - 1; i++) {
          const midX = (pts[i].x + pts[i + 1].x) / 2;
          const midY = (pts[i].y + pts[i + 1].y) / 2;
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, midX, midY);
        }
        ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);

        ctx.strokeStyle = grad;
        ctx.lineWidth = pass.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
        ctx.restore();
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
