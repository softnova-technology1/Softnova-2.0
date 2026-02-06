import React, { useEffect, useRef } from "react";
import styles from "../Styles/Rocket.module.css";
import rocketImg from "../images/sn.webp";
import navgif from "../images/navgif.webp";

const RocketMenu = () => {
  const canvasRef = useRef(null);
  let particles = [];
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function initCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.size = 1.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = "rgb(255, 98, 0)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < 100; i++) particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
        p.update();
        p.draw();
        for (let j = index + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(212,175,55,${0.6 - dist / 290})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    }

    initCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, []);

  const toggleNav = (isOpen) => {
    const nav = document.getElementById("myNav");
    isOpen
      ? nav.classList.add(styles.active)
      : nav.classList.remove(styles.active);
  };

  const launchAndOpen = () => {
    const rocket = document.getElementById("rocket-container");
    const menuBtn = document.getElementById("menu-btn");

    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";

    rocket.classList.remove(styles.return);
    rocket.classList.add(styles.launch);

    toggleNav(true);

    const smokeInterval = setInterval(() => {
      const smoke = document.createElement("div");
      smoke.className = styles.smoke;
      smoke.style.top = Math.random() * 25 + "px";
      rocket.appendChild(smoke);
      setTimeout(() => smoke.remove(), 1200);
    }, 60);

    setTimeout(() => {
      clearInterval(smokeInterval);
    }, 2600);
  };

  const closeMenu = () => {
    const rocket = document.getElementById("rocket-container");
    const menuBtn = document.getElementById("menu-btn");

    toggleNav(false);

    rocket.classList.remove(styles.launch);
    rocket.classList.add(styles.return);

    setTimeout(() => {
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
    }, 1400);
  };

  return (
    <>
      <button id="menu-btn" className={styles.openBtn} onClick={launchAndOpen}>
        <div className={styles.btnContent}>
           <span><img src={navgif} alt="SoftNova Logo" style={{ height: '50px'}} /></span>
          <span className={styles.hamburger}></span>
          <span className={styles.btnText}>EXPLORE</span>
        </div>
      </button>

      <div id="rocket-container" className={styles.rocketContainer}>
        <div className={styles.rocket}>
          <div className={styles.glowRing}></div>
          <img src={rocketImg} alt="🚀" />
        </div>
      </div>

      <div id="myNav" className={styles.overlay}>
        <canvas ref={canvasRef} className={styles.menuCanvas}></canvas>

        <span className={styles.closebtn} onClick={closeMenu}>
          ✕
        </span>

        <div className={styles.overlayContent}>
          <div className={styles.headerBlock}>
            <p className={styles.tagline}>
              TURNING YOUNG MINDS INTO FUTURE INNOVATORS
            </p>

            <h1 className={styles.brandTitle}>SOFTNOVA</h1>
            <div className={styles.lineGlow}></div>
          </div>

          <div className={styles.menuGrid}>
            <a href="/">Home</a>
            <a href="/services">Our Services</a>
            <a href="/products">Our Product</a>
            <a href="/about">About Us</a>
            <a href="/academy">Academy</a>
            <a href="/career">Career</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RocketMenu;