import React, { useEffect, useState } from "react";
import styles from "../../Styles/Galaxy.module.css";
import logo from ".././images/sn.png";

const orbits = [
  {
    a: 250,
    b: 120,
    planets: [
      { name: "VSCode", icon: "devicon-vscode-plain", minSpeed: 0.001, maxSpeed: 0.0013, color: "#df461f" },
      { name: "Figma", icon: "devicon-figma-plain", minSpeed: 0.0011, maxSpeed: 0.0015, color: "#0030ef" },
    ],
  },
  {
    a: 330,
    b: 160,
    planets: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", minSpeed: 0.0009, maxSpeed: 0.0012, color: "#058ae3" },
      { name: "Vue", icon: "devicon-vuejs-plain", minSpeed: 0.0006, maxSpeed: 0.0009, color: "#b89a41" },
    ],
  },
  {
    a: 390,
    b: 200,
    planets: [
      { name: "Python", icon: "devicon-python-plain", minSpeed: 0.0028, maxSpeed: 0.0032, color: "#267abe" },
      { name: "GitHub", icon: "devicon-github-original", minSpeed: 0.0025, maxSpeed: 0.0028, color: "#0f6544" },
    ],
  },
];

const NUM_STARS = 150;

const Galaxy = () => {
  const allPlanets = orbits.flatMap(o => o.planets);
  const planetSpeeds = allPlanets.map(
    p => p.minSpeed + Math.random() * (p.maxSpeed - p.minSpeed)
  );

  const [angles, setAngles] = useState(
    allPlanets.map(() => Math.random() * Math.PI * 2)
  );

  const [center, setCenter] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [stars] = useState(
    Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.7 + 0.3,
    }))
  );

  useEffect(() => {
    const resize = () =>
      setCenter({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngles(prev => prev.map((a, i) => a + planetSpeeds[i]));
    }, 16);
    return () => clearInterval(interval);
  }, [planetSpeeds]);

  let planetCounter = 0;

  return (
    <div className={styles.galaxyContainer}>
      {stars.map((s, i) => (
        <div
          key={i}
          className={styles.star}
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      <img src={logo} alt="logo" className={styles.galaxyLogo} />

      {orbits.map((orbit, i) => (
        <React.Fragment key={i}>
          <div
            className={styles.orbitLine}
            style={{
              width: orbit.a * 2,
              height: orbit.b * 2,
              left: center.x - orbit.a,
              top: center.y - orbit.b,
            }}
          />

          {orbit.planets.map((p, j) => {
            const angle = angles[planetCounter];
            const x = center.x + orbit.a * Math.cos(angle) - 20;
            const y = center.y + orbit.b * Math.sin(angle) - 20;
            planetCounter++;

            return (
              <div
                key={j}
                className={styles.planet}
                title={p.name}
                style={{
                  left: x,
                  top: y,
                  background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
                  boxShadow: `0 0 20px ${p.color}`,
                }}
              >
                <i className={p.icon}></i>
                <div className={styles.trail} />
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Galaxy;
