import { useEffect, useRef } from "react";

export default function Cursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    let mouse = { x: w / 2, y: h / 2 };
    let smooth = { x: mouse.x, y: mouse.y };

    const ease = 0.08;

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const particles = [];

    const drawStar = (x, y, spikes, innerRadius, outerRadius, color, opacity) => {
      ctx.save(); 

      let rot = (Math.PI / 2) * 3;
      let step = Math.PI / spikes;

      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(x, y - outerRadius);

      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(x + Math.cos(rot) * outerRadius, y + Math.sin(rot) * outerRadius);
        rot += step;
        ctx.lineTo(x + Math.cos(rot) * innerRadius, y + Math.sin(rot) * innerRadius);
        rot += step;
      }

      ctx.lineTo(x, y - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      ctx.restore(); 
    };

    const spawn = () => {
      if (Math.abs(mouse.x - smooth.x) > 0.1 || Math.abs(mouse.y - smooth.y) > 0.1) {
        particles.push({
          x: smooth.x,
          y: smooth.y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          life: 50 + Math.random() * 20,
          maxLife: 60,
          size: Math.random() * 3.5 + 1.5,
          hue: Math.random() * 15 + 15,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      smooth.x += (mouse.x - smooth.x) * ease;
      smooth.y += (mouse.y - smooth.y) * ease;

      spawn();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.01; 
        p.life--;

        const opacity = p.life / p.maxLife;
        const color = `hsla(${p.hue + 2}, 100%, 70%, ${opacity})`;
        drawStar(
          p.x,
          p.y,
          5,
          p.size / 3.2,
          p.size,
          color,
          opacity
        );

        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "screen",
      }}
    />
  );
}