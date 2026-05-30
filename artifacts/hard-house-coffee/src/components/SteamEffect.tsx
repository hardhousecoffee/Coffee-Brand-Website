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

    // Build a smooth path from array of points using quadratic bezier
    function strokePath(
      points: { x: number; y: number }[],
      strokeStyle: CanvasGradient | string,
      lineWidth: number,
      blur: number
    ) {
      if (points.length < 2) return;
      ctx.save();
      if (blur > 0) ctx.filter = `blur(${blur}px)`;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) {
        const mx = (points[i].x + points[i + 1].x) / 2;
        const my = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, mx, my);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
      ctx.restore();
    }

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

      // Steam rises from bottom edge to ~10% from top
      const steamBottom = ch + 10;
      const steamTop = ch * 0.10;
      const steamHeight = steamBottom - steamTop;
      const N = 100;

      // Vertical gradient shared across both strands
      const makeGrad = (alpha: number) => {
        const g = ctx.createLinearGradient(0, steamBottom, 0, steamTop);
        g.addColorStop(0,    `rgba(255, 254, 250, 0)`);
        g.addColorStop(0.04, `rgba(255, 254, 250, ${alpha})`);
        g.addColorStop(0.55, `rgba(255, 254, 250, ${alpha})`);
        g.addColorStop(0.82, `rgba(255, 254, 250, ${alpha * 0.5})`);
        g.addColorStop(1,    `rgba(255, 254, 250, 0)`);
        return g;
      };

      // Build two strands — they share a spine but diverge with a phase offset
      // giving the double-ribbon twist seen in the reference image
      const buildStrand = (phaseShift: number) => {
        const pts: { x: number; y: number }[] = [];
        for (let i = 0; i <= N; i++) {
          const prog = i / N; // 0 = bottom, 1 = top
          const y = steamBottom - prog * steamHeight;

          // Amplitude grows from 0 at base then settles — keeping it narrow at origin
          const amp = Math.pow(prog, 0.45);

          // Primary S-curve: slow, big, elegant sweep
          const x =
            cx +
            48 * amp * Math.sin(prog * Math.PI * 2.8 + t * 0.55 + phaseShift) +
            22 * amp * Math.sin(prog * Math.PI * 5.2 - t * 0.38 + phaseShift * 0.6) +
            10 * amp * Math.sin(prog * Math.PI * 1.1 + t * 0.2);

          pts.push({ x, y });
        }
        return pts;
      };

      // Two strands offset in phase — they twist around each other
      const strandA = buildStrand(0);
      const strandB = buildStrand(Math.PI * 0.45);

      // Draw each strand: outer glow → mid halo → bright core
      for (const pts of [strandA, strandB]) {
        strokePath(pts, makeGrad(0.07), 32, 16);
        strokePath(pts, makeGrad(0.12), 18, 8);
        strokePath(pts, makeGrad(0.22), 9,  3);
        strokePath(pts, makeGrad(0.55), 3,  1);
        strokePath(pts, makeGrad(0.80), 1.2, 0);
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
