import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../Styles/Aboutcard.module.css";
import img1 from '../../images/About-Images/card1.webp';
import img2 from '../../images/About-Images/card2.webp';
import img3 from '../../images/About-Images/card3.webp';
import img4 from '../../images/About-Images/card4.webp';
import img5 from '../../images/About-Images/card5.webp';
import img6 from '../../images/About-Images/card6.webp';
import img7 from '../../images/About-Images/card7.webp';
import img8 from '../../images/About-Images/card8.webp';
import img9 from '../../images/About-Images/card9.webp';
import img10 from '../../images/About-Images/card10.webp';
import img11 from '../../images/About-Images/card11.webp';
import img12 from '../../images/About-Images/card12.webp';
import img13 from '../../images/About-Images/card13.webp';
import img14 from '../../images/About-Images/card14.webp';
import img15 from '../../images/About-Images/card15.webp';
import img16 from '../../images/About-Images/card16.webp';
import img17 from '../../images/About-Images/card17.webp';
import img18 from '../../images/About-Images/card18.webp';
import img19 from '../../images/About-Images/card19.webp';
import img20 from '../../images/About-Images/card20.webp';
import img21 from '../../images/About-Images/card21.webp';
import img22 from '../../images/About-Images/card22.webp';
import img23 from '../../images/About-Images/card23.webp';
import img24 from '../../images/About-Images/card24.webp';



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
      img: img2,
      desc: "We convert complex challenges into simple answers.",
    },
    {
      title: "Collaborative Spirit",
      img: img3,
      desc: "Teamwork is our strongest weapon.",
    },
    {
      title: "Driven by Excellence",
      img: img4,
      desc: "Quality and perfection guide our work.",
    },
    {
      title: "Passionate Learners",
      img: img5,
      desc: "We evolve with continuous learning.",
    },
    {
      title: "Empowered Innovators",
      img: img6,
      desc: "Ideas are empowered to make impact.",
    },
  ],

  "Why choose": [
    {
      title: "Trusted Partner",
      img: img7,
      desc: "We build long-term trusted relationships.",
    },
    {
      title: "Client First",
      img: img8,
      desc: "Client success is our priority.",
    },
    {
      title: "Agile Team",
      img: img9   ,
      desc: "Fast, flexible, and future-ready.",
    },
    {
      title: "Quality Focus",
      img: img10,
      desc: "Quality without compromise.",
    },
    {
      title: "Innovation Driven",
      img: img11,
      desc: "Innovation powers every solution.",
    },
    {
      title: "Proven Results",
      img: img12,
      desc: "Results that speak for themselves.",
    },
  ],

  "What we do": [
    {
      title: "Web Development",
      img: img13,
      desc: "Modern & scalable web apps.",
    },
    {
      title: "UI / UX Design",
      img: img14,
      desc: "User-focused digital experiences.",
    },
    {
      title: "Mobile Apps",
      img: img15,
      desc: "High-performance mobile solutions.",
    },
    {
      title: "Cloud Services",
      img:img16,
      desc: "Secure & scalable cloud systems.",
    },
    {
      title: "Digital Strategy",
      img:img17,
      desc: "Growth-oriented strategies.",
    },
    {
      title: "Maintenance",
      img: img18,
      desc: "Reliable long-term support.",
    },
  ],

  "Who we work with": [
    {
      title: "Startups",
      img: img19,
      desc: "Helping startups scale faster.",
    },
    {
      title: "Enterprises",
      img:img20,
      desc: "Enterprise-grade solutions.",
    },
    {
      title: "Agencies",
      img: img21,
      desc: "Strong agency partnerships.",
    },
    {
      title: "Product Teams",
      img:img22,
      desc: "Building scalable products.",
    },
    {
      title: "Innovators",
      img: img23,
      desc: "Supporting innovation worldwide.",
    },
    {
      title: "Global Clients",
      img: img24,
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
