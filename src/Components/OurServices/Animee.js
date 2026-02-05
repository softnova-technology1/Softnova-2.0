import React, { useEffect, useState, useMemo } from "react";
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
  // Track multiple comets using an array of IDs
  const [comets, setComets] = useState([]);

  const stars = useMemo(() => 
    Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2,
      op: Math.random()
    })), []);

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
    
    // Increased frequency: Runs every 1.5 seconds now
   // ... (rest of the code)

    const cometInterval = setInterval(() => {
        if(Math.random() > 0.4) {
            const id = Date.now();
            const style = {
                top: `${Math.random() * 40}%`, 
                // Random-ah konjam slow/fast irukathukku 3 to 5 seconds
                animationDuration: `${3 + Math.random() * 2}s` 
            };
            
            setComets(prev => [...prev, { id, style }]);
            
            // Wait for 5 seconds before removing from DOM
            setTimeout(() => {
                setComets(prev => prev.filter(c => c.id !== id));
            }, 5000); 
        }
    }, 2000); // New comet every 2 seconds

// ...

    return () => {
        window.removeEventListener("wheel", handleScroll);
        clearInterval(cometInterval);
    };
  }, []);

  const radius = 220; 

  return (
    <div className={styles.metaContainer}>
        <div className={styles.starField}>
            {stars.map(s => (
                <div key={s.id} className={styles.tinyStar} style={{left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, opacity: s.op}} />
            ))}
        </div>

        {/* Render multiple comets */}
        {comets.map(c => (
            <div key={c.id} className={styles.cometStreak} style={c.style} />
        ))}

      <div className={`${styles.metaContent} ${warp ? styles.metaWarp : ""}`}>
        <div className={styles.aiCore} onClick={() => setWarp(!warp)}>
          <div className={styles.aiInner}><div className={styles.corePulse}></div></div>
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
                boxShadow: `0 0 20px ${n.color}44`,
                border: `1px solid ${n.color}66`,
                left: '50%',
                top: '50%',
              }}
            >
              <div className={styles.nodeIcon} style={{ color: n.color }}>
                <i className={n.icon}></i>
              </div>
              <div className={styles.nodeText} style={{color: n.color}}>{n.name}</div>
              <div className={styles.miniOrbit} style={{borderColor: n.color}}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Worldgalaxy;