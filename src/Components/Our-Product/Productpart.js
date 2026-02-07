import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styles from "../../Styles/HeroContact.module.css";

const ProductHero = () => {
  const [init, setInit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 120,
    particles: {
      number: { value: 120, density: { enable: true, area: 800 } },

      color: { value: ["#f89e38", "#818cf8", "#fb7185", "#f472b6"] },
      shape: { type: ["circle", "triangle", "polygon"] },
      opacity: {
        value: { min: 0.1, max: 0.8 },
        animation: { enable: true, speed: 1 }
      },
      size: { value: { min: 1, max: 4 } },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: { default: "out" },
        attract: { enable: true, rotate: { x: 600, y: 1200 } }
      },
      links: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.1,
        width: 1,
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 150, links: { opacity: 0.5 } },
      }
    },
    detectRetina: true,
  }), []);

  return (
    <div className={styles.container}>


      {init && (
        <div className={styles.particlesWrapper}>
          <Particles
            id="tsparticles"
            options={particlesOptions}
          />
        </div>
      )}


      <div className={styles.contentLayer}>
        <h1 className={styles.title}>PREMIUM SOFTWARE SOLUTIONS</h1>
        <p className={styles.description}>
          Empowering businesses with cutting-edge technology and seamless digital transformation.
          We build scalable, secure, and intuitive products that drive real business growth.
        </p>
        <button
          className={styles.ctaButton}
          onClick={() => navigate("/contact")}
        >
          <div className={styles.ghost}></div>
          <div className={styles.shine}></div>
          Explore Our Solutions
        </button>
      </div>
    </div>
  );
};

export default ProductHero;
