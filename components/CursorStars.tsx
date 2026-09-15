"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  spin: number;
  angle: number;
};

const COLORS = ["#f4f2ff", "#8ff2d9", "#c6b4ff", "#ffa9c8"];

function drawStar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  angle: number,
  color: string,
  alpha: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.globalAlpha = alpha;

  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 4);
  glow.addColorStop(0, color);
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.fillRect(-size * 4, -size * 4, size * 8, size * 8);

  ctx.fillStyle = color;
  ctx.beginPath();
  const spikes = 4;
  const outer = size;
  const inner = size * 0.35;
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / spikes) * i;
    const px = Math.cos(a) * r;
    const py = Math.sin(a) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function CursorStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const cursorRef = useRef({ x: -100, y: -100, active: false });
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    if (isFinePointer && !reducedMotion) {
      document.body.classList.add("custom-cursor-active");
    }

    let lastSpawn = 0;

    const spawnTrail = (x: number, y: number) => {
      const now = performance.now();
      if (now - lastSpawn < 22) return;
      lastSpawn = now;
      for (let i = 0; i < 2; i++) {
        starsRef.current.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4 + 0.15,
          life: 0,
          maxLife: 40 + Math.random() * 20,
          size: 1.5 + Math.random() * 2.2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          spin: (Math.random() - 0.5) * 0.1,
          angle: Math.random() * Math.PI * 2,
        });
      }
      if (starsRef.current.length > 220) {
        starsRef.current.splice(0, starsRef.current.length - 220);
      }
    };

    const disperse = (x: number, y: number) => {
      // push nearby trailing stars outward
      for (const s of starsRef.current) {
        const dx = s.x - x;
        const dy = s.y - y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 220) {
          const force = (1 - dist / 220) * 6;
          s.vx += (dx / dist) * force;
          s.vy += (dy / dist) * force;
        }
      }
      // burst of fresh stars from the click point
      const burstCount = 26;
      for (let i = 0; i < burstCount; i++) {
        const a = (Math.PI * 2 * i) / burstCount + Math.random() * 0.3;
        const speed = 2 + Math.random() * 3.5;
        starsRef.current.push({
          x,
          y,
          vx: Math.cos(a) * speed,
          vy: Math.sin(a) * speed,
          life: 0,
          maxLife: 45 + Math.random() * 25,
          size: 2 + Math.random() * 2.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          spin: (Math.random() - 0.5) * 0.2,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    const onMove = (e: PointerEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY, active: true };
      if (isFinePointer) spawnTrail(e.clientX, e.clientY);
    };
    const onLeave = () => {
      cursorRef.current.active = false;
    };
    const onClick = (e: MouseEvent) => {
      disperse(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("click", onClick);

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      starsRef.current = starsRef.current.filter((s) => s.life < s.maxLife);
      for (const s of starsRef.current) {
        s.life += 1;
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.94;
        s.vy *= 0.94;
        s.angle += s.spin;
        const t = s.life / s.maxLife;
        const alpha = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
        drawStar(ctx, s.x, s.y, s.size, s.angle, s.color, Math.max(alpha, 0));
      }

      // the little cursor spark itself
      if (cursorRef.current.active && isFinePointer) {
        drawStar(
          ctx,
          cursorRef.current.x,
          cursorRef.current.y,
          3,
          performance.now() * 0.002,
          "#ffffff",
          0.9
        );
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("click", onClick);
      document.body.classList.remove("custom-cursor-active");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    />
  );
}
