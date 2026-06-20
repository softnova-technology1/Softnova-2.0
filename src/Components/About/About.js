import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import styles from "../../Styles/StickySlide.module.css";
import { Container } from "react-bootstrap";
import AboutPage from "./Aboutcard";
import Stats from "./AboutApproach";
import AboutHero from "./AboutHero";

const cardData = [
  {
    id: 1,
    title: "Our Mission",
    subtitle: "What Drives Us",
    desc: "Our mission is to empower businesses with innovative, tailored solutions that fuel growth and long-term success. We are committed to excellence, delivering high-quality services with integrity and a client-first mindset to build lasting relationships and create meaningful impact.",
  },
  {
    id: 2,
    title: "Our Vision",
    subtitle: "The Force Behind Our Work",
    desc: "Our mission is to become a global leader in innovative digital solutions that drive sustainable business growth. We strive to set industry standards through cutting-edge technology, forward-thinking strategies, and trusted partnerships—empowering businesses to thrive and create lasting, positive impact for clients, employees, and communities.",
  },
  {
    id: 3,
    title: "Our Execution Strategy",
    subtitle: "How We Execute",
    desc: "Our mission is to become a global leader in innovative digital solutions that drive sustainable business growth. We strive to set industry standards through cutting-edge technology, forward-thinking strategies, and trusted partnerships—empowering businesses to thrive and create lasting, positive impact for clients, employees, and communities.",
  },
  {
    id: 4,
    title: "Our Goals",
    subtitle: "What We Aim For",
    desc: "Our goal is to deliver exceptional service through our website, building a strong reputation as a trusted digital partner. By consistently delivering high-quality solutions and continuously evolving to meet industry standards and customer expectations, we aim to drive sustainable, long-term growth.",
  },
];

const About = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.active);
          }
        });
      },
      { threshold: 0.4 },
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <Container fluid className={styles.aboutPageContainer}>
      <AboutHero />
      <div className={styles.bg} />
      <div className={styles.pageWrapper}>
        <div className={styles.stackContainer}>
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className={styles.cardItem}
              style={{
                top: `calc(10vh + ${index * 0}px)`,
                zIndex: index,
              }}
            >
              <div
                ref={(el) => (revealRefs.current[index] = el)}
                className={styles.cardInner}
              >
                <h1 className={styles.cardTitle}>{card.title}</h1>
                <h3 className={styles.cardSubtitle}>{card.subtitle}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AboutPage />
      <Stats />
    </Container>
  );
};

export default About;
