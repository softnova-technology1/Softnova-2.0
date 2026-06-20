import { motion } from "framer-motion";
import React from "react";
import styles from "../../Styles/Whychoose.module.css";
import { Brain, Rocket, Handshake, Sparkles } from "lucide-react";
import office from "../../images/elegance_exec.webp";

export default function WhyChooseSoftNova() {
  const features = [
    {
      title: "TAILORED DIGITAL SOLUTIONS",
      desc: "Personalized strategies and Digital platforms designed to match your business objectives.",
      icon: Brain,
    },
    {
      title: "SCALABLE & FUTURE-READY",
      desc: "Flexible solutions built to evolve with your business growth.",
      icon: Rocket,
    },
    {
      title: "CLIENT-CENTRIC APPROACH",
      desc: "We collaborate closely with you to achieve meaningful, measurable results.",
      icon: Handshake,
    },
    {
      title: "TECHNICAL & CREATIVE EXPERTISE",
      desc: "Combining deep technical knowledge with artistic vision to build unique digital experiences.",
      icon: Sparkles,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageSlide = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const FeatureCard = ({ item }) => {
    return (
      <motion.div
        className={styles.card}
        variants={fadeInUp}
        whileHover={{
          scale: 1.03,
          y: -5
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.iconWrapper}>
          <item.icon className={styles.cardIcon} size={22} />
        </div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </motion.div>
    );
  };

  return (
    <section className={styles.wrapper}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <motion.div variants={fadeInUp} className={styles.header}>
          <h2 className={styles.heading}>WHY CHOOSE SOFTNOVA?</h2>
          <div className={styles.description}>
            <p>
              At Softnova, we deliver tailored digital solutions that help your
              brand stand out. From custom websites and e-commerce platforms to
              lead generation and digital marketing, our client-centric,
              end-to-end services—web, mobile, and SEO—are designed to drive
              growth and success in a competitive digital landscape.
            </p>
          </div>
        </motion.div>

        <div className={styles.content}>
          <motion.div className={styles.cards} variants={containerVariants}>
            <motion.div className={styles.colLeft} variants={containerVariants}>
              <FeatureCard item={features[0]} />
              <FeatureCard item={features[2]} />
            </motion.div>
            <motion.div className={styles.colRight} variants={containerVariants}>
              <FeatureCard item={features[1]} />
              <FeatureCard item={features[3]} />
            </motion.div>
          </motion.div>

          <motion.div className={styles.imageBox} variants={imageSlide}>
            <div className={styles.imageWrapper}>
              <img loading="lazy" src={office} alt="Why Choose Softnova" />
              <div className={styles.imageOverlay}>
                <h3 className={styles.overlayText}>Elegance in Execution</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

