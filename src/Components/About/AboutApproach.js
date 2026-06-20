import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Approach.module.css";
import {
  FaProjectDiagram,
  FaUsers,
  FaSmile,
  FaBriefcase,
  FaShareAlt,
  FaGlobe,
  FaCode,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import img1 from "../../images/About-Images/about1.jpg";
import img2 from "../../images/About-Images/about4.jpg";
import img3 from "../../images/About-Images/about3.jpg";
import img4 from "../../images/About-Images/about2.jpg";

const statsData = [
  {icon: <FaProjectDiagram />, value: 70, suffix: "+", label: "Successful Projects"},
  { icon: <FaUsers />, value: 20, suffix: "+", label: "Experts" },
  { icon: <FaSmile />, value: 97, suffix: "%", label: "Happy Clients" },
  { icon: <FaBriefcase />, value: 2, suffix: "+", label: "Year Of Experience" },
];

const steps = [
  { id: 1, title: "Assess Infrastructure", pos: "top-left" },
  { id: 2, title: "Define Strategic Goals", pos: "top-right" },
  { id: 3, title: "Modern Technologies", pos: "right" },
  { id: 4, title: "Scalable IT Strategy", pos: "bottom-right" },
  { id: 5, title: "Change Management", pos: "bottom-left" },
  { id: 6, title: "Optimize Performance", pos: "left" },
];

const serviceCards = [
  {
    title: "Social Media",
    subtitle: "Marketing & Growth",
    badge: "Top Rated",
    icon: <FaShareAlt />,
    img: img1
  },
  {
    title: "Global Network",
    subtitle: "Secure Cloud",
    badge: "Enterprise",
    icon: <FaGlobe />,
    img: img2
  },
  {
    title: "Web Development",
    subtitle: "Web Application",
    badge: "Scalable",
    icon: <FaCode />,
    img: img3
  },
  {
    title: "Digital Marketing",
    subtitle: "Brand Visibility",
    badge: "Strategic",
    icon: <FaChartLine />,
    img: img4
  }
];
const Counter = ({ value, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    setCount(0);
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentValue = Math.floor(progress * value);
      setCount(currentValue);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value, start]);

  return (
    <h3 className={styles.number}>
      {count}
      {suffix}
    </h3>
  );
};

const StarSvg = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 784.11 815.53"
    className={className}
  >
    <path
      className={styles.fil0}
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
      207.96,29.37 371.12,197.68 392.05,407.74
      20.93,-210.06 184.09,-378.37 392.05,-407.74
      -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
    />
  </svg>
);

const Stats = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive mobile width listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Release locks if tab visibility changes
  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden) {
        setIsTransitioning(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Re-enable transition and release click lock after an invisible jump resets it (guaranteeing jump repaint completes first)
  useEffect(() => {
    if (!transitionEnabled) {
      let frameId1, frameId2;
      frameId1 = requestAnimationFrame(() => {
        frameId2 = requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setIsTransitioning(false);
        });
      });
      return () => {
        cancelAnimationFrame(frameId1);
        cancelAnimationFrame(frameId2);
      };
    }
  }, [transitionEnabled]);

  // Auto cycle cards every 5 seconds, resetting interval when currentIndex changes
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (document.hidden) return;
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleAnimationComplete = () => {
    if (currentIndex >= serviceCards.length + 2) {
      setTransitionEnabled(false);
      setCurrentIndex(2);
    } else if (currentIndex <= 1) {
      setTransitionEnabled(false);
      setCurrentIndex(serviceCards.length + 1);
    } else {
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStartCount(entry.isIntersecting),
      { threshold: 0.4 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.mainTitle}>
          Our Systematic Approach to <br />
          <span className={styles.highlight}>Organizational Changes</span>
        </h1>

        <div className={styles.networkContainer}>
          <svg className={styles.svgLines} viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Trace Paths (static backgrounds) */}
            <path d="M 50 50 Q 32.5 40, 20 20" className={styles.traceLine} />
            <path d="M 50 50 Q 67.5 40, 80 20" className={styles.traceLine} />
            <path d="M 50 50 Q 67.5 40, 85 50" className={styles.traceLine} />
            <path d="M 50 50 Q 67.5 60, 80 80" className={styles.traceLine} />
            <path d="M 50 50 Q 32.5 60, 20 80" className={styles.traceLine} />
            <path d="M 50 50 Q 32.5 60, 15 50" className={styles.traceLine} />

            {/* Glowing Pulse Paths (animated overlays) */}
            <path d="M 50 50 Q 32.5 40, 20 20" className={styles.pulseLine} />
            <path d="M 50 50 Q 67.5 40, 80 20" className={styles.pulseLine} />
            <path d="M 50 50 Q 67.5 40, 85 50" className={styles.pulseLine} />
            <path d="M 50 50 Q 67.5 60, 80 80" className={styles.pulseLine} />
            <path d="M 50 50 Q 32.5 60, 20 80" className={styles.pulseLine} />
            <path d="M 50 50 Q 32.5 60, 15 50" className={styles.pulseLine} />
          </svg>
          <div className={styles.coreNode}>
            <div className={styles.coreOuterRing1}></div>
            <div className={styles.coreOuterRing2}></div>
            <div className={styles.coreInner}>
              <span className={styles.brand}>SOFTNOVA</span>
              <div className={styles.pulse}></div>
            </div>
          </div>
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              className={`${styles.node} ${styles[step.pos]}`}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.nodeCard}>
                <span className={styles.stepNumber}>0{step.id}</span>
                <div className={styles.nodeContent}>
                  <p className={styles.stepTitle}>{step.title}</p>
                  <span className={styles.stepLabel}>Step 0{step.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.section
        ref={sectionRef}
        className={styles.statsSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.heading}>
          Established Experience & Consistent Results
        </h2>

        <div className={styles.statsRow}>
          {statsData.map((item, i) => (
            <motion.div
              key={i}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <Counter
                value={item.value}
                suffix={item.suffix}
                start={startCount}
              />
              <p className={styles.label}>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

     
        <motion.section
          className={styles.productSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.content}>
            <h2>OUR PRODUCT & SERVICE</h2>
            <p>
              We provide both premium products and exceptional
              services, ensuring that our customers not only receive
              high-quality items but also ongoing support and expertise.
            </p>

            <motion.button
              className={styles.starButton}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.btnText}>Connect With Us</span>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`${styles.star} ${styles[`star${i + 1}`]}`}
                >
                  <StarSvg />
                </div>
              ))}
            </motion.button>
          </div>

          <div className={styles.sliderWrapper}>
            <div className={styles.sliderWindow}>
              <motion.div
                className={styles.sliderTrack}
                animate={{ x: -currentIndex * (isMobile ? 280 + 16 : 210 + 20) }}
                transition={transitionEnabled ? { ease: [0.25, 1, 0.5, 1], duration: 0.6 } : { ease: "linear", duration: 0 }}
                onAnimationComplete={handleAnimationComplete}
              >
                {[serviceCards[2], serviceCards[3], ...serviceCards, serviceCards[0], serviceCards[1], serviceCards[2]].map((card, index) => {
                  const activeIdx = (currentIndex - 2 + serviceCards.length) % serviceCards.length;
                  const isCardActive = activeIdx === (index - 2 + serviceCards.length) % serviceCards.length;
                  return (
                    <div
                      key={index}
                      className={`${styles.sliderCard} ${isCardActive ? styles.activeCard : ""}`}
                    >
                      <img loading="lazy" className={styles.sliderCardImg} src={card.img} alt={card.title} />
                      <div className={styles.sliderCardOverlay}></div>
                      <div className={styles.sliderCardContent}>
                        <h3 className={styles.sliderCardTitle}>{card.title}</h3>
                        <span className={styles.sliderCardCategory}>{card.subtitle}</span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
            
            <div className={styles.sliderControls}>
              <span className={styles.sliderCounter}>
                0{((currentIndex - 2 + serviceCards.length) % serviceCards.length) + 1} &nbsp;/&nbsp; 0{serviceCards.length}
              </span>
              <div className={styles.sliderArrows}>
                <button
                  className={styles.sliderArrowBtn}
                  onClick={handlePrev}
                  aria-label="Previous service"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className={styles.sliderArrowBtn}
                  onClick={handleNext}
                  aria-label="Next service"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      
    </>
  );
};

export default Stats;
