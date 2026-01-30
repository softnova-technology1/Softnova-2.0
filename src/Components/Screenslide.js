import styles from "../Styles/Screenslide.module.css";
import { useState } from "react";
import AboutPage from "./Aboutcard";
import Stats from "./AboutApproach";
import {  useEffect, useRef } from "react";

const slides = [
  {
    title: "Our Mission",
    subtitle: "What Drives Us",
    desc: "Our mission is to empower clients with innovative, tailored solutions that drive growth and long-term success. We commit to excellence, providing high-quality services while building lasting customer relationships. With dedication, integrity, and a client-first approach, we aim to make a meaningful impact and help businesses thrive.",
  },
  {
    title: "Our Vision",
    subtitle: "Where We’re Headed",
    desc: "Our vision is to be a global leader in delivering innovative solutions that drive sustainable business growth. We aim to set industry standards through cutting-edge technologies, forward-thinking strategies, and trusted partnerships. we empower businesses to thrive and create lasting, positive impacts on clients, employees, and communities.",
  },
  {
    title: "Our Plan",
    subtitle: "How We Execute",
    desc: "Our plan is to enhance site speed for faster load times, improving user experience and search engine rankings. We'll also focus on a clear, organized structure to help users easily find what they need, boosting satisfaction, engagement, and traffic.",
  },
  {
    title: "Our Goals",
    subtitle: "What We Aim For",
    desc: "Our goal is to deliver top-notch service through the website, establishing a strong reputation as a trusted provider.Offering quality work. They driving long-term growth while enhancing our offerings to meet industry standards and customer expectations.",
  },
];

export default function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const dragStartX = useRef(0);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // Automatic Movement (Every 5 seconds)
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [index]);

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    const dragEndX = e.clientX;
    const difference = dragStartX.current - dragEndX;

    if (difference > 50) next(); // Swiped Left
    if (difference < -50) prev(); // Swiped Right
  };

  return (
     <>
    <section
      className={styles.carousel}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        "--scene": index + 1,
        "--total": total,
        "--percentage": (index + 1) / total,
        cursor: "grab",
        userSelect: "none" // Content drag pannum pothu text select aagama iruka
      }}
    >
      <div className={styles.bg} />

      {/* MASKED TEXT */}
      <h1 className={styles.maskedText}>SOFTNOVA</h1>

      {/* CONTENT */}
      <div className={styles.content}>
        <span className={styles.subtitle}>{slides[index].subtitle}</span>
        <h2 className={styles.title}>{slides[index].title}</h2>
        <p className={styles.desc}>{slides[index].desc}</p>
      </div>

      {/* COUNTER */}
      <div className={styles.counter}>
        <span>0{index + 1}</span>
        <small>/0{total}</small>
      </div>

      {/* NAV (Hidden but logic remains) */}
      <div className={styles.nav} style={{ display: 'none' }}>
        <button onClick={prev}>‹ Prev</button>
        <button onClick={next}>Next ›</button>
      </div>
    </section>
    <AboutPage/>
    <Stats/>
   </>
  );
}