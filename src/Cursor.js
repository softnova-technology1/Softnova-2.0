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

    let mouse = { x: w / 1, y: h / 1 };
    let smooth = { x: mouse.x, y: mouse.y };

    const ease = 0.9; // lower = more delay

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // detect magnetic targets
    const getMagnetic = () =>
      document.querySelectorAll("button, a, .magnetic");

    const particles = [];

    const spawn = () => {
      particles.push({
        x: smooth.x,
        y: smooth.y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 30,
        size: Math.random() * 2 + 1,
        alpha: 1,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // magnetic logic
      getMagnetic().forEach((el) => {
        const rect = el.getBoundingClientRect();

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = mouse.x - cx;
        const dy = mouse.y - cy;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          mouse.x = cx + dx * 0.4;
          mouse.y = cy + dy * 0.4;
        }
      });

      // buttery follow
      smooth.x += (mouse.x - smooth.x) * ease;
      smooth.y += (mouse.y - smooth.y) * ease;

      spawn();

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        p.size *= 0.99;
        p.alpha *= 0.99;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,140,40,${p.alpha})`;
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      });

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
      }}
    />
  );
}
