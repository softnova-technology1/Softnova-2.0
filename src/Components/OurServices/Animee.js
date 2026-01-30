import React, { useEffect, useState } from "react";
import styles from "../../Styles/Animee.module.css";

const nodes = [
  { name: "REACT", icon: "devicon-react-original", color: "#61dafb" },
  { name: "GIT", icon: "devicon-github-original", color: "#fe851e" },
  { name: "JAVA", icon: "devicon-java-plain", color: "#ffb347" },
  { name: "FIGMA", icon: "devicon-figma-plain", color: "#ff7f50" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", color: "#00ffff" },
  { name: "GOOGLE", icon: "devicon-google-plain", color: "#ffc04d" },
];

const Worldgalaxy = () => {
  const [angle, setAngle] = useState(0);
  const [warp, setWarp] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      setAngle((a) => a + (warp ? 0.04 : 0.008));
    }, 16);
    return () => clearInterval(i);
  }, [warp]);

  useEffect(() => {
    const handleScroll = () => {
      setWarp(true);
      clearTimeout(window.warpTimeout);
      window.warpTimeout = setTimeout(() => setWarp(false), 700);
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  
  const radius = 220; 

  return (
    <div className={styles.metaContainer}>
      <div className={`${styles.metaContent} ${warp ? styles.metaWarp : ""}`}>
       
        <div className={styles.aiCore} onClick={() => setWarp(!warp)}>
          <div className={styles.aiInner}></div>
          <div className={styles.aiRing}></div>
          <div className={styles.aiText}>SOFTNOVA</div>
        </div>

        <div className={styles.portal}></div>

        
        {nodes.map((n, i) => {
          const a = angle + (i * (Math.PI * 2)) / nodes.length;
          const x = Math.cos(a) * radius;
          const y = Math.sin(a) * radius;

          return (
            <div
              key={i}
              className={styles.metaNode}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                color: n.color,
                left: '50%',
                top: '50%',
                background: `radial-gradient(circle, #02000a, #000)`,
              }}
            >
              <div className={styles.nodeIcon} style={{ color: n.color }}>
                <i className={n.icon}></i>
              </div>
              <div className={styles.nodeText}>{n.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Worldgalaxy;