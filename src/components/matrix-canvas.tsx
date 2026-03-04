'use client';
import { useEffect, useRef } from 'react';

const MatrixCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = 'アイウエオカキクケコ0123456789ABCDEF{}[]<>/\\|';
    const fs = 14;
    let drops = Array(Math.floor(canvas.width / fs)).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff41';
      ctx.font = fs + 'px monospace';
      drops.forEach((y, i) => {
        ctx.fillText(
          chars[Math.floor(Math.random() * chars.length)],
          i * fs,
          y * fs
        );
        if (y * fs > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const intervalId = setInterval(drawMatrix, 35);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="matrix-canvas"
      className="fixed inset-0 opacity-[0.09] z-0 pointer-events-none"
    />
  );
};

export default MatrixCanvas;
