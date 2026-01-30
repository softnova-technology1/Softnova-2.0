import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../Styles/Aboutcard.module.css";
import img1 from '../images/About-Images/pro4.png';

const tabs = ["Who we are", "Why choose", "What we do", "Who we work with"];

const data = {
  "Who we are": [
    {
      title: "Innovative Thinkers",
      img: img1,
      desc: "We push boundaries to build smart, scalable solutions.",
    },
    {
      title: "Problem Solvers",
      img: img1,
      desc: "We convert complex challenges into simple answers.",
    },
    {
      title: "Collaborative Spirit",
      img: img1,
      desc: "Teamwork is our strongest weapon.",
    },
    {
      title: "Driven by Excellence",
      img: img1,
      desc: "Quality and perfection guide our work.",
    },
    {
      title: "Passionate Learners",
      img: img1,
      desc: "We evolve with continuous learning.",
    },
    {
      title: "Empowered Innovators",
      img: img1,
      desc: "Ideas are empowered to make impact.",
    },
  ],

  "Why choose": [
    {
      title: "Trusted Partner",
      img: img1,
      desc: "We build long-term trusted relationships.",
    },
    {
      title: "Client First",
      img: img1,
      desc: "Client success is our priority.",
    },
    {
      title: "Agile Team",
      img: img1,
      desc: "Fast, flexible, and future-ready.",
    },
    {
      title: "Quality Focus",
      img: img1,
      desc: "Quality without compromise.",
    },
    {
      title: "Innovation Driven",
      img: img1,
      desc: "Innovation powers every solution.",
    },
    {
      title: "Proven Results",
      img: img1,
      desc: "Results that speak for themselves.",
    },
  ],

  "What we do": [
    {
      title: "Web Development",
      img: img1,
      desc: "Modern & scalable web apps.",
    },
    {
      title: "UI / UX Design",
      img: img1,
      desc: "User-focused digital experiences.",
    },
    {
      title: "Mobile Apps",
      img: img1,
      desc: "High-performance mobile solutions.",
    },
    {
      title: "Cloud Services",
      img:img1,
      desc: "Secure & scalable cloud systems.",
    },
    {
      title: "Digital Strategy",
      img:img1,
      desc: "Growth-oriented strategies.",
    },
    {
      title: "Maintenance",
      img: img1,
      desc: "Reliable long-term support.",
    },
  ],

  "Who we work with": [
    {
      title: "Startups",
      img: img1,
      desc: "Helping startups scale faster.",
    },
    {
      title: "Enterprises",
      img:img1,
      desc: "Enterprise-grade solutions.",
    },
    {
      title: "Agencies",
      img: img1,
      desc: "Strong agency partnerships.",
    },
    {
      title: "Product Teams",
      img:img1,
      desc: "Building scalable products.",
    },
    {
      title: "Innovators",
      img: img1,
      desc: "Supporting innovation worldwide.",
    },
    {
      title: "Global Clients",
      img: img1,
      desc: "Working across industries.",
    },
  ],
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("Who we are");

  
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
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        <p>
          At Softnova, we collaborate with leading brands and companies to design
          and develop websites that are not only visually stunning but also highly
          functional and user-friendly. Our team combines creative design with
          advanced technology to build responsive websites that provide an
          exceptional experience across all devices. Whether it’s enhancing user
          engagement, improving performance, or ensuring seamless functionality,
          we work closely with our partners to bring their vision to life and help
          them stand out in a digital-first world.
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
              <article className={styles.card}>
                <header className={styles.cardThumb}>
                  <img src={item.img} alt={item.title} />
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
