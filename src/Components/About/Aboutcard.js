import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../Styles/Aboutcard.module.css";
import img1 from "../../images/About-Images/card1.webp";
import img2 from "../../images/About-Images/card2.webp";
import img3 from "../../images/About-Images/card3.webp";
import img4 from "../../images/About-Images/card4.webp";
import img5 from "../../images/About-Images/card5.webp";
import img6 from "../../images/About-Images/card6.webp";
import img7 from "../../images/About-Images/card7.webp";
import img8 from "../../images/About-Images/card8.webp";
import img9 from "../../images/About-Images/card9.webp";
import img10 from "../../images/About-Images/card10.webp";
import img11 from "../../images/About-Images/card11.webp";
import img12 from "../../images/About-Images/card12.webp";
import img13 from "../../images/About-Images/card13.webp";
import img14 from "../../images/About-Images/card14.webp";
import img15 from "../../images/About-Images/card15.webp";
import img16 from "../../images/About-Images/card16.webp";
import img17 from "../../images/About-Images/card17.webp";
import img18 from "../../images/About-Images/card18.webp";
import img19 from "../../images/About-Images/card19.webp";
import img20 from "../../images/About-Images/card20.webp";
import img21 from "../../images/About-Images/card21.webp";
import img22 from "../../images/About-Images/card22.webp";
import img23 from "../../images/About-Images/card23.webp";
import img24 from "../../images/About-Images/card24.webp";

const tabs = ["Who we are", "Why choose", "What we do", "Who we work with"];

const data = {
  "Who we are": [
    {
      title: "Visionary Innovators",
      img: img1,
      desc: "We challenge limits and craft intelligent, scalable digital solutions that shape the future.",
    },
    {
      title: "Solution Architects",
      img: img2,
      desc: "We transform complex business problems into simple, efficient, and effective digital answers.",
    },
    {
      title: "Team Collaboration",
      img: img3,
      desc: "We believe strong teamwork drives stronger innovation and successful outcomes.",
    },
    {
      title: "Excellence Driven",
      img: img4,
      desc: "We maintain high standards in every project with a commitment to quality and precision.",
    },
    {
      title: "Continuous Learners",
      img: img5,
      desc: "We constantly evolve by learning new technologies and adapting to industry trends.",
    },
    {
      title: "Creative Innovators",
      img: img6,
      desc: "We turn ideas into impactful digital experiences that create real value.",
    },
  ],

  "Why choose": [
    {
      title: "Reliable Technology Partner",
      img: img7,
      desc: "We build long-term partnerships based on trust, transparency, and consistent performance.",
    },
    {
      title: "Client-Centric Approach",
      img: img8,
      desc: "Every solution is designed with a strong focus on client goals and business success.",
    },
    {
      title: "Agile Development Team",
      img: img9,
      desc: "We deliver fast, flexible, and adaptive solutions to meet evolving business needs.",
    },
    {
      title: "Uncompromised Quality",
      img: img10,
      desc: "We ensure every deliverable meets the highest standards of performance and reliability.",
    },
    {
      title: "Innovation First Mindset",
      img: img11,
      desc: "We embrace innovation to build modern, future-ready digital solutions.",
    },
    {
      title: "Proven Performance",
      img: img12,
      desc: "Our track record demonstrates consistent success and measurable business impact.",
    },
  ],

  "What we do": [
    {
      title: "Web Application Development",
      img: img13,
      desc: "We build responsive, scalable, and high-performance web applications tailored to business needs.",
    },
    {
      title: "UI/UX Experience Design",
      img: img14,
      desc: "We design intuitive and engaging user experiences that enhance customer satisfaction.",
    },
    {
      title: "Mobile App Development",
      img: img15,
      desc: "We create fast, secure, and feature-rich mobile applications for all platforms.",
    },
    {
      title: "Cloud Solutions",
      img: img16,
      desc: "We deliver secure, scalable, and efficient cloud infrastructure for modern businesses.",
    },
    {
      title: "Digital Strategy Consulting",
      img: img17,
      desc: "We help businesses grow with data-driven digital transformation strategies.",
    },
    {
      title: "Maintenance & Support",
      img: img18,
      desc: "We provide reliable ongoing support to ensure smooth system performance and uptime.",
    },
  ],

  "Who we work with": [
    {
      title: "Emerging Startups",
      img: img19,
      desc: "We help startups scale quickly with innovative and cost-effective digital solutions.",
    },
    {
      title: "Enterprise Businesses",
      img: img20,
      desc: "We deliver robust enterprise-grade systems built for scale and security.",
    },
    {
      title: "Creative Agencies",
      img: img21,
      desc: "We collaborate with agencies to deliver impactful digital experiences.",
    },
    {
      title: "Product Development Teams",
      img: img22,
      desc: "We support teams in building scalable, user-focused digital products.",
    },
    {
      title: "Innovation Leaders",
      img: img23,
      desc: "We work with innovators who are shaping the future of technology.",
    },
    {
      title: "Global Enterprises",
      img: img24,
      desc: "We serve clients worldwide across diverse industries and markets.",
    },
  ],
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("Who we are");
  const [clickedCard, setClickedCard] = useState(null);

  const handleCardClick = (e, title) => {
    e.stopPropagation();
    setClickedCard((prev) => (prev === title ? null : title));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.4 } },
  };

  return (
    <section className={styles.section}>
      <div className={styles.tabs}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tab} ${isActive ? styles.active : ""}`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBubble"
                  className={styles.activeBubble}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={styles.tabText}>{tab}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.tabContent}>
        <p>
          At Softnova, we partner with leading brands to create visually
          compelling, high-performance websites that are both functional and
          user-focused. By blending creative design with advanced technology, we
          deliver responsive digital experiences across all devices—enhancing
          engagement, optimizing performance, and bringing our clients’ vision
          to life in a digital-first world.
        </p>
      </div>

      <div className={styles.grid}>
        <AnimatePresence mode="wait">
          {data[activeTab].map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.wrapper}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: i * 0.1 }}
            >
              <article
                className={`${styles.card} ${clickedCard === item.title ? styles.clicked : ""}`}
                onClick={() => handleCardClick(item.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCardClick(item.title);
                  }
                }}
              >
                <header className={styles.cardThumb}>
                  <img loading="lazy" src={item.img} alt={item.title} />
                </header>
                <div className={styles.overlay}>
                  <h3 className={styles.titleWithTooltip}>
                    {item.title}
                    <span className={styles.tooltip}>{item.desc}</span>
                  </h3>
                </div>
              </article>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutPage;
